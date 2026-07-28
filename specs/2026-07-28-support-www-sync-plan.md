# support 빌드 산출물 → www 자동 동기화 구현 계획

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** `rcloneview-support` main이 갱신되면 GitHub Actions가 9로케일 빌드를 수행하고, 그 산출물로 `rcloneview_www/support/`를 통째로 교체하는 PR을 자동 생성·갱신한다.

**Architecture:** 워크플로는 public 저장소인 `rcloneview-support`에 둔다(Actions 무료). 위험한 파일 교체·검증 로직은 `scripts/sync-www-support.mjs`로 분리해 `node --test`로 로컬 검증하고, YAML은 그 스크립트를 호출하는 얇은 껍데기로 유지한다. www 접근은 bdrive 조직 GitHub App 설치 토큰으로 한다.

**Tech Stack:** GitHub Actions, Node 20(러너) / Node 20+ ESM 스크립트, `node --test`(내장), js-yaml(워크플로 구조 테스트), `gh` CLI(러너 기본 제공), Docusaurus 3.

설계 근거는 `specs/2026-07-28-support-www-sync-design.md`에 있다. 이 계획은 그 스펙의 구현 단계다.

## Global Constraints

- 작업 저장소: `/Users/ysh/work/rcloneview-support`, 브랜치 `feat/deploy-www-automation` (스펙 커밋 `c1abbb2`가 이미 올라가 있다)
- 커밋 메시지는 한글로 쓴다. `Co-Authored-By` 줄은 넣지 않는다.
- 러너 Node 버전은 **20**으로 고정한다(`package.json`의 `engines.node`는 `>=18`). Node 21 이상에서만 되는 API(`import.meta.dirname` 등)를 쓰지 않는다.
- 테스트 러너는 Node 내장 `node --test`다. 새 테스트 프레임워크를 추가하지 않는다.
- 새 런타임 의존성을 추가하지 않는다. 워크플로 구조 테스트용 `js-yaml`만 `devDependencies`에 명시한다 — 이미 Docusaurus의 전이 의존으로 `node_modules/js-yaml` 4.1.0이 설치되어 있어 추가 다운로드가 없다.
- **`secrets` 컨텍스트를 `if:` 표현식에 절대 쓰지 않는다.** 2026-07-18의 구 `deploy.yml`이 이것 때문에 잡 생성 단계에서 실패했다.
- 반영 대상: `bdrive/rcloneview_www`, base `main`, head `deploy/support`
- 시크릿 이름: `APP_ID`, `APP_PRIVATE_KEY`
- 불변식: `build/`의 파일 수 == 커밋 후 `git ls-files support`의 줄 수
- **Docusaurus 콘텐츠 경로에 파일을 만들지 않는다** — `blog/`, `docs/`, `howto/`, `tutorials/`, `release-notes/`, `i18n/`, `src/`, `static/`에 넣은 파일은 사이트에 발행된다. 이 계획의 산출물은 `scripts/`, `.github/`, `specs/`, 저장소 루트에만 놓는다.

---

## File Structure

| 파일 | 책임 |
|---|---|
| `scripts/sync-www-support.mjs` (신규) | 빌드 산출물로 www 체크아웃의 `support/`를 교체하고, 파일 수 불변식을 검증하고, 변경이 있으면 커밋한다. push와 PR 생성은 하지 않는다(네트워크·자격증명이 필요해 테스트 불가). |
| `scripts/sync-www-support.test.mjs` (신규) | 위 스크립트의 단위 테스트. 임시 git 저장소를 만들어 실제 git 명령으로 검증한다. |
| `scripts/deploy-workflow.test.mjs` (신규) | 워크플로 YAML의 구조 단언. 트리거·동시성·스텝 가드, 그리고 `secrets`-in-`if` 회귀 방지. |
| `.github/workflows/deploy-www.yml` (신규) | 트리거, 빌드, www 체크아웃, 동기화 스크립트 호출, push, PR 생성/갱신, 실패 알림. |
| `.github/workflows/README.md` (신규) | GitHub App 생성·설치·시크릿 등록 절차와 롤백 방법. |
| `package.json` (수정) | `scripts.test` 추가, `devDependencies.js-yaml` 추가. |
| `BLOG_FACTCHECK_PROMPT.md` (수정) | 자동화와 중복되는 수동 빌드·복사·www PR 단계 제거. |
| `SCHEDULE_FACTCHECKER_PROMPT.md` (수정) | 동일. |
| `I18N_RUNBOOK_ko.md` (수정) | 124행의 수동 rsync 설명을 자동화 설명으로 교체. |

---

### Task 1: 파일 교체·스테이징 로직

**Files:**
- Create: `scripts/sync-www-support.mjs`
- Test: `scripts/sync-www-support.test.mjs`
- Modify: `package.json` (scripts.test 추가)

