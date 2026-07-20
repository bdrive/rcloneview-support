---
sidebar_position: 8
description: "了解如何在 RcloneView 中新增 Backblaze B2 儲存空間。"
keywords:
  - rcloneview
  - rclone
  - backblaze
  - b2
  - remote storage
  - cloud storage
  - Remote Connection
tags:
  - backblaze
  - b2
  - remote-connection
  - Remote-Storage
  - cloud-storage
date: 2025-09-20
author: Jay
---

# Backblaze B2

## 如何使用 RcloneView 新增 Backblaze B2（Windows）

### 步驟 1：開啟遠端管理器

- 從頂部選單的 **`Remote`** 底下點擊 **`+ New Remote`**。
- 或者，點擊 Explorer 面板中的 **`+`** 按鈕，並選擇 **`New Remote`** 開始設定遠端。

<div class="img-grid-2">
<img src="/support/images/en/howto/remote-storage-connection-settings/add-new-remote.png" alt="add new remote" class="img-medium img-center" />
<img src="/support/images/en/howto/remote-storage-connection-settings/add-new-remote-explorer.png" alt="add new remote explorer" class="img-medium img-center" />
</div>

### 步驟 2：選擇 Backblaze B2 作為儲存供應商

1. 在 **Search Provider** 搜尋列中輸入 `b2`。
2. 點擊出現的 **Backblaze B2** 選項。

<img src="/support/images/en/howto/remote-storage-connection-settings/add-backblaze-b2-remote.png" alt="add backblaze b2 remote" class="img-medium img-center" />

接著您將會進入 Backblaze B2 的設定畫面。

### 步驟 3：設定您的 Backblaze B2 遠端

在設定表單中，提供以下必要資訊：

- **Remote name**：為您的遠端取一個易記的名稱（例如：`MyB2Master`）。
- **account**：您的 Backblaze **Application Key ID**。
- **key**：您的 Backblaze **Application Key**。

輸入完必要的值後，點擊 **`Add Remote`** 儲存此連線。
<img src="/support/images/en/howto/remote-storage-connection-settings/remote-configure-backblaze-b2.png" alt="remote configure backblaze b2" class="img-medium img-center" />

:::info 這些憑證要去哪裡取得？

- 登入您的 [Backblaze B2 account](https://secure.backblaze.com/b2_buckets.htm)。
- 前往 **App Keys**。
- 建立或複製現有的金鑰組：
  - 將 **Key ID** 用作 `account`
  - 將 **Application Key** 用作 `key`
:::


### 步驟 4：確認已新增的遠端

新增完成後，您的新 Backblaze B2 遠端（例如：`MyB2Master`）會出現在 **Remote Manager** 清單中。

您現在可以：
- 點擊 **`Open`** 瀏覽該遠端。
- 在複製/同步/掛載操作中使用它。
- 隨時管理或刪除它。

<img src="/support/images/en/howto/remote-storage-connection-settings/remote-manager-backblaze-view.png" alt="remote manager backblaze view" class="img-medium img-center" />

✅ **完成！** 您已成功將 **Backblaze B2** 儲存空間連接到 **RcloneView**。


## 🔗 其他資源

- 🔐 管理您的金鑰：[https://secure.backblaze.com/b2_buckets.htm](https://secure.backblaze.com/b2_buckets.htm)
- 📘 App key 文件：[https://www.backblaze.com/b2/docs/application_keys.html](https://www.backblaze.com/b2/docs/application_keys.html)
