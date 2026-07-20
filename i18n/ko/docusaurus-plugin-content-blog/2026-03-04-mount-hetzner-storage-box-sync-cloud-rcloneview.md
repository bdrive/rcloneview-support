---
slug: mount-hetzner-storage-box-sync-cloud-rcloneview
title: "Hetzner Storage Box를 로컬 드라이브로 마운트하고 RcloneView로 모든 클라우드에 동기화하기"
authors:
  - tayson
description: "SFTP로 마운트하여 Hetzner Storage Box를 로컬 폴더처럼 이용하고, 파일을 시각적으로 탐색하며, RcloneView를 사용해 AWS S3, Google Drive 등 모든 클라우드로 동기화하거나 백업하세요."
keywords:
  - hetzner storage box mount
  - hetzner storage box sync
  - hetzner storage box backup
  - hetzner sftp mount local drive
  - hetzner storage box rclone
  - hetzner storage box gui
  - hetzner to s3
  - hetzner cloud backup
  - hetzner storage box file manager
  - mount sftp as local drive
tags:
  - RcloneView
  - hetzner
  - sftp
  - cloud-storage
  - mount
  - sync
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Hetzner Storage Box를 로컬 드라이브로 마운트하고 RcloneView로 모든 클라우드에 동기화하기

> Hetzner Storage Box는 유럽에서 테라바이트당 최고의 가격을 자랑하지만, FTP나 SCP로 파일을 관리하는 것은 번거롭습니다. RcloneView는 이를 로컬 드라이브로 마운트하고 어떤 클라우드로든 시각적으로 동기화할 수 있게 해줍니다.

Hetzner Storage Box는 유럽에서 가장 가성비 좋은 스토리지 솔루션 중 하나로, 안정적이고 저렴하며 SFTP, FTP, SMB, WebDAV를 통해 접근할 수 있습니다. 하지만 네이티브 데스크톱 클라이언트가 없어서 파일을 관리하려면 명령줄 도구나 기본적인 FTP 클라이언트를 사용해야 합니다. RcloneView는 SFTP로 연결하여 이 문제를 해결하며, Storage Box를 로컬 드라이브로 마운트하고, 듀얼 패널 탐색기에서 파일을 탐색하며, AWS S3, Google Drive 또는 다른 어떤 클라우드로든 동기화할 수 있게 해줍니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Hetzner Storage Box에 RcloneView를 사용해야 하는 이유

- **네이티브 데스크톱 클라이언트 부재** — Hetzner는 원시 프로토콜(SFTP, FTP, SMB)만 제공하며 동기화 앱은 없습니다.
- **로컬 드라이브로 마운트** — Storage Box를 데스크톱의 일반 폴더처럼 접근할 수 있습니다.
- **크로스 클라우드 동기화** — Storage Box 데이터를 S3, Google Drive, OneDrive로 자동 복제합니다.
- **시각적 파일 관리** — CLI 없이 탐색, 드래그 앤 드롭, 비교, 정리가 가능합니다.

## SFTP를 통해 Hetzner Storage Box 연결하기

1. RcloneView를 열고 **Add Remote**를 클릭합니다.
2. 프로바이더 목록에서 **SFTP**를 선택합니다.
3. Hetzner 자격 증명을 입력합니다:
   - **Host**: `uXXXXXX.your-storagebox.de` (Hetzner Robot 패널에서 확인)
   - **Port**: `23` (Hetzner는 비표준 SFTP 포트를 사용합니다)
   - **Username**: Storage Box 사용자 이름 (예: `u123456`)
   - **Password**: Storage Box 비밀번호
4. 저장하면 Storage Box 디렉토리를 탐색할 수 있습니다.

<img src="/support/images/en/blog/new-remote.png" alt="Add Hetzner Storage Box via SFTP" class="img-large img-center" />

## 로컬 드라이브로 마운트하기

연결이 완료되면 Storage Box를 로컬 폴더로 마운트할 수 있습니다:

