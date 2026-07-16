---
slug: migrate-wasabi-to-backblaze-b2-s3-rcloneview
title: "在 Wasabi、Backblaze B2 和 AWS S3 之间迁移 — 使用 RcloneView 进行 S3 兼容云迁移"
authors:
  - tayson
description: "想在 S3 兼容云存储提供商之间切换？了解如何使用 RcloneView 在 Wasabi、Backblaze B2 和 AWS S3 之间迁移数据，同时将成本降至最低。"
keywords:
  - wasabi to backblaze b2
  - migrate s3 compatible storage
  - wasabi migration tool
  - backblaze b2 to s3
  - s3 provider migration
  - wasabi vs backblaze b2
  - switch cloud storage provider
  - s3 compatible transfer
  - wasabi to aws s3
  - cloud storage migration cost
tags:
  - wasabi
  - backblaze-b2
  - aws-s3
  - migration
  - s3-compatible
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 在 Wasabi、Backblaze B2 和 AWS S3 之间迁移 — 使用 RcloneView 进行 S3 兼容云迁移

> 发现了更划算的 S3 兼容云存储方案？Wasabi、Backblaze B2 和 AWS S3 都使用相同的协议——在它们之间迁移本应轻而易举。使用 RcloneView，确实如此。

S3 兼容云存储已成为对象存储的标准。当你发现某个提供商价格更优、功能更多或区域覆盖不同时，你不应该被锁定。由于 Wasabi、Backblaze B2 和 AWS S3 都使用 S3 API，RcloneView 可以无缝地在它们之间迁移数据。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 价格对比

| 特性 | AWS S3 Standard | Backblaze B2 | Wasabi |
|---------|----------------|-------------|--------|
| 存储费用 (TB/月) | $23 | $6 | $7 |
| 出站流量费 (TB) | $90 | $10 | 免费* |
| 最短存储时长 | 无 | 1 天 | 90 天 |
| 免费额度 | 5 GB（12 个月） | 10 GB | 无 |
| API 兼容性 | 原生 S3 | S3 兼容 | S3 兼容 |

*Wasabi 的“免费出站流量”受合理使用政策约束——出站流量不应超过存储容量。

## 迁移场景

### Wasabi → Backblaze B2

Wasabi 的 90 天最短存储政策意味着即使你提前删除文件也会被收费。如果你的使用模式涉及频繁的文件更替，没有最短存储时长限制的 B2 可能更便宜。

### Backblaze B2 → Wasabi

Wasabi 提供可预测的定价，且没有出站流量费用。如果你经常下载数据，Wasabi 的固定费率定价可以节省费用。

### AWS S3 → Backblaze B2 或 Wasabi

AWS S3 是成本最高的选项。将归档或备份数据迁移到 B2 或 Wasabi 可以削减 70%–80% 的成本。

### 任意提供商 → AWS S3

如果你需要 AWS 生态系统集成（Lambda、CloudFront、Athena），S3 是唯一选择。

## 如何迁移

### 1）添加两个提供商

<img src="/support/images/en/blog/new-remote.png" alt="Add S3-compatible remotes" class="img-large img-center" />

### 2）浏览并对比

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Browse source and destination buckets" class="img-large img-center" />

### 3）运行迁移

使用 **Copy** 任务以确保迁移安全：

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Run S3 migration" class="img-large img-center" />

### 4）验证

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify migration completeness" class="img-large img-center" />

### 5）监控大规模传输

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitor migration progress" class="img-large img-center" />

## 最小化迁移成本

### 出站流量费是最大的成本

从 AWS S3 迁移数据时，出站流量费用会不断累积。以 10 TB 为例：S3 出站流量费高达 $900。请提前规划：

- **分阶段迁移** — 将迁移分摊到多个计费周期。
- **优先处理冷数据** — 先迁移不常访问的数据。
- **使用带宽限制** 来控制每日出站流量。

### Backblaze B2 出站流量

B2 通过 Cloudflare（Bandwidth Alliance）提供免费出站流量。如果你的目标端支持该方案，请使用 Cloudflare 集成。

### Wasabi 注意事项

Wasabi 按最短 90 天收费。不要在上传后 90 天内从 Wasabi 删除数据，否则你仍需支付完整的 90 天费用。

## 迁移完成后的步骤

1. **验证所有对象** — 使用 Folder Comparison（文件夹对比）确认完整性。
2. **更新应用配置** — 将你的应用指向新的端点。
3. **测试访问** — 确保应用可以对新提供商进行读写操作。
4. **保留源端处于活动状态** — 将旧提供商保留 30 天作为回退方案。
5. **删除源数据** — 在确认一切正常后进行。

## 快速上手

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. **添加源端和目标端** S3 兼容远程。
3. **运行 Copy 任务**以迁移数据。
4. **使用 Folder Comparison 进行验证**。
5. **更新应用**并停用旧的提供商。

同样的 API，不同的提供商，更好的价格。

---

**相关指南：**

- [创建同步任务](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [对比文件夹内容](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [设置带宽限制](https://rcloneview.com/support/blog/set-bandwidth-limits-cloud-transfers-rcloneview)

<CloudSupportGrid />
