---
slug: manage-citrix-sharefile-cloud-sync-backup-rcloneview
title: "管理 Citrix ShareFile 存储 — 使用 RcloneView 同步和备份文件"
authors:
  - tayson
description: "了解如何使用 RcloneView 连接和管理 Citrix ShareFile 存储。在单一图形界面中同步、备份 ShareFile 数据并将其传输到其他云。"
keywords:
  - Citrix ShareFile
  - ShareFile 同步
  - ShareFile 备份
  - ShareFile 云管理
  - RcloneView ShareFile
  - 企业文件同步
  - ShareFile 迁移到云
  - 云存储管理
  - ShareFile 迁移
  - RcloneView 云同步
tags:
  - RcloneView
  - sharefile
  - cloud-storage
  - cloud-sync
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 管理 Citrix ShareFile 存储 — 使用 RcloneView 同步和备份文件

> 将 Citrix ShareFile 连接到 RcloneView，在同一个图形界面中与其他 90 多种云存储服务一起管理您的企业文件。

Citrix ShareFile 被众多企业和专业服务团队广泛用于安全文件共享和文档管理。虽然 ShareFile 提供了自己的客户端，但需要跨多个云平台管理文件的团队往往需要一个集中化的工具。RcloneView 是基于 rclone 构建的图形界面客户端，可让您在同一界面中将 ShareFile 与其他服务（Google Drive、OneDrive、Amazon S3 等）一并连接管理。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 将 Citrix ShareFile 连接到 RcloneView

将 Citrix ShareFile 添加到 RcloneView 需要您的 ShareFile 账户凭据和根文件夹 ID（Root Folder ID）。根文件夹 ID 用于标识 rclone 将使用 ShareFile 账户中的哪个文件夹作为连接的根目录——通常可以在 ShareFile 网页界面的文件夹属性中找到。

要设置远程连接，请打开 RcloneView 并进入“Remote”标签页，然后点击“New Remote”。从提供商列表中选择 Citrix ShareFile，并输入所需的配置信息，包括根文件夹 ID。RcloneView 内置了 rclone 二进制文件，因此无需单独安装 rclone。

<img src="/support/images/en/blog/new-remote.png" alt="Adding a new Citrix ShareFile remote in RcloneView" class="img-large img-center" />

连接完成后，ShareFile 会作为一个远程出现在文件浏览器中。您可以浏览文件夹、查看文件元数据（名称、大小、修改日期），并执行复制、剪切、粘贴、重命名和删除等操作——所有这些都无需离开 RcloneView 界面。

## 将 ShareFile 与其他云服务同步

通过 RcloneView 管理 ShareFile 的一个实用优势是可以直接将其与其他云存储进行同步。例如，一家律师事务所可以将 ShareFile 客户文件夹同步到 Amazon S3 进行长期归档，或将 ShareFile 内容镜像到 OneDrive 以实现与 Microsoft 365 的集成。

要创建同步任务，请点击“Home”标签页中的“Sync”按钮，并按照 4 步向导操作：选择 ShareFile 文件夹作为源（或目标）、选择目标远程和文件夹、配置传输选项，并可选择性地添加过滤规则。“Dry Run”（模拟运行）功能可让您在正式执行同步之前，预览哪些文件将被复制或删除。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Syncing Citrix ShareFile to another cloud with RcloneView" class="img-large img-center" />

为了实现持续的数据保护，基于计划的同步（需要 PLUS 许可证）可让您按照类似 crontab 的时间表运行 ShareFile 备份——每天、每周或按自定义间隔运行。任务历史记录会追踪每次执行的开始时间、持续时间、文件数量和状态。

## 整理和比较 ShareFile 内容

RcloneView 的“文件夹对比”（Folder Compare）功能对于将 ShareFile 内容与备份目标进行审计非常有用。通过“Home”标签页中的“Compare”按钮启动该功能，选择 ShareFile 作为一侧，将目标存储作为另一侧，视图会高亮显示仅存在于一侧、大小不同或完全相同的文件。

这种“先比较后操作”的工作流程在迁移场景中非常实用：在同步之前先运行比较，可以准确了解将会发生哪些变化。对于更有针对性的审计，带过滤功能的“文件夹对比”（Folder Compare with Filter，需要 PLUS 许可证）可让您按文件类型或文件夹名称限制比较范围，这在处理大型 ShareFile 存储库时非常有用。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder comparison between ShareFile and backup storage in RcloneView" class="img-large img-center" />

## 快速上手

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 打开“Remote”标签页，点击 **New Remote**，然后选择 Citrix ShareFile。
3. 输入您的 ShareFile 凭据和根文件夹 ID 以完成设置。
4. 使用同步向导创建任务，将 ShareFile 备份到您偏好的目标云。

在单一界面中管理 ShareFile 及其他云服务，可以减少来回切换带来的干扰，为备份、迁移和文件整理提供一致的工作流程。

---

**相关指南：**

- [使用 RcloneView 管理 SharePoint 云同步和备份](https://rcloneview.com/support/blog/manage-sharepoint-cloud-sync-backup-rcloneview)
- [使用 RcloneView 将 Citrix ShareFile 迁移到 OneDrive 和 SharePoint](https://rcloneview.com/support/blog/migrate-citrix-sharefile-onedrive-sharepoint-rcloneview)
- [使用 RcloneView 进行云到云迁移](https://rcloneview.com/support/blog/cloud-to-cloud-migration-rcloneview)

<CloudSupportGrid />
