---
sidebar_position: 6
description: "RcloneView의 GUI 기능—드래그 앤 드롭, 비교, 동기화, 예약 실행, 클라우드 간 효율적인 전송—을 활용해 OneDrive와 Dropbox 사이에서 파일을 원활하게 전송하는 방법을 알아보세요."
keywords:
  - rcloneview
  - cloud
  - sync
  - onedrive to dropbox
  - cloud to cloud transfer
  - rclone GUI
  - Onedrive
  - Dropbox
  - rclone
  - cloud sync
  - Cloud Migration
  - cloud storage
  - cloud transfer
  - file synchronization
tags:
  - RcloneView
  - Cloud
  - Sync
  - cloud-file-transfer
  - cloud-migration
  - Tutorial
  - onedrive
  - dropbox
  - cloud-to-cloud
date: 2025-07-10
author: Jay
---
import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';

# RcloneView로 손쉽게 OneDrive에서 Dropbox로 전송하기

오늘날의 클라우드 우선 워크플로우에서는 **OneDrive**와 **Dropbox** 같은 여러 서비스를 함께 사용하는 것이 흔한 일입니다. OneDrive는 Microsoft 365와 매끄럽게 통합되고, Dropbox는 특히 팀 작업에서 안정적인 동기화와 공유 기능을 제공합니다. 하지만 **파일을 통합**하거나, **플랫폼 간 데이터를 공유**하거나, 단순히 **새로운 서비스로 이전**해야 할 때, 브라우저에서 흔히 사용하는 드래그 앤 드롭 방식은 느리고 중단되기 쉽습니다. 큰 폴더는 다운로드 후 다시 업로드해야 하므로 오류 발생 위험, 대역폭 소모, 시간 낭비로 이어집니다.

이때 **RcloneView**가 나섭니다. RcloneView는 로컬 다운로드 없이 클라우드 간 직접 전송이 가능한 안전하고 효율적인 GUI를 제공합니다. 다음과 같은 작업을 할 수 있습니다.

- OAuth 로그인으로 **OneDrive**와 **Dropbox** 모두에 연결  
- 듀얼 패널 인터페이스로 두 서비스를 나란히 탐색  
- 드래그 앤 드롭, 폴더 비교, 자동화된 작업(Job)을 통한 파일 전송  
- 백업이나 워크플로우 동기화를 위한 반복 전송 예약  

<img src="/support/images/en/tutorials/transfer-files-between-onedrive-and-dropbox.png" alt="transfer files between onedrive and dropbox" class="img-medium img-center" />

## OneDrive에서 Dropbox로 파일 전송하는 단계

### RcloneView에 OneDrive와 Dropbox 리모트 추가하기  
1. **RcloneView**를 열고 **`Remote`** 탭으로 이동합니다.  
2. **`+ New Remote`**를 클릭하고 **OneDrive**를 선택한 뒤 OAuth 절차를 완료합니다.  
3. 같은 방법으로 **Dropbox**도 추가합니다.  
   - Dropbox Business의 경우 *Advanced Options*로 이동해 `dropbox_business=true`를 활성화하세요.

👉 자세히 알아보기: [브라우저 기반 로그인으로 클라우드 리모트 연결하기](/howto/remote-storage-connection-settings/add-oath-online-login)

### 탐색기 패널에서 두 리모트 열기  
1. **Browse** 탭으로 이동합니다.  
2. 왼쪽 패널의 `+` 아이콘을 클릭하고 **OneDrive** 리모트를 선택합니다.  
3. 오른쪽 패널의 `+`를 클릭하고 **Dropbox** 리모트를 선택합니다.  
4. 이제 두 서비스가 나란히 표시되어 손쉽게 파일을 탐색하고 이동할 수 있습니다.

<img src="/support/images/en/tutorials/open-onedrive-and-dropbox-remotes.png" alt="open onedrive and dropbox remotes" class="img-medium img-center" />

## 🔄 파일을 전송하는 네 가지 방법

