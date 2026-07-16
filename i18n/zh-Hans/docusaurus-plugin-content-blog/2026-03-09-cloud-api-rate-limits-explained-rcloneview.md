---
slug: cloud-api-rate-limits-explained-rcloneview
title: "云 API 速率限制详解 —— 为什么你的传输会失败以及如何解决"
authors:
  - tayson
description: "遇到 Google Drive 403 错误？OneDrive 限速？了解云 API 速率限制是什么、为什么它们会中断你的传输,以及如何配置 RcloneView 来避免它们。"
keywords:
  - cloud api rate limit
  - google drive 403 error
  - onedrive throttling
  - s3 rate limit
  - cloud transfer failed
  - api rate limit exceeded
  - cloud sync error fix
  - google drive quota exceeded
  - dropbox rate limit
  - cloud storage api limits
tags:
  - troubleshooting
  - api
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 云 API 速率限制详解 —— 为什么你的传输会失败以及如何解决

> 你的云同步一开始运行得很顺畅,然后突然慢了下来。错误信息出现了:"Rate limit exceeded"、"403 Forbidden"、"Too many requests"。你的传输卡在了 60%。到底发生了什么?

每个云存储服务商都会限制你与其 API 交互的速度。这些速率限制是为了保护其基础设施免受滥用,但同时也会影响正在移动大量数据的正常用户。理解这些限制——并配置好你的工具以遵守它们——正是传输能可靠完成与传输中途失败之间的区别。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 什么是 API 速率限制?

当你在云存储中上传、下载、列出或修改文件时,你的工具会发起 API 调用。每个操作对应一个或多个 API 请求。速率限制规定了在给定时间段内你能发起多少请求。

### 限制类型

- **每秒请求数** —— 每秒可发起多少次 API 调用(例如,S3:每个前缀每秒 3,500 次 PUT 请求)。
- **每日请求数** —— 每日 API 调用总数(例如,Google Drive:应用每天约 100 亿次查询,但每个用户的额度要低得多)。
- **每日带宽** —— 数据总量(例如,Google Drive:每天约 750 GB 上传)。
- **并发连接数** —— 允许同时进行多少个连接。
- **突发限制** —— 在触发限速之前允许的短时流量峰值。

## 各服务商的速率限制

### Google Drive

| 限制 | 值 |
|-------|-------|
| 每日上传量 | 约 750 GB |
| 每日下载量 | 约 10 TB |
| 每 100 秒 API 查询数 | 每用户 1,000 次 |
| 每秒文件操作数 | 约 10 |
| 错误代码 | 403(userRateLimitExceeded)、429 |

Google Drive 是限速最严格的服务商之一。如果你看到 `403` 或 `userRateLimitExceeded`,说明你已经触及了限制上限。

### OneDrive / SharePoint

| 限制 | 值 |
|-------|-------|
| API 调用 | 动态限流 |
| 并发上传数 | 建议约 4 个 |
| 错误代码 | 429(Too Many Requests)、503 |

微软采用动态限流机制——在一次会话中,随着你使用量的增加,限制会逐渐收紧。

### AWS S3

| 限制 | 值 |
|-------|-------|
| PUT/COPY/POST/DELETE | 每个前缀每秒 3,500 次 |
| GET/HEAD | 每个前缀每秒 5,500 次 |
| 无每日带宽限制 | 无限制 |
| 错误代码 | 503(Slow Down) |

S3 是最宽松的。大多数用户除非在执行成千上万次小文件操作,否则很少会触及速率限制。

### Dropbox

| 限制 | 值 |
|-------|-------|
| API 调用 | 应用每分钟约 300 次 |
| 单次会话上传量 | 渐进式限流 |
| 错误代码 | 429 |

### Backblaze B2

| 限制 | 值 |
|-------|-------|
| API 调用 | 取决于套餐 |
| 并发上传数 | 无硬性限制 |
| 带宽 | 按使用量付费,无上限 |

B2 非常宽松——速率限制很少成为问题。

## RcloneView 如何处理速率限制

### 自动重试

当 rclone 收到速率限制错误(429、403、503)时,它会自动:

1. 暂停受影响的传输。
2. 等待服务器指定的时间(或使用指数退避算法)。
3. 重试该操作。

你会在传输日志中看到 "rate limited, waiting X seconds" 这样的信息。

### 可配置的并行传输数

降低并行传输数以减少 API 请求频率:

| 服务商 | 推荐并行传输数 |
|----------|-------------------------------|
| Google Drive | 3–4 |
| OneDrive | 4 |
| Dropbox | 3–4 |
| S3 | 8–32 |
| B2 | 8–16 |

### 带宽限制

使用[带宽限制](https://rcloneview.com/support/blog/set-bandwidth-limits-cloud-transfers-rcloneview)来控制数据传输速率,从而间接减少 API 调用次数。

### v1.3 重试失败的传输

如果尽管有速率限制处理机制,传输仍然失败,v1.3 的重试功能可以在任务完成后重新运行失败的文件。

## 避免速率限制的策略

### 1)在非高峰时段传输

将大型传输安排在夜间和周末进行,此时其他用户(以及你自己的应用)发起的 API 调用较少:

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule transfers during off-hours" class="img-large img-center" />

### 2)分散到多天进行

对于超过 Google Drive 每日 750 GB 上传限制的迁移任务:

- 第 1 天:传输文件夹 A(500 GB)。
- 第 2 天:传输文件夹 B(500 GB)。
- 第 3 天:传输文件夹 C 并验证全部内容。

### 3)使用你自己的 API 凭据

Google Drive 及其他一些服务商允许使用你自己的 OAuth 应用凭据(而非共享凭据)时获得更高的速率限制。配置你自己的 Google API 项目以获得更高的配额。

### 4)减少文件检查

对于初始的批量上传,跳过目标位置检查。这可以消除一半的 API 调用(即检查每个文件是否已存在的那些调用)。

### 5)批量处理小文件

如果你有成千上万个小文件,可以考虑在传输前将它们打包成 ZIP 文件。一个 1 GB 的 ZIP 文件只需 1 次 API 调用,而不是 10,000 次独立文件上传所产生的 10,000 次调用。

## 监控速率限制问题

留意传输进度中的限流迹象:

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitor for rate limit errors" class="img-large img-center" />

警告信号:

- 传输速度在一开始很快之后突然下降。
- 传输过程中出现周期性停顿。
- 日志中出现带有 429 或 403 代码的错误信息。
- 传输速度出现波动(快 → 慢 → 快)。

## 快速上手

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 根据你的云服务商**设置合适的并行传输数**。
3. **安排大型传输**在非高峰时段进行。
4. **监控进度**,留意限流迹象。
5. **使用重试功能**(v1.3)以提升可靠性。

速率限制不会消失——但只要设置得当,你就能可靠地在其限制范围内工作。

---

**相关指南:**

- [修复 Google Drive 403 速率限制错误](https://rcloneview.com/support/blog/fix-google-drive-403-rate-limit-errors-rcloneview)
- [设置带宽限制](https://rcloneview.com/support/blog/set-bandwidth-limits-cloud-transfers-rcloneview)
- [任务调度](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)

<CloudSupportGrid />