**Interfaces:**
- Consumes: 없음 (첫 태스크)
- Produces: `stageBuild({ buildDir, repoDir, branch })` — `repoDir`에서 `branch`를 www main HEAD 기준으로 새로 만들고(`git switch -C`), `repoDir/support`를 지운 뒤 `buildDir`를 그 자리에 복사하고, `git add -A -f support`까지 수행한다. 반환값 없음. Task 2가 이 함수를 감싼다.

- [ ] **Step 1: `package.json`에 test 스크립트 추가**

`scripts` 객체에서 `"docusaurus": "docusaurus",` 바로 위에 다음 줄을 넣는다.

```json
    "test": "node --test scripts/",
```

- [ ] **Step 2: 실패하는 테스트 작성**

`scripts/sync-www-support.test.mjs`를 만든다.

```js
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
```

- [ ] **Step 3: 테스트 실행해 실패 확인**

```bash
cd /Users/ysh/work/rcloneview-support && npm test
```

Expected: FAIL — `Cannot find module '.../scripts/sync-www-support.mjs'`

- [ ] **Step 4: 최소 구현 작성**

`scripts/sync-www-support.mjs`를 만든다.

```js
#!/usr/bin/env node
// 빌드 산출물(build/)로 www 체크아웃의 support/ 를 통째로 교체한다.
//
// push 와 PR 생성은 워크플로가 맡는다 — 자격증명과 네트워크가 필요해
// 로컬에서 테스트할 수 없기 때문이다. 이 파일은 테스트 가능한 부분만 담는다.
import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';

export function git(repoDir, args) {
  return execFileSync('git', ['-C', repoDir, ...args], { encoding: 'utf8' });
}

// 브랜치를 현재 HEAD(= www main) 기준으로 새로 만들고 support/ 를 교체한다.
// -C 는 같은 이름의 브랜치가 이미 있어도 덮어쓴다.
export function stageBuild({ buildDir, repoDir, branch }) {
  if (!fs.existsSync(buildDir)) {
    throw new Error(`빌드 디렉터리가 없다: ${buildDir}`);
  }

  git(repoDir, ['switch', '-C', branch]);

  const dest = path.join(repoDir, 'support');
  fs.rmSync(dest, { recursive: true, force: true });
  // cp -a 로 권한·타임스탬프를 보존한다. 기존 수동 절차와 동일한 명령이다.
  execFileSync('cp', ['-a', buildDir, dest]);

  // -f 는 www 의 .gitignore(dist/ build/ *.log)를 우회한다.
  // 이게 없으면 산출물 일부가 말없이 빠진다.
  git(repoDir, ['add', '-A', '-f', 'support']);
}
```

- [ ] **Step 5: 테스트 통과 확인**

```bash
cd /Users/ysh/work/rcloneview-support && npm test
```

Expected: PASS — 4개 테스트 모두 통과

- [ ] **Step 6: 커밋**

```bash
cd /Users/ysh/work/rcloneview-support
git add package.json scripts/sync-www-support.mjs scripts/sync-www-support.test.mjs
git commit -m "feat(sync): 빌드 산출물로 www support/ 교체하는 로직 추가

- .gitignore 우회(-f)와 삭제 반영(rm -rf 후 cp -a)을 단위 테스트로 고정
- node --test 를 npm test 로 연결"
```

---

### Task 2: 불변식 검증·커밋·CLI

**Files:**
- Modify: `scripts/sync-www-support.mjs`
- Modify: `scripts/sync-www-support.test.mjs`

**Interfaces:**
- Consumes: Task 1의 `stageBuild({ buildDir, repoDir, branch })`
- Produces:
  - `countFiles(dir): number` — 디렉터리 아래 파일 개수(재귀)
  - `countStaged(repoDir): number` — `git ls-files support`의 줄 수
  - `verifyCounts(buildDir, repoDir): number` — 두 개수가 같으면 그 값을 돌려주고, 다르면 `파일 수 불일치 — build=N support=M` 메시지로 예외를 던진다.
  - `sync({ buildDir, repoDir, branch, message }): { changed: boolean, count: number }` — stageBuild → verifyCounts → (변경이 있으면) 커밋.
  - CLI: `node scripts/sync-www-support.mjs --build <dir> --repo <dir> --branch <name> --message <msg>` — `GITHUB_OUTPUT`에 `changed`와 `count`를 기록한다. 워크플로의 `steps.sync.outputs.changed` / `.count`가 여기서 나온다.

- [ ] **Step 1: 실패하는 테스트 추가**

`scripts/sync-www-support.test.mjs`의 import 줄을 다음으로 바꾼다.

```js
import { stageBuild, sync, verifyCounts } from './sync-www-support.mjs';
```

그리고 파일 끝에 다음 테스트를 덧붙인다.

```js
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
```

- [ ] **Step 2: 테스트 실행해 실패 확인**

```bash
cd /Users/ysh/work/rcloneview-support && npm test
```

Expected: FAIL — `sync`, `countFiles`, `countStaged`가 export되지 않아 `SyntaxError: The requested module ... does not provide an export named 'sync'`

- [ ] **Step 3: 구현 추가**

