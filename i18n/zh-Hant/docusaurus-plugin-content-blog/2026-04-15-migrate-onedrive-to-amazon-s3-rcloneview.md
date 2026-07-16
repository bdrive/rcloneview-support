---
slug: migrate-onedrive-to-amazon-s3-rcloneview
title: "將 OneDrive 遷移至 Amazon S3 —— 使用 RcloneView 傳輸檔案"
authors:
  - tayson
description: "使用 RcloneView 將 OneDrive 遷移至 Amazon S3 —— 透過圖形化介面進行雲對雲傳輸、封存文件，並降低對 Microsoft 儲存空間的依賴。"
keywords:
  - OneDrive to Amazon S3 migration
  - OneDrive to S3 transfer
  - cloud migration tool
  - RcloneView OneDrive
  - S3 archive
  - OneDrive export
  - Microsoft to AWS migration
  - cloud-to-cloud transfer
  - OneDrive S3 backup
  - reduce OneDrive costs
tags:
  - onedrive
  - amazon-s3
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 將 OneDrive 遷移至 Amazon S3 —— 使用 RcloneView 傳輸檔案

> OneDrive 適合 Microsoft 365 的工作流程，而 S3 則擅長成本效益高的封存與 AWS 整合 —— RcloneView 可將您的 OneDrive 內容直接遷移至 S3，完全不需要先下載到本機。

OneDrive 能自然融入 Microsoft 365 環境，但當組織想要降低 Microsoft 授權成本、整併至 AWS 基礎架構，或需要 S3 原生封存時，有時就需要將 OneDrive 的內容搬移到 Amazon S3。RcloneView 提供直接的雲對雲遷移路徑 —— 同時連接 OneDrive 與 S3，並在兩者之間串流傳輸資料，不佔用任何本機磁碟空間。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 連接 OneDrive 與 Amazon S3

透過瀏覽器 OAuth 驗證，在 RcloneView 中新增 **Microsoft OneDrive** —— **Remote 分頁 > New Remote > Microsoft OneDrive**。接著使用您的 Access Key ID、Secret Access Key 與 AWS Region 新增 **Amazon S3**。若使用 OneDrive for Business 帳號，請將遠端設定指向您組織的租用戶（tenant）與對應的資料庫（library）。

<img src="/support/images/en/blog/new-remote.png" alt="Adding OneDrive and Amazon S3 remotes in RcloneView" class="img-large img-center" />

當兩個遠端都啟用後，即可在 RcloneView 的雙面板檔案總管中並排瀏覽 —— 左側是 OneDrive 的資料夾結構，右側是您的 S3 儲存桶結構。這個檢視畫面能協助您規劃遷移對應關係：哪些 OneDrive 資料夾要對應到哪些 S3 前綴（prefix）。

## 傳輸檔案

在 **Job Manager** 中，建立一個從 OneDrive 資料夾到目的地 S3 儲存桶路徑的 **Copy** 工作。以一家正將 1.5 TB 封存專案檔案從 OneDrive 遷移至 S3 的公司為例，Copy（而非 Sync）才是正確的工作類型 —— 它會在遷移期間保留來源檔案，同時將所有內容複製到 S3，讓您有時間在刪除前進行驗證。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="OneDrive to Amazon S3 migration job in RcloneView" class="img-large img-center" />

在 Advanced Settings 中調整多執行緒傳輸與同時傳輸檔案數量的設定，可將傳輸量最大化。RcloneView 底層的 rclone 會處理 OneDrive 的 API 限流與自動重試 —— 即使服務商暫時限制請求速率，遷移作業仍會持續進行，無需人工介入。

## 驗證與清理

遷移完成後，使用 **Folder Compare** 確認所有檔案都已正確傳輸。將 OneDrive 來源與 S3 目的地進行比對 —— 比對畫面會顯示各自獨有的檔案以及相符的檔案，讓您在移除 OneDrive 內容前擁有明確的檢查清單。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verifying OneDrive to S3 migration with Folder Compare in RcloneView" class="img-large img-center" />

確認無誤後，即可分階段封存或刪除 OneDrive 內容。**Job History** 記錄提供了遷移的永久紀錄 —— 傳輸了什麼、何時傳輸、傳輸了多少資料 —— 在停用 Microsoft 365 訂閱時，這對合規文件相當有幫助。

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 新增 **OneDrive** 遠端（OAuth）與 **Amazon S3** 遠端（Access Key 憑證）。
3. 在 Job Manager 中建立從 OneDrive 到您的 S3 儲存桶的 **Copy** 工作。
4. 使用 **Folder Compare** 在移除 OneDrive 內容前驗證所有檔案已完成傳輸。

使用 RcloneView 將 OneDrive 遷移至 Amazon S3，能將複雜的 IT 專案轉變為一個受完善監控的自動化工作 —— 每個步驟都有完整的可見度與驗證機制。

---

**相關指南：**

- [使用 RcloneView 將 OneDrive 遷移至 Google Drive](https://rcloneview.com/support/blog/migrate-onedrive-to-google-drive-rcloneview)
- [使用 RcloneView 將 OneDrive 遷移至 Backblaze B2](https://rcloneview.com/support/blog/migrate-onedrive-to-backblaze-b2-rcloneview)
- [管理 OneDrive 雲端儲存 —— 使用 RcloneView 進行同步與備份](https://rcloneview.com/support/blog/manage-onedrive-cloud-sync-backup-rcloneview)

<CloudSupportGrid />
