---
slug: migrate-opendrive-to-backblaze-b2-rcloneview
title: "从 OpenDrive 迁移到 Backblaze B2 — 使用 RcloneView 传输文件"
authors:
  - tayson
description: "使用 RcloneView 将文件从 OpenDrive 迁移到 Backblaze B2：连接两个远程、通过 Dry Run 预览复制、执行传输，并用 Folder Compare 验证。"
keywords:
  - 从 OpenDrive 迁移到 Backblaze B2
  - OpenDrive 到 B2 传输
  - OpenDrive 迁移
  - Backblaze B2 备份
  - 云到云传输
  - RcloneView OpenDrive
  - RcloneView Backblaze B2
  - 将文件从 OpenDrive 移到 B2
tags:
  - RcloneView
  - opendrive
  - backblaze-b2
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 从 OpenDrive 迁移到 Backblaze B2 — 使用 RcloneView 传输文件

> 通过可预览、可验证的云到云传输，将 OpenDrive 文件库迁移到 Backblaze B2 存储桶，而无需手动下载再重新上传。

超出文件共享账户承载能力的团队，往往希望用对象存储来做长期归档。手动把数据从 OpenDrive 迁移到 Backblaze B2，意味着要先把所有内容下载到本地。RcloneView 同时连接两个服务并在它们之间直接传输，并提供 Dry Run 和对比步骤，让你清楚哪些内容已经迁移。使用 FREE 许可证即可对 S3、Azure 或 Backblaze B2 进行完整的读写连接。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 连接两个远程

打开 Remote 选项卡并选择 New Remote。将 OpenDrive 添加为一个远程，将 Backblaze B2 添加为另一个远程。B2 使用 Application Key ID 和 Application Key，可在 Backblaze 的密钥管理页面创建。请先在 Backblaze 中创建目标存储桶，以便准备好目标路径。

两个远程都出现在 Remote Manager 后，将它们并排打开到两个 Explorer 面板中。在进行大规模传输之前，浏览每个远程的顶层目录以确认凭据可用。

<img src="/support/images/en/blog/new-remote.png" alt="在 RcloneView 中添加 OpenDrive 和 Backblaze B2 远程" class="img-large img-center" />

## 规划文件夹布局

迁移是决定数据如何存放到 B2 的好时机。常见做法是按用途划分存储桶，例如为已完成项目建立一个归档存储桶，顶层文件夹与你当前的 OpenDrive 结构保持一致。对最大的 OpenDrive 文件夹使用 Get Size 来估算数据量，并优先复制最重要的文件夹。

如果某些文件类型不需要迁移，可在同步向导的第 3 步中设置最大文件大小、最大文件时长，或自定义排除规则，例如 `.iso`。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="在 RcloneView 中从 OpenDrive 到 Backblaze B2 的云到云传输" class="img-large img-center" />

## 先 Dry Run，再传输

创建一个作业，以 OpenDrive 为源，以你的 B2 存储桶为目标。对于迁移，Copy 作业更为稳妥，因为它不会改动源；Sync 作业可能会删除目标上的文件以与源保持一致。请先运行 Dry Run，查看将要复制的文件列表。

在第 2 步中，将 "Retry entire sync if fails" 保持默认值 3；如果源端限流，可以考虑降低并发传输数。然后运行作业，并在 Transferring 选项卡中查看进度、速度和文件数量。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="在 RcloneView 中运行 OpenDrive 到 B2 的作业" class="img-large img-center" />

## 在停用源之前先验证

作业完成后，打开 Job History，确认状态为 Completed，并查看总大小和文件数量。然后对 OpenDrive 和 B2 文件夹使用 Compare。left-only 文件是没有到达的项目；different 文件则表示大小不一致，值得重新复制。在对比结果中不再出现 left-only 文件之前，请保留 OpenDrive 的数据。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="OpenDrive 与 Backblaze B2 之间的 Folder Compare" class="img-large img-center" />

## 开始使用

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 将 OpenDrive 和 Backblaze B2 添加为远程，并创建目标存储桶。
3. 创建 Copy 作业，运行 Dry Run，然后执行传输。
4. 在停用源之前，使用 Job History 和 Folder Compare 进行验证。

经过预览和验证的复制，使迁移到 B2 的过程即使面对大型文件库也更可预期。

---

**相关指南：**

- [管理 OpenDrive 存储 — 使用 RcloneView 同步和备份文件](https://rcloneview.com/support/blog/manage-opendrive-cloud-sync-backup-rcloneview)
- [使用 RcloneView 从 SugarSync 迁移到 Backblaze B2](https://rcloneview.com/support/blog/migrate-sugarsync-to-backblaze-b2-rcloneview)
- [使用 RcloneView 从 Koofr 迁移到 Backblaze B2](https://rcloneview.com/support/blog/migrate-koofr-to-backblaze-b2-rcloneview)

<CloudSupportGrid />
