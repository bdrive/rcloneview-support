# 2026-07-18 — 깨진 이미지 근본 원인 제거 + 로케일 복수형 번역 교정

2026-07-16 저널(빌드 크기 감축)의 미결 항목 중 ①깨진 이미지 37개, ②ko 태그
페이지 H1 중복을 조사·수정했다. 둘 다 보고된 것보다 범위가 넓었다.

## 1. 깨진 이미지 — 원인은 template.md의 가짜 카탈로그

실측: blog가 참조하는 고유 이미지 305개 중 **40개가 static/에 없음**
(저널의 37개와 집계 방식 차이). howto/tutorials/release-notes의 참조
297개는 전부 정상 — 문제는 블로그에만 있었다.

추적 결과 누락 40개의 출처는 두 갈래:

- **36개 = `blog/template.md`의 이미지 카탈로그에 실린 가짜 항목.**
  git 전 이력·라이브 배포본(www `support/`) 어디에도 존재한 적 없는
  파일명들이다(`add-webdav-remote.png` 등 — 실제 파일은
  `add-webdav-remote-name.png`처럼 다른 이름). 템플릿 작성 시점에
  추측으로 만들어진 목록으로 보인다. 봇이 글을 쓸 때 이 카탈로그에서
  이미지를 고르므로, **여기 가짜가 있는 한 깨진 이미지는 계속 재생산된다.**
- **4개 = 발행 글 4편이 위 패턴대로 지어낸 tutorials 경로.** 이 중 실제
  `<img>`로 노출된 것은 1편(2025-09-24 Storj 글, ×9로케일)뿐이고 나머지
  3편은 HTML 주석(placeholder)이라 빌드에서 제거되어 화면 노출은 없었다.

수정:

- template.md에서 가짜 항목 36개(라벨+img 72줄) 제거 → 카탈로그 376개
  참조 전부 실재 확인
- 글 4편 × 9로케일(en+8)에서 깨진 img/placeholder 제거. Storj 글의
  이미지는 **대체하지 않고 제거** — Storj용 실물 스크린샷이 없는 상태에서
  다른 저장소(Box/Mega) 화면을 넣는 것은 오정보라서다.
- **재발 방지: `scripts/check-image-refs.mjs` 신설, `prebuild` 훅 연결.**
  전 콘텐츠(원문+8로케일)의 `/images|/icons|/img|/videos` 참조 실재 여부를
  검사하고 누락 시 빌드를 실패시킨다. 외부 URL 예시
  (`https://cdn.example.com/videos/...`)는 룩비하인드로 제외.
  수동 실행: `npm run check:images`.

## 2. 태그 페이지 제목 — ko만이 아니라 ja·id도 깨져 있었다

`Intl.PluralRules` 카테고리 수와 code.json 메시지의 `|` 분절 수를 8로케일
전수 대조한 결과(Docusaurus `selectMessage` 로직 재현):

| 로케일 | 증상 | 원인 |
|---|---|---|
| ko | ""가이드" 태그로 연결된 166개 게시물**개의 게시물**이 있습니다" | `{nPosts}`가 이미 "166개 게시물"인데 단위를 또 붙임 |
| ja | "タグの記事が166**件件**あります" | 동일 (件 중복) |
| id | 태그 166개 글이 "**Satu pos**(1개)"로, 모든 글 읽기 시간이 "**Satu menit**(1분)"으로 표시 | 인도네시아어는 복수형 카테고리가 `other` 1개뿐 → 2형 메시지에서 항상 첫 형(단수)이 선택됨. **5개 키 전부 해당** (post/readingTime/DocCard/SearchPage/nDocsTagged) |
| es·fr | 표면상 정상 | 카테고리 3형(one/many/other) vs 메시지 2형 — many는 100만 이상에서만 선택되어 실害 없음. 정합을 위해 3형으로 정렬 |
| de·zh-Hans·zh-Hant | 정상 | — |

수정: i18n/{ko,ja,id,es,fr}/code.json 19줄. ja는 docs 태그 문구
`{count}記事`→`{count}件の記事` 어색함도 함께 교정.

규칙(런북 4장에 추가): 복수형 메시지의 `|` 분절 수는 로케일의
`Intl.PluralRules` 카테고리 수와 일치시킬 것 — ko/ja/zh/id=1형, de=2형,
es/fr=3형. `{nPosts}`류 삽입값 뒤에 단위 반복 금지.

## 검증

- `npm run check:images` → 고유 자산 420개 전부 실재, exit 0
- 클린 재빌드(9로케일) exit 0 + ko/ja/id/es 태그 페이지 제목,
  id 글 목록 읽기 시간 표기 확인

## 남은 것 (이번 범위 밖)

- schema.org 마이크로데이터 복원(2026-07-16 저널 미결 ③) —
  `BlogPostItemsCompact` 수정 사안이라 별도 진행
- eject된 테마 파일 14개의 MIT 고지 부재 — 저장소 관행 논의 필요
