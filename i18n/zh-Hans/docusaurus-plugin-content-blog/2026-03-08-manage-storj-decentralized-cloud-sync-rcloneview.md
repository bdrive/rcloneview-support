---
slug: manage-storj-decentralized-cloud-sync-rcloneview
title: "管理 Storj 去中心化云存储 —— 使用 RcloneView 与 S3、Google Drive 和 NAS 同步"
authors:
  - tayson
description: "Storj 提供兼容 S3 的去中心化云存储。了解如何使用 RcloneView 管理 Storj，并将其与 Google Drive、AWS S3 和 NAS 一起同步与备份。"
keywords:
  - storj cloud storage
  - storj sync google drive
  - storj rclone gui
  - storj s3 compatible
  - storj backup tool
  - decentralized cloud manager
  - storj file transfer
  - storj vs s3
  - storj dcs rclone
  - storj multi cloud sync
tags:
  - storj
  - decentralized-storage
  - s3-compatible
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 管理 Storj 去中心化云存储 —— 使用 RcloneView 与 S3、Google Drive 和 NAS 同步

> Storj 将去中心化的安全性与兼容 S3 的 API 结合在一起。它已经达到企业级水准，但仍然需要一个好用的管理界面。RcloneView 正好提供了这一点——同时还能与 70 多个其他存储提供商集成。

Storj（原名 Storj DCS）是一个去中心化云存储平台，它会将你的文件拆分、加密并分发到全球节点网络中。与 Sia 的区块链方案不同，Storj 提供了一个熟悉的、兼容 S3 的 API，使其在许多工作流中可以直接替代 AWS S3。借助 RcloneView，你可以将 Storj 与其他云存储一起进行可视化管理。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 为什么选择 Storj？

### 兼容 S3 且去中心化

- **S3 API** —— 可与任何支持 S3 的工具配合使用，包括 rclone 和 RcloneView。
- **端到端加密** —— 文件在上传前会在客户端进行加密。
- **分布在 13,000+ 个节点上** —— 没有单点故障。
- **比 AWS S3 便宜 80%** —— 存储 $4/TB/月，出口流量 $7/TB。
- **零知识架构** —— Storj 无法访问你的数据。

### 价格优势

| 提供商 | 存储费用（TB/月） | 出口流量费用（TB） |
|----------|-------------------|-------------|
| AWS S3 Standard | $23 | $90 |
| Google Cloud Storage | $20 | $120 |
| Backblaze B2 | $6 | $10 |
| Storj | $4 | $7 |

Storj 是目前最便宜的兼容 S3 的存储方案之一，还额外具备去中心化的安全优势。

## 在 RcloneView 中设置 Storj

### 获取 Storj 凭证

1. 在 [storj.io](https://www.storj.io/) 注册账号。
2. 在 Storj 控制台中创建一个新的存储桶（bucket）。
3. 生成兼容 S3 的访问授权（Access Key + Secret Key）。
4. 记下你的终端节点：`gateway.storjshare.io`。

### 将 Storj 添加为远程

1. 打开 RcloneView 并点击 **Add Remote**。
2. 选择 **S3 Compatible** 作为远程类型。
3. 选择 **Storj** 作为提供商。
4. 输入你的 Access Key、Secret Key 和终端节点。

<img src="/support/images/en/blog/new-remote.png" alt="Add Storj S3-compatible remote" class="img-large img-center" />

现在你的 Storj 存储桶会出现在 RcloneView 的双栏浏览器中。

## 实用工作流

### 1) 从 AWS S3 迁移到 Storj

通过将数据从 S3 迁移到 Storj，可节省 80% 的存储成本：

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Transfer from AWS S3 to Storj" class="img-large img-center" />

使用复制任务（Copy job）将你的 S3 存储桶传输到 Storj。由于两者都使用 S3 协议，迁移过程非常简单。

### 2) Google Drive → Storj（加密归档）

将 Google Drive 备份到 Storj，构建一个去中心化的加密归档：

- Google Drive 用于日常协作。
- Storj 用于长期、隐私优先的备份。
- 安排每晚同步，保持归档为最新状态。

### 3) Storj → NAS（本地镜像）

在你的 Synology 或 QNAP NAS 上保留关键 Storj 数据的本地副本：

```
Storj → NAS (daily mirror for fast local access)
NAS → Storj (backup new local files)
```

### 4) 多云冗余

将 Storj 作为 3-2-1 备份策略的一部分：

- **3 份副本**：本地、Storj，以及一个传统云存储。
- **2 种不同介质**：去中心化（Storj）+ 中心化（Google Drive）。
- **1 份异地备份**：Storj 本身就是异地副本（全球分布式存储）。

## 安排自动同步

设置周期性任务，让 Storj 与你的其他存储保持同步：

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule Storj sync jobs" class="img-large img-center" />

### 示例计划

- **每晚凌晨 2 点**：将 Google Drive 同步到 Storj。
- **每周日**：进行一次完整比对检查，检测数据漂移。
- **每月**：将旧文件从 S3 归档到 Storj 以节省成本。

## 使用文件夹比对进行验证

迁移或同步完成后，比较源和目标位置以确保数据完整：

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare Storj with other storage" class="img-large img-center" />

## 监控传输进度

实时跟踪大文件传输的进度：

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitor Storj transfer progress" class="img-large img-center" />

## Storj 与其他兼容 S3 的提供商对比

| 特性 | Storj | Backblaze B2 | Wasabi | MinIO（自托管） |
|---------|-------|-------------|--------|---------------------|
| 去中心化 | ✅ | ❌ | ❌ | ❌ |
| 端到端加密 | ✅（客户端） | ❌ | ❌ | ❌ |
| 兼容 S3 | ✅ | ✅ | ✅ | ✅ |
| 存储费用 $/TB | $4 | $6 | $7 | 自托管 |
| 出口流量 $/TB | $7 | $10 | 免费 | 自托管 |
| 全球分布 | ✅（13,000+ 节点） | 2 个区域 | 4 个区域 | 你自己的服务器 |

## 开始使用

1. **创建 Storj 账号**，访问 [storj.io](https://www.storj.io/)。
2. **下载 RcloneView**，访问 [rcloneview.com](https://rcloneview.com/src/download.html)。
3. **将 Storj 添加为兼容 S3 的远程**。
4. **浏览、传输和同步**，与你的其他云存储一起使用。
5. **安排自动备份**，实现免人工操作。

去中心化、加密、兼容 S3，且比传统方案便宜 80%——Storj 是传统云存储的一个极具吸引力的替代方案。而借助 RcloneView，你可以将它与其他一切存储一起管理。

---

**相关指南：**

- [创建同步任务](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [任务调度](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)
- [比较文件夹内容](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)

<CloudSupportGrid />
