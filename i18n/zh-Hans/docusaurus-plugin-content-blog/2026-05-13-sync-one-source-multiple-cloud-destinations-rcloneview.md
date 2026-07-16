---
slug: sync-one-source-multiple-cloud-destinations-rcloneview
title: "1:N 同步——使用 RcloneView 将一个源备份到多个云目标"
authors:
  - kai
description: "使用 RcloneView 的 1:N 同步功能，将一个源文件夹同时备份到多个云目标。通过冗余的多云备份保护您的文件。"
keywords:
  - 1 to N sync RcloneView
  - multiple cloud backup destinations
  - sync one source multiple clouds
  - redundant cloud backup RcloneView
  - multi-cloud sync backup
  - backup multiple cloud providers
  - RcloneView multiple destinations
  - parallel cloud backup
  - one source multiple backups RcloneView
  - automated multi-destination sync
tags:
  - RcloneView
  - backup
  - cloud-sync
  - multi-cloud
  - feature
  - automation
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 1:N 同步——使用 RcloneView 将一个源备份到多个云目标

> 一个同步任务，多个目标——RcloneView 可在单次运行中将一个源镜像到您所需的任意数量的云服务商。

大多数备份策略在冗余性上都存在问题：文件只发送到一个目标，形成单点故障。RcloneView 的 1:N 同步功能允许您在一个任务内将单个源文件夹备份到多个云目标——因此您的数据可以同时写入 Google Drive、Backblaze B2 和某个兼容 S3 的服务商，而无需为每个目标分别运行任务。此功能在 FREE 许可下即可使用，并支持您已配置的任意云远程组合。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## RcloneView 中的 1:N 同步是如何工作的

在 RcloneView 的任务管理器中创建同步任务时，四步向导的第 1 步允许您添加多个目标文件夹。选择源和第一个目标后，点击 **Add Destination（添加目标）** 即可添加更多目标。每个目标都是独立同步的，但都由同一个源驱动——也就是说源只被读取一次，写入操作会并行发送到所有目标。这与运行多个独立任务有本质区别：如果分别运行任务，源在两次执行之间发生变化时，每个目标捕获到的快照可能会略有不同。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring 1:N sync with multiple destinations in RcloneView" class="img-large img-center" />

一家数字媒体公司的实际配置可能是这样的：源是存放母版视频文件的本地生产 NAS 文件夹；目标 1 是 Google Drive，用于团队访问；目标 2 是 Backblaze B2，用于长期归档；目标 3 是 Wasabi，作为额外的异地副本。这三个目标在一次任务执行中都会与同一个源状态保持同步。

## 设置多目标同步任务

从 Home 选项卡打开 **Job Manager（任务管理器）**，点击 **Add Job（添加任务）** 创建一个新的同步任务。在第 1 步中，选择您的源（任意已配置的远程或本地文件夹）。选择第一个目标文件夹后，点击 **Add Destination（添加目标）** 插入其他目标——每个目标都可以指向不同的远程和文件夹路径。为任务取一个能体现多目标意图的描述性名称。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a 1:N sync job to multiple cloud destinations in RcloneView" class="img-large img-center" />

在第 2 步中，配置所有目标共用的传输设置：并发传输数量、多线程设置，以及是否启用校验和验证。对于同步到具有不同速率限制的云服务商的 1:N 任务，请将并发传输数量保持在适中水平——对多个目标同时进行激进的并行处理，可能会在限制较严格的服务商上触发限流。第 3 步允许您添加统一应用于所有目标的过滤规则，因此无需为每个目标重复设置排除逻辑。

## 使用 Dry Run 验证任务

在提交一个较大的 1:N 同步任务之前，请使用任务管理器中的 **Dry Run（试运行）** 选项。试运行会展示所有计划中的操作——即将复制到每个目标的文件——但不会进行任何实际更改。对于同步到三个服务商的任务，预览会按目标列出操作，让您确信路径正确、范围符合预期。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Reviewing 1:N sync job history in RcloneView" class="img-large img-center" />

任务执行后，**Job History（任务历史）** 选项卡会记录每次任务运行的开始时间、耗时、传输的总字节数以及最终状态（Completed、Errored、Canceled）。对于有备份验证合规要求的团队而言，此日志无需额外工具即可提供现成的审计记录。

## 安排自动化的多目标备份

使用 PLUS 许可，您可以在第 4 步为 1:N 任务附加类似 cron 的计划，使其按您选择的间隔自动运行。**Simulate schedule（模拟计划）** 按钮可在保存前预览即将执行的时间点。启用后，RcloneView 的系统托盘集成会让任务在后台持续运行，任务完成通知会确认所有目标都已收到最新数据。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling 1:N multi-destination backup in RcloneView" class="img-large img-center" />

## 快速上手

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 通过 **Remote（远程）** > **New Remote（新建远程）** 添加两个或更多云远程。
3. 创建一个 **Sync（同步）** 任务，并在第 1 步中使用 **Add Destination（添加目标）** 添加每个目标服务商和文件夹。
4. 运行 **Dry Run（试运行）** 以验证范围，然后保存并附加计划，实现自动化的多云冗余备份。

借助 1:N 同步，单个 RcloneView 任务即可成为完整的多云备份策略——无需额外脚本，无需额外步骤。

---

**相关指南：**

- [使用 RcloneView 自动化每日云备份](https://rcloneview.com/support/blog/automate-daily-cloud-backups-with-rcloneview)
- [使用 RcloneView 制定多云备份策略](https://rcloneview.com/support/blog/multi-cloud-backup-strategy-rcloneview)
- [任务导出与导入——使用 RcloneView 实现可移植的工作流](https://rcloneview.com/support/blog/job-export-import-portable-workflow-rcloneview)

<CloudSupportGrid />
