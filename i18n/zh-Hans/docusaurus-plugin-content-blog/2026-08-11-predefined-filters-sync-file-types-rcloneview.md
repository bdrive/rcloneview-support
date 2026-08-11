---
slug: predefined-filters-sync-file-types-rcloneview
title: "预定义筛选器 — 在 RcloneView 中只同步您需要的文件"
authors:
  - steve
description: "使用 RcloneView 的预定义筛选器,只同步图片、视频、音乐或文档,而不是传输整个文件夹。"
keywords:
  - RcloneView 筛选器
  - 预定义筛选器
  - 同步文件类型
  - 云同步筛选器
  - 选择性同步
  - 仅同步图片
  - 视频同步筛选器
  - 文档同步筛选器
  - Google Docs 筛选器
tags:
  - RcloneView
  - feature
  - filters
  - sync
  - cloud-sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 预定义筛选器 — 在 RcloneView 中只同步您需要的文件

> 无需手动编写排除规则,即可跳过不需要的文件类型,只同步您真正需要的内容。

并非每个同步任务都应该移动文件夹中的所有文件。一个正在备份共享磁盘的摄影工作室,里面塞满了 RAW 文件、PSD 文件和随手放在旁边的几张 PDF 发票,他们通常只关心图片,而不是那些发票。RcloneView 的筛选设置步骤为常见文件类别提供了一键式预定义筛选器,让您无需从零开始构建自定义规则集,就能将同步任务的范围精确限定在真正重要的内容上。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 预定义筛选器涵盖的内容

同步向导的第 3 步"筛选设置"为音乐、视频、图片、文档、Google Docs 和 Box Docs 提供一键式预定义筛选器。选择其中一项会将任务限制为匹配的文件类型 — 例如选择"图片",同步任务就会忽略源文件夹中的其他所有内容,无论它嵌套多深,也无论旁边还有什么。

这对于随着时间积累而变得杂乱的混合内容文件夹尤为重要:市场团队的共享磁盘里堆满了导出的视频、品牌文档和电子表格,并不需要将全部内容原样镜像到视频归档远程。一个预定义筛选器就能让目标文件夹保持整洁,而无需事后手动清理。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="在 RcloneView 同步向导中选择预定义文件类型筛选器" class="img-large img-center" />

Google Docs 和 Box Docs 选项专门针对在传输过程中不像普通文件那样表现的提供商原生文档格式 — 当您从 Google Drive 或 Box 同步、并希望将原生文档与上传的二进制文件区分开时,这非常有用。

## 结合预定义筛选器和自定义筛选器

预定义筛选器并不排斥自定义规则。例如,您可以在预定义的图片筛选器基础上叠加额外的自定义排除项 — 比如一条 `/thumbnails/*` 路径规则 — 以剔除会污染纯图片同步的生成缩略图文件。自定义筛选器还支持最大文件大小和最大文件年龄限制,因此拥有 2TB RAW 文件的摄影工作室可以将图片筛选器与文件年龄截止条件结合,只同步近期拍摄的内容,而不是整个历史存档。

与仅支持挂载的工具不同,RcloneView 在 FREE 许可下也提供同步和文件夹比较功能,因此无论您运行的是一次性传输还是保存的、可重复执行的任务,这种筛选方式都同样适用。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="在两个远程之间只传输图片文件的筛选同步任务" class="img-large img-center" />

## 使用试运行验证筛选结果

在对一个较大或不熟悉的文件夹执行筛选同步之前,先以试运行(Dry Run)模式运行一次。试运行会显示在当前筛选设置下将被复制和删除的确切文件列表,是确认预定义筛选器是否按预期工作、且没有悄悄排除您实际希望传输的文件的最快方法。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="在执行前使用试运行预览筛选同步任务" class="img-large img-center" />

## 快速开始

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 新建一个同步任务,并选择您的源远程和目标远程。
3. 在第 3 步"筛选设置"中,选择与您想要同步的内容类型匹配的预定义筛选器。
4. 运行试运行以确认结果,然后保存该任务,以便在后续同步中复用同一筛选器。

在同步层面进行筛选,而不是提前手动整理文件,可以让目标文件夹始终专注于您真正需要的内容。

---

**相关指南:**

- [试运行 — 在 RcloneView 中传输前预览云同步](https://rcloneview.com/support/blog/dry-run-preview-cloud-sync-rcloneview)
- [带筛选器的文件夹比较 — 在 RcloneView 中限制比较范围](https://rcloneview.com/support/blog/folder-compare-with-filter-rcloneview)
- [Bisync — 使用 RcloneView 进行双向云同步](https://rcloneview.com/support/blog/bisync-bidirectional-cloud-sync-rcloneview)

<CloudSupportGrid />
