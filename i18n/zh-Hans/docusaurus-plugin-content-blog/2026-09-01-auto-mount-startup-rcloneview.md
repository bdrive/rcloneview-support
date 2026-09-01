---
slug: auto-mount-startup-rcloneview
title: "启动时自动挂载 — RcloneView 中随时就绪的云端硬盘"
authors:
  - tayson
description: "配置 RcloneView 的启动时自动挂载功能，让您的云端硬盘在电脑开机的瞬间就已就绪，无需每次手动重新挂载。"
keywords:
  - auto mount cloud drive startup
  - rcloneview 自动挂载
  - 开机自动挂载云存储
  - 常在线云端硬盘
  - windows 自动云挂载
  - 登录时启动云端硬盘
  - rcloneview plus 功能
  - 持久云挂载
  - mount manager rcloneview
  - 云端硬盘启动自动化
tags:
  - RcloneView
  - feature
  - mount
  - automation
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 启动时自动挂载 — RcloneView 中随时就绪的云端硬盘

> 无需每天早上打开 RcloneView 手动挂载每个云端硬盘，启动时自动挂载会在设备开机的瞬间自动将它们上线。

任何将挂载的云端硬盘作为日常工作流程一部分的人——无论是直接在 Google Drive 中编辑文件、从 S3 存储桶获取素材，还是像浏览本地文件夹一样浏览 SFTP 服务器——都清楚每次重启后重新挂载的麻烦。RcloneView 的启动时自动挂载设置彻底消除了这一步骤，在应用随系统启动的瞬间即可重新连接您配置好的挂载点。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 启动时自动挂载的作用

在特定挂载上启用后，RcloneView 会在每次应用启动时自动重新连接该远程的挂载点，使用您首次创建时配置的确切缓存模式、驱动器盘符或路径以及只读设置。与常规设置中的"登录时启动"结合使用，意味着在您打开 RcloneView 窗口之前，挂载的驱动器就可能已经出现在文件资源管理器中了。这是一项 PLUS 许可证功能，与基于计划的同步和多窗口支持并列——FREE 许可证仍然涵盖手动挂载、卸载以及对所有挂载的完整文件资源管理器访问。

该设置是按挂载而非全局生效的，因此您可以精确选择哪些驱动器自动重新连接。很少使用的存档远程可以保持手动模式，而您每天使用的主要工作驱动器——比如一个 Google Drive 文件夹和一个 S3 存储桶——则可以每次自动挂载。

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="Mount Manager 显示带有自动挂载选项的已配置挂载" class="img-large img-center" />

## 在 Mount Manager 中设置

从 Remote 标签页打开 Mount Manager，创建新挂载或编辑现有挂载。在挂载配置界面中，与缓存模式、卷名和只读状态等其他设置一起切换 Auto mount 选项，然后保存。RcloneView 可以在一个窗口中挂载并同步 90+ 家服务商，因此无论底层远程是 Google Drive、S3 兼容存储桶还是 SFTP 服务器，同一个自动挂载开关的工作方式都相同。

对于已在运行的挂载，请记住在挂载处于活动状态时 Edit 会被禁用；请先卸载，应用 Auto mount 开关，然后重新挂载以确认已正确保存。

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="直接从 Explorer 面板工具栏挂载远程文件夹" class="img-large img-center" />

## 将自动挂载与系统托盘配合使用

启动时自动挂载与"最小化启动"和系统托盘搭配使用效果最佳，这种组合可让 RcloneView 在后台启动、挂载您配置的驱动器，并在您需要之前保持在后台不打扰。系统托盘图标中的 Mount 菜单仍可让您随时查看状态或卸载驱动器，因此自动化不会让您失去手动控制的能力。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="显示已挂载驱动器状态的系统托盘菜单" class="img-large img-center" />

## 快速上手

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**，并在 Help > Activate License 中确认您的 PLUS 许可证已激活。
2. 打开 Mount Manager 并选择您希望自动重新连接的挂载。
3. 在该挂载的设置中启用 Auto mount 开关并保存。
4. 在常规设置中打开"登录时启动"，让 RcloneView 及其自动挂载的驱动器在您坐下之前就已就绪。

配置完成后，您的云存储将像文件系统的永久组成部分一样运行，无需手动重新挂载。

---

**相关指南：**

- [Mount Cloud Storage as a Local Drive — Complete Guide to Using Google Drive, S3, and OneDrive Like Local Folders](https://rcloneview.com/support/blog/mount-cloud-storage-local-drive-guide-rcloneview)
- [System Tray and Background Sync — Keep Cloud Jobs Running in RcloneView](https://rcloneview.com/support/blog/system-tray-background-sync-rcloneview)
- [RcloneView Mount Performance Tuning: Cache, Read Ahead, and VFS Settings for Smooth Cloud Drives](https://rcloneview.com/support/blog/mount-performance-tuning-rcloneview)

<CloudSupportGrid />
