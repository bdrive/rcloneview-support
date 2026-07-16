---
slug: sync-box-to-google-drive-rcloneview
title: "将 Box 同步到 Google Drive —— 使用 RcloneView 进行云备份"
authors:
  - tayson
description: "使用 RcloneView 将 Box 同步到 Google Drive —— 通过简单的云到云 GUI 传输文件、自动化备份，并保持两个平台的数据同步更新。"
keywords:
  - Box to Google Drive sync
  - Box to Google Drive migration
  - cloud sync tool
  - RcloneView Box
  - Box backup
  - Google Drive archive
  - cloud-to-cloud sync
  - enterprise cloud transfer
  - Box Google Drive workflow
  - Box content migration
tags:
  - RcloneView
  - box
  - google-drive
  - cloud-to-cloud
  - sync
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 将 Box 同步到 Google Drive —— 使用 RcloneView 进行云备份

> Box 负责企业合规控制和安全共享，而 Google Drive 则是协作编辑的核心平台 —— RcloneView 可直接在两个平台之间同步内容，无需借助任何本地磁盘中转。

Box 因其合规控制和安全文件共享功能，在企业环境中被广泛使用，而 Google Drive 则支撑着实时协作工作流。当团队同时使用这两个平台，或正在从 Box 迁移出来时，保持内容同步——或在平台之间迁移文件——就需要一个可靠的云到云工具。RcloneView 可直接连接 Box 和 Google Drive，无需下载到本地磁盘。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 连接 Box 和 Google Drive

Box 和 Google Drive 在 RcloneView 中都使用 OAuth 浏览器身份验证。前往 **Remote tab > New Remote**，选择 **Box**，然后完成浏览器登录。对 **Google Drive** 重复相同的流程。两个远程都会作为标签页出现在资源管理面板中，随时可供浏览。

<img src="/support/images/en/blog/new-remote.png" alt="Adding Box and Google Drive remotes in RcloneView" class="img-large img-center" />

对于 **Box for Business** 账户，请在创建远程时将 `box_sub_type` 设置为 `enterprise`。这可确保 RcloneView 连接到组织的 Box 账户，而不是个人存储空间，从而能够访问企业所拥有的共享文件夹和内容。

## 运行同步任务

在 **Job Manager** 中，创建一个新的同步任务：源为你的 Box 文件夹（或特定子文件夹，例如 `/Projects/2026`），目标为对应的 Google Drive 文件夹。RcloneView 的同步默认为单向——它会将源镜像到目标，而不会修改源内容。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Box to Google Drive sync job in RcloneView" class="img-large img-center" />

对于将已完结案件文件从 Box 同步到 Google Drive 进行长期归档的法务团队来说，按文件年龄筛选（Job settings Step 3 中的 Max File Age）可将同步范围限制为仅最近修改过的文件——从而保持传输量可控。**Dry Run** 预览功能可在任何数据被实际改动之前，准确确认哪些文件将被移动。

## 自动化与监控

拥有 PLUS 许可证后，为 Box 到 Google Drive 的同步设置计划任务，可确保两个平台始终保持最新状态。基于 cron 的计划任务——例如每周日午夜——可在无需人工干预的情况下自动运行同步。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling Box to Google Drive sync in RcloneView" class="img-large img-center" />

RcloneView 的 **1:N 同步**功能甚至可以让你将一个 Box 文件夹同时同步到多个 Google Drive 目标——这对于将同一内容同时备份到共享的 Team Drive 和个人归档文件夹非常有用，只需一个任务即可完成。**Job History** 会跟踪每次运行的详细统计信息：传输的文件数、耗时、速度和状态。

## 快速上手

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 添加 **Box** 远程（OAuth）和 **Google Drive** 远程（OAuth）。
3. 打开 **Job Manager**，创建一个从你的 Box 文件夹到 Google Drive 的同步任务。
4. 启用计划任务（PLUS）以自动执行定期同步。

通过 RcloneView 将 Box 同步到 Google Drive，可以让你的内容在平台之间可靠地流转，同时无需人工操作即可保持两端井然有序、随时可用。

---

**相关指南：**

- [管理 Box 云存储 —— 使用 RcloneView 进行同步和备份](https://rcloneview.com/support/blog/manage-box-cloud-sync-backup-rcloneview)
- [使用 RcloneView 实现 Box 到 Dropbox 的零停机迁移](https://rcloneview.com/support/blog/zero-downtime-box-to-dropbox-rcloneview)
- [使用 RcloneView 将 Box 迁移到 SharePoint 和 OneDrive](https://rcloneview.com/support/blog/migrate-box-to-sharepoint-onedrive-rcloneview)

<CloudSupportGrid />
