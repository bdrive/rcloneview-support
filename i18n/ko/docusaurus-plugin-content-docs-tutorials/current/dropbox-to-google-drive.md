---
sidebar_position: 4
description: RcloneView의 직관적인 GUI를 사용하여 터미널이나 스크립트 작성 없이 Dropbox와 Google Drive 간에 파일을 쉽게 전송하거나 동기화하는 방법을 알아보세요.
keywords:
  - rcloneview
  - Dropbox
  - google drive
  - cloud to cloud transfer
  - cloud transfer
  - file synchronization
  - cloud storage
  - Cloud Migration
  - cloud sync
  - cloud file transfer
  - rclone
tags:
  - RcloneView
  - dropbox
  - google-drive
  - cloud-file-transfer
  - cloud-migration
  - Tutorial
  - Sync
  - cloud-to-cloud
date: 2025-07-01
author: Jay
---
import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';

# Dropbox에서 Google Drive로 전송 가이드

오늘날의 디지털 업무 환경에서는 개인 용도, 협업, 또는 여러 플랫폼 간 동기화를 위해 여러 클라우드 스토리지 서비스를 함께 사용하는 경우가 흔합니다.

**Dropbox**는 특히 팀 사이에서 간결함과 빠른 파일 동기화로 잘 알려져 있으며, **Google Drive**는 Google Workspace(Docs, Sheets, Gmail 등)와의 긴밀한 통합과 넉넉한 무료 저장 공간을 제공합니다. 사용자가 한 서비스의 용량을 초과하거나 편의성 또는 협업을 위해 파일을 한곳에 모으고자 할 때, 클라우드 플랫폼 간 데이터 전송이 필수적입니다.

파일을 수동으로 다운로드했다가 다시 업로드하는 방식은 시간이 오래 걸리고 실수가 발생하기 쉽습니다. 바로 이때 **RcloneView**가 필요합니다.

