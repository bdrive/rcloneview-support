---
slug: migrate-dropbox-to-jottacloud-rcloneview
title: "从 Dropbox 迁移到 Jottacloud — 使用 RcloneView 传输文件"
authors:
  - jay
description: "使用 RcloneView 将文件从 Dropbox 迁移到 Jottacloud。连接两个云、用 Dry Run 预览、在云与云之间复制，并用 Folder Compare 验证结果。"
keywords:
  - dropbox 迁移到 jottacloud
  - dropbox jottacloud 传输
  - 从 dropbox 移动文件到 jottacloud
  - jottacloud 迁移工具
  - 欧洲 dropbox 替代
  - 云到云迁移 GUI
  - rcloneview jottacloud
  - rclone dropbox jottacloud
  - 欧洲云存储迁移
tags:
  - RcloneView
  - dropbox
  - jottacloud
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 从 Dropbox 迁移到 Jottacloud — 使用 RcloneView 传输文件

> 将 Dropbox 文件夹直接从云端迁移到 Jottacloud，并在关闭旧账户之前检查每一个文件。

迁移到挪威服务商的团队和家庭常常会遇到同样的难题：把多年积累的 Dropbox 数据下载到笔记本电脑再重新上传，既慢又有风险。RcloneView 在同一个窗口中连接两个账户，并通过 rclone 执行传输，因此文件会从 Dropbox 直接移到 Jottacloud，无需您手动经由本地文件夹中转。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 将 Dropbox 和 Jottacloud 连接为远程

打开 **Remote** 选项卡并点击 **New Remote**。Dropbox 使用 OAuth：浏览器打开后登录，RcloneView 会保存连接。如果您的文件位于 Dropbox 团队账户中，请设置 `dropbox_business` 选项，让 rclone 访问企业命名空间。

用同样的方式添加 Jottacloud：在服务商列表中选择 Jottacloud，并按照连接提示操作。两个远程都出现后，在两个 Explorer 面板中并排打开它们，以便同时查看源和目标。

<img src="/support/images/en/blog/new-remote.png" alt="在 RcloneView 中添加 Dropbox 和 Jottacloud 远程" class="img-large img-center" />

## 复制前规划文件夹结构

假设一家设计公司有 600 GB 数据分布在 `Clients`、`Archive` 和 `Shared Assets` 中，就应先决定每个顶级文件夹的去向。通过右键菜单在 Jottacloud 中创建目标文件夹，然后对每个 Dropbox 文件夹使用 **Get Size**，查看每一步要移动多少数据。

如果只是一次性的小任务，可以把文件夹从 Dropbox 面板拖到 Jottacloud 面板。在不同远程之间拖放始终是复制，因此不会从 Dropbox 删除任何内容。对于较大的任务，保存的任务更合适，因为您可以重新运行并查看其历史记录。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="在 RcloneView 中从 Dropbox 到 Jottacloud 的云到云传输" class="img-large img-center" />

## 创建可重复执行的迁移任务

在 Home 选项卡中点击 **Sync**，选择 Dropbox 作为源、Jottacloud 作为目标。方向保持为单向（"Modifying destination only"）。在 Advanced Settings 中，保留默认的多线程设置，并关闭校验和比较（Dropbox 和 Jottacloud 使用不同的哈希类型，因此 rclone 会按大小和修改时间比较文件），再使用 Filtering 跳过不需要迁移的内容。

先运行 **Dry Run**。它会列出目标端将被复制或删除的每个文件，帮您在浪费数小时之前发现选错文件夹的问题。然后开始正式运行，并在 **Transferring** 选项卡中查看速度和文件数量。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="在 RcloneView 中运行从 Dropbox 到 Jottacloud 的迁移任务" class="img-large img-center" />

如果迁移期间仍有人在 Dropbox 中工作，请在切换前再次运行同一任务。只有新增或更改的文件会被传输。使用 PLUS 许可证，您可以将任务安排为每晚运行，直到切换当天。

## 使用 Folder Compare 验证

在注销 Dropbox 之前，点击 **Compare** 并打开两个顶级文件夹。开启"仅左侧文件"和"大小不同"筛选：仍然列出的项目要么尚未到达，要么不一致。选中这些项目并使用 **Copy right** 补齐。当视图中只显示相同的文件时，迁移就完成了。**Job History** 会记录每次运行的大小、速度和状态。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="迁移后在 RcloneView 中比较 Dropbox 和 Jottacloud 文件夹" class="img-large img-center" />

## 快速上手

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 在 **Remote > New Remote** 中将 Dropbox（OAuth）和 Jottacloud 添加为远程。
3. 创建从 Dropbox 到 Jottacloud 的单向 Sync 任务，并用 **Dry Run** 预览。
4. 运行任务，然后在停用 Dropbox 账户前用 **Compare** 确认结果。

RcloneView 在 Windows、macOS 和 Linux 上通过一个窗口挂载和同步 90+ 个服务商，因此迁移完成后，您可以用同一个应用将 Jottacloud 挂载为本地驱动器。

---

**相关指南：**

- [使用 RcloneView 管理 Jottacloud 存储：同步、备份和整理文件](https://rcloneview.com/support/blog/manage-jottacloud-cloud-sync-backup-rcloneview)
- [从 Dropbox 迁移到 Koofr — 使用 RcloneView 传输文件](https://rcloneview.com/support/blog/migrate-dropbox-to-koofr-rcloneview)
- [修复 Jottacloud 同步错误 — 使用 RcloneView 排查并解决](https://rcloneview.com/support/blog/fix-jottacloud-sync-errors-rcloneview)

<CloudSupportGrid />
