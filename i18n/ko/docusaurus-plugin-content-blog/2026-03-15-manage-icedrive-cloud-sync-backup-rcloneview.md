---
slug: manage-icedrive-cloud-sync-backup-rcloneview
title: "Icedrive 클라우드 스토리지 관리하기 — RcloneView로 동기화 및 백업하기"
authors:
  - tayson
description: "Icedrive는 깔끔한 인터페이스를 갖춘 저렴한 클라우드 스토리지를 제공하지만 동기화 옵션은 제한적입니다. RcloneView를 사용해 Icedrive를 Google Drive, S3 등 70개 이상의 다른 프로바이더와 동기화하세요."
keywords:
  - icedrive sync
  - icedrive backup
  - icedrive rclone
  - icedrive file manager
  - icedrive to google drive
  - icedrive alternative sync
  - icedrive cloud management
  - icedrive multi cloud
  - icedrive transfer tool
  - icedrive desktop sync
tags:
  - RcloneView
  - cloud-storage
  - sync
  - backup
  - webdav
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Icedrive 클라우드 스토리지 관리하기 — RcloneView로 동기화 및 백업하기

> Icedrive는 저렴한 요금제와 깔끔한 디자인으로 인기를 얻고 있습니다. 하지만 동기화 기능은 자체 앱으로 제한됩니다. RcloneView는 Icedrive를 더 넓은 클라우드 생태계로 연결해줍니다.

Icedrive는 매력적인 클라우드 스토리지 옵션으로 자리 잡았습니다 — 합리적인 가격, 유료 플랜에서의 제로 지식 암호화, 그리고 모던한 인터페이스까지 갖추고 있습니다. 하지만 Icedrive의 동기화 및 연동 옵션은 자체 데스크톱 및 모바일 앱으로 제한됩니다. Icedrive를 Google Drive와 동기화하거나, S3로 백업하거나, 다른 클라우드 계정과 함께 Icedrive를 관리하고 싶다면, RcloneView가 Icedrive의 WebDAV 지원을 통해 그 간극을 메워줍니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Icedrive를 RcloneView에 연결하기

Icedrive는 유료 플랜에서 WebDAV 연결을 지원합니다. RcloneView에 WebDAV 리모트로 추가하세요.

<img src="/support/images/en/blog/new-remote.png" alt="Add Icedrive via WebDAV" class="img-large img-center" />

연결이 완료되면 Icedrive 스토리지가 다른 모든 클라우드 계정과 함께 2단 탐색기에 표시됩니다.

## RcloneView를 Icedrive와 함께 사용하는 이유

### 클라우드 간 동기화

Icedrive 자체 앱은 로컬 컴퓨터로만 동기화됩니다. RcloneView를 사용하면 Icedrive를 Google Drive, OneDrive, S3, Dropbox 등 다른 어떤 프로바이더와도 직접 동기화할 수 있습니다.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Icedrive cross-cloud sync" class="img-large img-center" />

### 자동 백업

이중화를 위해 Icedrive에서 보조 클라우드로의 정기 백업을 예약하세요.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule Icedrive backup" class="img-large img-center" />

### 멀티 클라우드 관리

앱을 전환하지 않고도 Icedrive 파일을 다른 모든 스토리지와 함께 탐색하고 관리할 수 있습니다.

### 백업 검증

폴더 비교 기능을 사용해 Icedrive 백업이 완전한지 확인하세요.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify Icedrive backup" class="img-large img-center" />

## 일반적인 워크플로

### 저렴한 저장용 Icedrive, 협업용 Google Drive

대용량 파일과 아카이브는 Icedrive에 저장하세요(TB당 비용이 더 저렴합니다). 작업 문서는 팀 접근을 위해 Google Drive로 동기화하세요.

### Icedrive를 B2로 백업

Icedrive에 문제가 생길 경우를 대비해 Backblaze B2에 보조 백업을 유지하세요. 매일 밤 예약된 동기화로 두 사본을 최신 상태로 유지합니다.

### Icedrive로/에서 마이그레이션

Dropbox나 Google Drive에서 Icedrive로 전환하시나요? RcloneView의 2단 드래그 앤 드롭으로 모든 것을 전송하세요.

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**하세요.
2. **Icedrive를 WebDAV 리모트로 추가**하세요(Icedrive 유료 플랜 필요).
3. 다른 클라우드 계정과 **함께 탐색**하세요.
4. 예약 작업으로 **동기화 및 백업**을 진행하세요.

저렴한 스토리지, 무제한 연결성.

---

**관련 가이드:**

- [동기화 작업 생성하기](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [폴더 내용 비교하기](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [숨겨진 클라우드 스토리지 비용](https://rcloneview.com/support/blog/hidden-cloud-storage-costs-save-money-rcloneview)

<CloudSupportGrid />
