---
slug: manage-outscale-cloud-sync-backup-rcloneview
title: "管理 Outscale 存储 —— 使用 RcloneView 同步和备份文件"
authors:
  - morgan
description: "将 Outscale 对象存储连接到 RcloneView，在 Windows、macOS 和 Linux 上实现兼容 S3 的文件浏览、同步和备份。"
keywords:
  - Outscale storage
  - Outscale Object Storage
  - S3-compatible storage GUI
  - RcloneView Outscale
  - cloud backup software
  - sync Outscale to cloud
  - manage cloud storage GUI
  - object storage sync tool
  - multi-cloud file manager
  - S3 credentials setup
tags:
  - s3-compatible
  - object-storage
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 管理 Outscale 存储 —— 使用 RcloneView 同步和备份文件

> 通过图形界面浏览、同步并备份 Outscale 对象存储存储桶，无需在命令行中反复处理原始的 S3 凭据。

Outscale 对象存储通过 rclone 兼容 S3 的协议进行访问，这意味着设置时需要 Access Key、Secret Key 以及 endpoint —— 这些信息在配置文件中很容易输错。RcloneView 将这一设置过程封装为引导式表单，并在此基础上提供完整的文件浏览器、同步引擎和任务调度器，让已经在 Outscale 上存储数据的团队能够以管理其他远程存储相同的方式来管理它。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 将 Outscale 作为兼容 S3 的远程连接

在 RcloneView 中添加 Outscale 的流程与其他兼容 S3 的服务相同：打开 Remote 标签页 > New Remote，选择 S3-compatible 类型，然后输入 Access Key ID、Secret Access Key 以及 Outscale 的 endpoint。如果你的 Outscale 集成已经通过服务器上共享的 rclone 守护进程运行，Connect Manager 还可以让 RcloneView 指向一个外部 rclone 实例。

远程连接保存后，会以独立标签页的形式出现在 Explorer 面板中，与其他已配置的云端或本地存储并列显示。你可以使用 Alias 远程为该连接重命名，将深层嵌套的存储桶路径简化为更便于日常导航的名称。

<img src="/support/images/en/blog/new-remote.png" alt="Adding an Outscale S3-compatible remote in RcloneView" class="img-large img-center" />

## 浏览、同步并备份 Outscale 数据

远程连接完成后，File Explorer 会提供双窗格视图，便于将 Outscale 上的内容与本地文件夹或另一个云端远程进行比较。在两个不同远程之间的面板间拖放会触发复制操作,右键菜单则涵盖了重命名、删除、获取大小以及下载/上传等日常文件操作。

对于定期备份，Sync 向导通过四个步骤配置源和目标、传输并发数以及过滤规则，包括最长文件保留时间等选项，以及针对媒体或文档类型的预定义过滤器。在 FREE 许可下即可以完整读写权限连接 Outscale 等兼容 S3 的服务 —— 无需升级即可将数据写回存储桶。1:N 同步可以在单个任务中将同一个 Outscale 存储桶镜像到多个目标位置，当备份需要同时落地到本地驱动器和另一个云端远程时非常实用。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring a sync job between Outscale storage and another remote" class="img-large img-center" />

## 自动化定期 Outscale 备份

Job Manager 将你创建的每一个同步、复制或移动任务集中列出，每次运行都会记录在 Job History 中，包括状态、传输大小和文件数量。Dry Run 可以让你在真正执行传输之前，预览哪些文件将被复制或删除 —— 这在对新的 Outscale 存储桶进行首次大规模同步之前是一项有用的安全检查。

PLUS 许可用户可以为任务附加类似 crontab 的调度计划，让 Outscale 备份按固定间隔自动运行，并可通过模拟选项在保存前预览即将执行的时间。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a recurring backup job for Outscale storage" class="img-large img-center" />

## 将 Outscale 挂载为本地驱动器

Outscale 存储也可以被挂载为虚拟驱动器，使其他桌面应用程序能够像访问本地文件一样读写存储桶内容。挂载配置包括 VFS 缓存模式（默认为 writes）、缓存大小限制以及只读模式，挂载操作可以直接从远程连接面板的工具栏启动，也可以通过专门的 Mount Manager 进行。

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="Mounting an Outscale bucket as a local drive in RcloneView" class="img-large img-center" />

## 快速上手

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 打开 Remote 标签页 > New Remote，选择 S3-compatible 选项，输入你的 Outscale 凭据和 endpoint。
3. 使用 Folder Compare 或拖放操作将现有数据迁移到 Outscale，然后设置 Sync 任务以进行持续备份。
4. 将该任务添加到 Job Manager，如果使用 PLUS 许可，可以附加调度计划，使备份无需人工干预即可自动运行。

远程连接配置完成后，Outscale 存储在 RcloneView 中的行为就与其他任何连接一样 —— 可浏览、可同步，并可按计划进行备份。

---

**相关指南：**

- [管理 Wasabi 存储 —— 使用 RcloneView 同步和备份文件](https://rcloneview.com/support/blog/manage-wasabi-cloud-sync-backup-rcloneview)
- [管理 Scaleway 对象存储 —— 使用 RcloneView 进行云同步](https://rcloneview.com/support/blog/manage-scaleway-object-storage-cloud-sync-rcloneview)
- [管理 Hetzner 对象存储 —— 使用 RcloneView 进行云同步](https://rcloneview.com/support/blog/manage-hetzner-object-storage-cloud-sync-rcloneview)

<CloudSupportGrid />
