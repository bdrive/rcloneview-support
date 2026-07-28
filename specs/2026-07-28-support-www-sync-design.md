# support 빌드 산출물 → rcloneview_www 자동 동기화 설계

- 작성일: 2026-07-28
- 대상 저장소: `bdrive/rcloneview-support` (워크플로 위치), `bdrive/rcloneview_www` (반영 대상)
- 상태: 설계 확정, 구현 대기

## 1. 배경

`rcloneview-support`는 Docusaurus 소스 저장소이고(`baseUrl: /support/`), 그 빌드 산출물이
`rcloneview_www/support/`에 통째로 커밋되어 Cloudflare Pages로 서빙된다.

현재 이 반영은 **전부 수동**이다. `BLOG_FACTCHECK_PROMPT.md` STEP 5~6.5에 적힌 대로
사람(또는 Claude 루틴)이 로컬에서 빌드하고, `rm -rf` + `cp -a`로 www 체크아웃을 덮어쓰고,
브랜치를 만들어 PR을 올린다.

GitHub Actions는 두 저장소 어디에도 없다. 과거 `rcloneview-support`에
`.github/workflows/deploy.yml`("Deploy support to R2")이 있었으나 R2 대상이었고,
2026-07-18 단 1회 실행 후 워크플로 파일 오류로 실패했으며(`if:` 에 `secrets` 컨텍스트 사용 —
해당 컨텍스트는 `if` 표현식에서 허용되지 않는다), 커밋 `89061fb`에서 킷 전체가 제거되었다.
팀 결정(2026-07-17)은 "기존 Pages 방식 유지"였다.

### 현재 실측치

| 항목 | 값 |
|---|---|
| 빌드 산출물 | 880MB / 33,609 파일 (postbuild 프룬 후) |
| 프룬 전 중간 산출물 | 약 1.4GB (`prune-locale-static.mjs`가 539MB 제거) |
| 로컬 빌드 시간 | 약 14분 (9로케일 풀빌드 9회) |
| `node_modules` | 6.7GB |
| www 저장소 크기 | GitHub 기준 1.56GB / 로컬 `.git` 1.77GiB |
| 배포 커밋 1건 diff | 약 16,000~18,500 파일 |
| 배포 커밋 1건 영구 증가분 | **약 40MB** (신규 blob 약 16,000개) |
| www main 브랜치 보호 | 없음 |
| bdrive 조직 플랜 | Free (private 저장소 Actions 월 2,000분) |

## 2. 목표 / 비목표

**목표**

- `rcloneview-support` main이 갱신되면 자동으로 9로케일 빌드를 수행한다.
- 그 결과로 `rcloneview_www/support/`를 통째로 교체하는 PR을 자동 생성/갱신한다.
- 머지 전에 빌드가 깨지지 않도록 support PR에서 빌드를 검증한다.
- 실패를 사람이 놓치지 않게 알린다.
- 자동화와 중복되는 기존 수동 루틴 단계를 문서에서 제거한다.

**비목표**

- www main 자동 머지 (사람이 머지 버튼을 누른다).
- 빌드 산출물을 git 밖으로 빼는 배포 방식 전환 (10장에 별건으로 기록).
- `yarn.lock` / `package-lock.json` 이중 lockfile 정리 (11장에 기록만).

## 3. 확정된 결정

