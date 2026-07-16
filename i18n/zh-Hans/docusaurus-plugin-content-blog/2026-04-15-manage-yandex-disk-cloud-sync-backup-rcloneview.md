---
slug: manage-yandex-disk-cloud-sync-backup-rcloneview
title: "管理 Yandex Disk 存储——使用 RcloneView 同步和备份文件"
authors:
  - tayson
description: "使用 RcloneView 管理 Yandex Disk——通过可靠的图形界面在 Yandex Disk 与其他云之间同步、备份和传输文件。"
keywords:
  - Yandex Disk 管理
  - Yandex Disk 同步
  - Yandex Disk 备份
  - RcloneView Yandex
  - Yandex 云存储图形界面
  - Yandex Disk 文件传输
  - 云备份工具
  - 多云同步
  - Yandex Disk rclone
  - Yandex 存储管理器
tags:
  - yandex-disk
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 管理 Yandex Disk 存储——使用 RcloneView 同步和备份文件

> Yandex Disk 为欧洲用户提供了充裕的存储空间和出色的性能表现——RcloneView 通过 OAuth 连接到 Yandex Disk，将你的 Yandex 内容纳入统一的多云文件管理器中。

Yandex Disk 提供可靠的云存储服务，在欧洲和俄罗斯用户中拥有良好的性能口碑，但过去要在 Yandex Disk 与其他平台之间传输文件，通常需要使用独立的 Yandex 客户端或手动下载。RcloneView 通过浏览器 OAuth 直接连接 Yandex Disk，让你在无需安装任何额外软件的情况下，与其他云远程一起，通过统一的文件管理界面进行操作。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 在 RcloneView 中设置 Yandex Disk

在 RcloneView 中点击 **Remote tab > New Remote**，然后从列表中选择 **Yandex Disk**。身份验证通过浏览器 OAuth 流程完成——默认浏览器中会打开 Yandex 登录页面，登录你的账户后，RcloneView 会自动接收访问令牌。无需手动生成密钥或进行 API 配置。

<img src="/support/images/en/blog/new-remote.png" alt="Adding Yandex Disk as a new remote in RcloneView" class="img-large img-center" />

连接完成后，你的 Yandex Disk 会作为可浏览的远程出现在资源管理面板中。你可以查看文件夹和文件、检查大小和修改日期，并直接在界面中创建新文件夹。缩略图视图让你无需打开浏览器或 Yandex 应用，即可轻松浏览存储在 Yandex Disk 上的照片库。

## 将 Yandex Disk 文件同步到本地或其他云

对于将项目文件存储在 Yandex Disk 上的内容创作者来说，设置到本地外接硬盘的单向同步可以创建一个在网络中断时仍然可用的离线备份。在 **Job Manager** 中配置同步任务：源为你的 Yandex Disk 文件夹，目标为你的外接硬盘路径。此后的每次运行只会传输发生变化的文件——即使面对庞大的文件库，同步依然快速。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a sync job from Yandex Disk in RcloneView Job Manager" class="img-large img-center" />

跨平台传输同样简单。一个使用 Yandex Disk 进行欧洲文件分发、同时使用 Google Drive 进行协作编辑的团队，可以配置两个远程之间的定期同步，确保两个平台上的内容保持一致，而无需手动上传。RcloneView 会通过比较文件大小和修改时间，仅传输新增或已更改的内容。

## 备份到 Yandex Disk

对于已经存储在其他云上的文件，Yandex Disk 也是一个理想的辅助备份目标。一位主要存储位于 Google Drive 的摄影师，可以使用 RcloneView 每月将文件副本推送到 Yandex Disk——从而建立一套多提供商的备份策略，以防某个单一云服务出现故障或访问受限。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling Yandex Disk backup jobs in RcloneView" class="img-large img-center" />

使用 PLUS 许可证时，可以设置计划任务，自动运行备份——按天、按周，或按任意基于 cron 的时间间隔。**Job History** 标签页会记录每次运行的结果：传输大小、速度、文件数量和完成状态，为你提供每个备份周期的完整审计记录。

## 开始使用

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 进入 **Remote tab > New Remote**，选择 **Yandex Disk**，并通过浏览器进行身份验证。
3. 在资源管理面板中浏览你的 Yandex Disk 文件。
4. 在 **Job Manager** 中创建同步任务，将文件备份到本地存储或其他云。

通过 RcloneView 管理 Yandex Disk，意味着无论是备份正在进行的项目，还是迁移文件到新的提供商，你都可以使用同一个统一界面来管理所有云存储。

---

**相关指南：**

- [使用 RcloneView 将 Yandex Disk 与 Google Drive 同步](https://rcloneview.com/support/blog/sync-yandex-disk-with-google-drive-using-rcloneview)
- [管理 Dropbox 云存储——使用 RcloneView 同步和备份](https://rcloneview.com/support/blog/manage-dropbox-cloud-sync-backup-rcloneview)
- [使用 RcloneView 传输 Yandex Disk 与 Google Drive 文件](https://rcloneview.com/support/blog/transfer-yandex-and-google-drive-with-rcloneview)

<CloudSupportGrid />
