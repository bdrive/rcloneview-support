---
slug: sync-two-google-drive-accounts-rcloneview
title: "두 개의 구글 드라이브 계정 동기화하는 방법 — RcloneView로 개인용과 업무용 드라이브 동기화하기"
authors:
  - tayson
description: "많은 사람들이 개인용, 업무용, 학교용 등 여러 개의 구글 드라이브 계정을 가지고 있습니다. RcloneView를 사용해 로컬에 아무것도 다운로드하지 않고 계정 간에 파일을 동기화하는 방법을 알아보세요."
keywords:
  - sync two google drive accounts
  - google drive to google drive
  - transfer between google drives
  - multiple google drive sync
  - google drive personal to work
  - sync google accounts
  - google drive account transfer
  - google drive cross account
  - two google drive sync tool
  - google drive migration between accounts
tags:
  - google-drive
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 두 개의 구글 드라이브 계정 동기화하는 방법 — RcloneView로 개인용과 업무용 드라이브 동기화하기

> 개인용 구글 드라이브에는 가족사진이 있습니다. 업무용 드라이브에는 프로젝트 파일이 있습니다. 대학교 드라이브는 곧 만료됩니다. 구글은 계정 간 동기화를 기본적으로 지원하지 않지만, RcloneView는 가능합니다.

거의 모든 사람이 결국 여러 개의 구글 드라이브 계정을 갖게 됩니다. 개인 Gmail 계정, 회사의 Workspace 계정, 그리고 곧 만료될 학교 계정까지. 구글은 각 계정을 개별적으로 사용하기는 쉽게 만들어 놓았지만, 계정 간에 파일을 동기화하거나 전송할 방법은 제공하지 않습니다. 결국 한 계정에서 다운로드해서 다른 계정에 업로드하는 수작업을 반복하게 되는데, 이는 느리고 로컬 저장 공간도 차지합니다. RcloneView는 여러 구글 드라이브 계정을 동시에 연결해 계정 간 직접 전송을 지원합니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 여러 개의 구글 드라이브 계정 추가하기

<img src="/support/images/en/blog/new-remote.png" alt="Add multiple Google Drive accounts" class="img-large img-center" />

RcloneView에서 각 구글 드라이브 계정을 별도의 리모트로 추가하세요. "GDrive-Personal", "GDrive-Work", "GDrive-School"처럼 이름을 명확하게 지정하면 계정을 쉽게 구분할 수 있습니다.

## 계정 간 전송하기

왼쪽 창에는 한 계정을, 오른쪽 창에는 다른 계정을 엽니다. 파일과 폴더를 드래그해서 계정 간에 옮길 수 있습니다.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Transfer between Google Drive accounts" class="img-large img-center" />

파일은 구글 서버를 통해 직접 전송되므로, 컴퓨터로 다운로드되는 과정이 없고 전송 속도도 빠릅니다.

## 자주 사용하는 사례

### 만료 예정인 학교 계정의 파일 보관하기

대학교 구글 Workspace 계정은 졸업 후 삭제되는 경우가 많습니다. 접근 권한을 잃기 전에 모든 파일을 개인 드라이브로 전송하세요.

### 개인 파일과 업무 파일 분리하기

실수로 업무용 드라이브에 개인 파일을 저장했나요? IT 부서를 거치지 않고 개인 계정으로 옮길 수 있습니다.

### 오래된 계정 통합하기

예전에 쓰던 Gmail 계정의 파일을 현재 계정으로 병합하세요. RcloneView를 사용하면 간단한 드래그 앤 드롭 작업으로 처리됩니다.

### 중요한 폴더 미러링하기

특정 폴더를 두 계정 간에 계속 동기화 상태로 유지하세요. 자동으로 실행되는 동기화 작업을 생성하면 됩니다.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Sync job between accounts" class="img-large img-center" />

## 지속적인 동기화 예약하기

계정 간에 지속적으로 동기화하고 싶은 폴더가 있다면, 자동 동기화를 예약하세요.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule cross-account sync" class="img-large img-center" />

## 전송 확인하기

폴더 비교 기능을 사용해 계정 간 파일이 올바르게 전송되었는지 확인하세요.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify cross-account transfer" class="img-large img-center" />

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**하세요.
2. **두 구글 드라이브 계정을 각각** 별도의 리모트로 추가하세요.
3. 듀얼 패널 탐색기에서 **두 계정을 모두 여세요**.
4. 로컬 다운로드 없이 **바로 전송**하세요.

이제 구글 계정들이 드디어 서로 연결되었습니다.

---

**관련 가이드:**

- [구글 드라이브에서 원드라이브로 마이그레이션하기](https://rcloneview.com/support/blog/migrate-google-drive-to-onedrive-rcloneview)
- [구글 드라이브와 드롭박스 동기화하기](https://rcloneview.com/support/blog/sync-google-drive-to-dropbox-rcloneview)
- [구글 드라이브에 대용량 파일 업로드하기](https://rcloneview.com/support/blog/upload-large-files-google-drive-sync-rcloneview)

<CloudSupportGrid />
