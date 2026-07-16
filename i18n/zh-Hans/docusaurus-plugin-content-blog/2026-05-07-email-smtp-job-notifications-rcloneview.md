---
slug: email-smtp-job-notifications-rcloneview
title: "邮件 SMTP 任务通知 — 在 RcloneView 中实时掌握同步状态"
authors:
  - tayson
description: "在 RcloneView PLUS 中设置邮件 SMTP 通知，接收同步任务完成提醒、配置多个收件人，并通过邮件监控无人值守的备份任务。"
keywords:
  - RcloneView 邮件通知
  - SMTP 同步通知
  - 云同步邮件提醒
  - 任务通知 SMTP
  - 备份监控邮件
  - RcloneView PLUS 通知
  - 同步完成提醒
  - rclone 邮件通知
tags:
  - RcloneView
  - feature
  - automation
  - cloud-sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 邮件 SMTP 任务通知 — 在 RcloneView 中实时掌握同步状态

> RcloneView PLUS 允许您为同步任务完成配置直接的 SMTP 邮件通知，让您的团队无需手动检查即可随时知晓备份何时完成——或何时失败。

按计划运行云同步和备份任务只是自动化的一半。另一半是无需打开应用程序、手动检查任务历史记录即可知道结果。RcloneView PLUS 支持通过直接的 SMTP 配置发送邮件通知，在任务完成的瞬间将同步状态消息直接发送到您的收件箱。这使得个人和团队都能够切实可行地监控无人值守的备份。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 在 RcloneView 中配置 SMTP

要设置邮件通知，请打开 RcloneView 的通知设置（需要 PLUS 许可证）。输入您的 SMTP 服务器详细信息：

- **SMTP 主机**：您邮件服务商的外发邮件服务器（例如，Gmail 的 `smtp.gmail.com`，或您所在组织的 Exchange/SMTP 服务器）。
- **端口**：通常 STARTTLS（推荐）使用端口 **587**，SSL 使用端口 465。在大多数消费者和云环境中应避免使用端口 25，因为它通常会被封锁。
- **身份验证**：输入您的邮箱用户名和密码，或专用应用密码。对于 Gmail，如果账户启用了双重验证（2FA），请使用应用专用密码。
- **发件地址**：将出现在通知邮件上的发件人地址。

输入详细信息后，使用**测试**按钮发送一封测试邮件，在正式依赖它进行生产通知之前确认 SMTP 连接是否正常工作。

<img src="/support/images/en/blog/new-remote.png" alt="Configuring SMTP email notification settings in RcloneView PLUS" class="img-large img-center" />

## 添加收件人和任务级设置

全局配置 SMTP 后，您可以在任务级别添加通知收件人。打开某个同步任务的设置，输入一个或多个邮箱地址，以便该任务完成时接收通知。不同的任务可以通知不同的人——例如，财务文档的备份任务可以通知财务团队，而媒体同步任务则通知内容团队。

RcloneView 还允许您设置通知阈值——例如，仅当任务传输的数据超过可配置的兆字节数时才发送邮件。这对于经常运行、且往往没有变化就完成的任务非常有用：只有在真正发生了有意义的事情时您才会收到通知，从而减少通知疲劳。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Setting email notification recipients on a sync job in RcloneView" class="img-large img-center" />

## 邮件通知的使用场景

**无人值守的备份监控**是主要使用场景。如果您安排了每晚将本地文件备份到 Backblaze B2 的任务，可以将邮件通知配置到您的个人邮箱。如果任务因网络中断、凭据问题或磁盘已满而失败，您会在早上收到失败邮件，而不是数周后在尝试恢复数据时才发现问题。

**团队知情**同样有价值。当共享的云同步任务完成时——例如，每周将共享项目文件夹同步到 Amazon S3——通知整个团队可以确认同步已是最新，而无需每个人都登录 RcloneView。您可以配置不同的任务通知不同的收件人，让合适的人根据其职责范围获得通知。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history and notification log in RcloneView PLUS" class="img-large img-center" />

## 快速上手

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView** 并激活 PLUS 许可证。
2. 打开**通知设置**，输入您的 SMTP 主机、端口 587 及身份验证凭据。
3. 点击**测试**发送一封测试邮件以验证连接。
4. 打开每个同步任务的设置，添加需要通知的邮箱地址。
5. 可选：设置传输大小阈值，使通知仅在移动了大量数据时触发。

RcloneView PLUS 中的邮件 SMTP 通知补全了自动化备份监控的闭环——让您安心确认云同步任务运行成功，或在出现问题时立即收到提醒。

---

**相关指南：**

- [使用 RcloneView 为同步完成设置通知提醒](https://rcloneview.com/support/blog/notification-alerts-sync-complete-rcloneview)
- [使用 RcloneView 自动化每日云备份](https://rcloneview.com/support/blog/automate-daily-cloud-backups-with-rcloneview)
- [RcloneView Telegram 远程控制](https://rcloneview.com/support/blog/rcloneview-telegram-remote-control)

<CloudSupportGrid />
