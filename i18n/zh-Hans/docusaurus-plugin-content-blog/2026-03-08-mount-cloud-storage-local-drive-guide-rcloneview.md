---
slug: mount-cloud-storage-local-drive-guide-rcloneview
title: "将云存储挂载为本地驱动器 — 像使用本地文件夹一样使用 Google Drive、S3 和 OneDrive 的完整指南"
authors:
  - tayson
description: "将 Google Drive、AWS S3、OneDrive 以及 70 多个云服务商作为本地驱动器访问。使用 RcloneView 挂载云存储的完整指南。"
keywords:
  - mount cloud storage local drive
  - mount google drive local
  - mount s3 local drive
  - mount onedrive local folder
  - cloud storage as local drive
  - rclone mount guide
  - map cloud drive letter
  - cloud storage network drive
  - mount dropbox local
  - virtual drive cloud storage
tags:
  - mount
  - feature
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 将云存储挂载为本地驱动器 — 像使用本地文件夹一样使用 Google Drive、S3 和 OneDrive 的完整指南

> 如果你的 Google Drive、S3 存储桶或 OneDrive 能像普通文件夹一样出现在你的电脑上会怎样？在任意应用中打开文件、直接保存到云端、在文件管理器中浏览一切 — 无需浏览器。

将云存储挂载为本地驱动器，可以让任何云服务商看起来、用起来就像电脑上的 U 盘或网络共享。在 Photoshop 中打开 Google Drive 文件，将 Excel 报表直接保存到 S3，在 Finder 中浏览你的 Dropbox。RcloneView 支持 70 多个云服务商实现这一切。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 什么是云挂载？

当你"挂载"云存储时，操作系统会创建一个映射到你云账户的虚拟驱动器。这些文件会像其他驱动器一样出现在你的文件管理器（Finder、Explorer、Nautilus）中。在后台，rclone 负责处理读写文件所需的 API 调用。

### 工作原理

```
Your App → Local Mount Point → rclone → Cloud API → Cloud Storage
```

当你打开一个文件时，rclone 会按需下载它。当你保存时，rclone 会上传更改。这一切对你的应用来说是透明的。

## 使用 RcloneView 进行挂载

### 从远程浏览器挂载

右键点击任意远程，选择 Mount：

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="Mount from remote explorer" class="img-large img-center" />

### 从挂载管理器挂载

使用挂载管理器可以更精细地控制挂载设置：

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="Mount Manager interface" class="img-large img-center" />

## 特定平台设置

### Windows

在 Windows 上，挂载的云存储会显示为一个盘符（例如，Google Drive 对应 `G:`，S3 对应 `S:`）。

**要求：**
- WinFsp（Windows File System Proxy）— RcloneView 可以为你安装。

挂载后，云驱动器会与本地驱动器一起显示在 Explorer 中。任何 Windows 应用都可以对其进行读写。

### macOS

在 macOS 上，挂载的存储会出现在 `/Volumes/` 以及 Finder 的侧边栏中。

**要求：**
- macFUSE — 从 macfuse.io 下载。

挂载后，你的云存储会以卷的形式出现在 Finder 中。

### Linux

在 Linux 上，挂载的存储会出现在你选择的挂载点（例如 `/mnt/gdrive`）。

**要求：**
- FUSE 3 — 在 Ubuntu/Debian 上执行 `sudo apt install fuse3`。

## 挂载云存储后你可以做什么

### 在任意应用中打开云端文件

- 在 LibreOffice 中编辑 Google Drive 电子表格。
- 在 Photoshop 中打开 S3 上的图片。
- 用 VLC 播放 OneDrive 中的媒体文件。
- 对 Dropbox 上的文件运行脚本。

### 直接保存到云端

任何应用中的"另存为"对话框都可以保存到你挂载的云驱动器，无需额外的上传步骤。

### 用脚本自动化

挂载的云存储可以与任何命令行工具配合使用：

```bash
# Copy local backups to mounted S3
cp /backups/database.sql /mnt/s3-backup/

# Process files from mounted Google Drive
python analyze.py /mnt/gdrive/reports/*.csv
```

### 在文件管理器中浏览

以浏览本地文件的方式浏览你的云存储 — 包括文件夹、搜索和预览。

## 性能优化建议

### 缓存

启用 VFS（虚拟文件系统）缓存以获得更好的性能：

- **只读工作负载**：最小化缓存即可。
- **读写工作负载**：启用完整缓存以获得更流畅的性能。
- **媒体流播放**：使用预读缓存。

### 缓冲区大小

增大缓冲区可以加快大文件的流式传输速度。默认设置适合大多数文件，但视频播放会受益于更大的缓冲区。

### 目录缓存

对于包含数千个文件的目录，启用目录缓存可以避免重复的 API 调用，让浏览体验更流畅。

## 同时挂载多个云存储

一次性挂载你所有的云存储：

| Cloud | Mount Point (Windows) | Mount Point (Linux) |
|-------|----------------------|-------------------|
| Google Drive | `G:` | `/mnt/gdrive` |
| OneDrive | `O:` | `/mnt/onedrive` |
| AWS S3 | `S:` | `/mnt/s3` |
| Dropbox | `D:` | `/mnt/dropbox` |
| Backblaze B2 | `B:` | `/mnt/b2` |

所有云存储挂载完成后，你的文件管理器就成了所有存储的统一视图。

## 挂载 vs 同步：何时使用哪种方式

| Scenario | Use Mount | Use Sync |
|----------|:---------:|:--------:|
| Open files occasionally | ✅ | ❌ |
| Work offline | ❌ | ✅ |
| Large media streaming | ✅ (with cache) | ❌ |
| Full local copy needed | ❌ | ✅ |
| App integration | ✅ | ❌ |
| Backup/archive | ❌ | ✅ |

**挂载**适合在不下载全部内容的情况下按需访问。**同步**适合在离线工作或备份时需要完整本地副本的场景。

## 常见问题

### "Mount point not found"

先创建挂载点目录（Linux/macOS）：

```bash
sudo mkdir -p /mnt/gdrive
```

在 Windows 上，选择一个未被占用的盘符。

### 文件列表加载缓慢

首次访问大型目录（10,000 个以上文件）可能需要一些时间。启用目录缓存可以加快后续的列表加载速度。

### 应用兼容性

大多数应用都能与挂载的驱动器正常配合使用。不过，一些需要快速随机访问的应用（数据库、拥有大型项目的视频编辑软件）在使用同步的本地副本时可能表现更好。

## 快速上手

1. **下载 RcloneView**，访问 [rcloneview.com](https://rcloneview.com/src/download.html)。
2. **安装 FUSE**（macOS 上安装 macFUSE，Windows 上安装 WinFsp，Linux 上安装 fuse3）。
3. **添加你的云端远程**。
4. **挂载**，从远程浏览器或挂载管理器进行操作。
5. **访问你的云存储**，就像在 Finder、Explorer 或 Nautilus 中访问其他驱动器一样。

你的云存储，你的文件管理器。无需浏览器标签页。

---

**相关指南：**

- [将云存储挂载为本地驱动器](https://rcloneview.com/support/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive)
- [创建同步任务](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [比较文件夹内容](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)

<CloudSupportGrid />
