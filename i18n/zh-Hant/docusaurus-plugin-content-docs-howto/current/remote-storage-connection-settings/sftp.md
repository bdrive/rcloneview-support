---
sidebar_position: 5
description: 了解如何在 RcloneView 中新增 SFTP 遠端
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

## 如何使用 RcloneView 新增 SFTP

### 步驟 1：開啟新增遠端設定視窗

- 從上方選單的 **`Remote`** 下方點擊 **`+ New Remote`**。
- 或者，點擊 Explorer 面板中的 **`+`** 按鈕並選擇 **`New Remote`** 以開始設定遠端。

<div class="img-grid-2">
<img src="/support/images/en/howto/remote-storage-connection-settings/add-new-remote.png" alt="add new remote" class="img-medium img-center" />
<img src="/support/images/en/howto/remote-storage-connection-settings/add-new-remote-explorer.png" alt="add new remote explorer" class="img-medium img-center" />
</div>

### 步驟 2：新增 SFTP 遠端

#### 在 **`Provider`** 分頁中：
1. 在搜尋欄中輸入 **`sftp`**。  
2. 從清單中選擇 **`sftp (SSH/SFTP)`**。  

<div class="img-grid-2">
<img src="/support/images/en/howto/remote-storage-connection-settings/add-sftp-remote-provider.png" alt="add sftp remote provider" class="img-medium img-center" />
<img src="/support/images/en/howto/remote-storage-connection-settings/add-sftp-remote-options.png" alt="add sftp remote options" class="img-medium img-center" />
</div>
#### 在 **`Options`** 分頁中：
3. 輸入 **host**（例如 `myserver.example.com` 或 `192.168.1.100`）  
4. 輸入 **username**  
5. 輸入 **port number**（預設為 `22`）  
6. 輸入 **password**  


#### 在 **`Name`** 分頁中：
7. 輸入 **遠端名稱**（例如 `MySFTPServer`）  

<div class="img-grid-2">
<img src="/support/images/en/howto/remote-storage-connection-settings/add-sftp-remote-name.png" alt="add sftp remote name" class="img-medium img-center" />
<img src="/support/images/en/howto/remote-storage-connection-settings/add-sftp-remote-save.png" alt="add sftp remote save" class="img-medium img-center" />
</div>

#### 在 **`Save`** 分頁中：
8. 點擊 **`Save`** 完成設定。

### 步驟 3：在 RcloneView 中驗證已新增的 SFTP 遠端

1. 前往 **`Remote > Remote Manager`**
2. 確認新增的 **SFTP 遠端** 已出現在清單中。

✅ **完成！** 您的 SFTP 遠端現已成功設定，可在 RcloneView 中使用。

