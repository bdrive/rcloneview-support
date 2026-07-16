---
slug: manage-premiumize-me-cloud-sync-backup-rcloneview
title: "管理 Premiumize.me 存储 — 使用 RcloneView 同步和备份文件"
authors:
  - tayson
description: "通过 OAuth 浏览器登录将 Premiumize.me 连接到 RcloneView，并将存储的文件同步到任何其他云服务商，以便进行备份和长期管理。"
keywords:
  - premiumize.me RcloneView
  - premiumize cloud sync
  - premiumize backup
  - manage premiumize files
  - premiumize rclone GUI
  - premiumize media storage
  - cloud transfer premiumize
  - premiumize file management
tags:
  - media
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 管理 Premiumize.me 存储 — 使用 RcloneView 同步和备份文件

> Premiumize.me 将优质文件托管与个人云存储结合在一起 — RcloneView 让你可以通过简洁的 GUI 管理和备份这些内容。

Premiumize.me 以优质链接生成器和云下载服务而闻名，但它同时也提供个人云存储，用于保存你获取的内容。如果你用它来存储媒体文件、下载内容或项目文件，最终你会需要一种方式将这些文件移动出去 —— 转移到另一个云服务进行归档，或存储到本地以便离线访问。RcloneView 通过 OAuth 浏览器登录连接到 Premiumize.me，因此设置只需不到一分钟。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 通过 OAuth 连接 Premiumize.me

启动 RcloneView 并打开 **远程管理器**（Remote Manager）。点击 **新建远程**（New Remote），在服务商列表中找到 **Premiumize**。选择它后，RcloneView 会打开你的默认浏览器，并将你重定向到 Premiumize.me 的 OAuth 授权页面。登录并授予访问权限 —— RcloneView 会将令牌保存在本地，因此除非你撤销授权，否则无需再次授权。

授权完成后，该远程会出现在你的远程管理器列表中。双击即可在文件浏览器中打开它。你在该服务中积累的所有文件夹和文件都会加载到你的 Premiumize.me 文件树中。

<img src="/support/images/en/blog/new-remote.png" alt="Creating a Premiumize.me remote in RcloneView" class="img-large img-center" />

## 浏览你的 Premiumize.me 资料库

RcloneView 的文件浏览器提供了一个熟悉的双栏布局。你可以在一侧浏览 Premiumize.me 存储，另一侧则是任何其他已配置的远程 —— Google Drive、Backblaze B2 或本地文件夹。你可以选择多个文件，右键点击进行复制或移动，并在传输面板中跟踪进度。

对于媒体文件较多的资料库，**缩略图视图**（Thumbnail View）模式会以网格形式显示图片预览，这在你想要在传输前直观识别 Premiumize.me 存储中的照片或视频缩略图时非常有帮助。

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="Browsing and transferring Premiumize.me files in RcloneView" class="img-large img-center" />

## 将 Premiumize.me 同步到另一个云

手动浏览文件适用于偶尔的移动操作，但对于定期备份，**任务**（Job）系统才是正确的工具。前往 **任务**（Jobs），点击 **新建任务**（New Job），并将 Premiumize.me 设置为源。选择任意目标远程 —— Backblaze B2 是长期媒体归档的经济之选，而 Google Drive 则更适合需要从移动设备访问文件的场景。

在任务向导的第二步中，你可以配置 **传输选项**：设置同时传输的数量，启用或禁用校验和，并打开 **模拟运行**（Dry Run）以在实际移动任何内容之前预览将要复制的内容。如果你的 Premiumize.me 存储是随着时间推移自然增长的，而你并不确定其确切结构，这一功能会特别有用。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Configuring and running a Premiumize.me backup job" class="img-large img-center" />

## 监控与任务历史

任务运行完成后，RcloneView 会将结果记录在 **任务历史**（Job History）中。每条记录都会显示开始时间、耗时、传输的文件数量、传输的总数据量以及任何错误信息。这为你提供了每次同步操作的审计记录，如果你正在分多次会话系统性地迁移一个庞大的 Premiumize.me 资料库，这一点尤为重要。

如果传输因网络故障或 Premiumize.me API 的速率限制而中途失败，你可以从任务历史中重新运行同一个任务，而无需重新配置。RcloneView 会跳过已成功传输的文件，因此中断的同步会从上次中断处继续进行。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job History showing Premiumize.me sync results" class="img-large img-center" />

## 开始使用

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 打开 **远程管理器**，点击 **新建远程**，然后选择 **Premiumize**。
3. 完成 OAuth 浏览器登录以授权你的账户。
4. 创建一个以 Premiumize.me 为源、以你选定的云服务为目标的同步任务。

有了 RcloneView，你的 Premiumize.me 文件不再被锁定在单一服务中 —— 你可以按自己的时间表进行备份、归档或迁移。

---

**相关指南：**

- [管理 Put.io 存储 — 使用 RcloneView 同步和备份文件](https://rcloneview.com/support/blog/manage-put-io-cloud-sync-backup-rcloneview)
- [使用 RcloneView 进行云到云迁移](https://rcloneview.com/support/blog/cloud-to-cloud-migration-rcloneview)
- [任务历史与传输日志监控](https://rcloneview.com/support/blog/job-history-transfer-logs-monitoring-rcloneview)

<CloudSupportGrid />
