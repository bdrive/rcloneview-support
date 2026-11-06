---
slug: migrate-dropbox-to-koofr-rcloneview
title: "将 Dropbox 迁移到 Koofr — 使用 RcloneView 传输文件"
authors:
  - robin
description: "使用 RcloneView 将 Dropbox 迁移到 Koofr：连接两个远程，运行 Dry Run，进行云到云复制，并通过 Folder Compare 验证结果。"
keywords:
  - 将 Dropbox 迁移到 Koofr
  - Dropbox 到 Koofr 传输
  - Dropbox Koofr 迁移
  - RcloneView Dropbox
  - RcloneView Koofr
  - 云到云传输
  - 从 Dropbox 移动文件
  - Koofr 欧洲云存储
  - rclone GUI 迁移
  - Dropbox for Business 迁移
tags:
  - RcloneView
  - dropbox
  - koofr
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 将 Dropbox 迁移到 Koofr — 使用 RcloneView 传输文件

> 在云端之间将 Dropbox 账户迁移到 Koofr，复制前先预览，复制后再进行比较。

设计工作室要结束某个客户账户，或自由职业者希望把归档托管到欧洲的服务商。无论哪种情况，把成千上万个 Dropbox 文件夹经由笔记本电脑拖来拖去，既慢又容易出错。RcloneView 在一个窗口中连接 Dropbox 和 Koofr，执行两者之间的复制，并提供 Dry Run 和 Folder Compare 来确认结果。RcloneView 可在 Windows、macOS 和 Linux 上通过一个窗口挂载并同步 90 多个服务商。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 将 Dropbox 和 Koofr 连接为远程

打开 Remote 选项卡，选择 New Remote。Dropbox 通过 OAuth 登录：浏览器会打开，批准访问后，RcloneView 会自动连接。对于公司账户，Dropbox for Business 需要在远程配置中设置 `dropbox_business = true`。

将 Koofr 添加为第二个远程。两者都出现在 Remote Manager 后，在两个 Explorer 面板中并排打开它们。在移动任何内容之前，先浏览源目录树和目标目录树，这样就能知道哪些文件夹重要。

<img src="/support/images/en/blog/new-remote.png" alt="在 RcloneView 中添加 Dropbox 和 Koofr 远程" class="img-large img-center" />

## 使用过滤器和 Dry Run 规划复制

大多数 Dropbox 账户里都有不想带走的临时文件。任务向导的第 3 步提供最大文件大小、最大文件时长和文件夹深度限制。预定义过滤器涵盖 Music、Video、Image 和 Document 文件，自定义规则可以排除 `.git/` 文件夹或 `.iso` 文件等模式。

在正式任务之前先运行 Dry Run。它会列出将被复制或删除的文件，而不会改动任何一端。对于迁移，请选择 Copy 任务而不是镜像同步，这样 Koofr 上已有的内容不会被删除。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="在 RcloneView 中从 Dropbox 到 Koofr 的云到云传输" class="img-large img-center" />

## 运行传输并查看进度

启动任务，并在 Transferring 选项卡中跟踪进度、速度和文件数量。对于大型库，可以在第 2 步中提高文件传输数量，但如果任一服务响应较慢，请将等值检查器的数量保持在较低水平。"Retry entire sync if fails" 默认值为 3，可以应对暂时性的网络错误。

如果库太大，一次无法完成，请将任务保存在 Job Manager 中，稍后再运行。Copy 任务只传输缺失或不同的文件，因此第二次运行会从第一次停止的地方继续。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="在 Transferring 选项卡中监控 Dropbox 到 Koofr 的传输" class="img-large img-center" />

## 使用 Folder Compare 验证

任务完成后，打开 Compare，将 Dropbox 放在左侧，Koofr 放在右侧。仅左侧、仅右侧和不同文件的过滤器会显示剩余内容。向右复制操作会传输任何遗漏的文件。Job History 会记录每次运行的状态、大小、速度和文件数量，可作为迁移的有用记录。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="显示已完成的 Dropbox 到 Koofr 迁移的 Job History" class="img-large img-center" />

## 开始使用

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 添加 Dropbox（OAuth）和 Koofr 作为远程。
3. 创建带过滤器的 Copy 任务，然后运行 Dry Run。
4. 运行任务，然后使用 Folder Compare 确认结果。

在 Compare 显示两端一致之前，请保持 Dropbox 账户不变。

---

**相关指南：**

- [管理 Koofr 存储 — 使用 RcloneView 同步和备份文件](https://rcloneview.com/support/blog/manage-koofr-cloud-sync-backup-rcloneview)
- [使用 RcloneView 将 Koofr 迁移到 Dropbox](https://rcloneview.com/support/blog/migrate-koofr-to-dropbox-rcloneview)
- [使用 RcloneView 将 Dropbox 迁移到 pCloud](https://rcloneview.com/support/blog/migrate-dropbox-to-pcloud-rcloneview)

<CloudSupportGrid />
