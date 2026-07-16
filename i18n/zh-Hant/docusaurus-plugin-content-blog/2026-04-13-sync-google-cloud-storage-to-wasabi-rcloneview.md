---
slug: sync-google-cloud-storage-to-wasabi-rcloneview
title: "將 Google Cloud Storage 同步至 Wasabi — 使用 RcloneView 進行高性價比備份"
authors:
  - tayson
description: "將資料從 Google Cloud Storage 遷移到 S3 相容的 Wasabi 儲存空間，大幅節省成本。RcloneView 支援兩種服務並自動化同步作業。"
keywords:
  - Google Cloud Storage to Wasabi sync
  - GCS Wasabi migration RcloneView
  - Wasabi cost-effective cloud backup
  - Google Cloud Storage backup alternative
  - S3-compatible cloud migration
  - cloud storage cost optimization
  - GCS Wasabi transfer
  - RcloneView Google Cloud Wasabi
tags:
  - RcloneView
  - google-cloud-storage
  - wasabi
  - cloud-to-cloud
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 將 Google Cloud Storage 同步至 Wasabi — 使用 RcloneView 進行高性價比備份

> Wasabi 以遠低於 Google Cloud Storage 每 GB 費用的價格提供熱儲存空間 — RcloneView 可連接兩者，自動化遷移或持續同步作業。

Google Cloud Storage 與 GCP 工作流程深度整合，但對於大型資料集而言，其儲存成本會迅速累積。Wasabi 提供 S3 相容的熱儲存空間，採用固定的每 TB 定價模式，且無資料傳出費用，因此非常適合作為次要備份目標或節省成本的遷移目的地。RcloneView 支援這兩種服務，並可透過單一 GUI 介面完成同步作業。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 連接 Google Cloud Storage

在 RcloneView 中可透過兩種方式連接 Google Cloud Storage（GCS）：使用原生 GCS 提供者或 S3 相容介面。對大多數設定而言，原生 GCS 提供者最為簡便。開啟**遠端管理器**，點擊**新增遠端**，選擇 **Google Cloud Storage**。

您需要提供您的**專案編號**（可在 GCP 控制台的專案資訊中找到）。驗證方式可使用服務帳戶 JSON 金鑰或 OAuth。若使用服務帳戶存取，請從 GCP 控制台 → IAM & Admin → Service Accounts 下載 JSON 金鑰，並在遠端設定中指定其路徑。若使用 OAuth，RcloneView 會開啟瀏覽器以完成 Google 帳戶授權。

<img src="/support/images/en/blog/new-remote.png" alt="Configuring Google Cloud Storage and Wasabi remotes in RcloneView" class="img-large img-center" />

## 連接 Wasabi

在**遠端管理器**中，點擊**新增遠端**並選擇 **S3 Compatible**（Wasabi 與 S3 相容）。填寫以下欄位：

- **Access Key ID**：來自 Wasabi 控制台的 Access Keys
- **Secret Access Key**：對應的密鑰
- **Endpoint**：您所在區域的 Wasabi 端點（例如 `s3.us-east-1.wasabisys.com` 或 `s3.eu-central-1.wasabisys.com`）

儲存該遠端。在繼續之前，請確認您的 Wasabi 儲存桶已出現在檔案總管中。

## 設定同步作業

前往**作業**並點擊**新增作業**。將 Google Cloud Storage 設為來源 — 選擇特定的儲存桶或資料夾路徑。將 Wasabi 設為目的地，並指定目標儲存桶與路徑。

在作業精靈的第 2 步中，針對可靠的大規模同步進行以下設定：

- **傳輸數**：8–16（GCS 與 Wasabi 都能良好處理高並行度）
- **檢查數**：8–16（控制並行執行的相等性檢查數量）
- **校驗和驗證**：啟用以確認資料完整性
- **試執行（Dry Run）**：先啟用以檢視範圍

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Real-time monitoring of Google Cloud Storage to Wasabi sync" class="img-large img-center" />

## 排程持續同步

若 GCS 仍是您的主要儲存空間，而 Wasabi 作為高性價比的備份層，可排程定期同步作業。使用 PLUS 授權，可在作業設定中的第 3 步加入 cron 排程 — 例如 `0 2 * * *` 表示每天凌晨 2 點進行備份。

RcloneView 的增量同步意味著初次遷移後，每次執行只會傳輸有變更或新增的檔案。**作業歷史記錄**分頁會記錄每次執行的檔案數量、傳輸資料量、速度與錯誤，讓您擁有清晰的稽核記錄。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling Google Cloud Storage to Wasabi sync in RcloneView" class="img-large img-center" />

## 成本考量

Wasabi 的定價模式沒有請求費用，也沒有資料傳出費用（在使用限制內），對大型資料集而言成本相當可預測。GCS → Wasabi 的遷移確實會產生 GCS 傳出費用，但這對遷移而言是一次性支出。至於持續備份，資料來自您的伺服器或應用程式流程，因此傳出費用的影響取決於您的架構設定。

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 在**遠端管理器**中，使用您的專案編號與服務帳戶 JSON 或 OAuth 連接 Google Cloud Storage。
3. 使用 Access Key、Secret Key 與區域端點連接 Wasabi。
4. 建立同步作業，執行試執行（Dry Run）以確認範圍，然後排程以進行持續自動備份。

將 GCS 備份遷移至 Wasabi 通常能大幅降低儲存成本，同時不影響資料存取的便利性。

---

**相關指南：**

- [使用 RcloneView 管理 Scaleway Object Storage](https://rcloneview.com/support/blog/manage-scaleway-object-storage-cloud-sync-rcloneview)
- [使用 RcloneView 將 Wasabi 遷移至 Cloudflare R2](https://rcloneview.com/support/blog/migrate-wasabi-to-cloudflare-r2-rcloneview)
- [使用 RcloneView 自動化每日雲端備份](https://rcloneview.com/support/blog/automate-daily-cloud-backups-with-rcloneview)

<CloudSupportGrid />
