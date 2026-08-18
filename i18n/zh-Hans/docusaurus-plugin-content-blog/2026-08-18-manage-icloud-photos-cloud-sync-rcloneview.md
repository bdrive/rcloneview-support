---
slug: manage-icloud-photos-cloud-sync-rcloneview
title: "管理 iCloud Photos — 使用 RcloneView 同步和备份文件"
authors:
  - robin
description: "使用 RcloneView 管理 iCloud Photos——在一个跨平台 GUI 中浏览、同步并将您的 Apple 照片库备份到其他云端。"
keywords:
  - iCloud Photos 管理
  - iCloud Photos 备份
  - iCloud Photos 同步
  - RcloneView iCloud Photos
  - Apple Photos 云备份
  - iCloud Photos to Google Drive
  - iCloud Photos 迁移
  - Apple 照片库备份工具
  - iCloud Photos rclone
tags:
  - RcloneView
  - cloud-storage
  - cloud-sync
  - backup
  - macos
  - guide
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 管理 iCloud Photos — 使用 RcloneView 同步和备份文件

> 在 RcloneView 中连接您的 iCloud Photos 库，无需手动导出相册即可备份到另一个云端。

Apple 的 Photos 生态系统将多年积累的照片和视频锁在 iCloud 中，想要在别处保留第二份副本通常意味着要通过 Photos 应用逐个导出相册。RcloneView 将 iCloud Photos 作为自己独立的专用远程连接——与 iCloud Drive 是不同的远程——因此您可以直接浏览库内容，并复制到 Google Drive、Amazon S3 或本地备份驱动器，而无需手动导出步骤。在 FREE 许可证下即可以完整读写权限连接 S3、Azure File Storage 或 Backblaze B2，因此照片备份目标端的搭建不需要额外费用。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 将 iCloud Photos 添加为远程

iCloud Photos 通过 RcloneView 的 Remote 选项卡 > New Remote 添加，它被设置为与 iCloud Drive 不同的独立远程类型——尽管两者都来自同一个 Apple 账户，但作为两个独立的远程运作。完成身份验证后，该照片库会像其他云存储一样出现在 Explorer 面板中，您可以浏览和选择文件夹、缩略图和文件元数据。

<img src="/support/images/en/blog/new-remote.png" alt="Adding an iCloud Photos remote in RcloneView" class="img-large img-center" />

对于长期使用 iCloud 的用户来说，照片库可能达到数万个文件，因此在进行批量复制之前切换到 RcloneView 的 Thumbnail View 是值得的——它可以让您浏览图片预览，在传输开始前确认您选中的是正确的相册或日期范围。

## 备份到第二个云端

连接 iCloud Photos 后，通过 4 步向导设置一个同步任务：选择 iCloud Photos 作为源，选择目标远程——Google Drive、S3 兼容存储桶或本地外接驱动器——然后先运行 Dry Run，在实际传输发生前准确预览将要复制的内容。对于照片库而言，由于照片文件的大小很少发生变化，但您仍希望确信复制内容与原文件逐字节一致，因此第 2 步中的校验和比较特别有用。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring a sync job from iCloud Photos to another cloud remote in RcloneView" class="img-large img-center" />

第 3 步的 Filtering Settings 也有助于缩小大型照片库的范围——最大文件年龄过滤器可以将备份任务限制为仅包含最近添加的内容，这样在完成首次全量复制之后，重复运行的速度会更快。

## 自动化定期备份

一次性导出无法保护下个月拍摄的照片，因此大多数 iCloud Photos 用户会设置重复运行的同步任务，而不是手动单次执行。在 PLUS 许可证下，可以为任务附加 crontab 格式的计划安排，使其按您需要的任意频率自动运行——每天、每周,或每晚特定时间之后——之后可以在 Job History 中确认运行已完成,并查看传输了多少文件。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a recurring iCloud Photos backup job in RcloneView" class="img-large img-center" />

## 开始使用

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 通过 Remote 选项卡 > New Remote 添加一个 iCloud Photos 远程。
3. 配置一个同步任务到您选择的备份目标，并先运行 Dry Run。
4. 安排定期备份，让新照片自动得到保护。

在 Apple 生态系统之外保留照片库的第二份副本，意味着即使账户被锁定或设备丢失，也能少一个单点故障。

---

**相关指南：**

- [使用 RcloneView 管理 iCloud Drive](https://rcloneview.com/support/blog/icloud-drive-with-rcloneview)
- [使用 RcloneView 管理 iCloud Drive 云同步](https://rcloneview.com/support/blog/manage-icloud-drive-cloud-sync-rcloneview)
- [使用 RcloneView 修复 iCloud Drive 同步错误](https://rcloneview.com/support/blog/fix-icloud-drive-sync-errors-rcloneview)

<CloudSupportGrid />
