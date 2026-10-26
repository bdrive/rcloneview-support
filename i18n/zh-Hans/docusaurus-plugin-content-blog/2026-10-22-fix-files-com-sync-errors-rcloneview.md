---
slug: fix-files-com-sync-errors-rcloneview
title: "修复 Files.com 同步错误 — 使用 RcloneView 解决连接、传输和文件缺失问题"
authors:
  - steve
description: "使用 RcloneView 修复 Files.com 同步错误：重新检查远程、查看作业历史和 DEBUG 日志、降低并发，并通过文件夹比较验证结果。"
keywords:
  - 修复 Files.com 同步错误
  - Files.com 同步失败
  - Files.com rclone 错误
  - RcloneView 故障排查
  - Files.com 文件缺失
  - rclone DEBUG 日志
  - 文件夹比较
  - 云同步故障排查
tags:
  - RcloneView
  - troubleshooting
  - tips
  - cloud-storage
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 修复 Files.com 同步错误 — 使用 RcloneView 解决连接、传输和文件缺失问题

> 当 Files.com 作业失败时，RcloneView 的作业历史、DEBUG 日志和文件夹比较可以显示原因出在远程、传输负载，还是文件根本没有到达。

Files.com 同步因含糊的错误而中断，或结束后文件夹看起来不完整，仅靠命令行很难诊断。RcloneView 将远程检查、作业记录、日志和并排比较集中在一个窗口中，让你依据证据而不是盲目重试来排查。RcloneView 还支持文件夹同步与比较，基础同步和文件夹比较可使用 FREE 许可证。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 确认远程仍然可以连接

如果作业在几秒内失败，应先怀疑远程而不是数据。在 Remote 选项卡中打开 Remote Manager，编辑 Files.com 远程，如果凭据已更改或过期，请重新输入。然后在 Explorer 面板中打开该远程并浏览根文件夹。如果能正常列出，说明连接正常，问题出在别处。

你也可以在内置的 Terminal 选项卡中运行 `rclone about "remote:"`，将 `remote` 替换为你的远程名称，以快速检查账户是否有响应。

<img src="/support/images/en/blog/new-remote.png" alt="在 RcloneView Remote Manager 中编辑 Files.com 远程" class="img-large img-center" />

## 查看作业历史并开启 DEBUG 日志

打开 Job History，查看失败运行的状态、耗时和文件数量。中途出错的作业通常指向特定文件或传输负载，而不是凭据问题。

若要查看每个文件的确切消息，请进入 Settings > Embedded Rclone，启用 rclone 日志，将级别设置为 DEBUG，然后点击 Restart Embedded Rclone。重现故障后，在 Log 选项卡或你配置的日志文件夹中查看日志。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="显示 Files.com 作业出错的 RcloneView 作业历史" class="img-large img-center" />

## 降低并发并预览重新运行

间歇性失败通常会在同时移动的文件减少时缓解。在同步向导的第 2 步中，减少文件传输数量，并将 equality checkers 设置为 4 或更低，这是针对慢速后端的建议。将 "Retry entire sync if fails" 保持为 3，这样临时性失败最多会重试三次。

重新运行之前，使用 Dry Run 查看将要复制或删除的文件，避免重试带来意外。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="在 RcloneView 中以较低并发重新运行 Files.com 作业" class="img-large img-center" />

## 使用文件夹比较验证

重新运行后，打开 Compare，一侧选择本地文件夹，另一侧选择 Files.com。筛选 left-only、right-only 和 different 文件，查看仍然缺失或不一致的项目，然后只复制这些项目，而不必重复整个作业。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="列出 Files.com 上缺失文件的文件夹比较" class="img-large img-center" />

## 开始使用

1. **下载 RcloneView**：从 [rcloneview.com](https://rcloneview.com/src/download.html) 下载。
2. 在 Remote Manager 中重新检查 Files.com 远程，并确认根文件夹可以列出。
3. 查看 Job History，并为失败的作业开启 DEBUG 日志。
4. 降低并发，运行 Dry Run，重新运行，并通过文件夹比较确认结果。

一旦在日志和比较中看清原因，Files.com 故障就会变成一次简短、可重复的修复。

---

**相关指南：**

- [管理 Files.com 存储 — 使用 RcloneView 同步和备份文件](https://rcloneview.com/support/blog/manage-files-com-cloud-sync-backup-rcloneview)
- [使用 RcloneView 修复 SugarSync 同步错误](https://rcloneview.com/support/blog/fix-sugarsync-sync-errors-rcloneview)
- [记录和调试云传输 — 在 RcloneView 中排查问题](https://rcloneview.com/support/blog/log-debug-troubleshoot-transfers-rcloneview)

<CloudSupportGrid />
