---
slug: filter-rules-selective-sync-rcloneview
title: "RcloneView 过滤规则：排除文件夹和文件类型，实现更快、更干净的同步"
authors:
  - tayson
description: "使用 RcloneView 过滤规则构建选择性同步工作流，跳过无关内容，减少云端流量，保持备份整洁。以 GUI 为核心，无需 CLI 参数。"
keywords:
  - rclone filter rules
  - rclone exclude
  - rclone include
  - rcloneview filters
  - selective sync
  - cloud sync optimization
  - reduce sync time
  - file sync filters
  - rcloneview workflow
  - cloud backup efficiency
tags:
  - RcloneView
  - cloud-storage
  - sync
  - file-management
  - backup
---

import RvCta from '@site/src/components/RvCta';

# RcloneView 过滤规则：排除文件夹和文件类型，实现更快、更干净的同步

> 最快的同步就是忽略噪音的同步。RcloneView 过滤规则可帮助你跳过缓存文件夹、临时文件和构建产物，让每一次传输都有明确目的。

选择性同步是搜索量最高的 rclone 主题之一，因为它能直接节省时间、带宽和云端成本。大多数指南只是罗列 CLI 参数便戛然而止。本文将展示如何在 RcloneView 中通过可视化界面构建**以过滤为先**的工作流，让结果始终可预测。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 为什么过滤规则比以往更重要

云同步的成本和延迟往往来自扫描和传输那些你根本不需要的文件：

- 缓存文件夹（`.cache`、`node_modules`、`.gradle`）
- 临时或预览文件（`*.tmp`、`*_preview.*`）
- 自动生成的构建产物
- 对未变更文件的重复元数据检查

过滤规则能剔除噪音，让每一个同步或复制任务都变得更小、更快、更安全。

## RcloneView 中过滤规则的作用

过滤规则定义了**在任何传输发生之前应包含和排除的内容**。在 RcloneView 中，你可以通过 Sync/Job 界面来应用这些规则,无需记忆 CLI 语法。

使用过滤规则可以：

- 排除整个文件夹
- 只包含特定的项目路径
- 跳过你从不想备份的文件类型
- 保护敏感或无关的数据

## 在 GUI 中配置过滤规则的位置

你可以在运行 Sync 或创建 Job 时添加过滤规则：

<img src="/support/images/en/howto/rcloneview-basic/sync-filtering-settings.png" alt="Sync filtering settings" class="img-large img-center" />

几秒钟内即可添加自定义规则：

<img src="/support/images/en/howto/rcloneview-basic/add-custom-filter-rule.png" alt="Add custom filter rule" class="img-large img-center" />

按需编辑和调整规则：

<img src="/support/images/en/howto/rcloneview-basic/addjust-custom-filter-rule.png" alt="Adjust custom filter rule" class="img-large img-center" />

## 实用过滤规则（可直接复制使用）

### 排除常见噪音

- `**/node_modules/**`
- `**/.cache/**`
- `**/*.tmp`
- `**/*.log`

### 只同步你的工作文件夹

- 包含：`**/Projects/**`
- 排除：`**/Downloads/**`

### 媒体项目规则

- 包含：`**/*.mp4`、`**/*.mov`、`**/*.wav`
- 排除：`**/*_proxy.*`、`**/*_preview.*`

### 设计/创意工作流

- 包含：`**/*.psd`、`**/*.ai`、`**/*.blend`
- 排除：`**/renders/**`、`**/cache/**`

## 先对比，再过滤，然后同步

在可视化验证过滤规则后再使用，是最安全的方式：

1. 运行 **Compare** 查看将要发生的变更。
2. 如果重要内容消失，调整过滤规则。
3. 放心地进行同步。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare results filters" class="img-large img-center" />

指南：[/support/howto/rcloneview-basic/compare-folder-contents](/howto/rcloneview-basic/compare-folder-contents)

## 以过滤为先的工作流（设计上更安全）

### 第一步：确认源和目标

在过滤前使用 Configure Storage 步骤验证路径。

<div class="img-grid-2">
<img src="/support/images/en/howto/rcloneview-basic/sync-configure-storage.png" alt="Sync configure storage" class="img-large img-center" />
<img src="/support/images/en/howto/rcloneview-basic/sync-advanced-settings.png" alt="Sync advanced settings" class="img-large img-center" />
</div>

### 第二步：应用过滤规则

根据你的工作流添加排除项和包含项。

<img src="/support/images/en/howto/rcloneview-basic/sync-filtering-settings.png" alt="Sync filtering settings" class="img-large img-center" />

### 第三步：试运行以进行验证

运行 Dry Run，以便在移动数据前确认过滤后的结果集。

<div class="img-grid-2">
<img src="/support/images/en/howto/rcloneview-basic/sync-dry-run.png" alt="Sync dry run" class="img-large img-center" />
<img src="/support/images/en/howto/rcloneview-basic/sync-dry-run-details.png" alt="Sync dry run details" class="img-large img-center" />
</div>

## 将过滤后的工作流保存为 Job

确认过滤规则无误后，将 Sync 保存为 Job：

- 每次运行保持一致的行为
- 减少人为错误
- 便于为自动化备份设置调度

<div class="img-grid-2">
<img src="/support/images/en/howto/rcloneview-basic/save-sync-to-jobs.png" alt="Save sync to Jobs" class="img-large img-center" />
<img src="/support/images/en/howto/rcloneview-basic/add-job-scheduling.png" alt="Add job scheduling" class="img-large img-center" />
</div>

指南：[/support/howto/rcloneview-basic/create-sync-jobs](/howto/rcloneview-basic/create-sync-jobs)

## 为过滤后的同步设置调度

使用 Job Scheduling 自动化选择性备份：

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Create job schedule" class="img-large img-center" />

指南：[/support/howto/rcloneview-advanced/job-scheduling-and-execution](/howto/rcloneview-advanced/job-scheduling-and-execution)

## 过滤规则带来的实际收益

- **更快的同步**：扫描和传输的文件更少
- **更低的成本**：更少的 API 流量和重复上传
- **更干净的备份**：只保留有意义的文件
- **更稳定的运行**：更小的任务日志，故障排查更容易

## 应避免的常见错误

- 过度过滤关键文件夹（应先用 Compare 测试）
- 混用包含/排除规则而没有明确的顺序
- 在大型迁移中跳过 Dry Run
- 假设过滤规则会追溯应用于旧数据

## 最佳实践总结

- 让过滤规则成为每个 Sync 或 Copy 任务的一部分。  
- 使用 Compare 验证过滤规则将移除的内容。  
- 在将过滤规则应用于完整数据集之前，先在小的测试文件夹中试验。  
- 保存过滤后的任务，以便重复使用和审计。  

## 结语

选择性同步是让云端操作更快、更省钱的最快方式。RcloneView 将复杂的 rclone 过滤规则转化为你能够理解、测试和自动化的可视化工作流。从排除一个杂乱的文件夹开始,你会发现下一次同步的时间立刻缩短。
