---
slug: migrate-backblaze-b2-to-aws-s3-rcloneview
title: "如何从 Backblaze B2 迁移到 AWS S3 —— 使用 RcloneView 分步指南"
authors:
  - tayson
description: "需要将数据从 Backblaze B2 迁移到 AWS S3 以实现生态系统集成？了解如何使用 RcloneView 以最低成本、零数据丢失完成迁移。"
keywords:
  - backblaze b2 to aws s3
  - migrate b2 to s3
  - backblaze to amazon s3
  - b2 s3 migration tool
  - switch cloud storage provider
  - backblaze b2 migration
  - b2 to s3 transfer
  - cloud storage migration
  - backblaze to aws
  - s3 migration tool
tags:
  - backblaze-b2
  - aws-s3
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 如何从 Backblaze B2 迁移到 AWS S3 —— 使用 RcloneView 分步指南

> Backblaze B2 是经济实惠的存储方案。但当你需要 AWS 生态系统集成 —— Lambda 触发器、CloudFront CDN、Athena 查询 —— 就需要用到 S3 了。以下是如何在不丢失数据的情况下完成迁移。

Backblaze B2 和 AWS S3 都兼容 S3 协议，只要使用合适的工具，迁移过程会非常简单。主要考虑因素是出口流量费用、传输时间和校验。RcloneView 在完成传输的同时，还提供可视化监控与校验功能。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 迁移规划

### 成本估算

B2 出口流量费：$10/TB（通过 Cloudflare Bandwidth Alliance 可免费）。

| 数据量 | B2 出口流量费用 | S3 存储费用（首月） |
|-------------|---------------|-------------------------|
| 100 GB | $1 | $2.30 |
| 1 TB | $10 | $23 |
| 10 TB | $100 | $230 |

### 时间安排

传输速度取决于你的网络连接以及 B2/S3 的吞吐能力。两项服务都能很好地支持高并发。

## 分步指南

### 1) 添加两个远程

<img src="/support/images/en/blog/new-remote.png" alt="Add B2 and S3 remotes" class="img-large img-center" />

### 2) 浏览并对比

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Browse B2 and S3 side by side" class="img-large img-center" />

### 3) 运行复制任务

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Migrate B2 to S3" class="img-large img-center" />

使用较高的并行度（16–32 个传输线程）—— B2 和 S3 都能很好地应对。

### 4) 监控进度

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitor B2 to S3 migration" class="img-large img-center" />

### 5) 校验完整性

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify B2 to S3 migration" class="img-large img-center" />

## 迁移完成后

1. **更新应用配置** —— 将应用指向 S3 端点。
2. **全面测试** —— 验证读写操作是否正常工作。
3. **保留 B2 数据 30 天** —— 以便在出现问题时可以回退。
4. **删除 B2 数据** —— 在确认 S3 上一切正常后再执行。

## 快速开始

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. **添加 B2 和 S3** 作为远程。
3. 以高并行度**运行复制任务**。
4. **使用文件夹对比功能进行校验**。

同样的 API，更大的生态系统。

---

**相关指南：**

- [创建同步任务](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [对比文件夹内容](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [在 S3 兼容存储提供商之间迁移](https://rcloneview.com/support/blog/migrate-wasabi-to-backblaze-b2-s3-rcloneview)

<CloudSupportGrid />
