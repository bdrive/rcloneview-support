---
slug: rcloneview-apple-silicon-mac-cloud-sync
title: "在 Apple Silicon Mac 上使用 RcloneView — 云存储同步与备份"
authors:
  - robin
description: "借助 Universal .dmg，在 Apple Silicon Mac 上原生运行 RcloneView。在一个 macOS 应用中挂载、同步和备份 90 多个云服务提供商。"
keywords:
  - rcloneview apple silicon
  - rclone gui m1 mac
  - Apple Silicon Mac 云同步
  - MacBook 挂载云存储
  - rclone universal binary macos
  - Mac mini 云备份
  - macOS 挂载云盘
  - rcloneview macOS 安装
  - Mac 同步 Google Drive OneDrive
  - arm64 Mac 云存储管理器
tags:
  - RcloneView
  - macos
  - cloud-sync
  - installation
  - platform
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 在 Apple Silicon Mac 上使用 RcloneView — 云存储同步与备份

> 一个 Universal 下载包即可在 Apple Silicon 和 Intel Mac 上原生运行，并内置 rclone 引擎。

许多 Apple Silicon Mac 用户同时使用多个云账户。RcloneView 提供一个原生 macOS 应用，可浏览、挂载、比较和同步 Google Drive、OneDrive、Dropbox、S3 存储桶、NAS 共享以及数十种其他远程。本指南介绍在 Apple Silicon 机器上安装前需要了解的内容。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 适用于 Apple Silicon 和 Intel 的单一 Universal .dmg

macOS 版 RcloneView 以单个 `.dmg` 磁盘映像发布，其中包含 Universal 二进制文件：既有面向 Apple Silicon 的 ARM64 代码，也有面向 Intel Mac 的 x86-64 代码。在 Apple Silicon 上，应用以原生方式运行。该版本经过开发者公证和代码签名，因此 Gatekeeper 无需任何变通方法即可打开它。

最低支持版本为 macOS 12.7（Monterey），并已确认可在 Ventura、Sonoma 和 Sequoia 上运行。请只从官方[下载页面](https://rcloneview.com/src/download.html)获取安装程序，因为没有 Homebrew cask 或其他包管理器渠道。安装后，macOS 版本会在应用内自动更新。

<img src="/support/images/en/blog/new-remote.png" alt="Adding a new cloud remote in RcloneView on an Apple Silicon Mac" class="img-large img-center" />

RcloneView 自带 rclone 二进制文件，因此无需另外安装任何东西。打开 Remote 选项卡，点击 **New Remote** 并登录。Google Drive、Dropbox、OneDrive 和 Box 使用浏览器 OAuth 登录。Wasabi 或 Cloudflare R2 等 S3 兼容服务则会要求输入访问密钥。

## 在 Finder 中挂载云盘

在 macOS 上，RcloneView 默认使用 `nfsmount` 挂载，并允许你选择自定义挂载路径。在资源管理器中选择一个文件夹，点击 Mount 图标，远程就会像本地卷一样出现在 Finder 中。默认的 VFS 缓存模式 `writes` 适合大多数编辑工作流程。使用 16 GB MacBook Air 浏览 2 TB 档案的摄影师，还可以设置缓存最大大小，避免缓存占满内置 SSD。

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="Mount Manager showing cloud drives mounted on macOS" class="img-large img-center" />

你可以在 Mount Manager 或菜单栏托盘图标中管理挂载。在 PLUS 许可证下，Auto mount 会在每次登录时重新连接你的驱动器。

## 值得提前调整的两项 macOS 设置

macOS 隐私控制可能导致桌面、文稿或下载文件夹在 RcloneView 中显示为空。请在 **System Settings > Privacy & Security > Files & Folders** 中授予访问权限，或将 RcloneView 添加到 **Full Disk Access**，然后重新启动应用。

大型同步任务也可能触及 macOS 默认的打开文件数限制（256–1024）。如果看到“too many open files”错误，请在 `/Library/LaunchDaemons/limit.maxfiles.plist` 创建 LaunchDaemon plist，将软限制和硬限制提高到 524288，然后重启。

## 从 Mac 进行计划备份

使用同步向导设置单向任务，例如将 `~/Projects` 同步到 Backblaze B2 存储桶，并先运行 Dry Run 准确查看将会发生的变化。RcloneView 可在 Windows、macOS 和 Linux 上通过一个窗口挂载并同步 90 多个提供商。在 PLUS 许可证下，当应用驻留在菜单栏时，计划步骤可以按 cron 风格的时间表运行任务。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Creating a scheduled cloud backup job in RcloneView on macOS" class="img-large img-center" />

## 开始使用

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**，并将其从 Universal `.dmg` 拖到 Applications 中。
2. 在 System Settings 中授予 Files & Folders 或 Full Disk Access 权限，然后重新启动应用。
3. 使用 **New Remote** 添加云远程，并挂载你希望在 Finder 中看到的远程。
4. 创建同步任务，用 Dry Run 检查，然后在 Transferring 选项卡中查看进度。

设置好 RcloneView 后，你的 Mac 就能在一个地方挂载、同步和备份你正在使用的云账户。

---

**相关指南：**

- [在 macOS Sequoia 上使用 RcloneView — 云存储同步](https://rcloneview.com/support/blog/rcloneview-macos-sequoia-cloud-sync)
- [修复 macOS Too Many Open Files 错误](https://rcloneview.com/support/blog/fix-macos-too-many-open-files-rcloneview)
- [修复 macOS 空文件夹与权限问题](https://rcloneview.com/support/blog/fix-macos-empty-folders-permissions-rcloneview)

<CloudSupportGrid />
