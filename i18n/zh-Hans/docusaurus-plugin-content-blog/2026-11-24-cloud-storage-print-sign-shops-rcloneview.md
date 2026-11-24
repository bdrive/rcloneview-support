---
slug: cloud-storage-print-sign-shops-rcloneview
title: "印刷与标牌店的云存储 — 使用 RcloneView 整理和备份设计稿"
authors:
  - kai
description: "使用 RcloneView 管理印刷与标牌店的云存储。收集客户设计稿，将生产文件备份到多个云，并让作业归档井然有序。"
keywords:
  - 印刷店云存储
  - 标牌店文件备份
  - 印刷店设计稿存储
  - 大幅面印刷文件管理
  - 备份印刷生产文件
  - 客户设计稿云备份
  - RcloneView 印刷店
  - 小企业多云备份
  - 标牌公司文件归档
tags:
  - RcloneView
  - cloud-storage
  - industry
  - backup
  - guide
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 印刷与标牌店的云存储 — 使用 RcloneView 整理和备份设计稿

> 无论客户设计稿来自哪个云，都能集中收取；生产文件随时有备份；去年的横幅也能从井然有序的归档中重新打开。

印刷与标牌店处理的文件体积大、种类多，而且往往无法替代：矢量 Logo、带图层的 PSD、可直接印刷的 PDF、车身贴膜模板以及 RIP 输出文件。客户通过 Google Drive、Dropbox、OneDrive 或 Box 链接发送设计稿，而完成的作业不断堆积在工作站或 Synology NAS 上。RcloneView 将这些全部汇集到一个 GUI 中，让店铺无需在浏览器标签之间来回切换，就能收集、归档和备份设计稿。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 从任意云收集客户设计稿

在 **Remote tab > New Remote** 中将店铺使用的每个服务添加为远程。Google Drive、Dropbox、OneDrive 和 Box 通过浏览器登录即可连接。如果客户经常在 Google Drive 中与您共享文件夹，可以使用 Google Drive Shared with Me 远程（`shared_with_me = true`）直接浏览这些文件夹。

<img src="/support/images/en/blog/new-remote.png" alt="Adding client cloud remotes for a print shop in RcloneView" class="img-large img-center" />

最多可同时打开四个 Explorer 面板，因此客户的文件夹可以与 NAS 上的待处理作业文件夹并排显示。在不同远程之间拖动文件即可复制。在拉取一个 20 GB 的车身贴膜项目之前，先用 **Get Size** 了解下载量。

## 将生产文件备份到多个位置

店铺真正的资产是归档：回头客的新标牌需要用到的 Logo，或是整支卡车车队的模板。从生产文件夹创建一个 Sync 或 Copy 作业，目标为 Backblaze B2、Wasabi 或 Amazon S3 等异地存储。借助 **1:N sync**，一个作业即可同时将同一文件夹发送到多个目标（例如 NAS 和一个 S3 兼容存储桶），并且在 FREE License 下即可使用。

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="Dragging print production files to an S3-compatible bucket in RcloneView" class="img-large img-center" />

使用过滤器让备份保持精简。通过自定义规则排除临时文件夹和缓存文件，或在繁忙的工作日使用 **Max file age** 只备份近期的作业。首次同步前请先运行 **Dry Run**，确认目标端不会有意外的文件被删除。

## 安排夜间归档

拥有 PLUS License 时，可以在作业的最后一步添加 crontab 风格的计划，让归档在店铺打烊后运行，例如周一至周六晚上 11 点。**Simulate schedule** 按钮可在保存前预览接下来的运行时间。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a nightly print shop archive job in RcloneView" class="img-large img-center" />

每天早上查看 **Job History**，确认运行已完成，并查看移动了多少文件。如果作业出错，状态和时间信息可帮助您轻松重新运行。

## 无需全部下载即可重新打开旧作业

当客户要求重印时，在 Mount Manager 中将归档存储桶挂载为驱动器。设计软件即可直接从挂载的驱动器打开文件，本地缓存则由 VFS 缓存（默认 writes 模式）处理。

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="Mounting a print archive bucket as a drive in RcloneView" class="img-large img-center" />

## 快速开始

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 将客户使用的云、您的 NAS 以及一个异地存储桶添加为远程。
3. 从生产文件夹创建一个指向一个或多个备份目标的 Copy 或 Sync 作业，并用 Dry Run 预览。
4. 挂载归档存储桶，让任何工作站都能打开过去的作业。

设计稿集中收取、完成备份并统一归档后，您的团队可以少花时间找文件，多花时间做印刷。

---

**相关指南：**

- [使用 RcloneView 管理出版与印刷媒体的云存储](https://rcloneview.com/support/blog/cloud-storage-publishing-print-media-rcloneview)
- [使用 RcloneView 管理平面设计师的云存储](https://rcloneview.com/support/blog/cloud-storage-graphic-designers-rcloneview)
- [使用 RcloneView 将一个源同步到多个云目标](https://rcloneview.com/support/blog/sync-one-source-multiple-cloud-destinations-rcloneview)

<CloudSupportGrid />
