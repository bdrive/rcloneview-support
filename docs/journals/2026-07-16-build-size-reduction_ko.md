# 2026-07-16 — 빌드 크기 감축 (feature/i18n)

> 9로케일 빌드가 1,264MB 였다. 843MB 로 줄였다 (**-421MB, -33%**).
> 콘텐츠는 한 줄도 고치지 않았다 — 전부 템플릿·설정 변경이라 앞으로 쓰는 모든 글에 자동 적용된다.

## 요약

| | before | after | 절감 |
|---|---|---|---|
| ja | 145M | 94M | -51M |
| ko | 140M | 91M | -49M |
| fr | 132M | 85M | -47M |
| zh-Hant | 133M | 87M | -46M |
| zh-Hans | 132M | 86M | -46M |
| es | 131M | 85M | -46M |
| de | 130M | 84M | -46M |
| id | 128M | 83M | -45M |
| blog (en) | 79M | 41M | -38M |
| assets (en) | 39M | 34M | -5M |
| img | 2.7M | 1.0M | -1.7M |
| **합계** | **~1,264M** | **~843M** | **-421M (-33%)** |

측정: `npm run build` (9로케일 + postbuild 프룬) 후 `du -sh *`.

## 진단 — 크기가 어디서 왔나

원본 마크다운은 로케일당 5.8MB 인데 빌드는 1,264MB 였다. 약 23배.

구성 비율을 재보니 **HTML 740MB (62%) + JS 326MB (27%)** 였고 **이미지는 전체의 7.5%** 에 불과했다.
즉 애셋이 아니라 페이지 수가 문제였다: 626 포스트 × 9 로케일 = 5,571 페이지, 각각 HTML + 하이드레이션용 JS 청크.

ko 로케일 blog 디렉토리(79.5MB)를 페이지 종류별로 쪼개니 진짜 원인이 나왔다:

| 페이지 종류 | 개수 | 크기 | 평균 |
|---|---|---|---|
| 실제 포스트 | 626 | 25.5MB | 41.7KB |
| **태그 페이지** | **459** | **39.2MB** | **87.5KB** |
| authors | 66 | 7.1MB | 110.8KB |
| 페이지네이션 | 61 | 7.4MB | 123.9KB |

**목록 페이지(53.7MB)가 실제 포스트(25.5MB)보다 2배 컸다.** 목록 페이지가 제목 목록이 아니라
**포스트 미리보기 전체를 임베드**하기 때문이다 (`security` 태그 페이지 = 108.7KB 중 101.6KB 가 미리보기 10개).
포스트당 평균 태그가 5.59개라 모든 포스트의 미리보기가 5.59회 중복 렌더된다.

## 변경 내역

### 1. archive 청크에서 미사용 `content` 제거 — `8257ae7` + `b0d2ccc`

Docusaurus 블로그 플러그인이 archive 라우트에 포스트 객체를 통째로 넘긴다
(`plugin-content-blog/lib/routes.js:88` — `archive: {blogPosts: listedBlogPosts}`).
각 글의 원본 마크다운 `content` 까지 청크에 실린다. 그런데 `src/theme/BlogArchivePage` 가 실제로 읽는 건
`permalink`/`date`/`title`/`tags` 4개뿐 — `content` 는 아무도 안 쓴다.

`archiveBasePath: null` 로 기본 라우트를 끄고, `src/plugins/blog-archive-slim.js` 가 `allContentLoaded`
훅에서 같은 경로·같은 컴포넌트를 슬림한 props 로 재등록한다.

- 청크 **9,273,815B → 810,128B (-91.3%)**, 9로케일 합계 약 62MB → 5.85MB
- 렌더 결과 바이트 단위 동일 (차이는 `<head>` 줄바꿈 1개 + 에셋 해시)
- 619개 포스트 링크 유지 (626 중 7개는 `unlisted: true` 라 원래 제외됨)
- `b0d2ccc` 는 리뷰 지적 반영: `@docusaurus/utils` 가 hoisting 으로만 잡히고 있어 `package.json` 에 3.7.0 선언

**주의:** 플러그인 이름이 `docusaurus-plugin-blog` 인 것은 의도적이다. theme-common 의 접두어 제거
정규식이 이 이름에서 `plugin-blog` html 클래스를 그대로 유지시킨다. 업스트림이 그 정규식을 조이면
**아무 에러 없이** 클래스가 바뀐다. 지금 이 클래스를 쓰는 CSS 는 없다.

### 2. og-image 최적화 — `8ba9b09`

`static/img/og-image.png` 가 **4482×2016 RGBA, 1,893,268B** 였다. OG 규격은 1200×630.

