---
slug: manage-put-io-cloud-sync-backup-rcloneview
title: "管理 Put.io 存储 — 使用 RcloneView 同步和备份文件"
authors:
  - tayson
description: "了解如何使用 OAuth 将 Put.io 连接到 RcloneView，浏览您的云文件，并轻松地将媒体内容同步到其他云提供商或从其他云提供商同步内容。"
keywords:
  - put.io RcloneView
  - put.io cloud sync
  - put.io backup
  - manage put.io files
  - put.io rclone GUI
  - put.io media management
  - cloud file transfer put.io
  - put.io sync cloud
tags:
  - RcloneView
  - putio
  - cloud-storage
  - cloud-sync
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 管理 Put.io 存储 — 使用 RcloneView 同步和备份文件

> Put.io 是一项云端种子下载服务，可将下载的内容直接存储在云端 —— RcloneView 让您轻松浏览、同步和备份这些文件。

Put.io 允许您将种子文件、直接链接和高级文件托管内容直接下载到云存储中，这使其成为媒体爱好者的热门选择。一旦文件进入 Put.io，您就需要一种可靠的方式来移动它们 —— 移动到本地驱动器、另一个云端，或个人存档中。RcloneView 使用 OAuth 浏览器登录连接到 Put.io，并为您提供一个完整的 GUI 来管理传输，无需接触命令行。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 将 Put.io 连接到 RcloneView

打开 RcloneView 并导航到 **远程管理器**。点击 **新建远程**，滚动浏览提供商列表，然后选择 **Put.io**。RcloneView 会自动打开您的浏览器进行 OAuth 身份验证 —— 登录您的 Put.io 账户并授予访问权限。无需手动复制 API 密钥；OAuth 流程会处理一切。

授权完成后，该远程会出现在您的远程管理器中。点击 **打开** 以启动文件浏览器并浏览您的 Put.io 存储。您将看到已保存的文件、按种子或下载任务组织的文件夹，以及您手动创建的任何目录。

<img src="/support/images/en/blog/new-remote.png" alt="Adding a new Put.io remote in RcloneView" class="img-large img-center" />

## 浏览和管理 Put.io 文件

RcloneView 文件浏览器以熟悉的树形和列表视图显示您的 Put.io 内容。您可以浏览文件夹、选择多个文件，并直接从面板发起传输。如果您拥有大型媒体库 —— 电影、电视剧、音频文件 —— 缩略图视图会提供图像网格，帮助您快速识别内容。

要在 Put.io 和另一个云端（例如 Google Drive 或 Backblaze B2）之间复制或移动文件，请打开指向目标远程的第二个面板。在 Put.io 面板中选择文件，右键单击，然后选择 **复制** 或 **移动**。在执行云到云操作时，RcloneView 会直接处理传输，无需先下载到本地计算机。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-to-cloud transfer from Put.io to another provider" class="img-large img-center" />

## 为 Put.io 设置同步任务

对于从 Put.io 到长期存储的定期备份或单向同步，**任务** 功能比手动传输更可靠。转到 **任务**，点击 **新建任务**，然后选择您的 Put.io 远程作为源。将目标设置为任何其他已配置的远程 —— Backblaze B2 是经济实惠的媒体存档的常见选择。

在任务配置步骤中，您可以启用 **模拟运行** 以在提交之前预览将要传输的文件。当您的 Put.io 库很大，而您想要确认同步范围时，此功能非常有用。检查完毕后，禁用模拟运行并运行任务。RcloneView 会在 **任务历史** 选项卡中记录每次传输的文件数量、速度和状态。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a Put.io sync job in RcloneView" class="img-large img-center" />

## 使用场景：媒体内容工作流程

Put.io 用户通常有几种使用模式：将下载的媒体归档到冷存储、将内容镜像到家庭服务器，或同步到 Google Drive 以便通过第三方播放器进行流式播放。RcloneView 涵盖了所有这些场景。您可以为不同的 Put.io 子目录创建单独的任务 —— 一个任务用于电影，另一个用于电视剧 —— 并使用 PLUS 许可证独立安排它们的计划。

当您不确定哪些内容已经复制过时，**文件夹比较** 功能非常方便。并排打开 Put.io 文件夹和目标文件夹，RcloneView 会突出显示差异，这样您只需传输缺失的内容。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job History showing Put.io transfer logs in RcloneView" class="img-large img-center" />

## 快速入门

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 打开 **远程管理器**，点击 **新建远程**，然后选择 **Put.io**。
3. 完成 OAuth 浏览器登录以授权访问。
4. 在文件浏览器中打开 Put.io 远程，并配置到您首选目标的同步任务。

RcloneView 将 Put.io 从被动的下载存储库转变为您云存储工作流程中的一个主动组成部分。

---

**相关指南：**

- [使用 RcloneView 将 pCloud 备份到 AWS S3](https://rcloneview.com/support/blog/backup-pcloud-to-aws-s3-rcloneview)
- [使用 RcloneView 进行云到云迁移](https://rcloneview.com/support/blog/cloud-to-cloud-migration-rcloneview)
- [任务历史和传输日志监控](https://rcloneview.com/support/blog/job-history-transfer-logs-monitoring-rcloneview)

<CloudSupportGrid />
