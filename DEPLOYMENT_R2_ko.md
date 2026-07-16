# support 사이트 프로덕션 배포 가이드 (R2 + Worker)

> **처음 하는 사람도 이 문서만 보고 끝낼 수 있도록** 클릭 경로까지 적었다.
> 코드는 이미 저장소에 다 들어 있다 — 사람이 할 일은 Cloudflare 에서
> 버킷·토큰을 만들고 시크릿 3개를 등록하는 것뿐이다.
>
> 관련 코드: `.github/workflows/deploy.yml` (빌드+업로드),
> `workers/support-router/` (서빙 Worker). 배경 설명: `I18N_OVERVIEW_ko.md` 4장.

---

## 0. 구조 한눈에 (왜 이렇게 하나)

```
[변경 전] 빌드 산출물을 www 저장소에 커밋 → Cloudflare Pages 배포
          → 9로케일 빌드는 32,792개 파일 = Pages 의 20,000파일 제한 초과. 배포 불가.

[변경 후]
  main 에 머지 ──→ GitHub Actions 가 빌드 ──→ R2 버킷에 업로드 (파일 수 제한 없음)
                                                     │
  방문자 ── rcloneview.com/support/* ──→ Worker ──→ R2 에서 꺼내 서빙
  방문자 ── rcloneview.com/(나머지)  ──→ 기존 Pages 그대로 (변화 없음)
```

- 비용: R2 무료 구간(저장 10GB — 현재 산출물 1.2GB) + Worker 무료 플랜(10만 요청/일). 사실상 0원.
- www 사이트 배포 방식은 **아무것도 바뀌지 않는다**. `/support/*` 경로만 Worker 가 가로챈다.

---

## 1. 사전 확인 (1분)

- Cloudflare 계정에 `rcloneview.com` 존(도메인)이 있어야 한다 (이미 있음 — www 가 Cloudflare 로 서빙 중).
- 이 저장소(`bdrive/rcloneview-support`)의 `feature/i18n` 브랜치가 main 에 머지될 예정이어야 한다
  (deploy.yml 이 main 푸시에서 동작하므로).

---

## 2. Cloudflare 에서 R2 버킷 + API 토큰 만들기 (사람, ~10분)

### 2-1. R2 버킷 생성

1. https://dash.cloudflare.com 로그인
2. 왼쪽 메뉴 **R2 Object Storage** 클릭
   - 처음이면 "Purchase R2" 동의 화면이 나온다 — 무료 구간 내 사용은 과금 없음. 동의하고 진행.
3. **Create bucket** 클릭
4. Bucket name: `rcloneview-support` ← **정확히 이 이름** (deploy.yml 과 wrangler.toml 이 이 이름을 참조)
5. Location: Automatic (기본값) → **Create bucket**

### 2-2. R2 API 토큰 발급

1. R2 Object Storage 화면 오른쪽의 **{} API → Manage API tokens** (또는 "Manage R2 API Tokens") 클릭
2. **Create API token** 클릭
3. 설정:
   - Token name: `github-actions-support-deploy`
   - Permissions: **Object Read & Write**
   - Specify bucket(s): **Apply to specific buckets only** → `rcloneview-support` 선택
4. **Create API Token** 클릭
5. 화면에 나오는 세 가지 값을 복사해 둔다 (**이 화면을 벗어나면 다시 못 본다**):
   - `Access Key ID`
   - `Secret Access Key`
   - 엔드포인트 주소: `https://<계정ID>.r2.cloudflarestorage.com`
     (표시가 안 되면: R2 첫 화면 오른쪽의 Account ID 를 위 형식에 넣으면 된다)

### 2-3. GitHub Secrets 등록

1. https://github.com/bdrive/rcloneview-support → **Settings** 탭
2. 왼쪽 **Secrets and variables → Actions** → **New repository secret**
3. 아래 3개를 하나씩 등록 (이름 철자 정확히):

| Name | Value |
|------|-------|
| `R2_ACCESS_KEY_ID` | 2-2 에서 복사한 Access Key ID |
| `R2_SECRET_ACCESS_KEY` | 2-2 에서 복사한 Secret Access Key |
| `R2_ENDPOINT` | `https://<계정ID>.r2.cloudflarestorage.com` |

---

## 3. Worker 배포 (사람 + 터미널, ~5분)

Worker 코드는 `workers/support-router/` 에 이미 작성돼 있다. 배포만 하면 된다.

```bash
cd rcloneview-support/workers/support-router

# 최초 1회: 브라우저가 열리며 Cloudflare 로그인/승인
npx wrangler login

# 배포 (wrangler.toml 의 라우트가 함께 등록된다)
npx wrangler deploy
```

성공하면 `rcloneview.com/support*` / `www.rcloneview.com/support*` 라우트가
이 Worker 로 연결된다.

> ⚠️ **Pages 와의 우선순위**: rcloneview.com 이 Cloudflare Pages(git 연동)로
> 서빙 중이어도, 같은 존의 Worker 라우트가 **우선**한다. 배포 후 4장의 확인
> 절차에서 실제로 Worker 가 받는지 검증한다. 만약 Pages 가 계속 받는다면
> 대시보드 → Workers & Pages → (Pages 프로젝트) → Custom domains 와
> Workers Routes 설정을 확인할 것.

