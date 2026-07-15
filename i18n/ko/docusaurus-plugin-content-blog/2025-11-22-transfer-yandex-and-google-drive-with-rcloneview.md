---
slug: transfer-yandex-and-google-drive-with-rcloneview
title: "RcloneView로 Yandex Disk와 Google Drive 간 파일 전송하기"
authors:
  - tayson
description: "RcloneView의 GUI를 사용해 Yandex Disk와 Google Drive 간 파일을 마이그레이션하고 동기화하세요—Yandex 네이티브 로그인, Google용 OAuth, 드래그 앤 드롭, Compare, Sync, 예약된 Jobs까지 지원합니다."
keywords:
  - rcloneview
  - yandex disk
  - google drive
  - cloud migration
  - cloud sync
  - rclone
  - cloud transfer
  - multi cloud
  - cloud to cloud transfer
tags:
  - RcloneView
  - cloud
  - sync
  - cloud-migration
  - tutorial
  - yandex
  - google-drive
  - cloud-to-cloud
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# RcloneView로 Yandex Disk와 Google Drive 간 파일 전송하기

> 명령줄을 사용하지 않고 Yandex Disk ↔ Google Drive 간에 파일을 이동하거나 동기화하세요.  
> RcloneView는 나란히 배치된 Explorer 창, Compare, Sync, 예약된 Jobs를 제공하며, Yandex 브라우저 로그인과 Google OAuth를 대신 처리해줍니다.

<!-- truncate -->


<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />


## Yandex ↔ Google Drive 전송에 RcloneView를 사용하는 이유

- **브라우저를 통한 네이티브 Yandex 로그인** (WebDAV나 수동 토큰 불필요).
- Google Drive를 위한 **안전한 OAuth** 로그인.
- 직관적인 드래그 앤 드롭을 위한 **나란히 배치된 Explorer 창**.
- 복사나 삭제 전에 차이점을 미리 볼 수 있는 **Compare** 모드.
- dry-run, 필터, 체크섬을 지원하는 **Sync**.
- 반복되는 백업과 자동화를 위한 **재사용 가능한 Jobs 및 예약 기능**.
- 로그, 재시도, 대역폭 제어를 통한 **완전한 진행 상황 가시성**.

RcloneView는 rclone 위에 시각적 워크플로를 구축하여 복잡한 멀티 클라우드 전송도 손쉽게 처리할 수 있게 합니다.

---

## 시작하기 전에

- **Yandex 계정**에 로그인할 수 있는지 확인하세요—설정은 WebDAV가 아닌 브라우저 로그인을 사용합니다.
- **Google Drive** 용량을 확인하고, Google의 일일 750GB 업로드 제한을 참고하세요.
- 아래에서 최신 RcloneView 빌드를 설치하세요:  
  👉 https://rcloneview.com/src/download.html
- 대용량 작업의 경우 컴퓨터가 절전 모드에 들어가지 않도록 하고 안정적인 네트워크를 사용하는 것이 좋습니다.

---

## 1단계: 클라우드 리모트 추가하기

<img src="/support/images/en/blog/new-remote.png" alt="Open multiple cloud remotes in RcloneView" class="img-large img-center" />  

### Yandex Disk 연결하기 (브라우저 기반 로그인)

1. **Remote → + New Remote**를 엽니다.
2. 프로바이더로 **Yandex Disk**를 선택합니다.
3. **Connect**를 클릭하면 브라우저에서 Yandex 로그인 페이지가 열립니다.
4. 로그인하고 접근 권한을 부여합니다.
5. RcloneView가 인증 완료를 확인하면 리모트를 저장합니다.  

### Google Drive 연결하기

1. 다시 **+ New Remote**를 클릭합니다.
2. **Google Drive**를 선택합니다.
3. **Connect**를 눌러 브라우저에서 OAuth 로그인을 완료하고 권한을 허용합니다.
4. 리모트를 저장합니다.

