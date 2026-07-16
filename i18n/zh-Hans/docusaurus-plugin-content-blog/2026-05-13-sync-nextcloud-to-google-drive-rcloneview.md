---
slug: sync-nextcloud-to-google-drive-rcloneview
title: "将 Nextcloud 同步到 Google Drive —— 使用 RcloneView 迁移与备份文件"
authors:
  - tayson
description: "了解如何使用 RcloneView 将 Nextcloud 同步到 Google Drive。将文件从自托管的 Nextcloud 服务器传输到 Google Drive，并支持完整自动化。"
keywords:
  - Nextcloud to Google Drive sync
  - migrate Nextcloud Google Drive
  - RcloneView Nextcloud Google Drive
  - sync self-hosted cloud to Google Drive
  - Nextcloud WebDAV sync RcloneView
  - backup Nextcloud to Google Drive
  - cloud migration self-hosted RcloneView
  - transfer Nextcloud files Google Drive
  - Nextcloud Google Drive automated sync
  - RcloneView WebDAV cloud transfer
tags:
  - nextcloud
  - google-drive
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 将 Nextcloud 同步到 Google Drive —— 使用 RcloneView 迁移与备份文件

> Nextcloud 让您完全掌控自己的数据 —— RcloneView 则搭建了通往 Google Drive 的桥梁，用于冗余备份、迁移或团队协作。

Nextcloud 让组织拥有自己的存储基础设施，但自托管数据仍然需要一份异地副本。使用 RcloneView 将 Nextcloud 同步到 Google Drive，可以在主流云平台上创建第二份副本，无需编写脚本或手动传输文件。无论您是打算彻底摆脱自托管基础设施，还是想将 Nextcloud 作为主存储、Google Drive 作为辅助备份，RcloneView 都能通过可视化同步界面完成传输，并内置计划任务支持。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 在 RcloneView 中设置两个远程

在创建同步任务之前，您需要先配置好两个远程。对于 Google Drive，进入 **Remote** 标签页，点击 **New Remote**，然后选择 Google Drive —— 系统会打开浏览器窗口进行 OAuth 身份验证，无需手动管理 API 密钥或凭据。对于 Nextcloud，选择 **WebDAV** 作为远程类型。按照 `https://your-nextcloud.example.com/remote.php/dav/files/username/` 的格式输入您的 Nextcloud 服务器 URL，同时提供 Nextcloud 用户名和密码（如果账户启用了双重验证，则使用应用专用密码）。

<img src="/support/images/en/blog/new-remote.png" alt="Adding Nextcloud WebDAV and Google Drive remotes in RcloneView" class="img-large img-center" />

保存两个远程后，从资源管理器面板分别点击进入以验证连接。Nextcloud 连接成功后会显示您主目录的文件夹结构；Google Drive 则会显示您的云端硬盘根目录。如果 Nextcloud 返回身份验证错误，请确认 URL 包含完整的 WebDAV 路径 —— 遗漏 `/remote.php/dav/files/username/` 是最常见的设置错误。

## 创建 Nextcloud 到 Google Drive 的同步任务

在验证两个远程都可正常使用后，从 Home 标签页打开 **Job Manager**，创建一个新的 **Sync** 任务。在第 1 步中，将您的 Nextcloud 路径设置为源，将 Google Drive 文件夹设置为目标。确认同步方向设置为单向（仅从源修改目标）—— 这样可以将 Nextcloud 内容镜像到 Google Drive，而不会改动您的 Nextcloud 文件。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring Nextcloud to Google Drive sync job in RcloneView" class="img-large img-center" />

在第 2 步中，根据您服务器的上传能力配置并发传输数。对于大型 Nextcloud 资料库 —— 例如包含 200 GB 素材的设计团队共享项目文件夹 —— 增加并发传输数可以加快 Google Drive 目标的初始填充速度。当数据完整性至关重要时，启用 **checksum** 校验；这可以确认每个传输的文件与源文件的内容哈希一致，而不仅仅是文件大小相同。

## 过滤系统文件夹和元数据

Nextcloud 服务器会积累系统文件夹、缩略图缓存和临时文件，这些内容不应出现在 Google Drive 镜像中。在任务向导的第 3 步，添加过滤规则以排除这些路径。像 `.nextcloud/` 或 `.thumbs/` 这样的模式可以跳过那些只会给目标增加噪音而没有实际价值的元数据目录。RcloneView 为图片、文档和视频预设的过滤规则，可以让您将同步范围限定为团队真正关心的文件类型。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running the Nextcloud to Google Drive sync job in RcloneView" class="img-large img-center" />

在正式运行任务之前，可以使用 Job Manager 中的 **Dry Run** 选项预览所有计划中的操作。Dry Run 会列出所有将被复制的文件，但不会实际做出任何更改 —— 这在进行大规模初始传输之前是一项有用的检查。

## 通过计划任务实现自动同步

验证完 Dry Run 结果后，保存任务，若拥有 PLUS 许可证，可以在第 4 步附加计划任务。每晚运行的类似 cron 的计划任务可以让您的 Google Drive 副本随 Nextcloud 每天的变化保持最新，无需手动干预。同步完成通知会在每次计划运行成功时提醒您。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling automated Nextcloud to Google Drive sync in RcloneView" class="img-large img-center" />

## 快速上手

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 通过 New Remote 添加一个 **Google Drive** 远程（OAuth 浏览器登录）和一个 **Nextcloud** 远程（WebDAV URL + 凭据）。
3. 创建一个 **Sync** 任务，将 Nextcloud 路径设为源，将 Google Drive 文件夹设为目标。
4. 运行 **Dry Run** 以核实范围，然后保存并附加计划任务，实现持续自动同步。

保持 Nextcloud 数据在 Google Drive 上的同步副本，可以确保服务器故障或意外删除永远不会导致数据永久丢失。

---

**相关指南：**

- [使用 RcloneView 将 Nextcloud 同步到 Backblaze B2](https://rcloneview.com/support/blog/sync-nextcloud-to-backblaze-b2-rcloneview)
- [使用 RcloneView 管理 Nextcloud 云同步与备份](https://rcloneview.com/support/blog/manage-nextcloud-cloud-sync-backup-rcloneview)
- [使用 RcloneView 将 Seafile 迁移到 Google Drive](https://rcloneview.com/support/blog/migrate-seafile-to-google-drive-rcloneview)

<CloudSupportGrid />
