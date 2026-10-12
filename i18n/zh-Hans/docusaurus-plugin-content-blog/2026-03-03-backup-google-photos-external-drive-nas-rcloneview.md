---
slug: backup-google-photos-external-drive-nas-rcloneview
title: "如何将 Google 相册备份到外置硬盘或 NAS — Google Takeout + RcloneView"
authors:
  - tayson
description: "Google 相册不再允许第三方应用下载您已有的图库。请先用 Google Takeout 将图库导出到 Google Drive，再用 RcloneView 把导出文件复制到外置硬盘、NAS 或其他云存储，并通过 RcloneView Mobile 持续备份新照片。"
keywords:
  - google photos 备份
  - google photos 到外置硬盘
  - google photos 到 nas
  - google takeout 到 nas
  - google takeout 备份
  - google photos rclone
  - google photos api 限制
  - 将 google photos 保存到本地
  - google photos 导出
  - rcloneview mobile 照片备份
tags:
  - RcloneView
  - google-photos
  - backup
  - cloud-storage
  - sync
  - nas
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 如何将 Google 相册备份到外置硬盘或 NAS — Google Takeout + RcloneView

> 自 2025 年 3 月 31 日起，Google 相册只允许第三方应用（包括 rclone 和 RcloneView）查看它们自己上传的照片。导出现有图库的可靠方法是使用 Google Takeout，之后的工作交给 RcloneView。

Google 相册中保存着多年来无可替代的照片和视频，但存储配额、账号被锁定以及政策变更，都可能让您无法再访问它们。许多指南（包括本文的早期版本）都建议把 Google 相册连接到同步工具并下载全部内容。这种方法如今已经行不通：Google 在 2025 年关闭了这扇门。

本指南介绍目前行之有效的方法。使用 **Google Takeout** 将图库直接导出到 Google Drive，再由 **RcloneView** 把导出文件复制到外置硬盘、NAS 或其他云存储，并通过 **RcloneView Mobile** 让今后的新照片不再经由 Google 相册中转。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 发生了什么变化：Google Photos API 限制（2025）

2025 年 3 月 31 日，Google 移除了 Photos Library API 中针对完整图库的权限范围（scope）。用 Google 自己的话说，第三方应用"现在只能列出、搜索和检索由您的应用创建的相册和媒体项目"。共享相册的调用会返回 `403 PERMISSION_DENIED`。

在 RcloneView 中添加 **Google Photos** 远程后，这意味着：

- **该远程看起来几乎是空的。** 它只显示通过 RcloneView 或 rclone 上传的照片。手机上传、网页上传以及图库中的其他所有内容，API 都看不到，因此复制（Copy）任务会报告"没有变化"或复制 0 个文件。
- **这不是连接问题。** RcloneView 1.6 及更高版本在您打开 Google Photos 远程时，会在应用内说明这一限制，而不是显示一个看似为空的账号。
- **共享相册完全无法访问。**
- **您需要自己的 OAuth 客户端 ID。** rclone 共用的 Google Photos 客户端 ID 将在 2026 年内停用。当无法建立连接时，RcloneView 的连接向导会指导您创建客户端 ID。

Google 官方支持的现有图库导出方式是 **Google Takeout**，所以备份就从这里开始。

## 第 1 步：使用 Google Takeout 导出图库

