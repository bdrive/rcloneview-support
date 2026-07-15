/**
 * postbuild — 로케일 빌드 폴더에서 "참조되지 않는" static 사본을 삭제한다.
 *
 * 배경: Docusaurus 는 static/ 폴더를 로케일 빌드마다 통째로 복사한다.
 * 그러나 콘텐츠는 이미지·영상을 루트 절대 경로(/support/images/...)로
 * 참조하므로, 로케일 폴더 안의 사본은 참조 0건인 죽은 파일이다
 * (전체 빌드 32,130개 HTML/CSS/JS 전수 검증, 2026-07-15).
 *
 * ⚠️ img/ 는 절대 지우지 말 것 — 로고 등이 useBaseUrl 경유
 *    로케일 경로(/support/ko/img/...)로 61,384건 참조된다.
 *
 * 실행: `npm run build` 후 npm postbuild 훅으로 자동 실행.
 *       (`npx docusaurus build` 직접 실행 시엔 돌지 않으니
 *        `node scripts/prune-locale-static.mjs` 를 수동 실행)
 */
import {existsSync, rmSync, statSync, readdirSync} from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const BUILD_DIR = path.join(root, 'build');
// 루트 경로로만 참조되는 것이 검증된 디렉터리만 (img/ 금지 — 위 주석 참조)
const PRUNE_DIRS = ['images', 'videos', 'icons'];

// 로케일 폴더 자동 감지: build/ 바로 아래에서 자체 404.html 을 가진
// 디렉터리 = 로케일 루트 (docusaurus.config 의존 없이 구조로 판별 —
// config 가 ESM 이라 require 불가하고, 로케일 추가에도 자동 대응)
function detectLocaleDirs() {
  return readdirSync(BUILD_DIR, {withFileTypes: true})
    .filter(
      (e) =>
        e.isDirectory() &&
        existsSync(path.join(BUILD_DIR, e.name, '404.html')),
    )
    .map((e) => e.name);
}

function dirSizeKB(p) {
  let total = 0;
  for (const entry of readdirSync(p, {withFileTypes: true})) {
    const fp = path.join(p, entry.name);
    total += entry.isDirectory() ? dirSizeKB(fp) : statSync(fp).size / 1024;
  }
  return total;
}

if (!existsSync(BUILD_DIR)) {
  console.error(`[prune-locale-static] build dir not found: ${BUILD_DIR}`);
  process.exit(0); // 빌드 없이 호출된 경우 조용히 통과
}

const targetLocales = detectLocaleDirs();
console.log(
  `[prune-locale-static] locale dirs detected: ${targetLocales.join(', ')}`,
);

let savedKB = 0;
let removed = 0;
for (const locale of targetLocales) {
  for (const dir of PRUNE_DIRS) {
    const target = path.join(BUILD_DIR, locale, dir);
    if (!existsSync(target)) continue;
    // 안전장치: 루트에 원본이 있을 때만 삭제 (루트가 없다면 구조가
    // 바뀐 것이므로 아무것도 지우지 않고 경고)
    if (!existsSync(path.join(BUILD_DIR, dir))) {
      console.warn(
        `[prune-locale-static] SKIP ${locale}/${dir} — root copy missing`,
      );
      continue;
    }
    savedKB += dirSizeKB(target);
    rmSync(target, {recursive: true});
    removed += 1;
  }
  // .DS_Store 등 부산물 정리
  const ds = path.join(BUILD_DIR, locale, '.DS_Store');
  if (existsSync(ds)) rmSync(ds);
}

console.log(
  `[prune-locale-static] removed ${removed} unreferenced locale static dirs ` +
    `(${(savedKB / 1024).toFixed(0)} MB) — kept img/ (locale-referenced)`,
);