1. 탐색기에서 SFTP 리모트로 이동합니다.
2. 마운트할 폴더에서 우클릭 → **Mount**를 선택합니다.
3. 로컬 마운트 지점을 선택합니다(Windows는 드라이브 문자, Mac/Linux는 경로).
4. Hetzner 스토리지가 네이티브 폴더로 나타납니다.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="Mount Hetzner Storage Box as local drive" class="img-large img-center" />

이제 마치 로컬 스토리지인 것처럼 어떤 데스크톱 애플리케이션에서도 Storage Box 데이터의 파일을 열고, 드래그 앤 드롭하고, 작업할 수 있습니다.

## 파일 탐색 및 관리

듀얼 패널 탐색기를 통해 다른 리모트와 함께 Hetzner 스토리지를 관리할 수 있습니다:

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Browse Hetzner Storage Box alongside cloud" class="img-large img-center" />

- 폴더 계층 구조 탐색
- Hetzner와 클라우드 간 파일 드래그 앤 드롭
- 파일 및 폴더 생성, 이름 변경, 삭제
- 파일 크기와 날짜 확인

## 클라우드 프로바이더로 동기화하기

### Hetzner → AWS S3 (오프사이트 백업)

이미 안정적인 Hetzner 스토리지에 클라우드 이중화 계층을 추가하세요:

1. 동기화 작업을 생성합니다: Hetzner SFTP → S3 버킷.
2. [작업 스케줄링](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)으로 매일 밤 스케줄링합니다.
3. 비용 효율적인 콜드 아카이빙에는 S3 Glacier를 사용하세요.

### Hetzner → Google Drive (팀 공유)

Hetzner 데이터를 Google Workspace 사용자가 접근할 수 있도록 만드세요:

1. 복사 작업을 생성합니다: Hetzner → Google Drive 폴더.
2. [필터 규칙](https://rcloneview.com/support/blog/filter-rules-selective-sync-rcloneview)을 사용하여 특정 폴더만 동기화하세요.

### 클라우드 → Hetzner (오프사이트 백업 대상)

Hetzner를 저렴한 오프사이트 백업 대상으로 사용하세요:

1. 동기화 작업을 생성합니다: Google Drive → Hetzner Storage Box.
2. 매일 스케줄링하세요 — Hetzner의 테라바이트당 가격 정책 덕분에 매우 비용 효율적입니다.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Run Hetzner sync job" class="img-large img-center" />

## 확인 및 모니터링

### 폴더 비교

Hetzner와 클라우드 백업 간의 동기화 완전성을 확인하세요:

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare Hetzner with cloud backup" class="img-large img-center" />

### 예약된 자동화

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule Hetzner backup jobs" class="img-large img-center" />

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**하세요.
2. SFTP(포트 23)를 통해 **Hetzner Storage Box를 추가**하세요.
3. 로컬 드라이브로 **마운트**하거나 탐색기에서 탐색하세요.
4. S3, Google Drive 또는 다른 어떤 클라우드로든 **동기화**하세요.
5. 자동화된 일일 백업을 위해 **스케줄링**하세요.

Hetzner Storage Box는 유럽에서 가장 잘 알려지지 않은 스토리지의 비밀 중 하나입니다. RcloneView는 이에 걸맞은 데스크톱 클라이언트를 제공할 뿐만 아니라, 그 위에 멀티 클라우드 동기화까지 더해줍니다.

---

**관련 가이드:**

- [SFTP와 SMB를 로컬 드라이브로 마운트하기](https://rcloneview.com/support/blog/mount-sftp-smb-local-drive-rcloneview)
- [클라우드 스토리지를 로컬 드라이브로 마운트하기](https://rcloneview.com/support/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive)
- [폴더 내용 비교하기](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [작업 스케줄링](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)
- [선택적 동기화를 위한 필터 규칙](https://rcloneview.com/support/blog/filter-rules-selective-sync-rcloneview)

<CloudSupportGrid />
