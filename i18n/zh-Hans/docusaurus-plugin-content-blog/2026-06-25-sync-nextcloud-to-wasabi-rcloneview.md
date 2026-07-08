---
slug: sync-nextcloud-to-wasabi-rcloneview
title: "将 Nextcloud 同步到 Wasabi —— 使用 RcloneView 进行云备份"
authors:
  - jay
description: "使用 RcloneView 将您的 Nextcloud 实例同步到 Wasabi S3 —— 连接 WebDAV 和 S3 远程,自动化备份任务,让自托管数据获得异地保护。"
keywords:
  - sync nextcloud to wasabi
  - nextcloud wasabi backup
  - nextcloud s3 backup gui
  - backup nextcloud to s3
  - nextcloud cloud backup rcloneview
  - wasabi s3 backup tool
  - webdav to s3 sync rcloneview
  - nextcloud off-site backup
  - rcloneview nextcloud wasabi
tags:
  - RcloneView
  - nextcloud
  - wasabi
  - cloud-sync
  - backup
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 将 Nextcloud 同步到 Wasabi —— 使用 RcloneView 进行云备份

> 自托管的 Nextcloud 实例需要异地备份 —— RcloneView 让将您的 Nextcloud 文件夹同步到 Wasabi S3 存储变得简单,并可完全自动化。

自托管 Nextcloud 服务器让您掌控自己的文件,但这种掌控也伴随着责任:一旦服务器宕机、遭到勒索软件攻击,或磁盘出现故障,您的数据也会随之丢失。同步到 Wasabi 可以为您提供持久的异地副本,且不会有意外的传输费用。RcloneView 通过 WebDAV 连接 Nextcloud,通过 S3 协议连接 Wasabi,让您能够在两者之间构建可靠的同步任务 —— 无需使用命令行。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 将您的 Nextcloud 实例连接为远程

打开 RcloneView,进入 **Remote tab > New Remote**。选择 **WebDAV** 作为远程类型,并选择 **Nextcloud** 作为供应商。按照 `https://cloud.yourdomain.com/remote.php/dav/files/username/` 的格式输入您的 Nextcloud 服务器 URL,并填写您的 Nextcloud 用户名,以及账户密码或从 Nextcloud 安全设置中生成的应用专用密码。保存该远程后,它将作为可浏览的源出现在文件浏览器中。

与仅支持挂载的工具不同,RcloneView 可以将 Nextcloud 这样的 WebDAV 源直接同步到 Wasabi 这样的 S3 兼容目标 —— 完全在免费版许可下即可实现。

<img src="/support/images/en/blog/new-remote.png" alt="Adding Nextcloud as a WebDAV remote in RcloneView" class="img-large img-center" />

连接完成后,浏览您的 Nextcloud 目录以确认连接正常。您可以查看文件名、大小和修改日期 —— 这有助于决定备份任务中要包含哪些文件夹,以及要排除哪些 Nextcloud 内部目录(例如 `trashbin`)。

## 将 Wasabi 添加为 S3 兼容远程

再次从 **Remote tab > New Remote** 进入,选择 **Amazon S3**,并选择 **Wasabi** 作为提供商。输入您的 Wasabi Access Key ID 和 Secret Access Key,选择对应的区域端点(例如 `s3.us-east-1.wasabisys.com`),并指定目标存储桶。保存后,RcloneView 可以在 Nextcloud 旁边的第二个浏览面板中打开您的 Wasabi 存储桶 —— 您可以在两者之间拖动单个文件,以在运行完整同步之前验证连接是否正常。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Nextcloud and Wasabi remotes open side by side for cloud-to-cloud backup in RcloneView" class="img-large img-center" />

由于 Wasabi 的 S3 兼容 API,RcloneView 将其视为与 Amazon S3 完全相同,因此所有同步、复制、移动和过滤操作无需额外配置即可正常工作。

## 配置同步任务

从主页选项卡点击 **Sync**,打开 4 步任务向导。在第 1 步中,将您的 Nextcloud 文件夹设置为源,将您的 Wasabi 存储桶(或子文件夹,如 `nextcloud-backup/`)设置为目标。为任务命名一个描述性的名称,例如 `nextcloud-to-wasabi-daily`。

在第 2 步中,如果您的网络连接允许,可以增加并行传输数量 —— 这可以加快同步 Nextcloud 中常见的大量小文件的速度。启用 **checksum verification(校验和验证)**,以比较文件哈希值而非仅比较文件大小,这样可以捕获之前部分上传过程中发生的任何损坏。在第 3 步中,添加过滤规则以排除 Nextcloud 的 `trashbin` 文件夹以及任何分块上传的临时文件,从而保持备份的整洁。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a recurring Nextcloud to Wasabi sync job in RcloneView" class="img-large img-center" />

使用 PLUS 许可证,第 4 步允许您添加类似 crontab 的调度计划 —— 例如每晚凌晨 2 点 —— 这样备份就可以在无需手动触发的情况下运行。调度器支持指定星期几、按月间隔以及基于步长的范围设置。

## 查看传输历史

每次运行后,**Job History** 选项卡会记录每一次执行:开始时间、持续时间、状态(Completed / Errored / Canceled)、传输的总字节数以及传输速度。如果备份似乎停滞或遗漏了文件,这个日志是首先应该查看的地方,可以轻松审查 Nextcloud 数据是否按预期到达了 Wasabi。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history log showing completed Nextcloud to Wasabi backup runs" class="img-large img-center" />

对于运行多个 Nextcloud 实例,或需要将数据备份到不同区域的 Wasabi 存储桶以实现异地冗余的场景,RcloneView 的 1:N 同步功能允许您将一个源对应多个目标,并在单个任务中一起运行。

## 快速上手

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 将您的 Nextcloud 服务器添加为 WebDAV 远程(Remote tab > New Remote > WebDAV > Nextcloud vendor)。
3. 使用您的 Access Key、Secret Key、区域端点和存储桶名称,将 Wasabi 添加为 S3 兼容远程。
4. 创建一个以 Nextcloud 为源、以您的 Wasabi 存储桶为目标的同步任务 —— 在第 2 步中启用校验和验证,以确保备份的完整性。

您自托管的 Nextcloud 数据将在 Wasabi 中获得可靠的异地副本,并自动运行,无需任何命令行脚本。

---

**相关指南:**

- [使用 RcloneView 管理 Nextcloud 云同步与备份](https://rcloneview.com/support/blog/manage-nextcloud-cloud-sync-backup-rcloneview)
- [使用 RcloneView 管理 Wasabi 云同步与备份](https://rcloneview.com/support/blog/manage-wasabi-cloud-sync-backup-rcloneview)
- [使用 RcloneView 将 Nextcloud 同步到 Backblaze B2](https://rcloneview.com/support/blog/sync-nextcloud-to-backblaze-b2-rcloneview)

<CloudSupportGrid />
