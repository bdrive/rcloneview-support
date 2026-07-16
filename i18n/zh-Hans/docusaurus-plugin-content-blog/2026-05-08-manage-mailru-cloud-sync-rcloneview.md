---
slug: manage-mailru-cloud-sync-rcloneview
title: "管理 Mail.ru 云存储 — 使用 RcloneView 同步和备份文件"
authors:
  - tayson
description: "了解如何使用 RcloneView 连接和管理 Mail.ru 云存储。通过简洁的图形界面同步、备份和传输 Mail.ru 文件,无需任何命令行操作。"
keywords:
  - Mail.ru cloud storage RcloneView
  - Mail.ru cloud sync GUI
  - manage Mail.ru files
  - Mail.ru backup tool
  - rclone Mail.ru GUI
  - Mail.ru file transfer
  - cloud storage management
  - Mail.ru sync desktop app
tags:
  - RcloneView
  - mailru
  - cloud-storage
  - cloud-sync
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 管理 Mail.ru 云存储 — 使用 RcloneView 同步和备份文件

> 将 Mail.ru 云存储连接到 RcloneView,管理您的文件、运行自动化备份,并在不同服务商之间同步数据 — 全部通过一个桌面图形界面完成。

Mail.ru 云存储提供了慷慨的免费存储空间,在俄罗斯及周边国家被广泛使用。如果没有合适的工具,高效管理它可能会很有挑战性。RcloneView 弥补了这一差距,通过 rclone 成熟的 Mail.ru 后端连接到 Mail.ru 云存储,并以熟悉的双栏浏览器界面呈现您的文件。无需任何命令行知识。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 在 RcloneView 中添加 Mail.ru 云存储作为远程

在 RcloneView 中设置 Mail.ru 只需不到两分钟。打开菜单栏中的 **Remote 选项卡**,点击 **New Remote**。在服务商列表中滚动查找 Mail.ru Cloud(或在搜索框中输入 "mail"),然后输入您的 Mail.ru 账户凭据 — 用户名和密码。RcloneView 会将这些信息传递给内置的 rclone 实例,由其负责对 Mail.ru API 进行身份验证。

保存后,该远程会立即出现在您的浏览器面板中。您可以浏览文件夹、预览缩略图、查看文件元数据,并像操作本地驱动器一样导航文件夹树。面包屑路径栏提供可点击的层级结构,让您快速深入嵌套目录。

<img src="/support/images/en/blog/new-remote.png" alt="Adding Mail.ru Cloud as a new remote in RcloneView" class="img-large img-center" />

## 将 Mail.ru 文件同步到其他云存储或本地驱动器

RcloneView 最强大的功能之一是无缝的云到云传输。如果您需要将文件从 Mail.ru 云存储复制到 Google Drive、Backblaze B2 或本地文件夹,只需在双栏浏览器中并排打开两个位置。将文件从一个面板拖到另一个面板,或右键点击选择 **Copy**,然后在目标面板中选择 **Paste**。

对于周期性备份,请使用内置的任务管理器(Job Manager)。定义一个以 Mail.ru 为源、以您首选目标为终点的同步或复制任务。配置传输并发数,并启用校验和验证,以捕获传输过程中出现的任何损坏文件。使用 PLUS 许可证,您可以按照类似 crontab 的定时器安排这些任务,让备份自动运行,无需任何手动干预。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a Mail.ru sync job in RcloneView Job Manager" class="img-large img-center" />

## 监控传输并查看历史记录

RcloneView 窗口底部的 **Transferring** 选项卡会显示任何活动任务的实时进度 — 文件数量、已传输字节数以及当前速度。如果需要暂停或调整设置,您可以随时取消正在运行的任务。

每个任务完成后,**Job History** 选项卡会保留完整记录:开始时间、持续时长、传输总大小以及最终状态(已完成、出错或已取消)。对于将客户交付成果存储在 Mail.ru 上的摄影业务来说,这份历史记录提供了可靠的审计跟踪,让您能轻松发现备份任务是否在夜间失败。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history log showing Mail.ru sync results" class="img-large img-center" />

## 快速上手

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 打开 **Remote 选项卡 → New Remote**,选择 Mail.ru Cloud,并输入您的凭据。
3. 在浏览器面板中浏览您的 Mail.ru 文件,并将项目拖拽到任意目标位置。
4. 在 **任务管理器(Job Manager)** 中创建同步任务,实现自动化周期性备份。

有了 RcloneView,Mail.ru 云存储能够完美融入您的多云工作流程 — 无需终端。

---

**相关指南:**

- [使用 RcloneView 管理 Yandex Disk 云存储](https://rcloneview.com/support/blog/manage-yandex-disk-cloud-sync-backup-rcloneview)
- [将 Mail.ru 云存储传输到 Google Drive 和 S3](https://rcloneview.com/support/blog/transfer-mailru-cloud-google-drive-s3-rcloneview)
- [使用 RcloneView 管理多个云账户](https://rcloneview.com/support/blog/manage-multiple-cloud-accounts-with-rcloneview)

<CloudSupportGrid />
