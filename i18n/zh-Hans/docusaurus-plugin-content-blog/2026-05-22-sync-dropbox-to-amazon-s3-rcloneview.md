---
slug: sync-dropbox-to-amazon-s3-rcloneview
title: "将 Dropbox 同步到 Amazon S3 —— 使用 RcloneView 进行云备份"
authors:
  - tayson
description: "了解如何使用 RcloneView 将 Dropbox 文件同步和备份到 Amazon S3。设置支持计划、模拟运行预览和传输历史记录的云到云传输。"
keywords:
  - Dropbox 到 Amazon S3
  - Dropbox S3 备份
  - 同步 Dropbox 到 S3
  - RcloneView 云到云
  - Dropbox 备份到对象存储
  - Amazon S3 备份
  - rclone GUI 云迁移
  - 自动化 Dropbox 备份
  - Dropbox S3 同步
  - 云到云文件传输
tags:
  - dropbox
  - amazon-s3
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 将 Dropbox 同步到 Amazon S3 —— 使用 RcloneView 进行云备份

> 将您的 Dropbox 文件镜像到 Amazon S3，以获得持久、独立管理的对象存储 —— 使用 RcloneView 的可视化云到云同步，无需任何命令行操作。

许多团队日常协作依赖 Dropbox，但同时希望在 Amazon S3 中拥有一个用于长期保留、合规归档或降低供应商依赖的辅助备份。RcloneView 让您可以轻松地将文件直接从 Dropbox 同步到 S3 存储桶，而无需将数据通过本地计算机中转，也无需手动编写 rclone 命令。一家拥有 500 GB 项目文件的视频制作公司可以在几分钟内设置一个每晚运行的 Dropbox 到 S3 备份任务，并获得每次运行的完整审计记录。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 将 Dropbox 和 Amazon S3 添加为远程

首先在 RcloneView 中添加这两个服务商。进入 **远程标签页 > 新建远程**，选择 **Dropbox** —— RcloneView 会打开一个浏览器窗口进行 OAuth 身份验证。授权后，您的 Dropbox 账户会立即出现在资源管理器面板中，无需 API 密钥或手动令牌配置。

对于 Amazon S3，添加第二个远程，选择 **Amazon S3**，然后输入您的 **Access Key ID**、**Secret Access Key** 以及目标 **区域代码**（例如 `us-east-1`）。之后两个远程会分别以标签页的形式出现在资源管理器中，方便您在创建任务前浏览各方的文件并确认文件夹结构。右键点击 Dropbox 文件夹即可在提交同步之前查看其大小。

<img src="/support/images/en/blog/new-remote.png" alt="Adding Dropbox and Amazon S3 remotes in RcloneView" class="img-large img-center" />

## 配置云到云同步任务

两个远程都准备就绪后，打开 **主页标签页 > 同步** 启动 4 步同步向导：

1. **配置存储** —— 选择您的 Dropbox 源文件夹（例如 `/Project Files`）以及带密钥前缀的 Amazon S3 目标存储桶（例如 `my-backup-bucket/dropbox-mirror`）。为任务命名清晰，便于在历史记录中查看。
2. **高级设置** —— 设置并发传输数量，以在速度与 API 速率限制之间取得平衡，如果需要在 S3 中进行字节级数据完整性校验，请启用校验和验证。
3. **过滤** —— 排除 `.dropbox` 系统元数据文件、缓存目录，或任何您不需要同步到 S3 的文件类型。预定义的过滤类别（图片、视频、文档）为常见的过滤场景提供了快捷方式。
4. **计划任务（PLUS 许可证）** —— 配置类似 crontab 的计划任务，实现每晚自动运行。计划任务界面可让您在保存前模拟下一次执行时间，以确认时间安排是否正确。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring a Dropbox to Amazon S3 cloud-to-cloud sync job in RcloneView" class="img-large img-center" />

## 首次正式同步前先进行模拟运行

在开始首次正式传输之前 —— 尤其是当您的 S3 存储桶中已有一些数据时 —— 请使用 **模拟运行（Dry Run）** 功能。模拟运行会模拟同步过程，并准确显示哪些文件将被复制、哪些文件（如有）将从目标位置删除，而不会进行任何实际更改。此预览功能可以在错误的源路径或意外删除到达您的 S3 存储桶之前将其捕获。

对模拟运行的结果满意后，在任务管理器中点击 **运行**，即可开始实际同步。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a Dropbox to Amazon S3 sync job in RcloneView Job Manager" class="img-large img-center" />

## 监控传输并查看任务历史

任务运行期间，RcloneView 底部的 **传输中** 标签页会显示实时进度：文件名、传输速度和已移动的总字节数。文件在 Dropbox 和 S3 之间直接传输，不会经过您的本地工作站，因此速度反映的是云端带宽，而非您本地的网络连接速度。

每次同步完成后，**任务历史记录** 标签页会记录开始时间、持续时长、状态（已完成 / 出错 / 已取消）以及传输的总数据量。对于合规性要求较高的工作流程，此日志提供了确认计划备份是否按时且无误运行所需的文档记录。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history log for Dropbox to Amazon S3 backup runs in RcloneView" class="img-large img-center" />

## 快速开始

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 通过 **远程标签页 > 新建远程 > Dropbox** 添加 Dropbox，并通过浏览器 OAuth 流程完成身份验证。
3. 通过 **远程标签页 > 新建远程 > Amazon S3** 添加 Amazon S3，输入您的 Access Key ID、Secret Access Key 和区域。
4. 打开 **主页标签页 > 同步**，选择 Dropbox 作为源、S3 作为目标，运行模拟运行预览，然后保存并设置计划任务以实现自动化的每晚备份。

您的 Dropbox 文件将在 Amazon S3 上拥有一份持久、独立管理的备份 —— 按您配置的计划自动运行，并保留每次传输的完整历史记录。

---

**相关指南：**

- [使用 RcloneView 将 OneDrive 迁移到 Amazon S3](https://rcloneview.com/support/blog/migrate-onedrive-to-amazon-s3-rcloneview)
- [管理 Amazon S3 —— 使用 RcloneView 进行云同步与备份](https://rcloneview.com/support/blog/manage-amazon-s3-cloud-sync-backup-rcloneview)
- [使用 RcloneView 将 Google Drive 增量备份到 Amazon S3](https://rcloneview.com/support/blog/incremental-backup-google-drive-to-amazon-s3)

<CloudSupportGrid />
