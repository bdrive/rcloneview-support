---
slug: equality-checkers-slow-backends-sync-tuning-rcloneview
title: "Number of Equality Checkers — 在 RcloneView 中为慢速后端调整同步比较"
authors:
  - kai
description: "了解 RcloneView 同步向导中 Number of equality checkers 设置的作用，以及如何针对 SFTP、FTP、WebDAV 和有速率限制的云远程进行调整。"
keywords:
  - rclone checkers 设置
  - number of equality checkers
  - rclone checkers GUI
  - 为慢速后端调整同步
  - SFTP 同步性能
  - WebDAV 同步慢
  - 云 API 速率限制 同步
  - RcloneView 高级同步设置
  - 校验和比较同步
tags:
  - RcloneView
  - feature
  - performance
  - cloud-sync
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Number of Equality Checkers — 在 RcloneView 中为慢速后端调整同步比较

> 在复制任何内容之前，同步必须先判断哪些文件已经一致。checker 的数量决定了这一步对存储施加多大的压力。

RcloneView 中的每个 Sync 任务都从比较源和目标文件开始，以确定真正需要传输的内容。这项工作由 equality checker 完成，同步向导的 Step 2 允许你设置并行运行的数量。默认值 8 适合大多数云服务商，但小型 SFTP 服务器、WebDAV 共享或 API 限制严格的服务商，往往在较低的值下表现更好。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Equality Checker 的作用

checker 会查看两侧的文件并判断它们是否相同。默认情况下，比较依据大小和修改时间。如果在同一步骤中勾选 **Enable checksum**，则改为按哈希和大小比较文件——这更严格，但需要为每个文件向后端请求哈希。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Opening a sync job in RcloneView to adjust advanced settings" class="img-large img-center" />

checker 与 **Number of file transfers** 是分开的，后者控制同时复制的文件数量。同步 200,000 个小文件且大多数未更改时，检查所花的时间远多于传输，因此 checker 数量可能比传输数量更重要。

## 何时降低 Checker 数量

RcloneView 的建议是：对慢速后端使用 4 或更少。典型情况：

- **配置一般的服务器上的 SFTP 或 FTP。** 并行检查意味着更多的并发连接，小型 VPS 或较旧的 NAS 可能会拒绝或限制额外的会话。
- 对元数据请求响应缓慢的 **WebDAV 共享**。
- **请求限制严格的云服务商**，突发的并行请求会触发速率限制错误和重试。

降低 checker 是以原始并行度换取更稳定的进度。如果日志在比较阶段反复出现重试或连接错误，请先降到 4，再降到 2，然后重新运行。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitoring sync progress and speed in the RcloneView Transferring tab" class="img-large img-center" />

## 何时默认值就足够

Amazon S3、Wasabi 或 Cloudflare R2 等 S3 兼容对象存储通常可以毫无问题地处理 8 个 checker，本地磁盘或高速局域网 NAS 也很少需要调整。RcloneView 可在 Windows、macOS 和 Linux 上从一个窗口挂载并同步 90+ 服务商，因此同一台机器上的不同任务需要不同的 checker 值是很常见的：S3 任务保持默认，只降低 SFTP 任务。

## 用 Dry Run 和 Job History 衡量变化

一次只更改一个设置。先运行 Dry Run 确认任务范围，然后执行同步并打开 Job History，它会记录每次运行的 Time Spent、Status 和文件数。比较同一任务在不同 checker 值下的两次运行，就能看出更改是否有帮助。如果重试设置（**Retry entire sync if fails**，默认 3）不断被触发，这也说明后端需要更少的并行请求。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Comparing sync run durations in RcloneView Job History after changing the checker count" class="img-large img-center" />

## 开始使用

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 打开 Job Manager，编辑以慢速远程为目标的同步任务。
3. 在 Step 2 中将 **Number of equality checkers** 设为 4，并决定是否需要 **Enable checksum**。
4. 运行任务，然后在 Job History 中将 Time Spent 和状态与之前的运行进行比较。

只需几分钟的调整，就能把卡在比较阶段的同步变成稳定完成的同步。

---

**相关指南：**

- [加速云传输 — RcloneView 中的多线程上传和并行流](https://rcloneview.com/support/blog/multi-threaded-transfers-parallel-streams-rcloneview)
- [解决云传输缓慢 — 在 RcloneView 中加快同步和复制](https://rcloneview.com/support/blog/fix-slow-cloud-transfers-speed-rcloneview)
- [使用 RcloneView 进行校验和验证的云迁移（Drive、Dropbox、S3、R2）](https://rcloneview.com/support/blog/checksum-verified-cloud-migrations-rcloneview)

<CloudSupportGrid />
