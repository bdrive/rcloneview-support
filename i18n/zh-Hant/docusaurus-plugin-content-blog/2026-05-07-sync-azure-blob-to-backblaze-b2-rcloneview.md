---
slug: sync-azure-blob-to-backblaze-b2-rcloneview
title: "將 Azure Blob Storage 同步至 Backblaze B2 — 使用 RcloneView 進行雲端備份"
authors:
  - tayson
description: "了解如何使用 RcloneView 將檔案從 Azure Blob Storage 同步或遷移至 Backblaze B2，以節省成本、提升備援能力並實現自動化雲端備份。"
keywords:
  - Azure Blob Storage
  - Backblaze B2
  - cloud migration
  - RcloneView
  - cloud-to-cloud sync
  - cloud backup
  - storage cost savings
  - rclone azure b2
tags:
  - azure
  - backblaze-b2
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 將 Azure Blob Storage 同步至 Backblaze B2 — 使用 RcloneView 進行雲端備份

> 將資料從 Azure Blob Storage 移轉至 Backblaze B2 可以大幅降低您的儲存成本 — RcloneView 透過引導式圖形介面，讓遷移與持續同步變得簡單直覺。

Azure Blob Storage 廣泛應用於企業工作負載，但 Backblaze B2 的儲存定價明顯更低 — 往往只是 Azure 費用的一小部分 — 因此非常適合作為次要備份目標或完整遷移的目的地。無論您想要進行一次性遷移還是持續同步以提升備援能力，RcloneView 都能在不需要命令列專業知識的情況下輕鬆處理。RcloneView 內建 rclone 執行檔，因此無需額外安裝任何元件。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 在 RcloneView 中設定 Azure Blob Storage

在 RcloneView 中點擊 **New Remote**，並從供應商清單中選擇 **Microsoft Azure Blob Storage**。您需要從 Azure Portal（在儲存體帳戶 > Access Keys 下）取得您的 **Storage Account Name** 與 **Storage Account Key**。您也可以選擇使用 SAS token 或連接字串。儲存後，RcloneView 會連線並列出您所有的 blob 容器。

如果您使用多個 Azure 儲存體帳戶 — 例如針對不同環境或地區使用各自獨立的帳戶 — 可將每個帳戶新增為獨立的具名遠端。RcloneView 會在同一個介面中管理所有遠端，讓您輕鬆比較容器內容並在帳戶之間搬移資料。

<img src="/support/images/en/blog/new-remote.png" alt="Adding Azure Blob Storage remote in RcloneView" class="img-large img-center" />

## 連接 Backblaze B2

再次點擊 **New Remote** 並選擇 **Backblaze B2**，新增第二個遠端。輸入您在 Backblaze 控制台取得的 **Application Key ID** 與 **Application Key**。您可以將金鑰的權限範圍限定於特定 bucket，以提升安全性。儲存後，B2 遠端就會與您的 Azure 遠端一同顯示在檔案總管中。

現在您可以在雙欄檢視中同時開啟兩個遠端。若要進行一次性傳輸，可以將個別檔案或整個資料夾拖放，從 Azure 移至 B2。若是要遷移大型容器，使用同步工作的方式會更加可靠且可續傳。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-to-cloud transfer from Azure Blob to Backblaze B2 in RcloneView" class="img-large img-center" />

## 建立並排程同步工作

開啟 **Job Manager**，透過四個步驟的 **Job Wizard** 建立同步工作，以 Azure Blob 作為來源、Backblaze B2 作為目的地。務必先執行 **dry run**（模擬執行）— 這會預覽所有將新增與刪除的項目，而不會實際變更您的資料。確認預覽結果無誤後，再執行正式同步。

若需要持續的備援能力，PLUS 授權使用者可以新增**排程**，讓 Azure 到 B2 的同步以每日或每週的頻率自動執行。**Job History** 面板會記錄每次執行的檔案數量與傳輸大小，讓您可以確認備份是否成功完成，並符合任何合規要求。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling Azure Blob to Backblaze B2 sync in RcloneView" class="img-large img-center" />

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 使用您的 Storage Account Name 與 Key 新增 **Azure Blob Storage** 遠端。
3. 使用您的 Application Key ID 與 Key 新增 **Backblaze B2** 遠端。
4. 在雙欄檔案總管中開啟這兩個遠端，並使用 **Job Wizard** 建立同步工作。
5. 先執行 **dry run**，接著使用 PLUS 授權排程週期性同步。

透過 RcloneView 將 Azure Blob 同步至 Backblaze B2，是打造具成本效益又不失可靠性的雲端備份策略最有效的方法之一。

---

**相關指南：**

- [管理 Azure Blob Storage — 使用 RcloneView 進行雲端同步](https://rcloneview.com/support/blog/manage-azure-blob-storage-cloud-sync-rcloneview)
- [管理 Backblaze B2 — 使用 RcloneView 進行雲端同步與備份](https://rcloneview.com/support/blog/manage-backblaze-b2-cloud-sync-backup-rcloneview)
- [使用 RcloneView 將 OneDrive 遷移至 Backblaze B2](https://rcloneview.com/support/blog/migrate-onedrive-to-backblaze-b2-rcloneview)

<CloudSupportGrid />
