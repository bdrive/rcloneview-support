---
sidebar_position: 2
description: "RcloneView의 직관적인 드래그 앤 드롭 GUI와 작업 스케줄러를 사용하여 Google Drive와 OneDrive 간에 파일을 복사, 동기화, 예약 전송하는 방법을 알아보세요."
keywords:
  - rcloneview
  - Google Drive to OneDrive
  - cloud to cloud transfer
  - file synchronization
  - Cloud Migration
  - cloud storage
  - cloud sync
  - Onedrive
  - google drive
  - job scheduling
  - rclone
  - sync
  - scheduled jobs
  - drag and drop
tags:
  - RcloneView
  - Tutorial
  - cloud-storage
  - cloud-file-transfer
  - cloud-migration
  - google-drive
  - onedrive
  - Sync
  - job
  - cloud-to-cloud
date: 2025-05-19
author: Jay
---
import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';

# Google Drive to OneDrive 전송 가이드
  

클라우드 스토리지 서비스는 문서, 미디어, 백업을 관리하는 데 필수적인 도구가 되었습니다. 가장 널리 사용되는 서비스로는 **Google Drive**와 **Microsoft OneDrive**를 꼽을 수 있습니다. 두 서비스 모두 넉넉한 저장 공간과 생산성 도구(Google Workspace 및 Microsoft 365)와의 통합, 폭넓은 플랫폼 지원을 제공합니다.

두 플랫폼 모두 각자의 클라우드 생태계를 제공하지만, **RcloneView**는 복잡한 스크립트나 명령줄 작업 없이 이들 간에 파일을 관리, 전송, 동기화할 수 있는 통합 인터페이스를 제공합니다.

이 가이드에서는 Rclone 위에 구축된 GUI 기반 도구인 **RcloneView**를 사용하여 **Google Drive에서 OneDrive로 파일을 전송**하는 방법을 안내합니다. RcloneView는 멀티 클라우드 파일 관리를 간단하고 강력하게 만들어줍니다.

<img src="/support/images/en/tutorials/google-drive-to-ondrive-transfer.png" alt="google drive to ondrive transfer" class="img-medium img-center" />

## **클라우드 간 전송에 RcloneView를 사용해야 하는 이유**

RcloneView는 Rclone 엔진 위에 구축된 강력한 GUI로, 클라우드 스토리지 관리를 간소화하도록 설계되었습니다.

- 여러 클라우드 제공자를 손쉽게 연결
- 드래그 앤 드롭으로 파일을 전송하는 직관적인 인터페이스
- 전송 전 폴더 내용 비교
- 드라이런, 필터, 작업 예약 등 고급 기능을 갖춘 간단한 GUI
- 반복 전송 및 백업 예약
- Google Drive와 OneDrive에 대한 안전한 OAuth 로그인

전통적인 수동 다운로드/업로드 방식과 달리, RcloneView는 API 기반 직접 작업을 통해 프로세스를 자동화하여 클라우드 스토리지 간의 원활하고 무인 전송을 가능하게 합니다.

## 📙 Google Drive에서 OneDrive로 파일 전송하기


### RcloneView에서 Google Drive와 OneDrive 리모트 추가하기

