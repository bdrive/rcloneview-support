---
sidebar_position: 2
description: RcloneView를 사용하여 Google Drive, Dropbox, WebDAV, S3 등을 포함한 클라우드 및 로컬 리모트를 추가, 편집, 삭제하는 방법을 알아보세요.
keywords:
  - rcloneview
  - remote storage management
  - add remote
  - remote manager
  - cloud sync
  - cloud storage
  - open remote
  - delete remote
  - google drive
  - Dropbox
  - s3 compatible
  - aws s3
  - webdav
  - SFTP
  - Onedrive
  - icloud
  - mega
tags:
  - RcloneView
  - Remote-Storage
  - Remote-manager
  - Remote-storage-managent
  - remote-connection
  - remote-control
  - cloud-storage
date: 2025-06-20
author: Jay
---
# RcloneView에서 리모트 스토리지 추가 및 관리하기

RcloneView를 사용하면 클라우드 및 로컬 스토리지 서비스를 모두 연결하고 관리할 수 있습니다.  
이 가이드에서는 RcloneView를 사용하여 리모트 스토리지를 **추가**, **편집**, **삭제**하는 방법을 설명합니다.

## 새 리모트 추가

먼저 **New Remote** 대화상자를 열고 설정을 완료하여 새 리모트 스토리지를 추가할 수 있습니다.

### **New Remote** 대화상자 열기

다음 방법 중 하나를 사용하여 **`New Remote`** 설정 대화상자를 열 수 있습니다.

<div class="img-grid-3">
<img src="/support/images/en/howto/rcloneview-basic/create-remote-top-remote-menu.png" alt="create remote top remote menu" class="img-medium img-center" />
<img src="/support/images/en/howto/rcloneview-basic/create-remote-by-plus-button.png" alt="create remote by plus button" class="img-medium img-center" />
<img src="/support/images/en/howto/rcloneview-basic/create-remote-by-remote-manager.png" alt="create remote by remote manager" class="img-medium img-center" />
</div>

#### 방법 1: 상단 Remote 메뉴 사용

상단 Remote 탭에서 **`+ New Remote`**를 클릭합니다.

#### 방법 2: 탐색기 창의 `+` 버튼 사용

파일 탐색기 창(왼쪽 또는 오른쪽)에서 **`+`** 아이콘을 클릭한 다음 **New Remote**를 선택합니다.

#### 방법 3: Remote Manager 사용

**`Remote`** 탭에서 **`Remote Manager`** 버튼을 클릭한 다음, 빈 리모트 카드에서 **`+`** 버튼을 클릭합니다.


### 새 리모트 설정

**New Remote** 대화상자가 열리면 리모트 유형(예: Google Drive, Dropbox, S3)을 선택하고 필요한 설정을 입력합니다.  

필드는 선택한 제공업체에 따라 달라집니다.

제공업체별 상세 설정 방법은 [**리모트 스토리지 연결 설정**](/howto/category/remote-storage-connection-settings) 문서를 참고하세요.  

## RcloneView에서 기존 리모트 관리하기

RcloneView에 리모트를 추가한 후에는 열기, 편집, 삭제 등 다양한 방법으로 리모트를 관리할 수 있습니다. 아래는 각 작업을 수행하는 방법을 설명하는 가이드입니다.

### 탐색기 창에서 리모트 열기

리모트의 폴더 보기를 열어 로컬과 클라우드 간에 파일을 탐색하거나 전송할 수 있습니다.

<div class="img-grid-3">
<img src="/support/images/en/howto/rcloneview-basic/open-remote-by-remote-card.png" alt="open remote by remote card" class="img-medium img-center" />
<img src="/support/images/en/howto/rcloneview-basic/open-remote-by-plus-button.png" alt="open remote by plus button" class="img-medium img-center" />
<img src="/support/images/en/howto/rcloneview-basic/open-remote-by-remote-manager.png" alt="open remote by remote manager" class="img-medium img-center" />
</div>

#### 방법 1: 리모트 카드의 `Open` 버튼 클릭

오른쪽 창에 있는 리모트 카드에서 **`Open`** 버튼을 클릭합니다.

