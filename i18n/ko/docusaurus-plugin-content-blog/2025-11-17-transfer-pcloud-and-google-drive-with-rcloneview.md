---
slug: transfer-pcloud-and-google-drive-with-rcloneview
title: "RcloneView로 pCloud와 Google Drive 간 파일 전송하기"
authors:
  - tayson
description: "다시 다운로드하지 않고 pCloud와 Google Drive 사이에서 데이터를 이동하고 싶다면? RcloneView로 드래그 앤 드롭, 비교, 동기화, OAuth와 멀티스레드 업로드를 활용한 예약 작업까지 사용해 보세요."
keywords:
  - pcloud to google drive
  - google drive to pcloud
  - rcloneview
  - cloud to cloud transfer
  - multi thread upload
  - drag and drop sync
  - scheduled jobs
  - compare folders
  - oauth login
  - resumable transfers
tags:
  - RcloneView
  - cloud-migration
  - pcloud
  - google-drive
  - sync
  - automation
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# RcloneView로 pCloud와 Google Drive 간 파일 전송하기

> 다운로드 후 다시 업로드하는 번거로운 작업은 건너뛰세요. RcloneView를 사용하면 CLI 없이 안내형 GUI에서 pCloud ↔ Google Drive 전송을 드래그 앤 드롭, 비교, 동기화, 예약까지 할 수 있습니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 멀티 클라우드 전송에 RcloneView를 사용해야 하는 이유

- Google Drive용 안전한 OAuth와 pCloud용 간단한 이메일/비밀번호 로그인을 제공하며, 토큰을 붙여넣을 필요가 없습니다.
- 진행 로그와 재시도 기능을 갖춘 멀티스레드 재개형(resumable) 업로드.
- 클라우드 간 직접 드래그 앤 드롭이 가능한 2단 탐색기(Explorer).
- 복사나 정리 전 차이를 미리 볼 수 있는 비교(Compare) 기능.
- 포함/제외 필터, 드라이런, 크기 기반 판단을 지원하는 동기화(Sync).
- 반복적인 이동 작업을 자동화하는 백그라운드 작업(Jobs) 및 예약 기능.

RcloneView는 rclone의 신뢰성과 시각적 워크플로를 결합해 팀과 관리자가 대용량 폴더를 안심하고 이동할 수 있도록 해줍니다.

## 시작하기 전에

