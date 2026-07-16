---
slug: sync-http-remote-download-organize-rcloneview
title: "在 RcloneView 中使用 HTTP/HTTPS 远程 — 从 Web 服务器下载并整理文件"
authors:
  - tayson
description: "RcloneView 可以将任何 HTTP/HTTPS 文件服务器连接为只读远程。自动下载、整理并将公开托管的文件同步到您的云存储。"
keywords:
  - rclone http remote
  - http file download sync
  - web server file sync
  - http to cloud transfer
  - download files to cloud
  - http remote rcloneview
  - web directory sync
  - http ftp file manager
  - download organize cloud
  - web hosted files sync
tags:
  - RcloneView
  - ftp
  - cloud-storage
  - sync
  - guide
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 在 RcloneView 中使用 HTTP/HTTPS 远程 — 从 Web 服务器下载并整理文件

> 某个 Web 服务器上有您需要的文件——数据集、固件、归档文件、媒体文件。与其手动下载再重新上传到云端，不如使用 RcloneView 的 HTTP 远程直接传输。

许多机构、研究单位和开源项目都通过 HTTP/HTTPS Web 服务器托管文件。手动下载这些文件再上传到云存储既繁琐又浪费本地带宽。RcloneView 可以将任何 HTTP 目录列表连接为只读远程，让您浏览其中内容并直接传输到任意云服务商。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## HTTP 远程的工作原理

HTTP 远程连接到提供目录列表的 Web 服务器。RcloneView 会解析目录结构，并将其呈现为可浏览的文件树——就像其他任何远程一样。文件随后可以被复制到任何其他远程（Google Drive、S3、本地存储等）。

**重要提示**：HTTP 远程是只读的。您可以从中下载/复制，但不能向其上传。

## 添加 HTTP 远程

<img src="/support/images/en/blog/new-remote.png" alt="Add HTTP remote" class="img-large img-center" />

将远程指向任何提供目录列表的 Web 服务器 URL。

## 使用场景

### 镜像开放数据集

研究机构通常通过 HTTP 托管大型数据集。将它们镜像到您的 S3 或 Google Drive，以获得可靠的访问：

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Mirror web dataset to cloud" class="img-large img-center" />

### 归档网络托管的文件

如果文件可能会从服务器中被移除，创建一份云端副本以便保存。

### 整理下载的内容

浏览 HTTP 服务器结构，选择所需内容，并传输到有条理的云文件夹中。

### 定期安排下载任务

对于定期更新的服务器（固件、软件包、数据发布），可以安排定期同步任务：

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule HTTP sync" class="img-large img-center" />

### 验证下载内容

将 HTTP 源与您的云端副本进行比较：

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify HTTP downloads" class="img-large img-center" />

## 快速上手

1. **下载 RcloneView**，访问 [rcloneview.com](https://rcloneview.com/src/download.html)。
2. **添加 HTTP 远程**，指向该 Web 服务器。
3. **在文件浏览器中浏览目录**。
4. **复制到您的云端**——支持 70 多个服务商中的任意一个。

Web 服务器就此成为您云端工具箱中的又一个远程。

---

**相关指南：**

- [连接 WebDAV 服务器](https://rcloneview.com/support/blog/connect-webdav-server-cloud-sync-rcloneview)
- [将 FTP 服务器迁移到云端](https://rcloneview.com/support/blog/migrate-ftp-server-to-cloud-storage-rcloneview)
- [创建同步任务](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)

<CloudSupportGrid />
