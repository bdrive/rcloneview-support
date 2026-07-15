---
sidebar_position: 5
description: RcloneView에서 SFTP 리모트를 추가하는 방법을 알아보세요
keywords:
  - rcloneview
  - SFTP
  - remote storage
  - SSH
  - Remote Connection
  - rclone
tags:
  - sftp
  - Remote-Storage
  - ssh
  - remote-connection
date: 2025-06-23
author: Jay
---
# SFTP

## RcloneView로 SFTP 추가하는 방법

### 1단계: 새 리모트 설정 창 열기

- 상단 메뉴의 **`Remote`** 아래에서 **`+ New Remote`**를 클릭합니다.
- 또는 탐색기 패널의 **`+`** 버튼을 클릭하고 **`New Remote`**를 선택하여 리모트 설정을 시작합니다.

<div class="img-grid-2">
<img src="/support/images/en/howto/remote-storage-connection-settings/add-new-remote.png" alt="add new remote" class="img-medium img-center" />
<img src="/support/images/en/howto/remote-storage-connection-settings/add-new-remote-explorer.png" alt="add new remote explorer" class="img-medium img-center" />
</div>

### 2단계: SFTP 리모트 추가하기

#### **`Provider`** 탭에서:
1. 검색창에 **`sftp`**를 입력합니다.  
2. 목록에서 **`sftp (SSH/SFTP)`**를 선택합니다.  

<div class="img-grid-2">
<img src="/support/images/en/howto/remote-storage-connection-settings/add-sftp-remote-provider.png" alt="add sftp remote provider" class="img-medium img-center" />
<img src="/support/images/en/howto/remote-storage-connection-settings/add-sftp-remote-options.png" alt="add sftp remote options" class="img-medium img-center" />
</div>
#### **`Options`** 탭에서:
3. **호스트**를 입력합니다 (예: `myserver.example.com` 또는 `192.168.1.100`)  
4. **사용자 이름**을 입력합니다  
5. **포트 번호**를 입력합니다 (기본값은 `22`)  
6. **비밀번호**를 입력합니다  


#### **`Name`** 탭에서:
7. **리모트 이름**을 입력합니다 (예: `MySFTPServer`)  

<div class="img-grid-2">
<img src="/support/images/en/howto/remote-storage-connection-settings/add-sftp-remote-name.png" alt="add sftp remote name" class="img-medium img-center" />
<img src="/support/images/en/howto/remote-storage-connection-settings/add-sftp-remote-save.png" alt="add sftp remote save" class="img-medium img-center" />
</div>

#### **`Save`** 탭에서:
8. **`Save`**를 클릭하여 설정을 완료합니다.

### 3단계: RcloneView에서 추가된 SFTP 리모트 확인하기

1. **`Remote > Remote Manager`**로 이동합니다
2. 새로 추가한 **SFTP 리모트**가 목록에 표시되는지 확인합니다.

✅ **완료!** 이제 SFTP 리모트가 성공적으로 설정되어 RcloneView에서 사용할 준비가 되었습니다.

