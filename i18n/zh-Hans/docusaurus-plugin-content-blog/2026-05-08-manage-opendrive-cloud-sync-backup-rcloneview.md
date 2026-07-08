---
slug: manage-opendrive-cloud-sync-backup-rcloneview
title: "管理 OpenDrive 云存储 — 使用 RcloneView 同步和备份文件"
authors:
  - jay
description: "将 OpenDrive 连接到 RcloneView，通过无需任何命令行知识的 GUI 管理文件、自动备份并跨云同步数据。"
keywords:
  - OpenDrive cloud storage RcloneView
  - OpenDrive sync GUI
  - manage OpenDrive files
  - OpenDrive backup tool
  - rclone OpenDrive GUI
  - OpenDrive file transfer
  - cloud storage management
  - OpenDrive desktop app
tags:
  - RcloneView
  - opendrive
  - cloud-storage
  - cloud-sync
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 管理 OpenDrive 云存储 — 使用 RcloneView 同步和备份文件

> 将 OpenDrive 连接到 RcloneView，实现拖放式文件管理、定期备份和跨云传输 — 无需命令行。

OpenDrive 是一个云存储平台，提供个人版和企业版方案，专注于文件共享和协作。虽然其网页界面适合日常使用，但需要迁移大型数据集、自动化备份或同步到其他云的高级用户则需要更强大的工具。RcloneView 依托 rclone 的 OpenDrive 后端，为您的 OpenDrive 账户带来功能齐全的 GUI。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 将 OpenDrive 连接到 RcloneView

导航至 **Remote 标签 → New Remote**，然后从提供商列表中选择 OpenDrive。您需要通过 OAuth 进行身份验证 — RcloneView 会打开一个浏览器窗口，供您使用 OpenDrive 凭据登录并授予访问权限。授权完成后，该远程会立即保存并显示在您的资源管理器面板中。

资源管理器会显示您的 OpenDrive 文件夹和文件的完整元数据：名称、大小、最后修改日期和类型。左侧的文件夹树可让您浏览整个存储层级结构，右侧的文件列表则以可排序的列显示所选文件夹的内容。对于图片较多的文件夹，还提供缩略图视图，方便您在照片或素材库中快速找到所需内容。

<img src="/support/images/en/blog/new-remote.png" alt="Configuring OpenDrive as a new remote in RcloneView" class="img-large img-center" />

## 将 OpenDrive 文件备份到外部驱动器或其他云

对于将客户项目文件存储在 OpenDrive 上的小型设计工作室来说，在其他地方保留第二份副本至关重要。RcloneView 可轻松设置从 OpenDrive 到 Amazon S3、Backblaze B2 甚至本地外部驱动器的备份任务。在一个面板中打开源（OpenDrive），在另一个面板中打开目标，然后使用任务管理器配置同步任务。

四步任务向导可让您设置源路径和目标路径、配置传输并发数、启用校验和验证，并设置文件过滤器（排除临时文件或按存在时间限制）。使用 PLUS 许可证，您可以将任务安排为每晚运行，或按任意 crontab 计划运行，确保您的 OpenDrive 数据始终得到备份，无需任何手动操作。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling an OpenDrive backup job in RcloneView" class="img-large img-center" />

## 同步前先进行模拟运行

在提交大型同步操作之前，请使用 RcloneView 的**模拟运行（Dry Run）**模式。此模式会模拟同步过程，准确显示哪些文件将被复制、更新或删除 — 而不会进行任何实际更改。对于要将大型 OpenDrive 库迁移到新提供商的团队来说，模拟运行对于在意外文件删除发生之前发现问题非常有价值。

模拟运行的结果会显示在“传输中”标签页和“日志”标签页中，让您全面了解计划中的操作。确认无误后，只需单击即可运行实际同步。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Real-time transfer monitoring for an OpenDrive sync job" class="img-large img-center" />

## 快速上手

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 进入 **Remote 标签 → New Remote**，选择 OpenDrive，并完成 OAuth 登录。
3. 在双栏资源管理器中浏览和管理您的 OpenDrive 文件。
4. 使用任务管理器创建到您首选目标位置的定期备份。

RcloneView 让 OpenDrive 与 Google Drive、S3 以及您使用的其他任何提供商一样，在您的云工作流程中占据核心地位。

---

**相关指南：**

- [使用 RcloneView 将 OpenDrive 文件备份到 AWS S3](https://rcloneview.com/support/blog/backup-opendrive-aws-s3-external-storage-rcloneview)
- [使用 RcloneView 管理多个云账户](https://rcloneview.com/support/blog/manage-multiple-cloud-accounts-with-rcloneview)
- [使用 RcloneView 自动化每日云备份](https://rcloneview.com/support/blog/automate-daily-cloud-backups-with-rcloneview)

<CloudSupportGrid />
