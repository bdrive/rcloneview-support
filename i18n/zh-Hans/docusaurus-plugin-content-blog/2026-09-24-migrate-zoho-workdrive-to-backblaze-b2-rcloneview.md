---
slug: migrate-zoho-workdrive-to-backblaze-b2-rcloneview
title: "将 Zoho WorkDrive 迁移到 Backblaze B2 — 使用 RcloneView 传输文件"
authors:
  - steve
description: "使用 RcloneView 将文件从 Zoho WorkDrive 直接迁移到 Backblaze B2,支持云到云传输、Dry Run 预览和任务调度。"
keywords:
  - 将Zoho WorkDrive迁移到Backblaze B2
  - Zoho WorkDrive备份
  - Backblaze B2迁移
  - 云到云传输
  - RcloneView迁移指南
  - Zoho WorkDrive到B2
  - 云存储迁移工具
  - rclone Zoho WorkDrive
  - 跨云文件传输
  - 经济实惠的云存档
tags:
  - RcloneView
  - zoho
  - backblaze-b2
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 将 Zoho WorkDrive 迁移到 Backblaze B2 — 使用 RcloneView 传输文件

> 无需先经过本地磁盘,直接将 Zoho WorkDrive 的文件迁移到 Backblaze B2。

日常使用 Zoho WorkDrive 进行协作的团队,通常需要为已完成的项目和旧客户文件夹寻找更便宜的长期存储层,而 Backblaze B2 是常见的存档选择。RcloneView 在一个窗口中连接两个远程,并直接进行云到云的文件复制,因此无需先将装满文档和媒体文件的共享盘下载到笔记本电脑本地存储再重新上传。RcloneView 可在 Windows、macOS 和 Linux 上,在一个窗口内挂载和同步 90 多个服务商,浏览 Zoho WorkDrive 和存档到 Backblaze B2 无需切换应用程序。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 连接 Zoho WorkDrive 与 Backblaze B2

通过 New Remote 添加 Zoho WorkDrive 作为远程,并选择基于 OAuth 的设置;由于配置过程中 Zoho WorkDrive 需要选择区域,请在完成设置前选择与你账户匹配的数据中心。Backblaze B2 则改用凭证输入方式 — 从 B2 密钥管理页面输入 Application Key ID 和 Application Key,RcloneView 会在保存前验证连接。之后两个远程都会以标签形式出现在 Explorer 面板中,可以并排浏览。

<img src="/support/images/en/blog/new-remote.png" alt="在 RcloneView 中添加 Zoho WorkDrive 和 Backblaze B2 作为远程" class="img-large img-center" />

连接完成后,打开 Remote Manager 确认两个条目,并在首次传输前调整文件夹范围等设置。

## 执行云到云传输

打开双面板布局,一侧放置 Zoho WorkDrive,另一侧放置你的 Backblaze B2 存储桶,然后拖动要迁移的文件夹 — 在两个不同远程之间拖动始终执行复制操作,Zoho WorkDrive 原文件在你准备清理之前保持不变。对于更大规模的迁移,建议改用 Sync 任务:选择 Zoho WorkDrive 作为源、B2 存储桶作为目标,在 Advanced Settings 中设置并发文件传输数,并先运行 Dry Run 以准确预览哪些文件将会移动,然后再真正开始传输。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="从 Zoho WorkDrive 到 Backblaze B2 的云到云传输任务" class="img-large img-center" />

## 验证并安排迁移计划

在同步任务的 Advanced Settings 中启用校验和比较,让 RcloneView 按哈希值和大小而不仅仅按文件大小确认文件是否匹配,并设置重试次数以应对大批量传输中出现的临时网络错误。任务完成后,查看 Job History 检查传输的文件总数、耗时以及任何出错的项目,然后再存档源文件夹。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="显示 Zoho WorkDrive 到 Backblaze B2 传输完成的 Job History" class="img-large img-center" />

## 开始使用

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 添加你的 Zoho WorkDrive 远程,并选择正确的区域。
3. 使用你的 Application Key ID 和 Key 添加 Backblaze B2 远程。
4. 运行 Dry Run,然后执行同步或复制任务,并在 Job History 中确认结果。

一次干净的云到云迁移能让你的 Zoho WorkDrive 工作空间保持精简,同时为已完成的文件提供持久且低成本的存放位置。

---

**相关指南:**

- [管理 Zoho WorkDrive — 使用 RcloneView 同步与备份文件](https://rcloneview.com/support/blog/manage-zoho-workdrive-cloud-sync-rcloneview)
- [管理 Backblaze B2 — 使用 RcloneView 同步与备份文件](https://rcloneview.com/support/blog/manage-backblaze-b2-cloud-sync-backup-rcloneview)
- [将 Zoho WorkDrive 同步到 OneDrive — 使用 RcloneView 实现云备份](https://rcloneview.com/support/blog/sync-zoho-workdrive-to-onedrive-rcloneview)

<CloudSupportGrid />