`scripts/sync-www-support.mjs`의 `stageBuild` 아래에 다음을 덧붙인다. `import` 줄에 `fileURLToPath`를 추가한다.

```js
import { fileURLToPath } from 'node:url';
```

```js
// 재귀로 파일 개수를 센다. readdirSync 의 recursive 옵션은 Node 20.1+ 전용이라
// 저장소의 다른 스크립트(check-image-refs.mjs)와 같은 수동 순회를 쓴다.
export function countFiles(dir) {
  let n = 0;
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) n += countFiles(p);
    else n += 1;
  }
  return n;
}

export function countStaged(repoDir) {
  return git(repoDir, ['ls-files', 'support']).split('\n').filter(Boolean).length;
}

// support/ 가 build/ 의 정확한 사본인지 확인한다.
// www 의 .gitignore(dist/ build/ *.log)나 중첩 .git 때문에 add 가 파일을
// 말없이 빠뜨리면 여기서 걸린다.
export function verifyCounts(buildDir, repoDir) {
  const built = countFiles(buildDir);
  const staged = countStaged(repoDir);
  if (built !== staged) {
    throw new Error(`파일 수 불일치 — build=${built} support=${staged}`);
  }
  return built;
}

function hasStagedChanges(repoDir) {
  try {
    git(repoDir, ['diff', '--cached', '--quiet']);
    return false; // 종료코드 0 = 차이 없음
  } catch {
    return true;
  }
}

export function sync({ buildDir, repoDir, branch, message }) {
  stageBuild({ buildDir, repoDir, branch });

  const built = verifyCounts(buildDir, repoDir);

  if (!hasStagedChanges(repoDir)) {
    return { changed: false, count: built };
  }

  git(repoDir, ['commit', '-m', message]);
  return { changed: true, count: built };
}

function parseArgs(argv) {
  const out = {};
  for (let i = 0; i < argv.length; i += 2) {
    const key = argv[i].replace(/^--/, '');
    out[key] = argv[i + 1];
  }
  return out;
}

function main() {
  const a = parseArgs(process.argv.slice(2));
  for (const k of ['build', 'repo', 'branch', 'message']) {
    if (!a[k]) {
      console.error(`::error::--${k} 인자가 없다`);
      process.exit(1);
    }
  }

  let result;
  try {
    result = sync({
      buildDir: a.build,
      repoDir: a.repo,
      branch: a.branch,
      message: a.message,
    });
  } catch (err) {
    console.error(`::error::${err.message}`);
    process.exit(1);
  }

  const line = `changed=${result.changed}\ncount=${result.count}\n`;
  if (process.env.GITHUB_OUTPUT) {
    fs.appendFileSync(process.env.GITHUB_OUTPUT, line);
  }
  process.stdout.write(line);
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  main();
}
```

- [ ] **Step 4: 테스트 통과 확인**

```bash
cd /Users/ysh/work/rcloneview-support && npm test
```

Expected: PASS — 8개 테스트 모두 통과

- [ ] **Step 5: 커밋**

```bash
cd /Users/ysh/work/rcloneview-support
git add scripts/sync-www-support.mjs scripts/sync-www-support.test.mjs
git commit -m "feat(sync): 파일 수 불변식 검증과 커밋, CLI 진입점 추가

- build/ 파일 수와 git ls-files support 수가 어긋나면 실패시킨다
- 변경이 없으면 커밋하지 않고 changed=false 를 GITHUB_OUTPUT 으로 넘긴다"
```

---

### Task 3: 워크플로 골격 + 빌드/검증 경로

**Files:**
- Create: `.github/workflows/deploy-www.yml`
- Create: `scripts/deploy-workflow.test.mjs`
- Modify: `package.json` (devDependencies에 js-yaml 추가)

**Interfaces:**
- Consumes: Task 2의 `npm test`
- Produces: 워크플로 잡 `build-and-sync`. Task 4가 이 잡의 `steps` 배열 뒤에 배포 스텝을 덧붙인다.

- [ ] **Step 1: `package.json`에 js-yaml 추가**

`devDependencies` 객체에 다음 줄을 알파벳 순서에 맞게 넣는다. 이미 전이 의존으로 설치되어 있어 `npm install` 시 추가 다운로드가 없다.

```json
    "js-yaml": "^4.1.0",
```

넣은 뒤 lockfile을 갱신한다.

```bash
cd /Users/ysh/work/rcloneview-support && npm install --package-lock-only
```

- [ ] **Step 2: 실패하는 워크플로 구조 테스트 작성**

`scripts/deploy-workflow.test.mjs`를 만든다.

```js
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
  assert.ok(idx('npm test') < idx('npm run build'));
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
```

- [ ] **Step 3: 테스트 실행해 실패 확인**

```bash
cd /Users/ysh/work/rcloneview-support && npm test
```

Expected: FAIL — `ENOENT: no such file or directory, open '.../.github/workflows/deploy-www.yml'`

- [ ] **Step 4: 워크플로 파일 생성 (빌드/검증 경로만)**

`.github/workflows/deploy-www.yml`을 만든다.

