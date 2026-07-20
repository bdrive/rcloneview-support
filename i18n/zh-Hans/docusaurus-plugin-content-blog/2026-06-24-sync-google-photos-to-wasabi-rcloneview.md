---
slug: sync-google-photos-to-wasabi-rcloneview
title: "将 Google 相册同步到 Wasabi — 使用 RcloneView 实现经济实惠的照片存档备份"
authors:
  - steve
description: "了解如何使用 RcloneView 将 Google 相册库同步并备份到 Wasabi S3 兼容存储 — 实现冗余、经济实惠的异地照片存档。"
keywords:
  - 将 Google 相册同步到 Wasabi
  - Google 相册 Wasabi 备份
  - RcloneView Google 相册备份
  - Wasabi 照片存档存储
  - 经济实惠的云照片备份
  - Google 相册异地备份
  - rclone Google 相册 Wasabi
  - 云照片库备份
tags:
  - RcloneView
  - google-photos
  - wasabi
  - cloud-to-cloud
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 将 Google 相册同步到 Wasabi — 使用 RcloneView 实现经济实惠的照片存档备份

> 通过将 Google 相册库同步到 Wasabi S3 兼容存储，保护多年积累的珍贵照片 — 实现冗余、异地存放且经济实惠的备份。

Google 相册是数百万人存储照片库的地方，但将无可替代的记忆完全依赖单一平台存在实际风险。存储配额会耗尽，账户政策会变化，访问权限也可能在没有充分警告的情况下被撤销。同步到 Wasabi（一个 S3 兼容的对象存储服务）可以创建一份可靠、独立的异地副本，完全由你自己掌控。RcloneView 通过可视化的双面板界面连接这两项服务，让云到云的照片传输无需任何命令行操作即可轻松完成。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 在 RcloneView 中连接 Google 相册和 Wasabi

首先添加 Google 相册作为远程。打开 **Remote** 标签页，点击 **New Remote**，然后从提供商列表中选择 Google Photos。RcloneView 会打开一个浏览器窗口进行 OAuth 身份验证 — 使用你的 Google 账户登录并授予访问权限。你的照片和相册将立即在浏览器面板中可见。

接下来，添加 Wasabi 作为 S3 兼容的远程。再次点击 **New Remote**，选择 Amazon S3 作为类型，并选择 Wasabi 作为提供商。输入你的 Wasabi Access Key、Secret Key 和区域端点。请提前在 Wasabi 控制台中创建好目标存储桶，以便随时接收文件。保存好两个远程后，你就可以在一个面板中浏览 Google 相册库，在另一个面板中浏览 Wasabi 存储桶。

<img src="/support/images/en/blog/new-remote.png" alt="Adding Google Photos and Wasabi remotes in RcloneView" class="img-large img-center" />

RcloneView 在免费许可证下即可为 Wasabi 等 S3 兼容提供商提供完整的读写访问权限 — 无需升级套餐即可将其用作强大的备份目的地。

## 创建并运行同步任务

在两个远程都显示在浏览器中后，打开 **Job Manager** 并创建一个新的同步（Sync）任务。将 Google 相册设为源，将你的 Wasabi 存储桶设为目标。在高级设置（Advanced Settings）步骤中，启用 **校验和验证（checksum verification）** — 此功能通过内容哈希而非仅按文件大小比较传输的文件，可以捕获传输过程中出现的任何损坏。

在运行完整同步之前，使用 **Dry Run（试运行）** 预览完整的文件列表。对于多年积累的照片库来说，试运行有助于你了解涉及的数据量，并验证你的过滤器设置（如果有的话）是否配置正确。

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="Transferring Google Photos files to a Wasabi bucket in RcloneView" class="img-large img-center" />

## 实时监控传输进度

任务启动后，RcloneView 底部的 **Transferring** 标签页会显示实时进度：传输速度、已完成文件数以及已传输的总大小。对于拥有 80,000 多张原始照片的摄影师而言，首次同步可能需要运行数小时 — 后续运行只会传输新增或已更改的文件，使增量备份保持高效。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Real-time monitoring of the Google Photos to Wasabi transfer" class="img-large img-center" />

**Job History（任务历史）** 会记录每次运行的开始时间、持续时长、文件数量和状态。定期查看它可以确认你的备份是否顺利完成，并帮助你及早发现任何反复出现的错误。

## 使用 PLUS 版本安排定期备份

拥有 PLUS 许可证后，你可以按照任意 crontab 计划自动运行 Google 相册到 Wasabi 的同步任务 — 每天、每周或在特定时间运行。Simulate Schedule（模拟计划）工具可以在保存任务之前预览即将到来的运行时间，方便你确认该节奏是否符合你的工作流程。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Setting a schedule for the Google Photos to Wasabi backup job" class="img-large img-center" />

例如，负责备份客户相册的婚礼摄影师可以安排一个夜间任务，将新的交付成果从 Google 相册推送到 Wasabi 存档存储桶 — 每次拍摄后无需手动干预。

## 快速上手

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 通过 **New Remote** 添加 Google 相册（OAuth 浏览器登录）。
3. 通过 **New Remote** 添加 Wasabi — 选择 Amazon S3，选择 Wasabi 作为提供商，并输入你的凭证。
4. 在 **Job Manager** 中创建一个同步任务，将 Google 相册设为源，将你的 Wasabi 存储桶设为目标。

你的 Google 相册库将获得一份经济实惠、由你独立掌控的异地存档，让你的珍贵记忆不再依赖单一平台。

---

**相关指南：**

- [使用 RcloneView 将 Google 相册同步到 Backblaze B2](https://rcloneview.com/support/blog/sync-google-photos-to-backblaze-b2-rcloneview)
- [管理 Google 相册存储 — 使用 RcloneView 同步和备份文件](https://rcloneview.com/support/blog/manage-google-photos-cloud-sync-backup-rcloneview)
- [使用 RcloneView 管理 Wasabi 云存储](https://rcloneview.com/support/blog/manage-wasabi-cloud-sync-backup-rcloneview)

<CloudSupportGrid />
