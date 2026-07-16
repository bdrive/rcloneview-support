---
slug: rcloneview-chromeos-linux-cloud-sync
title: "在 ChromeOS 上运行 RcloneView — 通过 Linux 在你的 Chromebook 上实现云同步"
authors:
  - tayson
description: "ChromeOS 支持 Linux 应用。在你的 Chromebook 上运行 RcloneView，管理 Google Drive 之外的云存储 —— 与 S3、OneDrive、Dropbox 及 70 多个提供商同步。"
keywords:
  - chromeos cloud sync
  - chromebook cloud storage
  - rcloneview chromebook
  - chromeos rclone
  - chromebook file manager
  - chromeos linux apps
  - chromebook multi cloud
  - chromeos s3 sync
  - chromebook onedrive
  - chromeos cloud management
tags:
  - RcloneView
  - linux
  - platform
  - cloud-storage
  - guide
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 在 ChromeOS 上运行 RcloneView — 通过 Linux 在你的 Chromebook 上实现云同步

> Chromebook 非常适合 Google Drive。但 OneDrive、S3、Dropbox 或你的 NAS 呢？ChromeOS 的 Linux 支持让你可以运行 RcloneView，在 Chromebook 上实现完整的多云管理。

Chromebook 是围绕 Google Drive 构建的，但许多用户需要访问其他云服务提供商。学生可能有学校提供的 OneDrive，专业人士需要访问 S3，而从其他平台切换过来的用户则有文件存放在别处。ChromeOS 的 Linux（Crostini）环境让你可以安装 RcloneView，从 Chromebook 上管理所有云账户。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 在 ChromeOS 上启用 Linux

ChromeOS 内置了一个 Linux 环境（Crostini）。在“设置 → 高级 → 开发者 → Linux 开发环境”中启用它。

启用后，你将拥有一个完整的基于 Debian 的 Linux 环境，RcloneView 可以在其中原生运行。

## 安装 RcloneView

使用标准的 Linux 安装方法进行安装。你的 Chromebook 的 Linux 容器拥有自己的文件系统，并可以访问 ChromeOS 的 Downloads 文件夹。

<img src="/support/images/en/blog/new-remote.png" alt="Set up RcloneView on ChromeOS" class="img-large img-center" />

## 你能做什么

### 在一处管理所有云存储

在同一个界面中浏览 Google Drive、OneDrive、S3、Dropbox 以及 70 多个提供商：

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Multi-cloud on Chromebook" class="img-large img-center" />

### 在不同提供商之间传输

在任意两个云账户之间移动文件，无需先下载到本地 —— 这在本地存储空间有限的 Chromebook 上尤为重要。

### 备份非 Google 的云存储

安排从 OneDrive 或 Dropbox 到 Google Drive 或 S3 的定时备份：

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule backup on Chromebook" class="img-large img-center" />

### 挂载云存储

将远程存储挂载为本地驱动器，可从 ChromeOS 文件管理器中访问。

## ChromeOS 专属技巧

- **存储空间有限** —— Chromebook 的 SSD 容量较小，使用云到云传输可以避免占满本地存储
- **Linux 容器与 Downloads 共享** —— ChromeOS Downloads 文件夹中的文件可以从 Linux 中访问
- **为 Linux 容器分配足够的磁盘空间**用于缓存
- **保持 Linux 更新** —— 定期运行 `sudo apt update && sudo apt upgrade`

## 快速上手

1. 在 ChromeOS 设置中**启用 Linux**。
2. 按照 Linux 安装指南**安装 RcloneView**。
3. **添加你的云账户**。
4. **管理、同步和传输** —— 全部在你的 Chromebook 上完成。

你的 Chromebook 就此变身为多云工作站。

---

**相关指南：**

- [在 Ubuntu/Debian 上安装 RcloneView](https://rcloneview.com/support/blog/install-rcloneview-ubuntu-debian-linux)
- [在 ARM Linux 上使用 RcloneView](https://rcloneview.com/support/blog/rcloneview-arm-linux-cloud-sync)
- [在 WSL 上使用 RcloneView](https://rcloneview.com/support/blog/rcloneview-wsl-windows-subsystem-linux)

<CloudSupportGrid />
