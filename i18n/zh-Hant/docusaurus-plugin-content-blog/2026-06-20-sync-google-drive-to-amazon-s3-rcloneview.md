---
slug: sync-google-drive-to-amazon-s3-rcloneview
title: "同步 Google Drive 到 Amazon S3 — 使用 RcloneView 自動化雲端備份"
authors:
  - jay
description: "使用 RcloneView 將 Google Drive 同步至 Amazon S3。設定自動化的雲端對雲端備份工作、排程傳輸,並在單一 GUI 中監控進度。"
keywords:
  - Google Drive to Amazon S3
  - sync Google Drive to S3
  - backup Google Drive to S3
  - RcloneView Google Drive S3
  - cloud to cloud sync
  - Amazon S3 backup
  - Google Drive backup
  - automated cloud backup
  - cloud storage migration
  - rclone Google Drive S3
tags:
  - google-drive
  - amazon-s3
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 同步 Google Drive 到 Amazon S3 — 使用 RcloneView 自動化雲端備份

> 將 Google Drive 備份到 Amazon S3,可在獨立的雲端基礎架構上建立一份獨立的資料副本 — RcloneView 讓這件事變成一次設定、無需再操心的工作流程。

Google Drive 非常適合協作,但如果只依賴它作為關鍵檔案的唯一副本,對大多數團隊來說都是不該承擔的風險。Amazon S3 提供耐用且經濟實惠的物件儲存,可作為 Google Drive 的獨立備份目的地,與其互補。透過 RcloneView 以 GUI 驅動的工作系統,管理 200 GB 共用專案檔案的內容團隊,只需幾分鐘就能建立自動化的雲端對雲端備份 — 完全不需要輸入 rclone 指令。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 在 RcloneView 中設定 Google Drive 與 Amazon S3

在建立同步工作之前,需要先設定好兩個遠端。在 RcloneView 中,點選 **Remote tab > New Remote**。對於 Google Drive,從提供者清單中選取它 — 系統會開啟瀏覽器視窗進行 OAuth 驗證。登入並授予存取權限;遠端會自動儲存,無需手動管理任何 API 金鑰。

對於 Amazon S3,選取 **Amazon S3** 作為提供者,然後輸入您的 **Access Key ID**、**Secret Access Key**,以及 S3 儲存桶所在的 **Region**(例如 `us-east-1`)。RcloneView 會將所有憑證安全地儲存在加密的本機儲存空間中。兩個遠端都儲存完成後,各自會以分頁形式出現在瀏覽面板中,即可開始瀏覽。

<img src="/support/images/en/blog/new-remote.png" alt="Adding Google Drive and Amazon S3 remotes in RcloneView" class="img-large img-center" />

## 設定雲端對雲端同步工作

點選 **Home tab > Sync** 開啟工作精靈。將 Google Drive — 或特定子資料夾,例如 `My Drive/Projects` — 設為來源,並將 S3 儲存桶的路徑前綴(例如 `my-backup-bucket/google-drive/`)設為目的地。為工作取一個具描述性的名稱,例如 `gdrive-to-s3-daily`。

在 **Advanced Settings** 中,啟用 **checksum verification**,以雜湊值而非僅以檔案大小來比對檔案 — 這能抓出因部分覆寫而大小相同但內容不同的檔案。將並行傳輸數量設定為符合您的網路頻寬;4 到 8 個並行傳輸適合大多數寬頻連線,且不會觸發 Google Drive 的速率限制。

**Filtering** 步驟可精確控制要同步的內容:如果只需要文件備份,可排除大型影片檔案;或使用 Max File Age 欄位,限制只同步過去 90 天內修改過的檔案。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring Google Drive to Amazon S3 sync job in RcloneView" class="img-large img-center" />

## 執行與監控傳輸

在第一次完整同步之前,使用內建的 **Dry Run** 功能,精確預覽哪些檔案會在目的地被複製或刪除。這在初次設定時特別有用,因為此時 S3 儲存桶是空的,您會希望在傳輸數 GB 資料之前先確認工作設定是否正確。

準備好後點選 **Run**。RcloneView 底部的 **Transferring** 分頁會即時顯示進度:速度、檔案數量與完成百分比。對於擁有數萬個檔案的大型 Google Drive 資料庫,初次同步可能需要數小時 — 之後的執行只會傳輸有變動的檔案,速度會快上許多。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitoring Google Drive to S3 transfer progress in RcloneView" class="img-large img-center" />

## 排程每日自動備份

擁有 **PLUS license** 後,在 **Job Manager** 中開啟該工作,並使用 cron 風格介面新增排程 — 例如每天凌晨 1 點執行。**Simulate Schedule** 工具可預覽接下來十次的執行時間,讓您確認備份會在正確的時間點觸發。儲存後,無論 RcloneView 視窗是否開啟,備份都會自動執行。

每次執行後,**Job History** 都會記錄執行時間、傳輸速度、檔案數量與完成狀態,讓您清楚掌握每一次從 Google Drive 推送到 S3 的備份記錄。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling automated Google Drive to Amazon S3 backup in RcloneView" class="img-large img-center" />

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 在 **Remote tab > New Remote** 中透過 OAuth 登入新增 Google Drive 遠端。
3. 使用您的 AWS Access Key ID、Secret Key 與儲存桶所在區域新增 Amazon S3 遠端。
4. 建立同步工作:來源 = Google Drive 資料夾,目的地 = S3 儲存桶路徑前綴,然後執行或排程它。

您的 Google Drive 資料現在已在 AWS 基礎架構上獨立備份完成 — 不論是意外刪除、帳號被停用,或任一平台發生服務中斷,都能受到保護。

---

**相關指南:**

- [增量備份:使用 RcloneView 將 Google Drive 備份到 Amazon S3](https://rcloneview.com/support/blog/incremental-backup-google-drive-to-amazon-s3)
- [使用 RcloneView 將 Amazon S3 儲存桶掛載為本機磁碟](https://rcloneview.com/support/blog/mount-amazon-s3-buckets-as-local-drives-rcloneview)
- [使用 RcloneView 自動化每日雲端備份](https://rcloneview.com/support/blog/automate-daily-cloud-backups-with-rcloneview)

<CloudSupportGrid />
