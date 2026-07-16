---
slug: manage-qiniu-cloud-storage-sync-rcloneview
title: "管理七牛云对象存储 — 使用 RcloneView 同步和备份文件"
authors:
  - kai
description: "将七牛云 Kodo 对象存储连接到 RcloneView，在 Windows、macOS 和 Linux 上通过一个 GUI 跨 90 多家云服务商同步、备份或传输文件。"
keywords:
  - Qiniu Cloud storage sync
  - Kodo object storage GUI
  - RcloneView Qiniu setup
  - Qiniu S3 compatible rclone
  - sync files to Qiniu Cloud
  - Qiniu backup client Windows
  - Qiniu cloud storage manager
  - transfer files Qiniu RcloneView
  - Qiniu Kodo S3 desktop client
  - manage Qiniu buckets GUI
tags:
  - s3-compatible
  - object-storage
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 管理七牛云对象存储 — 使用 RcloneView 同步和备份文件

> 将七牛云的 Kodo 对象存储连接到 RcloneView 的双栏界面，无需接触命令行即可完成上传、备份和跨云传输。

七牛云（Qiniu Cloud）是中国领先的云基础设施提供商之一，其 Kodo 对象存储服务被广泛用于媒体分发、应用资源管理和大规模数据归档。由于 Kodo 实现了兼容 S3 的 API，RcloneView 可以使用与 Amazon S3、Wasabi 或 Cloudflare R2 相同的流程连接到它 — 无需任何特殊插件。与仅支持挂载的工具不同，RcloneView 在免费许可下还可以针对 Kodo 及其他 90 多家服务商进行同步和文件夹对比，使其成为混合云环境团队的实用单一工具。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 在 RcloneView 中将七牛 Kodo 设置为 S3 远程

要添加七牛 Kodo，打开 **Remote** 标签页并点击 **New Remote**。从服务商列表中选择 S3 协议，然后选择 **Qiniu** 作为 S3 提供商。你需要从七牛云控制台获取三项凭据：**Access Key**、**Secret Key**，以及存储桶所在区域的**区域端点（regional endpoint）**。输入完成后，RcloneView 会将配置保存到本地 rclone 配置文件中，该远程会立即出现在资源管理面板中。

无需单独安装 rclone — RcloneView 内置了嵌入式 rclone 二进制文件，负责处理所有 API 通信。如果你已经在外部管理 rclone，也可以通过 Settings > Connect Manager 将 RcloneView 连接到该实例。

<img src="/support/images/en/blog/new-remote.png" alt="Adding a new Qiniu Cloud S3 remote in RcloneView" class="img-large img-center" />

保存后，你的 Kodo 存储桶会出现在面板的标签栏中。点击任意存储桶即可在文件列表中浏览其内容，列表包含名称、类型、修改日期和大小等列。

## 浏览和管理 Kodo 存储桶

RcloneView 的双栏布局让你可以在同一窗口中将七牛 Kodo 与任何其他远程（本地文件夹、Google Drive、企业 S3 存储桶）一起使用。将文件从本地面板拖到 Kodo 面板即可上传，反向拖动则可下载。在两个七牛远程（或存储桶）之间移动文件时，会直接复制而不经过本地磁盘中转。

对于批量操作，使用 Shift+Click 或 Ctrl+Click 选择多个对象，然后一次性执行复制、移动或删除操作。在浏览图片较多的 Kodo 存储桶时，缩略图视图模式非常实用。在执行任何破坏性操作之前，**Dry Run** 按钮可以预览具体会受影响的文件 — 这是清理生产环境资源时的重要保障。

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="Dragging files between local storage and Qiniu Kodo buckets in RcloneView" class="img-large img-center" />

## 使用七牛云同步和备份文件

RcloneView 的 4 步同步向导可以针对 Kodo 配置可重复运行的任务。在**第 1 步**中，选择七牛作为源或目标，并将其与另一个远程配对 — 例如将本地媒体库同步到 Kodo 存储桶以进行 CDN 分发。在**第 2 步**中，调整并行传输数量，并启用校验和验证，以确认每个上传的对象与源文件完全一致。**第 3 步**提供文件类型过滤、时间范围和大小限制，方便你排除缓存文件或将同步限制为近期修改的资源。

在 PLUS 许可证下，**第 4 步**解锁类似 cron 的计划任务：配置每晚从生产服务器目录到 Kodo 的备份，RcloneView 将在后台自动运行。**1:N 同步**功能可让单个源同时复制到多个目标 — 适用于将同一批资源分发到七牛 Kodo 和一个次级 S3 归档存储中，只需一个任务即可完成。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a sync job to Qiniu Cloud Kodo in RcloneView" class="img-large img-center" />

## 监控传输和任务历史

RcloneView 底部的 **Transferring** 标签页会显示活跃 Kodo 任务的实时进度：文件名、已传输字节数、当前速度和总体完成度。对于大规模初始导入（例如向新存储桶上传数百 GB 的视频资源），这个实时传输监控视图省去了单独搭建监控仪表盘的需要。

**Job History** 标签页会记录每次已完成运行的开始时间、持续时间、总大小、传输速度、文件数量和状态。可按日期范围或任务类型筛选，以便对数周或数月的同步活动进行审计。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history showing completed Qiniu Cloud sync runs in RcloneView" class="img-large img-center" />

## 快速上手

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 打开 **Remote** 标签页，点击 **New Remote**，选择 S3 协议，并选择 **Qiniu** 作为提供商。
3. 从七牛云控制台输入你的 **Access Key**、**Secret Key** 和区域端点。
4. 创建一个指向你的 Kodo 存储桶的同步任务，并运行它来备份本地文件，或在七牛与其他云之间传输数据。

连接七牛 Kodo 后，RcloneView 让你可以在与其他所有服务商相同的界面中，全面掌控你的中国云对象存储。

---

**相关指南：**

- [管理 Amazon S3 存储 — 使用 RcloneView 同步和备份文件](https://rcloneview.com/support/blog/manage-amazon-s3-cloud-sync-backup-rcloneview)
- [管理 Cloudflare R2 存储 — 使用 RcloneView 进行云同步](https://rcloneview.com/support/blog/manage-cloudflare-r2-cloud-sync-rcloneview)
- [管理 Wasabi 云存储 — 使用 RcloneView 同步和备份](https://rcloneview.com/support/blog/manage-wasabi-cloud-sync-backup-rcloneview)

<CloudSupportGrid />
