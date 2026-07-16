---
slug: migrate-jottacloud-to-onedrive-rcloneview
title: "将 Jottacloud 迁移到 OneDrive — 使用 RcloneView 传输文件"
authors:
  - tayson
description: "使用 RcloneView 将所有 Jottacloud 文件迁移到 Microsoft OneDrive 的分步指南。无需任何命令行工具即可迁移整个文件库。"
keywords:
  - jottacloud to onedrive migration
  - transfer jottacloud to onedrive
  - migrate jottacloud to onedrive
  - cloud to cloud transfer gui
  - jottacloud migration tool
  - onedrive cloud migration
  - rcloneview jottacloud onedrive
  - cloud storage migration guide
tags:
  - jottacloud
  - onedrive
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 将 Jottacloud 迁移到 OneDrive — 使用 RcloneView 传输文件

> 无需接触命令行，即可将整个 Jottacloud 文件库迁移到 Microsoft OneDrive —— RcloneView 通过完整的进度监控和文件完整性验证来处理云到云的传输。

许多团队在整合 Microsoft 365 时会从 Jottacloud 切换到 OneDrive，以获得更紧密的 Office 应用集成和更广泛的企业工具支持。挑战在于要大规模、准确地传输多年积累的文件。RcloneView 的云到云任务引擎让你可以映射两个远程存储，运行经过验证的复制，并通过内置的文件夹比较来确认完整性 —— 一切都在单一的图形界面中完成，无需手动编辑任何 rclone 配置文件。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 将 Jottacloud 和 OneDrive 连接为远程存储

打开 RcloneView 并导航到 **Remote** 标签页，然后点击 **New Remote**。从提供商列表中选择 Jottacloud，并按照屏幕提示完成账户身份验证配置。

接下来，添加第二个 OneDrive 远程存储。OneDrive 使用基于浏览器的 OAuth —— RcloneView 会自动打开你的默认浏览器进行账户登录。授权完成后，该连接会保存到你的 rclone 配置中，并立即可在资源管理器面板中访问。

<img src="/support/images/en/blog/new-remote.png" alt="Adding a new Jottacloud remote in RcloneView Remote Manager" class="img-large img-center" />

两个远程存储都连接好后，使用 RcloneView 的双面板资源管理器并排打开它们。右键点击你的源文件夹并选择 **Get Size**，在开始前确认数据总量 —— 这为你的迁移提供了一个清晰的基准，并有助于在传输后发现异常差异。

## 在任务管理器中创建复制任务

进入 **Home → Job Manager**，然后点击 **Add Job**。将你的 Jottacloud 根目录（或子文件夹）设置为源，将目标 OneDrive 文件夹设置为目的地。为初次迁移选择 **Copy** 作为任务类型 —— 这样可以在填充 OneDrive 的同时保持源文件原封不动，不会触碰源端。

在向导的第 2 步中，增大 **Number of file transfers** 以并发推送多个文件；这会显著减少大型文件库的整体迁移时间。启用 **Enable checksum**，使每个传输的文件都通过哈希值和文件大小进行验证，而不仅仅是文件名 —— 这对于一次性迁移至关重要，因为必须在停用源端之前发现潜在的静默数据损坏。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a cloud-to-cloud migration job in RcloneView Job Manager" class="img-large img-center" />

在正式运行之前，点击 **Dry Run** 预览将要复制的文件。对于拥有数千个嵌套文件夹的项目归档，这一预览步骤可以在路径长度问题和超大文件引发中途传输失败之前将其暴露出来。

## 监控进度和传输速度

任务启动后，底部信息视图中的 **Transferring** 标签页会显示实时进度：单个文件名、传输速度、已移动的总字节数以及正在累计的文件计数。你可以随时取消任务而不会损坏已经传输完成的文件 —— RcloneView 底层的 rclone 引擎能够干净地处理部分传输，恢复运行的 Copy 任务会跳过目标端已存在且大小和校验和均匹配的文件。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitoring a Jottacloud to OneDrive transfer in RcloneView" class="img-large img-center" />

对于需要通宵运行的超大规模迁移，可以使用系统托盘让 RcloneView 在后台保持运行。传输完成时会有任务完成通知提醒你。

## 使用文件夹比较验证完整性

复制任务完成后，从 Home 标签页打开 **Folder Compare**。将左侧面板设置为你的 Jottacloud 源，右侧面板设置为 OneDrive 目的地。RcloneView 会扫描两侧，并高亮显示未能传输的仅左侧文件、可能已损坏的不同大小文件，以及任何仅右侧存在的文件。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Comparing Jottacloud source and OneDrive destination to verify migration completeness" class="img-large img-center" />

对任何剩余的仅左侧文件使用 **Copy Right** 来完成传输。当比较结果不再显示仅左侧或大小不一致的条目时，说明你的 Jottacloud 内容已完整、准确地镜像到 OneDrive —— 可以用于 Microsoft 365 工作流了。

## 快速开始

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 通过 Remote 标签页 → New Remote 添加你的 Jottacloud 账户，并按照提示操作。
3. 通过 Remote 标签页 → New Remote（浏览器 OAuth 登录）添加你的 OneDrive 账户。
4. 在任务管理器中创建一个 Copy 任务，启用校验和，并先运行 Dry Run。
5. 传输完成后，打开 Folder Compare 确认没有仅左侧或不匹配的文件。

一次干净的 Jottacloud 到 OneDrive 迁移可以在单次会话中完成 —— 无需编写脚本，没有意外惊喜，并且在停用源端之前，你能拥有一个可以信赖的、经过验证的结果。

---

**相关指南：**

- [管理 Jottacloud 云存储 — 使用 RcloneView 进行同步和备份](https://rcloneview.com/support/blog/manage-jottacloud-cloud-sync-backup-rcloneview)
- [将 Jottacloud 迁移到 Google Drive — 使用 RcloneView 传输文件](https://rcloneview.com/support/blog/migrate-jottacloud-to-google-drive-rcloneview)
- [管理 OneDrive 云存储 — 使用 RcloneView 进行同步和备份](https://rcloneview.com/support/blog/manage-onedrive-cloud-sync-backup-rcloneview)

<CloudSupportGrid />
