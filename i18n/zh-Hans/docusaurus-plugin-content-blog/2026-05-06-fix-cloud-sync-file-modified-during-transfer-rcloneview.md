---
slug: fix-cloud-sync-file-modified-during-transfer-rcloneview
title: "修复传输过程中文件被修改的问题——使用 RcloneView 解决云同步冲突"
authors:
  - tayson
description: "解决因文件在 RcloneView 传输过程中被修改而导致的云同步错误。学习如何处理文件占用冲突、部分上传和同步不一致问题。"
keywords:
  - fix files modified during cloud transfer
  - cloud sync conflict resolution RcloneView
  - file modified during upload error
  - rclone file in use error
  - cloud sync incomplete transfer fix
  - RcloneView sync conflict
  - file locked during sync troubleshooting
  - partial upload cloud sync fix
  - rclone modified during transfer
  - cloud backup file conflict resolution
tags:
  - RcloneView
  - troubleshooting
  - tips
  - cloud-sync
  - data-recovery
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 修复传输过程中文件被修改的问题——使用 RcloneView 解决云同步冲突

> 当文件在 RcloneView 同步过程中发生变化时，传输可能会失败、产生部分上传，或生成不一致的云端副本——本文介绍如何检测并解决每种情况。

云同步错误的一个常见原因是文件在同步任务进行期间被修改、锁定或写入。应用程序正在写入的数据库文件、在 Office 中打开的文档，或正在被运行中的服务持续追加写入的日志文件，都可能导致部分上传或传输失败。RcloneView 会在日志中清晰地显示这些错误，而 rclone 提供了多个标志来妥善处理这些情况。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 在 RcloneView 日志中识别文件占用错误

当文件在同步过程中被锁定或修改时，rclone 通常会报告如下错误：
- `Failed to copy: file changed under us - trying again`
- `source file is being written to`
- `partial read detected`

在 RcloneView 中，这些错误会显示在界面底部的**日志（Log）标签页**中。同步任务完成后，请检查日志中是否存在表示文件修改冲突的 `ERROR` 条目。**任务历史（Job History）**视图也会为存在传输失败文件的任务显示 `Errored` 状态。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history showing file transfer errors in RcloneView" class="img-large img-center" />

## 使用 --ignore-errors 和重试逻辑

默认情况下，RcloneView 的同步任务会配置重试次数（默认：3 次），自动重新尝试失败的传输。对于短暂被锁定的文件（例如，被应用程序短暂打开后又关闭的文件），重试通常能在后续尝试中成功。

对于某些文件持续被锁定的同步任务（例如，处于活动状态的数据库文件），请在同步任务配置的自定义 rclone 标志中添加 `--ignore-errors`。这会告知 rclone 即使部分文件失败，也继续同步其他文件，尽可能完成同步，并记录失败情况以供查阅。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Configuring sync job settings to handle file-in-use errors in RcloneView" class="img-large img-center" />

## 将活动应用程序文件排除在同步范围之外

解决文件占用冲突的最佳长期方案，是将那些始终处于使用状态的文件从同步任务范围中排除。RcloneView 的过滤设置（同步向导中的第 3 步）支持自定义排除规则：

- 排除 SQLite 数据库：添加 `*.db-journal` 和 `*.db-wal`，以排除正在写入的预写日志（write-ahead log）
- 排除 Office 临时文件：添加 `~$*`，以排除 Word/Excel 锁定文件
- 排除正在写入的日志文件：添加 `*.log` 或特定模式

这些过滤规则可以防止 RcloneView 尝试同步在任务期间必然处于使用状态的文件，从而彻底消除这一类错误。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Setting up file exclusion filters to avoid sync conflicts in RcloneView" class="img-large img-center" />

## 运行模拟运行以验证过滤规则的有效性

添加排除过滤规则后，请对同步任务运行一次**模拟运行（dry run）**，以确认被过滤的文件不再出现在传输列表中。模拟运行的输出会显示所有将被复制的文件——请在正式运行同步之前，验证你的活动数据库文件、锁定文件和已打开的文档均未出现在列表中。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Using dry run to verify filtered file list before syncing in RcloneView" class="img-large img-center" />

## 快速上手

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 在同步失败后，检查日志标签页和任务历史中的文件修改错误。
3. 在同步向导中为始终处于使用状态的文件添加自定义排除过滤规则。
4. 运行模拟运行以确认过滤规则生效，然后重新执行同步任务。

在 RcloneView 中处理文件占用冲突，关键在于了解应排除哪些文件以及如何配置重试——一旦配置正确，你的同步任务就能每次都顺畅运行。

---

**相关指南：**

- [修复云同步传输后文件丢失的问题——使用 RcloneView 解决](https://rcloneview.com/support/blog/fix-cloud-sync-missing-files-after-transfer-rcloneview)
- [RcloneView 中的过滤规则与选择性同步](https://rcloneview.com/support/blog/filter-rules-selective-sync-rcloneview)
- [使用 RcloneView 恢复中断或失败的传输](https://rcloneview.com/support/blog/recover-interrupted-failed-transfers-rcloneview)

<CloudSupportGrid />
