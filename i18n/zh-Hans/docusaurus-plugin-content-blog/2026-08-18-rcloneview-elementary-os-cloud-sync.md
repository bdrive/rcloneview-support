---
slug: rcloneview-elementary-os-cloud-sync
title: "在 Elementary OS 上使用 RcloneView — 云存储同步与备份"
authors:
  - alex
description: "在 Elementary OS 上安装 RcloneView，通过拖放同步、挂载和计划备份，在一个 GUI 中管理 90 多个云服务商。"
keywords:
  - RcloneView Elementary OS
  - Elementary OS 云存储
  - Elementary OS rclone GUI
  - install RcloneView deb Elementary
  - Elementary OS 云同步
  - Elementary OS 云备份
  - Pantheon 云存储客户端
  - cross-platform cloud manager Linux
tags:
  - RcloneView
  - linux
  - cloud-sync
  - installation
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 在 Elementary OS 上使用 RcloneView — 云存储同步与备份

> 在 Elementary OS 上运行 RcloneView，通过一个契合 Pantheon 桌面的原生 GUI 浏览、同步、挂载并备份 90 多个云服务商。

Elementary OS 基于 Ubuntu LTS 构建，但拥有自己的 Pantheon 桌面环境，选择它以获得简洁、类似 macOS 工作流程的用户，往往也希望云存储工具具备同样的精致体验，而不是退回到纯粹的终端操作。RcloneView 在 Elementary OS 上以原生 .deb 软件包形式安装，为 rclone 支持的每一个远程——从 Google Drive 到 Amazon S3 再到 SFTP 服务器——提供完整的文件管理器式界面。与仅支持挂载的工具不同，RcloneView 在 FREE 许可证下也提供同步和文件夹比较功能，因此挂载驱动器和运行计划备份都可以在同一个应用中完成。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 在 Elementary OS 上安装 RcloneView

由于 Elementary OS 基于 Debian/Ubuntu，RcloneView 通过官方[下载页面](https://rcloneview.com/src/download.html)提供的 .deb 软件包安装——获取 x86_64 版本（如果您在 ARM64 硬件上运行 Elementary，则获取 aarch64 版本），然后在终端中使用 `sudo dpkg -i rclone_view-*-linux-{arch}.deb` 安装。这里没有 Flathub 或 Snap Store 软件包可用——.deb 直接下载是唯一受支持的安装方式，如果您想完全跳过包管理，也可以使用 AppImage。

Elementary OS 通过 Pantheon 默认提供 GTK+ 和 Wayland/X11 会话，这已开箱即用地满足了 RcloneView 对显示和工具包的要求。安装后值得确认的一件事是 `libayatana-appindicator3-1`，因为 RcloneView 的系统托盘图标依赖它，而一些精简的 Elementary 安装为保持桌面轻量会移除指示器库。

<img src="/support/images/en/blog/new-remote.png" alt="RcloneView main window running on Elementary OS with a new remote dialog open" class="img-large img-center" />

## 连接云端远程

安装 RcloneView 后，添加远程的方式与其他所有平台完全相同：在 Remote 选项卡 > New Remote 中选择您的服务商，然后通过浏览器弹窗进行身份验证（Google Drive、Dropbox、OneDrive、Box），或直接输入凭据（Amazon S3、Backblaze B2、SFTP）。内置的 rclone 二进制文件通过 `http://127.0.0.1:5582` 处理一切，因此除非您想让 RcloneView 连接到另外运行的外部 rclone 实例，否则在 Elementary OS 上无需额外安装或配置任何东西。

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="Mounting a cloud remote as a local drive on Elementary OS with RcloneView" class="img-large img-center" />

在 Linux 上挂载使用 `nfsmount`——在 Explorer 中选择一个远程文件夹，点击面板工具栏中的挂载图标，云文件夹就会以本地路径的形式出现，任何 Pantheon 应用都可以直接打开。挂载功能需要安装 FUSE（推荐 fuse3）。

## 安排同步任务计划

对于全天保持开机的 Elementary OS 电脑，计划同步任务可以让 RcloneView 变成一个无需手动操作的备份工具，而不是需要手动触发的东西。通过 4 步 Sync 向导构建任务，添加过滤器以跳过临时文件或过大的文件，然后——在 PLUS 许可证下——附加一个 crontab 格式的计划，使其按您需要的任意频率自动触发。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Creating a scheduled sync job on Elementary OS in RcloneView" class="img-large img-center" />

Job History 会记录每次运行的状态、持续时间和传输速度，让您可以轻松确认夜间备份确实已经完成，而不是在您没有留意时悄悄失败。

## 开始使用

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**——获取适用于 Elementary OS 的 x86_64 或 aarch64 .deb。
2. 使用 `sudo dpkg -i rclone_view-*-linux-{arch}.deb` 进行安装。
3. 通过 Remote 选项卡 > New Remote 添加您的第一个云端远程。
4. 设置同步或挂载，直接从 Pantheon 桌面开始管理云存储。

安装了 .deb 之后，Elementary OS 也能获得与 Windows 和 macOS 用户相同的拖放式云管理体验，而不必牺牲该桌面简洁一致的观感。

---

**相关指南：**

- [在 Ubuntu 和 Debian Linux 上安装 RcloneView](https://rcloneview.com/support/blog/install-rcloneview-ubuntu-debian-linux)
- [在 Linux Mint 上使用 RcloneView — 云存储同步与备份](https://rcloneview.com/support/blog/rcloneview-linux-mint-cloud-sync)
- [在 Zorin OS 上使用 RcloneView — 云存储同步与备份](https://rcloneview.com/support/blog/rcloneview-zorin-os-linux-cloud-sync)

<CloudSupportGrid />