```yaml
# support 사이트 빌드 → rcloneview_www/support 동기화 PR 생성
#
# 흐름: main push → 9로케일 빌드 → www 체크아웃 → support/ 통째 교체
#       → deploy/support 브랜치 force-push → PR 생성/갱신 → 사람이 머지
#       → Cloudflare Pages 가 www main 을 자동 배포
# PR 이벤트에서는 빌드 검증만 하고 배포하지 않는다.
#
# 필요한 시크릿은 .github/workflows/README.md 참고.
#
# 주의: `secrets` 컨텍스트는 `if:` 표현식에서 쓸 수 없다.
#       2026-07-18 의 구 deploy.yml 이 이 때문에 잡 생성 단계에서 실패했다.

name: Deploy support build to www

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]
  workflow_dispatch:

concurrency:
  group: deploy-support
  cancel-in-progress: true # 최신 main 상태만 의미가 있다

permissions:
  contents: read
  issues: write # 실패 알림용 (support 저장소 내부)

jobs:
  build-and-sync:
    runs-on: ubuntu-latest
    timeout-minutes: 90

    steps:
      - uses: actions/checkout@v4

      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm

      - name: Install dependencies
        run: npm ci --prefer-offline --no-audit --fund=false

      - name: Unit tests
        run: npm test

      - name: Build (9 locales)
        env:
          NODE_OPTIONS: --max-old-space-size=6144
        run: npm run build

      - name: Free disk space
        # node_modules 가 6.7GB 다. www 체크아웃 전에 비워야 러너 디스크(약 14GB)가 버틴다.
        run: rm -rf node_modules
```

- [ ] **Step 5: 테스트 통과 확인**

```bash
cd /Users/ysh/work/rcloneview-support && npm test
```

Expected: PASS — 15개 테스트 모두 통과

- [ ] **Step 6: 커밋**

```bash
cd /Users/ysh/work/rcloneview-support
git add package.json package-lock.json .github/workflows/deploy-www.yml scripts/deploy-workflow.test.mjs
git commit -m "feat(ci): support 빌드 검증 워크플로 추가

- push(main)·PR·수동 트리거, 동시성 그룹으로 중복 실행 취소
- 구조 테스트로 secrets-in-if 재발 방지 (2026-07-18 실패 원인)"
```

---

### Task 4: 배포 경로

**Files:**
- Modify: `.github/workflows/deploy-www.yml`
- Modify: `scripts/deploy-workflow.test.mjs`

**Interfaces:**
- Consumes: Task 2의 CLI(`node scripts/sync-www-support.mjs --build --repo --branch --message`, 출력 `changed`/`count`), Task 3의 잡 `build-and-sync`
- Produces: 스텝 id `app-token`(출력 `token`, `app-slug`), 스텝 id `sync`(출력 `changed`, `count`). Task 5가 이 뒤에 알림 스텝을 붙인다.

- [ ] **Step 1: 실패하는 테스트 추가**

`scripts/deploy-workflow.test.mjs` 끝에 덧붙인다.

```js
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
```

- [ ] **Step 2: 테스트 실행해 실패 확인**

```bash
cd /Users/ysh/work/rcloneview-support && npm test
```

Expected: FAIL — `app-token 스텝이 있어야 한다`

- [ ] **Step 3: 배포 스텝 추가**

`.github/workflows/deploy-www.yml`의 `Free disk space` 스텝 뒤에 이어 붙인다.

heredoc 본문은 다른 줄과 **같은 들여쓰기**로 쓴다. YAML 블록 스칼라는 공통 들여쓰기를 일괄 제거하므로, 그래야 본문이 0열에서 시작해 마크다운이 코드블록으로 렌더되지 않는다.

