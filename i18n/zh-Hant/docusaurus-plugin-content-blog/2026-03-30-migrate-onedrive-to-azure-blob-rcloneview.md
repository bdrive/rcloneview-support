---
slug: migrate-onedrive-to-azure-blob-rcloneview
title: "將 OneDrive 遷移到 Azure Blob — 使用 RcloneView 傳輸檔案"
authors:
  - tayson
description: "使用 RcloneView 將 OneDrive 檔案遷移到 Azure Blob Storage。無需 CLI 工具或腳本，即可將企業文件移至可擴展的物件儲存空間。"
keywords:
  - onedrive to azure blob
  - migrate onedrive to azure
  - onedrive azure blob transfer
  - cloud-to-cloud migration
  - azure blob storage migration
  - rcloneview onedrive transfer
  - microsoft cloud migration
  - enterprise cloud migration
  - onedrive backup azure
  - object storage migration
tags:
  - RcloneView
  - onedrive
  - azure
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 將 OneDrive 遷移到 Azure Blob — 使用 RcloneView 傳輸檔案

> 從 OneDrive 升級到 Azure Blob Storage，能為您的團隊提供可擴展、可程式化的物件儲存空間 —— RcloneView 讓這次轉移毫不費力。

OneDrive 非常適合日常文件協作，但企業團隊經常會超出其儲存空間限制，或需要透過 Azure 的 REST API 以程式化方式存取檔案。Azure Blob Storage 提供分層定價（Hot、Cool 與 Archive）、龐大的可擴展性，以及與 Azure Functions、Logic Apps 和 Data Factory 的緊密整合。RcloneView 串連這兩項 Microsoft 服務，讓您無需撰寫任何程式碼，即可將檔案從 OneDrive 遷移到 Azure Blob 容器。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## OneDrive 遇到瓶頸時

大多數 Microsoft 365 方案的 OneDrive for Business 每位使用者提供 1 TB 儲存空間，並可選擇加購至 5 TB。這聽起來很充裕，直到您的組織累積了多年的專案封存、媒體資產或合規記錄。Azure Blob Storage 可擴展至 exabyte 等級，Cool 層每 GB 每月最低僅需 0.018 美元 —— 僅為同等 OneDrive 容量成本的一小部分。

除了原始容量之外，Azure Blob 還支援 OneDrive 無法比擬的功能：用於法規遵循的不可變儲存原則、用於全球內容傳遞的 Azure CDN 整合，以及透過共用存取簽章（SAS）進行的精細存取控制。將封存或大規模資料從 OneDrive 遷移到 Azure Blob，可將儲存空間集中到您現有的基礎架構中。

<img src="/support/images/en/blog/new-remote.png" alt="Creating OneDrive and Azure Blob remotes in RcloneView" class="img-large img-center" />

## 設定兩個遠端

在 RcloneView 中選擇「Microsoft OneDrive」作為提供者類型，新增一個 OneDrive 遠端。OAuth 流程會開啟您的瀏覽器以進行 Microsoft 帳戶驗證。依來源檔案所在位置，在 OneDrive Personal、OneDrive for Business 或特定的 SharePoint 文件庫之間選擇。驗證完成後，RcloneView 會顯示所選磁碟機的根目錄。

至於 Azure Blob，請建立新的遠端並選擇「Microsoft Azure Blob Storage」。輸入您的儲存體帳戶名稱，以及帳戶金鑰或 SAS URL。如果您的組織強制要求 Azure Active Directory 驗證，RcloneView 也支援該驗證方式。選擇目標容器 —— 或記下容器名稱以供工作設定使用。RcloneView 會確認連線並列出現有的容器與 Blob。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Setting up a cloud-to-cloud transfer from OneDrive to Azure Blob" class="img-large img-center" />

## 執行遷移

開啟雙窗格瀏覽器，一側顯示 OneDrive，另一側顯示 Azure Blob。導覽至您要遷移的 OneDrive 資料夾 —— 例如 `/Documents/Projects` 或整個根目錄。在 Azure 那一側，瀏覽至您的目標容器。

若要進行結構化遷移，請在工作管理員中建立複製工作。將 OneDrive 設為來源路徑，將 Azure Blob 容器設為目的地。選擇「複製」模式，以便在過渡期間傳輸檔案而不從 OneDrive 中刪除它們。如果您計劃多次執行此工作，請啟用 `--ignore-existing` 旗標，以便有效率地略過已傳輸的檔案。

OneDrive 的 API 設有速率限制，可能會拖慢大型傳輸的速度。RcloneView 會自動處理節流與重試，您也可以設定平行傳輸（`--transfers` 旗標），以在 Microsoft 的限制範圍內優化傳輸量。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Migration job history showing OneDrive to Azure Blob transfers" class="img-large img-center" />

## 遷移後驗證

工作完成後，使用 RcloneView 的比較功能，比對 OneDrive 與 Azure Blob 之間的檔案數量與大小。並排開啟兩個遠端並執行比較，以找出任何差異。Azure Blob 會為上傳的物件儲存 MD5 雜湊值，因此校驗和驗證能夠找出傳輸過程中發生的任何損毀。

驗證完成後，將您的應用程式設定為從 Azure Blob 而非 OneDrive 讀取資料。在過渡期間，請將 OneDrive 遠端保持連線於 RcloneView 中，並執行定期同步工作，以擷取使用者在切換完成前持續新增到 OneDrive 的任何檔案。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling periodic OneDrive to Azure Blob sync during migration" class="img-large img-center" />

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 透過 Microsoft OAuth 驗證您的 OneDrive 帳戶，並選擇正確的磁碟機類型。
3. 使用您的儲存體帳戶名稱及存取金鑰或 SAS 權杖，新增您的 Azure Blob 遠端。
4. 建立從 OneDrive 到 Azure Blob 的複製工作，啟用校驗和驗證，然後執行它。

確認所有檔案都已存在於 Azure Blob 後，重新導向您的工作流程，並依自己的步調淘汰 OneDrive 儲存空間。

---

**相關指南：**

- [使用 RcloneView 將 OneDrive 遷移到 Google Drive](https://rcloneview.com/support/blog/migrate-onedrive-to-google-drive-rcloneview)
- [使用 RcloneView 將 Azure Blob Storage 掛載為本機磁碟機](https://rcloneview.com/support/blog/mount-azure-blob-storage-local-drive-rcloneview)
- [使用 RcloneView 將 Azure Blob 同步到 AWS S3](https://rcloneview.com/support/blog/sync-azure-blob-to-aws-s3-rcloneview)

<CloudSupportGrid />
