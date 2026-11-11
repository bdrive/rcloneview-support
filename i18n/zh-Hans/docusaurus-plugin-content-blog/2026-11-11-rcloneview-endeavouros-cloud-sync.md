---
slug: rcloneview-endeavouros-cloud-sync
title: "在 EndeavourOS 上使用 RcloneView — 云存储同步与备份"
authors:
  - steve
description: "使用官方 AppImage 在 EndeavourOS 上运行 RcloneView。涵盖 GTK+3 和 FUSE 要求、挂载云盘以及同步 90 多个云服务提供商。"
keywords:
  - RcloneView EndeavourOS
  - EndeavourOS 云同步
  - EndeavourOS rclone GUI
  - 基于 Arch 的 Linux 云备份
  - RcloneView AppImage
  - EndeavourOS 挂载云盘
  - EndeavourOS Google Drive 同步
  - Linux 多云文件管理器
  - 滚动发行版云备份
tags:
  - RcloneView
  - linux
  - platform
  - cloud-sync
  - installation
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 在 EndeavourOS 上使用 RcloneView — 云存储同步与备份

> EndeavourOS 提供开箱即用桌面的滚动式 Arch 基础系统，官方 RcloneView AppImage 无需任何第三方软件包即可在其上运行。

EndeavourOS 用户通常希望使用最新软件，并尽量减少手动配置。云存储往往是其中的短板：Google Drive、OneDrive 和 S3 存储桶在这里没有原生桌面客户端，而在多个 CLI 配置之间来回切换又很繁琐。RcloneView 在 Windows、macOS 和 Linux 上通过一个窗口挂载和同步 90 多个提供商，并自带内置 rclone。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 使用官方 AppImage 安装

RcloneView 仅通过 [rcloneview.com](https://rcloneview.com/src/download.html) 分发。不存在 AUR 软件包，因此请忽略在其他地方看到的 `yay` 或 `paru` 安装说明。对于基于 Arch 的系统，AppImage 是自然的选择。下载与你的架构（x86_64 或 aarch64）对应的版本，赋予可执行权限并启动：

```bash
chmod +x RcloneView-*-x86_64.AppImage
./RcloneView-*-x86_64.AppImage
```

RcloneView 是 Flutter 桌面应用，而不是 Qt 应用。它需要 GTK+3、正在运行的 X11 或 Wayland 会话，以及用于系统托盘图标的 AppIndicator 库。EndeavourOS 的默认桌面版本（KDE Plasma、Xfce、GNOME 等）已经提供显示服务器，通常也包含 GTK+3。挂载功能需要安装 FUSE，推荐使用 fuse3（`sudo pacman -S --needed fuse3`）。

<img src="/support/images/en/blog/new-remote.png" alt="在 EndeavourOS 上的 RcloneView 中添加新的云远程" class="img-large img-center" />

由于 AppImage 是自包含的，滚动更新 `pacman -Syu` 不会替换它。自动更新仅适用于 macOS，因此在 Linux 上需要从同一页面下载较新的 AppImage 进行更新。

## 连接远程并挂载云盘

打开 **Remote > New Remote**。Google Drive、Dropbox、OneDrive、Box 和 pCloud 通过浏览器使用 OAuth 登录。S3、Backblaze B2 和 Cloudflare R2 需要输入访问密钥。你的远程会以标签页形式显示在 Explorer 中，你还可以拆分出最多四个面板，将 NAS 共享与云存储桶并排浏览。

要在 Dolphin 或 Thunar 中处理云文件，请挂载远程。点击面板工具栏中的 Mount 图标，或打开 Mount Manager 新建挂载。在 Linux 上，你需要选择一个本地路径，例如 `~/cloud/gdrive`，默认的 `writes` 缓存模式可以满足大多数编辑需求。仅当其他本地用户需要访问该挂载时才启用 **Allow other**。

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="在 Linux 上从 RcloneView 浏览器挂载云远程" class="img-large img-center" />

## 同步与定时备份

设想一台带有 `~/Projects` 和 `~/Documents` 的开发者工作站。创建一个从本地磁盘到 Backblaze B2 的同步任务，在 Step 3 中添加 `.git/` 过滤器，并运行试运行（Dry Run）以准确查看将要传输的内容。单向同步只修改目标端。双向同步（Beta）仍处于实验阶段，请先在非关键文件夹上测试。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Linux 备份任务期间 RcloneView 的传输进度监控" class="img-large img-center" />

使用 PLUS 许可证时，Step 4 会增加 crontab 风格的定时功能，这样在 RcloneView 驻留托盘期间，任务会每晚运行。RcloneView 需要桌面会话才能运行，不能作为 systemd 服务运行。在无头 Arch 服务器上，请在服务器上运行 `rclone rcd`，然后从桌面通过 Connect Manager 连接。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="在 RcloneView 中创建定时同步任务" class="img-large img-center" />

## 开始使用

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**，选择与你的架构对应的 Linux AppImage。
2. 为 AppImage 赋予可执行权限，如需挂载则安装 `fuse3`，然后在桌面会话中启动。
3. 添加云远程，并挂载你想在文件管理器中使用的远程。
4. 创建同步任务，用试运行进行测试，如果拥有 PLUS 则设置定时。

滚动发行版桌面加上一个统一的多云窗口，可以构建低维护成本的备份方案。

---

**相关指南：**

- [VFS 缓存挂载性能](https://rcloneview.com/support/blog/vfs-cache-mount-performance-rcloneview)
- [修复 Rclone 挂载 FUSE 错误](https://rcloneview.com/support/blog/fix-rclone-mount-fuse-errors-rcloneview)
- [Connection Manager — 内置与外部 Rclone](https://rcloneview.com/support/blog/rcloneview-connection-manager-embedded-external)

<CloudSupportGrid />
