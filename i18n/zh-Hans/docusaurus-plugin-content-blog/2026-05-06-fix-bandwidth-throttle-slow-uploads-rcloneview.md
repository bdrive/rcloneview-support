---
slug: fix-bandwidth-throttle-slow-uploads-rcloneview
title: "修复云上传缓慢问题 — 使用 RcloneView 优化带宽和传输速度"
authors:
  - tayson
description: "诊断并修复 RcloneView 中云上传速度缓慢的问题。调整并发传输数、带宽限制和 rclone 参数,最大化上传到任何云存储提供商的性能。"
keywords:
  - fix slow cloud uploads RcloneView
  - cloud upload speed optimization
  - RcloneView bandwidth tuning
  - slow cloud transfer troubleshooting
  - rclone upload speed fix
  - increase cloud sync speed
  - RcloneView transfer performance
  - fix slow backup uploads
  - cloud upload optimization guide
  - rclone concurrent transfers tuning
tags:
  - troubleshooting
  - tips
  - performance
  - optimization
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 修复云上传缓慢问题 — 使用 RcloneView 优化带宽和传输速度

> 当 RcloneView 中的云上传速度低于预期时,只需调整几个关键设置就能显著提升吞吐量 — 本文将带你系统地诊断并修复常见的性能瓶颈。

云上传速度缓慢是 RcloneView 用户最常遇到的困扰之一。根本原因往往并不明显:可能是并发传输数太少、意外设置了带宽上限、API 端点被限流,或是网络的 MTU 与云存储提供商的要求不匹配。本指南将系统地逐一排查这些潜在原因,帮助你快速定位并解决问题。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 检查并增加并发传输数

对上传吞吐量影响最大的设置是**并发文件传输数**。默认情况下,rclone 会按顺序传输文件或以有限的并发数进行传输。在 RcloneView 的同步任务配置中(第 2 步:高级设置),增加**文件传输数量**设置 — 对于高带宽连接,可尝试设置为 8 到 16。每增加一个并发传输都会带来独立的吞吐量,从而有效地成倍提升整体上传速度。

对于支持分段上传的提供商(如 Amazon S3 和 Cloudflare R2),还应增加**多线程传输数量**(默认值:4),以便将每个大文件的上传拆分为多个并行的分块。在上传大型视频文件或数据库备份文件时,这一设置尤其有效。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Adjusting concurrent transfer settings in RcloneView sync job" class="img-large img-center" />

## 移除意外设置的带宽上限

RcloneView 会将"设置 > 内嵌 Rclone"中的全局 Rclone 参数应用于每一次操作。请检查那里是否设置了 `--bwlimit` 或 `--bwlimit-file` 参数 — 这些参数会将上传速度限制在指定值以内。如果你之前为了避免占满网络带宽而设置了带宽限制,却忘记移除,该参数就会在不知不觉中拖慢所有上传速度。

请在"设置 > 内嵌 Rclone > 全局 Rclone 参数"中移除或修改 `--bwlimit` 参数,然后重新运行同步任务,查看速度是否有所改善。

<img src="/support/images/en/blog/new-remote.png" alt="Checking global rclone flags that might limit upload bandwidth" class="img-large img-center" />

## 检查提供商侧的 API 速率限制

一些云存储提供商会强制实施速率限制,这可能导致上传看起来很慢。Google Drive 会限制每个用户每秒的 API 调用次数;Dropbox 会对请求过于频繁的应用程序进行限流;Amazon S3 则对每个前缀有请求次数限制。如果你发现上传大量小文件时速度很慢,但上传大文件时速度较快,通常就是 API 速率限制在作怪。

在 RcloneView 的日志标签页中,查找包含 `429 Too Many Requests` 或 `Rate limit exceeded` 的消息。如果发现此类消息,请减少并发传输数,使其保持在提供商 API 限制范围之内。特别是对于 Google Drive,建议将并发传输数降至 4,并将检查器(checkers)数量限制在 8 个以内。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitoring transfer speed and detecting rate limits in RcloneView" class="img-large img-center" />

## 调整分段上传的分块大小

对于上传到兼容 S3 的提供商的大文件,分段上传的分块大小会影响吞吐量。RcloneView 允许你在同步任务的自定义设置中传入高级 rclone 参数。添加 `--s3-chunk-size 64M`(从默认的 5MB 提高)可以减少大文件上传时的 API 调用开销,并能在高带宽连接下显著提升吞吐量。

同样,对于 Backblaze B2,在上传大文件时可使用 `--b2-chunk-size 100M`。这些参数都可以通过 RcloneView 同步任务配置中的自定义 rclone 参数字段添加。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Advanced sync job settings for tuning upload performance in RcloneView" class="img-large img-center" />

## 快速上手

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 在同步任务的高级设置中,将并发传输数提高到 8–16。
3. 检查"设置 > 内嵌 Rclone"中是否存在可能限制速度的 `--bwlimit` 参数。
4. 查看日志标签页中的速率限制错误,必要时降低并发数。

优化 RcloneView 中的上传速度,是一个不断调整并发数、移除意外限制,并使各项设置与每个提供商的 API 特性相匹配的过程。

---

**相关指南:**

- [使用 RcloneView 加速大型云传输](https://rcloneview.com/support/blog/accelerate-large-cloud-transfers-rcloneview)
- [修复云传输进度卡住问题 — 使用 RcloneView 解决上传卡顿](https://rcloneview.com/support/blog/fix-cloud-transfer-stalled-progress-rcloneview)
- [RcloneView 中的自定义 Rclone 参数与高级选项](https://rcloneview.com/support/blog/custom-rclone-flags-advanced-options-rcloneview)

<CloudSupportGrid />
