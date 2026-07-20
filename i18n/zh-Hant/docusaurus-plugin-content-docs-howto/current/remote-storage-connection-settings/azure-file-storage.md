---
sidebar_position: 7
description: "了解如何在 RcloneView 中新增 Azure File Storage。"
keywords:
  - rcloneview
  - azure file storage
  - azure files
  - smb
  - 雲端儲存
  - remote storage
  - Remote Connection
  - rclone
tags:
  - azure
  - azure-files
  - Remote-Storage
  - remote-connection
  - cloud-storage
date: 2025-12-03
author: tayson
---

# Azure File Storage

## 如何使用 RcloneView 新增 Azure File Storage

Azure File Storage 使用 SMB，連線時需要三項資訊：

- **Azure Storage Account Name**
- **Storage Account Shared Key**
- **Azure File Share Name**

您可以從 **Azure Portal** 複製這三項資訊(儲存體帳戶 > **Access keys** 取得共用金鑰，**File shares** 取得共用名稱)。

<img src="/support/images/en/howto/remote-storage-connection-settings/azure-file-storage/azure-file-share-account-key.png" alt="get azure storage account name and account shared key" class="img-large img-center" />

<img src="/support/images/en/howto/remote-storage-connection-settings/azure-file-storage/azure-file-share-name.png" alt="get azure storage share name" class="img-large img-center" />

### 步驟 1:開啟「新增遠端」視窗

- 從上方選單的 **`Remote`** 底下點擊 **`+ New Remote`**。
- 或在檔案總管面板中點擊 **`+`** 按鈕，選擇 **`New Remote`**。

<div class="img-grid-2">
<img src="/support/images/en/howto/remote-storage-connection-settings/add-new-remote.png" alt="add new remote" class="img-large img-center" />
<img src="/support/images/en/howto/remote-storage-connection-settings/add-new-remote-explorer.png" alt="add new remote explorer" class="img-large img-center" />
</div>

### 步驟 2:選擇 Azure File Storage 作為儲存供應商

1. 在 **Search Provider** 欄位中輸入 `Azure File Storage`。
2. 從清單中點擊 **Azure File Storage** 選項。

接著您會進入 Azure File Storage 的設定畫面。

<img src="/support/images/en/howto/remote-storage-connection-settings/azure-file-storage/azure-file-new-remote.png" alt="select azure file storage to add remote" class="img-large img-center" />

### 步驟 3:設定您的 Azure File Storage 遠端

在表單中填寫所需資訊:

- **Remote name**:為您的遠端取一個易於辨識的名稱(例如 `MyAzureFileStorage`)
- **account**:Azure Storage **Account Name**。請設定為您所使用的 Azure Storage Account Name。
- **key**:**Storage Account Shared Key**
- **share_name**:**Azure Files Share Name**。此欄位為必填,是要存取的共用資料夾名稱。

輸入所有值後,點擊 **`Add Remote`** 完成設定。

<img src="/support/images/en/howto/remote-storage-connection-settings/azure-file-storage/azure-file-new-remote-settings.png" alt="remote configure azure file storage" class="img-large img-center" />

### 步驟 4:確認已新增的遠端

新增完成後,您的新 Azure File Storage 遠端(例如 `MyAzure`)會出現在 **Remote Manager** 清單中。

現在您可以:

- 點擊 **`Open`** 瀏覽您的檔案。
- 在同步、複製或掛載工作中使用它。
- 隨時管理或刪除該遠端。

<img src="/support/images/en/howto/remote-storage-connection-settings/azure-file-storage/azure-file-remote-manager.png" alt="remote manager azure file storage view" class="img-large img-center" />

✅ **完成!** 您已成功將 **Azure File Storage** 儲存體連接至 **RcloneView**。

**完成!** 您現在可以直接透過 RcloneView 瀏覽並傳輸 Azure File Share 中的檔案。
