---
slug: plex-cloud-mount-rcloneview
title: "通过 Plex 与 RcloneView 流式播放云端电影——将 Google Drive、Dropbox 或 S3 挂载为您的媒体库"
authors:
  - tayson
description: 使用 RcloneView 将 Google Drive、Dropbox、Wasabi 或 S3 挂载为 Plex 可以索引的本地驱动器。无需下载即可流式播放存储在云端的电影——无需命令行操作。
keywords:
  - plex cloud mount
  - google drive plex
  - rclone mount plex
  - cloud movie server
  - plex cloud streaming
  - rcloneview
  - vfs cache plex
tags:
  - plex
  - google-drive
  - onedrive
  - dropbox
  - s3
  - mount
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 通过 Plex 与 RcloneView 流式播放云端电影——将 Google Drive、Dropbox 或 S3 挂载为您的媒体库

> 磁盘空间不够用了？使用 RcloneView 将您的云存储挂载为本地驱动器，让 Plex 直接从中流式播放——流畅、可靠，且无需命令行设置。

Plex 在整理和流式播放媒体方面表现出色，但本地存储空间很快就会被占满。与此同时，云存储桶——Google Drive、Dropbox、Wasabi、Cloudflare R2、S3——提供了廉价且几乎无限的空间。缺少的一环是让 Plex 能像识别本地路径一样“看到”这些云文件夹。Rclone 的 `mount` 命令解决了这个问题，而 RcloneView 则将这一强大功能封装在一个简单的图形界面中：选择一个云文件夹，选择驱动器盘符或挂载路径，启用缓存，然后即可使用。无需终端，也无需记忆各种参数。

<!-- truncate -->

RcloneView 底层使用经过验证的 rclone 引擎。您可以连接所有主流提供商，将其挂载为本地文件夹或驱动器盘符，并让 Plex 指向这些路径。在配置正确的 VFS 缓存设置后，Plex 可以以最小的缓冲从云存储中扫描、寻址和流式播放。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

## Plex 与 RcloneView 如何协同工作

Plex 扫描一个本地路径（例如 Windows 上的 `X:\Movies` 或 macOS 上的 `/Volumes/Cloud/Movies`）。RcloneView 将您的云文件夹挂载到该路径，这样 Plex 就会将其视为普通的本地目录。

文字示意图
[Google Drive 电影] ⇄ [RcloneView 挂载 (X:/ 或 /Volumes/Cloud)] ⇄ [Plex 媒体库]

相关文档

- RcloneView 挂载基础：[将云存储挂载为本地驱动器](/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive)
- 通过内嵌 Rclone 使用高级参数：[常规设置](/howto/rcloneview-basic/general-settings)
- 添加 OAuth 登录（Google/Dropbox/OneDrive）：[通过浏览器登录连接](/howto/remote-storage-connection-settings/add-oath-online-login)
- S3/Wasabi/R2 设置：[配置 S3 存储](/howto/remote-storage-connection-settings/s3) · [Cloudflare R2 凭证](/howto/cloud-storage-setting/cloudflare-r2-credential)

## 只需几步即可挂载并流式播放

连接一个云存储，创建一个挂载，然后让 Plex 指向它。就是这么简单。

1. 连接一个远程