- **1200×630, 91,151B** 로 축소 (-95%)
- 크롭이 아니라 **축소 + 레터박스**. 원본 콘텐츠가 캔버스를 거의 꽉 채워(우측 여백 14px) 크롭하면
  좌측 마스코트와 우측 로고 그리드가 잘린다. 원본 배경이 검정이라 레터박스가 보이지 않는다.
- 9로케일 복사 기준 약 -15MB

### 3. 태그/저자 목록을 압축 항목으로 전환 — `90f0be4`

목록 페이지가 미리보기 전체 대신 **제목 + 날짜 + description** 만 렌더한다.

- `src/theme/BlogPostItemsCompact/` — 신규 항목 렌더러 (`BlogArchivePage` 의 목록 톤을 따름)
- `src/theme/BlogTagsPostsPage/` — eject swizzle
- `src/theme/Blog/Pages/BlogAuthorsPostsPage/` — eject swizzle
  (3.7 에서 최상위가 아니라 `Blog/Pages/` 하위에 있다)

실측:

| | before | after |
|---|---|---|
| ko 태그 459p | 41,108,812B | **6,679,839B (-83.8%)** |
| ko 저자 66p | 7.1MB | **1.2MB (-83%)** |

- **페이지 개수 459/66 은 9로케일 전부 유지.** 페이지 수가 아니라 페이지당 바이트를 줄인 것이다.
- **`/blog` 메인 목록과 페이지네이션은 손대지 않았다** — 블로그의 정문이라 미리보기를 유지.
  바이트 동일 확인(차이는 에셋 해시 2곳).

**왜 `BlogPostItems` 가 아니라 페이지 2개를 eject 했나:** 세 목록 페이지가 모두 `@theme/BlogPostItems`
를 타므로 그걸 고치면 `/blog` 까지 바뀐다. eject 하면 범위가 구조적으로 격리된다 — `/blog` 는
미리보기 렌더러를 import 하는 유일한 곳(`src/theme/BlogListPage/index.js:17`)으로 남는다.
업스트림 대비 델타는 파일당 정확히 2줄이며, 각 파일 헤더 주석에 무엇을 왜 바꿨는지 남겼다.

## 되돌린 것 — 태그 제거 (`4cb2f51` → `0d4571e`)

포스트당 태그를 5.59 → 3.13 개로 줄이는 작업을 구현했다가 **되돌렸다.**

**구현 결함이 아니다.** 검증은 전부 통과했다 (평균 3.13 정확히 달성, 태그 0개 포스트 0건,
로케일 간 태그 집합 일치, 태그만 변경되고 본문/keywords 무변경).

**접근이 지속 불가능해서다.** 새 글마다 태그 규율을 강제하고, 주제 태그 페이지 4개
(cloud-storage/backup/guide/cloud-sync)의 SEO 표면을 버려야 했다. 대신 템플릿을 고치니
약 5배 더 줄었고, 태그 177개를 전부 유지하며, 앞으로 쓰는 글에 자동 적용된다.
템플릿 수정 후 태그 제거의 한계 이득은 로케일당 3MB 로 쪼그라들었다.

**교훈: 콘텐츠가 아니라 템플릿을 고쳐라.**

## 이미 되어 있던 것 (내가 뒤늦게 발견)

- **로케일 static 프룬** — `scripts/prune-locale-static.mjs` + `package.json` 의 `postbuild` 훅
  (`8111194`, tayson-jeong, 7/15). Docusaurus 는 `static/` 을 로케일마다 복사하는데, 콘텐츠가
  이미지를 루트 절대경로(`/support/images/...`)로 참조하므로 로케일 사본은 죽은 파일이다.
  `images`/`videos`/`icons` 를 지우고 **`img/` 는 유지**한다 (favicon·로고·preview 3개 파일이
  `useBaseUrl` 경유로 로케일 경로 참조됨). 실측 **-544MB**, 깨진 참조 0건.
  → 빌드 결과에서 `images 67M` 이 **루트에만** 있고 로케일 디렉토리엔 없는 이유가 이것이다.
- **R2 배포** — `d0f845c`. `rclone sync build/ r2:rcloneview-support` → Worker 가 서빙.
  빌드 산출물을 git 에 커밋하지 않는다. (아직 `feature/i18n` 에만 있고 main 에는 없음.)

## 발견한 기존 문제 (이번 작업과 무관, 미해결)

### 1. 참조되는데 존재하지 않는 이미지 37개 — 라이브 버그

