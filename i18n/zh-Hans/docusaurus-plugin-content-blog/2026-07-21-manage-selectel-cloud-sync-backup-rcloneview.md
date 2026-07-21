---
slug: manage-selectel-cloud-sync-backup-rcloneview
title: "管理Selectel存储 — 使用RcloneView同步与备份文件"
authors:
  - alex
description: "将Selectel Object Storage连接到RcloneView,在Windows、macOS和Linux上实现S3兼容的文件浏览、同步、挂载与备份。"
keywords:
  - Selectel存储
  - Selectel Object Storage
  - S3兼容存储GUI
  - RcloneView Selectel
  - 云备份软件
  - Selectel云同步
  - 云存储GUI管理
  - 对象存储同步工具
  - 多云文件管理器
  - S3凭证设置
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

# 管理Selectel存储 — 使用RcloneView同步与备份文件

> 通过图形界面浏览、同步并备份Selectel Object Storage存储桶,无需手动在配置文件中编辑S3凭证。

Selectel Object Storage通过rclone的S3兼容协议进行访问,这意味着连接时需要一次性正确输入Access Key、Secret Key和端点。RcloneView将这一设置过程转化为引导式表单,并配合完整的文件浏览器、同步引擎和任务调度器,让已经在Selectel上存储数据的团队能够以管理其他任何远程存储相同的方式来管理它。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 将Selectel连接为S3兼容远程存储

在RcloneView中添加Selectel的流程,与用于其他S3兼容服务的凭证输入流程相同:打开Remote标签页 > New Remote,选择S3兼容选项,然后输入Access Key ID、Secret Access Key以及Selectel的端点。如果你的Selectel集成已经通过服务器上共享的rclone守护进程运行,Connect Manager还可以让RcloneView指向外部rclone实例,而不使用内置rclone。

保存后,该远程存储会在Explorer面板中以独立标签页的形式出现,与已配置的其他云端或本地存储并列。Alias远程可以将层级很深的存储桶路径缩短为易于日常浏览的短名称。

<img src="/support/images/en/blog/new-remote.png" alt="Adding a Selectel S3-compatible remote in RcloneView" class="img-large img-center" />

## 浏览、同步与备份Selectel数据

远程连接完成后,File Explorer的双窗格布局可让你将Selectel上的内容与本地文件夹或另一个云端远程并排比较。在不同远程之间拖动文件会触发复制操作,右键菜单则涵盖重命名、删除、获取大小以及下载/上传等日常文件管理功能。

对于定期备份,Sync向导会在四个步骤中依次引导你完成源与目标的选择、传输并发数以及过滤规则的设置,并提供最大文件时长以及针对媒体或文档类型的预定义过滤器等选项。像Selectel这样的S3兼容服务,在FREE授权下即可获得完整的读写访问 — 无需升级即可将数据写回存储桶。1:N同步可以在一次任务中将同一个Selectel存储桶镜像到多个目标,当备份需要同时落地到本地磁盘和第二个云端远程时非常有用。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring a sync job between Selectel storage and another remote" class="img-large img-center" />

## 自动化定期的Selectel备份

Job Manager将每一个同步、复制或移动任务集中在一个列表中管理,每次运行都会连同状态、传输大小和文件数量一起记录在Job History中。Dry Run会在实际执行传输之前,精确预览哪些文件将被复制或删除 — 在首次对新的Selectel存储桶执行大规模同步之前,这一步很值得检查。

PLUS授权用户可以为任务附加crontab风格的计划,使Selectel备份按固定周期自动运行,并提供模拟选项,可在保存计划前预览接下来的执行时间。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a recurring backup job for Selectel storage" class="img-large img-center" />

## 将Selectel挂载为本地磁盘

Selectel存储也可以挂载为虚拟磁盘,让其他桌面应用像访问本地文件一样读写存储桶内容。挂载配置包括VFS缓存模式(默认:writes)、缓存大小限制和只读模式,可以从远程的面板工具栏或专用的Mount Manager启动挂载。

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="Mounting a Selectel bucket as a local drive in RcloneView" class="img-large img-center" />

## 快速上手

1. 从[rcloneview.com](https://rcloneview.com/src/download.html)**下载RcloneView**。
2. 打开Remote标签页 > New Remote,选择S3兼容选项,输入你的Selectel凭证和端点。
3. 使用Folder Compare或拖放操作,将现有数据迁移到Selectel,然后设置Sync任务以进行持续备份。
4. 将任务添加到Job Manager,在PLUS授权下附加计划,使备份无需人工干预即可运行。

配置好远程存储后,Selectel存储的表现就像RcloneView中的其他任何连接一样 — 可浏览、可同步、可挂载,并可随时按计划完成备份。

---

**相关指南:**

- [管理IONOS对象存储 — 使用RcloneView同步与备份文件](https://rcloneview.com/support/blog/manage-ionos-object-storage-cloud-sync-rcloneview)
- [管理Vultr对象存储 — 使用RcloneView同步与备份文件](https://rcloneview.com/support/blog/manage-vultr-object-storage-cloud-sync-backup-rcloneview)
- [管理Linode对象存储 — 使用RcloneView同步与备份文件](https://rcloneview.com/support/blog/manage-linode-object-storage-cloud-sync-backup-rcloneview)

<CloudSupportGrid />