| 결정 | 선택 | 이유 |
|---|---|---|
| 워크플로 위치 | `rcloneview-support` (public) | public 저장소는 Actions 무제한 무료. www는 private + 조직 Free 플랜이라 월 2,000분 한도이고 빌드 1회 25분이면 80회에 소진된다 |
| 반영 방식 | PR 자동 생성, 사람이 머지 | 프로덕션에 사람 게이트 유지 |
| 트리거 | main push마다 (경로 필터 없음) | 저장소 용량 증가는 push가 아니라 **머지** 횟수에 비례하므로(10장), push마다 빌드해도 용량 비용이 없다 |
| 브랜치/PR | 단일 브랜치 `deploy/support` 재사용 | 열린 PR이 항상 0개 또는 1개, 내용은 항상 최신 |
| 인증 | GitHub App 설치 토큰 | 만료 관리 불필요, 개인 퇴사와 무관, 커밋 작성자가 봇으로 남음 |
| 커밋 생성 방식 | raw git + `gh` CLI | 33,609파일 규모에서 동작이 예측 가능하고 "main 기준 리셋"을 직접 제어할 수 있다. `peter-evans/create-pull-request`는 그 제어가 어려워 제외 |

## 4. 아키텍처

파일 **1개**, 잡 **1개**로 구성한다.

```
.github/workflows/deploy-www.yml
```

잡을 build/deploy로 나누면 880MB · 33,609파일을 아티팩트로 넘겨야 하는데,
그 업로드만 수 분이 걸리고 스토리지도 소모한다. 한 잡 안에서 빌드 직후 바로 복사한다.
PR 이벤트에서는 배포 스텝만 건너뛴다.

```yaml
on:
  push:
    branches: [main]          # 빌드 + www PR
  pull_request:
    branches: [main]          # 빌드 검증만
  workflow_dispatch:          # 수동 재실행

concurrency:
  # 이벤트별로 그룹을 가른다 (아래 설명)
  group: deploy-support-${{ github.event_name == 'pull_request' && github.head_ref || 'main' }}
  cancel-in-progress: true    # 최신 main 상태만 의미가 있으므로 이전 실행은 취소

permissions:
  contents: read
  issues: write               # 실패 이슈/코멘트용 (support 저장소 내부)
```

`cancel-in-progress: true`가 안전한 이유: www로의 반영은 마지막 단계의 단일 ref
force-push 한 번뿐이고 git의 ref 갱신은 원자적이다. 중간에 취소되면 아무것도 반영되지 않는다.

**그룹을 이벤트별로 가르는 이유:** 그룹 이름이 상수면 트리거 종류와 무관하게 모든 실행이
같은 그룹에 들어간다. 그러면 배포가 도는 25~40분 사이에 누가 PR을 하나 열기만 해도
진행 중인 프로덕션 배포가 취소된다. 게다가 취소는 `failure()`가 아니라서
`if: failure()`로 걸어 둔 실패 알림 스텝이 돌지 않는다. www PR도 없고 이슈도 없는 채로
히스토리만 초록에 가깝게 남아 아무도 눈치채지 못한다.

push끼리의 취소는 그대로 유지해야 한다(더 새 빌드가 이전 빌드를 대체하는 것이 맞다).
그래서 `pull_request`일 때만 `github.head_ref`로 그룹을 갈라 PR 실행이 자기들끼리만
취소하게 하고, push와 `workflow_dispatch`는 `main` 그룹을 공유하게 둔다.

## 5. 실행 순서

```
[모든 이벤트 공통]
1. support 체크아웃 (fetch-depth: 1)
2. setup-node 20 + npm ci
3. npm run build              # prebuild 이미지검사 → 빌드 → postbuild 프룬
4. rm -rf node_modules        # 6.7GB 회수 (11장 디스크 항목)

[push / workflow_dispatch 에서만]
5. GitHub App 토큰 발급
6. www 체크아웃 (fetch-depth: 1, path: www)
7. deploy/support 브랜치를 www main HEAD에서 새로 생성
8. rm -rf www/support && cp -a build www/support
9. git add -A -f support → 파일 수 불변식 검증 → commit → force-push
10. 열린 PR 있으면 본문 갱신, 없으면 생성

[실패 시]
11. deploy-failure 라벨의 열린 이슈에 코멘트, 없으면 이슈 생성
```

### 스텝 정의

