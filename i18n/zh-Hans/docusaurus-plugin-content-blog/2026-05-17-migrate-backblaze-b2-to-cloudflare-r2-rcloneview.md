---
slug: migrate-backblaze-b2-to-cloudflare-r2-rcloneview
title: "将 Backblaze B2 迁移到 Cloudflare R2 — 使用 RcloneView 传输文件"
authors:
  - alex
description: "使用 RcloneView 将您的 Backblaze B2 对象存储迁移到 Cloudflare R2。带校验和验证的分步图形界面指南，无需使用命令行。"
keywords:
  - Backblaze B2 to Cloudflare R2 migration
  - migrate B2 to R2
  - Cloudflare R2 migration guide
  - RcloneView cloud migration
  - B2 to R2 transfer
  - object storage migration
  - Backblaze to Cloudflare
  - cloud storage migration tool
  - S3 compatible migration
  - transfer B2 bucket rcloneview
tags:
  - backblaze-b2
  - cloudflare-r2
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 将 Backblaze B2 迁移到 Cloudflare R2 — 使用 RcloneView 传输文件

> 将 B2 存储桶迁移到 Cloudflare R2 在 RcloneView 中是一个简单直接的云到云操作 — 添加两个远程、设置复制任务，并通过校验和比对来验证数据完整性。

Backblaze B2 和 Cloudflare R2 都是广受欢迎的兼容 S3 的对象存储平台，随着基础设施需求的变化，许多团队都需要在两者之间迁移数据。RcloneView 不会先将数据下载到本地再重新上传，而是通过 rclone 的云到云传输引擎在服务器端完成传输 — 让您可以通过图形界面迁移整个存储桶，而无需编写任何命令。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 添加 Backblaze B2 和 Cloudflare R2 作为远程

在运行迁移之前，先在 RcloneView 中连接两个存储账户。

**Backblaze B2：** 打开 **Remote** > **New Remote**，选择 Backblaze B2，然后输入您的 Application Key ID 和 Application Key。保存后，RcloneView 会在浏览器中列出您的 B2 存储桶。

**Cloudflare R2：** 添加第二个远程，选择 Cloudflare R2，并提供您的 API Token、Account ID 和 R2 端点。与 B2 一样，您的 R2 存储桶也会立即出现在浏览器中。

两个远程都连接好之后，您可以在 RcloneView 的双栏界面中并排浏览它们，并在开始迁移之前确认源存储桶和目标存储桶是否正确。

<img src="/support/images/en/blog/new-remote.png" alt="Adding Backblaze B2 and Cloudflare R2 remotes in RcloneView" class="img-large img-center" />

## 运行云到云迁移

打开 **Job Manager** 并创建一个新的 Copy 或 Sync 任务。将您的 Backblaze B2 存储桶（或其中的特定前缀）设置为源，将 Cloudflare R2 存储桶设置为目标。

在“高级设置”步骤中，根据您的网络容量配置并发文件传输数量 — 数值越高，对包含大量小文件的存储桶传输速度越快，而大型媒体归档则受益于多线程传输。启用 **checksum verification（校验和验证）**，以确保 B2 和 R2 通过哈希比对而非仅依赖文件大小和修改时间来确认文件完整性。

在正式传输之前先运行一次 **Dry Run（试运行）**。预览会显示所有将要复制的对象，让您在正式提交之前发现任何意外的过滤器匹配或路径不一致的问题。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-to-cloud transfer from Backblaze B2 to Cloudflare R2 in RcloneView" class="img-large img-center" />

## 实时监控传输进度

任务启动后，底部信息视图中的 **Transferring** 标签页会显示实时进度：每个文件的传输速度、总体吞吐量，以及已完成和剩余对象的数量。对于大型 B2 存储桶 — 例如包含数万个文件的视频归档 — 实时视图能让您及早发现任何停滞，并在需要时取消或调整任务。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Real-time transfer monitoring during B2 to R2 migration in RcloneView" class="img-large img-center" />

传输完成后，查看 **Job History** 标签页获取完整摘要：总传输大小、传输速度、文件数量和最终状态。若经过校验和验证的运行显示零错误，则说明您的 R2 存储桶与源 B2 数据完全一致，逐字节匹配。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history confirming successful Backblaze B2 to Cloudflare R2 migration" class="img-large img-center" />

拥有 **PLUS license（PLUS 许可证）**后，您可以安排增量同步任务，在分阶段切换期间随着新对象添加到 B2 而保持 R2 更新 — 分批次进行迁移，而不是一次性大批量迁移。

## 快速上手

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 通过 **Remote** > **New Remote** 添加您的 Backblaze B2 账户（Application Key ID + Application Key）。
3. 添加您的 Cloudflare R2 账户（API Token + Account ID + Endpoint）。
4. 打开 **Job Manager**，创建从 B2 到 R2 的 Copy 任务，并启用校验和验证。
5. 先运行一次 Dry Run，然后执行正式迁移，并在 Job History 中查看结果。

RcloneView 消除了对命令行专业知识或中间本地存储的需求 — 您的 B2 数据将直接迁移到 R2，并内置完整的完整性验证。

---

**相关指南：**

- [管理 Backblaze B2 云存储 — 使用 RcloneView 进行同步和备份](https://rcloneview.com/support/blog/manage-backblaze-b2-cloud-sync-backup-rcloneview)
- [管理 Cloudflare R2 云存储 — 使用 RcloneView 进行同步](https://rcloneview.com/support/blog/manage-cloudflare-r2-cloud-sync-rcloneview)
- [使用 RcloneView 将 Cloudflare R2 迁移到 Backblaze B2](https://rcloneview.com/support/blog/migrate-cloudflare-r2-to-backblaze-b2-rcloneview)

<CloudSupportGrid />
