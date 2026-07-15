---
slug: manage-sftp-server-cloud-sync-rcloneview
title: "将任意 SFTP 服务器连接到 RcloneView —— 让远程服务器与云存储同步"
authors:
  - tayson
description: "SFTP 是 Linux 服务器、VPS 和主机上安全文件访问的标准协议。将任意 SFTP 服务器连接到 RcloneView，并与 Google Drive、S3 或 70 多种云存储同步。"
keywords:
  - sftp cloud sync
  - sftp to google drive
  - sftp backup tool
  - sftp file manager gui
  - sftp to s3 sync
  - ssh file transfer cloud
  - sftp cloud backup
  - sftp gui client
  - sftp remote manager
  - linux server cloud sync
tags:
  - RcloneView
  - sftp
  - sync
  - cloud-storage
  - guide
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 将任意 SFTP 服务器连接到 RcloneView —— 让远程服务器与云存储同步

> 每一台 Linux 服务器、VPS 和网站主机都支持 SFTP。RcloneView 可以将任意 SFTP 端点变成一个可管理的远程，你可以浏览它、将其同步到云存储，并按计划进行备份。

SFTP（SSH 文件传输协议）是远程服务器上安全文件访问的通用协议。无论是网站服务器、开发主机、VPS 还是专用服务器，几乎都支持 SFTP。RcloneView 可以连接任意 SFTP 服务器，并将其与你的云账户并列展示——以可视化方式浏览服务器文件、同步到 S3 或 Google Drive，并按计划安排自动备份。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 添加 SFTP 远程

<img src="/support/images/en/blog/new-remote.png" alt="Add SFTP remote" class="img-large img-center" />

配置服务器主机名、端口（默认 22）、用户名，以及密码或 SSH 密钥认证方式。你的服务器文件系统会立即显示在资源管理器中。

## 核心工作流程

### 将网站服务器备份到云端

将网站服务器的 `/var/www` 或 `/home` 目录同步到 S3 或 Google Drive：

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="SFTP server to cloud" class="img-large img-center" />

### 安排服务器备份计划

自动执行每晚将服务器数据备份到云存储：

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule SFTP backup" class="img-large img-center" />

### 在服务器之间迁移

要迁移到新服务器？在一个窗格中打开旧服务器的 SFTP，在另一个窗格中打开新服务器，即可直接传输。

### 同步开发文件

通过云存储作为中间媒介，让本地开发环境与远程服务器保持同步。

### 验证备份

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify SFTP backup" class="img-large img-center" />

## SSH 密钥认证

对于自动化备份，推荐使用 SSH 密钥认证而非密码。在远程设置中配置你的密钥，即可实现免密码的安全连接。

## 性能建议

- 对于慢速网络上的文本密集型传输，**使用压缩**
- 在共享主机环境中，**将并发传输数限制**为 2-4 个
- **排除临时文件**——过滤掉 `.cache`、`node_modules`、`__pycache__`
- **安排在非高峰时段**执行，以避免影响服务器性能

## 快速上手

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. **将你的 SFTP 服务器添加**为远程。
3. 在双窗格资源管理器中**浏览服务器文件**。
4. **同步到云端**并安排备份计划。

只要有 SSH，RcloneView 就能管理它。

---

**相关指南：**

- [将 SFTP/SMB 挂载为本地磁盘](https://rcloneview.com/support/blog/mount-sftp-smb-local-drive-rcloneview)
- [连接 WebDAV 服务器](https://rcloneview.com/support/blog/connect-webdav-server-cloud-sync-rcloneview)
- [将 FTP 服务器迁移到云端](https://rcloneview.com/support/blog/migrate-ftp-server-to-cloud-storage-rcloneview)

<CloudSupportGrid />
