---
slug: rcloneview-pop-os-linux-cloud-sync
title: "在 Pop!_OS 上运行 RcloneView 实现云同步与备份"
authors:
  - tayson
description: "了解如何在 Pop!_OS 上安装并运行 RcloneView 以实现云同步和备份,包括 .deb 安装、FUSE 挂载、平铺工作流技巧以及自动启动设置。"
keywords:
  - rcloneview
  - pop os cloud sync
  - pop os cloud backup
  - rclone pop os
  - system76 cloud storage
  - pop os fuse mount
  - pop os rclone gui
  - linux cloud file manager
  - pop os deb install
  - pop os tiling cloud sync
tags:
  - RcloneView
  - linux
  - platform
  - cloud-sync
  - guide
  - installation
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 在 Pop!_OS 上运行 RcloneView 实现云同步与备份

> Pop!_OS 是一款精致且对开发者友好的 Linux 发行版,非常适合作为云文件管理的工作站。**RcloneView** 可通过 .deb 包在 Pop!_OS 上秒速安装,为你带来功能齐全的可视化云管理器,并具备原生桌面集成。

Pop!_OS 由 System76 开发,是一款基于 Ubuntu、专注于生产力的 Linux 发行版。它内置了平铺式窗口管理器、出色的硬件支持(尤其是对 System76 机型和 NVIDIA 显卡),以及基于 GNOME 的简洁桌面。它已成为开发者、创作者和高级用户的热门选择,他们追求一个精致、不打扰工作的 Linux 桌面。

对于云存储管理而言,Pop!_OS 提供了理想的环境。它的 Ubuntu 血统意味着广泛的软件兼容性,而其对工作流效率的关注与 RcloneView 的双栏文件浏览器十分契合。无论你是备份项目文件的自由职业者、将代码仓库同步到 S3 的开发者,还是跨多个云端归档媒体文件的内容创作者,本指南都能满足你的需求。

从下载和安装 .deb 包,到设置 FUSE 挂载、登录时自动启动,再到平铺工作流技巧,你将在几分钟内让 RcloneView 完全融入你的 Pop!_OS 工作站。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 为什么选择 Pop!_OS 进行云存储管理

Pop!_OS 将 Ubuntu 庞大的软件生态系统与周到的桌面增强功能相结合。自动平铺窗口管理器让你可以将 RcloneView 与终端、文件管理器或浏览器并排排列,而无需手动调整窗口大小。Pop!_Shop 提供了对数千个软件包的便捷访问,而该发行版对硬件兼容性的专注也意味着更少的驱动问题。

对于处理大文件传输的工作站用户而言,Pop!_OS 的性能调优和现代内核支持有助于在高速网络连接下最大化传输速度。

## 下载并安装 .deb 包

RcloneView 提供了可在 Pop!_OS 上原生安装的 `.deb` 包,就像任何基于 Ubuntu 的应用程序一样。

