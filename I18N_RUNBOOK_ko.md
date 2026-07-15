# i18n 작업 런북 — 번역 배치 실행·검증·재개 절차

> 실무용 문서. 새 Claude 세션(또는 사람)이 이 문서만 보고 번역 배치를 이어서 돌릴 수 있도록 모든 절차·규칙·함정을 기록한다.
> 배경·구조 설명은 [I18N_OVERVIEW_ko.md](./I18N_OVERVIEW_ko.md) 참고.
> 최종 갱신: 2026-07-09

---

## 1. 현재 상태

- 브랜치: `feature/i18n` (origin 미푸시, 푸시/PR 시점은 사장님 결정 대기)
- 진행: **블로그 619편 + docs 80편 완역** (× 8로케일 = 5,592파일 + 사이드바 라벨), 전체 빌드 통과. support 사이트 콘텐츠 번역 100% 완료
- 커밋 이력:

| 커밋 | 내용 |
|---|---|
| `1a13371` | i18n 설정 + UI 문자열 + tags.yml 번역 (8로케일) |
| `36a90f0` | 원문 콘텐츠 정규화 (링크 88파일, 태그 37파일) |
| `f3db344` | 번역 파이프라인 스크립트 + 파일럿 |
| `965609c` | 배치 1: 98포스트 (784파일) |
| `aadfa87` | 배치 2: 80포스트 (640파일) |
| `1681ee9` | 배치 3: 100포스트 (800파일) |
| `617cb00` | 배치 4: 80포스트 (640파일) |
| `a709567` | 배치 5: 80포스트 (640파일) — 결함 0, zh-Hans 자동교정 2건 |
| `1a286e1` | 배치 6: 80포스트 (640파일) — 결함 0, de 수동교정 2건 (표 헤더·링크 텍스트) |
| `1341c68` | 배치 7(블로그 최종): 99포스트 (792파일) — 아티팩트 자동교정 규칙 추가(</invoke>), YAML 3건, 원문 버그 6종 수리 |
| (HEAD) | docs 배치: 80문서 (640파일) + howto 사이드바 라벨 8로케일 — scripts/docs-i18n-batch.workflow.js 신설, 검증기 docs 확장 |

- 번역 방식: **API 키/Batch API 사용 안 함** (사장님 명시 거부). Claude Code 구독 세션 안에서 Sonnet 서브에이전트로 번역. 세션 사용량 윈도우에 맞춰 배치당 80~100포스트.
- 실측 비용/시간: 배치당(640~800 에이전트) 약 40~70분, Sonnet 토큰 약 1,400만 (번역 1건당 22~25k).
- 결함률: 배치 3~4 기준 ~0.3%, 전부 검증 단계에서 자동 교정됨.

## 2. 번역 배치 실행 절차 (Claude Code 세션)

### ① 미번역 목록 계산 (파일 존재 여부 기준)

```python
from pathlib import Path
posts = sorted([p.name for p in Path('blog').glob('*.md') if p.name != 'template.md'], reverse=True)
done = {p.name for p in Path('i18n/ko/docusaurus-plugin-content-blog').glob('*.md')}
batch = [p for p in posts if p not in done][:80]   # 배치 크기 80~100
```

- 기준 로케일은 ko (모든 배치가 8로케일 동시 생성이므로 ko 존재 = 완료로 간주 가능).
- `template.md`는 번역 대상 아님.

### ② Workflow 실행

Claude Code의 Workflow 도구로 `scripts/blog-i18n-batch.workflow.js`를 실행한다:

- `scriptPath`: 이 저장소의 `scripts/blog-i18n-batch.workflow.js`
- `args`: `{"posts": [①에서 계산한 파일명 배열]}` — **JSON 값으로 전달** (문자열로 감싸면 스크립트가 방어적으로 파싱하긴 함)
- 동작: 포스트 × 8로케일 쌍마다 Sonnet 에이전트(`model: 'sonnet'`, `effort: 'low'`)가 원문을 Read → 번역 → `i18n/{locale}/docusaurus-plugin-content-blog/{파일명}`에 직접 Write. 동시 실행 ~10개.
- 스크립트 안의 프롬프트(STRICT RULES 8개)와 용어집이 번역 품질의 핵심 — **수정 시 신중히**.

