#!/usr/bin/env node
// 빌드 산출물(build/)로 www 체크아웃의 support/ 를 통째로 교체한다.
//
// push 와 PR 생성은 워크플로가 맡는다 — 자격증명과 네트워크가 필요해
// 로컬에서 테스트할 수 없기 때문이다. 이 파일은 테스트 가능한 부분만 담는다.
import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

// execFileSync 의 기본 maxBuffer 는 1MiB 인데 이 규모에서는 턱없이 모자란다.
// 실측(2026-07-28): 실제 www 에서 `git ls-files support` 출력이 1,666,095 바이트(33,609줄)로
// 기본값의 1.59배라 countStaged 가 매 실행마다 ENOBUFS 로 죽는다.
// `git commit` 도 변경 경로마다 create/delete mode 한 줄을 찍어 전체 교체 시 2MB 를 넘는다.
// 호출 지점마다 따로 챙기지 않도록 여기서 한 번에 올린다.
export function git(repoDir, args) {
  return execFileSync('git', ['-C', repoDir, ...args], {
    encoding: 'utf8',
    maxBuffer: 256 * 1024 * 1024,
  });
}

// 브랜치를 현재 HEAD(= www main) 기준으로 새로 만들고 support/ 를 교체한다.
// -C 는 같은 이름의 브랜치가 이미 있어도 덮어쓴다.
export function stageBuild({ buildDir, repoDir, branch }) {
  if (!fs.existsSync(buildDir)) {
    throw new Error(`빌드 디렉터리가 없다: ${buildDir}`);
  }

  git(repoDir, ['switch', '-C', branch, '-q']);

  const dest = path.join(repoDir, 'support');
  fs.rmSync(dest, { recursive: true, force: true });
  // cp -a 로 권한·타임스탬프를 보존한다. 기존 수동 절차와 동일한 명령이다.
  execFileSync('cp', ['-a', buildDir, dest]);

  // -f 는 www 의 .gitignore(dist/ build/ *.log)를 우회한다.
  // 이게 없으면 산출물 일부가 말없이 빠진다.
  git(repoDir, ['add', '-A', '-f', 'support']);
}

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
