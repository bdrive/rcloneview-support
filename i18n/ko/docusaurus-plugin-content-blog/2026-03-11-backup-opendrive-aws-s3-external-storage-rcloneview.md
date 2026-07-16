---
slug: backup-opendrive-aws-s3-external-storage-rcloneview
title: "RcloneView로 OpenDrive를 AWS S3 또는 외장 스토리지에 백업하기"
authors:
  - tayson
description: "RcloneView를 사용해 OpenDrive 데이터를 AWS S3, Google Drive, 또는 외장 하드 드라이브에 자동으로, 그리고 시각적으로 검증하며 백업하여 보호하세요."
keywords:
  - opendrive backup
  - opendrive sync tool
  - opendrive to s3
  - opendrive to google drive
  - opendrive file manager
  - opendrive rclone
  - opendrive export data
  - opendrive cloud backup
  - opendrive alternative
  - opendrive data protection
tags:
  - RcloneView
  - opendrive
  - cloud-storage
  - backup
  - sync
  - aws-s3
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# RcloneView로 OpenDrive를 AWS S3 또는 외장 스토리지에 백업하기

> OpenDrive는 매력적인 가격에 무제한 스토리지를 제공하지만, 모든 데이터를 단일 제공업체에만 보관하는 것은 위험합니다. RcloneView를 사용하면 OpenDrive를 S3, Google Drive, 또는 외장 드라이브에 자동으로 백업할 수 있습니다.

OpenDrive는 파일 공유, 협업, 앱 통합과 같은 기능을 갖춘 클라우드 스토리지를 제공합니다. 하지만 다른 클라우드 서비스와 마찬가지로 중요한 데이터의 유일한 사본이 되어서는 안 됩니다. RcloneView는 OpenDrive에 연결하여 AWS S3, Google Drive, 외장 하드 드라이브, 또는 그 밖의 어떤 스토리지로든 자동 백업을 가능하게 하여, 훌륭한 백업 전략에 필요한 이중화를 제공합니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 왜 OpenDrive를 백업해야 할까요?

- **단일 장애 지점** — OpenDrive에 장애가 발생하거나 접근 권한을 잃으면 데이터를 사용할 수 없게 됩니다.
- **실수로 인한 삭제** — 외부 백업이 없으면 영구적으로 삭제된 파일에는 실행 취소 버튼이 없습니다.
- **3-2-1 백업 규칙** — 모범 사례는 3개의 사본, 2개의 서로 다른 매체, 1개의 오프사이트 보관입니다. OpenDrive는 단지 하나의 사본일 뿐입니다.
- **마이그레이션 준비** — 제공업체를 변경하기로 결정하더라도 백업이 준비되어 있습니다.

## OpenDrive 연결하기

1. RcloneView를 열고 **Add Remote**를 클릭합니다.
2. 공급자 목록에서 **OpenDrive**를 선택합니다.
3. OpenDrive 자격 증명을 입력합니다.
4. 저장하면 이제 OpenDrive 파일을 탐색할 수 있습니다.

<img src="/support/images/en/blog/new-remote.png" alt="Add OpenDrive remote" class="img-large img-center" />

## 탐색 및 평가

OpenDrive 파일을 백업 대상과 나란히 확인해 보세요.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Browse OpenDrive files" class="img-large img-center" />

## 백업 대상

### OpenDrive → AWS S3

내구성 있고 비용 효율적인 백업을 위해:

1. [AWS S3](https://rcloneview.com/support/howto/remote-storage-connection-settings/s3)를 리모트로 추가합니다.
2. Copy 작업을 생성합니다: OpenDrive → S3 버킷.
3. 장기 아카이브에는 최소 비용의 S3 Glacier를 사용하세요.
4. [작업 스케줄링](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)으로 매일 예약하세요.

### OpenDrive → Google Drive

Google Workspace와 통합된 접근하기 쉬운 백업을 위해:

1. [OAuth](https://rcloneview.com/support/howto/remote-storage-connection-settings/add-oath-online-login)를 통해 Google Drive를 추가합니다.
2. Copy 작업을 생성합니다: OpenDrive → Google Drive 폴더.
3. 매주 예약하세요.

### OpenDrive → 외장 하드 드라이브

오프라인 로컬 백업을 위해:

1. Copy 작업을 생성합니다: OpenDrive → 외장 드라이브 경로.
2. 드라이브가 연결되었을 때 실행합니다.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Run OpenDrive backup job" class="img-large img-center" />

## 백업 검증하기

[폴더 비교](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents) 기능을 사용해 모든 것이 제대로 전송되었는지 확인하세요.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify OpenDrive backup" class="img-large img-center" />

## 자동화 및 모니터링

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule OpenDrive backups" class="img-large img-center" />

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="OpenDrive backup history" class="img-large img-center" />

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**합니다.
2. **OpenDrive**와 백업 대상을 리모트로 추가합니다.
3. **Copy 작업을 생성**하고 초기 백업을 실행합니다.
4. 폴더 비교로 **검증**합니다.
5. 자동 반복 백업을 위해 **스케줄**을 설정합니다.

여러분의 데이터는 하나의 보금자리 이상을 가질 자격이 있습니다. RcloneView는 OpenDrive를 S3, Google Drive, 또는 외장 스토리지로 백업하는 것을 손쉽고 검증 가능하게 만들어줍니다.

---

**관련 가이드:**

- [AWS S3 및 S3 호환 스토리지 추가](https://rcloneview.com/support/howto/remote-storage-connection-settings/s3)
- [브라우저 기반 로그인(OAuth)으로 리모트 추가](https://rcloneview.com/support/howto/remote-storage-connection-settings/add-oath-online-login)
- [폴더 내용 비교](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [동기화 작업 생성](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [작업 스케줄링](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)

<CloudSupportGrid />
