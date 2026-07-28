---
slug: manage-magalu-cloud-sync-backup-rcloneview
title: "管理 Magalu Cloud 存储 — 使用 RcloneView 同步和备份文件"
authors:
  - casey
description: "将 Magalu Cloud 对象存储连接到 RcloneView，使用拖放式文件管理、计划同步和跨云备份。"
keywords:
  - Magalu Cloud RcloneView
  - Magalu 对象存储 GUI
  - 管理 Magalu Cloud 存储
  - S3 兼容云备份
  - Magalu Cloud 同步工具
  - 巴西对象存储 GUI
  - Magalu Cloud 文件管理器
  - RcloneView S3 兼容远程
  - 云存储 同步 备份
tags:
  - RcloneView
  - s3-compatible
  - cloud-storage
  - cloud-sync
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 管理 Magalu Cloud 存储 — 使用 RcloneView 同步和备份文件

> 使用完整的拖放式文件管理器浏览、同步和备份 Magalu Cloud 对象存储，而不必在终端中来回摆弄 API 凭据。

Magalu Cloud 是一项兼容 S3 的对象存储服务，这意味着它可以直接融入任何基于 S3 协议构建的工具。RcloneView 将其视为与 Amazon S3 或 Backblaze B2 完全相同：输入访问密钥、密钥和端点，存储桶就会与你管理的所有其他远程一起出现在文件浏览器中。对于已经在巴西或拉丁美洲运行工作负载、又想要一个无需离开熟悉的 S3 工具的对象存储选项的团队来说，这非常实用。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 连接 Magalu Cloud 远程

添加 Magalu Cloud 遵循 RcloneView 用于每个 S3 兼容提供商的相同凭据输入流程：打开 New Remote，选择 S3 兼容类型，然后提供访问密钥 ID、私密访问密钥以及适用于你所在区域的 Magalu Cloud 端点 URL。保存后，存储桶将加载到 Explorer 面板中，具有完整的文件夹树导航、图片缩略图预览，以及用于复制、重命名、删除和获取大小的右键菜单 —— 无需另开一个 S3 控制台标签页。

<img src="/support/images/en/blog/new-remote.png" alt="Adding a Magalu Cloud S3-compatible remote in RcloneView" class="img-large img-center" />

由于 RcloneView 通过 rclone 的 S3 后端进行连接，标准的对象存储行为依然适用：文件夹是由键前缀构建的虚拟结构，文件操作会映射到 rclone 发出的底层 PUT/GET/DELETE 调用。与仅支持挂载的工具不同，RcloneView 在 FREE 许可下也支持同步和文件夹比较，因此 Magalu 存储桶不会仅限于被动浏览。

## 将 Magalu Cloud 与其他存储同步

大多数团队并不孤立地使用对象存储 —— 它通常与本地驱动器、NAS 设备或其他云提供商一起，作为备份或迁移计划的一部分。4 步同步向导让你可以将 Magalu 存储桶设置为源或目标，配置并发传输数和相等性检查器数以实现可靠的大批量传输，并应用过滤器(最大文件大小、最大文件年龄、扩展名排除)以确保只移动你真正需要的文件。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring a sync job with a Magalu Cloud bucket as destination" class="img-large img-center" />

在提交实际传输之前，先运行 Dry Run 以准确预览哪些文件将被复制或删除 —— 尤其是在首次将同步任务指向新存储桶时，这时候正确设置源和目标文件夹尤为重要。

## 安排定期 Magalu 备份

对于持续性的备份例程，PLUS 许可用户可以为任何同步任务附加 crontab 风格的计划，使本地项目文件夹或另一个云远程按照任何合适的节奏 —— 每晚、每周或自定义间隔 —— 自动镜像到 Magalu Cloud。之后，Job History 会记录每次运行的持续时间、传输速度、文件数量和完成状态，让你无需查看终端日志即可获得清晰的审计记录。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a recurring backup job to a Magalu Cloud bucket" class="img-large img-center" />

## 开始使用

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 打开 New Remote，选择 S3 兼容提供商类型，输入你的 Magalu Cloud 访问密钥、密钥和端点。
3. 在 Explorer 面板中浏览存储桶，确认连接和文件夹结构。
4. 创建一个指向 Magalu 远程的同步或备份任务，运行 Dry Run，然后执行传输。

连接完成后，Magalu Cloud 存储桶的行为就像 RcloneView 中的任何其他远程一样 —— 随时可用于日常使用、跨云传输和计划保护。

---

**相关指南:**

- [管理 IDrive e2 S3 云备份 — 使用 RcloneView 同步和备份文件](https://rcloneview.com/support/blog/manage-idrive-e2-s3-cloud-backup-rcloneview)
- [管理 Cloudflare R2 — 使用 RcloneView 同步和备份文件](https://rcloneview.com/support/blog/manage-cloudflare-r2-cloud-sync-rcloneview)
- [Dry Run — 使用 RcloneView 在传输前预览云同步](https://rcloneview.com/support/blog/dry-run-preview-sync-before-transfer-rcloneview)

<CloudSupportGrid />
