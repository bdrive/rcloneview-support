---
slug: transfer-google-drive-to-another-account-easily
title: RcloneView로 손쉽게 Google Drive를 다른 계정으로 전송하기
authors:
  - jay
description: RcloneView로 Google Drive 계정 간 파일을 이동하세요. 마이그레이션을 계획하고, Google 할당량 내에서 작업하며, 명령줄 없이 전송을 자동화할 수 있습니다.
keywords:
  - rcloneview
  - google drive transfer
  - migrate google drive
  - cross account transfer
  - cloud sync
  - rclone gui
tags:
  - RcloneView
  - google-drive
  - cloud-sync
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# RcloneView로 손쉽게 Google Drive를 다른 계정으로 전송하기

> 통제력을 잃지 않고 계정을 전환하세요. RcloneView는 rclone의 Google Drive 백엔드를 친숙한 GUI로 감싸서, 스크립팅 없이도 명확하게 Drive 계정 간 데이터를 인계하거나 통합하거나 보관할 수 있게 해줍니다.

## Google Drive 계정 간 데이터 이전이 필요한 이유

졸업, 이직, 합병, 그리고 단순한 정리 작업 등으로 인해 Google 계정 간 파일 이동이 필요한 경우가 많습니다. Google의 기본 제공 전송 도구가 도움이 되긴 하지만 한계가 있습니다. My Drive만 다루고, 세부 필터를 지원하지 않으며, 마이그레이션을 단계적으로 준비하거나 예약할 수 없습니다. [Google Help](https://support.google.com/accounts/answer/6386856?hl=en&utm_source=chatgpt.com) [Google Workspace Admin Help](https://support.google.com/a/answer/1247799?hl=en)

<!-- truncate -->

### 시작하기 전에 알아야 할 제한 사항

- **파일별 크기**: Google 형식이 아닌 파일은 항목당 최대 **5TB**까지 가능하며, Docs, Sheets, Slides는 별도의 제한이 적용됩니다. [Google Help](https://support.google.com/drive/answer/37603?hl=en)
- **일일 전송 할당량**: Drive API는 사용자당 하루 **750GB**의 업로드(및 복사 작업)를 허용하며, 24시간마다 한도가 초기화됩니다. [Google for Developers](https://developers.google.com/drive/api/guides/limits)
- **소유권 규칙**: 개인 전송은 Gmail + My Drive만 대상으로 합니다. Workspace 관리자는 도메인 내에서 소유권을 재할당할 수 있지만, 도메인 간 공유 드라이브는 복사를 해야 합니다. [Google Help](https://support.google.com/accounts/answer/6386856?hl=en) [Google Workspace Admin Help](https://support.google.com/a/answer/1247799?hl=en)

### 방법 한눈에 보기

| 방법 | 적합한 경우 | 제한 사항 |
|---|---|---|
| Google "콘텐츠 전송" 도구 | 학교를 떠나거나 개인 Gmail로 이동하는 학생 | My Drive + Gmail만 지원; 필터 없음; 공유 드라이브를 대상으로 할 수 없음 |
| 보조 계정에 공유 후 복사 | 하나의 도메인 내 소규모 인계 | 수작업 필요; 버전 기록과 댓글이 분산될 수 있음 |
| RcloneView 계정 간 전송 | My Drive + 공유 드라이브 혼합, 세부 폴더 이동, 반복 가능한 동기화 | 각 계정마다 rclone 리모트가 필요(RcloneView 마법사가 처리) |

<!-- Obsidian note: CTA 컴포넌트 -->
<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

## 준비 작업

1. **소유권 및 범위 명확화**: 이동해야 할 폴더와 남겨둘 폴더(My Drive와 공유 드라이브)를 목록화하세요. 대상 사본을 누가 소유할지 결정합니다.
2. **할당량 검토**: 저장 공간 여유를 확인하고, 750GB/일 한도에 걸릴 수 있는 대용량 동영상 아카이브를 파악합니다.
3. **전환 시점 계획**: 협업자들이 어디서 작업해야 하는지 알 수 있도록 작업 중지 기간이나 단계별 일정을 공지합니다.
4. **필터 라벨링**: 포함/제외 규칙을 결정합니다(예: `/Backups/old/`는 건너뛰고 `/Projects/2024/`만 이동).
5. **중요 폴더 백업**: 규제 대상 콘텐츠의 경우, 이동 전에 매니페스트나 버전 기록을 내보냅니다.

🔍 유용한 가이드
- [RcloneView에서 Google OAuth 빠른 설정하기](/howto/remote-storage-connection-settings/add-oath-online-login)
- [Google 공유 드라이브 리모트 추가하기](/howto/remote-storage-connection-settings/connect-using-cli/add-google-shared-drive)

## RcloneView에서 두 Google Drive 계정 연결하기

RcloneView는 `rclone config`를 안내형 마법사로 전환해 주므로, 각 Google 계정을 한 번만 등록하고 전송 작업에 재사용할 수 있습니다.

1. **RcloneView**를 열고 **`+ New Remote`**를 클릭합니다.
2. **Google Drive**를 선택 → **원본 계정**으로 로그인 → 리모트에 명확한 이름을 지정합니다(예: `Drive-Source`).
3. **대상 계정**에 대해 동일한 과정을 반복합니다(예: `Drive-Destination`).
4. 공유 드라이브가 관련되어 있다면 마법사에서 활성화하거나 드라이브 ID를 추가합니다.
5. Explorer 창에 두 리모트가 모두 표시되는지, 양쪽 폴더를 탐색할 수 있는지 확인합니다.

<img src="/support/images/en/blog/open-multiple-google-drive-remotes.png" alt="open multiple google drive remotes" class="img-medium img-center" />

## RcloneView에서 적절한 전송 흐름 선택하기

전체 계정을 복사하기 전에 시범 폴더로 먼저 시작하세요. 샘플 실행 결과가 만족스러우면, 더 폭넓은 이동이나 예약 동기화로 이어갈 수 있습니다.

### 드래그 앤 드롭 (수동 이동)

왼쪽에 원본 리모트를, 오른쪽에 대상 리모트를 열고 파일이나 폴더를 드래그해서 옮깁니다. 임시 인계 작업이나 소수의 공유 드라이브 폴더 이동에 적합합니다.
👉 자세히 보기: [드래그 앤 드롭으로 파일 복사하기](/howto/rcloneview-basic/browse-and-manage-remote-storage#copying-files-using-drag-and-drop)

### 비교 & 복사 (차이점 미리 보기)

**비교(Compare)**를 실행해 두 계정 사이에 새로 생기거나, 변경되거나, 누락된 항목을 확인합니다. 차이 내역을 검토하고 건너뛸 항목을 선택 해제한 다음 복사합니다. 단계별 마이그레이션이나 작업 중지 기간 이후 정리 작업에 유용합니다.
👉 자세히 보기: [비교 결과 및 파일 관리하기](/howto/rcloneview-basic/compare-folder-contents#compare-results-and-manage-files)

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare shared folder and My Drive contents" class="img-medium img-center" />
### 동기화 & 예약 작업 (전환 자동화)

**동기화(Sync)**를 사용해 선택한 폴더를 대상이 원본을 완전히 대체할 때까지 미러링합니다. 항상 먼저 **드라이런(dry-run)**을 실행한 다음, 작업을 저장하고 전환이 완료될 때까지 매일 밤 또는 매시간 실행되도록 예약하세요.
👉 자세히 보기:
- [원격 스토리지 동기화하기](/howto/rcloneview-basic/synchronize-remote-storages)
- [동기화 작업 생성하기](/howto/rcloneview-basic/create-sync-jobs)
- [작업 예약 및 실행](/howto/rcloneview-advanced/job-scheduling-and-execution)

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Run a saved sync job in RcloneView" class="img-medium img-center" />

**실전 팁**

- 750GB/일 API 할당량을 넘지 않도록 마이그레이션을 배치 단위로 나누고, 한도가 초기화되면 다음 배치를 진행하세요.
- 공유 드라이브 콘텐츠를 개인 My Drive로 복사할 때는 권한을 확인하고, 대상 계정에서 주요 폴더를 다시 공유하세요.
- 마지막 동기화 전에 원본 폴더를 읽기 전용으로 전환해, 최종 차이 내역이 작고 예측 가능하게 유지되도록 하세요.
- RcloneView의 작업 기록(Job History)에서 rclone 로그를 내보내 무엇이 언제 이동했는지 감사 기록을 남기세요.

## 마이그레이션 이후

- **소유권 점검**: 대상 계정이 중요한 파일(특히 Docs/Sheets)을 소유하고 있고, 협업자들이 접근 권한을 유지하고 있는지 확인하세요.
- **바로가기 및 북마크 재구성**: Google 바로가기는 이전되지 않으므로, 새 계정에서 중요한 링크를 다시 만드세요.
- **원본 정리**: 대상 계정이 기준이 되면, 실수로 인한 편집을 방지하기 위해 이전 폴더를 보관하거나 삭제하세요.
- **공유 드라이브 권한 모니터링**: 대규모 팀은 새로운 소유권 구조에 맞춰 그룹 멤버십 업데이트가 필요할 수 있습니다.

## 결론 — 요약

- Google의 기본 전송 도구는 도움이 되지만 전반적인 이동에만 국한됩니다.
- RcloneView는 Google Drive 계정 간에 세부적인 폴더 선택, 미리보기, 예약 동기화를 제공하며 이 모든 것을 여전히 완전한 GUI 기반으로 수행합니다.
- Google의 할당량 제한을 고려해 계획하고, 이동을 시범적으로 해본 뒤, 전환 과정을 문서화해 동료들이 최신 파일을 어디서 찾을 수 있는지 알 수 있도록 하세요.

## 자주 묻는 질문

**RcloneView가 파일 버전과 댓글을 보존하나요?**
Google 형식이 아닌 파일(PDF, 동영상, ZIP)은 그대로 유지됩니다. Google Docs/Sheets/Slides는 내용은 유지되지만 복사 시 새로운 ID가 생성됩니다. RcloneView는 이를 새 파일로 표시하므로 필요에 따라 다시 공유할 수 있습니다.

**도메인 간에 공유 드라이브 폴더를 이동할 수 있나요?**
Google은 공유 드라이브가 도메인을 직접 변경하는 것을 허용하지 않습니다. RcloneView를 사용해 콘텐츠를 대상 도메인이 소유한 공유 드라이브로 복사한 다음 권한을 다시 적용하세요. [Google Workspace Admin Help](https://support.google.com/a/answer/7212025?hl=en)

**750GB/일 할당량에 도달하면 어떻게 되나요?**
전송이 속도 제한(rate-limit) 오류와 함께 일시 중지됩니다. 24시간을 기다리거나(또는 할당량이 남아 있는 다른 계정으로 이동한 뒤) 작업을 재개하세요. RcloneView 로그에는 전송이 어디서 중단되었는지 표시되므로 파일을 중복 없이 이어서 진행할 수 있습니다.

**계정 간 전송을 또 하나의 체크리스트 항목처럼 간단하게 만들 준비가 되셨나요?**

<CloudSupportGrid />