`blog/` 가 참조하는 고유 이미지 302개 중 **37개가 `static/` 에 없다.** 전 로케일 합계 666건 참조 →
**지금 프로덕션에서 깨진 이미지로 뜨고 있다.**

```
/support/images/en/howto/rcloneview-basic/sync-tab.png
/support/images/en/howto/remote-storage-connection-settings/add-azure-blob-storage.png
... 외 35개
```

`onBrokenLinks: 'throw'` 가 못 잡는다 — 그건 **라우트**를 검사하지 static 파일 존재 여부를 검사하지 않는다.
소유자가 필요하다.

### 2. ko 태그 페이지 H1 번역 깨짐

```
"가이드" 태그로 연결된 166개 게시물개의 게시물이 있습니다.
                         ^^^^^^^^^^^^^^^ 중복
```

`i18n/ko/code.json:397` 의 `{nPosts}` 가 이미 "166개 게시물" 로 전개되는데 템플릿이 "개의 게시물" 을
또 붙인다. 90f0be4 전후 바이트 동일로 기존 버그임이 확인됐다.

## 미결 판단 항목

- **schema.org 마이크로데이터 손실.** 상위 `BlogPostItemContainer` 는 각 항목을
  `<article itemProp="blogPost" itemScope itemType="https://schema.org/BlogPosting">` 로 감싸는데
  압축 목록은 `<li>` 만 낸다. 태그 페이지마다 있던 BlogPosting 블록 10개가 0이 되고,
  `BlogListPageStructuredData` 는 `/blog` 에만 걸려 있어 JSON-LD 폴백도 없다.
  본문 텍스트 손실 외의 **두 번째 SEO 비용**이며, `<li>` 에 복원하는 건 값싸다.
- **MIT 저작권 고지.** eject 한 파일들이 상위 MIT 헤더를 한글 주석으로 대체했다
  (`grep -rl "MIT license" src/theme/` → 0건). 기존 swizzle 도 전부 그러고 있어 이 저장소의
  관행이지만, 이 파일들은 95% 원본 그대로이고 MIT 는 substantial portions 에 고지 유지를 요구한다.
- **archive 슬림 payload 의 `tags`.** 슬림 JSON 628KB 중 약 495KB(79%)가 태그 객체인데
  소비처는 `tags[].label` 만 읽는다. `{label}` 만 남기면 9로케일 합계 약 3MB 추가 절감.
- **프룬 스크립트의 `--out-dir` 미지원.** `BUILD_DIR` 이 `<root>/build` 하드코딩이라
  `--out-dir` 빌드에서 **조용히 no-op** 한다 (에러도 없음). 현재 `deploy.yml` 은 `npm run build`
  를 쓰므로 문제없다. `--out-dir` 을 쓸 계획이 생기면 먼저 고쳐야 한다.

## 이 저장소에서 일할 때 주의할 것

- **`yarn build --locale ko` 는 로케일 경로를 테스트하지 않는다.** `defaultLocale: 'en'` 이라
  단일 로케일 빌드는 `build/` 루트로 평탄화된다 (`buildLocale.js:33`:
  `localizePath: cliOptions.locale?.length === 1 ? false : undefined`). 진짜 `build/ko/` 가
  필요하면 `--locale en --locale ko`. 전체 빌드는 약 13~15분.
- **`--out-dir` 빌드는 프룬이 안 걸린다.** 그 출력을 실제 배포 상태로 착각하면 546MB 를
  "중복됐다" 고 오판하게 된다. (이번에 내가 그랬다.)
- **grep 이 CJK 빌드 HTML 을 binary 로 취급해 조용히 0을 반환한다.** 검증 스크립트는 python 을 쓸 것.
- **프룬 판별식을 함부로 고치지 말 것.** `currentLocale !== defaultLocale` 만으로 판단하면
  `--locale ko` (루트 평탄화)와 `--locale ko --locale ja` (루트 static 부재) 두 경우에서
  사이트를 깨뜨린다. 현재 스크립트는 구조적 로케일 감지 + 루트 사본 존재 확인 **두 가드**를 쓴다.

## 커밋

```
90f0be4  perf(blog): 태그/저자 목록을 압축 항목으로 전환 (로케일당 -38MB)
0d4571e  Revert "blog: remove 5 near-universal tags to cut tag-page duplication"
b0d2ccc  fix(blog-archive-slim): declare @docusaurus/utils dep, correct route-drift comment
4cb2f51  blog: remove 5 near-universal tags to cut tag-page duplication   (되돌림)
8ba9b09  og-image.png를 1200x630 OG 규격으로 최적화
8257ae7  perf(blog): archive 청크에서 미사용 포스트 content 제거
```
