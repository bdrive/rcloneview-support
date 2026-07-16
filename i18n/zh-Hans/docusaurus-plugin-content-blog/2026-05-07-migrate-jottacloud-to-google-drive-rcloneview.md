---
slug: migrate-jottacloud-to-google-drive-rcloneview
title: "将 Jottacloud 迁移到 Google Drive — 使用 RcloneView 传输文件"
authors:
  - tayson
description: "分步指南：使用 RcloneView 的云到云传输功能将文件从 Jottacloud 迁移到 Google Drive — 设置好两个远程后运行迁移任务。"
keywords:
  - Jottacloud 迁移
  - Jottacloud 到 Google Drive
  - RcloneView 迁移
  - 云到云传输
  - Jottacloud 导出
  - 云存储迁移
  - rclone Jottacloud
  - Google Drive 导入
tags:
  - jottacloud
  - google-drive
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 将 Jottacloud 迁移到 Google Drive — 使用 RcloneView 传输文件

> 使用 RcloneView 将文件从 Jottacloud 迁移到 Google Drive 非常简单 — 连接两个远程，直接在云端传输，无需先下载所有文件。

Jottacloud 是一家挪威云存储服务商，因其无限存储方案而广受欢迎，但如今许多用户希望迁移到更普遍可用的平台，例如 Google Drive。无论是因为套餐变更、价格原因，还是仅仅想整合云存储，RcloneView 都能让迁移过程简洁可靠。您无需先将所有文件下载到本地 — RcloneView 会以云到云的方式，直接将文件从 Jottacloud 传输到 Google Drive。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 设置 Jottacloud 远程

在 RcloneView 中点击 **New Remote**，然后从提供商列表中选择 **Jottacloud**。RcloneView 将引导您完成身份验证过程 — Jottacloud 使用基于设备的登录流程，您通过浏览器登录，生成的令牌会安全地存储在 RcloneView 中。身份验证完成后，您的 Jottacloud 账户将出现在浏览器中，包括您的个人存档、备份文件夹以及任何共享内容。

在开始迁移之前，先浏览一下您的 Jottacloud 文件夹结构，了解内容的组织方式。请注意含有特殊字符或嵌套层级较深的文件夹名称，因为在大规模迁移过程中，这些情况偶尔会引发问题。

<img src="/support/images/en/blog/new-remote.png" alt="Adding Jottacloud as a remote in RcloneView" class="img-large img-center" />

## 添加 Google Drive

再次点击 **New Remote**，然后选择 **Google Drive**。RcloneView 会打开一个浏览器标签页用于 Google OAuth 授权 — 使用您的 Google 账户登录并授予所请求的权限。授权完成后，Google Drive 远程即会出现在浏览器中。

在开始迁移之前，请先在 Google Drive 中创建一个目标文件夹 — 例如 `Jottacloud Import/` — 以便将迁移的文件与现有内容分开整理。这样可以方便地验证迁移结果，而不必担心哪些文件来自何处。

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="Google Drive and Jottacloud open side by side in RcloneView" class="img-large img-center" />

## 运行迁移任务

配置好两个远程后，在 Job Manager 中打开 **Job Wizard**。将 Jottacloud 设置为源（选择顶层文件夹或您想要迁移的特定子文件夹），并将 Google Drive 目标文件夹设置为目标。迁移时请选择 **Copy** 模式而非 **Sync** 模式 — 这样可以确保文件被复制，而不会删除源端的任何内容。

务必先运行一次 **dry run（试运行）**，以准确查看将要传输的文件。对于拥有数千个文件的大型 Jottacloud 账户，试运行的输出可以帮助您在提交完整传输之前发现潜在问题。确认无误后，运行正式任务。RcloneView 的 **Job Manager** 会显示实时进度，**Job History** 则会记录最终的传输数量以及任何错误信息。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a Jottacloud to Google Drive migration job in RcloneView" class="img-large img-center" />

## 快速上手

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 点击 **New Remote** > **Jottacloud**，完成浏览器身份验证。
3. 点击 **New Remote** > **Google Drive**，完成 OAuth 授权。
4. 在 Google Drive 中创建一个用于存放迁移内容的目标文件夹。
5. 使用 **Job Wizard** 创建复制任务，先运行试运行，然后执行完整迁移。

有了 RcloneView，从 Jottacloud 迁移到 Google Drive 只需一次性设置几分钟，即可自动运行至完成。

---

**相关指南：**

- [管理 Jottacloud — 使用 RcloneView 进行云同步和备份](https://rcloneview.com/support/blog/manage-jottacloud-cloud-sync-backup-rcloneview)
- [管理 Google Drive — 使用 RcloneView 进行云同步和备份](https://rcloneview.com/support/blog/manage-google-drive-cloud-sync-backup-rcloneview)
- [使用 RcloneView 将 Jottacloud 迁移到 Backblaze B2](https://rcloneview.com/support/blog/migrate-jottacloud-to-backblaze-b2-rcloneview)

<CloudSupportGrid />
