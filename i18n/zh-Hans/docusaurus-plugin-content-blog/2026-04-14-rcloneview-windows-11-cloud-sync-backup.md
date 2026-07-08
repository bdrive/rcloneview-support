---
slug: rcloneview-windows-11-cloud-sync-backup
title: "在 Windows 11 上使用 RcloneView —— 云存储同步与备份"
authors:
  - tayson
description: "在 Windows 11 上安装 RcloneView，开始跨 90 多个云服务商同步文件。完整的安装指南，涵盖安装、远程配置和定时备份。"
keywords:
  - RcloneView Windows 11
  - Windows 11 cloud sync tool
  - cloud storage backup Windows 11
  - rclone GUI Windows 11
  - Windows 11 file sync cloud
  - RcloneView installation Windows
  - cloud backup software Windows 11
  - multi-cloud sync Windows 11
tags:
  - RcloneView
  - windows
  - cloud-sync
  - installation
  - platform
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 在 Windows 11 上使用 RcloneView —— 云存储同步与备份

> RcloneView 通过单个 `.exe` 安装程序即可原生安装在 Windows 11 上，并自动捆绑 rclone。无需命令行设置即可连接并同步 90 多个云存储提供商。

Windows 11 内置了 OneDrive 同步功能，但它只支持一个服务商。RcloneView 弥补了这一空白：这是一款原生 Windows 应用程序，可同时连接 Google Drive、Dropbox、Amazon S3、Backblaze B2、Cloudflare R2 以及其他 90 多个提供商。无论你是将照片备份到多个云端的家庭用户，还是将部署产物同步到 S3 的开发者，Windows 11 上的 RcloneView 都能通过可视化界面完成，无需任何 PowerShell 或命令提示符脚本。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 在 Windows 11 上安装 RcloneView

从 [rcloneview.com](https://rcloneview.com/src/download.html) 下载 Windows 安装程序——文件名为 `setup_rclone_view-{version}.exe`，是一个 Inno Setup 安装程序。双击安装程序，按照安装向导操作（大多数用户使用默认安装目录即可），RcloneView 就会出现在开始菜单和任务栏中。

安装程序捆绑了 rclone——无需单独安装 rclone。RcloneView 启动时会运行其内置的 rclone 实例，监听地址为 `http://127.0.0.1:5582`。你可以在应用底部的页脚中看到 rclone 版本和连接状态。

**Windows 11 系统要求：**
- 架构：x86-64（Intel/AMD 64 位）。注意：不支持 Windows ARM64。
- VC++ 2015–2022 Redistributable（通常已预装；RcloneView 安装程序会自动检查）
- Windows Vista 或更高版本（完全支持 Windows 11）

<img src="/support/images/en/blog/new-remote.png" alt="RcloneView interface after installation on Windows 11" class="img-large img-center" />

## 添加云存储提供商

安装完成后，添加你的第一个云存储提供商。点击 **Remote 选项卡 → New Remote**，然后选择你的提供商。对于基于 OAuth 的服务（Google Drive、Dropbox、OneDrive、Box、pCloud），RcloneView 会打开你的默认浏览器进行身份验证——登录并授权即可。对于基于凭据的服务（Amazon S3、Backblaze B2、Cloudflare R2、Wasabi），直接输入你的访问密钥和私密密钥。

Windows 11 的默认浏览器（Edge 或 Chrome）能够顺畅处理 OAuth 流程。如果你所在的组织使用代理或限制基于浏览器的 OAuth，请检查网络设置，确保允许 `localhost` 重定向。

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="Drag-and-drop file upload from Windows 11 Explorer to cloud storage in RcloneView" class="img-large img-center" />

## 将云存储挂载为 Windows 驱动器

RcloneView 的挂载管理器（Mount Manager）可以将云存储挂载为 Windows 驱动器盘符（例如，Google Drive 对应 `Z:\`，Backblaze B2 对应 `Y:\`）。点击 **Remote 选项卡 → Mount Manager → New Mount**，选择你的远程和文件夹，选择一个盘符，然后点击 **Save and Mount**。

挂载后的云端驱动器会立即显示在文件资源管理器中，与本地驱动器并列。任何应用程序都可以读写挂载驱动器上的文件——这对于直接从 Office、Adobe Creative Suite 或其他任何 Windows 应用程序访问云端文件非常有用。启用 **Auto Mount**（PLUS 许可证）可以在 Windows 启动时自动挂载你的云端驱动器。

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="Mounting cloud storage as a Windows drive letter in RcloneView Mount Manager" class="img-large img-center" />

## 设置定时云备份

使用 RcloneView 的作业管理器（Job Manager）创建自动备份任务。一个典型的 Windows 11 设置示例：每晚将 `C:\Users\{user}\Documents\` 同步到 Backblaze B2，每周将 `C:\Users\{user}\Pictures\` 同步到 Google Drive。每个作业都会在计划的时间在后台运行——RcloneView 会最小化到 Windows 系统托盘，并在不保持主窗口打开的情况下继续运行计划任务。

启用桌面通知（Settings → Notifications → Show sync completion notification），即可在每个备份任务完成时收到 Windows 11 的弹窗通知。

## 快速上手

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**（Windows x86-64 安装程序）。
2. 运行安装程序，然后从开始菜单启动 RcloneView。
3. 通过 New Remote 添加你的云存储提供商（OAuth 浏览器验证或凭据输入）。
4. 在作业管理器中创建带有计划的同步任务，实现自动备份。

Windows 11 上的 RcloneView 用一个统一的界面取代了十几个独立的云同步客户端——让你完全掌控文件的去向和传输时间。

---

**相关指南：**

- [在 Windows Server 上使用 RcloneView —— 云备份设置](https://rcloneview.com/support/blog/rcloneview-on-windows-server-cloud-backup-rcloneview)
- [使用 RcloneView 将 Amazon S3 存储桶挂载为本地驱动器](https://rcloneview.com/support/blog/mount-amazon-s3-buckets-as-local-drives-rcloneview)
- [使用 RcloneView 自动化每日云备份](https://rcloneview.com/support/blog/automate-daily-cloud-backups-with-rcloneview)

<CloudSupportGrid />
