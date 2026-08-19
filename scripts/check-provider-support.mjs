#!/usr/bin/env node
// 블로그가 rclone/RcloneView 가 지원하지 않는 스토리지 서비스를 다루거나
// 언급하지 않는지 검사한다. 지원 목록의 근거는 RCLONEVIEW_FEATURE_SPEC.md
// Section 10 (BLOG_FACTCHECK_GUIDELINE.md Section 1.7 참조).
//
// 재발 방지 장치: 블로그 봇이 rclone 백엔드가 없는 TeraBox 를 "provider
// 목록에서 선택 + OAuth" 라는 날조된 절차로 소개해 포럼 컴플레인이 발생한
// 2026-08 사건. Hubic(백엔드 제거·서비스 종료), Icedrive(WebDAV 폐지 중)도
// 같은 유형이었다. prebuild 로 실행되어 발견 시 빌드를 중단한다.
//
// 검사 대상: blog/ 원문 + i18n/*/docusaurus-plugin-content-blog/ 로케일 사본
// 새 미지원 서비스가 유행하면 BLACKLIST 에 추가할 것. 반대로 rclone 이
// 백엔드를 추가해 Feature Spec Section 10 에 오르면 여기서 제거할 것.
import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');

// 서비스명 → 검출 정규식 (단어 경계 필수: "filen" 이 "filename" 에 걸리지 않게)
const BLACKLIST = [
  ['TeraBox',        /\bterabox\b/i],
  ['Baidu Netdisk',  /\bbaidu\b/i],
  ['MediaFire',      /\bmediafire\b/i],
  ['Degoo',          /\bdegoo\b/i],
  ['Sync.com',       /\bsync\.com\b/i],
  ['Tresorit',       /\btresorit\b/i],
  ['Internxt',       /\binternxt\b/i],
  ['Filen',          /\bfilen\b(?!\w)/i],
  ['Icedrive',       /\bicedrive\b/i],   // rclone 백엔드 없음, WebDAV 도 2026-04 부터 폐지 중
  ['Hubic',          /\bhubic\b/i],      // rclone 백엔드 제거 + 서비스 종료
  ['NordLocker',     /\bnordlocker\b/i],
  ['Amazon Drive',   /\bamazon\s+(cloud\s+)?drive\b/i], // 2023 종료
  ['Zippyshare',     /\bzippyshare\b/i], // 2023 종료
];

const BLOG_DIRS = [path.join(ROOT, 'blog')];
for (const locale of fs.existsSync(path.join(ROOT, 'i18n')) ? fs.readdirSync(path.join(ROOT, 'i18n')) : []) {
  const d = path.join(ROOT, 'i18n', locale, 'docusaurus-plugin-content-blog');
  if (fs.existsSync(d)) BLOG_DIRS.push(d);
}

const hits = [];
for (const dir of BLOG_DIRS) {
  for (const name of fs.readdirSync(dir)) {
    if (!name.endsWith('.md') && !name.endsWith('.mdx')) continue;
    const file = path.join(dir, name);
    const lines = fs.readFileSync(file, 'utf8').split('\n');
    lines.forEach((line, i) => {
      for (const [service, re] of BLACKLIST) {
        if (re.test(line)) {
          hits.push({ file: path.relative(ROOT, file), line: i + 1, service, text: line.trim().slice(0, 100) });
        }
      }
    });
  }
}

if (hits.length === 0) {
  console.log(`✔ 미지원 스토리지 언급 0건 (블랙리스트 ${BLACKLIST.length}개 서비스, ${BLOG_DIRS.length}개 디렉토리 검사)`);
  process.exit(0);
}

console.error(`✘ 미지원 스토리지 서비스 언급 ${hits.length}건 — 블로그는 Feature Spec Section 10 의 서비스만 다룰 수 있다 (BLOG_FACTCHECK_GUIDELINE.md §1.7)`);
for (const h of hits) {
  console.error(`  ${h.file}:${h.line} [${h.service}] ${h.text}`);
}
console.error('해당 글을 REMOVE 하거나 언급을 제거한 뒤 다시 빌드할 것.');
process.exit(1);
