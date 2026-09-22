---
slug: rcloneview-mx-linux-cloud-sync
title: "在 MX Linux 上使用 RcloneView — 云存储同步与备份"
authors:
  - casey
description: "通过 .deb 或 AppImage 在 MX Linux 上运行 RcloneView,在一个 GUI 中通过拖放同步、挂载和定时备份管理 90+ 云服务商。"
keywords:
  - RcloneView MX Linux
  - MX Linux 云存储
  - MX Linux rclone GUI
  - 安装 RcloneView deb
  - MX Linux 云同步
  - MX Linux 云备份
  - 基于 Debian 的云客户端
  - 跨平台云管理器 Linux
tags:
  - RcloneView
  - linux
  - cloud-sync
  - installation
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 在 MX Linux 上使用 RcloneView — 云存储同步与备份

> 通过官方 .deb 软件包或 AppImage 在 MX Linux 上运行 RcloneView,并在原生 GUI 中管理 rclone 支持的每一个云远端。

MX Linux 以轻量化和基于 Debian 但不沿用 Debian 相对保守的软件包版本而闻名,这使它成为老旧硬件和极简桌面环境的常见选择。这种组合恰恰是云文件管理器保持低调所需要的:占用空间小、拥有真正的桌面环境,以及直接继承自 Debian 的 .deb 兼容性。RcloneView 可在一个窗口内挂载并同步 90+ 服务商,并同时支持 Windows、macOS 和 Linux,因此 MX Linux 设备获得的功能集与其他受支持平台完全相同,而不是精简版。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 在 MX Linux 上安装 RcloneView

由于 MX Linux 基于 Debian,[官方下载页面](https://rcloneview.com/src/download.html)的 `.deb` 软件包的安装方式与在 Debian 或 Ubuntu 上相同 —— 下载 x86_64 或 aarch64 版本,并通过你选择的软件包管理器安装(MX Package Installer、GDebi,或在终端中使用 `dpkg -i`)。如果你完全不想动用软件包管理器,`.AppImage` 版本同样可用:赋予其可执行权限后直接运行即可,无需安装步骤。

RcloneView 没有针对 MX Linux 的专属仓库或 PPA,也没有类似 AUR 的社区软件包 —— 下载页面是唯一的官方分发渠道。安装前,请确认系统已安装 GTK+ 3.0,以及 `libayatana-appindicator3-1` 或 `libappindicator3-1` 之一以支持系统托盘图标;如果你打算将远端挂载为本地驱动器,还需确认已安装 FUSE(建议使用 fuse3)。

<img src="/support/images/en/blog/new-remote.png" alt="在 MX Linux 上运行的 RcloneView 主窗口,打开了新建远端对话框" class="img-large img-center" />

## 连接云远端

在 MX Linux 上设置远端的方式,与 RcloneView 支持的其他任何 Linux 发行版完全相同。打开 Remote 选项卡 > New Remote,选择一个服务商,然后通过浏览器弹窗进行身份验证(Google Drive、Dropbox、OneDrive、Box、pCloud),或直接输入凭据(Amazon S3、Backblaze B2、SFTP)。内置的 rclone 二进制文件默认与 `http://127.0.0.1:5582` 通信,因此除非你特意想连接到网络中其他位置运行的外部 rclone 实例,否则无需单独管理 rclone 安装。

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="在 MX Linux 上使用 RcloneView 将云远端挂载为本地驱动器" class="img-large img-center" />

连接完成后,通过 `nfsmount` 挂载远端,其行为就像任何其他本地路径一样 —— 系统上的任何文件管理器或应用程序都可以浏览它,而无需知道它其实由云存储支持。

## 安排备份计划

对于大部分时间都开着的 MX Linux 设备,一个定时同步任务可以把这个应用变成一个设置好就能忘记的备份工具。按照 4 步 Sync 向导操作,应用过滤器以跳过缓存目录或过大的文件,并在 PLUS 许可下附加一个类似 crontab 的计划,让任务无需手动启动即可运行。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="在 RcloneView 中为 MX Linux 创建定时云同步任务" class="img-large img-center" />

Job History 会记录每次运行的持续时间、传输速度和文件数量,这让你很容易确认定时备份确实完成了,而不是在夜里悄悄失败。

## 快速开始

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView** —— 获取适合你架构的 .deb,或者如果你想跳过安装步骤,可以选择 .AppImage。
2. 安装该软件包(或为 AppImage 赋予可执行权限),并确认已安装 GTK+3 和 FUSE。
3. 通过 Remote 选项卡 > New Remote 添加你的第一个云远端。
4. 设置同步或挂载,开始在 MX Linux 上管理云存储。

无论安装哪种软件包,MX Linux 都能获得与其他受支持的 Linux 桌面完全相同的完整云同步与挂载体验。

---

**相关指南:**

- [在 Debian Linux 上使用 RcloneView — 云同步](https://rcloneview.com/support/blog/rcloneview-debian-linux-cloud-sync)
- [在 Ubuntu 和 Debian Linux 上安装 RcloneView](https://rcloneview.com/support/blog/install-rcloneview-ubuntu-debian-linux)
- [在 Linux Mint 上使用 RcloneView — 云同步](https://rcloneview.com/support/blog/rcloneview-linux-mint-cloud-sync)

<CloudSupportGrid />
