---
slug: sync-hidrive-to-google-drive-rcloneview
title: "HiDrive를 Google Drive에 동기화 — RcloneView로 클라우드 백업하기"
authors:
  - tayson
description: "RcloneView를 사용해 Strato HiDrive 스토리지를 Google Drive에 동기화하세요. 클라우드 백업을 자동화하고, 제공업체 간에 파일을 직접 전송하며, 두 계정을 동기화된 상태로 유지할 수 있습니다."
keywords:
  - sync HiDrive to Google Drive
  - HiDrive Google Drive sync RcloneView
  - Strato HiDrive backup to Google Drive
  - HiDrive cloud migration
  - move files HiDrive Google Drive
  - HiDrive sync tool GUI
  - Google Drive backup from HiDrive
  - RcloneView HiDrive sync
  - HiDrive file transfer tool
  - cloud to cloud sync HiDrive
tags:
  - RcloneView
  - hidrive
  - google-drive
  - cloud-to-cloud
  - sync
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# HiDrive를 Google Drive에 동기화 — RcloneView로 클라우드 백업하기

> RcloneView는 예약된 작업과 완전한 전송 모니터링을 통해 직접적인 클라우드 간 전송으로 Strato HiDrive와 Google Drive를 자동으로 동기화 상태로 유지합니다.

Strato HiDrive는 강력한 GDPR 준수를 갖춘 안전한 클라우드 스토리지로 독일어권 국가에서 널리 사용됩니다. HiDrive와 Google Workspace를 함께 사용하는 팀은 두 플랫폼 간에 콘텐츠를 동기화해야 하는 경우가 많으며, 이를 통해 프로젝트 파일을 두 환경 모두에서 접근할 수 있게 유지합니다. RcloneView는 두 제공업체에 연결하고 사용자가 정의한 일정에 따라 자동화된 전송을 실행하여 이 동기화를 안정적으로 처리합니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## RcloneView에서 HiDrive와 Google Drive 연결하기

HiDrive와 Google Drive 모두 RcloneView에서 OAuth 기반 인증을 사용합니다. Remote 탭 > New Remote로 이동하세요:

- **HiDrive:** HiDrive를 선택하고 Strato HiDrive 자격 증명으로 OAuth 로그인을 완료합니다
- **Google Drive:** Google Drive를 선택하고 브라우저 기반 OAuth 인증을 완료합니다

RcloneView는 토큰을 안전하게 저장하고 만료 시 자동으로 갱신합니다. 동기화를 구성하기 전에 듀얼 패널 탐색기에서 양쪽 리모트를 열어 각 쪽에 존재하는 항목을 확인하세요.

<img src="/support/images/en/blog/new-remote.png" alt="Adding HiDrive and Google Drive remotes in RcloneView" class="img-large img-center" />

## HiDrive에서 Google Drive로의 동기화 작업 구성하기

RcloneView의 마법사에서 HiDrive를 소스로, Google Drive 폴더를 대상으로 하는 동기화 작업을 생성하세요. HiDrive에 클라이언트 산출물을 저장하고 Google Workspace를 통해 공유하는 컨설팅 회사의 경우, 매일 동기화 작업을 실행하면 매 근무일 이후 Google Drive 사본이 최신 상태로 유지됩니다.

고급 설정에서 대역폭에 맞게 동시 전송 개수를 설정하고, 계정 간 데이터 무결성이 중요한 경우 **체크섬** 검증을 활성화하세요. 사전 정의된 필터 옵션을 사용하면 특정 파일 유형(예: HiDrive 썸네일 캐시나 임시 파일)을 동기화에서 제외할 수 있습니다.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring HiDrive to Google Drive sync in RcloneView" class="img-large img-center" />

## 자동화된 동기화 예약하기 (PLUS)

PLUS 라이선스가 있으면 HiDrive에서 Google Drive로의 동기화 작업을 자동으로 실행되도록 예약할 수 있습니다. 일반적인 설정: 매일 저녁 7시에 HiDrive를 Google Drive에 동기화하여 그날의 작업 내용을 반영합니다. 활성화하기 전에 **Simulate schedule** 기능을 사용해 cron 표현식이 예상한 실행 시간을 생성하는지 확인하세요.

Auto Start Schedule on Startup 옵션을 사용하면 컴퓨터 재시작 후에도 예약된 작업이 다시 시작되며, 이는 공유 워크스테이션에서 실행되는 동기화 작업에 중요합니다.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling HiDrive to Google Drive sync in RcloneView" class="img-large img-center" />

## 동기화 상태 및 기록 모니터링하기

RcloneView의 Transfer 탭은 실시간 동기화 진행 상황을 보여줍니다. 각 동기화가 완료된 후 Job History에는 전송된 파일 수, 이동한 바이트 수, 속도, 소요 시간 등 실행 내역이 기록됩니다. 대용량 동기화 중 Google Drive의 API가 요청을 제한하는 경우, 로그에 재시도 이벤트가 표시되어 이후 작업을 위한 동시 전송 설정을 조정하는 데 도움이 됩니다.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history for HiDrive to Google Drive sync in RcloneView" class="img-large img-center" />

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**하세요.
2. Remote 탭 > New Remote에서 HiDrive와 Google Drive를 OAuth 리모트로 추가하세요.
3. HiDrive에서 Google Drive 폴더로 이동하는 Sync 또는 Copy 작업을 생성하세요.
4. PLUS 라이선스로 자동 실행을 예약하고 Job History에서 진행 상황을 모니터링하세요.

RcloneView의 자동화된 동기화 엔진을 사용하면 HiDrive와 Google Drive를 동기화 상태로 유지하는 것이 간단합니다. 데이터는 수동 작업 없이 클라우드에서 직접 이동합니다.

---

**관련 가이드:**

- [HiDrive 스토리지 관리 — RcloneView로 파일 동기화 및 백업하기](https://rcloneview.com/support/blog/manage-hidrive-cloud-sync-backup-rcloneview)
- [Google Drive 스토리지 관리 — RcloneView로 파일 동기화 및 백업하기](https://rcloneview.com/support/blog/manage-google-drive-cloud-sync-backup-rcloneview)
- [RcloneView로 HiDrive를 OneDrive에 동기화하기](https://rcloneview.com/support/blog/sync-hidrive-to-onedrive-rcloneview)

<CloudSupportGrid />