1. **RcloneView**를 열고 **`Remote`** 메뉴에서 **`+ New Remote`**를 클릭합니다.  
2. **`Provider`** 탭에서 **Google Drive**를 검색해 선택합니다.  
3. 마법사를 따라 진행하며 OAuth 로그인을 완료합니다.  
4. **OneDrive**에 대해서도 동일한 과정을 반복합니다.  

 🔍 자세한 설정 방법은 다음을 참고하세요.
 - [Google Drive 리모트 추가 방법](/howto/#step-2-adding-remote-storage-google-drive-example)
 - [OneDrive 리모트 추가 방법](/howto/remote-storage-connection-settings/add-oath-online-login#quick-setup-guide)

### 탐색기 패널에서 두 리모트 열기

1. **RcloneView**를 열고 탐색기 패널의 **Browse 탭**으로 이동합니다.  
2. 한쪽 패널에서 헤더의 `+` 아이콘을 클릭하고 목록에서 **Google Drive** 리모트를 선택합니다.  
3. 다른 쪽 패널에서 `+` 아이콘을 클릭하고 목록에서 **OneDrive** 리모트를 선택합니다.  
4. 이제 두 리모트가 나란히 표시되어 파일과 폴더를 손쉽게 복사, 비교, 드래그, 동기화할 수 있습니다.  

<img src="/support/images/en/tutorials/open-google-drive-and-onedrive.png" alt="open google drive and onedrive" class="img-medium img-center" />

### 📌 파일 전송을 위한 4가지 방법

RcloneView는 Google Drive와 OneDrive 간에 데이터를 이동하거나 동기화하는 여러 강력한 방법을 제공합니다. 작업 흐름에 맞는 방법을 선택하세요.

#### 🖱️ **방법 1: 탐색기 패널 간 드래그 앤 드롭**

  
	1. **RcloneView**를 열고 **Browse** 탭으로 이동합니다(시작 시 기본으로 표시됨).  
	2. 두 클라우드 리모트(Google Drive와 OneDrive)가 듀얼 패널 탐색기에 나란히 표시되어 있는지 확인합니다.  
	3. Google Drive 패널에서 **파일이나 폴더를 드래그**하여 OneDrive 패널에 **놓기만** 하면 됩니다.  
	4. Rclone 백그라운드 엔진을 통해 전송이 자동으로 시작됩니다. **`Transfer`** 로그 탭에서 실시간으로 진행 상황을 확인할 수 있습니다.  

  
이 직관적인 드래그 앤 드롭 인터페이스 덕분에 명령어 없이도 파일을 손쉽게 이동하거나 복사할 수 있습니다.

👉 자세히 알아보기: [원격 스토리지 탐색 및 관리](/howto/rcloneview-basic/browse-and-manage-remote-storage)

#### 🔍 **방법 2: 폴더 내용 비교, 복사 또는 삭제**

  
	1. 두 탐색기 패널에서 비교하려는 폴더로 이동해 선택합니다(왼쪽: Google Drive, 오른쪽: OneDrive).  
	2. 메인 메뉴 탭에서 **`Compare`** 버튼을 클릭하여 폴더 비교를 시작합니다.  
	3. RcloneView가 다음 항목을 스캔하여 강조 표시합니다.  
		- 한쪽에만 존재하는 파일  
		- 이름은 같지만 크기가 다른 파일  
		- 동일한 파일
	4. 작업할 파일을 선택합니다.  
	5. 왼쪽에서 오른쪽으로 파일을 전송하려면 **`Copy →`** 버튼을 클릭합니다.  
		   오른쪽에서 왼쪽으로 전송하려면 **`← Copy`** 버튼을 사용합니다.  
		   리모트에서 파일을 삭제하려면 해당 패널의 **`Delete`** 버튼을 클릭합니다.  
	6. 진행 상황과 요약 정보는 상태 표시줄에 나타납니다.  


이 시각적 비교 기능은 파일을 이동하거나 삭제하기 **전에** 검토할 수 있게 하여 오류를 최소화합니다.

👉 [폴더 내용 비교 가이드](/howto/rcloneview-basic/compare-folder-contents)에서 자세히 알아보세요.


#### 🔁 **방법 3: 동기화(Sync) 또는 작업(Job) 사용**

1. 탐색기 패널에서 동기화 상태를 유지하고 싶은 **Google Drive** 폴더와 **OneDrive** 폴더로 이동해 선택합니다.  
2. `home` 메뉴에서 **`Sync`** 버튼을 클릭합니다.  
3. 동기화 옵션(단방향 또는 역방향)을 선택하고 작업 내용을 미리 보고 확인합니다.   
4. RcloneView가 동기화를 실행하며 **`transfer`** 로그 탭에 진행 표시줄을 보여줍니다.   

- 반복적이거나 예약된 전송을 위해서는 다음과 같이 진행할 수도 있습니다.  

  1. Sync 모달 창에서 **`Save to Jobs`**를 클릭하거나 **`Job Manager`**를 열어 **`Add Job`**을 클릭합니다.   
  2. 소스와 대상을 구성하고 옵션을 설정합니다.   
  3. 작업을 저장한 후 수동으로 실행하거나 예약합니다.  

 👉 자세히 알아보기:  

- [원격 스토리지 동기화](/howto/rcloneview-basic/synchronize-remote-storages)  
- [동기화 작업 생성](/howto/rcloneview-basic/create-sync-jobs)  
- [작업 실행 및 관리](/howto/rcloneview-basic/execute-manage-job)

#### ⏰ 방법 4: 자동 동기화 작업 예약 

1. 탐색기 패널에서 동기화 상태를 유지하고 싶은 **Google Drive** 폴더와 **OneDrive** 폴더로 이동해 선택합니다.  
2. **`Home`** 또는 **`Remote`** 메뉴에서 **`Job Manager`**를 열고 **`Add Job`**을 클릭합니다.  
3. 선택한 소스와 대상을 확인하고 필요한 경우 조정합니다.  
4. 일정 편집기를 사용해 작업이 실행될 시점을 정의합니다. RcloneView는 예약 패턴을 저장하기 전에 미리 볼 수 있는 내장 시뮬레이션 도구를 제공합니다.  
5. 예약된 작업을 저장하고 활성화합니다.   

저장이 완료되면 RcloneView가 지정한 시간에 자동으로 동기화를 실행합니다.  

실행 세부 정보와 로그는 **`Job History`**에서 확인할 수 있으며, 작업이 성공적으로 완료되면 알림을 받게 됩니다.

👉 자세히 알아보기: [작업 예약 및 실행](/howto/rcloneview-advanced/job-scheduling-and-execution)


## **마치며**

Google Drive와 OneDrive 같은 클라우드 서비스 간에 파일을 전송하는 일이 복잡할 필요는 없습니다. **RcloneView**를 사용하면 명령줄 사용 없이 몇 번의 클릭만으로 처리할 수 있습니다.

이 방법은 빠르고 안전하며 신뢰할 수 있어, 개인 파일 수 기가바이트를 이동하든 계정 간 회사 문서를 동기화하든 모두 적합합니다.

 🎯 지금 바로 RcloneView를 사용해 멀티 클라우드 관리를 손쉽게 만들어보세요.

---

## 🔗 관련 가이드

- [Google Drive 리모트 추가 방법](/howto/#step-2-adding-remote-storage-google-drive-example)
- [OneDrive 리모트 추가 방법](/howto/remote-storage-connection-settings/add-oath-online-login#quick-setup-guide)
- [원격 스토리지 탐색 및 관리](/howto/rcloneview-basic/browse-and-manage-remote-storage)
- [폴더 내용 비교 가이드](/howto/rcloneview-basic/compare-folder-contents)
- [원격 스토리지 동기화](/howto/rcloneview-basic/synchronize-remote-storages)  
- [동기화 작업 생성](/howto/rcloneview-basic/create-sync-jobs)  
- [작업 실행 및 관리](/howto/rcloneview-basic/execute-manage-job)
- [작업 예약 및 실행](/howto/rcloneview-advanced/job-scheduling-and-execution)


<CloudSupportGrid />
