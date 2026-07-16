---
slug: virtual-remotes-combine-union-alias-rcloneview
title: "RcloneView 虚拟远程：使用 Combine、Union 和 Alias 打造统一的多云工作区"
authors:
  - tayson
description: "使用 RcloneView 虚拟远程在不复制数据的情况下统一多云文件夹。了解何时应选择 Alias、Combine 或 Union，以及如何构建更简洁的工作流。"
keywords:
  - virtual remote
  - combine remote
  - union remote
  - alias remote
  - multi cloud viewer
  - rcloneview virtual remote
  - cloud workspace
  - multi cloud management
  - rcloneview workflow
  - cloud file organization
tags:
  - file-management
  - sync
  - multi-cloud
---

import RvCta from '@site/src/components/RvCta';

# RcloneView 虚拟远程：使用 Combine、Union 和 Alias 打造统一的多云工作区

> 多云蔓延会让文件夹变得难以查找。RcloneView 中的虚拟远程可以让你在不移动或复制任何文件的情况下统一视图。

虚拟远程是整理多云工作流最快捷的方式之一。你无需在多个标签页之间切换或重新配置任务，只需创建一个指向现有远程和文件夹的虚拟视图即可。你的原始数据仍保留在原处，但你的工作区将变得更易于浏览和自动化。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 为什么虚拟远程很重要

- 无需每次运行任务或比较文件夹时都在深层路径中翻找。
- 在不复制数据的情况下，将多个云呈现为一个工作区。
- 在 Explorer、Compare、Sync 和 Jobs 中保持一致的组织结构。

## 什么是 RcloneView 中的虚拟远程？

虚拟远程建立在现有远程和文件夹之上。它们本身不存储数据，而是指向你已有的位置，并将其呈现为一个全新、更整洁的视图。

通过 **New Remote → Virtual** 创建：

- **Alias**：指向深层文件夹的快捷方式。
- **Combine**：将多个文件夹并排列出的单一视图。
- **Union**：将多个文件夹融合在一起的单一合并视图。

<img src="/support/images/en/blog/new-remote.png" alt="New Remote screen" class="img-large img-center" />

## Alias 远程：即时访问深层文件夹

**最适合**：每天都要打开的跳转文件夹。

Alias 就是一个书签。它可以立即打开特定文件夹，非常适合用于重复性任务或团队共享路径。

示例：将一个共享团队文件夹（如 `Drive:Team/Projects/Client-A`）加为书签，并以 `Alias_ClientA` 的形式打开。

<img src="/support/images/en/howto/remote-storage-connection-settings/alias/new-remote-add-alias.png" alt="Add alias remote" class="img-large img-center" />
<img src="/support/images/en/howto/remote-storage-connection-settings/alias/virtual-alias-file-browser.png" alt="Alias remote file browser" class="img-large img-center" />

指南：[/support/howto/remote-storage-connection-settings/alias-remote](/howto/remote-storage-connection-settings/alias-remote)

## Combine 远程：一个视图，多个文件夹

**最适合**：仪表盘和项目合集。

Combine 会在单个远程内将多个文件夹并排展示。每个文件夹都保留其原有结构，但你可以在同一个地方浏览它们。

示例：创建一个名为 `Marketing_Assets` 的 Combine 远程，其中包含：

- `Drive:Marketing`
- `Dropbox:Assets`

<img src="/support/images/en/howto/remote-storage-connection-settings/combine/new-remote-add-combine.png" alt="Add combine remote" class="img-large img-center" />
<img src="/support/images/en/howto/remote-storage-connection-settings/combine/combine-check-folder-1.png" alt="Combine view example" class="img-large img-center" />

指南：[/support/howto/remote-storage-connection-settings/combine-remote](/howto/remote-storage-connection-settings/combine-remote)

## Union 远程：跨云的一个合并文件夹

**最适合**：汇集归档或多来源数据摄取。

Union 会将多个文件夹合并为一个融合视图。当你希望所有内容看起来像一个单一文件夹，即使文件实际分布在不同的云中时，这是理想的选择。

示例：将两个远程中每月的原始素材合并为一个 `Raw_Footage` 视图。

<img src="/support/images/en/howto/remote-storage-connection-settings/union/new-remote-add-union.png" alt="Add union remote" class="img-large img-center" />
<img src="/support/images/en/howto/remote-storage-connection-settings/union/union-check-folder-1.png" alt="Union view example" class="img-large img-center" />

指南：[/support/howto/remote-storage-connection-settings/union-remote](/howto/remote-storage-connection-settings/union-remote)

## 快速决策指南：Alias vs Combine vs Union

| 需求 | 选择 | 原因 |
| --- | --- | --- |
| 快速跳转到深层文件夹 | **Alias** | 指向特定路径的单一快捷方式 |
| 并排查看多个文件夹 | **Combine** | 保留各文件夹独立的结构 |
| 将多个文件夹当作一个来处理 | **Union** | 用于汇集数据的合并视图 |

## 虚拟远程的实用工作流

- **同步前先比较**：在 Combine 或 Union 视图上运行 Compare，先查看差异。
  指南：[/support/howto/rcloneview-basic/compare-folder-contents](/howto/rcloneview-basic/compare-folder-contents)
- **跨多个来源同步**：将 Union 远程同步到备份目标，以镜像一个融合归档。
  指南：[/support/howto/rcloneview-basic/synchronize-remote-storages](/howto/rcloneview-basic/synchronize-remote-storages)
- **一次保存任务**：使用 Job Manager 安排虚拟远程的 Sync 任务，让其自动持续运行。
  指南：[/support/howto/rcloneview-basic/create-sync-jobs](/howto/rcloneview-basic/create-sync-jobs)
- **可选挂载**：挂载虚拟远程，将其作为本地驱动器浏览。
  指南：[/support/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive](/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive)

<div class="img-grid-2">
<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare results filters" class="img-large img-center" />
<img src="/support/images/en/howto/rcloneview-basic/add-job-scheduling.png" alt="Add job scheduling" class="img-large img-center" />
</div>
<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="Mount from Remote Explorer" class="img-large img-center" />

## 最佳实践与命名规范

- 使用清晰的前缀：`Alias_ProjectX`、`Combine_Marketing`、`Union_Archive`。
- 在任务名称或 Job Manager 描述中保留来源说明。
- 避免在同一个 Union 中混合无关的文件夹，以减少混淆。
- 需要清晰度时使用 Combine，需要简洁性时使用 Union。

## 结语

虚拟远程可以减少多云工作流中的摩擦。Alias、Combine 和 Union 能让你在不复制数据的情况下打造一个整洁的工作区，从而帮助团队加快速度并保持结构完整。今天就试试其中一种，看看你的日常导航能变得多轻松。

