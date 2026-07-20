---
slug: manage-scaleway-object-storage-cloud-sync-rcloneview
title: "管理 Scaleway 物件儲存——使用 RcloneView 進行雲端同步與備份"
authors:
  - tayson
description: "使用 S3 相容憑證將 Scaleway 物件儲存連接到 RcloneView，快速將您的歐洲雲端儲存桶與其他任何供應商同步。"
keywords:
  - Scaleway object storage RcloneView
  - Scaleway S3 compatible sync
  - Scaleway cloud backup
  - Scaleway rclone GUI
  - European cloud storage sync
  - Scaleway bucket transfer
  - S3 compatible cloud sync
  - Scaleway rcloneview setup
tags:
  - RcloneView
  - s3-compatible
  - object-storage
  - cloud-sync
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 管理 Scaleway 物件儲存——使用 RcloneView 進行雲端同步與備份

> Scaleway 物件儲存是一項與 S3 相容的歐洲雲端服務——只需使用 Access Key、Secret Key 與端點 URL，即可在幾分鐘內將其連接至 RcloneView。

Scaleway 是一家法國雲端供應商，在多個歐洲地區提供與 S3 相容的物件儲存服務。對於需要符合 GDPR 規範且價格具競爭力的儲存服務的團隊而言，這是一個穩健的選擇。RcloneView 支援任何與 S3 相容的供應商，這代表您可以連接 Scaleway、瀏覽您的儲存桶，並與您所有其他雲端遠端一同設定同步工作——完全無需使用 CLI。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 取得您的 Scaleway 憑證

在 RcloneView 中連接之前，您需要從 Scaleway 主控台取得 **Access Key** 與 **Secret Key**。登入 console.scaleway.com，前往您的專案或組織下的 **Credentials**，並產生一組新的 API 金鑰。請記下 Secret Key——它只會顯示一次。同時記下您所在地區的端點，格式為 `s3.{region}.scw.cloud`（例如阿姆斯特丹為 `s3.nl-ams.scw.cloud`，巴黎則為 `s3.fr-par.scw.cloud`）。

Access Key、Secret Key 與端點這三項資訊，就是您在 RcloneView 中設定 Scaleway 所需的一切。

<img src="/support/images/en/blog/new-remote.png" alt="Adding a Scaleway S3-compatible remote in RcloneView" class="img-large img-center" />

## 將 Scaleway 連接至 RcloneView

開啟 RcloneView 並前往 **Remote Manager**。點擊 **New Remote**，並從供應商清單中選擇 **S3 Compatible**。在設定表單中輸入：

- **Provider**：Other (S3-compatible)
- **Access Key ID**：您的 Scaleway Access Key
- **Secret Access Key**：您的 Scaleway Secret Key
- **Endpoint**：您所在地區的端點（例如 `s3.nl-ams.scw.cloud`）

若系統要求填寫地區欄位，可留空或輸入 Scaleway 的地區代碼。儲存遠端後，它會顯示在您的 Remote Manager 中。點擊 **Open** 即可在 File Explorer 中瀏覽您的 Scaleway 儲存桶。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitoring a Scaleway transfer in real time" class="img-large img-center" />

## 瀏覽儲存桶並傳輸檔案

File Explorer 會在最上層顯示您的 Scaleway 儲存桶。進入任一儲存桶即可查看其中的物件與資料夾前綴。您可以選取檔案與目錄，再將它們複製或移動到第二個面板中開啟的另一個遠端——無論是 AWS S3、Backblaze B2 或本機目錄。

若要處理大型資料集，請在資料夾上按右鍵並使用 **Copy to** 或 **Move to** 來啟動批次傳輸。RcloneView 會即時顯示傳輸進度，包括傳輸速度與預估完成時間。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Transferring files between Scaleway and another cloud" class="img-large img-center" />

## 設定排程同步工作

對於 Scaleway 與其他供應商之間的自動備份或定期資料管線，**Job** 系統可以可靠地處理這項任務。前往 **Jobs**，點擊 **New Job**，並將 Scaleway 設定為來源或目的地。在工作的進階選項中，您可以設定頻寬限制、控制傳輸並行數，並啟用校驗碼驗證以確認資料完整性。

擁有 PLUS 授權時，您可以使用 cron 風格的語法排程工作——例如每天凌晨 2 點將資料從另一個雲端同步至 Scaleway。工作結果會記錄在 **Job History** 中，讓您清楚掌握每次執行的傳輸筆數與任何錯誤。

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 從 Scaleway 主控台取得您的 Scaleway Access Key、Secret Key 與地區端點。
3. 開啟 **Remote Manager**，點擊 **New Remote**，選擇 **S3 Compatible**，並輸入您的憑證。
4. 瀏覽您的儲存桶，並建立同步工作以自動化與 Scaleway 之間的備份。

Scaleway 的歐洲基礎架構與 RcloneView 的多雲工作系統相輔相成，非常適合注重 GDPR 合規的工作流程。

---

**相關指南：**

- [使用 RcloneView 將 Google Cloud Storage 同步至 Wasabi](https://rcloneview.com/support/blog/sync-google-cloud-storage-to-wasabi-rcloneview)
- [管理 IDrive E2 雲端同步與備份](https://rcloneview.com/support/blog/manage-idrive-e2-cloud-sync-backup-rcloneview)
- [使用 RcloneView 進行校驗碼驗證的雲端遷移](https://rcloneview.com/support/blog/checksum-verified-cloud-migrations-rcloneview)

<CloudSupportGrid />
