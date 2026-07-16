---
slug: rcloneview-qnap-nas-cloud-backup-rcloneview
title: "在 QNAP NAS 上使用 RcloneView — 为您的 NAS 提供云备份与多云同步"
authors:
  - tayson
description: "QNAP NAS 用户可以使用 RcloneView 将数据备份到 S3、B2、Google Drive 等云存储。了解如何从您的 QNAP NAS 连接、同步并自动化备份。"
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
  - RcloneView
  - qnap
  - nas
  - backup
  - cloud-storage
  - platform
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 在 QNAP NAS 上使用 RcloneView — 为您的 NAS 提供云备份与多云同步

> QNAP NAS 设备将您最重要的数据存储在本地。但仅限本地的存储也意味着仅限本地的风险——硬件故障、火灾、盗窃或水灾都可能让一切化为乌有。通过 RcloneView 进行云备份，借助 70 多家云存储提供商，为您增添异地保护。

QNAP NAS 通过 HBS 3（Hybrid Backup Sync）提供内置的云同步功能，但其云存储提供商支持相较 rclone 的 70 多家而言较为有限。RcloneView 运行在连接到您的 QNAP 的桌面设备或专用设备上，可让您访问 rclone 支持的所有提供商——还提供可视化管理、文件夹对比和批量任务功能。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 将 QNAP 连接到 RcloneView

### 通过网络共享（SMB/CIFS）

从运行 RcloneView 的计算机访问您的 QNAP 共享文件夹。将您的 QNAP 共享映射为网络驱动器，然后在 RcloneView 任务中将其用作本地源。

### 通过 SFTP

将您的 QNAP 添加为 SFTP 远程：

1. 在您的 QNAP 上启用 SFTP（控制面板 → 网络与文件服务 → Telnet/SSH）。
2. 在 RcloneView 中使用您 QNAP 的 IP 地址和凭据添加一个 SFTP 远程。

<img src="/support/images/en/blog/new-remote.png" alt="Add QNAP NAS as remote" class="img-large img-center" />

## 备份工作流程

### QNAP → Backblaze B2

以每月每 TB 6 美元的价格实现经济实惠的异地备份：

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Backup QNAP to B2" class="img-large img-center" />

### QNAP → AWS S3

为关键业务数据提供企业级的持久性保障。

### QNAP → Google Drive

通过 Google Drive 让 NAS 文件可用于协作。

### 安排每晚备份

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule QNAP backup" class="img-large img-center" />

## 验证备份

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify QNAP backup" class="img-large img-center" />

## QNAP HBS 3 与 RcloneView 对比

| 功能 | QNAP HBS 3 | RcloneView |
|---------|-----------|------------|
| 云存储提供商 | 约 15 家 | 70+ 家 |
| 直接在 NAS 上运行 | ✅ | 在已连接的设备上运行 |
| 双栏浏览器 | ❌ | ✅ |
| 文件夹对比 | ❌ | ✅ |
| 批量任务 | ❌ | ✅ |
| 通知 | 邮件 | Slack/Discord/Telegram |
| 加密远程 | 有限 | ✅（crypt） |

## 快速上手

1. **下载 RcloneView**，访问 [rcloneview.com](https://rcloneview.com/src/download.html)。
2. **连接到 QNAP**，通过网络共享或 SFTP。
3. **添加云备份目标**。
4. **安排自动化备份**。
5. **使用文件夹对比进行验证**。

您的 NAS 数据值得拥有异地保护。

---

**相关指南：**

- [在 Synology NAS 上使用 RcloneView](https://rcloneview.com/support/blog/run-rcloneview-synology-nas-docker-rcloneview)
- [创建同步任务](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [任务调度](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)

<CloudSupportGrid />
