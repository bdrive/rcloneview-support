---
slug: fix-cloud-sync-case-sensitivity-conflicts-rcloneview
title: "修复云同步大小写敏感冲突 — 使用 RcloneView 解决重复文件问题"
authors:
  - tayson
description: "使用 RcloneView 阻止云同步任务在 Windows 或 macOS 不区分大小写的文件系统与区分大小写的云存储之间产生重复文件。"
keywords:
  - cloud sync case sensitivity
  - duplicate files cloud sync
  - case sensitive filenames cloud storage
  - fix cloud sync duplicates
  - windows macos case insensitive sync
  - cloud storage filename conflicts
  - rcloneview sync errors
  - resolve cloud sync duplicate uploads
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

# 修复云同步大小写敏感冲突 — 使用 RcloneView 解决重复文件问题

> "Report.pdf" 和 "report.pdf" 在 Windows 和 macOS 看来是同一个文件，但对大多数云存储来说却是两个不同的文件——这种不匹配会在同步任务被设计出来捕获它之前，悄悄地在文件夹中堆积重复文件。

Windows 和 macOS 默认将本地磁盘格式化为不区分大小写，因此 `Invoice.pdf` 和 `invoice.pdf` 在磁盘上会被视为同一个文件。而 Google Drive、Dropbox、Amazon S3 以及大多数其他云端后端都是区分大小写的，这意味着它们会愉快地将两者存储为独立的对象。结果就是文件夹中会慢慢积累近乎重复的文件，同步任务看起来像是凭空"创建"了副本，或者出现覆盖循环——在一台设备上重命名的文件，永远无法与云端已有的版本完全匹配。RcloneView 不会改变底层文件系统的行为，但它能让你在这些冲突演变成一团糟之前，及时发现并加以控制。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 使用文件夹比较发现大小写冲突

要确认你遇到的是大小写敏感问题而不是真正的同步失败，最快的方法是在本地文件夹与云端目标之间运行文件夹比较（Folder Compare）。仅在大小写上有差异的文件，会在双方各自显示为独立条目，而不会被匹配为"相同"，这就是最明显的信号——真正的重复内容问题会显示不同的大小，而单纯的大小写不匹配通常会显示两个大小相同但名称不同的条目。比较视图中的"显示不同文件"和"仅显示左侧/仅显示右侧"过滤器，能让你轻松找出这些成对的文件，而不必手动翻遍整个文件夹树。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Using Folder Compare to identify case sensitivity duplicates between local and cloud storage" class="img-large img-center" />

## 使用单向同步和校验和防止覆盖循环

双向同步（测试版）是大小写冲突造成损害最大的场景，因为任何一方都可能把重命名的文件同时解读为新上传和过期删除。将受影响的任务切换为单向的"仅修改目标"同步，可以消除这种歧义——始终有一方是权威来源，因此源端仅涉及大小写的重命名只会更新目标端，而不会触发重复文件。在同步向导第 2 步中启用校验和比较选项也会有帮助，因为它是通过哈希值和文件大小来比较文件，而不仅仅依赖文件名匹配，这能在大小写差异与真正的内容更改混杂在一起时减少误判。RcloneView 可以在同一个窗口中挂载并同步 90 多个提供商，支持 Windows、macOS 和 Linux，这让你更容易分辨冲突究竟源自哪个设备的文件系统行为。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring a one-way sync job with checksum comparison to avoid case sensitivity duplicates" class="img-large img-center" />

## 安全清理现有的重复文件

一旦通过文件夹比较确定了大小写重复的文件对，删除前请务必先运行 Dry Run（预览运行）——它会准确列出哪些文件将被删除，而不会实际做出任何更改，这在两个"重复"文件自大小写不匹配首次出现以来内容可能已经发生分歧的情况下尤为重要。确认预览运行的输出结果无误后，可在比较视图中使用删除操作移除过期的副本，保留文件名正确、最新的版本。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a dry run before cleaning up case sensitivity duplicate files in RcloneView" class="img-large img-center" />

## 快速上手

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 在受影响的本地文件夹与其云端目标之间运行文件夹比较。
3. 筛选出显示为独立条目但大小相同的文件，以找出大小写冲突。
4. 将同步任务切换为单向并启用校验和比较，然后在清理重复文件前先运行 Dry Run。

一点点可见性，就能把一个看不见的文件系统怪癖，变成一个你真正能够解决的问题，而不再是一个悄无声息、不断重复制造文件的麻烦。

---

**相关指南：**

- [修复文件名特殊字符问题 — 使用 RcloneView 解决云同步问题](https://rcloneview.com/support/blog/fix-filename-special-characters-cloud-sync-rcloneview)
- [修复云同步重复文件 — 如何使用 RcloneView 解决](https://rcloneview.com/support/blog/fix-cloud-sync-duplicate-files-rcloneview)
- [Dry Run — 在 RcloneView 中预览云同步再传输](https://rcloneview.com/support/blog/dry-run-preview-cloud-sync-rcloneview)

<CloudSupportGrid />
