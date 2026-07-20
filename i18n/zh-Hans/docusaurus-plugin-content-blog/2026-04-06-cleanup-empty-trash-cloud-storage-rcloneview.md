---
slug: cleanup-empty-trash-cloud-storage-rcloneview
title: "清理云存储：使用 RcloneView 清空回收站并删除旧版本"
authors:
  - tayson
description: "使用 RcloneView 清空回收站、删除旧文件版本并清理孤立数据，释放 Google Drive、OneDrive、S3 等平台上的云存储空间。"
keywords:
  - rclone cleanup cloud storage
  - empty google drive trash rclone
  - onedrive recycle bin cleanup
  - remove old versions s3
  - free cloud storage space
  - rcloneview cleanup feature
  - cloud storage versioning cleanup
  - rclone delete old versions
  - reclaim cloud quota
  - cloud storage trash management
tags:
  - RcloneView
  - feature
  - cleanup
  - cloud-storage
  - guide
  - tips
  - cost-optimization
  - file-management
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 清理云存储：使用 RcloneView 清空回收站并删除旧版本

> 已删除的文件和旧版本会悄悄占用你的云存储配额。RcloneView 让你可以轻松清理它们，找回你已经付费购买的存储空间。

每次你在 Google Drive 上删除一个文件，它都会进入回收站。每次 OneDrive 覆盖一个文档，它都会保留旧版本。每次启用了版本控制的 S3 存储桶接收更新时，之前的对象都会被保留下来。这些看不见的副本会在数月乃至数年间不断累积，占用配额并推高存储费用。Rclone 的 `cleanup` 命令可以清除这些隐藏的冗余数据，而 RcloneView 让你只需点击几下就能运行它。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 已删除和已版本化的文件如何浪费配额

大多数云服务商都会将已删除和已版本化的文件计入你的存储配额。其影响往往比预想的更大：

| 服务商 | 计入配额的内容 | 自动清除策略 |
|----------|--------------------------|-------------------|
| **Google Drive** | 已删除文件、所有文件版本 | 回收站在 30 天后自动删除 |
| **OneDrive** | 回收站项目、版本历史 | 回收站在 93 天后自动清空 |
| **Dropbox** | 已删除文件及旧版本 | 保留 30 天（基础版）或 180 天（专业版） |
| **Amazon S3** | 所有对象版本（如启用版本控制） | 无自动清除；需配置生命周期规则 |
| **Backblaze B2** | 所有文件版本 | 若无生命周期规则则不会自动清除 |
| **Google Cloud Storage** | 非当前对象版本 | 可通过生命周期策略配置 |

一个使用率达到 90% 的 Google Drive 账户，可能仅回收站就占用了 5%-10% 的使用量。在启用了版本控制的 S3 存储桶上，旧版本可能会使实际存储消耗随时间翻倍甚至增至三倍。

## 按服务商执行清理

### Google Drive 回收站

Google Drive 的回收站是隐藏用量最常见的来源。要清空它：

```bash
rclone cleanup gdrive:
```

这会永久删除 Google Drive 回收站中的所有文件，且无法撤销——在运行此命令前，请确保回收站中没有你仍需要的内容。

在 RcloneView 中，你无需打开终端即可从界面触发清理。导航到你的 Google Drive 远程，使用清理操作即可。

<img src="/support/images/en/blog/new-remote.png" alt="RcloneView showing Google Drive remote ready for cleanup" class="img-large img-center" />

### OneDrive 回收站

OneDrive 会将已删除的文件在回收站中保留最长 93 天：

```bash
rclone cleanup onedrive:
```

这会清空回收站。对于回收站容量较大的 OneDrive 商业版账户，此操作可以立即释放大量空间。

### S3 已版本化对象

启用了版本控制的 S3 存储桶会累积旧对象版本。Rclone 的清理功能可移除非当前版本：

```bash
rclone cleanup s3-remote:my-bucket
```

