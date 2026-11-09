---
slug: fix-slow-s3-bucket-listing-many-small-files-rcloneview
title: "解决小文件众多的 S3 存储桶列表与同步缓慢问题 — 使用 RcloneView 调优"
authors:
  - morgan
description: "解决小文件众多的存储桶上 S3 同步和列表缓慢的问题。在 RcloneView 中调整检查器、传输数和过滤器,并通过 Dry Run 验证。"
keywords:
  - S3 小文件同步缓慢
  - S3 存储桶列表缓慢
  - rclone checkers 调优
  - S3 数百万文件同步
  - RcloneView S3
  - 加快 S3 同步
  - 小文件传输缓慢
  - S3 兼容存储同步性能
tags:
  - RcloneView
  - troubleshooting
  - tips
  - s3
  - performance
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 解决小文件众多的 S3 存储桶列表与同步缓慢问题 — 使用 RcloneView 调优

> 拥有数十万个小文件的存储桶同步缓慢,原因是每个对象的开销而非带宽,几项任务设置即可改善。

摄影师的代理文件夹或应用程序的日志归档可能包含海量的小对象。每个对象都需要列表条目、比较和请求,因此即使网络空闲,同步也会很慢。RcloneView 在任务向导中提供了相关的 rclone 设置,无需手写参数即可调整。S3、Azure 或 Backblaze B2 在 FREE 许可证下即可完整读写连接。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 为什么小文件很慢

对于大文件,吞吐量起主导作用。对于小文件,请求数量起主导作用:每个对象都要被列出、按大小、时间或校验和比较,并单独上传。这里的缓慢通常源于单次请求延迟和提供商侧的速率限制,因此增加带宽毫无作用。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="显示文件数量和速度的 Transferring 选项卡" class="img-large img-center" />

运行期间打开 Transferring 选项卡。如果速度较低但文件数稳步增长,说明瓶颈在请求数量而非带宽。

## 调整任务设置

在同步向导的第 2 步中,提高文件传输数量可让更多对象并行移动。equality checkers 默认值为 8;在缓慢或被限流的后端上,建议使用 4 或更少,因为同时检查过多可能触发限流,使情况更糟。每次只修改一个值,然后重新运行。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="传输数和检查器的任务高级设置" class="img-large img-center" />

启用校验和比较会在大小检查之外增加哈希计算,因此仅在完整性比速度更重要时使用。将重试设置保持为默认值 3,以免临时错误中断长时间运行的任务。

## 缩减工作量

第 3 步的过滤器可减轻列表负载。使用最大文件时长跳过旧对象,排除不需要的文件夹,并使用预定义过滤器排除某些文件类型。将一个庞大的任务拆分为按前缀划分的任务,也更便于隔离故障并重新运行。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="在 RcloneView 中运行调优后的同步任务" class="img-large img-center" />

更改过滤器后,请务必运行 Dry Run,以便在正式运行前准确查看哪些文件将被复制或删除。

## 开始使用

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 打开缓慢的任务,观察 Transferring 选项卡,确认瓶颈在于请求数量。
3. 逐一调整传输数和检查器,并添加过滤器以缩小范围。
4. 在 Job History 中比较耗时,保留表现最佳的设置。

小而有条理的改动,可以让通宵的同步变成日常任务。

---

**相关指南:**

- [解决 S3 分片上传失败](https://rcloneview.com/support/blog/fix-s3-multipart-upload-failures-rcloneview)
- [解决云传输速度缓慢](https://rcloneview.com/support/blog/fix-slow-cloud-transfers-speed-rcloneview)
- [解决云 API 速率限制错误](https://rcloneview.com/support/blog/fix-cloud-api-rate-limiting-errors-rcloneview)

<CloudSupportGrid />
