---
slug: sync-google-drive-to-backblaze-b2-rcloneview
title: "将 Google Drive 同步到 Backblaze B2 —— 使用 RcloneView 实现经济实惠的云到云备份"
authors:
  - tayson
description: "Google Drive 用于日常工作，Backblaze B2 用于经济实惠的备份。了解如何使用 RcloneView 设置从 Google Drive 到 B2 的自动化云到云备份。"
keywords:
  - google drive to backblaze b2
  - google drive backup b2
  - sync google drive b2
  - google drive cloud backup
  - backblaze b2 backup tool
  - google drive offsite backup
  - google drive b2 sync
  - affordable google drive backup
  - cloud to cloud backup google
  - google drive redundancy
tags:
  - google-drive
  - backblaze-b2
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 将 Google Drive 同步到 Backblaze B2 —— 使用 RcloneView 实现经济实惠的云到云备份

> Google Drive 存储你的工作文件。Backblaze B2 以每月 6 美元/TB 的价格为其提供保护。两者结合，构成了目前最具成本效益的云备份方案之一。

Google Drive 是你日常存放文件的地方。但仅靠 Google Drive 本身并不算备份——意外删除、账户被盗以及同步错误都可能破坏 Google 无法恢复的数据。Backblaze B2 以每月 6 美元/TB 的价格提供了这道安全网：由 RcloneView 自动更新的一份独立副本。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 为什么用 B2 来备份 Google Drive？

| 因素 | Backblaze B2 |
|--------|-------------|
| 存储费用 | 每月 6 美元/TB |
| 下载费用 | 0.01 美元/GB |
| 免费出站流量 | 每月存储量的 3 倍 |
| 持久性 | 99.999999999% |
| API | 兼容 S3 |

B2 是专为备份工作负载而设计的：存储成本低、按需付费，并且兼容 S3，可获得广泛的工具支持。

## 设置备份

<img src="/support/images/en/blog/new-remote.png" alt="Connect Google Drive and B2" class="img-large img-center" />

在 RcloneView 中添加 Google Drive 和 Backblaze B2 作为远程。

## 创建备份任务

在一个面板打开 Google Drive，在另一个面板打开 B2。创建一个复制（Copy）任务：

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Google Drive to B2" class="img-large img-center" />

使用 **复制（Copy）**（而不是同步 Sync），这样从 Google Drive 中删除的文件仍会保留在 B2 中。

## 安排每晚备份

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule nightly backup" class="img-large img-center" />

每次运行只传输新增或有变化的文件。对于典型的 Google Drive 账户，每日备份所占用的带宽极少。

## 验证备份完整性

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify backup" class="img-large img-center" />

## 添加加密

对于敏感数据，可以在 B2 之上叠加一个加密（crypt）远程。文件在离开你的机器之前就已完成加密——Backblaze 永远不会看到未加密的数据。

## 成本示例

| Google Drive 容量 | B2 每月费用 |
|-------------------|----------------|
| 100 GB | 0.60 美元 |
| 500 GB | 3.00 美元 |
| 1 TB | 6.00 美元 |
| 5 TB | 30.00 美元 |

## 开始使用

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. **添加 Google Drive** 和 **Backblaze B2** 远程。
3. **创建一个复制（Copy）任务** 用于备份。
4. **安排每晚运行**。
5. **安心睡觉**，因为你的文件已受到保护。

日常工作在 Drive 上进行，夜间备份在 B2 上完成。

---

**相关指南：**

- [将 Dropbox 备份到 Backblaze B2](https://rcloneview.com/support/blog/backup-dropbox-to-backblaze-b2-affordable-storage-rcloneview)
- [将 Dropbox 同步到 S3 备份](https://rcloneview.com/support/blog/sync-dropbox-to-s3-backup-rcloneview)
- [加密云备份](https://rcloneview.com/support/blog/encrypt-cloud-backups-crypt-remote-guide-rcloneview)

<CloudSupportGrid />
