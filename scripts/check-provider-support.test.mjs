// check-provider-support.mjs 단위·통합 테스트.
// 2026-10 Google Photos 사고(기존 라이브러리를 내려받는 글 8편) 재발 방지 규칙을 고정한다.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

import { findTextHits, findSlugHit } from './check-provider-support.mjs';

const cli = fileURLToPath(new URL('./check-provider-support.mjs', import.meta.url));

// ---------- 본문 규칙 ----------

test('미지원 서비스명은 단어 경계로만 잡는다', () => {
  assert.equal(findTextHits('Sync TeraBox to Dropbox').length, 1);
  assert.equal(findTextHits('Sync TeraBox to Dropbox')[0].service, 'TeraBox');
  assert.equal(findTextHits('rename the filename first').length, 0); // "filen" 오탐 금지
});

test('Google Photos 기존 라이브러리 전체를 받는다는 문구는 잡는다', () => {
  const bad = [
    'Back up your entire Google Photos library to a NAS.',
    'RcloneView downloads all your Google Photos automatically.',
    'Select the `media/by-year` folder for all photos.',
    'Copy everything under media/all to Backblaze B2.',
  ];
  for (const line of bad) {
    const hits = findTextHits(line);
    assert.equal(hits.length, 1, `잡혀야 함: ${line}`);
    assert.equal(hits[0].service, 'Google Photos (library access)');
  }
});

test('Google Photos 제한을 바르게 설명하는 문구는 통과한다', () => {
  const ok = [
    'Google Photos only lists photos that were uploaded by this app.',
    'Export your library with Google Takeout first, then copy it with RcloneView.',
    'The Google Photos remote still works for uploading photos.',
    'Create your own OAuth client ID for Google Photos.',
  ];
  for (const line of ok) {
    assert.equal(findTextHits(line).length, 0, `통과해야 함: ${line}`);
  }
});

// ---------- slug 규칙 ----------

test('Google Photos 를 옮기거나 백업 원본으로 삼는 slug 는 잡는다', () => {
  const bad = [
    '2026-04-07-migrate-google-photos-to-onedrive-rcloneview.md',
    '2026-05-06-sync-google-photos-to-backblaze-b2-rcloneview.md',
    '2026-04-14-manage-google-photos-cloud-sync-backup-rcloneview.md',
    '2026-07-01-move-google-photos-to-wasabi.md',
  ];
  for (const name of bad) {
    assert.ok(findSlugHit(name), `잡혀야 함: ${name}`);
  }
});

test('대표 글·트러블슈팅 글 slug 는 통과한다', () => {
  const ok = [
    '2026-03-03-backup-google-photos-external-drive-nas-rcloneview.md',
    '2026-05-08-fix-google-photos-sync-errors-rcloneview.md',
    '2026-05-20-sync-google-drive-to-onedrive-rcloneview.md',
  ];
  for (const name of ok) {
    assert.equal(findSlugHit(name), null, `통과해야 함: ${name}`);
  }
});

// ---------- CLI 통합 ----------

function makeRoot(files) {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), 'provider-check-'));
  for (const [rel, content] of Object.entries(files)) {
    const p = path.join(root, rel);
    fs.mkdirSync(path.dirname(p), { recursive: true });
    fs.writeFileSync(p, content);
  }
  return root;
}

function run(root) {
  return spawnSync(process.execPath, [cli, '--root', root], { encoding: 'utf8' });
}

test('CLI: 깨끗한 블로그는 exit 0', () => {
  const root = makeRoot({
    'blog/2026-01-01-sync-dropbox-to-onedrive.md': '# Dropbox to OneDrive\n',
    'i18n/ko/docusaurus-plugin-content-blog/2026-01-01-sync-dropbox-to-onedrive.md': '# Dropbox → OneDrive\n',
  });
  const r = run(root);
  assert.equal(r.status, 0, r.stderr);
});

test('CLI: 금지 slug 는 로케일 사본까지 잡고 exit 1', () => {
  const root = makeRoot({
    'blog/2026-01-01-migrate-google-photos-to-onedrive.md': '# ok text\n',
    'i18n/ko/docusaurus-plugin-content-blog/2026-01-01-migrate-google-photos-to-onedrive.md': '# ok text\n',
  });
  const r = run(root);
  assert.equal(r.status, 1);
  assert.match(r.stderr, /migrate-google-photos-to-onedrive/);
  assert.match(r.stderr, /i18n\/ko/);
});

test('CLI: 금지 문구는 파일:줄 로 보고하고 exit 1', () => {
  const root = makeRoot({
    'blog/2026-01-01-photo-archive.md': 'line one\nBack up your entire Google Photos library.\n',
  });
  const r = run(root);
  assert.equal(r.status, 1);
  assert.match(r.stderr, /photo-archive\.md:2/);
});
