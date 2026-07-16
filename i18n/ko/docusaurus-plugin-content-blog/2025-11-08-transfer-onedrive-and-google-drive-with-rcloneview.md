---
slug: transfer-onedrive-and-google-drive-with-rcloneview
title: "RcloneView로 OneDrive와 Google Drive 간 파일 전송하기"
authors:
  - tayson
description: "다운로드 없이 Microsoft OneDrive와 Google Drive 간에 파일을 이동하세요—RcloneView의 드래그 앤 드롭, 비교(Compare), 동기화(Sync), 예약 작업(Job)을 사용해 안정적인 클라우드 간 전송을 수행할 수 있습니다."
keywords:
  - onedrive to google drive transfer
  - google drive to onedrive migration
  - rcloneview
  - cloud to cloud sync
  - drag and drop transfer
  - scheduled sync jobs
  - compare folders
  - resumable uploads
  - oauth login
tags:
  - RcloneView
  - cloud-migration
  - onedrive
  - google-drive
  - sync
  - automation
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# RcloneView로 OneDrive와 Google Drive 간 파일 전송하기

> 수 기가바이트를 다시 다운로드하지 않고도 클라우드를 전환하세요. RcloneView는 듀얼 패널 탐색기, 비교(Compare), 동기화(Sync), 예약 작업(Job)을 제공하여 OneDrive ↔ Google Drive 간 이동을 빠르고 예측 가능하게 유지합니다—CLI가 필요 없습니다.


<!-- truncate -->

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />



## OneDrive ↔ Google Drive 전송에 RcloneView를 사용해야 하는 이유

- 두 클라우드 모두 안전한 OAuth 로그인을 지원하므로 토큰을 붙여 넣을 필요가 없습니다.
- 진행률 로그, 재시도, 대역폭 제한 기능을 갖춘 재개 가능한 전송.
- 스크립트 없이 드래그 앤 드롭으로 이동할 수 있는 듀얼 패널 탐색기.
- 복사 전에 새 파일/변경된 파일을 강조 표시하는 비교(Compare) 기능.
- 단방향 또는 양방향 동기화(Sync)와 재사용 가능한 작업(Job) 및 예약 기능.
- 이동할 항목을 정확히 제어할 수 있는 드라이런(dry-run) 및 필터 옵션.

RcloneView는 rclone 위에 가이드 UI를 얹어, 대규모 마이그레이션도 안정적으로 유지하면서 필요할 때는 엔지니어가 고급 옵션을 사용할 수 있도록 합니다.

<img src="/support/images/en/tutorials/open-google-drive-and-onedrive.png" alt="transfer files between onedrive and google drive" class="img-large img-center" />


## 시작하기 전에

