---
slug: rcloneview-raspberry-pi-cloud-sync
title: "在树莓派上使用 RcloneView —— 云存储同步与备份"
authors:
  - tayson
description: "在配备桌面环境的树莓派上运行 RcloneView，实现全天候云备份与同步。了解安装方法、VNC 访问及关键要求。"
keywords:
  - RcloneView 树莓派
  - 树莓派云同步
  - 树莓派云备份
  - rclone 树莓派 GUI
  - 树莓派桌面云存储
  - 全天候备份站
  - ARM Linux 云同步
  - 树莓派存储
tags:
  - RcloneView
  - raspberry-pi
  - linux
  - cloud-sync
  - installation
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 在树莓派上使用 RcloneView —— 云存储同步与备份

> 运行桌面环境的树莓派是理想的全天候云备份站——而 RcloneView 则将其变成一个功能齐全的云存储管理中心。

树莓派低功耗、体积小巧且兼容 Linux，是家庭服务器和备份站项目的热门选择。安装了 RcloneView 后，树莓派就变成了一台强大的云同步设备，可以持续将文件备份到 Google Drive、Backblaze B2、Amazon S3 或其他 90 多个受支持的服务商——所有操作都通过图形界面完成，而无需使用命令行。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 需要桌面环境

首先要说明一个关键要求：**RcloneView 需要 GUI/显示环境，无法在无头（headless）模式下运行**。如果你的树莓派运行的是 Raspberry Pi OS Lite（服务器/无头版本），RcloneView 将无法启动。你必须使用**带桌面的 Raspberry Pi OS**（或在最小化系统上安装 LXDE、XFCE 等桌面环境）。

这并非 RcloneView 特有的限制——任何桌面 GUI 应用程序都是如此。基于 LXDE 的树莓派桌面环境运行良好，并已包含在官方 Raspberry Pi OS 镜像中。桌面启动后，RcloneView 的安装和运行方式与在其他任何 Linux 系统上完全相同。

<img src="/support/images/en/blog/new-remote.png" alt="RcloneView running on Raspberry Pi desktop environment" class="img-large img-center" />

## 在树莓派上安装 RcloneView

从 [rcloneview.com](https://rcloneview.com/src/download.html) 下载适用的 Linux 安装包。RcloneView 提供 **.AppImage**、**.deb** 和 **.rpm** 三种 Linux 格式——没有 AUR、Snap、Flatpak、Homebrew 或 APT 仓库。对于树莓派，请使用 ARM64 版本：

- **.AppImage**：赋予可执行权限（`chmod +x RcloneView*.AppImage`）后直接运行——无需安装。
- **.deb**：在基于 Debian 的 Raspberry Pi OS 上使用 `sudo dpkg -i rcloneview*.deb` 安装。

两种安装包均内置了 rclone 二进制文件，因此无需单独安装 rclone。首次启动后，RcloneView 将出现在树莓派的应用程序菜单中。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitoring a cloud sync job on Raspberry Pi with RcloneView" class="img-large img-center" />

## 通过 VNC 或 X11 转发进行远程访问

一种非常实用的部署方式是：让树莓派在物理显示器方面保持无头状态，同时通过 **VNC** 或经 SSH 的 **X11 转发**远程访问其桌面。在树莓派上启用 VNC 服务器（通过 `raspi-config` > Interface Options > VNC），然后从主电脑使用 VNC 客户端连接，即可看到运行 RcloneView 的完整树莓派桌面。

对于 X11 转发，使用 `ssh -X pi@<pi-ip>` 连接，并在 SSH 会话中启动 RcloneView——应用程序窗口将显示在主电脑的屏幕上。这两种方式都可以让你在本地网络内的任何位置管理基于树莓派的备份站，而无需为树莓派连接显示器。

拥有 PLUS 许可证后，你可以设置同步任务自动运行计划，让树莓派无人值守地完成备份工作——只需通过 VNC 连接即可查看任务历史或调整设置。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling cloud backup jobs on Raspberry Pi in RcloneView" class="img-large img-center" />

## 快速上手

1. **安装带桌面的 Raspberry Pi OS**——完整桌面版本，而非 Lite 版。
2. **从 [rcloneview.com](https://rcloneview.com/src/download.html) 下载 RcloneView**——选择 ARM64 的 .deb 或 .AppImage 版本。
3. 安装或运行该软件包，并从树莓派桌面启动 RcloneView。
4. 添加你的云端远程连接，并通过任务向导配置同步任务。
5. 启用 VNC 以便远程访问，并使用 PLUS 许可证设置自动备份计划。

运行 RcloneView 的树莓派是为家庭或小型办公室搭建专用、全天候云备份站的最经济实惠方式之一。

---

**相关指南：**

- [在 Debian Linux 上使用 RcloneView —— 云同步](https://rcloneview.com/support/blog/rcloneview-debian-linux-cloud-sync)
- [在 DietPi 上使用 RcloneView —— 轻量级云同步](https://rcloneview.com/support/blog/rcloneview-dietpi-lightweight-cloud-sync)
- [使用 RcloneView 自动化每日云备份](https://rcloneview.com/support/blog/automate-daily-cloud-backups-with-rcloneview)

<CloudSupportGrid />