对于拥有数千个已版本化对象的存储桶，此操作可能需要一些时间。你可以针对特定前缀进行有选择的清理：

```bash
rclone cleanup s3-remote:my-bucket/logs/
```

### Dropbox 及其他服务商

Dropbox 不直接通过 rclone 支持 cleanup 命令。对于 Dropbox，请通过其网页界面或 API 管理已删除文件和版本。其他服务商，如 pCloud 和 Backblaze B2，支持类似于上述示例的清理方式。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="RcloneView explorer showing storage before cleanup" class="img-large img-center" />

## 检查回收站占用了多少空间

在运行清理之前，先检查你能够找回多少空间：

```bash
rclone about gdrive:
```

输出中包含一行 **Trashed**，显示了已删除文件所占用的确切空间大小：

```
Total:   15 GiB
Used:    12.3 GiB
Free:    2.7 GiB
Trashed: 3.8 GiB
```

在此示例中，清空回收站将立即释放 3.8 GiB 空间——使可用空间增加一倍以上。

## 有选择地删除旧文件版本

某些工作流程需要保留最新版本，同时删除较旧的版本。Rclone 通过特定后端的命令支持这一操作：

对于启用了版本控制的 S3：

```bash
rclone backend cleanup-hidden s3-remote:my-bucket
```

此操作只会删除隐藏（非当前）版本，同时保持每个对象的当前版本完好无损。

对于 Google Drive，你可以在远程配置中使用 `--drive-keep-revision-forever=false`，以防止今后无限期保留版本。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Execute cleanup job in RcloneView" class="img-large img-center" />

## 使用计划任务自动化清理

手动清理是可行的，但计划性清理可以防止问题再次出现：

1. 在 RcloneView 中，为每个远程创建一个包含清理命令的新**任务（Job）**。
2. 打开**任务调度器（Job Scheduler）**，设置一个重复计划——对大多数账户而言，每月一次就足够了。
3. 每次运行后查看**任务历史（Job History）**，确认清理成功完成。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule automated cleanup job in RcloneView" class="img-large img-center" />

每月一次的清理计划可以确保回收站和旧版本不会累积到引发配额问题或费用膨胀的程度。

## 安全注意事项

- **清理是永久性的**——运行 `rclone cleanup` 后，已删除的文件无法恢复。
- **先检查回收站**——在清空之前，通过服务商的网页界面浏览回收站内容。
- **S3 版本控制自有其用途**——如果你依赖版本进行回滚，请不要盲目清理。可以考虑使用只保留最近 N 个版本的生命周期规则。
- **先在非关键远程上测试**——在生产数据上运行清理之前，先确认其行为符合预期。
- **清理不支持模拟运行**——与同步或复制不同，清理没有 `--dry-run` 模式。请在确认回收站中的内容后再放心执行。

## 成本影响

对于按使用量计费的服务商，清理能够直接降低账单：

| 服务商 | 存储费用 | 每 100 GB 旧版本/回收站数据 |
|----------|-------------|------------------------------|
| Amazon S3 Standard | $0.023/GB/月 | 每月节省 $2.30 |
| Backblaze B2 | $0.006/GB/月 | 每月节省 $0.60 |
| Google Cloud Standard | $0.020/GB/月 | 每月节省 $2.00 |
| Wasabi | $0.0069/GB/月 | 每月节省 $0.69 |

对于按配额计费的服务商，清理可以避免触及限制而导致同步和备份中断。

---

**相关指南：**

- [分析云存储使用情况和配额](https://rcloneview.com/support/blog/rclone-about-storage-usage-analysis-rcloneview)
- [Wasabi 与 Backblaze B2 与 IDrive e2 对比](https://rcloneview.com/support/blog/wasabi-vs-backblaze-b2-vs-idrive-e2-comparison-rcloneview)
- [云到云传输与同步](https://rcloneview.com/support/blog/effortless-cloud-to-cloud-transfers-syncing)

<CloudSupportGrid />