```yaml
      - name: Generate app token
        id: app-token
        if: github.event_name != 'pull_request'
        uses: actions/create-github-app-token@v2
        with:
          app-id: ${{ secrets.APP_ID }}
          private-key: ${{ secrets.APP_PRIVATE_KEY }}
          owner: bdrive
          repositories: rcloneview_www

      - name: Checkout www
        if: github.event_name != 'pull_request'
        uses: actions/checkout@v4
        with:
          repository: bdrive/rcloneview_www
          ref: main
          token: ${{ steps.app-token.outputs.token }}
          path: www
          fetch-depth: 1

      - name: Configure bot identity
        if: github.event_name != 'pull_request'
        env:
          APP_SLUG: ${{ steps.app-token.outputs.app-slug }}
          GH_TOKEN: ${{ steps.app-token.outputs.token }}
        run: |
          BOT_ID=$(gh api "/users/${APP_SLUG}[bot]" --jq .id)
          git -C www config user.name  "${APP_SLUG}[bot]"
          git -C www config user.email "${BOT_ID}+${APP_SLUG}[bot]@users.noreply.github.com"

      - name: Sync support/ and commit
        id: sync
        if: github.event_name != 'pull_request'
        run: |
          node scripts/sync-www-support.mjs \
            --build build \
            --repo www \
            --branch deploy/support \
            --message "deploy(support): ${GITHUB_SHA:0:9} 빌드 산출물 동기화"

      - name: Push deploy branch
        if: github.event_name != 'pull_request' && steps.sync.outputs.changed == 'true'
        run: git -C www push --force origin deploy/support

      - name: Create or update PR
        if: github.event_name != 'pull_request' && steps.sync.outputs.changed == 'true'
        env:
          GH_TOKEN: ${{ steps.app-token.outputs.token }}
          FILE_COUNT: ${{ steps.sync.outputs.count }}
        run: |
          cat > body.md <<EOF
          ## 요약

          \`rcloneview-support\` main 의 Docusaurus 빌드 산출물을 \`support/\` 에 반영합니다.

          - 소스 커밋: ${GITHUB_SERVER_URL}/${GITHUB_REPOSITORY}/commit/${GITHUB_SHA}
          - support/ 파일 수: ${FILE_COUNT}
          - 워크플로 실행: ${GITHUB_SERVER_URL}/${GITHUB_REPOSITORY}/actions/runs/${GITHUB_RUN_ID}

          이 PR 은 자동 생성됩니다. support main 에 새 푸시가 들어오면 같은 브랜치가
          갱신되고 이 본문도 최신 소스 커밋으로 교체됩니다.
          EOF

          PR=$(gh pr list -R bdrive/rcloneview_www --head deploy/support \
                 --state open --json number --jq '.[0].number // empty')
          if [ -z "$PR" ]; then
            gh pr create -R bdrive/rcloneview_www --base main --head deploy/support \
              --title "deploy(support): 빌드 산출물 동기화" --body-file body.md
          else
            gh pr edit "$PR" -R bdrive/rcloneview_www --body-file body.md
          fi
```

- [ ] **Step 4: 테스트 통과 확인**

```bash
cd /Users/ysh/work/rcloneview-support && npm test
```

Expected: PASS — 19개 테스트 모두 통과

- [ ] **Step 5: 커밋**

```bash
cd /Users/ysh/work/rcloneview-support
git add .github/workflows/deploy-www.yml scripts/deploy-workflow.test.mjs
git commit -m "feat(ci): www 동기화 PR 자동 생성 단계 추가

- GitHub App 토큰으로 www 를 얕게 체크아웃해 support/ 교체 후 force-push
- deploy/support 단일 브랜치를 재사용해 열린 PR 을 항상 0개 또는 1개로 유지"
```

---

### Task 5: 실패 알림 + 설정 문서

**Files:**
- Modify: `.github/workflows/deploy-www.yml`
- Modify: `scripts/deploy-workflow.test.mjs`
- Create: `.github/workflows/README.md`

**Interfaces:**
- Consumes: Task 4의 스텝들
- Produces: 없음 (마지막 워크플로 태스크)

- [ ] **Step 1: 실패하는 테스트 추가**

`scripts/deploy-workflow.test.mjs` 끝에 덧붙인다.

```js
test('실패 알림 스텝이 있고 기본 GITHUB_TOKEN 을 쓴다', () => {
  const notify = job.steps.find((s) => String(s.if ?? '').includes('failure()'));
  assert.ok(notify, '실패 알림 스텝이 있어야 한다');
  assert.ok(String(notify.if).includes("github.event_name != 'pull_request'"));
  assert.equal(notify.env.GH_TOKEN, '${{ github.token }}');
  assert.ok(notify.run.includes('gh issue create'));
  assert.ok(notify.run.includes('gh issue comment'), '중복 이슈 대신 코멘트를 달아야 한다');
  assert.ok(notify.run.includes('gh label create'), '라벨이 없으면 issue create 가 실패한다');
});
```

- [ ] **Step 2: 테스트 실행해 실패 확인**

```bash
cd /Users/ysh/work/rcloneview-support && npm test
```

Expected: FAIL — `실패 알림 스텝이 있어야 한다`

- [ ] **Step 3: 알림 스텝과 README 작성**

`.github/workflows/deploy-www.yml` 맨 끝에 덧붙인다.

```yaml
      - name: Report failure
        if: failure() && github.event_name != 'pull_request'
        env:
          GH_TOKEN: ${{ github.token }}
        run: |
          RUN_URL="${GITHUB_SERVER_URL}/${GITHUB_REPOSITORY}/actions/runs/${GITHUB_RUN_ID}"
          gh label create deploy-failure --force -c B60205 -d "support 배포 자동화 실패"
          ISSUE=$(gh issue list -R "${GITHUB_REPOSITORY}" --label deploy-failure \
                    --state open --json number --jq '.[0].number // empty')
          if [ -z "$ISSUE" ]; then
            gh issue create -R "${GITHUB_REPOSITORY}" --label deploy-failure \
              --title "support 배포 자동화 실패" \
              --body "커밋 ${GITHUB_SHA} 처리 중 실패했습니다. 실행 로그: ${RUN_URL}"
          else
            gh issue comment "$ISSUE" -R "${GITHUB_REPOSITORY}" \
              --body "커밋 ${GITHUB_SHA} 에서 다시 실패했습니다: ${RUN_URL}"
          fi
```

