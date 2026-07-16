---
slug: hidden-cloud-storage-costs-save-money-rcloneview
title: "隐藏的云存储费用——出口流量费、API 费用以及如何省钱"
authors:
  - tayson
description: "云存储定价看似简单,直到你遇到出口流量费、API 费用和最低存储期限。了解这些隐藏费用,并学习如何借助 RcloneView 优化成本。"
keywords:
  - 云存储隐藏费用
  - 云出口流量费
  - 云存储定价
  - s3 出口流量费用
  - 云 api 费用
  - 降低云存储成本
  - 云存储成本优化
  - 便宜的云存储
  - 云存储费用详解
  - 云存储省钱
tags:
  - pricing
  - cost-optimization
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 隐藏的云存储费用——出口流量费、API 费用以及如何省钱

> AWS S3 宣传的价格是 $0.023/GB/月。存储 1 TB 看起来很便宜——每月只要 $23。但当你下载这 1 TB 数据时,账单会飙升到 $113。欢迎见识出口流量费。

云存储定价有标价和实际价格之分。标价是每 GB 的存储费用。实际价格则包括出口(下载)流量费、API 请求费用、最低存储期限,以及冷存储的检索费用。了解这些隐藏成本能帮助你选择合适的服务商,避免账单出现意外。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 隐藏的费用

### 1) 出口流量费

出口流量费是你从云端下载数据所支付的费用。它是大多数云账单中最让人意外的一项。

| 服务商 | 出口流量费(每 TB) |
|----------|----------------|
| AWS S3 | $90 |
| Google Cloud | $120 |
| Azure | $87 |
| Oracle Cloud | 免费(前 10 TB) |
| Backblaze B2 | $10(通过 Cloudflare 免费) |
| Wasabi | 免费* |
| Storj | $7 |

*Wasabi 的免费出口流量有合理使用政策限制——出口流量不应超过存储量。

**真实案例:** 从 AWS S3 迁移 10 TB 数据,仅出口流量费就要花费 $900。

### 2) API 请求费用

每一次文件操作(列出、读取、写入、删除)都是一次 API 调用。每次调用都会产生费用。

| 服务商 | PUT/POST(每 1,000 次) | GET(每 1,000 次) |
|----------|---------------------|-----------------|
| AWS S3 Standard | $0.005 | $0.0004 |
| Google Cloud | $0.005 | $0.0004 |
| Backblaze B2 | $0.004 | 免费(每天 2,500 次) |

同步 100,000 个小文件意味着 100,000 次以上的 API 调用——费用很快就会累积起来。

### 3) 最低存储期限

| 服务商 | 最低期限 | 会发生什么 |
|----------|-----------------|-------------|
| AWS S3 Standard | 无 | 按使用量付费 |
| AWS S3 Standard-IA | 30 天 | 即使提前删除也要按 30 天计费 |
| AWS S3 Glacier | 90 天 | 最低按 90 天计费 |
| Wasabi | 90 天 | 最低按 90 天计费 |
| Backblaze B2 | 1 天 | 基本没有最低限制 |

在 Wasabi 上存储 10 天后删除文件——你仍然要为 90 天的存储付费。

### 4) 检索费用

冷存储层级在检索数据时会收费:

| 层级 | 检索费用 |
|------|---------------|
| S3 Glacier Instant | $10/TB |
| S3 Glacier Flexible | $30/TB(3–5 小时) |
| S3 Glacier Deep Archive | $20/TB(12 小时) |

### 5) 提前删除费用

如果对象在最低存储期限之前被删除,S3 Glacier 会收取提前删除费用。

## 如何优化云存储成本

### 为不同类型的数据选择合适的服务商

| 数据类型 | 最佳服务商 | 原因 |
|-----------|--------------|-----|
| 热数据(每日访问) | Google Drive、OneDrive | 已包含在 Workspace/M365 订阅中 |
| 温数据(每周访问) | S3 Standard-IA、B2 | 存储便宜,出口流量费适中 |
| 冷数据(每月访问) | B2、Wasabi | 存储费低,价格可预测 |
| 归档数据(每年访问) | S3 Glacier、Storj | 存储最便宜 |

### 使用 RcloneView 在不同层级间迁移数据

随着数据老化,将其迁移到更便宜的存储层级:

```
第 1-4 周:Google Drive(订阅中已包含)
第 2-12 个月:Backblaze B2($6/TB,出口流量费低)
第 2 年以上:S3 Glacier($4/TB,归档)
```

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Automate tiered storage" class="img-large img-center" />

### 通过智能同步减少出口流量费

- **在免费出口流量时段同步**——部分服务商在特定时段或针对特定合作伙伴提供免费出口流量。
- **搭配 Cloudflare 使用 B2**——通过 Cloudflare 的 Bandwidth Alliance,B2 的出口流量是免费的。
- **选择 Oracle Cloud**——每月 10 TB 免费出口流量。
- **使用筛选器**只同步需要的数据——传输的数据越少,出口流量费就越低。

### 减少 API 调用

- 在 rclone 设置中**使用 `--fast-list`**,减少列出目录时的 API 调用。
- 对稳定的数据**降低同步频率**——每周一次而不是每小时一次。
- 对大文件**使用仅按大小检查**,而不是校验和检查。

### 找出并消除浪费

使用文件夹对比功能查找跨云端的重复数据:

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Find duplicate data across clouds" class="img-large img-center" />

## 月度成本对比:5 TB 存储

| 场景 | 月度费用 |
|----------|-------------|
| AWS S3 Standard(5 TB 存储 + 1 TB 出口流量) | $205 |
| Backblaze B2(5 TB + 1 TB 出口流量) | $40 |
| Wasabi(5 TB,无出口流量费) | $35 |
| Google Drive(2 TB 个人套餐) | $10 |
| 优化组合(B2 + Glacier) | $25 |

合适的服务商组合可以将成本降低 80%。

## 开始使用

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. **审查当前的云端支出**——查看你目前的付费情况。
3. **找出浪费**——重复数据、无用数据、错误的存储层级。
4. 使用 RcloneView **将数据迁移到最优服务商**。
5. **安排自动分层策略**,长期保持低成本。

最便宜的云,是最适合你访问模式的那一个。

---

**相关指南:**

- [云存储空间不足?释放空间](https://rcloneview.com/support/blog/cloud-storage-full-free-up-space-multiple-clouds-rcloneview)
- [查找并删除重复文件](https://rcloneview.com/support/blog/find-remove-duplicate-files-cloud-storage-rcloneview)
- [设置带宽限制](https://rcloneview.com/support/blog/set-bandwidth-limits-cloud-transfers-rcloneview)

<CloudSupportGrid />
