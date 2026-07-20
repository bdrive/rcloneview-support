---
slug: rcloneview-proxmox-ve-cloud-backup
title: "在 Proxmox VE 上執行 RcloneView — 為虛擬機與容器提供雲端備份"
authors:
  - tayson
description: "Proxmox VE 用於代管您的虛擬機與容器。加入 RcloneView，將 VM 資料、ISO 庫及設定備份到雲端儲存，實現異地災難復原。"
keywords:
  - proxmox cloud backup
  - proxmox rclone
  - proxmox offsite backup
  - proxmox ve cloud sync
  - proxmox backup s3
  - proxmox google drive backup
  - proxmox rcloneview
  - proxmox vm backup cloud
  - proxmox disaster recovery
  - proxmox cloud storage
tags:
  - RcloneView
  - platform
  - docker
  - backup
  - disaster-recovery
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 在 Proxmox VE 上執行 RcloneView — 為虛擬機與容器提供雲端備份

> Proxmox VE 會在本機備份 VM，但本機備份無法承受硬體故障、火災或竊盜等意外。加入 RcloneView，將 VM 備份推送至雲端儲存,實現完整的災難復原。

Proxmox VE 是最受歡迎的開源虛擬化平台之一,可為家用實驗室與正式環境執行虛擬機與 LXC 容器。其內建的 Proxmox Backup Server 能出色地處理本機備份,但僅限本機的備份並不完整。RcloneView 補上雲端這一層 — 將 VM 備份、ISO 庫與設定匯出檔案推送至 S3、B2、Google Drive 或任何雲端服務商。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 為什麼 Proxmox 需要雲端備份？

Proxmox 的本機備份可防範 VM 損毀與誤刪。雲端備份則可防範:

- **硬體故障** — 整台伺服器故障
- **勒索軟體** — 本機備份隨 VM 一併被加密
- **實體災害** — 火災、水災、竊盜
- **站點故障** — 資料中心或家用實驗室全毀

## 部署選項

### 在 Proxmox 上執行 Docker 容器

在 Proxmox 主機上的輕量 LXC 容器內,以 Docker 容器的形式執行 RcloneView。

### 專用 LXC 容器

建立一個專門用於 RcloneView 的最小化 LXC 容器,並賦予其存取備份儲存空間的權限。

## 主要工作流程

### 將 VM 備份同步至雲端

將 RcloneView 指向您的 Proxmox 備份儲存空間,並同步至雲端:

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Proxmox backup to cloud" class="img-large img-center" />

### 排程夜間異地備份

在 Proxmox 建立本機備份後,RcloneView 會將其推送至雲端:

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule Proxmox cloud backup" class="img-large img-center" />

### 備份 ISO 庫

您的 ISO 收藏與容器範本很難重新建立,請將其備份至雲端儲存。

### 驗證備份完整性

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify Proxmox backup" class="img-large img-center" />

### 加密敏感 VM 資料

VM 備份可能包含敏感資料。請使用 crypt 遠端在上傳前進行加密。

## 建議策略

| 資料類型 | 雲端層級 | 保留期限 |
|-----------|-----------|-----------|
| VM 備份(近期) | S3 / B2 | 最近 7 天 |
| VM 備份(封存) | S3 Glacier | 最近 90 天 |
| ISO 庫 | B2 | 永久保存 |
| Proxmox 設定 | Google Drive | 最近 30 天 |

## 開始使用

1. 在 Proxmox 上**部署 RcloneView** 容器。
2. **新增雲端帳戶**作為備份目的地。
3. **建立同步工作**,指向您的備份儲存空間。
4. **在本機備份完成後排程執行**。
5. 使用「資料夾比對」功能**定期驗證**。

本機備份能讓您從失誤中復原,雲端備份則能讓您從災難中復原。

---

**相關指南:**

- [在 Docker 中執行 RcloneView](https://rcloneview.com/support/blog/run-rcloneview-docker-container-cloud-sync)
- [防範勒索軟體攻擊](https://rcloneview.com/support/blog/protect-cloud-storage-ransomware-backup-rcloneview)
- [加密雲端備份](https://rcloneview.com/support/blog/encrypt-cloud-backups-crypt-remote-guide-rcloneview)

<CloudSupportGrid />
