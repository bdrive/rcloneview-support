---
slug: fix-put-io-sync-errors-rcloneview
title: "修复 Put.io 同步错误 — 使用 RcloneView 诊断并解决"
authors:
  - kai
description: "使用 RcloneView 修复 Put.io 同步错误:重新授权 OAuth、调整传输设置、查看作业历史和日志,并通过 Folder Compare 验证结果。"
keywords:
  - 修复 put.io 同步错误
  - put.io 认证错误
  - put.io 传输失败
  - putio rclone 错误
  - RcloneView put.io
  - put.io oauth 重新授权
  - 云同步故障排查
  - put.io 下载失败
  - rclone 日志调试
  - put.io 同步 GUI
tags:
  - RcloneView
  - troubleshooting
  - tips
  - putio
  - cloud-sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 修复 Put.io 同步错误 — 使用 RcloneView 诊断并解决

> 从过期授权到过度并发,借助 RcloneView 内置工具逐一排查 Put.io 传输失败的常见原因。

Put.io 同步中途停止,往往让人无从判断:是登录问题、网络问题,还是作业设置问题?RcloneView 把线索集中在一处。Transferring 标签页、Job History 和日志查看器分别展示不同的信息,而 Folder Compare 会告诉您之后还缺少哪些文件。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 先检查授权

Put.io 通过基于浏览器的 OAuth 连接。如果作业一开始就因认证或权限错误而失败,首先应怀疑已保存的授权。在 Remote 标签页中打开 **Remote Manager**,编辑 Put.io 远程,并重新完成浏览器登录。请确保登录的是存放文件的同一个 Put.io 账户,因为同一浏览器中登录了另一个账户,是列表显示为空的常见原因。

<img src="/support/images/en/blog/new-remote.png" alt="在 RcloneView 中重新授权 Put.io 远程" class="img-large img-center" />

重新授权后,按 F5(macOS 上为 Cmd+R)刷新 Put.io 面板,并在重新运行任何作业之前确认文件夹能正常列出。

## 查看 Job History 和日志

作业中途失败时,请打开 **Job History**。每次运行都会记录执行类型、开始时间、耗时、状态(Completed、Errored 或 Canceled)、总大小、速度和文件数。将失败的运行与之前成功的运行对比,可以看出它是早期失败(指向凭据问题),还是后期失败(指向网络或数据量问题)。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="显示 Errored 和 Completed 的 Put.io 运行的 Job History" class="img-large img-center" />

如需详细信息,请在 **Settings > Embedded Rclone** 中开启文件日志,将日志级别设为 DEBUG,然后点击 Restart Embedded Rclone。复现故障后,在日志标签页中查看出错的文件和错误文本。您还可以在 Terminal 标签页中运行 `rclone about "putio:"`(使用您自己的远程名称),以确认远程有响应。

## 调整作业设置

远程服务上的传输失败,往往是自己造成的。在同步向导的 Advanced Settings 中,降低 **Number of file transfers** 和 **Number of equality checkers**;对于速度较慢的后端,建议将 checkers 保持在 4 或以下。将 **Retry entire sync if fails** 保持默认值 3,短暂的中断即可自行恢复。如果问题出在超大文件上,可使用最大文件大小过滤器,先处理较小的文件,再单独处理其余文件。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="调整设置后运行 Put.io 同步作业" class="img-large img-center" />

## 确认缺少哪些文件

重新运行后,打开 **Compare**,一侧选择 Put.io,另一侧选择目标位置。Left-only 文件就是未能到达的文件,**Copy right** 只会发送这些文件。RcloneView 在 FREE 许可证下就提供此功能,与挂载和同步一样,因此无需升级即可完成恢复。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder Compare 列出目标中仍缺少的文件" class="img-large img-center" />

## 快速开始

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 在 Remote Manager 中重新授权 Put.io 远程并刷新列表。
3. 查看 Job History;如果原因不明显,请启用 DEBUG 日志。
4. 降低并发数后重新运行,然后使用 Compare 复制剩余的文件。

先读懂证据,就能把含糊的失败变成具体、可修复的设置。

---

**相关指南:**

- [管理 Put.io 存储](https://rcloneview.com/support/blog/manage-put-io-cloud-sync-backup-rcloneview)
- [将 Put.io 迁移到 Google Drive](https://rcloneview.com/support/blog/migrate-put-io-to-google-drive-rcloneview)
- [修复 OAuth 令牌过期导致的云同步错误](https://rcloneview.com/support/blog/fix-oauth-token-expired-cloud-sync-rcloneview)

<CloudSupportGrid />
