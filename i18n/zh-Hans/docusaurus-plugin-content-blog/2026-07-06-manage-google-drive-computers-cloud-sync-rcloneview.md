---
slug: manage-google-drive-computers-cloud-sync-rcloneview
title: "管理 Google Drive Computers ——使用 RcloneView 同步与备份文件"
authors:
  - jay
description: "在 RcloneView 中连接并备份 Google Drive Computers 文件夹，将桌面备份数据同步到 90 多个云存储提供商中的任意一个,全部在一个 GUI 中完成。"
keywords:
  - google drive computers
  - google drive computers backup
  - root_folder_id google drive
  - rcloneview google drive computers
  - backup and sync computers folder
  - google drive desktop backup
  - google drive computers sync
  - manage google drive computers
tags:
  - RcloneView
  - google-drive
  - cloud-storage
  - cloud-sync
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 管理 Google Drive Computers ——使用 RcloneView 同步与备份文件

> Google 的 Backup and Sync 应用推送到 Drive 中的桌面文件夹,位于你常规的 Drive 目录树之外——RcloneView 可以直接连接到这些文件夹,让它们像其他任何远程一样被浏览、复制和备份。

当一台工作站运行 Google Drive 桌面客户端并启用了"备份我的电脑"文件夹功能时,这些文件会被存放到 Drive 的一个特殊区域,标准远程默认无法看到——它是通过一个计算机 ID 来寻址的,而不是常规的文件夹路径。这使得从 GUI 中访问它变得很麻烦,也难以纳入更广泛的备份或归档策略。RcloneView 将其暴露为一个可配置的远程设置,这样 Computers 备份就变成了另一个可以浏览、筛选和复制的数据源,与你常规的云存储并列使用。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 连接到 Computers 备份

Google Drive 的常规远程配置只会显示你自己的 Drive 根目录以及你在其中创建的文件夹。要访问 Computers 备份,RcloneView 的新建远程向导接受一个 `root_folder_id` 值,该值指向特定计算机的备份 ID——设置完成后,该机器已备份的文件夹(桌面、文档,或桌面客户端中所选的任何内容)会像普通文件夹树一样出现在浏览器面板中。这对于管理多台员工笔记本电脑的 IT 团队,或是想要在不登录浏览器的情况下检查某台机器的 Backup and Sync 客户端到底捕获了哪些内容的任何人来说,都非常有用。

<img src="/support/images/en/blog/new-remote.png" alt="Configuring a Google Drive remote with root_folder_id to access a Computers backup in RcloneView" class="img-large img-center" />

连接完成后,该远程支持与其他任何 Google Drive 连接相同的文件操作:缩略图预览、文件夹树导航、右键复制/下载,以及用于审计某台机器已推送到 Drive 多少数据的获取大小功能。RcloneView 可以在同一个窗口中挂载并同步 90 多个云存储提供商,因此 Computers 备份可以位于一个面板中,而目标归档则位于另一个面板中。

## 将多台机器整合到一个归档中

备份多台工作站的组织最终会得到每台机器一个的 Computers 文件夹,每个都由各自的 ID 寻址,这使得很难获得"公司笔记本电脑备份的所有内容"这样的统一视图。为每台机器单独设置一个远程,并运行定时的单向同步任务,将数据同步到一个共享目标——本地 NAS、S3 存储桶,或第二个 Drive 账户——可以将这些分散的备份数据整合到一个你真正掌控的地方,而不是让它们各自锁在每个员工的 Drive 视图中。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Syncing a Google Drive Computers backup to a consolidated archive destination in RcloneView" class="img-large img-center" />

同步向导第 3 步中的筛选设置有助于让这些任务保持高效——排除临时文件、系统缓存或非必要的扩展名,可以让整合后的归档只保留真正值得保留的内容,而不是桌面客户端捕获的每个文件的完整镜像。

## 安排定期检查

Computers 备份并非静态的——每次桌面客户端运行自己的同步周期时,它都会增长,因此一次性复制到你的归档中很快就会过时。PLUS 许可证用户可以为同步任务附加类似 crontab 的计划,以便新备份的文件能够按周期自动被拾取。任务历史随后会准确显示每台机器的 Computers 文件夹最后一次被捕获的时间、传输大小,以及该次运行是否顺利完成。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a recurring sync job for a Google Drive Computers remote in RcloneView" class="img-large img-center" />

## 开始使用

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 创建一个新的 Google Drive 远程,并将 `root_folder_id` 设置为目标计算机的备份 ID。
3. 浏览浏览器面板,确认预期的桌面文件夹已出现。
4. 设置一个单向同步任务,指向整合后的归档目标,如果你使用的是 PLUS 许可证,可以为其设置计划。

桌面备份数据不应该被困在一个只能通过浏览器才能看到的计算机 ID 之后——将它纳入 RcloneView,可以让它获得与你其余云存储同等的可见性和保护。

---

**相关指南:**

- [管理 Google Drive 存储 ——使用 RcloneView 同步与备份文件](https://rcloneview.com/support/blog/manage-google-drive-cloud-sync-backup-rcloneview)
- [管理 Google Drive 共享给我的内容 ——使用 RcloneView 同步与备份文件](https://rcloneview.com/support/blog/manage-google-drive-shared-with-me-rcloneview)
- [使用 RcloneView 将 Google Drive 挂载为本地驱动器](https://rcloneview.com/support/blog/mount-google-drive-as-local-drive-rcloneview)

<CloudSupportGrid />
