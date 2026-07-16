---
slug: stream-sync-putio-media-nas-cloud-rcloneview
title: "使用 RcloneView 流式传输并同步 Put.io 媒体文件到您的 NAS 或云盘"
authors:
  - tayson
description: "自动将 Put.io 下载内容同步到您的 Synology NAS、Plex 媒体库或 Google Drive —— 使用 RcloneView 整理媒体文件并保持一切都有备份。"
keywords:
  - putio sync nas
  - putio download manager
  - putio to google drive
  - putio file manager
  - putio rclone
  - putio media sync
  - putio backup tool
  - putio plex integration
  - putio to nas
  - putio automated download
tags:
  - RcloneView
  - putio
  - cloud-storage
  - media
  - sync
  - nas
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 使用 RcloneView 流式传输并同步 Put.io 媒体文件到您的 NAS 或云盘

> Put.io 非常适合云端下载，但要把这些文件整理好并转移到您的 NAS 或 Plex 服务器上，通常需要手动传输。RcloneView 可以将整个流程自动化。

Put.io 是一款热门的云服务，可以帮您获取文件——种子、直链等——并将它们存储在云端以供即时流式播放。但文件一旦存入 Put.io，大多数用户仍需手动将其下载到本地磁盘或 NAS。RcloneView 直接连接到 Put.io，并将整个工作流自动化：把新下载的内容同步到您的 Synology NAS、Plex 媒体库、Google Drive 或任何其他存储位置。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 为什么要自动化 Put.io 同步？

- **手动下载繁琐** —— 每一个新文件都需要打开浏览器、点击下载、等待，再移动文件。
- **NAS/Plex 集成** —— 自动将文件放入您的 Plex 媒体库文件夹，即可实现即时可用。
- **存储空间管理** —— Put.io 的存储空间有限。自动同步可以在文件安全转移到其他位置后，及时释放空间。
- **多目的地投递** —— 同时将媒体文件发送到您的 NAS、云端备份和便携式硬盘。

## 连接 Put.io

1. 打开 RcloneView，点击 **添加远程**。
2. 从提供商列表中选择 **Put.io**。
3. 通过 OAuth 进行身份验证。
4. 保存 —— 您的 Put.io 文件现在即可浏览。

<img src="/support/images/en/blog/new-remote.png" alt="Add Put.io remote in RcloneView" class="img-large img-center" />

## 浏览和管理您的 Put.io 文件

在资源管理器中查看您的整个 Put.io 媒体库，与您的本地磁盘或其他云盘并列显示：

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Browse Put.io files alongside NAS" class="img-large img-center" />

## 同步工作流

### Put.io → Synology NAS（Plex/Jellyfin）

自动将媒体文件投递到您的媒体服务器：

1. 创建一个复制任务：Put.io → NAS 媒体文件夹（例如 `/volume1/Plex/Movies`）。
2. 安排每小时运行一次 —— 新下载的 Put.io 内容会自动进入 Plex。
3. Plex 检测到新文件后，即可提供流式播放。

### Put.io → Google Drive

为您的 Put.io 下载内容保留云端备份：

1. 创建一个复制任务：Put.io → Google Drive 文件夹。
2. 通过 Google Drive 随时随地访问您的媒体文件。

### Put.io → 外部硬盘

维护一份离线媒体归档：

1. 创建一个复制任务：Put.io → 外部硬盘路径。
2. 连接硬盘时手动运行，或者如果硬盘一直保持连接，则设置定时任务。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Run Put.io sync job" class="img-large img-center" />

## 让整个流程自动化

1. 使用 [任务调度](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution) **安排每小时同步一次**。
2. **使用批量任务** 按顺序将 Put.io 同步到多个目的地。
3. 当新文件同步完成时，通过 [Telegram](https://rcloneview.com/support/blog/rcloneview-telegram-remote-control) **接收通知**。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule Put.io sync" class="img-large img-center" />

## 监控传输

实时查看文件从 Put.io 流向您的 NAS 的过程：

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitor Put.io file transfers" class="img-large img-center" />

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Put.io sync job history" class="img-large img-center" />

## 开始使用

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 通过 OAuth **添加 Put.io** 作为远程。
3. **添加您的目的地**（NAS、Google Drive、外部硬盘）。
4. **创建一个复制任务** 并设置定时。
5. **享受自动化的媒体投递** —— 文件从 Put.io 无需动手即可进入您的 Plex 媒体库。

不要再手动从 Put.io 下载文件了。RcloneView 会将其变成一条自动化的媒体流水线，将文件准确无误地投递到您想要的位置。

---

**相关指南：**

- [通过浏览器登录添加远程（OAuth）](https://rcloneview.com/support/howto/remote-storage-connection-settings/add-oath-online-login)
- [浏览与管理远程](https://rcloneview.com/support/howto/rcloneview-basic/browse-and-manage-remote-storage)
- [创建同步任务](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [任务调度](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)
- [Synology NAS 自动检测与连接](https://rcloneview.com/support/tutorials/synology-nas-cloud-transfer)

<CloudSupportGrid />
