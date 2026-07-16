---
slug: migrate-azure-blob-to-cloudflare-r2-rcloneview
title: "使用 RcloneView 将 Azure Blob Storage 迁移到 Cloudflare R2：零流出费用迁移"
authors:
  - tayson
description: 使用 RcloneView 从 Azure Blob Storage 迁移到 Cloudflare R2 —— 消除流出费用、设置两个远程、传输数据并直观地验证完整性。
keywords:
  - rcloneview
  - azure blob to cloudflare r2
  - cloudflare r2 migration
  - azure blob storage
  - zero egress
  - s3 compatible storage
  - rclone GUI
  - cloud migration
  - r2 storage
  - cost optimization
tags:
  - azure
  - cloudflare-r2
  - r2
  - migration
  - cloud-migration
  - s3-compatible
  - cost-optimization
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 使用 RcloneView 将 Azure Blob Storage 迁移到 Cloudflare R2：零流出费用迁移

> Azure Blob Storage 功能强大，但流出费用增长很快。**Cloudflare R2** 提供兼容 S3 的对象存储，且不收取任何流出费用 —— **RcloneView** 则可以直观地完成迁移。

Azure Blob Storage 是许多云架构的核心。它可靠、功能丰富，并与 Azure 生态系统深度集成。但有一个持续存在的痛点：**流出费用**。从 Azure Blob 下载的每一 GB 数据都要花钱，对于经常提供数据服务的应用（CDN、API、媒体分发或分析管道）而言，这些费用甚至可能超过存储费用本身。

Cloudflare R2 完全消除了流出费用。你只需为存储和操作付费，读取不收取任何带宽费用。对于读取多于写入的工作负载，R2 可以大幅降低你的云存储账单。RcloneView 让迁移变得简单直接——连接两个服务商、传输数据、并验证一切是否一致。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 为什么要从 Azure Blob 切换到 Cloudflare R2

这个决定通常取决于经济性：

- **零流出费用**：R2 对下载的数据不收取任何费用。Azure 根据地区和数据量收取 $0.05-$0.12/GB 的费用。
- **兼容 S3 API**：R2 支持 S3 API，因此现有工具、SDK 和应用只需极少改动即可正常使用。
- **可预测的定价**：R2 每月存储收费 $0.015/GB，操作费用为统一费率，没有隐藏的分层或预留容量承诺。
- **Cloudflare 集成**：如果你已经在使用 Cloudflare 的 DNS、CDN 或 Workers，R2 可以自然地融入你的技术栈。
- **无最低存储期限**：与部分服务商不同，R2 不会因为你提前删除数据而对你进行处罚。

### 快速成本对比

| 成本因素 | Azure Blob（Hot，East US） | Cloudflare R2 |
|---|---|---|
| 每 GB/月存储费用 | ~$0.018 | $0.015 |
| 每 GB 流出费用 | $0.05-$0.12 | $0.00 |
| 每百万次 A 类操作（写入） | ~$0.065 | $4.50 |
| 每百万次 B 类操作（读取） | ~$0.005 | $0.36 |

对于读取密集型工作负载，仅流出费用的节省就足以证明迁移的合理性。

## 步骤一：设置两个远程

在 RcloneView 中连接 Azure Blob 和 Cloudflare R2：

1. 在 RcloneView 中点击 **+ New Remote**。
2. **添加 Azure Blob Storage**：选择 Azure Blob 后端，输入你的存储账户名称和密钥（或连接字符串）。为其命名（例如 `AzureBlob`）。
3. **添加 Cloudflare R2**：选择 S3 兼容存储，选择 Cloudflare R2 作为提供商。输入你的 R2 Access Key ID、Secret Access Key，以及来自 Cloudflare 控制台的端点 URL。为其命名（例如 `CloudflareR2`）。
4. 确认两个远程都显示在资源管理器中。

