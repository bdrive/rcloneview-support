---
slug: sync-google-photos-to-backblaze-b2-rcloneview
title: "将 Google 相册同步到 Backblaze B2 — 使用 RcloneView 进行云备份"
authors:
  - tayson
description: "使用 RcloneView 将您的 Google 相册库备份到 Backblaze B2。自动将照片从 Google 相册归档到对象存储 — 无需手动下载。"
keywords:
  - 将 Google 相册同步到 Backblaze B2
  - Google 相册 Backblaze B2 备份
  - RcloneView Google 相册备份
  - Google 相册到 B2 传输
  - 备份 Google 相册到对象存储
  - Google 相册归档 B2
  - RcloneView 照片备份
  - Google 相册云备份工具
  - Backblaze B2 照片归档
  - 自动化 Google 相册备份
tags:
  - google-photos
  - backblaze-b2
  - cloud-to-cloud
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 将 Google 相册同步到 Backblaze B2 — 使用 RcloneView 进行云备份

> RcloneView 可创建从 Google 相册到 Backblaze B2 的自动化备份流程 — 让您的照片库安全地保存在低成本的对象存储中，完全无需手动操作。

Google 相册是数十亿用户的照片库，但仅依赖单一云服务商来保存不可替代的珍贵回忆存在实际风险。对于将 Google 相册作为主要照片库的专业摄影师、家庭档案管理者和内容创作者来说，自动将照片二次备份到经济实惠的对象存储平台 Backblaze B2 将带来巨大帮助。RcloneView 会按照您设定的计划自动处理这一流程，将新照片从 Google 相册同步到 B2。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 在 RcloneView 中连接 Google 相册和 Backblaze B2

这两个服务商在 RcloneView 中都很容易添加。对于 Google 相册，请前往“远程”标签页 > “新建远程”，选择 Google Photos，并完成基于浏览器的 OAuth 身份验证。对于 Backblaze B2，选择 Backblaze B2 并输入您在 B2 控制台中获取的 Application Key ID 和 Application Key。

RcloneView 的 Google 相册集成会按相册和日期展示您的照片库。您可以在文件资源管理器中浏览按年/月分类的文件夹，并访问所有媒体文件 — 包括照片和视频。

<img src="/support/images/en/blog/new-remote.png" alt="Adding Google Photos and Backblaze B2 remotes in RcloneView" class="img-large img-center" />

## 配置 Google 相册到 B2 的同步任务

在 RcloneView 中创建一个同步任务，将您的 Google 相册远程设为源，将 Backblaze B2 存储桶设为目标。例如，一家需要备份 500GB 客户拍摄素材的摄影工作室，可以将特定的 Google 相册相册设为源文件夹，将每个相册对应到 B2 中相应的文件夹结构。

在同步任务的高级设置中，启用**校验和**验证，以确认每个传输到 B2 的照片和视频文件都与源文件一致。这对于照片档案库至关重要，因为一旦发生静默数据损坏，后果将是毁灭性的。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Syncing Google Photos to Backblaze B2 in RcloneView" class="img-large img-center" />

## 安排自动化照片备份（PLUS）

使用 PLUS 许可证，可以安排 Google 相册到 B2 的同步任务自动运行。每天凌晨 3 点的同步任务可以捕获前一天新增的照片和视频，同时不会影响白天的使用性能。RcloneView 的增量同步功能只传输新增和修改过的文件，因此在完成首次完整备份后，后续任务耗时将大幅缩短。

**最大文件年龄**过滤器可以进一步优化增量同步 — 设置 `Max file age: 7d` 只传输最近一周内新增的照片，非常适合频率高但负载轻的同步任务。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling automated Google Photos to Backblaze B2 backup in RcloneView" class="img-large img-center" />

## 监控进度并验证备份完整性

RcloneView 的“传输”标签页会实时显示备份进度：文件名、传输速度和总字节数。每次计划任务运行完成后，“任务历史”都会记录完整的摘要信息。对于拥有数千个文件的照片库，这份历史记录可以作为备份完整性的证明 — 这对于需要向客户保证其照片已被安全归档的摄影师而言至关重要。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitoring Google Photos to Backblaze B2 sync progress in RcloneView" class="img-large img-center" />

## 快速上手

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 将 Google 相册（OAuth）和 Backblaze B2（Application Key）添加为远程。
3. 创建一个从 Google 相册到您的 B2 存储桶的同步任务，并启用校验和。
4. 使用 PLUS 安排每日自动运行，并在“任务历史”中跟踪进度。

有了 RcloneView 自动化的 Google 相册到 Backblaze B2 备份流程，您的照片库将始终受到独立二级云归档的保护。

---

**相关指南：**

- [管理 Google 相册存储 — 使用 RcloneView 同步和备份文件](https://rcloneview.com/support/blog/manage-google-photos-cloud-sync-backup-rcloneview)
- [管理 Backblaze B2 存储 — 使用 RcloneView 同步和备份文件](https://rcloneview.com/support/blog/manage-backblaze-b2-cloud-sync-backup-rcloneview)
- [使用 RcloneView 将 Google 相册迁移到 OneDrive](https://rcloneview.com/support/blog/migrate-google-photos-to-onedrive-rcloneview)

<CloudSupportGrid />
