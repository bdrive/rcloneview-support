// sync-www-support.mjs 단위 테스트.
// 임시 git 저장소에 www 체크아웃을 흉내 내고 실제 git 명령으로 결과를 확인한다.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { execFileSync } from 'node:child_process';

import { stageBuild, sync, verifyCounts } from './sync-www-support.mjs';

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

test('파일 수가 일치하면 커밋하고 개수를 돌려준다', () => {
  const build = makeBuild({ 'index.html': 'A', 'ko/index.html': 'B' });
  const repo = makeRepo();

  const result = sync({
    buildDir: build,
    repoDir: repo,
    branch: 'deploy/support',
    message: '테스트 커밋',
  });

  assert.equal(result.changed, true);
  assert.equal(result.count, 2);

  const subject = execFileSync('git', ['-C', repo, 'log', '-1', '--format=%s'], {
    encoding: 'utf8',
  }).trim();
  assert.equal(subject, '테스트 커밋');
});

test('파일 수가 맞으면 verifyCounts 가 개수를 돌려준다', () => {
  const build = makeBuild({ 'index.html': 'A', 'ko/index.html': 'B' });
  const repo = makeRepo();

  stageBuild({ buildDir: build, repoDir: repo, branch: 'deploy/support' });

  assert.equal(verifyCounts(build, repo), 2);
});

test('파일 수가 어긋나면 verifyCounts 가 예외를 던진다', () => {
  const build = makeBuild({ 'index.html': 'A', 'ko/index.html': 'B' });
  const repo = makeRepo();

  // 스테이징까지 마친 뒤 인덱스에서 한 개를 빼 불일치를 만든다.
  // 실제로는 .gitignore 나 중첩 .git 때문에 add 가 파일을 빠뜨릴 때 이 상태가 된다.
  stageBuild({ buildDir: build, repoDir: repo, branch: 'deploy/support' });
  execFileSync('git', ['-C', repo, 'rm', '--cached', '-q', 'support/ko/index.html']);

  assert.throws(() => verifyCounts(build, repo), /파일 수 불일치 — build=2 support=1/);
});

test('변경이 없으면 changed=false 이고 커밋이 늘지 않는다', () => {
  const build = makeBuild({ 'index.html': 'A' });
  const repo = makeRepo();

  sync({ buildDir: build, repoDir: repo, branch: 'deploy/support', message: '1차' });
  const before = execFileSync('git', ['-C', repo, 'rev-list', '--count', 'HEAD'], {
    encoding: 'utf8',
  }).trim();

  const result = sync({ buildDir: build, repoDir: repo, branch: 'deploy/support', message: '2차' });

  const after = execFileSync('git', ['-C', repo, 'rev-list', '--count', 'HEAD'], {
    encoding: 'utf8',
  }).trim();
  assert.equal(result.changed, false);
  assert.equal(after, before);
});
