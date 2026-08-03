---
slug: manage-magalu-cloud-sync-backup-rcloneview
title: "管理 Magalu Cloud 存储 — 使用 RcloneView 同步和备份文件"
authors:
  - jay
description: "将 Magalu Cloud 对象存储连接到 RcloneView,实现拖放式文件管理、计划同步和跨云备份工作流。"
keywords:
  - magalu 云存储
  - magalu 对象存储
  - s3 兼容存储 gui
  - rcloneview magalu
  - 对象存储备份
  - 云同步 gui
  - 多云文件浏览器
  - s3 兼容管理器
  - magalu 备份
  - 巴西云存储
tags:
  - RcloneView
  - s3-compatible
  - object-storage
  - cloud-storage
  - cloud-sync
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 管理 Magalu Cloud 存储 — 使用 RcloneView 同步和备份文件

> 在管理其他所有云存储的同一个窗口中浏览、同步和备份 Magalu Cloud 对象存储。

Magalu Cloud 是一项 S3 兼容的对象存储服务,这意味着它可以与任何基于 S3 协议构建的工具配合使用,包括 rclone。RcloneView 将这种协议支持封装在一个可视化文件浏览器中,因此已经使用 Magalu 存储桶来存放应用数据或备份的团队,不需要记住 `s3cmd` 的参数,也不必为了移动文件而在多个控制台标签页之间切换。只需连接一次存储桶,它的行为就会和应用中的其他远程一样。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 将 Magalu Cloud 连接为远程

由于 Magalu Cloud 使用 S3 协议,RcloneView 连接它的方式与连接 Amazon S3、Wasabi 或 Backblaze B2 相同,都是通过 S3 兼容远程类型。打开 **New Remote**,选择 S3 兼容选项,然后提供你的 Access Key、Secret Key,以及你所在区域的 Magalu Cloud 端点 URL。RcloneView 可在 Windows、macOS 和 Linux 上从一个窗口挂载并同步 90 多个提供商,因此 Magalu 存储桶可以与你现有的 Google Drive、OneDrive 或本地 NAS 连接并列使用。

<img src="/support/images/en/blog/new-remote.png" alt="在 RcloneView 中添加新的 Magalu Cloud S3 兼容远程" class="img-large img-center" />

保存远程后,它会作为一个标签页出现在 Explorer 面板中,拥有完整的文件夹树导航、面向图片较多的存储桶的缩略图预览,以及与本地文件相同的右键操作(复制、剪切、重命名、删除)。

## 将 Magalu 存储桶与其他存储同步

对象存储很少单独存在——大多数团队会将其与另一个云配合用于冗余,或与本地基础设施配合用于暂存。使用 RcloneView 的 Sync 向导,你可以将 Magalu 存储桶设为源或目标,选择单向同步或双向同步(Beta),并在传输前应用最大文件大小或文件存在时间等过滤条件。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="配置 Magalu Cloud 存储桶与另一个远程之间的同步任务" class="img-large img-center" />

在首次将生产存储桶镜像到备份目标之前,先运行 **Dry Run**,预览将要复制或删除的确切对象——这是一项有用的检查。

## 自动化定期备份

对于每天都在变化的存储桶,手动传输无法扩展。将你的 Magalu 同步配置保存为一个 Job,然后使用调度步骤(PLUS 许可证)定义 crontab 风格的重复周期——每晚、每周或自定义间隔。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="为 Magalu Cloud 存储桶安排定期备份任务" class="img-large img-center" />

每次运行都会连同状态、传输速度和文件数量一起记录在 Job History 中,因此你可以确认计划备份是否真正完成,而不是仅凭猜测。

## 快速上手

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 为你的 Magalu Cloud 账户生成 Access Key 和 Secret Key,并记下所在区域的端点。
3. 在 RcloneView 中将 Magalu Cloud 添加为新的 S3 兼容远程。
4. 先运行 Dry Run,再设置一个同步任务,将其连接到你的备份或次级存储目标。

将一个 S3 兼容存储桶视为文件管理器中的另一个文件夹,消除了通常使对象存储与工作流其余部分割裂的摩擦。

---

**相关指南:**

- [使用 RcloneView 管理 Wasabi 云存储](https://rcloneview.com/support/blog/manage-wasabi-cloud-sync-backup-rcloneview)
- [使用 RcloneView 管理 Cloudflare R2 存储](https://rcloneview.com/support/blog/manage-cloudflare-r2-cloud-sync-rcloneview)
- [使用 RcloneView 管理 IDrive e2 云存储](https://rcloneview.com/support/blog/manage-idrive-e2-cloud-sync-backup-rcloneview)

<CloudSupportGrid />
