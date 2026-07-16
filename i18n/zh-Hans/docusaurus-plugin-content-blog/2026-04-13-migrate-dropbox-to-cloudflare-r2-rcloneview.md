---
slug: migrate-dropbox-to-cloudflare-r2-rcloneview
title: "将 Dropbox 迁移到 Cloudflare R2 — 使用 RcloneView 传输文件"
authors:
  - tayson
description: "使用 RcloneView 将文件从 Dropbox 迁移到 Cloudflare R2。通过 OAuth 和 API 令牌连接，处理大文件，并享受 R2 的零出口费用。"
keywords:
  - migrate Dropbox to Cloudflare R2
  - Dropbox R2 transfer RcloneView
  - Dropbox to R2 migration
  - Cloudflare R2 cloud sync
  - zero egress cloud storage
  - cloud-to-cloud migration tool
  - Dropbox alternative R2
  - RcloneView migration guide
tags:
  - dropbox
  - cloudflare-r2
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 将 Dropbox 迁移到 Cloudflare R2 — 使用 RcloneView 传输文件

> Cloudflare R2 提供兼容 S3 的对象存储，且零出口费用 —— RcloneView 通过云到云同步任务，让从 Dropbox 迁移变得简单直接。

对于正在放弃 Dropbox 的团队来说，Cloudflare R2 已成为极具吸引力的替代方案。由于没有出口流量费用，并支持兼容 S3 的 API，R2 能够自然地融入开发者工作流、静态资源管道以及注重成本的归档策略。将现有的 Dropbox 文件迁移到 R2 是一次性的云到云迁移，RcloneView 无需将数据经由本地设备中转即可完成处理。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 步骤 1 — 连接 Dropbox

打开 RcloneView，进入 **远程管理器**。点击 **新建远程**，选择 **Dropbox**。与大多数 OAuth 提供商一样，Dropbox 会打开浏览器进行授权 —— 登录并点击 Allow。RcloneView 会存储令牌，远程会立即出现。在文件浏览器中打开它，确认可以看到你的 Dropbox 文件和文件夹。

如果你使用的是 Dropbox Business 账户，请确保登录的账户拥有你要迁移内容的所有权。他人拥有的共享文件夹可能存在访问限制。

<img src="/support/images/en/blog/new-remote.png" alt="Connecting Dropbox and Cloudflare R2 in RcloneView Remote Manager" class="img-large img-center" />

## 步骤 2 — 连接 Cloudflare R2

在 **远程管理器** 中，点击 **新建远程**，选择 **S3 Compatible**。Cloudflare R2 使用兼容 S3 的凭据：

- **Access Key ID**：来自你的 Cloudflare R2 API 令牌（可在 Cloudflare 控制台的 R2 > Manage API Tokens 中创建）
- **Secret Access Key**：对应的密钥
- **Endpoint**：`https://{account-id}.r2.cloudflarestorage.com`

你的 Account ID 会显示在 Cloudflare 控制台的侧边栏中。保存该远程后打开，确认可以看到你的 R2 存储桶。如果目标存储桶不存在，请先创建。

## 步骤 3 — 设置迁移任务

进入 **任务**，点击 **新建任务**。将 Dropbox 设为源端。你可以选择根目录以迁移所有内容，也可以选择特定文件夹。将 Cloudflare R2 设为目标端，并指向你的目标存储桶。

在任务向导的第 2 步中，配置迁移选项：

- 首先启用 **Dry Run（模拟运行）** 以预览文件列表
- 将 **transfers（传输数）** 设置为 4–6，适用于 Dropbox 迁移（更高的值可能触发 Dropbox 的速率限制）
- 启用 **校验和验证**，以确认大文件在传输过程中未损坏

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Migrating files from Dropbox to Cloudflare R2 cloud-to-cloud" class="img-large img-center" />

## 处理大文件

Cloudflare R2 支持最大 5 TB 的对象，RcloneView 会自动为大文件使用分段上传。Dropbox 单个文件的最大限制为 2 TB。实际上，对于大多数 Dropbox 迁移而言，文件大小都远在限制之内。如果你的文件异常大且传输失败，请查看 Log（日志）选项卡以获取具体错误信息，并考虑减少同时传输的数量。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Real-time transfer progress during Dropbox to R2 migration" class="img-large img-center" />

## 步骤 4 — 验证并完成

主迁移任务完成后，使用 **文件夹比较** 进行验证。并排打开 Dropbox 源端和 R2 目标端，让 RcloneView 识别出任何差异。对缺失的文件重新运行任务。确认迁移已完成后，即可将应用程序指向 R2，并逐步停用 Dropbox 访问。

## 开始使用

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 在 **远程管理器** 中通过 OAuth 连接 Dropbox。
3. 使用你的 API 令牌、密钥以及 Account ID 端点连接 Cloudflare R2。
4. 创建迁移任务，先运行 Dry Run 进行预览，再执行完整传输。

切换到 Cloudflare R2 可以摆脱 Dropbox 按用户计费的模式，并免除从 Cloudflare 网络访问内容所产生的出口费用。

---

**相关指南：**

- [使用 RcloneView 将 Wasabi 迁移到 Cloudflare R2](https://rcloneview.com/support/blog/migrate-wasabi-to-cloudflare-r2-rcloneview)
- [使用 RcloneView 将 Azure Blob 迁移到 Cloudflare R2](https://rcloneview.com/support/blog/migrate-azure-blob-to-cloudflare-r2-rcloneview)
- [使用 RcloneView 修复 Dropbox 速率限制 API 错误](https://rcloneview.com/support/blog/fix-dropbox-rate-limit-api-errors-rcloneview)

<CloudSupportGrid />
