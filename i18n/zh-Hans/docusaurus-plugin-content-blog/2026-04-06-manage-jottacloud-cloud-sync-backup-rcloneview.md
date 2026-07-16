---
slug: manage-jottacloud-cloud-sync-backup-rcloneview
title: "使用 RcloneView 管理 Jottacloud 存储：同步、备份与文件整理"
authors:
  - tayson
description: 在 RcloneView 中设置 Jottacloud，浏览文件、与 Google Drive 或 S3 同步、安排备份计划,并通过可视化界面管理无限存储空间。
keywords:
  - rcloneview
  - jottacloud
  - jottacloud backup
  - cloud sync
  - jottacloud google drive
  - jottacloud s3
  - rclone GUI
  - unlimited cloud storage
  - scheduled backup
  - multi-cloud management
tags:
  - jottacloud
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 使用 RcloneView 管理 Jottacloud 存储：同步、备份与文件整理

> Jottacloud 以固定价格提供无限存储空间，但要在多个云之间管理它,需要合适的工具。**RcloneView** 提供可视化界面,让你能够浏览、同步、备份并整理 Jottacloud 中的文件,同时管理其他任意云存储。

Jottacloud 是一家挪威云存储提供商,以其慷慨的无限存储方案和严格的欧洲数据隐私标准而闻名。它是个人备份、照片存档以及需要大容量存储而不必担心按 GB 计费的企业的热门选择。

Jottacloud 的挑战在于它拥有自己独立的生态系统。如果你还使用 Google Drive 进行协作、Amazon S3 进行归档,或者 OneDrive 用于办公,那么在所有这些平台之间保持数据整齐有序就会变成一件繁琐的手工活。RcloneView 通过在单一的双栏 GUI 中,将 Jottacloud 与 70 多个其他云存储提供商一同管理,弥补了这一空白。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 为什么用 RcloneView 管理 Jottacloud

Jottacloud 自带的应用程序对于基本的上传和下载来说没有问题,但缺乏跨云功能。使用 RcloneView,你可以:

- **浏览 Jottacloud 存储**——采用熟悉的文件管理器布局,导航文件夹、查看大小并以可视化方式管理文件。
- **将 Jottacloud 与 Google Drive、OneDrive 或 S3 同步**——在协作工具中保留工作副本,同时将数据归档到 Jottacloud。
- **安排自动备份计划**——将任意云的数据备份到 Jottacloud 的无限存储空间。
- **比较不同提供商之间的文件夹内容**,以发现差异或缺失的文件。
- **避免供应商锁定**——在多个服务上保留重要数据的副本。

## 设置 Jottacloud 远程

在 RcloneView 中添加 Jottacloud 非常简单:

1. 打开 RcloneView,点击 **+ New Remote**。
2. 从提供商列表中选择 **Jottacloud**。
3. 按照 OAuth 登录流程操作——系统会将你重定向到 Jottacloud 的网站以授权访问。
4. 为远程命名(例如 `MyJottacloud`)并保存。

你的 Jottacloud 存储,包括所有设备和挂载点,都会出现在资源管理器面板中。

<img src="/support/images/en/blog/new-remote.png" alt="Adding a Jottacloud remote in RcloneView" class="img-large img-center" />

## 浏览与整理存储

RcloneView 会在其双栏资源管理器中显示你的 Jottacloud 内容。你会看到已配置的设备及其挂载点——通常包括用于无限存储的 **Archive** 设备,以及用于同步文件夹的命名设备。

在资源管理器中,你可以:

- **导航**——在任意设备或挂载点内浏览文件夹和子文件夹。
- **创建新文件夹**——在上传之前先组织好你的归档结构。
- **删除不再需要的旧文件**,以精简视图(在有限方案中还能回收配额)。
- **在另一栏中打开第二个云**,以便直接比较或传输。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Jottacloud and Google Drive side by side in RcloneView" class="img-large img-center" />

## 将 Jottacloud 与 Google Drive 或 Amazon S3 同步

最常见的使用场景是让 Jottacloud 与协作云或对象存储服务保持同步。

### Jottacloud 与 Google Drive

如果你的团队使用 Google Drive 协作,但又希望有一份经济实惠的异地副本,可以设置从 Google Drive 到 Jottacloud 的同步。新文件和修改过的文件会按照你设定的计划自动流转。

### Jottacloud 与 Amazon S3

为了获得持久且地理冗余的备份,可以将 Jottacloud 数据同步到 S3 存储桶(或任何兼容 S3 的服务,如 Wasabi 或 Backblaze B2)。这样可以在欧洲以外拥有第二份副本。

### 如何传输

- **拖放**:在一栏中选择文件并拖到另一栏。适合一次性传输或小批量文件。
- **比较并复制**:运行文件夹比较查看差异,然后仅复制缺失或已更改的内容。
- **同步**:镜像整个文件夹结构。建议先使用 Dry Run 预览更改。

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="Drag and drop files from Jottacloud to another cloud" class="img-large img-center" />

## 安排自动备份

Jottacloud 的无限存储空间使其成为出色的备份目的地。在 RcloneView 中:

1. 创建一个从源云到 Jottacloud 的 **Copy** 或 **Sync** 任务。
2. 打开 **Job Scheduling** 面板。
3. 设置计划——活跃项目使用每晚执行,归档数据使用每周执行。
4. 保存并启用该计划。

RcloneView 会自动运行该任务,并在 **Job History** 面板中记录每次执行情况。你可以随时查看传输数量、错误和耗时。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule a backup job to Jottacloud" class="img-large img-center" />

## 有效管理无限存储空间

无限并不意味着杂乱无章。通过以下做法让你的 Jottacloud 归档保持实用:

- **使用一致的文件夹结构**——镜像源目录布局,或使用基于日期的目录(例如 `Backups/2026/04/`)。
- **设置筛选规则**,排除临时文件、缓存和系统目录,这些内容会浪费存储空间并拖慢传输速度。
- **定期运行比较**,在源数据和备份数据之间发现任何同步缺口。
- **监控任务历史**中的失败传输——一次超时或权限错误都可能在备份中留下缺口。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history showing completed backup runs" class="img-large img-center" />

## Jottacloud 用户提示

- **Jottacloud 会限制大文件上传速度**——如果你是第一次迁移数万亿字节的数据,预计初次同步会花费一些时间。之后的增量同步会快得多。
- **使用 Archive 设备**来获取无限存储空间。其他设备可能根据你的方案有不同的配额规则。
- **结合加密使用**——如果你希望在 Jottacloud 的服务器端保护之上再加一层客户端加密,可以在 RcloneView 中为你的 Jottacloud 远程叠加一个 rclone crypt 远程。

## 开始使用

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 在 New Remote 向导中通过 OAuth **连接 Jottacloud**。
3. **添加其他云**——Google Drive、S3、OneDrive 或任何受支持的提供商。
4. **浏览、同步并安排计划**——以可视化方式管理无限存储空间。

Jottacloud 给你空间。RcloneView 给你掌控力。

---

**相关指南:**

- [使用 RcloneView 进行云到云的传输与同步](https://rcloneview.com/support/blog/cloud-to-cloud-transfer-sync-rcloneview)
- [从 Google Drive 到 Amazon S3 的增量备份](https://rcloneview.com/support/blog/incremental-backup-google-drive-to-amazon-s3)
- [使用 RcloneView 实现 Proton Drive 多云同步](https://rcloneview.com/support/blog/proton-drive-multi-cloud-sync-with-rcloneview)

<CloudSupportGrid />
