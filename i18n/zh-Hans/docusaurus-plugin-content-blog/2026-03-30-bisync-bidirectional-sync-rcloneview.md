---
slug: bisync-bidirectional-sync-rcloneview
title: "Bisync 双向同步 — RcloneView 中的双向云同步"
authors:
  - tayson
description: "了解如何使用 RcloneView 的 bisync 双向同步功能，在多台设备和多个云服务商之间保持本地文件与云端文件的双向同步。"
keywords:
  - bisync rcloneview
  - bidirectional sync
  - two-way cloud sync
  - rclone bisync
  - cloud file synchronization
  - two-way file sync
  - bisync setup
  - rcloneview sync
  - multi-device sync
  - bidirectional backup
tags:
  - RcloneView
  - feature
  - cloud-sync
  - sync
  - guide
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Bisync 双向同步 — RcloneView 中的双向云同步

> Bisync 会在两个方向上传播更改，让本地文件与云存储保持完美镜像，且不会覆盖任意一侧的数据。

标准同步操作是单向的：它会使目标端与源端保持一致，删除目标端中源端不存在的所有内容。Bisync 的工作方式不同。它会跟踪自上次运行以来双方发生的更改，并在两个方向上传播新增、修改和删除操作。RcloneView 通过图形界面公开了 rclone 的 bisync 功能，使双向云同步无需编写命令行脚本即可实现。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Bisync 的工作原理

Rclone 的 bisync 命令会维护一对清单文件，用于记录每次成功运行后源端（Path1）和目标端（Path2）的状态。在后续运行时，bisync 会将每一侧的当前状态与其已存储的清单进行比较，以确定发生了哪些变化。Path1 上的新文件会被复制到 Path2，Path2 上的新文件会被复制到 Path1，删除操作也会在两个方向上同步镜像。

冲突检测是内置功能。如果同一个文件在两次运行之间在双方都被修改，bisync 会将其标记为冲突，而不是悄悄覆盖其中一个版本。默认行为是重命名发生冲突的副本，保留两个版本，以便你手动解决差异。这对于多个用户或设备可能编辑同一文档的共享工作流程至关重要。

首次运行 bisync 需要使用 `--resync` 标志来建立初始基准清单。RcloneView 在你创建新的 bisync 任务时会自动处理这一点——初次运行会执行 resync，之后所有的定时运行都会以正常的增量模式进行。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Bisync bidirectional transfer configuration in RcloneView" class="img-large img-center" />

## 在 RcloneView 中设置 Bisync

要在 RcloneView 中创建 bisync 任务，打开任务管理器并选择 bisync 作为操作类型。选择你的两个路径——例如，将本地目录 `/home/user/Documents` 设为 Path1，将 Google Drive 文件夹设为 Path2。你也可以在两个云端远程之间进行 bisync，例如让 Dropbox 文件夹与 OneDrive 保持镜像。

筛选规则对 bisync 的作用方式与标准同步相同。使用包含和排除模式，可将 bisync 限制在特定的文件类型或子目录中。例如，你可以只在本地项目文件夹与共享的 OneDrive 目录之间对 `*.docx` 和 `*.xlsx` 文件进行 bisync，忽略临时文件和操作系统元数据。

RcloneView 的任务调度器支持按固定间隔运行 bisync——每 15 分钟、每小时，或按自定义的 cron 计划运行。频繁的间隔可以最大限度地缩小产生冲突的时间窗口，确保本地设备与云存储之间实现近乎实时的同步。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a bisync job from the RcloneView job manager" class="img-large img-center" />

## Bisync 的实际使用场景

**多设备文档同步：** 让工作文档文件夹在你的桌面和云存储之间保持同步。当你在笔记本电脑上编辑文件时（该设备通过自己的 bisync 任务同步到同一个云文件夹），更改会在下一次运行时传播到所有已连接的设备。

**协作项目文件夹：** 共享云存储文件夹的团队可以使用 bisync 维护本地工作副本。每个团队成员的本地更改都会被推送到云端，同事的远程更改也会自动被拉取下来。冲突检测机制可确保同时进行的编辑不会互相悄悄覆盖。

**混合本地-云工作流程：** 需要快速本地文件访问、同时又希望云端备份的开发者或设计师，可以对项目目录进行 bisync。本地文件操作依然即时响应，同时云端副本也能保持最新，用于备份和共享。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a recurring bisync job in RcloneView" class="img-large img-center" />

## Bisync 最佳实践

按固定的时间表运行 bisync，以最大限度减少冲突。运行间隔越长，发生编辑冲突的可能性就越高。对于活跃的工作目录，15 到 30 分钟的间隔可以在响应速度和资源占用之间取得良好平衡。避免在没有筛选规则的情况下对极其庞大的目录树运行 bisync，因为清单比较可能会非常耗时。使用 RcloneView 的任务历史记录来监控反复出现的冲突，并据此调整你的工作流程。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Bisync job history showing completed two-way synchronization runs" class="img-large img-center" />

## 快速上手

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 配置你的源和目标远程（本地文件夹、Google Drive、OneDrive 等）。
3. 在任务管理器中创建一个新的 bisync 任务，并运行初始 resync。
4. 按你偏好的间隔安排 bisync 任务，以实现持续的双向同步。

RcloneView 中的 Bisync 为你的桌面带来了真正的双向云同步，无需脚本、cron 任务或命令行的复杂操作。

---

**相关指南：**

- [同步、复制、移动 — RcloneView 中的区别详解](https://rcloneview.com/support/blog/sync-copy-move-difference-explained-rcloneview)
- [RcloneView 中的筛选规则与选择性同步](https://rcloneview.com/support/blog/filter-rules-selective-sync-rcloneview)
- [RcloneView 与 Syncthing 对比](https://rcloneview.com/support/blog/rcloneview-vs-syncthing-comparison)

<CloudSupportGrid />
