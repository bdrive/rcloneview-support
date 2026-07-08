---
slug: manage-ovhcloud-object-storage-sync-rcloneview
title: "管理 OVHcloud 物件儲存——使用 RcloneView 進行同步與備份"
authors:
  - tayson
description: "使用 S3 相容憑證將 OVHcloud 物件儲存連接至 RcloneView，並將您符合 GDPR 規範的歐洲儲存桶與任何雲端服務供應商同步。"
keywords:
  - OVHcloud object storage RcloneView
  - OVHcloud S3 sync
  - OVHcloud backup rclone
  - OVHcloud cloud storage GUI
  - European GDPR cloud sync
  - OVHcloud bucket transfer
  - S3-compatible object storage
  - OVHcloud rcloneview setup
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

# 管理 OVHcloud 物件儲存——使用 RcloneView 進行同步與備份

> OVHcloud 物件儲存是一項符合 GDPR 規範、託管於歐洲的 S3 相容服務——RcloneView 使用 Access Key、Secret Key 與端點（endpoint）將其與您完整的雲端生態系統連接起來。

OVHcloud 是歐洲最大的雲端服務供應商之一，在法國、德國、英國及其他地區的多個區域提供物件儲存服務。其 S3 相容介面意味著 RcloneView 可以像連接 AWS S3 一樣連接至該服務——您只需提供憑證與端點，即可開始瀏覽、傳輸並自動化備份作業。對於有歐洲資料落地要求的組織而言，OVHcloud 結合 RcloneView 是一套實用且可稽核的解決方案。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 取得您的 OVHcloud S3 憑證

OVHcloud 透過其 **High Performance Object Storage** 服務提供 S3 相容存取。若要取得憑證，請登入 OVHcloud 控制台，開啟您的專案，並前往 **Object Storage**。在 **S3 users** 底下建立一個新使用者，並下載 Access Key 與 Secret Key。請記下您所在區域的端點——例如，Roubaix 為 `s3.rbx.io.cloud.ovh.net`，Gravelines 為 `s3.gra.io.cloud.ovh.net`。

請保留好端點網址，它標示了您的儲存桶所在的區域，且必須與您在 RcloneView 中輸入的內容相符。

<img src="/support/images/en/blog/new-remote.png" alt="Configuring OVHcloud Object Storage as a new remote in RcloneView" class="img-large img-center" />

## 將 OVHcloud 連接至 RcloneView

開啟 RcloneView，前往 **Remote Manager**，並點選 **New Remote**。從供應商清單中選擇 **S3 Compatible**，並填寫以下欄位：

- **Access Key ID**：來自 OVHcloud S3 users 頁面的金鑰
- **Secret Access Key**：對應的密鑰
- **Endpoint**：您所在區域的端點（例如 `s3.gra.io.cloud.ovh.net`）

儲存該遠端並在檔案總管中開啟。您的 OVHcloud 儲存桶會顯示於根目錄層級。進入任一儲存桶即可查看以前綴（prefix）方式組織的內容。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-to-cloud transfer between OVHcloud and another provider" class="img-large img-center" />

## 將 OVHcloud 與其他雲端服務供應商同步

在 RcloneView 中開啟第二個面板，指向任何其他遠端——Google Drive、Backblaze B2、另一個 S3 相容供應商，或本機資料夾。您可以在面板之間拖放檔案，或右鍵點選以複製整個目錄。若要進行大型儲存桶遷移，**Job** 系統會更為可靠：設定來源與目的地，於步驟 2 中設定並行數與頻寬限制，並可選擇啟用校驗和（checksum）驗證。

OVHcloud 的 S3 API 支援大型物件的分段上傳（multipart uploads），當 RcloneView 偵測到檔案大小超過特定閾值時，會自動運用此功能。這可確保大型影片檔案、資料庫傾印檔或封存檔能可靠地傳輸，而不會受限於單次請求的大小限制。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Real-time monitoring of OVHcloud transfer progress" class="img-large img-center" />

## 排程定期備份

擁有 PLUS 授權後，您可以排程 OVHcloud 同步工作自動執行。前往 **Jobs**，設定該工作，並於步驟 3 中設定 cron 排程——例如 `0 3 * * *` 表示每晚凌晨 3 點同步一次。這對於備份流程特別有用，因為儲存於其他位置的正式環境資料，需要在 OVHcloud 中保留一份副本，以符合歐洲資料落地規範。

**Job History** 會記錄每一次執行狀況：已傳輸的檔案、資料量、傳輸速度以及任何錯誤。若某次夜間工作失敗，日誌項目會確切顯示是哪些檔案造成問題，讓您能迅速排查。

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 在 OVHcloud 控制台中建立一個 S3 使用者，並記下 Access Key、Secret Key 與所在區域的端點。
3. 在 RcloneView 中開啟 **Remote Manager**，點選 **New Remote**，選擇 **S3 Compatible**，並輸入您的憑證。
4. 瀏覽您的儲存桶並設定同步工作，將 OVHcloud 整合進您更廣泛的雲端策略中。

OVHcloud 的歐洲基礎架構與 RcloneView 靈活的工作系統，共同構成了符合 GDPR 意識的多雲工作流程的可靠組合。

---

**相關指南：**

- [管理 Scaleway 物件儲存——使用 RcloneView 進行雲端同步](https://rcloneview.com/support/blog/manage-scaleway-object-storage-cloud-sync-rcloneview)
- [管理 IDrive E2 雲端同步與備份](https://rcloneview.com/support/blog/manage-idrive-e2-cloud-sync-backup-rcloneview)
- [使用 RcloneView 自動化每日雲端備份](https://rcloneview.com/support/blog/automate-daily-cloud-backups-with-rcloneview)

<CloudSupportGrid />
