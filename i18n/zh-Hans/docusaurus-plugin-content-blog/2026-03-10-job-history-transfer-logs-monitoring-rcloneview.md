---
slug: job-history-transfer-logs-monitoring-rcloneview
title: "通过任务历史和日志追踪云传输——在 RcloneView 中监控每一次同步和备份"
authors:
  - tayson
description: "借助 RcloneView 的任务历史和传输日志，跟踪每一次云同步、复制和备份任务。随时监控成功、失败与性能表现。"
keywords:
  - cloud transfer history
  - sync job log
  - cloud backup monitoring
  - transfer log cloud
  - rclone job history
  - cloud sync monitoring
  - backup job tracking
  - cloud transfer status
  - rclone transfer log
  - cloud job monitoring tool
tags:
  - RcloneView
  - monitoring
  - job-history
  - feature
  - cloud-storage
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 通过任务历史和日志追踪云传输——在 RcloneView 中监控每一次同步和备份

> 你上周设置了一个备份任务。它真的运行了吗？成功完成了吗？传输了多少个文件？如果没有任务历史，你只能猜测。而在 RcloneView 中，每个任务都会留下记录。

设置云同步只是第一步，确认它能可靠运行才是第二步——而且可以说更重要。RcloneView 的任务历史会追踪每一次执行：运行时间、耗时、传输的文件数量，以及是否发生了错误。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 为什么任务历史很重要

### 静默失败

最糟糕的备份失败，就是你根本不知道它失败了。常见的静默问题包括：

- **OAuth 令牌过期** —— 云服务商撤销了访问权限，任务会悄无声息地失败。
- **磁盘已满** —— 目标存储在传输过程中空间耗尽。
- **触发限速** —— 服务商限制了传输速度，部分文件被跳过。
- **网络超时** —— 间歇性的连接问题导致传输不完整。

如果没有任务历史，这些问题会一直被忽视，直到你需要恢复数据时才发现——你的"备份"其实已经是几个月前的了。

### 合规与审计

某些行业要求提供备份确实发生过的书面证明。任务历史可以提供：

- 每次任务执行的时间戳。
- 文件数量与传输量。
- 成功/失败状态。
- 用于排查问题的错误详情。

## RcloneView 中的任务历史

### 查看历史执行记录

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history view" class="img-large img-center" />

每条记录会显示：

- **任务名称** —— 运行的是哪个同步/复制/移动任务。
- **开始时间** —— 执行何时开始。
- **持续时间** —— 耗时多久。
- **状态** —— 成功、部分成功或失败。
- **已传输文件数** —— 移动的文件数量。
- **数据量** —— 传输的总字节数。
- **错误** —— 错误数量（如果有）。

### 发现趋势

随着时间推移，任务历史会揭示一些规律：

- **耗时增加** —— 数据集在增长，或性能正在下降。
- **间歇性失败** —— 特定日期出现网络或服务商问题。
- **零传输** —— 没有发生变化（对增量同步来说是正常的），或者任务本身没有正常工作。
- **错误激增** —— 限速、权限问题或存储空间已满。

## 实时传输监控

任务运行期间，可以实时查看进度：

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Real-time transfer monitoring" class="img-large img-center" />

实时监控显示：

- **当前速度** —— MB/s 或 GB/s。
- **活动传输数** —— 并行文件操作的数量。
- **进度** —— 完成百分比。
- **预计剩余时间（ETA）** —— 预估还需多长时间。
- **错误** —— 实时错误计数。

## 失败通知

v1.3 新增了 Slack、Discord 和 Telegram 通知功能。配置提醒后，你可以在以下情况发生时立即知晓：

- 计划任务失败。
- 任务完成但存在错误。
- 任务成功完成（可选确认）。

这就是"我的备份大概运行了"和"我的备份确实运行了——我收到了 Slack 消息"之间的区别。

## 借助日志进行故障排查

当任务失败时，传输日志会准确告诉你原因：

- **403 Forbidden** —— 限速或权限问题。
- **404 Not Found** —— 传输过程中源文件被删除。
- **429 Too Many Requests** —— 服务商限流。
- **超时（Timeout）** —— 网络连接问题。
- **磁盘已满** —— 目标存储空间不足。

## 最佳实践

### 每周回顾任务历史

每周一花 2 分钟回顾过去一周的任务执行情况，在问题演变成危机之前就发现它们。

### 设置失败提醒

不要只依赖手动检查。为任务失败配置 Slack 或 Discord 通知。

### 出错后进行验证

当任务报告错误时，使用文件夹对比功能，准确找出哪些文件缺失或存在差异：

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify after job errors" class="img-large img-center" />

### 重试失败的传输

v1.3 的重试功能可以自动重新运行失败的文件传输。对于持续出现的失败，请使用日志排查根本原因。

## 快速上手

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. **创建并计划你的同步/备份任务**。
3. 通过任务历史**监控执行情况**。
4. **设置通知**以便接收失败提醒。
5. **每周回顾**——信任但要核实。

不被监控的备份，就是不能被信任的备份。

---

**相关指南：**

- [创建同步任务](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [任务计划](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)
- [对比文件夹内容](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)

<CloudSupportGrid />
