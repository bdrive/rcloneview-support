---
slug: install-rcloneview-ubuntu-debian-linux
title: "如何在 Ubuntu 和 Debian Linux 上安装 RcloneView —— 完整安装指南"
authors:
  - tayson
description: "在 Ubuntu 22.04/24.04 和 Debian 12 上安装 RcloneView 的分步指南。涵盖下载、依赖项、用于挂载的 FUSE 设置以及常见问题排查。"
keywords:
  - install rcloneview linux
  - rcloneview ubuntu
  - rcloneview debian
  - rclone gui linux
  - rcloneview linux setup
  - cloud sync tool linux
  - rclone desktop linux
  - mount cloud storage linux
  - rcloneview installation guide
  - linux cloud file manager
tags:
  - RcloneView
  - linux
  - ubuntu
  - debian
  - installation
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 如何在 Ubuntu 和 Debian Linux 上安装 RcloneView —— 完整安装指南

> RcloneView 原生支持 Linux。本指南将带你完成在 Ubuntu 和 Debian 上的安装过程，包括用于将云存储挂载为本地驱动器的 FUSE 设置。

Linux 用户长期以来一直依赖 rclone 的命令行来管理云存储。RcloneView 在 rclone 之上添加了完整的图形界面——双栏文件浏览器、可视化同步任务、计划任务以及一键挂载。以下是在 Ubuntu 和 Debian 上运行它的方法。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 系统要求

- **操作系统**：Ubuntu 20.04、22.04、24.04 或 Debian 11、12
- **架构**：x86_64（AMD64）
- **内存**：最低 4 GB（大文件传输建议 8 GB）
- **磁盘空间**：安装需要 200 MB
- **依赖项**：FUSE 3（用于挂载）、Qt 6 运行时库

## 步骤 1：下载 RcloneView

从官方网站下载 `.deb` 安装包：

访问 [rcloneview.com/src/download.html](https://rcloneview.com/src/download.html) 并下载 Linux 版 `.deb` 安装包。

## 步骤 2：安装软件包

使用 `dpkg` 进行安装：

```bash
sudo dpkg -i rcloneview_*.deb
```

如果存在缺失的依赖项，请修复它们：

```bash
sudo apt-get install -f
```

这将安装 RcloneView，并自动拉取所需的 Qt 库。

## 步骤 3：设置用于挂载的 FUSE

要将云存储挂载为本地目录，你需要 FUSE：

```bash
sudo apt-get install fuse3
```

验证 FUSE 是否正常工作：

```bash
fusermount3 --version
```

### 允许非 root 用户挂载

编辑 FUSE 配置：

```bash
sudo nano /etc/fuse.conf
```

取消注释以下这一行：

```
user_allow_other
```

这允许 RcloneView 使用 `--allow-other` 标志进行挂载，使挂载的驱动器可被你的用户访问。

## 步骤 4：启动 RcloneView

从应用程序菜单或终端启动：

```bash
rcloneview
```

首次启动时，RcloneView 会自动检测或下载最新版本的 rclone 二进制文件。

## 步骤 5：添加你的第一个远程

点击 **添加远程（Add Remote）**，配置你的云服务提供商：

<img src="/support/images/en/blog/new-remote.png" alt="Add cloud remote on Linux" class="img-large img-center" />

## 步骤 6：挂载云存储

将任意远程挂载为本地目录。像访问本地文件夹一样访问你的 Google Drive、S3 存储桶或 OneDrive：

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="Mount cloud storage on Linux" class="img-large img-center" />

挂载的远程会显示为普通目录——可以在 Nautilus、Dolphin 或任何文件管理器中浏览它们。

## 故障排查

### “rclone not found”（未找到 rclone）

RcloneView 会自带或自动下载 rclone。如果找不到它：

```bash
which rclone
```

如果未安装 rclone，RcloneView 会提示你下载。你也可以手动安装：

```bash
sudo apt-get install rclone
```

### 挂载失败并提示 “Permission denied”（权限被拒绝）

确保已安装 FUSE，并且 `/etc/fuse.conf` 中的 `user_allow_other` 已启用。然后重启 RcloneView。

### Qt 库错误

如果你看到缺少 Qt 库的错误：

```bash
sudo apt-get install libqt6widgets6 libqt6gui6 libqt6core6 libqt6network6
```

### AppImage 替代方案

如果你不想进行系统级安装，RcloneView 还提供了 AppImage：

```bash
chmod +x RcloneView-*.AppImage
./RcloneView-*.AppImage
```

AppImage 打包了所有依赖项，无需安装即可运行。

## 登录时自动启动

要在登录时自动启动 RcloneView，请将其添加到你的桌面环境的自启动项中：

**GNOME（Ubuntu）：**

创建 `~/.config/autostart/rcloneview.desktop`：

```ini
[Desktop Entry]
Type=Application
Name=RcloneView
Exec=rcloneview
Hidden=false
X-GNOME-Autostart-enabled=true
```

这样可以确保你的计划同步任务和已挂载的驱动器在登录后立即可用。

## 现在你可以做什么

在 Linux 上运行 RcloneView，你可以：

- **浏览** 双栏浏览器中的 70 多个云服务提供商。
- **挂载** 任意云存储为本地目录。
- **同步** 云端、NAS 和本地存储之间的数据。
- **计划** 自动化备份任务。
- **对比** 文件夹内容，在同步前避免冲突。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="RcloneView running on Linux" class="img-large img-center" />

## 快速上手

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 使用 `dpkg -i` 和 `apt-get install -f` **安装**。
3. **设置 FUSE** 以进行挂载。
4. **添加远程**，进行挂载、同步和计划任务。

---

**相关指南：**

- [将云存储挂载为本地驱动器](https://rcloneview.com/support/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive)
- [创建同步任务](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [任务计划](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)
- [对比文件夹内容](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)

<CloudSupportGrid />
