---
slug: fix-google-docs-sheets-sync-errors-rcloneview
title: "解决 Google 文档和表格同步问题 — 用 RcloneView 处理原生文件"
authors:
  - casey
description: "Google 文档、表格和幻灯片反复被重新复制，或总显示为不同？了解原生文件为何表现不同，以及如何在 RcloneView 同步任务中处理它们。"
keywords:
  - google 文档 同步错误
  - google 表格 备份问题
  - google drive 原生文件 同步
  - google docs export rclone
  - google docs 过滤器 rcloneview
  - google drive 备份 docx xlsx
  - rclone drive 导出格式
  - rcloneview 修复 google drive 同步
  - google workspace 文件备份
tags:
  - RcloneView
  - troubleshooting
  - tips
  - google-drive
  - filters
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 解决 Google 文档和表格同步问题 — 用 RcloneView 处理原生文件

> Google 文档、表格和幻灯片并不是普通文件，忽略这一差异的备份任务会不断给你带来意外。

你把 Google Drive 备份到 NAS 或另一个云，任务顺利完成 — 但文档和表格变成了 Word 和 Excel 文件，Folder Compare 每次都把它们标记为不同，或者下次运行时它们又出现在复制列表中。这些都不代表传输出了问题。RcloneView 通过 rclone 运行这些任务，了解 rclone 如何处理 Google 原生文档，就能选择你真正需要的行为。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 原生 Google 文件为何表现不同

Google 文档只存在于 Google 的编辑器中，背后没有存储的二进制文件。当 rclone 从 Google Drive 将其复制到非 Google 目标时，会将文档导出为可下载的格式 — 默认是 `.docx`、`.xlsx`、`.pptx` 等 Office 格式。

这种转换有副作用。Drive 不会报告原生文档的固定大小，因此基于大小的比较无法将其与导出的副本对应起来。Drive 也不为它们存储 MD5 哈希，因此在同步任务中启用校验和也无法验证它们。结果就是一组每次检查都显示"不同"的文件。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder Compare showing Google Docs flagged as different files" class="img-large img-center" />

## 选项 1：从文件备份中排除原生文档

如果你的团队只需要备份上传的文件 — PDF、图片、视频 — 最干净的做法是将原生文档排除在外。在同步向导的 Step 3 中，启用预定义的 **Google Docs** 过滤器。这样任务会专注于常规文件，不再重复列出无法比较的文档。

在首次正式运行前搭配 **Dry Run** 使用。预览会准确列出将要复制的文件，你可以确认文档和表格已不在队列中。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a Google Drive sync job with the Google Docs filter applied" class="img-large img-center" />

## 选项 2：有意保留导出副本

有时导出副本本身就是目的 — 例如会计事务所可能希望将每份电子表格以 `.xlsx` 格式归档到 NAS，无需 Google 账户即可打开。这种情况下，请在任务中保留原生文件，并将转换后的副本视为归档。

你可以通过 rclone 参数更改导出格式。在 Settings 中，**Global Rclone Flags** 字段可接受 `--drive-export-formats` 等额外参数（例如用于只读归档的 `pdf`）。由于该参数会作用于所有涉及 Google Drive 的任务，请先在小文件夹上用 Dry Run 测试。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Configuring a recurring Google Drive export job in RcloneView" class="img-large img-center" />

## 在 Job History 中检查结果

每次运行后，打开 Job History 查看状态、文件数和总大小。如果各次运行之间的数量出现意外波动，请重新检查 Step 3 中的过滤规则。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Reviewing Google Drive job results in Job History" class="img-large img-center" />

## 开始使用

与仅支持挂载的工具不同，RcloneView 在 FREE 许可证下也能同步和比较文件夹。

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 通过 OAuth 浏览器登录连接 Google Drive。
3. 决定是用 Google Docs 过滤器排除原生文档，还是将其导出为 Office 文件。
4. 用 Dry Run 预览任务，运行后在 Job History 中确认结果。

有意识地处理原生文件后，你的 Google Drive 备份就不会再产生误报。

---

**相关指南：**

- [解决 Google Drive 同步错误 — 用 RcloneView 解决文件夹缺失、任务失败和列表为空的问题](https://rcloneview.com/support/blog/fix-google-drive-sync-errors-rcloneview)
- [RcloneView 过滤规则：排除文件夹和文件类型，实现更快、更整洁的同步](https://rcloneview.com/support/blog/filter-rules-selective-sync-rcloneview)
- [Dry Run 预览 — 在 RcloneView 中提交更改前测试云同步](https://rcloneview.com/support/blog/dry-run-preview-cloud-sync-rcloneview)

<CloudSupportGrid />