- OneDrive와 Google Drive 계정 모두에 로그인하세요.
- 최신 빌드로 RcloneView를 설치하세요: [다운로드](https://rcloneview.com/src/download.html).
- 클라우드 용량과 일일 API 제한을 확인하세요(Google Drive는 사용자당 업로드에 대해 하루 750GB 제한을 적용합니다).
- 최적의 처리량을 위해 대규모 작업 중에는 RcloneView를 계속 실행하고 유선 네트워크를 사용하는 것이 좋습니다.

## 1단계: 두 클라우드 리모트 연결하기

1. **Remote → + New Remote**를 엽니다.
2. **Provider**에서 **OneDrive**를 선택한 다음 **Connect**를 클릭하여 Microsoft OAuth 로그인을 완료합니다.
3. **Google Drive**에 대해서도 동일하게 반복하고 OAuth 흐름을 완료합니다.
4. 두 리모트가 모두 Remote Manager에 표시되는지 확인합니다.

👉 더 알아보기: [Google Drive 리모트 추가하기](/howto/#step-2-adding-remote-storage-google-drive-example)

<img src="/support/images/en/howto/remote-storage-connection-settings/remote-manager-mega-view.png" alt="Remote Manager showing connected cloud remotes" class="img-large img-center" />

## 2단계: 탐색기 패널에서 두 리모트 열기

1. **Browse** 탭으로 이동합니다.
2. 왼쪽 패널에서 **+**를 클릭하고 **OneDrive** 리모트를 엽니다.
3. 오른쪽 패널에서 **+**를 클릭하고 **Google Drive** 리모트를 엽니다.
4. 동기화하려는 원본 및 대상 폴더로 이동합니다.


## 파일을 이동하는 네 가지 방법

### 방법 1: 탐색기 패널 간 드래그 앤 드롭

1. OneDrive 패널에서 파일이나 폴더를 선택합니다.
2. Google Drive 패널로 드래그합니다(또는 반대 방향으로도 가능).
3. **Transfer** 탭에서 진행률을 확인하고, 필요하면 일시 중지/재개합니다.

👉 자세히 보기: [원격 스토리지 탐색 및 관리](/howto/rcloneview-basic/browse-and-manage-remote-storage)

  <img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="drag and drop" class="img-large img-center" />

### 방법 2: 비교(Compare) 후 복사 또는 삭제

1. 왼쪽에 원본 폴더를, 오른쪽에 대상 폴더를 엽니다.
2. 툴바에서 **Compare**를 클릭합니다.
3. RcloneView가 고유 파일, 크기 불일치, 일치 항목을 강조 표시합니다.
4. 이동할 항목을 선택한 다음 **Copy →** 또는 **← Copy**를 선택합니다.
5. 이전 데이터를 정리할 때는 **Delete**를 신중하게 사용하세요.

👉 더 알아보기: [폴더 콘텐츠 비교하기](/howto/rcloneview-basic/compare-folder-contents)

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare OneDrive and Google Drive folders" class="img-large img-center" />

### 방법 3: 동기화(Sync) 또는 작업(Job)으로 저장

1. OneDrive 원본과 Google Drive 대상을 선택합니다.
2. **Sync**를 클릭하고 단방향(OneDrive → Google Drive) 또는 양방향을 선택합니다.
3. 미리보기를 검토하고 필터(포함/제외)를 조정한 다음 시작합니다.
4. **Save to Jobs**를 클릭해 동일한 동기화를 나중에 재사용할 수 있게 저장합니다.

👉 더 알아보기:

- [원격 스토리지 동기화하기](/howto/rcloneview-basic/synchronize-remote-storages)
- [동기화 작업 생성하기](/howto/rcloneview-basic/create-sync-jobs)
- [작업 실행 및 관리하기](/howto/rcloneview-basic/execute-manage-job)

<img src="/support/images/en/howto/rcloneview-basic/add-job-configure-storage.png" alt="Configure sync job between OneDrive and Google Drive" class="img-large img-center" />

### 방법 4: 자동 동기화 작업 예약하기

1. **Job Manager → Add Job**을 엽니다.
2. **OneDrive**를 원본으로, **Google Drive**를 대상으로 설정합니다(또는 반대로 설정).
3. 예약 주기(매시간, 매일, 매주, 또는 cron 형식)를 선택합니다.
4. 작업을 저장하고 활성화하면 RcloneView가 자동으로 실행합니다.
5. 검증을 위해 로그와 실행 기록을 확인합니다.

👉 더 알아보기: [작업 예약 및 실행](/howto/rcloneview-advanced/job-scheduling-and-execution)

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule OneDrive to Google Drive sync job" class="img-large img-center" />

## 원활한 멀티 클라우드 전송을 위한 팁

- 대규모 동기화 전에 **드라이런(dry-run)**을 사용해 변경될 내용을 확인하세요.
- 공유된 OneDrive/Drive 폴더의 경우, 양쪽 모두에 편집 권한이 있는지 확인하세요.
- 업무 시간대에는 **대역폭 제한**을 사용해 속도 제한(throttling)을 피하세요.
- Google Drive가 하루 750GB 한도에 도달하면, 작업을 여러 날 또는 여러 계정으로 나누세요.
- 재시도와 처리량을 추적하려면 **Transfer** 탭을 열어 두세요.

## 요약

RcloneView는 **OneDrive**와 **Google Drive** 사이의 다운로드/재업로드 반복 작업을 없애줍니다. 나란히 보는 탐색, 비교(Compare), 동기화(Sync), 재사용 가능한 작업(Job), 예약 기능을 통해 일회성 이동이든 반복적인 백업이든 명령줄 없이도 자신 있게 실행할 수 있습니다.

<CloudSupportGrid />
