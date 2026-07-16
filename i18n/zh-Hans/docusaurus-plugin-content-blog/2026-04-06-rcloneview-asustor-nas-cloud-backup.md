---
slug: rcloneview-asustor-nas-cloud-backup
title: "在 ASUSTOR NAS 上运行 RcloneView 实现自动化云备份"
authors:
  - tayson
description: "ASUSTOR NAS 设备性能足以通过 Docker 运行 RcloneView。设置自动化云备份、挂载远程存储，并直接从 NAS 监控传输进度。"
keywords:
  - rcloneview asustor nas
  - asustor nas cloud backup
  - asustor docker rcloneview
  - asustor cloud sync alternative
  - asustor nas rclone gui
  - asustor automated backup cloud
  - asustor mount cloud storage
  - asustor nas s3 backup
  - asustor cloud file manager
  - rcloneview nas setup
tags:
  - nas
  - platform
  - cloud-backup
  - automation
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 在 ASUSTOR NAS 上运行 RcloneView 实现自动化云备份

> 您的 ASUSTOR NAS 全天候运行——让它成为您的常驻云备份引擎。RcloneView 将您的 NAS 变成一个多云文件管理中心，提供计划备份、云挂载和实时传输监控。

ASUSTOR NAS 设备搭载 Intel 或 ARM 处理器，运行 ADM（ASUSTOR Data Master）操作系统，并通过 Portainer 应用或命令行支持 Docker。这使它们能够以容器化服务的形式运行 RcloneView——始终在线、持续备份，而无需占用台式机或笔记本电脑的资源。无论您是想将 NAS 共享备份到 Backblaze B2、将文件夹与 Google Drive 同步，还是将 S3 挂载为本地卷，ASUSTOR NAS 上的 RcloneView 都能通过基于网页的图形界面全部搞定。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 为什么要在 NAS 上运行云备份

与在工作站上运行相比，直接在 NAS 上运行云备份有以下几个优势：

- **全天候运行** —— 您的 NAS 本就 24/7 运行。备份可按计划执行，无需保持电脑处于唤醒状态。
- **局域网速度访问 NAS 数据** —— 无需先将文件通过网络拉取到电脑再上传。NAS 直接从自身磁盘读取数据。
- **集中管理** —— 所有备份任务、计划和日志都保存在 NAS 上。任何拥有浏览器的设备都可以管理它们。
- **不占用工作站资源** —— 将大文件传输的 CPU 和带宽开销转移到 NAS 上。

## ASUSTOR NAS 兼容性

通过 Docker 运行的 RcloneView 支持以下 ASUSTOR 型号：

- **基于 Intel 的**（x86_64）处理器：AS31、AS32、AS33、AS52、AS54、AS61、AS62、AS63、AS64、AS65、AS67、Lockerstor、Lockerstor Pro 以及 Flashstor 系列。
- **基于 ARM 的**处理器：Drivestor 和 Drivestor Pro 系列（AS11、AS33 ARM 变体）——请确认您的具体型号是否支持 Docker。
- **ADM 4.0 或更高版本**，并已从 App Central 安装 Docker（Portainer）。
- **建议至少 2 GB 内存**（如需并发处理大文件传输，建议 4 GB 以上）。

## 通过 Docker 安装 RcloneView

### 第 1 步 —— 从 App Central 安装 Docker

1. 在 ADM 网页界面中打开 **App Central**。
2. 搜索 **Portainer**（如可用，也可选择 Docker-CE）。
3. 安装并启动 Portainer 应用。

### 第 2 步 —— 部署 RcloneView 容器

在 `http://your-nas-ip:9443` 打开 Portainer 并创建一个新容器，或通过 SSH 使用命令行部署：

```bash
docker run -d \
  --name rcloneview \
  -p 5572:5572 \
  -v /volume1/Docker/rcloneview/config:/config/rclone \
  -v /volume1:/data/volume1 \
  --restart unless-stopped \
  rcloneview/rcloneview:latest
```

关键卷映射说明：

- `/volume1/Docker/rcloneview/config` —— 持久化存储您的 rclone 远程配置。
- `/volume1` —— 将您的主 NAS 卷暴露给 RcloneView，用于备份操作。

### 第 3 步 —— 访问网页界面

打开浏览器并访问 `http://your-nas-ip:5572`，您应该会看到 RcloneView 仪表盘。

<img src="/support/images/en/blog/new-remote.png" alt="RcloneView new remote setup on ASUSTOR NAS" class="img-large img-center" />

## 连接云端远程

在 RcloneView 界面中，添加您的云存储提供商：

