# 로컬 테스트 가이드 — 이대로 안 하면 "페이지를 찾을 수 없습니다"가 뜹니다

> 이 브랜치(feature/i18n)를 클론 받아 테스트하는 사람을 위한 문서.
> **Docusaurus 의 일반적인 실행 방법(`npm run serve`, `npm run start`)으로는
> 이 사이트를 온전히 볼 수 없다.** 이유와 올바른 방법을 설명한다.

---

## TL;DR — 올바른 실행법 (복사해서 실행)

```bash
# 터미널 1 — support 사이트 (이 저장소)
cd rcloneview-support
npm ci
npm run build                        # 9로케일 전체 빌드 (~15분, 최초 1회)
node scripts/preview-server.mjs      # → :3001

# 터미널 2 — www 사이트 (rcloneview_www 저장소, feature/i18n 브랜치)
cd rcloneview_www
node scripts/i18n/www-preview.mjs    # → :3002
```

**브라우저 진입점: http://localhost:3002/** ← 여기서 시작하면
www ↔ support 를 오가며 9개 언어 전부, 실서비스와 동일하게 탐색된다.

---

## 하지 말아야 할 실행법과 그 이유

### ❌ `npm run serve` — 점(.) 포함 경로가 전부 404

Docusaurus 의 `serve`(내부적으로 serve-handler)는 URL 에 점이 있으면
파일 확장자로 오인한다. `/support/release-notes/v1.4` 의 ".4" 를 확장자로
보고 디렉터리의 index.html 을 찾지 않아 **파일이 존재하는데도 404** 를 낸다.
→ 대신 `node scripts/preview-server.mjs` 를 쓸 것 (동일 역할 + 결함 없음 +
실서비스 Worker 와 같은 라우팅 규칙).

### ❌ `npm run start` (dev 서버) — 영어 외 전부 404

Docusaurus dev 서버는 **한 번에 한 로케일만** 띄울 수 있다 (공식 제약:
"각 로케일은 독립된 SPA"). 기본은 영어라서 언어 선택기로 한국어를 고르면
404 가 뜬다. 코드 수정(HMR)이 필요할 때만 쓰고, 특정 언어를 보려면:

```bash
npm run start -- --locale ko   # 한국어만 뜨는 dev 서버 (다른 언어는 404)
```

### ❌ 한쪽 사이트만 띄우기 — 네비 절반이 404

네비바의 **Plus / 다운로드**는 www 사이트(rcloneview_www) 페이지이고,
www 쪽 네비의 **지원 / 릴리스 노트 / 블로그**는 이 저장소 페이지다.
실서비스에선 같은 도메인이라 자연스럽게 이어지지만, 로컬에선 저장소가
분리돼 있어 **양쪽 프리뷰(:3001 + :3002)를 함께 띄워야** 끊기지 않는다
(두 서버가 서로 프록시/포워딩하도록 구성돼 있음).

---

## 이건 404 가 떠도 정상입니다

| 경로 | 이유 |
|------|------|
| www 의 EULA·개인정보처리방침의 번역판 | 법적 문서는 의도적으로 영문만 제공 (열린 결정) |
| 캠페인 페이지(`ad-*.html`, blackFriday 등)의 로케일 URL | 단명 페이지라 번역 대상에서 제외 |
| dev 서버(:3000)에서 영어 외 로케일 | 위 "npm run start" 항목 참조 |

## 테스트 체크리스트 (전부 통과해야 정상)

http://localhost:3002/ 에서 시작:

- [ ] 푸터 하단 오른쪽 언어 선택기로 **한국어** 전환 → `/ko/index.html`
- [ ] 네비: Plus → 한국어 가격 / 다운로드 → 한국어 다운로드
- [ ] 네비: 지원 → `/support/ko/` (한국어 support 홈, 카드 3종 한국어)
- [ ] 네비: 릴리스 노트 → 한국어 v1.4 (`/support/ko/release-notes/v1.4`) ← 점 경로!
- [ ] 네비: 블로그 → 한국어 블로그 → All posts(아카이브) 카테고리/연도 뷰 + 필터
- [ ] 언어 선택기로 日本語 등 다른 언어 전환 — 위 여정 반복 시 언어 유지
- [ ] 아무 글이나 열어 본문 번역 + 하단 prev/next + "전체 글 보기" 확인

## 문제가 있으면

- 화면이 예전 것 같다 → 강력 새로고침 (Cmd+Shift+R). 프리뷰 서버는
  no-store 를 보내지만, 과거 방문분이 캐시돼 있을 수 있다.
- `/support/*` 가 502 → 터미널 1(support 프리뷰)이 꺼진 것. 다시 실행.
- 빌드가 오래 걸린다 → 정상 (9로케일 ~15분). 완료 후엔 서버만 켜면 된다.
