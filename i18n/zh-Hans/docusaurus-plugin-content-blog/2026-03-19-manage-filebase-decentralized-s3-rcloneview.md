---
slug: manage-filebase-decentralized-s3-rcloneview
title: "管理 Filebase 去中心化存储 — 使用 RcloneView 实现 S3 兼容的 IPFS 同步"
authors:
  - tayson
description: "Filebase 为 IPFS、Sia、Storj 等去中心化存储网络提供 S3 兼容访问方式。使用 RcloneView 的可视化文件浏览器管理你的 Filebase 存储桶。"
keywords:
  - filebase storage
  - filebase rclone
  - filebase s3 gui
  - decentralized storage gui
  - ipfs storage manager
  - filebase sync tool
  - filebase file manager
  - filebase backup
  - filebase to google drive
  - decentralized cloud storage
tags:
  - s3-compatible
  - decentralized-storage
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 管理 Filebase 去中心化存储 — 使用 RcloneView 实现 S3 兼容的 IPFS 同步

> Filebase 在去中心化存储网络（IPFS、Storj 和 Sia）之上提供 S3 API。RcloneView 通过 S3 接口连接，将熟悉的文件管理体验带到去中心化基础设施中。

Filebase 将去中心化存储的复杂性隐藏在标准的 S3 兼容 API 之后。你的文件存储在具有地理冗余的去中心化网络（IPFS、Sia、Storj）中，但你可以使用与 AWS S3 相同的工具与之交互。RcloneView 通过这个 S3 接口连接到 Filebase，提供可视化文件浏览、跨云同步和定时备份功能。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 将 Filebase 连接到 RcloneView

<img src="/support/images/en/blog/new-remote.png" alt="Add Filebase remote" class="img-large img-center" />

使用你的访问密钥（access key）、密钥（secret key）以及 Filebase 端点，将 Filebase 添加为 S3 兼容远程。

## 为什么选择去中心化存储 + RcloneView？

### 可视化浏览与管理

使用双面板浏览器导航你的 IPFS 支持的存储桶：

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Browse Filebase storage" class="img-large img-center" />

### 与传统云同步

在 Google Drive 或 AWS S3 上保留去中心化数据的副本，便于共享：

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Sync Filebase to cloud" class="img-large img-center" />

### 定时备份

自动化 Filebase 与其他提供商之间的复制：

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule Filebase sync" class="img-large img-center" />

### 验证数据完整性

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify Filebase data" class="img-large img-center" />

## 使用场景

- **Web3 项目存储**，同时配合传统云备份
- **IPFS 内容固定（pinning）**，并进行可视化管理
- **归档存储**，利用去中心化网络提升数据韧性
- **混合策略** — 去中心化保障持久性，传统云保障速度

## 快速上手

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 将 **Filebase 添加**为 S3 兼容远程。
3. **浏览你的存储桶**，与传统云一并管理。
4. 在中心化与去中心化存储之间**同步和备份**。

S3 兼容意味着与 RcloneView 兼容——即便后端是 IPFS 也不例外。

---

**相关指南：**

- [管理 Storj 去中心化存储](https://rcloneview.com/support/blog/manage-storj-decentralized-cloud-sync-rcloneview)
- [同步 Sia 去中心化存储](https://rcloneview.com/support/blog/sync-sia-decentralized-storage-cloud-rcloneview)
- [创建同步任务](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)

<CloudSupportGrid />
