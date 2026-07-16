---
slug: fix-scheduled-sync-not-running-rcloneview
title: "修复计划同步未运行问题 — 在 RcloneView 中排查自动化云任务"
authors:
  - steve
description: "诊断并修复 RcloneView 计划同步任务无法启动或运行时间错误的问题。涵盖许可证检查、crontab 语法、启动设置以及日志检查。"
keywords:
  - rcloneview scheduled sync not running
  - fix scheduled cloud backup rcloneview
  - rcloneview schedule troubleshooting
  - cloud sync cron job not starting
  - automated cloud backup not running
  - rcloneview plus schedule fix
  - fix cloud sync schedule
  - rcloneview crontab troubleshooting
tags:
  - troubleshooting
  - tips
  - automation
  - feature
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 修复计划同步未运行问题 — 在 RcloneView 中排查自动化云任务

> 如果你的 RcloneView 自动备份不再按计划触发——或者从未启动过——本指南将按顺序讲解所有可能的原因，从许可证验证到 crontab 语法再到启动配置。

基于计划的同步是 RcloneView 最实用的 PLUS 功能之一：配置一次任务，它就会按 crontab 计划运行，无需人工干预。当它停止工作时，根本原因几乎总是以下四种之一——许可证问题、计划配置错误、任务到期时应用未运行，或任务本身出现了静默错误。按层级系统地排查，几分钟内即可解决问题。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 检查 1：确认你的 PLUS 许可证处于激活状态

基于计划的同步是 PLUS 或终身许可证专属的功能。FREE 许可证不启用 crontab 计划功能，在 FREE 许可证下保存的任务，其计划会被静默地设为非激活状态。查看 RcloneView 窗口底部的页脚栏——它会显示 "FREE License" 或 "PLUS License"，以及 rclone 版本和连接信息。

如果许可证显示为 FREE 或已过期，请前往 **Help → Activate License**，重新输入你的电子邮箱和许可证密钥。折扣优惠券每个邮箱只能使用一次，因此使用相同优惠券重复激活不会延长订阅期——如果密钥在最近续订后仍显示无效，请联系支持团队。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Verifying a sync job is configured and ready to run in RcloneView" class="img-large img-center" />

确认 PLUS 已激活后，在 Job Manager 中重新打开受影响的任务，检查第 4 步（计划设置）是否填写了实际值而非空白字段。之前保存的任务可能需要在 PLUS 激活状态下重新编辑并保存，才能锁定计划设置。

## 检查 2：检查任务第 4 步中的 Crontab 语法

RcloneView 的调度器使用五个 crontab 风格的字段：**Minute**（0–59）、**Hour**（0–23）、**Day of Week**（0–6，星期日=0）、**Day of Month**（1–31）以及 **Month**（1–12）。将字段留空表示"每个"——填入具体值表示"仅此"。最常见的配置错误是在错误的字段中输入 `0`，或使用了不兼容的组合，例如以永不重合的方式同时指定 Day of Week 和 Day of Month。

RcloneView 在第 4 步直接提供了一个 **Simulate Schedule** 按钮。点击它可以在保存前预览接下来的几次执行时间。如果预览结果不符合预期——每分钟都运行、跳过了预期的日期，或完全没有显示即将到来的运行——请调整字段并再次模拟。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Configuring crontab schedule fields in RcloneView Job Manager Step 4" class="img-large img-center" />

系统支持列表语法（`1,3,5`）、范围语法（工作日用 `1-5`）以及步进语法（每 4 小时用 `0-23/4`）。例如，一个每天午夜执行的任务，Minute 设为 `0`，Hour 设为 `0`，其余字段留空。

## 检查 3：在计划执行时间保持 RcloneView 运行

计划任务要触发，RcloneView 必须处于**打开并运行**的状态——它并不作为后台系统服务或守护进程运行。如果电脑处于睡眠状态、用户已注销，或应用已被关闭，在此期间到期的任何计划都会被静默跳过。

解决方法很直接：在 **Settings → General** 中启用 **Launch at login**，让应用在操作系统启动时自动运行。再配合 **Start minimized**，RcloneView 就会在系统托盘中启动，不会打扰你的桌面，同时仍在后台运行所有计划任务。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="RcloneView running a scheduled sync transfer in the background" class="img-large img-center" />

如果目标机器经常在夜间关机，可以考虑将计划调整到工作时间内，或将操作系统配置为在任务到期时间之前从睡眠中唤醒。

## 检查 4：检查任务历史和传输日志

如果某个任务看起来已经运行但没有产生任何输出，首先应查看底部 Info View 中的 **Job History** 标签页。它会记录每次执行的状态（Completed / Errored / Canceled）、耗时、传输速度和文件数量。将历史记录筛选为只显示 "Errored" 条目，即可发现失败的运行。每条记录都链接到相关的日志输出，其中标明了具体的失败原因——网络超时、身份验证错误、路径未找到，或目标权限问题。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="RcloneView job history showing scheduled sync execution records and status" class="img-large img-center" />

如需更深入的诊断，请在 **Settings → Embedded Rclone** 中启用 **Enable rclone Logging**，并将日志级别设为 **INFO** 或 **DEBUG**。任务下次运行（或手动触发）时，日志文件会记录完整的 rclone 输出——包括导致失败的确切错误代码和文件——即便是间歇性问题，也能让根因分析变得直截了当。

## 快速上手

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 查看页脚栏——crontab 计划功能需要 PLUS 许可证。
3. 打开受影响的任务 → Edit → Step 4，然后使用 Simulate Schedule 验证 cron 语法。
4. 在 Settings → General 中启用 **Launch at login** 和 **Start minimized**。
5. 检查 Job History 中出错的运行记录，并启用 rclone 日志记录以获取详细诊断信息。

系统地排查这四个层级，几乎可以快速解决所有计划同步失败的问题——无需盲目猜测。

---

**相关指南：**

- [使用 RcloneView 自动化每日云备份](https://rcloneview.com/support/blog/automate-daily-cloud-backups-with-rcloneview)
- [计划最佳实践 — RcloneView 中的 Cron、重试与监控](https://rcloneview.com/support/blog/schedule-best-practices-cron-retry-rcloneview)
- [任务历史与传输日志 — RcloneView 中的监控](https://rcloneview.com/support/blog/job-history-transfer-logs-monitoring-rcloneview)

<CloudSupportGrid />
