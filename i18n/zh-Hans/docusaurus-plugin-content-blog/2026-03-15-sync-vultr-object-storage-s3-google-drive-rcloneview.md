---
slug: sync-vultr-object-storage-s3-google-drive-rcloneview
title: "使用 RcloneView 将 Vultr Object Storage 与 S3、Google Drive 等同步"
authors:
  - tayson
description: "Vultr Object Storage 提供实惠的 S3 兼容云存储。了解如何使用 RcloneView 的可视化文件管理器来管理、同步和备份您的 Vultr 存储桶。"
keywords:
  - vultr object storage
  - vultr s3 compatible
  - vultr cloud sync
  - vultr backup tool
  - vultr object storage gui
  - vultr to google drive
  - vultr to aws s3
  - vultr storage manager
  - vultr rclone
  - vultr file transfer
tags:
  - RcloneView
  - s3-compatible
  - cloud-storage
  - sync
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 使用 RcloneView 将 Vultr Object Storage 与 S3、Google Drive 等同步

> Vultr Object Storage 为您提供实惠的、S3 兼容的云存储。但 Vultr 的控制面板是为开发者设计的,而非文件管理。RcloneView 为其增添了可视化层。

Vultr 以其对开发者友好的云基础设施而闻名,其 Object Storage 服务以具有竞争力的价格提供 S3 兼容 API。然而,在 Vultr 的网页控制面板中管理文件,意味着要在一个为 API 配置而非文件操作而设计的界面中操作。RcloneView 通过其 S3 兼容端点连接到 Vultr Object Storage,提供熟悉的文件管理器体验。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 将 Vultr 连接到 RcloneView

<img src="/support/images/en/blog/new-remote.png" alt="Add Vultr Object Storage" class="img-large img-center" />

使用您的 Vultr access key、secret key 和区域端点,将 Vultr 添加为 S3 兼容远程。您的存储桶会立即出现在浏览器中。

## 关键工作流程

### 以可视化方式浏览和管理文件

使用双栏浏览器而非开发者控制面板来浏览您的 Vultr 存储桶:

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Browse Vultr storage" class="img-large img-center" />

### 将 Vultr 与其他云同步

在 Google Drive 上保留 Vultr 数据的副本以供团队访问,或在 Backblaze B2 上维护冗余备份。

### 迁移到或从 Vultr 迁移

想从 AWS S3 迁移到 Vultr 以节省成本?只需在提供商之间拖放整个存储桶结构即可。

### 计划自动化备份

设置从主存储到 Vultr 的夜间同步,或从 Vultr 到备份提供商的同步:

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule Vultr sync" class="img-large img-center" />

### 监控和验证

实时跟踪传输进度,并通过文件夹对比功能验证完整性:

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify Vultr transfer" class="img-large img-center" />

## 将 Vultr 用作备份层

Vultr Object Storage 非常适合用作次要备份目标。其 S3 兼容 API 意味着它可以使用与 AWS S3 相同的工具和工作流程,同时为存储密集型工作负载提供更低的价格。

## 快速上手

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 将 **Vultr Object Storage 添加**为 S3 兼容远程。
3. 在双栏浏览器中**浏览您的存储桶**。
4. 与其他 70 多个提供商一起**同步和计划任务**。

S3 兼容,即意味着与 RcloneView 兼容。

---

**相关指南:**

- [同步 Linode Object Storage](https://rcloneview.com/support/blog/sync-linode-object-storage-s3-google-drive-rcloneview)
- [同步 DigitalOcean Spaces](https://rcloneview.com/support/blog/mount-digitalocean-spaces-local-drive-rcloneview)
- [创建同步任务](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)

<CloudSupportGrid />
