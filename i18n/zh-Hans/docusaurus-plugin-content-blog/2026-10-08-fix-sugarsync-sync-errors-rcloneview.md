---
slug: fix-sugarsync-sync-errors-rcloneview
title: "修复 SugarSync 同步错误 — 用 RcloneView 解决授权、传输和文件缺失问题"
authors:
  - morgan
description: "使用 RcloneView 的日志、作业历史和 Folder Compare,排查 SugarSync 授权失败、传输中断和文件缺失等同步错误。"
keywords:
  - 修复 SugarSync 同步错误
  - SugarSync rclone 错误
  - SugarSync 授权失败
  - SugarSync 上传失败
  - SugarSync 故障排查
  - RcloneView SugarSync
  - rclone SugarSync 远程
  - 云同步故障排查
  - SugarSync GUI
tags:
  - RcloneView
  - sugarsync
  - troubleshooting
  - tips
  - cloud-sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 修复 SugarSync 同步错误 — 用 RcloneView 解决授权、传输和文件缺失问题

> SugarSync 作业失败时,RcloneView 的作业历史、DEBUG 日志和 Folder Compare 可以帮助你判断原因出在远程、传输负载,还是文件根本没有到达。

SugarSync 同步因含糊的错误而中止,或者结束后文件夹看起来不完整,仅靠命令行很难诊断。RcloneView 将远程检查、作业记录、日志和并排对比集中在一个窗口中,让你依据证据排查,而不是盲目重新运行。RcloneView 可在 Windows、macOS 和 Linux 上,从一个窗口挂载并同步 90 多个提供商。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 确认远程仍可连接

如果作业在几秒内失败,应先怀疑远程,而不是数据。在 Remote 标签页中打开 Remote Manager,编辑 SugarSync 远程,如果账户信息已更改,请重新授权。然后在 Explorer 面板中打开该远程并浏览根文件夹。如果能正常列出内容,说明连接正常,问题出在别处。

你也可以在内置的 Terminal 标签页中运行 `rclone about "remote:"`(将 `remote` 替换为你的远程名称),快速检查账户是否有响应。

<img src="/support/images/en/blog/new-remote.png" alt="在 RcloneView Remote Manager 中编辑 SugarSync 远程" class="img-large img-center" />

## 查看作业历史并开启 DEBUG 日志

打开 Job History,查看失败那次运行的状态、耗时和文件数量。中途出错的作业通常指向特定文件或传输负载,而不是凭据问题。

要查看每个文件的确切错误信息,请前往 Settings > Embedded Rclone,启用 rclone 日志,将级别设置为 DEBUG,然后点击 Restart Embedded Rclone。重现故障后,在 Log 标签页或你配置的日志文件夹中查看日志。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="RcloneView 作业历史中显示出错的 SugarSync 作业" class="img-large img-center" />

## 降低并发并预览重新运行

间歇性的上传失败,往往在同时传输的文件减少后得到缓解。在同步向导的第 2 步中,减少文件传输数量,并将 equality checkers 设置为 4 或更低,这是针对慢速后端的建议。将"Retry entire sync if fails"保持为 3,这样临时性失败最多会重试三次。

重新运行之前,先用 Dry Run 查看哪些文件将被复制或删除,避免重试带来意外结果。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="在 RcloneView 中以较低并发重新运行 SugarSync 作业" class="img-large img-center" />

## 使用 Folder Compare 验证

重新运行后,打开 Compare,一侧放本地文件夹,另一侧放 SugarSync。按仅左侧、仅右侧和不同的文件进行筛选,找出仍然缺失或不一致的项目,然后只复制这些项目,而不必重复整个作业。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder Compare 列出 SugarSync 中缺失的文件" class="img-large img-center" />

## 开始使用

1. **下载 RcloneView**:从 [rcloneview.com](https://rcloneview.com/src/download.html) 获取。
2. 在 Remote Manager 中重新授权 SugarSync 远程,并确认根文件夹可以列出。
3. 查看 Job History,并为失败的作业启用 DEBUG 日志。
4. 降低并发,运行 Dry Run,重新运行,并用 Folder Compare 确认结果。

一旦在日志和对比结果中看清原因,SugarSync 故障就能通过简短、可重复的步骤解决。

---

**相关指南:**

- [管理 SugarSync 存储 — 使用 RcloneView 同步和备份文件](https://rcloneview.com/support/blog/manage-sugarsync-cloud-sync-backup-rcloneview)
- [使用 RcloneView 将 SugarSync 迁移到 Backblaze B2](https://rcloneview.com/support/blog/migrate-sugarsync-to-backblaze-b2-rcloneview)
- [使用 RcloneView 修复 OpenDrive 同步错误](https://rcloneview.com/support/blog/fix-opendrive-sync-errors-rcloneview)

<CloudSupportGrid />
