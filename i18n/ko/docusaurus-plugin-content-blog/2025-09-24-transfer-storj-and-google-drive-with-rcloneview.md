---
slug: transfer-storj-and-google-drive-with-rcloneview
title: "RcloneView로 Storj와 Google Drive 간 파일 전송하기"
authors:
  - tayson
description: "다시 다운로드할 필요 없이 Storj와 Google Drive 간에 데이터를 이동하세요—OAuth와 Storj 액세스 그랜트를 사용해 RcloneView의 드래그 앤 드롭, 비교, 동기화, 예약 작업 기능을 활용할 수 있습니다."
keywords:
  - storj to google drive
  - google drive to storj
  - rcloneview
  - cloud to cloud transfer
  - access grant
  - drag and drop sync
  - scheduled jobs
  - compare folders
  - resumable uploads
  - s3 compatible storage
tags:
  - RcloneView
  - cloud-migration
  - storj
  - google-drive
  - sync
  - automation
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# RcloneView로 Storj와 Google Drive 간 파일 전송하기

> 명령줄을 사용하지 않고도 **Storj**와 **Google Drive** 사이에서 폴더를 이동하세요. RcloneView는 나란히 배치된 Explorer 창, 비교(Compare), 동기화(Sync), 예약 작업(Jobs) 기능을 제공하여 클라우드 간 전송을 빠르고 예측 가능하게 유지해 줍니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Storj ↔ Google Drive 전송에 RcloneView를 사용하는 이유

- Google Drive는 OAuth 로그인, Storj는 액세스 그랜트를 지원하여 별도의 CLI 작업이 필요 없습니다.
- 진행 로그와 재시도 기능을 갖춘 멀티스레드 재개 가능(resumable) 전송.
- 드래그 앤 드롭 이동을 위한 2단 Explorer 창.
- 복사나 삭제 전에 차이를 미리 확인할 수 있는 비교(Compare) 기능.
- 필터와 드라이런(dry-run)을 지원하는 동기화(Sync), 재사용 가능한 작업(Jobs) 및 예약 기능.
- 작업 시간을 원활하게 유지하기 위한 대역폭 제한 및 조절 기능.

RcloneView는 rclone을 기반으로 구축되어 스크립트를 작성하지 않고도 안정성과 고급 옵션을 그대로 활용할 수 있습니다.

## 시작하기 전에

