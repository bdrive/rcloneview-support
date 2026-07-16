---
slug: transfer-google-cloud-storage-aws-s3-without-cli-rcloneview
title: "使用 RcloneView 免 CLI 在 Google Cloud Storage 與 AWS S3 之間傳輸檔案"
authors:
  - tayson
description: "使用 RcloneView 的視覺化 GUI 在 Google Cloud Storage (GCS) 與 AWS S3 之間移動、同步和遷移資料——無需 gsutil、aws cli 或撰寫腳本。"
keywords:
  - google cloud storage to s3
  - gcs to aws s3 transfer
  - google cloud storage migration
  - gcs s3 sync
  - transfer between gcs and s3
  - google cloud storage gui
  - gcs backup to s3
  - multi-cloud transfer gcs
  - google cloud storage rclone
  - gcs to s3 without cli
tags:
  - google-cloud-storage
  - aws-s3
  - migration
  - sync
  - multi-cloud
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 使用 RcloneView 免 CLI 在 Google Cloud Storage 與 AWS S3 之間傳輸檔案

> 在 Google Cloud Storage 與 AWS S3 之間管理資料，通常意味著要同時操作 gsutil、aws cli 和自訂腳本。RcloneView 讓您透過視覺化介面完成這一切——只需幾分鐘即可在 GCS 與 S3 之間瀏覽、比較、同步及排程傳輸。

多雲已是大多數工程團隊的現實。您的 ML 訓練資料存放在 GCS 儲存桶（bucket）中，正式環境的資產放在 S3 上，總有人得負責讓兩者保持同步。傳統做法——使用 gsutil 和 aws cli 撰寫 shell 腳本——雖然可行，但脆弱、難以監控，而且非工程師根本無法管理。

RcloneView 原生連接 GCS 與 S3，提供統一的 GUI，讓您在這兩大雲端平台之間瀏覽、傳輸、比較並自動化資料移動。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 為何要在 GCS 與 S3 之間移動資料？

團隊在 Google Cloud Storage 與 AWS S3 之間傳輸資料，通常出於以下幾個常見原因：

**多雲備援** — 將關鍵資料同時儲存在兩大主要供應商，可防範供應商層級的中斷及廠商鎖定風險。若其中一朵雲端發生故障，仍可從另一朵存取資料。

**成本優化** — GCS 與 S3 在儲存、出站流量（egress）及操作方面的定價各不相同。將冷資料移至對您的使用模式來說較便宜的供應商，可節省可觀費用。

**跨平台工作流程** — 您的資料科學團隊使用 GCP（BigQuery、Vertex AI），但正式環境基礎架構運行於 AWS 上。資料需要在兩者之間流動。

**遷移** — 若要在不停機的情況下從 GCP 遷移至 AWS（或反之），需要可靠且可續傳的傳輸機制。

**合規與資料落地** — 某些法規要求資料副本存放於特定區域或供應商。

## 設定 GCS 與 S3 遠端

### 新增 Google Cloud Storage

