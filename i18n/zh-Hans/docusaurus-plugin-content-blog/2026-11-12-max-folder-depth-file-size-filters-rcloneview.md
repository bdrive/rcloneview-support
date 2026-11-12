---
slug: max-folder-depth-file-size-filters-rcloneview
title: "最大文件夹深度与最大文件大小筛选器 — 在 RcloneView 中控制同步内容"
authors:
  - kai
description: "使用 RcloneView 的 Max folder depth 和 Max file size 筛选器跳过深层子文件夹和超大文件，让云同步作业保持快速、聚焦。"
keywords:
  - 最大文件夹深度同步
  - 最大文件大小筛选器
  - rclone max depth GUI
  - 云同步跳过大文件
  - 限制同步文件夹层级
  - RcloneView 同步筛选器
  - 从备份中排除大文件
  - 选择性云同步
  - 浅层文件夹同步
tags:
  - RcloneView
  - feature
  - filters
  - cloud-sync
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 最大文件夹深度与最大文件大小筛选器 — 在 RcloneView 中控制同步内容

> 同步向导中的两个数字字段，决定了作业能深入到哪一层，以及文件多大时会被排除在外。

并不是每个同步作业都需要整个目录树。设计团队可能只需要客户 Dropbox 中的顶层交付文件夹，而不是所有嵌套的工作文件夹。将 Documents 备份到 OneDrive 的家庭用户可能想排除几个 30 GB 的磁盘镜像。RcloneView 在同步向导第 3 步中通过 **Max folder depth** 和 **Max file size** 处理这两种情况，而且两者在 FREE License 下均可使用。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Max Folder Depth：限制作业深入的层级

Max folder depth 设置作业处理源目录下多少层文件夹。更深的内容会被跳过。较小的值可以把庞大、层级繁杂的源变成只同步顶层的浅层同步。

当重要文件位于上层时，这一点很有用。例如，某代理公司的 `Clients/` 文件夹中，每个客户有一个文件夹存放最终交付物，同时还有深达十层的 `working/` 和 `cache/` 目录树。设置深度限制后，无需编写一长串排除规则，就能保留交付物并跳过杂乱内容。

<img src="/support/images/en/blog/new-remote.png" alt="Adding a remote in RcloneView before configuring a depth-limited sync job" class="img-large img-center" />

深度限制会静默生效。如果测试运行时留下了深度限制，之后的同步中更深的子文件夹会在没有任何错误的情况下消失。如果目标端缺少文件，请先检查这个字段。

## Max File Size：排除超大文件

Max file size 以 MB 为单位输入，任何大于该值的文件都会被排除。常见用法：

- 备份工作文件夹时排除 ISO 镜像、虚拟机磁盘和原始视频。
- 让同步到较小免费套餐账户的数据保持在其限额内。
- 跳过偶尔出现的超大导出文件，让夜间办公文件作业保持快速。

该字段只设置上限。若要无论大小都排除某种已知文件类型，请在同一步中添加自定义规则，例如 `.iso`。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a sync job with file size filters in RcloneView Job Manager" class="img-large img-center" />

## 与其他筛选器组合使用

这两个字段可以与第 3 步中的其他选项配合使用：Max file age（单位为 `y`、`d`、`h`、`m`、`s`）、预定义的 Music、Video、Image、Document、Google Docs 和 Box Docs 筛选器，以及自定义规则。例如，一个作业可以只同步小于 50 MB、最近 30 天内修改过、且位于前三层文件夹内的文档。

筛选器会改变单向同步视为源内容的范围，因此请先运行 **Dry Run**。它会列出将被复制和删除的文件，让您在任何更改发生前发现设置过严的限制。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job History in RcloneView showing file counts for filtered sync runs" class="img-large img-center" />

作业运行后，Job History 会显示每次运行的文件数和总大小。如果数量突然下降，通常意味着筛选器设置有误。

## 快速开始

RcloneView 可在 Windows、macOS 和 Linux 上通过一个窗口挂载和同步 90+ 个服务商。

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 打开 Sync，选择源和目标，并为作业命名。
3. 在第 3 步中设置 Max folder depth 和 Max file size（MB）。
4. 运行 Dry Run，检查文件列表，然后在 Job Manager 中保存作业。

更小、更聚焦的作业完成得更快，占用的存储更少，也更容易检查。

---

**相关指南：**

- [按文件类型同步的预定义筛选器](https://rcloneview.com/support/blog/predefined-filters-sync-file-types-rcloneview)
- [Min Age 和 Max Age 基于时间的筛选器](https://rcloneview.com/support/blog/min-age-max-age-time-based-filters-rcloneview)
- [修复同步筛选器未排除文件的问题](https://rcloneview.com/support/blog/fix-sync-filters-not-excluding-files-rcloneview)

<CloudSupportGrid />
