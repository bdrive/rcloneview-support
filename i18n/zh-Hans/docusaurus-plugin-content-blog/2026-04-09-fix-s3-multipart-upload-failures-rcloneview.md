---
slug: fix-s3-multipart-upload-failures-rcloneview
title: "修复 RcloneView 中的 S3 分段上传失败问题"
authors:
  - tayson
description: "排查并修复 RcloneView 中的 S3 分段上传失败问题。解决上传不完整、分片大小错误以及孤立分段上传会话等问题。"
keywords:
  - rcloneview
  - s3 multipart upload failure
  - fix s3 upload error
  - multipart upload incomplete
  - s3 upload timeout
  - s3 part size error
  - orphaned multipart upload
  - s3 upload troubleshooting
  - rclone s3 multipart
  - cloud upload fix
tags:
  - troubleshooting
  - amazon-s3
  - s3-compatible
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 修复 RcloneView 中的 S3 分段上传失败问题

> S3 分段上传会将大文件拆分为多个分片以实现并行传输和断点续传，但过程中出现的失败可能导致上传不完整、浪费存储空间并阻塞传输——以下是在 RcloneView 中修复这些问题的方法。

Amazon S3 及兼容 S3 的服务商（Wasabi、Backblaze B2 S3、Cloudflare R2、MinIO、DigitalOcean Spaces）要求对大于 5 GB 的文件使用分段上传，并建议对大于 100 MB 的文件也采用该方式。文件会被拆分为多个分片（默认每个 5 MB 至 5 GB），并行上传后在服务器端组装。当此过程因网络中断、超时或分片大小配置不当而中途失败时，结果就是一次不完整的上传——它占用了存储空间，却没有生成可用的对象。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 常见症状

- **上传停滞或挂起**：大文件的传输似乎在中途停止。RcloneView 的监控长时间显示没有进展。
- **"EntityTooSmall" 错误**：上传的分片小于最小允许大小（大多数 S3 服务商为 5 MB）。这通常发生在分片大小配置相对于文件大小设置过小时。
- **"EntityTooLarge" 错误**：单个分片超过了允许的最大大小（5 GB）。
- **"InvalidPart" 或 "InvalidPartOrder"**：分片上传顺序错误，或某个分片在传输过程中损坏。服务器拒绝了完成请求。
- **存储用量增加但文件未出现**：不完整的分段上传会占用存储空间。分片存在于服务器上，但最终对象从未被组装完成。

## 修复方法一：调整分片大小

分段上传失败最常见的原因是分片大小相对于文件大小设置不当。S3 每次上传最多允许 10,000 个分片。如果分片大小对于大文件来说过小，上传将超过分片数量限制而失败。

**示例**：一个 500 GB 的文件如果使用默认的 5 MB 分片大小，将需要 100,000 个分片——远远超过 10,000 个分片的限制。

在 RcloneView 中，可以在配置 S3 远程连接时或在任务的高级选项中调整分片大小。一个不错的经验法则是：将分片大小设置为至少 `文件大小 / 10,000`。对于 500 GB 的文件，请至少使用 50 MB 的分片。对于大多数工作负载，64 MB 到 128 MB 的分片大小可以在并行度和可靠性之间取得良好平衡。

您可以在 RcloneView 的自定义标志字段中使用 `--s3-chunk-size` 标志来设置此项。

## 修复方法二：增加上传超时时间

在低速连接上使用较大的分片可能会超过默认超时时间。如果您的连接速度低于 10 Mbps，一个 128 MB 的分片可能需要超过 100 秒才能上传完成——接近默认的超时限制。

使用 `--timeout` 标志增加超时时间。例如，`--timeout 300s` 会为每个分片提供最多 5 分钟的完成时间。您也可以减小分片大小，使单个分片的传输更快。

## 修复方法三：降低传输并发数

同时上传过多分片可能会使您的网络连接或 S3 端点不堪重负。如果您在分段上传过程中频繁遇到超时或连接重置，请降低并发传输数量。

在 RcloneView 的任务配置中，将传输数量从默认值（4）降低到 2，对于超大文件甚至可以降低到 1。您还可以使用 `--s3-upload-concurrency` 来控制单个文件有多少个分片被并行上传（默认值为 4）。

## 修复方法四：清理孤立的分段上传

失败的分段上传会在服务器上留下孤立的分片，这些分片会占用存储空间并产生费用。这些分片不会作为对象显示——您在 RcloneView 或 AWS 控制台浏览存储桶时不会看到它们。

要清理孤立的上传：

- **AWS S3**：在存储桶上配置生命周期规则，在指定天数（例如 7 天）后自动中止未完成的分段上传。此操作在 AWS 控制台的存储桶“管理”标签页中完成。
- **使用 rclone**：在 RcloneView 的内置终端中运行 `rclone cleanup remote:bucket`。这会中止指定存储桶上所有待处理的分段上传。
- **兼容 S3 的服务商**：大多数服务商都支持相同的生命周期规则或清理命令，但具体细节请查阅您服务商的文档。

## 修复方法五：启用失败重试

分段上传过程中的网络中断可能导致个别分片失败。RcloneView 会自动重试失败的操作（默认使用指数退避策略重试 3 次）。如果您经常遇到瞬时性失败，可以在自定义标志中通过 `--retries 5` 或 `--retries 10` 增加重试次数。

对于非常不稳定的连接，还可以设置 `--low-level-retries 10`，在将单个 HTTP 请求判定为失败操作之前先进行重试。

## 修复方法六：尽可能使用服务器端复制

如果您在同一服务商的两个兼容 S3 的存储桶之间进行复制，服务器端复制可以完全避免分段上传的问题——数据在服务商的网络内部移动，不会经过您的本机。当源和目标位于同一 S3 服务商时，RcloneView 会自动使用服务器端复制。

对于跨服务商传输（例如从 AWS S3 到 Cloudflare R2），数据必须经过您的本机，目标端会应用分段上传。

## 预防未来的失败

- **主动设置分片大小**：在上传大于 1 GB 的文件之前，计算所需的分片大小（`文件大小 / 10,000`）并在自定义标志中设置。
- **启用生命周期清理**：始终配置生命周期规则以中止未完成的分段上传，防止孤立分片不断累积。
- **监控传输**：使用 RcloneView 的实时监控及早发现停滞的上传。暂停并恢复停滞的传输通常可以解决瞬时性问题。
- **使用模拟运行进行测试**：对于关键上传，使用 RcloneView 的模拟运行（dry run）模式在提交前验证传输计划。

## 开始使用

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 为您最大的文件配置合适的 S3 远程连接分片大小。
3. 在存储桶上设置生命周期规则，以自动清理孤立的上传。
4. 实时监控传输并根据需要调整并发数。

分段上传失败是在 S3 上处理大文件时最常见的问题。正确的分片大小配置、超时设置以及孤立上传清理可以解决绝大多数此类问题。

---

**相关指南：**

- [添加 AWS S3 及兼容 S3 的存储](https://rcloneview.com/support/howto/remote-storage-connection-settings/s3)
- [实时传输监控](https://rcloneview.com/support/howto/rcloneview-basic/real-time-transfer-monitoring)
- [创建同步任务](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)

<CloudSupportGrid />
