---
slug: migrate-google-drive-to-backblaze-b2-rcloneview
title: "将 Google Drive 迁移到 Backblaze B2 — 使用 RcloneView 传输文件"
authors:
  - tayson
description: "使用 RcloneView 将 Google Drive 迁移到 Backblaze B2 — 实现云到云的文件传输，经济高效地归档数据，并通过图形界面验证迁移结果。"
keywords:
  - Google Drive to Backblaze B2
  - migrate Google Drive
  - Backblaze B2 backup
  - cloud migration tool
  - Google Drive export
  - RcloneView migration
  - cloud-to-cloud transfer
  - S3 archive Google Drive
  - Google Drive archiving
  - Backblaze cold storage
tags:
  - RcloneView
  - google-drive
  - backblaze-b2
  - cloud-to-cloud
  - migration
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 将 Google Drive 迁移到 Backblaze B2 — 使用 RcloneView 传输文件

> Google Drive 专为协作而设计，并非用于冷归档 — RcloneView 可将您的 Drive 内容直接迁移到 Backblaze B2，无需经过本地磁盘中转，从而大规模节省存储成本。

Google Drive 擅长实时协作，但并未针对大规模的高性价比长期归档进行优化。Backblaze B2 提供兼容 S3 的对象存储，存储成本仅为 Google 的一小部分，因此成为归档大型数据集、视频项目以及无需每日访问的业务记录的热门目的地。RcloneView 可直接在两个云端之间完成迁移 — 无需借助本地磁盘中转。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 设置两个远程

在 RcloneView 中，先添加 Google Drive — **远程标签页 > 新建远程 > Google Drive** — 并通过浏览器 OAuth 完成身份验证。然后添加 Backblaze B2：从提供商列表中选择它，并输入您的 Application Key ID 和 Application Key。两个远程会立即生效。

<img src="/support/images/en/blog/new-remote.png" alt="Adding Google Drive and Backblaze B2 remotes in RcloneView" class="img-large img-center" />

在 RcloneView 的双面板浏览器中并排打开这两个远程。这种直观视图对规划迁移非常有用：在左侧确认 Drive 文件夹中的现有内容，在右侧确认目标 B2 存储桶的结构，并在开始传输之前确定应优先处理哪些文件夹。

## 配置迁移任务

打开 **任务管理器**，创建一个新的同步或复制任务。将源设置为您的 Google Drive 文件夹（若需增量迁移，可指定特定子文件夹），将目标设置为您的 Backblaze B2 存储桶路径。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Configuring Google Drive to Backblaze B2 migration job in RcloneView" class="img-large img-center" />

对于大规模迁移 — 例如一家视频制作公司要将 2 TB 已完成的项目从 Drive 迁移到 B2 — 建议在任务的高级设置中启用多线程传输，并增加并发文件数量。**空运行（Dry Run）** 功能可在实际任务运行之前，准确显示哪些文件将被传输，从而避免意外覆盖或遗漏内容。启用校验和验证可确保每个文件完整无误地到达 B2，这对于可能多年不会被访问的归档文件尤为重要。

## 迁移后的验证与清理

传输完成后，使用 RcloneView 的 **文件夹对比** 功能将 Google Drive 源与 B2 目标进行比较。对比视图会突出显示仅左侧存在的文件（尚未迁移）、仅右侧存在的文件（已在 B2 上）以及内容相同的文件 — 让您在从 Drive 中删除任何内容之前拥有清晰、直观的核对清单。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Comparing Google Drive and Backblaze B2 after migration in RcloneView" class="img-large img-center" />

在对比完成后再次运行迁移任务是安全的 — rclone 会跳过目标位置中已存在且大小与时间戳相符的文件，因此只会传输仍存在差异的内容。这种幂等行为使大规模迁移即使跨越多次会话也能保持可靠。

## 快速上手

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 添加一个 Google Drive 远程（浏览器 OAuth 验证）和一个 Backblaze B2 远程（Application Key 凭据）。
3. 打开 **任务管理器**，创建一个从 Google Drive 到 B2 的同步或复制任务。
4. 启用空运行进行预览，然后执行 — 使用文件夹对比验证迁移是否完成。

使用 RcloneView 迁移到 Backblaze B2，可以省去云出口流量的复杂性，让您无需编写任何 CLI 命令，即可获得一份经过验证、经济高效的归档。

---

**相关指南：**

- [使用 RcloneView 将 Backblaze B2 迁移到 Google Drive](https://rcloneview.com/support/blog/migrate-backblaze-b2-to-google-drive-rcloneview)
- [管理 Backblaze B2 云存储 — 使用 RcloneView 同步与备份](https://rcloneview.com/support/blog/manage-backblaze-b2-cloud-sync-backup-rcloneview)
- [将 Dropbox 备份到 Backblaze B2 — 使用 RcloneView 实现经济实惠的存储](https://rcloneview.com/support/blog/backup-dropbox-to-backblaze-b2-affordable-storage-rcloneview)

<CloudSupportGrid />
