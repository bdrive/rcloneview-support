---
sidebar_position: 4
description: 了解如何在 RcloneView 中設定 WebDAV 作為遠端儲存,以進行檔案同步與存取。
keywords:
  - rcloneview
  - webdav
  - remote storage
  - cloud storage
  - sync
  - webdav configuration
  - rclone
tags:
  - webdav
  - Remote-Storage
  - remote-connection
date: 2025-06-20
author: Jay
---
# WebDAV

## 如何使用 RcloneView 新增 WebDAV

### 步驟 1：開啟新增遠端設定視窗

- 從頂部選單的 **`Remote`** 下點擊 **`+ New Remote`**。
- 或者,在檔案總管窗格中點擊 **`+`** 按鈕並選擇 **`New Remote`** 以開始遠端設定。

<div class="img-grid-2">
<img src="/support/images/en/howto/remote-storage-connection-settings/add-new-remote.png" alt="add new remote" class="img-medium img-center" />
<img src="/support/images/en/howto/remote-storage-connection-settings/add-new-remote-explorer.png" alt="add new remote explorer" class="img-medium img-center" />
</div>

### 步驟 2：新增 WebDAV 遠端

#### 在 **`Provider`** 分頁中：
1. 搜尋 **`webdav`**。
2. 從清單中選擇 **`WebDAV`**。

<div class="img-grid-2">
<img src="/support/images/en/howto/remote-storage-connection-settings/add-webdav-remote-provider.png" alt="add webdav remote provider" class="img-medium img-center" />
<img src="/support/images/en/howto/remote-storage-connection-settings/add-webdav-remote-options.png" alt="add webdav remote options" class="img-medium img-center" />
</div>

#### 在 **`Options`** 分頁中：
3. 輸入遠端 URL
4. 輸入您的登入使用者名稱
5. 輸入您的密碼

<details>
<summary>選項詳細資訊</summary>

選項詳細資訊

| 欄位          | 說明                                                                                                                                                                                                                |
| -------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `url`          | 遠端 WebDAV URL(例如：https://webdav.example.com/) 您也可以指定自訂連接埠號碼(例如：https://webdav.example.com:5020)                                                                          |
| `vendor`       | (選填)留空或填入相容於 WebDAV 的服務供應商(例如：fastmail、nextcloud、owncloud、sharepoint、sharepoint-ntlm、rclone) 完整清單請參閱：[WebDAV Provider Notes](https://rclone.org/webdav/#provider-notes) |
| `user`         | 您的登入使用者名稱                                                                                                                                                                                                     |
| `pass`         | 您的登入密碼(已遮蔽)                                                                                                                                                                                               |
| `bearer_token` | (選填)通常留空                                                                                                                                                                                              |



</details>
#### 在 **`Name`** 分頁中：
6. 為此遠端輸入一個獨特且可識別的名稱(例如：`myWebDAV`)。

<div class="img-grid-2">
<img src="/support/images/en/howto/remote-storage-connection-settings/add-webdav-remote-name.png" alt="add webdav remote name" class="img-medium img-center" />
<img src="/support/images/en/howto/remote-storage-connection-settings/add-webdav-remote-save.png" alt="add webdav remote save" class="img-medium img-center" />
</div>
#### 在 **`Save`** 分頁中：
5. 點擊 **`Save`** 以完成遠端設定。

### 步驟 3：在 RcloneView 中確認已新增的 WebDAV 遠端

1. 從頂部選單中,點擊 **`Remote`** 分頁下的 **`Remote Manager`**。
2. 確認您的 **WebDAV 遠端** 出現在 **Remote Manager** 視窗中。

✅ **完成！** 您的 WebDAV 遠端現已成功設定,可在 RcloneView 中使用。

