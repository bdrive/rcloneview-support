---
slug: migrate-onedrive-to-mega-rcloneview
title: "从 OneDrive 迁移到 Mega — 使用 RcloneView 传输文件"
authors:
  - jay
description: "使用 RcloneView 将文件从 Microsoft OneDrive 迁移到 Mega：连接两个远程，运行试运行，进行云到云复制，并使用文件夹比较验证结果。"
keywords:
  - OneDrive 迁移到 Mega
  - OneDrive 到 Mega 传输
  - 将 OneDrive 文件移到 Mega
  - OneDrive Mega 迁移工具
  - 云到云传输
  - RcloneView OneDrive
  - RcloneView Mega
  - Mega GUI 客户端
tags:
  - RcloneView
  - onedrive
  - mega
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 从 OneDrive 迁移到 Mega — 使用 RcloneView 传输文件

> 用可视化、可重复的云到云任务将 OneDrive 库迁移到 Mega，而不必手动下载再重新上传。

将多年积累的文档从 Microsoft OneDrive 迁移到 Mega，通常意味着要经过自己磁盘的缓慢绕行。RcloneView 将两个服务都连接为远程并直接在它们之间复制，写入前提供预览，完成后通过比较证明没有遗漏。RcloneView 在一个窗口中即可挂载并同步 90 多个提供商，支持 Windows、macOS 和 Linux。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 将 OneDrive 和 Mega 连接为远程

OneDrive 使用基于浏览器的 OAuth：添加远程时选择 Microsoft OneDrive 并登录，RcloneView 会保存令牌。Mega 则不同，它直接使用您的电子邮件和密码，请在开始前准备好。

为远程起清晰的名称，例如 `onedrive-main` 和 `mega-archive`。之后查看任务历史，或将完整路径（如 `onedrive-main:Projects`）复制到 rclone 终端时，清晰的名称会很有帮助。

<img src="/support/images/en/blog/new-remote.png" alt="在 RcloneView 中添加 OneDrive 和 Mega 远程" class="img-large img-center" />

## 运行前规划复制

在并排的 Explorer 面板中打开两个远程，浏览要迁移的文件夹。在源端使用 Get Size 估算即将传输的数据量，并确认您的 Mega 账户有足够空间。

首次迁移请选择 **Copy** 而不是 Sync。复制不会删除目标端的任何内容，因此选错文件夹也不会删除数据。可使用过滤步骤跳过不需要的文件类型，或按最大文件大小或时间范围进行限制。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="RcloneView 中两个远程之间的云到云传输" class="img-large img-center" />

## 先试运行，再正式传输

试运行（Dry Run）会列出将要复制的内容，而不会写入任何字节。检查后再运行任务。Transferring 选项卡显示进度、速度和文件数量，运行中的任务可随时取消。

对于大型库，如果 Mega 对您限速，请降低并发文件传输数；同时保留默认的重试次数，以免短暂的网络中断导致任务终止。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="在 RcloneView 中运行复制任务" class="img-large img-center" />

## 使用文件夹比较进行验证

任务完成后，打开 Compare，左侧为 OneDrive，右侧为 Mega。通过过滤器可以显示仅存在于左侧的文件，因此传输失败的文件一目了然。您还可以在同一视图中将遗漏的文件复制过去。任务历史（Job History）会记录该次运行的状态、大小、速度和文件数量。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="OneDrive 与 Mega 之间的文件夹比较结果" class="img-large img-center" />

## 开始使用

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 将 OneDrive（OAuth）和 Mega（电子邮件和密码）添加为远程。
3. 创建从 OneDrive 到 Mega 的 Copy 任务，先试运行，再正式执行。
4. 在停用源端之前，使用文件夹比较进行验证。

可预览、可监控、可验证的迁移，才能让您放心地完成。

---

**相关指南：**

- [管理 Mega 存储 — 使用 RcloneView 同步和备份文件](https://rcloneview.com/support/blog/manage-mega-cloud-sync-backup-rcloneview)
- [管理 OneDrive 存储 — 使用 RcloneView 同步和备份文件](https://rcloneview.com/support/blog/manage-onedrive-cloud-sync-backup-rcloneview)
- [从 Google Drive 迁移到 Mega — 使用 RcloneView 传输文件](https://rcloneview.com/support/blog/migrate-google-drive-to-mega-rcloneview)

<CloudSupportGrid />
