---
slug: run-rcloneview-unraid-server-cloud-sync
title: "在 Unraid 上运行 RcloneView — 为您的服务器提供云备份和多云同步"
authors:
  - tayson
description: "Unraid 让家庭和小型企业服务器变得简单易用。通过 Docker 添加 RcloneView，将您的 Unraid 共享同步到云存储，实现异地备份和多云管理。"
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
  - RcloneView
  - nas
  - docker
  - platform
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 在 Unraid 上运行 RcloneView — 为您的服务器提供云备份和多云同步

> Unraid 在本地存储方面表现出色。但奇偶校验硬盘无法保护您免受火灾、盗窃或勒索软件的侵害。添加 RcloneView，通过可视化文件管理器将您的共享备份到云端。

Unraid 是最受欢迎的家庭和小型企业服务器平台之一。其基于奇偶校验的存储可防止硬盘故障，但仅靠本地保护是不够的。要实现真正的数据安全，您需要异地备份。RcloneView 可作为 Docker 容器在 Unraid 上运行，为您的服务器添加可视化云管理和自动备份功能。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 为什么选择 Unraid + RcloneView？

Unraid 的 Community Apps 包含基础的 rclone 插件，但它们通常仅支持命令行操作或功能有限。RcloneView 提供：

- **可视化文件浏览器** — 在同一界面中查看您的 Unraid 共享和云存储
- **70+ 云服务提供商** — 从您的 Unraid 服务器连接到任意云
- **计划备份** — 自动化异地保护
- **文件夹对比** — 验证备份完整性
- **加密备份** — 加密远程保持数据私密

## 通过 Docker 安装

RcloneView 可作为 Docker 容器在 Unraid 上运行。您可以通过 Community Apps 安装，或手动配置容器。

将您的 Unraid 共享映射为卷，以便 RcloneView 可以访问您的数据。

## 关键工作流程

### 将共享备份到云端

在一个窗格中打开 Unraid 共享，在另一个窗格中打开云存储。为关键数据创建备份任务：

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Unraid to cloud backup" class="img-large img-center" />

### 计划夜间异地备份

设置自动备份，在服务器空闲的夜间运行：

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule Unraid backups" class="img-large img-center" />

### 验证备份完整性

奇偶校验可保护本地数据。使用文件夹对比验证云端备份：

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify Unraid backup" class="img-large img-center" />

### 加密敏感数据

使用加密远程在数据离开服务器之前进行加密。您的云服务提供商永远无法看到未加密的数据。

### 多云备份策略

备份到两个提供商以获得最大程度的保护：

| 共享 | 主要备份 | 次要备份 |
|-------|---------------|-----------------|
| Documents | Google Drive | Backblaze B2 |
| Media | Backblaze B2 | Wasabi |
| Photos | Google Photos (via Drive) | S3 |
| Appdata | B2 | S3 Glacier |

## 监控您的备份

检查任务历史记录，确保备份成功完成：

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Monitor backup jobs" class="img-large img-center" />

## 快速上手

1. **安装 RcloneView**，将其作为 Docker 容器部署在 Unraid 上。
2. **映射您的共享**为容器卷。
3. **添加云账户**到远程管理器。
4. **为关键共享创建备份任务**。
5. **计划并使用文件夹对比进行验证**。

奇偶校验可防止硬盘故障。云备份则能防范其他所有风险。

---

**相关指南：**

- [在 Docker 中运行 RcloneView](https://rcloneview.com/support/blog/run-rcloneview-docker-container-cloud-sync)
- [在 TrueNAS 上运行 RcloneView](https://rcloneview.com/support/blog/rcloneview-truenas-cloud-backup-sync)
- [将 NAS 备份到多个云](https://rcloneview.com/support/blog/backup-nas-to-multiple-clouds-rcloneview)

<CloudSupportGrid />
