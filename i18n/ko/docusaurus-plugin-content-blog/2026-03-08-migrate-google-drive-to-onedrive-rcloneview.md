---
slug: migrate-google-drive-to-onedrive-rcloneview
title: "Google Drive에서 OneDrive로 마이그레이션하는 방법 — RcloneView로 완벽하게 전송하기"
authors:
  - tayson
description: "Google Workspace에서 Microsoft 365로 이전하시나요? RcloneView를 사용해 폴더 구조를 그대로 유지하면서 Google Drive의 모든 파일을 OneDrive로 마이그레이션하는 방법을 알아보세요."
keywords:
  - migrate google drive to onedrive
  - google drive to onedrive transfer
  - switch google workspace to microsoft 365
  - move files google drive onedrive
  - google to microsoft migration
  - cloud to cloud migration tool
  - google drive onedrive sync
  - transfer google drive files
  - google workspace to office 365
  - cloud migration without data loss
tags:
  - RcloneView
  - google-drive
  - onedrive
  - migration
  - cloud-storage
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Google Drive에서 OneDrive로 마이그레이션하는 방법 — RcloneView로 완벽하게 전송하기

> Google Workspace에서 Microsoft 365로 전환 중이신가요? 가장 큰 골칫거리는 새로운 앱이 아니라, 폴더 구조나 공유 설정, 그리고 정신 건강을 해치지 않으면서 수 테라바이트의 파일을 Google Drive에서 OneDrive로 옮기는 일입니다.

조직이 생산성 도구를 전환하고 있든, 단순히 Google Drive의 사본을 OneDrive에 두고 싶든, 마이그레이션 과정은 고통스러울 수 있습니다. Google Takeout은 폴더 구조가 사라지는 ZIP 파일을 내보냅니다. 수동으로 드래그 앤 드롭하면 시간이 한없이 걸립니다. RcloneView는 이를 제대로 처리합니다 — 폴더 구조를 그대로 보존하는 클라우드 간 직접 전송입니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Google Takeout을 사용하지 않는 이유

Google Takeout은 Google의 공식 내보내기 도구이지만, 마이그레이션에는 상당한 제약이 있습니다.

- **ZIP으로 내보내기** — 실시간 폴더 구조가 아닌 압축된 아카이브를 얻게 됩니다.
- **구성 손실** — 공유 드라이브와 폴더 계층 구조가 평면화될 수 있습니다.
- **증분 업데이트 불가** — 내보내는 도중 파일이 변경되면 처음부터 다시 시작해야 합니다.
- **수동 재업로드** — 여전히 OneDrive에 모든 것을 직접 업로드해야 합니다.

RcloneView는 Google Drive에서 OneDrive로 파일을 직접 전송하며, 원본 폴더 구조를 그대로 유지합니다.

## 단계별 마이그레이션

### 1) 두 계정 연결하기

RcloneView에 Google Drive와 OneDrive를 모두 리모트로 추가합니다.

<img src="/support/images/en/blog/new-remote.png" alt="Add Google Drive and OneDrive remotes" class="img-large img-center" />

### 2) 탐색 및 계획

듀얼 패널 탐색기에서 두 리모트를 엽니다. 왼쪽에는 Google Drive, 오른쪽에는 OneDrive를 배치합니다.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Browse Google Drive and OneDrive side by side" class="img-large img-center" />

마이그레이션하기 전에 Google Drive 구조를 검토하세요. 다음을 확인합니다.

- 마이그레이션할 폴더(전체가 아닐 수도 있음).
- 전체 용량(전송 시간에 영향을 미침).
- Google 문서/스프레드시트/프레젠테이션(변환이 필요함 — 아래 참고).

### 3) Google 전용 파일 처리하기

Google 문서, 스프레드시트, 프레젠테이션은 일반적인 파일이 아니라 웹 기반 파일입니다. 전송 시 rclone이 이를 Microsoft Office 형식으로 변환합니다.

| Google 형식 | 변환 형식 |
|---------------|------------|
| Google 문서 | .docx |
| Google 스프레드시트 | .xlsx |
| Google 프레젠테이션 | .pptx |
| Google 드로잉 | .png |

이 변환은 전송 중 자동으로 이루어집니다.

