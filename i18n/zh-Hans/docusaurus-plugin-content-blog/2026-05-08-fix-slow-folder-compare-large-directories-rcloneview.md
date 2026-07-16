---
slug: fix-slow-folder-compare-large-directories-rcloneview
title: "修复大目录文件夹对比速度慢的问题 — RcloneView 指南"
authors:
  - jay
description: "加快 RcloneView 中大目录文件夹对比操作的速度——涵盖校验并发数、过滤规则以及高效对比数百万文件的策略。"
keywords:
  - slow folder compare RcloneView
  - fix slow cloud directory comparison
  - RcloneView folder compare large files
  - speed up cloud folder comparison
  - RcloneView compare performance
  - large directory cloud comparison
  - folder compare timeout fix
  - optimize RcloneView compare
tags:
  - folder-comparison
  - troubleshooting
  - tips
  - performance
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 修复大目录文件夹对比速度慢的问题 — RcloneView 指南

> 如果设置未经优化，对比包含数万个文件的目录可能会非常缓慢。以下是如何调优 RcloneView 的文件夹对比功能，以适应大规模云目录。

RcloneView 的文件夹对比是其最强大的功能之一——它能精确显示两个位置之间哪些文件存在差异、哪些仅存在于一侧、哪些完全相同。但如果配置未针对工作负载进行调优，对比两个包含 50 万个文件的 S3 存储桶，或将 NAS 目录与云端归档进行对比，可能会非常缓慢。以下调整可以将对比时间从数小时缩短到几分钟。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 对比前先用过滤器缩小范围

加快文件夹对比速度最快的方法是减少需要对比的文件数量。使用**带过滤器的文件夹对比**（PLUS 许可证）功能，可以排除无需校验的文件类型——例如排除不影响数据完整性评估的 `.tmp`、`.log` 和 `.DS_Store` 文件。您还可以按文件夹名称进行过滤，仅对比大型目录树中的特定子目录。

过滤语法遵循 rclone 的过滤规则：`.tmp` 会排除具有该扩展名的所有文件，`/.git/*` 会排除根目录下 `.git` 文件夹中的文件，`/archive/` 则会跳过整个顶层文件夹。在开始对比之前应用这些规则，能大幅减少 rclone 需要枚举和哈希计算的项目数量。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Using Folder Compare with filter to reduce scope in RcloneView" class="img-large img-center" />

## 针对速度较慢的后端调整校验并发数

RcloneView 的任务设置中包含**相等性校验器数量**（Number of equality checkers），默认值为 8。对于速度较慢的云端后端（延迟较高或 API 速率限制严格的服务），这个较高的默认值可能导致校验器在等待 API 响应时堆积，反而拖慢了整体速度。对于 Google Drive、OneDrive 或速度较慢的 WebDAV 服务器等提供商，可以尝试将校验器数量降低到 2–4。

反之，对于 Wasabi 或 Cloudflare R2 等快速的 S3 兼容后端，将校验器数量提高到 16 甚至更高，可以显著加快大型存储桶的列表速度。请测试不同的数值——最佳设置因服务商和网络状况而异。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Configuring checker concurrency for folder compare in RcloneView" class="img-large img-center" />

## 初次扫描时使用仅按大小对比模式

默认情况下，rclone 会同时按文件大小和修改时间对比文件。对于大型目录的快速初次扫描，您可以使用仅按大小的对比方式，以识别明显的差异（仅存在于一侧的文件，或大小明显不同的文件），而无需承担校验和验证带来的额外开销。

在 RcloneView 中，您可以在**设置 → 内嵌 Rclone → 全局 Rclone 标志**（Settings → Embedded Rclone → Global Rclone Flags）中为对比会话添加 `--size-only` 作为全局 Rclone 标志。这会以一定的准确性换取速度——适用于大型初步审查，之后再对可疑文件进行完整的校验和对比。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Reviewing folder compare history and timing in RcloneView" class="img-large img-center" />

## 快速上手

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 在对比前使用**带过滤器的文件夹对比**（PLUS）功能排除不相关的文件类型。
3. 针对速度较慢的后端将校验并发数降低到 2–4；针对快速的 S3 服务商则提高该数值。
4. 对超大目录进行快速初步审查时，使用仅按大小对比模式。

只要配置得当，文件夹对比功能就能在跨云服务商的情况下扩展到处理数百万个文件，而不会产生不必要的延迟。

---

**相关指南：**

- [文件夹对比指南 — 使用 RcloneView 检测差异](https://rcloneview.com/support/blog/folder-comparison-guide-detect-differences-rcloneview)
- [使用 RcloneView 进行过滤规则与选择性同步](https://rcloneview.com/support/blog/filter-rules-selective-sync-rcloneview)
- [使用 RcloneView 检查并验证云文件完整性](https://rcloneview.com/support/blog/check-verify-cloud-file-integrity-rcloneview)

<CloudSupportGrid />
