---
slug: manage-petabox-cloud-sync-backup-rcloneview
title: "管理 Petabox 存储 — 使用 RcloneView 同步和备份文件"
authors:
  - steve
description: "将 S3 兼容的对象存储 Petabox 连接到 RcloneView，实现跨平台文件浏览、同步和自动备份。"
keywords:
  - Petabox 存储
  - Petabox 对象存储
  - S3 兼容存储 GUI
  - RcloneView Petabox
  - 云备份软件
  - 将 Petabox 同步到云端
  - 管理云存储 GUI
  - 对象存储同步工具
  - 多云文件管理器
  - S3 凭证设置
tags:
  - RcloneView
  - s3-compatible
  - object-storage
  - cloud-storage
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 管理 Petabox 存储 — 使用 RcloneView 同步和备份文件

> 通过图形界面浏览、同步和备份 Petabox 对象存储桶，而不必在配置文件中手动编辑 S3 凭证。

Petabox 通过 rclone 的 S3 兼容协议接入，因此连接它需要提供 Access Key、Secret Key 和终端节点 URL —— 这类设置在命令行中很容易出错。RcloneView 将这一过程转变为引导式表单，并搭配完整的双栏文件浏览器、同步引擎和任务调度器，让已经在 Petabox 上存储数据的团队能够在同一个窗口中，与其他所有远程端一起管理它。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 将 Petabox 添加为 S3 兼容远程端

在 RcloneView 中添加 Petabox 使用的凭证输入流程与其他任何 S3 兼容服务相同：打开 Remote 选项卡 > New Remote，选择 S3 兼容类型，然后输入 Access Key ID、Secret Access Key 和 Petabox 终端节点。如果你的 Petabox 集成已经通过服务器上共享的 rclone 守护进程运行，Connect Manager 可以让 RcloneView 指向该外部 rclone 实例，而不必使用内置的实例。

保存后，该远程端会作为独立标签页出现在 Explorer 面板中，与已配置的其他云端或本地存储并列。使用 Alias 远程端可以把深层嵌套的存储桶路径缩短为便于日常导航的简短名称。

<img src="/support/images/en/blog/new-remote.png" alt="Adding a Petabox S3-compatible remote in RcloneView" class="img-large img-center" />

## 浏览、同步和备份 Petabox 数据

远程端连接后，File Explorer 的双栏布局让你可以轻松地将 Petabox 上已有的内容与本地文件夹或另一个云端远程端进行比较。在不同远程端之间拖放会触发复制操作，右键菜单涵盖重命名、删除、获取大小以及下载/上传等常规文件操作。

对于定期备份，四步式 Sync 向导可处理源和目标、传输并发数以及筛选规则，包括最大文件存在时间和针对媒体或文档类型的预定义筛选器等选项。像 Petabox 这样的 S3 兼容服务在 FREE 许可证下即可获得完整的读写访问权限 —— 无需升级许可证就能将数据写回存储桶。1:N 同步可以在一个任务中将同一个 Petabox 存储桶镜像到多个目标，当备份需要同时落地本地驱动器和第二个云提供商时非常实用。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring a sync job between Petabox storage and another remote" class="img-large img-center" />

## 自动化定期的 Petabox 备份

Job Manager 将所有同步、复制或移动任务集中在一个列表中，每次运行都会与状态、传输大小和文件数一起记录在 Job History 中。Dry Run 会在实际执行传输之前准确预览将要复制或删除的文件 —— 在对新的 Petabox 存储桶进行大规模首次同步之前值得先检查一下。

PLUS 许可证用户可以为任务附加 crontab 风格的计划，使 Petabox 备份按周期自动运行，并提供模拟选项，可在保存前预览接下来的执行时间。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a recurring backup job for Petabox storage" class="img-large img-center" />

## 将 Petabox 挂载为本地驱动器

Petabox 存储也可以挂载为虚拟驱动器，让其他桌面应用像读写本地文件一样读写存储桶内容。挂载配置包括 VFS 缓存模式（默认：writes）、缓存大小限制和只读模式，挂载操作既可以从远程端的面板工具栏启动，也可以从专门的 Mount Manager 启动。

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="Mounting a Petabox bucket as a local drive in RcloneView" class="img-large img-center" />

## 快速上手

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 打开 Remote 选项卡 > New Remote，选择 S3 兼容选项以输入你的 Petabox 凭证和终端节点。
3. 使用 Folder Compare 或拖放操作将现有数据迁移到 Petabox，然后设置一个 Sync 任务用于持续备份。
4. 将任务添加到 Job Manager，并在 PLUS 上附加计划，让备份无需人工干预即可运行。

配置好远程端后，Petabox 存储的表现就像 RcloneView 中的任何其他连接一样 —— 可浏览、可同步，并可按计划进行备份。

---

**相关指南：**

- [管理 Outscale 存储 — 使用 RcloneView 同步和备份文件](https://rcloneview.com/support/blog/manage-outscale-cloud-sync-backup-rcloneview)
- [管理 Scaleway 对象存储 — 使用 RcloneView 进行云同步](https://rcloneview.com/support/blog/manage-scaleway-object-storage-cloud-sync-rcloneview)
- [管理 Selectel 存储 — 使用 RcloneView 同步和备份文件](https://rcloneview.com/support/blog/manage-selectel-cloud-sync-backup-rcloneview)

<CloudSupportGrid />