```yaml
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

      - run: npm ci --prefer-offline --no-audit --fund=false

      - name: Build (9 locales)
        env:
          NODE_OPTIONS: --max-old-space-size=6144
        run: npm run build

      - name: Free disk
        run: rm -rf node_modules

      - id: app-token
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

      - name: Replace support/ and push
        if: github.event_name != 'pull_request'
        working-directory: www
        env:
          APP_SLUG: ${{ steps.app-token.outputs.app-slug }}
          GH_TOKEN: ${{ steps.app-token.outputs.token }}
        run: |
          # 봇 아이덴티티는 앱 슬러그에서 유도한다 (하드코딩 없음)
          UID_BOT=$(gh api "/users/${APP_SLUG}[bot]" --jq .id)
          git config user.name  "${APP_SLUG}[bot]"
          git config user.email "${UID_BOT}+${APP_SLUG}[bot]@users.noreply.github.com"

          git switch -C deploy/support          # 체크아웃 HEAD == www main

          rm -rf support
          cp -a ../build support
          git add -A -f support                 # -f: www .gitignore 우회 (6장)

          built=$(find ../build -type f | wc -l)
          staged=$(git ls-files support | wc -l)
          if [ "$built" != "$staged" ]; then
            echo "::error::파일 수 불일치 — build=$built support=$staged"
            exit 1
          fi

          if git diff --cached --quiet; then
            echo "변경 없음 — 푸시 생략"
            echo "changed=false" >> "$GITHUB_ENV"
            exit 0
          fi
          echo "changed=true" >> "$GITHUB_ENV"

          git commit -m "deploy(support): ${GITHUB_SHA::9} 빌드 산출물 동기화"
          git push --force origin deploy/support

      - name: Create or update PR
        if: github.event_name != 'pull_request' && env.changed == 'true'
        env:
          GH_TOKEN: ${{ steps.app-token.outputs.token }}
        run: |
          # 주의: heredoc 본문에 선행 공백이 있으면 마크다운이 코드블록으로 렌더된다.
          # 실제 YAML에서는 들여쓰기 없이 작성할 것.
          cat > body.md <<EOF
          ## 요약
          \`rcloneview-support\` main의 Docusaurus 빌드 산출물을 \`support/\`에 반영합니다.

          - 소스 커밋: ${GITHUB_SERVER_URL}/${GITHUB_REPOSITORY}/commit/${GITHUB_SHA}
          - support/ 파일 수: $(cd www && git ls-files support | wc -l)
          - 워크플로 실행: ${GITHUB_SERVER_URL}/${GITHUB_REPOSITORY}/actions/runs/${GITHUB_RUN_ID}

          이 PR은 자동 생성됩니다. main에 새 푸시가 들어오면 같은 브랜치가 갱신되고
          이 본문도 최신 소스 커밋으로 교체됩니다.
          EOF

          PR=$(gh pr list -R bdrive/rcloneview_www --head deploy/support \
                 --state open --json number -q '.[0].number')
          if [ -z "$PR" ]; then
            gh pr create -R bdrive/rcloneview_www --base main --head deploy/support \
              --title "deploy(support): 빌드 산출물 동기화" --body-file body.md
          else
            gh pr edit "$PR" -R bdrive/rcloneview_www --body-file body.md
          fi

      - name: Notify on failure
        if: failure() && github.event_name != 'pull_request'
        env:
          GH_TOKEN: ${{ github.token }}
        run: |
          gh label create deploy-failure --force -c B60205 -d "support 배포 자동화 실패"
          # 열린 이슈 있으면 코멘트, 없으면 생성
```

### 7번 단계가 핵심인 이유

브랜치를 매번 **현재 www main HEAD에서 새로 뻗는다.** 직전 PR이 머지되지 않은 채 남아 있어도
그 위에 쌓지 않으므로, PR diff에 `support/` 외의 남의 변경이 섞이지 않는다.
`actions/checkout`이 이미 main을 체크아웃한 상태이므로 `git switch -c`만으로 충족된다.

## 6. 안전장치

### 빌드 실패 시 배포하지 않음

