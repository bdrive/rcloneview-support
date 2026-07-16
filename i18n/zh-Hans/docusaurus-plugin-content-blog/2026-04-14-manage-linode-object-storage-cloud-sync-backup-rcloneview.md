---
slug: manage-linode-object-storage-cloud-sync-backup-rcloneview
title: "管理 Linode Object Storage — 使用 RcloneView 同步和备份文件"
authors:
  - tayson
description: "将 Linode Object Storage 连接到 RcloneView，通过图形界面管理您的 S3 兼容存储桶。无需 CLI 命令即可跨区域同步、备份和传输文件。"
keywords:
  - Linode Object Storage RcloneView
  - Linode 云存储同步
  - Linode 备份 GUI
  - Akamai 云存储管理
  - rclone Linode Object Storage
  - Linode S3 兼容存储
  - Linode 文件传输工具
  - Linode 云备份自动化
tags:
  - linode
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 管理 Linode Object Storage — 使用 RcloneView 同步和备份文件

> RcloneView 通过 S3 兼容 API 连接 Linode Object Storage，为开发者和 DevOps 团队提供可视化文件管理器，无需接触 CLI 即可管理 Linode 存储桶。

Linode Object Storage（现已成为 Akamai Cloud 的一部分）是一项与 Linode 计算平台紧密集成的 S3 兼容对象存储服务。在 Linode 服务器上运行应用的团队通常会将静态资源、数据库备份和部署产物存储在 Object Storage 中。RcloneView 的 S3 后端可以无缝连接，为您提供浏览存储桶、运行计划同步以及在 Linode 区域之间或迁移到其他提供商的可视化界面。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 将 Linode Object Storage 连接到 RcloneView

Linode Object Storage 使用 S3 兼容 API。在 RcloneView 中，前往 **远程标签 → 新建远程 → Amazon S3 Compatible**，选择 **Other**，或手动配置以下内容：

- **Access Key** — 在 Linode Cloud Manager 的 Object Storage → Access Keys 中生成
- **Secret Key** — 仅在创建时显示一次
- **Endpoint** — 因区域而异，例如 `us-east-1.linodeobjects.com` 或 `eu-central-1.linodeobjects.com`

保存后，您的 Linode 存储桶将出现在资源管理器面板中。您可以浏览对象、通过拖放上传文件、将选定对象下载到本地存储，并使用右键菜单执行标准文件操作。

<img src="/support/images/en/blog/new-remote.png" alt="Configuring Linode Object Storage as an S3 remote in RcloneView" class="img-large img-center" />

## 通过计划任务自动化 Linode 备份

一个常见的工作流：Linode 服务器会生成应用日志、数据库转储和用户上传的文件，这些文件需要定期备份到次要位置。使用 RcloneView 的任务管理器创建一个计划同步任务，将您的 Linode Object Storage 存储桶同步到 Backblaze B2 或 Amazon S3，从而实现跨提供商的冗余备份。

将同步配置为每天凌晨 4:00 运行，并将并发传输数设置为 8 以最大化吞吐量。启用校验和验证以确认数据在不同提供商之间的完整性。任务历史标签会记录每次运行的状态、文件数量、传输大小和持续时间——这在需要证明合规性的受监管环境中非常有用。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling automated Linode Object Storage backup jobs in RcloneView" class="img-large img-center" />

## 跨区域和跨提供商传输

Linode Object Storage 在多个区域（美国、欧洲、日本、澳大利亚）提供服务。当您需要将存储桶从 `us-east-1` 复制到 `eu-central-1` 以实现地理冗余时，请在 RcloneView 中设置两个 Linode 远程（每个区域一个），并在它们之间创建同步任务。这是一个完全的云到云传输——无需本地暂存，RcloneView 会在支持的情况下通过 rclone 的服务器端复制机制来处理。

对于完全迁移离开 Linode Object Storage 到其他提供商的情况（例如迁移到 Cloudflare R2 以实现零出口成本），方法相同：将两者都添加为远程，并创建一次性同步任务。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cross-region Linode Object Storage transfer in RcloneView" class="img-large img-center" />

## 快速开始

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 在 Linode Cloud Manager 中生成 Object Storage 访问密钥。
3. 在 RcloneView 中使用您的 Linode 凭据和端点添加一个新的 S3 兼容远程。
4. 在任务管理器中创建同步任务，自动将备份传输到您首选的次要存储。

通过 RcloneView 管理的 Linode Object Storage，将成为您云基础设施中一个受到良好监控的组件——具备计划备份、跨区域复制和完整的审计跟踪。

---

**相关指南：**

- [使用 RcloneView 将 Linode Object Storage 同步到 S3 和 Google Drive](https://rcloneview.com/support/blog/sync-linode-object-storage-s3-google-drive-rcloneview)
- [使用 RcloneView 管理 Cloudflare R2 云同步](https://rcloneview.com/support/blog/manage-cloudflare-r2-cloud-sync-rcloneview)
- [使用 RcloneView 集中管理 S3、Wasabi 和 R2](https://rcloneview.com/support/blog/centralize-s3-wasabi-r2-with-rcloneview)

<CloudSupportGrid />
