---
slug: manage-gofile-cloud-sync-backup-rcloneview
title: "管理 Gofile 存储 — 使用 RcloneView 同步和备份文件"
authors:
  - tayson
description: "使用 RcloneView 管理 Gofile 云存储 — 通过基于 rclone 的 Gofile 后端上传、整理和同步 Gofile 内容。"
keywords:
  - Gofile 管理
  - Gofile 同步工具
  - Gofile 上传 GUI
  - RcloneView Gofile
  - Gofile 云备份
  - Gofile 文件传输
  - 内容分发存储
  - 多云文件管理
  - Gofile rclone
  - 大文件上传服务
tags:
  - gofile
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 管理 Gofile 存储 — 使用 RcloneView 同步和备份文件

> Gofile 是一款广受欢迎的文件托管与分享服务，专为大文件上传而设计 —— RcloneView 通过访问令牌（Access Token）连接 Gofile，并将其纳入你的云管理工作流程。

Gofile 是一款文件托管与分享服务，让你可以上传大文件并生成可分享的链接，且没有严格的大小限制。对于经常通过 Gofile 分发内容的用户来说，仅通过网页门户管理上传会变得很繁琐。RcloneView 使用访问令牌连接 Gofile，将你的 Gofile 存储与其他所有云远程一起纳入标准的文件管理工作流程。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 在 RcloneView 中设置 Gofile

要在 RcloneView 中连接 Gofile，请前往 **远程标签 > 新建远程**，然后从提供商列表中选择 **Gofile**。你需要从 Gofile 账户仪表盘获取一个**访问令牌**。输入令牌、为远程命名并保存。你的 Gofile 账户将作为可浏览的远程出现在资源管理器中，像其他任何云存储一样显示文件夹和文件。

<img src="/support/images/en/blog/new-remote.png" alt="Adding Gofile as a new remote in RcloneView" class="img-large img-center" />

Gofile 以基于文件夹的结构组织内容，RcloneView 可以在列表视图和缩略图视图中清晰地展示这些内容。你可以浏览嵌套文件夹、查看文件名和大小，并选择多个文件进行批量操作 —— 批量下载、删除一批旧上传内容，或在 Gofile 文件夹之间移动内容。

## 上传和整理 Gofile 内容

RcloneView 支持从本地文件管理器直接拖放上传到 Gofile 资源管理器面板。将一批视频文件从本地文件夹拖拽到所选 Gofile 目标位置即可完成上传，无需打开浏览器 —— 这对经常通过 Gofile 分发大型视频包或软件压缩包的内容创作者尤其有用。

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="Drag-and-drop upload to Gofile in RcloneView" class="img-large img-center" />

在**任务管理器**中创建同步任务，可以让你定期将本地文件夹中的内容推送到 Gofile。例如，一位播客制作者在录音后将剪辑好的节目音频上传到 Gofile 供听众下载，就可以将此过程设置为每周自动运行 —— 每次只同步新增或有变动的文件。

## 将 Gofile 内容备份到持久存储

Gofile 上的内容可能存在保留期限限制，或依赖账户状态。对于将 Gofile 用作分发渠道、但又希望保留永久备份的用户，RcloneView 支持将内容从 Gofile 直接传输到 Amazon S3、Backblaze B2 或任何其他云远程。配置一个复制任务，从 Gofile 拉取内容并归档到长期存储中 —— 为你分享过的所有内容保留一份永久副本。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history showing Gofile backup transfers in RcloneView" class="img-large img-center" />

**任务历史**标签会跟踪每次传输的详细信息，包括传输字节数、传输文件数、耗时和状态 —— 让你随时了解 Gofile 内容是否已成功归档。

## 快速上手

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 前往 **远程标签 > 新建远程**，选择 **Gofile**，并输入你的访问令牌。
3. 在资源管理器面板中浏览你的 Gofile 内容。
4. 使用**任务管理器**将本地内容同步到 Gofile，或将 Gofile 内容复制到备份存储。

通过 RcloneView 使用 Gofile，内容分发者可以在 Gofile 快速上传与分享基础设施之上获得完善的文件管理层 —— 将一次性上传转变为有条理的自动化工作流程。

---

**相关指南：**

- [管理 Backblaze B2 云存储 — 使用 RcloneView 同步和备份](https://rcloneview.com/support/blog/manage-backblaze-b2-cloud-sync-backup-rcloneview)
- [使用 RcloneView 将大文件上传到 Google Drive](https://rcloneview.com/support/blog/upload-large-files-google-drive-sync-rcloneview)
- [复制 URL — 使用 RcloneView 直接将文件下载到云端](https://rcloneview.com/support/blog/copyurl-download-url-to-cloud-rcloneview)

<CloudSupportGrid />
