---
slug: fix-cloud-sync-stuck-hanging-rcloneview
title: "修复云同步卡在 99% 或无响应问题 —— 在 RcloneView 中排查停滞的传输"
authors:
  - tayson
description: "你的云同步已经运行了几个小时,但似乎卡住了。进度显示 99% 却始终无法完成。以下是导致传输停滞的原因以及修复方法。"
keywords:
  - cloud sync stuck
  - cloud transfer hanging
  - sync stuck 99 percent
  - cloud upload frozen
  - rclone transfer stuck
  - cloud sync not completing
  - fix stalled cloud transfer
  - cloud sync timeout
  - cloud upload hanging
  - rclone sync frozen
tags:
  - troubleshooting
  - performance
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 修复云同步卡在 99% 或无响应问题 —— 在 RcloneView 中排查停滞的传输

> 进度条显示 99%。已经显示 99% 长达 45 分钟。它到底在工作吗?是卡住了吗?应该取消吗?下面介绍如何诊断和修复停滞的云传输。

停滞的云传输是云同步中最令人沮丧的问题之一。任务看起来仍在运行,进度指示器几乎不动,你也不确定是该继续等待还是重新开始。好消息是:停滞的传输几乎总有一个具体且可修复的原因。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 常见原因

### 1) 大文件即将传输完成

最常见的"假警报"。一个 50 GB 的文件在完成 98% 时仍剩余 1 GB。以 10 MB/s 的速度计算,还需要 100 秒——但进度条几乎不动,因为它衡量的是文件数量,而不是字节数。

**修复方法**:留意传输速度指示器。如果字节仍在流动,说明传输在正常进行——只是最后一个大文件传输较慢。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Check if bytes are flowing" class="img-large img-center" />

### 2) API 速率限制节流

Google Drive、OneDrive 等服务商在你达到 API 限制时会对传输进行节流。传输会变得非常缓慢,但不会失败。

**修复方法**:减少并发传输数量。通过内置终端添加 `--tpslimit`。

### 3) 大文件网络超时

某些服务商会在长时间运行的上传过程中悄无声息地断开连接。传输看似仍处于活动状态,但实际上没有数据在传输。

**修复方法**:在远程设置中配置超时。使用 `--timeout` 更早地检测到停滞情况。

### 4) 文件被其他进程锁定

源文件在另一个应用程序中处于打开状态。传输会等待获得访问权限。

**修复方法**:关闭可能正在使用该文件的应用程序,或使用过滤器排除正在使用的文件。

### 5) 服务商端处理

某些服务商会在确认上传完成之前对已上传文件进行处理(病毒扫描、索引编制)。这会在上传完成和确认之间产生一段间隔。

**修复方法**:等待。这通常在 1-5 分钟内解决。

### 6) 内存耗尽

非常庞大的传输列表(数百万个文件)可能会耗尽可用内存,导致进程速度大幅下降。

**修复方法**:按文件夹将传输拆分为更小的批次。

## 诊断步骤

### 检查任务历史记录

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Check job status" class="img-large img-center" />

### 使用终端获取详细输出

在 RcloneView 的终端中运行相同的操作,并添加 `-vv` 标志以获取详细的诊断输出。

### 取消并重新运行

如果传输确实卡住了,取消该任务并重新运行。RcloneView 会跳过已经传输的文件,并从停滞处继续。

## 预防措施

- 在远程配置中**设置合理的超时时间**
- **使用适度的并发数**(4-8 个传输)以避免触发速率限制
- 将大型任务**拆分**为更小的批次
- **安排重试** —— 如果夜间任务停滞,第二次计划运行可以补上进度

## 快速上手

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. **检查传输速度** —— 如果字节仍在流动,说明传输正常。
3. 如果触发了速率限制,**降低并发数**。
4. 如果确实卡住了,**取消并重新运行**。

99% 完成后卡住的情况,几乎总是因为最后一个大文件正在缓慢完成。

---

**相关指南:**

- [修复缓慢的云上传](https://rcloneview.com/support/blog/fix-slow-cloud-uploads-speed-optimization-rcloneview)
- [恢复失败的传输](https://rcloneview.com/support/blog/resume-failed-cloud-transfers-rcloneview)
- [云 API 速率限制详解](https://rcloneview.com/support/blog/cloud-api-rate-limits-explained-rcloneview)

<CloudSupportGrid />
