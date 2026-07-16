---
slug: manage-1fichier-cloud-sync-rcloneview
title: "管理 1Fichier 云存储 — 使用 RcloneView 同步和备份文件"
authors:
  - steve
description: "将 1Fichier 连接到 RcloneView，实现图形化文件管理、自动备份和跨云传输。无需命令行工具即可管理您的 1Fichier 资料库。"
keywords:
  - 1Fichier RcloneView 同步
  - 管理 1Fichier 文件 GUI
  - 1Fichier 云备份
  - 1Fichier 文件传输 RcloneView
  - 1Fichier 到 Google Drive
  - rclone 1Fichier GUI
  - 1Fichier 存储管理
  - 1Fichier 备份工具
tags:
  - RcloneView
  - 1fichier
  - cloud-storage
  - cloud-sync
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 管理 1Fichier 云存储 — 使用 RcloneView 同步和备份文件

> 将您的 1Fichier 账户连接到 RcloneView，管理文件、创建自动备份，并将数据传输到其他云服务商 — 全程无需使用命令行。

1Fichier 是一款法国云存储和文件托管服务，以其慷慨的存储空间和文件分享功能而广受欢迎。虽然 1Fichier 网页界面可以处理浏览和手动下载，但对于需要迁移大型资料库、创建自动备份，或将 1Fichier 集成到多云工作流中的用户来说，需要一款功能更强大的工具。RcloneView 的 1Fichier 后端通过简洁的图形界面处理了所有这些需求。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 将 1Fichier 连接到 RcloneView

在 RcloneView 中，打开 **远程 标签 → 新建远程**，然后从服务商列表中选择 1Fichier。身份验证需要您的 1Fichier API 密钥，您可以在 1Fichier 账户设置的 API 部分生成该密钥。将 API 密钥粘贴到 RcloneView 的配置对话框中并保存。远程会立即准备就绪。

您的 1Fichier 文件夹和文件会显示在浏览器面板中，可通过文件夹树浏览，也可对文件列表进行排序。右键点击任意文件夹并选择 **获取大小**，即可查看该文件夹的文件总数和总大小，这在规划迁移或备份任务前审查数据量时非常有用。

<img src="/support/images/en/blog/new-remote.png" alt="Connecting 1Fichier to RcloneView as a new remote" class="img-large img-center" />

## 下载和整理 1Fichier 内容

对于在 1Fichier 上存储大量文件档案、并希望将其迁移到 Google Drive、OneDrive 或本地 NAS 等更便于访问的服务商的用户来说，RcloneView 的跨云复制任务是理想工具。在一个面板中打开 1Fichier，在另一个面板中打开目标位置，然后在任务管理器中创建复制任务。设置合适的传输并发数 — 1Fichier 对免费账户施加了下载速率限制，因此高级账户用户会体验到更快的传输速度。

按文件类型或文件夹名称筛选任务，可以有选择性地迁移内容。例如，仅从混合内容的档案中提取视频文件，或复制特定的文件夹结构，同时保留其余部分不变。

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="Dragging files from 1Fichier to another cloud in RcloneView" class="img-large img-center" />

## 将文件备份到 1Fichier

1Fichier 的文件托管功能使其成为可行的辅助备份目标，尤其适合希望在欧洲保留归档副本的用户。以 Google Drive、Dropbox 或本地文件夹作为源，创建同步或复制任务,并将您的 1Fichier 账户设为目标。任务管理器会在传输失败时自动重试，这一点非常重要,因为文件托管服务的 API 响应时间可能会有所波动。

在 **传输中标签** 中监控传输进度，并在 **任务历史** 中查看完整的审计记录，了解备份了哪些内容以及备份时间。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitoring 1Fichier backup transfer progress in RcloneView" class="img-large img-center" />

## 快速上手

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 在您的 1Fichier 账户设置中生成 API 密钥。
3. 在 **远程 标签 → 新建远程** 中添加 1Fichier 作为远程。
4. 创建复制或同步任务来迁移或备份您的 1Fichier 数据。

RcloneView 让 1Fichier 成为您云存储工具包中可管理的一部分，使用与您管理其他任何服务商相同的拖放式界面。

---

**相关指南：**

- [使用 RcloneView 下载和整理 1Fichier 存储](https://rcloneview.com/support/blog/download-organize-1fichier-cloud-storage-rcloneview)
- [使用 RcloneView 进行云到云迁移](https://rcloneview.com/support/blog/cloud-to-cloud-migration-rcloneview)
- [使用 RcloneView 管理多个云账户](https://rcloneview.com/support/blog/manage-multiple-cloud-accounts-with-rcloneview)

<CloudSupportGrid />
