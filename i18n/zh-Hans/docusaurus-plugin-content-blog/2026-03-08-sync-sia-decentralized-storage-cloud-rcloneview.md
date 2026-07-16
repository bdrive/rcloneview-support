---
slug: sync-sia-decentralized-storage-cloud-rcloneview
title: "如何使用 RcloneView 将 Sia 去中心化存储与 Google Drive、S3 等同步"
authors:
  - tayson
description: "Sia 提供私密的去中心化云存储。了解如何使用 RcloneView 的可视化界面将 Sia 与 Google Drive、AWS S3 或您的 NAS 同步。"
keywords:
  - sia cloud storage
  - sia decentralized storage sync
  - sia rclone gui
  - sync sia google drive
  - sia backup tool
  - decentralized storage manager
  - sia file transfer
  - sia s3 sync
  - sia cloud manager
  - sia renterd rclone
tags:
  - sia
  - decentralized-storage
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 如何使用 RcloneView 将 Sia 去中心化存储与 Google Drive、S3 等同步

> Sia 将您的文件存储在由主机组成的去中心化网络中——没有任何一家公司能够控制您的数据。但要在传统云存储之外同时管理 Sia 上的文件可能会很棘手。RcloneView 让这两个世界无缝对接。

Sia 是一个基于区块链的去中心化存储网络。它不像 Google 或 Amazon 那样需要您信任某一家公司来托管文件，而是将您的数据拆分并加密后分散存储在全球数百个独立的主机上。结果就是：以具有竞争力的价格实现隐私优先的存储。但大多数用户同时也需要 Google Drive 进行协作，或使用 S3 作为应用后端。RcloneView 让您可以在一个界面中同时管理 Sia 和其他所有存储。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 为什么选择 Sia？

### 真正的去中心化

与传统云存储不同，传统云存储由一家公司掌控您的数据：

- **没有单点故障** —— 文件被冗余拆分存储在 30 多个主机上。
- **端到端加密** —— 数据在离开您的设备之前就已加密。
- **不受厂商锁定** —— 该网络开放且无需许可即可加入。
- **价格具有竞争力** —— 通常为每 TB 每月 2–4 美元，比大多数中心化服务商更便宜。

### 面临的挑战

Sia 的生态系统（renterd、hostd）功能强大，但以命令行为主。如果您同时使用 Google Drive、Dropbox 或 S3，就需要在多个界面之间来回切换。这正是 RcloneView 的用武之地。

## 在 RcloneView 中设置 Sia

### 前提条件

您需要一个正在运行的 Sia renterd 实例。这是管理您的存储合约和文件操作的守护进程。

### 添加 Sia 作为远程

1. 打开 RcloneView，点击 **Add Remote**（添加远程）。
2. 选择 Sia 存储类型。
3. 输入您的 renterd API URL（通常为 `http://localhost:9980/api`）。
4. 输入您的 API 密码。

<img src="/support/images/en/blog/new-remote.png" alt="Add Sia remote in RcloneView" class="img-large img-center" />

连接成功后，您就可以在双栏浏览器中像浏览其他任何云存储一样浏览您的 Sia 存储。

## 将 Sia 与传统云存储同步

### Sia → Google Drive（协作备份）

在 Google Drive 上保留一份重要 Sia 文件的副本，方便与同事共享：

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Transfer from Sia to Google Drive" class="img-large img-center" />

### Google Drive → Sia（隐私备份）

将您的 Google Drive 备份到 Sia，获得一份注重隐私、去中心化的副本，Google 既无法访问也无法删除。

### Sia → AWS S3（混合架构）

将 Sia 用作主存储，将 S3 用作可通过 CDN 访问的镜像，供需要标准 S3 API 的应用程序使用。

## 自动化 Sia 备份

在 Sia 与其他存储之间安排每日同步：

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule Sia sync jobs" class="img-large img-center" />

### 工作流示例

- **每晚备份**：本地 NAS → Sia（去中心化归档）。
- **每周镜像**：Sia → Backblaze B2（对去中心化数据进行传统云备份）。
- **实时协作**：Sia → Google Drive（保持共享文件夹同步）。

## 通过文件夹对比验证传输结果

同步完成后，验证您的 Sia 存储与源数据是否一致：

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare Sia with other storage" class="img-large img-center" />

这对于数据完整性至关重要的归档工作流尤为重要。

## Sia 与传统云存储对比

| 特性 | Sia | Google Drive | AWS S3 |
|---------|-----|-------------|--------|
| 隐私性 | 端到端加密，去中心化 | Google 可以访问数据 | AWS 可以访问数据 |
| 价格（1 TB/月） | ~2–4 美元 | 10 美元 | 23 美元 |
| 冗余性 | 30 多个主机，3 倍冗余 | Google 的基础设施 | 99.999999999% 的持久性 |
| 速度 | 不稳定（取决于主机） | 快 | 快 |
| 协作能力 | 有限 | 出色 | 仅限 API |
| 厂商锁定 | 无 | 高 | 中等 |

## Sia + RcloneView 的最佳使用场景

- **注重隐私的备份** —— 将敏感文档归档到 Sia，确保没有任何公司能够访问它们。
- **混合存储** —— 日常工作使用 Google Drive，长期加密归档使用 Sia。
- **成本优化** —— 将冷数据存储在 Sia 上，每 TB 仅需 2–4 美元，而不是 S3 上的 23 美元。
- **抗审查性** —— Sia 上的数据不会被任何单一实体删除。

## 快速上手

1. **搭建 renterd** —— 按照 Sia 的文档运行一个 renterd 实例。
2. **下载 RcloneView** —— 访问 [rcloneview.com](https://rcloneview.com/src/download.html)。
3. **添加 Sia 作为远程** —— 与您的其他云存储并列使用。
4. **同步、备份与对比** —— 在同一个地方管理去中心化和中心化存储。

去中心化存储并不意味着工作流也要去中心化。RcloneView 将一切整合在一起。

---

**相关指南：**

- [创建同步任务](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [对比文件夹内容](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [任务调度](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)

<CloudSupportGrid />
