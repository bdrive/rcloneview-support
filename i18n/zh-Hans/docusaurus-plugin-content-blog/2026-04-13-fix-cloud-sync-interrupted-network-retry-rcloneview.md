---
slug: fix-cloud-sync-interrupted-network-retry-rcloneview
title: "修复因网络错误中断的云同步——使用 RcloneView 重试并恢复"
authors:
  - tayson
description: "了解如何恢复因 RcloneView 中网络中断而中断的云同步任务。使用重试设置、任务历史重新运行以及 Dry Run 来验证中断后的状态。"
keywords:
  - RcloneView 云同步中断 网络
  - 恢复中断的 rclone 同步
  - 修复网络错误云同步
  - 重试云同步 RcloneView
  - 云备份网络中断修复
  - 中断传输恢复
  - rclone 网络重试设置
  - RcloneView 同步恢复
tags:
  - RcloneView
  - troubleshooting
  - tips
  - cloud-sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 修复因网络错误中断的云同步——使用 RcloneView 重试并恢复

> 云同步过程中的网络中断令人沮丧，但并非灾难——RcloneView 的重试机制和任务历史重新运行功能可以让你的传输重回正轨。

同步过程中的网络中断是现实存在的问题，尤其是在家庭网络、VPN 或计费网络上进行长时间传输时更是如此。当同步任务运行期间连接中断时，已经传输的文件是安全的——但你需要知道哪些已经完成、哪些失败了，以及如何正确恢复。RcloneView 提供了重试配置、从历史记录重新运行任务，以及 Dry Run 验证功能，来清晰地处理这种情况。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 网络中断时会发生什么

当同步任务运行期间网络连接丢失时，rclone（RcloneView 背后的引擎）会根据任务的重试配置尝试重试失败的操作。如果网络在重试窗口内没有恢复，任务将报告为失败。中断前成功传输的文件会保留在目标位置——它们不会损坏，但也不会在下次运行时被不必要地重新传输。

关键在于理解 RcloneView 的同步任务是幂等的：重新运行同步任务会比较源和目标，只传输缺失或已更改的内容。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job History showing an interrupted sync in RcloneView" class="img-large img-center" />

## 配置重试行为

在 RcloneView 中，打开你的同步任务并导航到第 2 步（传输选项）。查找重试设置：

- **失败时重试整个同步**：启用此选项后，如果任何传输失败，将自动重新运行整个同步。默认重试次数为 3 次。
- **底层重试次数**：控制单个文件传输在被标记为失败之前重试的次数（默认：10 次）
- **失败时重试**：确保瞬时错误（包括网络超时）触发带退避机制的自动重试

对于连接不稳定的同步任务，将**重试整个同步**设置为 5 次，同时保持**底层重试次数**为 10 次，可以提供相当强的容错能力。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring retry settings in RcloneView job options" class="img-large img-center" />

## 从任务历史中恢复

如果任务在多次重试后仍然失败，请转到**任务历史**并找到失败的运行记录。历史记录条目会显示已传输的文件数量以及失败的文件数量。点击**重新运行**——RcloneView 会以相同的设置再次启动该任务。由于同步会比较源和目标的状态，已经传输的文件会被跳过，只处理剩余或失败的文件。

这比重新开始要快得多，也避免了重新上传已经安全到达目标位置的数据。

## 使用 Dry Run 验证状态

网络中断后，你可能不确定当前的同步状态——尤其是当失败发生在大文件传输中途时。在任务上启用 **Dry Run** 并重新运行。Dry Run 会显示下一次执行将传输哪些内容，而不会实际移动任何数据。这可以让你在真正开始同步之前，清楚地了解还剩多少文件需要传输。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Using Dry Run to verify sync state after network interruption" class="img-large img-center" />

## 处理大文件中断

对于超大单个文件（数 GB）的传输，文件传输中途的网络中断意味着该文件在下次运行时将被完整重新传输（除非云服务商支持可恢复上传以及 rclone 的分块传输模式）。为了尽量减少大文件重新传输的开销，请在任务的高级设置中（在支持的情况下，例如兼容 S3 的服务商、Google Drive）启用**分块上传**。这样可以让部分上传从最后完成的分块处继续。

## 快速上手

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 打开你的同步任务设置，启用**失败时重试整个同步**，并设置为 3-5 次重试。
3. 在网络中断导致任务失败后，转到**任务历史**并使用**重新运行**来恢复。
4. 在最终重新运行之前，使用 **Dry Run** 验证剩余的传输范围。

通过正确的重试配置和任务历史重新运行功能，网络中断只是一个小小的不便，而不会导致同步失败。

---

**相关指南：**

- [使用 RcloneView 恢复中断和失败的传输](https://rcloneview.com/support/blog/recover-interrupted-failed-transfers-rcloneview)
- [任务历史与传输日志监控](https://rcloneview.com/support/blog/job-history-transfer-logs-monitoring-rcloneview)
- [使用 RcloneView 排查 rclone 错误](https://rcloneview.com/support/blog/troubleshoot-rclone-errors-rcloneview)

<CloudSupportGrid />
