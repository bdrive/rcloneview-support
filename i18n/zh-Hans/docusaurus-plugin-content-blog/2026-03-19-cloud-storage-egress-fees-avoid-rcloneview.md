---
slug: cloud-storage-egress-fees-avoid-rcloneview
title: "云存储出站流量费详解——如何避免意外的下载费用"
authors:
  - tayson
description: "上传到云存储通常是免费的。下载却可能花费一大笔钱。了解各服务商的出站流量费，并学习如何借助 RcloneView 将其降到最低。"
keywords:
  - cloud egress fees
  - cloud download charges
  - s3 egress cost
  - cloud storage hidden fees
  - avoid cloud egress
  - cloud data transfer cost
  - cloud download expensive
  - reduce cloud costs
  - egress free cloud storage
  - cloud pricing egress
tags:
  - cost-optimization
  - tips
  - best-practices
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 云存储出站流量费详解——如何避免意外的下载费用

> 你上传了 5 TB 数据到 S3。现在需要下载它们。出站流量费高达 450 美元。是的，真的。以下是出站流量计费的原理，以及如何避开这个陷阱。

云存储的定价包含两部分：存储费（每 GB/月）和出站流量费（每下载 1 GB 收取一次）。大多数人只关注存储成本，却在下载数据时被出站流量费——每次从云端下载数据都要收取的费用——打个措手不及。在选择服务商之前了解出站流量费，可以帮你省下数千美元。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 出站流量费对比

| 服务商 | 存储费（每 TB/月） | 出站流量费（每 GB） |
|----------|-------------------|-----------------|
| AWS S3 | $23 | $0.09 |
| Google Cloud Storage | $20 | $0.12 |
| Azure Blob | $18 | $0.087 |
| Backblaze B2 | $6 | $0.01 |
| Wasabi | $7 | 免费（附带条件） |
| Cloudflare R2 | $15 | **免费** |
| Google Drive | 已包含 | 已包含 |
| OneDrive | 已包含 | 已包含 |
| Dropbox | 已包含 | 已包含 |

差距非常悬殊。从 S3 下载 1 TB 数据需要花费 90 美元，而从 Cloudflare R2 下载则是 0 美元。

## 降低出站流量费的策略

### 为经常访问的数据选择对出站流量友好的服务商

将需要频繁下载的数据存放在 Cloudflare R2、Backblaze B2 或消费级云存储（Google Drive、Dropbox）上，这些服务的出站流量要么免费，要么很便宜。

### 将 S3/GCS/Azure 用于写多读少的工作负载

对于出站流量费较高的对象存储服务商而言，用于存放很少需要恢复的备份和归档数据是划算的。

### 有策略地在云之间传输数据

使用 RcloneView，从一开始就把数据放到合适的服务商上：

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Place data strategically" class="img-large img-center" />

### 避免跨区域传输

在同一服务商内跨区域传输数据会产生内部出站流量费用。请将相关数据保存在同一区域。

### 监控你的传输量

跟踪任务传输的数据量，以便估算成本：

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Monitor transfer volume" class="img-large img-center" />

## 智能多云策略

| 使用场景 | 最佳服务商 | 原因 |
|----------|--------------|-----|
| 归档备份（很少访问） | S3 Glacier | 存储最便宜，出站流量少 |
| 活跃备份（偶尔恢复） | Backblaze B2 | 存储和出站流量费用都低 |
| CDN / 频繁提供的内容 | Cloudflare R2 | 零出站流量费 |
| 团队协作 | Google Drive / OneDrive | 出站流量已包含 |
| 大型数据集共享 | Wasabi | 出站流量免费（合理使用范围内） |

## 快速上手

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. **评估你的访问模式**——你多久下载一次数据？
3. 使用双栏浏览器**将数据放到合适的服务商**。
4. **监控传输**以追踪成本。

最便宜的存储，不一定是总成本最低的方案。

---

**相关指南：**

- [云存储隐藏费用](https://rcloneview.com/support/blog/hidden-cloud-storage-costs-save-money-rcloneview)
- [查找未使用的文件](https://rcloneview.com/support/blog/find-unused-files-reduce-cloud-costs-rcloneview)
- [归档到 S3 Glacier](https://rcloneview.com/support/blog/archive-google-drive-to-s3-glacier-rcloneview)

<CloudSupportGrid />
