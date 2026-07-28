// deploy-www.yml 의 구조 단언.
// YAML 문법 오류나 가드 누락을 GitHub 에 올리기 전에 잡는다.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import yaml from 'js-yaml';

// import.meta.dirname 은 Node 21.2+ 전용이라 쓰지 않는다 (러너는 Node 20)
const here = path.dirname(fileURLToPath(import.meta.url));
const wfPath = path.join(here, '..', '.github', 'workflows', 'deploy-www.yml');
const wf = yaml.load(fs.readFileSync(wfPath, 'utf8'));
const job = wf.jobs['build-and-sync'];

test('트리거가 push(main), pull_request(main), workflow_dispatch 다', () => {
  // js-yaml 4 는 YAML 1.2 core schema 라 on 키가 boolean 으로 바뀌지 않는다
  assert.deepEqual(wf.on.push.branches, ['main']);
  assert.deepEqual(wf.on.pull_request.branches, ['main']);
  assert.ok('workflow_dispatch' in wf.on);
});

test('동시성 그룹이 잡혀 있고 이전 실행을 취소한다', () => {
  assert.equal(wf.concurrency.group, 'deploy-support');
  assert.equal(wf.concurrency['cancel-in-progress'], true);
});

test('어떤 if 표현식에도 secrets 컨텍스트를 쓰지 않는다', () => {
  // 2026-07-18 의 구 deploy.yml 이 secrets 를 step if 에 써서
  // 잡 생성 단계에서 통째로 실패했다. 그 재발을 막는다.
  const conditions = [wf.on.if, job.if, ...job.steps.map((s) => s.if)].filter(Boolean);
  for (const c of conditions) {
    assert.ok(!String(c).includes('secrets'), `if 에 secrets 사용: ${c}`);
  }
});

test('빌드 경로 스텝에는 조건이 없다 — PR 에서도 검증돼야 한다', () => {
  const unconditional = job.steps.filter((s) => !s.if);
  const runs = unconditional.map((s) => s.run ?? s.uses).join('\n');
  assert.ok(runs.includes('npm ci'), 'npm ci 가 무조건 실행돼야 한다');
  assert.ok(runs.includes('npm test'), 'npm test 가 무조건 실행돼야 한다');
  assert.ok(runs.includes('npm run build'), 'npm run build 가 무조건 실행돼야 한다');
});

test('단위 테스트가 빌드보다 먼저 돈다', () => {
  const idx = (needle) => job.steps.findIndex((s) => (s.run ?? '').includes(needle));
  const testIdx = idx('npm test');
  const buildIdx = idx('npm run build');
  assert.notEqual(testIdx, -1, 'npm test 스텝이 있어야 한다');
  assert.notEqual(buildIdx, -1, 'npm run build 스텝이 있어야 한다');
  assert.ok(testIdx < buildIdx);
});

test('빌드가 실패하면 뒤 스텝으로 넘어가지 않는다', () => {
  // continue-on-error 가 붙으면 빌드가 깨져도 배포 스텝이 이어진다
  for (const s of job.steps) {
    assert.notEqual(s['continue-on-error'], true, `continue-on-error 사용: ${s.name ?? s.uses}`);
  }
});

test('러너 Node 는 20 이고 타임아웃이 잡혀 있다', () => {
  const setup = job.steps.find((s) => String(s.uses ?? '').startsWith('actions/setup-node'));
  assert.equal(setup.with['node-version'], 20);
  assert.ok(job['timeout-minutes'] >= 60);
});

test('배포 스텝은 전부 pull_request 를 배제하는 가드를 갖는다', () => {
  const tokenIdx = job.steps.findIndex((s) => s.id === 'app-token');
  assert.ok(tokenIdx > 0, 'app-token 스텝이 있어야 한다');

  for (const s of job.steps.slice(tokenIdx)) {
    assert.ok(s.if, `가드 없는 배포 스텝: ${s.name ?? s.uses}`);
    assert.ok(
      String(s.if).includes("github.event_name != 'pull_request'"),
      `pull_request 가드 없음: ${s.name ?? s.uses}`,
    );
  }
});

test('www 체크아웃이 얕은 클론이고 www/ 하위로 간다', () => {
  const co = job.steps.find((s) => s.with?.repository === 'bdrive/rcloneview_www');
  assert.equal(co.with.path, 'www');
  assert.equal(co.with['fetch-depth'], 1);
  assert.equal(co.with.ref, 'main');
});

test('앱 토큰은 www 저장소 하나로만 범위가 좁혀져 있다', () => {
  const t = job.steps.find((s) => s.id === 'app-token');
  assert.ok(String(t.uses).startsWith('actions/create-github-app-token@'));
  assert.equal(t.with.owner, 'bdrive');
  assert.equal(t.with.repositories, 'rcloneview_www');
});

test('push 와 PR 생성은 변경이 있을 때만 돈다', () => {
  const gated = job.steps.filter((s) =>
    String(s.if ?? '').includes("steps.sync.outputs.changed == 'true'"),
  );
  const bodies = gated.map((s) => s.run ?? '').join('\n');
  assert.equal(gated.length, 2, 'push 스텝과 PR 스텝 두 개여야 한다');
  assert.ok(bodies.includes('push --force origin deploy/support'));
  assert.ok(bodies.includes('gh pr create'));
  assert.ok(bodies.includes('gh pr edit'));
});
