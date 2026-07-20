---
slug: manage-nextcloud-cloud-sync-backup-rcloneview
title: "管理 Nextcloud 儲存空間——使用 RcloneView 同步與備份檔案"
authors:
  - jay
description: "透過 WebDAV 將您自架或代管的 Nextcloud 實例連接至 RcloneView，享受 GUI 化的檔案管理、跨雲端同步與自動化備份。"
keywords:
  - Nextcloud RcloneView sync
  - manage Nextcloud files GUI
  - Nextcloud WebDAV RcloneView
  - Nextcloud backup cloud storage
  - sync Nextcloud to Google Drive
  - Nextcloud to S3 backup
  - self-hosted cloud sync RcloneView
  - Nextcloud file management desktop
tags:
  - RcloneView
  - nextcloud
  - cloud-storage
  - cloud-sync
  - backup
  - webdav
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 管理 Nextcloud 儲存空間——使用 RcloneView 同步與備份檔案

> 透過 WebDAV 將 RcloneView 連接至您的 Nextcloud 實例，即可管理檔案、自動化跨雲端備份，並將資料同步至 S3 或 Google Drive——一切都在簡潔的桌面 GUI 中完成。

Nextcloud 內建的同步用戶端非常適合保持本機資料夾同步，但當您需要將資料遷移至其他雲端、自動化跨供應商備份，或是想與其他儲存系統一同瀏覽 Nextcloud 檔案時，它就無能為力了。RcloneView 透過 WebDAV——Nextcloud 所提供的標準協定——與其連接，並將其視為雙窗格檔案總管中的一般雲端遠端來處理。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 透過 WebDAV 將 Nextcloud 連接至 RcloneView

Nextcloud 會在您伺服器上的標準 URL 路徑公開 WebDAV。在 RcloneView 中，前往**遠端分頁 → 新增遠端**，並選擇 **WebDAV** 作為供應商類型。輸入您的 Nextcloud WebDAV URL（通常為 `https://your-nextcloud.example.com/remote.php/dav/files/USERNAME/`）、Nextcloud 使用者名稱與密碼。將 **Vendor** 選項設為 Nextcloud，即可在 rclone WebDAV 後端啟用 Nextcloud 專用的最佳化功能。

儲存後，您的 Nextcloud 檔案會出現在總管面板中，介面與其他供應商完全相同——資料夾樹狀結構、可排序的檔案清單，以及路徑導覽列。您可以像使用 Google Drive 或 Dropbox 一樣，瀏覽、重新命名、複製、刪除，以及拖放檔案進出 Nextcloud。

<img src="/support/images/en/blog/new-remote.png" alt="Connecting Nextcloud to RcloneView via WebDAV" class="img-large img-center" />

## 將 Nextcloud 備份至 S3 或 Backblaze B2

自架的 Nextcloud 伺服器需要異地備份策略。使用 RcloneView 的工作管理員，您可以建立從 Nextcloud 遠端到 Amazon S3、Backblaze B2 或任何其他雲端供應商的同步工作。這能讓您在外部保有一份 Nextcloud 資料的備援副本，防範伺服器故障或代管供應商發生問題。

設定工作時啟用**檢查碼**（Enable Checksum）以確保資料完整性，若您只需要備份近期修改過的檔案，可使用 **Max file age** 篩選條件。若擁有 PLUS 授權，可將此工作排程為每晚執行，確保備份始終反映您 Nextcloud 資料的最新狀態。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling Nextcloud backup to S3 in RcloneView" class="img-large img-center" />

## 將 Nextcloud 檔案同步至 Google Drive 或 OneDrive

許多組織基於隱私考量在內部運行 Nextcloud，但仍需要透過 Google Drive 或 OneDrive 對外分享特定檔案以進行協作。RcloneView 讓這個流程變得明確且可重複執行：建立從特定 Nextcloud 資料夾到 Google Drive 共用雲端硬碟或 OneDrive 資料夾的複製或同步工作，並在需要發布更新時排程執行。

這種模式常見於將 Nextcloud 用作內部文件管理系統、並以 Google Drive 作為對外協作層的團隊。資料夾比對功能可讓您在每次同步前後驗證 Nextcloud 與 Google Drive 的副本是否一致。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Syncing Nextcloud files to Google Drive using RcloneView" class="img-large img-center" />

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 在**遠端分頁**中，新增您的 Nextcloud WebDAV URL 作為新遠端。
3. 在雙窗格總管中，與其他雲端供應商一同瀏覽 Nextcloud 檔案。
4. 建立排程備份工作至 S3 或 Backblaze B2，以提供異地防護。

無論是個人伺服器、代管方案，還是企業部署，RcloneView 都能為您的 Nextcloud 實例帶來完整的桌面管理能力。

---

**相關指南：**

- [使用 RcloneView 透過 WebDAV 備份 Nextcloud](https://rcloneview.com/support/blog/backup-nextcloud-webdav-with-rcloneview)
- [使用 RcloneView 將 Nextcloud 同步至 Backblaze B2](https://rcloneview.com/support/blog/sync-nextcloud-to-backblaze-b2-rcloneview)
- [使用 RcloneView 將 Nextcloud 遷移至 Google Drive](https://rcloneview.com/support/blog/migrate-nextcloud-to-google-drive-rcloneview)

<CloudSupportGrid />
