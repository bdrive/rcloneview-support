---
slug: migrate-backblaze-b2-to-wasabi-rcloneview
title: "使用 RcloneView 将 Backblaze B2 迁移到 Wasabi"
authors:
  - tayson
description: "使用 RcloneView 将数据从 Backblaze B2 迁移到 Wasabi。比较定价模式、设置两个远程、传输数据，并逐步验证迁移结果。"
keywords:
  - rcloneview
  - backblaze b2 to wasabi
  - migrate b2 to wasabi
  - wasabi cloud migration
  - backblaze migration tool
  - s3 compatible migration
  - cloud storage migration
  - wasabi no egress fees
  - b2 data transfer
  - object storage migration gui
tags:
  - RcloneView
  - backblaze-b2
  - wasabi
  - migration
  - cloud-migration
  - s3-compatible
  - guide
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 使用 RcloneView 将 Backblaze B2 迁移到 Wasabi

> Backblaze B2 的存储成本较低，但出口流量和 API 费用可能不断累积——**RcloneView** 让迁移到 Wasabi 的统一定价变得简单且可验证。

Backblaze B2 和 Wasabi 是面向成本敏感型团队的两个最流行的 S3 兼容对象存储提供商。B2 以较低的单位存储费用著称（每 GB 每月 $0.006），但其定价模式包含出口流量费用（每 GB $0.01）和按事务计费的费用，对于读取密集型工作负载的团队来说，这可能会带来意外支出。Wasabi 提供统一费率（每 GB 每月 $0.0069），没有出口流量或 API 费用，使成本完全可预测。RcloneView 通过可视化界面处理这两个 S3 兼容提供商之间的迁移，无需编写 CLI 脚本。

本指南涵盖完整的迁移过程——从理解定价差异到在传输后验证每个对象。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 为什么要从 Backblaze B2 迁移到 Wasabi

迁移决定通常取决于可预测性。B2 的存储费率略低于 Wasabi，但一旦考虑出口流量和 B/C 类事务费用，总成本往往会超过 Wasabi 的统一费率——对于频繁读取数据的工作负载尤其如此。

考虑这样一个场景：在 B2 上存储 10 TB 数据每月花费 $60。如果你每月下载其中 5 TB 数据（提供媒体服务、分发构建产物、运行分析），出口流量费用会增加 $50。用于列出和下载文件的 B 类事务会带来更多费用。在 Wasabi 上，相同的 10 TB 数据每月总计花费 $69，无论你读取多少数据或发出多少 API 调用。

Wasabi 还维持最短 90 天的存储策略——在 90 天之前删除对象会按剩余期限收取按比例计算的费用。如果你存储的是短期数据，请将此因素纳入规划。

## 在 RcloneView 中设置 Backblaze B2

打开远程管理器并添加一个 Backblaze B2 远程。你可以使用原生 B2 API 或 S3 兼容 API。出于迁移目的，建议使用 S3 兼容端点，因为它允许 RcloneView 对源和目标使用相同的传输逻辑。

输入你的 B2 应用密钥 ID 和应用密钥。如果你有特定于存储桶的密钥，使用它们可以获得更严格的安全性——该密钥只需要对源具有读取权限。

<img src="/support/images/en/blog/new-remote.png" alt="Adding Backblaze B2 remote in RcloneView" class="img-large img-center" />

## 在 RcloneView 中设置 Wasabi

将 Wasabi 添加为 S3 兼容远程。在远程管理器中，选择 **Amazon S3 Compatible** 并配置：

- **Provider**：Wasabi
- **Access Key** 和 **Secret Key**：从 Wasabi 控制台生成
- **Region**：选择离你的用户最近的区域（us-east-1、eu-central-1、ap-northeast-1 等）
- **Endpoint**：根据所选区域自动配置

在 Wasabi 控制台或通过 RcloneView 的浏览器创建目标存储桶。选择与主要用户群相同的区域，以最大限度地减少延迟。

## 运行迁移

