---
slug: fix-email-smtp-notifications-not-sending-rcloneview
title: "修复邮件 SMTP 通知无法发送的问题 — RcloneView 故障排查指南"
authors:
  - morgan
description: "修复无法发送的 RcloneView 邮件 SMTP 通知。解决作业提醒的端口阻塞、身份验证错误和阈值配置问题。"
keywords:
  - 修复 RcloneView 邮件通知
  - SMTP 通知无法发送
  - RcloneView 邮件提醒错误
  - SMTP 身份验证失败
  - 同步作业通知故障排查
  - 端口 587 被阻止 SMTP
  - 未收到备份提醒
  - RcloneView PLUS 通知
tags:
  - RcloneView
  - troubleshooting
  - automation
  - cloud-sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 修复邮件 SMTP 通知无法发送的问题 — RcloneView 故障排查指南

> 当 RcloneView 的邮件通知不再送达时,原因几乎总是 SMTP 配置、端口阻塞,或转账阈值设置过高 —— 本文介绍如何诊断并修复每一种情况。

邮件提醒只有真正送达才有用。当计划中的备份悄无声息地失败,而通知从未到达收件箱时,无人值守监控的意义也就荡然无存。RcloneView 的 SMTP 通知系统依赖若干容易配置错误的设置,本指南将逐一介绍最常见的故障点,帮助你的作业提醒重新可靠地工作。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 身份验证与主机错误

静默通知失败最常见的原因是 SMTP 身份验证不正确。如果你的邮件提供商要求使用应用专用密码(在启用了双重身份验证的 Gmail 和 Microsoft 365 账户中很常见),输入常规账户密码即使字段没有明显报错也会导致连接失败。请从提供商的安全设置中生成一个应用专用密码并改用它。

同时请仔细检查**SMTP 主机**字段 —— 类似 `smtp.gmial.com` 的拼写错误,或使用提供商的 IMAP 主机而非 SMTP 主机,都会导致连接失败。更正凭据后,在正式作业中依赖该配置之前,请始终使用**测试**按钮 —— 它可以将身份验证问题与作业级配置问题区分开来。

<img src="/support/images/en/blog/new-remote.png" alt="Testing SMTP authentication settings in RcloneView notification configuration" class="img-large img-center" />

## 端口阻塞与网络问题

RcloneView 建议在 SMTP 投递中使用带 STARTTLS 的**端口 587**。如果你在出站防火墙规则较严格的网络上运行 RcloneView(企业网络、部分 VPS 提供商和某些家庭 ISP 中很常见),端口 587(尤其是端口 25)可能被完全阻止,导致测试邮件超时而不是返回明确的错误。

如果测试始终超时而不是返回身份验证错误,问题几乎可以肯定出在网络层面,而非凭据层面。如果你的提供商支持,可尝试切换到端口 465(SSL),或与网络管理员确认出站 SMTP 流量是否被允许。如果你连接的是远程服务器或 Docker 容器上的外部 rclone 实例,由于连接实际上是从 rclone 运行的位置发起的,请同时确认该服务器的出站规则也允许 SMTP 流量。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Reviewing job notification settings after an SMTP connection failure" class="img-large img-center" />

## 阈值与收件人配置错误

如果 SMTP 连接和测试都成功,但实际作业的通知却从未送达,请检查作业级的通知阈值。RcloneView 允许你设置发送通知前的最小传输大小(以 MB 或 GB 为单位)—— 这对于频繁运行且数据变动很少的作业能有效减少提醒疲劳,但也意味着只传输少量文件的作业可能低于阈值而完全不产生邮件。可先临时降低或移除阈值,以确认这是否是原因。

还需确认收件人地址不仅在全局 SMTP 设置中正确,也在作业级别正确输入 —— RcloneView 要求按作业配置通知收件人,因此一个全局工作正常但未为特定作业分配收件人的 SMTP 连接,永远不会为该作业发送提醒。邮件通知是 PLUS 许可证功能,如果 SMTP、收件人和阈值均已确认无误但提醒仍未送达,请在进一步排查前确认你的许可证级别。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Checking job history and notification recipients for a completed sync job" class="img-large img-center" />

## 快速上手

1. 如果尚未下载,请从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView** 并打开通知设置。
2. 如果你的提供商要求使用应用专用密码,请用它重新输入 SMTP 凭据,然后点击**测试**。
3. 如果测试超时,请将端口从 587 切换到 465,或检查是否有防火墙规则阻止出站 SMTP。
4. 检查每个作业的通知阈值和收件人列表是否按预期配置。

在确认 SMTP 凭据、网络访问和作业级设置均正确无误后,邮件通知将成为后台运行的每个计划同步任务的可靠安全网。

---

**相关指南:**

- [邮件 SMTP 任务通知 — 在 RcloneView 中实时掌握同步状态](https://rcloneview.com/support/blog/email-smtp-job-notifications-rcloneview)
- [在 RcloneView 中设置云同步通知与提醒](https://rcloneview.com/support/blog/notification-alerts-sync-complete-rcloneview)
- [修复计划同步未运行问题 — 在 RcloneView 中排查自动化云任务](https://rcloneview.com/support/blog/fix-scheduled-sync-not-running-rcloneview)

<CloudSupportGrid />
