---
slug: migrate-mega-to-cloudflare-r2-rcloneview
title: "将 Mega 迁移到 Cloudflare R2 — 使用 RcloneView 传输文件"
authors:
  - robin
description: "使用 RcloneView 将 Mega 迁移到 Cloudflare R2：连接两个远程，执行 Dry Run，进行云到云传输，并通过 Folder Compare 验证。"
keywords:
  - 将 Mega 迁移到 Cloudflare R2
  - Mega 到 R2 传输
  - Mega 备份到 R2
  - 云到云迁移
  - Cloudflare R2 对象存储
  - Mega 云存储
  - RcloneView
  - rclone GUI
  - 从 Mega 移动文件
tags:
  - RcloneView
  - mega
  - cloudflare-r2
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 将 Mega 迁移到 Cloudflare R2 — 使用 RcloneView 传输文件

> 使用 RcloneView 将 Mega 资料库迁移到 Cloudflare R2 存储桶，并在运行前预览作业。

Mega 适合个人存储，但需要存储桶式访问、S3 兼容 API，或希望将存储与共享明确分离的项目，往往最终会迁移到对象存储。RcloneView 将 Mega 和 Cloudflare R2 作为远程连接起来，并在一个作业中完成两者之间的传输，同时提供预览、监控以及每次运行的历史记录。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 连接 Mega 和 Cloudflare R2

打开 New Remote 并选择 Mega。它使用账户凭据：您的电子邮件和密码。接下来创建 R2 远程。在 Cloudflare 控制台中创建存储桶，并生成具有 Admin Read & Write 权限的 API 令牌。RcloneView 会要求您提供令牌凭据、Account ID 以及格式为 `https://<ACCOUNT_ID>.r2.cloudflarestorage.com` 的端点。

<img src="/support/images/en/blog/new-remote.png" alt="在 RcloneView 中添加 Mega 和 Cloudflare R2 远程" class="img-large img-center" />

RcloneView 在 Windows、macOS 和 Linux 上支持 90 多种云存储服务，保存后两个远程会并排显示在 Explorer 中。

## 传输前先预览

打开两个 Explorer 面板，左侧放 Mega，右侧放 R2 存储桶。在不同远程之间拖动是复制而不是移动，因此要快速复制可以直接拖动文件夹。对于整个资料库，请改用同步向导：选择 Mega 文件夹作为源、存储桶作为目标，然后运行 Dry Run 查看哪些文件将被复制或删除。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Mega 到 Cloudflare R2 的传输作业设置" class="img-large img-center" />

想象一位视频剪辑师在 Mega 上有 800 GB 的项目归档。在 Step 2 中，对于大量小文件，您可以提高文件传输数量；如果需要哈希和大小检查，可以启用校验和比较。Step 3 的过滤器可以排除文件夹或限制文件大小。

## 监控与验证

作业开始后，Transferring 选项卡会显示进度、速度和文件数量，必要时您可以取消运行。请留意错误，如果会话提前中断，请重新运行作业。Job History 会保存状态、耗时、大小和文件数量。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="在 RcloneView 中监控 Mega 到 R2 的传输" class="img-large img-center" />

完成后，打开 Folder Compare，一侧放 Mega，另一侧放 R2。Left-only 文件会显示存储桶中缺少的内容，您可以直接在比较视图中将它们复制过去。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Mega 与 Cloudflare R2 之间的 Folder Compare" class="img-large img-center" />

## 开始使用

1. **下载 RcloneView** [rcloneview.com](https://rcloneview.com/src/download.html)。
2. 使用电子邮件和密码添加 Mega，使用 API 令牌、Account ID 和端点添加 Cloudflare R2。
3. 创建从 Mega 到 R2 存储桶的同步作业并运行 Dry Run。
4. 开始传输，然后使用 Folder Compare 确认结果。

经过预览并以 Folder Compare 做最终检查的迁移，可以让您确认哪些内容已到达 R2。

---

**相关指南：**

- [管理 Mega 存储 — 使用 RcloneView 同步和备份文件](https://rcloneview.com/support/blog/manage-mega-cloud-sync-backup-rcloneview)
- [管理 Cloudflare R2 — 使用 RcloneView 同步和备份](https://rcloneview.com/support/blog/manage-cloudflare-r2-cloud-sync-rcloneview)
- [Dry Run — 在 RcloneView 中传输前预览同步](https://rcloneview.com/support/blog/dry-run-preview-sync-before-transfer-rcloneview)

<CloudSupportGrid />
