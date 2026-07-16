---
slug: manage-icedrive-cloud-sync-backup-rcloneview
title: "管理 Icedrive 雲端儲存——使用 RcloneView 進行同步與備份"
authors:
  - tayson
description: "Icedrive 提供價格實惠、介面簡潔的雲端儲存,但同步選項有限。使用 RcloneView 讓 Icedrive 與 Google Drive、S3 及其他 70 多個服務商進行同步。"
keywords:
  - icedrive sync
  - icedrive backup
  - icedrive rclone
  - icedrive file manager
  - icedrive to google drive
  - icedrive alternative sync
  - icedrive cloud management
  - icedrive multi cloud
  - icedrive transfer tool
  - icedrive desktop sync
tags:
  - RcloneView
  - cloud-storage
  - sync
  - backup
  - webdav
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 管理 Icedrive 雲端儲存——使用 RcloneView 進行同步與備份

> Icedrive 憑藉實惠的價格方案與簡潔的設計逐漸受到歡迎,但其同步功能僅限於自家應用程式。RcloneView 讓 Icedrive 得以連接更廣泛的雲端生態系統。

Icedrive 已成為一個相當有吸引力的雲端儲存選項——價格實惠、付費方案提供零知識加密,並擁有現代化的介面。然而,Icedrive 的同步與整合功能僅限於其自家的桌面與行動應用程式。如果你想將 Icedrive 與 Google Drive 同步、備份到 S3,或是與其他雲端帳戶一併管理 Icedrive,RcloneView 透過 Icedrive 的 WebDAV 支援彌補了這個缺口。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 將 Icedrive 連接到 RcloneView

Icedrive 在付費方案中支援 WebDAV 連線。將其新增為 RcloneView 中的 WebDAV 遠端:

<img src="/support/images/en/blog/new-remote.png" alt="Add Icedrive via WebDAV" class="img-large img-center" />

連接完成後,你的 Icedrive 儲存空間便會與其他雲端帳戶一同顯示在雙窗格檔案總管中。

## 為什麼要搭配 RcloneView 使用 Icedrive?

### 跨雲端同步

Icedrive 自家的應用程式只能同步到你的本機裝置。RcloneView 讓你可以直接將 Icedrive 與 Google Drive、OneDrive、S3、Dropbox 或其他任何服務商進行同步:

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Icedrive cross-cloud sync" class="img-large img-center" />

### 自動化備份

排程定期從 Icedrive 備份到次要雲端,以提供冗餘保護:

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule Icedrive backup" class="img-large img-center" />

### 多雲端管理

無需切換應用程式,即可瀏覽並管理 Icedrive 檔案以及其他所有儲存空間。

### 備份驗證

使用資料夾比對功能,確認你的 Icedrive 備份是否完整:

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify Icedrive backup" class="img-large img-center" />

## 常見工作流程

### Icedrive 作為實惠儲存空間,Google Drive 用於協作

將大型檔案與封存資料存放在 Icedrive(每 TB 費用較低)。將工作文件同步到 Google Drive,以便團隊存取。

### 將 Icedrive 備份到 B2

在 Backblaze B2 上維護一份次要備份,以防 Icedrive 發生問題。排程每晚同步可讓兩份副本保持最新。

### 遷移至或遷出 Icedrive

正打算從 Dropbox 或 Google Drive 切換到 Icedrive 嗎?透過 RcloneView 的雙窗格拖放功能,一次轉移所有檔案。

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 將 **Icedrive 新增**為 WebDAV 遠端(需要 Icedrive 付費方案)。
3. **與其他雲端帳戶一同瀏覽**。
4. 透過排程工作**進行同步與備份**。

實惠的儲存空間,無限的連接能力。

---

**相關指南:**

- [建立同步工作](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [比對資料夾內容](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [隱藏的雲端儲存成本](https://rcloneview.com/support/blog/hidden-cloud-storage-costs-save-money-rcloneview)

<CloudSupportGrid />