---

## 4. 첫 배포 실행과 확인 (~20분)

### 4-1. 콘텐츠 업로드

`feature/i18n` → `main` 머지 (GitHub PR). 머지 순간 GitHub Actions 가:

1. 9로케일 빌드 (~15분. postbuild 가 불필요한 사본 자동 삭제 → 1.2GB)
2. `rclone sync` 로 R2 업로드 (첫 회 ~수 분, 이후엔 변경분만)

진행 상황: 저장소 **Actions** 탭 → "Deploy support to R2" 실행 로그.

### 4-2. 동작 확인 체크리스트

터미널에서 (또는 브라우저로 직접):

```bash
curl -I https://rcloneview.com/support/                     # 200, text/html
curl -I https://rcloneview.com/support/ko/                  # 200 (한국어 홈)
curl -I https://rcloneview.com/support/ko/release-notes/v1.4  # 200 ← 점 포함 경로 (중요!)
curl -I https://rcloneview.com/support/blog/archive          # 200 (아카이브)
curl -I https://rcloneview.com/support/없는페이지             # 404 (404.html 반환)
```

브라우저 확인 포인트:

- [ ] `https://rcloneview.com/support/ko/` 한국어 홈 + 네비바 한국어
- [ ] 언어 선택기(푸터 하단 오른쪽)로 9개 언어 전환
- [ ] 릴리스 노트 → 한국어 v1.4 로 이동 (로케일 유지)
- [ ] 블로그 → All posts(아카이브) 카테고리/연도 뷰 + 필터

### 4-3. www 다국어 배포 (⚠️ 반드시 support 이후)

support 가 위 체크리스트를 통과한 **다음에** `rcloneview_www` 의
`feature/i18n` 을 main 에 머지한다 (Pages 가 자동 배포).

> 순서를 지켜야 하는 이유: www 로케일 페이지들의 네비/푸터가
> `/support/ko/...` 를 가리킨다. support 다국어가 먼저 떠 있지 않으면
> 이 링크들이 전부 404 가 된다.

### 4-4. 뒷정리 (www 저장소)

support 가 R2 로 서빙되는 것을 확인한 후:

1. `rcloneview_www` 저장소에서 구버전 `support/` 폴더(337MB, 영어 전용) 삭제 → 커밋
2. (있다면) 블로그 자동화 봇의 "www 에 빌드 커밋" 단계 제거

---

## 5. 이후의 일상 운영

- **글/문서 수정 → main 머지 → 자동 배포.** 사람이 할 일 없음.
- 번역 갱신도 동일 (i18n/ 파일 수정 → 머지 → 배포).
- HTML 은 `no-cache` 로 서빙되므로 배포 즉시 반영된다. 정적 자산은
  파일명에 해시가 있어 1년 캐시해도 안전하다 (Worker 가 헤더 설정).

## 6. 롤백

정적 파일이므로 롤백 = 이전 커밋 재배포:

```bash
git revert <문제 커밋> && git push   # → Actions 가 이전 상태로 재동기화
```

또는 Actions 탭에서 이전 성공 run 의 **Re-run all jobs**.

## 7. 트러블슈팅

| 증상 | 원인 후보 | 확인 |
|------|-----------|------|
| Actions 의 Sync 단계 실패 (403/401) | 시크릿 오타, 토큰 권한 부족 | 2-3 의 시크릿 3개 재확인, 토큰이 Object Read & Write 인지 |
| `/support/` 가 여전히 구버전 | Worker 라우트가 안 잡힘 (Pages 가 처리 중) | `npx wrangler deployments list`, 대시보드에서 라우트 확인 (3장 ⚠️) |
| 특정 페이지만 404 | R2 업로드 누락 | Actions 로그의 rclone 출력, `rclone ls r2:rcloneview-support | grep <경로>` |
| `/release-notes/v1.4` 404 | Worker 의 index.html 폴백 미동작 | Worker 코드의 ② 단계 — 점 포함 경로도 폴백해야 함 (src/index.js 주석 참조) |
| 배포했는데 브라우저에 안 보임 | 브라우저 캐시 | 강력 새로고침(Cmd+Shift+R). HTML 은 no-cache 라 원래 즉시 반영됨 |
| 언어 전환 시 404 | 특정 로케일 폴더 업로드 누락 | `rclone size r2:rcloneview-support` 로 전체 크기(≈1.2GB) 확인 |

## 8. 전체 순서 요약 (체크리스트)

- [ ] ① R2 버킷 `rcloneview-support` 생성 (2-1)
- [ ] ② R2 API 토큰 발급 (2-2)
- [ ] ③ GitHub Secrets 3개 등록 (2-3)
- [ ] ④ Worker 배포 — `npx wrangler login && npx wrangler deploy` (3)
- [ ] ⑤ support `feature/i18n` → main 머지 → Actions 자동 배포 (4-1)
- [ ] ⑥ 동작 확인 체크리스트 통과 (4-2)
- [ ] ⑦ www `feature/i18n` → main 머지 (4-3)
- [ ] ⑧ www 저장소의 구 `support/` 폴더 삭제 (4-4)
