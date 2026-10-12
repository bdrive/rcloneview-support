---
slug: migrate-mailru-cloud-to-backblaze-b2-rcloneview
title: "将 Mail.ru Cloud 迁移到 Backblaze B2 — 使用 RcloneView 传输文件"
authors:
  - morgan
description: "使用 RcloneView 将文件从 Mail.ru Cloud 迁移到 Backblaze B2：连接两个远程，用 Dry Run 预览，传输，并通过文件夹比较验证。"
keywords:
  - 将 Mail.ru Cloud 迁移到 Backblaze B2
  - Mail.ru Cloud 备份
  - Mail.ru Cloud to B2
  - Backblaze B2 迁移
  - 云到云传输
  - RcloneView 迁移
  - Mail.ru Cloud rclone
  - 将文件移动到 Backblaze B2
tags:
  - RcloneView
  - mailru
  - backblaze-b2
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 将 Mail.ru Cloud 迁移到 Backblaze B2 — 使用 RcloneView 传输文件

> 在一个窗口中将 Mail.ru Cloud 库复制到 Backblaze B2 对象存储，传输前预览，传输后比较。

如果多年的文档和照片都存放在 Mail.ru Cloud，在对象存储中再放一份副本就能获得独立的归档。RcloneView 将两个服务都连接为远程，并以云到云作业的方式运行传输，因此无需先把文件下载到笔记本电脑。使用 FREE 许可证即可以完整读写权限连接 S3、Azure 或 Backblaze B2。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 连接两个远程

打开 Remote 选项卡并点击 New Remote。先按该提供商的提示添加 Mail.ru Cloud，然后使用 B2 控制台中的 Application Key ID 和 Application Key 添加 Backblaze B2。请事先在 B2 中创建存储桶，以便有可指向的目标位置。

在各自的 Explorer 面板中打开每个远程。在左侧浏览 Mail.ru Cloud 文件夹，在右侧浏览 B2 存储桶，在创建作业之前确认两者都有响应。

<img src="/support/images/en/blog/new-remote.png" alt="在 RcloneView 中添加 Mail.ru Cloud 和 Backblaze B2 远程" class="img-large img-center" />

## 规划传输

决定是迁移全部还是一部分。例如，归档 400 GB 项目文件夹的工作室可以先复制一个顶级文件夹作为试点。在同步向导中，选择 Mail.ru Cloud 作为源，B2 存储桶文件夹作为目标，然后用字母、数字、连字符或下划线为作业命名。

对于迁移，Copy 作业更安全，因为它不会从源中删除任何内容。只有当你希望目标与源完全一致时，才使用 Sync。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="从 Mail.ru Cloud 到 Backblaze B2 的云到云传输" class="img-large img-center" />

## 预览、运行和监控

先运行 Dry Run。它会列出将被复制或删除的文件而不做任何更改，从而尽早发现错误的目标路径。然后启动作业，并在 Transferring 选项卡中查看进度、速度和文件数。

对象存储能很好地处理大量并行上传，但消费级云可能更严格。如果出现错误，请在向导第 2 步中降低文件传输数，并将 equality checkers 保持在 4 或更低。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="在 RcloneView 中监控 Mail.ru Cloud 到 B2 的传输" class="img-large img-center" />

## 验证并保持更新

作业完成后，打开文件夹比较，一侧为 Mail.ru Cloud，另一侧为 B2。筛选仅左侧和不同的文件，找出未到达的内容，并只复制这些项目。Job History 会记录每次运行的状态、持续时间、大小和文件数。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Mail.ru Cloud 与 Backblaze B2 之间的文件夹比较" class="img-large img-center" />

要让 B2 副本保持最新，请保存作业，并在拥有 PLUS 许可证的情况下，在第 4 步添加 crontab 风格的计划。

## 开始使用

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 在 Remote 选项卡中将 Mail.ru Cloud 和 Backblaze B2 添加为远程。
3. 创建从 Mail.ru Cloud 到 B2 存储桶的 Copy 作业并运行 Dry Run。
4. 开始传输，然后使用文件夹比较进行验证。

经过验证的 B2 第二份副本，可以让单一提供商的库变成已备份的库。

---

**相关指南：**

- [使用 RcloneView 管理 Mail.ru Cloud 存储](https://rcloneview.com/support/blog/manage-mailru-cloud-sync-rcloneview)
- [管理 Backblaze B2 存储 — 使用 RcloneView 同步和备份文件](https://rcloneview.com/support/blog/manage-backblaze-b2-cloud-sync-backup-rcloneview)
- [使用 RcloneView 将 Yandex Disk 迁移到 Backblaze B2](https://rcloneview.com/support/blog/migrate-yandex-disk-to-backblaze-b2-rcloneview)

<CloudSupportGrid />
