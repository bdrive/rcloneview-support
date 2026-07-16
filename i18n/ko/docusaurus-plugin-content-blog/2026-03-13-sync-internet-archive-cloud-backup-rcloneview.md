---
slug: sync-internet-archive-cloud-backup-rcloneview
title: "RcloneView로 Internet Archive 컬렉션 업로드 및 관리하는 방법"
authors:
  - tayson
description: "Internet Archive는 디지털 콘텐츠를 무료로 보존합니다. RcloneView를 사용하여 컬렉션을 업로드하고, 로컬 아카이브를 동기화하고, Internet Archive 계정을 관리하는 방법을 알아보세요."
keywords:
  - internet archive upload
  - internet archive rclone
  - upload to internet archive
  - internet archive backup
  - internet archive manager
  - internet archive file transfer
  - internet archive collections
  - archive.org upload tool
  - digital preservation cloud
  - internet archive sync
tags:
  - internet-archive
  - digital-preservation
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# RcloneView로 Internet Archive 컬렉션 업로드 및 관리하는 방법

> archive.org의 Internet Archive는 세계 최대 규모의 무료 디지털 도서관입니다. 역사적 문서, 미디어, 데이터셋을 보존하고 있다면 RcloneView로 다른 클라우드 스토리지와 함께 업로드를 관리할 수 있습니다.

Internet Archive는 공개적으로 접근 가능한 디지털 콘텐츠—도서, 오디오, 비디오, 소프트웨어, 데이터셋—를 위한 무료 무제한 저장 공간을 제공합니다. 많은 연구자, 사서, 디지털 보존 전문가들이 장기 아카이빙을 위해 이를 사용합니다. RcloneView는 Internet Archive를 리모트로 지원하여 다른 클라우드와 함께 업로드를 관리할 수 있게 해줍니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Internet Archive를 사용해야 하는 이유

- **무료 저장 공간** — 공개적으로 접근 가능한 콘텐츠는 비용이 들지 않습니다.
- **영구 보존** — 장기 디지털 보존을 위해 설계되었습니다.
- **공개 접근** — 콘텐츠는 누구나 자유롭게 이용할 수 있습니다.
- **다양한 형식** — 오디오, 비디오, 텍스트, 이미지, 소프트웨어를 지원합니다.
- **DOI 지원** — 학술 콘텐츠를 위한 인용 가능한 참조를 제공합니다.

## RcloneView에서 Internet Archive 설정하기

### API 자격 증명 받기

1. [archive.org](https://archive.org/)에서 계정을 만드세요.
2. [archive.org/account/s3.php](https://archive.org/account/s3.php)에서 API 키를 받으세요.

### 리모트로 추가하기

1. RcloneView를 열고 **Add Remote**를 클릭합니다.
2. 유형으로 **Internet Archive**를 선택합니다.
3. 액세스 키와 비밀 키를 입력합니다.

<img src="/support/images/en/blog/new-remote.png" alt="Add Internet Archive remote" class="img-large img-center" />

## 일반적인 워크플로우

### 로컬 컬렉션 업로드하기

디지털화된 도서, 오디오 녹음, 역사적 문서를 로컬 저장소에서 Internet Archive로 전송합니다:

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Upload to Internet Archive" class="img-large img-center" />

### 다른 클라우드에서 백업하기

Google Drive나 S3의 디지털 보존 콘텐츠를 Internet Archive로 복사하여 영구적인 공개 접근을 제공합니다.

### 예약 업로드

진행 중인 디지털화 프로젝트를 위해 정기적인 업로드를 예약하세요:

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule Internet Archive uploads" class="img-large img-center" />

### 업로드 확인하기

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify Internet Archive uploads" class="img-large img-center" />

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**합니다.
2. API 키로 **Internet Archive를 추가**합니다.
3. 컬렉션을 **업로드, 동기화, 관리**합니다.
4. 진행 중인 디지털화 프로젝트를 위해 **업로드를 예약**합니다.

모든 것과 연결되는 도구로 디지털 역사를 보존하세요.

---

**관련 가이드:**

- [동기화 작업 만들기](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [작업 예약](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)
- [폴더 내용 비교](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)

<CloudSupportGrid />
