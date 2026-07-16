---
slug: mount-hetzner-storage-box-sync-cloud-rcloneview
title: "将 Hetzner Storage Box 挂载为本地磁盘，并使用 RcloneView 同步到任意云存储"
authors:
  - tayson
description: "像访问本地文件夹一样访问你的 Hetzner Storage Box——通过 SFTP 挂载、可视化浏览文件，并使用 RcloneView 同步或备份到 AWS S3、Google Drive 或任意云存储。"
keywords:
  - hetzner storage box mount
  - hetzner storage box sync
  - hetzner storage box backup
  - hetzner sftp mount local drive
  - hetzner storage box rclone
  - hetzner storage box gui
  - hetzner to s3
  - hetzner cloud backup
  - hetzner storage box file manager
  - mount sftp as local drive
tags:
  - RcloneView
  - hetzner
  - sftp
  - cloud-storage
  - mount
  - sync
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 将 Hetzner Storage Box 挂载为本地磁盘，并使用 RcloneView 同步到任意云存储

> Hetzner Storage Box 在欧洲提供无可匹敌的每 TB 价格，但通过 FTP 或 SCP 管理文件却十分繁琐。RcloneView 可以将其挂载为本地磁盘，并可视化地同步到任意云存储。

Hetzner Storage Box 是欧洲性价比最高的存储方案之一——可靠、实惠，并支持通过 SFTP、FTP、SMB 和 WebDAV 访问。但由于没有原生的桌面客户端，管理文件通常意味着要使用命令行工具或基础的 FTP 客户端。RcloneView 通过 SFTP 连接改变了这一点，让你可以将 Storage Box 挂载为本地磁盘，在双栏浏览器中浏览文件，并同步到 AWS S3、Google Drive 或任意其他云存储。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 为什么要将 RcloneView 与 Hetzner Storage Box 搭配使用？

- **没有原生桌面客户端** —— Hetzner 提供了原始协议（SFTP、FTP、SMB），但没有同步应用。
- **挂载为本地磁盘** —— 像访问桌面上的普通文件夹一样访问你的 Storage Box。
- **跨云同步** —— 自动将 Storage Box 数据复制到 S3、Google Drive 或 OneDrive。
- **可视化文件管理** —— 无需命令行即可浏览、拖放、比较和整理文件。

## 通过 SFTP 连接 Hetzner Storage Box

1. 打开 RcloneView，点击 **Add Remote**。
2. 从提供商列表中选择 **SFTP**。
3. 输入你的 Hetzner 凭据：
   - **Host**：`uXXXXXX.your-storagebox.de`（来自你的 Hetzner Robot 面板）
   - **Port**：`23`（Hetzner 使用非标准 SFTP 端口）
   - **Username**：你的 Storage Box 用户名（例如 `u123456`）
   - **Password**：你的 Storage Box 密码
4. 保存——你的 Storage Box 目录现在即可浏览。

<img src="/support/images/en/blog/new-remote.png" alt="Add Hetzner Storage Box via SFTP" class="img-large img-center" />

## 挂载为本地磁盘

连接完成后，将你的 Storage Box 挂载为本地文件夹：

1. 在浏览器中定位到你的 SFTP 远程。
2. 右键点击你想要挂载的文件夹 → 选择 **Mount**。
3. 选择本地挂载点（Windows 上为盘符，Mac/Linux 上为路径）。
4. 你的 Hetzner 存储将以原生文件夹的形式出现。

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="Mount Hetzner Storage Box as local drive" class="img-large img-center" />

现在，你可以像使用本地存储一样，使用任意桌面应用打开文件、拖放，并处理你的 Storage Box 数据。

## 浏览与管理文件

双栏浏览器让你可以将 Hetzner 存储与任意其他远程一起管理：

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Browse Hetzner Storage Box alongside cloud" class="img-large img-center" />

- 浏览文件夹层级结构
- 在 Hetzner 与云存储之间拖放文件
- 创建、重命名和删除文件与文件夹
- 查看文件大小和日期

## 同步到云存储提供商

### Hetzner → AWS S3（异地备份）

为你已经十分可靠的 Hetzner 存储增加一层云端冗余：

1. 创建一个同步任务：Hetzner SFTP → S3 存储桶。
2. 使用 [任务调度](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution) 设置为每晚执行。
3. 使用 S3 Glacier 实现具有成本效益的冷归档。

### Hetzner → Google Drive（团队共享）

让 Hetzner 数据可供 Google Workspace 用户访问：

1. 创建一个复制任务：Hetzner → Google Drive 文件夹。
2. 使用 [过滤规则](https://rcloneview.com/support/blog/filter-rules-selective-sync-rcloneview) 仅同步特定文件夹。

### 云存储 → Hetzner（异地备份目标）

将 Hetzner 用作你实惠的异地备份目标：

1. 创建一个同步任务：Google Drive → Hetzner Storage Box。
2. 设置为每日执行——Hetzner 按 TB 计费的模式使这一方案极具成本效益。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Run Hetzner sync job" class="img-large img-center" />

## 验证与监控

### 文件夹比较

验证 Hetzner 与云备份之间的同步完整性：

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare Hetzner with cloud backup" class="img-large img-center" />

### 自动化调度

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule Hetzner backup jobs" class="img-large img-center" />

## 开始使用

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 通过 SFTP（端口 23）**添加 Hetzner Storage Box**。
3. **挂载** 为本地磁盘，或在浏览器中浏览。
4. **同步** 到 S3、Google Drive 或任意其他云存储。
5. **设置调度**，实现自动化每日备份。

Hetzner Storage Box 是欧洲最被低估的存储方案之一。RcloneView 为它带来了应有的桌面客户端体验，还额外附赠了多云同步能力。

---

**相关指南：**

- [将 SFTP 和 SMB 挂载为本地磁盘](https://rcloneview.com/support/blog/mount-sftp-smb-local-drive-rcloneview)
- [将云存储挂载为本地磁盘](https://rcloneview.com/support/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive)
- [比较文件夹内容](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [任务调度](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)
- [选择性同步的过滤规则](https://rcloneview.com/support/blog/filter-rules-selective-sync-rcloneview)

<CloudSupportGrid />
