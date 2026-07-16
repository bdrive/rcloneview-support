---
slug: manage-hidrive-strato-sync-cloud-rcloneview
title: "STRATO HiDrive 관리 — RcloneView로 Google Drive, S3 및 다른 클라우드와 동기화하기"
authors:
  - tayson
description: "STRATO HiDrive는 독일과 유럽에서 널리 사용되는 클라우드 스토리지입니다. RcloneView를 사용하여 HiDrive를 Google Drive, S3 및 다른 프로바이더와 동기화하고 백업하는 방법을 알아보세요."
keywords:
  - hidrive cloud storage
  - strato hidrive sync
  - hidrive rclone
  - hidrive google drive
  - hidrive backup
  - hidrive file transfer
  - german cloud storage
  - strato hidrive backup
  - hidrive s3 sync
  - european cloud storage
tags:
  - hidrive
  - european-cloud
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# STRATO HiDrive 관리 — RcloneView로 Google Drive, S3 및 다른 클라우드와 동기화하기

> STRATO HiDrive는 독일에서 가장 인기 있는 클라우드 스토리지 서비스 중 하나로, EU 내 서버에서 GDPR을 준수하는 스토리지를 제공합니다. 하지만 워크플로우에 Google Drive, S3 또는 해외 협업자가 포함되어 있다면 그 간극을 메울 방법이 필요합니다.

STRATO의 HiDrive는 독일 기업과 개인이 널리 사용하는 신뢰할 수 있는 유럽 클라우드 스토리지 프로바이더입니다. HiDrive에 저장된 데이터는 엄격한 EU 데이터 보호법에 따라 독일 서버에 유지됩니다. RcloneView는 HiDrive를 70개 이상의 다른 클라우드 프로바이더와 연결하여, EU 데이터 주권을 유지하면서 백업, 마이그레이션, 멀티 클라우드 워크플로우를 가능하게 합니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 왜 HiDrive인가?

- **GDPR 준수** — EU 법률에 따라 독일 서버에 데이터를 저장합니다.
- **안정적인 인프라** — STRATO는 유럽 최대 규모의 호스팅 프로바이더 중 하나입니다.
- **WebDAV/SFTP 액세스** — 통합을 위한 표준 프로토콜입니다.
- **합리적인 가격** — 경쟁력 있는 유럽 클라우드 스토리지 요금제입니다.

## RcloneView에서 HiDrive 설정하기

### WebDAV 또는 SFTP로 연결하기

1. RcloneView를 열고 **Add Remote**를 클릭합니다.
2. 유형으로 **WebDAV** 또는 **SFTP**를 선택합니다.
3. HiDrive 서버 URL과 자격 증명을 입력합니다.

<img src="/support/images/en/blog/new-remote.png" alt="Add HiDrive remote" class="img-large img-center" />

## 주요 워크플로우

### HiDrive → S3 (EU 외부로의 오프사이트 백업)

지역 간 재해 복구를 위해 다른 프로바이더로 백업합니다.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule HiDrive backup" class="img-large img-center" />

### Google Drive → HiDrive (GDPR 마이그레이션)

미국 기반 클라우드에서 GDPR을 준수하는 HiDrive로 데이터를 이전합니다.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Migrate to HiDrive for GDPR" class="img-large img-center" />

### HiDrive → Google Drive (협업)

국제 팀 협업을 위해 특정 폴더를 Google Drive와 동기화합니다.

### 암호화 백업

HiDrive 스토리지에 추가 암호화를 적용하려면 crypt 리모트를 사용하세요.

## 확인 및 모니터링

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify HiDrive sync" class="img-large img-center" />

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**하세요.
2. WebDAV 또는 SFTP로 **HiDrive를 추가**하세요.
3. 백업 또는 협업을 위해 **다른 클라우드와 동기화**하세요.
4. **자동화된 작업을 예약**하세요.

글로벌 클라우드 유연성을 갖춘 유럽 데이터 주권.

---

**관련 가이드:**

- [동기화 작업 생성하기](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [작업 예약](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)
- [클라우드 백업 암호화하기](https://rcloneview.com/support/blog/encrypt-cloud-backups-crypt-remote-guide-rcloneview)

<CloudSupportGrid />