- 支持 Google Drive、OneDrive、Dropbox、S3/Wasabi/R2 等。通过 `+ New Remote` 逐一添加。
- 指南：[基于 OAuth 的提供商](/howto/remote-storage-connection-settings/add-oath-online-login) · [S3 兼容存储](/howto/remote-storage-connection-settings/s3) · [Dropbox 后端说明](https://rclone.org/dropbox/)

<img src="/support/images/en/howto/remote-storage-connection-settings/add-new-remote.png" alt="Add a new remote in RcloneView" class="img-large img-center" />

2. 创建一个挂载

- 方法一——从远程资源管理器：[从远程资源管理器挂载](/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive#method-1-mount-from-remote-explorer)
- 方法二——通过挂载管理器：[通过挂载管理器挂载](/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive#method-2-mount-via-mount-manager)

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="Mount from Remote Explorer in RcloneView" class="img-large img-center" />

3. 选择挂载目标

- Windows：选择一个驱动器盘符（例如 `X:`）。在底层，RcloneView 使用 `cmount` 以确保兼容性。
- macOS：在 `/Volumes/Cloud` 下选择一个挂载路径（或自定义路径）。
- Linux：选择一个挂载目录（例如 `/mnt/plex-cloud`）。

4. 为 Plex 配置缓存

- 在挂载对话框的高级选项中，将 **Cache mode** 设置为 `full`，以获得最佳的 Plex 兼容性。
- 可以选择设置 **Cache max size**（例如 10–50 GB）和 **Dir cache time**。
- 您还可以在内嵌 Rclone → **Global Rclone Flags** 中调整全局参数，例如 `--vfs-read-ahead`。参见：/support/howto/rcloneview-basic/general-settings

5. 挂载并验证

- 点击“Save and mount”，然后在文件资源管理器中打开挂载文件夹，确认可以浏览电影文件。

6. 添加到 Plex

- Plex → Libraries → Add Library → Add folders → 选择您挂载的路径（`X:\Movies` 或 `/Volumes/Cloud/Movies`）。让 Plex 进行扫描和索引。

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="Configure mount from Mount Manager" class="img-large img-center" />

## 流畅播放的性能调优

以下设置可以减少缓冲，并在从云存储流式播放高码率文件时改善寻址性能。

- VFS 缓存模式：使用 `full` 以进行扫描和寻址（转码和缩略图生成也会更加可靠）。
- 缓存大小：如果有可用的 SSD 空间，可分配 10–50 GB。
- 预读：通过 Global Rclone Flags 增大 `--vfs-read-ahead`（例如 64M–256M）。
- 带宽限制：如果您的网络较为繁忙，请设置合理的限制，以确保高峰时段 Plex 仍能流畅运行。
- 将 Plex 元数据保留在本地：将元数据和缩略图存储在本地 SSD 上，仅将媒体文件保留在云端。

注意：缓存大小和预读值取决于具体使用场景。建议从保守的设置开始，并在监控播放和驱动器活动的同时进行调整。

## 谁能从中获益最多

- 家庭影院收藏者：将 10 TB 的电影档案保存在 Google Drive 或 Dropbox 中，通过 Plex 流式播放，而无需扩充本地磁盘。
- NAS 混合方案：将 NAS 用作 SSD 缓存层，而主媒体库通过挂载存放在 S3/Wasabi/R2 中。
- 开发者与家庭实验室爱好者：将 RcloneView 挂载接入 Docker 化的 Plex；使用已保存的挂载配置并在登录时自动挂载，以提高可靠性。

## 故障排查要点

- Plex 中看不到媒体库路径：确认挂载处于活动状态，并且运行 Plex 的操作系统用户可以访问该挂载路径。
- 重启后挂载消失：在挂载对话框中启用 **Auto mount**，并考虑在设置中开启“Launch at login”。→ [将云存储挂载为本地驱动器](/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive) · [常规设置](/howto/rcloneview-basic/general-settings)
- 扫描缓慢或播放卡顿：使用 `Cache mode: full`，增大缓存大小和 `--vfs-read-ahead`，并将元数据保留在本地。
- API 限制或限流：将扫描安排在非高峰时段进行；如果您的媒体库非常庞大，可使用 Compare & Sync 来精选 Plex 需要扫描的内容。→ [比较文件夹内容](/howto/rcloneview-basic/compare-folder-contents) · [创建同步任务](/howto/rcloneview-basic/create-sync-jobs)

## 云端电影，本地体验

通过 RcloneView 进行挂载，可以让 Plex 将您的云存储视为一块快速的本地驱动器。您既能保留 Google Drive、Dropbox、Wasabi 或 S3 的灵活性与可扩展性，Plex 又能提供同样出色的体验——而无需再为磁盘空间发愁。设置一个挂载，让 Plex 指向它，调整缓存，然后按下播放键即可。

准备好尝试了吗？立即下载 RcloneView，构建属于您的云端 Plex 媒体库。


<CloudSupportGrid />
