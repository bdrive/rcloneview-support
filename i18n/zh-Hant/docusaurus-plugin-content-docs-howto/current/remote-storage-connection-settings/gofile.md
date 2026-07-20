---
sidebar_position: 6
description: 了解如何在 RcloneView 中新增 Gofile 儲存空間。
keywords:
  - rcloneview
  - rclone
  - gofile
  - remote storage
  - cloud storage
  - Remote Connection
tags:
  - gofile
  - remote-connection
  - Remote-Storage
  - cloud-storage
date: 2025-05-27
author: Jay
---
# Gofile

## 如何使用 RcloneView 新增 Gofile（Windows）


### 步驟 1：開啟新增遠端設定視窗

- 從頂端選單的 **`Remote`** 下方點擊 **`+ New Remote`**。
- 或者，點擊「總管」窗格中的 **`+`** 按鈕並選擇 **`New Remote`** 以開始遠端設定。

<div class="img-grid-2">
<img src="/support/images/en/howto/remote-storage-connection-settings/add-new-remote.png" alt="add new remote" class="img-medium img-center" />
<img src="/support/images/en/howto/remote-storage-connection-settings/add-new-remote-explorer.png" alt="add new remote explorer" class="img-medium img-center" />
</div>
### 步驟 2：新增 Gofile 遠端

#### 在 **`Provider`** 分頁中：

1. 搜尋 **`gofile`**。
2. 從清單中選擇 **`Gofile`**。

#### 在 **`Options`** 分頁中：

3. 輸入您的 **Access Token**。

<div class="img-grid-2">
<img src="/support/images/en/howto/remote-storage-connection-settings/add-gofile-remote-provider.png" alt="add go file provider" class="img-medium img-center" />
<img src="/support/images/en/howto/remote-storage-connection-settings/add-gofile-remote-option.png" alt="add gofile remote option" class="img-medium img-center" />
</div>
:::info 如何取得 Access Token
 - 造訪 [https://gofile.io/myprofile](https://gofile.io/myprofile)
 - 登入您的 Gofile 帳號。
- 向下捲動找到 **`Account API Token`** 並複製它。
:::

#### 在 **`Name`** 分頁中：

4. 為此遠端指定一個 **`Remote name`**（例如：`myGofile`）。

#### 在 **`Save`** 分頁中：

5. 點擊 **`Save`** 以完成新增遠端。

<div class="img-grid-2">
<img src="/support/images/en/howto/remote-storage-connection-settings/add-gofile-remote-name.png" alt="add go file remote name" class="img-medium img-center" />
<img src="/support/images/en/howto/remote-storage-connection-settings/add-gofile-remote-save.png" alt="add gofile remote save" class="img-medium img-center" />
</div>


### 步驟 3：在 RcloneView 中確認已新增的 Gofile 遠端

啟動 **RcloneView**。

1. 從選單列中，點擊 **`Remote`** 分頁下的 **`Remote Manager`**。
2. 確認您的 **`Gofile`** 遠端已出現在 **`Remote Manager`** 視窗中。

<div class="img-grid-2">
<img src="/support/images/en/howto/Remote Storage Connection Settings/Connect using CLI/add-icloud-verify-step1.png" alt="verify aws s3 step1" class="img-medium img-center" />
<img src="/support/images/en/howto/remote-storage-connection-settings/add-gofile-remote-verify.png" alt="add go file remote verify" class="img-medium img-center" />
</div>


✅ **完成！** 您的 **`Gofile`** 遠端現已成功設定，並可在 **RcloneView** 中使用。


## 🔗 其他資源

- 🔐 取得您的權杖：[https://gofile.io/myprofile](https://gofile.io/myprofile)
