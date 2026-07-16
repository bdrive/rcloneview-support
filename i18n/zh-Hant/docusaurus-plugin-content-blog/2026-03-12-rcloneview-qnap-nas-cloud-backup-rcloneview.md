---
slug: rcloneview-qnap-nas-cloud-backup-rcloneview
title: "在 QNAP NAS 上使用 RcloneView — 為您的 NAS 提供雲端備份與多雲端同步"
authors:
  - tayson
description: "QNAP NAS 使用者可利用 RcloneView 將資料備份至 S3、B2、Google Drive 等雲端儲存。了解如何從 QNAP NAS 連接、同步並自動化備份。"
keywords:
  - qnap cloud backup
  - qnap nas rclone
  - qnap cloud sync
  - qnap s3 backup
  - qnap google drive sync
  - qnap multi cloud
  - qnap nas cloud storage
  - qnap backup tool
  - qnap rcloneview
  - qnap automated backup
tags:
  - qnap
  - nas
  - platform
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 在 QNAP NAS 上使用 RcloneView — 為您的 NAS 提供雲端備份與多雲端同步

> QNAP NAS 裝置會將您最重要的資料儲存在本機。但僅有本機儲存代表僅有本機風險——硬體故障、火災、竊盜或水災都可能讓一切化為烏有。透過 RcloneView 進行雲端備份，可利用 70 多個雲端服務供應商為資料提供異地保護。

QNAP NAS 透過 HBS 3（Hybrid Backup Sync）提供內建的雲端同步功能，但其雲端服務供應商支援相較於 rclone 的 70 多個供應商而言相當有限。RcloneView 執行於連接至您的 QNAP 的電腦或專用裝置上，讓您能夠存取 rclone 支援的每一個供應商——並額外提供視覺化管理、資料夾比對與批次工作功能。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 將 QNAP 連接至 RcloneView

### 透過網路共用（SMB/CIFS）

從執行 RcloneView 的電腦存取您的 QNAP 共用資料夾。將您的 QNAP 共用項目對應為網路磁碟機，然後在 RcloneView 工作中將其用作本機來源。

### 透過 SFTP

將您的 QNAP 新增為 SFTP 遠端：

1. 在您的 QNAP 上啟用 SFTP（控制台 → 網路與檔案服務 → Telnet/SSH）。
2. 在 RcloneView 中使用您的 QNAP IP 位址與憑證新增一個 SFTP 遠端。

<img src="/support/images/en/blog/new-remote.png" alt="Add QNAP NAS as remote" class="img-large img-center" />

## 備份工作流程

### QNAP → Backblaze B2

以每月每 TB 6 美元的價格實現經濟實惠的異地備份：

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Backup QNAP to B2" class="img-large img-center" />

### QNAP → AWS S3

為關鍵業務資料提供企業級的持久性保障。

### QNAP → Google Drive

透過 Google Drive 讓 NAS 檔案便於協作存取。

### 排程夜間備份

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule QNAP backup" class="img-large img-center" />

## 驗證備份

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify QNAP backup" class="img-large img-center" />

## QNAP HBS 3 與 RcloneView 比較

| 功能 | QNAP HBS 3 | RcloneView |
|---------|-----------|------------|
| 雲端服務供應商 | 約 15 個 | 70 多個 |
| 可直接在 NAS 上執行 | ✅ | 需在已連接的裝置上執行 |
| 雙窗格檔案總管 | ❌ | ✅ |
| 資料夾比對 | ❌ | ✅ |
| 批次工作 | ❌ | ✅ |
| 通知 | 電子郵件 | Slack/Discord/Telegram |
| 加密遠端 | 有限 | ✅（crypt） |

## 快速上手

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 透過網路共用或 SFTP **連接至 QNAP**。
3. **新增雲端備份目的地**。
4. **排程自動化備份**。
5. **使用資料夾比對進行驗證**。

您的 NAS 資料值得擁有異地保護。

---

**相關指南：**

- [在 Synology NAS 上使用 RcloneView](https://rcloneview.com/support/blog/run-rcloneview-synology-nas-docker-rcloneview)
- [建立同步工作](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [工作排程](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)

<CloudSupportGrid />