`npm run build`가 0이 아니면 잡이 그 자리에서 멈춘다. `prebuild`의 이미지 참조 누락 검사
(`scripts/check-image-refs.mjs`)와 Docusaurus의 중복 라우트 경고도 여기서 걸린다.

### 파일 수 불변식 검증

이 검증이 없으면 **조용히** 깨질 수 있다. www의 `.gitignore`에는 다음 패턴이 있다.

```
dist/
build/
*.log
.DS_Store
*.tmp
```

`build/`는 경로 어디에서든 그 이름의 디렉터리에 매칭되므로, 앞으로 문서에 `dist/` 폴더나
`foo.log` 파일이 포함되면 `git add`가 말없이 빼먹는다.
그래서 `git add -A -f`로 무시 규칙을 우회하고, 스테이징 결과를 원본과 대조한다.

```
find ../build -type f | wc -l   ==   git ls-files support | wc -l
```

2026-07-28 기준 빌드 산출물에는 위 패턴과 충돌하는 항목이 없고(0건), 20MB를 넘는 파일도 없다.
GitHub의 파일당 100MB 하드 리밋에도 여유가 있다.

### 변경 없음 처리

스테이징 결과가 비면 푸시와 PR 단계를 건너뛴다. 빌드에 영향 없는 커밋(루트 가이드 md 등)이
main에 들어온 경우가 여기 해당한다. 경로 필터 대신 이 방식으로 무의미한 PR을 막는다.

### 실패 알림

`if: failure()`에서 `deploy-failure` 라벨의 열린 이슈를 찾아, 있으면 실행 링크를 코멘트하고
없으면 새로 만든다. 매 실패마다 이슈가 쌓이지 않게 한다.
support 저장소 내부 작업이므로 기본 `GITHUB_TOKEN`으로 충분하며 추가 시크릿이 필요 없다.
`gh issue create --label`은 라벨이 없으면 실패하므로 `gh label create --force`를 먼저 호출한다.

## 7. 사전 준비 (사람이 한 번 수행)

1. bdrive 조직 → Settings → Developer settings → GitHub Apps → **New GitHub App**
   - Repository permissions: **Contents: Read and write**, **Pull requests: Read and write**
   - Webhook: 비활성
2. 생성된 앱을 **`rcloneview_www` 저장소에만** 설치
3. App ID 확인, Private key 생성(.pem 다운로드)
4. `rcloneview-support` → Settings → Secrets and variables → Actions에 등록
   - `APP_ID`
   - `APP_PRIVATE_KEY` (.pem 파일 내용 전체)

봇 커밋 아이덴티티는 워크플로가 `create-github-app-token`의 `app-slug` 출력에서
유도하므로(5장), 앱 이름이 무엇이든 별도 설정이 필요 없다.

support가 public이어도 포크 PR에 시크릿이 노출되지 않는 이유는 트리거 종류가 아니라 둘이다.
첫째, GitHub은 포크에서 온 `pull_request` 실행에 시크릿을 아예 넘기지 않는다.
둘째, 토큰을 다루는 배포 스텝마다 `github.event_name != 'pull_request'` 가드가 있어
PR 경로에서는 실행되지 않는다.
따라서 `pull_request_target`으로 바꾸면 첫 번째 보호가 사라지므로 쓰지 않는다.

남는 위험은 "support에 write 권한이 있는 구성원은 워크플로를 통해 토큰을 사용할 수 있다"이며,
앱을 `rcloneview_www` 하나에만 설치해 영향 범위를 제한한다.

## 8. 기존 루틴 문서 정리

정리하지 않으면 루틴과 Actions가 **양쪽에서 www PR을 만든다.**

