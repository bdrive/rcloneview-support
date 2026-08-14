---
slug: manage-liara-object-storage-cloud-sync-rcloneview
title: "管理 Liara 对象存储 — 使用 RcloneView 同步与备份文件"
authors:
  - robin
description: "将兼容 S3 的 Liara 对象存储连接到 RcloneView,在同一个图形界面中实现跨平台浏览、同步、备份与挂载。"
keywords:
  - Liara RcloneView
  - Liara 对象存储
  - 兼容 S3 的对象存储
  - Liara 备份
  - Liara 同步
  - 挂载 Liara 存储
  - 对象存储图形界面
  - Liara 文件管理
  - 云存储管理工具
  - Liara 存储桶同步
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

# 管理 Liara 对象存储 — 使用 RcloneView 同步与备份文件

> 将 Liara 存储桶纳入你管理其他所有云存储所使用的同一个资源管理器窗口中。

Liara 是一项兼容 S3 的对象存储服务,RcloneView 连接它的方式与连接 Amazon S3、Wasabi 或任何其他 S3 协议提供商完全相同 — 通过 Access Key、Secret Key 和端点地址。添加远程后,Liara 存储桶会作为普通标签页出现在文件资源管理器中,可与本地磁盘和其他云账户一起浏览、传输和安排任务。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 将 Liara 添加为新远程

在 Remote 标签页中打开 Remote Manager,点击 New Remote。由于 Liara 通过 rclone 的 S3 协议访问,选择 S3 兼容选项,并输入你在 Liara 控制台中获取的 Access Key、Secret Key 和端点地址。无需完成任何 OAuth 浏览器登录步骤 — 测试连接成功后,存储桶即会像其他远程一样出现在标签栏中。

<img src="/support/images/en/blog/new-remote.png" alt="在 RcloneView 中添加新的 S3 兼容远程" class="img-large img-center" />

RcloneView 可在 Windows、macOS 和 Linux 上通过同一个窗口挂载并同步 90 多个提供商 — Liara 无需单独的客户端,也无需与其他云账户不同的工作流程。

## 浏览、传输与同步存储桶

将资源管理器拆分为两个面板 — 一个显示本地文件或其他云存储,另一个显示你的 Liara 存储桶,然后在两者之间拖拽文件。同一远程内的移动操作即为移动(move),不同远程之间的拖拽则为复制(copy),因此你可以在不影响源文件夹的情况下将备份准备到 Liara 中。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="在本地文件夹与 Liara 存储桶之间传输文件" class="img-large img-center" />

对于定期任务,请使用四步同步向导:选择源与目标,在高级设置中调整并发传输数和等值检查器数量,然后在保存前应用按文件类型、大小或修改时间的过滤条件。在实际执行同步之前,先运行 Dry Run 以精确预览将要复制或删除的内容。

## 安排备份计划并监控任务

同步任务保存到 Job Manager 后,PLUS 许可证用户可以关联 crontab 格式的计划,使 Liara 备份按固定周期自动运行,并在保存前预览即将到来的执行时间。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="为 Liara 同步任务设置定期备份计划" class="img-large img-center" />

无论是手动执行还是按计划执行,每次运行都会记录在 Job History 中,包括状态、传输速度、文件数量和总大小,方便你确认 Liara 备份是否顺利完成,或找出需要重试的失败任务。

## 开始使用

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 在你的 Liara 控制台中生成 Access Key 和 Secret Key,并记下端点地址。
3. 在 Remote Manager 中将 Liara 添加为新的 S3 兼容远程,并测试连接。
4. 在为 Liara 存储桶安排定期备份之前,先运行一次 Dry Run 同步。

连接 Liara 后,你的对象存储便与你管理的所有其他云存储并列在一起 — 一个资源管理器,一套同步任务,无需维护单独的客户端。

---

**相关指南:**

- [使用 RcloneView 管理 Petabox 存储 — 文件同步与备份](https://rcloneview.com/support/blog/manage-petabox-cloud-sync-backup-rcloneview)
- [使用 RcloneView 管理 Scaleway 对象存储 — 同步与备份](https://rcloneview.com/support/blog/manage-scaleway-object-storage-cloud-sync-rcloneview)
- [使用 RcloneView 管理 Wasabi 存储 — 文件同步与备份](https://rcloneview.com/support/blog/manage-wasabi-cloud-sync-backup-rcloneview)

<CloudSupportGrid />
