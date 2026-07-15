---
slug: box-to-s3-glacier-archive-rcloneview
title: "Box 到 S3 + Glacier：使用 RcloneView 构建分层归档"
authors:
  - tayson
description: "使用 RcloneView 将 Box 资料库迁移到 Amazon S3 热存储和 Glacier Deep Archive 进行长期保留，并支持对比、校验和验证以及计划同步。"
keywords:
  - rcloneview
  - box migration
  - s3
  - glacier
  - cloud archive
  - checksum verification
  - scheduler
  - multi cloud
  - rclone
  - tiered storage
  - cloud backup
  - compare sync
  - mount
  - job history
  - visual dashboard
  - gui
  - aws
  - vault
  - compliance
  - long term retention
tags:
  - RcloneView
  - cloud-storage
  - cloud-migration
  - backup
  - s3
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Box 到 S3 + Glacier：使用 RcloneView 构建分层归档

> 将 Box 资料库迁移到 Amazon S3 以实现活跃访问，并迁移到 Glacier 以实现长期保留，配合可视化对比、校验和验证的同步以及计划任务——无需 CLI 参数。

Box 非常适合协作，但长期保留和大型媒体资料库可能会带来高昂成本。RcloneView 让你可以将 Box 文件夹镜像到 S3 存储桶以实现热访问，然后按计划将老化数据推送到 Glacier 存储类别。你将获得并排对比、任务日志记录以及无需人工看护脚本的重试功能。

<!-- truncate -->

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />


## 我们要解决的问题

- 通过将冷数据分层到 Glacier 来降低 Box 存储支出。
- 为活跃团队保留始终可用的 S3 副本，同时由 Glacier 保存历史数据。
- 通过校验和验证的任务和审计跟踪来保持数据完整性。

## 快速连接 Box 和 S3 远程

- 通过 `+ New Remote` 添加 Box 和 S3 远程。OAuth 与密钥设置：[add-oath-online-login](/howto/remote-storage-connection-settings/add-oath-online-login)、[s3](/howto/remote-storage-connection-settings/s3)。  

<img src="/support/images/en/blog/new-remote.png" alt="Open multiple cloud remotes in RcloneView" class="img-large img-center" />. 

- 在首次同步前，使用**远程资源管理器**检查文件夹深度和命名是否合理。  

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="cloud to cloud transfer default" class="img-large img-center" />. 

- 可选：将任一远程本地挂载以便快速抽查：[mount-cloud-storage-as-a-local-drive](/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive)。  

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="Configure a mount from Mount Manager" class="img-large img-center" />. 

## 迁移前先对比

- 在 Box 和目标 S3 前缀之间运行**对比**，在正式执行前查看缺失或较新的文件：[compare-folder-contents](/howto/rcloneview-basic/compare-folder-contents)。
- 按扩展名（例如 PDF、CAD、媒体文件）筛选以缩小审查范围。  

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare shared folder and My Drive contents" class="img-large img-center" />. 


## 构建双层管道（S3 热存储，Glacier 冷存储）

- 第一步：为活跃层创建从 Box 到 S3 的**复制**任务：[create-sync-jobs](/howto/rcloneview-basic/create-sync-jobs)。出于安全考虑先使用复制；验证结果后再切换到同步。  

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running an encrypted sync job in RcloneView" class="img-large img-center" />. 

- 第二步：在存储桶上应用 S3 生命周期策略，使对象在 N 天后转换到 Glacier 存储类别。让 RcloneView 任务继续针对热前缀（例如 `s3:box-archive/hot/`）。
- 第三步：对于深度归档，安排一个次级任务，将极少使用的文件夹直接推送到以 Glacier 为主的前缀（例如 `s3:box-archive/cold/`）。  

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="create job schedule" class="img-large img-center" />. 


RcloneView 为你提供了一种可视化、可重复的方式来退出 Box、削减存储成本，并在 AWS 中保持合规归档。先对比，再安全复制，其余交给计划任务——从容安心。


<CloudSupportGrid />
