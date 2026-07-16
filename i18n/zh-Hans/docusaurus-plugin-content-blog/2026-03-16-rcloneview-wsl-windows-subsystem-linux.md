---
slug: rcloneview-wsl-windows-subsystem-linux
title: "在 WSL 上运行 RcloneView — 通过 Windows Subsystem for Linux 进行云同步"
authors:
  - tayson
description: "WSL 让你在 Windows 上拥有一个 Linux 环境。在 WSL 中运行 RcloneView，即可获得 Linux 原生的云同步性能，同时保持你的 Windows 工作流程不变。"
keywords:
  - rcloneview wsl
  - wsl cloud sync
  - windows subsystem linux cloud
  - rclone wsl
  - wsl file sync
  - wsl cloud backup
  - wsl rcloneview setup
  - linux on windows cloud
  - wsl2 cloud storage
  - wsl file management
tags:
  - linux
  - windows
  - platform
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 在 WSL 上运行 RcloneView — 通过 Windows Subsystem for Linux 进行云同步

> 想要在不离开 Windows 的情况下获得 Linux 原生的 rclone 性能吗？WSL2 为你提供完整的 Linux 内核。RcloneView 可以在其中运行，将 Linux 的可靠性与 Windows 的便利性结合在一起。

Windows Subsystem for Linux（WSL2）提供了与 Windows 并行运行的真正的 Linux 内核。对于偏好 Linux 工具但又在 Windows 环境中工作的用户来说，WSL2 提供了两全其美的解决方案。RcloneView 可以在 WSL 中原生运行，为你带来 Linux 级别的云同步性能，同时还能访问你的 Windows 和 Linux 文件系统。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 为什么在云同步中使用 WSL？

### Linux 原生性能

在某些操作（尤其是 FUSE 挂载和高并发传输）上，rclone 的 Linux 版本通常比 Windows 版本表现更好。

### 脚本集成

WSL 提供了 bash、cron 以及标准的 Linux 工具。将 RcloneView 的图形界面与命令行脚本结合，可以实现更高级的工作流程。

### 访问 Windows 文件

WSL2 可以通过 `/mnt/c/`、`/mnt/d/` 等路径访问你的 Windows 文件系统。使用 Linux 工具将 Windows 文件同步到云存储。

### 从 Windows 访问 Linux 文件

Windows 可以通过 `\\wsl$\` 网络路径访问 WSL 文件。RcloneView 在 WSL 中管理的文件可以从 Windows 应用程序中访问。

## 安装

使用 Linux 安装步骤，在你的 WSL2 发行版（Ubuntu、Debian 等）中安装 RcloneView：

<img src="/support/images/en/blog/new-remote.png" alt="Set up RcloneView in WSL" class="img-large img-center" />

## 关键工作流程

### 将 Windows 文档同步到云端

从 WSL 访问你的 Windows 文档文件夹，并将其同步到云存储：

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Sync Windows files via WSL" class="img-large img-center" />

### 使用 cron 或 RcloneView 调度器进行调度

使用 Linux cron 或 RcloneView 内置的调度器来实现自动化任务：

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule cloud sync in WSL" class="img-large img-center" />

### 挂载云存储

在 WSL 中通过 FUSE 挂载云存储，然后从 Linux 和 Windows 应用程序中访问挂载路径。

### 跨平台开发备份

使用 WSL 进行编码的开发者可以自动将其 WSL 项目文件备份到云存储：

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Back up dev projects" class="img-large img-center" />

## WSL 使用技巧

- **使用 WSL2**（而非 WSL1），以获得完整的 Linux 内核支持和更好的文件系统性能
- **将 Linux 文件存储在 WSL 文件系统中**以获得最佳性能——访问 `/mnt/c/` 速度较慢
- **在 `.wslconfig` 中为 WSL2 分配足够的内存**，以便进行大文件传输
- **使用 systemd**（在较新的 WSL2 版本中可用）来运行服务

## 开始使用

1. **安装 WSL2**，选择 Ubuntu 或你偏好的发行版。
2. **安装 RcloneView**，参照 Linux 安装指南。
3. **添加你的云账户**，在远程管理器中进行操作。
4. **在你的 WSL 环境中进行同步、挂载和调度**。

Linux 工具，Windows 桌面，云端无处不在。

---

**相关指南：**

- [在 Ubuntu/Debian 上安装 RcloneView](https://rcloneview.com/support/blog/install-rcloneview-ubuntu-debian-linux)
- [在 ARM Linux 上运行 RcloneView](https://rcloneview.com/support/blog/rcloneview-arm-linux-cloud-sync)
- [在 Docker 中运行 RcloneView](https://rcloneview.com/support/blog/run-rcloneview-docker-container-cloud-sync)

<CloudSupportGrid />
