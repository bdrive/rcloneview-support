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
