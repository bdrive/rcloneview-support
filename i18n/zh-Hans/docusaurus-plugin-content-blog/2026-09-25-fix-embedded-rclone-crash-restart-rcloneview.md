---
slug: fix-embedded-rclone-crash-restart-rcloneview
title: "修复内置 Rclone 崩溃 — 使用 RcloneView 重启与恢复"
authors:
  - tayson
description: "通过重启步骤、日志记录和外部 rclone 备用方案，排查 RcloneView 中内置 rclone 连接中断的问题。"
keywords:
  - 内置rclone崩溃
  - rclone连接中断
  - RcloneView故障排查
  - 重启内置rclone
  - rclone rc api错误
  - rclone日志文件
  - 外部rclone连接
  - rcloneview无法连接
  - rclone自我更新
  - 修复rclone错误
tags:
  - RcloneView
  - troubleshooting
  - tips
  - reference
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 修复内置 Rclone 崩溃 — 使用 RcloneView 重启与恢复

> 当页脚显示"已断开"而不是版本号时，说明内置 rclone 引擎已停止响应 — 以下是如何在不丢失作业历史记录的情况下恢复它。

RcloneView 内置了一个 rclone 二进制文件，它通过本地 API 地址（默认 `http://127.0.0.1:5582`）与应用通信。大多数情况下这个连接是不可见的 —— 你几乎不会注意到它，因为它一直正常工作。但如果内置进程因操作系统资源限制、冲突的本地防火墙规则或损坏的配置锁而被终止，页脚的连接信息将不再显示版本号，Explorer 面板中的所有远程都会同时停止响应。这表明你遇到的是内置 rclone 崩溃，而不是单个远程的身份验证问题。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 确认是内置引擎问题，而非单个远程的问题

最快的区分方法是：如果只有一个标签页或远程无法加载，而其余面板都正常工作，那就是特定远程的问题 —— 例如 OAuth 令牌失效、凭据错误或服务商故障。如果每个面板中的每个远程同时停止响应，且页脚的 rclone 版本消失了，那就是内置进程本身停止了。检查 Settings 标签页 > Embedded Rclone；如果版本字段为空或显示错误，就可以确认这一点。

RcloneView 可以在一个窗口中跨 Windows、macOS 和 Linux 挂载并同步 90 多个服务商，而所有这一切都通过这一个内置进程处理，这正是为什么此处发生的崩溃看起来像是全面中断，而不是某个服务商特有的错误。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="RcloneView settings tab showing embedded rclone connection status" class="img-large img-center" />

## 重启内置进程

前往 Settings 标签页 > Embedded Rclone，使用其中的重启控件 —— 这会重新启动内置的二进制文件，而无需退出并重新打开 RcloneView 本身。崩溃发生时正在传输中的任务，会在 Job History 中显示为 Errored 而不是 Completed，因此之后请检查并重新运行任何未完成的任务；RcloneView 的 Retry entire sync if fails 设置（位于每个作业的 Advanced Settings 步骤中）有助于在以后的运行中自动吸收此类中断。

如果重启持续失败，请检查 Settings > Embedded Rclone > Local Rclone location 下的 rclone 二进制文件路径。指向已移动、已删除或被杀毒软件隔离的二进制文件的路径，即使点击重启按钮，也会阻止进程启动。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="RcloneView job scheduling and retry settings" class="img-large img-center" />

## 为反复出现的崩溃开启日志记录

一次性崩溃很少需要深入排查，但反复出现的崩溃则需要。在 Settings > Embedded Rclone 中开启 Enable rclone Logging，将 Log level 设置为 DEBUG，然后重启内置进程以开始一个新的日志文件。复现崩溃后，检查底部 Info View 中的 Log 标签页，或直接查看 Log folder 中配置路径下的日志文件。如果需要帮助解读日志，RcloneView 支持团队可通过 rcloneview@bdrive.com 接收日志文件 —— 请附上 DEBUG 级别的完整日志而不是摘要，因为确切的错误行才是关键。

同时确认同一设置区域中的 Global Rclone Flags 字段没有残留来自之前排查会话的杂散或不兼容标志 —— 无效的标志可能会导致内置进程每次都无法正常启动。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="RcloneView job history showing errored jobs after a connection interruption" class="img-large img-center" />

## 回退到外部 Rclone 实例

如果内置引擎在某台机器上持续崩溃 —— 通常发生在资源受限的硬件上 —— 你可以让 RcloneView 改为连接到外部 rclone 实例。在终端中运行 `rclone rcd --rc-user=<user> --rc-pass=<pass> --rc-addr=127.0.0.1:5572`，然后使用该地址和凭据在 Settings 标签页 > Connect Manager > New Connection 下添加它。这样可以将 rclone 进程的生命周期与 RcloneView 应用解耦，使 GUI 问题不会拖垮你的传输引擎，反之亦然。

## 快速上手

1. 如果需要全新安装，请从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 检查 Settings > Embedded Rclone 中版本字段是否为空，以确认是否发生崩溃。
3. 使用重启控件，然后在 Job History 中查看标记为 Errored 的任务。
4. 如果崩溃反复出现，请开启 DEBUG 日志记录；如果问题持续，请切换到外部 rclone 连接。

崩溃的内置进程看起来令人担忧，因为所有远程会同时失去响应，但解决方法几乎总是重启一次就能搞定 —— 而日志记录能让下次出现问题时，从一头雾水变成一行就能诊断清楚。

---

**相关指南：**

- [修复 Rclone 配置密码错误 — 使用 RcloneView 解决加密配置问题](https://rcloneview.com/support/blog/fix-rclone-config-password-errors-rcloneview)
- [修复 Rclone 传输中的高内存和 CPU 占用 — 使用 RcloneView](https://rcloneview.com/support/blog/fix-rclone-high-memory-cpu-usage-rcloneview)
- [Rclone 自我更新 — 在 RcloneView 中保持内置引擎为最新版本](https://rcloneview.com/support/blog/rclone-self-update-rcloneview)

<CloudSupportGrid />
