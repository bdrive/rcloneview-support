---
slug: migrate-mailru-cloud-to-google-drive-rcloneview
title: "将 Mail.ru Cloud 迁移到 Google Drive — 使用 RcloneView 传输文件"
authors:
  - tayson
description: "使用 RcloneView 将 Mail.ru Cloud 迁移到 Google Drive：连接两个远程、运行 Dry Run、在云端之间复制文件夹，并通过 Folder Compare 验证结果。"
keywords:
  - 将 Mail.ru Cloud 迁移到 Google Drive
  - Mail.ru Cloud 传输
  - 从 Mail.ru 到 Google Drive
  - RcloneView Mail.ru
  - 云到云迁移
  - 在云之间移动文件
  - Mail.ru Cloud 备份
  - rclone GUI 迁移
  - Google Drive 迁移工具
  - Folder Compare 验证
tags:
  - RcloneView
  - mailru
  - google-drive
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 将 Mail.ru Cloud 迁移到 Google Drive — 使用 RcloneView 传输文件

> 用可视化、可验证的工作流把 Mail.ru Cloud 的文件迁移到 Google Drive，而不是手动下载再重新上传。

要把多年积累的文档、扫描件和媒体文件从 Mail.ru Cloud 迁出，通常意味着先全部下载到笔记本电脑，再重新上传。RcloneView 是基于 rclone 的 GUI，它将两个服务都作为远程连接，让您在一个窗口中完成复制并验证结果。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 连接两个远程

打开 RcloneView，使用 **New Remote** 添加 Mail.ru Cloud 和 Google Drive。Google Drive 通过浏览器使用 OAuth 登录，因此无需 API 密钥。Mail.ru Cloud 在受支持的提供商列表中；请按屏幕提示输入其凭据。两者都出现在 Remote Manager 中后，在两个 Explorer 面板中并排打开它们。

<img src="/support/images/en/blog/new-remote.png" alt="在 RcloneView 中添加 Mail.ru Cloud 和 Google Drive 远程" class="img-large img-center" />

RcloneView 在 Windows、macOS 和 Linux 上，通过一个窗口支持 90 多种云存储服务，因此相同的设置也适用于以后的任何迁移。

## 移动任何内容之前先规划复制

先浏览源目录树。对顶层文件夹使用 **Get Size** 估算数据量，然后决定哪些现在迁移、哪些可以稍后处理。例如，小型企业可以立即迁移共享的“Contracts”文件夹，而把体量较大的“Archive”文件夹安排在非工作时间。

将文件夹从 Mail.ru 面板拖到 Google Drive 面板：在不同远程之间拖动会执行 **Copy**，因此在您满意之前源数据保持不变。对于较大的迁移，请在 Sync 向导中创建 Copy 任务，在 Advanced Settings 中设置传输数，并使用过滤器跳过不需要的文件，例如 ISO 镜像。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="在 RcloneView 中于两个远程之间进行云到云传输" class="img-large img-center" />

## Dry Run、传输与监控

先运行 **Dry Run**。它会列出将要复制的内容，而不会改动任何一方，从而在浪费时间之前发现错误的路径。列表无误后，启动任务，并在 Transferring 选项卡中查看进度、速度和文件数。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="在 RcloneView 的 Transferring 选项卡中监控正在运行的传输" class="img-large img-center" />

## 使用 Folder Compare 验证

复制完成后，将 Mail.ru Cloud 放在左侧、Google Drive 放在右侧，打开 **Compare**。筛选 left-only 和 different 文件，查看缺失或不匹配的内容，然后将它们复制过去。Job History 会记录文件的状态、大小和耗时。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="显示源与目标差异的 Folder Compare" class="img-large img-center" />

## 开始使用

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 通过 **New Remote** 添加 Mail.ru Cloud 和 Google Drive。
3. 对一个文件夹运行 Dry Run，然后启动 Copy 任务。
4. 在停用旧账户之前，使用 Folder Compare 进行确认。

经过验证的云到云直接复制可降低迁移风险，并便于随时继续。

---

**相关指南：**

- [管理 Mail.ru Cloud 同步](https://rcloneview.com/support/blog/manage-mailru-cloud-sync-rcloneview)
- [将 Mail.ru Cloud 传输到 Google Drive 和 S3](https://rcloneview.com/support/blog/transfer-mailru-cloud-google-drive-s3-rcloneview)
- [将 Mail.ru Cloud 迁移到 Backblaze B2](https://rcloneview.com/support/blog/migrate-mailru-cloud-to-backblaze-b2-rcloneview)

<CloudSupportGrid />
