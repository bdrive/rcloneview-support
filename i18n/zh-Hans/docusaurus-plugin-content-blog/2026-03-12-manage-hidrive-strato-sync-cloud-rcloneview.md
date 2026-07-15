---
slug: manage-hidrive-strato-sync-cloud-rcloneview
title: "管理 STRATO HiDrive——使用 RcloneView 与 Google Drive、S3 及其他云同步"
authors:
  - tayson
description: "STRATO HiDrive 是德国和欧洲流行的云存储服务。了解如何使用 RcloneView 将 HiDrive 与 Google Drive、S3 及其他提供商进行同步和备份。"
keywords:
  - hidrive cloud storage
  - strato hidrive sync
  - hidrive rclone
  - hidrive google drive
  - hidrive backup
  - hidrive file transfer
  - german cloud storage
  - strato hidrive backup
  - hidrive s3 sync
  - european cloud storage
tags:
  - RcloneView
  - hidrive
  - european-cloud
  - cloud-storage
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 管理 STRATO HiDrive——使用 RcloneView 与 Google Drive、S3 及其他云同步

> STRATO HiDrive 是德国最流行的云存储服务之一,提供符合 GDPR 标准、服务器位于欧盟境内的存储服务。但如果你的工作流程涉及 Google Drive、S3 或国际协作者,你就需要一种方式来打通这些渠道。

STRATO 旗下的 HiDrive 是一家值得信赖的欧洲云存储提供商,被德国企业和个人广泛使用。存储在 HiDrive 中的数据保留在德国服务器上,受严格的欧盟数据保护法律管辖。RcloneView 将 HiDrive 与 70 多个其他云提供商连接起来,在保持你的欧盟数据主权的同时,实现备份、迁移和多云工作流程。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 为什么选择 HiDrive?

- **符合 GDPR** —— 数据存储在受欧盟法律管辖的德国服务器上。
- **可靠的基础设施** —— STRATO 是欧洲最大的托管服务提供商之一。
- **WebDAV/SFTP 访问** —— 支持标准协议集成。
- **优惠的价格** —— 具有竞争力的欧洲云存储价格。

## 在 RcloneView 中设置 HiDrive

### 通过 WebDAV 或 SFTP 连接

1. 打开 RcloneView,点击 **Add Remote**。
2. 选择 **WebDAV** 或 **SFTP** 作为类型。
3. 输入你的 HiDrive 服务器 URL 和凭据。

<img src="/support/images/en/blog/new-remote.png" alt="Add HiDrive remote" class="img-large img-center" />

## 关键工作流程

### HiDrive → S3(欧盟外的异地备份)

为实现跨地区的灾难恢复,备份到另一个提供商:

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule HiDrive backup" class="img-large img-center" />

### Google Drive → HiDrive(GDPR 迁移)

将数据从基于美国的云服务迁移到符合 GDPR 标准的 HiDrive:

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Migrate to HiDrive for GDPR" class="img-large img-center" />

### HiDrive → Google Drive(协作)

将特定文件夹同步到 Google Drive,以便国际团队协作。

### 加密备份

在 HiDrive 存储的基础上使用 crypt 远程实现额外加密。

## 验证和监控

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify HiDrive sync" class="img-large img-center" />

## 快速上手

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 通过 WebDAV 或 SFTP **添加 HiDrive**。
3. **与其他云同步**以实现备份或协作。
4. **安排自动化任务**。

在保持欧洲数据主权的同时享有全球云的灵活性。

---

**相关指南:**

- [创建同步任务](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [任务调度](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)
- [加密云备份](https://rcloneview.com/support/blog/encrypt-cloud-backups-crypt-remote-guide-rcloneview)

<CloudSupportGrid />
