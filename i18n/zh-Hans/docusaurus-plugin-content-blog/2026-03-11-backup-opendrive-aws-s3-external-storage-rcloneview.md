---
slug: backup-opendrive-aws-s3-external-storage-rcloneview
title: "使用 RcloneView 将 OpenDrive 备份到 AWS S3 或外部存储"
authors:
  - tayson
description: "通过将 OpenDrive 数据备份到 AWS S3、Google Drive 或外部硬盘，实现自动化备份并进行可视化验证，全程使用 RcloneView 保护您的数据。"
keywords:
  - opendrive backup
  - opendrive sync tool
  - opendrive to s3
  - opendrive to google drive
  - opendrive file manager
  - opendrive rclone
  - opendrive export data
  - opendrive cloud backup
  - opendrive alternative
  - opendrive data protection
tags:
  - RcloneView
  - opendrive
  - cloud-storage
  - backup
  - sync
  - aws-s3
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 使用 RcloneView 将 OpenDrive 备份到 AWS S3 或外部存储

> OpenDrive 以极具吸引力的价格提供无限存储空间，但将所有数据都放在单一提供商处存在风险。RcloneView 可让您自动将 OpenDrive 备份到 S3、Google Drive 或外部硬盘。

OpenDrive 提供云存储服务，支持文件共享、协作和应用集成等功能。但和任何云服务一样，它不应成为您重要数据的唯一副本。RcloneView 可连接到 OpenDrive，并支持自动备份到 AWS S3、Google Drive、外部硬盘或任何其他存储——为您提供每一个良好备份策略所需的冗余保障。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 为什么要备份 OpenDrive？

- **单点故障** — 如果 OpenDrive 出现中断或您失去访问权限，您的数据将无法使用。
- **意外删除** — 如果没有外部备份，永久删除的文件无法撤销。
- **3-2-1 备份原则** — 最佳实践建议保留 3 份副本、使用 2 种不同介质、其中 1 份存放在异地。OpenDrive 只是其中一份副本。
- **迁移准备就绪** — 如果您决定切换服务商，备份可随时使用。

## 连接 OpenDrive

1. 打开 RcloneView，点击 **Add Remote**。
2. 从提供商列表中选择 **OpenDrive**。
3. 输入您的 OpenDrive 凭据。
4. 保存——您的 OpenDrive 文件现在即可浏览。

<img src="/support/images/en/blog/new-remote.png" alt="Add OpenDrive remote" class="img-large img-center" />

## 浏览与评估

同时查看您的 OpenDrive 文件和备份目标：

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Browse OpenDrive files" class="img-large img-center" />

## 备份目标

### OpenDrive → AWS S3

用于持久、经济高效的备份：

1. 添加 [AWS S3](https://rcloneview.com/support/howto/remote-storage-connection-settings/s3) 作为远程。
2. 创建一个复制任务：OpenDrive → S3 存储桶。
3. 使用 S3 Glacier 以极低成本进行长期归档。
4. 通过 [Job Scheduling](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution) 安排每日执行。

### OpenDrive → Google Drive

用于具有 Google Workspace 集成的便捷备份：

1. 通过 [OAuth](https://rcloneview.com/support/howto/remote-storage-connection-settings/add-oath-online-login) 添加 Google Drive。
2. 创建一个复制任务：OpenDrive → Google Drive 文件夹。
3. 安排每周执行。

### OpenDrive → 外部硬盘

用于离线本地备份：

1. 创建一个复制任务：OpenDrive → 外部硬盘路径。
2. 在硬盘连接时运行。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Run OpenDrive backup job" class="img-large img-center" />

## 验证您的备份

使用 [Folder Comparison](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents) 确认所有内容均已传输：

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify OpenDrive backup" class="img-large img-center" />

## 自动化与监控

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule OpenDrive backups" class="img-large img-center" />

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="OpenDrive backup history" class="img-large img-center" />

## 快速上手

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. **添加 OpenDrive** 及您的备份目标作为远程。
3. **创建复制任务**并运行初始备份。
4. 使用 Folder Comparison **进行验证**。
5. **设置计划**以实现自动定期备份。

您的数据值得拥有不止一个存放之地。RcloneView 让 OpenDrive 备份到 S3、Google Drive 或外部存储变得轻松且可验证。

---

**相关指南：**

- [添加 AWS S3 及兼容 S3 的存储](https://rcloneview.com/support/howto/remote-storage-connection-settings/s3)
- [通过浏览器登录方式添加远程（OAuth）](https://rcloneview.com/support/howto/remote-storage-connection-settings/add-oath-online-login)
- [比较文件夹内容](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [创建同步任务](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [任务调度](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)

<CloudSupportGrid />
