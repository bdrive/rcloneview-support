---
slug: migrate-onedrive-to-google-drive-rcloneview
title: "OneDrive에서 Google Drive로 마이그레이션하는 방법 — RcloneView를 이용한 단계별 전송 가이드"
authors:
  - tayson
description: "Microsoft 365에서 Google Workspace로 전환하시나요? RcloneView를 사용해 폴더 구조를 그대로 유지하면서 OneDrive의 모든 파일을 Google Drive로 마이그레이션하는 방법을 알아보세요."
keywords:
  - migrate onedrive to google drive
  - onedrive to google drive transfer
  - switch microsoft 365 to google workspace
  - move files onedrive google drive
  - onedrive google drive migration tool
  - cloud migration tool
  - onedrive to gdrive sync
  - transfer onedrive files
  - microsoft to google migration
  - onedrive migration tool
tags:
  - RcloneView
  - onedrive
  - google-drive
  - migration
  - cloud-storage
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# OneDrive에서 Google Drive로 마이그레이션하는 방법 — RcloneView를 이용한 단계별 전송 가이드

> 조직이 Google Workspace로 이전하고 있습니다. 이제 팀의 업무 흐름을 방해하지 않으면서 수 테라바이트의 OneDrive 파일을 Google Drive로 옮겨야 합니다. 제대로 하는 방법을 소개합니다.

생산성 도구를 전환하거나, 클라우드 계정을 통합하거나, 병렬 백업을 유지하려는 경우든, OneDrive에서 Google Drive로의 마이그레이션에는 신중한 계획이 필요합니다. RcloneView는 클라우드 간 직접 전송을 통해 폴더 구조를 그대로 유지하면서 파일 형식 차이도 자동으로 처리해주는 번거로운 작업을 대신 처리해줍니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 다운로드 후 재업로드하면 안 되나요?

수동 방식 — OneDrive에서 다운로드한 뒤 Google Drive에 업로드하는 방식 — 에는 심각한 단점이 있습니다:

- **전체 데이터셋을 위한 로컬 디스크 공간이 필요**합니다.
- **시간이 두 배**로 소요됩니다 — 직접 전송이 아닌 다운로드 + 업로드이기 때문입니다.
- **증분 업데이트가 불가능**합니다 — 전송 중 발생한 변경 사항은 손실됩니다.
- **대용량 데이터셋에서 문제 발생** — 브라우저 업로드는 몇 GB 이상의 파일에서 실패합니다.

RcloneView는 클라우드 간 직접 전송을 수행하므로 로컬 저장 공간이 아니라 대역폭만 필요합니다.

## 마이그레이션 단계

### 1) 두 계정 연결하기

OneDrive와 Google Drive를 RcloneView의 리모트로 추가합니다:

<img src="/support/images/en/blog/new-remote.png" alt="Add OneDrive and Google Drive remotes" class="img-large img-center" />

### 2) 평가 및 계획

두 클라우드를 나란히 탐색합니다:

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Browse OneDrive and Google Drive side by side" class="img-large img-center" />

마이그레이션 전에 다음 사항을 확인하세요:

- **전체 용량** — 이동해야 할 데이터가 얼마나 되나요?
- **파일 형식** — Office 문서는 자동으로 변환됩니다(아래 참고).
- **공유 폴더** — OneDrive의 공유 항목은 별도로 처리해야 합니다.
- **경로 길이** — Google Drive는 400자 경로 제한이 있습니다.

### 3) 파일 형식 처리

전송 시 Office 문서는 그대로 Google Drive에 업로드할 수 있습니다. Google Drive는 `.docx`, `.xlsx`, `.pptx` 파일을 원본 형식 그대로 열 수 있도록 지원합니다. 선택적으로 마이그레이션 후 Google 고유 형식으로 변환할 수도 있습니다.

| OneDrive 형식 | Google Drive 처리 방식 |
|-----------------|---------------------|
| .docx | 원본 형식으로 열거나 Google Docs로 변환 |
| .xlsx | 원본 형식으로 열거나 Google Sheets로 변환 |
| .pptx | 원본 형식으로 열거나 Google Slides로 변환 |
| 이미지, PDF | 그대로 전송 |

### 4) 마이그레이션 실행

OneDrive에서 Google Drive로 **복사(Copy)** 작업을 생성합니다:

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Run OneDrive to Google Drive migration" class="img-large img-center" />

동기화(Sync) 대신 **복사(Copy)**를 사용하세요 — 파일을 추가만 할 뿐, 대상 위치에서 삭제하지 않습니다.

### 5) 진행 상황 모니터링

실시간으로 마이그레이션을 확인합니다:

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitor migration progress" class="img-large img-center" />

### 6) 검증

마이그레이션 후 양쪽을 비교합니다:

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify migration completeness" class="img-large img-center" />

## 특수 상황 처리

### SharePoint 문서 라이브러리

SharePoint 라이브러리는 개인 OneDrive와는 별개입니다. 팀 사이트를 마이그레이션하려면 RcloneView에서 SharePoint를 별도의 리모트로 추가하세요.

### 비즈니스용 OneDrive vs 개인용 OneDrive

비즈니스용 OneDrive에서 마이그레이션하는 경우, OAuth 설정이 개인용 OneDrive와 다릅니다. RcloneView는 두 인증 흐름 모두를 안내해줍니다.

### 대규모 마이그레이션(500GB 이상)

매우 큰 데이터셋의 경우:

- **배치 단위로 마이그레이션** — 중요한 폴더부터 시작한 후 부차적인 데이터를 진행하세요.
- **필터 규칙 사용** — 파일 형식이나 날짜별로 우선순위를 정하세요.
- **비업무 시간에 예약** — 속도 제한을 피하기 위해 야간/주말에 실행하세요.
- **재시도 활성화** — v1.3의 재시도 기능이 일시적인 오류를 처리해줍니다.

### 전환 기간 동안

팀이 전환하는 동안 두 클라우드를 동기화 상태로 유지하세요:

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule ongoing sync during transition" class="img-large img-center" />

모든 사람이 전환을 완료할 때까지 OneDrive → Google Drive 간 일일 동기화를 예약하세요.

## 마이그레이션 후 체크리스트

1. **파일 수 확인** — 폴더 비교로 모든 파일이 전송되었는지 확인합니다.
2. **파일 접근 테스트** — Google Drive에서 주요 문서를 열어봅니다.
3. **공유 설정 업데이트** — Google Drive에서 팀원들과 폴더를 다시 공유합니다.
4. **앱 연동 업데이트** — 스크립트, 도구, 워크플로가 Google Drive를 가리키도록 변경합니다.
5. **OneDrive 계정 유지** — 안전장치로서 기존 계정을 30일간 유지합니다.
6. **서비스 종료** — 모든 것이 정상 작동함을 확인한 후 OneDrive 구독을 해지합니다.

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**하세요.
2. **OneDrive와 Google Drive**를 리모트로 추가하세요.
3. **복사(Copy) 작업을 실행**하여 파일을 전송하세요.
4. **폴더 비교로 검증**하세요.
5. 전환 기간 동안 **증분 동기화를 예약**하세요.

마이그레이션은 파일 누락을 걱정하는 것만으로도 충분히 스트레스가 됩니다. RcloneView가 전송을 처리하는 동안 여러분은 전환 계획에 집중하세요.

---

**관련 가이드:**

- [동기화 작업 생성하기](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [폴더 콘텐츠 비교하기](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [Google Drive에서 OneDrive로 마이그레이션하기](https://rcloneview.com/support/blog/migrate-google-drive-to-onedrive-rcloneview)
- [작업 예약](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)

<CloudSupportGrid />
