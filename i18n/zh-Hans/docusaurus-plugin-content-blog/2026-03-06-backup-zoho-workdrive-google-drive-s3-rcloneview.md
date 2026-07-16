---
slug: backup-zoho-workdrive-google-drive-s3-rcloneview
title: "使用 RcloneView 自动将 Zoho WorkDrive 备份到 Google Drive 或 S3"
authors:
  - tayson
description: "使用 RcloneView 的 WebDAV 连接，自动按计划将您的 Zoho WorkDrive 数据备份到 Google Drive、AWS S3 或外部存储，保护您的数据安全。"
keywords:
  - zoho workdrive backup
  - zoho to google drive
  - zoho workdrive sync
  - zoho workdrive export
  - backup zoho files
  - zoho workdrive to s3
  - zoho cloud backup tool
  - zoho workdrive migration
  - zoho workdrive rclone
  - zoho file backup automation
tags:
  - zoho
  - sync
  - webdav
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 使用 RcloneView 自动将 Zoho WorkDrive 备份到 Google Drive 或 S3

> Zoho WorkDrive 是一款出色的协作工具，但您的备份方案是什么？如果您的 Zoho 订阅到期或数据被意外删除，将数据独立备份到 Google Drive 或 S3 可以确保数据不会丢失。

Zoho WorkDrive 深受运行 Zoho 生态系统（CRM、邮件、项目和共享文件存储集于一体）的企业欢迎。但 Zoho 并未提供将 WorkDrive 数据备份到其他云的原生方式。如果您出于灾难恢复、合规性或迁移目的需要一份独立副本，RcloneView 通过 WebDAV 连接到 WorkDrive，填补了这一空白。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 为什么要备份 Zoho WorkDrive？

- **没有原生跨云备份** — Zoho 不提供内置的导出到 S3 或导出到 Google Drive 的功能。
- **意外删除风险** — 团队成员可能会删除共享文件。如果没有外部备份，可能无法恢复。
- **依赖订阅** — 如果您的 Zoho 套餐到期或被降级，文件访问可能会受到限制。
- **合规要求** — 某些法规要求将数据存储在多个独立位置。
- **迁移灵活性** — 如果您日后决定从 Zoho 迁移到 Google Workspace 或 Microsoft 365，拥有备份可以让过渡更加顺畅。

## 通过 WebDAV 连接 Zoho WorkDrive

Zoho WorkDrive 支持 WebDAV 访问，RcloneView 可以原生连接：

1. 打开 RcloneView 并点击 **Add Remote**。
2. 从提供商列表中选择 **WebDAV**。
3. 输入您的 Zoho WorkDrive WebDAV 详细信息：
   - **URL**：您的 Zoho WorkDrive WebDAV 端点。
   - **Username**：您的 Zoho 邮箱。
   - **Password**：来自 Zoho 安全设置的应用专用密码。
4. 保存 — 您的 WorkDrive 文件和文件夹现在即可浏览。

有关 WebDAV 设置详情，请参阅 [WebDAV 连接指南](https://rcloneview.com/support/howto/remote-storage-connection-settings/webdav)。

<img src="/support/images/en/blog/new-remote.png" alt="Add Zoho WorkDrive via WebDAV" class="img-large img-center" />

## 浏览您的 WorkDrive 文件

连接后，您可以在双栏 Explorer 中浏览整个 WorkDrive：

- 查看团队文件夹、个人文件和共享空间。
- 检查文件大小以估算备份存储需求。
- 识别需要优先备份的关键文件夹。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Browse Zoho WorkDrive files" class="img-large img-center" />

## 备份到 Google Drive

1. **添加 Google Drive** 作为第二个远程（通过 [OAuth 登录](https://rcloneview.com/support/howto/remote-storage-connection-settings/add-oath-online-login)）。
2. **创建 Copy 任务**：Zoho WorkDrive → Google Drive 文件夹。
3. **运行初始备份** — 所有文件将保留文件夹结构进行传输。
4. 使用 [任务计划](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution) **设置每日计划**，实现自动增量更新。

## 备份到 AWS S3

1. **添加 S3** 作为远程（[S3 设置指南](https://rcloneview.com/support/howto/remote-storage-connection-settings/s3)）。
2. **创建 Copy 任务**：Zoho WorkDrive → S3 存储桶。
3. **设置计划**，每晚运行。
4. 使用 S3 生命周期策略将旧备份转移到 Glacier 以节省成本。

## 验证您的备份

每次备份运行后，使用 [文件夹对比](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents) 确认完整性：

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify Zoho WorkDrive backup" class="img-large img-center" />

## 自动化与监控

1. **安排备份** 在非高峰时段每日运行。
2. 通过 [Slack](https://rcloneview.com/support/blog/rcloneview-slack-remote-control) 或 [Telegram](https://rcloneview.com/support/blog/rcloneview-telegram-remote-control) **获取通知**。
3. **查看任务历史** 以跟踪所有备份运行情况。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule Zoho WorkDrive backups" class="img-large img-center" />

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Zoho backup job history" class="img-large img-center" />

## 开始使用

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 通过 WebDAV **添加 Zoho WorkDrive**。
3. **添加备份目标**（Google Drive、S3、外部驱动器）。
4. **创建 Copy 任务** 并设置计划。
5. 使用文件夹对比进行 **验证**。

不要让您的 Zoho WorkDrive 数据在没有备份方案的情况下存在。RcloneView 为您提供自动化、经过验证的备份，可备份到任何云端 — 带来 Zoho 无法原生提供的安心保障。

---

**相关指南：**

- [添加 WebDAV](https://rcloneview.com/support/howto/remote-storage-connection-settings/webdav)
- [通过浏览器登录（OAuth）添加远程](https://rcloneview.com/support/howto/remote-storage-connection-settings/add-oath-online-login)
- [添加 AWS S3 及兼容 S3 的存储](https://rcloneview.com/support/howto/remote-storage-connection-settings/s3)
- [对比文件夹内容](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [任务计划](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)

<CloudSupportGrid />
