---
slug: sync-hidrive-to-onedrive-rcloneview
title: "将 HiDrive 同步到 OneDrive —— 使用 RcloneView 进行云备份"
authors:
  - tayson
description: "使用 RcloneView 将文件从 HiDrive 同步到 OneDrive。无需先下载到本地，即可将 Strato HiDrive 存储直接传输到 Microsoft OneDrive。"
keywords:
  - HiDrive to OneDrive
  - sync HiDrive OneDrive
  - HiDrive migration
  - Strato HiDrive sync
  - cloud-to-cloud transfer
  - HiDrive RcloneView
  - OneDrive backup
  - European cloud migration
  - RcloneView sync
  - cloud storage transfer
tags:
  - hidrive
  - onedrive
  - cloud-to-cloud
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 将 HiDrive 同步到 OneDrive —— 使用 RcloneView 进行云备份

> 使用 RcloneView 将文件从 Strato HiDrive 直接传输到 Microsoft OneDrive —— 直接进行云到云同步，无需本地下载。

Strato 旗下的 HiDrive 是一款广受欢迎的欧洲云存储服务,深受需要符合 GDPR 数据驻留要求的企业青睐。随着各组织采用 Microsoft 365,许多企业希望将 HiDrive 中的文件整合到 OneDrive,以便在 Teams 和 SharePoint 中实现无缝协作。RcloneView 让这一迁移过程变得简单:将两项服务都添加为远程,然后通过 RcloneView 的图形界面直接将 HiDrive 文件夹同步到 OneDrive,无需将文件下载到中间的本地设备。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 连接 HiDrive 和 OneDrive

HiDrive 在 rclone 中使用 OAuth 认证 —— 当你在 RcloneView 中添加 HiDrive 作为远程时,会弹出一个浏览器窗口,供你使用 Strato HiDrive 账户凭据登录并授权访问。OneDrive 也采用相同的 OAuth 流程:从服务商列表中选择 Microsoft OneDrive,通过你的 Microsoft 账户完成身份验证,远程即配置完成。

两个远程都激活后,在 RcloneView 的双面板浏览器中并排打开它们。你的 HiDrive 文件夹结构显示在一侧,OneDrive 显示在另一侧。这种可视化布局有助于你规划迁移方案:在构建同步任务之前,先确认哪些 HiDrive 文件夹应映射到哪些 OneDrive 目标位置。

<img src="/support/images/en/blog/new-remote.png" alt="Adding HiDrive and OneDrive remotes in RcloneView" class="img-large img-center" />

## 配置同步任务

使用同步向导创建 HiDrive 到 OneDrive 的传输任务。选择你的 HiDrive 源文件夹和 OneDrive 目标文件夹,然后按照配置步骤逐步完成。单向同步(默认的稳定选项)会将你的 HiDrive 内容镜像到 OneDrive —— 新增和更改的文件会被复制,并且可以选择将从 HiDrive 中删除的文件同时从 OneDrive 中移除。

对于整合项目归档的团队而言,过滤步骤非常有用:可以设置最大文件年龄,仅迁移过去两年内创建或修改的文件,或者使用文件类型过滤器,仅包含文档、电子表格和演示文稿,同时排除大型视频文件。像 `.tmp` 或 `/.git/` 这样的自定义过滤规则可以让你在迁移中排除工作区的杂项文件。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Syncing HiDrive folders to OneDrive with RcloneView" class="img-large img-center" />

在实际传输之前运行试运行模式,以确认文件列表符合预期。该模拟会准确显示将要复制的文件,而不会进行任何实际更改 —— 在不同服务商之间迁移业务数据时,这是值得执行的一步。

## 安排持续同步

对于在过渡期内并行运行 HiDrive 和 OneDrive 的团队,基于计划的同步(PLUS 许可证)可让两项服务保持同步。设置一个重复计划 —— 每天、每周两次或自定义的 cron 间隔 —— RcloneView 会在后台处理同步运行。任务历史记录会记录每次执行的开始时间、已传输的文件以及完成状态。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling recurring HiDrive to OneDrive sync in RcloneView" class="img-large img-center" />

如果你需要确认同步是否正确完成,可以使用文件夹对比功能,检查 OneDrive 是否已包含来自 HiDrive 的预期文件。对比视图会显示仅左侧存在、仅右侧存在以及大小不同的文件,帮助你发现任何需要重新传输的内容。

## 快速开始

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 在远程标签页中,通过 OAuth 浏览器登录流程添加 HiDrive。
3. 通过 OAuth 浏览器登录流程添加 OneDrive。
4. 使用同步向导将 HiDrive 文件夹传输到 OneDrive,并先使用试运行进行预览。

通过 RcloneView 从 HiDrive 迁移到 OneDrive,整个过程始终由图形界面驱动、可审计,且不消耗任何中间本地存储空间。

---

**相关指南:**

- [使用 RcloneView 管理 HiDrive Strato 云同步](https://rcloneview.com/support/blog/manage-hidrive-strato-sync-cloud-rcloneview)
- [使用 RcloneView 管理 OneDrive 云同步与备份](https://rcloneview.com/support/blog/manage-onedrive-cloud-sync-backup-rcloneview)
- [使用 RcloneView 进行云到云迁移](https://rcloneview.com/support/blog/cloud-to-cloud-migration-rcloneview)

<CloudSupportGrid />
