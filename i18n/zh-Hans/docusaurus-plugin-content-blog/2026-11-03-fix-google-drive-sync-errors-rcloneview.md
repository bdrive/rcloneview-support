---
slug: fix-google-drive-sync-errors-rcloneview
title: "修复 Google Drive 同步错误 — 使用 RcloneView 解决文件夹缺失、任务失败和列表为空的问题"
authors:
  - steve
description: "使用 RcloneView 日志和 Folder Compare 排查 Google Drive 同步错误，例如共享文件夹缺失、Computers 列表为空以及任务出错。"
keywords:
  - 修复 Google Drive 同步错误
  - Google Drive rclone 错误
  - Google Drive 与我共享 缺失
  - Google Drive Computers 文件夹为空
  - Google Drive 同步失败
  - RcloneView Google Drive
  - Google Docs 同步过滤器
  - Google Drive 故障排除
  - 云同步故障排除
  - Google Drive GUI
tags:
  - RcloneView
  - google-drive
  - troubleshooting
  - tips
  - cloud-sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 修复 Google Drive 同步错误 — 使用 RcloneView 解决文件夹缺失、任务失败和列表为空的问题

> 许多 Google Drive 同步问题都源于缺少设置、登录过期或过滤器，RcloneView 可以帮助您找出具体原因。

Google Drive 任务以 Errored 结束，或者远程列表中没有显示您期望的内容，只要能查看日志，原因通常并不神秘。常见原因包括需要特定设置的共享文件夹、需要文件夹 ID 的已备份计算机，以及行为与普通文件不同的 Google Docs 文件。RcloneView 将远程设置、任务历史和日志集中在一处，帮助您快速缩小范围。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 不显示的文件夹

如果与您共享的文件没有出现在根目录列表中，该远程可能需要 `shared_with_me = true` 设置，它可以提供 Google Drive Shared with Me 视图。来自 Drive for desktop 的已备份计算机则是另一种情况：Google Drive Computers 远程需要将 `root_folder_id` 设置为该计算机的 ID。

在 Remote 选项卡中打开 Remote Manager，编辑该远程并检查这些值。然后按 F5 刷新 Explorer 面板。

<img src="/support/images/en/blog/new-remote.png" alt="在 RcloneView Remote Manager 中编辑 Google Drive 远程设置" class="img-large img-center" />

## 登录过期与授权失败

Google Drive 通过浏览器 OAuth 连接。如果所有请求都因授权错误而失败，请编辑该远程并重新登录，以获取新的令牌。对于之前正常工作的远程突然失败的情况，这是常见的解决办法。

关于配额和速率限制的提示，请参阅我们关于 Google Drive 速率限制和存储配额的专题指南。无论哪种情况，在同步向导的第 2 步中降低文件传输数量都是合理的第一步。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="RcloneView 的 Job History 中显示出错的 Google Drive 同步" class="img-large img-center" />

## 通过日志查看确切错误

打开 Job History，查看任务是立即失败还是中途失败。如需详细信息，请前往 Settings > Embedded Rclone，启用 rclone 日志，将级别设置为 DEBUG，然后点击 Restart Embedded Rclone。重现故障后阅读日志：其中会列出文件和错误。您也可以在内置的 Terminal 选项卡中运行 `rclone about "remote:"` 等命令来确认连接情况。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="修复设置后重新运行 Google Drive 任务" class="img-large img-center" />

## 处理 Google Docs 并验证结果

Google Docs、Sheets 和 Slides 不是普通文件，因此传输后看起来可能有所不同。如果想排除它们，同步向导第 3 步包含预定义的 Google Docs 过滤器。重新运行后，使用 Compare 检查两侧：仅左侧、仅右侧和不同的文件会显示仍需处理的内容。在可能删除文件的同步之前，请先运行 Dry Run。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="使用 Folder Compare 验证 Google Drive 同步" class="img-large img-center" />

## 开始使用

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 检查远程是否有 `shared_with_me` 或 `root_folder_id`，必要时重新授权。
3. 查看 Job History，并为出错的任务启用 DEBUG 日志。
4. 运行 Dry Run，重新运行任务，然后使用 Folder Compare 验证。

设置、日志和比较都集中在一个窗口中，失败的 Drive 任务就变成了一份简短的检查清单。

---

**相关指南：**

- [管理 Google Drive 存储 — 使用 RcloneView 同步和备份文件](https://rcloneview.com/support/blog/manage-google-drive-cloud-sync-backup-rcloneview)
- [使用 RcloneView 修复 Google Drive 403 速率限制错误](https://rcloneview.com/support/blog/fix-google-drive-403-rate-limit-errors-rcloneview)
- [使用 RcloneView 修复 Google Drive 存储配额已满问题](https://rcloneview.com/support/blog/fix-google-drive-storage-quota-exceeded-rcloneview)

<CloudSupportGrid />
