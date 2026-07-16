---
slug: sync-nextcloud-google-drive-s3-rcloneview
title: "使用 RcloneView 將 Nextcloud 與 Google Drive、S3 及其他雲端同步"
authors:
  - tayson
description: "Nextcloud 是領先的自架雲端平台。了解如何使用 RcloneView 將 Nextcloud 同步並備份到 Google Drive、AWS S3 或 Backblaze B2。"
keywords:
  - nextcloud sync
  - nextcloud backup cloud
  - nextcloud rclone
  - nextcloud google drive
  - nextcloud s3 backup
  - nextcloud external storage
  - sync nextcloud files
  - nextcloud migration
  - nextcloud multi cloud
  - nextcloud off site backup
tags:
  - nextcloud
  - self-hosted
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 使用 RcloneView 將 Nextcloud 與 Google Drive、S3 及其他雲端同步

> Nextcloud 讓你完全掌控自己的資料。但自架也意味著自行負責備份。RcloneView 將 Nextcloud 連接到 70 多個雲端供應商,實現異地備份、遷移與多雲工作流程。

Nextcloud 是最受歡迎的自架雲端平台,被數百萬用戶用於檔案同步、協作與隱私優先的儲存。但將 Nextcloud 架設在自己的基礎設施上,意味著你必須自行負責備份、災難復原與資料遷移。RcloneView 將 Nextcloud 與其他雲端生態系連結起來。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 為什麼要將 Nextcloud 連接到外部雲端?

- **異地備份** — 如果你的 Nextcloud 伺服器故障,若沒有外部備份,資料將會遺失。
- **遷移** — 從 Google Drive/OneDrive 遷移到 Nextcloud,或反之。
- **混合雲** — 敏感資料放在 Nextcloud,共享資料放在 Google Drive。
- **交付客戶端** — 將成果從 Nextcloud 複製到客戶的 Dropbox 或 OneDrive。
- **成本優化** — 將舊的 Nextcloud 資料歸檔到便宜的物件儲存(B2、S3 Glacier)。

## 在 RcloneView 中設定 Nextcloud

### 透過 WebDAV 連接

1. 開啟 RcloneView 並點擊**新增遠端**。
2. 選擇 **WebDAV** 作為類型。
3. 輸入你的 Nextcloud WebDAV URL:`https://your-nextcloud.com/remote.php/dav/files/USERNAME/`
4. 輸入你的 Nextcloud 使用者名稱與應用程式密碼。

<img src="/support/images/en/blog/new-remote.png" alt="Add Nextcloud via WebDAV" class="img-large img-center" />

你的 Nextcloud 檔案現在會出現在 RcloneView 的雙窗格檔案總管中。

## 主要工作流程

### 1) Nextcloud → S3(異地備份)

排程每晚將 Nextcloud 備份到 AWS S3 或 Backblaze B2:

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule Nextcloud backup" class="img-large img-center" />

### 2) Google Drive → Nextcloud(遷移)

從 Google 遷移到自架平台:

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Migrate Google Drive to Nextcloud" class="img-large img-center" />

### 3) Nextcloud → Google Drive(共享)

將特定資料夾複製到 Google Drive,以便與外部合作夥伴協作。

### 4) 加密異地備份

在上層加入加密,實現零知識加密備份。即使是你的雲端備份供應商也無法讀取你的 Nextcloud 資料。

## 驗證備份

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify Nextcloud backup" class="img-large img-center" />

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 透過 WebDAV **新增 Nextcloud**。
3. **新增你的備份/同步目的地**。
4. **排程自動備份**。
5. **使用資料夾比對進行驗證**。

自架且安全備份。

---

**相關指南:**

- [建立同步工作](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [工作排程](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)
- [加密雲端備份](https://rcloneview.com/support/blog/encrypt-cloud-backups-crypt-remote-guide-rcloneview)

<CloudSupportGrid />
