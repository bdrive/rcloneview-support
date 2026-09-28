---
slug: rcloneview-void-linux-cloud-sync
title: "在 Void Linux 上使用 RcloneView — 云存储同步与备份"
authors:
  - steve
description: "使用 AppImage 版本在 Void Linux 上安装并运行 RcloneView,实现多云文件管理、挂载与同步。"
keywords:
  - RcloneView Void Linux
  - void linux 云存储
  - void linux appimage
  - rclone gui void linux
  - void linux 挂载云存储
  - void linux 备份工具
  - xbps rclone gui
  - void linux runit 云同步
  - void linux 云文件管理器
  - 跨平台云 gui linux
tags:
  - RcloneView
  - linux
  - cloud-sync
  - installation
  - guide
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 在 Void Linux 上使用 RcloneView — 云存储同步与备份

> 无需等待 XBPS 软件包出现,即可在 Void Linux 上运行功能完整的图形化多云管理器。

Void Linux 采用滚动发行、独立的软件包体系(XBPS、runit),这意味着许多 GUI 应用要么很晚才被打包,要么根本不会被打包。RcloneView 并不在 XBPS 仓库中,但由于它以 Linux 版 .AppImage、.deb 和 .rpm 的形式在自己的下载页面上提供,Void 用户无需特定发行版的构建版本即可直接运行。RcloneView 是原生 GUI 应用程序,而非无头(headless)服务,因此需要 X11 或 Wayland 桌面环境。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 在 Void 上安装 RcloneView

在 Void 上最可靠的方式是 .AppImage,因为它自带运行时,完全绕开了 XBPS 的软件包命名或依赖不匹配问题。下载适用于 x86_64 或 aarch64 的 `RcloneView-{version}-{arch}.AppImage` 文件,赋予其可执行权限,然后直接从文件管理器或终端运行它。Void 不维护 APT 或 RPM 仓库,因此如果你更倾向于使用 .deb 或 .rpm 版本,需要手动解压而不是通过 `xbps-install` 安装。RcloneView 仅通过 rcloneview.com 分发,没有 AUR、Flatpak 或 Snap 软件包可作为备用途径。

<img src="/support/images/en/blog/new-remote.png" alt="RcloneView remote setup running on Void Linux" class="img-large img-center" />

启动前,请确认已安装 GTK+3,以及 `libayatana-appindicator3-1` 或 `libappindicator3-1` 之一以支持系统托盘 —— Void 的最小化基础系统不像一些面向桌面的发行版那样默认安装这些组件。

## 设置远程和挂载

RcloneView 运行后,添加云端远程的方式与在其他平台上完全相同:Google Drive、Dropbox 等服务使用 OAuth 登录,S3 兼容或 SFTP 端点则使用凭据输入。挂载功能通过内嵌 rclone 在 Linux 上的 nfsmount 方式实现,需要 FUSE —— 由于 Void 的最小化安装中经常缺少该组件,如果尚未安装,请通过 XBPS 安装 `fuse3`。

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="Mounting a cloud remote as a local drive on Void Linux" class="img-large img-center" />

RcloneView 可连接 90 多个提供商,并在同一窗口中挂载和同步所有这些服务,无论是在 Windows、macOS 还是 Linux 上 —— 如果你的工作分布在 Void Linux 工作站和其他机器之间,这会很有用。

## 用 runit 的思路安排备份计划

RcloneView 无法作为 systemd 服务运行,而 Void 根本不使用 systemd,它运行的是 runit。这一区别在这里并不重要,因为 RcloneView 自身的 Job Manager 会在内部处理调度,而不依赖初始化系统。可以通过 crontab 风格的调度器(PLUS 功能)设置一个计划同步任务,让应用保持在系统托盘中打开时,备份能按定时器运行。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a recurring cloud backup job on Void Linux" class="img-large img-center" />

如果你想在 Void 上运行一个完全没有 GUI、真正后台运行的守护进程,那应该交给 `rclone rcd` 直接完成,而不是 RcloneView —— 该应用本身始终需要显示服务器才能运行。

## 快速上手

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 AppImage** 并赋予其可执行权限。
2. 如果挂载或托盘功能无法直接使用,请通过 XBPS 安装 `fuse3` 和 AppIndicator 库。
3. 添加你的云端远程,并在 Explorer 面板中确认可以访问。
4. 创建一个同步或备份任务,如果需要,可设置为自动运行。

Void 的极简主义不意味着你必须手动管理云存储 —— RcloneView 将同样的 GUI 工作流程带到了这里,和在其他任何地方一样。

---

**相关指南:**

- [在 Gentoo Linux 上使用 RcloneView — 云存储同步与备份](https://rcloneview.com/support/blog/rcloneview-gentoo-linux-cloud-sync)
- [在 Arch Linux 上使用 RcloneView — 云存储同步与备份](https://rcloneview.com/support/blog/rcloneview-arch-linux-cloud-sync)
- [在 Ubuntu 和 Debian Linux 上安装 RcloneView](https://rcloneview.com/support/blog/install-rcloneview-ubuntu-debian-linux)

<CloudSupportGrid />
