---
slug: rcloneview-linux-mint-cloud-sync
title: "在 Linux Mint 上安装并使用 RcloneView 实现云同步"
authors:
  - tayson
description: "在 Linux Mint 上安装 RcloneView，设置云同步、备份和文件管理。适用于 Cinnamon、MATE 和 Xfce 版本的分步指南。"
keywords:
  - rcloneview
  - linux mint cloud sync
  - rcloneview linux mint
  - linux mint cloud storage
  - linux mint google drive
  - linux mint onedrive
  - linux mint cloud backup
  - linux mint file manager cloud
  - mint rclone gui
  - linux mint dropbox alternative
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

# 在 Linux Mint 上安装并使用 RcloneView 实现云同步

> Linux Mint 是最受欢迎的桌面 Linux 发行版之一，但除了基础的 Nemo 文件管理器插件外，它缺乏内置的云存储集成 —— **RcloneView** 通过完善的多云支持填补了这一空白。

Linux Mint 内置了出色的桌面工具 —— Nemo 文件管理器、用于系统备份的 Timeshift，以及精致的 Cinnamon（或 MATE/Xfce）桌面。然而，系统的云存储集成十分有限。系统本身没有原生的 Google Drive、OneDrive 或 Dropbox 客户端。虽然存在一些第三方解决方案（Insync、rclone CLI、MATE 上的 GNOME Online Accounts），但没有一个能提供完整的多云 GUI。RcloneView 可以在所有版本的 Linux Mint 上原生运行，并连接到 70 多个云服务提供商。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 在 Linux Mint 上安装

Linux Mint 基于 Ubuntu LTS 构建，因此安装过程与 Ubuntu/Debian 系统相同。

### 方法一：AppImage（推荐）

AppImage 是最简单的安装方式，适用于所有 Linux Mint 版本（Cinnamon、MATE、Xfce）：

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) 下载 RcloneView 的 AppImage。
2. 使其具有可执行权限：在 Nemo 中右键点击该文件，选择“属性 > 权限”，然后勾选“允许作为程序执行文件”。或者在终端中运行 `chmod +x RcloneView-*.AppImage`。
3. 双击启动。

AppImage 打包了 RcloneView 所需的一切，包括内置的 rclone 二进制文件，无需安装任何系统软件包。

### 方法二：.deb 软件包

从 RcloneView 网站下载 `.deb` 软件包。双击安装（会打开软件包管理器），或在终端中执行：

```
sudo dpkg -i rcloneview_*.deb
sudo apt-get install -f
```

`.deb` 软件包会与系统集成 —— 它会将 RcloneView 添加到应用程序菜单，并处理桌面文件关联。

## 用于挂载的 FUSE 设置

要在 Linux Mint 上将云存储挂载为本地目录，必须先确保 FUSE 可用。大多数 Mint 安装默认已包含 FUSE。运行以下命令进行验证：

```
fusermount --version
```

如果未安装 FUSE，请添加：

```
sudo apt install fuse3
```

确保你的用户属于 `fuse` 用户组：

```
sudo usermod -a -G fuse $USER
```

注销并重新登录以使用户组更改生效。完成后，RcloneView 便可将任意云服务提供商挂载为本地目录，与本地文件夹一同显示在 Nemo 中。

## 添加云存储远程连接

启动 RcloneView 并打开“远程管理器”，添加你的云账户：

- **Google Drive**：选择 Google Drive，在默认浏览器（Mint 上的 Firefox 或 Chromium）中通过 OAuth 完成授权。
- **OneDrive**：选择 Microsoft OneDrive，通过 OAuth 完成授权。
- **Dropbox**：选择 Dropbox，通过 OAuth 完成授权。
- **S3 兼容存储**：为 AWS S3、Wasabi、Backblaze B2 S3 等输入访问密钥、密钥和端点。

每个远程连接都会出现在浏览器下拉列表中。Linux Mint 的默认浏览器能顺畅处理 OAuth 流程，无需特殊配置。

<img src="/support/images/en/blog/new-remote.png" alt="Adding cloud remotes on Linux Mint in RcloneView" class="img-large img-center" />

## 浏览和管理云文件

RcloneView 的双栏浏览器是 Nemo 在云操作方面的绝佳补充。虽然 Nemo 在处理本地文件方面表现出色，但 RcloneView 将这种能力扩展到了云存储。在一栏浏览 Google Drive，在另一栏浏览本地主目录，即可在两者之间拖放文件，或在两个不同的云服务提供商之间拖放文件。

对于熟悉 Nemo 双栏模式（通过 Nemo 扩展提供）的用户，RcloneView 的布局会感觉十分自然。不同之处在于，RcloneView 的每一栏都可以打开任意云服务提供商，而不仅限于本地和网络路径。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Browsing cloud storage on Linux Mint with RcloneView" class="img-large img-center" />

## 在 Nemo 中挂载云存储

挂载完成后，云存储目录会像普通文件夹一样出现在 Nemo 中。你可以直接从已挂载的云存储中打开文件，在 Linux Mint 的各类应用程序中使用 —— 例如 LibreOffice、GIMP、VLC 或其他任何应用。

将你的 Google Drive 挂载到 `~/GoogleDrive`，它便会出现在 Nemo 的侧边栏中。启用 VFS 缓存以获得流畅的性能 —— 最近访问过的文件会被缓存到本地，因此重复访问时可即时打开。请根据可用磁盘空间配置缓存大小。

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="Mounting cloud storage as local drive on Linux Mint" class="img-large img-center" />

## 通过系统集成安排备份计划

RcloneView 内置的调度程序可处理定期备份任务。你可以配置一个夜间同步任务，将主目录（或指定文件夹）同步到 Google Drive、Backblaze B2 或任意其他云服务提供商。RcloneView 会自动运行已安排的任务。

对于更倾向于系统级调度的 Linux Mint 用户，也可以借助 RcloneView 的外部 rclone 连接模式，通过 cron 或 systemd 计时器来触发 rclone 命令。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling cloud backup on Linux Mint in RcloneView" class="img-large img-center" />

## 登录时自动启动

要让 RcloneView 在你登录 Linux Mint 时自动启动：

1. 从系统菜单打开**启动应用程序**。
2. 点击“添加”，输入 RcloneView AppImage 或已安装二进制文件的路径。
3. RcloneView 将随你的桌面会话一同启动，随时准备执行计划任务并挂载云盘。

## 快速上手

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView** —— AppImage 或 .deb。
2. 如果计划挂载云存储，请先安装 FUSE。
3. 在“远程管理器”中添加你的云账户。
4. 在 Linux Mint 桌面上浏览、同步并备份你的文件。

Linux Mint 提供了精致的桌面体验，而 RcloneView 补齐了系统原生所缺乏的多云文件管理能力。两者结合，让你能够全面掌控本地与云端存储。

---

**相关指南：**

- [添加 Google Drive](https://rcloneview.com/support/howto/#step-2-adding-remote-storage-google-drive-example)
- [将云存储挂载为本地驱动器](https://rcloneview.com/support/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive)
- [任务调度](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)

<CloudSupportGrid />
