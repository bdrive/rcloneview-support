---
slug: manage-idrive-e2-cloud-sync-backup-rcloneview
title: "管理 IDrive E2 存储——使用 RcloneView 同步和备份文件"
authors:
  - tayson
description: "将 IDrive E2 连接到 RcloneView，通过图形界面管理你的 S3 兼容存储桶。轻松将 IDrive E2 同步到 Google Drive、Amazon S3 及其他云服务。"
keywords:
  - IDrive E2
  - IDrive E2 sync
  - IDrive E2 backup
  - IDrive E2 RcloneView
  - IDrive E2 S3 compatible
  - IDrive E2 cloud management
  - IDrive E2 to S3
  - IDrive E2 to Google Drive
  - S3-compatible storage GUI
  - cloud storage sync
tags:
  - RcloneView
  - idrive-e2
  - s3-compatible
  - cloud-storage
  - backup
  - cloud-sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 管理 IDrive E2 存储——使用 RcloneView 同步和备份文件

> 将 IDrive E2 添加到 RcloneView，与 Google Drive、Amazon S3、Backblaze B2 以及其他 90 多种云存储服务一起管理你的 S3 兼容存储桶。

IDrive E2 是一种经济实惠的 S3 兼容对象存储服务，深受希望在保持 API 兼容性的同时寻找 Amazon S3 廉价替代方案的开发者和企业欢迎。RcloneView 对 S3 兼容服务商的支持意味着你可以将 IDrive E2 存储桶连接到图形界面，无需编写命令行脚本即可完成同步、备份和跨云迁移。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 在 RcloneView 中设置 IDrive E2

IDrive E2 使用标准的 S3 兼容凭证：Access Key ID、Secret Access Key，以及与所选区域绑定的终端节点 URL。你可以从 IDrive E2 账户后台生成这些凭证。获取凭证后，打开 RcloneView，进入“远程”标签页，点击“新建远程”。选择 Amazon S3 作为服务商类型，并使用你的 IDrive E2 终端节点 URL 和凭证进行配置。

保存后，你的 IDrive E2 远程将出现在文件浏览器中。你可以直接浏览存储桶和对象，查看文件大小和修改时间戳，并使用右键操作进行复制、移动、删除或下载文件。面包屑路径栏会显示你在存储桶中的当前位置，并在你深入文件夹结构时提供自动补全建议。

<img src="/support/images/en/blog/new-remote.png" alt="Adding IDrive E2 as a remote in RcloneView" class="img-large img-center" />

## 将 IDrive E2 同步到其他云

将 IDrive E2 用作主要备份目标的组织通常希望将关键存储桶复制到第二个服务商，以实现地理冗余或服务商故障切换。RcloneView 让这一切变得简单：创建一个以 IDrive E2 存储桶为源、以 Amazon S3、Cloudflare R2 或 Google Drive 为目标的同步任务。

四步同步向导会处理相关配置：存储选择、高级传输设置（并发传输数、校验和验证）、过滤规则（排除大文件、特定扩展名）以及可选的计划任务。启用校验和验证可确认每个对象都完整传输——这对于存储在 IDrive E2 中的二进制归档文件和数据库转储尤为重要。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Syncing IDrive E2 bucket to Amazon S3 with RcloneView" class="img-large img-center" />

计划同步（PLUS 许可证）可在指定的时间间隔自动运行 IDrive E2 复制任务。任务历史记录会记录每次运行的开始时间、耗时、传输文件数量和最终状态——让你无需维护外部脚本或 cron 任务即可获得持久的审计记录。

## 监控活动中的传输

在运行大型 IDrive E2 同步任务时，RcloneView 底部的“传输中”标签页会显示实时进度：当前正在传输的文件、累计数量以及整体同步状态。如有需要，你可以直接在此视图中取消正在运行的任务，“日志”标签页会记录带时间戳的条目，便于排查出现的任何错误。

对于高负载工作场景，在同步向导的“高级设置”步骤中调整“文件传输数量”可以控制并发传输的对象数量。多线程传输设置（默认值：4）用于处理较大对象的分块上传。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitoring IDrive E2 sync progress in RcloneView" class="img-large img-center" />

## 快速上手

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 在你的 IDrive 账户后台生成 IDrive E2 的 Access Key ID 和 Secret Access Key。
3. 在 RcloneView 中使用你的 IDrive E2 终端节点和凭证添加一个新的 S3 兼容远程。
4. 创建一个同步任务，按固定计划将 IDrive E2 存储桶备份到你的第二存储服务。

有了 RcloneView，你的 IDrive E2 存储桶就能像任何其他云存储一样易于管理——在文件浏览器中可见，可通过同步任务配置，并可通过任务历史进行审计。

---

**相关指南：**

- [使用 RcloneView 将 IDrive E2 与 Amazon S3 和 Google Drive 同步](https://rcloneview.com/support/blog/sync-idrive-e2-s3-google-drive-rcloneview)
- [使用 RcloneView 管理 Cloudflare R2 云同步](https://rcloneview.com/support/blog/manage-cloudflare-r2-cloud-sync-rcloneview)
- [使用 RcloneView 集中管理 S3、Wasabi 和 Cloudflare R2 存储](https://rcloneview.com/support/blog/centralize-s3-wasabi-r2-with-rcloneview)

<CloudSupportGrid />
