---
slug: fix-empty-folders-not-syncing-rcloneview
title: "修复空文件夹不同步的问题 — 使用 RcloneView 解决"
authors:
  - morgan
description: "同步后空文件夹不见了？了解 rclone 为何默认跳过空文件夹，以及如何通过 RcloneView 的创建空目录选项来解决此问题。"
keywords:
  - 空文件夹不同步
  - rclone 空目录丢失
  - 修复云同步空文件夹
  - RcloneView 创建空目录
  - 同步文件夹结构丢失
  - 云备份空文件夹
  - rclone 同步文件夹结构
  - RcloneView 同步故障排除
tags:
  - RcloneView
  - troubleshooting
  - tips
  - cloud-sync
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 修复空文件夹不同步的问题 — 使用 RcloneView 解决

> 如果同步任务悄悄地从目标位置丢弃了空文件夹，修复方法就是大多数用户在设置时从未注意到的一个复选框。

在云之间迁移项目归档的团队通常希望目标位置能精确镜像源文件夹结构 —— 包括那些尚未包含文件的占位文件夹。默认情况下，rclone(以及由此延伸的 RcloneView)不会在目标位置创建空目录，因为大多数对象存储后端并没有真正意义上的文件夹概念，它们只跟踪文件键。如果你的同步任务成功完成，但目标位置却缺少了一批空的子文件夹，这是预期行为，而不是缺陷 —— RcloneView 有一个内置设置可以改变这一点。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 为什么空文件夹会丢失

本地文件系统和一些提供商将文件夹存储为真实对象，但许多云后端 —— 包括 S3 兼容存储 —— 仅将"文件夹"表示为文件键共享的公共前缀。当一个目录中没有任何文件时，就没有需要创建的键，因此对方看不到任何内容。rclone 的默认同步行为反映了这一点：它复制文件，让文件夹结构从文件路径中隐式产生，这样可以保持传输速度，但会遗留下真正为空的文件夹。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job History showing a completed sync with no errors despite missing empty folders" class="img-large img-center" />

这就是为什么一个同步任务可以报告"已完成"且零错误，而目标文件夹树却比源文件夹树"更薄"。这不是传输失败 —— 而是工具完全按照指示执行，只是缺少了大多数用户以为会自动处理的一个细节。

## 启用创建空目录

RcloneView 直接在同步向导中公开了这一行为。在第 1 步(配置存储)中，除了源和目标选择以及同步方向切换之外，还有一个**创建空目录(Create empty directories)**选项。在运行任务之前启用它，会告诉 rclone 在目标位置显式创建空文件夹的占位条目，使复制的结构与源文件夹逐一对应。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Enabling create empty directories in the RcloneView sync configuration wizard" class="img-large img-center" />

如果你已经在未勾选此选项的情况下运行过同步，只需编辑现有任务、启用该设置，然后再次运行即可 —— RcloneView 可在一个窗口中挂载并同步 90 多个提供商，因此针对相同的源和目标重新运行只是一个快速修复，而非完整的重新配置。

## 修复后验证文件夹结构

在将大型迁移交给单次运行之前，使用 Dry Run 预览修正后的任务实际会执行的操作 —— 它会列出所有计划创建的文件和文件夹，而不会触及目标位置，这样你就可以在提交之前确认空文件夹问题已经解决。对于持续进行的项目，之后使用 Folder Compare 也很有用：指向两侧，并按"仅左侧"或"仅右侧"筛选，以发现任何仍然存在的结构性不匹配。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Using Folder Compare to verify folder structure matches after enabling empty directory creation" class="img-large img-center" />

## 开始使用

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 打开缺少空文件夹的同步任务，点击 Edit。
3. 在第 1 步中启用**创建空目录(Create empty directories)**复选框。
4. 运行 Dry Run 确认文件夹将被创建，然后执行同步。

启用该设置后，该任务此后每次运行都会保留完整的文件夹树 —— 再也不用在迁移后到处寻找丢失的占位目录了。

---

**相关指南:**

- [Dry Run — 使用 RcloneView 在传输前预览云同步](https://rcloneview.com/support/blog/dry-run-preview-sync-before-transfer-rcloneview)
- [筛选规则 — 使用 RcloneView 进行选择性同步](https://rcloneview.com/support/blog/filter-rules-selective-sync-rcloneview)
- [使用 RcloneView 避免因同步方向错误导致的数据丢失](https://rcloneview.com/support/blog/avoid-data-loss-wrong-sync-direction-rcloneview)

<CloudSupportGrid />
