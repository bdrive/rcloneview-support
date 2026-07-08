---
slug: system-tray-background-sync-rcloneview
title: "系统托盘与后台同步——在 RcloneView 中保持云端任务持续运行"
authors:
  - steve
description: "了解 RcloneView 的系统托盘集成功能如何在后台保持同步任务运行、管理云端挂载,并在无需保持窗口打开的情况下发送任务完成通知。"
keywords:
  - RcloneView 系统托盘后台同步
  - 云同步后台模式
  - RcloneView 最小化到托盘
  - RcloneView 后台云备份
  - RcloneView 托盘图标任务
  - RcloneView 云同步通知
  - 保持云同步后台运行
  - RcloneView 持续备份
tags:
  - RcloneView
  - feature
  - cloud-sync
  - automation
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 系统托盘与后台同步——在 RcloneView 中保持云端任务持续运行

> RcloneView 的系统托盘集成功能让您可以最小化应用程序,同时保持同步任务运行、云盘保持挂载状态,并持续接收通知——完全不打断您的工作流程。

大多数云同步工具都需要保持窗口打开才能确认任务是否在运行。RcloneView 的系统托盘支持打破了这一限制。配置完成后,您可以将 RcloneView 完全最小化,而您的计划同步任务、正在进行的传输以及已挂载的云盘会继续在后台运行。托盘图标让您可以快速访问所有功能,而不会占用工作区空间。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 启用后台模式与系统托盘

默认情况下,RcloneView 可以配置为在关闭窗口时最小化到系统托盘,而不是直接退出。在**设置标签 → 常规**中,找到**关闭时退出**选项。禁用该选项后,当您点击关闭按钮时,RcloneView 会移动到系统托盘,而不是完全退出。

您还可以启用**开机启动**,让 RcloneView 随系统自动启动,并立即开始监控计划任务。将其与**启动时最小化**搭配使用,可以让 RcloneView 从开机那一刻起就在后台默默运行。

<img src="/support/images/en/blog/synology-nas-autodection-and-connection.png" alt="RcloneView running in background with system tray active" class="img-large img-center" />

## 从托盘管理云端挂载

托盘功能中最实用的一项就是快速挂载管理。右键点击 RcloneView 托盘图标,即可查看所有已配置云端挂载的列表及其当前状态(已挂载或未挂载)。点击任意条目即可切换其挂载状态——将云盘挂载为本地卷,或将其卸载——无需打开主窗口。

对于全天需要保持多个云盘处于挂载状态的专业用户来说,这一功能尤为实用。开发人员可能会将一个 S3 存储桶挂载为网络驱动器,挂载一个 Google Drive 用于文档访问,以及挂载一个 NAS 用于本地文件传输。托盘可以让您即时控制所有这些挂载。

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="Quick access to cloud mounts via system tray in RcloneView" class="img-large img-center" />

## 任务完成通知

当同步任务完成时——无论是计划任务还是手动触发的任务——RcloneView 都可以显示桌面通知,展示任务名称、耗时以及最终状态。您可以在**设置标签 → 界面与通知 → 显示同步完成通知**中启用此功能。

这意味着您可以启动一个较大的隔夜备份任务,将 RcloneView 最小化到托盘,并在任务完成时收到桌面通知。如果任务出现错误,您也会立即得知。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history showing background sync completions in RcloneView" class="img-large img-center" />

## 快速上手

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 在**设置 → 常规**中,禁用**关闭时退出**并启用**开机启动**。
3. 照常配置同步任务或计划任务。
4. 最小化 RcloneView——任务和挂载会继续在后台运行。

设置完成后,RcloneView 就会像一个静默的后台服务一样为您的云存储运行,无需保持窗口打开。

---

**相关指南:**

- [使用 RcloneView 自动化每日云备份](https://rcloneview.com/support/blog/automate-daily-cloud-backups-with-rcloneview)
- [同步完成时的通知提醒——RcloneView](https://rcloneview.com/support/blog/notification-alerts-sync-complete-rcloneview)
- [RcloneView 中的电子邮件 SMTP 任务通知](https://rcloneview.com/support/blog/email-smtp-job-notifications-rcloneview)

<CloudSupportGrid />
