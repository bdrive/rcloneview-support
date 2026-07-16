---
slug: migrate-onedrive-to-amazon-s3-rcloneview
title: "将 OneDrive 迁移到 Amazon S3 —— 使用 RcloneView 传输文件"
authors:
  - tayson
description: "使用 RcloneView 将 OneDrive 迁移到 Amazon S3 —— 通过图形界面实现云到云文件传输、文档归档，并降低对 Microsoft 存储的依赖。"
keywords:
  - OneDrive to Amazon S3 migration
  - OneDrive to S3 transfer
  - cloud migration tool
  - RcloneView OneDrive
  - S3 archive
  - OneDrive export
  - Microsoft to AWS migration
  - cloud-to-cloud transfer
  - OneDrive S3 backup
  - reduce OneDrive costs
tags:
  - RcloneView
  - onedrive
  - amazon-s3
  - cloud-to-cloud
  - migration
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 将 OneDrive 迁移到 Amazon S3 —— 使用 RcloneView 传输文件

> OneDrive 适合 Microsoft 365 工作流，而 S3 在高性价比归档和 AWS 集成方面表现出色 —— RcloneView 可以将您的 OneDrive 内容直接迁移到 S3，无需任何本地下载。

OneDrive 能够自然地融入 Microsoft 365 环境，但对于希望降低 Microsoft 许可成本、整合到 AWS 基础设施，或需要 S3 原生归档的企业来说，有时需要将 OneDrive 内容迁移到 Amazon S3。RcloneView 提供了直接的云到云迁移途径 —— 同时连接 OneDrive 和 S3，在两者之间流式传输数据，而无需占用本地磁盘空间。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 连接 OneDrive 和 Amazon S3

在 RcloneView 中通过 OAuth 浏览器身份验证添加 **Microsoft OneDrive** —— **远程标签 > 新建远程 > Microsoft OneDrive**。然后使用您的 Access Key ID、Secret Access Key 和 AWS 区域添加 **Amazon S3**。对于 OneDrive for Business 账户，请将远程配置为指向您所在组织的租户及相应的库。

<img src="/support/images/en/blog/new-remote.png" alt="Adding OneDrive and Amazon S3 remotes in RcloneView" class="img-large img-center" />

两个远程都激活后,即可在 RcloneView 的双面板浏览器中并排浏览它们 —— 左侧是 OneDrive 的文件夹层级结构,右侧是您的 S3 存储桶结构。这个视图有助于您规划迁移映射:哪些 OneDrive 文件夹应对应到哪些 S3 前缀。

## 传输文件

在**任务管理器**中,创建一个从 OneDrive 文件夹到目标 S3 存储桶路径的**复制**任务。对于一家需要将 1.5 TB 归档项目文件从 OneDrive 迁移到 S3 的公司来说,复制(而非同步)是正确的任务类型 —— 它在迁移期间保留源文件,同时将所有内容复制到 S3,为删除前的验证留出时间。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="OneDrive to Amazon S3 migration job in RcloneView" class="img-large img-center" />

高级设置中的多线程传输和并发文件数设置可以最大化吞吐量。RcloneView 底层的 rclone 会处理 OneDrive 的 API 限流和自动重试 —— 即使服务商暂时对请求进行限速,迁移也会持续进行,无需人工干预。

## 验证与清理

迁移完成后,使用**文件夹对比**功能确认所有文件都已正确传输。将 OneDrive 源与 S3 目标进行对比 —— 对比视图会显示每一侧独有的文件以及匹配的文件,在删除 OneDrive 内容之前为您提供明确的核对清单。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verifying OneDrive to S3 migration with Folder Compare in RcloneView" class="img-large img-center" />

确认无误后,OneDrive 内容便可分阶段归档或删除。**任务历史记录**会永久保存本次迁移的日志 —— 传输了什么内容、何时传输、传输了多少数据 —— 这在停用 Microsoft 365 订阅时对合规文档记录十分有用。

## 快速上手

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 添加 **OneDrive** 远程(OAuth)和 **Amazon S3** 远程(Access Key 凭据)。
3. 在任务管理器中创建从 OneDrive 到您的 S3 存储桶的**复制**任务。
4. 在删除 OneDrive 内容之前,使用**文件夹对比**验证所有文件都已传输完成。

借助 RcloneView 将 OneDrive 迁移到 Amazon S3,可以把复杂的 IT 项目变成一个可监控的自动化任务 —— 在每一步都拥有完整的可见性和验证能力。

---

**相关指南:**

- [使用 RcloneView 将 OneDrive 迁移到 Google Drive](https://rcloneview.com/support/blog/migrate-onedrive-to-google-drive-rcloneview)
- [使用 RcloneView 将 OneDrive 迁移到 Backblaze B2](https://rcloneview.com/support/blog/migrate-onedrive-to-backblaze-b2-rcloneview)
- [管理 OneDrive 云存储 —— 使用 RcloneView 进行同步和备份](https://rcloneview.com/support/blog/manage-onedrive-cloud-sync-backup-rcloneview)

<CloudSupportGrid />
