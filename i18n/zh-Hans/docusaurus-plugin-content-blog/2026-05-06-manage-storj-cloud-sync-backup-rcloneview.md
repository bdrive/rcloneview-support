---
slug: manage-storj-cloud-sync-backup-rcloneview
title: "管理 Storj 存储 — 使用 RcloneView 同步和备份文件"
authors:
  - tayson
description: "了解如何使用 RcloneView 管理 Storj 去中心化云存储。在 Storj 上同步、备份和传输文件 — 通过简单的图形界面，无需命令行。"
keywords:
  - Storj 云存储管理
  - RcloneView Storj 同步
  - Storj 备份文件
  - 去中心化云存储 GUI
  - Storj 文件传输
  - Storj rclone GUI
  - Storj 同步备份工具
  - 使用 RcloneView 管理 Storj
  - Storj 桌面客户端
  - Storj S3 兼容 GUI
tags:
  - RcloneView
  - storj
  - cloud-storage
  - cloud-sync
  - backup
  - decentralized-storage
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 管理 Storj 存储 — 使用 RcloneView 同步和备份文件

> RcloneView 为您提供功能齐全的图形界面，无需编写任何命令即可同步、备份和管理您的 Storj 去中心化云存储。

Storj 是一个去中心化对象存储平台，可将加密的文件碎片分布在全球节点网络中。管理敏感数据的团队 — 医疗记录、金融档案或创意资产 — 之所以选择 Storj，是因为它内置的加密和弹性能力。借助 RcloneView，您可以连接 Storj 存储桶，并与所有其他云账户一起以可视化方式进行管理。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 将 Storj 连接到 RcloneView

RcloneView 通过两种连接方式支持 Storj：原生 Storj 后端和 S3 兼容端点。对大多数用户来说，S3 兼容路径最为简单 — 您在 Storj 控制台中生成 S3 凭据（Access Key ID、Secret Access Key 和区域端点 URL），然后在 RcloneView 中通过选择 Amazon S3 作为提供商类型并输入这些凭据来添加新的远程。

原生 Storj 后端需要 Access Grant 令牌，您可以在 Storj 网页界面中创建。添加新的远程，选择 Storj 作为提供商，然后粘贴您的 Access Grant。这两种方式都只需不到两分钟，RcloneView 会使用加密的本地存储安全保存您的凭据。

<img src="/support/images/en/blog/new-remote.png" alt="Adding a new Storj remote in RcloneView" class="img-large img-center" />

连接完成后，您的 Storj 存储桶会与其他远程一起出现在文件资源管理器中。您可以像使用任何其他云提供商一样浏览文件夹、预览缩略图并管理文件。

## 将文件同步和备份到 Storj

RcloneView 的 4 步同步向导可让您轻松配置到 Storj 的定期备份。选择本地文件夹或云端远程作为源，选择您的 Storj 存储桶或子文件夹作为目标，为任务命名，然后选择同步或复制模式。对于归档 2TB RAW 文件的摄影工作室来说，每晚运行的同步任务可以让 Storj 存储桶保持最新，而无需人工干预。

在高级设置中启用 **checksum**（校验和）选项以验证数据完整性 — Storj 的纠删码存储具有很强的弹性，但通过哈希比较验证上传内容可以提供额外的保障。将重试次数设置为 3（默认值），以妥善处理临时性的网络中断。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a sync job to Storj in RcloneView" class="img-large img-center" />

## 安排自动化 Storj 备份（PLUS）

使用 PLUS 许可证，您可以通过 crontab 风格的调度器安排 Storj 备份任务。您可以设置每天凌晨 2 点的备份、每周归档运行，或任何自定义的时间间隔。RcloneView 的 **Simulate schedule**（模拟调度）功能可以在您提交之前预览下一次执行时间。

任务历史记录会追踪每次运行的信息 — 开始时间、持续时长、传输字节数和完成状态 — 因此您可以清楚地审计每一个发送到 Storj 的文件。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling automated Storj backup jobs in RcloneView" class="img-large img-center" />

## 在 Storj 与其他云之间传输

作为已存储在 Google Drive 或 Dropbox 中的数据的异地副本，Storj 表现出色。RcloneView 的双面板资源管理器允许您在远程之间直接拖放文件。对于大规模迁移，可使用带有 **dry run**（模拟运行）模式的同步任务，在提交之前预览将要传输的内容。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-to-cloud transfer from another remote to Storj" class="img-large img-center" />

## 快速上手

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 转到“远程”选项卡 > “新建远程”，选择 Storj 或 S3 兼容提供商。
3. 输入您的 Storj Access Grant 或 S3 兼容凭据并保存。
4. 打开文件资源管理器以浏览您的 Storj 存储桶并创建同步任务。

Storj 的去中心化架构使其成为出色的异地备份目标，而 RcloneView 让管理它变得和任何主流云提供商一样简单。

---

**相关指南：**

- [管理 Amazon S3 存储 — 使用 RcloneView 同步和备份文件](https://rcloneview.com/support/blog/manage-amazon-s3-cloud-sync-backup-rcloneview)
- [将 Dropbox 迁移到 Storj — 使用 RcloneView 传输文件](https://rcloneview.com/support/blog/migrate-dropbox-to-storj-rcloneview)
- [使用 RcloneView 在 Storj 与 Google Drive 之间传输](https://rcloneview.com/support/blog/transfer-storj-and-google-drive-with-rcloneview)

<CloudSupportGrid />