1. 打開 RcloneView，點選 **Add Remote**。
2. 從供應商清單中選擇 **Google Cloud Storage**。
3. 選擇您的驗證方式：
   - **Service Account JSON** — 建議用於伺服器對伺服器的傳輸。上傳您的服務帳戶金鑰檔。
   - **OAuth（瀏覽器登入）** — 適合個人 GCP 帳戶。請參閱 [OAuth 登入指南](https://rcloneview.com/support/howto/remote-storage-connection-settings/add-oath-online-login)。
4. 若系統提示，請設定您的 **project ID** 及預設的 **bucket location**。
5. 儲存此遠端——您的 GCS 儲存桶即可瀏覽。

### 新增 AWS S3

1. 再次點選 **Add Remote**。
2. 從供應商清單中選擇 **Amazon S3**。
3. 輸入您的 **Access Key ID** 與 **Secret Access Key**。
4. 選擇您的 **region** 與 **endpoint**。
5. 儲存——您的 S3 儲存桶即會出現在 Explorer 中。

有關 S3 的詳細設定，請參閱 [AWS S3 連線指南](https://rcloneview.com/support/howto/remote-storage-connection-settings/s3)。

<img src="/support/images/en/blog/new-remote.png" alt="Add GCS and S3 remotes in RcloneView" class="img-large img-center" />

## 並排瀏覽 GCS 與 S3

一旦兩個遠端都連接完成，即可在 RcloneView 的雙欄式 Explorer 中開啟它們。左側為 GCS 儲存桶，右側為 S3 儲存桶（或相反）。您可以：

- **同時瀏覽**兩側的儲存桶與資料夾。
- **檢視檔案大小、日期與數量**，掌握哪些資料位於何處。
- **拖放**檔案，直接從 GCS 傳到 S3——或使用內建的複製／移動指令。

這種並排檢視讓您無需在 GCP 主控台與 AWS 主控台之間切換，就能即時掌握兩朵雲端的狀況。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Browse GCS and S3 side by side in RcloneView" class="img-large img-center" />

## 傳輸情境

### 情境一：一次性遷移（GCS → S3）

為進行平台遷移，將所有資料從 GCS 移至 S3：

1. **建立一個 Copy 工作**：
   - 來源：GCS 遠端 → 選擇您的儲存桶
   - 目的地：S3 遠端 → 選擇目標儲存桶
2. **配置以達到最高速度**：
   - 平行傳輸數：8–16（GCS 與 S3 都能良好處理高度平行化）
   - 區塊大小：大型檔案建議 64MB–128MB
   - 啟用 `--fast-list` 旗標以加快目錄列表速度
3. **執行工作**並即時監控進度。

對於大型遷移，可多次執行 Copy 工作。首次完整複製後，後續執行只會傳輸新增或變更的檔案——即使中斷也能安全地續傳。

### 情境二：持續同步（雙向）

讓 GCS 儲存桶與 S3 儲存桶持續保持同步：

1. **建立一個 Sync 工作**（GCS → S3）作為主要方向。
2. 使用 [Job Scheduling](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution) **排程**每小時或每日執行一次。
3. 若需要雙向同步，**新增反方向的 Sync 工作**（S3 → GCS）。
4. 使用 **Batch Jobs**（v1.3）依序執行兩個方向。

### 情境三：選擇性跨雲備份

僅將特定資料備份至另一朵雲端：

1. **使用 [Filter Rules](https://rcloneview.com/support/blog/filter-rules-selective-sync-rcloneview)** 來包含／排除特定檔案類型或資料夾。
   - 範例：僅同步 `*.parquet` 與 `*.csv` 檔案（ML 資料集）
   - 範例：排除 `tmp/` 與 `logs/` 目錄
2. **建立套用這些篩選條件的排程 Copy 工作**。

## 比較 GCS 與 S3 內容

在傳輸前後，使用 [Folder Comparison](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents) 驗證兩個儲存桶是否包含相同資料：

- **僅存在於 GCS 的檔案** — 以醒目方式標示，便於識別。
- **僅存在於 S3 的檔案** — 顯示目的地存在但來源沒有的檔案。
- **不同的檔案** — 名稱相同但大小或校驗碼不同的檔案。
- **完全相同的檔案** — 確認在兩朵雲端上皆相符。

這對於遷移驗證極具價值：在複製了數 TB 資料之後，您可以證明每個檔案都完整無損地送達。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare GCS and S3 bucket contents" class="img-large img-center" />

## 優化傳輸速度

GCS 與 S3 都是高效能的物件儲存服務，因此您可以放心地全力推動傳輸：

| 設定 | 建議值 | 原因 |
|---------|-------------------|-----|
| 平行傳輸數 | 8–16 | 兩家供應商都能良好處理並行請求 |
| 區塊大小 | 64MB–128MB | 降低大型檔案的 API 負擔 |
| Checkers | 16–32 | 加快大型目錄的比對階段速度 |
| 緩衝區大小 | 128MB | 平滑化雲端區域之間的網路延遲 |
| Fast-list | 啟用 | 大幅減少目錄列表所需的 API 呼叫次數 |

### 跨區域注意事項

若您的 GCS 儲存桶位於 `us-central1`，而 S3 儲存桶位於 `eu-west-1`，資料就必須跨越網際網路在區域之間傳輸。為求最佳效能：

- 盡可能讓來源與目的地位於同一地理區域。
- 在離峰時段執行傳輸，以避免網路壅塞。
- 監控出站流量（egress）費用——GCS 與 S3 皆會針對離開其網路的資料收費。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitor GCS to S3 transfer speed" class="img-large img-center" />

## 自動化 GCS ↔ S3 工作流程

### 每日資料管線

設定每晚執行一次的排程工作：

1. 將新的 ML 訓練資料從 GCS 同步至 S3，供 AWS 上的訓練工作使用。
2. 將結果從 S3 複製回 GCS，供 BigQuery 分析使用。
3. 管線完成時，透過 [Slack](https://rcloneview.com/support/blog/rcloneview-slack-remote-control) 收到通知。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule GCS to S3 data sync" class="img-large img-center" />

### 災難復原複製

在 GCS 中維護一份 S3 關鍵資料的即時副本（或反之）：

1. 建立一個從主要儲存桶到 DR 儲存桶的 Sync 工作。
2. 每小時排程一次，以達成低於 1 小時的 RPO（Recovery Point Objective，復原點目標）。
3. 使用 [checksum verification](https://rcloneview.com/support/blog/checksum-verified-cloud-migrations-rcloneview) 確保資料完整性。

### 基於成本的分層儲存

將資料移至存取模式較便宜的供應商：

1. 經常存取的資料 → 保留在最接近運算資源的供應商。
2. 冷資料／封存資料 → 根據定價，移至 GCS Nearline/Coldline 或 S3 Glacier。
3. 排程定期的分層作業，持續優化成本。

## GCS 與 S3：以 RcloneView 作為統一層

無需學習兩套不同的 CLI（GCS 用 gsutil、S3 用 aws s3），RcloneView 為兩者提供單一介面。這意味著：

- **只需學習一套工具** — 團隊無需精通兩種不同的命令列介面。
- **視覺化操作** — 以拖放、右鍵選單及對話框式設定，取代旗標與參數。
- **一致的監控體驗** — 無論涉及哪些雲端，都使用相同的 [Job History](https://rcloneview.com/support/howto/rcloneview-basic/execute-manage-job#view-job-history) 與 [Transfer Monitoring](https://rcloneview.com/support/howto/rcloneview-basic/real-time-transfer-monitoring)。
- **可移植的工作** — 同步 GCS 到 S3 的工作，與同步 OneDrive 到 Dropbox 的工作運作方式完全相同。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Unified job history for GCS and S3 transfers" class="img-large img-center" />

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**（支援 Windows、macOS、Linux）。
2. 使用服務帳戶金鑰或 OAuth 登入，**新增您的 GCS 遠端**。
3. 使用存取金鑰憑證，**新增您的 S3 遠端**。
4. 在 Explorer 中**並排瀏覽兩者**。
5. 依您的使用情境**建立 Copy 或 Sync 工作**。
6. **排程並監控**，實現無需人工介入的多雲資料管理。

別再同時操作 gsutil 和 aws cli 了。RcloneView 將 GCS 與 S3 的管理統一為單一視覺化工作流程——讓多雲資料傳輸不再只是懂 CLI 的工程師才能做到的事，而是整個團隊都能上手。

---

**相關指南：**

- [新增 AWS S3 及 S3 相容儲存](https://rcloneview.com/support/howto/remote-storage-connection-settings/s3)
- [透過瀏覽器登入新增遠端（OAuth）](https://rcloneview.com/support/howto/remote-storage-connection-settings/add-oath-online-login)
- [比較資料夾內容](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [建立同步工作](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [工作排程](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)
- [即時傳輸監控](https://rcloneview.com/support/howto/rcloneview-basic/real-time-transfer-monitoring)
- [經校驗確認的雲端遷移](https://rcloneview.com/support/blog/checksum-verified-cloud-migrations-rcloneview)

<CloudSupportGrid />
