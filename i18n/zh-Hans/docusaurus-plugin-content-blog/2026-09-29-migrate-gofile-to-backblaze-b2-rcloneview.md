---
slug: migrate-gofile-to-backblaze-b2-rcloneview
title: "将 Gofile 迁移到 Backblaze B2 — 使用 RcloneView 传输文件"
authors:
  - tayson
description: "使用 RcloneView 将 Gofile 迁移到 Backblaze B2:连接两个远程、试运行复制、用 Folder Compare 验证,并保留可靠的备份。"
keywords:
  - 将 gofile 迁移到 backblaze b2
  - gofile 到 b2
  - gofile 备份
  - backblaze b2 迁移
  - RcloneView gofile
  - 云到云传输
  - gofile 文件传输工具
  - 从 gofile 移动文件
  - rclone gofile backblaze
  - 云迁移 GUI
tags:
  - RcloneView
  - gofile
  - backblaze-b2
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 将 Gofile 迁移到 Backblaze B2 — 使用 RcloneView 传输文件

> 将通过 Gofile 分享的文件迁移到 Backblaze B2 对象存储,无需编写任何命令,并确认每个文件都已到达。

Gofile 便于把文件交给他人,但不适合作为重要文件唯一副本的存放位置。Backblaze B2 是为长期保留而设计的对象存储,可在存储桶级别控制保留的内容。RcloneView 在同一个窗口中连接这两项服务,并在一个界面中完成复制,因此您不必手动逐个下载再重新上传文件。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 连接 Gofile 和 Backblaze B2

Gofile 使用 Access Token 进行认证。请从 Gofile 个人资料页面的 API 令牌字段中复制,然后在 **New Remote** 中选择 Gofile 并粘贴。Backblaze B2 需要 Application Key ID 和 Application Key,可在 Backblaze 的密钥管理页面生成。请创建仅限目标存储桶的密钥,而不是主密钥,这样迁移凭据就只能访问所需的内容。

<img src="/support/images/en/blog/new-remote.png" alt="在 RcloneView 中添加 Gofile 和 Backblaze B2 远程" class="img-large img-center" />

两个远程都创建后,在一个 Explorer 面板中打开 Gofile,在另一个中打开 B2 存储桶。RcloneView 最多可同时显示四个面板,因此您还可以打开一个本地文件夹用于抽查。在 FREE 许可证下即可对 S3、Azure 或 Backblaze B2 进行完整的读写连接。

## 复制前先规划布局

先决定 Gofile 内容如何映射到存储桶。例如,一家摄影工作室把客户交付内容放在十几个 Gofile 文件夹中,可以创建一个 B2 存储桶,并将每个文件夹镜像为顶层前缀,以便日后路径清晰易读。请先在 B2 面板中使用 **New Folder** 创建目标文件夹。

将文件夹从 Gofile 面板拖到 B2 面板。在不同远程之间,拖放执行的是复制,因此在您决定删除之前,Gofile 上的原始文件保持不变。对于需要重复执行的大规模迁移,请改用 Sync 向导:选择 Gofile 作为源,存储桶路径作为目标,并使用字母、数字、连字符或下划线为作业命名。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="在 RcloneView 中将 Gofile 传输到 Backblaze B2 的云到云传输" class="img-large img-center" />

## Dry Run、传输与监控

正式运行之前,请使用 **Dry Run**。它会列出将要复制的文件以及将要删除的文件,因此在造成损失之前就能发现源或目标选错了。如果选择单向同步,请记住它会修改目标以匹配源,所以花一分钟做一次 Dry Run 是值得的。

在 Advanced Settings 中,您可以调整并发文件传输数量并启用校验和比较。首次运行请保守设置,传输稳定后再提高并发数。在窗口底部的 **Transferring** 标签页中查看进度、速度和文件数。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="在 Transferring 标签页中监控传输进度" class="img-large img-center" />

## 使用 Folder Compare 验证

传输完成后,从 Home 标签页打开 **Compare**,左侧选择 Gofile,右侧选择 B2。筛选 left-only 文件可以看到未能到达的文件,筛选 different 文件可以发现大小不一致的文件。Copy right 会补齐缺失的文件,而不会重新发送已经一致的文件。Job History 会记录每次运行的状态、大小和耗时,为这次迁移留下记录。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder Compare 显示 Gofile 与 B2 之间的差异" class="img-large img-center" />

## 快速开始

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 使用 Access Token 添加 Gofile 远程,并使用限定存储桶的应用密钥添加 Backblaze B2 远程。
3. 并排打开两个远程,运行 **Dry Run**,然后复制或同步文件夹。
4. 在清理 Gofile 一侧之前,使用 **Compare** 确认没有遗漏。

在 B2 中拥有经过验证的副本,能把临时的分享链接变成由您掌控的备份。

---

**相关指南:**

- [将 Gofile 迁移到 Google Drive](https://rcloneview.com/support/blog/migrate-gofile-to-google-drive-rcloneview)
- [管理 Gofile 存储](https://rcloneview.com/support/blog/manage-gofile-cloud-sync-backup-rcloneview)
- [将 IDrive e2 迁移到 Backblaze B2](https://rcloneview.com/support/blog/migrate-idrive-e2-to-backblaze-b2-rcloneview)

<CloudSupportGrid />
