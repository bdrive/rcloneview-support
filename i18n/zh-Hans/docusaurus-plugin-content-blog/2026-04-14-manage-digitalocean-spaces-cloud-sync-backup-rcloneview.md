---
slug: manage-digitalocean-spaces-cloud-sync-backup-rcloneview
title: "管理 DigitalOcean Spaces——使用 RcloneView 同步和备份文件"
authors:
  - tayson
description: "将 DigitalOcean Spaces 连接到 RcloneView，通过 GUI 管理您的对象存储。无需命令行即可跨区域同步、备份和传输文件。"
keywords:
  - DigitalOcean Spaces RcloneView
  - DigitalOcean Spaces sync
  - DigitalOcean Spaces backup
  - S3-compatible object storage GUI
  - DigitalOcean Spaces management
  - rclone DigitalOcean Spaces
  - cloud object storage sync
  - DigitalOcean backup tool
tags:
  - RcloneView
  - digitalocean-spaces
  - cloud-storage
  - cloud-sync
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 管理 DigitalOcean Spaces——使用 RcloneView 同步和备份文件

> RcloneView 通过 S3 兼容 API 连接到 DigitalOcean Spaces，为您提供一个可视化文件管理器，用于管理任意区域的对象存储存储桶。

DigitalOcean Spaces 是一款开发者友好的对象存储服务，采用统一定价模式并内置 CDN。在 DigitalOcean Droplets 上运行工作负载的团队通常会将备份、静态资源和部署产物存储在 Spaces 中。RcloneView 在 rclone 的 S3 兼容后端之上添加了图形化层，让您可以直观地浏览存储桶、运行计划同步任务，并将本地目录与远程存储进行比较——所有这些都无需使用命令行。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 在 RcloneView 中设置 DigitalOcean Spaces

DigitalOcean Spaces 使用 S3 兼容 API，因此您需要将其配置为 RcloneView 中的 S3 远程。进入 **Remote 选项卡 → New Remote → Amazon S3 Compatible**，然后选择 **DigitalOcean Spaces** 作为提供商。您需要准备：

- **Access Key ID**——在 DigitalOcean 控制面板的 API → Spaces Keys 中生成
- **Secret Access Key**——仅在生成时显示一次
- **Endpoint**——特定区域的端点，例如 `nyc3.digitaloceanspaces.com`

保存后，您的 Spaces 存储桶会立即出现在资源管理器面板中。您可以浏览存储桶内容，通过从本地文件夹拖放上传文件，并打开并排面板将 Droplet 的备份目录与 Spaces 存储桶进行比较。

<img src="/support/images/en/blog/new-remote.png" alt="Configuring DigitalOcean Spaces as an S3 remote in RcloneView" class="img-large img-center" />

## 将本地服务器同步到 DigitalOcean Spaces

一个典型的使用场景：开发团队在 CI 服务器上生成构建产物，并希望每晚将其推送到 Spaces 进行长期存储。使用 RcloneView 的任务管理器，创建一个从本地产物目录到 `do-spaces:artifacts-bucket/builds` 的同步任务。将计划设置为凌晨 3:00 运行，启用校验和验证，并添加最大文件大小过滤器以排除超过 500 MB 的临时文件。

1:N 同步选项可让您同时将同一产物目录镜像到 DigitalOcean Spaces 和 Amazon S3——这对于维护多区域冗余或在存储提供商之间过渡的团队非常有用。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitoring a DigitalOcean Spaces sync job in real time" class="img-large img-center" />

## 跨区域和跨提供商传输

当您需要在 Spaces 区域之间迁移数据（例如从 `nyc3` 迁移到 `sfo3`）或完全迁移到其他 S3 兼容提供商时，RcloneView 会将其作为直接的云到云传输处理。打开两个资源管理器面板——一个指向源 Spaces 存储桶，另一个指向目标存储桶——然后拖放文件或使用同步向导。

对于大规模迁移，在同步向导的第二步中将**文件传输数量**设置为 8–16，以最大化吞吐量。RcloneView 的实时传输监视器会显示每个文件的进度和整体速度，让您可以估算大型数据集的完成时间。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-to-cloud transfer between DigitalOcean Spaces and Amazon S3 in RcloneView" class="img-large img-center" />

## 快速入门

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 在 DigitalOcean 控制面板中生成 Spaces 访问密钥。
3. 使用您的 Spaces 凭据和端点在 RcloneView 中创建新的 S3 远程。
4. 在任务管理器中创建一个指向 Spaces 存储桶的同步任务并设置计划。

DigitalOcean Spaces 由此成为一个完全托管的计划备份目标——在一个界面中即可完成实时监控和任务历史记录查看。

---

**相关指南：**

- [使用 RcloneView 将 Google Drive 迁移到 DigitalOcean Spaces](https://rcloneview.com/support/blog/migrate-google-drive-to-digitalocean-spaces-rcloneview)
- [使用 RcloneView 将 DigitalOcean Spaces 挂载为本地驱动器](https://rcloneview.com/support/blog/mount-digitalocean-spaces-local-drive-rcloneview)
- [使用 RcloneView 集中管理 S3、Wasabi 和 R2](https://rcloneview.com/support/blog/centralize-s3-wasabi-r2-with-rcloneview)

<CloudSupportGrid />