1. 打开 [takeout.google.com](https://takeout.google.com)，使用拥有这些照片的账号登录。
2. 点击 **Deselect all**（全部取消选择），然后只勾选 **Google 相册**。如果想把大型图库分批导出，可以通过 **All photo albums included** 将导出范围限定为特定相册或年份。
3. 在 **Destination**（目标位置）中选择 **Add to Drive**。Google 会把导出文件放入您 Google Drive 中的 `Takeout` 文件夹，RcloneView 可以直接访问。同时也提供 Dropbox、OneDrive 和 Box 选项（RcloneView 均支持这三者）；如果您更愿意从电脑上复制，也可以选择 **Send download link via email**。
4. 选择归档类型（`.zip`）和大小（1 GB 到 50 GB）。归档越大，需要处理的文件就越少。
5. 点击 **Create export**。导出完成后 Google 会通过邮件通知您；大型图库可能需要数小时甚至数天。

开始之前需要了解：

- 每张照片和每个视频都以原始画质导出，并附带一个 `.json` 元数据文件，其中包含拍摄日期、描述和位置。
- 添加到 Google Drive 的导出文件会占用您的 Google 存储空间，直到您将其删除，因此请确认 Drive 有足够空间，或者分批导出。
- Takeout 是一次性导出，没有增量模式。第 4 步会介绍如何在无需重复导出的情况下持续备份今后的照片。

## 第 2 步：在 RcloneView 中添加 Google Drive

1. 打开 RcloneView，在远程管理器（Remote Manager）中点击 **Add Remote**。
2. 选择 **Google Drive**，并完成[基于浏览器的 OAuth 登录](https://rcloneview.com/support/howto/remote-storage-connection-settings/add-oath-online-login)。
3. 在[资源管理器（Explorer）](https://rcloneview.com/support/howto/rcloneview-basic/browse-and-manage-remote-storage)中打开该远程，并进入 `Takeout` 文件夹。每次导出都是一个单独的 `.zip` 文件（图库较大时则有多个）。

<img src="/support/images/en/blog/open-multiple-google-drive-remotes.png" alt="Google Drive remote with the Takeout folder open in RcloneView Explorer" class="img-large img-center" />

## 第 3 步：将导出文件复制到备份目标

RcloneView 会原样复制这些归档文件，不会解压，因此复制完成后，您需要在目标所在的机器上解压一次。

### 外置硬盘

1. 连接硬盘，并记下它的路径（Windows 上为 `E:\`，macOS 上为 `/Volumes/...`，Linux 上为 `/media/...`）。
2. 创建一个[复制任务](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)：**源（Source）** 为 Google Drive 远程上的 `Takeout` 文件夹，**目标（Destination）** 为硬盘上的某个文件夹。
3. 运行该任务，然后在硬盘上解压这些归档文件。

请使用 **Copy**（复制）而不是 Sync（同步）：复制任务绝不会删除目标端的任何内容。

### Synology NAS

RcloneView 会在您的网络中[自动检测 Synology NAS 设备](https://rcloneview.com/support/tutorials/synology-nas-cloud-transfer)，因此 NAS 无需任何配置即可显示在本地（Local）标签页中。

1. 创建一个复制任务，以 `Takeout` 文件夹为源，以 NAS 上的共享文件夹（例如 `/photos/google-takeout`）为目标。
2. 运行任务，然后在 NAS 上解压这些归档文件。

<img src="/support/images/en/blog/synology-nas-autodection-and-connection.png" alt="Synology NAS auto-detected in RcloneView for the Google Takeout copy" class="img-large img-center" />

### 其他云存储

想要一份异地副本？将复制任务指向任何其他远程即可，例如 Amazon S3、Backblaze B2、Wasabi、OneDrive 等。RcloneView 通过其 rclone 引擎在云与云之间直接传输数据，归档文件无需经过您电脑的存储空间。

### 验证与清理

- 使用[文件夹比较（Folder Comparison）](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)确认每个归档文件都已到达，且大小一致。
- 在[任务历史（Job History）](https://rcloneview.com/support/howto/rcloneview-basic/execute-manage-job#view-job-history)中查看传输日志。
- 确认复制无误后，删除 Google Drive 中的 `Takeout` 文件夹，以回收它占用的存储空间。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder Comparison between the Takeout export and the NAS copy" class="img-large img-center" />

## 第 4 步：使用 RcloneView Mobile 持续备份新照片

Takeout 无法增量运行，所以每月重复一次并不是长久之计。对于今后拍摄的照片，请把 Google 相册从流程中去掉：

- **RcloneView Mobile**（Android 和 iOS）可将手机中的照片和视频直接备份到您自己的云存储，使用的远程与桌面版 RcloneView 相同，中间没有任何服务器。照片备份功能包含在 RcloneView Plus 中。请从[下载页面](https://rcloneview.com/src/download.html)获取。
- 在桌面端，通过定时复制任务（PLUS 功能，参见[任务计划（Job Scheduling）](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)），即可把该云端文件夹镜像到您的 NAS 或外置硬盘，每天、每周，随您设定。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling the recurring copy from the cloud photo folder to the NAS" class="img-large img-center" />

这样，您的手机、云存储和 NAS 就能保持同步，而不再由 Google 相册来决定您能下载什么。

## Google Photos 远程仍然适用的场景

这个远程并非毫无用处，只是它的作用方向变了：

- **上传。** 将 NAS 或电脑上的内容通过复制任务传到该远程的 `upload` 文件夹或某个相册中，这些照片就会添加到您的 Google 相册图库，Google 相册应用会像显示其他上传内容一样显示它们。
- **读回 RcloneView 上传的内容。** 通过 RcloneView 上传的任何内容，都可以再次列出并复制出来。
- **注意事项。** 通过 API 下载的照片不是原始分辨率，并且会丢失 EXIF 位置信息，因此请把 Google 相册当作方便的查看工具，而不是归档库。同时，您仍然需要自己的 OAuth 客户端 ID。

## 开始使用

1. 使用 Google Takeout **导出**您的 Google 相册图库，并将其投递到 Google Drive。
2. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**（Windows、macOS、Linux），并将 Google Drive 添加为远程。
3. **创建复制任务**，将 `Takeout` 文件夹复制到您的外置硬盘、NAS 或其他云存储，然后在目标位置解压归档文件。
4. 使用文件夹比较**验证**复制结果，并删除 Drive 中的导出文件。
5. **安装 RcloneView Mobile**，让新照片直接进入您自己的云存储，并安排一个桌面端任务将它们镜像到 NAS。

您的照片无可替代。一次导出加一个定时任务，就能为您留下一份任何政策变更都无法夺走的副本。

---

**相关指南：**

- [在 RcloneView 中修复 Google 相册同步错误](https://rcloneview.com/support/blog/fix-google-photos-sync-errors-rcloneview)
- [通过浏览器登录（OAuth）添加远程](https://rcloneview.com/support/howto/remote-storage-connection-settings/add-oath-online-login)
- [浏览和管理远程](https://rcloneview.com/support/howto/rcloneview-basic/browse-and-manage-remote-storage)
- [比较文件夹内容](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [创建同步任务](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [任务计划](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)
- [Synology NAS 自动检测与连接](https://rcloneview.com/support/tutorials/synology-nas-cloud-transfer)

<CloudSupportGrid />
