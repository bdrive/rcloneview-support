---
slug: rcloneview-truenas-cloud-backup
title: "使用 RcloneView 搭配 TrueNAS 進行雲端備份與同步"
authors:
  - tayson
description: "將 RcloneView 連接至 TrueNAS（CORE 或 SCALE），實現雲端備份、同步與多雲管理。以 rclone 的完整功能集取代或強化 TrueNAS 的 Cloud Sync 工作。"
keywords:
  - rcloneview truenas
  - truenas cloud backup rclone
  - truenas scale rclone gui
  - truenas core cloud sync
  - rclone truenas setup
  - truenas s3 backup rcloneview
  - truenas google drive backup
  - truenas cloud storage management
  - backup truenas to cloud
  - truenas rclone integration
tags:
  - nas
  - cloud-backup
  - platform
  - linux
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 使用 RcloneView 搭配 TrueNAS 進行雲端備份與同步

> TrueNAS 內建以 rclone 驅動的 Cloud Sync 工作功能——但其內建介面功能有限。搭配 RcloneView 與 TrueNAS 一起運作，即可解鎖 rclone 的完整功能集：多雲管理、Crypt 遠端、Bisync、篩選規則、資料夾比對等等。

TrueNAS CORE 與 SCALE 底層皆內建 rclone，用於其 Cloud Sync 工作功能。但網頁 GUI 僅開放 rclone 部分能力——供應商選項有限、沒有加密層、沒有 bisync、也無法建立跨雲工作。透過在 TrueNAS 上執行 RcloneView（可透過 Docker、虛擬機或遠端工作站），您就能取得 rclone 的完整功能集，同時仍以 TrueNAS 作為主要儲存平台。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## TrueNAS + RcloneView：兩種整合方式

### 方式一——在 TrueNAS SCALE 容器（Docker）中執行 RcloneView

TrueNAS SCALE 透過其 Apps 介面原生支援 Docker 容器。您可以將 RcloneView 作為持久性容器執行：

1. 在 TrueNAS SCALE 中，前往 **Apps → Available Applications**，或使用 **Custom App** 選項。
2. 部署 RcloneView 的 Docker 映像檔，並將磁碟區掛載指向您的 TrueNAS 資料集路徑。
3. 從瀏覽器存取 RcloneView 的網頁介面。

如此可將 RcloneView 保留在 NAS 本機上，備份工作無需另一台獨立機器即可執行。

### 方式二——在工作站上執行 RcloneView，並將 NAS 設為遠端

在您的桌面電腦上執行 RcloneView，並將您的 TrueNAS 資料集新增為遠端：

- **SMB**：在 RcloneView 中將 Windows 共用資料夾新增為本機或 SMB 遠端。
- **SFTP**：在 TrueNAS 上啟用 SFTP，並在 RcloneView 中將其新增為 SFTP 遠端。
- **NFS**：在本機掛載您的 NAS NFS 共用資料夾，並在 RcloneView 中將其視為本機路徑。

此方式設定較為簡單，且無需 Docker 相關知識即可運作。

## 從 TrueNAS 設定 SFTP

最可靠的遠端存取方式：

### 步驟一——在 TrueNAS 上啟用 SSH

在 TrueNAS 中：**System → Services → SSH → Enable**。建立一個專用使用者，並將其存取權限限制在您的備份資料集內。

### 步驟二——在 RcloneView 中將 TrueNAS 新增為 SFTP 遠端

<img src="/support/images/en/blog/new-remote.png" alt="Add TrueNAS SFTP remote in RcloneView" class="img-large img-center" />

1. 在 RcloneView 中點選 **New Remote**。
2. 選擇 **SFTP**。
3. 輸入您的 TrueNAS IP、SSH 連接埠（預設為 22）、使用者名稱，以及 SSH 金鑰或密碼。
4. 將根路徑設定為您的資料集（例如 `/mnt/tank/Backups`）。
5. 儲存。

現在 RcloneView 會將您的 TrueNAS 資料集顯示為可瀏覽的遠端。

## TrueNAS 的雲端備份工作

在 TrueNAS 可作為 SFTP 遠端存取後，您就能建立完整的備份工作：

### 將 TrueNAS 資料集備份至 S3

1. 在 RcloneView 中建立新的 **Sync** 工作。
2. 來源：`truenas-sftp:/mnt/tank/Photos/`
3. 目的地：`s3-backup:truenas-photos-backup/`
4. 啟用校驗和驗證以確保資料完整性。
5. 排程於每晚執行。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule TrueNAS to S3 backup job" class="img-large img-center" />

### 加密後備份至雲端

對於敏感資料集，可加入 Crypt 遠端層：

1. 建立一個包裹您的 S3 遠端的 Crypt 遠端。
2. 將 Crypt 遠端設定為目的地，取代原始的 S3 遠端。
3. 檔案會在離開您的 TrueNAS 之前於用戶端進行加密。

### 多雲備份

使用 RcloneView 將同一個 TrueNAS 資料集同時備份至兩個雲端供應商：

- 工作一：`truenas-sftp:/mnt/tank/` → `s3-primary:`（每日）
- 工作二：`truenas-sftp:/mnt/tank/` → `b2-secondary:`（每週）

## 相較於 TrueNAS 內建 Cloud Sync 的優勢

| 功能 | TrueNAS Cloud Sync | RcloneView |
|---------|-------------------|-----------|
| 供應商支援 | 約 20 個供應商 | 70 個以上供應商 |
| Crypt／加密層 | ✗ | ✓ |
| Bisync（雙向） | ✗ | ✓ |
| 篩選規則 | 有限 | 完整 rclone 篩選支援 |
| 資料夾比對 | ✗ | ✓ |
| 跨雲（雲端 A → 雲端 B） | ✗ | ✓ |
| 工作排程 | ✓ | ✓ |
| 即時監控 | 有限 | ✓ |

## 監控與驗證

使用 RcloneView 的 **Folder Comparison**（資料夾比對）定期驗證您的 TrueNAS 備份是否與雲端儲存一致：

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify TrueNAS backup in cloud with folder comparison" class="img-large img-center" />

將 TrueNAS 來源與雲端目的地進行比對——任何缺失或變更的檔案都會立即顯示。可排程每月執行一次驗證，作為資料完整性檢查。

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. **在 TrueNAS 上啟用 SSH**，並在 RcloneView 中將其新增為 SFTP 遠端。
3. **建立備份工作**，將 TrueNAS 資料集備份至您的雲端供應商。
4. **排程並加密**——設定每晚備份工作，並為敏感資料集加入 Crypt 遠端。

TrueNAS 是優秀的 NAS 軟體。搭配 RcloneView 使用，您將擁有一套完整、靈活的雲端備份策略，遠超出 TrueNAS 內建工具所能提供的範圍。

---

**相關指南：**

- [在 Synology NAS 上執行 RcloneView](https://rcloneview.com/support/blog/rcloneview-synology-rclone-gui)
- [在 Docker 中執行 RcloneView](https://rcloneview.com/support/blog/run-rcloneview-docker-container-cloud-sync)
- [將 NAS 備份至多個雲端](https://rcloneview.com/support/blog/backup-nas-to-multiple-clouds-rcloneview)

<CloudSupportGrid />
