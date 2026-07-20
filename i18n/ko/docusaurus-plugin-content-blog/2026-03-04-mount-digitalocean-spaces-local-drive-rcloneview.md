---
slug: mount-digitalocean-spaces-local-drive-rcloneview
title: "RcloneView로 DigitalOcean Spaces를 로컬 드라이브로 마운트하여 손쉽게 파일에 접근하기"
authors:
  - tayson
description: "DigitalOcean Spaces 오브젝트 스토리지를 일반 폴더처럼 사용하세요 — 로컬 드라이브로 마운트하고, 파일을 드래그 앤 드롭하고, RcloneView로 다른 클라우드와 동기화할 수 있습니다."
keywords:
  - digitalocean spaces mount
  - digitalocean spaces local drive
  - spaces s3 compatible mount
  - digitalocean spaces gui
  - digitalocean spaces file manager
  - mount object storage local drive
  - digitalocean spaces sync
  - digitalocean spaces backup
  - spaces rclone gui
  - digitalocean spaces desktop
tags:
  - RcloneView
  - digitalocean-spaces
  - cloud-storage
  - mount
  - s3-compatible
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# RcloneView로 DigitalOcean Spaces를 로컬 드라이브로 마운트하여 손쉽게 파일에 접근하기

> DigitalOcean Spaces는 에셋을 저장하기에 훌륭하지만, 웹 콘솔을 통한 접근은 느리고 번거롭습니다. Spaces 버킷을 데스크톱의 일반 폴더처럼 탐색할 수 있다면 어떨까요?

DigitalOcean Spaces는 저렴한 S3 호환 오브젝트 스토리지를 제공하지만, 웹 대시보드는 일상적인 파일 관리에 적합하게 만들어지지 않았습니다. 폴더를 업로드하거나, 파일을 정리하거나, 콘텐츠를 빠르게 미리 보려면 계속해서 브라우저 탭을 전환해야 합니다. RcloneView를 사용하면 모든 Spaces 버킷을 로컬 드라이브로 마운트하여 로컬 파일 시스템을 다루듯 자연스럽게 탐색, 드래그 앤 드롭, 동기화를 할 수 있습니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## DigitalOcean Spaces를 로컬로 마운트해야 하는 이유

Spaces는 앱의 백엔드 스토리지로는 잘 작동하지만, 사람이 직접 다뤄야 할 때는 다음과 같은 문제가 있습니다.

- **웹 콘솔이 느립니다** — 수천 개의 파일이 있는 대형 버킷을 탐색하는 것은 번거롭습니다. 일괄 이름 변경, 빠른 미리보기, 드래그 앤 드롭이 없습니다.
- **CLI 도구는 명령어를 외워야 합니다** — `s3cmd`와 `aws s3`가 작동하긴 하지만, 누구나 기본적인 파일 작업을 위해 명령어를 입력하고 싶어하는 것은 아닙니다.
- **네이티브 데스크톱 통합이 없습니다** — Dropbox나 Google Drive와 달리 Spaces에는 데스크톱 동기화 클라이언트가 없습니다.

Spaces를 로컬 드라이브로 마운트하면 이 세 가지 문제가 모두 해결됩니다. 버킷이 파일 관리자에 폴더로 나타나며, 익숙한 도구로 파일을 열고, 폴더를 복사하고, 항목을 삭제할 수 있습니다.

## DigitalOcean Spaces를 리모트로 설정하기

Spaces는 S3 호환이므로 RcloneView에서 설정할 때는 S3 프로바이더 유형을 사용합니다.

1. RcloneView를 열고 **Add Remote**를 클릭합니다.
2. 프로바이더 유형으로 **Amazon S3**를 선택합니다 (Spaces는 S3 API를 사용합니다).
3. S3 프로바이더 드롭다운에서 **DigitalOcean Spaces**를 선택합니다.
4. 자격 증명을 입력합니다.
   - DigitalOcean API 설정에서 발급받은 **Access Key**와 **Secret Key**.
   - **Region**: 사용 중인 Spaces 리전 (예: `nyc3`, `sfo3`, `ams3`, `sgp1`).
   - **Endpoint**: `https://{region}.digitaloceanspaces.com`
5. 리모트를 저장하면 이제 Spaces 버킷을 탐색할 수 있습니다.

<img src="/support/images/en/blog/new-remote.png" alt="Add DigitalOcean Spaces as S3-compatible remote" class="img-large img-center" />

## Spaces를 로컬 드라이브로 마운트하기

연결이 완료되면 Spaces 버킷을 로컬 드라이브로 마운트하는 데 몇 번의 클릭만 필요합니다.

1. Explorer에서 Spaces 리모트로 이동합니다.
2. 마운트하려는 버킷 또는 폴더를 마우스 오른쪽 버튼으로 클릭합니다.
3. 컨텍스트 메뉴에서 **Mount**를 선택합니다.
4. 로컬 마운트 지점을 선택합니다 (Windows는 드라이브 문자, Mac/Linux는 마운트 경로).
5. **Mount**를 클릭하면 Spaces 버킷이 로컬 드라이브로 나타납니다.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="Mount DigitalOcean Spaces from Explorer" class="img-large img-center" />