### ③ 검증 (4단계, 순서대로)

```bash
# 1+2단계: 구조 검사 + YAML + 아티팩트 자동 교정 (</content> 제거, de 인용부호)
.venv/bin/python scripts/validate_i18n.py     # "문제 0건" 확인

# 3단계: MDX 컴파일 검사
node scripts/mdx_check.mjs                    # "실패 0" 확인

# 4단계: 9로케일 전체 빌드 — 최종 관문
rm -rf build && npm run build > build.log 2>&1; echo "exit=$?"
#  ⚠ 반드시 $?를 직접 확인. `npm run build | tail`처럼 파이프 걸면 tail의 exit 0에 가려짐
```

- `.venv`가 없으면: `python3 -m venv .venv && .venv/bin/pip install pyyaml`
- 문제 발견 시: validate_i18n.py 출력의 해당 파일을 열어 수동 교정 후 재검증. 반복 패턴이면 validate_i18n.py에 자동 교정 규칙 추가.

### ④ 커밋 (사장님 사전 승인: "빌드 통과하면 커밋")

```bash
git add i18n
git commit -m "i18n: translate N more blog posts into all 8 locales (batch X)"
```

푸시는 지시 없이 하지 않는다.

## 3. 번역 규칙 (에이전트 프롬프트의 STRICT RULES 요약)

1. 산출 파일에는 번역된 마크다운만 (해설·주석 금지)
2. frontmatter: `title`, `description`(및 `keywords`의 자연어)만 번역. **slug/date/authors/tags/image는 바이트 단위 동일**
3. 코드블록·인라인코드·URL·이미지 경로·제품명(RcloneView, rclone...)·클라우드 서비스명·CLI 명령은 절대 번역 금지
4. MDX import: `'../src/...'` → `'@site/src/...'`로 변환 (i18n 폴더 깊이에서 상대경로가 깨짐)
5. 마크다운 구조 보존: 제목 계층, 표, `:::tip` admonition, `<!-- truncate -->` 마커, 코드블록 개수 동일
6. 링크 텍스트는 번역, 링크 URL은 불변
7. 용어집 준수 (Desktop ARB와 통일):

| en | ko | ja | zh-Hans | zh-Hant | de | es | fr | id |
|---|---|---|---|---|---|---|---|---|
| remote | 리모트 | リモート | 远程 | 遠端 | Remote | remoto | distant | remote |
| mount | 마운트 | マウント | 挂载 | 掛載 | einbinden(mount) | montar | monter | mount |
| sync | 동기화 | 同期 | 同步 | 同步 | Synchronisation | sincronización | synchronisation | sinkronisasi |
| backup | 백업 | バックアップ | 备份 | 備份 | Backup | copia de seguridad | sauvegarde | pencadangan |
| transfer | 전송 | 転送 | 传输 | 傳輸 | Übertragung | transferencia | transfert | transfer |
| cloud storage | 클라우드 스토리지 | クラウドストレージ | 云存储 | 雲端儲存 | Cloud-Speicher | almacenamiento en la nube | stockage cloud | penyimpanan cloud |

## 4. 알려진 함정과 해결 (이미 밟은 지뢰들)

