---
slug: rcloneview-truenas-cloud-backup-sync
title: "在 TrueNAS 上运行 RcloneView 实现云备份与多云同步"
authors:
  - tayson
description: "TrueNAS 专为本地存储而设计。搭配 RcloneView 可将其扩展至云端——将数据集备份到 S3、将存储池与 Google Drive 同步，并从您的 NAS 管理多云存储。"
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

# 在 TrueNAS 上运行 RcloneView 实现云备份与多云同步

> TrueNAS 借助 ZFS 提供坚如磐石的本地存储。但仅有本地存储并不能构成完整的备份策略。搭配 RcloneView，即可通过可视化文件管理器将您的 NAS 数据集同步到云端。

TrueNAS(原 FreeNAS)是最受欢迎的 NAS 操作系统之一，凭借 ZFS 驱动的数据完整性广受信赖。但 ZFS 只能防范硬盘故障，无法应对火灾、盗窃、勒索软件或整站级灾难。要实现真正的数据保护，您需要异地备份。RcloneView 为您的 TrueNAS 环境增加了可视化云管理能力，让数据集轻松同步到 70 多个云存储提供商。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 为什么选择 TrueNAS + RcloneView？

TrueNAS 内置了基础的 Cloud Sync Tasks 功能，但其覆盖范围有限且难以排查问题。RcloneView 则提供：

- **可视化文件浏览** —— 在同一界面并排查看 TrueNAS 文件与云存储文件
- **70+ 云存储提供商** —— 远超 TrueNAS Cloud Sync 原生支持的范围
- **文件夹对比** —— 验证备份是否完整、准确
- **任务调度** —— 灵活的调度与监控功能
- **加密备份** —— 使用 crypt 远程实现零知识加密

## 部署方式

### Docker 容器（推荐）

在 TrueNAS SCALE 上以 Docker 容器方式运行 RcloneView。这是最简洁的方式——与宿主系统隔离，且便于更新。

### 直接安装

在 TrueNAS SCALE（基于 Linux）上，您可以直接安装 RcloneView。TrueNAS CORE（基于 FreeBSD）则应通过虚拟机或 jail 采用 Docker 方式部署。

## 关键工作流程

### 将数据集备份到 S3 或 B2

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="TrueNAS to cloud backup" class="img-large img-center" />

在一侧窗格浏览 TrueNAS 数据集，另一侧浏览云存储。创建同步任务，将关键数据集备份到 Backblaze B2、AWS S3 或 Wasabi。

### 安排夜间备份

设置自动化的夜间备份，让云端副本始终保持最新：

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule TrueNAS backup" class="img-large img-center" />

### 验证备份完整性

ZFS 校验和能保护本地数据。使用文件夹对比功能，验证云端备份是否与 NAS 一致：

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify TrueNAS backup" class="img-large img-center" />

### 上传前加密

使用 crypt 远程保护敏感的 NAS 数据。您的备份服务商无法读取这些文件——只有您掌握加密密钥。

### 多云冗余

同时备份到两个或更多提供商。若其中一个提供商发生故障，您的数据在另一个提供商处依然安全。

## 推荐备份策略

| 数据类型 | 云存储层级 | 调度周期 |
|-----------|-----------|----------|
| 关键文档 | S3 Standard | 每 6 小时 |
| 媒体库 | Backblaze B2 | 每晚 |
| 归档数据 | S3 Glacier | 每周 |

## 快速上手

1. **安装 RcloneView**：在 TrueNAS SCALE 上通过 Docker 安装。
2. **添加云账户**：在远程管理器中添加。
3. **创建备份任务**：针对关键数据集创建任务。
4. **调度并验证**：使用文件夹对比进行验证。

ZFS 在本地保护您的数据，RcloneView 则在其他所有地方保护它。

---

**相关指南：**

- [在 Docker 中运行 RcloneView](https://rcloneview.com/support/blog/run-rcloneview-docker-container-cloud-sync)
- [将 NAS 备份到多个云存储](https://rcloneview.com/support/blog/backup-nas-to-multiple-clouds-rcloneview)
- [加密云备份](https://rcloneview.com/support/blog/encrypt-cloud-backups-crypt-remote-guide-rcloneview)

<CloudSupportGrid />
