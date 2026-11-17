---
slug: fix-one-way-sync-deleted-destination-files-rcloneview
title: "修复单向同步删除目标文件的问题 — 用 RcloneView 保护备份"
authors:
  - casey
description: "单向同步后备份中的文件不见了?了解其原因,以及如何使用 RcloneView 的 Copy 作业、Dry Run 和 Folder Compare 防止意外删除。"
keywords:
  - 同步删除目标文件
  - 单向同步删除文件
  - rclone sync vs copy
  - 防止同步删除
  - 云备份文件消失
  - RcloneView dry run
  - 镜像同步删除文件
  - 同步后恢复文件
  - RcloneView 故障排除
tags:
  - RcloneView
  - troubleshooting
  - tips
  - cloud-sync
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 修复单向同步删除目标文件的问题 — 用 RcloneView 保护备份

> 如果同步后备份中的文件消失了,很可能作业只是严格执行了同步本来的设计行为。下面介绍如何选择正确的作业类型,并先预览变更。

一个常见的意外:你把笔记本电脑上的文件夹同步到 Backblaze B2,结果只存在于存储桶中的旧文件不见了。这并不是 bug。单向同步会让目标与源保持一致,其中包括删除源中不存在的文件。RcloneView 提供了相应工具,让你提前发现这种情况,并选择一种永远不会删除文件的作业类型。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 单向同步为什么会删除文件

在同步向导中,单向方向标记为 **"Modifying destination only"**。它不改动源,而是修改目标,直到目标成为源的镜像。目标中任何在源里没有对应项的内容都会被删除。

常见诱因:

- **选错源文件夹。** 选择了 `Projects/2026` 而不是 `Projects`,其他年份的文件夹在目标端都会被视为"多余"。
- **清理过的源。** 为了释放空间删除了本地的旧文件,却期望云端副本作为归档保留它们。
- **多个源,一个目标。** 两台机器同步到同一个文件夹时,会互相删除对方的文件。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring a one-way sync job in RcloneView" class="img-large img-center" />

## 目标是归档时使用 Copy

如果目标应当保留所有曾经发送过去的内容,请使用 **Copy** 作业而不是 Sync。Job Manager 提供 Sync、Copy、Move、Delete、Download 和 Upload 作业类型。Copy 会传输新增和已修改的文件,但不会从目标中删除任何内容,适合照片归档或长期项目备份。

Sync 只用于真正的镜像,例如希望在第二个云上原样复制的工作文件夹。

## 用 Dry Run 预览删除

在任何新建或修改过的同步作业真正运行之前,先执行一次 **Dry Run**。它会在不做任何更改的情况下,列出将被复制的文件和将被删除的文件。如果删除列表中有你想保留的文件,请停下来修正源路径,或改用 Copy。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a sync job after checking the Dry Run preview in RcloneView" class="img-large img-center" />

## 用 Folder Compare 检查差异

**Folder Compare** 会并排显示两个文件夹。筛选 right-only 文件,即可准确看到目标中存在而源中没有的文件,也就是同步将会删除的文件。如果其中有重要文件,请在同步前用 **Copy left** 把它们复制回源,或者同步到另一个文件夹以避开影响。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder Compare showing destination-only files in RcloneView" class="img-large img-center" />

与仅支持挂载的工具不同,RcloneView 还能同步和比较文件夹,并且在 FREE License 下即可使用。

## 开始使用

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 在 Job Manager 中打开现有作业,确认源路径和目标路径。
3. 将归档类作业从 Sync 改为 Copy,并对保留的每个同步作业运行 Dry Run。
4. 使用 Folder Compare 检查 right-only 文件,并在每次运行后查看 **Job History**。

如果文件已经丢失,请先检查服务提供商的回收站或版本历史,然后重新配置作业,避免再次发生。

---

**相关指南:**

- [Dry Run — 使用 RcloneView 在传输前预览同步](https://rcloneview.com/support/blog/dry-run-preview-sync-before-transfer-rcloneview)
- [使用 RcloneView 恢复误删的云文件](https://rcloneview.com/support/blog/recover-accidentally-deleted-cloud-files-rcloneview)
- [使用 RcloneView 修复云同步后丢失文件的问题](https://rcloneview.com/support/blog/fix-cloud-sync-missing-files-after-transfer-rcloneview)

<CloudSupportGrid />
