---
slug: sync-pikpak-cloud-google-drive-s3-rcloneview
title: "RcloneView로 PikPak 클라우드 스토리지를 Google Drive, S3 등과 동기화하는 방법"
authors:
  - tayson
description: "PikPak은 빠른 클라우드 스토리지와 오프라인 다운로드 기능을 제공합니다. RcloneView를 사용해 PikPak을 Google Drive, AWS S3 등의 클라우드로 동기화하고 백업하는 방법을 알아보세요."
keywords:
  - pikpak cloud storage
  - pikpak sync google drive
  - pikpak rclone
  - pikpak backup
  - pikpak file transfer
  - pikpak cloud manager
  - pikpak s3 sync
  - pikpak multi cloud
  - pikpak migration
  - pikpak alternative backup
tags:
  - RcloneView
  - pikpak
  - cloud-storage
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# RcloneView로 PikPak 클라우드 스토리지를 Google Drive, S3 등과 동기화하는 방법

> PikPak은 넉넉한 저장 공간과 오프라인 다운로드 기능으로 인기를 얻고 있습니다. 하지만 그 파일들을 공유를 위해 Google Drive에, 또는 아카이빙을 위해 S3에 두고 싶다면 어떻게 해야 할까요? RcloneView는 PikPak을 70개 이상의 클라우드 제공업체와 연결해줍니다.

PikPak은 아시아에서 인기 있는 클라우드 스토리지 서비스로, 빠른 업로드, 오프라인 다운로드, 미디어 스트리밍을 제공합니다. 개인 미디어 관리에는 훌륭하지만, 많은 사용자는 업무 협업, 백업 이중화, 마이그레이션 등을 위해 파일을 다른 플랫폼에서도 사용할 수 있어야 합니다. RcloneView는 PikPak을 여러분의 전체 클라우드 생태계와 연결해줍니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 왜 PikPak을 다른 클라우드와 동기화해야 할까?

- **백업** — PikPak 파일의 사본을 다른 제공업체에 보관하여 이중화합니다.
- **공유** — 동료들이 접근할 수 있도록 파일을 Google Drive나 Dropbox로 옮깁니다.
- **마이그레이션** — PikPak에서 다른 제공업체로 이전하거나 스토리지를 통합합니다.
- **아카이빙** — 오래된 PikPak 파일을 더 저렴한 오브젝트 스토리지(B2, S3 Glacier)로 옮깁니다.

## RcloneView에서 PikPak 설정하기

### PikPak을 리모트로 추가하기

1. RcloneView를 열고 **Add Remote**를 클릭합니다.
2. 유형으로 **PikPak**을 선택합니다.
3. PikPak 계정 자격 증명을 입력합니다.

<img src="/support/images/en/blog/new-remote.png" alt="Add PikPak remote" class="img-large img-center" />

듀얼 패널 탐색기에서 다른 클라우드와 함께 PikPak 스토리지를 탐색할 수 있습니다.

## 자주 쓰는 워크플로우

### PikPak → Google Drive

미디어나 문서를 손쉽게 공유하기 위해 Google Drive로 동기화합니다:

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Transfer PikPak to Google Drive" class="img-large img-center" />

### PikPak → Backblaze B2 (아카이브)

PikPak 콘텐츠를 저렴한 장기 스토리지로 아카이빙합니다:

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Archive PikPak to B2" class="img-large img-center" />

### 자동 동기화 예약하기

PikPak과 백업 대상을 자동으로 동기화 상태로 유지합니다:

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule PikPak sync" class="img-large img-center" />

## 전송 확인하기

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify PikPak transfer" class="img-large img-center" />

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**합니다.
2. 다른 클라우드와 함께 **PikPak을 추가**합니다.
3. 원하는 제공업체와 **동기화, 백업, 마이그레이션**을 진행합니다.
4. 자동 실행을 위해 **작업 예약**을 설정합니다.

---

**관련 가이드:**

- [동기화 작업 만들기](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [작업 예약](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)
- [폴더 내용 비교](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)

<CloudSupportGrid />
