---
sidebar_position: 7
description: "RcloneView의 GUI를 사용하여 Box와 Google Drive 간에 파일을 원활하게 전송하고 동기화하는 방법을 알아보세요—드래그 앤 드롭, 폴더 비교, 작업 예약 기능 포함."
keywords:
  - rcloneview
  - cloud
  - sync
  - rclone
  - cloud to cloud transfer
  - rclone GUI
  - cloud sync
  - Cloud Migration
  - cloud storage
  - cloud transfer
  - file synchronization
  - Box
  - google drive
  - box to google drive
tags:
  - RcloneView
  - Cloud
  - Sync
  - cloud-file-transfer
  - cloud-migration
  - Tutorial
  - box
  - google-drive
  - cloud-to-cloud
date: 2025-07-10
author: Jay
---
import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';

# Box ↔ Google Drive 파일 전송 가이드

**Box**와 **Google Drive**와 같은 클라우드 스토리지 플랫폼은 각각 고유한 장점을 제공합니다. Box는 고급 보안과 워크플로우 기능을 갖춘 엔터프라이즈 협업에 최적화되어 있으며, Google Drive는 Google Workspace와 원활하게 통합되고 넉넉한 무료 저장 공간을 제공합니다. 하지만 두 플랫폼 간에 파일을 관리하는 것은 번거로울 수 있습니다—특히 두 플랫폼 사이에서 데이터를 마이그레이션해야 할 때 더욱 그렇습니다.

**RcloneView**를 사용하면 명령줄 없이도 직관적인 GUI를 통해 Box와 Google Drive 간에 **양방향으로 파일을 손쉽게 전송**할 수 있습니다.

  
<img src="/support/images/en/tutorials/transfer-files-between-box-and-google-drive.png" alt="transfer files between box and google drive" class="img-medium img-center" />

## **왜 멀티 클라우드 전송에 RcloneView를 사용해야 할까요?**

RcloneView는 다음과 같은 기능으로 복잡한 클라우드 전송을 간소화합니다:

- Box 및 Google Drive를 위한 안전한 OAuth 통합
- 클라우드 간 드래그 앤 드롭 파일 전송
- 전송 전 차이점을 미리 볼 수 있는 폴더 비교 도구
- 반복되는 전송 및 백업을 위한 동기화 및 예약
- 드라이런 미리보기, 필터, 고급 전송 옵션
- 진행 상황 로그와 함께하는 백그라운드 전송 모니터링

파일을 수동으로 다운로드한 후 다시 업로드하는 대신, RcloneView는 직접 API 기반 전송을 활용하여 워크플로우를 더 빠르고 안정적으로 만들어줍니다.

## 🔄 파일 전송: Box ↔ Google Drive

### 1단계: 클라우드 리모트 연결하기

1. **RcloneView**를 실행한 다음, **Remote** 메뉴에서 **`+ New Remote`**를 선택합니다.
2. **`Provider`** 탭에서 **Box**를 검색하여 선택합니다.
3. 안내에 따라 OAuth 로그인을 완료합니다.
4. **Google Drive**에 대해서도 동일한 과정을 반복합니다.


👉 더 알아보기:

