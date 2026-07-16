---
slug: migrate-koofr-to-google-drive-rcloneview
title: "将 Koofr 迁移到 Google Drive —— 使用 RcloneView 传输文件"
authors:
  - tayson
description: "使用 RcloneView 将您的文件从 Koofr 迁移到 Google Drive。在云服务商之间直接传输数据，保留文件夹结构，无需本地下载。"
keywords:
  - migrate Koofr to Google Drive
  - Koofr to Google Drive transfer
  - RcloneView Koofr Google Drive migration
  - cloud to cloud migration tool
  - Koofr migration GUI
  - move files Koofr Google Drive
  - Koofr cloud migration
  - Google Drive import from Koofr
  - RcloneView cloud migration
  - Koofr file transfer tool
tags:
  - koofr
  - google-drive
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 将 Koofr 迁移到 Google Drive —— 使用 RcloneView 传输文件

> RcloneView 可将您的 Koofr 文件直接迁移到 Google Drive —— 保留文件夹结构、校验数据完整性，且无需任何本地中转存储。

Koofr 面向欧洲、注重隐私的存储服务，深受重视 GDPR 合规和数据驻留的用户青睐。当团队转向 Google Workspace 并需要将 Koofr 中的内容迁移至 Google Drive 时，RcloneView 可以简洁地完成迁移：同时连接两个云存储服务商，并以直接的云到云路径传输数据。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 在 RcloneView 中连接 Koofr 和 Google Drive

在开始迁移之前，先将两个云存储服务商都添加为远程。对于 Koofr，进入 Remote 选项卡 > New Remote，选择 Koofr，然后使用您的 Koofr 凭据完成连接。对于 Google Drive，选择 Google Drive 并完成 OAuth 浏览器身份验证 —— Google Drive 的 OAuth 流程完全自动化，无需 API 密钥。

配置好两个远程后，双面板资源管理器会让您在一侧看到 Koofr，另一侧看到 Google Drive。这种可视化对比有助于您规划迁移：确认文件夹结构、识别嵌套目录，并决定是迁移整个 Koofr 根目录还是特定子文件夹。

<img src="/support/images/en/blog/new-remote.png" alt="Adding Koofr and Google Drive remotes in RcloneView" class="img-large img-center" />

## 设置迁移同步任务

在 RcloneView 中创建一个命名的同步任务，实现可控且可重复的迁移：

1. **源：** 选择您的 Koofr 远程（根目录或特定文件夹）
2. **目标：** 选择您的 Google Drive 远程和目标文件夹
3. **任务名称：** 使用描述性的名称，例如 `koofr-to-gdrive-migration`
4. **模式：** 选择 Copy 模式，在不从 Koofr 中删除文件的情况下移动文件

对于迁移大型共享目录的团队，**最大文件夹深度** 过滤器可以帮助您独立迁移顶层文件夹，在继续之前逐层验证。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring cloud-to-cloud transfer from Koofr to Google Drive in RcloneView" class="img-large img-center" />

## 传输前使用 Dry Run 预览

使用 RcloneView 的 dry run 模式，在不移动任何文件的情况下预览迁移范围。Dry run 的输出会按文件夹列出所有将被复制的文件 —— 让您准确了解该任务将执行的操作。这在迁移嵌套的 Koofr 文件夹结构、需要在正式执行前验证目标布局时尤其有用。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running the Koofr to Google Drive migration in RcloneView" class="img-large img-center" />

## 监控传输进度并查看历史记录

RcloneView 的 Transfer 选项卡会实时显示 Koofr 到 Google Drive 迁移的进度 —— 正在传输的文件、当前速度以及已传输的总字节数。完成后，Job History 会记录完整摘要：总传输大小、耗时、文件数量以及遇到的任何错误。如果 Google Drive 的 API 速率限制减慢了传输速度，历史日志会记录这些重试事件。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history for Koofr to Google Drive migration in RcloneView" class="img-large img-center" />

## 开始使用

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 在 Remote 选项卡 > New Remote 中添加 Koofr 和 Google Drive 作为远程。
3. 创建从 Koofr 到您的 Google Drive 目标的 Copy 或 Sync 任务。
4. 运行 dry run 进行预览，然后执行迁移。

从 Koofr 迁移到 Google Drive，在 RcloneView 中是一个简单直接的云到云操作 —— 无需本地磁盘空间，并且对每个传输的文件都保持完全透明。

---

**相关指南：**

- [管理 Koofr 存储 —— 使用 RcloneView 同步和备份文件](https://rcloneview.com/support/blog/manage-koofr-cloud-sync-backup-rcloneview)
- [管理 Google Drive 存储 —— 使用 RcloneView 同步和备份文件](https://rcloneview.com/support/blog/manage-google-drive-cloud-sync-backup-rcloneview)
- [Koofr 与 Jottacloud 对比 —— 使用 RcloneView 进行欧洲云存储比较](https://rcloneview.com/support/blog/koofr-vs-jottacloud-european-cloud-storage-rcloneview)

<CloudSupportGrid />
