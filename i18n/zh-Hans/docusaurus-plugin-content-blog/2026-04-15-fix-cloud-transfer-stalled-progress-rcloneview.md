---
slug: fix-cloud-transfer-stalled-progress-rcloneview
title: "修复云传输进度停滞 — 使用 RcloneView 解决问题"
authors:
  - tayson
description: "在 RcloneView 中修复停滞或冻结的云传输 — 诊断卡住的同步任务、解决超时问题，并在不丢失数据的情况下重启传输。"
keywords:
  - cloud transfer stuck
  - sync stalled fix
  - RcloneView transfer freeze
  - cloud upload stuck
  - fix stalled sync
  - rclone transfer timeout
  - cloud backup not progressing
  - resolve frozen transfer
  - cloud transfer hang
  - rclone timeout recovery
tags:
  - RcloneView
  - troubleshooting
  - tips
  - cloud-sync
  - performance
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 修复云传输进度停滞 — 使用 RcloneView 解决问题

> 传输进度显示 99% 却持续数小时不动，这通常意味着存在特定的底层问题 — RcloneView 提供了监控和控制工具，帮助你诊断停滞原因，并在不丢失数据的情况下干净地重启传输。

在接近完成时冻结的云传输，或长时间运行却无法结束的同步任务，是云管理中最令人困扰的问题之一。传输停滞通常是由大文件触及 API 超时限制、rclone 的重试逻辑未能恢复的网络中断，或导致连接挂起的服务商端限流所引起。RcloneView 会展示正在发生的情况，并让你能够精确地进行干预。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 诊断停滞问题

打开 RcloneView 底部信息视图中的 **Transferring** 标签页。该面板会以实时进度显示活动任务：传输速度、文件数量以及当前正在处理的具体文件。停滞状态在此处一目了然 —— 速度降至 0 B/s，同时某个特定文件的进度不再变化。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="RcloneView Transferring tab showing a stalled cloud transfer" class="img-large img-center" />

切换到 **Log** 标签页查看错误信息。常见的停滞原因会以带时间戳的形式出现在此处：
- **"too many requests"** — API 速率限制正在节流传输
- **"connection reset by peer"** — 网络中断打断了活动会话
- **"EOF"** 或超时消息 — 服务商在大文件上传过程中关闭了连接

对于超大文件（多 GB 的视频文件、数据库转储），问题通常出在分片上传组装过程中服务商端的会话超时。上传已经完成，但服务商的会话在确认已完成的分片之前就已过期，导致 rclone 无限期等待。

## 恢复停滞的传输

在 Transferring 标签页中，点击活动任务上的 **Cancel** 来取消停滞的任务。RcloneView 的同步和复制任务在设计上支持安全重启 —— 当你再次运行同一个任务时，rclone 会比较目标位置已存在的内容，并跳过已成功传输的文件。只有停滞的文件（以及尚未开始的文件）会被重试。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Canceling and restarting a stalled transfer job in RcloneView" class="img-large img-center" />

如果特定大文件向 S3 兼容后端传输时持续停滞，可以在 RcloneView 的全局 rclone 标志中增大分片大小（Settings > Embedded Rclone > Global Rclone Flags）：添加 `--s3-chunk-size 256M`，以减少大文件组装所需的 API 调用总数。

## 预防未来的停滞

将任务设置中的重试次数（Step 2: Advanced Settings > **Retry entire sync if fails**）设为 3 或更高 —— 这可确保临时性的网络问题触发自动重试，而不是立即导致任务失败。对于经由不稳定或速度较慢的连接（VPN、移动热点）进行的传输，减少 **Number of file transfers**（并发传输数）可以降低链路上的争用。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history showing recovered transfers after stall resolution in RcloneView" class="img-large img-center" />

**Job History** 标签页会随时间展示模式 —— 如果同一任务总是在一天中的特定时间停滞，原因很可能是服务商端在高峰时段进行的速率限制。将计划调整到非高峰时段即可解决该问题，无需修改任何配置。

## 快速上手

1. 在 **Transferring 标签页**中监控传输 —— 留意某个特定文件的速度是否为 0 B/s。
2. 检查 **Log 标签页**中提示根本原因的错误信息（超时、速率限制、网络重置）。
3. 取消并重启任务 —— rclone 会从中断的位置恢复，并跳过已完成的文件。
4. 在 Advanced Settings 中提高重试次数并调整分片大小，以预防未来的停滞。

停滞的传输几乎总是可以恢复的 —— 关键在于识别原因是来自服务商端、网络端，还是配置相关问题，然后采取针对性的修复措施。

---

**相关指南：**

- [使用 RcloneView 恢复中断或失败的云传输](https://rcloneview.com/support/blog/recover-interrupted-failed-transfers-rcloneview)
- [修复缓慢的云上传 — 使用 RcloneView 进行速度优化](https://rcloneview.com/support/blog/fix-slow-cloud-uploads-speed-optimization-rcloneview)
- [使用 RcloneView 监控任务历史与传输日志](https://rcloneview.com/support/blog/job-history-transfer-logs-monitoring-rcloneview)

<CloudSupportGrid />
