---
slug: sync-nextcloud-to-backblaze-b2-rcloneview
title: "將 Nextcloud 同步至 Backblaze B2 — 使用 RcloneView 進行異地備份"
authors:
  - tayson
description: "使用 RcloneView 將自架 Nextcloud 資料備份至 Backblaze B2。透過 WebDAV 與 App Key 連線，並排程自動化異地備份。"
keywords:
  - Nextcloud Backblaze B2 backup
  - Nextcloud offsite backup RcloneView
  - Nextcloud WebDAV sync B2
  - self-hosted Nextcloud backup
  - Backblaze B2 Nextcloud cloud backup
  - automated Nextcloud backup
  - Nextcloud disaster recovery
  - RcloneView WebDAV backup
tags:
  - RcloneView
  - nextcloud
  - backblaze-b2
  - backup
  - cloud-sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 將 Nextcloud 同步至 Backblaze B2 — 使用 RcloneView 進行異地備份

> Nextcloud 非常適合自架協作使用，但若沒有異地備份，一旦伺服器故障，就可能導致資料永久遺失——RcloneView 可自動將其同步至 Backblaze B2。

自架 Nextcloud 讓你完全掌控自己的資料，但擁有控制權也意味著要承擔責任。若伺服器損壞、遭受勒索軟體攻擊或在沒有妥善備份的情況下被淘汰，就沒有任何保障。Backblaze B2 提供價格實惠、耐用的異地物件儲存，與 Nextcloud 搭配堪稱絕配。RcloneView 透過 WebDAV 連接 Nextcloud，透過 Application Key 連接 B2，讓你能用圖形化介面設定並排程定期備份。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 透過 WebDAV 連接 Nextcloud

開啟 RcloneView，前往**遠端管理器（Remote Manager）**。點選**新增遠端（New Remote）**並選擇 **WebDAV**。Nextcloud 透過標準路徑以 WebDAV 公開其檔案。請填入：

- **URL**：`https://your-nextcloud-domain/remote.php/dav/files/your-username/`
- **Vendor**：Nextcloud
- **User**：你的 Nextcloud 使用者名稱
- **Password**：你的 Nextcloud 帳號密碼（若已啟用兩步驟驗證，則為應用程式密碼）

儲存遠端後，在檔案總管中開啟以確認 Nextcloud 檔案是否顯示出來。瀏覽幾個資料夾以驗證存取權限。

<img src="/support/images/en/blog/new-remote.png" alt="Configuring Nextcloud WebDAV remote in RcloneView" class="img-large img-center" />

## 連接 Backblaze B2

回到**遠端管理器**，點選**新增遠端**並選擇 **Backblaze B2**。在 Backblaze 主控台中，前往 **App Keys**，建立一組對你的備份儲存桶具有讀寫權限的金鑰。在 RcloneView 中輸入 **Application Key ID** 與 **Application Key**。儲存遠端後開啟以驗證是否能存取你的 B2 儲存桶。

如果尚未建立目的地儲存桶，請先建立——對於 Nextcloud 備份而言，使用專屬儲存桶（例如 `nextcloud-backup`）能讓管理更有條理。

## 設定備份工作

前往**工作（Jobs）**並點選**新增工作（New Job）**。設定如下：

- **來源（Source）**：你的 Nextcloud WebDAV 遠端，可指向根目錄或特定資料夾
- **目的地（Destination）**：你的 Backblaze B2 遠端與備份儲存桶

在工作精靈的第 2 步中，針對 Nextcloud 備份建議設定如下：

- 將**傳輸數（transfers）**設為 4（WebDAV 每個連線都有額外開銷，因此較低的並行數較為穩定）
- 啟用**校驗碼驗證（checksum verification）**以確保資料完整性
- 首次執行時啟用**試跑（Dry Run）**，以便在正式執行前先檢視範圍

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Nextcloud to Backblaze B2 backup job in RcloneView" class="img-large img-center" />

## 排程自動化備份

擁有 PLUS 授權後，可在工作精靈的第 3 步使用 cron 語法新增排程。每日凌晨 1 點備份：`0 1 * * *`。每週備份：`0 1 * * 0`。RcloneView 會在排定時間於背景靜默執行工作，並將結果記錄於**工作歷史記錄（Job History）**中。

每筆工作歷史記錄會顯示：已檢查的檔案數、已傳輸的檔案數（僅重新傳送有變更的檔案）、資料量、耗時，以及任何錯誤訊息。這讓你無需手動開啟應用程式，也能快速確認每晚的備份是否成功執行。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling Nextcloud to Backblaze B2 backup in RcloneView" class="img-large img-center" />

## 備份策略注意事項

- RcloneView 的同步工作預設為增量同步——首次執行後，僅會傳輸新增或變更過的檔案
- 若希望在 B2 中保留已刪除的檔案，可考慮使用類似 **--backup-dir** 的版本控管方式
- 至於 Nextcloud 的資料庫備份，需另外處理（例如使用 mysqldump 或類似工具），但 Nextcloud 資料目錄中的所有檔案資料都能透過 WebDAV 順利同步

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 在**遠端管理器**中使用你的伺服器 URL 與帳號憑證，透過 WebDAV 連接 Nextcloud。
3. 使用你的 Application Key ID 與 Application Key 連接 Backblaze B2。
4. 建立並排程一個從 Nextcloud 到 B2 的同步工作，以實現每晚自動化的異地備份。

每晚自動執行 Nextcloud → Backblaze B2 備份，代表你的自架資料能以極低成本獲得企業級的備援保障。

---

**相關指南：**

- [使用 RcloneView 將 Nextcloud 同步至 Google Drive 與 S3](https://rcloneview.com/support/blog/sync-nextcloud-google-drive-s3-rcloneview)
- [使用 RcloneView 備份 Nextcloud WebDAV](https://rcloneview.com/support/blog/backup-nextcloud-webdav-with-rcloneview)
- [使用 RcloneView 自動化每日雲端備份](https://rcloneview.com/support/blog/automate-daily-cloud-backups-with-rcloneview)

<CloudSupportGrid />
