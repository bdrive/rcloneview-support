---
slug: set-bandwidth-limits-cloud-transfers-rcloneview
title: "如何在 RcloneView 中为云传输设置带宽限制"
authors:
  - tayson
description: "控制云同步和备份任务占用的带宽 —— 借助 RcloneView 的限速设置,避免工作时段网络变慢,并在夜间发挥最大速度。"
keywords:
  - rclone bandwidth limit
  - cloud transfer speed limit
  - throttle cloud sync
  - rcloneview bandwidth control
  - limit upload speed rclone
  - cloud backup bandwidth
  - rclone bwlimit
  - network throttle cloud sync
  - control cloud transfer speed
  - rcloneview transfer settings
tags:
  - performance
  - tips
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 如何在 RcloneView 中为云传输设置带宽限制

> 在工作时段运行大规模云同步?你的团队一定会注意到。下面介绍如何限制带宽,让备份在不拖垮所有人网络的情况下运行。

云同步和备份任务可能占满你的网络连接 —— 导致视频通话、网页浏览及其他关键工作变慢。在办公环境、共享连接的家庭办公室,或需要同步海量数据时,这个问题尤为突出。RcloneView 让你可以设置精确的带宽限制,使云传输在后台运行而不会干扰你的网络。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 为什么带宽限制很重要

### 共享网络

在带宽为 100 Mbps 的办公室里,一个未限速的云同步任务就可能占用 80+ Mbps —— 几乎不给团队其他成员留任何余量。

### 家庭办公室

视频通话需要约 5–10 Mbps 带宽。如果备份任务占用了所有可用带宽,你的 Zoom 通话画质就会变得惨不忍睹。

### ISP 公平使用政策

一些互联网服务提供商 (ISP) 会对持续的高带宽使用进行限速或额外收费。限制云传输可以避免意外的账单或速度下降。

### 云服务商速率限制

一些云服务商(尤其是 Google Drive)在传输速度过快时会进行限速或返回错误。限制带宽可以让你保持在安全范围内。

## 如何设置带宽限制

### 方法一:按任务设置带宽限制

在 RcloneView 中创建或编辑任务时,在 rclone 选项中添加带宽限制标志:

- **`--bwlimit 10M`** —— 限制为 10 MB/s(每秒兆字节)
- **`--bwlimit 50M`** —— 限制为 50 MB/s
- **`--bwlimit 1M`** —— 限制为 1 MB/s(适合后台涓流式同步)

### 方法二:基于时间的带宽调度

rclone 支持基于时间的带宽限制 —— 在一天的不同时段使用不同速度:

```
--bwlimit "08:00,5M 18:00,50M 23:00,off"
```

这意味着:
- **上午 8 点 – 下午 6 点**:限制为 5 MB/s(工作时段,影响最小)
- **下午 6 点 – 晚上 11 点**:限制为 50 MB/s(傍晚,可用带宽更多)
- **晚上 11 点 – 上午 8 点**:不限速(夜间,全速运行)

对大多数用户来说,这是最合适的方案 —— 传输任务全天候运行,但只在网络空闲时才全速进行。

### 方法三:上传与下载分别限速

为上传和下载分别设置不同的限制:

```
--bwlimit "10M:5M"
```

这会将上传限制为 10 MB/s,下载限制为 5 MB/s。当你的 ISP 上下行速度不对称时(有线电视和 DSL 连接常见此情况),这个方法很有用。

## 实用示例

### 100 Mbps 连接的家庭办公室

```
--bwlimit "09:00,2M 17:00,off"
```
- 工作时段:2 MB/s(与视频通话并行时几乎不易察觉)
- 下班后:不限速

### 50 Mbps 共享连接的小型办公室

```
--bwlimit "08:00,3M 18:00,25M 22:00,off"
```
- 办公时段:3 MB/s(为员工留出 47 Mbps)
- 傍晚:25 MB/s(一半带宽)
- 夜间:全速

### 周末的大规模迁移

```
--bwlimit off
```
- 不设限制 —— 在维护窗口期间最大化传输速度。

## 与任务调度相结合

最强大的方案是:安排**夜间不限速的重量级任务**,以及**白天严格限速的轻量级任务**。

1. 创建同步任务的两个版本:
   - **日间任务**:`--bwlimit 5M` —— 在中午运行,用于快速增量同步
   - **夜间任务**:不设带宽限制 —— 在凌晨 2 点运行,用于大批量传输
2. 使用[任务调度](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)安排这两个任务。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule transfers with different bandwidth limits" class="img-large img-center" />

## 监控实际速度

使用实时传输监控来验证你的带宽限制是否生效:

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitor transfer speed with bandwidth limits" class="img-large img-center" />

传输速度显示应该等于或低于你配置的限制值。如果你看到的速度比设定的限制还要低,那么瓶颈可能出在别处(网络、服务商 API、磁盘速度)。

## 快速参考

| 场景 | 设置 | 效果 |
|----------|---------|--------|
| 轻量级后台同步 | `--bwlimit 2M` | 几乎不易察觉 |
| 中等强度传输 | `--bwlimit 10M` | 可察觉但可接受 |
| 仅工作时段 | `--bwlimit "09:00,5M 17:00,off"` | 工作期间限速 |
| 上传密集型 | `--bwlimit "20M:5M"` | 上传 20M,下载 5M |
| 不限速 | `--bwlimit off` 或省略 | 最大速度 |

## 开始使用

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. **添加你的远程**并创建同步/复制任务。
3. 在任务的 rclone 参数中**添加 `--bwlimit`**。
4. **测试并监控**,找到合适的平衡点。
5. **结合任务调度**以获得两全其美的效果。

传输速度快是好事。但不会拖垮团队视频通话的传输才更好。

---

**相关指南:**

- [加速大型云传输](https://rcloneview.com/support/blog/accelerate-large-cloud-transfers-rcloneview)
- [创建同步任务](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [任务调度](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)
- [实时传输监控](https://rcloneview.com/support/howto/rcloneview-basic/real-time-transfer-monitoring)
- [修复 Google Drive 速率限制错误](https://rcloneview.com/support/blog/fix-google-drive-403-rate-limit-errors-rcloneview)

<CloudSupportGrid />
