---
slug: manage-hdfs-cloud-sync-backup-rcloneview
title: "管理 HDFS 存储 — 使用 RcloneView 同步和备份文件"
authors:
  - kai
description: "将 Hadoop 分布式文件系统（HDFS）集群连接到 RcloneView，即可跨 90 多个云服务商浏览、同步并备份大数据存储。"
keywords:
  - hdfs rcloneview
  - manage hdfs cloud storage
  - hadoop distributed file system gui
  - hdfs to cloud migration
  - hdfs cloud backup
  - sync hdfs to cloud storage
  - hdfs rclone gui
  - hybrid data lake cloud sync
  - on-prem hadoop cloud backup
tags:
  - RcloneView
  - self-hosted
  - cloud-storage
  - cloud-sync
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 管理 HDFS 存储 — 使用 RcloneView 同步和备份文件

> Hadoop 集群中保存着多年积累的处理后数据，但要在本地存储和云端之间迁移这些数据，通常意味着要编写脚本或使用命令行工具——而 RcloneView 为 HDFS 提供了一个可视化的操作平台。

Hadoop 分布式文件系统（HDFS）是众多本地大数据管道背后的存储层，但它并没有提供一种便捷的方式，让你在 Hadoop 生态系统之外查看、传输或归档这些数据。RcloneView 将 HDFS 作为基于协议的远程连接方式接入，与 SFTP、FTP 和 WebDAV 一样，因此数据工程师可以在熟悉的文件资源管理器中浏览集群内容，并在不编写 distcp 任务或自定义脚本的情况下，在云存储之间迁移数据集。它在 Windows、macOS 和 Linux 上运行方式完全一致，这在数据团队使用不同操作系统时尤为重要。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 将 HDFS 集群添加为远程

HDFS 属于 RcloneView 中基于协议的存储类别，通过与 SFTP 和 WebDAV 连接相同的“新建远程”向导进行配置。集群添加完成后，会在资源管理器面板中以独立标签页的形式出现，并提供标准的文件夹树、文件列表和缩略图视图，供你浏览分布在集群各个 namenode 上的数据集。右键操作——复制、下载、重命名、获取大小——与在其他远程上的操作完全相同，这意味着即使不熟悉 `hadoop fs` 命令的工程师，也能审查 HDFS 中实际存放的内容。

<img src="/support/images/en/blog/new-remote.png" alt="Adding an HDFS remote in RcloneView's New Remote wizard" class="img-large img-center" />

RcloneView 可以在同一窗口中挂载并同步 90 多个服务商的存储，因此在浏览 HDFS 的同一会话中，还可以在相邻面板打开 Google Drive、S3 存储桶或本地磁盘，方便直接对比。

## 打通本地存储与云对象存储

将 HDFS 连接到 RcloneView 最常见的原因，是将冷数据或已处理的数据从容量有限、成本高昂的集群中迁移出来，转存到更便宜的云存储中进行长期保存。使用“仅修改目标”方向的单向同步任务，可以将 HDFS 输出——处理后的数据集、模型训练产物、日志归档——复制到 S3、Azure Blob 或 Backblaze B2 存储桶中，而不会触碰源数据。同步向导第 3 步中的过滤设置，可以让任务范围限定于特定文件类型，或排除 Hadoop 任务遗留的中间 `_SUCCESS` 文件和临时文件，从而确保目标存储桶中只保留真正值得留存的内容。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Syncing HDFS cluster data to cloud object storage in RcloneView" class="img-large img-center" />

对于大型数据集，在高级设置中调整文件传输数量和多线程传输数量,有助于充分利用集群与目标之间的可用带宽,同时将相等性检查器的数量保持在适中水平,可以避免在比较阶段给 namenode 带来不必要的读取负载。

## 安排定期归档任务

数据管道很少只运行一次。PLUS 许可证用户可以为 HDFS 同步任务附加类似 crontab 的调度计划,使新产生的输出在每次批处理运行后自动镜像到云存储,而无需有人记得手动启动传输。任务历史随后会记录每次执行情况——状态、传输大小、耗时——为团队提供清晰的审计记录,准确显示每个数据集离开集群的时间以及最终落地的位置。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a recurring HDFS to cloud storage sync job in RcloneView" class="img-large img-center" />

## 快速上手

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 使用基于协议的存储选项，将你的 HDFS 集群添加为新的远程。
3. 在资源管理器面板中浏览集群，确认数据集和权限是否正确。
4. 设置一个指向归档云目标的单向同步任务，并使用过滤器排除临时文件。

将 HDFS 与你的云端远程纳入同一窗口管理，可以把原本依赖脚本、容易出错的导出流程，转变为可监控、可调度的重复任务。

---

**相关指南：**

- [管理 MinIO 存储 — 在 RcloneView 中实现自托管云同步](https://rcloneview.com/support/blog/manage-minio-self-hosted-cloud-sync-rcloneview)
- [面向数据科学家的云存储 — 使用 RcloneView 简化数据集管理](https://rcloneview.com/support/blog/cloud-storage-data-scientists-rcloneview)
- [AI 训练数据集管道 — 使用 RcloneView 构建与同步](https://rcloneview.com/support/blog/ai-training-dataset-pipeline-rcloneview)

<CloudSupportGrid />