#### 방법 2: 탐색기 창의 `+` 버튼을 사용하여 리모트 열기

왼쪽 또는 오른쪽 **탐색기 창**에 있는 **`+`** 버튼을 클릭하면 현재 구성된 모든 리모트 목록이 표시됩니다.

1. 리모트를 열고자 하는 탐색기 창에서 `+` 아이콘을 클릭합니다.
2. 사용 가능한 모든 리모트가 표시된 드롭다운 목록이 나타납니다.
3. 목록에서 원하는 리모트(예: `MyWebDAV`)를 선택합니다.
4. 선택한 리모트가 클릭한 창에서 열립니다. 해당 창에 이미 다른 리모트가 열려 있는 경우, 선택한 리모트를 위한 **새 탭**이 추가됩니다.

:::note
**즐겨찾기(별칭)**로 표시된 리모트는 빠르게 접근할 수 있도록 목록 **맨 위**에 표시됩니다.
:::
#### 방법 3: Remote Manager의 `Open` 버튼 사용

1. 툴바에서 **Remote Manager** 버튼을 클릭합니다.
2. Remote Manager 대화상자에서 원하는 리모트를 찾습니다.
3. **`Open`**을 클릭하여 파일 탐색기 창에서 엽니다.

:::tip 시스템 트레이에서 빠르게 접근하기
시스템 트레이의 RcloneView 아이콘을 클릭하고 목록에서 리모트를 선택하면 빠르게 리모트를 열 수 있습니다.  
<img src="/support/images/en/howto/rcloneview-basic/open-remote-via-system-tray.png" alt="open remote via system tray" class="img-small img-left" />
:::

### 리모트 설정 편집

다음 방법 중 하나를 사용하여 기존 리모트의 설정을 수정할 수 있습니다.

<div class="img-grid-2">
<img src="/support/images/en/howto/rcloneview-basic/edit-remote-from-explorer-panel.png" alt="edit remote from explorer panel" class="img-medium img-center" />
<img src="/support/images/en/howto/rcloneview-basic/edit-remote-from-remote-manager.png" alt="edit remote from remote manager" class="img-medium img-center" />
</div>


#### 방법 1: 탐색기 창에서 편집  

**탐색기 창**에서 현재 리모트를 탐색 중이라면, 활성화된 리모트 창의 오른쪽 상단에 있는 **톱니바퀴 아이콘(⚙️)**을 클릭합니다.

그러면 **Edit Remote** 대화상자가 열리며, 선택한 리모트의 **Provider**와 **Options** 값을 업데이트할 수 있습니다.  

 ⚠️ **참고:** 여기에서는 리모트 이름을 변경할 수 없습니다.


#### 방법 2: Remote Manager에서 편집  

1. **Remote** 메뉴 아래 메인 툴바에서 **Remote Manager** 버튼을 클릭합니다.  
2. **Remote Manager** 창에서 편집하려는 리모트를 찾습니다.  
3. 리모트 카드에서 **Edit** 버튼을 클릭하여 **Edit Remote** 대화상자를 엽니다.

이 방법으로도 **Provider**와 **Options**를 변경할 수 있지만, **리모트 이름**은 고정된 채 유지됩니다.


### 리모트 삭제


더 이상 필요하지 않은 구성된 리모트가 있다면 **Remote Manager**를 사용하여 안전하게 삭제할 수 있습니다.

<img src="/support/images/en/howto/rcloneview-basic/delete-remote.png" alt="delete remote" class="img-medium img-center" />

1. 상단 메뉴의 **Remote** 탭에서 툴바의 **Remote Manager** 버튼을 클릭합니다.
2. **Remote Manager** 창에서 삭제하려는 리모트를 찾습니다.
3. 해당 리모트 카드에서 **`Delete`** 버튼을 클릭합니다.

이 작업을 수행하면 다음과 같이 처리됩니다:
- 구성에서 리모트가 영구적으로 제거됩니다.
- 현재 탐색기 창에서 해당 리모트가 열려 있는 경우 자동으로 닫힙니다.
