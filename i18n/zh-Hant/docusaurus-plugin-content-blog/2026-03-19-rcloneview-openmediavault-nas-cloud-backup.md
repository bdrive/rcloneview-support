---
slug: rcloneview-openmediavault-nas-cloud-backup
title: "在 OpenMediaVault 上執行 RcloneView — 為您的 DIY NAS 提供雲端備份"
authors:
  - tayson
description: "OpenMediaVault 能將任何 PC 變成 NAS。透過 Docker 加入 RcloneView，將您的 OMV 共用資料夾同步至雲端儲存，實現異地備份與多雲管理。"
keywords:
  - openmediavault cloud backup
  - openmediavault rclone
  - omv cloud sync
  - openmediavault s3 backup
  - omv rcloneview
  - openmediavault offsite backup
  - omv google drive
  - openmediavault docker rclone
  - diy nas cloud backup
  - omv backup solution
tags:
  - nas
  - docker
  - platform
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 在 OpenMediaVault 上執行 RcloneView — 為您的 DIY NAS 提供雲端備份

> OpenMediaVault（OMV）讓您能用平價硬體打造強大的 NAS。但僅靠本地儲存並不安全。加入 RcloneView，將您的 NAS 資料推送至雲端，實現災難復原。

OpenMediaVault 是 DIY 玩家首選的 NAS 作業系統——可執行於舊 PC、Raspberry Pi 或專用硬體上。它提供 RAID、SMB/NFS 分享以及網頁介面。但它沒有提供的，是雲端備份。RcloneView 填補了這個缺口，以 Docker 容器的形式在 OMV 上執行，並將您的共用資料夾同步至 70 多個雲端服務供應商。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 為什麼選擇 OMV + RcloneView？

OMV 的內建功能能妥善處理本地儲存，但雲端整合功能有限。RcloneView 補足了：

- **70 多個雲端服務供應商** — Google Drive、S3、B2、Wasabi 等
- **視覺化檔案管理** — 同時瀏覽 NAS 與雲端儲存
- **排程備份** — 自動化異地保護
- **驗證** — 資料夾比對確認備份完整性
- **加密** — 使用 crypt 遠端進行私密備份

## 透過 Docker 安裝

OMV 透過 omv-extras 外掛支援 Docker。以容器方式執行 RcloneView，並將您的共用資料夾掛載為磁碟區。

## 主要工作流程

### 將共用資料夾備份至雲端

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="OMV to cloud backup" class="img-large img-center" />

### 排程每晚異地備份

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule OMV backup" class="img-large img-center" />

### 驗證備份完整性

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify OMV backup" class="img-large img-center" />

### 加密敏感資料

使用 crypt 遠端在備份資料離開您的網路之前先進行加密。

## 建議設定

| OMV 共用資料夾 | 備份目的地 | 排程 |
|-----------|-------------------|----------|
| Documents | Google Drive | 每 6 小時 |
| Photos | Backblaze B2 | 每晚 |
| Media | Wasabi | 每晚 |
| System config | B2 | 每週 |

## 快速上手

1. 透過 omv-extras **安裝 Docker**。
2. 以容器方式**部署 RcloneView**。
3. 將您的共用資料夾**掛載**為容器磁碟區。
4. **新增雲端帳戶**並建立備份工作。
5. **排程並驗證**。

DIY NAS，專業級雲端備份。

---

**相關指南：**

- [在 Docker 中執行 RcloneView](https://rcloneview.com/support/blog/run-rcloneview-docker-container-cloud-sync)
- [在 TrueNAS 上執行 RcloneView](https://rcloneview.com/support/blog/rcloneview-truenas-cloud-backup-sync)
- [在 Unraid 上執行 RcloneView](https://rcloneview.com/support/blog/run-rcloneview-unraid-server-cloud-sync)

<CloudSupportGrid />
