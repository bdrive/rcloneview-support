#!/usr/bin/env node
// 블로그가 rclone/RcloneView 가 지원하지 않는 스토리지 서비스를 다루거나
// 언급하지 않는지, 그리고 지원은 되지만 "할 수 없는 일"을 약속하지 않는지 검사한다.
// 지원 목록의 근거는 bdrive/rcloneview-blog-automation 의 RCLONEVIEW_FEATURE_SPEC.md
// Section 10 (BLOG_FACTCHECK_GUIDELINE.md Section 1.7), 프로바이더별 제한은
// Section 19.5 (GUIDELINE Section 1.8) 참조.
//
// 재발 방지 장치 1 (2026-08): 블로그 봇이 rclone 백엔드가 없는 TeraBox 를 "provider
// 목록에서 선택 + OAuth" 라는 날조된 절차로 소개해 포럼 컴플레인이 발생했다.
// Hubic(백엔드 제거·서비스 종료), Icedrive(WebDAV 폐지 중)도 같은 유형이었다.
//
// 재발 방지 장치 2 (2026-10): Google Photos 는 2025-03-31 부터 API 가 "그 앱이 올린
// 항목"만 보여 준다. 그런데 글 8편이 Google Photos 리모트에서 기존 라이브러리 전체를
// NAS·OneDrive·B2 등으로 내려받으라고 안내해 6편 삭제·2편 재작성했다. 기존
// 라이브러리를 옮기거나 백업하는 slug 와 "entire Google Photos library" 류 문구를 막는다.
//
// prebuild 로 실행되어 발견 시 빌드를 중단한다.
// 검사 대상: blog/ 원문 + i18n/*/docusaurus-plugin-content-blog/ 로케일 사본
// 새 미지원 서비스가 유행하면 BLACKLIST 에 추가할 것. 반대로 rclone 이
// 백엔드를 추가해 Feature Spec Section 10 에 오르면 여기서 제거할 것.
//
// 사용: node scripts/check-provider-support.mjs [--root <저장소 경로>]
import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';
import { fileURLToPath, pathToFileURL } from 'node:url';

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

// Google Photos — 기존 라이브러리 전체를 내려받을 수 있다는 약속 (Feature Spec 19.5)
const GOOGLE_PHOTOS_RULE = 'Google Photos (library access)';
const GOOGLE_PHOTOS_TEXT = [
  /\b(entire|whole|complete|full) google photos library\b/i,
  /\b(all|every)( of)?( your| the)? google photos\b/i,
  /\bmedia\/(by-year|by-month|by-day|all)\b/i, // API 가 비워 둔 전체 라이브러리 경로
];
// Google Photos 를 옮기거나 백업 "원본"으로 삼는 글의 slug.
// 대표 글 backup-google-photos-external-drive-nas (Takeout 절차)와 fix-google-photos-sync-errors 는 통과한다.
const GOOGLE_PHOTOS_SLUG = /(^|-)(migrate|sync|move|transfer|copy|manage)-google-photos\b|google-photos-to-/i;

/** 본문 한 줄에서 금지 서비스·문구를 찾는다. 반환: [{ service, text }] */
export function findTextHits(line) {
  const hits = [];
  for (const [service, re] of BLACKLIST) {
    if (re.test(line)) hits.push({ service, text: line });
  }
  if (GOOGLE_PHOTOS_TEXT.some((re) => re.test(line))) {
    hits.push({ service: GOOGLE_PHOTOS_RULE, text: line });
  }
  return hits;
}

/** 파일명(slug)이 금지 패턴이면 규칙 이름, 아니면 null */
export function findSlugHit(filename) {
  return GOOGLE_PHOTOS_SLUG.test(filename) ? GOOGLE_PHOTOS_RULE : null;
}

function blogDirs(root) {
  const dirs = [path.join(root, 'blog')];
  const i18n = path.join(root, 'i18n');
  for (const locale of fs.existsSync(i18n) ? fs.readdirSync(i18n) : []) {
    const d = path.join(i18n, locale, 'docusaurus-plugin-content-blog');
    if (fs.existsSync(d)) dirs.push(d);
  }
  return dirs;
}

function main(argv) {
  const rootIdx = argv.indexOf('--root');
  const root = rootIdx >= 0
    ? path.resolve(argv[rootIdx + 1])
    : path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
  const dirs = blogDirs(root);

  const hits = [];
  for (const dir of dirs) {
    if (!fs.existsSync(dir)) continue;
    for (const name of fs.readdirSync(dir)) {
      if (!name.endsWith('.md') && !name.endsWith('.mdx')) continue;
      const file = path.relative(root, path.join(dir, name));
      const slugRule = findSlugHit(name);
      if (slugRule) hits.push({ file, line: 0, service: slugRule, text: '(slug)' });
      const lines = fs.readFileSync(path.join(dir, name), 'utf8').split('\n');
      lines.forEach((line, i) => {
        for (const h of findTextHits(line)) {
          hits.push({ file, line: i + 1, service: h.service, text: line.trim().slice(0, 100) });
        }
      });
    }
  }

  if (hits.length === 0) {
    console.log(`✔ 미지원 스토리지·금지 문구 0건 (블랙리스트 ${BLACKLIST.length}개 서비스 + Google Photos 규칙, ${dirs.length}개 디렉토리 검사)`);
    return 0;
  }

  console.error(`✘ 금지 항목 ${hits.length}건 — 블로그는 Feature Spec Section 10 의 서비스만 다룰 수 있고(GUIDELINE §1.7), Google Photos 기존 라이브러리를 옮기거나 내려받는 글은 쓸 수 없다(GUIDELINE §1.8, Feature Spec 19.5)`);
  for (const h of hits) {
    const where = h.line > 0 ? `${h.file}:${h.line}` : h.file;
    console.error(`  ${where} [${h.service}] ${h.text}`);
  }
  console.error('해당 글을 REMOVE 하거나 언급을 제거한 뒤 다시 빌드할 것.');
  return 1;
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  process.exit(main(process.argv.slice(2)));
}
