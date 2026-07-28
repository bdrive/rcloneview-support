// deploy-www.yml 의 구조 단언.
// YAML 문법 오류나 가드 누락을 GitHub 에 올리기 전에 잡는다.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
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
  // 그룹 문자열 자체는 이벤트별로 갈라지므로 고정값으로 못 박지 않는다
  assert.equal(typeof wf.concurrency.group, 'string');
  assert.ok(wf.concurrency.group.length > 0, '동시성 그룹이 비어 있다');
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

test('변경이 없으면 열린 PR 에 stale 표시를 남긴다', () => {
  // hasStagedChanges 는 인덱스를 www main 과 비교하지 열린 PR 과 비교하지 않는다.
  // 그래서 changed=false 여도 이전 실행이 남긴 PR 이 낡은 채로 열려 있을 수 있다.
  const stale = job.steps.find((s) =>
    String(s.if ?? '').includes("steps.sync.outputs.changed == 'false'"),
  );
  assert.ok(stale, 'changed=false 로 게이트된 스텝이 있어야 한다');
  assert.ok(String(stale.if).includes("github.event_name != 'pull_request'"));
  assert.ok(stale.run.includes('gh pr list'), '열린 PR 을 먼저 찾아야 한다');
  assert.ok(stale.run.includes('.[0].number // empty'), '기존 PR 스텝과 같은 관용구를 쓴다');
  assert.ok(stale.run.includes('gh pr comment'), '코멘트로 stale 표시를 남겨야 한다');
});

test('모든 run 블록이 bash 문법 검사를 통과한다', () => {
  // 구조 단언으로는 heredoc 이나 따옴표 깨짐이 보이지 않는다
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'wf-lint-'));
  const runs = job.steps.filter((s) => s.run);
  assert.ok(runs.length > 0, 'run 블록이 하나는 있어야 한다');

  runs.forEach((s, i) => {
    const f = path.join(dir, `step-${i}.sh`);
    fs.writeFileSync(f, s.run);

    const r = spawnSync('bash', ['-n', f], { encoding: 'utf8' });
    const label = s.name ?? s.uses;
    assert.equal(r.status, 0, `bash 문법 오류 — ${label}: ${r.stderr}`);
    // 끝나지 않은 heredoc 은 bash -n 이 경고만 하고 종료코드 0 으로 끝난다.
    // 종료코드만 보면 정작 heredoc 회귀를 놓치므로 stderr 도 비어 있어야 한다.
    assert.equal(r.stderr, '', `bash 경고 — ${label}: ${r.stderr}`);
  });
});

test('실패 알림 스텝이 있고 기본 GITHUB_TOKEN 을 쓴다', () => {
  const notify = job.steps.find((s) => String(s.if ?? '').includes('failure()'));
  assert.ok(notify, '실패 알림 스텝이 있어야 한다');
  assert.ok(String(notify.if).includes("github.event_name != 'pull_request'"));
  assert.equal(notify.env.GH_TOKEN, '${{ github.token }}');
  assert.ok(notify.run.includes('gh issue create'));
  assert.ok(notify.run.includes('gh issue comment'), '중복 이슈 대신 코멘트를 달아야 한다');
  assert.ok(notify.run.includes('gh label create'), '라벨이 없으면 issue create 가 실패한다');
});
