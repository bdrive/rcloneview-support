---
slug: fix-opendrive-sync-errors-rcloneview
title: "修复 OpenDrive 同步错误 — 使用 RcloneView 解决登录、上传和列表问题"
authors:
  - kai
description: "借助 RcloneView 的作业历史、日志和 Folder Compare，排查登录失败、上传中断和文件缺失等 OpenDrive 同步错误。"
keywords:
  - 修复 OpenDrive 同步错误
  - OpenDrive rclone 错误
  - OpenDrive 登录失败
  - OpenDrive 上传失败
  - OpenDrive 故障排查
  - RcloneView OpenDrive
  - rclone OpenDrive 远程
  - 云同步故障排查
  - OpenDrive GUI
tags:
  - RcloneView
  - opendrive
  - troubleshooting
  - tips
  - cloud-sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 修复 OpenDrive 同步错误 — 使用 RcloneView 解决登录、上传和列表问题

> 当 OpenDrive 同步失败时，RcloneView 中的作业历史、日志和 Folder Compare 可以显示原因是凭据、传输负载，还是文件根本没有到达。

同步失败很少会自己说明原因。作业可能立即停止，可能在缺少部分文件的情况下结束，也可能留下一个看起来不完整的文件夹。与其盲目重新运行，不如查看 RcloneView 的作业历史、开启 DEBUG 日志，并对比两侧内容来找出真正的原因。RcloneView 可在 Windows、macOS 和 Linux 上通过一个窗口挂载并同步 90 多个提供商。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 排除连接和凭据问题

如果作业在几秒内失败，请怀疑远程本身。在 Remote 选项卡中打开 Remote Manager，编辑 OpenDrive 远程并重新输入账户信息。然后在 Explorer 面板中打开该远程并浏览根文件夹。如果能正常列出，说明连接正常，故障出在其他地方。

你也可以在内置的 Terminal 选项卡中运行 `rclone about "remote:"`，确认账户能够响应，其中 `remote` 请替换为你的远程名称。

<img src="/support/images/en/blog/new-remote.png" alt="在 RcloneView Remote Manager 中编辑 OpenDrive 远程" class="img-large img-center" />

## 查看作业历史并启用 DEBUG 日志

打开 Job History，查看失败运行的状态、持续时间和文件数量。作业在中途报错通常指向某个特定文件或传输负载问题，而不是登录错误。

要查看每个文件的具体消息，请前往 Settings > Embedded Rclone，启用 rclone 日志，将级别设置为 DEBUG，然后重启内置 rclone。重现故障后，在 Log 选项卡或你配置的日志文件夹中阅读日志。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="显示出错 OpenDrive 作业的 RcloneView 作业历史" class="img-large img-center" />

## 降低中断传输的负载

间歇性失败的上传通常在同时传输的文件减少后得到改善。在同步向导的第 2 步中，降低文件传输数和 equality checker 数(对于较慢的后端，建议不超过 4)。将 "Retry entire sync if fails" 保持为 3，这样临时性失败会自动重试。

重新运行之前，先使用 Dry Run 确认将要复制或删除的文件列表符合预期。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="在 RcloneView 中以较低并发重新运行 OpenDrive 作业" class="img-large img-center" />

## 使用 Folder Compare 验证

重新运行后，打开 Compare，一侧选择本地文件夹，另一侧选择 OpenDrive。按 left-only、right-only 和 different 文件进行筛选，即可准确看到仍然缺失或不一致的内容，然后只复制这些项目，而不必重复整个作业。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="显示 OpenDrive 上缺失文件的 Folder Compare" class="img-large img-center" />

## 开始使用

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 在 Remote Manager 中重新输入 OpenDrive 凭据，并确认能列出根文件夹。
3. 查看失败作业的 Job History 并启用 DEBUG 日志。
4. 降低并发，运行 Dry Run，重新运行，并用 Folder Compare 确认。

通过日志和对比找出原因后，OpenDrive 故障就能变成一次简短且可重复的修复。

---

**相关指南：**

- [管理 OpenDrive 存储 — 使用 RcloneView 同步和备份文件](https://rcloneview.com/support/blog/manage-opendrive-cloud-sync-backup-rcloneview)
- [使用 RcloneView 修复 Gofile 同步错误](https://rcloneview.com/support/blog/fix-gofile-sync-errors-rcloneview)
- [使用 RcloneView 修复云同步卡住和挂起问题](https://rcloneview.com/support/blog/fix-cloud-sync-stuck-hanging-rcloneview)

<CloudSupportGrid />
