---
slug: declutter-cloud-photo-library-rcloneview
title: "使用 RcloneView 整理云端照片库：比较、清理并保护每一张照片"
authors:
  - tayson
description: "统一分散在 Google Drive、Dropbox、NAS 和 S3 中的照片和视频文件夹；使用 RcloneView 比较、清理重复文件，并安排受保护的备份。"
keywords:
  - rcloneview
  - photo backup
  - cloud photo dedup
  - compare cloud storage
  - multi cloud
  - google drive
  - dropbox
  - s3
  - nas backup
  - checksum
tags:
  - sync
  - file-management
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 使用 RcloneView 整理云端照片库：比较、清理并保护每一张照片

> 厌倦了同样的 RAW 和 JPEG 文件散落在 Google Drive、Dropbox 和 NAS 中？RcloneView 让你看清哪些文件是重复的，轻松清理，并锁定受保护的备份——完全无需与 CLI 参数搏斗。

如果你的照片和视频历史分散在三个或更多地方，混乱几乎不可避免：重复文件、缺失的编辑版本，以及没人记得的文件夹。RcloneView 将 rclone 的强大功能包装进一个可视化工作区，让你可以比较来源、将云端存储像本地驱动器一样挂载，并运行可重复的同步任务，维护一个统一、受保护的主照片库。

<!-- truncate -->

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />


## 为什么统一的照片库很重要

- 停止为同一相册在多个提供商处重复付费存储。
- 为 Lightroom、Capture One 或 Photos 维护单一可信数据源。
- 通过带日志、经校验和验证的运行记录来证明备份的完整性，而不是靠猜测。

## 连接云存储并挂载一个整洁的工作区

- 通过 `+ New Remote` 一次性添加每个位置：Google Drive、Dropbox、OneDrive、S3/Wasabi/R2 或 NAS。指南：[add-oath-online-login](/howto/remote-storage-connection-settings/add-oath-online-login) 和 [/support/howto/remote-storage-connection-settings/s3](/howto/remote-storage-connection-settings/s3)。

<img src="/support/images/en/blog/new-remote.png" alt="Open multiple cloud remotes in RcloneView" class="img-large img-center" />。

- 挂载关键来源，让它们在你的工具中如同本地文件一样：[将云存储挂载为本地驱动器](https://rcloneview.com/support/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive)。
- 使用一致的路径（例如 `/Volumes/Photos` 或 `X:\Photos`），这样在切换设备时编辑器和自动化流程不会失效。

 <img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="mount from remote explorer" class="img-large img-center" />。


## 使用 Compare 发现重复文件和差异

- 在任意两个位置之间运行 **Compare**（例如 Dropbox 与 NAS），在同步之前查看更新的、缺失的或不匹配的文件：[比较文件夹内容](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- 按扩展名筛选，在查看差异时单独隔离出 RAW、JPEG 或旁车文件（sidecar files）。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare shared folder and My Drive contents" class="img-large img-center" />。

## 通过同步任务构建受保护的主照片库

- 选择你的可信数据源（通常是 NAS 或最完整的云端文件夹），并创建一个单向同步任务到你的备份目标（例如带生命周期策略的 S3/Wasabi）。指南：[创建同步任务](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)，以及[执行与管理任务](https://rcloneview.com/support/howto/rcloneview-basic/execute-manage-job)。
- 为相册或年份使用任务预设（例如 `2020/`、`2021/`），使每次运行都保持小巧且可预测。
- 在合并整理时优先使用 **copy** 以确保安全；只有在信任目标位置并且已有一段干净运行的历史记录后，才切换到 **sync**。
- 先使用内置的 rclone 参数进行一次空跑（dry-run），以验证包含和排除规则。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running an encrypted sync job in RcloneView" class="img-large img-center" />。


## 安排计划、监控并验证

- 开启计划任务，让你的主照片库每晚自动刷新，而不是等有人想起来才做：[任务调度](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="create job schedule" class="img-large img-center" />。

- 将任务历史日志用作审计记录；如果某次运行失败，可以直接从同一个任务重新开始，无需重新配置。



## 快速服务编辑人员和家人

- 在本地挂载当前项目的快速副本，同时将较冷的存档保留在 S3/Wasabi 中。
- 创建第二个任务，将轻量级的 JPEG 导出文件推送到用于分享的云端（Drive 或 Dropbox），同时让 RAW 文件保留在你的主库中。
- 对于外出拍摄，可以在笔记本电脑上挂载云端，让调度器在你重新连接时自动回填到 NAS。

准备好清理混乱、不再为重复像素付费了吗？通过 RcloneView 挂载、比较并安排计划，打造属于你的单一、受保护的照片库。

<CloudSupportGrid />
