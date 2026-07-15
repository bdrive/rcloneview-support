---
sidebar_position: 3
description: 如何取得 Cloudflare R2 憑證與端點
keywords:
  - rcloneview
  - cloud
  - rclone
  - cloudflare r2
  - r2 endpoint
  - access key id
  - secret access key
  - cloudflare r2 rclone
  - cloudflare s3 api
  - connect r2 to rcloneview
tags:
  - RcloneView
  - Cloud
  - cloud-storage
  - credentials
  - configuration
  - access-key-id
  - secret-access-key
  - secret-key-id
  - cloudflare-r2
date: 2025-07-12
author: Jay
---
# 如何取得 Cloudflare R2 憑證與端點

若要將 **Cloudflare R2** 連接至 Rclone 或 **RcloneView**，您需要三項關鍵資訊：

- ✅ Access Key ID  
- ✅ Secret Access Key  
- ✅ R2 S3 相容端點 URL  

本指南將引導您如何從 Cloudflare 儀表板取得這些資訊。

---

## 🧰 先決條件

開始之前：

- 您必須擁有已啟用 **R2 Object Storage** 的 Cloudflare 帳號。
- 您需要能夠存取 [Cloudflare Dashboard](https://dash.cloudflare.com)。
- 具備雲端儲存概念的基本知識會有所幫助。

---

## 📦 步驟 1：建立 R2 儲存貯體（若尚未建立）

1. 登入您的 [Cloudflare Dashboard](https://dash.cloudflare.com)。
2. 在左側側邊欄，前往 **R2 → Object Storage**。
3. 點選 **Create bucket**。
4. 輸入儲存貯體的唯一名稱。
5. 選擇位置（例如 **Automatic**，或像 `westerneurope` 這樣的地區）。
6. 點選 **Create Bucket**。

此儲存貯體將作為使用 RcloneView 傳輸檔案的儲存位置。

---

## 🔐 步驟 2：產生 API 憑證

若要驗證 R2，您需要建立提供存取權限的 API 權杖。

### ➕ 如何建立 Access Key 與 Secret Key：

1. 前往 Cloudflare 儀表板中的 **Storage & databases -> R2 Object storage → Overview**。
2. 在 **Account Details** 區段中，點選 **API Tokens** 旁的 **Manage** 按鈕。

   <img src="/support/images/en/howto/cloud-storage-setting/cloudflare-manage-r2-api-token.png" alt="cloudflare manage r2 api token" class="img-medium img-center" />
   
3. 點選 **Create API Token**。選擇符合您使用情境的權杖類型（Account 或 User）。

<img src="/support/images/en/howto/cloud-storage-setting/cloudflare-create-user-api-token.png" alt="cloudflare create user api token" class="img-medium img-center" />

3. 為權杖命名（例如 `Rclone Access`）。
4. 選擇權限：
   - `Admin Read & Write`（完整存取權限）  
	❗其他權限可能無法存取儲存貯體。
1. 選擇要套用至：
   - 所有儲存貯體
   - 僅限特定儲存貯體
7. 選擇性地設定到期時間（或保留為「Forever」）。
8. 點選 **Create API Token**。

權杖建立後，Cloudflare 會顯示：

- **Access Key ID**
- **Secret Access Key**

:::danger 重要
這些憑證僅會顯示一次。請務必複製並妥善儲存。
:::

---

## **🌐 步驟 3：取得 R2 端點 URL**

1. 前往 Cloudflare 儀表板中的 **R2 → Object Storage**。  
2. 點選您的**儲存貯體名稱**以開啟其詳細資料。  
3. 導覽至 **Settings** 分頁。  
4. 在 **S3 API** 區段中，您會找到端點格式與帳號詳細資料。    
    
根據您建立 API 權杖的方式，您應使用以下其中一種端點格式：

 ### 🔐 若您的 API Token 具有 Admin 層級存取權，且可存取所有儲存貯體：

使用基礎端點（不含儲存貯體路徑）：

```
https://<ACCOUNT_ID>.r2.cloudflarestorage.com
```

### 📦 若您的 API Token 僅限於特定儲存貯體——或您想要存取特定儲存貯體：

使用儲存貯體專屬端點：

```
https://<ACCOUNT_ID>.r2.cloudflarestorage.com/<BUCKET-NAME>
```

您可以在儲存貯體 **Settings** 分頁的 **S3 API** 區段中，找到您的 **ACCOUNT_ID** 與儲存貯體名稱：

<img src="/support/images/en/howto/cloud-storage-setting/cloudflare-r2-s3-api-endpoint.png" alt="cloudflare r2 s3 api endpoint" class="img-medium img-center" />

在 **RcloneView** 或透過 **Rclone CLI** 設定 Cloudflare R2 遠端時，請使用此端點。

---
   
## ✅ 總結

您現在應已備妥以下值，可用於設定 Cloudflare R2 遠端：

| 欄位             | 說明                                      |
|------------------|--------------------------------------------------|
| Access Key ID     | 由 Cloudflare API 權杖提供                |
| Secret Access Key | 由 Cloudflare API 權杖提供                |
| Endpoint URL      | 可在 R2 儲存貯體設定中找到（S3 相容 URL） |

您現在可以在設定新的 S3 相容遠端時，將這些資訊輸入 **RcloneView**，或使用 Rclone CLI。

👉 接下來：[如何在 RcloneView 中新增 S3 相容遠端](/howto/remote-storage-connection-settings/s3)
