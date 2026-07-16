---
slug: multi-threaded-transfers-parallel-streams-rcloneview
title: "加速云端传输——RcloneView 中的多线程上传与并行流"
authors:
  - tayson
description: "云端传输不必很慢。了解如何在 RcloneView 中使用多线程上传、并行文件传输和传输优化设置来最大化吞吐量。"
keywords:
  - multi threaded cloud upload
  - parallel cloud transfer
  - speed up cloud sync
  - rclone parallel transfers
  - fast cloud upload
  - cloud transfer optimization
  - rcloneview transfer speed
  - concurrent cloud uploads
  - multi stream upload
  - maximize cloud transfer speed
tags:
  - RcloneView
  - performance
  - feature
  - guide
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 加速云端传输——RcloneView 中的多线程上传与并行流

> 逐个文件将 500 GB 数据上传到 S3 需要数天时间。而借助并行传输和多线程上传，只需数小时即可完成。以下是如何配置 RcloneView 以实现最高速度。

默认情况下，云传输工具会按顺序处理文件，并以单一数据流上传每个文件。这几乎无法发挥你的网络和云存储提供商所能承受的能力。RcloneView 由 rclone 提供支持，同时支持并行文件传输（同时传输多个文件）和多线程上传（将大文件拆分为并发数据流）。正确配置这些选项可以大幅缩短传输时间。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 两种并行方式

### 并行文件传输

同时传输多个文件。不再是先上传文件 1，再上传文件 2，然后是文件 3——而是同时上传全部三个文件。这由 `--transfers` 设置控制（默认值：4）。

### 单文件多线程上传

将一个大文件拆分为多个块并并发上传。一个 10 GB 的视频文件会被拆分为多个部分，各部分并行上传，然后在目标端重新组合。这由 `--multi-thread-streams` 设置控制（默认值：4）。

## 如何在 RcloneView 中进行配置

### 调整并行传输数

在任务设置中，或通过 RcloneView 的终端，设置并发文件传输的数量：

- **4 个传输**（默认值）——适合大多数情况
- **8-16 个传输**——适合网速快且小文件较多的场景
- **2-4 个传输**——更适合网速慢或提供商有严格速率限制的情况

### 调整多线程流数

对于大文件上传，可增加流的数量：

- **4 个流**（默认值）——性能均衡
- **8-16 个流**——适用于快速网络上的大文件
- **1 个流**——适用于不支持分段上传的提供商

## 监控效果

实时观察传输速度，查看设置更改带来的效果：

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitor transfer speed" class="img-large img-center" />

## 各场景下的最佳设置

| 场景 | 传输数 | 流数 | 原因 |
|----------|-----------|---------|-----|
| 大量小文件（照片、文档） | 16 | 1 | 文件开销占主导；更多并行文件有帮助 |
| 少量大文件（视频、备份） | 2-4 | 8-16 | 单文件速度至关重要；更多流有帮助 |
| 混合文件大小 | 8 | 4 | 均衡方式 |
| 慢速网络（< 50 Mbps） | 2-4 | 2-4 | 避免连接过载 |
| 快速网络（> 500 Mbps） | 16+ | 8-16 | 充分利用可用带宽 |
| 有速率限制的提供商 | 2-4 | 4 | 保持在 API 限制之内 |

## 针对特定提供商的建议

### Google Drive
Google 设有每日上传限额（750 GB）以及每秒 API 调用限制。请将传输数保持在适中水平（4-8），并使用 `--tpslimit` 以避免超出速率限制。

### S3 / S3 兼容存储
S3 能很好地处理高并行度。可将传输数提高到 16 以上，流数提高到 8-16，以获得最大吞吐量。

### OneDrive
OneDrive 对高并发较为敏感。请从 4 个传输开始，然后逐步增加。

### Backblaze B2
B2 能很好地处理分段上传。可使用 4-8 个传输配合 4-8 个流。

## 使用 RcloneView 终端进行精细调优

如需高级调优，可使用内置终端运行带有特定参数的 rclone 命令。测试不同配置，并通过实时监控来衡量结果。

## 查看任务历史以了解结果

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Review transfer performance" class="img-large img-center" />

比较优化前后的任务耗时。任务历史会显示总耗时、已传输文件数以及平均速度。

## 快速上手

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. **从默认设置开始**（4 个传输，4 个流）。
3. 在传输过程中**监控速度**。
4. 根据你的网络和提供商情况**逐步增加**参数。
5. **比较任务历史**以衡量改进效果。

更高的并行度意味着更快的传输速度——但仍受限于你的网络和提供商的上限。

---

**相关指南：**

- [修复缓慢的云端上传](https://rcloneview.com/support/blog/fix-slow-cloud-uploads-speed-optimization-rcloneview)
- [设置带宽限制](https://rcloneview.com/support/blog/set-bandwidth-limits-cloud-transfers-rcloneview)
- [任务历史与日志](https://rcloneview.com/support/blog/job-history-transfer-logs-monitoring-rcloneview)

<CloudSupportGrid />