### NAS 备份的常见配置

- **Backblaze B2** —— 每 TB 每月 6 美元，非常适合大规模 NAS 备份，性价比高。
- **Wasabi** —— 兼容 S3 的固定费率存储，无出站流量费用。
- **Google Drive** —— 在 NAS 和 Drive 之间同步重要文件夹。
- **Amazon S3** —— 企业级持久性保障，存储类别灵活可选。
- **SFTP** —— 备份到远程服务器或第二台 NAS。

每个远程只需配置一次即可永久保存。设置向导会引导您完成各提供商的身份验证——S3 兼容服务使用 API 密钥，Google Drive 和 OneDrive 使用 OAuth。

## 设置自动化备份计划

在 NAS 上运行 RcloneView 的核心价值在于实现自动化、无需人工干预的备份。以下是设置方法：

### 创建备份任务

1. 打开 RcloneView 中的双栏文件浏览器。
2. 将左侧栏设置为您的 NAS 本地路径（例如 `/data/volume1/Photos`）。
3. 将右侧栏设置为您的云端远程（例如 `backblaze-b2:nas-backup/photos/`）。
4. 选择 **同步**（Sync）以将 NAS 文件夹镜像到云端，或选择 **复制**（Copy）以仅添加新文件而不删除已删除的内容。
5. 将该操作保存为一个已命名的任务。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Run a backup job on ASUSTOR NAS with RcloneView" class="img-large img-center" />

### 为任务设置计划

设置任务自动运行：

- **每日凌晨 2:00** —— 在使用低峰时段进行备份，避免影响 NAS 性能。
- **每周完整同步** —— 在带宽需求最低的周末执行一次全面同步。
- **按需执行** —— 在进行重大更改前手动触发一次备份。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule automated cloud backups on ASUSTOR NAS" class="img-large img-center" />

## 挂载云存储

RcloneView 可以将云存储挂载为 NAS 上的本地路径，使远程文件像本地磁盘上的文件一样可访问。这对以下场景很有用：

- **扩展 NAS 容量**，借助云存储实现。
- **访问归档文件**，无需手动下载。
- 通过 NAS 媒体应用**流式播放**云存储中的媒体内容。

要在 Docker 中启用 FUSE 挂载，请在容器中添加以下参数：

```bash
--device /dev/fuse --cap-add SYS_ADMIN
```

然后使用 RcloneView 的挂载管理器将任意远程挂载到本地路径。

## 监控传输

当备份任务运行时，RcloneView 的传输监控功能会实时显示进度：

- 当前正在传输的文件
- 传输速度与预计完成时间（ETA）
- 错误与重试情况
- 已完成文件数量

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitor NAS cloud backup progress in RcloneView" class="img-large img-center" />

请查看任务历史记录，确认计划的备份已成功完成。如果任务失败（例如网络中断、凭据过期），RcloneView 会记录错误信息以便排查。

## ASUSTOR NAS 备份最佳实践

- **从最重要的数据开始** —— 优先备份照片、文档和数据库，媒体库可以稍后处理。
- **在工作时段使用带宽限制**，避免占满您的网络带宽：在任务选项中设置 `--bwlimit 10M`。
- **在云存储上启用版本控制**，以防范勒索软件或意外覆盖。
- **备份您的 rclone 配置** —— `/config/rclone` 目录包含您的云端凭据，请将其复制到第二个位置保存。
- **监控磁盘健康状况** —— 如果 NAS 磁盘在备份运行前就发生故障，云备份也无济于事。请使用 ADM 的存储管理器警报功能。

## 快速开始

1. 从 ASUSTOR App Central **安装 Portainer**。
2. 使用上述卷映射**部署 RcloneView Docker 容器**。
3. **添加您的云端远程** —— Backblaze B2、S3、Google Drive 或任何受支持的提供商。
4. 为您最重要的 NAS 共享**创建并设置备份任务计划**。
5. **每周检查任务历史记录**，确认一切运行正常。

您的 ASUSTOR NAS 已经通过 RAID 在本地保护您的数据。借助 RcloneView 添加自动化云备份，可为您提供真正的异地保护——并且完全自动运行。

---

**相关指南：**

- [云到 NAS 桥接：备份到 Synology](https://rcloneview.com/support/blog/cloud-to-synology-nas-with-rcloneview)
- [在 TrueNAS 上运行 RcloneView](https://rcloneview.com/support/blog/rcloneview-truenas-cloud-backup)
- [自动化每日云备份](https://rcloneview.com/support/blog/automate-daily-cloud-backups-with-rcloneview)

<CloudSupportGrid />