打开双窗格浏览器，左侧为 B2，右侧为 Wasabi。导航到要迁移的 B2 存储桶和 Wasabi 目标存储桶。

要完成完整迁移，请创建一个同步任务。RcloneView 会枚举 B2 存储桶中的所有对象，将它们与 Wasabi 目标进行比较，并仅传输缺失或已更改的内容。由于两个提供商都通过 ETag 支持 MD5 校验和，文件比较既快速又准确。

传输时需要考虑的关键因素：

- **来自 B2 的出口流量**：迁移过程中你会产生 B2 出口流量费用。为了降低成本，可以考虑使用 Backblaze 与 Cloudflare 的免费出口流量合作计划（如果适用于你的配置）或 B2 带宽联盟。
- **并行传输**：B2 和 Wasabi 都支持高并发。将并行传输数设置为 8-16 以获得最佳吞吐量。
- **大文件**：两个提供商都支持分片上传。RcloneView 会自动对超过阈值的文件使用分片上传，确保大对象传输的可靠性。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Migrating Backblaze B2 to Wasabi in RcloneView two-pane explorer" class="img-large img-center" />

## 监控传输进度

实时监控仪表板显示传输队列中每个文件的状态。你可以跟踪单个文件的进度、整体完成百分比和当前传输速度。如果网络状况发生变化，可以暂停传输并稍后恢复——RcloneView 会从中断处继续。

对于数十 TB 级的迁移，传输可能需要数小时甚至数天。RcloneView 的日志记录功能确保你拥有已传输内容、已跳过内容以及发生的任何错误的完整记录。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitoring B2 to Wasabi migration progress in RcloneView" class="img-large img-center" />

## 验证迁移结果

传输完成后，在 B2 源和 Wasabi 目标之间运行比较操作。RcloneView 会列出仅存在于一侧的文件以及大小或校验和不同的文件。干净的比较结果——没有差异——即可确认迁移成功。

需要注意以下事项：

- **空目录**：对象存储没有真正的目录。B2 和 Wasabi 都使用基于前缀的"文件夹"。RcloneView 对此进行了一致的处理，但请验证你的应用程序逻辑不依赖于目录标记。
- **元数据保留**：在 S3 兼容传输过程中，标准元数据（content-type、last-modified）会被保留。RcloneView 也会传输自定义元数据（x-amz-meta-*）。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verifying B2 to Wasabi migration with compare in RcloneView" class="img-large img-center" />

## 迁移后清理

在验证迁移完成并将所有应用程序端点从 B2 更新为 Wasabi 后：

1. **更新 DNS 和应用程序配置**：将你的服务指向新的 Wasabi 端点。
2. **运行最终同步**：捕获迁移窗口期间添加到 B2 的所有文件。
3. **临时保留 B2 数据**：在回滚期间（通常为 2-4 周）保留 B2 存储桶。
4. **删除 B2 数据**：在确认 Wasabi 上一切正常后，删除 B2 存储桶以停止产生存储费用。

在规划保留策略时，请记住 Wasabi 的 90 天最短存储策略。如果你在 90 天之前从 Wasabi 删除对象，仍将按完整的 90 天期限计费。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Reviewing migration job history in RcloneView" class="img-large img-center" />

## 快速开始

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 在远程管理器中将 Backblaze B2 和 Wasabi 添加为 S3 兼容远程。
3. 使用双窗格浏览器运行从 B2 到 Wasabi 的同步任务，并实时监控进度。
4. 使用比较功能验证迁移结果，并更新你的应用程序端点。

B2 和 Wasabi 都是出色的对象存储提供商，但当可预测的成本至关重要时，Wasabi 的统一费率模式更胜一筹——而 RcloneView 让切换变得毫不费力。

---

**相关指南：**

- [添加 AWS S3 和 S3 兼容存储](https://rcloneview.com/support/howto/remote-storage-connection-settings/s3)
- [比较文件夹内容](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [实时传输监控](https://rcloneview.com/support/howto/rcloneview-basic/real-time-transfer-monitoring)

<CloudSupportGrid />