<img src="/support/images/en/blog/new-remote.png" alt="Adding Azure Blob and Cloudflare R2 remotes in RcloneView" class="img-large img-center" />

## 步骤二：准备你的 R2 存储桶

在传输数据之前：

- **创建镜像 Azure 容器的目标存储桶**：你可以在 Cloudflare 控制台或直接在 RcloneView 的资源管理器中完成此操作。
- **检查命名约定**：Azure 容器名称和 R2 存储桶名称遵循相似的规则（小写字母，允许连字符），因此大多数名称可以直接迁移。
- **检查对象键兼容性**：Azure Blob 支持一些可能需要调整的键模式。请检查含有特殊字符的键。

## 步骤三：执行迁移

在双栏资源管理器中，一侧打开 Azure Blob，另一侧打开 Cloudflare R2。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Azure Blob and Cloudflare R2 side by side in RcloneView" class="img-large img-center" />

### 对于较小的容器

直接将容器或文件夹从 Azure Blob 拖放到 R2。RcloneView 会在后台传输文件并显示进度。

### 对于较大的容器

创建一个 **Copy** 任务以确保可靠性：

1. 选择 Azure Blob 容器作为源。
2. 选择对应的 R2 存储桶作为目标。
3. 运行 **Dry Run** 预览传输范围。
4. 执行任务。RcloneView 会实时显示进度，包括传输速度、文件数量和预计剩余时间。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Real-time monitoring of Azure Blob to R2 migration" class="img-large img-center" />

## 步骤四：验证数据完整性

迁移完成后，验证一切是否完整无误：

1. 使用 RcloneView 的 **Compare** 功能，将源容器与 R2 存储桶进行比对。
2. 查看比对结果——留意任何被标记为缺失或不同的文件。
3. 逐一重新复制任何失败的项目。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare Azure Blob container with R2 bucket to verify migration" class="img-large img-center" />

## 步骤五：处理大规模迁移

要迁移数百 GB 甚至数 TB 的数据？请提前做好规划：

- **迁移期间的 Azure 流出费用**：将数据传出 Azure 需要支付流出费用。可以考虑使用 Azure 的带宽定价分层，并在单个计费周期内完成迁移。
- **按容器并行处理**：为每个容器运行单独的任务，以分摊负载并使进度跟踪更容易。
- **失败后恢复**：如果任务被中断，重新运行即可。Rclone 的 Copy 操作会跳过已经存在且匹配的文件，因此你只需传输缺失的部分。
- **带宽注意事项**：Azure 和 Cloudflare 都支持高吞吐量传输，但当通过 RcloneView 路由时，本地计算机的带宽会成为瓶颈。为了获得最快的迁移速度，请在靠近你的 Azure 区域的虚拟机上运行 RcloneView。

## 步骤六：更新你的应用程序

验证完成后：

1. 更新应用程序配置，使其指向 R2 端点而不是 Azure Blob。
2. 在预发布环境中进行充分测试。
3. 切换生产流量。
4. 保留 Azure Blob 数据一段回滚期（通常为 30 天），然后删除以停止产生存储费用。

## 开始使用

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 在 New Remote 向导中**连接 Azure Blob 和 Cloudflare R2**。
3. **迁移、验证并切换**——从你的云账单中消除流出费用。

零流出费用意味着每一次读取都是免费的。RcloneView 帮你把数据送达。

---

**相关指南：**

- [使用 RcloneView 从 Cloudflare R2 迁移到 AWS S3](https://rcloneview.com/support/blog/move-from-cloudflare-r2-to-aws-s3-with-rcloneview)
- [使用 RcloneView 比较 Cloudflare R2 和 AWS S3](https://rcloneview.com/support/blog/compare-cloudflare-r2-and-aws-s3-with-rcloneview)
- [使用 RcloneView 将 Dropbox 迁移到 Azure Blob Storage](https://rcloneview.com/support/blog/migrate-dropbox-to-azure-blob-storage-rcloneview)

<CloudSupportGrid />
