---
slug: sync-nextcloud-to-backblaze-b2-rcloneview
title: "将 Nextcloud 同步到 Backblaze B2 —— 使用 RcloneView 实现异地备份"
authors:
  - tayson
description: "使用 RcloneView 将自托管的 Nextcloud 数据备份到 Backblaze B2。通过 WebDAV 和 App Key 连接，然后设置自动化异地备份计划。"
keywords:
  - Nextcloud Backblaze B2 backup
  - Nextcloud offsite backup RcloneView
  - Nextcloud WebDAV sync B2
  - self-hosted Nextcloud backup
  - Backblaze B2 Nextcloud cloud backup
  - automated Nextcloud backup
  - Nextcloud disaster recovery
  - RcloneView WebDAV backup
tags:
  - RcloneView
  - nextcloud
  - backblaze-b2
  - backup
  - cloud-sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 将 Nextcloud 同步到 Backblaze B2 —— 使用 RcloneView 实现异地备份

> Nextcloud 非常适合自托管协作，但如果没有异地备份，一次服务器故障就可能意味着数据永久丢失——RcloneView 会自动将其同步到 Backblaze B2。

自托管 Nextcloud 能让你完全掌控自己的数据，但这份掌控也伴随着责任。如果你的服务器损坏、遭到勒索软件攻击，或在没有妥善备份的情况下被停用，就没有任何安全网可言。Backblaze B2 提供经济实惠且持久耐用的异地对象存储，与 Nextcloud 完美搭配。RcloneView 通过 WebDAV 连接 Nextcloud，通过 Application Key 连接 B2，为你提供一个图形界面来设置和调度周期性备份。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 通过 WebDAV 连接 Nextcloud

打开 RcloneView，进入 **Remote Manager（远程管理器）**。点击 **New Remote（新建远程）**，选择 **WebDAV**。Nextcloud 通过标准路径以 WebDAV 方式暴露其文件。填写以下内容：

- **URL**：`https://your-nextcloud-domain/remote.php/dav/files/your-username/`
- **Vendor（供应商）**：Nextcloud
- **User（用户）**：你的 Nextcloud 用户名
- **Password（密码）**：你的 Nextcloud 账户密码（如果启用了 2FA，则使用应用密码）

保存该远程后在文件浏览器中打开它，确认能看到你的 Nextcloud 文件。浏览几个文件夹以验证访问权限。

<img src="/support/images/en/blog/new-remote.png" alt="Configuring Nextcloud WebDAV remote in RcloneView" class="img-large img-center" />

## 连接 Backblaze B2

回到 **Remote Manager（远程管理器）**，点击 **New Remote（新建远程）**，选择 **Backblaze B2**。在 Backblaze 控制台中，进入 **App Keys**，创建一个对备份存储桶具有读写权限的密钥。在 RcloneView 中输入 **Application Key ID** 和 **Application Key**。保存该远程并打开它，验证能否访问你的 B2 存储桶。

如果尚未创建目标存储桶，请先创建一个——对于 Nextcloud 备份而言，使用专用存储桶（例如 `nextcloud-backup`）能让内容保持井然有序。

## 设置备份任务

进入 **Jobs（任务）**，点击 **New Job（新建任务）**。配置如下：

- **Source（源）**：你的 Nextcloud WebDAV 远程，指向根目录或特定目录
- **Destination（目标）**：你的 Backblaze B2 远程及备份存储桶

在任务向导的第 2 步中，针对 Nextcloud 备份推荐以下选项：

- 将 **transfers（传输并发数）** 设置为 4（WebDAV 存在按连接计算的开销，因此较低的并发数更稳定）
- 启用 **checksum verification（校验和验证）** 以保证数据完整性
- 首次运行时启用 **Dry Run（试运行）**，以便在正式执行前审查范围

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Nextcloud to Backblaze B2 backup job in RcloneView" class="img-large img-center" />

## 调度自动化备份

拥有 PLUS 许可证后，可在任务向导的第 3 步中使用 cron 语法添加计划。若要每天凌晨 1 点备份：`0 1 * * *`。若要每周备份：`0 1 * * 0`。RcloneView 会在计划时间静默地在后台运行该任务，并将结果记录在 **Job History（任务历史）** 中。

每条任务历史记录都会显示：已检查的文件数、已传输的文件数（只重新发送发生变化的文件）、数据量、耗时以及任何错误。这样你无需手动打开应用程序，就能快速确认夜间备份是否成功运行。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling Nextcloud to Backblaze B2 backup in RcloneView" class="img-large img-center" />

## 备份策略提示

- RcloneView 的同步任务默认是增量式的——首次运行之后，只会传输新增或更改的文件
- 如果你希望在 B2 中保留已删除的文件，可以考虑保留类似 **--backup-dir** 的版本管理方式
- 对于 Nextcloud 数据库备份，需要单独处理（使用 mysqldump 或类似工具），但 Nextcloud 数据目录中的所有文件数据都可以通过 WebDAV 顺利同步

## 快速上手

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 在 **Remote Manager（远程管理器）** 中使用你的服务器 URL 和凭据，通过 WebDAV 连接 Nextcloud。
3. 使用你的 Application Key ID 和 Application Key 连接 Backblaze B2。
4. 创建并调度一个从 Nextcloud 到 B2 的同步任务，实现每晚自动化异地备份。

每晚自动运行的 Nextcloud → Backblaze B2 备份，意味着你自托管的数据以极低的成本获得了企业级的冗余保障。

---

**相关指南：**

- [使用 RcloneView 将 Nextcloud 同步到 Google Drive 和 S3](https://rcloneview.com/support/blog/sync-nextcloud-google-drive-s3-rcloneview)
- [使用 RcloneView 备份 Nextcloud WebDAV](https://rcloneview.com/support/blog/backup-nextcloud-webdav-with-rcloneview)
- [使用 RcloneView 自动化每日云备份](https://rcloneview.com/support/blog/automate-daily-cloud-backups-with-rcloneview)

<CloudSupportGrid />
