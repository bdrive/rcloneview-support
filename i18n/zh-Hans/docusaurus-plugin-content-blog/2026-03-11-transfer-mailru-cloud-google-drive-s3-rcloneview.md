---
slug: transfer-mailru-cloud-google-drive-s3-rcloneview
title: "使用 RcloneView 安全地将 Mail.ru Cloud 文件传输到 Google Drive 或 S3"
authors:
  - tayson
description: "使用 RcloneView，安全并附带传输校验地将您的 Mail.ru Cloud 数据迁移或备份到 Google Drive、AWS S3 或其他国际云存储提供商。"
keywords:
  - mail.ru cloud backup
  - mail.ru to google drive
  - mail.ru cloud migration
  - mail.ru cloud export
  - mail.ru rclone
  - mail.ru cloud sync
  - mail.ru file transfer
  - mailru cloud alternative
  - mail.ru cloud to s3
  - mail.ru data export
tags:
  - RcloneView
  - mailru
  - cloud-storage
  - migration
  - backup
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 使用 RcloneView 安全地将 Mail.ru Cloud 文件传输到 Google Drive 或 S3

> 需要将您的 Mail.ru Cloud 数据迁移到国际云存储提供商吗？RcloneView 可将您的文件传输到 Google Drive、S3 或任何其他云存储，并提供校验功能以确保数据不丢失。

Mail.ru Cloud（Облако Mail.ru）是俄罗斯及独联体国家中最受欢迎的云存储服务之一，提供慷慨的免费存储空间。但越来越多的用户希望将数据分散到国际云存储提供商中——出于冗余备份、可访问性或合规性方面的考虑。RcloneView 通过直接连接 Mail.ru Cloud，并支持向 70 多个云存储提供商进行传输，让这一切变得简单。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 为什么要从 Mail.ru Cloud 传输数据？

- **地理位置多样化** — 将重要数据的副本存储在不同地区以实现冗余备份。
- **国际可访问性** — Google Drive 和 OneDrive 在全球范围内比 Mail.ru Cloud 更易于访问。
- **合规性** — 某些法规要求数据存储在特定司法管辖区。
- **备份** — 任何单一提供商策略都存在风险。在其他地方保留第二份副本至关重要。
- **迁移** — 若要迁移到 Google Workspace 或 Microsoft 365 用于商业用途，需要导出 Mail.ru 数据。

## 连接 Mail.ru Cloud

1. 打开 RcloneView，点击 **Add Remote**。
2. 从提供商列表中选择 **Mail.ru Cloud**。
3. 输入您的 Mail.ru 凭据（电子邮箱和应用专用密码）。
4. 保存——您的 Mail.ru Cloud 文件现在即可浏览。

<img src="/support/images/en/blog/new-remote.png" alt="Add Mail.ru Cloud remote" class="img-large img-center" />

## 浏览您的文件

在同一界面中查看您的整个 Mail.ru Cloud 文件库以及目标云存储：

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Browse Mail.ru Cloud alongside Google Drive" class="img-large img-center" />

## 传输场景

### Mail.ru → Google Drive

最常见的迁移路径：

1. 通过 [OAuth](https://rcloneview.com/support/howto/remote-storage-connection-settings/add-oath-online-login) 添加 Google Drive。
2. 创建一个复制任务：Mail.ru → Google Drive。
3. 运行并监控。
4. 使用[文件夹比较](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)进行校验。

### Mail.ru → AWS S3

用于长期归档：

1. 通过 [S3 设置](https://rcloneview.com/support/howto/remote-storage-connection-settings/s3)添加 S3。
2. 创建一个复制任务：Mail.ru → S3 存储桶。
3. 使用 S3 生命周期策略以获得具有成本效益的存储分级。

### Mail.ru → 加密云备份

如需更高的安全性，可同步到一个[加密远程](https://rcloneview.com/support/blog/zero-cli-crypt-remote-rcloneview)，在上传到任何目标位置之前对文件进行加密。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Run Mail.ru transfer job" class="img-large img-center" />

## 校验您的传输

复制完成后，确认数据完整性：

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify Mail.ru Cloud transfer" class="img-large img-center" />

## 自动化持续同步

如果您希望将 Mail.ru Cloud 作为主存储，并将变更同步到备份位置：

1. 创建一个同步任务并将其设置为每日执行。
2. 通过 [Telegram](https://rcloneview.com/support/blog/rcloneview-telegram-remote-control)（在独联体地区很受欢迎）获取通知。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule Mail.ru sync" class="img-large img-center" />

## 开始使用

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. **添加 Mail.ru Cloud** 作为远程。
3. **添加您的目标位置**（Google Drive、S3、OneDrive）。
4. **复制**您的文件并使用文件夹比较进行**校验**。
5. 如果两者都保留，请**设置计划任务**以实现持续同步。

将云存储多样化是明智的数据管理方式。RcloneView 让将 Mail.ru Cloud 数据传输到国际云存储提供商变得简单、可校验且自动化。

---

**相关指南：**

- [通过浏览器登录方式添加远程（OAuth）](https://rcloneview.com/support/howto/remote-storage-connection-settings/add-oath-online-login)
- [添加 AWS S3 及兼容 S3 的存储](https://rcloneview.com/support/howto/remote-storage-connection-settings/s3)
- [比较文件夹内容](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [创建同步任务](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [任务计划](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)

<CloudSupportGrid />
