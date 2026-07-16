---
slug: mount-sftp-smb-local-drive-rcloneview
title: "使用 RcloneView 将 SFTP 或 SMB 存储挂载为本地磁盘——自托管云集成"
authors:
  - tayson
description: 借助 RcloneView 的 GUI 挂载、VFS 缓存以及跨 Windows、macOS 和 Linux 的统一多云仪表盘，将任意 SFTP 或 SMB 服务器变成一流的本地磁盘。
keywords:
  - rcloneview
  - rclone mount gui
  - mount smb windows
  - mount sftp mac
  - nas remote access
  - self hosted cloud
  - vfs cache
  - winfsp
  - macfuse
  - mount network drive
tags:
  - RcloneView
  - mount
  - sftp
  - smb
  - nas
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 使用 RcloneView 将 SFTP 或 SMB 存储挂载为本地磁盘——自托管云集成

> 让你的 NAS、家庭服务器或办公文件服务器表现得像 Google Drive 一样：将 SFTP 或 SMB 挂载为真正的盘符或 `/Volumes` 路径，并具备缓存、缓冲能力和图形界面。

SFTP 和 SMB 是自托管存储的支柱——Synology/QNAP NAS、家庭服务器、VPS 和企业文件服务器都依赖它们。但要在 Windows、macOS 和 Linux 上可靠地挂载它们，往往意味着要面对特定操作系统的怪癖、脆弱的身份验证、缺乏缓存控制，以及无法与你的云存储统一查看。

RcloneView 解决了这些问题。它将 `rclone mount` 封装成一个友好的桌面应用，让你的 SFTP/SMB 共享像现代云盘一样运作——具备 VFS 缓存、缩略图流式加载、缓冲调节和自动化功能。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 了解 SFTP 与 SMB 的区别

| 特性     | SFTP                       | SMB                            |
| -------- | --------------------------- | ------------------------------- |
| 协议     | 基于 SSH                    | Windows 网络共享                |
| 最佳用途 | 远程服务器，跨广域网的安全访问 | 局域网文件共享，本地网络         |
| 速度     | 中等（加密）                 | 在局域网上非常快                |
| 安全性   | 默认强度高                   | 取决于版本/策略                 |
| 系统支持 | 通用                         | 在 Windows/macOS 上最佳，在 Linux 上稳定 |

该如何选择？

- **SFTP**：通过互联网访问的 VPS、零信任访问、端口转发的家庭实验室、拉取配置文件的开发者。
- **SMB**：办公室局域网、高吞吐量 NAS、团队共享盘、网络内的低延迟媒体编辑。

RcloneView 同时支持这两种协议，以及 Google Drive、S3、Dropbox、OneDrive 等——均可在同一个仪表盘中管理。

## 为什么使用 RcloneView 挂载 SFTP/SMB

- **无需命令行**：所有 `rclone mount` 参数都会在图形界面中自动生成；参见 [远程管理器](/howto/rcloneview-basic/remote-manager) 了解远程配置，以及 [将云存储挂载为本地磁盘](/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive) 了解引导式挂载。
- **跨平台**：Windows（WinFsp）、macOS（macFUSE）、Linux（FUSE），界面体验一致。
- **真正的本地挂载**：Windows 上的盘符，或 macOS 上的 `/Volumes/Server`；Linux 上的标准挂载点。
- **性能就绪**：VFS 缓存、缩略图流式加载、缓冲控制以及预读调优，均在挂载对话框中呈现。
- **统一控制**：在同一个位置管理 SFTP/SMB 与云存储、安排重新挂载计划，并监控吞吐量（参见 [任务调度与执行](/howto/rcloneview-advanced/job-scheduling-and-execution) 和 [实时传输监控](/howto/rcloneview-basic/real-time-transfer-monitoring)）。

## 分步指南——使用 RcloneView 挂载 SFTP 或 SMB

### 1）添加远程（SFTP 或 SMB）

- 打开 **远程管理器** → **添加远程** → 选择 **SFTP** 或 **SMB**。
- 输入 **主机/IP** 和 **端口**。
- 使用 **用户名/密码** 或 SFTP 的 **SSH 密钥** 进行身份验证。对于 SMB，如有需要请设置域/用户。
- 保存该远程；可考虑在 [常规设置](/howto/rcloneview-basic/general-settings) 中启用配置密码。
  <img src="/support/images/en/blog/add-sftp-remote.png" alt="Add SFTP Remote" class="img-large img-center" />

### 2）创建挂载任务

- 在 **挂载管理器** 或资源管理器工具栏中点击 **挂载**。
- 选择你的 SFTP/SMB 远程并指定目标：
  - Windows → `X:`（或任意空闲盘符）
  - macOS → `/Volumes/ServerName`
  - Linux → `/mnt/server` 或你偏好的路径

### 3）配置 VFS 缓存与缓冲

- **缓存模式**：选择 `Full` 以获得流畅浏览和缩略图流式加载体验（适合照片/Plex）。
- **缓存目录**：指向一个 SSD 文件夹。
- **预读**：媒体拖动时设置为 4–8 MB；4K 视频可适当增加。
- **写回/缓冲**：为大型顺序写入启用；如果你共享链接，请限制带宽。

### 4）挂载并测试

- 点击 **挂载**，然后打开 Finder/资源管理器/文件应用。
- 浏览文件夹；预览图片和流式播放视频以验证缓存效果。
- 保留该挂载条目以便重启后自动重新连接（切换 **自动挂载**）。

<img src="/support/images/en/blog/mount-sftp.png" alt="Mount SFTP/SMB from RcloneView Explorer" class="img-large img-center" />

## 使用场景

- **NAS 远程访问**：在任意操作系统上将你的 NAS 当作云盘使用。
- **本地 ↔ 云 ↔ 自托管**：在同一界面中于 SFTP/SMB 与 Google Drive/S3/Dropbox 之间移动文件。
- **办公共享盘集成**：为设计团队映射部门共享盘并带有缓存缩略图。
- **媒体编辑**：直接从 NAS 编辑视频/照片，通过 VFS 缓存避免重复下载。
- **多服务器中心**：并排挂载多个 SFTP/SMB 服务器，并在它们之间拖放文件。

## 性能优化技巧

- 对于媒体密集型工作负载（Plex/Photos），将 **缓存模式** 设为 **Full**。
- 使用 **NVMe/SSD 缓存目录** 加速缩略图和拖动播放。
- 为大型顺序读/写增加 **预读** 和 **缓冲区大小**。
- 当吞吐量至关重要时，SMB 优先选择 **局域网**；对于跨广域网的 SFTP，使用 SSH 密钥以获得更好的稳定性。
- 在 [实时传输监控](/howto/rcloneview-basic/real-time-transfer-monitoring) 中监控传输情况，并通过 [任务调度与执行](/howto/rcloneview-advanced/job-scheduling-and-execution) 安排重新挂载计划。

## 结语——自托管与多云的结合

SFTP 和 SMB 不再需要给人一种老旧网络驱动器的感觉。借助 RcloneView，你可以获得类似云盘的挂载体验、智能缓存，以及一个无需脚本即可混合管理 NAS、VPS 和公有云的统一仪表盘。添加一次服务器，选择一个盘符或 `/Volumes` 路径，剩下的交给 RcloneView 保持挂载存活，你只需专注于文件本身。

<CloudSupportGrid />
