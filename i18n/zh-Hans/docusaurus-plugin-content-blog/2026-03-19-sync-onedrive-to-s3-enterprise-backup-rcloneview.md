---
slug: sync-onedrive-to-s3-enterprise-backup-rcloneview
title: "将 OneDrive 同步到 AWS S3 — 使用 RcloneView 实现企业级云到云备份"
authors:
  - tayson
description: "OneDrive 用于协作，S3 用于持久备份。使用 RcloneView 为企业数据保护设置自动化的 OneDrive 到 S3 备份。"
keywords:
  - onedrive to s3 backup
  - sync onedrive aws
  - onedrive cloud backup
  - onedrive s3 sync
  - onedrive enterprise backup
  - onedrive offsite backup
  - microsoft 365 backup s3
  - onedrive aws transfer
  - onedrive data protection
  - onedrive redundancy
tags:
  - onedrive
  - s3
  - aws-s3
  - enterprise
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 将 OneDrive 同步到 AWS S3 — 使用 RcloneView 实现企业级云到云备份

> Microsoft 365 并不包含真正的备份功能。误删文件、勒索软件或管理员操作失误都可能永久破坏 OneDrive 数据。S3 备份能为你提供所需的独立副本。

Microsoft 365 的保留策略并不等同于备份。已删除的项目会在回收站中保留 93 天，之后就会被永久清除。勒索软件可以加密在所有设备间同步的文件。管理员的误操作可能会清空整个团队站点。在 Microsoft 生态系统之外，于 AWS S3 上建立独立备份，才能提供真正的数据保护。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 为什么选择 S3 作为 OneDrive 备份？

- **独立提供商** — 即使 Microsoft 出现问题，你的 S3 备份也不会受到影响
- **版本控制** — S3 版本控制功能可保留每个文件的历史副本
- **成本分层** — 使用 S3 Glacier 进行长期保留，费用低至 1 美元/TB/月
- **合规性** — S3 Object Lock 支持不可篡改的备份（满足监管要求）

## 设置备份

<img src="/support/images/en/blog/new-remote.png" alt="Connect OneDrive and S3" class="img-large img-center" />

## 创建备份任务

在一个窗格中打开 OneDrive，在另一个窗格中打开 S3。为每个部门或用户创建复制任务：

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="OneDrive to S3 backup" class="img-large img-center" />

## 安排自动备份计划

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule OneDrive backup" class="img-large img-center" />

设置为每晚运行。每次运行仅传输发生变化的内容，从而将成本降至最低。

## 验证与监控

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify OneDrive backup" class="img-large img-center" />

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Monitor backup jobs" class="img-large img-center" />

## 合规加密

在数据到达 S3 之前，使用 crypt 远程对 OneDrive 备份进行加密——无需依赖 S3 自身的加密功能即可满足数据保护要求。

## 快速上手

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 添加 **OneDrive** 和 **AWS S3** 远程。
3. **创建复制任务**用于备份。
4. **安排每晚运行**并每周进行验证。

协作在 OneDrive，保护在 S3。

---

**相关指南：**

- [将 Google Drive 同步到 Backblaze B2](https://rcloneview.com/support/blog/sync-google-drive-to-backblaze-b2-rcloneview)
- [将 Dropbox 同步到 S3 备份](https://rcloneview.com/support/blog/sync-dropbox-to-s3-backup-rcloneview)
- [云存储安全检查清单](https://rcloneview.com/support/blog/cloud-storage-security-checklist-rcloneview)

<CloudSupportGrid />
