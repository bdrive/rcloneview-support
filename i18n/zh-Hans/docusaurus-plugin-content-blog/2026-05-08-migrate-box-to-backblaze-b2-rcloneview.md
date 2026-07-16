---
slug: migrate-box-to-backblaze-b2-rcloneview
title: "将 Box 迁移到 Backblaze B2 — 使用 RcloneView 传输文件"
authors:
  - steve
description: "使用 RcloneView 将您的 Box 云存储迁移到 Backblaze B2 对象存储。一份关于文件迁移、验证传输以及自动化未来备份的完整指南。"
keywords:
  - Box 到 Backblaze B2 迁移
  - 使用 RcloneView 迁移 Box 到 Backblaze B2
  - Box Backblaze B2 文件传输
  - 将 Box 切换到 B2 存储
  - Box 云存储迁移
  - Box 备份到 Backblaze B2
  - Box 到 S3 迁移
  - rclone Box B2 图形界面
tags:
  - box
  - backblaze-b2
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 将 Box 迁移到 Backblaze B2 — 使用 RcloneView 传输文件

> 使用 RcloneView 的图形化迁移流程，将您整个 Box 工作区迁移到 Backblaze B2 对象存储，或创建一份辅助备份副本。

Box 是一个广泛使用的企业协作平台，但就归档和备份用途而言，与 Backblaze B2 这类专为对象存储设计的服务相比，其存储成本可能相当高昂。希望将归档数据从 Box 迁出，或以更具成本效益的层级为 Box 内容创建备份副本的团队，可以使用 RcloneView 直接迁移——无需先下载到本地。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 连接 Box 和 Backblaze B2

对于 Box，前往 **Remote 标签页 → New Remote**，选择 Box，并使用您的 Box 账户完成 OAuth 身份验证。Box for Business 用户还应在远程配置中设置 `box_sub_type = enterprise`，以获得完整的工作区访问权限。对于 Backblaze B2，在设置远程时输入您的 Application Key ID 和 Application Key。

两个远程都配置完成后，将 Box 放在左侧浏览面板，B2 放在右侧。浏览到您要迁移的具体 Box 文件夹，并在开始任何传输之前，确认目标 B2 存储桶的名称正确且可访问。

<img src="/support/images/en/blog/new-remote.png" alt="Setting up Box and Backblaze B2 remotes in RcloneView" class="img-large img-center" />

## 配置迁移任务

使用 Home 标签页中的 **Sync** 按钮创建迁移任务。将 Box 文件夹设为源，将 B2 存储桶（或其中的子文件夹）设为目标。在第 2 步中，启用 **Checksum** 以在传输过程中验证每个文件的完整性。将重试次数设置为 5 次或更高——在大批量传输过程中，B2 的 API 有时会对请求进行限流，自动重试可确保迁移在无需人工干预的情况下顺利完成。

在进行正式迁移之前，先运行一次 **Dry Run**，以查看将要传输的完整文件列表。这对于 Box 迁移尤为重要，因为共享文件或 Box Notes（`.boxnote` 格式）可能无法按预期传输——Dry Run 的输出会在影响生产数据之前，突出显示任何失败的文件。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Box to Backblaze B2 migration job in RcloneView" class="img-large img-center" />

## 处理 Box Notes 和特殊文件类型

Box Notes 是一种专有格式（`.boxnote`），在 Box 之外可能无法正确呈现。在迁移之前，请从 Box 网页界面将需要保留的 Box Notes 导出为标准格式（例如 `.docx` 或 `.pdf`）。RcloneView 会将 `.boxnote` 文件作为二进制数据进行迁移，但它们在 B2 或任何非 Box 客户端中都无法编辑。

对于共享文件夹和外部协作者的内容，请确认您的 Box 账户拥有访问您计划迁移的全部内容的权限。RcloneView 中的 **Log 标签页** 会显示您账户无法访问的任何文件的权限错误。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitoring Box to B2 migration progress in RcloneView" class="img-large img-center" />

## 快速上手

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 添加 Box（OAuth）和 Backblaze B2（Application Key）作为远程。
3. 运行 Dry Run，在正式执行迁移之前进行预览。
4. 启用校验和验证后执行正式迁移。

使用 RcloneView 将 Box 迁移到 Backblaze B2 是一个清晰、可验证的流程，能为您的归档内容提供经济高效、持久耐用的存储。

---

**相关指南：**

- [使用 RcloneView 将 Box 迁移到 AWS S3](https://rcloneview.com/support/blog/migrate-box-to-aws-s3-rcloneview)
- [使用 RcloneView 管理 Backblaze B2 云存储](https://rcloneview.com/support/blog/manage-backblaze-b2-cloud-sync-backup-rcloneview)
- [使用 RcloneView 将 Box 归档至 S3 Glacier](https://rcloneview.com/support/blog/box-to-s3-glacier-archive-rcloneview)

<CloudSupportGrid />
