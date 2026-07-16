---
slug: manage-wasabi-cloud-sync-backup-rcloneview
title: "管理 Wasabi 存储 — 使用 RcloneView 同步和备份文件"
authors:
  - tayson
description: "使用 RcloneView 管理 Wasabi 热云存储。同步兼容 S3 的存储桶，安排备份计划，并以零出口流量费用传输数据，全程通过可视化 GUI 完成。"
keywords:
  - wasabi cloud sync
  - wasabi backup rcloneview
  - wasabi s3 compatible
  - wasabi storage manager
  - wasabi rclone gui
  - wasabi hot storage
  - wasabi zero egress
  - wasabi bucket management
  - wasabi cloud transfer
  - wasabi multi-cloud backup
tags:
  - wasabi
  - s3-compatible
  - object-storage
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 管理 Wasabi 存储 — 使用 RcloneView 同步和备份文件

> Wasabi 提供兼容 S3、零出口流量费用的热存储，而 RcloneView 让管理这些存储桶变得像拖放文件一样简单。

Wasabi 凭借透明的定价模式在对象存储市场中占据了一席之地：每 TB 每月 7.99 美元，不收取出口流量、API 调用或数据检索费用。与那些对频繁访问进行惩罚的冷存储层不同，每个 Wasabi 存储桶都是热存储——这意味着你的文件可以随时访问，无需等待检索延迟。RcloneView 为 Wasabi 提供了完整的图形界面，让你可以跨所有 Wasabi 区域管理存储桶、与其他云进行同步，并自动化备份计划，而无需编写脚本。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 在 RcloneView 中连接 Wasabi

要添加 Wasabi，请打开远程管理器，选择 **S3-compatible** 作为提供商类型，然后从供应商列表中选择 **Wasabi**。输入你的 Access Key 和 Secret Key，并选择合适的区域端点。Wasabi 在 us-east-1（Ashburn）、us-east-2（Manassas）、us-west-1（Hillsboro）、us-central-1（Dallas）、eu-central-1（Amsterdam）、eu-central-2（Frankfurt）、eu-west-1（London）、eu-west-2（Paris）以及 ap-northeast-1（Tokyo）等多地设有数据中心。

选择正确的区域至关重要。Wasabi 强制执行最低 90 天存储时长收费——如果你在 90 天前删除文件，仍会按满 90 天计费。选择靠近你主要数据源的区域可以降低上传和同步的延迟，这对于大型的重复性任务尤为重要。

<img src="/support/images/en/blog/new-remote.png" alt="Adding a Wasabi remote in RcloneView Remote Manager" class="img-large img-center" />

## 拖放式文件管理

连接完成后，Wasabi 存储桶会像其他远程一样出现在双栏浏览器中。你可以浏览文件夹层级、预览文件并查看元数据。将文件从本地驱动器或另一个云远程拖放到 Wasabi 面板上会立即启动传输。

RcloneView 的多线程引擎与 Wasabi 的基础设施十分契合。Wasabi 支持高吞吐量上传，RcloneView 允许你配置并行传输数和分块大小，以最大化带宽利用率。对于数 TB 级的数据集，你可以实现持续的高吞吐量，跑满千兆网络连接。

实时传输监控器会显示每个文件的进度、速度和预计剩余时间。如果传输遇到临时错误——例如网络抖动或 API 返回的 503 错误——RcloneView 会按照可配置的退避间隔自动重试。

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="Dragging and dropping files to Wasabi storage in RcloneView" class="img-large img-center" />

## 自动化备份与跨云同步

Wasabi 的零出口流量定价使其成为多云备份策略的理想枢纽。你可以从 Wasabi 拉取数据到 Google Drive、AWS S3 或本地 NAS，而无需担心下载费用。RcloneView 的任务调度器可让你按 cron 计划自动执行这些传输。

一种常见模式是将 Wasabi 用作中心备份仓库：安排从 Google Drive 和 Dropbox 到 Wasabi 的每晚同步，然后每周从 Wasabi 向 Backblaze B2 等次级提供商执行一次复制，以实现地理位置上的多样性。RcloneView 的任务链功能让你可以定义这些工作流并在单一仪表盘中进行监控。

Wasabi 还支持 Object Lock，用于实现不可变备份。结合版本控制功能，你可以创建一次写入多次读取（WORM）的合规存储桶，满足数据保留方面的监管要求。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling automated backups to Wasabi storage in RcloneView" class="img-large img-center" />

## 监控传输性能

RcloneView 的实时监控面板可让你精细掌握当前活跃的 Wasabi 传输情况。你可以查看总体吞吐量、单个文件的进度以及已完成操作的滚动日志。任务历史面板保留了每一次历史传输的记录，便于审计备份完整性或诊断性能问题。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Real-time monitoring of Wasabi file transfers in RcloneView" class="img-large img-center" />

## 快速上手

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 在 Wasabi 控制台中创建一个 Access Key，并在 RcloneView 中将其添加为 S3-compatible 远程。
3. 浏览你的 Wasabi 存储桶，并从本地存储或其他云远程拖放文件。
4. 设置一个定时同步任务，自动完成到 Wasabi 的每晚备份。

Wasabi 可预测的定价消除了出口流量费用的意外支出，而 RcloneView 的可视化界面则免去了在日常操作中记忆 S3 CLI 语法的麻烦。

---

**相关指南：**

- [使用 RcloneView 集中管理 S3、Wasabi 和 R2](https://rcloneview.com/support/blog/centralize-s3-wasabi-r2-with-rcloneview)
- [使用 RcloneView 管理 IDrive e2 S3 云备份](https://rcloneview.com/support/blog/manage-idrive-e2-s3-cloud-backup-rcloneview)
- [使用 RcloneView 管理 Storj 去中心化云同步](https://rcloneview.com/support/blog/manage-storj-decentralized-cloud-sync-rcloneview)

<CloudSupportGrid />
