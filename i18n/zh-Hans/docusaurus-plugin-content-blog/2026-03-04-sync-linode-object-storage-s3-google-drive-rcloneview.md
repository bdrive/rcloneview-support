---
slug: sync-linode-object-storage-s3-google-drive-rcloneview
title: "使用 RcloneView 将 Linode Object Storage 同步到 AWS S3 或 Google Drive"
authors:
  - tayson
description: "通过可视化方式管理 Linode Object Storage——浏览存储桶、同步到 AWS S3 或 Google Drive，并使用 RcloneView 的图形界面安排自动化备份。"
keywords:
  - linode object storage sync
  - linode object storage backup
  - linode object storage gui
  - linode to aws s3
  - linode object storage mount
  - linode s3 compatible
  - akamai object storage sync
  - linode object storage file manager
  - linode object storage rclone
  - linode cloud backup tool
tags:
  - linode
  - s3-compatible
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 使用 RcloneView 将 Linode Object Storage 同步到 AWS S3 或 Google Drive

> Linode（现为 Akamai）Object Storage 提供了实惠且兼容 S3 的存储桶，但没有桌面客户端。RcloneView 填补了这一空白——以可视化方式浏览、同步并自动执行备份。

Linode Object Storage（现为 Akamai Connected Cloud 的一部分）是一款广受开发者和小型企业欢迎的兼容 S3 的存储服务，以简单易用和有竞争力的价格著称。但和大多数对象存储服务一样，其网页控制台并不适合日常文件管理，也没有原生的桌面同步客户端。RcloneView 通过 S3 API 连接 Linode，为你提供完整的图形界面，用于浏览、同步和自动化数据传输。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 为什么在 Linode Object Storage 中使用 RcloneView？

- **没有桌面客户端** —— Linode 提供网页控制台和 API，但没有同步应用。
- **可视化存储桶管理** —— 无需命令行即可浏览、拖放和整理文件。
- **跨云同步** —— 将 Linode 数据复制到 AWS S3、Google Drive 或任何其他提供商。
- **自动化备份** —— 安排每晚同步到第二个云端以实现冗余。

## 连接 Linode Object Storage

由于 Linode 兼容 S3，设置时需使用 S3 提供商：

1. 打开 RcloneView 并点击 **Add Remote**。
2. 选择 **Amazon S3** 作为提供商类型。
3. 在 S3 提供商下拉菜单中选择 **Other**。
4. 输入你的 Linode 凭据：
   - 来自 Linode Cloud Manager 的 **Access Key** 和 **Secret Key**。
   - **Endpoint**：`https://{cluster-id}.linodeobjects.com`（例如 `https://us-east-1.linodeobjects.com`）。
   - **Region**：你的集群区域。
5. 保存——现在你可以浏览 Linode 存储桶了。

<img src="/support/images/en/blog/new-remote.png" alt="Add Linode Object Storage as S3-compatible remote" class="img-large img-center" />

## 浏览你的存储桶

将 Linode 存储桶与其他云端或本地硬盘一起查看：

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Browse Linode Object Storage" class="img-large img-center" />

## 同步场景

### Linode → AWS S3（跨云冗余）

1. 创建一个同步任务：Linode → S3 存储桶。
2. 使用 [Job Scheduling](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution) 安排每日执行。
3. 两者都兼容 S3，因此传输快速高效。

### Linode → Google Drive（团队访问）

1. 创建一个复制任务：Linode → Google Drive 文件夹。
2. 让非技术团队成员也能访问开发者资源。

### 本地/NAS → Linode（异地备份）

1. 创建一个同步任务：从本地存储 → Linode 存储桶。
2. Linode 的定价使其非常适合用作经济实惠的异地备份。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Run Linode sync job" class="img-large img-center" />

## 挂载为本地驱动器

像普通文件夹一样访问 Linode 存储桶：

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="Mount Linode Object Storage as local drive" class="img-large img-center" />

## 自动化与监控

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule Linode backups" class="img-large img-center" />

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitor Linode transfers" class="img-large img-center" />

## 开始使用

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. **添加 Linode Object Storage** 作为兼容 S3 的远程。
3. **浏览**、**挂载**或**同步**到任意目标位置。
4. **安排计划**以实现自动化备份。

Linode Object Storage 应该拥有比网页控制台更好的体验。RcloneView 为其提供了内置多云同步功能的完整桌面体验。

---

**相关指南：**

- [添加 AWS S3 及兼容 S3 的存储](https://rcloneview.com/support/howto/remote-storage-connection-settings/s3)
- [将云存储挂载为本地驱动器](https://rcloneview.com/support/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive)
- [比较文件夹内容](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [任务调度](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)

<CloudSupportGrid />
