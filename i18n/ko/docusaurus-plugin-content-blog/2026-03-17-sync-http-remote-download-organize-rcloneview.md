---
slug: sync-http-remote-download-organize-rcloneview
title: "RcloneView에서 HTTP/HTTPS 리모트 사용하기 — 웹 서버에서 파일 다운로드 및 정리"
authors:
  - tayson
description: "RcloneView는 모든 HTTP/HTTPS 파일 서버를 읽기 전용 리모트로 연결할 수 있습니다. 공개적으로 호스팅된 파일을 클라우드 스토리지로 자동으로 다운로드, 정리, 동기화하세요."
keywords:
  - rclone http remote
  - http file download sync
  - web server file sync
  - http to cloud transfer
  - download files to cloud
  - http remote rcloneview
  - web directory sync
  - http ftp file manager
  - download organize cloud
  - web hosted files sync
tags:
  - RcloneView
  - ftp
  - cloud-storage
  - sync
  - guide
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# RcloneView에서 HTTP/HTTPS 리모트 사용하기 — 웹 서버에서 파일 다운로드 및 정리

> 데이터셋, 펌웨어, 아카이브, 미디어 등 필요한 파일이 있는 웹 서버가 있으신가요? 수동으로 다운로드한 후 클라우드에 다시 업로드하는 대신, RcloneView의 HTTP 리모트를 사용해 직접 전송하세요.

많은 조직, 연구 기관, 오픈소스 프로젝트가 HTTP/HTTPS 웹 서버에 파일을 호스팅합니다. 이러한 파일을 수동으로 다운로드한 후 클라우드 스토리지에 업로드하는 것은 번거롭고 로컬 대역폭을 낭비합니다. RcloneView는 모든 HTTP 디렉토리 목록을 읽기 전용 리모트로 연결할 수 있어, 내용을 탐색하고 원하는 클라우드 제공업체로 직접 전송할 수 있습니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## HTTP 리모트의 작동 방식

HTTP 리모트는 디렉토리 목록을 제공하는 웹 서버에 연결됩니다. RcloneView는 디렉토리 구조를 파싱하여 다른 리모트와 마찬가지로 탐색 가능한 파일 트리로 표시합니다. 이후 파일을 다른 리모트(Google Drive, S3, 로컬 스토리지 등)로 복사할 수 있습니다.

**중요**: HTTP 리모트는 읽기 전용입니다. 다운로드/복사는 가능하지만 업로드는 불가능합니다.

## HTTP 리모트 추가하기

<img src="/support/images/en/blog/new-remote.png" alt="Add HTTP remote" class="img-large img-center" />

디렉토리 목록을 제공하는 웹 서버 URL을 리모트로 지정하세요.

## 사용 사례

### 공개 데이터셋 미러링

연구 기관은 종종 대용량 데이터셋을 HTTP를 통해 호스팅합니다. 안정적인 접근을 위해 S3나 Google Drive로 미러링하세요.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Mirror web dataset to cloud" class="img-large img-center" />

### 웹 호스팅 파일 아카이브

서버에서 파일이 제거될 가능성이 있다면, 보존을 위해 클라우드 사본을 만드세요.

### 다운로드한 콘텐츠 정리

HTTP 서버 구조를 탐색하고, 필요한 것을 선택하여, 정리된 클라우드 폴더로 전송하세요.

### 정기 다운로드 예약

주기적으로 업데이트되는 서버(펌웨어, 패키지, 데이터 릴리스)의 경우, 정기적인 동기화 작업을 예약하세요.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule HTTP sync" class="img-large img-center" />

### 다운로드 검증

HTTP 소스와 클라우드 사본을 비교하세요.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify HTTP downloads" class="img-large img-center" />

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**하세요.
2. 웹 서버를 가리키는 **HTTP 리모트를 추가**하세요.
3. 파일 탐색기에서 **디렉토리를 탐색**하세요.
4. 70개 이상의 제공업체 중 원하는 곳으로 **클라우드에 복사**하세요.

웹 서버도 클라우드 툴킷의 또 다른 리모트가 됩니다.

---

**관련 가이드:**

- [WebDAV 서버 연결하기](https://rcloneview.com/support/blog/connect-webdav-server-cloud-sync-rcloneview)
- [FTP 서버를 클라우드로 마이그레이션하기](https://rcloneview.com/support/blog/migrate-ftp-server-to-cloud-storage-rcloneview)
- [동기화 작업 만들기](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)

<CloudSupportGrid />
