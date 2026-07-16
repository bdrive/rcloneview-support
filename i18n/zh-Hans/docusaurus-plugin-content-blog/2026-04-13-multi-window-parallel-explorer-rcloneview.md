---
slug: multi-window-parallel-explorer-rcloneview
title: "多窗口支持 — 在 RcloneView 中并排管理多个云存储"
authors:
  - tayson
description: "使用 RcloneView 的多窗口功能，为不同的云存储任务打开独立窗口。在多个独立窗口中并行管理 Google Drive、S3 和 OneDrive。"
keywords:
  - RcloneView multi-window
  - multiple windows cloud storage
  - parallel cloud management
  - RcloneView PLUS feature
  - cloud storage multi-window
  - side by side cloud management
  - RcloneView independent windows
  - cloud file manager multiple windows
  - RcloneView productivity
  - multi-window cloud sync
tags:
  - RcloneView
  - feature
  - cloud-storage
  - productivity
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 多窗口支持 — 在 RcloneView 中并排管理多个云存储

> RcloneView 的多窗口功能（PLUS 许可证）可以打开独立的应用程序窗口，让您可以同时管理不同的云存储任务，而无需切换上下文。

RcloneView 的资源管理器面板已经支持在单个窗口中显示 1 到 4 个面板——便于并排浏览和拖放传输。但对于涉及多个不同任务的复杂工作流——例如在一个视图中监控正在进行的迁移，同时在另一个视图中浏览不同的云存储，或者在设置新的同步任务的同时运行文件夹比较——多窗口功能可以打开完全独立的 RcloneView 窗口，各窗口互不干扰地运行。此功能需要 PLUS 许可证。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 多窗口的工作原理

通过多窗口打开的每个新窗口都是一个完全独立的 RcloneView 实例，拥有自己的资源管理器面板、传输选项卡和状态。一个窗口中的更改不会影响其他窗口。窗口之间通过 RcloneView 的内部 IPC 机制进行通信，但它们的文件浏览状态和活动操作是相互隔离的。

要打开新窗口，请点击主页选项卡中的 **新建窗口** 按钮。新窗口会以与主窗口相同的默认状态打开——然后您可以将其导航到不同的远程，或独立启动不同的任务。窗口的位置和大小会在会话之间自动保存，因此下次打开 RcloneView 时，您的多窗口布局会被保留。

<img src="/support/images/en/blog/new-remote.png" alt="Opening a new independent window in RcloneView" class="img-large img-center" />

## 实用的多窗口工作流

**跨云提供商的并行浏览：** 打开窗口 1 浏览您的 Amazon S3 存储桶，同时窗口 2 显示您的 Google Drive。在窗口之间拖动文件即可触发跨提供商复制，或者在迁移过程中同时监控两个提供商的内容。

**任务监控与文件浏览并行：** 让窗口 1 保持显示传输选项卡以查看活动任务进度，同时窗口 2 让您浏览不同的云存储或设置下一个任务——无需切换选项卡或中断您的监控视图。

**在专用窗口中进行文件夹比较：** 在窗口 1 中运行大型文件夹比较操作（对于较大的云文件夹可能需要一些时间），同时继续在窗口 2 中处理文件。比较操作独立运行，不会阻塞您的其他活动。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Running folder comparison in one window while browsing another in RcloneView" class="img-large img-center" />

**多用户或多项目工作流：** 为多个客户或项目管理云存储的专业人员，可以为每个项目分配一个窗口，同时保持特定上下文的视图打开，而无需在远程之间反复来回切换。

## 将多窗口与面板布局相结合

在每个窗口内，面板布局（1 到 4 个面板，水平或垂直拆分）可以通过设置选项卡 > 布局/视图数量 独立配置。一个由 2 个窗口、每个窗口 2 个面板组成的多窗口设置，可以在两个有条理的工作区中为您提供四个并发的资源管理器面板。

这种组合对于同步工作流特别有用：窗口 1 显示正在进行同步任务的源和目标面板；窗口 2 显示用于另一个同步任务的第二组源-目标对。两个任务并行运行，互不共享显示状态。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Multiple parallel sync operations in RcloneView multi-window mode" class="img-large img-center" />

## 快速上手

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView** 并激活 PLUS 许可证。
2. 点击主页选项卡中的 **新建窗口** 按钮，打开一个独立的第二窗口。
3. 将每个窗口导航到不同的远程或任务，以并行工作。
4. 在设置 > 布局中为每个窗口自定义面板数量，以获得最适合您工作流的高效布局。

多窗口功能将 RcloneView 从单任务文件管理器转变为并行工作区，帮助云存储专业人员同时管理多个提供商、项目或正在进行的操作。

---

**相关指南：**

- [RcloneView 双窗格资源管理器效率技巧](https://rcloneview.com/support/blog/two-pane-explorer-productivity-tips-rcloneview)
- [使用 RcloneView 管理多个云账户](https://rcloneview.com/support/blog/manage-multiple-cloud-accounts-with-rcloneview)
- [统一管理所有云存储 — 管理 Google Drive、Dropbox 和 OneDrive](https://rcloneview.com/support/blog/unify-all-clouds-manage-google-drive-dropbox-onedrive)

<CloudSupportGrid />
