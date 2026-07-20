---
slug: dry-run-preview-cloud-sync-rcloneview
title: "试运行预览——在 RcloneView 中提交更改前测试云同步"
authors:
  - tayson
description: "使用 RcloneView 的试运行模式，在任何云同步执行之前预览将被复制或删除的文件——这是大型或敏感传输的必要安全检查。"
keywords:
  - dry run cloud sync
  - test sync before running
  - RcloneView dry run
  - preview cloud sync changes
  - simulate cloud backup
  - cloud sync safety check
  - rclone dry run GUI
  - avoid accidental file deletion
  - cloud sync simulation
  - verify sync before commit
tags:
  - RcloneView
  - feature
  - cloud-sync
  - tips
  - backup
  - guide
  - troubleshooting
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 试运行预览——在 RcloneView 中提交更改前测试云同步

> 在同步数万亿字节的数据或从目标位置删除文件之前，使用 RcloneView 的试运行模式预览每一项计划中的更改——无需移动任何一个文件。

云同步工作流程中最代价高昂的错误之一，就是事后才发现某个任务删除了重要文件、覆盖了较新的版本，或引入了成千上万本不该包含在内的文件。RcloneView 内置的试运行功能彻底消除了这种风险。通过在执行前模拟同步操作，你可以准确查看哪些文件将被复制、哪些文件将被删除，从而在任何实际传输开始之前，对任务配置充满信心。这在首次设置新任务，或调整现有任务的过滤规则之后，尤其有价值。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 试运行能展示什么

当你在 RcloneView 中执行试运行时，任务引擎会针对你配置的源和目标运行完整的同步逻辑，但不会执行任何实际的文件操作。结果是一份详细的预览，包含两个关键类别：**将从源复制到目标的文件**，以及**将从目标删除以匹配源的文件**。你可以滚动浏览完整的操作列表，在批准任何操作之前逐一核实。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Reviewing planned file operations in a dry run simulation in RcloneView" class="img-large img-center" />

这在单向同步任务中尤为重要，因为目标会被修改以完全镜像源。如果某个文件最近从源文件夹中被移除，但你仍需要目标位置上的这个文件，试运行会在删除发生之前将其揭示出来。例如，一家律师事务所将 50 万份案件文档备份到 Amazon S3，在每次计划任务执行前先验证一遍，就能极大受益，避免任何意外的数据丢失。

## 如何在 RcloneView 中运行试运行

在 RcloneView 中使用试运行非常简单。在**任务管理器**（Job Manager）中，创建或打开一个同步任务，配置好源、目标以及任何过滤选项，例如文件类型排除、最大文件大小或文件夹深度限制。准备就绪后，选择**试运行**（Dry Run）选项，而不是常规执行。RcloneView 会执行模拟，并在 Transferring 标签页中显示完整的计划操作列表——在你主动启动真正的运行之前，不会移动任何数据。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Starting a dry run simulation for a cloud sync job in RcloneView" class="img-large img-center" />

在查看试运行结果后，你可以调整过滤设置，并根据需要多次重复模拟。只有当计划操作列表完全符合你的预期时，才应触发真正的同步。当处理跨多个云存储提供商的大型目录结构中的复杂过滤规则时，这种反复迭代的方法尤其有用。

## 在任务历史中检查试运行结果

RcloneView 会在**任务历史**（Job History）视图中记录每一次试运行，并清楚地将其标记为模拟执行，与真实的任务运行并列显示。你可以查看模拟的文件数量、预计总大小、耗时，以及任何浮现出的警告或错误——在提交之前全面了解该任务的行为。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Dry run simulation recorded in RcloneView job history with status details" class="img-large img-center" />

对于运行定期计划备份的团队而言，每次配置更改后执行一次试运行是不可协商的安全步骤。它不会产生任何成本——不传输数据，不消耗存储空间——但它可以防止那些原本要等同步完成后才会显现出来、且难以逆转的错误。

## 快速上手

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 打开**主页标签 > 同步**（Home tab > Sync），配置一个包含源和目标的新同步任务。
3. 在任务管理器中选择**试运行**（Dry Run）模式，预览所有计划中的文件操作。
4. 查看复制和删除列表，如有需要调整过滤条件，然后放心地触发真正的同步。

试运行是最简单的习惯，它将谨慎、可逆的云操作与代价高昂的意外区分开来。

---

**相关指南：**

- [使用 RcloneView 的过滤规则与选择性同步](https://rcloneview.com/support/blog/filter-rules-selective-sync-rcloneview)
- [使用 RcloneView 进行校验和验证的云迁移](https://rcloneview.com/support/blog/checksum-verified-cloud-migrations-rcloneview)
- [使用 RcloneView 自动执行每日云备份](https://rcloneview.com/support/blog/automate-daily-cloud-backups-with-rcloneview)

<CloudSupportGrid />
