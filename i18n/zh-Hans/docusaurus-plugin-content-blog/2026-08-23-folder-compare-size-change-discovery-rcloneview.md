---
slug: folder-compare-size-change-discovery-rcloneview
title: "找出最大的变化 — RcloneView 中的 Folder Compare 大小变化发现功能"
authors:
  - steve
description: "使用 RcloneView 的 Folder Compare 大小变化发现工具,找出哪些云端文件夹变化最大、最快,或在同步前需要检查。"
keywords:
  - 文件夹比较大小变化发现
  - RcloneView 文件夹比较
  - 最大文件夹变化
  - 云存储审计
  - 比较云端文件夹
  - 检测云端文件变化
  - 云备份验证
  - 文件夹大小变化追踪
  - 云同步监控
  - 云存储变化检测
tags:
  - RcloneView
  - feature
  - compare
  - folder-comparison
  - performance
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 找出最大的变化 — RcloneView 中的 Folder Compare 大小变化发现功能

> 当云端目录树包含数千个子文件夹时,找出真正发生变化的文件夹才是难点所在 — RcloneView 的大小变化发现工具能替你找到它们。

任何管理大型多云存档的人都知道,真正的问题不在于运行比较,而在于阅读结果。拥有数千个子文件夹的文件夹树会生成一份长到无法手动浏览的比较报告。RcloneView 的 Folder Compare 界面内置了专门的大小变化发现控件,可以直接跳转到值得调查的文件夹,而不必强迫你滚动浏览一份未经区分的文件列表。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 大小变化发现到底做了什么

Folder Compare 让你可以并排直观地比较两个文件夹(本地或云端),并附带针对仅左侧文件、仅右侧文件、相同文件、不同文件和出错文件的过滤器。在此基础上,RcloneView 还添加了按文件数量变化或大小变化查找文件夹的导航快捷方式,并可直接跳转到变化最大、次大、最小或次小的文件夹。

正是这最后一组控件,让 RcloneView 区别于普通的差异对比视图。你不必逐个阅读每个子文件夹来弄清楚变化主要发生在哪里,而是直接让比较工具带你过去。这在变化本质上分布不均的远程连接上最为有用 —— 例如共享媒体库、工程代码仓库,或者 90% 的变动都发生在少数几个子目录中的客户文件夹结构。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Selecting comparison result filters in RcloneView Folder Compare" class="img-large img-center" />

## 一个实际场景

设想一家视频制作工作室,拥有一个横跨 Google Drive 和 Backblaze B2 备份存储桶、存放着数百个项目文件夹的共享云端存档。在忙碌的一周剪辑工作之后,他们需要在运行完整同步之前知道哪些项目文件夹真正发生了变化 —— 不是单纯相信上次自动任务已经处理了一切,而是要亲自验证。运行 Folder Compare 并直接跳转到"最大变化"会立即显示出三四个正在活跃的项目,而数十个未被触碰的存档文件夹则不会碍事。RcloneView 还能在一个窗口中跨 Windows、macOS 和 Linux 挂载并同步 90 多个提供商,因此无论对方是另一个云、NAS 还是本地磁盘,同样的工作流程都适用。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Comparing cloud-to-cloud folder contents in RcloneView" class="img-large img-center" />

## 将发现转化为行动

找到发生变化的文件夹后,同一个 Compare 界面可以让你直接对其采取行动:向右复制、向左复制,或删除选中的项目,无需离开比较视图。以这种方式复制的文件会自动标记为相同,因此重新运行比较时反映的是修正后的状态,而不是再次标记同一个文件夹。对于经常性的审计,将手动 Compare 检查与定时同步任务结合使用,可以让大小发现功能成为一种抽查手段,而不是唯一的防线。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Reviewing job history after a folder compare and sync in RcloneView" class="img-large img-center" />

## 快速开始

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 在 Home 标签页打开 Compare 界面,选择要比较的两个源文件夹。
3. 运行比较,然后使用最大/最小变化导航跳转到需要关注的文件夹。
4. 直接从结果视图中复制或删除,然后重新运行 Compare 以确认这些文件夹现在显示为相同。

对于管理着一棵大到无法用肉眼浏览的云端目录树的人来说,大小发现功能能把令人不知所措的比较结果,变成一份简短且有优先级的待检查文件夹清单。

---

**相关指南:**

- [文件夹比较指南 — 使用 RcloneView 检测差异](https://rcloneview.com/support/blog/folder-comparison-guide-detect-differences-rcloneview)
- [在 RcloneView 中使用过滤器进行文件夹比较](https://rcloneview.com/support/blog/folder-compare-with-filter-rcloneview)
- [Dry Run — 在云同步前进行预览](https://rcloneview.com/support/blog/dry-run-preview-cloud-sync-rcloneview)

<CloudSupportGrid />
