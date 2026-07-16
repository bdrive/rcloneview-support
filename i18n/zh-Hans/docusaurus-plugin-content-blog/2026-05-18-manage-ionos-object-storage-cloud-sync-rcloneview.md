---
slug: manage-ionos-object-storage-cloud-sync-rcloneview
title: "管理 IONOS Object Storage — 使用 RcloneView 同步与备份文件"
authors:
  - jay
description: "了解如何将 IONOS Object Storage 连接到 RcloneView，并通过完全可视化的 S3 兼容界面同步、备份或传输文件。无需命令行。"
keywords:
  - IONOS Object Storage
  - IONOS cloud sync
  - IONOS backup files
  - RcloneView IONOS
  - S3-compatible cloud storage Europe
  - European cloud storage GDPR
  - IONOS rclone GUI
  - sync IONOS to Google Drive
  - cloud backup IONOS
  - manage IONOS files RcloneView
tags:
  - RcloneView
  - cloud-storage
  - s3-compatible
  - european-cloud
  - backup
  - cloud-sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 管理 IONOS Object Storage — 使用 RcloneView 同步与备份文件

> 将 IONOS Object Storage 连接到 RcloneView，以可视化方式管理你的欧洲云文件——同步、备份和传输，无需接触命令行。

IONOS Object Storage 是欧洲最大的云基础设施提供商之一 IONOS SE 提供的 S3 兼容云存储服务。运行 GDPR 敏感工作流程或需要欧洲数据驻留的团队正越来越多地选择 IONOS，将其作为可靠且经济高效的对象存储。借助 RcloneView，你可以通过简洁的桌面 GUI 连接、浏览、同步并自动备份到 IONOS——无需任何 rclone 命令。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 将 IONOS Object Storage 连接到 RcloneView

IONOS Object Storage 使用 S3 兼容的 API，这意味着它接受与 Amazon S3 相同的 Access Key、Secret Key 和端点配置。任何支持 S3 的工具——包括 rclone——都可以在无需任何特定提供商适配器的情况下读写 IONOS 存储桶。

要添加 IONOS 作为远程，打开 **Remote 标签页** 并点击 **New Remote**。选择 **Amazon S3** 作为提供商类型，然后从 IONOS 控制面板输入你的 IONOS Access Key ID、Secret Access Key 和区域端点 URL。保存后，你的存储桶会立即出现在双面板文件浏览器中。你可以浏览文件夹、在缩略图视图中预览图片，并右键点击任意文件进行复制、移动、重命名或生成公开链接——所有这些都在熟悉的桌面界面中完成。

<img src="/support/images/en/blog/new-remote.png" alt="Adding IONOS Object Storage as an S3-compatible remote in RcloneView" class="img-large img-center" />

## 将 IONOS 与其他云提供商同步

RcloneView 的云到云传输引擎让你无需先下载到本地磁盘即可在 IONOS 与任何其他远程之间移动数据。一个将受 GDPR 监管的文档归档到 IONOS 的法务团队，可能会同时将该归档同步到 Backblaze B2 上的加密 Crypt 远程，作为异地二级备份——只需配置一次，即可在同一个 Job Manager 窗口中运行。

RcloneView 还支持一对多（1:N）同步：一个 IONOS 源可以同时分发到多个目标。拥有 500GB 活动素材的媒体机构可以在一个计划任务中将其 IONOS 存储桶镜像到 Wasabi 和本地 NAS。同步向导的校验和选项可确保 IONOS 与任何目标之间的字节级完全一致复制，能够捕获仅靠文件大小比较所遗漏的损坏问题。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-to-cloud transfer from IONOS Object Storage to another provider in RcloneView" class="img-large img-center" />

## 为 IONOS 自动化计划备份

拥有 **RcloneView PLUS** 许可证后，你可以为任何同步任务附加 crontab 风格的计划任务。从本地文件夹到 IONOS 存储桶的每晚备份将变成一个完全自动化的例行任务——只需配置一次，RcloneView 就会在指定时间于后台运行它，即使主窗口已关闭也是如此。

计划向导接受分钟、小时、星期几和月份字段，支持列表（1,3,5）、范围（9-17）和步进间隔（*/2）。使用内置的 **Simulate schedule** 按钮，可以在保存前预览下一次执行时间。每次运行后，**Job History** 标签页会记录开始时间、持续时间、文件数量、传输大小和状态——无需任何额外的监控工具即可获得清晰的审计记录。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling automated IONOS cloud backup jobs in RcloneView" class="img-large img-center" />

## 快速上手

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 打开 **Remote tab > New Remote**，选择 **Amazon S3** 作为提供商类型，并从 IONOS 控制面板输入你的 IONOS Access Key ID、Secret Access Key 和端点。
3. 在文件浏览器中浏览你的 IONOS 存储桶并验证访问权限。
4. 在 **Job Manager** 中创建同步或备份任务——可选启用计划任务（PLUS）以实现每晚自动运行。

IONOS Object Storage 与 RcloneView 搭配使用，为欧洲团队提供了一个符合 GDPR 要求的 S3 兼容存储后端，同时具备原生桌面文件管理器的易用性。

---

**相关指南：**

- [使用 RcloneView 管理 Wasabi Object Storage](https://rcloneview.com/support/blog/manage-wasabi-cloud-sync-backup-rcloneview)
- [使用 RcloneView 管理 IDrive E2 云存储](https://rcloneview.com/support/blog/manage-idrive-e2-cloud-sync-backup-rcloneview)
- [使用 RcloneView 集中管理 Amazon S3、Wasabi 和 Cloudflare R2](https://rcloneview.com/support/blog/centralize-s3-wasabi-r2-with-rcloneview)

<CloudSupportGrid />