| 증상 | 원인 | 해결 (적용 완료) |
|---|---|---|
| 로케일 빌드에서 `/support/ko/support/...` 이중 경로 | 원문 링크에 baseUrl(`](/support/`) 포함 | 원문 88파일을 `](/`로 정규화. **신규 글은 처음부터 `/howto/...` 형태로** |
| 번역 빌드에서 상대 `.md` 링크 깨짐 | Docusaurus 3.7 i18n 버그 | howto/tutorials 41개 링크를 절대 사이트 경로로 변환 |
| MDX import 해석 실패 | i18n 폴더 깊이에서 `../src/` 불능 | `@site/src/` 별칭으로 변환 (프롬프트 규칙 4) |
| 번역 파일 끝 `</content>` 잔류 | 에이전트 Write 실수 | validate_i18n.py가 자동 제거 |
| de 로케일 YAML 파싱 실패 | `„...“` 닫는 따옴표를 `"`로 써서 YAML 문자열 조기 종료 | validate_i18n.py가 정규식으로 자동 교정 |
| 빌드 실패를 통과로 오판 | `npm run build \| tail`의 exit code는 tail 것 | `$?` 직접 확인 |
| `<!-- truncate -->`가 MDX 컴파일 실패 | 순수 MDX에선 HTML 주석 불가 (Docusaurus는 전처리함) | mdx_check.mjs가 컴파일 전에 주석 제거 |
| 빌드 시 undefined tag 경고 | 원문이 tags.yml에 없는 태그 사용 | 37포스트 재매핑 (S3→s3 등). **신규 글은 tags.yml에 정의된 소문자 태그만** |
| 태그 라벨이 영어로만 표시 | 태그도 로케일별 번역 필요 | `i18n/{loc}/docusaurus-plugin-content-blog/tags.yml` 생성 (라벨만 번역, key/permalink는 영어 유지) |

## 5. 신규 글 작성 봇에 반영할 규칙 (작업 #5)

1. 태그는 `blog/tags.yml`에 정의된 소문자 키만 사용
2. 내부 링크는 baseUrl 없이 `/howto/...`, `/blog/...` 형태
3. MDX import는 `@site/src/...` 별칭 사용
4. 글 발행 시 8로케일 번역을 같은 PR에 포함 (위 2장 파이프라인 재사용)

## 6. 배포 전환 계획 (작업 #6 — 미착수)

목표 구조는 I18N_OVERVIEW_ko.md 4장. 실행 단계:

1. **[사람]** Cloudflare 대시보드: R2 버킷 `rcloneview-support` 생성, R2 API 토큰 발급 (Object Read & Write)
2. **[사람]** GitHub support 저장소 Settings → Secrets → Actions에 등록: `R2_ACCESS_KEY_ID`, `R2_SECRET_ACCESS_KEY`, `R2_ENDPOINT`(`https://<account_id>.r2.cloudflarestorage.com`)
3. **[Claude]** `.github/workflows/deploy.yml` 작성 — `on: push/pull_request: branches [main]`, PR은 빌드 검사만, push는 빌드 후 `rclone sync build/ r2:rcloneview-support --delete-after --fast-list`
4. **[Claude]** Worker 작성 — `rcloneview.com/support/*` 라우트: `/support` 프리픽스 제거 → R2 조회, 디렉터리 URL이면 `index.html`, 미존재 시 `404.html`, 캐시 헤더. **[사람]** `wrangler deploy` 인증
5. 동작 확인 후 **[Claude]** www 저장소에서 `support/` 제거 + 블로그 봇의 www 커밋 단계 제거
6. **[사람]** 언어별 sitemap을 Search Console/Bing Webmaster에 등록

주의: www가 Cloudflare **Pages(git 연동)**인지 확정 필요 — Pages라면 Worker 라우트와의 우선순위 확인. (2026-07 시점 미확정, 사장님이 대시보드 확인 예정)

## 7. 참고 파일

| 파일 | 용도 |
|---|---|
| `scripts/blog-i18n-batch.workflow.js` | 번역 배치 오케스트레이션 (Claude Code Workflow용) |
| `scripts/validate_i18n.py` | 검증 1+2단계 + 아티팩트 자동 교정 |
| `scripts/mdx_check.mjs` | 검증 3단계 (MDX 컴파일) |
| `scripts/translate_blog.py` | (미사용 보관) Batch API 파이프라인. API 키 방식이라 사용 안 함. 용어집·변환 규칙의 원본 |
| `bdweb/.github/workflows/blog-deploy.yml` | 배포 CI 참고 패턴 (NetDrive 블로그, 검증된 실물) |