또는 마운트 옵션을 더 세밀하게 제어하려면 Mount Manager를 사용할 수 있습니다.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="Configure Spaces mount in Mount Manager" class="img-large img-center" />

### 마운트된 드라이브로 할 수 있는 것들

- **파일을 직접 열기** — 이미지, 문서, 동영상을 더블클릭하면 기본 앱에서 열립니다.
- **복사 및 붙여넣기** — OS 파일 관리자를 사용해 로컬 파일 시스템과 Spaces 사이에서 파일을 이동합니다.
- **드래그 앤 드롭** — 데스크톱에서 마운트된 드라이브로 파일을 드래그합니다.
- **애플리케이션에서 사용** — Photoshop, VS Code, 동영상 편집기 같은 앱이 마운트된 드라이브의 파일을 직접 가리키도록 설정합니다.

## 파일 탐색 및 관리

마운트하지 않더라도 RcloneView의 2단 탐색기(Explorer)는 Spaces를 위한 강력한 파일 관리자를 제공합니다.

- 익숙한 트리 탐색으로 **버킷과 폴더를 탐색**합니다.
- Spaces와 다른 리모트(Google Drive, S3, 로컬 디스크) 사이에서 파일을 **드래그 앤 드롭**합니다.
- 파일과 폴더를 **생성, 이름 변경, 삭제**합니다.
- 손쉬운 관리를 위해 **파일 크기와 날짜를 확인**합니다.

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="Drag and drop files to DigitalOcean Spaces" class="img-large img-center" />

## Spaces와 다른 클라우드 간 동기화

DigitalOcean Spaces는 단독으로 존재하지 않습니다. 흔히 사용되는 워크플로우는 다음과 같습니다.

### Spaces ↔ AWS S3 동기화

Spaces 데이터의 백업 사본을 AWS S3에 보관하거나 그 반대로 유지합니다.

1. Spaces를 소스로, S3를 대상으로 하는 동기화 작업을 생성합니다.
2. 매일 밤 실행되도록 예약합니다.
3. [Folder Comparison](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)을 사용해 양쪽이 일치하는지 확인합니다.

### Spaces ↔ 로컬 개발 폴더 동기화

개발을 위해 Spaces 에셋의 로컬 사본을 유지합니다.

1. Spaces에서 로컬 폴더로 동기화 작업을 생성합니다.
2. 로컬에서 수정한 후 다시 Spaces로 동기화합니다.

### Spaces에서 여러 클라우드로 배포

v1.3 [Batch Jobs](https://rcloneview.com/support/blog/batch-jobs-run-multiple-cloud-tasks-rcloneview)를 사용해 Spaces 콘텐츠를 Google Drive, OneDrive, S3로 하나의 자동화된 시퀀스로 복사합니다.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Sync DigitalOcean Spaces with other clouds" class="img-large img-center" />

## Spaces 워크플로우 자동화

### 예약 백업

Spaces 버킷에서 다른 클라우드나 로컬 스토리지로 매일 실행되는 Copy 작업을 설정합니다.

1. Job Manager에서 작업을 생성합니다.
2. [Job Scheduling](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)을 통해 예약합니다.
3. [Slack](https://rcloneview.com/support/blog/rcloneview-slack-remote-control) 또는 [Telegram](https://rcloneview.com/support/blog/rcloneview-telegram-remote-control)으로 알림을 받습니다.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule DigitalOcean Spaces sync jobs" class="img-large img-center" />

### 성능 팁

- **병렬 전송**: 8~16 (Spaces는 높은 동시성을 잘 처리합니다).
- **청크 크기**: 대용량 파일에는 64MB.
- **Fast-list**: 대형 버킷에서 더 빠른 디렉터리 목록 조회를 위해 활성화하세요.

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**합니다.
2. API 키를 사용해 **Spaces를** S3 호환 리모트로 **추가**합니다.
3. 버킷을 로컬 드라이브로 **마운트**하거나 Explorer에서 탐색합니다.
4. 예약된 작업으로 다른 클라우드에 **동기화 또는 백업**합니다.

웹 콘솔과 씨름하지 마세요. DigitalOcean Spaces를 로컬 드라이브로 마운트하고, 나머지 모든 파일을 다루는 것과 똑같은 방식으로 — 데스크톱에서 — 작업하세요.

---

**관련 가이드:**

- [AWS S3 및 S3 호환 스토리지 추가하기](https://rcloneview.com/support/howto/remote-storage-connection-settings/s3)
- [클라우드 스토리지를 로컬 드라이브로 마운트하기](https://rcloneview.com/support/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive)
- [리모트 탐색 및 관리](https://rcloneview.com/support/howto/rcloneview-basic/browse-and-manage-remote-storage)
- [폴더 내용 비교하기](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [작업 예약](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)

<CloudSupportGrid />