- 두 계정 모두 로그인하고 할당량과 API 제한을 확인하세요 (Google Drive는 사용자당 하루 750GB 업로드 제한을 적용합니다).
- 최신 RcloneView 빌드를 설치하세요: [다운로드](https://rcloneview.com/src/download.html).
- pCloud의 경우 이메일/비밀번호를 준비해 두고, 보안 설정에서 요구할 경우 앱 비밀번호를 활성화하세요.
- 대용량 전송 시에는 유선 연결이나 안정적인 Wi-Fi를 사용하고, 작업이 중단되지 않도록 RcloneView를 계속 실행 상태로 유지하세요.

## 1단계: 클라우드 리모트 연결하기

1. **Remote → + New Remote**를 엽니다.
2. **pCloud**를 선택하고 **이메일**과 **비밀번호**를 입력한 뒤 저장합니다.
3. **Google Drive**에 대해서도 동일하게 진행하며, **Connect**를 클릭해 OAuth 브라우저 로그인을 완료합니다.
4. Remote Manager에 두 리모트가 모두 표시되는지 확인합니다.  

  <img src="/support/images/en/blog/new-remote.png" alt="Open multiple cloud remotes in RcloneView" class="img-large img-center" />
  
  👉 더 알아보기:
  - [Google Drive 리모트 추가하기](/howto/#step-2-adding-remote-storage-google-drive-example)
  - [새 리모트 추가하기 (OAuth)](/howto/remote-storage-connection-settings/add-oath-online-login)

## 2단계: 탐색기 창에서 두 리모트 열기

1. **Browse**로 이동합니다.
2. 왼쪽 창에서 **+**를 클릭하고 **pCloud** 리모트를 엽니다.
3. 오른쪽 창에서 **+**를 클릭하고 **Google Drive** 리모트를 엽니다.
4. 이동할 원본 폴더와 대상 폴더로 이동합니다.

<img src="/support/images/en/howto/remote-storage-connection-settings/pcloud-first-in-explorer.png" alt="open pcloud and google drive remotes" class="img-medium img-center" />

## pCloud ↔ Google Drive 전송을 위한 네 가지 방법

### 방법 1: 창 간 드래그 앤 드롭

1. pCloud 창에서 파일이나 폴더를 선택합니다.
2. 이를 Google Drive 창으로 드래그합니다 (또는 반대 방향으로).
3. **Transfer** 탭에서 진행 상황을 확인하고, 필요하면 일시정지하거나 재개합니다.  

  <img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="drag and drop" class="img-large img-center" />
    
  👉 자세히 보기: [원격 스토리지 탐색 및 관리](/howto/rcloneview-basic/browse-and-manage-remote-storage)

### 방법 2: 비교 후 복사하거나 삭제하기

1. 왼쪽에 원본 폴더, 오른쪽에 대상 폴더를 엽니다.
2. 툴바에서 **Compare**를 클릭합니다.
3. RcloneView가 고유 항목, 크기 차이, 일치 항목을 강조 표시합니다.
4. 이동할 항목을 선택한 뒤 **Copy →** 또는 **← Copy**를 선택합니다.
5. 중복 항목이나 오래된 데이터를 정리할 때는 **Delete**를 신중하게 사용하세요.  

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare shared folder and My Drive contents" class="img-large img-center" />
  

👉 더 알아보기: [폴더 내용 비교하기](/howto/rcloneview-basic/compare-folder-contents)

### 방법 3: 동기화하거나 작업으로 저장하기

1. pCloud 원본과 Google Drive 대상을 선택합니다.
2. **Sync**를 클릭하고 단방향 또는 양방향 동기화를 선택합니다.
3. 변경 사항을 미리 보고 필터(포함/제외)를 조정한 뒤 시작합니다.
4. **Save to Jobs**를 클릭해 나중에 같은 설정을 재사용할 수 있게 저장합니다.  

<img src="/support/images/en/howto/rcloneview-basic/add-job-in-job-manager.png" alt="add sync job in job manager" class="img-large img-center" />   
     

👉 더 알아보기:
- [원격 스토리지 동기화하기](/howto/rcloneview-basic/synchronize-remote-storages)
- [동기화 작업 생성하기](/howto/rcloneview-basic/create-sync-jobs)
- [작업 실행 및 관리하기](/howto/rcloneview-basic/execute-manage-job)


### 방법 4: 반복 동기화 작업 예약하기

1. **Job Manager → Add Job**을 엽니다.
2. **pCloud**를 원본으로, **Google Drive**를 대상으로 설정합니다 (또는 반대로).
3. 일정(매시간, 매일, 매주 또는 사용자 지정 cron 형식)을 선택합니다.
4. 작업을 활성화하고 RcloneView가 자동으로 실행하도록 둡니다.
5. 로그와 기록을 확인해 정상적으로 실행되었는지 확인합니다.

👉 더 알아보기: [작업 예약 및 실행](/howto/rcloneview-advanced/job-scheduling-and-execution)
<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="configure job schedule" class="img-large img-center" />

## 원활한 전송을 위한 팁

- 대규모 동기화 전에는 **드라이런**을 실행해 계획을 확인하세요.
- 업무 시간에는 **대역폭 제한**을 사용해 속도 제한 위험을 줄이세요.
- 암호화된 pCloud 폴더의 경우 액세스 키를 확보하거나 이동 전 로컬에서 복호화하세요.
- Google Drive의 일일 한도에 근접하면 작업을 여러 날 또는 여러 계정으로 나누세요.
- **Transfer** 탭을 열어두고 재시도, 속도, API 응답을 모니터링하세요.

## 요약

RcloneView는 **pCloud**와 **Google Drive** 사이의 빠르고 안정적인 CLI 없는 전송을 제공합니다. 나란히 보는 탐색 기능, 비교(Compare), 동기화(Sync), 재사용 가능한 작업(Jobs), 예약 기능을 통해 수동 다운로드나 재업로드 없이 마이그레이션이나 반복 백업을 처리할 수 있습니다.

<CloudSupportGrid />
