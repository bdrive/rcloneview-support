---
slug: manage-webdav-cloud-sync-backup-rcloneview
title: "管理 WebDAV 服务器存储 — 使用 RcloneView 同步和备份文件"
authors:
  - casey
description: "使用 RcloneView 连接、同步并备份任意 WebDAV 服务器。与 90 多个云存储提供商一起管理 Nextcloud、ownCloud 和企业级 WebDAV 端点。"
keywords:
  - WebDAV sync RcloneView
  - manage WebDAV cloud storage
  - WebDAV file transfer GUI
  - Nextcloud WebDAV backup
  - sync WebDAV to cloud storage
  - ownCloud backup tool
  - WebDAV rclone GUI
  - WebDAV file management desktop
  - cross-platform WebDAV client
  - WebDAV cloud backup automation
tags:
  - webdav
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 管理 WebDAV 服务器存储 — 使用 RcloneView 同步和备份文件

> 将任意 WebDAV 端点连接到 RcloneView，通过简洁的图形界面掌控您的文件 — 无需接触命令行即可完成同步、备份和传输。

WebDAV（Web 分布式创作和版本管理）是许多广泛部署的自托管文件平台的基础。Nextcloud、ownCloud、SharePoint 以及众多企业内容管理系统都会暴露 WebDAV 端点。管理这些服务器通常意味着要与命令行工具或不稳定的桌面同步客户端周旋。RcloneView 将 WebDAV 远程与其他任何云存储提供商同等对待 — 支持拖放传输、计划同步任务和实时传输监控 — 全部在您用来管理 Amazon S3 或 Google Drive 的同一界面中完成。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 几分钟内连接您的 WebDAV 服务器

在 RcloneView 中添加 WebDAV 远程只需不到两分钟。点击 **Remote tab > New Remote**，选择 WebDAV 作为存储类型，然后输入服务器 URL、用户名和密码。对于使用自签名 SSL 证书的服务器，可在 **Settings > Embedded Rclone** 的 **Global Rclone Flags** 字段中添加 `--no-check-certificate` 以跳过证书验证。保存后，您的 WebDAV 服务器会与您配置的其他所有云账户一起出现在浏览器面板中。

这种统一视图对于同时运行 Nextcloud 用于内部协作、并使用公有云存储进行异地备份的团队尤其有价值。一家拥有自托管 Nextcloud 服务器的视频制作工作室，可以在左侧面板浏览项目文件，在右侧面板查看 Backblaze B2 存储桶 — 然后直接拖动完成的交付成果，或定义一个计划同步任务，让夜间归档自动完成。

<img src="/support/images/en/blog/new-remote.png" alt="Adding a WebDAV remote in RcloneView Remote Manager" class="img-large img-center" />

## 将 WebDAV 同步到任意云存储提供商

连接好 WebDAV 服务器后，即可在 Job Manager 中创建同步任务，将文件传输到 RcloneView 支持的 90 多个云存储提供商中的任意一个。四步同步向导会引导您选择源和目标远程、配置并发传输数量和校验和验证、应用文件大小或时间过滤器，并可选地设置任务计划。

对于备份场景，请在同步方向字段中选择 **"Modifying destination only"**。这样可以让云备份保持镜像 WebDAV 服务器的状态，而不会引入反向变更。当数据完整性至关重要时 — 例如法律文档存档或医学影像库 — 请启用校验和选项，让 RcloneView 在每次运行时都通过哈希值和文件大小来验证文件，而不仅仅依据修改日期。

在首次同步前，建议使用 Dry Run 功能：它会准确列出目标位置将被复制或删除的文件，而不会实际执行任何更改。整个过程只需几秒钟，却能有效防止意外覆盖。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring a sync job from WebDAV server to cloud storage in RcloneView" class="img-large img-center" />

## 按计划自动执行备份（PLUS 许可证）

手动同步可以处理即时传输，但要让 WebDAV 备份真正可靠，还需要依靠计划自动化。拥有 PLUS 许可证后，RcloneView 的 crontab 风格调度器可让您配置任务按夜间、每小时或任意自定义间隔运行。计划模拟器会在您保存前预览接下来十次执行时间，让您对备份触发时机一目了然，不会有任何意外。

Job History 会记录每次运行的结果：开始时间、持续时长、传输速度、文件数量以及状态（Completed / Errored / Canceled）。如果计划任务遇到暂时性网络故障，RcloneView 会按您配置的重试次数进行重试，之后才会将任务标记为出错。对于管理大规模 Nextcloud 或 ownCloud 部署的组织来说，这样无需人工监控即可生成可靠的审计记录。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Setting up a scheduled sync job from WebDAV to cloud storage in RcloneView" class="img-large img-center" />

## 并排浏览与比较文件

RcloneView 的多面板浏览器可让您同时浏览 WebDAV 服务器和云存储目标。Folder Compare 工具能精确识别两侧存在差异的文件 — 显示仅存在于左侧、仅存在于右侧或大小不一致的文件。对于增量备份验证，这比手动检查传输日志更快、更可靠。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Comparing WebDAV server files with cloud backup using Folder Compare in RcloneView" class="img-large img-center" />

## 快速上手

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 打开 **Remote tab > New Remote**，选择 WebDAV，并输入您的服务器 URL 和凭据。
3. 在 Job Manager 中创建同步任务，将您的 WebDAV 远程设为源，将您偏好的云存储提供商设为目标。
4. 运行 **Dry Run** 预览将要传输的内容，然后激活任务或设置计划。

无论您是要保护自托管的 Nextcloud 实例，还是要将企业内容平台与长期云归档存储连接起来，RcloneView 都能让 WebDAV 服务器成为您多云策略中的一等公民。

---

**相关指南：**

- [管理 SFTP 服务器存储 — 使用 RcloneView 同步和备份文件](https://rcloneview.com/support/blog/manage-sftp-server-cloud-sync-rcloneview)
- [连接 WebDAV 服务器 — 使用 RcloneView 进行云同步](https://rcloneview.com/support/blog/connect-webdav-server-cloud-sync-rcloneview)
- [管理 Nextcloud — 使用 RcloneView 进行云同步与备份](https://rcloneview.com/support/blog/manage-nextcloud-cloud-sync-backup-rcloneview)

<CloudSupportGrid />