| 파일 | 변경 |
|---|---|
| `BLOG_FACTCHECK_PROMPT.md` | STEP 5의 `rm -rf ../rcloneview_www/support` / `cp -a build ../rcloneview_www/support` 제거 (빌드 검증 자체는 유지). STEP 6-A(www 브랜치 push) 삭제. STEP 6.5의 PR 2(www) 삭제. STEP 7 요약에서 www 브랜치/PR 항목 제거. 초반 "verify rcloneview_www exists as a sibling directory" 확인 절차 제거 |
| `SCHEDULE_FACTCHECKER_PROMPT.md` | 앞부분 www 클론/동기화 단계 삭제. STEP 6 "DEPLOY TO rcloneview_www" 삭제. 구식 `yarn build --out-dir ../rcloneview_www/support` 라인 삭제 |
| `I18N_RUNBOOK_ko.md` | 124행의 수동 `rsync -a --delete build/ ../rcloneview_www/support/` 설명을 자동화 설명으로 교체 |

정리 후 루틴의 산출물은 **support PR 하나**뿐이며, 그것을 머지하면 Actions가 www PR을 만든다.

## 9. 검증 방법

1. **PR 검증 경로** — support에 사소한 변경으로 PR을 열어 빌드 잡이 돌고 www 관련 스텝이
   전부 건너뛰어지는지 확인한다.
2. **실패 경로** — 존재하지 않는 이미지를 참조하는 문서로 PR을 열어 `prebuild`에서
   실패하는지 확인한다.
3. **배포 경로** — `workflow_dispatch`로 수동 실행한 뒤 다음을 확인한다.
   - www에 `deploy/support` 브랜치와 PR이 생성됨
   - PR diff의 변경 경로가 전부 `support/` 하위임
   - `git ls-files support | wc -l`이 빌드 산출물 파일 수와 일치
   - Cloudflare Pages 프리뷰 배포가 성공
4. **재실행 경로** — 머지하지 않은 상태에서 한 번 더 실행해 PR이 새로 생기지 않고
   기존 PR이 갱신되는지 확인한다.
5. **머지 후** — main 머지 후 Cloudflare Pages 프로덕션 배포가 붙고
   `https://rcloneview.com/support/`에 반영되는지 확인한다.

## 10. 저장소 용량 (별건으로 추적)

측정 결과, **머지된 배포 1건당 약 40MB가 영구히 증가**한다.

```
bec9d5be67  신규 blob 16,023개, 디스크 40MB
fffa1cbb60  신규 blob 15,140개, 디스크 41MB
현재 .git 크기: 1.77GiB
```

머지 전 force-push된 중간 빌드는 unreachable이 되어 결국 GC되므로,
**증가량은 push 횟수가 아니라 머지 횟수에 비례한다.** 하루 1회 머지 기준 연 약 15GB.
GitHub 권장 상한 5GB는 약 8개월 뒤 넘어서고, 하드 리밋 100GB까지는 수 년 여유가 있다.

### 히스토리 정리로는 줄일 수 없다

GitHub은 PR의 head 커밋을 `refs/pull/N/head`로 영구 보관한다. 브랜치를 지워도, 머지해도 남는다.
www 저장소에서 실측한 결과 PR ref 110개가 모두 살아 있었고, 브랜치가 이미 삭제된
`blog/deploy/2026-07-24·25·27`의 head 커밋이 그대로 접근 가능했다.

따라서 `git filter-repo`로 `support/`를 도려내고 main을 force-push해도 그 객체들은
PR ref에서 여전히 reachable이라 GitHub 쪽 사용량이 줄지 않는다.
로컬 `git gc`는 GitHub 사용량과 무관하고, 서버 측 repack은 GitHub이 이미 주기적으로 수행한다.

실제로 줄이는 선택지는 셋뿐이다.

1. **GitHub Support 티켓** — filter-repo + force-push 후 stale PR ref 정리와 repack을 요청.
   가능하지만 사람이 티켓을 열고 응답을 기다려야 하므로 자동화도 주기적 루틴도 될 수 없다.
