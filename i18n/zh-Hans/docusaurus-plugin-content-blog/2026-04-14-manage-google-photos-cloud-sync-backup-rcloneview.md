---
slug: manage-google-photos-cloud-sync-backup-rcloneview
title: "管理 Google 相册存储 — 使用 RcloneView 同步和备份照片"
authors:
  - tayson
description: "将 Google 相册连接到 RcloneView，并将您的照片库备份到本地存储或其他云提供商。管理 Google 相册，不丢失原图。"
keywords:
  - Google Photos RcloneView backup
  - download Google Photos local backup
  - Google Photos cloud sync
  - rclone Google Photos GUI
  - backup Google Photos external drive
  - Google Photos to S3 backup
  - manage Google Photos storage
  - RcloneView Google Photos
tags:
  - RcloneView
  - google-photos
  - cloud-storage
  - cloud-sync
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 管理 Google 相册存储 — 使用 RcloneView 同步和备份照片

> RcloneView 通过 OAuth 连接到 Google 相册，让您可以浏览照片库、将原图备份到本地存储或其他云提供商，并运行定时导出。

Google 相册是数十亿 Android 用户默认的照片备份方案 —— 但它本身并不是一份备份。如果您的 Google 账户被盗、存储配额用尽，或服务条款发生变化，您的照片库就会面临风险。RcloneView 将 Google 相册作为一个独立于 Google Drive 的远程连接，让您可以直接访问照片库，将其下载并备份到外部硬盘、NAS 设备，或 Amazon S3、Backblaze B2 等冷云存储。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 在 RcloneView 中设置 Google 相册

Google 相册在 RcloneView 的远程设置中作为一个独立的提供商出现。前往 **远程标签 → 新建远程 → Google Photos**，并通过 OAuth 浏览器登录进行身份验证。系统会提示您授权 RcloneView（通过 rclone）以只读方式访问您的照片 —— 授权后，您的照片库会按年份和相册在资源管理器面板中显示出来。

请注意，Google 相册 API 以特定结构呈现照片：按相册或按日期文件夹组织。您无法通过该 API 重新整理照片，但可以浏览并下载原始分辨率的原图 —— 如果您拥有 Google One 存储空间，甚至包括从相机上传的 RAW 文件。

<img src="/support/images/en/blog/new-remote.png" alt="Connecting Google Photos as a remote in RcloneView" class="img-large img-center" />

## 将 Google 相册备份到本地存储

最常见的用例是将整个 Google 相册库下载到外部硬盘或 NAS。在任务管理器中创建一个复制任务，将 Google 相册作为源，本地外部硬盘（或 NAS 路径）作为目标。启用 **跳过已存在的文件**，使后续运行成为增量备份 —— 只下载自上次备份以来的新照片。

对于一个拥有 10 年照片、共 5 万张图片、总计 150 GB 的家庭来说，首次下载需要几个小时。可以将其安排在夜间执行一次。之后每周定时运行的任务只会添加当周新上传的照片 —— 让您的本地备份保持最新，而无需重新传输所有内容。

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="Backing up Google Photos library to local storage in RcloneView" class="img-large img-center" />

## 跨云备份：从 Google 相册到 S3 或 Backblaze B2

对于云到云的备份，可以将 Google 相册设为源，将 Amazon S3 或 Backblaze B2 设为目标。这样就能在另一个云提供商上创建一份独立的照片库备份 —— 无需依赖本地存储容量，也能防范 Google 账户出现问题带来的风险。

在同步向导的第 3 步中使用过滤规则，仅包含特定文件类型（`.jpg`、`.heic`、`.mp4`、`.raw`），并在不需要时排除 Google 的元数据 JSON 附属文件。为常规任务设置最大文件时限过滤器，只备份最近 12 个月的照片，另外为历史存档创建一个单独的一次性任务。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Google Photos to Backblaze B2 cross-cloud backup in RcloneView" class="img-large img-center" />

## 快速上手

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 在新建远程向导中，通过 OAuth 浏览器身份验证添加 Google 相册作为远程。
3. 创建一个从 Google 相册到外部硬盘或云备份存储桶的复制任务。
4. 安排每周增量运行，自动捕获新照片。

有了 RcloneView，Google 相册就成为一个您可以可靠备份的来源 —— 确保您珍贵的回忆拥有一份独立于 Google 基础设施的副本。

---

**相关指南：**

- [使用 RcloneView 将 Google 相册备份到外部硬盘和 NAS](https://rcloneview.com/support/blog/backup-google-photos-external-drive-nas-rcloneview)
- [使用 RcloneView 整理您的云端照片库](https://rcloneview.com/support/blog/declutter-cloud-photo-library-rcloneview)
- [使用 RcloneView 管理 Google Drive 云同步和备份](https://rcloneview.com/support/blog/manage-google-drive-cloud-sync-backup-rcloneview)

<CloudSupportGrid />
