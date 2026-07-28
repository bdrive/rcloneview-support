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