### 🖱️ 방법 1: 드래그 앤 드롭  
- OneDrive 패널에서 파일이나 폴더를 Dropbox 패널로 드래그하기만 하면 됩니다.  
- 전송이 즉시 시작되며 진행 상황은 **`Transfer`** 탭에 표시됩니다.

👉 자세히 알아보기: [원격 스토리지 탐색 및 관리](/howto/rcloneview-basic/browse-and-manage-remote-storage)

### 🔍 방법 2: 폴더 비교 후 복사/삭제  
1. 각 패널에서 원하는 폴더로 이동합니다.  
2. **`Home`** 메뉴에서 **`Compare`**를 클릭합니다.  
3. RcloneView가 다음 항목을 강조 표시합니다.  
   - OneDrive에만 있는 파일  
   - Dropbox에만 있는 파일  
   - 이름은 같지만 크기가 다른 파일  
   - 동일한 파일  
1. 파일을 선택한 뒤 **`Copy →`**를 클릭해 Dropbox로 보내거나, **`← Copy`**를 클릭해 Dropbox에서 OneDrive로 가져옵니다.  
2. 불필요한 파일은 **`Delete`**로 제거합니다.  
3. 상태 표시줄과 **`Transfer`** 로그에서 진행 상황을 확인합니다.

👉 자세히 알아보기: [폴더 내용 비교 가이드](/howto/rcloneview-basic/compare-folder-contents)

### 🔁 방법 3: 동기화 또는 Job으로 저장  
1. OneDrive를 왼쪽(원본) 패널로, Dropbox를 오른쪽(대상) 패널로 설정한 뒤 **`Sync`**를 클릭합니다.  
2. 동기화 방향, 필터 및 기타 옵션을 선택합니다.  
3. 즉시 실행하거나 **`Save as Job`**을 클릭해 나중에 실행할 수 있도록 설정을 저장합니다.

 👉 자세히 알아보기:  
- [원격 스토리지 동기화하기](/howto/rcloneview-basic/synchronize-remote-storages)  
- [동기화 Job 만들기](/howto/rcloneview-basic/create-sync-jobs)  
- [Job 실행 및 관리](/howto/rcloneview-basic/execute-manage-job)


### ⏰ 방법 4: 자동 동기화 Job 예약하기  
1. **`Home`** 메뉴에서 **`Job Manager`**를 열고 → **`Add Job`**을 클릭합니다.  
2. OneDrive 원본과 Dropbox 대상 폴더를 확인합니다.  
3. 예약 기능을 활성화하고 반복 주기(매일, 매주 등)를 정의합니다.  
4. 저장 후 예약을 활성화합니다.  
5. RcloneView가 자동으로 Job을 실행하며, 결과는 **`Job History`**에서 확인할 수 있습니다.

👉 자세히 알아보기: [Job 예약 및 실행](/howto/rcloneview-advanced/job-scheduling-and-execution)

## ✅ 마치며  

서비스를 이전하든, 데이터를 백업하든, 플랫폼 간 동기화를 하든, **RcloneView**는 이러한 작업을 간단하게 만들어 줍니다. 드래그 앤 드롭 전송, 폴더 비교, 동기화, 예약 실행 같은 강력한 기능을 통해 빠르고 오류에 강하며 코드 작성이 필요 없는 클라우드 데이터 관리 방법을 경험할 수 있습니다.

---

## 🔗 관련 자료  

- [OneDrive / Dropbox 리모트 추가하기](/howto/remote-storage-connection-settings/add-oath-online-login#quick-setup-guide)  
- [원격 스토리지 탐색 및 관리](/howto/rcloneview-basic/browse-and-manage-remote-storage)  
- [폴더 내용 비교](/howto/rcloneview-basic/compare-folder-contents)  
- [원격 스토리지 동기화하기](/howto/rcloneview-basic/synchronize-remote-storages)  
- [동기화 Job 만들기](/howto/rcloneview-basic/create-sync-jobs)  
- [Job 예약 및 실행](/howto/rcloneview-advanced/job-scheduling-and-execution)


<CloudSupportGrid />
