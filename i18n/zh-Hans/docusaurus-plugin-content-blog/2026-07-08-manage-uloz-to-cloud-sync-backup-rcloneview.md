---
slug: manage-uloz-to-cloud-sync-backup-rcloneview
title: "管理 Uloz.to 存储 — 使用 RcloneView 同步与备份文件"
authors:
  - casey
description: "将 Uloz.to 云存储连接到 RcloneView，即可在一个应用中实现拖放式文件管理、定时备份和跨服务商同步。"
keywords:
  - Uloz.to
  - Uloz.to 云存储
  - 管理 Uloz.to 文件
  - Uloz.to 备份
  - Uloz.to 同步
  - RcloneView Uloz.to
  - Uloz.to 远程
  - 云文件管理器
  - Uloz.to 替代客户端
  - 多云文件管理
tags:
  - file-management
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 管理 Uloz.to 存储 — 使用 RcloneView 同步与备份文件

> 不必再在浏览器中反复上传 Uloz.to 文件——改用桌面文件资源管理器来管理整个文件库。

Uloz.to 是一款颇受欢迎的文件托管与存储服务，但其网页界面并不适合批量备份、定时同步，或在不同账户及其他云存储之间移动文件。RcloneView 会将 Uloz.to 作为一个远程添加到你的其他存储旁边，让你无需打开浏览器标签页即可浏览、备份并保持文件同步。RcloneView 可在一个窗口中挂载并同步 90 多个服务商，支持 Windows、macOS 和 Linux——Uloz.to 只是同一界面中的又一个标签页。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 将 Uloz.to 添加为远程

打开“远程”标签页并点击 **新建远程**，然后从服务商列表中选择 Uloz.to 以配置连接。添加完成后，它会作为一个标签页显示在任意资源管理器面板中，与你的本地磁盘和其他云远程并列。远程管理器（远程标签页 > 远程管理器）会在一处列出所有已配置的远程，方便你日后编辑或删除 Uloz.to 连接，而无需在设置界面中翻找。

<img src="/support/images/en/blog/new-remote.png" alt="Adding Uloz.to as a new remote in RcloneView" class="img-large img-center" />

在资源管理器中，面包屑路径栏的右键菜单包含 **复制完整路径（含远程）** 选项——如果你还会使用内置的 Rclone 终端执行一次性命令，这个功能对获取 `uloz:FolderName` 这类路径格式很有用。

## 自动同步与备份 Uloz.to 内容

对于需要定期执行的备份，可以通过 4 步向导设置同步任务：选择 Uloz.to 作为源或目标，选择单向的“仅修改目标”方向以获得安全、稳定的备份方向，并在第 3 步中添加过滤规则，跳过不希望镜像的文件类型（大型 `.iso` 文件、临时文件夹等）。在实际执行任何操作之前，先运行一次“空跑（Dry Run）”，预览将要复制或删除的具体内容。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring a sync job between Uloz.to and another cloud remote" class="img-large img-center" />

一旦你对任务配置感到放心，PLUS 许可证用户还可以附加类似 crontab 的计划任务，让 Uloz.to 备份自动运行——每天、每周，或任何适合你工作流程的频率。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a recurring Uloz.to backup job in RcloneView" class="img-large img-center" />

## 使用文件夹对比验证变更内容

在信任某次迁移或备份结果之前，先在你的 Uloz.to 文件夹与另一个远程上的对应文件夹之间运行一次文件夹对比。对比视图会并排标记出仅左侧存在、仅右侧存在以及内容不同的文件，让你在问题出现之前就能发现缺失的上传或过时的副本。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Comparing Uloz.to folder contents against another cloud remote" class="img-large img-center" />

## 快速上手

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 通过“远程”标签页将 Uloz.to 添加为新远程。
3. 创建一个同步任务，将其备份到另一个云存储或本地磁盘。
4. 先运行一次空跑，首次传输完成后再用文件夹对比进行确认。

将 Uloz.to 纳入规范的文件管理工作流程，意味着更少的手动上传，以及对文件确实已被备份这件事有更强的信心。

---

**相关指南：**

- [管理 Linkbox 存储 — 使用 RcloneView 同步与备份文件](https://rcloneview.com/support/blog/manage-linkbox-cloud-sync-backup-rcloneview)
- [管理 Pixeldrain 云同步 — 使用 RcloneView 备份文件](https://rcloneview.com/support/blog/manage-pixeldrain-cloud-sync-rcloneview)
- [管理 Terabox 存储 — 使用 RcloneView 同步与备份文件](https://rcloneview.com/support/blog/manage-terabox-cloud-sync-backup-rcloneview)

<CloudSupportGrid />
