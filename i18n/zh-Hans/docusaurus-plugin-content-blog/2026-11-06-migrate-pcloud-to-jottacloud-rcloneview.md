---
slug: migrate-pcloud-to-jottacloud-rcloneview
title: "将 pCloud 迁移到 Jottacloud — 使用 RcloneView 传输文件"
authors:
  - alex
description: "使用 RcloneView 将 pCloud 迁移到 Jottacloud：连接两个远程，通过 Dry Run 预览，进行云到云复制，并使用 Folder Compare 验证。"
keywords:
  - 将 pCloud 迁移到 Jottacloud
  - pCloud 到 Jottacloud 传输
  - pCloud Jottacloud 迁移
  - RcloneView pCloud
  - RcloneView Jottacloud
  - 云到云传输
  - 从 pCloud 移动文件
  - 欧洲云存储迁移
  - rclone GUI 迁移
tags:
  - RcloneView
  - pcloud
  - jottacloud
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 将 pCloud 迁移到 Jottacloud — 使用 RcloneView 传输文件

> 在云端之间将 pCloud 库迁移到 Jottacloud，先预览，最后再进行验证。

无论是整合客户归档的摄影师，还是把共享文件夹迁移到新服务商的家庭，面对的都是同样的琐事：存放在一个云中的成千上万个文件需要转移到另一个云。把所有内容下载到笔记本电脑再重新上传，既慢又不可靠。RcloneView 在一个窗口中连接 pCloud 和 Jottacloud，执行两者之间的复制，并提供 Dry Run 和 Folder Compare 来确认结果。RcloneView 可在 Windows、macOS 和 Linux 上通过一个窗口挂载并同步 90 多个服务商。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 将 pCloud 和 Jottacloud 连接为远程

打开 Remote 选项卡，选择 New Remote。pCloud 通过 OAuth 登录：浏览器会打开，批准访问后，RcloneView 会自动连接。按照该服务商的屏幕提示添加 Jottacloud 作为第二个远程。

两者都出现在 Remote Manager 后，在两个 Explorer 面板中并排打开它们。先浏览源和目标，有助于决定要移动哪些文件夹以及放到哪里。

<img src="/support/images/en/blog/new-remote.png" alt="在 RcloneView 中添加 pCloud 和 Jottacloud 远程" class="img-large img-center" />

## 使用过滤器和 Dry Run 规划复制

任务向导的第 3 步允许按最大文件大小、最大文件时长或文件夹深度限制传输。预定义过滤器涵盖 Music、Video、Image 和 Document 文件，自定义规则可以排除 `.git/` 文件夹或 `.iso` 文件等模式，便于跳过安装程序和磁盘映像。

在正式任务之前先运行 Dry Run。它会列出将被复制或删除的文件，而不会改动任何一端。对于迁移，请选择 Copy 任务而不是镜像同步，这样 Jottacloud 中已有的内容不会被删除。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="在 RcloneView 中从 pCloud 到 Jottacloud 的云到云传输" class="img-large img-center" />

## 运行传输并查看进度

启动任务，并在 Transferring 选项卡中跟踪进度、速度和文件数量。对于大型库，可以在第 2 步中提高文件传输数量，但如果任一后端响应较慢，请将等值检查器的数量保持在较低水平。"Retry entire sync if fails" 默认值为 3，可以应对暂时性的网络错误。

如果一次会话不够用，请将任务保存在 Job Manager 中，稍后再运行。Copy 任务只传输缺失或不同的文件，因此重复运行会从上次停止的地方继续。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="在 RcloneView 中运行 pCloud 到 Jottacloud 的 Copy 任务" class="img-large img-center" />

## 使用 Folder Compare 验证

任务完成后，打开 Compare，将 pCloud 放在左侧，Jottacloud 放在右侧。仅左侧、仅右侧和不同文件的过滤器会显示尚未移动的内容，向右复制操作可传输遗漏的文件。Job History 会保留每次运行的状态、大小、速度和文件数量，作为迁移的记录。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="迁移后比较 pCloud 和 Jottacloud 文件夹" class="img-large img-center" />

## 开始使用

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 添加 pCloud（OAuth）和 Jottacloud 作为远程。
3. 创建带过滤器的 Copy 任务，然后运行 Dry Run。
4. 运行任务，然后使用 Folder Compare 确认结果。

在 Compare 显示两端一致之前，请保持 pCloud 账户不变。

---

**相关指南：**

- [管理 pCloud 存储 — 使用 RcloneView 同步和备份文件](https://rcloneview.com/support/blog/manage-pcloud-cloud-sync-backup-rcloneview)
- [管理 Jottacloud 存储 — 使用 RcloneView 同步和备份文件](https://rcloneview.com/support/blog/manage-jottacloud-cloud-sync-backup-rcloneview)
- [使用 RcloneView 将 Jottacloud 迁移到 pCloud](https://rcloneview.com/support/blog/migrate-jottacloud-to-pcloud-rcloneview)

<CloudSupportGrid />
