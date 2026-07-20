---
slug: sync-nextcloud-google-drive-s3-rcloneview
title: "使用 RcloneView 将 Nextcloud 与 Google Drive、S3 及其他云同步"
authors:
  - tayson
description: "Nextcloud 是领先的自托管云平台。了解如何使用 RcloneView 将 Nextcloud 同步和备份到 Google Drive、AWS S3 或 Backblaze B2。"
keywords:
  - nextcloud sync
  - nextcloud backup cloud
  - nextcloud rclone
  - nextcloud google drive
  - nextcloud s3 backup
  - nextcloud external storage
  - sync nextcloud files
  - nextcloud migration
  - nextcloud multi cloud
  - nextcloud off site backup
tags:
  - RcloneView
  - nextcloud
  - self-hosted
  - cloud-storage
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 使用 RcloneView 将 Nextcloud 与 Google Drive、S3 及其他云同步

> Nextcloud 让你完全掌控自己的数据。但自托管也意味着自己负责备份。RcloneView 将 Nextcloud 连接到 70 多个云存储提供商,便于异地备份、迁移和多云工作流。

Nextcloud 是最受欢迎的自托管云平台,数百万用户用它进行文件同步、协作和注重隐私的存储。但是,将 Nextcloud 部署在自己的基础设施上,意味着你要自行负责备份、灾难恢复和数据迁移。RcloneView 将 Nextcloud 与云生态系统的其他部分连接起来。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 为什么要将 Nextcloud 连接到外部云?

- **异地备份** — 如果你的 Nextcloud 服务器出现故障,没有外部备份的话数据将会丢失。
- **迁移** — 从 Google Drive/OneDrive 迁移到 Nextcloud,或反之亦然。
- **混合云** — 敏感数据存放在 Nextcloud,共享数据存放在 Google Drive。
- **交付给客户** — 将成果文件从 Nextcloud 复制到客户的 Dropbox 或 OneDrive。
- **成本优化** — 将旧的 Nextcloud 数据归档到廉价的对象存储(B2、S3 Glacier)。

## 在 RcloneView 中设置 Nextcloud

### 通过 WebDAV 连接

1. 打开 RcloneView,点击 **Add Remote**。
2. 选择类型为 **WebDAV**。
3. 输入你的 Nextcloud WebDAV 网址:`https://your-nextcloud.com/remote.php/dav/files/USERNAME/`
4. 输入你的 Nextcloud 用户名和应用密码。

<img src="/support/images/en/blog/new-remote.png" alt="Add Nextcloud via WebDAV" class="img-large img-center" />

现在,你的 Nextcloud 文件会出现在 RcloneView 的双栏浏览器中。

## 关键工作流程

### 1) Nextcloud → S3(异地备份)

安排从 Nextcloud 到 AWS S3 或 Backblaze B2 的夜间备份计划:

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule Nextcloud backup" class="img-large img-center" />

### 2) Google Drive → Nextcloud(迁移)

从 Google 迁移到自托管平台:

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Migrate Google Drive to Nextcloud" class="img-large img-center" />

### 3) Nextcloud → Google Drive(共享)

将特定文件夹复制到 Google Drive,以便与外部合作伙伴协作。

### 4) 加密异地备份

在此基础上叠加加密层,实现零知识加密备份。即使是你的云备份提供商也无法读取你的 Nextcloud 数据。

## 验证备份

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify Nextcloud backup" class="img-large img-center" />

## 快速上手

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 通过 WebDAV **添加 Nextcloud**。
3. **添加你的备份/同步目标**。
4. **安排自动备份计划**。
5. **通过文件夹对比进行验证**。

自托管,也能安心备份。

---

**相关指南:**

- [创建同步任务](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [任务调度](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)
- [加密云备份](https://rcloneview.com/support/blog/encrypt-cloud-backups-crypt-remote-guide-rcloneview)

<CloudSupportGrid />
