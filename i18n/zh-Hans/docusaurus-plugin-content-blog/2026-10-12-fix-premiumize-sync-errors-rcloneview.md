---
slug: fix-premiumize-sync-errors-rcloneview
title: "修复 premiumize.me 同步错误 — 使用 RcloneView 解决授权和传输问题"
authors:
  - casey
description: "使用 RcloneView 的日志、作业历史和文件夹比较，排查 premiumize.me 的授权过期、传输失败和文件缺失等同步错误。"
keywords:
  - 修复 premiumize.me 同步错误
  - premiumize rclone 错误
  - premiumize 授权失败
  - premiumize 传输失败
  - premiumize 故障排除
  - RcloneView premiumize
  - 云同步故障排除
  - premiumize GUI
tags:
  - RcloneView
  - troubleshooting
  - tips
  - cloud-sync
  - cloud-storage
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 修复 premiumize.me 同步错误 — 使用 RcloneView 解决授权和传输问题

> 当 premiumize.me 作业失败时，RcloneView 的作业历史、DEBUG 日志和文件夹比较可以告诉你原因出在登录、传输负载，还是未到达的文件。

premiumize.me 作业提前停止，或者让文件夹只复制了一半，仅靠命令行很难诊断。RcloneView 将远程检查、作业记录、日志和并排比较集中在一个窗口中，让你可以修复真正的原因，而不是盲目重新运行。RcloneView 在一个窗口中即可挂载并同步 90 多个提供商，支持 Windows、macOS 和 Linux。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 重新授权远程

premiumize.me 通过浏览器中的 OAuth 连接。如果作业在几秒内失败，首先应怀疑登录问题。在 Remote 选项卡中打开 Remote Manager，编辑 premiumize.me 远程，并通过浏览器提示重新登录。

然后在 Explorer 面板中打开该远程并浏览根文件夹。如果能正常列出，说明连接正常，故障出在传输本身。

<img src="/support/images/en/blog/new-remote.png" alt="在 RcloneView 中重新授权 premiumize.me 远程" class="img-large img-center" />

## 查看作业历史并启用 DEBUG 日志

打开 Job History，查看失败运行的状态、持续时间和文件数。作业中途出错通常指向特定文件或负载，而不是凭据。

要获取每个文件的确切消息，请前往 Settings > Embedded Rclone，启用 rclone 日志，将级别设置为 DEBUG，然后点击 Restart Embedded Rclone。重现故障后，查看 Log 选项卡或你所配置文件夹中的日志文件。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="RcloneView 作业历史显示出错的 premiumize.me 作业" class="img-large img-center" />

## 降低负载并预览重新运行

间歇性故障通常会因同时传输数减少而缓解。在同步向导的第 2 步中，降低文件传输数，并将 equality checkers 设置为 4 或更低。将 "Retry entire sync if fails" 保持为 3，以便重试临时性错误。

重新运行之前，使用 Dry Run 查看哪些文件将被复制或删除，这样重试时不会出现意外。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="以较低并发重新运行 premiumize.me 作业" class="img-large img-center" />

## 使用文件夹比较确认

重新运行后，打开 Compare，一侧为本地文件夹，另一侧为 premiumize.me。筛选仅左侧、仅右侧和不同的文件，然后只复制仍然缺失的内容，而不是重复整个作业。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="文件夹比较显示 premiumize.me 上缺失的文件" class="img-large img-center" />

## 开始使用

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 重新授权 premiumize.me 远程，并确认根文件夹可以列出。
3. 查看 Job History，并为失败的作业开启 DEBUG 日志。
4. 降低并发，运行 Dry Run，重新运行，并使用文件夹比较进行验证。

当日志和比较让原因一目了然，premiumize.me 的故障就变成一次简短、可重复的修复。

---

**相关指南：**

- [使用 RcloneView 管理 premiumize.me 云存储](https://rcloneview.com/support/blog/manage-premiumize-me-cloud-sync-backup-rcloneview)
- [使用 RcloneView 同步 premiumize.me 云下载](https://rcloneview.com/support/blog/sync-premiumize-cloud-downloads-rcloneview)
- [使用 RcloneView 修复 put.io 同步错误](https://rcloneview.com/support/blog/fix-put-io-sync-errors-rcloneview)

<CloudSupportGrid />
