---
slug: one-to-many-sync-multiple-destinations-rcloneview
title: "1:N 同步 — 在 RcloneView 中将一个源同步到多个目标"
authors:
  - tayson
description: "使用 RcloneView 的 1:N 同步功能，将一个源文件夹同时镜像到多个云存储目标。在一个任务中同时备份到 S3、Google Drive 和 Backblaze B2。"
keywords:
  - 1:N sync RcloneView
  - sync one source multiple destinations
  - multi-destination backup
  - cloud backup multiple clouds
  - RcloneView 1 to N sync
  - cloud replication multiple providers
  - mirror to multiple clouds
  - RcloneView sync feature
  - multi-cloud backup job
  - one to many cloud sync
tags:
  - feature
  - automation
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 1:N 同步 — 在 RcloneView 中将一个源同步到多个目标

> RcloneView 的 1:N 同步功能让你可以在一个任务中将单个源文件夹镜像到多个云存储目标 — 同时备份到 Google Drive、Amazon S3 和 Backblaze B2。

数据可靠性的一个核心原则是 3-2-1 备份规则：三份数据副本，保存在两种不同介质上，其中一份存放在异地。云存储让这一点无需实体硬盘即可实现 — 但手动为每个提供商单独运行同步任务既重复又容易出错。RcloneView 的 1:N 同步功能允许你配置一个源文件夹，使其同时同步到多个云存储目标，这样一次任务运行就能覆盖你所有的备份目标。此功能在 FREE 许可证下即可使用。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 什么是 1:N 同步？

1:N 同步（一对多同步）是指在一次任务执行中，将一个源镜像到 N 个目标远程。当你运行任务时，RcloneView 会将源同步到每一个已配置的目标 — 添加缺失的文件、更新已更改的文件，并可选择删除已从源中删除的文件。

这与依次运行多个独立同步任务不同。使用 1:N 同步时，所有目标都在同一执行窗口内被写入，每个目标的进度都会在“Transferring”标签页中跟踪。任务历史记录会在运行摘要中记录每个目标的结果。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="1:N sync job sending source to multiple cloud destinations in RcloneView" class="img-large img-center" />

## 配置 1:N 同步任务

设置多目标同步任务使用与常规任务相同的 4 步同步向导。区别在于第 1 步：在选择好源远程和文件夹后，点击“Add Destination”按钮以添加更多目标远程。你可以根据需要添加任意数量的目标 — 例如 Google Drive、Amazon S3 和 Backblaze B2。

**生产环境备份策略的示例工作流：**

1. **源：** 本地 NAS 文件夹 `/data/projects`
2. **目标 1：** Google Drive `/Backups/Projects`
3. **目标 2：** Amazon S3 存储桶 `my-company-backup/projects`
4. **目标 3：** Backblaze B2 存储桶 `projects-archive`

每个目标都会获得源内容的一份完全相同的副本。任务中的同步任务名称、过滤规则和高级设置会统一应用于所有目标。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Configuring 1:N sync with multiple cloud destinations in RcloneView" class="img-large img-center" />

## 实际使用场景

**实现 3-2-1 备份：** 配置本地源 → Google Drive + Amazon S3 + Backblaze B2。一次任务运行，在不同云提供商中生成三份副本。

**内容分发：** 视频制作团队将最终导出文件从其编辑服务器同时同步到 Dropbox（供客户审阅）、Google Drive（用于内部存档）和 CDN 源存储桶。

**区域复制：** 某组织出于延迟和可用性考虑，将中央文档仓库同步到不同地理区域的区域云存储桶中。

**跨提供商冗余：** 将主 OneDrive 文件夹同步到 Backblaze B2 和 Cloudflare R2，这样即使某个提供商出现故障，另一个仍保留最新副本。

## 定时运行 1:N 同步任务

对于需要定期运行的 1:N 任务，定时同步（PLUS 许可证）与单目标任务一样适用于多目标任务。在向导的第 4 步配置类似 crontab 的计划，RcloneView 会在每个预定的时间间隔运行完整的多目标同步。任务历史记录会记录每次运行的结果，让你了解所有目标是否都成功接收了更新。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling 1:N multi-destination sync in RcloneView" class="img-large img-center" />

## 快速上手

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 在“Remote”标签页中添加所有目标云提供商作为远程。
3. 打开同步向导，在第 1 步使用“Add Destination”为你的源配置多个目标。
4. 可选择添加计划（PLUS 许可证），以自动运行多目标同步。

1:N 同步是 RcloneView 中最能节省时间的功能之一 — 配置一次，处处保护，任务每次运行都生效。

---

**相关指南：**

- [使用 RcloneView 自动执行每日云备份](https://rcloneview.com/support/blog/automate-daily-cloud-backups-with-rcloneview)
- [使用 RcloneView 制定多云备份策略](https://rcloneview.com/support/blog/multi-cloud-backup-strategy-rcloneview)
- [使用 RcloneView 将 NAS 备份到多个云](https://rcloneview.com/support/blog/backup-nas-to-multiple-clouds-rcloneview)

<CloudSupportGrid />
