---
slug: sync-wasabi-to-google-drive-rcloneview
title: "将 Wasabi 同步到 Google Drive — 使用 RcloneView 进行云备份"
authors:
  - morgan
description: "使用 RcloneView 将 Wasabi 同步到 Google Drive：连接两个远程，用 Dry Run 预览，运行单向同步，并用 Folder Compare 验证结果。"
keywords:
  - 将 wasabi 同步到 google drive
  - wasabi 到 google drive 备份
  - wasabi google drive 传输
  - RcloneView wasabi
  - RcloneView google drive
  - 云到云同步
  - s3 到 google drive
  - wasabi 存储桶备份
tags:
  - RcloneView
  - wasabi
  - google-drive
  - cloud-to-cloud
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 将 Wasabi 同步到 Google Drive — 使用 RcloneView 进行云备份

> 通过可预览的单向同步，在 Google Drive 中保留一份便于协作的 Wasabi 存储桶副本。

Wasabi 常被用来存放归档和项目交付物，但需要这些文件的人往往在 Google Drive 中工作。将两者同步，可以在同事已经使用的地方保留一份可读的副本，并在其中一个账户出现问题时提供第二个存放位置。RcloneView 在一个窗口中连接这两项服务，预览任务并验证结果。S3、Azure 或 Backblaze B2 在 FREE 许可证下即可完整读写连接，此外还支持 90 多个其他提供商。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 连接两个远程

Wasabi 通过 rclone 的 S3 协议接入：输入 Access Key、Secret Key 以及您所在 Wasabi 区域的端点。Google Drive 使用浏览器 OAuth，因此 RcloneView 会打开 Google 登录页面，您批准访问后即可连接。

在各自的 Explorer 面板中打开每个远程。并排浏览存储桶和 Drive 文件夹树，这样您就能清楚地知道哪个前缀对应哪个文件夹。

<img src="/support/images/en/blog/new-remote.png" alt="在 RcloneView 中添加 Wasabi 和 Google Drive 远程" class="img-large img-center" />

## 配置同步任务

设想一个视频工作室，存储桶中有已完成的剪辑，制片人希望在共享的 Drive 文件夹中看到它们。通过 Sync 按钮创建任务：选择 Wasabi 前缀作为源，Drive 文件夹作为目标，然后用字母、数字、连字符或下划线为任务命名。

单向同步（"Modifying destination only"）会让目标与源保持一致，因此仅存在于 Drive 文件夹中的文件将被删除。如果 Drive 文件夹里有需要保留的文件，请改用 Copy 任务。在 Advanced Settings 下，可以设置同时传输的文件数并启用校验和比较。请注意，Google 文档、表格和幻灯片并不是普通文件，因此预定义的 Google Docs 过滤器可用来排除它们。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="在 RcloneView 中进行 Wasabi 与 Google Drive 之间的云到云传输" class="img-large img-center" />

## 使用 Dry Run 预览

首次正式运行之前，请使用 Dry Run。它会在不更改任何内容的情况下列出将要复制和删除的文件，是发现源前缀错误或意外删除的最省事方式。列表无误后运行任务，并在 Transferring 标签页中查看进度、速度和文件数。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="在 RcloneView 中运行同步任务" class="img-large img-center" />

## 验证并重复

同步完成后，对这两个位置打开 Folder Compare，确认没有仅存在于一侧或存在差异的文件。Job History 会记录每次运行的状态、持续时间、大小和文件数，方便您回顾过去的运行。使用 PLUS 许可证，您可以添加 crontab 样式的计划，让副本自动刷新。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="RcloneView 中的 Folder Compare 视图" class="img-large img-center" />

## 开始使用

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 使用 Access Key、Secret Key 和区域端点添加 Wasabi 远程，然后通过浏览器登录添加 Google Drive。
3. 创建从 Wasabi 前缀到 Drive 文件夹的 Sync 任务，并先运行 Dry Run。
4. 运行任务，然后用 Folder Compare 确认结果。

存储桶的 Drive 副本，让归档变成整个团队都能打开的资料。

---

**相关指南：**

- [将 Wasabi 迁移到 OneDrive](https://rcloneview.com/support/blog/migrate-wasabi-to-onedrive-rcloneview)
- [Dry Run — 传输前预览同步](https://rcloneview.com/support/blog/dry-run-preview-sync-before-transfer-rcloneview)
- [先比较的工作流程](https://rcloneview.com/support/blog/compare-first-workflow-rcloneview)

<CloudSupportGrid />
