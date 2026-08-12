---
slug: manage-petabox-cloud-sync-backup-rcloneview
title: "管理 Petabox 存储 — 使用 RcloneView 同步与备份文件"
authors:
  - kai
description: "将 Petabox 兼容 S3 的对象存储连接到 RcloneView，在一个 GUI 中实现跨平台浏览、同步、备份和挂载。"
keywords:
  - Petabox RcloneView
  - Petabox 云存储
  - S3 兼容对象存储
  - Petabox 备份
  - Petabox 同步
  - 挂载 Petabox
  - 对象存储 GUI
  - Petabox 文件管理
  - 云存储管理器
  - Petabox 存储桶同步
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

# 管理 Petabox 存储 — 使用 RcloneView 同步与备份文件

> 在一个桌面窗口中，与你使用的所有其他云端一起浏览、同步和备份 Petabox 存储桶。

Petabox 是一个兼容 S3 的对象存储服务，这意味着 RcloneView 可以像连接 Amazon S3、Wasabi 或任何其他 S3 协议提供商一样连接到它：使用 Access Key ID、Secret Access Key 和端点（endpoint）。连接后，Petabox 存储桶会作为常规远程连接显示在文件浏览器中，可像本地文件夹一样进行浏览、传输和排程。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 将 Petabox 连接为新的远程连接

从 Remote 标签页打开 Remote Manager，然后选择 New Remote。由于 Petabox 是通过 rclone 的 S3 协议访问的，请选择 S3 兼容选项，并输入你的 Access Key ID、Secret Access Key 以及账户提供的 Petabox 端点 URL。这里不需要完成 OAuth 浏览器流程——仅凭凭据即可完成连接验证，测试连接成功后，该远程连接会立即出现在你的标签栏中。

<img src="/support/images/en/blog/new-remote.png" alt="在 RcloneView 中添加新的 S3 兼容远程连接" class="img-large img-center" />

与仅支持挂载的工具不同，RcloneView 在 FREE 授权下同样提供同步与文件夹比较功能——Petabox 存储桶可以像其他受支持的提供商一样使用同步、比较和作业历史功能，无需升级即可开始使用。

## 浏览、传输和同步存储桶

添加 Petabox 后，将资源管理器拆分为两个面板——一个显示本地文件夹或另一个云端，另一个显示你的 Petabox 存储桶——然后在两者之间拖动文件。在同一远程连接内移动文件执行的是移动操作；在不同远程连接之间拖动执行的是复制操作，因此你可以在不触碰源文件的情况下准备 Petabox 备份。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="在本地文件夹与 Petabox 存储桶之间传输文件" class="img-large img-center" />

对于经常性传输，请使用四步同步向导：选择来源和目标，在 Advanced Settings 中设置并发传输数和相等性检查器数量，然后在保存作业前按文件类型、大小或存在时长应用过滤器。在提交实际传输之前，先运行一次 Dry Run，准确预览将复制或删除哪些内容。

## 排程备份与监控作业

同步作业在 Job Manager 中保存后，PLUS 授权用户可以附加 crontab 格式的排程，让 Petabox 备份按自己的节奏自动运行，并可在保存前预览即将到来的执行时间。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="为 Petabox 同步作业设置定期备份计划" class="img-large img-center" />

每次运行——无论是排程运行还是手动运行——都会在 Job History 中记录状态、传输速度、文件数量和总大小，方便你确认 Petabox 备份是否顺利完成，或找出需要重试的失败运行。

## 开始使用

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 在你的 Petabox 账户中生成 Access Key ID 和 Secret Access Key，并记下端点 URL。
3. 在 Remote Manager 中将 Petabox 添加为新的 S3 兼容远程连接，并测试连接。
4. 在为 Petabox 存储桶排程定期备份之前，先运行一次 Dry Run 同步。

连接 Petabox 后，你的对象存储会与你管理的所有其他云端并列显示——无需单独的客户端，也无需切换窗口。

---

**相关指南：**

- [使用 RcloneView 管理 Storj 存储 —— 文件同步与备份](https://rcloneview.com/support/blog/manage-storj-cloud-sync-backup-rcloneview)
- [使用 RcloneView 管理 IDrive E2 存储 —— 文件同步与备份](https://rcloneview.com/support/blog/manage-idrive-e2-cloud-sync-backup-rcloneview)
- [使用 RcloneView 管理 Wasabi 存储 —— 文件同步与备份](https://rcloneview.com/support/blog/manage-wasabi-cloud-sync-backup-rcloneview)

<CloudSupportGrid />
