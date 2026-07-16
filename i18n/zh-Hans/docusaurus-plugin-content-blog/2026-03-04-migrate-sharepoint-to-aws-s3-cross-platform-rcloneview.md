---
slug: migrate-sharepoint-to-aws-s3-cross-platform-rcloneview
title: "使用 RcloneView 将 SharePoint 文件迁移到 AWS S3 以实现跨平台访问"
authors:
  - tayson
description: "使用 RcloneView 将 Microsoft SharePoint 文档库迁移或备份到 AWS S3——实现跨平台访问、长期归档或多云冗余。"
keywords:
  - sharepoint to s3
  - sharepoint migration aws
  - sharepoint backup s3
  - migrate sharepoint files
  - sharepoint to aws transfer
  - sharepoint archival s3
  - sharepoint cross platform
  - sharepoint rclone
  - sharepoint s3 sync
  - sharepoint document library backup
tags:
  - RcloneView
  - sharepoint
  - aws-s3
  - cloud-storage
  - migration
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 使用 RcloneView 将 SharePoint 文件迁移到 AWS S3 以实现跨平台访问

> SharePoint 对以 Microsoft 为中心的团队来说非常适用，但当你需要将数据放到 AWS 上或在 Microsoft 生态系统之外访问时，导出文件就变得比预期更困难。RcloneView 弥补了这一差距。

Microsoft SharePoint 与 Microsoft 365 深度集成，是许多企业默认的文档存储方案。但当你的开发团队运行在 AWS 上、数据科学管道需要访问 S3，或者你只是需要一个跨平台备份时——从 SharePoint 提取数据就成了一项挑战。RcloneView 可连接到 SharePoint 文档库，并通过可视化、可验证的工作流将内容传输到 S3（或任何云存储）。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 为什么要将 SharePoint 迁移到 S3？

- **基于 AWS 的基础设施** —— 你的应用和计算资源运行在 AWS 上，数据也需要放在那里。
- **跨平台访问** —— S3 可通过统一的 API，从任何语言、框架或平台访问。
- **具有成本效益的归档** —— S3 Glacier 提供比 SharePoint 更便宜的长期存储。
- **合规性** —— 部分法规要求在 Microsoft 生态系统之外保留数据副本。
- **供应商多样化** —— 降低对单一供应商的依赖。

## 连接 SharePoint

1. 点击 **添加远程**（Add Remote）→ 选择 **SharePoint**（或 **OneDrive for Business**）。
2. 通过 OAuth 进行身份验证——RcloneView 会打开浏览器进行 Microsoft 登录。
3. 选择要访问的 SharePoint 站点和文档库。
4. 保存——你的 SharePoint 文档库现在可以浏览了。

### 连接 AWS S3

1. 点击 **添加远程**（Add Remote）→ 选择 **Amazon S3**。
2. 输入你的 Access Key ID 和 Secret Access Key。
3. 选择你的区域。

<img src="/support/images/en/blog/new-remote.png" alt="Add SharePoint and S3 remotes" class="img-large img-center" />

## 迁移工作流

### 阶段一：浏览与评估

将 SharePoint 文档库与 S3 存储桶并排查看：

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Browse SharePoint alongside S3" class="img-large img-center" />

### 阶段二：复制

1. 创建一个 **复制任务**（Copy job）：SharePoint 文档库 → S3 存储桶。
2. 运行传输并实时监控。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitor SharePoint to S3 transfer" class="img-large img-center" />

### 阶段三：验证

使用[文件夹对比](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)确认迁移的完整性：

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify SharePoint migration to S3" class="img-large img-center" />

### 阶段四：自动化持续同步

在过渡期间保持 SharePoint 与 S3 同步：

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule SharePoint to S3 sync" class="img-large img-center" />

## 使用场景

- **数据管道摄取** —— 自动将 SharePoint 文档推送到 S3，供 AWS Lambda、Glue 或 Athena 处理。
- **长期归档** —— 将旧的 SharePoint 内容迁移到 S3 Glacier，节省 Microsoft 许可成本。
- **灾难恢复** —— 为关键的 SharePoint 数据维护一个独立的 S3 副本。

## 开始使用

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. **添加 SharePoint** 和 **AWS S3** 作为远程。
3. **复制、验证、计划任务** —— 完成完整迁移或持续同步。

SharePoint 并不意味着供应商锁定。RcloneView 让你的 Microsoft 数据变得可移植。

---

**相关指南：**

- [SharePoint 迁移到 Google Drive](https://rcloneview.com/support/blog/sharepoint-to-google-drive-migration-rcloneview)
- [添加 AWS S3 及兼容 S3 的存储](https://rcloneview.com/support/howto/remote-storage-connection-settings/s3)
- [对比文件夹内容](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [任务调度](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)

<CloudSupportGrid />
