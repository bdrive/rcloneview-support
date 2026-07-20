#!/usr/bin/env node
// 콘텐츠가 참조하는 정적 자산(/images, /icons, /img, /videos)이 static/에
// 실재하는지 검사한다. 존재하지 않는 파일명을 지어내 쓰는 사고(블로그 봇이
// template.md 의 가짜 카탈로그를 보고 깨진 이미지를 발행한 2026-07 사건)의
// 재발 방지 장치. prebuild 로 실행되어 누락 발견 시 빌드를 중단한다.
//
// 검사 대상: blog/ howto/ tutorials/ release-notes/ 원문 + i18n/ 로케일 사본
// 경로 규칙: "/support/images/..." 와 "/images/..." 모두 static/images/... 로 해석
//            (baseUrl(/support)이 붙은 참조와 안 붙은 참조가 혼재)
import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const CONTENT_DIRS = ['blog', 'howto', 'tutorials', 'release-notes', 'i18n'];
// 룩비하인드: 도메인 뒤에 이어지는 경로(https://cdn.example.com/videos/...)는
// 외부 URL 예시이므로 자산 참조로 취급하지 않는다
const ASSET_RE = /(?<![A-Za-z0-9.-])(?:\/support)?(\/(?:images|icons|img|videos)\/[A-Za-z0-9 ._/-]+\.[A-Za-z0-9]{2,5})/g;
const CONTENT_EXT = new Set(['.md', '.mdx', '.js', '.jsx', '.json']);

function* walk(dir) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) yield* walk(p);
    else if (CONTENT_EXT.has(path.extname(e.name))) yield p;
  }
}

const refs = new Map(); // 자산 경로 → 참조하는 파일들
for (const dir of CONTENT_DIRS) {
  const abs = path.join(ROOT, dir);
  if (!fs.existsSync(abs)) continue;
  for (const file of walk(abs)) {
    const text = fs.readFileSync(file, 'utf8');
    for (const m of text.matchAll(ASSET_RE)) {
      const asset = m[1];
      if (!refs.has(asset)) refs.set(asset, new Set());
      refs.get(asset).add(path.relative(ROOT, file));
    }
  }
}

const missing = [];
for (const [asset, files] of refs) {
  if (!fs.existsSync(path.join(ROOT, 'static', asset))) {
    missing.push({ asset, files: [...files] });
  }
}

if (missing.length === 0) {
  console.log(`✔ 이미지 참조 검사 통과 — 고유 자산 ${refs.size}개 모두 static/ 에 존재`);
  process.exit(0);
}

console.error(`✘ static/ 에 없는 자산 참조 ${missing.length}건:\n`);
for (const { asset, files } of missing.sort((a, b) => a.asset.localeCompare(b.asset))) {
  console.error(`  ${asset}`);
  for (const f of files.slice(0, 5)) console.error(`    ← ${f}`);
  if (files.length > 5) console.error(`    ← 외 ${files.length - 5}개 파일`);
}
console.error(
  '\n원인 대부분: 실재하지 않는 파일명을 추측해 씀. blog/template.md 카탈로그와',
);
console.error('static/ 실제 파일 목록을 대조해 실재하는 경로로 바꿀 것.');
process.exit(1);