`.github/workflows/README.md`를 만든다.

````markdown
# 워크플로 설정

## deploy-www.yml — support 빌드 산출물을 rcloneview_www 로 동기화

`rcloneview-support` main 이 갱신되면 9로케일 빌드를 돌리고, 그 결과로
`bdrive/rcloneview_www` 의 `support/` 를 통째로 교체하는 PR 을 만든다.
PR 을 사람이 머지하면 Cloudflare Pages 가 프로덕션에 배포한다.

설계 배경은 `specs/2026-07-28-support-www-sync-design.md` 를 참고한다.

## 최초 1회 설정 (사람이 수행)

### 1. GitHub App 만들기

bdrive 조직 → Settings → Developer settings → GitHub Apps → **New GitHub App**

- Homepage URL: 아무 값 (예: `https://rcloneview.com`)
- Webhook: **Active 체크 해제**
- Repository permissions:
  - **Contents: Read and write**
  - **Pull requests: Read and write**
- Where can this GitHub App be installed?: Only on this account

### 2. 설치

만든 앱의 Install App → bdrive → **Only select repositories** →
**`rcloneview_www` 만** 선택해 설치한다. support 에는 설치하지 않는다.

### 3. 시크릿 등록

앱 설정 화면에서 App ID 를 확인하고, Private keys → Generate a private key 로
`.pem` 파일을 받는다.

`rcloneview-support` → Settings → Secrets and variables → Actions → New repository secret

| 이름 | 값 |
|---|---|
| `APP_ID` | 앱 설정 화면의 App ID (숫자) |
| `APP_PRIVATE_KEY` | 받은 `.pem` 파일의 내용 전체 (`-----BEGIN...` 줄 포함) |

봇 커밋 아이덴티티는 워크플로가 앱 슬러그에서 유도하므로 따로 설정할 것이 없다.

### 4. 확인

Actions 탭 → **Deploy support build to www** → Run workflow 로 수동 실행한 뒤,
`bdrive/rcloneview_www` 에 `deploy/support` 브랜치와 PR 이 생기는지 확인한다.

## 왜 support(public) 에서 도는가

bdrive 조직은 Free 플랜이라 private 저장소의 Actions 는 월 2,000분 한도다.
빌드 1회가 25분 안팎이라 80회면 소진된다. public 저장소는 무제한 무료다.

`push` 트리거는 포크 PR 에 시크릿을 넘기지 않으므로 support 가 public 이어도
시크릿은 노출되지 않는다. 앱을 `rcloneview_www` 하나에만 설치해 영향 범위를 좁혔다.

## 문제가 생기면

- 실패하면 support 저장소에 `deploy-failure` 라벨의 이슈가 열리고, 이후 실패는
  같은 이슈에 코멘트로 쌓인다.
- 워크플로를 잠시 끄려면 Actions 탭 → 해당 워크플로 → ⋯ → Disable workflow
- 잘못 배포된 내용은 www 에서 해당 머지 커밋을 revert 하면 Pages 가 다시 배포한다.
- 앱 권한을 회수하려면 조직 설정에서 설치를 제거하거나 private key 를 폐기한다.

## 알려진 제약

- `deploy/support` 브랜치에도 Cloudflare Pages 가 프리뷰 배포를 붙인다.
  배포 1사이클당 CF 빌드가 프리뷰 1회 + 프로덕션 1회로 총 2회 소모된다.
- 머지된 배포 1건마다 www 저장소가 약 40MB 커진다. 자세한 내용과 대응책은
  설계 문서 10장에 있다.
````

- [ ] **Step 4: 테스트 통과 확인**

```bash
cd /Users/ysh/work/rcloneview-support && npm test
```

Expected: PASS — 20개 테스트 모두 통과

- [ ] **Step 5: 커밋**

```bash
cd /Users/ysh/work/rcloneview-support
git add .github/workflows/deploy-www.yml .github/workflows/README.md scripts/deploy-workflow.test.mjs
git commit -m "feat(ci): 배포 실패 알림과 GitHub App 설정 문서 추가

- 실패 시 deploy-failure 라벨 이슈를 열고 재실패는 코멘트로 누적
- 앱 생성·설치·시크릿 등록 절차와 롤백 방법을 저장소에 기록"
```

---

### Task 6: 기존 수동 루틴 문서 정리

**Files:**
- Modify: `BLOG_FACTCHECK_PROMPT.md`
- Modify: `SCHEDULE_FACTCHECKER_PROMPT.md`
- Modify: `I18N_RUNBOOK_ko.md`

**Interfaces:**
- Consumes: Task 5까지 완성된 워크플로
- Produces: 없음

정리하지 않으면 루틴과 Actions 가 **양쪽에서 www PR 을 만든다.**

- [ ] **Step 1: `BLOG_FACTCHECK_PROMPT.md` 수정**

네 군데를 고친다.

