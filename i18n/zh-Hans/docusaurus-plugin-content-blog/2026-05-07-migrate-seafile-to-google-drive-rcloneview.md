---
slug: migrate-seafile-to-google-drive-rcloneview
title: "将 Seafile 迁移到 Google Drive — 使用 RcloneView 传输文件"
authors:
  - tayson
description: "使用 RcloneView 的云到云传输和同步工具，将文件从自托管的 Seafile 服务器迁移到 Google Drive 的分步指南。"
keywords:
  - Seafile 迁移
  - Google Drive
  - RcloneView
  - 云到云传输
  - 自托管迁移
  - 文件迁移
  - Seafile 到 Google Drive
  - rclone seafile
tags:
  - seafile
  - google-drive
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 将 Seafile 迁移到 Google Drive — 使用 RcloneView 传输文件

> 从自托管的 Seafile 服务器迁移到 Google Drive 比听起来更简单 — RcloneView 让你将两者都作为远程连接，无需任何中间下载即可直接传输资料库。

Seafile 是一款流行的自托管协作平台，但许多团队最终会迁移到 Google Drive 等托管云服务，以减少维护开销并更好地与生产力工具集成。RcloneView 将 Seafile 与 Google Drive 一样视为一等远程，让你能够浏览 Seafile 资料库并在简洁的图形化工作流程中将其直接复制到 Google Drive。无需任何命令行知识，内置的 rclone 二进制文件会处理所有繁重的工作。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 连接你的 Seafile 服务器

在 RcloneView 中点击 **New Remote**，然后从提供商列表中选择 **Seafile**。输入你的 Seafile 服务器 URL、用户名和密码。如果你的服务器启用了 2FA，你还需要在设置过程中提供一次性令牌。之后 RcloneView 会在双栏文件浏览器中列出你所有的 Seafile 资料库 — 包括个人资料库和共享资料库。

如果你的 Seafile 资料库已加密，你需要提供资料库密码，才能让 RcloneView 解密并读取文件。建议在开始完整迁移之前，先测试对一个较小的加密资料库的访问，以验证你的凭据是否正确。

<img src="/support/images/en/blog/new-remote.png" alt="Adding Seafile remote in RcloneView" class="img-large img-center" />

## 添加 Google Drive

通过 **New Remote** > **Google Drive** 添加第二个远程。RcloneView 会打开一个浏览器窗口进行 OAuth 授权 — 使用你的 Google 账号登录并授予所请求的权限。授权完成后，Google Drive 远程会出现在浏览器中。你可以导航到 My Drive 或共享云端硬盘中的任意文件夹，将其用作迁移目的地。

建议在开始传输之前，在 Google Drive 中创建一个专用文件夹 — 例如 `Seafile Migration/`。这样可以让迁移的内容在过渡期间保持有序，并与现有文件分开。

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="Dragging Seafile libraries to Google Drive in RcloneView" class="img-large img-center" />

## 执行迁移

在双栏视图中同时打开两个远程后，对于小规模迁移，你可以直接将各个 Seafile 资料库拖拽到 Google Drive。对于完整的服务器迁移，请使用 **Job Wizard** 创建同步任务：将 Seafile 设为源，将你的目标 Google Drive 文件夹设为目的地。这个四步向导可让你配置传输选项，包括是否保留修改时间。

建议先运行一次 **dry run（试运行）** 以预览将要传输的内容 — 这对于包含数千个文件的大型 Seafile 实例尤其有用。确认预览结果无误后，再启动正式传输。RcloneView 的 **Job Manager** 会显示实时进度，**Job History** 则会记录结果，供你用于迁移审计追踪。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a Seafile to Google Drive migration job in RcloneView" class="img-large img-center" />

## 快速上手

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 点击 **New Remote** > **Seafile**，输入你的服务器 URL、用户名和密码。
3. 点击 **New Remote** > **Google Drive**，完成 OAuth 授权流程。
4. 在双栏浏览器中并排打开两个远程。
5. 使用 **Job Wizard** 创建同步任务，先运行 dry run，然后执行完整迁移。

借助 RcloneView，从 Seafile 迁移到 Google Drive 将成为一个结构化、可审计的流程，而不再是逐个文件手动操作的繁琐工作。

---

**相关指南：**

- [管理 Seafile — 使用 RcloneView 进行云同步与备份](https://rcloneview.com/support/blog/manage-seafile-cloud-sync-backup-rcloneview)
- [管理 Google Drive — 使用 RcloneView 进行云同步与备份](https://rcloneview.com/support/blog/manage-google-drive-cloud-sync-backup-rcloneview)
- [使用 RcloneView 将 Seafile 同步到 AWS S3](https://rcloneview.com/support/blog/sync-seafile-to-aws-s3-rcloneview)

<CloudSupportGrid />
