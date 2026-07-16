---
slug: migrate-google-drive-to-digitalocean-spaces-rcloneview
title: "将 Google Drive 迁移到 DigitalOcean Spaces —— 使用 RcloneView 传输文件"
authors:
  - tayson
description: "使用 RcloneView 将文件从 Google Drive 移动到 DigitalOcean Spaces 对象存储。无需 CLI 脚本即可完成云到云直接迁移的分步指南。"
keywords:
  - 将 Google Drive 迁移到 DigitalOcean Spaces
  - Google Drive 到对象存储迁移
  - 从 Google Drive 备份到 DigitalOcean Spaces
  - rclone Google Drive DigitalOcean
  - Google Drive 云到云迁移
  - 将 Google Drive 移动到兼容 S3 的存储
  - RcloneView Google Drive 迁移
  - DigitalOcean Spaces 文件传输
tags:
  - google-drive
  - digitalocean-spaces
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 将 Google Drive 迁移到 DigitalOcean Spaces —— 使用 RcloneView 传输文件

> RcloneView 将 Google Drive 到 DigitalOcean Spaces 的迁移作为直接的云到云传输处理——无需本地暂存，具备完整的进度可见性，并在完成时进行校验和验证。

将文件从 Google Drive 移动到 DigitalOcean Spaces 是开发者从面向消费者的存储迁移到基础设施级对象存储时常见的工作流程。一家初创公司可能会从使用 Google Drive 进行文件共享转向使用 Spaces 实现程序化访问、CDN 集成以及在规模化场景下更低的单 GB 成本。RcloneView 可同时连接两个服务商并直接传输文件，而无需将数 GB 数据通过本地设备中转。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 准备两个远程

将 Google Drive 添加为 OAuth 远程：**Remote 选项卡 → New Remote → Google Drive**，在浏览器中完成身份验证。您的 Drive 文件夹会立即显示在 Explorer 中。

将 DigitalOcean Spaces 添加为兼容 S3 的远程：**New Remote → Amazon S3 Compatible → DigitalOcean Spaces**。输入您的 Spaces access key、secret key 以及区域端点（例如 `nyc3.digitaloceanspaces.com`）。如果目标 bucket 尚不存在，请在 DigitalOcean 控制面板中创建。

打开双面板 Explorer 布局：左侧为 Google Drive，右侧为 DigitalOcean Spaces。在运行迁移之前浏览两侧以确认文件夹结构。

<img src="/support/images/en/blog/new-remote.png" alt="Setting up Google Drive and DigitalOcean Spaces remotes in RcloneView" class="img-large img-center" />

## 运行迁移

对于文件夹级别的迁移（例如，将 `Google Drive:/Client Projects/` 迁移到 `do-spaces:projects-bucket/`），请在 Job Manager 中使用 Sync 作业向导。设置源和目标，然后在第 2 步中进行配置：

- **并发传输数**：在高速连接下设置为 8–12 以获得最大吞吐量
- **校验和验证**：启用——Google Drive 使用自己的哈希方案；rclone 会处理转换
- **重试次数**：3——在不导致整个作业失败的情况下处理临时的 Google API 速率限制

先运行 Dry Run。Google Drive 中通常包含 Google Docs、Sheets 和 Slides 文件，这些文件无法直接复制到 Spaces（它们仅以 Google 自身的格式存在，而非可下载的文件）。Dry Run 会显示这些项目，您可以决定是先导出它们还是通过过滤规则将其排除。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Google Drive to DigitalOcean Spaces cloud-to-cloud transfer in RcloneView" class="img-large img-center" />

## 处理 Google Workspace 文件

原生 Google Workspace 文件（Docs、Sheets、Slides）没有直接的文件格式——必须先导出。Rclone 可以在传输过程中自动将其导出为 PDF 或 Office 格式。在 RcloneView 的同步作业中，除非您配置了导出格式，否则 Google Docs 默认会被跳过。使用 Terminal 选项卡运行 `rclone copy --drive-export-formats docx,xlsx,pptx` 进行一次性导出，或在 Settings → Global Rclone Flags 中添加自定义标志。

常规文件（PDF、图片、视频、代码）无需任何特殊处理即可传输，并以原始格式和文件名完整保留在 Spaces 中。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verifying Google Drive to DigitalOcean Spaces migration with folder comparison" class="img-large img-center" />

## 快速上手

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 添加 Google Drive（OAuth）和 DigitalOcean Spaces（S3 凭据）作为远程。
3. 在 Job Manager 中创建 Sync 作业，运行 Dry Run，检查 Google Workspace 文件的处理方式。
4. 执行迁移，并使用 Folder Compare 验证完成情况。

使用 RcloneView 从 Google Drive 迁移到 DigitalOcean Spaces 是一个结构化、可验证的过程——作业历史和传输日志清晰记录了迁移了哪些内容以及迁移时间。

---

**相关指南：**

- [使用 RcloneView 管理 DigitalOcean Spaces 云同步与备份](https://rcloneview.com/support/blog/manage-digitalocean-spaces-cloud-sync-backup-rcloneview)
- [使用 RcloneView 将 Google Drive 迁移到 AWS S3](https://rcloneview.com/support/blog/migrate-google-drive-to-aws-s3-rcloneview)
- [使用 RcloneView 进行校验和验证的云迁移](https://rcloneview.com/support/blog/checksum-verified-cloud-migrations-rcloneview)

<CloudSupportGrid />
