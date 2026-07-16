---
slug: rcloneview-opensuse-linux-cloud-sync
title: "RcloneView on openSUSE Linux — 云存储同步与备份"
authors:
  - tayson
description: "在 openSUSE Linux 上安装和配置 RcloneView，通过分步说明实现云存储同步、备份和多云文件管理。"
keywords:
  - rcloneview opensuse
  - opensuse cloud storage
  - linux cloud sync
  - rcloneview linux install
  - opensuse backup
  - cloud storage linux
  - rclone opensuse
  - suse cloud sync
  - opensuse file transfer
  - linux multi-cloud
tags:
  - linux
  - installation
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# RcloneView on openSUSE Linux — 云存储同步与备份

> openSUSE 用户可以通过 RcloneView 的图形界面管理 70 多个云存储提供商，无需在终端中反复操作。

无论你运行的是 Tumbleweed（滚动发行版）还是 Leap（稳定发行版），openSUSE 都是需要可靠 Linux 工作站的专业人士和开发者的热门选择。RcloneView 通过将 rclone 强大的引擎封装在直观的图形界面中,为 openSUSE 带来完整的云存储管理功能。本指南将介绍在 openSUSE 上的安装、配置以及实用的云同步工作流程。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 在 openSUSE 上安装 RcloneView

RcloneView 以 AppImage 形式分发用于 Linux，这意味着它无需 zypper 软件包或存储库配置即可在 openSUSE 上运行。从官方网站下载最新的 AppImage，赋予其可执行权限，然后直接启动。

要安装，请打开终端并运行：`chmod +x RcloneView-*.AppImage`，然后运行 `./RcloneView-*.AppImage`。该 AppImage 内部已捆绑 rclone，因此无需通过 zypper 或从源代码另行安装 rclone。如果你已经拥有系统级的 rclone 安装以及已有的远程配置，RcloneView 会自动检测并导入你现有的配置。

对于希望进行系统集成的 openSUSE Tumbleweed 用户，你可以解压 AppImage 内容并手动创建桌面条目。这样可以让 RcloneView 与原生的 KDE 或 GNOME 应用程序一起出现在应用菜单中。在 Leap 上，采用 AppImage 方式可以避免与稳定软件包基础产生潜在的依赖冲突。

<img src="/support/images/en/blog/new-remote.png" alt="Adding a new cloud storage remote on openSUSE Linux with RcloneView" class="img-large img-center" />

## 配置云存储远程

RcloneView 运行后，连接云存储提供商是通过远程配置面板处理的。点击"添加远程"按钮即可开始引导式设置。对于 Google Drive、OneDrive 和 Dropbox，RcloneView 会启动 OAuth 浏览器流程以授权访问。对于兼容 S3 的存储（AWS、Wasabi、MinIO），你需要直接输入端点 URL、访问密钥和密钥。

在 OAuth 流程期间，openSUSE 的默认防火墙（firewalld）可能需要临时例外规则，因为授权回调使用本地端口。如果浏览器重定向失败，请检查该端口是否被阻止。或者，你也可以通过 RcloneView 集成的终端使用 rclone 的无头授权模式。

针对 openSUSE 工作站的一种实用配置包括：用于文档的 Google Drive 远程、用于备份的 Wasabi 或 Backblaze B2 远程，以及用于访问家庭服务器或 NAS 的 SFTP 远程。RcloneView 通过单一界面管理所有这些远程，其双栏文件浏览器让你可以在任意组合之间浏览和传输文件。

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="Drag and drop cloud file transfer on openSUSE with RcloneView" class="img-large img-center" />

## 在 openSUSE 上实现自动同步与备份

RcloneView 内置的任务调度器消除了为云备份自动化编写自定义 cron 任务或 systemd 计时器的需要。在图形界面中创建同步或复制任务，定义源和目标远程，应用可选的过滤规则以包含或排除特定文件模式，并使用可视化 cron 编辑器设置计划。

对于 openSUSE 工作站，一种常见的工作流程是按夜间计划将主目录（排除缓存和临时文件）备份到加密的云端远程。RcloneView 的过滤规则支持通配符模式，因此排除 `~/.cache/**`、`~/.local/share/Trash/**` 以及构建输出目录非常简单。

任务执行历史记录在 RcloneView 中，提供时间戳、传输的字节数、文件数量以及错误详情。这对于在不手动检查云存储内容的情况下验证自动备份是否成功完成非常有用。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Creating a scheduled cloud backup job on openSUSE Linux" class="img-large img-center" />

## 将云存储挂载为本地目录

RcloneView 支持使用 FUSE 在 openSUSE 上将云存储提供商挂载为本地目录。这使得 LibreOffice、GIMP 或任何文件管理器（Dolphin、Nautilus）等应用程序都能像访问本地磁盘一样访问云文件。请确保通过 zypper 安装了 `fuse` 或 `fuse3`：`sudo zypper install fuse3`。

在 RcloneView 的挂载管理器中，选择一个远程和一个本地挂载点。该挂载会出现在你的文件管理器中，并持续存在，直到你卸载它或关闭 RcloneView。这对于处理存储在云对象存储中的大型媒体文件或项目资产特别有用。

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="Mounting cloud storage as a local directory on openSUSE via RcloneView" class="img-large img-center" />

## 快速开始

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 使用 `chmod +x` 赋予 AppImage 可执行权限，然后在你的 openSUSE 系统上启动它。
3. 通过引导式配置向导添加你的云存储远程。
4. 创建你的第一个同步或备份任务，并设置一个重复计划。

RcloneView 只需极少的设置工作，就能将 openSUSE 转变为功能完备的多云管理工作站。

---

**相关指南：**

- [在 Ubuntu 和 Debian Linux 上安装 RcloneView](https://rcloneview.com/support/blog/install-rcloneview-ubuntu-debian-linux)
- [RcloneView on Fedora and RHEL Linux — 云同步](https://rcloneview.com/support/blog/rcloneview-fedora-rhel-linux-cloud-sync)
- [RcloneView on Arch Linux — 云同步](https://rcloneview.com/support/blog/rcloneview-arch-linux-cloud-sync)

<CloudSupportGrid />