- [Box 리모트 추가하기](/howto/remote-storage-connection-settings/add-oath-online-login#quick-setup-guide)
- [Google Drive 리모트 추가하기](/howto/#step-2-adding-remote-storage-google-drive-example)

### 2단계: 리모트를 나란히 열기

1. Explorer 창에서 **Browse** 탭으로 이동합니다.
2. 한쪽 창에서 더하기 아이콘 `+`를 클릭하고 **Box** 리모트를 선택합니다.
3. 다른 쪽 창에서 `+`를 클릭하고 **Google Drive** 리모트를 선택합니다.
4. 두 리모트가 나란히 표시되어 손쉽게 드래그, 복사, 또는 동기화를 수행할 수 있습니다.

이제 두 리모트 간에 원활하게 전송을 수행할 수 있습니다.

<img src="/support/images/en/tutorials/open-box-and-google-drive-remotes.png" alt="open box and google drive remotes" class="img-medium img-center" />

### 📌 파일 전송을 위한 4가지 방법

RcloneView는 Box에서 Google Drive로 데이터를 이동하거나 동기화할 수 있는 다양하고 유연한 방법을 제공합니다. 워크플로우에 맞는 방법을 선택하세요:

#### 🖱️ 방법 1: Explorer 창 간 드래그 앤 드롭

1. **RcloneView**를 열고 **Browse** 탭으로 이동합니다.
2. Box와 Google Drive 리모트가 모두 나란히 표시되어 있는지 확인합니다.
3. Box 창에서 **파일이나 폴더를 드래그**하여 Google Drive 창에 **드롭**합니다.
4. 전송이 자동으로 시작됩니다. **`Transfer`** 로그 탭에서 진행 상황을 확인하세요.

이 직관적인 드래그 앤 드롭 인터페이스를 통해 클라우드 간 전송을 명령어 없이 손쉽게 수행할 수 있습니다.

👉 자세히 보기: [원격 스토리지 탐색 및 관리](/howto/rcloneview-basic/browse-and-manage-remote-storage)

#### 🔍 방법 2: 폴더 내용 비교, 복사 또는 삭제

1. 양쪽 Explorer 창에서 비교하려는 폴더로 이동하여 선택합니다(왼쪽: Box, 오른쪽: Google Drive).
2. 메인 메뉴에서 **`Compare`** 버튼을 클릭합니다.
3. RcloneView가 다음을 강조 표시합니다:
   - 한쪽에만 존재하는 파일
   - 이름은 같지만 크기가 다른 파일
   - 동일한 파일
4. 전송하거나 삭제할 파일을 선택합니다.
5. 왼쪽에서 오른쪽으로 파일을 전송하려면 **`Copy →`**를 클릭합니다. 오른쪽에서 왼쪽으로 전송하려면 **`← Copy`**를 사용합니다. 파일을 삭제하려면 **`Delete`**를 클릭합니다.
6. 진행 상황과 요약 업데이트가 상태 표시줄에 나타납니다.

시각적 비교를 통해 오류를 방지하고 의도한 항목만 정확히 이동할 수 있습니다.

👉 더 알아보기: [폴더 내용 비교 가이드](/howto/rcloneview-basic/compare-folder-contents)

  
#### 🔁 방법 3: 동기화(Sync) 또는 작업(Job) 사용하기

1. Explorer 창에서 동기화하려는 **Box** 폴더와 **Google Drive** 폴더를 선택합니다.
2. `home` 메뉴에서 **`Sync`** 버튼을 클릭합니다.
3. 동기화 옵션(단방향 또는 양방향)을 선택하고, 동작을 미리 확인한 후 확인을 클릭합니다.
4. RcloneView가 동기화를 실행하고 **`transfer`** 로그 탭에 진행 상황을 표시합니다.

- 반복 또는 예약 전송을 위해서는:
  1. Sync 모달에서 **`Save to Jobs`**를 클릭하거나, **`Job Manager`** → **`Add Job`**을 엽니다.
  2. 소스, 대상, 옵션을 설정합니다.
  3. 저장 후 수동으로 실행하거나 일정을 설정합니다.

👉 더 알아보기:
- [원격 스토리지 동기화하기](/howto/rcloneview-basic/synchronize-remote-storages)
- [동기화 작업 생성하기](/howto/rcloneview-basic/create-sync-jobs)
- [작업 실행 및 관리하기](/howto/rcloneview-basic/execute-manage-job)

  
#### ⏰ 방법 4: 자동 동기화 작업 예약하기

1. Explorer 창에서 동기화 상태를 유지하려는 **Box**와 **Google Drive** 폴더를 선택합니다.
2. **`Home`** 또는 **`Remote`** 메뉴에서 **`Job Manager`**를 연 다음 **`Add Job`**을 클릭합니다.
3. 소스와 대상을 확인합니다.
4. 일정 편집기를 사용하여 작업이 실행될 시점을 설정합니다. 저장 전에 일정을 미리 확인하세요.
5. 저장하고 예약된 작업을 활성화합니다.

RcloneView가 지정된 시간에 동기화를 실행합니다. **`Job History`**에서 실행 세부 정보와 로그를 확인하고, 완료 시 알림을 받을 수 있습니다.

👉 더 알아보기: [작업 예약 및 실행](/howto/rcloneview-advanced/job-scheduling-and-execution)

  
## ✅ 요약

한 번의 데이터 마이그레이션이든 지속적인 동기화 유지든, RcloneView는 Box와 Google Drive 간의 빠르고 안전하며 안정적인 파일 전송을 가능하게 해줍니다—수동 다운로드나 명령줄 도구가 필요 없습니다.

  
지금 바로 사용해 보고 멀티 클라우드 워크플로우를 간소화해 보세요!

  
## 🔗 관련 가이드

- [Box 리모트 추가하는 방법](/howto/remote-storage-connection-settings/add-oath-online-login#quick-setup-guide)
- [Google Drive 리모트 추가하는 방법](/howto/#step-2-adding-remote-storage-google-drive-example)
- [원격 스토리지 탐색 및 관리](/howto/rcloneview-basic/browse-and-manage-remote-storage)
- [폴더 내용 비교](/howto/rcloneview-basic/compare-folder-contents)
- [원격 스토리지 동기화하기](/howto/rcloneview-basic/synchronize-remote-storages)
- [동기화 작업 생성하기](/howto/rcloneview-basic/create-sync-jobs)
- [작업 실행 및 관리하기](/howto/rcloneview-basic/execute-manage-job)
- [작업 예약 및 실행](/howto/rcloneview-advanced/job-scheduling-and-execution)

  

<CloudSupportGrid />
