---
slug: manage-quatrix-enterprise-file-sync-rcloneview
title: "管理 Quatrix 企业文件共享——使用 RcloneView 与 Google Drive、S3 等同步"
authors:
  - tayson
description: "Quatrix by Maytech 是一款企业文件共享平台。了解如何使用 RcloneView 将 Quatrix 与 Google Drive、S3 及其他云存储进行同步和备份。"
keywords:
  - quatrix file sharing
  - quatrix rclone
  - quatrix sync
  - quatrix backup
  - quatrix enterprise cloud
  - maytech quatrix
  - quatrix file transfer
  - quatrix google drive
  - quatrix s3 backup
  - enterprise file sharing sync
tags:
  - RcloneView
  - quatrix
  - enterprise
  - cloud-storage
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 管理 Quatrix 企业文件共享——使用 RcloneView 与 Google Drive、S3 等同步

> Quatrix by Maytech 提供具备合规特性的安全企业文件共享服务。但要将其与其他云平台集成，需要合适的工具。RcloneView 可将 Quatrix 与 70 多家提供商连接起来。

Quatrix 是一款企业级文件共享与传输平台，专注于安全性与合规性。许多组织使用它进行安全的外部文件交换，同时依赖 Google Drive 或 OneDrive 进行内部协作。RcloneView 将 Quatrix 与您的整个云生态系统连接起来。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 在 RcloneView 中设置 Quatrix

Quatrix 可通过其 API 或 WebDAV 接口访问：

1. 打开 RcloneView，点击 **添加远程**。
2. 为您的 Quatrix 环境选择合适的连接类型。
3. 输入您的 Quatrix 凭据。

<img src="/support/images/en/blog/new-remote.png" alt="Add Quatrix remote" class="img-large img-center" />

## 关键工作流程

### Quatrix → S3（异地备份）

将敏感的 Quatrix 数据加密备份到 AWS S3：

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule Quatrix backup" class="img-large img-center" />

### Google Drive → Quatrix（安全外部共享）

将文件从内部 Google Drive 移动到 Quatrix，以便与外部方进行安全共享。

### Quatrix → NAS（本地归档）

在您的 NAS 上保留一份 Quatrix 内容的本地副本，以用于合规归档。

## 验证与监控

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify Quatrix sync" class="img-large img-center" />

## 快速上手

1. **下载 RcloneView**，前往 [rcloneview.com](https://rcloneview.com/src/download.html)。
2. **添加 Quatrix**，与您的其他云存储一并管理。
3. **创建备份与同步任务**。
4. **设置计划并验证**。

企业文件共享，与一切互联。

---

**相关指南：**

- [创建同步任务](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [任务计划](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)
- [加密云备份](https://rcloneview.com/support/blog/encrypt-cloud-backups-crypt-remote-guide-rcloneview)

<CloudSupportGrid />
