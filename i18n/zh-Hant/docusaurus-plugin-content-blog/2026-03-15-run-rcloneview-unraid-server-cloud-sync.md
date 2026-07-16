---
slug: run-rcloneview-unraid-server-cloud-sync
title: "在 Unraid 上執行 RcloneView — 為您的伺服器提供雲端備份與多雲同步"
authors:
  - tayson
description: "Unraid 讓家用與小型企業伺服器變得簡單易用。透過 Docker 新增 RcloneView，即可將您的 Unraid 共享資料夾同步至雲端儲存，實現異地備份與多雲管理。"
keywords:
  - unraid cloud backup
  - unraid rclone
  - unraid cloud sync
  - unraid rcloneview
  - unraid s3 backup
  - unraid google drive
  - unraid offsite backup
  - unraid docker cloud sync
  - unraid backup solution
  - unraid multi cloud
tags:
  - nas
  - docker
  - platform
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 在 Unraid 上執行 RcloneView — 為您的伺服器提供雲端備份與多雲同步

> Unraid 在本機儲存方面表現出色，但同位（parity）硬碟無法保護您免受火災、竊盜或勒索軟體的侵害。加入 RcloneView，透過視覺化檔案管理員將您的共享資料夾備份至雲端。

Unraid 是最受歡迎的家用與小型企業伺服器平台之一。其基於同位的儲存架構可防範硬碟故障，但僅有本機保護是不夠的。若要確保資料真正安全，您需要異地備份。RcloneView 以 Docker 容器的形式在 Unraid 上執行，為您的伺服器新增視覺化雲端管理與自動備份功能。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 為什麼選擇 Unraid + RcloneView？

Unraid 的 Community Apps 內含基本的 rclone 外掛，但這些外掛通常僅限命令列操作，功能也較為有限。RcloneView 提供：

- **視覺化檔案瀏覽器** — 在同一畫面中檢視您的 Unraid 共享資料夾與雲端儲存
- **70 多個雲端服務供應商** — 從您的 Unraid 伺服器連接任何雲端
- **排程備份** — 自動化異地保護
- **資料夾比對** — 驗證備份完整性
- **加密備份** — 使用 crypt 遠端保護資料隱私

## 透過 Docker 安裝

RcloneView 以 Docker 容器的形式在 Unraid 上執行。您可以透過 Community Apps 安裝，或手動設定容器。

將您的 Unraid 共享資料夾對應為磁碟區（volumes），讓 RcloneView 能夠存取您的資料。

## 主要操作流程

### 將共享資料夾備份至雲端

在一側面板開啟您的 Unraid 共享資料夾，另一側開啟雲端儲存。為重要資料建立備份工作：

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Unraid to cloud backup" class="img-large img-center" />

### 排程每晚的異地備份

設定自動備份，於伺服器閒置時每晚執行：

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule Unraid backups" class="img-large img-center" />

### 驗證備份完整性

同位機制可保護本機資料。使用資料夾比對來驗證雲端備份：

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify Unraid backup" class="img-large img-center" />

### 加密敏感資料

在資料離開您的伺服器之前，使用 crypt 遠端加密備份。您的雲端服務供應商永遠看不到未加密的資料。

### 多雲備份策略

備份至兩個服務供應商以獲得最大保護：

| 共享資料夾 | 主要備份 | 次要備份 |
|-------|---------------|-----------------|
| Documents | Google Drive | Backblaze B2 |
| Media | Backblaze B2 | Wasabi |
| Photos | Google Photos (via Drive) | S3 |
| Appdata | B2 | S3 Glacier |

## 監控您的備份

檢查工作歷程記錄，確保備份成功完成：

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Monitor backup jobs" class="img-large img-center" />

## 開始使用

1. **安裝 RcloneView** 作為 Unraid 上的 Docker 容器。
2. **對應您的共享資料夾** 為容器磁碟區。
3. **在遠端管理員中新增雲端帳戶**。
4. **為重要共享資料夾建立備份工作**。
5. **使用資料夾比對進行排程與驗證**。

同位機制可防範硬碟故障，而雲端備份則能防範其他一切風險。

---

**相關指南：**

- [在 Docker 中執行 RcloneView](https://rcloneview.com/support/blog/run-rcloneview-docker-container-cloud-sync)
- [在 TrueNAS 上執行 RcloneView](https://rcloneview.com/support/blog/rcloneview-truenas-cloud-backup-sync)
- [將 NAS 備份至多個雲端](https://rcloneview.com/support/blog/backup-nas-to-multiple-clouds-rcloneview)

<CloudSupportGrid />
