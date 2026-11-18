---
slug: create-empty-directories-sync-option-rcloneview
title: "创建空目录 — 在 RcloneView 中同步时保留完整文件夹结构"
authors:
  - alex
description: "使用 RcloneView 的“Create empty directories”同步选项，在云存储与本地驱动器之间复制完整的文件夹树，包括空的项目文件夹。"
keywords:
  - 创建空目录 同步
  - rclone create empty src dirs
  - 云同步 保留文件夹结构
  - 复制空文件夹到云端
  - 同步 Google Drive 空文件夹
  - 文件夹模板备份
  - RcloneView 同步选项
  - rclone 空文件夹未复制
  - 云端目录树镜像
tags:
  - RcloneView
  - feature
  - cloud-sync
  - file-management
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 创建空目录 — 在 RcloneView 中同步时保留完整文件夹结构

> 如果文件夹布局和文件本身一样重要，只需勾选一个复选框，空文件夹也会到达目标位置。

默认情况下，rclone 复制的是文件而不是文件夹，因此源端的空目录永远不会出现在目标端。这通常没什么问题，直到你恢复备份时发现团队依赖的 `/Invoices/2027`、`/Raw` 和 `/Exports` 文件夹都不见了。RcloneView 在同步向导中把这一行为作为一个选项提供，你无需输入 rclone 参数即可保留整个目录树。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 空文件夹为何会消失

rclone 移动的是对象。同步任务会遍历源端、找到文件，并在目标端重建每个文件的路径。不包含文件的文件夹没有任何可传输的内容，因此任务会跳过它。许多云服务，尤其是 S3 风格的对象存储，根本不会把文件夹作为单独的对象存储。在那里，“文件夹”只是文件名中的共同前缀。

这会让依赖文件夹模板的人措手不及。视频制作公司可能会用 `01_Footage`、`02_Audio`、`03_Graphics` 和 `04_Deliverables` 这样的骨架开始每个项目。会计师事务所可能在文档到来之前就按客户、按年份建好文件夹。如果这些空骨架没有同步，目标端的协作者看到的就是不完整的布局。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Syncing a project folder tree between two cloud remotes in RcloneView" class="img-large img-center" />

## 启用 Create empty directories

该选项位于同步向导的 **Step 1: Configure Storage** 中，与源、目标和同步方向设置放在一起。选择源和目标后，勾选 **Create empty directories**。任务运行时，RcloneView 会让 rclone 在目标端重建源端的空文件夹，这相当于 rclone `--create-empty-src-dirs` 参数的 GUI 版本。

由于该设置随任务一起保存，因此无论你是在 Job Manager 中手动启动任务，还是由 PLUS 计划触发，每次运行都会生效。它也适用于 1:N 同步，因此相同的文件夹骨架会到达你添加的每个目标。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a saved sync job with empty directory creation enabled in RcloneView" class="img-large img-center" />

## 与过滤器和 Dry Run 结合使用

创建空文件夹可与 Step 3 中的过滤器一起使用。如果你排除了 `.git/`，或用 **Max folder depth** 限制任务范围，则只会创建通过这些规则的文件夹。在写入任何内容之前，先运行 **Dry Run** 预览操作。这对单向同步尤为重要，因为它还会删除源端已不存在的目标项目。

在 Amazon S3、Wasabi 或 Backblaze B2 等基于存储桶的存储上，请保持合理预期。这些后端没有真正的目录，因此空文件夹可能无法像在 Google Drive、OneDrive、Dropbox、SFTP 或本地磁盘上那样保留下来。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder Compare showing left-only folders after a sync in RcloneView" class="img-large img-center" />

任务完成后，在相同的两个位置打开 **Folder Compare**，并排检查结果。同步和 Folder Compare 均可在 FREE 许可证下使用。

## 开始使用

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 在 Home 选项卡中打开 **Sync**，选择源文件夹和目标文件夹。
3. 在 Step 1 中勾选 **Create empty directories**，然后在 Step 3 中设置所需的过滤器。
4. 运行 Dry Run，然后保存任务并在 Job Manager 中运行。

保留空文件夹后，恢复或迁移得到的就是团队原先设置的布局。

---

**相关指南：**

- [Max Folder Depth 和 Max File Size 过滤器](https://rcloneview.com/support/blog/max-folder-depth-file-size-filters-rcloneview)
- [Dry Run — 传输前预览云同步](https://rcloneview.com/support/blog/dry-run-preview-cloud-sync-rcloneview)
- [修复同步过滤器未排除文件的问题](https://rcloneview.com/support/blog/fix-sync-filters-not-excluding-files-rcloneview)

<CloudSupportGrid />
