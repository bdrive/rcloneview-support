---
slug: manage-hidrive-cloud-sync-backup-rcloneview
title: "管理 HiDrive 存储 — 使用 RcloneView 同步和备份文件"
authors:
  - tayson
description: "了解如何使用 RcloneView 连接、同步和备份 HiDrive 云存储。无需任何 CLI 命令,即可通过 GUI 管理所有 HiDrive 文件。"
keywords:
  - HiDrive RcloneView
  - HiDrive cloud sync
  - HiDrive backup
  - STRATO HiDrive management
  - HiDrive file transfer
  - rclone HiDrive GUI
  - HiDrive sync tool
  - cloud storage management HiDrive
tags:
  - RcloneView
  - hidrive
  - cloud-storage
  - cloud-sync
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 管理 HiDrive 存储 — 使用 RcloneView 同步和备份文件

> RcloneView 为 HiDrive 带来了完整的 GUI 控制,让你无需打开命令行即可浏览、同步、备份和调度传输任务。

HiDrive 由 STRATO 提供,并在欧洲各地的数据中心运营,是注重隐私的用户以及需要遵守 GDPR 的企业的热门选择。通过 rclone 以编程方式管理 HiDrive 一直是可行的,但 RcloneView 将这种能力封装在简洁的界面中——让文件传输、计划备份和跨云同步对 Windows、macOS 或 Linux 上的任何人来说都变得触手可及。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 将 HiDrive 连接到 RcloneView

在 RcloneView 中添加 HiDrive 作为远程非常简单。点击 **Remote tab → New Remote**,在提供商列表中滚动找到 HiDrive,然后按照 OAuth 浏览器登录流程操作。RcloneView 会打开你的默认浏览器,使用你的 STRATO 凭据进行身份验证,远程将自动保存——无需手动复制令牌。

连接成功后,你的 HiDrive 文件夹会立即出现在 Explorer 面板中。你可以打开多个标签页,将本地文件夹与 HiDrive 备份进行比较,或者拆分视图,将 HiDrive 与另一个云(如 Amazon S3)并排显示。

<img src="/support/images/en/blog/new-remote.png" alt="Adding HiDrive as a new remote in RcloneView" class="img-large img-center" />

HiDrive 通过 RcloneView 支持标准文件操作:上传、下载、重命名、删除、新建文件夹以及生成公开链接。可以直接将文件从 Windows Explorer 拖放到 HiDrive Explorer 面板中进行上传,或在面板之间拖动以触发云到云的复制。

## 调度自动化的 HiDrive 备份

对于将项目存档或客户交付成果存储在 HiDrive 上的企业而言,自动化备份至关重要。RcloneView 的 Job Manager(PLUS 许可证)允许你配置类似 crontab 的计划——例如,每天凌晨 2:00 将本地 `D:\Projects` 文件夹同步到 `hidrive:Backups/Projects`。

4 步同步向导将引导你完成源和目标的选择、传输并发设置、文件过滤器以及计划安排。在第 2 步启用校验和验证,以逐字节确认文件完整性,而不是仅依赖修改时间——在同步到欧洲服务器时,时区差异可能导致误判不匹配,因此这一点尤为重要。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Setting up a scheduled HiDrive backup job in RcloneView" class="img-large img-center" />

在首次正式同步之前,使用 Dry Run 选项预览将要复制或删除的具体文件。在设置单向同步(目标文件可能会被覆盖)时,这一点尤其有价值。

## 监控传输和作业历史

RcloneView 底部的 **Transferring** 标签页可让你实时查看活动中的 HiDrive 传输:文件数量、传输速度、已传输字节数以及已用时间。如果作业因网络故障而失败,RcloneView 会自动重试(默认:3 次重试)。

**Job History** 标签页保存了过往运行的完整日志——执行类型(手动或计划)、开始时间、持续时间、状态以及传输的总大小。对于需要证明定期开展数据保护活动的合规团队来说,这份审计记录立即就能派上用场。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Reviewing HiDrive backup job history in RcloneView" class="img-large img-center" />

## 快速上手

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 打开 RcloneView,点击 **Remote tab → New Remote**,选择 HiDrive,并完成 OAuth 登录。
3. 使用 Explorer 面板浏览你的 HiDrive 文件夹,验证连接是否成功。
4. 打开 **Job Manager**,创建一个从本地驱动器到 HiDrive 的新同步作业,并设置计划。

有了 RcloneView,HiDrive 将成为你备份策略中一个全面托管的部分——自动进行调度、监控和验证。

---

**相关指南:**

- [管理 OneDrive 存储 — 使用 RcloneView 同步和备份文件](https://rcloneview.com/support/blog/manage-onedrive-cloud-sync-backup-rcloneview)
- [管理 Jottacloud — 使用 RcloneView 进行云同步和备份](https://rcloneview.com/support/blog/manage-jottacloud-cloud-sync-backup-rcloneview)
- [使用 RcloneView 自动化每日云备份](https://rcloneview.com/support/blog/automate-daily-cloud-backups-with-rcloneview)

<CloudSupportGrid />
