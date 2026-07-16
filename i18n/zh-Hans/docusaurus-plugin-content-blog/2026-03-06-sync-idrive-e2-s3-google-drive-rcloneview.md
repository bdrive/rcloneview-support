---
slug: sync-idrive-e2-s3-google-drive-rcloneview
title: "使用 RcloneView 将 IDrive e2 对象存储同步到 AWS S3 或 Google Drive"
authors:
  - tayson
description: "通过可视化方式管理 IDrive e2 对象存储——浏览存储桶、同步到 AWS S3 或 Google Drive，并使用 RcloneView 的 S3 兼容连接安排备份。"
keywords:
  - idrive e2 sync
  - idrive e2 backup
  - idrive e2 gui tool
  - idrive e2 to s3
  - idrive e2 rclone
  - idrive e2 file manager
  - idrive e2 mount local drive
  - idrive e2 google drive
  - idrive e2 object storage
  - s3 compatible storage gui
tags:
  - idrive-e2
  - s3-compatible
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 使用 RcloneView 将 IDrive e2 对象存储同步到 AWS S3 或 Google Drive

> IDrive e2 以每月每 GB 0.004 美元的超低价格提供 S3 兼容存储。但由于没有桌面同步客户端，管理文件只能依赖 API 调用或网页界面。RcloneView 为你提供完整的可视化界面。

IDrive e2 是目前最具成本效益的 S3 兼容对象存储服务之一——比 Backblaze B2、Wasabi 和 AWS S3 都更便宜。它非常适合用于备份、归档和冷存储。但和大多数对象存储提供商一样，IDrive e2 缺少原生桌面客户端。RcloneView 通过 S3 API 连接，为你带来可视化文件管理、云到云同步以及计划自动化功能。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 为什么选择 IDrive e2？

| 提供商 | 每 TB/月费用 | 流出流量 |
|----------|-------------------|--------|
| IDrive e2 | $4.00 | 免费（3 倍存储量） |
| Backblaze B2 | $6.00 | $0.01/GB |
| Wasabi | $6.99 | 免费 |
| AWS S3 Standard | $23.00 | $0.09/GB |

IDrive e2 的定价使其成为任何需要经济实惠、可靠的对象存储用户的有力选择。

## 连接 IDrive e2

由于 IDrive e2 与 S3 兼容：

1. 点击 **Add Remote** → 选择 **Amazon S3**。
2. 在 S3 提供商下拉菜单中选择 **IDrive e2** 或 **Other**。
3. 输入你的凭据：
   - 来自 IDrive e2 控制台的 **Access Key** 和 **Secret Key**。
   - **Endpoint**：你的区域端点（例如 `https://s3.us-west-1.idrivecloud.io`）。
4. 保存——你的 e2 存储桶现在即可浏览。

<img src="/support/images/en/blog/new-remote.png" alt="Add IDrive e2 as S3-compatible remote" class="img-large img-center" />

## 浏览和管理

将 IDrive e2 存储桶与其他任何云一起查看：

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Browse IDrive e2 buckets" class="img-large img-center" />

## 同步场景

### Google Drive → IDrive e2（经济实惠的备份）

将 e2 用作 Google Drive 的低成本备份：

1. 创建复制任务：Google Drive → IDrive e2 存储桶。
2. 使用[任务调度](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)安排每晚执行。
3. 只需支付 Google 收取相同数据费用的一小部分。

### IDrive e2 → AWS S3（跨云冗余）

1. 创建同步任务：IDrive e2 → S3 存储桶。
2. 在两个不同的 S3 兼容提供商之间保持冗余。

### 本地/NAS → IDrive e2（异地归档）

1. 创建复制任务：本地文件夹或 NAS → IDrive e2。
2. 非常适合以最低成本进行异地备份。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Run IDrive e2 sync job" class="img-large img-center" />

## 挂载为本地磁盘

将 IDrive e2 作为普通文件夹访问：

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="Mount IDrive e2 as local drive" class="img-large img-center" />

## 自动化和监控

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule IDrive e2 backups" class="img-large img-center" />

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitor IDrive e2 transfers" class="img-large img-center" />

## 开始使用

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. **添加 IDrive e2** 作为 S3 兼容远程。
3. **浏览、挂载或同步**到任意目标位置。
4. **安排计划**以实现自动化的低成本云备份。

IDrive e2 是对象存储领域的性价比之王。RcloneView 为它带来了应有的桌面体验。

---

**相关指南：**

- [添加 AWS S3 和 S3 兼容存储](https://rcloneview.com/support/howto/remote-storage-connection-settings/s3)
- [将云存储挂载为本地磁盘](https://rcloneview.com/support/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive)
- [比较文件夹内容](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [任务调度](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)

<CloudSupportGrid />
