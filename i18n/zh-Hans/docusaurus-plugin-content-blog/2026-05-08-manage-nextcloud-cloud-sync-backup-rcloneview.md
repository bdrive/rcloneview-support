---
slug: manage-nextcloud-cloud-sync-backup-rcloneview
title: "管理 Nextcloud 存储 — 使用 RcloneView 同步和备份文件"
authors:
  - jay
description: "通过 WebDAV 将您自托管或托管的 Nextcloud 实例连接到 RcloneView，实现基于 GUI 的文件管理、跨云同步和自动备份。"
keywords:
  - Nextcloud RcloneView sync
  - manage Nextcloud files GUI
  - Nextcloud WebDAV RcloneView
  - Nextcloud backup cloud storage
  - sync Nextcloud to Google Drive
  - Nextcloud to S3 backup
  - self-hosted cloud sync RcloneView
  - Nextcloud file management desktop
tags:
  - RcloneView
  - nextcloud
  - cloud-storage
  - cloud-sync
  - backup
  - webdav
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 管理 Nextcloud 存储 — 使用 RcloneView 同步和备份文件

> 通过 WebDAV 将 RcloneView 连接到您的 Nextcloud 实例，管理文件、自动执行跨云备份，并将数据同步到 S3 或 Google Drive — 一切都在简洁的桌面 GUI 中完成。

Nextcloud 内置的同步客户端非常适合保持本地文件夹同步，但当您需要将数据迁移到另一个云、自动执行跨提供商备份，或将 Nextcloud 文件与其他存储系统一起浏览时，它就无能为力了。RcloneView 通过 WebDAV（Nextcloud 公开的标准协议）连接到 Nextcloud，并在双面板文件浏览器中将其视为与任何其他云远程一样的存在。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 通过 WebDAV 将 Nextcloud 连接到 RcloneView

Nextcloud 在您服务器上的标准 URL 路径处公开 WebDAV。在 RcloneView 中，进入 **Remote tab → New Remote**，然后选择 **WebDAV** 作为提供商类型。输入您的 Nextcloud WebDAV URL（通常为 `https://your-nextcloud.example.com/remote.php/dav/files/USERNAME/`）、您的 Nextcloud 用户名和密码。将 **Vendor** 选项设置为 Nextcloud，以在 rclone WebDAV 后端中启用 Nextcloud 特定的优化。

保存后，您的 Nextcloud 文件将出现在浏览器面板中，界面与任何其他提供商相同 — 文件夹树、可排序的文件列表以及面包屑导航。您可以像使用 Google Drive 或 Dropbox 一样，浏览、重命名、复制、删除文件，并在 Nextcloud 与其他位置之间拖放文件。

<img src="/support/images/en/blog/new-remote.png" alt="Connecting Nextcloud to RcloneView via WebDAV" class="img-large img-center" />

## 将 Nextcloud 备份到 S3 或 Backblaze B2

自托管的 Nextcloud 服务器需要一个异地备份策略。使用 RcloneView 的 Job Manager，您可以创建一个从您的 Nextcloud 远程到 Amazon S3、Backblaze B2 或任何其他云提供商的同步任务。这将为您提供存储在外部的所有 Nextcloud 数据的冗余副本，从而防止服务器故障或托管提供商问题带来的损失。

配置任务时启用 **Enable Checksum** 以确保数据完整性，如果您只需要备份最近修改过的文件，可以使用 **Max file age** 过滤器。使用 PLUS 许可证，您可以将此任务安排为每晚运行，以便备份始终反映您 Nextcloud 数据的当前状态。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling Nextcloud backup to S3 in RcloneView" class="img-large img-center" />

## 将 Nextcloud 文件同步到 Google Drive 或 OneDrive

许多组织出于隐私原因在内部运行 Nextcloud，但需要通过 Google Drive 或 OneDrive 与外部共享特定文件以进行协作。RcloneView 使这一流程变得明确且可重复：从特定的 Nextcloud 文件夹创建一个复制或同步任务，目标为 Google Drive 共享云端硬盘或 OneDrive 文件夹，并在需要发布更新时安排其运行。

对于将 Nextcloud 用作内部文档管理系统、将 Google Drive 用作面向外部协作层的团队来说，这种模式很常见。Folder Compare 功能可让您在每次同步前后验证 Nextcloud 和 Google Drive 副本是否一致。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Syncing Nextcloud files to Google Drive using RcloneView" class="img-large img-center" />

## 开始使用

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 在 **Remote tab** 中添加您的 Nextcloud WebDAV URL 作为新的远程。
3. 在双面板浏览器中浏览 Nextcloud 文件，并与其他云提供商并排显示。
4. 创建一个到 S3 或 Backblaze B2 的定时备份任务，以实现异地保护。

无论是个人服务器、托管方案还是企业部署，RcloneView 都能为您的 Nextcloud 实例带来完整的桌面管理能力。

---

**相关指南：**

- [使用 RcloneView 通过 WebDAV 备份 Nextcloud](https://rcloneview.com/support/blog/backup-nextcloud-webdav-with-rcloneview)
- [使用 RcloneView 将 Nextcloud 同步到 Backblaze B2](https://rcloneview.com/support/blog/sync-nextcloud-to-backblaze-b2-rcloneview)
- [使用 RcloneView 将 Nextcloud 迁移到 Google Drive](https://rcloneview.com/support/blog/migrate-nextcloud-to-google-drive-rcloneview)

<CloudSupportGrid />
