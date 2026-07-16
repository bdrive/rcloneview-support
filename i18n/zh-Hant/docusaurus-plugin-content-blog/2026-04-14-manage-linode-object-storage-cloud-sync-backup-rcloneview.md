---
slug: manage-linode-object-storage-cloud-sync-backup-rcloneview
title: "管理 Linode Object Storage — 使用 RcloneView 同步與備份檔案"
authors:
  - tayson
description: "將 Linode Object Storage 連接到 RcloneView，透過 GUI 管理相容於 S3 的儲存桶。無需 CLI 指令即可跨區域同步、備份與傳輸檔案。"
keywords:
  - Linode Object Storage RcloneView
  - Linode 雲端儲存同步
  - Linode 備份 GUI
  - Akamai 雲端儲存管理
  - rclone Linode Object Storage
  - Linode S3 相容儲存
  - Linode 檔案傳輸工具
  - Linode 雲端備份自動化
tags:
  - RcloneView
  - linode
  - cloud-storage
  - cloud-sync
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 管理 Linode Object Storage — 使用 RcloneView 同步與備份檔案

> RcloneView 透過相容於 S3 的 API 連接 Linode Object Storage，為開發者與 DevOps 團隊提供視覺化檔案管理工具，管理其 Linode 儲存桶時無需接觸 CLI。

Linode Object Storage（現為 Akamai Cloud 的一部分）是與 Linode 運算平台緊密整合、相容於 S3 的物件儲存服務。在 Linode Linodes 上執行應用程式的團隊，通常會將靜態資源、資料庫備份與部署成品儲存於 Object Storage 中。RcloneView 的 S3 後端可無縫連接，為您提供瀏覽儲存桶、執行排程同步，以及在 Linode 各區域之間或與其他服務商之間遷移資料的視覺化介面。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 將 Linode Object Storage 連接到 RcloneView

Linode Object Storage 使用相容於 S3 的 API。在 RcloneView 中，前往 **Remote tab → New Remote → Amazon S3 Compatible**，選擇 **Other**，或手動設定以下項目：

- **Access Key** — 於 Linode Cloud Manager 的 Object Storage → Access Keys 中產生
- **Secret Key** — 僅在建立時顯示一次
- **Endpoint** — 依區域而異，例如 `us-east-1.linodeobjects.com` 或 `eu-central-1.linodeobjects.com`

儲存後，您的 Linode 儲存桶會出現在 Explorer 面板中。您可以瀏覽物件、以拖放方式上傳檔案、將選取的物件下載至本機儲存空間，並使用右鍵選單執行標準檔案操作。

<img src="/support/images/en/blog/new-remote.png" alt="Configuring Linode Object Storage as an S3 remote in RcloneView" class="img-large img-center" />

## 使用排程工作自動化 Linode 備份

常見的工作流程如下：Linode 伺服器會產生應用程式日誌、資料庫傾印檔與使用者上傳的檔案，這些檔案需要定期備份至次要位置。使用 RcloneView 的 Job Manager，建立從 Linode Object Storage 儲存桶到 Backblaze B2 或 Amazon S3 的排程同步工作，以提供跨服務商的備援。

將同步設定為每日凌晨 4:00 執行，並將並行傳輸數設為 8，以最大化傳輸量。啟用校驗碼驗證，以確認跨服務商的資料完整性。Job History 分頁會記錄每次執行的狀態、檔案數量、傳輸大小與耗時 — 這對於在受規範的環境中證明備份合規性相當有用。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling automated Linode Object Storage backup jobs in RcloneView" class="img-large img-center" />

## 跨區域與跨服務商傳輸

Linode Object Storage 提供多個區域（美國、歐洲、日本、澳洲）。當您需要為了地理備援，將儲存桶從 `us-east-1` 複製到 `eu-central-1` 時，可在 RcloneView 中設定兩個 Linode 遠端（每個區域各一個），並在兩者之間建立同步工作。這是完全的雲端對雲端傳輸 — 不需要本機暫存，RcloneView 會在支援的情況下，透過 rclone 的伺服器端複製機制來處理。

若要將資料完全從 Linode Object Storage 遷移至其他服務商（例如遷移到 Cloudflare R2 以達成零出口費用），做法相同：將兩者皆新增為遠端，並建立一次性的同步工作。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cross-region Linode Object Storage transfer in RcloneView" class="img-large img-center" />

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 在 Linode Cloud Manager 中產生 Object Storage 存取金鑰。
3. 在 RcloneView 中使用您的 Linode 憑證與端點新增一個相容於 S3 的遠端。
4. 在 Job Manager 中建立同步工作，將備份自動化至您偏好的次要儲存空間。

透過 RcloneView 管理的 Linode Object Storage，將成為您雲端基礎架構中受良好監控的一環 — 具備排程備份、跨區域複製，以及完整的稽核軌跡。

---

**相關指南：**

- [使用 RcloneView 將 Linode Object Storage 同步至 S3 與 Google Drive](https://rcloneview.com/support/blog/sync-linode-object-storage-s3-google-drive-rcloneview)
- [使用 RcloneView 管理 Cloudflare R2 雲端同步](https://rcloneview.com/support/blog/manage-cloudflare-r2-cloud-sync-rcloneview)
- [使用 RcloneView 集中管理 S3、Wasabi 與 R2](https://rcloneview.com/support/blog/centralize-s3-wasabi-r2-with-rcloneview)

<CloudSupportGrid />
