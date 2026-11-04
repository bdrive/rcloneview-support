---
slug: fix-yandex-disk-sync-errors-rcloneview
title: "修复 Yandex Disk 同步错误 — 使用 RcloneView 诊断并解决传输失败"
authors:
  - kai
description: "使用 RcloneView 修复 Yandex Disk 同步错误：重新授权 OAuth、调整 checkers 和重试次数、查看 DEBUG 日志，并通过 Dry Run 和 Folder Compare 验证结果。"
keywords:
  - 修复 Yandex Disk 同步错误
  - Yandex Disk 传输失败
  - Yandex Disk OAuth 重新授权
  - RcloneView Yandex Disk 故障排查
  - Yandex Disk 同步无法工作
  - rclone Yandex 错误
  - 云同步故障排查
  - rclone 调试日志
  - Yandex Disk 备份失败
  - Yandex Disk 任务出错
tags:
  - RcloneView
  - yandex-disk
  - troubleshooting
  - tips
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 修复 Yandex Disk 同步错误 — 使用 RcloneView 诊断并解决传输失败

> 一步步找出 Yandex Disk 任务为何出错，并在不重新复制全部文件的情况下修复。

Yandex Disk 任务在 Job History 中以“Errored”结束，令人沮丧，尤其是在夜间运行的情况下。大多数失败可归为几类：登录过期、对慢速后端并行度过高，或者路径与过滤器设置错误。RcloneView 提供了区分这些情况所需的设置和日志。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 从 Job History 和 Log 选项卡开始

打开 **Job History** 并找到失败的运行。其状态、耗时、总大小和文件数可以显示任务是立即失败（可能是认证或路径问题）还是中途失败（可能是限流或某个特定文件）。然后在底部 Info View 的 **Log** 选项卡中查看失败前后带时间戳的条目。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="RcloneView 中显示出错运行的 Job History" class="img-large img-center" />

如果日志信息不足，请前往 Settings > Embedded Rclone，启用 rclone Logging，将级别设为 DEBUG，点击 Restart Embedded Rclone，然后重现问题。生成的文件会准确显示哪个操作失败。

## 重新授权已过期或被拒绝的登录

Yandex Disk 通过浏览器中的 OAuth 连接。如果列出文件夹立即失败，或每个文件都因授权消息而出错，请打开 Remote Manager，编辑 Yandex Disk 远程，并重新完成浏览器登录。然后刷新 Explorer 面板。成功列出内容即可在运行任何任务之前确认连接正常。

<img src="/support/images/en/blog/new-remote.png" alt="在 RcloneView 中编辑并重新授权远程" class="img-large img-center" />

## 为较慢的后端调整任务设置

如果错误只出现在大型任务中，请降低压力。在 Sync 向导的 Advanced Settings 中减少文件传输数，并对慢速后端将 equality checkers 保持在 4 或更少（默认值为 8）。整体同步重试次数默认为 3 次，对临时性故障很有用，请保持启用。如果需要确认内容而不仅仅是大小，可以考虑启用 checksum。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="RcloneView 中的高级任务设置和计划" class="img-large img-center" />

## 无需重新复制即可确认修复结果

运行 **Dry Run** 查看仍会传输哪些内容，然后再次运行任务。打开 **Compare**，将 Yandex Disk 与源进行比对：left-only 或 different 的文件即为剩余内容，您可以只复制这些文件。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="使用 Folder Compare 确认剩余差异" class="img-large img-center" />

## 开始使用

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 在 Job History 和 Log 选项卡中检查失败的运行。
3. 如果列出内容失败，请重新授权 Yandex Disk 远程。
4. 降低传输数和 checkers，执行 Dry Run，然后重新运行并 Compare。

有条理的诊断能把含糊的“Errored”状态变成一份简短且可修复的清单。

---

**相关指南：**

- [修复 Yandex Disk 配额已满错误](https://rcloneview.com/support/blog/fix-yandex-disk-quota-full-errors-rcloneview)
- [管理 Yandex Disk 云同步和备份](https://rcloneview.com/support/blog/manage-yandex-disk-cloud-sync-backup-rcloneview)
- [将 Yandex Disk 同步到 Google Drive 和 S3](https://rcloneview.com/support/blog/sync-yandex-disk-google-drive-s3-rcloneview)

<CloudSupportGrid />
