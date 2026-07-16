---
slug: mount-hetzner-storage-box-sync-cloud-rcloneview
title: "使用 RcloneView 將 Hetzner Storage Box 掛載為本機磁碟並同步至任何雲端"
authors:
  - tayson
description: "像本機資料夾一樣存取您的 Hetzner Storage Box——透過 SFTP 掛載、以視覺化介面瀏覽檔案，並使用 RcloneView 同步或備份至 AWS S3、Google Drive 或任何雲端。"
keywords:
  - hetzner storage box mount
  - hetzner storage box sync
  - hetzner storage box backup
  - hetzner sftp mount local drive
  - hetzner storage box rclone
  - hetzner storage box gui
  - hetzner to s3
  - hetzner cloud backup
  - hetzner storage box file manager
  - mount sftp as local drive
tags:
  - RcloneView
  - hetzner
  - sftp
  - cloud-storage
  - mount
  - sync
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 使用 RcloneView 將 Hetzner Storage Box 掛載為本機磁碟並同步至任何雲端

> Hetzner Storage Box 在歐洲提供無可匹敵的每 TB 價格，但透過 FTP 或 SCP 管理檔案卻相當不便。RcloneView 能將其掛載為本機磁碟，並以視覺化方式同步至任何雲端。

Hetzner Storage Box 是歐洲最具性價比的儲存方案之一——可靠、實惠，並可透過 SFTP、FTP、SMB 與 WebDAV 存取。然而，由於沒有原生的桌面用戶端，管理檔案通常得依賴命令列工具或基本的 FTP 用戶端。RcloneView 透過 SFTP 連線改變了這一切，讓您能將 Storage Box 掛載為本機磁碟、在雙窗格檔案總管中瀏覽檔案，並同步至 AWS S3、Google Drive 或任何其他雲端。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 為什麼要搭配 RcloneView 使用 Hetzner Storage Box？

- **沒有原生桌面用戶端** — Hetzner 提供的是原始通訊協定（SFTP、FTP、SMB），但沒有同步應用程式。
- **掛載為本機磁碟** — 讓您像存取桌面上的一般資料夾一樣存取 Storage Box。
- **跨雲端同步** — 自動將 Storage Box 資料複寫至 S3、Google Drive 或 OneDrive。
- **視覺化檔案管理** — 無需使用命令列即可瀏覽、拖放、比對與整理檔案。

## 透過 SFTP 連接 Hetzner Storage Box

1. 開啟 RcloneView 並點擊 **新增遠端**。
2. 從供應商清單中選擇 **SFTP**。
3. 輸入您的 Hetzner 憑證：
   - **主機**：`uXXXXXX.your-storagebox.de`（取自您的 Hetzner Robot 面板）
   - **連接埠**：`23`（Hetzner 使用非標準的 SFTP 連接埠）
   - **使用者名稱**：您的 Storage Box 使用者名稱（例如 `u123456`）
   - **密碼**：您的 Storage Box 密碼
4. 儲存後——您的 Storage Box 目錄即可瀏覽。

<img src="/support/images/en/blog/new-remote.png" alt="Add Hetzner Storage Box via SFTP" class="img-large img-center" />

## 掛載為本機磁碟

連線後，將您的 Storage Box 掛載為本機資料夾：

1. 在檔案總管中瀏覽至您的 SFTP 遠端。
2. 右鍵點擊您想要的資料夾 → 選擇 **掛載**。
3. 選擇本機掛載點（Windows 上為磁碟機代號，Mac/Linux 上為路徑）。
4. 您的 Hetzner 儲存空間會以原生資料夾形式顯示。

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="Mount Hetzner Storage Box as local drive" class="img-large img-center" />

現在您可以開啟檔案、拖放，並使用任何桌面應用程式來處理您的 Storage Box 資料——就如同它是本機儲存空間一般。

## 瀏覽與管理檔案

雙窗格檔案總管讓您能將 Hetzner 儲存空間與任何其他遠端一併管理：

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Browse Hetzner Storage Box alongside cloud" class="img-large img-center" />

- 瀏覽資料夾階層
- 在 Hetzner 與雲端之間拖放檔案
- 建立、重新命名及刪除檔案與資料夾
- 檢視檔案大小與日期

## 同步至雲端供應商

### Hetzner → AWS S3（異地備份）

為您原本就可靠的 Hetzner 儲存空間增加一層雲端備援：

1. 建立同步工作：Hetzner SFTP → S3 儲存桶。
2. 使用[工作排程](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)設定每晚執行。
3. 使用 S3 Glacier 進行具成本效益的冷歸檔。

### Hetzner → Google Drive（團隊共享）

讓 Hetzner 資料可供 Google Workspace 使用者存取：

1. 建立複製工作：Hetzner → Google Drive 資料夾。
2. 使用[篩選規則](https://rcloneview.com/support/blog/filter-rules-selective-sync-rcloneview)僅同步特定資料夾。

### 雲端 → Hetzner（異地備份目的地）

將 Hetzner 作為您實惠的異地備份目標：

1. 建立同步工作：Google Drive → Hetzner Storage Box。
2. 設定每日排程——Hetzner 以每 TB 計價的方式讓這極具成本效益。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Run Hetzner sync job" class="img-large img-center" />

## 驗證與監控

### 資料夾比對

驗證 Hetzner 與您的雲端備份之間的同步完整性：

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare Hetzner with cloud backup" class="img-large img-center" />

### 排程自動化

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule Hetzner backup jobs" class="img-large img-center" />

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 透過 SFTP（連接埠 23）**新增 Hetzner Storage Box**。
3. **掛載**為本機磁碟，或在檔案總管中瀏覽。
4. **同步**至 S3、Google Drive 或任何其他雲端。
5. **排程**以進行自動化的每日備份。

Hetzner Storage Box 是歐洲儲存服務中最物超所值的秘密武器之一。RcloneView 為它帶來了應有的桌面用戶端——再加上多雲端同步功能。

---

**相關指南：**

- [將 SFTP 與 SMB 掛載為本機磁碟](https://rcloneview.com/support/blog/mount-sftp-smb-local-drive-rcloneview)
- [將雲端儲存掛載為本機磁碟](https://rcloneview.com/support/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive)
- [比對資料夾內容](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [工作排程](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)
- [選擇性同步的篩選規則](https://rcloneview.com/support/blog/filter-rules-selective-sync-rcloneview)

<CloudSupportGrid />
