---
slug: rcloneview-truenas-cloud-backup
title: "将 RcloneView 与 TrueNAS 结合使用以实现云备份和同步"
authors:
  - tayson
description: "将 RcloneView 连接到 TrueNAS(CORE 或 SCALE),实现云备份、同步和多云管理。用 rclone 的完整功能集替代或增强 TrueNAS 的 Cloud Sync 任务。"
keywords:
  - rcloneview truenas
  - truenas cloud backup rclone
  - truenas scale rclone gui
  - truenas core cloud sync
  - rclone truenas setup
  - truenas s3 backup rcloneview
  - truenas google drive backup
  - truenas cloud storage management
  - backup truenas to cloud
  - truenas rclone integration
tags:
  - nas
  - cloud-backup
  - platform
  - linux
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 将 RcloneView 与 TrueNAS 结合使用以实现云备份和同步

> TrueNAS 内置了由 rclone 驱动的 Cloud Sync 任务——但其内置界面功能有限。将 RcloneView 与 TrueNAS 搭配运行,可以解锁 rclone 的完整功能集:多云管理、Crypt 远程、Bisync、过滤规则、文件夹比较等等。

TrueNAS CORE 和 SCALE 都在底层集成了 rclone,用于其 Cloud Sync 任务功能。但其网页 GUI 只暴露了 rclone 一小部分能力——提供商选项有限、没有加密层、没有 bisync、也没有跨云任务。通过在 TrueNAS 上运行 RcloneView(借助 Docker、虚拟机或远程工作站),你可以在继续使用 TrueNAS 作为主要存储平台的同时,获得 rclone 的完整功能集。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## TrueNAS + RcloneView:两种集成方式

### 方式一 —— 在 TrueNAS SCALE 容器(Docker)中运行 RcloneView

TrueNAS SCALE 通过其 Apps 界面原生支持 Docker 容器。你可以将 RcloneView 作为持久化容器运行:

1. 在 TrueNAS SCALE 中,导航到 **Apps → Available Applications**,或使用 **Custom App** 选项。
2. 部署 RcloneView 的 Docker 镜像,并将卷挂载指向你的 TrueNAS 数据集路径。
3. 从浏览器访问 RcloneView 的网页界面。

这样可以让 RcloneView 保留在 NAS 本机上运行,备份任务无需依赖单独的机器。

### 方式二 —— 在工作站上运行 RcloneView,将 NAS 作为远程

在你的桌面电脑上运行 RcloneView,并将 TrueNAS 数据集添加为远程:

- **SMB**:在 RcloneView 中将 Windows 共享添加为本地或 SMB 远程。
- **SFTP**:在 TrueNAS 上启用 SFTP,并在 RcloneView 中将其添加为 SFTP 远程。
- **NFS**:在本地挂载你的 NAS NFS 共享,并在 RcloneView 中将其视为本地路径。

这种方式设置更简单,无需 Docker 相关经验即可使用。

## 从 TrueNAS 设置 SFTP

这是最可靠的远程访问方式:

### 步骤 1 —— 在 TrueNAS 上启用 SSH

在 TrueNAS 中:**System → Services → SSH → Enable**。创建一个专用用户,并将其访问权限限制在你的备份数据集范围内。

### 步骤 2 —— 在 RcloneView 中将 TrueNAS 添加为 SFTP 远程

<img src="/support/images/en/blog/new-remote.png" alt="Add TrueNAS SFTP remote in RcloneView" class="img-large img-center" />

1. 在 RcloneView 中点击 **New Remote**。
2. 选择 **SFTP**。
3. 输入你的 TrueNAS IP、SSH 端口(默认 22)、用户名以及 SSH 密钥或密码。
4. 将根路径设置为你的数据集(例如 `/mnt/tank/Backups`)。
5. 保存。

此时 RcloneView 会将你的 TrueNAS 数据集显示为一个可导航的远程。

## 面向 TrueNAS 的云备份任务

将 TrueNAS 作为 SFTP 远程接入后,你可以创建全面的备份任务:

### 将 TrueNAS 数据集备份到 S3

1. 在 RcloneView 中创建一个新的 **Sync** 任务。
2. 源:`truenas-sftp:/mnt/tank/Photos/`
3. 目标:`s3-backup:truenas-photos-backup/`
4. 启用校验和验证以保证数据完整性。
5. 安排为每晚执行。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule TrueNAS to S3 backup job" class="img-large img-center" />

### 加密备份到云端

对于敏感数据集,添加一个 Crypt 远程层:

1. 创建一个包裹你的 S3 远程的 Crypt 远程。
2. 将 Crypt 远程设置为目标,而不是原始的 S3 远程。
3. 文件会在离开 TrueNAS 之前完成客户端加密。

### 多云备份

使用 RcloneView 将同一个 TrueNAS 数据集同时备份到两个云提供商:

- 任务 1:`truenas-sftp:/mnt/tank/` → `s3-primary:`(每日)
- 任务 2:`truenas-sftp:/mnt/tank/` → `b2-secondary:`(每周)

## 相较于 TrueNAS 内置 Cloud Sync 的优势

| 功能 | TrueNAS Cloud Sync | RcloneView |
|---------|-------------------|-----------|
| 提供商支持 | 约 20 个提供商 | 70+ 个提供商 |
| Crypt / 加密层 | ✗ | ✓ |
| Bisync(双向同步) | ✗ | ✓ |
| 过滤规则 | 有限 | 完整的 rclone 过滤支持 |
| 文件夹比较 | ✗ | ✓ |
| 跨云(云 A → 云 B) | ✗ | ✓ |
| 任务调度 | ✓ | ✓ |
| 实时监控 | 有限 | ✓ |

## 监控与验证

使用 RcloneView 的 **Folder Comparison(文件夹比较)** 功能,定期验证你的 TrueNAS 备份是否与云存储保持一致:

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify TrueNAS backup in cloud with folder comparison" class="img-large img-center" />

将 TrueNAS 源与云端目标进行比较——任何缺失或变更的文件都会立即显示出来。可以安排每月运行一次验证,作为数据完整性检查。

## 快速上手

1. **下载 RcloneView**,访问 [rcloneview.com](https://rcloneview.com/src/download.html)。
2. **在 TrueNAS 上启用 SSH**,并在 RcloneView 中将其添加为 SFTP 远程。
3. **创建备份任务**,将 TrueNAS 数据集备份到你的云提供商。
4. **调度并加密**——设置每晚执行的备份任务,并为敏感数据集添加 Crypt 远程。

TrueNAS 是出色的 NAS 软件。将它与 RcloneView 搭配使用,你将获得一套完整、灵活的云备份方案,其能力远超 TrueNAS 内置工具所能提供的范围。

---

**相关指南:**

- [在 Synology NAS 上运行 RcloneView](https://rcloneview.com/support/blog/rcloneview-synology-rclone-gui)
- [在 Docker 中运行 RcloneView](https://rcloneview.com/support/blog/run-rcloneview-docker-container-cloud-sync)
- [将 NAS 备份到多个云](https://rcloneview.com/support/blog/backup-nas-to-multiple-clouds-rcloneview)

<CloudSupportGrid />
