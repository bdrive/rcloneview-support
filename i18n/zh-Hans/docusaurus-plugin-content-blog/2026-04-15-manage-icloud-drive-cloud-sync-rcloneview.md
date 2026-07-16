---
slug: manage-icloud-drive-cloud-sync-rcloneview
title: "管理 iCloud Drive 存储 — 使用 RcloneView 同步和备份文件"
authors:
  - tayson
description: "使用 RcloneView 管理 iCloud Drive — 通过基于 rclone v1.69+ 构建的图形界面,将 iCloud Drive 文件同步、备份并传输到其他云端。"
keywords:
  - iCloud Drive 管理
  - iCloud Drive 同步
  - iCloud 备份工具
  - RcloneView iCloud
  - iCloud Drive 文件传输
  - Apple 云存储图形界面
  - iCloud 到 Google Drive
  - 多云备份
  - iCloud Drive rclone
  - Apple 云存储备份
tags:
  - RcloneView
  - cloud-storage
  - cloud-sync
  - backup
  - macos
  - guide
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 管理 iCloud Drive 存储 — 使用 RcloneView 同步和备份文件

> iCloud Drive 是 Apple 的原生云存储 — 由 rclone v1.69+ 提供支持的 RcloneView 可以直接连接到 iCloud Drive,将你的 Apple 云端内容纳入多云文件管理工作流程。

iCloud Drive 与 macOS 和 iOS 的工作流程深度集成,但过去若想将文件从 iCloud 导出以备份到其他提供商,或将 iCloud 内容与基于 Windows 的系统同步,通常都需要依赖 Apple 自家的生态系统应用。RcloneView 利用 rclone v1.69+ 对 iCloud Drive 的支持,可以直接连接到你的 Apple 云存储,并将其集成到跨平台文件管理界面中。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 在 RcloneView 中连接 iCloud Drive

iCloud Drive 支持需要 **rclone v1.69 或更高版本**。RcloneView 内置了嵌入式 rclone 二进制文件,并支持应用内 rclone 自我更新 — 你可以通过 **Help** 标签页直接在应用内更新到所需版本。

要连接 iCloud Drive,请前往 **Remote tab > New Remote**,然后从提供商列表中选择 **iCloud Drive**。输入你的 Apple 账户凭据以完成身份验证。配置完成后,你的 iCloud Drive 将以远程的形式出现在浏览器中,显示你所有的 iCloud 文件夹和文件。在 macOS 上,无论文件是否已下载到本地,这都能准确显示 iCloud 中实际存储的内容。

<img src="/support/images/en/blog/new-remote.png" alt="Adding iCloud Drive as a new remote in RcloneView" class="img-large img-center" />

## 将 iCloud Drive 备份到其他云端

最常见的用例是:将 iCloud Drive 内容进行云到云备份,备份到 Amazon S3、Backblaze B2 或 Google Drive,以实现跨平台访问和灾难恢复。在 RcloneView 的 **Job Manager** 中配置一个同步任务 — 源为你的 iCloud Drive 远程,目标为你的备份云远程。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling iCloud Drive backup to another cloud in RcloneView" class="img-large img-center" />

对于将 iCloud Drive 作为主要文档存储的专业人士 — 存有 500 GB 的设计素材、客户文件和项目档案 — 设置每晚自动备份到 Backblaze B2 可以建立一个不依赖单一提供商的安全网。iCloud Drive 的文件夹结构包括 Desktop、Documents 以及各应用专属文件夹。RcloneView 的过滤选项可以让你包含或排除特定路径 — 例如只同步 Documents 文件夹,而跳过体积庞大的媒体库。

## 跨平台 iCloud 访问

在混合使用 Mac 和 Windows 环境的团队中,常常会因 iCloud 的 Windows 客户端功能有限而遇到困扰。运行在 Windows 上的 RcloneView 可以连接到 iCloud Drive 并提供直接的文件访问,从而能够将 iCloud 内容复制或同步到团队共享的网络驱动器或 NAS 系统。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Accessing iCloud Drive from Windows using RcloneView" class="img-large img-center" />

双面板浏览器让跨平台文件管理变得简单直接:一侧是 iCloud Drive,另一侧是目标 Windows 共享或其他云端。在两个面板之间拖拽文件即可完成复制,或者配置同步任务实现定期传输。

## 快速上手

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 通过 **Help > Check for Updates** 确保内置的 rclone 已更新至 v1.69+。
3. 前往 **Remote tab > New Remote**,选择 **iCloud Drive**,并输入你的 Apple 账户凭据。
4. 在 **Job Manager** 中配置同步任务,将你的 iCloud Drive 备份到其他云端。

有了 RcloneView,iCloud Drive 不再局限于 Apple 生态系统内部 — 你的 Apple 云端内容可以成为更广泛的多云备份与管理策略的一部分。

---

**相关指南:**

- [使用 RcloneView 管理 iCloud Drive — 入门指南](https://rcloneview.com/support/blog/icloud-drive-with-rcloneview)
- [管理 Google Drive 云存储 — 使用 RcloneView 同步和备份](https://rcloneview.com/support/blog/manage-google-drive-cloud-sync-backup-rcloneview)
- [管理 OneDrive 云存储 — 使用 RcloneView 同步和备份](https://rcloneview.com/support/blog/manage-onedrive-cloud-sync-backup-rcloneview)

<CloudSupportGrid />
