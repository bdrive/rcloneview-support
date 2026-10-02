---
slug: fix-gofile-sync-errors-rcloneview
title: "修复 Gofile 同步错误 — 使用 RcloneView 解决令牌、上传和列表问题"
authors:
  - jay
description: "借助 RcloneView 的任务历史、日志和内置终端，排查令牌无效、上传失败和列表为空等 Gofile 同步错误。"
keywords:
  - 修复 Gofile 同步错误
  - Gofile rclone 错误
  - Gofile 令牌无效
  - Gofile 上传失败
  - Gofile 故障排除
  - RcloneView Gofile
  - Gofile 账户 API 令牌
  - rclone Gofile 远程
  - 云同步故障排除
  - Gofile GUI
tags:
  - RcloneView
  - gofile
  - troubleshooting
  - tips
  - cloud-sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 修复 Gofile 同步错误 — 使用 RcloneView 解决令牌、上传和列表问题

> 大多数 Gofile 同步失败都可归结为几个原因:过期的令牌、错误的根文件夹,或需要重试的传输,而 RcloneView 能在任务历史和日志中让您逐一查看。

Gofile 使用账户 API 令牌而不是浏览器登录进行身份验证,因此错误通常表现为 "unauthorized" 消息或看起来为空的文件夹。与其在命令行中猜测,不如使用 RcloneView 的任务历史、日志和终端,准确查看是哪一步失败了。RcloneView 可在 Windows、macOS 和 Linux 上,通过一个窗口挂载并同步 90 多个提供商。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 先检查账户 API 令牌

最常见的失败原因是令牌无效或已过期。Gofile 令牌位于 Gofile 个人资料页面的 Account API Token 字段中。如果您重新生成了令牌,或粘贴时末尾带有空格,所有请求都会被拒绝。

在 Remote 选项卡中打开 Remote Manager,编辑 Gofile 远程,然后重新粘贴令牌。接着在 Explorer 面板中浏览该远程的根目录。如果列表能够加载,说明身份验证没有问题,问题出在别处。

<img src="/support/images/en/blog/new-remote.png" alt="在 RcloneView 中编辑 Gofile 远程并重新输入账户 API 令牌" class="img-large img-center" />

## 查看任务历史和日志

当计划任务或手动任务以 Errored 状态结束时,请打开 Job History。每个条目都会记录执行类型、持续时间、状态、大小和文件数,因此您可以判断任务是立即失败(通常是身份验证问题)还是中途失败(通常是网络或文件级问题)。

如需更多细节,请在 Settings > Embedded Rclone 下启用 rclone 日志,将级别设置为 DEBUG,重启内置 rclone,然后重现故障。日志会显示每个文件返回的确切错误。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="RcloneView 任务历史显示出错的 Gofile 同步任务" class="img-large img-center" />

## 通过 Dry Run 定位上传失败

如果只有部分文件失败,请先运行 Dry Run。它会列出将被复制或删除的内容而不做任何更改,因此您可以确认源和目标是否符合预期。然后在同步向导的第 2 步中降低文件传输数量,并将 "Retry entire sync if fails" 保持为默认值 3。减少并行传输通常能消除间歇性的上传错误。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="在 RcloneView 中调整传输设置后运行 Gofile 同步任务" class="img-large img-center" />

## 使用 Folder Compare 验证

重新运行后,使用 Compare 将本地文件夹与 Gofile 文件夹并排比较。仅左侧、仅右侧和不同文件的筛选器会准确显示仍然缺失的内容,因此无需重新上传所有文件。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder Compare 视图突出显示 Gofile 上缺失的文件" class="img-large img-center" />

## 开始使用

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 在 Remote Manager 中重新输入 Gofile 的 Account API Token,并确认根文件夹可以列出。
3. 如果任务为 Errored,请查看 Job History 并启用 DEBUG 日志。
4. 运行 Dry Run,减少并发传输数,然后使用 Folder Compare 验证。

清晰地了解令牌、日志和差异,就能把含糊不清的 Gofile 故障变成快速修复。

---

**相关指南:**

- [管理 Gofile 存储 — 使用 RcloneView 同步和备份文件](https://rcloneview.com/support/blog/manage-gofile-cloud-sync-backup-rcloneview)
- [使用 RcloneView 修复 Put.io 同步错误](https://rcloneview.com/support/blog/fix-put-io-sync-errors-rcloneview)
- [使用 RcloneView 修复云同步卡住和挂起](https://rcloneview.com/support/blog/fix-cloud-sync-stuck-hanging-rcloneview)

<CloudSupportGrid />
