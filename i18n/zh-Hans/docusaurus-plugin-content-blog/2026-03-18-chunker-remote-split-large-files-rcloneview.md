---
slug: chunker-remote-split-large-files-rcloneview
title: "Chunker 远程 — 在 RcloneView 中为有大小限制的云服务商拆分大文件"
authors:
  - tayson
description: "有些云服务商会拒绝超过一定大小的文件。Rclone 的 chunker 远程可以在上传时自动将大文件拆分成多个分块，并在下载时重新组装。"
keywords:
  - rclone chunker remote
  - split large files cloud
  - cloud file size limit
  - upload large files cloud
  - chunked upload cloud
  - large file cloud storage
  - rclone split files
  - file size limit workaround
  - cloud upload size limit
  - chunker rcloneview
tags:
  - RcloneView
  - feature
  - performance
  - cloud-storage
  - guide
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Chunker 远程 — 在 RcloneView 中为有大小限制的云服务商拆分大文件

> 你的视频文件有 15 GB，而云服务商的上传限制是 5 GB。与其重新编码视频或另找服务商，不如用 chunker 远程自动拆分它。

有些云存储服务商会设置文件大小上限。Google Drive 的上限是 5 TB（很少会成为问题），但其他服务商——尤其是免费套餐、WebDAV 端点以及部分兼容 S3 的服务——限制要低得多。Rclone 的 chunker 远程解决了这个问题：上传时透明地将大文件拆分成多个分块，下载时再重新组装。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Chunker 的工作原理

chunker 远程会包装另一个远程，并且：

1. **拆分文件** — 将超过设定大小的文件拆分为编号分块
2. **逐个上传分块** 到云服务商
3. **下载时**，将分块重新组装成原始文件
4. **透明处理** — 你在资源管理器中看到的是原始文件，而不是分块

例如，一个 15 GB 的文件在分块大小为 5 GB 时，会在服务商那端变成三个 5 GB 的分块。当你浏览或下载时，它会显示为一个完整的 15 GB 文件。

## 何时需要 Chunker

| 场景 | 解决方案 |
|----------|----------|
| 服务商有文件大小限制 | Chunker 会拆分超出限制的部分 |
| WebDAV 服务器拒绝大文件上传 | 拆分成更小的分块 |
| 免费套餐有单文件限制 | 拆分以符合限制 |
| 大文件上传时网络中断 | 分块越小，重试越容易 |

## 创建 Chunker 远程

<img src="/support/images/en/blog/new-remote.png" alt="Create chunker remote" class="img-large img-center" />

创建一个 chunker 远程来包装你的目标存储远程。根据你的服务商限制来配置分块大小。

## 与其他远程组合使用

Chunker 可以与其他特殊远程叠加使用：

- **Chunker + Crypt**：拆分并加密大文件
- **Chunker + Compress**：拆分并压缩大文件
- **Chunker + 任意服务商**：适用于全部 70 多个服务商

## 重要提示

- **分块具有服务商特定性**：为某个服务商拆分的分块，必须通过相同的 chunker 配置来访问
- **不要直接修改分块**：始终通过 chunker 远程访问，以保持完整性
- **合理选择分块大小**：过小会产生大量文件（列表加载变慢）；过大则失去了拆分的意义

## 使用场景

### 备份虚拟机镜像

虚拟机磁盘镜像通常有 50-200 GB。Chunker 可以为有上传限制的服务商拆分这些文件。

### 归档大型媒体文件

4K 视频文件、原始音频母带以及超出单文件限制的大型数据集。

### 提高上传可靠性

当网络连接不稳定时，较小的分块更容易重试。如果一个 1 GB 的分块失败，你只需重试 1 GB，而不是整个 50 GB 的文件。

## 开始使用

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 正常**添加你的存储远程**。
3. **创建一个 chunker 远程**来包装它。
4. 通过 chunker **上传大文件**。

再大的文件也不怕，再小的服务商限制也不怕。

---

**相关指南：**

- [Compress 远程](https://rcloneview.com/support/blog/compress-remote-reduce-backup-size-rcloneview)
- [虚拟远程：组合、联合、别名](https://rcloneview.com/support/blog/virtual-remotes-combine-union-alias-rcloneview)
- [加密云备份](https://rcloneview.com/support/blog/encrypt-cloud-backups-crypt-remote-guide-rcloneview)

<CloudSupportGrid />
