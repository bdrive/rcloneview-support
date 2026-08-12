---
slug: fix-proton-drive-sync-errors-rcloneview
title: "修复 Proton Drive 同步错误 — RcloneView 故障排除指南"
authors:
  - tayson
description: "通过实用的修复方法和日志记录步骤，排查 RcloneView 中 Proton Drive 的身份验证、双重验证（2FA）和同步失败问题。"
keywords:
  - Proton Drive 同步错误
  - 修复 Proton Drive RcloneView
  - Proton Drive 身份验证失败
  - Proton Drive 2FA 登录
  - Proton Drive 故障排除
  - RcloneView 同步错误
  - Proton Drive 连接问题
  - Proton Drive 备份修复
  - rclone 日志调试
tags:
  - RcloneView
  - troubleshooting
  - tips
  - proton-drive
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 修复 Proton Drive 同步错误 — RcloneView 故障排除指南

> 当 Proton Drive 同步卡住或身份验证失败时，问题通常出在凭据设置或作业日志上，而不是传输本身的缺陷。

Proton Drive 通过电子邮件、密码和可选的双重验证码连接到 RcloneView，而不是浏览器 OAuth 流程，因此大多数同步失败都可以追溯到这个凭据握手过程，或者是在你的 Proton 账户设置更改后尚未重新测试过的作业。RcloneView 会在 Job History 和 Log 标签页中显示这些失败信息，只要知道该看哪里，就能轻松找出实际原因。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 身份验证和 2FA 失败

如果 Proton Drive 远程连接失败，请先在 Remote Manager 中重新检查输入的电子邮件和密码——与 OAuth 提供商不同，这里没有浏览器重新登录可以回退，因此一旦 Proton 密码更改，该远程连接会在你手动编辑之前一直悄然失效。如果你的 Proton 账户启用了双重验证，请确保及时输入验证码，因为 2FA 验证码很快会过期，过期的验证码会产生与密码错误相同的通用身份验证错误。

<img src="/support/images/en/blog/new-remote.png" alt="在 RcloneView Remote Manager 中编辑 Proton Drive 凭据" class="img-large img-center" />

RcloneView 在 Windows、macOS 和 Linux 上使用同一窗口挂载和同步 Proton Drive——因此修复一次凭据后，无需针对每个平台重新配置即可应用到你已配置该远程的所有位置。

## 同步作业卡住或在传输中途失败

一个开始运行但从未完成的作业，通常指向排除范围超出预期的过滤规则，或者针对不稳定连接设置得过低的重试次数。打开该作业的 Advanced Settings 并确认重试次数——默认的 3 次可以应对短暂的网络故障，但将其降至 1 会完全移除这道安全保障。在重新启动作业之前运行一次 Dry Run，以准确查看它将处理哪些文件。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="在重试 Proton Drive 同步作业之前运行 Dry Run" class="img-large img-center" />

## 查看 Job History 并启用调试日志

Job History 会记录某次运行是 Completed、Errored 还是 Canceled，以及它停止的确切时间——这个时间戳是将失败与特定文件或网络事件关联起来的可靠方法。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="在 RcloneView 中查看 Proton Drive 作业历史状态" class="img-large img-center" />

对于持续出现或原因不明的失败，请在设置中启用 rclone 日志记录，将日志级别设为 DEBUG，重启内嵌的 rclone 进程，然后重现该同步。生成的日志文件会精确指出哪个 API 调用失败了，这比仅凭错误对话框猜测要有用得多。

## 开始使用

1. 如果尚未安装，请从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 在 Remote Manager 中重新输入你的 Proton Drive 电子邮件和密码，如提示则及时完成 2FA。
3. 在受影响的同步作业上运行 Dry Run，确认哪些文件在范围内。
4. 如果刷新凭据仍未解决问题，请启用 DEBUG 日志记录并重现该问题。

大多数 Proton Drive 同步错误在验证凭据和重试设置后就能解决——其余的问题日志会告诉你答案。

---

**相关指南：**

- [使用 RcloneView 管理 Proton Drive 文件和云同步](https://rcloneview.com/support/blog/manage-proton-drive-cloud-sync-rcloneview)
- [使用 RcloneView 将硬盘加密备份到 Proton Drive](https://rcloneview.com/support/blog/hard-drive-to-proton-drive-with-rcloneview)
- [Proton Drive 连接你的云端 —— 使用 RcloneView 轻松备份与同步](https://rcloneview.com/support/blog/proton-drive-multi-cloud-sync-with-rcloneview)

<CloudSupportGrid />