(1) STEP 0 의 sibling 디렉터리 확인(55~59행) — 항목 4 전체를 지운다. 지울 내용:

```
4. Verify rcloneview_www exists as a sibling directory:

  ls ../rcloneview_www/

If not found, report the directory structure (ls ../) and stop.
```

(2) STEP 5 의 미러링 문단(285~297행) — "Then mirror the fresh build into the www checkout's support/ folder" 로 시작해 `cp -a build ../rcloneview_www/support` 와 그 아래 괄호 설명까지를 다음으로 교체한다.

```
빌드가 통과하면 여기서 끝이다. www 반영은 자동이다 —
STEP 6 에서 support 브랜치를 push 하고 그 PR 이 main 에 머지되면,
.github/workflows/deploy-www.yml 이 같은 빌드를 다시 돌려
rcloneview_www/support/ 를 교체하는 PR 을 자동으로 만든다.
이 단계의 빌드는 머지 전에 깨진 콘텐츠를 걸러내기 위한 검증이다.
```

(3) STEP 6 — 제목을 `STEP 6: DEPLOY — PUSH BOTH REPOSITORIES` 에서 `STEP 6: PUSH VERIFIED SOURCE` 로 바꾸고, `6-A. Push rcloneview_www (build output):` 블록(308~312행의 명령 포함)을 통째로 지운다. `6-B.` 는 `6.` 으로 번호를 바꾼다.

(4) STEP 6.5 — `PR 2 — rcloneview_www (build output):` 블록 전체를 지운다. PR 1 본문의 `## Companion PR` 절도 지운다. "Create both PRs simultaneously." 를 "Create the PR." 로 바꾼다.

(5) STEP 7 — 요약 목록에서 `- rcloneview_www: blog/deploy/{DATE} (build output)` 과 `- rcloneview_www: {PR URL}` 두 줄을 지우고, `- Action needed: "Merge both PRs to main"` 을 다음으로 바꾼다.

```
- Action needed: "Merge the support PR to main — www 반영은 Actions 가 자동으로 처리한다"
```

- [ ] **Step 2: `SCHEDULE_FACTCHECKER_PROMPT.md` 수정**

세 군데를 고친다.

(1) STEP 0 (25~29행) — 다음 블록을 지운다.

```
Also sync rcloneview_www (needed later for deployment):
  cd ../rcloneview_www
  git checkout main
  git pull origin main
  cd ../rcloneview-support
```

(2) STEP 5 (150~151행) — 구식 명령 두 줄을

```
  yarn install --frozen-lockfile
  yarn build --out-dir ../rcloneview_www/support
```

다음으로 교체한다. `--out-dir` 형식은 postbuild 프룬을 건너뛰어 산출물이 부푼다.

```
  npm ci
  npm run build
```

(3) STEP 6 — 제목을 `STEP 6: PUSH SOURCE` 로 바꾸고 `6-A. Commit and push rcloneview_www (build output):` 블록(166~173행)을 지운다. `6-B.` 를 `6.` 으로 바꾼다. STEP 7 요약에서 `  - rcloneview_www: blog/deploy/{DATE}` 줄을 지우고 마지막 줄을 다음으로 바꾼다.

```
- Action needed: "Merge the support branch to main via GitHub PR — www 반영은 Actions 가 자동으로 처리한다"
```

- [ ] **Step 3: `I18N_RUNBOOK_ko.md` 수정**

124행에서 다음 부분을 찾는다.

```
STEP 5 빌드는 `npm run build`(prebuild 이미지검사 + postbuild 프룬) 후 `rsync -a --delete build/ ../rcloneview_www/support/` 로 반영 — 구 `yarn build --out-dir`(프룬 no-op) 교체 완료.
```

다음으로 교체한다.

```
STEP 5 빌드는 `npm run build`(prebuild 이미지검사 + postbuild 프룬)로 검증만 한다 — www 반영은 `.github/workflows/deploy-www.yml` 이 main 머지 후 자동으로 처리한다(2026-07-28).
```

- [ ] **Step 4: 잔재가 없는지 확인**

```bash
cd /Users/ysh/work/rcloneview-support
grep -rn "rcloneview_www" *.md | grep -viE "자동|actions|deploy-www|워크플로"
```

Expected: 결과 없음. 남아 있다면 그 줄이 수동 배포 지시인지 확인하고 마저 고친다.

- [ ] **Step 5: 테스트가 여전히 통과하는지 확인**

```bash
cd /Users/ysh/work/rcloneview-support && npm test
```

Expected: PASS — 20개 테스트 모두 통과 (문서 수정이 워크플로에 영향을 주지 않았음을 확인)

- [ ] **Step 6: 커밋**

```bash
cd /Users/ysh/work/rcloneview-support
git add BLOG_FACTCHECK_PROMPT.md SCHEDULE_FACTCHECKER_PROMPT.md I18N_RUNBOOK_ko.md
git commit -m "docs(routine): 자동화와 중복되는 수동 www 배포 단계 제거

- 루틴은 support PR 하나만 만들고, www 반영은 Actions 가 처리한다
- 구식 yarn build --out-dir 지시를 npm run build 로 교체"
```

