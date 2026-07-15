---
slug: run-rcloneview-synology-nas-docker-rcloneview
title: "在 Synology NAS 上執行 RcloneView — 從您的 NAS 進行雲端備份與同步"
authors:
  - tayson
description: "將您的 Synology NAS 打造成雲端備份中心。了解如何使用 RcloneView 搭配 Synology NAS 進行自動化雲端同步、備份與多雲管理。"
keywords:
  - rcloneview synology nas
  - synology cloud backup
  - synology cloud sync alternative
  - synology rclone
  - synology nas s3 backup
  - synology google drive sync
  - synology multi cloud
  - nas cloud backup tool
  - synology automated backup
  - synology nas cloud manager
tags:
  - RcloneView
  - synology
  - nas
  - backup
  - cloud-storage
  - platform
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 在 Synology NAS 上執行 RcloneView — 從您的 NAS 進行雲端備份與同步

> 您的 Synology NAS 存放著數 TB 無可取代的資料。Synology 內建的 Cloud Sync 適用於基本設定，但當您需要多雲管理、排程、資料夾比對與批次工作時 — RcloneView 能補足這些不足之處。

Synology NAS 裝置非常適合作為集中式本地儲存，但其雲端整合功能有其限制。Synology Cloud Sync 支援約 20 個雲端供應商的基本同步功能。Synology Hyper Backup 可處理備份，但缺乏多雲檔案管理能力。RcloneView 則以 70 多個雲端供應商、視覺化檔案管理與進階自動化功能，完善補齊這兩者的不足。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 為什麼在 Synology 上選擇 RcloneView？

### 超越 Synology Cloud Sync

| 功能 | Synology Cloud Sync | RcloneView |
|---------|-------------------|------------|
| 雲端供應商 | ~20 | 70+ |
| 雙窗格檔案總管 | ❌ | ✅ |
| 資料夾比對 | ❌ | ✅ |
| 雲端對雲端傳輸 | ❌ | ✅ |
| 批次工作 | ❌ | ✅ |
| Slack/Discord 通知 | ❌ | ✅ |
| 篩選規則 | 基本 | 完整 rclone 篩選器 |
| 加密遠端 | ❌ | ✅（crypt） |
| 掛載雲端硬碟 | ❌ | ✅ |
| S3 相容供應商 | 有限 | 全部支援 |

### Synology 自動偵測

RcloneView 會自動偵測您網路上的 Synology NAS 裝置：

<img src="/support/images/en/blog/synology-nas-autodection-and-connection.png" alt="Synology NAS auto-detection" class="img-large img-center" />

無需手動進行網路設定。

## 設定選項

### 選項一：在桌面電腦上執行 RcloneView，連接至 NAS

最簡單的方式。在您的 Windows/Mac/Linux 桌面電腦上執行 RcloneView：

1. 將您的 Synology NAS 新增為遠端（自動偵測或透過 SFTP/WebDAV）。
2. 新增您的雲端目的地（S3、B2、Google Drive 等）。
3. 建立 NAS 與雲端之間的同步/複製工作。
4. 排程工作以自動執行。

這種方式非常適合家庭使用者與小型辦公室。

### 選項二：在專用機器上執行 RcloneView

使用 Raspberry Pi 或舊筆電作為專用的備份控制器：

1. 在專用機器上安裝 RcloneView。
2. 透過網路掛載連接至 Synology NAS。
3. 設定並排程所有備份工作。
4. 保持全天候（24/7）執行。

## 備份工作流程

### NAS → 雲端（異地備份）

最關鍵的工作流程。將您的 NAS 備份至雲端儲存：

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Backup NAS to cloud" class="img-large img-center" />

推薦目標：

| NAS 資料 | 雲端目標 | 原因 |
|----------|-------------|-----|
| 相片與影片 | Backblaze B2 | 便宜，每 TB $6 |
| 文件 | Google Drive | 易於存取、可搜尋 |
| 商業資料 | AWS S3 | 耐久性高、企業級 |
| 全部資料（加密） | 任何供應商 + crypt | 零知識備份 |

### 雲端 → NAS（本地鏡像）

保留雲端資料的本地副本以便快速存取：

```
Google Drive → NAS/CloudMirror/GoogleDrive/
OneDrive → NAS/CloudMirror/OneDrive/
```

### NAS → NAS（異地站點備份）

若您在兩個地點都有 NAS 裝置，可透過 RcloneView 以雲端供應商作為中介儲存，在兩者之間進行同步。

## 排程自動化備份

設定每晚的 NAS 備份：

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule NAS cloud backup" class="img-large img-center" />

### 建議排程

| 工作 | 頻率 | 時間 |
|-----|-----------|------|
| 關鍵資料 → B2 | 每晚 | 凌晨 2:00 |
| 相片 → Google Drive | 每晚 | 凌晨 3:00 |
| 完整 NAS → S3 | 每週 | 週六午夜 |
| 驗證（比對） | 每週 | 週日早上 6:00 |

## 驗證備份

比對 NAS 內容與雲端備份：

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify NAS backup against cloud" class="img-large img-center" />

## 加密的 NAS 備份

使用 crypt 遠端在上傳至雲端儲存前，對您的 NAS 資料進行加密。雲端供應商將永遠無法看到您未加密的檔案。

## 適用於 NAS 管理員的批次工作

自動化您整個 NAS 備份流程：

1. 複製 /photos → B2。
2. 複製 /documents → Google Drive。
3. 複製 /business → S3（加密）。
4. 比對以上三項。
5. 透過 Slack 通知。

全部整合於單一排程批次工作中。

## 開始使用

1. **下載 RcloneView**，前往 [rcloneview.com](https://rcloneview.com/src/download.html)。
2. **連接至您的 Synology NAS**（自動偵測）。
3. **新增雲端儲存遠端**。
4. **建立並排程備份工作**。
5. **透過資料夾比對進行驗證**。

您的 NAS 資料十分珍貴，請為它建立一道異地安全防線。

---

**相關指南：**

- [建立同步工作](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [工作排程](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)
- [比對資料夾內容](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [加密雲端備份](https://rcloneview.com/support/blog/encrypt-cloud-backups-crypt-remote-guide-rcloneview)

<CloudSupportGrid />
