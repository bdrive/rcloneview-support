---
slug: rcloneview-openmediavault-nas-cloud-backup
title: "在 OpenMediaVault 上运行 RcloneView — 为你的 DIY NAS 提供云备份"
authors:
  - tayson
description: "OpenMediaVault 可以将任何 PC 变成 NAS。通过 Docker 添加 RcloneView，将你的 OMV 共享同步到云存储，实现异地备份和多云管理。"
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
  - RcloneView
  - nas
  - docker
  - platform
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 在 OpenMediaVault 上运行 RcloneView — 为你的 DIY NAS 提供云备份

> OpenMediaVault (OMV) 让你能用预算有限的硬件搭建出强大的 NAS。但仅靠本地存储并不安全。添加 RcloneView，将你的 NAS 数据推送到云端，实现灾难恢复。

OpenMediaVault 是 DIY 用户首选的 NAS 操作系统——可以运行在旧 PC、树莓派或专用硬件上。它提供 RAID、SMB/NFS 共享和网页界面。但它没有提供云备份功能。RcloneView 填补了这一空白，作为 Docker 容器运行在 OMV 上，将你的共享文件夹同步到 70 多个云服务提供商。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 为什么选择 OMV + RcloneView？

OMV 内置的功能能很好地处理本地存储，但云端集成有限。RcloneView 增加了以下功能：

- **70 多个云服务提供商** — Google Drive、S3、B2、Wasabi 等
- **可视化文件管理** — 同时浏览 NAS 和云存储
- **计划备份** — 自动化异地保护
- **验证** — 文件夹比较可确认备份完整性
- **加密** — 使用 crypt 远程实现私密备份

## 通过 Docker 安装

OMV 通过 omv-extras 插件支持 Docker。将 RcloneView 作为容器运行，并将你的共享文件夹挂载为卷。

## 关键工作流程

### 将共享文件夹备份到云端

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="OMV to cloud backup" class="img-large img-center" />

### 计划夜间异地备份

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule OMV backup" class="img-large img-center" />

### 验证备份完整性

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify OMV backup" class="img-large img-center" />

### 加密敏感数据

使用 crypt 远程在数据离开你的网络之前对备份进行加密。

## 推荐配置

| OMV 共享 | 备份目的地 | 计划频率 |
|-----------|-------------------|----------|
| Documents | Google Drive | 每 6 小时一次 |
| Photos | Backblaze B2 | 每晚 |
| Media | Wasabi | 每晚 |
| System config | B2 | 每周 |

## 快速上手

1. 通过 omv-extras 在 OMV 上**安装 Docker**。
2. 将 RcloneView **部署**为容器。
3. 将你的共享文件夹**挂载**为容器卷。
4. **添加云账户**并创建备份任务。
5. **计划并验证**。

DIY NAS，专业级云备份。

---

**相关指南：**

- [在 Docker 中运行 RcloneView](https://rcloneview.com/support/blog/run-rcloneview-docker-container-cloud-sync)
- [在 TrueNAS 上运行 RcloneView](https://rcloneview.com/support/blog/rcloneview-truenas-cloud-backup-sync)
- [在 Unraid 上运行 RcloneView](https://rcloneview.com/support/blog/run-rcloneview-unraid-server-cloud-sync)

<CloudSupportGrid />
