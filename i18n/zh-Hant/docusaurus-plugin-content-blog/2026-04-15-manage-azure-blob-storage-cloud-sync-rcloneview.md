---
slug: manage-azure-blob-storage-cloud-sync-rcloneview
title: "管理 Azure Blob Storage — 使用 RcloneView 同步與備份檔案"
authors:
  - tayson
description: "使用 RcloneView 管理 Azure Blob Storage — 透過 GUI 介面同步容器、備份檔案，並在 Azure 與其他雲端之間傳輸資料。"
keywords:
  - Azure Blob Storage 管理
  - Azure blob 同步
  - Azure 備份工具
  - RcloneView Azure
  - Azure 容器同步
  - 雲端儲存管理
  - Azure 檔案傳輸
  - blob storage GUI
  - Azure Blob rclone
  - Azure 物件儲存備份
tags:
  - azure
  - object-storage
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 管理 Azure Blob Storage — 使用 RcloneView 同步與備份檔案

> Azure Blob Storage 是雲端原生應用程式與企業資料湖的核心動力來源 — RcloneView 將其容器帶入視覺化檔案管理介面，讓同步、備份與跨雲端搬遷更有效率。

Azure Blob Storage 是微軟為雲端原生應用程式、資料湖與企業封存所打造的物件儲存骨幹。雖然 Azure 入口網站適合偶爾瀏覽使用，但大量傳輸、跨雲端搬遷與備份自動化則需要更靈活的方法。RcloneView 可連接至 Azure Blob Storage，將您的容器直接帶入多面板檔案總管，與您所有其他雲端遠端並列呈現。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 將 Azure Blob Storage 連接至 RcloneView

在 RcloneView 中，開啟 **Remote tab > New Remote**，並從提供者清單中選擇 **Microsoft Azure Blob Storage**。您需要提供儲存體帳戶名稱（Storage Account Name），以及帳戶金鑰（Account Key）或 SAS（共用存取簽章）權杖其中之一。輸入這些憑證並儲存遠端後，您的 blob 容器便會以最上層資料夾的形式顯示在檔案總管面板中。

<img src="/support/images/en/blog/new-remote.png" alt="Adding Azure Blob Storage as a new remote in RcloneView" class="img-large img-center" />

導覽操作相當直覺 — 容器展開後可顯示其 blob 路徑，您也可以依名稱篩選、檢查檔案大小，並檢視修改時間戳記。與 Azure 入口網站的扁平化 blob 清單不同，RcloneView 的資料夾樹狀檢視讓階層式前綴結構的瀏覽變得直觀易懂。您也可以在任一項目上按右鍵，檢視其大小、複製路徑，或啟動傳輸作業。

## 將 Azure Blob 與其他雲端同步

Azure Blob Storage 經常被用來封存來自其他平台的資料。一家將影音資產從本地 NAS 搬遷至 Azure Blob 的媒體公司，可在 RcloneView 的 **Job Manager** 中設定同步工作：來源為 NAS 的 SFTP 遠端，目的地則為目標 Azure 容器。並行傳輸與多執行緒上傳設定，能在大批搬遷作業中將吞吐量發揮到最大。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-to-cloud sync from NAS to Azure Blob Storage in RcloneView" class="img-large img-center" />

對於混合雲架構而言，在 Azure Blob 與 Amazon S3 或 Cloudflare R2 之間同步容器，可在不受供應商綁定的情況下建立冗餘備援。甚至兩個以不同儲存體帳戶設定的 Azure Blob 遠端，也能直接在 RcloneView 中互相同步，讓跨帳戶搬遷變得輕鬆簡單。

## 排程備份自動化

需要定期備份至 Azure Blob 的組織，可使用 RcloneView 以 cron 為基礎的排程功能（PLUS 授權）來設定完全自動化的工作。例如一家每晚將案件文件封存至 Azure Blob 的法律事務所，只需設定一次排程 — 週一至週五每天凌晨 2 點執行 — RcloneView 便會自動完成執行工作。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling Azure Blob Storage backup jobs in RcloneView" class="img-large img-center" />

**Job History** 分頁提供完整的稽核記錄：每次執行的開始時間、持續時間、傳輸位元組數、移動檔案數與狀態。對於重視合規性的工作流程而言，這份記錄能準確回答資料上次備份的時間，以及該工作是否成功完成。

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 前往 **Remote tab > New Remote**，選擇 **Microsoft Azure Blob Storage**，並輸入您的帳戶名稱與金鑰。
3. 在檔案總管面板中瀏覽您的容器 — 導覽前綴、檢查檔案大小。
4. 在 **Job Manager** 中，於 Azure Blob 與您其他的儲存空間之間設定同步或備份工作。

透過 RcloneView，管理 Azure Blob Storage 就像管理本機磁碟機一樣輕鬆 — 同時對儲存內容、傳輸記錄與排程執行狀況擁有完整掌握。

---

**相關指南：**

- [使用 RcloneView 將 Azure Blob Storage 掛載為本機磁碟機](https://rcloneview.com/support/blog/mount-azure-blob-storage-local-drive-rcloneview)
- [使用 RcloneView 將 Azure Blob 搬遷至 Cloudflare R2](https://rcloneview.com/support/blog/migrate-azure-blob-to-cloudflare-r2-rcloneview)
- [使用 RcloneView 管理 Azure Files 雲端同步](https://rcloneview.com/support/blog/manage-azure-files-cloud-sync-rcloneview)

<CloudSupportGrid />