**RcloneView**는 [Rclone](https://rclone.org)의 그래픽 인터페이스로, 명령줄 도구 없이도 클라우드 간 파일 전송을 간편하게 만들어 줍니다. RcloneView를 사용하면 다음을 할 수 있습니다:

- 듀얼 패널 인터페이스에서 Dropbox와 Google Drive 연결 및 탐색
- 드래그 앤 드롭 또는 동기화 작업으로 파일 전송
- 이동 전에 폴더 차이점 미리보기
- 예약된 작업을 통한 반복 전송 자동화

서비스를 전환하든, 중요한 데이터를 백업하든, 계정 간 파일을 동기화하든 상관없이 **RcloneView는 Dropbox에서 Google Drive로의 전송을 쉽고 안정적으로 만들어 줍니다**—코드 한 줄 작성할 필요 없이 말이죠.

  <img src="/support/images/en/tutorials/dropbox-to-google-drive-transfer.png" alt="dropbox to google drive transfer" class="img-medium img-center" />
## **왜 클라우드 간 전송에 RcloneView를 사용해야 할까요?**

RcloneView는 Rclone CLI를 기반으로 만들어진 사용하기 쉬운 그래픽 도구입니다. 간단한 인터페이스로 강력한 기능을 제공합니다:

- Dropbox와 Google Drive를 위한 OAuth 기반 보안 로그인
- 손쉬운 파일 탐색을 위한 듀얼 패널 탐색기
- 리모트 간 드래그 앤 드롭 전송
- 복사 전 폴더 비교
- 동기화 작업 생성 및 예약

대량의 데이터를 동기화하든 몇 개의 폴더만 이전하든, RcloneView를 사용하면 몇 분 안에 작업을 완료할 수 있습니다.

## 📙 Dropbox에서 Google Drive로 파일 전송하기

### RcloneView에 Dropbox와 Google Drive 리모트 추가하기

1. **RcloneView**를 실행하고 `Remote` 메뉴에서 **`+ New Remote`**를 클릭합니다.
2. **`Provider`** 탭에서 **Dropbox**를 검색하여 선택합니다.
3. OAuth 로그인을 진행합니다.
4. 동일한 단계를 반복하여 **Google Drive**를 추가합니다.

👉 자세한 설정 방법은 다음을 참고하세요:
- [Dropbox 리모트 추가 방법](/howto/remote-storage-connection-settings/add-oath-online-login#quick-setup-guide)
- [Google Drive 리모트 추가 방법](/howto/#step-2-adding-remote-storage-google-drive-example)

:::important Dropbox Business 연결하기
**Dropbox Business**를 사용하는 경우, 리모트를 추가할 때 반드시 비즈니스 모드를 활성화해야 합니다.

**`Options`** 탭에서 맨 아래로 스크롤하여 **`Advanced Options`**를 클릭한 다음, dropbox_business` 필드를 찾아 `true`로 설정하세요.

:::
### 탐색기 패널에서 두 리모트 열기

1. **Browse** 탭으로 이동합니다(시작 시 기본 화면).
2. 왼쪽 패널에서 `+`를 클릭하고 **Dropbox** 리모트를 선택합니다.
3. 오른쪽 패널에서 `+`를 클릭하고 **Google Drive** 리모트를 선택합니다.
4. 이제 두 스토리지를 나란히 보고 조작할 수 있습니다.

<img src="/support/images/en/tutorials/open-dropbox-and-google-drive.png" alt="open dropbox and google drive" class="img-medium img-center" />
## 🔄 전송 방법

### 🖱️ **방법 1: 드래그 앤 드롭**

- Dropbox 패널에서 Google Drive 패널로 파일/폴더를 그냥 드래그하세요.
- RcloneView가 즉시 전송을 시작합니다.
- **`Transfer`** 로그 탭에서 진행 상황을 확인하세요.

👉 더 알아보기: [리모트 스토리지 탐색 및 관리](/howto/rcloneview-basic/browse-and-manage-remote-storage)

### 🔍 방법 2: 폴더 내용 비교 후 복사 또는 삭제

1. 양쪽 탐색기 패널에서 비교하려는 소스(예: Dropbox)와 대상(예: Google Drive) 폴더를 선택합니다.
2. `Home` 메뉴에서 **`Compare`** 버튼을 클릭하여 폴더 비교를 시작합니다.
3. RcloneView가 폴더 간 차이점을 강조 표시합니다:
       - 한쪽에만 존재하는 파일
       - 이름은 같지만 크기가 다른 파일
       - 동일한 파일
4. 결과를 시각적으로 확인한 다음, 작업할 파일을 선택합니다.
5. **Copy →**를 클릭하면 왼쪽에서 오른쪽으로, **← Copy**를 클릭하면 반대 방향으로 복사합니다.
       **Delete**를 사용하면 어느 쪽에서든 선택한 파일을 제거할 수 있습니다.
6. 전송 진행 상황과 결과는 상태 표시줄과 로그 탭에 나타납니다.

  이 방법을 사용하면 복사하거나 삭제할 항목을 신중하게 비교하고 제어할 수 있어 오류를 최소화하고 정확한 전송을 보장합니다.

  👉 더 알아보기: [폴더 내용 비교하기](/howto/rcloneview-basic/compare-folder-contents)

### 🔁  방법 3: 동기화 또는 작업 생성

1. 탐색기 패널에서 **Dropbox** 폴더(소스)와 **Google Drive** 폴더(대상)를 선택합니다.
2. **`Home`** 메뉴에서 **`Sync`** 버튼을 클릭하여 동기화 대화 상자를 엽니다.
3. 원하는 동기화 방향과 옵션을 선택한 다음 작업을 시작합니다.
4. 반복되거나 저장이 필요한 작업의 경우, 동기화 창에서 **Save as Job**을 클릭하거나,
       **`Home`** 메뉴에서 **`Job Manager` → `Add Job`**으로 이동하여 예약 작업을 생성하세요.

👉 더 알아보기:
- [리모트 스토리지 동기화하기](/howto/rcloneview-basic/synchronize-remote-storages)
- [동기화 작업 생성하기](/howto/rcloneview-basic/create-sync-jobs)
- [작업 실행 및 관리하기](/howto/rcloneview-basic/execute-manage-job)

### **⏰** 방법 4: 자동 동기화 작업 예약하기

1. 탐색기 패널에서 자동으로 동기화할 **Dropbox** 소스 폴더와 **Google Drive** 대상 폴더를 선택합니다.
2. **`Home`** 또는 **`Remote`** 메뉴에서 **`Job Manager`**를 열고 **`Add Job`**을 클릭합니다.
3. 소스 및 대상 폴더가 올바른지 확인합니다. 필요하면 다시 선택하거나 수정할 수 있습니다.
4. **Schedule Editor**를 사용하여 동기화를 실행할 시점과 주기를 정의합니다(예: 매일 자정).
       RcloneView에는 저장하기 전에 예약 패턴을 시뮬레이션하고 확인할 수 있는 내장 **미리보기 도구**가 포함되어 있습니다.
5. 예약된 작업을 저장하고 활성화합니다.

작업이 생성되면 **사용자 개입 없이** 설정한 일정에 따라 **자동으로** 실행됩니다.

모든 진행 상황과 결과는 **`Job History`** 탭에서 확인할 수 있으며, 작업이 완료되면 시스템 알림으로 안내받습니다.

👉 더 알아보기: [작업 예약 및 실행](/howto/rcloneview-advanced/job-scheduling-and-execution)

---

## ✅ 마무리

RcloneView를 사용하면 클라우드 간 전송이 매끄럽고 효율적으로 이루어집니다. 백업을 한곳에 모으든, 여러 플랫폼에서 팀 간 동기화를 하든, RcloneView는 터미널 명령 없이도 더 빠르게 작업할 수 있도록 도와줍니다.

지금 바로 사용해 보고 Dropbox ↔ Google Drive 파일 워크플로우를 간소화하세요.

---

## 🔗 관련 가이드

- [Dropbox 리모트 추가 방법](/howto/remote-storage-connection-settings/add-oath-online-login#quick-setup-guide)
- [Google Drive 리모트 추가 방법](/howto/#step-2-adding-remote-storage-google-drive-example)
- [리모트 스토리지 탐색 및 관리](/howto/rcloneview-basic/browse-and-manage-remote-storage)
- [폴더 내용 비교하기](/howto/rcloneview-basic/compare-folder-contents)
- [리모트 스토리지 동기화하기](/howto/rcloneview-basic/synchronize-remote-storages)
- [동기화 작업 생성하기](/howto/rcloneview-basic/create-sync-jobs)
- [작업 예약 및 실행](/howto/rcloneview-advanced/job-scheduling-and-execution)

<CloudSupportGrid />
