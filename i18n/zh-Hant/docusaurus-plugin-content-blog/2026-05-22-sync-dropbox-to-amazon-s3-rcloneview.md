---
slug: sync-dropbox-to-amazon-s3-rcloneview
title: "將 Dropbox 同步至 Amazon S3 — 使用 RcloneView 進行雲端備份"
authors:
  - tayson
description: "了解如何使用 RcloneView 將 Dropbox 檔案同步並備份至 Amazon S3。透過排程、Dry Run 預覽與傳輸紀錄，設定雲端對雲端傳輸。"
keywords:
  - Dropbox to Amazon S3
  - Dropbox S3 backup
  - sync Dropbox to S3
  - RcloneView cloud-to-cloud
  - Dropbox backup to object storage
  - Amazon S3 backup
  - cloud migration rclone GUI
  - automate Dropbox backup
  - Dropbox S3 sync
  - cloud-to-cloud file transfer
tags:
  - dropbox
  - amazon-s3
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 將 Dropbox 同步至 Amazon S3 — 使用 RcloneView 進行雲端備份

> 將你的 Dropbox 檔案鏡射至 Amazon S3，取得持久且獨立管理的物件儲存 — 透過 RcloneView 的視覺化雲端對雲端同步，完全不需要使用 CLI。

許多團隊仰賴 Dropbox 進行日常協作，但同時希望在 Amazon S3 建立次要備份，以利長期保存、合規性封存，或降低對單一供應商的依賴。RcloneView 讓你可以直接將檔案從 Dropbox 同步到 S3 儲存桶，不需要讓資料經過本機電腦，也不必手動撰寫 rclone 指令。一間擁有 500 GB 專案檔案的影片製作公司,可以在幾分鐘內設定每晚執行的 Dropbox 到 S3 備份工作,並取得每次執行的完整稽核紀錄。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 將 Dropbox 與 Amazon S3 新增為遠端

首先在 RcloneView 中新增兩個服務供應商。前往 **Remote tab > New Remote**,選擇 **Dropbox** — RcloneView 會開啟瀏覽器視窗進行 OAuth 驗證。授權後,你的 Dropbox 帳號會立即出現在 Explorer 面板中,不需要 API 金鑰或手動設定 token。

對於 Amazon S3,新增第二個遠端,選擇 **Amazon S3**,輸入你的 **Access Key ID**、**Secret Access Key**,以及目標 **region code**(例如 `us-east-1`)。兩個遠端接著會以分頁形式出現在 Explorer 中,讓你在建立任何工作之前瀏覽雙方並確認資料夾結構。在建立同步工作前,右鍵點擊 Dropbox 資料夾即可查看其容量大小。

<img src="/support/images/en/blog/new-remote.png" alt="Adding Dropbox and Amazon S3 remotes in RcloneView" class="img-large img-center" />

## 設定雲端對雲端同步工作

當兩個遠端都準備就緒後,開啟 **Home tab > Sync** 以啟動 4 步驟同步精靈:

1. **Configure Storage** — 選擇你的 Dropbox 來源資料夾(例如 `/Project Files`)以及 Amazon S3 目的地儲存桶與金鑰前綴(例如 `my-backup-bucket/dropbox-mirror`)。為此工作命名清楚,以便日後在歷史紀錄中辨識。
2. **Advanced Settings** — 設定同時傳輸數量,以在速度與 API 速率限制之間取得平衡,若需要 S3 中位元組層級的資料完整性驗證,可啟用校驗碼驗證。
3. **Filtering** — 排除 `.dropbox` 系統中繼資料檔案、快取目錄,或任何你不需要放入 S3 的檔案類型。預先定義的篩選類別(Image、Video、Document)可為常見篩選情境提供快速捷徑。
4. **Schedule (PLUS license)** — 設定 crontab 格式的排程,以便每晚自動執行。排程介面可讓你模擬下一次執行時間,以便在儲存前確認時間設定是否正確。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring a Dropbox to Amazon S3 cloud-to-cloud sync job in RcloneView" class="img-large img-center" />

## 在首次正式同步前先執行 Dry Run

在進行第一次正式傳輸之前 — 特別是當你的 S3 儲存桶中已有部分資料時 — 建議使用 **Dry Run** 功能。Dry Run 會模擬整個同步過程,並準確顯示哪些檔案會被複製、哪些檔案(如果有)會從目的地被刪除,而不會實際做出任何變更。這項預覽可以在錯誤的來源路徑或非預期的刪除動作影響到你的 S3 儲存桶之前就先發現問題。

當你對 dry-run 的結果感到滿意後,在 Job Manager 中點擊 **Run** 以啟動實際的同步。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a Dropbox to Amazon S3 sync job in RcloneView Job Manager" class="img-large img-center" />

## 監控傳輸並檢視工作歷史紀錄

工作執行期間,RcloneView 底部的 **Transferring** 分頁會顯示即時進度:檔案名稱、傳輸速度,以及已傳輸的總位元組數。檔案會直接在 Dropbox 與 S3 之間傳輸,不會經過你的本機工作站,因此顯示的速度反映的是雲端頻寬,而非你本機的網路連線。

每次同步完成後,**Job History** 分頁會記錄開始時間、持續時間、狀態(Completed / Errored / Canceled)以及傳輸的總資料量。對於重視合規性的工作流程,這份紀錄提供了必要的文件證明,可確認排程備份是否準時且無錯誤地完成。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history log for Dropbox to Amazon S3 backup runs in RcloneView" class="img-large img-center" />

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 透過 **Remote tab > New Remote > Dropbox** 新增 Dropbox,並透過瀏覽器 OAuth 流程完成驗證。
3. 透過 **Remote tab > New Remote > Amazon S3** 新增 Amazon S3,輸入你的 Access Key ID、Secret Access Key 與 region。
4. 開啟 **Home tab > Sync**,選擇 Dropbox 作為來源、S3 作為目的地,執行 dry-run 預覽,然後儲存並排程以進行自動化的每晚備份。

你的 Dropbox 檔案將在 Amazon S3 上擁有持久且獨立管理的備份 — 依照你設定的排程執行,並保有每一次傳輸的完整歷史紀錄。

---

**相關指南:**

- [使用 RcloneView 將 OneDrive 遷移至 Amazon S3](https://rcloneview.com/support/blog/migrate-onedrive-to-amazon-s3-rcloneview)
- [管理 Amazon S3 — 使用 RcloneView 進行雲端同步與備份](https://rcloneview.com/support/blog/manage-amazon-s3-cloud-sync-backup-rcloneview)
- [使用 RcloneView 將 Google Drive 增量備份至 Amazon S3](https://rcloneview.com/support/blog/incremental-backup-google-drive-to-amazon-s3)

<CloudSupportGrid />
