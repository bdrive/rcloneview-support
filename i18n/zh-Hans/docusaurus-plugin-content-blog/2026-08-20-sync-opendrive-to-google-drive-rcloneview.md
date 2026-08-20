---
slug: sync-opendrive-to-google-drive-rcloneview
title: "将 OpenDrive 同步到 Google Drive — 使用 RcloneView 进行云备份"
authors:
  - kai
description: "使用 RcloneView 将 OpenDrive 文件夹同步到 Google Drive，借助 Folder Compare 和定时任务让两个云端保持一致。"
keywords:
  - 将 OpenDrive 同步到 Google Drive
  - OpenDrive Google Drive 备份
  - RcloneView OpenDrive 同步
  - OpenDrive 云备份
  - 云到云同步
  - OpenDrive Google Drive RcloneView
  - 多云备份工具
  - OpenDrive 文件夹比较
tags:
  - RcloneView
  - opendrive
  - google-drive
  - cloud-to-cloud
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 将 OpenDrive 同步到 Google Drive — 使用 RcloneView 进行云备份

> 无需先下载到本地磁盘，即可将 OpenDrive 文件夹镜像到 Google Drive。

将工作文件存放在 OpenDrive、却与客户或合作伙伴在 Google Drive 上协作的团队，通常最终会手动来回复制文件，而只要有一方发生变动，两边就会立刻失去同步。RcloneView 在同一窗口中连接两个远程并直接在它们之间同步，因此传输是云到云进行的，而不必经过本地文件夹中转。与仅支持挂载的工具不同，RcloneView 在 FREE 许可证下也提供同步和文件夹比较功能。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 设置 OpenDrive 和 Google Drive 远程

先在 Remote Manager 中添加 OpenDrive 作为远程，然后使用基于浏览器的 OAuth 登录添加 Google Drive——配置完成后，两个远程会在 File Explorer 中显示为独立的标签页，方便你在构建同步任务前分别浏览各自内容。在进入同步向导之前，请确认两个远程都能正常列出文件夹；无法浏览的远程在同步过程中同样会失败，及早发现问题会更容易处理。

<img src="/support/images/en/blog/new-remote.png" alt="Adding OpenDrive and Google Drive remotes in RcloneView" class="img-large img-center" />

## 配置单向同步任务

在同步向导中，选择 OpenDrive 文件夹作为源，目标 Google Drive 文件夹作为目的地，然后选择单向同步，让 OpenDrive 始终作为权威来源。根据文件夹大小在 Advanced Settings 中设置文件传输数和一致性检查器数量——默认值适用于大多数情况，但如果文件夹中有数万个小文件，且 OpenDrive 对元数据请求响应较慢，降低一致性检查器数量会更有帮助。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring a one-way sync job from OpenDrive to Google Drive in RcloneView" class="img-large img-center" />

在首次正式同步前运行 Dry Run，预览将要复制的文件——这能在你第一次将任务指向一个已有的 OpenDrive 文件夹时，提前发现意外的整文件夹传输。

## 使用 Folder Compare 验证结果

首次同步完成后，打开 Folder Compare 并指向同样的两个文件夹，确认两边一致。Folder Compare 会高亮显示仅存在于一侧或大小不同的文件，相比在 Job History 中翻找错误，这是发现部分传输问题更快的方法。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Comparing OpenDrive and Google Drive folders after sync in RcloneView" class="img-large img-center" />

## 安排持续同步

验证初次同步无误后，在 Job Manager 中保存该任务并配置 crontab 风格的排程——此功能需要 PLUS 许可证——这样 OpenDrive 的变更就会按固定间隔传播到 Google Drive，而无需每次手动运行。Job History 会记录每一次排程执行，包括传输大小和文件数量，方便你确认排程确实按预期触发。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a recurring OpenDrive to Google Drive sync job in RcloneView" class="img-large img-center" />

## 快速上手

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 在 Remote Manager 中将 OpenDrive 和 Google Drive 都添加为远程。
3. 先通过 Dry Run 构建单向同步任务，然后正式运行。
4. 使用 Folder Compare 验证结果，如需持续备份，可保存该任务并设置排程。

当两个远程可以并排显示后，保持 OpenDrive 和 Google Drive 一致就会成为一项例行同步任务，而不再是手动琐事。

---

**相关指南：**

- [使用 RcloneView 管理 OpenDrive 文件与云同步](https://rcloneview.com/support/blog/manage-opendrive-cloud-sync-backup-rcloneview)
- [使用 RcloneView 将 OpenDrive 备份到 AWS S3 和外部存储](https://rcloneview.com/support/blog/backup-opendrive-aws-s3-external-storage-rcloneview)
- [使用 RcloneView 将 Box 同步到 Google Drive](https://rcloneview.com/support/blog/sync-box-to-google-drive-rcloneview)

<CloudSupportGrid />
