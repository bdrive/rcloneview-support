---
slug: fix-slow-cloud-uploads-speed-optimization-rcloneview
title: "云上传速度太慢？使用 RcloneView 进行速度优化的技巧"
authors:
  - tayson
description: "云上传速度慢？了解云传输缓慢的原因，以及如何通过并行传输、分块、带宽控制和针对不同服务商的调优在 RcloneView 中优化速度。"
keywords:
  - slow cloud upload fix
  - speed up cloud transfer
  - cloud upload slow
  - optimize cloud sync speed
  - parallel cloud transfers
  - rclone speed optimization
  - google drive upload slow
  - s3 upload speed
  - cloud transfer performance
  - fast cloud sync tool
tags:
  - performance
  - optimization
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 云上传速度太慢？使用 RcloneView 进行速度优化的技巧

> 你开始一次云上传，预计需要 30 分钟。两个小时后，进度只有 40%。在你责怪自己的网络之前，问题可能出在你的工具上，而不是你的连接。

云传输缓慢令人沮丧，但这很少是由单一问题造成的。通常是多个因素共同作用的结果：未针对你的场景优化的默认设置、服务商特定的限速，以及低效的传输方式。RcloneView 为你提供了解决所有这些问题的控制选项。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 为什么云传输会很慢

### 1) 单线程传输

大多数云同步工具一次只上传一个文件。如果你有 10,000 个小文件，每个文件都需要一次单独的 HTTP 连接——建立连接、传输、校验。每个文件的开销可能超过实际传输时间。

**解决方法**：增加并行传输数。Rclone 默认值为 4，但许多连接可以承受 8–16 个甚至更多。

### 2) 分块过小

大文件是分块上传的。如果分块大小过小，每个分块都需要单独的 HTTP 请求，从而增加开销。如果分块过大，一个分块失败就意味着要重新上传更多数据。

**解决方法**：对于稳定的连接，增大分块大小。对于 Google Drive，可尝试 64M 或 128M。对于 S3，可尝试 16M–64M。

### 3) 服务商速率限制

云服务商会对上传进行限速以防止滥用：

- **Google Drive**：约 750 GB/天 的上传限额。
- **OneDrive**：在持续高吞吐量之后会进行限速。
- **Dropbox**：在高负载下会逐步限速。
- **S3**：每个前缀 3,500 次 PUT 请求/秒。

**解决方法**：通过调整传输速度来遵守速率限制。使用[带宽限制](https://rcloneview.com/support/blog/set-bandwidth-limits-cloud-transfers-rcloneview)以保持在阈值以下。

### 4) 没有服务端复制

在两个云之间传输时（例如 S3 到 S3），一些工具会先下载到你的设备，然后再重新上传。Rclone 对兼容的服务商支持服务端复制——数据可直接在云之间移动，无需经过你的设备。

**解决方法**：RcloneView 会在可用时自动使用服务端复制。

### 5) 逐一检查每个文件

在传输之前，rclone 会检查目标位置是否已存在每个文件。当文件数量庞大时，这个检查阶段所花费的时间可能比实际传输还长。

**解决方法**：在首次批量传输时使用 `--no-check-dest`。对于增量同步，则使用正常检查。

## 速度优化设置

### 并行传输

增加同时进行的文件传输数量：

| 场景 | 建议设置 |
|----------|-------------------|
| 默认 | 4 个传输 |
| 快速网络（100+ Mbps） | 8–16 个传输 |
| 大量小文件 | 16–32 个传输 |
| 仅少量大文件 | 4–8 个传输 |

更多的并行传输有助于处理大量小文件。对于少量大文件，分块大小更为重要。

### 各服务商的分块大小

| 服务商 | 默认分块 | 建议值 |
|----------|--------------|-------------|
| Google Drive | 8 MB | 64–128 MB |
| OneDrive | 10 MB | 64 MB |
| S3 | 5 MB | 16–64 MB |
| Dropbox | 48 MB | 48–150 MB |

更大的分块意味着更少的 HTTP 请求和更低的开销。

### 缓冲区大小

增大内存缓冲区以加快读取速度：

- 默认：16 MB
- 建议：64–256 MB（如果你有足够的内存）

这在从速度较慢的来源（NAS、机械硬盘）读取数据时会有帮助。

## 监控与测量

实时跟踪传输速度，以观察你所做更改的效果：

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitor transfer speed in real time" class="img-large img-center" />

### 需要关注的内容

- **传输速度** —— 应与你网络上传速度的合理比例相符。
- **活跃传输数** —— 应与你设置的并行传输数相符。
- **错误** —— 速率限制错误（429、403）意味着你需要放慢速度。
- **检查与传输的对比** —— 如果检查耗时过长，可以考虑在首次上传时跳过检查。

## 针对不同服务商的技巧

### Google Drive

- 将分块大小设置为 64M 或更高。
- 将并行传输数保持在 4–8（超过这个数字 Google 会激进地限速）。
- 如果达到 750 GB 的每日限额，可将传输安排在多天内完成。

### OneDrive / SharePoint

- 使用 4–8 个并行传输。
- 分块大小 64 MB 效果不错。
- OneDrive 根据总传输量进行限速——将大型传输分散到不同时间段进行。

### AWS S3

- S3 能很好地处理高并行度——可尝试 16–32 个传输。
- 对于超过 100 MB 的文件使用分段上传。
- 选择离你所在位置较近的 S3 区域以降低延迟。

### Backblaze B2

- 支持高并行度——16 个以上的传输效果不错。
- 分块大小不适用（B2 使用自己的大文件 API）。
- 没有每日传输限额。

## 用于优化工作流程的批处理任务

借助 v1.3 批处理任务功能，可以串联出一个优化的传输序列：

1. 使用激进设置进行批量传输。
2. 进行校验比对。
3. 完成后发送通知。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Batch optimized transfer workflow" class="img-large img-center" />

## 快速检查清单

- **增加并行传输数** —— 尤其是在有大量小文件时。
- **增大分块大小** —— 尤其是在有大文件时。
- **检查你的网络速度** —— 使用 `speedtest-cli` 为你的连接建立基准。
- **监控速率限制** —— 在传输日志中留意 429/403 错误。
- **使用服务端复制** —— 在兼容的云之间传输时使用。
- **安排大型传输的时间** —— 在非高峰时段进行，以避免影响你的网络。

## 快速上手

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 在任务配置中**调整你的传输设置**。
3. **实时监控速度**。
4. **调整并迭代** —— 小改动也能显著提升吞吐量。

默认设置适用于大多数场景。但当你要传输数 TB 的数据时，优化会很快带来回报。

---

**相关指南：**

- [设置带宽限制](https://rcloneview.com/support/blog/set-bandwidth-limits-cloud-transfers-rcloneview)
- [创建同步任务](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [任务调度](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)

<CloudSupportGrid />
