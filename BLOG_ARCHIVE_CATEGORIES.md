# Blog Archive 카테고리 분류 규칙

`/blog/archive` (All Posts) 페이지가 620여 개 글을 카테고리로 묶을 때 쓰는 규칙.
구현: `src/theme/BlogArchivePage/categories.js` (이 문서와 반드시 동기 유지).

> 배경: blog 사이드바(`blogSidebarCount: 'ALL'`)가 모든 글 페이지에 620개 링크
> (~120KB)를 인라인해 9로케일 빌드가 3.1GB까지 커졌다. 사이드바를 제거하고
> (`blogSidebarCount: 0`) 전체 목록을 아카이브 페이지 1장으로 옮겼다.
> 아카이브는 카테고리/연도 뷰 토글 + 제목 필터를 제공한다.

## 분류 알고리즘 — 2단 판정

글 한 편의 대표 카테고리는 다음 순서로 정해진다. **첫 매치가 승리.**

### 1단: 슬러그 동사 프리픽스 (실측 620편 중 ~66% 판정)

슬러그가 글의 실제 주제를 가장 정확히 반영하므로 태그보다 먼저 검사한다.

| 우선순위 | 슬러그 패턴 | 카테고리 |
|---|---|---|
| 1 | `fix-` `troubleshoot-` `repair-` `recover-` `resolve-`, `-error(s)-` | Troubleshooting |
| 2 | `compare-` `comparison-`, `-vs-`, `-comparison` (끝) | Comparisons |
| 3 | `migrate-` `move-` `transfer-` `copy-`, `…-to-…rcloneview` (끝) | Migration & Transfer |
| 4 | `sync-` `synchronize-` | Sync |
| 5 | `backup-` `back-up-`, `-backup-` | Backup & Recovery |
| 6 | `manage-` `connect-` `setup-` `set-up-` `use-` `access-` `mount-` | Provider Guides |

### 2단: 태그 폴백 (~33% 판정)

슬러그로 판정되지 않으면 태그를 아래 우선순위로 검사한다.

**⚠️ Use Cases 를 작업 태그(migration/backup/sync)보다 먼저 검사해야 한다.**
산업/유즈케이스 글은 거의 항상 작업 태그도 달고 있어서, 순서를 바꾸면
Backup 이 34%까지 부풀며 다른 카테고리를 흡수한다 (실측으로 확인된 함정).

| 우선순위 | 태그 | 카테고리 |
|---|---|---|
| 1 | troubleshooting, data-loss, data-recovery, ransomware | Troubleshooting |
| 2 | comparison, compare, storage-comparison, pricing | Comparisons |
| 3 | industry, business, enterprise, education, healthcare, hipaa, photography, media, dam, video-production, nonprofit, university, cad, accounting, finance, cctv, ai, plex, data-pipeline, huggingface, remote-work, architecture, engineering, compliance | Use Cases & Industries |
| 4 | migration, cloud-migration, cloud-to-cloud, cloud-file-transfer, copy, move | Migration & Transfer |
| 5 | backup, cloud-backup, hard-drive-backup, disaster-recovery, archive, digital-preservation | Backup & Recovery |
| 6 | sync, cloud-sync, offline-sync, google-drive-sync, onedrive-sync, cloud-storage-synchronization | Sync |
| 7 | feature, automation, mount, job-management, encryption, security, performance, filters, vfs, monitoring, cli, crypt, rclone-crypt, dashboard, job-history, history, duplicates, folder-comparison, cleanup, organization, cost-optimization, optimization, drag-and-drop, installation, api, docker, workspace | Features & Automation |
| 8 | (프로바이더 태그 ~70종 — categories.js 의 `PROVIDER_TAGS`) | Provider Guides |
| 9 | (그 외 전부 — 폴백) | Platforms & Tips |

## 실측 분포 (2026-07-14, 619편 기준)

| 카테고리 | 글 수 | 비중 |
|---|---|---|
| Migration & Transfer | 157 | 25% |
| Backup & Recovery | 105 | 17% |
| Troubleshooting | 78 | 13% |
| Use Cases & Industries | 73 | 12% |
| Provider Guides | 62 | 10% |
| Sync | 55 | 9% |
| Comparisons | 41 | 7% |
| Features & Automation | 41 | 7% |
| Platforms & Tips (폴백) | 7 | 1% |

## 유지보수

- **새 태그를 추가하면**: 어느 카테고리에 속할지 판단해 `categories.js` 의
  해당 세트에 넣는다. 안 넣으면 그 태그만 가진 글은 Platforms & Tips 로 떨어진다.
- **새 프로바이더 지원 시**: `PROVIDER_TAGS` 에 태그 추가.
- **카테고리 라벨 번역**: `i18n/<locale>/code.json` 의 `blog.archive.category.*`
  (8개 로케일 모두).
- **분포 재검증**: 카테고리가 한쪽으로 쏠리면 (한 카테고리 >35% 또는 주요
  카테고리 <3%) 규칙을 재조정한다. 검증 스크립트는 이 문서의 규칙을
  Python 으로 옮겨 돌리면 된다 (frontmatter tags + slug 파싱).

## 관련 파일

- `src/theme/BlogArchivePage/index.js` — 아카이브 페이지 (뷰 토글 + 필터)
- `src/theme/BlogArchivePage/categories.js` — 분류 규칙 구현 (이 문서의 소스)
- `src/components/CustomNavbar.js` — "All Posts" 네비 항목
- `docusaurus.config.js` — `blogSidebarCount: 0`
