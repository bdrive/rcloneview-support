---
slug: migrate-dropbox-to-wasabi-rcloneview
title: "如何使用 RcloneView 将文件从 Dropbox 迁移到 Wasabi 热云存储"
authors:
  - tayson
description: 使用 RcloneView 将文件从 Dropbox 迁移到 Wasabi 热云存储的分步指南——节省成本、通过对比功能验证数据，并安排持续同步。
keywords:
  - rcloneview
  - dropbox to wasabi
  - migrate dropbox
  - wasabi hot storage
  - cloud migration
  - s3 compatible storage
  - rclone GUI
  - dropbox alternative
  - wasabi cloud storage
  - cloud-to-cloud transfer
tags:
  - dropbox
  - wasabi
  - migration
  - cloud-migration
  - s3-compatible
  - cloud-to-cloud
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 如何使用 RcloneView 将文件从 Dropbox 迁移到 Wasabi 热云存储

> Dropbox 使用方便，但在大规模使用时成本高昂。**Wasabi 热云存储** 提供与 S3 兼容的对象存储，价格只是其一小部分——而 **RcloneView** 让迁移变得毫不费力。

长期以来，Dropbox 一直是文件共享和协作的首选工具。但随着存储需求的增长——尤其是对于媒体公司、创意机构和数据密集型团队而言——按用户收费的定价模式变得越来越难以承受。Wasabi 提供无出口费用、无 API 请求费用的热云存储，按每 TB 计费且价格可预测，相比 Dropbox Business 可节省 80% 甚至更多的存储成本。

真正困难的是迁移本身。在不同云之间移动数百 GB（甚至数 TB）的数据，需要一款能够处理中断、验证完整性并让你实时监控进度的可靠工具。RcloneView 正是为此而生——它提供可视化的双面板界面，用于云到云的传输，底层由久经考验的 rclone 引擎驱动。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 为什么要从 Dropbox 迁移到 Wasabi

迁移的动机通常归结为成本和掌控力：

- **节省成本**：Wasabi 的收费约为每月每 TB 6.99 美元，没有出口费用或 API 费用。而 Dropbox Business 套餐是按用户收费的，无论实际存储用量多少都要付费。
- **S3 兼容性**：Wasabi 使用 S3 API，因此你的数据可以通过任何兼容 S3 的工具、SDK 或应用访问——不会被单一供应商锁定。
- **无出口费用**：随时下载数据，不会产生意外的带宽费用。
- **默认热存储**：Wasabi 中的每个对象都可以立即访问，没有检索延迟，也无需管理存储类别层级。
- **可扩展性**：Wasabi 可以处理 PB 级数据，而无需改变你的工作流程或定价模式。

## 第一步：在 RcloneView 中设置两个远程

首先连接两个云端：

1. 打开 RcloneView，点击 **+ 新建远程**。
2. **添加 Dropbox**：选择 Dropbox，完成 OAuth 登录，并为其命名（例如 `MyDropbox`）。
3. **添加 Wasabi**：选择兼容 S3 的存储，选择 Wasabi 作为提供商，输入你的 Access Key、Secret Key 和区域端点（例如 `s3.wasabisys.com`）。为其命名（例如 `MyWasabi`）。
4. 确认两个远程都已出现在资源管理器中。

<img src="/support/images/en/blog/new-remote.png" alt="Adding Dropbox and Wasabi remotes in RcloneView" class="img-large img-center" />

## 第二步：规划你的迁移

在移动任何数据之前，先梳理好你的文件夹结构：

- **决定迁移内容**：迁移全部数据，还是只迁移特定文件夹？使用 RcloneView 的过滤器排除临时文件、共享快捷方式或旧的项目归档。
- **创建你的 Wasabi 存储桶**：如果尚未创建，可以在 Wasabi 控制台或通过 RcloneView 的资源管理器创建一个存储桶。
- **规划文件夹路径**：Dropbox 使用扁平化的根目录；Wasabi 则使用存储桶和前缀。决定你想要的结构是 `MyWasabi:my-bucket/Dropbox/` 还是更扁平的结构。

## 第三步：执行迁移

在资源管理器的一侧打开 Dropbox，另一侧打开 Wasabi。你有以下几种选择：

### 小批量拖放操作

在 Dropbox 中选中文件夹，将其拖到 Wasabi 面板中。这种方式非常适合在正式全量迁移前用一小部分数据进行测试。

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="Drag and drop files from Dropbox to Wasabi" class="img-large img-center" />

### 全量迁移的复制任务

对于大规模迁移，请创建一个 **复制** 任务。这样可以进行 Dry Run（模拟运行）、监控进度，并在中断后恢复。

1. 选择 Dropbox 中的源文件夹和 Wasabi 中的目标位置。
2. 选择 **复制** 作为操作。
3. 先运行 **Dry Run**，查看将要传输的内容。
4. 执行任务并实时监控进度。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Real-time transfer monitoring during Dropbox to Wasabi migration" class="img-large img-center" />

## 第四步：使用对比功能验证数据

迁移完成后，使用 RcloneView 的 **对比** 功能验证数据完整性：

1. 并排打开 Dropbox 和 Wasabi。
2. 对迁移后的目录运行文件夹对比。
3. 查看结果——任何被标记为不同或缺失的文件都需要处理。

对于大规模迁移而言，这一步至关重要，因为网络超时或 API 速率限制可能导致个别文件传输失败。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare folders between Dropbox and Wasabi to verify migration" class="img-large img-center" />

## 第五步：处理大规模数据集

如果你要迁移数 TB 的数据，请记住以下几点：

- **Dropbox API 速率限制**：Dropbox 会对 API 请求进行限速。RcloneView 和 rclone 会自动处理重试，但非常大规模的迁移可能需要数天时间。请耐心等待。
- **在非高峰时段运行**：在夜间或周末启动大型传输任务，以尽量减少对团队 Dropbox 使用的影响。
- **使用增量运行**：如果第一次运行被中断，只需重新运行同一个复制任务即可。Rclone 会跳过目标位置中已存在且匹配的文件。
- **注意 Wasabi 的最短存储期限**：Wasabi 有 90 天的最短存储期限政策。如果你在正式迁移前进行测试，请提前做好规划。

## 第六步：安排持续同步（可选）

如果你需要一个过渡期，让 Dropbox 和 Wasabi 保持同步：

1. 创建一个从 Dropbox 到 Wasabi 的 **同步** 任务。
2. 在 **任务调度** 面板中将其设置为每天或每周运行。
3. 一旦你的团队完全过渡到 Wasabi，禁用该调度并停用 Dropbox。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule ongoing sync from Dropbox to Wasabi" class="img-large img-center" />

## 开始使用

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 在新建远程向导中 **连接 Dropbox 和 Wasabi**。
3. **复制、验证并安排调度**——按照自己的节奏迁移，全程掌控进度。

摆脱 Dropbox 不必是一个耗费整个周末的项目。RcloneView 让它成为一个可管理、可重复的流程。

---

**相关指南：**

- [使用 RcloneView 将 Dropbox 迁移到 Google Drive](https://rcloneview.com/support/blog/migrate-dropbox-to-google-drive-with-rcloneview)
- [Wasabi 与 Backblaze B2 与 IDrive e2 对比](https://rcloneview.com/support/blog/wasabi-vs-backblaze-b2-vs-idrive-e2-comparison-rcloneview)
- [使用 RcloneView 将 Dropbox 迁移到 Azure Blob 存储](https://rcloneview.com/support/blog/migrate-dropbox-to-azure-blob-storage-rcloneview)

<CloudSupportGrid />
