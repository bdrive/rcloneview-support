---
slug: manage-hdfs-cloud-sync-backup-rcloneview
title: "管理 HDFS 儲存空間 — 使用 RcloneView 同步與備份檔案"
authors:
  - kai
description: "將 Hadoop 分散式檔案系統（HDFS）叢集連接到 RcloneView，即可在 90 多個雲端服務供應商之間瀏覽、同步並備份巨量資料儲存。"
keywords:
  - hdfs rcloneview
  - manage hdfs cloud storage
  - hadoop distributed file system gui
  - hdfs to cloud migration
  - hdfs cloud backup
  - sync hdfs to cloud storage
  - hdfs rclone gui
  - hybrid data lake cloud sync
  - on-prem hadoop cloud backup
tags:
  - self-hosted
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 管理 HDFS 儲存空間 — 使用 RcloneView 同步與備份檔案

> Hadoop 叢集保存了多年來處理過的資料，但要在地端儲存與雲端之間搬移這些資料，通常得依賴腳本與 CLI 工具 — RcloneView 則為 HDFS 提供了一個視覺化的操作環境。

Hadoop 分散式檔案系統（HDFS）是無數地端巨量資料管線背後的儲存層，但它並未提供一種便於檢視、傳輸或封存資料的友善方式，讓使用者能在 Hadoop 生態系之外操作這些資料。RcloneView 將 HDFS 視為一種以協定為基礎的遠端連線，與 SFTP、FTP、WebDAV 並列，讓資料工程師能在熟悉的檔案總管介面中瀏覽叢集內容，並在不需撰寫 distcp 工作或自訂腳本的情況下，將資料集搬移到雲端儲存或從雲端搬回。它在 Windows、macOS 與 Linux 上運作方式一致，這對於資料團隊並非全部使用同一作業系統的情況相當重要。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 新增 HDFS 叢集作為遠端連線

HDFS 屬於 RcloneView 中以協定為基礎的儲存類別，透過與 SFTP、WebDAV 連線相同的「新增遠端」精靈進行設定。叢集新增完成後，會在總管面板中以獨立分頁顯示，並提供標準的資料夾樹狀結構、檔案清單與縮圖檢視，方便瀏覽儲存在叢集各個 NameNode 中的資料集。右鍵選單操作 — 複製、下載、重新命名、取得大小 — 運作方式與其他任何遠端完全相同，這代表即使不熟悉 `hadoop fs` 指令的工程師，仍能稽核 HDFS 中實際存放的內容。

<img src="/support/images/en/blog/new-remote.png" alt="Adding an HDFS remote in RcloneView's New Remote wizard" class="img-large img-center" />

RcloneView 可在同一個視窗中掛載並同步 90 多個服務供應商，因此在瀏覽 HDFS 的同一個工作階段中，也能在旁邊的面板開啟 Google Drive、S3 儲存貯體或本機磁碟以便直接比較。

## 串接地端儲存與雲端物件儲存

將 HDFS 連接到 RcloneView 最常見的原因，是將冷資料或已處理完成的資料，從成本高昂且容量有限的叢集移出，轉存到成本較低的雲端儲存以供長期保存。使用「僅修改目的地」方向的單向同步工作，可將 HDFS 的輸出結果 — 已處理的資料集、模型訓練產物、日誌封存 — 複製到 S3、Azure Blob 或 Backblaze B2 儲存貯體，而不會動到來源資料。同步精靈第 3 步中的篩選設定，可讓你將工作範圍限定於特定檔案類型，或排除 Hadoop 工作留下的中介 `_SUCCESS` 與暫存檔案，確保目的地儲存貯體只保留真正值得留存的內容。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Syncing HDFS cluster data to cloud object storage in RcloneView" class="img-large img-center" />

對於大型資料集，調整進階設定中的檔案傳輸數量與多執行緒傳輸數量，有助於充分利用叢集與目的地之間的可用頻寬，同時將相等性檢查器數量維持在適中程度，能避免在比對階段對 NameNode 造成不必要的讀取負載。

## 排程週期性封存工作

資料管線很少只執行一次。PLUS 授權使用者可為 HDFS 同步工作附加類似 crontab 的排程，讓每次批次執行後新產生的輸出自動鏡像至雲端儲存，而不必仰賴有人記得手動啟動傳輸。工作歷程接著會追蹤每一次執行 — 狀態、傳輸大小、耗時 — 讓團隊擁有清楚的稽核軌跡，準確呈現每個資料集何時離開叢集、又落腳於何處。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a recurring HDFS to cloud storage sync job in RcloneView" class="img-large img-center" />

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 使用以協定為基礎的儲存選項，將你的 HDFS 叢集新增為遠端連線。
3. 在總管面板中瀏覽叢集，確認資料集與權限設定正確無誤。
4. 設定通往封存用雲端目的地的單向同步工作，並使用篩選條件排除暫存檔案。

將 HDFS 帶入與雲端遠端相同的視窗中，能把原本仰賴腳本、容易出錯的匯出流程，轉變為可監控、可排程的可重複工作。

---

**相關指南：**

- [管理 MinIO 儲存空間 — 在 RcloneView 中自架雲端同步](https://rcloneview.com/support/blog/manage-minio-self-hosted-cloud-sync-rcloneview)
- [資料科學家的雲端儲存 — 用 RcloneView 簡化資料集管理](https://rcloneview.com/support/blog/cloud-storage-data-scientists-rcloneview)
- [AI 訓練資料集管線 — 用 RcloneView 建置與同步](https://rcloneview.com/support/blog/ai-training-dataset-pipeline-rcloneview)

<CloudSupportGrid />
