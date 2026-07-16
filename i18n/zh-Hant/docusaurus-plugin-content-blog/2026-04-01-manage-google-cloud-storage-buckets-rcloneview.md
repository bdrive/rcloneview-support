---
slug: manage-google-cloud-storage-buckets-rcloneview
title: "使用 RcloneView 管理 Google Cloud Storage 儲存桶"
authors:
  - tayson
description: "使用 RcloneView 以視覺化方式瀏覽、上傳、同步及管理 Google Cloud Storage（GCS）儲存桶。無需 CLI —— 透過 GUI 即可完成完整的 GCS 管理。"
keywords:
  - google cloud storage rcloneview
  - manage gcs buckets gui
  - rclone google cloud storage
  - gcs bucket management tool
  - google cloud storage gui
  - sync files google cloud storage
  - upload to gcs without cli
  - rcloneview gcs
  - google cloud storage backup
  - gcs rclone gui
tags:
  - google-cloud-storage
  - object-storage
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 使用 RcloneView 管理 Google Cloud Storage 儲存桶

> Google Cloud Storage 是 GCP 的物件儲存骨幹 —— 耐用、快速，並與 Google 的雲端平台深度整合。RcloneView 為你的 GCS 儲存桶提供視覺化檔案管理員，無需使用 `gsutil` 或 GCP 主控台。

Google Cloud Storage（GCS）是已使用 Google Cloud Platform 的團隊首選的物件儲存服務 —— 無論是用於應用程式資料、機器學習資料集、BigQuery 暫存區，還是媒體傳遞。雖然 `gsutil` 和 GCP 主控台可以運作，但在批次檔案操作與日常檔案管理上速度較慢。RcloneView 為 GCS 儲存桶提供雙窗格檔案管理員，讓你能像使用桌面檔案總管一樣瀏覽、傳輸及同步檔案。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## RcloneView 為 GCS 管理帶來的優勢

| 任務 | GCP 主控台 | gsutil CLI | RcloneView |
|------|------------|------------|------------|
| 視覺化瀏覽儲存桶 | ✓ | ✗ | ✓ |
| 拖放上傳 | 有限 | ✗ | ✓ |
| 同步至其他雲端 | ✗ | ✗ | ✓ |
| 傳輸至本機磁碟 | 慢 | ✓ | ✓ |
| 排程同步工作 | ✗ | 手動 | ✓ |
| 即時傳輸監控 | ✗ | ✓ | ✓ |

## 將 Google Cloud Storage 連接至 RcloneView

### 步驟 1 — 建立服務帳戶

在 GCP 主控台中：

1. 前往 **IAM & Admin → Service Accounts**。
2. 建立一個新的服務帳戶，並賦予 **Storage Admin**（或若只需讀寫而不需管理儲存桶，則使用 **Storage Object Admin**）角色。
3. 產生 JSON 金鑰檔案並下載。

### 步驟 2 — 在 RcloneView 中新增 GCS 遠端

開啟 RcloneView 並點擊 **New Remote**：

<img src="/support/images/en/blog/new-remote.png" alt="Add Google Cloud Storage remote in RcloneView" class="img-large img-center" />

1. 從遠端類型清單中選擇 **Google Cloud Storage**。
2. 指向你下載的 **JSON 服務帳戶金鑰檔案**。
3. 輸入你的 **GCP Project ID**。
4. 為遠端命名（例如 `gcs-prod`）並儲存。

連接後，你的 GCS 儲存桶會以頂層資料夾的形式出現在 RcloneView 的檔案瀏覽器中。

## 瀏覽與管理 GCS 儲存桶

進入任一儲存桶即可查看其內容。RcloneView 會將物件鍵的階層結構呈現為資料夾，與你在 GCP 主控台中看到的相符。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Browse GCS buckets in RcloneView" class="img-large img-center" />

在雙窗格介面中，你可以：
- 在 GCS 路徑之間或與本機磁碟之間**複製檔案**
- 在儲存桶內或跨儲存桶**移動物件**
- 在確認後**刪除物件**
- 透過以新鍵複製並刪除舊鍵的方式**重新命名**

## 將檔案同步至 GCS 與從 GCS 同步

### 將本機資料集上傳至 GCS

1. 在 RcloneView 中開啟一個**工作（Job）**。
2. 將來源設定為你的本機資料夾（例如 `D:\ml-dataset\`）。
3. 將目的地設定為 GCS 路徑（例如 `gcs-prod:my-ml-bucket/training-data/`）。
4. 選擇 **Copy**（僅新增檔案）或 **Sync**（完全鏡射）。
5. 執行工作並即時監控進度。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Upload dataset to GCS in RcloneView" class="img-large img-center" />

### 跨雲端：從 GCS 到其他供應商

RcloneView 可直接在雲端之間傳輸。常見的 GCS 工作流程包括：

- **GCS → AWS S3** —— 跨雲端複製儲存桶以確保備援
- **GCS → Backblaze B2** —— 將冷資料歸檔至較便宜的儲存空間
- **GCS → Google Drive** —— 與非技術人員分享處理後的輸出結果
- **GCS → 本機 NAS** —— 提取資料以進行地端處理

## GCS 儲存等級意識

GCS 提供多種儲存等級：Standard、Nearline、Coldline 及 Archive。在 RcloneView 中設定同步工作時，你可以傳入 rclone 旗標，為新物件指定特定的儲存等級：

| 儲存等級 | 使用情境 | 最短儲存期限 |
|--------------|----------|--------------------------|
| Standard | 頻繁存取的資料 | 無 |
| Nearline | 每月存取 | 30 天 |
| Coldline | 每季存取 | 90 天 |
| Archive | 每年存取 | 365 天 |

使用 RcloneView 工作編輯器中的 **Custom flags** 欄位，傳入 `--gcs-storage-class COLDLINE` 以處理歸檔資料。

## 排程定期 GCS 同步

對於重複性的備份工作 —— 每晚上傳、每日暫存同步或每週歸檔執行：

1. 建立一個以你的來源與 GCS 目的地為設定的工作。
2. 開啟 **Schedule** 設定。
3. 設定頻率（每日、每週、自訂 cron）。
4. 啟用完成時的電子郵件或通知提醒。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule GCS sync job" class="img-large img-center" />

## 使用資料夾比較進行驗證

在大型傳輸完成後，使用 RcloneView 的**資料夾比較（Folder Comparison）**功能，驗證你的本機檔案是否與 GCS 中的內容一致 —— 檢查檔案數量、大小及校驗碼：

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify GCS sync with folder comparison" class="img-large img-center" />

任何遺漏或不符的物件都會被標示出來，讓你只需重新執行受影響的檔案。

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 在 GCP 主控台中**建立服務帳戶**，並賦予 Storage Object Admin 權限。
3. **下載 JSON 金鑰**，並在 RcloneView 中新增 GCS 遠端。
4. **瀏覽你的儲存桶**，開始以視覺化方式傳輸檔案。

GCS 是強大的基礎架構 —— RcloneView 讓日常檔案管理如同操作本機磁碟機一樣輕鬆。

---

**相關指南：**

- [將 Google Cloud Storage 傳輸至 AWS S3](https://rcloneview.com/support/blog/transfer-google-cloud-storage-aws-s3-without-cli-rcloneview)
- [將 Amazon S3 儲存桶掛載為本機磁碟機](https://rcloneview.com/support/blog/mount-amazon-s3-buckets-as-local-drives-rcloneview)
- [使用 RcloneView 集中管理 S3、Wasabi 及 R2](https://rcloneview.com/support/blog/centralize-s3-wasabi-r2-with-rcloneview)

<CloudSupportGrid />
