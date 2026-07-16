---
slug: rcloneview-truenas-cloud-backup-sync
title: "在 TrueNAS 上執行 RcloneView，實現雲端備份與多雲同步"
authors:
  - tayson
description: "TrueNAS 專為本機儲存而生。加入 RcloneView 將其延伸至雲端 — 將資料集備份到 S3、將儲存池與 Google Drive 同步，並直接從您的 NAS 管理多雲儲存。"
keywords:
  - truenas cloud backup
  - truenas rclone
  - truenas cloud sync
  - truenas s3 backup
  - truenas google drive
  - truenas offsite backup
  - truenas rcloneview
  - truenas cloud storage
  - freenas cloud sync
  - truenas multi cloud
tags:
  - nas
  - platform
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 在 TrueNAS 上執行 RcloneView，實現雲端備份與多雲同步

> TrueNAS 憑藉 ZFS 提供堅若磐石的本機儲存。但單靠本機儲存並不能算是備份策略。加入 RcloneView，透過視覺化檔案管理員將您的 NAS 資料集同步至雲端。

TrueNAS（前身為 FreeNAS）是最受歡迎的 NAS 作業系統之一,以 ZFS 驅動的資料完整性著稱。但 ZFS 只能防範磁碟故障,無法防範火災、竊盜、勒索軟體或整個站點的災難。要達到真正的資料保護,您需要異地備份。RcloneView 為您的 TrueNAS 環境加入視覺化雲端管理功能,讓您輕鬆將資料集同步至 70 多個雲端供應商。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 為什麼選擇 TrueNAS + RcloneView？

TrueNAS 內建基本的 Cloud Sync Tasks 功能,但範圍有限且難以排除問題。RcloneView 提供:

- **視覺化檔案瀏覽** — 在您的 TrueNAS 檔案旁並列顯示雲端儲存
- **70 多個雲端供應商** — 遠多於 TrueNAS Cloud Sync 原生支援的數量
- **資料夾比對** — 驗證備份是否完整且正確
- **工作排程** — 具備監控功能的彈性排程
- **加密備份** — 使用 crypt 遠端實現零知識加密

## 部署選項

### Docker 容器（建議）

在 TrueNAS SCALE 上以 Docker 容器執行 RcloneView。這是最乾淨的做法 — 與主機系統隔離,且易於更新。

### 直接安裝

在 TrueNAS SCALE（基於 Linux）上,您可以直接安裝 RcloneView。TrueNAS CORE（基於 FreeBSD）則應透過 VM 或 jail 使用 Docker 方式。

## 主要工作流程

### 將資料集備份到 S3 或 B2

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="TrueNAS to cloud backup" class="img-large img-center" />

在其中一個窗格瀏覽您的 TrueNAS 資料集,另一個窗格瀏覽雲端儲存。建立同步工作,將重要資料集備份到 Backblaze B2、AWS S3 或 Wasabi。

### 排程每夜備份

設定自動化的每夜備份,讓您的雲端副本保持最新:

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule TrueNAS backup" class="img-large img-center" />

### 驗證備份完整性

ZFS 校驗和保護本機資料。使用資料夾比對功能,驗證雲端備份是否與您的 NAS 相符:

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify TrueNAS backup" class="img-large img-center" />

### 上傳前先加密

使用 crypt 遠端保護敏感的 NAS 資料。您的備份供應商無法讀取這些檔案 — 只有您掌握加密金鑰。

### 多雲備援

同時備份到兩個或更多供應商。若其中一個供應商發生中斷,您的資料在另一個供應商上依然安全。

## 建議的備份策略

| 資料類型 | 雲端層級 | 排程 |
|-----------|-----------|----------|
| 重要文件 | S3 Standard | 每 6 小時 |
| 媒體庫 | Backblaze B2 | 每夜 |
| 歸檔資料 | S3 Glacier | 每週 |

## 開始使用

1. **安裝 RcloneView**：透過 Docker 在 TrueNAS SCALE 上安裝。
2. **新增您的雲端帳戶**：在遠端管理員中新增。
3. **建立備份工作**：針對重要資料集建立。
4. **排程並驗證**：使用資料夾比對功能。

ZFS 在本機保護您的資料。RcloneView 則在其他所有地方保護它。

---

**相關指南：**

- [在 Docker 中執行 RcloneView](https://rcloneview.com/support/blog/run-rcloneview-docker-container-cloud-sync)
- [將 NAS 備份到多個雲端](https://rcloneview.com/support/blog/backup-nas-to-multiple-clouds-rcloneview)
- [加密雲端備份](https://rcloneview.com/support/blog/encrypt-cloud-backups-crypt-remote-guide-rcloneview)

<CloudSupportGrid />
