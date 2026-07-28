// sync-www-support.mjs 단위 테스트.
// 임시 git 저장소에 www 체크아웃을 흉내 내고 실제 git 명령으로 결과를 확인한다.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { execFileSync } from 'node:child_process';

import { stageBuild } from './sync-www-support.mjs';

function tmpdir() {
  return fs.mkdtempSync(path.join(os.tmpdir(), 'sync-www-'));
}

// { '상대경로': '내용' } 모양으로 빌드 산출물을 만든다
function makeBuild(files) {
  const dir = path.join(tmpdir(), 'build');
  for (const [rel, content] of Object.entries(files)) {
    const p = path.join(dir, rel);
    fs.mkdirSync(path.dirname(p), { recursive: true });
    fs.writeFileSync(p, content);
  }
  return dir;
}

// support/ 가 이미 커밋되어 있는 www 체크아웃을 흉내 낸다
function makeRepo({ gitignore = '', support = {} } = {}) {
  const dir = path.join(tmpdir(), 'www');
  fs.mkdirSync(dir, { recursive: true });
  const g = (...args) => execFileSync('git', ['-C', dir, ...args], { encoding: 'utf8' });
  g('init', '-q', '-b', 'main');
  g('config', 'user.email', 'test@example.com');
  g('config', 'user.name', 'Test');
  fs.writeFileSync(path.join(dir, '.gitignore'), gitignore);
  for (const [rel, content] of Object.entries(support)) {
    const p = path.join(dir, 'support', rel);
    fs.mkdirSync(path.dirname(p), { recursive: true });
    fs.writeFileSync(p, content);
  }
  g('add', '-A');
  g('commit', '-q', '-m', 'init');
  return dir;
}

function tracked(repo) {
  return execFileSync('git', ['-C', repo, 'ls-files', 'support'], { encoding: 'utf8' })
    .split('\n')
    .filter(Boolean)
    .sort();
}

test('빌드 산출물이 support/ 로 그대로 복사된다', () => {
  const build = makeBuild({ 'index.html': 'A', 'ko/index.html': 'B' });
  const repo = makeRepo();

  stageBuild({ buildDir: build, repoDir: repo, branch: 'deploy/support' });

  assert.deepEqual(tracked(repo), ['support/index.html', 'support/ko/index.html']);
  assert.equal(fs.readFileSync(path.join(repo, 'support/ko/index.html'), 'utf8'), 'B');
});

test('브랜치가 새로 만들어진다', () => {
  const build = makeBuild({ 'index.html': 'A' });
  const repo = makeRepo();

  stageBuild({ buildDir: build, repoDir: repo, branch: 'deploy/support' });

  const branch = execFileSync('git', ['-C', repo, 'branch', '--show-current'], {
    encoding: 'utf8',
  }).trim();
  assert.equal(branch, 'deploy/support');
});

test('이전 support/ 에만 있던 파일은 사라진다', () => {
  const build = makeBuild({ 'index.html': 'new' });
  const repo = makeRepo({ support: { 'index.html': 'old', 'gone.html': 'old' } });

  stageBuild({ buildDir: build, repoDir: repo, branch: 'deploy/support' });

  assert.deepEqual(tracked(repo), ['support/index.html']);
  assert.equal(fs.existsSync(path.join(repo, 'support/gone.html')), false);
});

test('.gitignore 패턴에 걸리는 파일도 전부 스테이징된다', () => {
  // www 의 실제 .gitignore 에는 dist/ build/ *.log 가 들어 있다
  const build = makeBuild({
    'index.html': 'A',
    'docs/build/x.html': 'B', // build/ 패턴
    'dist/y.html': 'C', // dist/ 패턴
    'debug.log': 'D', // *.log 패턴
  });
  const repo = makeRepo({ gitignore: 'node_modules/\ndist/\nbuild/\n*.log\n' });

  stageBuild({ buildDir: build, repoDir: repo, branch: 'deploy/support' });

  assert.deepEqual(tracked(repo), [
    'support/debug.log',
    'support/dist/y.html',
    'support/docs/build/x.html',
    'support/index.html',
  ]);
});
