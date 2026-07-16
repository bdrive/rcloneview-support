---
slug: migrate-jottacloud-to-backblaze-b2-rcloneview
title: "将 Jottacloud 迁移到 Backblaze B2 — 使用 RcloneView 传输文件"
authors:
  - tayson
description: "使用 RcloneView 将文件从 Jottacloud 迁移到 Backblaze B2。直接将您的挪威云存储迁移到经济实惠的 S3 兼容对象存储。"
keywords:
  - Jottacloud to Backblaze B2
  - migrate Jottacloud
  - Jottacloud migration
  - Backblaze B2 migration
  - cloud-to-cloud transfer
  - Jottacloud RcloneView
  - Backblaze B2 backup
  - cloud storage migration
  - Norwegian cloud storage
  - RcloneView transfer
tags:
  - jottacloud
  - backblaze-b2
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 将 Jottacloud 迁移到 Backblaze B2 — 使用 RcloneView 传输文件

> 使用 RcloneView 将您的 Jottacloud 文件迁移到 Backblaze B2 对象存储 — 直接进行云到云迁移，无需本地中转下载。

Jottacloud 是一家高度注重隐私的挪威云存储服务，深受斯堪的纳维亚及欧洲各地个人和企业用户的欢迎。随着存储需求的增长，一些用户会迁移到 Backblaze B2，看重其 S3 兼容 API、可编程访问能力，以及更适合大型存档或开发者工作流的分层存储选项。RcloneView 可同时连接这两项服务并直接处理传输 — 无需本地硬盘作为中转。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 设置 Jottacloud 和 Backblaze B2

在 RcloneView 中添加这两个远程只需几分钟。对于 Jottacloud，打开“远程”标签页，点击“新建远程”，从提供商列表中选择 Jottacloud。设置过程使用您的 Jottacloud 账户凭据。对于 Backblaze B2，选择 Backblaze B2 并输入您的 Application Key ID 和 Application Key — 这些可从您的 Backblaze 账户“App Keys”页面生成。设置完成后，两个远程都会以可访问的文件树形式出现在“资源管理器”面板中。

浏览您的 Jottacloud 文件夹，规划好要迁移的内容。Jottacloud 将文件组织为设备和文件夹 — 在构建迁移任务之前，先了解这一结构，以便选择正确的源路径。

<img src="/support/images/en/blog/new-remote.png" alt="Adding Jottacloud and Backblaze B2 remotes in RcloneView" class="img-large img-center" />

## 执行迁移

创建一个同步任务，以 Jottacloud 文件夹为源、Backblaze B2 存储桶为目标。如果您还没有目标存储桶，可以在运行迁移之前直接在 Backblaze 控制台中创建一个。同步向导的“高级设置”步骤可让您配置并发文件传输数量并启用校验和验证 — 后者可确认每个文件均完整到达，这对大型照片或视频存档尤为重要。

对于要将 500GB Jottacloud RAW 文件迁移到 Backblaze B2 的摄影师而言，“筛选”步骤让分阶段迁移变得可控。按文件扩展名（`.raw`、`.cr3`、`.arw`）进行筛选，先迁移相机文件，再在后续任务中处理其他类型的资源。“最大文件年龄”筛选器可让您优先处理近期文件，再归档较旧的内容。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Migrating Jottacloud files to Backblaze B2 with RcloneView" class="img-large img-center" />

在启动正式迁移之前，务必先使用“模拟运行”（Dry Run）。该模拟会列出所有将被复制或删除的文件，方便您在真正执行之前核实迁移范围是否符合预期。

## 验证迁移结果

传输完成后，使用“文件夹比较”功能验证迁移的完整性。选择源 Jottacloud 文件夹和 Backblaze B2 目标，比较视图会高亮显示仅存在于一侧或大小不一致的文件。这可以捕捉到在大型迁移中容易被忽视的遗漏文件或传输不完整的问题。

“任务历史”面板会显示每次迁移运行的时间、文件数量、传输的总数据量以及最终状态。如果某次运行因网络问题或系统休眠而中断，您可以重新运行该同步任务，rclone 的增量传输机制意味着只有缺失或已更改的文件会被重新传输。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Reviewing Jottacloud to Backblaze B2 migration job history in RcloneView" class="img-large img-center" />

## 开始使用

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 使用您的 Jottacloud 账户凭据添加 Jottacloud 远程。
3. 使用您的 Application Key ID 和 Application Key 添加 Backblaze B2。
4. 运行“模拟运行”进行预览，然后执行同步，将文件迁移到您的 B2 存储桶。

通过 RcloneView 从 Jottacloud 迁移到 Backblaze B2 是增量式、可恢复且完全由图形界面驱动的 — 无需编写脚本。

---

**相关指南：**

- [使用 RcloneView 管理 Jottacloud 云同步与备份](https://rcloneview.com/support/blog/manage-jottacloud-cloud-sync-backup-rcloneview)
- [使用 RcloneView 将 Dropbox 备份到 Backblaze B2](https://rcloneview.com/support/blog/backup-dropbox-to-backblaze-b2-affordable-storage-rcloneview)
- [使用 RcloneView 将 Wasabi 迁移到 Backblaze B2](https://rcloneview.com/support/blog/migrate-wasabi-to-backblaze-b2-rcloneview)

<CloudSupportGrid />