👉 가이드: [Google Drive 리모트 추가](/howto/#step-2-adding-remote-storage-google-drive-example)

---

## 2단계: Explorer 창에서 두 클라우드 열기

1. **Browse** 탭으로 이동합니다.
2. 왼쪽 창의 **+** 아이콘을 클릭 → **Yandex Disk**를 선택합니다.
3. 오른쪽 창의 **+** 아이콘을 클릭 → **Google Drive**를 선택합니다.
4. 이동하거나 동기화하려는 폴더로 이동합니다.  

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="cloud to cloud transfer default" class="img-large img-center" />  

---

## 파일을 전송하는 네 가지 방법

### 방법 1: Explorer 창 간 드래그 앤 드롭

1. Yandex 창에서 파일이나 폴더를 선택합니다.
2. Google Drive 창으로 드래그합니다 (또는 반대 방향).
3. **Transfer** 아래에서 진행 상황을 확인합니다.  

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="drag and drop" class="img-large img-center" />  


👉 참고 자료:  
[리모트 스토리지 탐색 및 관리](/howto/rcloneview-basic/browse-and-manage-remote-storage)  
[드래그 앤 드롭으로 파일 복사](https://rcloneview.com/support/howto/rcloneview-basic/browse-and-manage-remote-storage#copying-files-using-drag-and-drop)  

---

### 방법 2: Compare 후 복사하거나 삭제하기

1. Yandex Disk(왼쪽)에서 소스 폴더를, Google Drive(오른쪽)에서 대상 폴더를 엽니다.
2. **Compare**를 선택합니다.
3. RcloneView가 다음을 강조 표시합니다:
   - 한쪽에만 존재하는 항목
   - 크기가 다른 항목
   - 일치하는 파일
4. 방향에 따라 **Copy →** 또는 **← Copy**를 클릭합니다.
5. 중복 항목을 정리할 때는 **Delete**를 신중하게 사용하세요.  

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare shared folder and My Drive contents" class="img-large img-center" />  


👉 가이드: [폴더 내용 비교](/howto/rcloneview-basic/compare-folder-contents)  


---

### 방법 3: Sync 하거나 Job으로 저장하기

1. **Yandex 폴더**를 소스로, **Google Drive 폴더**를 대상으로 선택합니다.
2. **Sync**를 클릭합니다.
3. 다음 중 선택합니다:
   - 단방향 동기화 (Yandex → Google Drive)
   - 단방향 동기화 (Google Drive → Yandex)
   - 양방향 동기화
4. dry-run을 사용해 예정된 작업을 미리 확인합니다.
5. 동기화를 실행하거나, 나중에 다시 사용하려면 **Save to Jobs**를 클릭합니다.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running an encrypted sync job in RcloneView" class="img-large img-center" />  


👉 더 알아보기:

- [리모트 스토리지 동기화](/howto/rcloneview-basic/synchronize-remote-storages)
- [동기화 Job 생성](/howto/rcloneview-basic/create-sync-jobs)
- [Job 실행 및 관리](/howto/rcloneview-basic/execute-manage-job)

---

### 방법 4: 반복 동기화 Job 예약하기

1. **Job Manager → Add Job**을 엽니다.
2. Yandex를 소스로, Google Drive를 대상으로 선택합니다 (또는 반대).
3. 간격을 설정합니다 (예: 매일, 매시간, 매주).
4. Job을 활성화합니다.
5. 결과를 확인하려면 로그와 Job History를 검토합니다.  

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="create job schedule" class="img-large img-center" />  

👉 더 알아보기: [Job 예약 및 실행](/howto/rcloneview-advanced/job-scheduling-and-execution)

---

## 원활한 전송을 위한 팁

- 대규모 단방향 동기화 전에는 **dry-run**을 사용하세요.
- Google Drive API는 매우 큰 버스트 트래픽을 제한할 수 있으므로, 필요하면 동시성을 줄이세요.
- 예약된 Jobs를 위해 RcloneView를 계속 실행 상태로 유지하세요.

---

## 요약

RcloneView를 사용하면 **Yandex Disk**와 **Google Drive** 간 파일 전송이 간단하고 안정적으로 이루어집니다.  
두 서비스 모두를 위한 네이티브 로그인, 시각적 Explorer 창, Compare, Sync, Jobs를 통해 명령줄을 사용하지 않고도 멀티 클라우드 워크플로를 마이그레이션하거나 유지할 수 있습니다.

<CloudSupportGrid />