---

### Task 7: 통합 검증

**Files:** 없음 (검증 전용)

**Interfaces:**
- Consumes: Task 1~6 전체
- Produces: 없음

이 태스크는 **사람이 GitHub App 을 설정해야** 진행할 수 있다. 앞 태스크와 달리 코드 변경이 없다.

- [ ] **Step 1: 브랜치 push 하고 PR 을 연다**

```bash
cd /Users/ysh/work/rcloneview-support
git push -u origin feat/deploy-www-automation
gh pr create -R bdrive/rcloneview-support --base main --head feat/deploy-www-automation \
  --title "feat(ci): support 빌드 산출물 www 자동 동기화" \
  --body "설계: specs/2026-07-28-support-www-sync-design.md
계획: specs/2026-07-28-support-www-sync-plan.md

main 머지 전에 GitHub App 설정(.github/workflows/README.md)이 필요합니다."
```

- [ ] **Step 2: PR 검증 경로가 도는지 확인**

이 PR 자체가 `pull_request` 트리거를 발동시킨다.

```bash
RUN=$(gh run list -R bdrive/rcloneview-support --branch feat/deploy-www-automation \
        --workflow deploy-www.yml --limit 1 --json databaseId --jq '.[0].databaseId')
gh run view -R bdrive/rcloneview-support "$RUN"
```

Expected: `Install dependencies` → `Unit tests` → `Build (9 locales)` → `Free disk space` 까지만 실행되고, `Generate app token` 이하는 전부 skipped

- [ ] **Step 3: 빌드 실패가 게이트로 작동하는지 확인**

깨진 이미지 참조가 `prebuild`에서 걸리는지 확인한다. 워크플로의 `run: npm run build`는 종료 코드를 그대로 전파하고 `continue-on-error`가 없으므로(Task 3 테스트로 고정), 여기서 실패하면 배포 스텝에 도달하지 않는다.

```bash
cd /Users/ysh/work/rcloneview-support
cat > blog/9999-01-01-temp-gate-check.md <<'EOF'
---
title: 게이트 확인용 임시 글
authors: [jay]
---

![없는 이미지](/images/this-file-does-not-exist-gate-check.png)
EOF
npm run build; echo "exit=$?"
rm blog/9999-01-01-temp-gate-check.md
```

Expected: `✘ static/ 에 없는 자산 참조` 메시지와 함께 `exit=1`

- [ ] **Step 4: GitHub App 설정 (사람)**

`.github/workflows/README.md` 의 "최초 1회 설정" 절차대로 앱을 만들고 `rcloneview_www` 에만 설치한 뒤 `APP_ID`, `APP_PRIVATE_KEY` 를 support 시크릿에 등록한다.

- [ ] **Step 5: PR 을 머지하고 배포 경로를 확인**

머지하면 `push` 트리거가 돈다.

```bash
gh run list -R bdrive/rcloneview-support --branch main --limit 3
gh pr list -R bdrive/rcloneview_www --head deploy/support
```

Expected: www 에 `deploy/support` 브랜치와 PR 1개

- [ ] **Step 6: PR 내용이 올바른지 확인**

```bash
PR=$(gh pr list -R bdrive/rcloneview_www --head deploy/support --state open \
       --json number --jq '.[0].number')
echo "PR #$PR"
gh pr diff -R bdrive/rcloneview_www "$PR" --name-only | grep -cv '^support/'
```

Expected: `0` — `support/` 밖의 변경이 하나도 없어야 한다

```bash
gh pr view -R bdrive/rcloneview_www "$PR" --json body --jq .body
find /Users/ysh/work/rcloneview-support/build -type f | wc -l
```

Expected: 본문의 "support/ 파일 수" 가 아래 `find` 결과와 일치

- [ ] **Step 7: 재실행 시 PR 이 새로 생기지 않는지 확인**

support 에서 workflow_dispatch 로 한 번 더 실행한다.

```bash
gh workflow run "Deploy support build to www" -R bdrive/rcloneview-support
# 완료 후
gh pr list -R bdrive/rcloneview_www --head deploy/support --state open \
  --json number,updatedAt
```

Expected: PR 이 여전히 1개이고 번호가 `$PR` 과 같으며 `updatedAt` 만 갱신됨

- [ ] **Step 8: 머지하고 프로덕션 확인**

www 의 PR 을 머지한 뒤 Cloudflare Pages 프로덕션 배포가 성공하는지, `https://rcloneview.com/support/` 가 정상인지 확인한다.

---

## 완료 조건

- `npm test` 20개 통과
- support PR 에서 빌드 검증이 돌고 배포 스텝은 skip 된다
- main 머지 시 www 에 `deploy/support` PR 이 자동 생성되고, diff 가 `support/` 로만 한정된다
- 같은 브랜치 재실행 시 PR 이 갱신되고 새로 생기지 않는다
- 루틴 문서에 수동 www 배포 지시가 남아 있지 않다
