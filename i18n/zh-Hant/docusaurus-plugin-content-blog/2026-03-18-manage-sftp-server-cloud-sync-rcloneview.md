---
slug: manage-sftp-server-cloud-sync-rcloneview
title: "將任何 SFTP 伺服器連接至 RcloneView — 讓遠端伺服器與雲端儲存同步"
authors:
  - tayson
description: "SFTP 是 Linux 伺服器、VPS 與主機代管上安全檔案存取的標準協定。將任何 SFTP 伺服器連接至 RcloneView，即可與 Google Drive、S3 或超過 70 種雲端服務同步。"
keywords:
  - sftp cloud sync
  - sftp to google drive
  - sftp backup tool
  - sftp file manager gui
  - sftp to s3 sync
  - ssh file transfer cloud
  - sftp cloud backup
  - sftp gui client
  - sftp remote manager
  - linux server cloud sync
tags:
  - sftp
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 將任何 SFTP 伺服器連接至 RcloneView — 讓遠端伺服器與雲端儲存同步

> 每一台 Linux 伺服器、VPS 與網頁主機都支援 SFTP。RcloneView 能將任何 SFTP 端點轉換為可管理的遠端，讓你瀏覽、同步至雲端儲存，並排程自動備份。

SFTP（SSH File Transfer Protocol）是遠端伺服器上安全檔案存取的通用協定。無論是網頁伺服器、開發用主機、VPS 還是專用伺服器，幾乎都支援 SFTP。RcloneView 可連接任何 SFTP 伺服器，並將其與你的雲端帳戶並列管理——以視覺化方式瀏覽伺服器檔案、同步至 S3 或 Google Drive，並排程自動備份。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 新增 SFTP 遠端

<img src="/support/images/en/blog/new-remote.png" alt="Add SFTP remote" class="img-large img-center" />

輸入伺服器主機名稱、連接埠（預設為 22）、使用者名稱，並選擇密碼或 SSH 金鑰驗證方式進行設定。伺服器的檔案系統會立即顯示於檔案總管中。

## 主要工作流程

### 將網頁伺服器備份至雲端

將網頁伺服器的 `/var/www` 或 `/home` 目錄同步至 S3 或 Google Drive：

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="SFTP server to cloud" class="img-large img-center" />

### 排程伺服器備份

自動化每晚將伺服器備份至雲端儲存：

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule SFTP backup" class="img-large img-center" />

### 在伺服器之間遷移

要搬遷到新伺服器嗎？在其中一個面板開啟舊伺服器的 SFTP，另一個面板開啟新伺服器，即可直接傳輸。

### 同步開發檔案

透過雲端儲存作為中介，讓本機開發環境與遠端伺服器保持同步。

### 驗證備份

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify SFTP backup" class="img-large img-center" />

## SSH 金鑰驗證

對於自動化備份，建議使用 SSH 金鑰驗證而非密碼。在遠端設定中配置金鑰，即可實現免密碼、安全的連線。

## 效能建議

- 在速度較慢的連線上進行大量文字檔案傳輸時，**啟用壓縮**
- 在共享主機環境下，將**同時傳輸數量限制**在 2-4 個
- **排除暫存檔案**——過濾掉 `.cache`、`node_modules`、`__pycache__`
- **排程於離峰時段**執行，以避免影響伺服器效能

## 快速上手

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. **新增你的 SFTP 伺服器**作為遠端。
3. 在雙面板檔案總管中**瀏覽伺服器檔案**。
4. **同步至雲端**並排程備份。

只要支援 SSH，RcloneView 就能管理它。

---

**相關指南：**

- [將 SFTP/SMB 掛載為本機磁碟](https://rcloneview.com/support/blog/mount-sftp-smb-local-drive-rcloneview)
- [連接 WebDAV 伺服器](https://rcloneview.com/support/blog/connect-webdav-server-cloud-sync-rcloneview)
- [將 FTP 伺服器遷移至雲端](https://rcloneview.com/support/blog/migrate-ftp-server-to-cloud-storage-rcloneview)

<CloudSupportGrid />
