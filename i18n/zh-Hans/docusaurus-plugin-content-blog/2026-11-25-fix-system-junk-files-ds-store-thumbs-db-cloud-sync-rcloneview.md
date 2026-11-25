---
slug: fix-system-junk-files-ds-store-thumbs-db-cloud-sync-rcloneview
title: "解决云同步中的 .DS_Store 和 Thumbs.db 杂乱问题 — 用 RcloneView 排除系统文件"
authors:
  - morgan
description: "不再让 .DS_Store、Thumbs.db 和 desktop.ini 文件弄乱你的云备份。使用 RcloneView 过滤器将操作系统垃圾文件排除在同步任务之外。"
keywords:
  - ds_store 文件 云同步
  - thumbs.db 云存储
  - 同步排除系统文件
  - desktop.ini 云备份
  - rclone 排除 ds_store
  - RcloneView 自定义过滤器
  - 清理云同步垃圾文件
  - 跨平台云同步杂乱文件
  - rclone 过滤隐藏文件
tags:
  - RcloneView
  - troubleshooting
  - tips
  - filters
  - cleanup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 解决云同步中的 .DS_Store 和 Thumbs.db 杂乱问题 — 用 RcloneView 排除系统文件

> 把操作系统产生的垃圾文件挡在云文件夹之外，让每次同步只传输人们真正使用的文件。

打开一个由 Mac 和 Windows 混合团队同步的共享云文件夹，你通常会在几乎每个目录里看到同样的不速之客：macOS Finder 生成的 `.DS_Store`，以及 Windows 资源管理器生成的 `Thumbs.db` 和 `desktop.ini`。它们让文件列表变得杂乱、虚增文件数量，并且每当两台机器访问同一文件夹时都会显示为"不同"的文件。RcloneView 可以让你在同步任务中排除这些文件，并清理已经上传到云端的副本。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 为什么系统文件总是出现在云端

这些文件是元数据，而不是内容。Finder 写入 `.DS_Store` 来记住图标位置和视图设置；Windows 写入 `Thumbs.db` 来缓存缩略图，写入 `desktop.ini` 来保存文件夹自定义设置。同步工具会像对待其他文件一样对待它们，因此从 MacBook 进行单向同步时，会把 `.DS_Store` 上传到它访问过的每个文件夹。

规模越大，问题越严重。一家备份 40,000 个项目文件夹的设计公司，存储桶里可能会堆积数万个小型元数据文件。每一个都是需要列出和比较的独立对象，会拖慢后续的同步运行；而且每当同事在自己的机器上浏览该文件夹时，文件就会发生变化并再次被传输。

<img src="/support/images/en/blog/new-remote.png" alt="在配置同步排除规则之前，在 RcloneView 中添加云远程" class="img-large img-center" />

## 用自定义过滤器排除垃圾文件

解决办法从同步向导开始。在 **Step 3: Filtering Settings** 中，为 `.DS_Store`、`Thumbs.db` 和 `desktop.ini` 添加自定义排除规则。自定义过滤器支持文件类型、文件夹和路径规则，因此你还可以排除从 Mac 格式化的外置硬盘同步时偶尔出现的 `.Trashes` 或 `.Spotlight-V100` 文件夹。

在正式运行任务之前，点击 **Dry Run**。模拟会列出所有将被复制或删除的文件，让你确认元数据文件已经从传输列表中移除。如果它们仍然出现，请检查规则拼写——过滤规则默认区分大小写，因此 `Thumbs.db` 不会匹配 `thumbs.db`。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="在 RcloneView 中运行带过滤器的云同步任务" class="img-large img-center" />

## 清理已在云端的文件

过滤器能阻止新的杂乱文件，但不会删除已经存在的文件。在一个 Explorer 面板中打开云文件夹，在另一个面板中打开本地源，然后使用 **Compare**。本地已不存在的元数据文件会出现在 "Show right-only files" 中；两侧仍都存在的副本则显示为相同或不同的文件。无论哪种情况，你都可以在比较视图中直接选择并删除云端一侧的副本。

这里要注意单向同步。将源镜像到目标的同步会删除源中已不存在的目标文件，但被排除的文件会被完全跳过——因此在 Compare 中进行清理，仍是删除它们最清晰、最稳妥的方式。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="RcloneView 的 Folder Compare 显示云端残留的系统文件" class="img-large img-center" />

## 每次运行都保持干净

将带过滤器的同步保存为 Job Manager 中的任务，这样每次运行都会应用排除规则。RcloneView 在 Windows、macOS 和 Linux 上使用相同的过滤器运行这些任务，这在上传者使用不同操作系统时尤为重要。拥有 PLUS 许可证时，你可以为任务设置计划，Job History 会显示每次运行的文件数——添加过滤器后文件数突然下降，说明垃圾文件已经消失。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="RcloneView 的 Job History 显示排除系统文件后的文件数" class="img-large img-center" />

## 快速上手

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 创建或编辑同步任务，并在 Step 3 中将 `.DS_Store`、`Thumbs.db` 和 `desktop.ini` 添加为自定义排除过滤器。
3. 运行 Dry Run，确认元数据文件已不在传输列表中。
4. 使用 Compare 找到并删除已存储在云端的副本。

花几分钟设置过滤器，就能让云文件夹清晰易读，让同步运行专注于真正的工作。

---

**相关指南：**

- [修复同步过滤器无法排除文件的问题](https://rcloneview.com/support/blog/fix-sync-filters-not-excluding-files-rcloneview)
- [Rclone 过滤规则 — Include 与 Exclude 详解](https://rcloneview.com/support/blog/rclone-filter-rules-include-exclude-explained-rcloneview)
- [清理已满的云存储账户](https://rcloneview.com/support/blog/manage-cloud-storage-full-cleanup-rcloneview)

<CloudSupportGrid />
