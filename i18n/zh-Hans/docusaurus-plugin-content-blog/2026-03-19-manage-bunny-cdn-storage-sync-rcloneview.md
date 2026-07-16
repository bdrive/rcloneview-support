---
slug: manage-bunny-cdn-storage-sync-rcloneview
title: "管理 Bunny CDN 存储 — 使用 RcloneView 同步和部署内容"
authors:
  - tayson
description: "Bunny.net 提供快速、经济实惠的 CDN 存储。使用 RcloneView 管理 Bunny Storage 区域、从其他云同步内容,并自动化 CDN 部署。"
keywords:
  - bunny cdn storage
  - bunny net rclone
  - bunny storage sync
  - bunny cdn file manager
  - bunny storage gui
  - cdn storage management
  - bunny net sync tool
  - bunny cdn deploy
  - bunny storage backup
  - cdn content sync
tags:
  - sync
  - s3-compatible
  - performance
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 管理 Bunny CDN 存储 — 使用 RcloneView 同步和部署内容

> Bunny.net 存储对于 CDN 内容而言既快速又经济。但通过网页控制台管理存储区域在批量操作时会显得笨拙。RcloneView 为你的 CDN 资产提供了一个真正的文件管理器。

Bunny.net 因其性能和价格已成为一个流行的 CDN 选择。其 Edge Storage 提供与 S3 兼容的存储区域,通过 CDN 网络分发内容。然而,通过 Bunny 的网页界面管理文件在批量上传时速度较慢,缺乏同步能力,也没有调度功能。RcloneView 通过其 FTP 或 HTTP 端点连接到 Bunny Storage,并提供完整的文件管理功能。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 将 Bunny Storage 连接到 RcloneView

<img src="/support/images/en/blog/new-remote.png" alt="Add Bunny CDN remote" class="img-large img-center" />

使用你 Bunny.net 控制台中的凭据,将你的 Bunny Storage 区域添加为 FTP 远程。

## 主要工作流程

### 将内容部署到 CDN

将网站资产、图片或媒体从你的主云存储上传到 Bunny CDN:

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Deploy to Bunny CDN" class="img-large img-center" />

### 从生产存储同步

使你的 CDN 存储区域与 S3 或 Google Drive 上的生产资产存储保持同步:

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Sync to Bunny Storage" class="img-large img-center" />

### 调度自动化部署

按计划自动更新 CDN 内容:

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule CDN deployment" class="img-large img-center" />

### 验证 CDN 内容

将你的源存储与 Bunny CDN 进行比较,确保部署的内容是最新的:

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify CDN content" class="img-large img-center" />

## 快速上手

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 将 **Bunny Storage** 添加为 FTP 远程。
3. 从你的主存储**同步内容**。
4. **调度部署**以实现自动化更新。

快速的 CDN 值得配备快速的管理工具。

---

**相关指南:**

- [同步 Vultr 对象存储](https://rcloneview.com/support/blog/sync-vultr-object-storage-s3-google-drive-rcloneview)
- [创建同步任务](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [任务调度](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)

<CloudSupportGrid />
