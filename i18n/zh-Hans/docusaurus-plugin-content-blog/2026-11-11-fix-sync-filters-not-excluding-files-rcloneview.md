---
slug: fix-sync-filters-not-excluding-files-rcloneview
title: "修复同步过滤器无法排除文件的问题 — 用 RcloneView 编写正确的排除规则"
authors:
  - jay
description: "同步过滤器没有排除文件？了解 RcloneView 中排除规则漏掉文件夹的原因、如何编写正确的模式，以及如何用试运行（Dry Run）进行确认。"
keywords:
  - 同步过滤器不起作用
  - 从云同步中排除文件夹
  - rclone 过滤器无法排除文件
  - RcloneView 过滤规则
  - 同步时排除 .git 文件夹
  - 云同步排除规则
  - 最大文件大小过滤器
  - 试运行过滤器测试
  - 选择性云同步故障排除
tags:
  - RcloneView
  - troubleshooting
  - tips
  - filters
  - cloud-sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 修复同步过滤器无法排除文件的问题 — 用 RcloneView 编写正确的排除规则

> 如果本应排除的文件仍出现在目标位置，原因通常是模式的锚定方式，而不是过滤器坏了。

一位开发者将项目文件夹同步到 Backblaze B2，并添加了 `.git` 排除规则。第二天早上，存储桶里依然有成千上万个 Git 对象。过滤规则遵循 rclone 的匹配逻辑，因此少一个斜杠就会改变规则匹配的内容。RcloneView 将这些规则放在同步向导的 Step 3 中，并提供试运行（Dry Run），让你在任何文件移动之前进行测试。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 排除规则为何会漏掉文件

大多数过滤问题都源于锚定。以 `/` 开头的模式只从同步源的根目录开始匹配。不带 `/` 的模式可以在任意层级匹配。RcloneView 过滤设置中的示例展示了其中的区别：

- `.iso` 会排除目录树中任意位置具有该扩展名的文件。
- `/.git/*` 只排除源根目录下 `.git` 文件夹中直接包含的文件。
- `.git/` 会排除任意层级的所有 `.git` 文件夹，这正是大多数开发者想要的。

如果你只写了 `/.git/*`，像 `client-a/app/.git` 这样的嵌套仓库仍会被同步。由于 `*` 在文件夹边界处停止，它们的子文件夹也会被同步。改用不带锚定的文件夹规则后，嵌套仓库就会被排除。

<img src="/support/images/en/blog/new-remote.png" alt="在配置同步过滤器之前于 RcloneView 中添加远程" class="img-large img-center" />

第二个常见错误是选错了源文件夹。根锚定的模式是相对于 Step 1 中选择的文件夹而言的，因此把源向上移动一级就会改变它们匹配的内容。

## 检查其他过滤设置

向导中的过滤器不只有自定义规则。Step 3 还提供 **Max file size**（以 MB 为单位）、**Max file age**（使用 `y`、`d`、`h`、`m`、`s` 单位）、**Max folder depth**，以及针对 Music、Video、Image、Document、Google Docs 和 Box Docs 的预定义过滤器。这些设置会组合生效，因此一个早先复制的任务可能会出现意料之外的行为。

例如，测试时设置后被遗忘的文件夹深度限制，会让更深层的子文件夹被悄无声息地跳过。在重写自定义规则之前，请在 Job Manager 中打开任务，清除不需要的限制。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="RcloneView 中显示过滤后同步结果的云到云传输视图" class="img-large img-center" />

## 用试运行和比较验证修复

切勿在实际数据上测试过滤器的更改。先以试运行模式运行任务。它会列出将被复制的文件和将被删除的文件。如果被排除的路径仍出现在复制列表中，说明模式仍然有误。

请记住，被排除的文件在目标端同样不会被处理。如果不需要的文件已经进入存储桶，使用新过滤器执行单向同步也不会删除它们。使用 Folder Compare 找到这些文件，在目标端选中多余的 `.git` 文件夹并将其删除。在 PLUS 许可证下，Folder Compare with Filter 会将相同的规则应用于比较，使视图只显示任务实际管理的内容。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="RcloneView 中显示仅存在于一侧的文件的 Folder Compare" class="img-large img-center" />

试运行结果确认无误后，运行任务，并将 Job History 中的文件数量与试运行预览进行核对。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="RcloneView Job History 显示修复过滤器后传输的文件" class="img-large img-center" />

## 开始使用

同步任务、过滤器、试运行和 Folder Compare 均包含在 FREE 许可证中。

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 打开 Job Manager，编辑任务，检查 Step 1 的源文件夹和 Step 3 的过滤设置。
3. 当文件夹可能出现在任意层级时，将 `/.git/*` 这类根锚定模式替换为 `.git/`。
4. 运行试运行，确认被排除的路径已消失，然后用 Folder Compare 清理残留文件。

精确的过滤规则可以让备份保持精简，并避免构建产物和仓库数据计入你的云账单。

---

**相关指南：**

- [Rclone 过滤规则详解 — 包含与排除](https://rcloneview.com/support/blog/rclone-filter-rules-include-exclude-explained-rcloneview)
- [试运行 — 传输前预览同步](https://rcloneview.com/support/blog/dry-run-preview-sync-before-transfer-rcloneview)
- [带过滤器的 Folder Compare](https://rcloneview.com/support/blog/folder-compare-with-filter-rcloneview)

<CloudSupportGrid />
