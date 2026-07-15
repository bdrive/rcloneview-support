---
sidebar_position: 3
description: RcloneView의 드래그 앤 드롭 인터페이스와 우클릭 메뉴를 사용하여 로컬 및 클라우드 스토리지 간에 파일을 탐색, 복사, 관리하는 방법을 알아보세요.
keywords:
  - rcloneview
  - file management
  - copy files
  - move files
  - drag and drop
  - cloud file transfer
  - cloud storage
  - file explorer
  - cloud to cloud transfer
  - remote browser
  - upload
  - download
  - purge
  - delete
tags:
  - howto
  - file-management
  - cloud-storage
  - drag-and-drop
  - cloud-file-transfer
  - file-explorer
date: 2025-05-27
author: Jay
---
# RcloneView를 이용한 파일 관리  

RcloneView를 사용하면 익숙한 탐색기 스타일의 인터페이스로 로컬 디스크와 여러 클라우드 스토리지 서비스 간에 파일을 손쉽게 탐색, 전송, 정리할 수 있습니다.   

이 가이드에서는 다음 내용을 다룹니다:   

- 리모트 스토리지 탐색
- 드래그 앤 드롭으로 파일 복사
- 우클릭 메뉴로 파일 관리
 
## 리모트 스토리지 탐색

연결된 클라우드 리모트를 로컬 폴더처럼 열어서 볼 수 있습니다.

### 리모트를 탐색하는 방법:

1. **탐색기 창(Explorer pane)**에서 **`+`** 탭을 클릭합니다.
2. 열고자 하는 리모트 스토리지를 선택합니다.
3. 선택한 리모트가 새 탭에서 열리며, 바로 파일 작업을 할 수 있습니다.

<div class="img-grid-2">
<img src="/support/images/en/howto/rcloneview-basic/file-explorer-open-remote.png" alt="file explorer open remote" class="img-medium img-center" />
<img src="/support/images/en/howto/rcloneview-basic/file-explorer-remote-open-complete.png" alt="file explorer remote open complete" class="img-medium img-center" />
</div>

:::tip 보기 레이아웃
**`Settings > Layout`**으로 이동하여 세로 보기와 가로 보기를 전환할 수 있습니다 
<img src="/support/images/en/howto/rcloneview-basic/explorer-view-layout.png" alt="explorer view layout" class="img-small img-left" />
:::

## 드래그 앤 드롭으로 파일 복사하기

간단한 드래그 앤 드롭으로 로컬과 클라우드 스토리지 간에 파일을 전송할 수 있습니다.
#### 두 리모트 간 복사

RcloneView에서 한 리모트 탭에서 다른 탭으로 파일을 드래그하면 클라우드 스토리지 간에 파일을 복사할 수 있습니다.
<video src="/support/videos/en/howto/rcloneview-basic/rclonview-explorer-drag-and-drop.mp4" class="video-medium video-center" controls muted loop playsinline>
  rclonview explorer drag and drop
</video>

**👉  다중 선택 및 일괄 작업**
여러 파일을 한 번에 선택하여 일괄 작업을 수행할 수 있습니다.
- **`Ctrl + Click`**으로 개별 파일 여러 개를 선택합니다.
- **`Shift + Click`**으로 연속된 범위의 파일을 선택합니다.

**👉  드래그 앤 드롭 동작 방식 **
- **같은 리모트** = 이동 작업  
- **다른 리모트** = 복사 작업


:::tip 힌트
- 복사 시 확인 팝업이 표시되지 않길 원한다면 **Confirm drag and drop** 체크박스를 해제하세요.
- 나중에 팝업을 다시 활성화하려면 **Settings > General settings > Confirm drag and drop**으로 이동하여 다시 체크하세요.
:::

#### Windows 탐색기에서 RcloneView 리모트로 복사하기
- **Windows 파일 탐색기**에서 파일을 직접 RcloneView 탭으로 드래그하여 클라우드 스토리지에 업로드할 수도 있습니다.
<video src="/support/videos/en/howto/rcloneview-basic/windows-explorer-drag-and-drop.mp4" class="video-medium video-center" controls muted loop playsinline>
  windows explorer drag and drop
</video>
### 우클릭 메뉴로 파일 관리하기

RcloneView는 편리한 우클릭 메뉴를 통해 다양한 파일 작업을 지원합니다.

### 사용 가능한 작업:

- <img src="/support/icons/download-icon.png" alt="download icon" class="inline-icon" />**다운로드** – 파일을 로컬 디스크에 저장  
- <img src="/support/icons/upload-icon.png" alt="upload icon" class="inline-icon" />**업로드** – 로컬 파일을 클라우드 리모트로 전송  
- <img src="/support/icons/copy icon.png" alt="copy icon" class="inline-icon" />**복사 / <img src="/support/icons/paste-icon.png" alt="paste icon" class="inline-icon" />붙여넣기** – 폴더 또는 리모트 간에 파일 복사  
- <img src="/support/icons/cut-icon.png" alt="cut icon" class="inline-icon" />**잘라내기 / <img src="/support/icons/paste-icon.png" alt="paste icon" class="inline-icon" />붙여넣기** – 파일을 다른 위치로 이동  
- <img src="/support/icons/delete-icon.png" alt="delete icon" class="inline-icon" />**삭제** – 파일 또는 폴더 제거  
- <img src="/support/icons/rename-icon.png" alt="rename icon" class="inline-icon" />**이름 바꾸기** – 파일 또는 폴더 이름 변경  
- <img src="/support/icons/new-folder-icon.png" alt="new folder icon" class="inline-icon" />**새 폴더** – 새 폴더 생성  
- <img src="/support/icons/refresh-icon.png" alt="refresh icon" class="inline-icon" />**새로 고침** – 폴더 내용 새로 고침