### 4) 전송 시작하기

Google Drive에서 OneDrive로 **복사(Copy)** 작업을 생성합니다.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Run migration job" class="img-large img-center" />

마이그레이션에는 동기화(Sync)가 아닌 **복사(Copy)**를 사용하세요. 복사는 대상에 파일을 추가하기만 하며, 절대로 아무것도 삭제하지 않습니다.

### 5) 진행 상황 모니터링

전송 상황을 실시간으로 확인합니다.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitor Google Drive to OneDrive transfer" class="img-large img-center" />

### 6) 폴더 비교로 검증하기

전송이 완료된 후, 누락된 항목이 없는지 확인하기 위해 양쪽을 비교합니다.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify migration completeness" class="img-large img-center" />

## 마이그레이션 팁

### 배치 단위로 마이그레이션하기

대용량 드라이브(500GB 이상)의 경우, 한 번에 전체를 옮기기보다 폴더별로 마이그레이션하세요.

1. 중요한 폴더(문서, 프로젝트)부터 시작합니다.
2. 그다음 공유 폴더를 옮깁니다.
3. 아카이브와 미디어는 마지막에 옮깁니다.

이렇게 하면 사용자는 가장 중요한 파일부터 OneDrive에서 즉시 작업을 시작할 수 있습니다.

### 속도 제한 처리하기

Google Drive와 OneDrive 모두 API 속도 제한이 있습니다. RcloneView는 이를 자동으로 준수하지만, 매우 대규모 마이그레이션의 경우 다음을 고려하세요.

- 제한에 걸리지 않도록 [대역폭 제한](https://rcloneview.com/support/blog/set-bandwidth-limits-cloud-transfers-rcloneview)을 사용하세요.
- 업무 외 시간에 전송을 예약하세요.
- 실패한 전송이 자동으로 재시도되도록 두세요(v1.3 기능).

### 증분 업데이트 실행하기

초기 마이그레이션 후에는 동일한 복사 작업을 다시 실행하세요. 이미 복사된 파일은 건너뛰고 새 파일이나 변경된 파일만 전송합니다. 이를 통해 마이그레이션 도중 Google Drive에 추가된 파일도 놓치지 않고 잡아낼 수 있습니다.

## 마이그레이션 이후: 두 클라우드 동기화 유지하기

전환 기간 동안 두 클라우드를 모두 활성 상태로 유지해야 한다면, 예약 동기화를 설정하세요.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule ongoing sync during transition" class="img-large img-center" />

이렇게 하면 완전히 전환하기 전까지 Google Drive의 변경 사항이 OneDrive에 계속 반영됩니다.

## 자주 발생하는 문제

### "파일 이름이 너무 김"

OneDrive는 경로 길이 제한이 400자입니다. Google Drive는 이보다 관대합니다. 이 문제가 발생하면 마이그레이션 전에 깊이 중첩된 폴더 이름을 줄이세요.

### 공유 드라이브 파일

Google 공유 드라이브(팀 드라이브)는 개인 내 드라이브와 별개입니다. 별도의 리모트로 추가하거나, 공유 드라이브를 포함하도록 rclone을 구성하세요.

### 대용량 파일

OneDrive Business는 최대 250GB의 파일을 지원합니다. OneDrive Personal도 마찬가지로 최대 250GB까지 지원합니다. 시작하기 전에 가장 큰 파일들을 확인하세요.

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**하세요.
2. **Google Drive와 OneDrive**를 리모트로 추가하세요.
3. **복사(Copy) 작업을 실행**하세요 — 폴더 구조가 자동으로 유지됩니다.
4. **폴더 비교로 검증**하세요 — 누락된 항목이 없는지 확인합니다.
5. 전환이 완료될 때까지 **증분 업데이트를 예약**하세요.

플랫폼 전환에서 파일 마이그레이션이 병목이 되지 않도록 하세요.

---

**관련 가이드:**

- [동기화 작업 생성하기](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [폴더 내용 비교하기](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [대역폭 제한 설정하기](https://rcloneview.com/support/blog/set-bandwidth-limits-cloud-transfers-rcloneview)
- [작업 예약하기](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)

<CloudSupportGrid />
