---
slug: sync-dropbox-to-hetzner-storage-box-rcloneview
title: "将 Dropbox 同步到 Hetzner Storage Box — 使用 RcloneView 进行云备份"
authors:
  - tayson
description: "使用 RcloneView 将 Dropbox 文件同步并备份到 Hetzner Storage Box。这是一份关于从 Dropbox 迁移或维护备份副本到 Hetzner 的分步指南。"
keywords:
  - sync Dropbox to Hetzner Storage Box
  - Dropbox Hetzner backup
  - migrate Dropbox to Hetzner
  - Hetzner Storage Box cloud backup
  - rclone Dropbox Hetzner
  - Dropbox to SFTP backup
  - European cloud backup Dropbox
  - RcloneView Dropbox Hetzner
tags:
  - dropbox
  - hetzner
  - cloud-to-cloud
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 将 Dropbox 同步到 Hetzner Storage Box — 使用 RcloneView 进行云备份

> RcloneView 通过 SFTP 将 Dropbox 同步到 Hetzner Storage Box，为欧洲用户提供符合 GDPR 规范的 Dropbox 文件二级备份目标。

Hetzner Storage Box 是一项经济实惠、托管于德国的存储服务，支持 SFTP、FTP、Samba 和 WebDAV 访问。许多使用 Dropbox 进行协作的欧洲企业和开发者会将 Hetzner Storage Box 添加为二级备份目标：它在大容量存储场景下的成本显著更低，并能将数据保留在欧盟司法管辖范围内。RcloneView 通过 rclone 的 Dropbox 和 SFTP 后端连接两者，使定期的 Dropbox 到 Hetzner 同步成为一项简单直接的图形界面操作。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 设置 Dropbox 和 Hetzner Storage Box

先添加 Dropbox：**远程标签 → 新建远程 → Dropbox**，通过 OAuth 浏览器登录进行身份验证。您的 Dropbox 文件夹会立即出现在资源管理器中。

将 Hetzner Storage Box 添加为 SFTP 远程：**新建远程 → SFTP**。配置如下：
- **主机**：`yourboxid.your-storagebox.de`
- **用户**：您的 Storage Box 用户名（显示在 Hetzner Robot 面板中）
- **身份验证**：SSH 密钥（推荐）或密码
- **端口**：23（Hetzner Storage Box 使用端口 23，而非标准的 22）

保存前请先测试连接。两个远程都添加完成后，打开分屏资源管理器，即可在左侧浏览 Dropbox，右侧浏览 Hetzner。

<img src="/support/images/en/blog/new-remote.png" alt="Configuring Dropbox and Hetzner Storage Box SFTP remote in RcloneView" class="img-large img-center" />

## 创建定时同步任务

对于持续性的备份场景，请在任务管理器中创建一个同步任务：源为您的 Dropbox 文件夹（例如 `dropbox:/Team/Projects/`），目标为您的 Hetzner 路径（例如 `hetzner:/backups/dropbox/`）。在第 2 步中，将并发传输数设置为 4–6 — Hetzner Storage Box 在此并发级别下能很好地处理 SFTP 连接。

将任务安排在每晚凌晨 2:00 运行（PLUS 许可证）。增量同步仅复制新增或修改过的文件，使初次完整同步之后的传输时间保持较短。任务历史记录会记录每次运行的状态、传输量和耗时，便于查阅。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling nightly Dropbox to Hetzner sync in RcloneView" class="img-large img-center" />

## 从 Dropbox 到 Hetzner 的一次性迁移

如果您正在将主要存储位置从 Dropbox 迁移到 Hetzner Storage Box，请使用复制任务而非同步任务。复制会将所有文件从 Dropbox 传输到 Hetzner，且不会删除源端的任何内容 — 在过渡期间保留您的 Dropbox 内容。在提交任务前，请先运行试运行以验证文件数量和总传输大小。

对于存储量达数百 GB 的大型 Dropbox 账户，请在第 2 步中启用校验和验证，以在传输后确认每个文件的完整性。文件夹比较功能可让您在任务完成后并排比较 Dropbox 和 Hetzner 文件夹结构，从而验证迁移是否正确完成。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Comparing Dropbox and Hetzner Storage Box folders after migration in RcloneView" class="img-large img-center" />

## 快速上手

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 在新建远程向导中通过 OAuth 添加 Dropbox，并通过 SFTP（端口 23）添加 Hetzner Storage Box。
3. 在任务管理器中创建从 Dropbox 路径到 Hetzner 路径的同步任务。
4. 安排每晚同步，并查看任务历史以获取传输审计日志。

使用 RcloneView 将 Dropbox 同步到 Hetzner Storage Box，可为欧洲团队提供一个经济实惠、符合 GDPR 规范的二级备份，无需任何人工干预即可自动运行。

---

**相关指南：**

- [使用 RcloneView 挂载 Hetzner Storage Box 并同步到云端](https://rcloneview.com/support/blog/mount-hetzner-storage-box-sync-cloud-rcloneview)
- [使用 RcloneView 将 Dropbox 备份到 Backblaze B2](https://rcloneview.com/support/blog/backup-dropbox-to-backblaze-b2-affordable-storage-rcloneview)
- [使用 RcloneView 将 Dropbox 备份到 AWS S3](https://rcloneview.com/support/blog/backup-dropbox-to-aws-s3-rcloneview)

<CloudSupportGrid />