- **Storj 액세스 그랜트**(암호화 범위 포함)를 준비해 두세요. 안전하게 보관하세요.
- Google Drive에 로그인하고, 사용자당 하루 750GB의 업로드 상한을 확인하세요.
- 최신 RcloneView 빌드를 설치하세요: [다운로드](https://rcloneview.com/src/download.html).
- 대용량 전송의 경우 유선 연결을 사용하고 RcloneView를 계속 실행 상태로 두는 것이 좋습니다.

## 1단계: 클라우드 리모트 연결하기

1. **Remote → + New Remote**를 엽니다.
2. **Storj**를 선택하고 **액세스 그랜트**를 붙여넣습니다. (별도의 암호화 패스프레이즈를 사용하는 경우 옵션에 추가하세요.) 리모트를 저장합니다.
3. **Google Drive**에 대해서도 동일하게 진행한 뒤 **Connect**를 클릭하고 OAuth 브라우저 로그인을 완료합니다.
4. Remote Manager에 두 리모트가 모두 표시되는지 확인합니다.

👉 자세히 알아보기: [Google Drive 리모트 추가하기](/howto/#step-2-adding-remote-storage-google-drive-example)  
👉 리모트 관리: [Remote Manager](/howto/rcloneview-basic/remote-manager/)

## 2단계: Explorer 창에서 두 리모트 열기

1. **Browse**로 이동합니다.
2. 왼쪽 창에서 **+**를 클릭하고 **Storj** 리모트를 엽니다.
3. 오른쪽 창에서 **+**를 클릭하고 **Google Drive** 리모트를 엽니다.
4. 이동하려는 소스 및 대상 버킷/폴더로 이동합니다.

<!-- Image placeholder: add `/support/images/en/tutorials/open-storj-and-google-drive-remotes.png` if available -->
<img src="/support/images/en/tutorials/open-storj-and-google-drive-remotes.png" alt="open storj and google drive remotes" class="img-medium img-center" />

## Storj ↔ Google Drive 전송을 위한 네 가지 방법

### 방법 1: 창 사이에서 드래그 앤 드롭

1. Storj 창에서 파일이나 폴더를 선택합니다.
2. 선택한 항목을 Google Drive 창으로 드래그합니다 (또는 반대 방향으로).
3. **Transfer** 탭에서 진행 상황을 확인하고, 필요에 따라 일시중지/재개합니다.

👉 더 알아보기: [원격 스토리지 탐색 및 관리](/howto/rcloneview-basic/browse-and-manage-remote-storage)

### 방법 2: 비교 후 복사 또는 삭제

1. 왼쪽에 소스, 오른쪽에 대상을 엽니다.
2. **Compare**를 클릭합니다.
3. RcloneView가 고유 항목, 크기 차이, 일치 항목을 강조 표시합니다.
4. 이동할 항목을 선택한 다음 **Copy →** 또는 **← Copy**를 선택합니다.
5. 중복 항목이나 이전 데이터를 정리할 때는 **Delete**를 신중히 사용합니다.

👉 자세히 알아보기: [폴더 내용 비교하기](/howto/rcloneview-basic/compare-folder-contents)

### 방법 3: 동기화 또는 작업으로 저장

1. Storj 소스와 Google Drive 대상을 선택합니다.
2. **Sync**를 클릭하고 단방향 또는 양방향 동기화를 선택합니다.
3. 변경 사항을 미리 확인하고 필터(포함/제외)를 조정한 뒤 시작합니다.
4. 나중에 재사용할 수 있도록 **Save to Jobs**를 클릭합니다.

👉 자세히 알아보기:

- [원격 스토리지 동기화하기](/howto/rcloneview-basic/synchronize-remote-storages)
- [동기화 작업 만들기](/howto/rcloneview-basic/create-sync-jobs)
- [작업 실행 및 관리](/howto/rcloneview-basic/execute-manage-job)

### 방법 4: 반복 동기화 작업 예약하기

1. **Job Manager → Add Job**을 엽니다.
2. **Storj**를 소스로, **Google Drive**를 대상으로 설정합니다 (또는 반대로).
3. 일정(매시간, 매일, 매주 또는 cron 형식)을 선택합니다.
4. 작업을 활성화하여 RcloneView가 자동으로 실행하도록 합니다.
5. 로그와 이력을 확인하여 성공 여부를 확인합니다.

👉 자세히 알아보기: [작업 예약 및 실행](/howto/rcloneview-advanced/job-scheduling-and-execution)

## 원활한 전송을 위한 팁

- 대규모 동기화 전에 **드라이런**을 사용해 변경될 내용을 미리 확인하세요.
- Storj의 경우 보안을 위해 액세스 그랜트 범위를 (버킷 단위로) 좁게 설정하세요.
- 업로드가 멈추면 동시 처리 수를 낮추거나 대역폭 제한을 설정해 스로틀링을 줄이세요.
- Google Drive의 일일 한도에 근접하면 작업을 여러 날 또는 여러 계정에 나눠서 진행하세요.
- 재시도, 속도, API 메시지를 확인하기 위해 **Transfer** 탭을 주시하세요.

## 요약

RcloneView를 사용하면 리모트 연결, 나란히 탐색, 비교, 동기화, 반복 작업 예약까지 명령줄 없이도 Storj ↔ Google Drive 마이그레이션을 간단하게 수행할 수 있습니다.

<CloudSupportGrid />