1. 访问 [rcloneview.com](https://rcloneview.com/src/download.html) 并下载适用于 Linux 的 `.deb` 包。
2. 打开终端并安装:

```bash
sudo dpkg -i rcloneview_*.deb
sudo apt-get install -f
```

第二条命令会自动解决任何缺失的依赖项。安装完成后,RcloneView 会出现在你的应用程序启动器中。如果尚未安装 rclone 本身,你也可以安装它:

```bash
sudo apt install rclone
```

或者,你也可以在 Files 应用中双击 `.deb` 文件,Pop!_OS 将在 Eddy(软件包安装程序)中打开它,提供图形化安装体验。

## 设置云端远程

从应用程序菜单启动 RcloneView,或在终端中输入 `rcloneview`。第一步是添加你的云存储提供商。

<img src="/support/images/en/blog/new-remote.png" alt="Open multiple cloud remotes in RcloneView" class="img-large img-center" />

点击远程配置按钮,并按照每个提供商的向导操作。RcloneView 支持 Google Drive、OneDrive、Dropbox、AWS S3、Wasabi、Backblaze B2、Cloudflare R2、SFTP 等数十种服务。基于 OAuth 的提供商会在你的默认浏览器(Pop!_OS 上的 Firefox 或 Chrome)中打开身份验证页面。

你的配置会保存到 `~/.config/rclone/rclone.conf`,因此即使在更新甚至重装 Pop!_OS 后(只要保留主目录),配置也会持续保留。

## 在 Pop!_OS 平铺窗口管理器中使用 RcloneView

Pop!_OS 的自动平铺功能是其标志性能力之一。当你将 RcloneView 与其他应用程序一起打开时,平铺管理器会自动将它们排列成高效的布局。

推荐的工作流:将 RcloneView 平铺在屏幕左半部分,终端或文本编辑器平铺在右半部分。这样你可以在继续工作的同时监控云传输。如果你要从本地项目上传文件,可以将 Files 应用平铺在 RcloneView 旁边,以便快速拖放。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="cloud to cloud transfer default" class="img-large img-center" />

使用 Pop!_OS 键盘快捷键(`Super + 方向键`)可以快速将 RcloneView 吸附到指定位置。你也可以将 RcloneView 放置在专门用于云管理任务的工作区上。

## 配置 FUSE 以实现云挂载

RcloneView 可以将任何云存储提供商挂载为 Pop!_OS 系统上的本地目录。这需要 FUSE,它通常已预装在 Pop!_OS 上。可通过以下命令验证:

```bash
ls /dev/fuse
```

如果 FUSE 不可用,请安装它:

```bash
sudo apt install fuse3
```

要允许使用 `--allow-other` 标志进行用户级挂载,请取消 `/etc/fuse.conf` 中 `user_allow_other` 的注释。

配置好 FUSE 后,即可直接从 RcloneView 的远程浏览器挂载云存储:

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="mount from remote explorer" class="img-large img-center" />

你的云存储会作为普通文件夹出现在 Files 应用中,系统上的任何应用程序都可以访问它。

## 创建同步任务并安排备份计划

RcloneView 的任务系统让你可以定义按需运行或按计划运行的同步任务。使用双栏浏览器选择源和目标,配置同步选项,并保存该任务。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a sync job in RcloneView" class="img-large img-center" />

对于自动化备份,可使用任务调度功能按日、按周或按自定义间隔运行同步任务。这非常适合将你的主目录、项目文件或数据库备份到远程云提供商。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="create job schedule" class="img-large img-center" />

## 实时监控传输

Pop!_OS 工作站通常需要处理大型传输任务:视频项目、设计文件、代码仓库和数据集归档。RcloneView 的实时监控面板会准确显示正在传输的内容、当前速度以及每个文件的进度。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="transfer monitoring" class="img-large img-center" />

如果传输中途失败,任务历史面板会显示哪些文件未完成传输,这样你就可以重试而无需重新上传所有内容。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="job history" class="img-large img-center" />

## 设置 RcloneView 登录时自动启动

如果你每天都会使用 RcloneView,可以将其设置为登录时自动启动。在 Pop!_OS 上,你可以将其添加到启动应用程序中:

1. 打开**设置**并导航到**启动应用程序**(或使用 GNOME Tweaks)。
2. 点击**添加**并输入:
   - **名称:** RcloneView
   - **命令:** `rcloneview`(如果你使用的是 AppImage 方式,则输入其完整路径)
3. 保存并重启会话,确认它能自动启动。

这样可以确保当你坐到工作站前时,你的云挂载和计划任务始终处于就绪状态。

## Pop!_OS 专属技巧

**利用 Pop!_OS 工作区进行组织。** 将一个工作区专门用于配合浏览器进行云管理,使用 RcloneView,另一个工作区用于你的主要工作。使用 `Super + 方向键 上/下` 在它们之间切换。

**必要时可利用 Flatpak。** Pop!_OS 开箱即支持 Flatpak。虽然 .deb 包能带来最佳集成体验,推荐优先使用,但如果你更喜欢便携式安装方式,RcloneView 也可以作为 AppImage 使用。

**充分利用高性能硬件。** System76 机型通常配备 NVMe 存储和高带宽网络。RcloneView 可以使用多个并行传输任务,在高速连接下最大化吞吐量。你可以在同步任务设置中调整并发传输数量。

**保持 Pop!_OS 更新。** 定期运行 `sudo apt update && sudo apt upgrade`,以确保获得最新的内核和 FUSE 改进。Pop!_OS 的滚动更新模式意味着你可以持续获得修复和改进。

## 快速上手

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 使用 `sudo dpkg -i` 安装 `.deb` 包,并运行 `sudo apt-get install -f` 以解决依赖问题。
3. 启动 RcloneView,添加你的云端远程,并在双栏浏览器中开始浏览你的存储。
4. 设置 FUSE 挂载和计划同步任务,实现完全自动化的云备份工作流。

Pop!_OS 与 RcloneView 携手为你打造一个高效、界面简洁的环境,让你可以在一处集中管理所有云存储。

---

**相关指南:**

- [浏览和管理远程存储](https://rcloneview.com/support/howto/rcloneview-basic/browse-and-manage-remote-storage)
- [将云存储挂载为本地驱动器](https://rcloneview.com/support/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive)
- [添加 Google Drive](https://rcloneview.com/support/howto/#step-2-adding-remote-storage-google-drive-example)

<CloudSupportGrid />
