---
slug: rcloneview-zorin-os-linux-cloud-sync
title: "在 Zorin OS 上使用 RcloneView — 云存储同步与备份"
authors:
  - tayson
description: "在 Zorin OS 上安装并使用 RcloneView 进行云存储同步与备份。基于 GUI 的云管理工具，支持 Google Drive、OneDrive、S3 等 90 多种服务，适用于 Zorin OS。"
keywords:
  - RcloneView Zorin OS
  - Zorin OS 云存储
  - Zorin OS 云同步
  - Zorin OS 云备份
  - RcloneView Linux Debian
  - Zorin OS 文件管理器云
  - 安装 RcloneView Zorin
  - Linux 云存储 GUI
  - Zorin OS Google Drive
  - 基于 Ubuntu 的云同步
tags:
  - RcloneView
  - linux
  - cloud-sync
  - installation
  - platform
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 在 Zorin OS 上使用 RcloneView — 云存储同步与备份

> 在 Zorin OS 上安装 RcloneView，通过 GUI 管理 90 多种云存储服务 — 在 Zorin OS 桌面上同步 Google Drive、OneDrive、Amazon S3 等。

Zorin OS 是一款基于 Ubuntu 的 Linux 发行版，拥有熟悉、精致的桌面界面，特别受从 Windows 或 macOS 转来的用户欢迎。其基于 Ubuntu/Debian 的架构意味着它能与 `.deb` 软件包无缝配合，使 RcloneView 的安装非常简单。RcloneView 是一款使用 Flutter 构建的 GUI 桌面应用，需要显示服务器（X11 或 Wayland）和正在运行的桌面环境 — Zorin OS 基于 GNOME 的桌面满足这些要求。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 在 Zorin OS 上安装 RcloneView

RcloneView 通过 [rcloneview.com](https://rcloneview.com/src/download.html) 直接下载分发。没有 apt 仓库或 Snap 软件包 — 请不要尝试 `apt install rcloneview` 或 `snap install rcloneview`，因为二者都不存在。请从官方下载页面下载适用于你所用架构的 `.deb` 软件包。

**安装 .deb 软件包：**

```bash
sudo dpkg -i rclone_view-*-linux-x86_64.deb
```

如果 `dpkg` 报告缺少依赖项，可通过以下命令解决：

```bash
sudo apt install -f
```

这会在 Zorin OS 上（继承了 Ubuntu 的 apt 仓库）自动安装任何缺失的 GTK 或系统库。

或者，也可以使用 `.AppImage` 进行便携式安装，无需任何系统集成：

```bash
chmod +x RcloneView-*-x86_64.AppImage
./RcloneView-*-x86_64.AppImage
```

<img src="/support/images/en/blog/new-remote.png" alt="Setting up cloud storage remotes in RcloneView on Zorin OS" class="img-large img-center" />

## Zorin OS 上所需的库

Zorin OS 默认的 GNOME 桌面安装中已包含 GTK+ 3.0 以及 X11/Wayland。如需系统托盘支持，请安装 AppIndicator 库（如果尚未安装）：

```bash
sudo apt install libayatana-appindicator3-1
```

如需云盘挂载（虚拟磁盘功能），请安装 FUSE3：

```bash
sudo apt install fuse3
```

安装完成后，从应用菜单或终端启动 RcloneView。该应用与 Zorin OS 桌面深度集成，包括系统托盘图标支持和任务完成时的原生桌面通知。

## 连接云存储

RcloneView 内置了 rclone 二进制文件 — 无需单独安装 rclone。通过“远程”标签页添加你的云服务：点击“新建远程”并选择你的服务提供商。对于基于 OAuth 的服务（如 Google Drive、OneDrive 和 Dropbox），系统会打开一个浏览器窗口进行账户认证。对于兼容 S3 的服务，请输入你的 Access Key、Secret Key 和端点 URL。

Zorin OS 基于 GNOME 的桌面能够顺畅处理 OAuth 浏览器重定向 — 认证窗口会在你的默认浏览器中打开，凭证会自动传回 RcloneView。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-to-cloud sync running in RcloneView on Zorin OS" class="img-large img-center" />

## 同步与挂载云存储

配置好远程后，使用同步向导创建备份或迁移任务。选择源和目标远程，配置传输选项和过滤器，并可选择设置定期运行计划（需要 PLUS 许可证）。RcloneView 在 Zorin OS 上以 GUI 应用形式运行 — 需要有效的桌面会话和显示服务器。它不能直接配置为 systemd 后台服务；若需要在没有用户会话的情况下执行无人值守的计划任务，请使用 rclone 自带的 `rclone rcd` 配合 systemd 服务，并从 RcloneView 连接至该服务。

要将云存储挂载为本地目录，请在“远程”标签页中使用挂载管理器。在 Zorin OS 上，指定一个挂载点路径，然后点击“保存并挂载”。挂载后的文件夹会出现在 Nautilus（Zorin OS 默认的文件管理器）中，可以像访问任何本地目录一样访问它。

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="Mounting Google Drive as a local folder on Zorin OS with RcloneView" class="img-large img-center" />

## 快速上手

1. **下载 RcloneView**：访问 [rcloneview.com](https://rcloneview.com/src/download.html) — 选择适用于 x86_64 的 Linux `.deb` 包。
2. 使用 `sudo dpkg -i rclone_view-*-linux-x86_64.deb` 进行安装，如缺少依赖项则运行 `sudo apt install -f`。
3. 如需挂载和托盘支持，请按需安装 `fuse3` 和 `libayatana-appindicator3-1`。
4. 添加你的云远程，并在熟悉的 Zorin OS 桌面环境中开始同步。

Zorin OS 与 Ubuntu 的兼容性使 RcloneView 的安装十分简便，为用户提供了一款由 GUI 驱动的云存储管理工具，能自然融入 Zorin OS 精致的桌面工作流程。

---

**相关指南：**

- [在 Ubuntu 和 Debian Linux 上安装 RcloneView](https://rcloneview.com/support/blog/install-rcloneview-ubuntu-debian-linux)
- [在 Pop!_OS Linux 上使用 RcloneView — 云同步](https://rcloneview.com/support/blog/rcloneview-pop-os-linux-cloud-sync)
- [在 Fedora、RHEL 和 CentOS Linux 上使用 RcloneView](https://rcloneview.com/support/blog/rcloneview-fedora-rhel-centos-linux)

<CloudSupportGrid />
