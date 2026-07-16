---
slug: migrate-onedrive-to-cloudflare-r2-rcloneview
title: "将 OneDrive 迁移到 Cloudflare R2 — 使用 RcloneView 传输文件"
authors:
  - tayson
description: "使用 RcloneView 将 OneDrive 文件迁移到 Cloudflare R2，适用于开发者工作流和 CDN 集成。通过 OAuth 和 API Token 连接，应用过滤规则并同步。"
keywords:
  - migrate OneDrive to Cloudflare R2
  - OneDrive R2 transfer RcloneView
  - OneDrive to Cloudflare R2 sync
  - cloud storage migration developer
  - Cloudflare R2 object storage
  - OneDrive alternative R2
  - S3 compatible storage migration
  - RcloneView OneDrive migration
tags:
  - RcloneView
  - onedrive
  - cloudflare-r2
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 将 OneDrive 迁移到 Cloudflare R2 — 使用 RcloneView 传输文件

> Cloudflare R2 与 CDN 和 Workers 管道原生集成 —— RcloneView 无需接触本地机器即可完成 OneDrive 到 R2 的迁移。

将工作负载迁移到 Cloudflare 生态系统的开发者和团队，通常需要将存储在 OneDrive 中的资源迁移到 Cloudflare R2。R2 提供零出口费用、兼容 S3 的对象存储，可直接与 Cloudflare Workers、Pages 和 CDN 集成 —— 非常适合静态资源、媒体文件和构建产物。RcloneView 通过 OAuth 连接 OneDrive，通过 API Token 连接 Cloudflare R2，并将迁移作为云到云同步任务运行，可选配置过滤规则。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 连接 OneDrive

打开 RcloneView，导航到 **Remote Manager（远程管理器）**。点击 **New Remote（新建远程）**，从提供商列表中选择 **OneDrive**。RcloneView 会打开浏览器进行 OAuth 身份验证 —— 使用您的 Microsoft 账户登录并授权访问。个人 OneDrive、OneDrive for Business 以及 SharePoint 文档库都可通过此方式访问。

授权完成后，在文件浏览器中打开该远程。导航到计划迁移的文件夹，并记下它们的路径。

<img src="/support/images/en/blog/new-remote.png" alt="Connecting OneDrive and Cloudflare R2 in RcloneView" class="img-large img-center" />

## 连接 Cloudflare R2

返回 **Remote Manager（远程管理器）**，点击 **New Remote（新建远程）**，选择 **S3 Compatible（S3 兼容）**。填写您的 Cloudflare R2 凭据：

- **Access Key ID**：来自 Cloudflare 控制台 → R2 → Manage API Tokens（创建具有对象读写权限的 API Token）
- **Secret Access Key**：Token 密钥
- **Endpoint**：`https://{your-account-id}.r2.cloudflarestorage.com`

保存该远程。在文件浏览器中，导航到目标存储桶（或创建一个新的）。通过确认存储桶内容显示出来验证访问权限。

## 使用过滤规则配置迁移任务

前往 **Jobs（任务）**，点击 **New Job（新建任务）**。将 OneDrive 设为源，并指定要迁移的具体文件夹。将 Cloudflare R2 设为目标，并指定目标存储桶路径。

在任务向导的第 2 步中，您可以应用**过滤规则**来缩小迁移范围：

- 仅迁移特定文件类型（例如 `--include "*.jpg"`、`--include "*.pdf"`）
- 排除系统文件夹或临时文件（例如 `--exclude ".DS_Store"`）
- 在正式运行前使用 **Dry Run（试运行）** 预览过滤后的结果

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-to-cloud migration from OneDrive to Cloudflare R2" class="img-large img-center" />

## 运行迁移

关闭 Dry Run 并执行任务。RcloneView 会在传输面板中实时显示进度 —— 每秒文件数、当前速度和已传输的总数据量。OneDrive 到 R2 是服务器到服务器的传输；您的本地机器充当协调者，而非数据通道。

大文件会自动使用分片上传。如果有文件在传输过程中失败，Log（日志）标签会显示具体错误。重新运行任务是安全的 —— 已传输的文件会被跳过。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitoring OneDrive to Cloudflare R2 transfer in real time" class="img-large img-center" />

## 迁移后验证

使用 **Folder Compare（文件夹比较）** 在迁移后检查两侧内容。在比较视图中打开 OneDrive 源和 R2 目标 —— RcloneView 会高亮显示仅存在于一侧的文件。对于关键迁移，请在任务设置中启用校验和验证，以确保字节级精确度。

验证完成后，您可以更新 Cloudflare Worker 绑定、CDN 规则或应用程序配置，将其指向 R2 存储桶而非 OneDrive。

## 快速开始

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 在 **Remote Manager（远程管理器）** 中通过 OAuth 连接 OneDrive。
3. 使用您的 API Token 和账户 ID 端点连接 Cloudflare R2。
4. 创建迁移任务，可选配置过滤规则，运行 Dry Run 进行预览，然后执行。

Cloudflare R2 紧密的 CDN 集成和零出口费用计费方式，使其成为原本存放在 OneDrive 中内容的理想迁移目的地。

---

**相关指南：**

- [使用 RcloneView 将 Dropbox 迁移到 Cloudflare R2](https://rcloneview.com/support/blog/migrate-dropbox-to-cloudflare-r2-rcloneview)
- [使用 RcloneView 将 Google Drive 迁移到 Cloudflare R2](https://rcloneview.com/support/blog/migrate-google-drive-to-cloudflare-r2-rcloneview)
- [使用 RcloneView 将 Azure Blob 迁移到 Cloudflare R2](https://rcloneview.com/support/blog/migrate-azure-blob-to-cloudflare-r2-rcloneview)

<CloudSupportGrid />
