---
slug: sync-dropbox-to-s3-backup-rcloneview
title: "将 Dropbox 同步到 AWS S3 进行备份 — 使用 RcloneView 实现自动化的云到云保护"
authors:
  - tayson
description: "Dropbox 非常适合协作，但它并不是备份。了解如何使用 RcloneView 将 Dropbox 文件自动同步到 AWS S3，实现经济实惠且冗余的云备份。"
keywords:
  - dropbox to s3 backup
  - sync dropbox aws
  - dropbox backup s3
  - dropbox cloud to cloud backup
  - dropbox offsite backup
  - dropbox s3 sync tool
  - dropbox redundant backup
  - dropbox aws transfer
  - automated dropbox backup
  - dropbox data protection
tags:
  - dropbox
  - s3
  - aws-s3
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 将 Dropbox 同步到 AWS S3 进行备份 — 使用 RcloneView 实现自动化的云到云保护

> Dropbox 会同步你的文件，但不会备份它们。如果有人删除了一个共享文件夹，Dropbox 会忠实地将这个删除操作同步到所有地方。而 S3 上的独立备份正好能防止这种情况。

许多人把同步和备份混为一谈。Dropbox 是一种同步服务——更改会传播到所有已连接的设备，包括删除和覆盖操作。真正的备份是一个独立的副本，不会随着源文件的变化而变化。AWS S3 非常适合这一用途：持久、支持版本控制且经济实惠。RcloneView 可以自动化实现 Dropbox 到 S3 的备份流程。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 为什么 Dropbox 需要备份

- **意外删除** — Dropbox 会传播删除操作。S3 备份能保留这些文件。
- **勒索软件** — 被加密的文件会同步到 Dropbox。S3 版本控制让你能够恢复到加密前的版本。
- **账户被盗** — 如果有人获得访问权限并删除数据，你的 S3 备份不会受到影响。
- **Dropbox 服务中断** — 虽然罕见但仍有可能发生。S3 备份能确保你始终可以访问自己的文件。

## 设置备份

<img src="/support/images/en/blog/new-remote.png" alt="Connect Dropbox and S3" class="img-large img-center" />

在 RcloneView 中添加你的 Dropbox 和 AWS S3 账户作为远程。

## 创建备份任务

在一个窗格中打开 Dropbox，在另一个窗格中打开 S3。创建一个复制（Copy）任务（而不是同步任务——因为你不希望 Dropbox 文件被删除时 S3 上的文件也被删除）：

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Dropbox to S3 backup" class="img-large img-center" />

## 安排夜间备份

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule Dropbox backup" class="img-large img-center" />

每晚运行一次备份。每次运行只传输新增和更改的文件，将带宽和成本降至最低。

## 验证备份完整性

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify Dropbox backup" class="img-large img-center" />

定期比较 Dropbox 和 S3，以确保你的备份完整且是最新的。

## 成本优化

| S3 存储类别 | 最适合场景 | 成本 |
|-----------------|---------|------|
| S3 Standard | 需要频繁访问备份 | 约 $23/TB/月 |
| S3 Infrequent Access | 每月需要一次恢复 | 约 $12.5/TB/月 |
| S3 Glacier Instant | 极少恢复，但需要时能快速取用 | 约 $4/TB/月 |
| S3 Glacier Deep Archive | 仅用于归档 | 约 $1/TB/月 |

对于大多数 Dropbox 备份场景，S3 Infrequent Access 或 Glacier Instant 能在成本和便利性之间取得最佳平衡。

## 快速开始

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 添加 **Dropbox** 和 **AWS S3** 远程。
3. **创建复制（Copy）任务**（而不是同步任务）。
4. **安排夜间运行**。
5. 使用文件夹比较功能**定期验证**。

同步让文件保持最新，备份让文件保持安全。

---

**相关指南：**

- [将 Dropbox 备份到 AWS S3](https://rcloneview.com/support/blog/backup-dropbox-to-aws-s3-rcloneview)
- [将 Dropbox 备份到 Backblaze B2](https://rcloneview.com/support/blog/backup-dropbox-to-backblaze-b2-affordable-storage-rcloneview)
- [同步、复制与移动的区别](https://rcloneview.com/support/blog/sync-copy-move-difference-explained-rcloneview)

<CloudSupportGrid />