2. **www 저장소 재생성** — 확실하지만 이슈·PR 히스토리를 잃는다.
3. **`support/`를 git 밖으로** — `wrangler pages deploy` 직접 업로드 또는 R2(2026-07-17 반려안).
   근본 해결이지만 "www 저장소에 커밋한다"는 현재 요구와 충돌한다.

본 설계는 1~3을 채택하지 않는다. 다만 3번으로 전환하게 되더라도 이 워크플로의
**마지막 배포 스텝만 교체**하면 되므로(빌드·검증·알림은 그대로 재사용) 버려지는 작업은 없다.

## 11. 운영 주의

**Cloudflare Pages 프리뷰 빌드** — `deploy/support` 브랜치에도 Pages가 프리뷰 배포를 붙인다
(기존 `blog/deploy/*` 브랜치에서 확인됨). 배포 1사이클당 CF 빌드가 프리뷰 1회 + 프로덕션 1회로
총 2회 소모된다. 불필요하면 Pages 설정의 브랜치 컨트롤에서 프리뷰를 끈다.

**러너 디스크** — ubuntu-latest의 여유 공간은 약 14GB인데, `node_modules` 6.7GB +
프룬 전 빌드 1.4GB + www 작업트리 약 1.2GB를 그냥 쌓으면 아슬아슬하다.
빌드 직후 `node_modules`를 지운 뒤 www를 체크아웃하는 순서로 회피한다.
그래도 부족하면 `setup-node`의 `cache: npm`을 먼저 뺀다(npm 캐시도 같은 디스크를 쓴다).

**www 체크아웃 시간** — www는 1.56GB 저장소라 `fetch-depth: 1`이어도 최신 트리 전체를
받아야 한다(수백 MB, 수 분). 얕은 클론이므로 히스토리는 받지 않으며, 여기서 만든 커밋을
push하는 데 문제가 없다.

**빌드 메모리·시간** — 로컬 14분 기준으로 러너(4 vCPU)에서는 25~40분을 예상한다.
`timeout-minutes: 90`으로 여유를 두고, `NODE_OPTIONS=--max-old-space-size=6144`로 OOM을 예방한다.

**이중 lockfile** — 저장소에 `package-lock.json`(878KB)과 `yarn.lock`(494KB)이 함께 있다.
워크플로는 `npm ci`(= `package-lock.json`)를 쓴다. `yarn.lock`은 사용되지 않으므로
재현성 혼선을 막으려면 별도로 정리하는 편이 낫다. 본 작업 범위에는 넣지 않는다.

## 12. 롤백

- 워크플로 비활성: GitHub Actions 화면에서 workflow disable, 또는 `.github/workflows/deploy-www.yml` 삭제
- 문서 정리 되돌리기: 해당 커밋 `git revert`
- 잘못 배포된 내용: **support를 먼저 고친다.** support가 소스 오브 트루스이므로
  www만 revert하면 다음 push 때 같은 소스로 다시 빌드되어 되돌린 내용이 되살아난다.
  1. support에서 문제 커밋을 revert하거나 수정해 main에 머지 → 자동화가 새 PR을 만들고,
     그것을 머지하면 정상 상태가 배포된다
  2. 즉시 복구가 필요하면 1과 별개로 www의 해당 머지 커밋을 revert (Pages가 자동 재배포).
     단, 1을 하지 않으면 다음 배포에서 되돌아온다
- GitHub App 회수: 앱 설치 제거 또는 private key 폐기

## 13. 산출물

1. `rcloneview-support/.github/workflows/deploy-www.yml` (신규)
2. `rcloneview-support/BLOG_FACTCHECK_PROMPT.md` (수정)
3. `rcloneview-support/SCHEDULE_FACTCHECKER_PROMPT.md` (수정)
4. `rcloneview-support/I18N_RUNBOOK_ko.md` (수정)
5. `rcloneview-support/.github/workflows/README.md` (신규) — 7장의 GitHub App 설정 절차와
   롤백 방법을 저장소에 남긴다
