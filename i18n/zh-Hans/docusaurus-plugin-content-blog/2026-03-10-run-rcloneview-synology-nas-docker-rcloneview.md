---
slug: run-rcloneview-synology-nas-docker-rcloneview
title: "在群晖 Synology NAS 上运行 RcloneView —— 从 NAS 进行云备份与同步"
authors:
  - tayson
description: "将您的群晖 Synology NAS 变成云备份中心。了解如何在 Synology NAS 上使用 RcloneView 实现自动化云同步、备份和多云管理。"
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

# 在群晖 Synology NAS 上运行 RcloneView —— 从 NAS 进行云备份与同步

> 您的群晖 Synology NAS 存放着数 TB 无可替代的数据。Synology 内置的 Cloud Sync 适用于基本场景，但当您需要多云管理、任务调度、文件夹比较和批量作业时——RcloneView 可以填补这些空白。

群晖 Synology NAS 设备非常适合集中式本地存储，但其云集成功能有限。Synology Cloud Sync 支持约 20 个云存储提供商，具备基础同步功能。Synology Hyper Backup 处理备份，但缺乏多云文件管理能力。RcloneView 通过支持 70 多个云存储提供商、可视化文件管理和高级自动化功能，对二者形成有力补充。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 为什么在 Synology 上选择 RcloneView？

### 超越 Synology Cloud Sync

| 功能 | Synology Cloud Sync | RcloneView |
|---------|-------------------|------------|
| 云存储提供商 | 约 20 个 | 70+ |
| 双栏文件浏览器 | ❌ | ✅ |
| 文件夹比较 | ❌ | ✅ |
| 云到云传输 | ❌ | ✅ |
| 批量作业 | ❌ | ✅ |
| Slack/Discord 提醒 | ❌ | ✅ |
| 过滤规则 | 基础 | 完整 rclone 过滤器 |
| 加密远程 | ❌ | ✅ (crypt) |
| 挂载云盘 | ❌ | ✅ |
| S3 兼容提供商 | 有限 | 全部 |

### Synology 自动检测

RcloneView 可自动检测您网络中的 Synology NAS 设备：

<img src="/support/images/en/blog/synology-nas-autodection-and-connection.png" alt="Synology NAS auto-detection" class="img-large img-center" />

无需手动进行网络配置。

## 设置方式

### 方式一：在桌面端运行 RcloneView，连接到 NAS

最简单的方式。在您的 Windows/Mac/Linux 桌面上运行 RcloneView：

1. 将您的 Synology NAS 添加为远程（自动检测或通过 SFTP/WebDAV）。
2. 添加您的云存储目标（S3、B2、Google Drive 等）。
3. 在 NAS 与云存储之间创建同步/复制作业。
4. 安排作业自动运行。

这种方式非常适合家庭用户和小型办公室。

### 方式二：在专用设备上运行 RcloneView

使用树莓派或旧笔记本电脑作为专用备份控制器：

1. 在专用设备上安装 RcloneView。
2. 通过网络挂载连接到 Synology NAS。
3. 配置并调度所有备份作业。
4. 让其 24/7 持续运行。

## 备份工作流

### NAS → 云存储（异地备份）

最关键的工作流。将您的 NAS 备份到云存储：

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Backup NAS to cloud" class="img-large img-center" />

推荐目标：

| NAS 数据 | 云存储目标 | 原因 |
|----------|-------------|-----|
| 照片和视频 | Backblaze B2 | 便宜，$6/TB |
| 文档 | Google Drive | 易访问，可搜索 |
| 业务数据 | AWS S3 | 持久耐用，企业级 |
| 全部数据（加密） | 任意 + crypt | 零知识备份 |

### 云存储 → NAS（本地镜像）

在本地保留云端数据的副本以便快速访问：

```
Google Drive → NAS/CloudMirror/GoogleDrive/
OneDrive → NAS/CloudMirror/OneDrive/
```

### NAS → NAS（异地站点备份）

如果您在两个地点各有一台 NAS 设备，可以通过 RcloneView 借助云存储提供商作为中间存储在两者之间进行同步。

## 调度自动化备份

设置每晚的 NAS 备份：

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule NAS cloud backup" class="img-large img-center" />

### 推荐调度方案

| 作业 | 频率 | 时间 |
|-----|-----------|------|
| 关键数据 → B2 | 每晚 | 凌晨 2:00 |
| 照片 → Google Drive | 每晚 | 凌晨 3:00 |
| 完整 NAS → S3 | 每周 | 周六午夜 |
| 校验（比较） | 每周 | 周日早上 6:00 |

## 校验备份

将 NAS 内容与云端备份进行比较：

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify NAS backup against cloud" class="img-large img-center" />

## NAS 加密备份

使用 crypt 远程在上传到云存储之前对您的 NAS 数据进行加密。云存储提供商永远无法看到您未加密的文件。

## 面向 NAS 管理员的批量作业

自动化您整个 NAS 备份流程：

1. 将 /photos 复制到 B2。
2. 将 /documents 复制到 Google Drive。
3. 将 /business 复制到 S3（加密）。
4. 比较全部三者。
5. 通过 Slack 发送通知。

全部在一个调度批处理中完成。

## 快速上手

1. **下载 RcloneView**，访问 [rcloneview.com](https://rcloneview.com/src/download.html)。
2. **连接到您的 Synology NAS**（自动检测）。
3. **添加云存储远程**。
4. **创建并调度备份作业**。
5. **通过文件夹比较进行校验**。

您的 NAS 数据非常宝贵。为它建立一道异地安全防线。

---

**相关指南：**

- [创建同步作业](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [作业调度](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)
- [比较文件夹内容](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [加密云备份](https://rcloneview.com/support/blog/encrypt-cloud-backups-crypt-remote-guide-rcloneview)

<CloudSupportGrid />
