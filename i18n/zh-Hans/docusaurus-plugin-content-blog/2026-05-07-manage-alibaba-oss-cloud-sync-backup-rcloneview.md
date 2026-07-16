---
slug: manage-alibaba-oss-cloud-sync-backup-rcloneview
title: "管理阿里云 OSS——使用 RcloneView 同步和备份文件"
authors:
  - tayson
description: "了解如何将阿里云 OSS 连接到 RcloneView，浏览存储桶，并为亚太和中国区域的工作负载运行同步和备份任务。"
keywords:
  - Alibaba Cloud OSS
  - RcloneView
  - S3-compatible storage
  - cloud sync
  - cloud backup
  - object storage
  - Asia-Pacific cloud
  - rclone OSS
tags:
  - alibaba-cloud
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 管理阿里云 OSS——使用 RcloneView 同步和备份文件

> 阿里云 OSS 是面向亚太地区工作负载的领先对象存储平台——而 RcloneView 让你无需接触命令行即可轻松浏览、同步和备份存储桶。

阿里云对象存储服务（OSS）是那些在中国或整个亚太地区有数据驻留要求的团队的首选存储平台。无论你是要归档大型媒体文件、备份应用数据，还是在不同区域之间同步数据集，RcloneView 都能在 rclone 久经考验的 OSS 支持之上提供简洁的图形界面。无需单独安装 rclone——RcloneView 内置了 rclone 二进制文件。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 添加阿里云 OSS 作为远程

打开 RcloneView，点击侧边栏中的 **New Remote** 按钮。在提供商列表中选择 **S3 Compatible Storage**，然后选择 **Alibaba OSS** 作为提供商（如果显示的话，也可以选择专用的 **Alibaba Cloud Object Storage** 类型）。你需要提供 **Access Key ID**、**Access Key Secret** 以及适合你所在区域的正确 OSS 终端节点——例如，华东地区使用 `oss-cn-hangzhou.aliyuncs.com`，新加坡地区使用 `oss-ap-southeast-1.aliyuncs.com`。

输入凭据后，RcloneView 会立即验证连接并列出你的存储桶。如果你的存储桶位于特定区域，请确保终端节点匹配——终端节点不匹配是 OSS 连接失败最常见的原因。

<img src="/support/images/en/blog/new-remote.png" alt="Adding Alibaba Cloud OSS remote in RcloneView" class="img-large img-center" />

## 浏览存储桶并传输文件

添加远程后，阿里云 OSS 远程会出现在双栏文件浏览器中。你可以像浏览本地文件系统一样浏览文件夹和对象。将本地磁盘中的文件拖放到 OSS 存储桶中，或直接在 OSS 前缀之间移动对象。RcloneView 会实时显示传输进度，让你随时了解大文件上传的状态。

对于在多个区域拥有多个 OSS 存储桶的团队，你可以将每个区域的终端节点添加为单独的远程，并在一个 RcloneView 窗口中统一管理它们。这使得跨区域数据迁移变得简单，无需在多个命令行会话之间切换。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-to-cloud file transfer using RcloneView" class="img-large img-center" />

## 运行同步和备份任务

RcloneView 在 OSS 工作流中真正强大之处在于其同步任务系统。使用 **Job Wizard**，通过四个引导步骤即可从任意本地文件夹或云端远程创建到你的 OSS 存储桶的同步任务。**dry run**（模拟运行）选项让你在正式执行前预览将要传输的文件——在处理大型 OSS 存储桶时这一点至关重要。

RcloneView 的 **1:N 同步** 功能允许你将一个源同时同步到多个 OSS 存储桶，这对于在多个 OSS 区域之间维护冗余副本非常有用。**Job Manager** 会跟踪所有正在运行的任务，而 **Job History** 则提供过往传输的完整日志以供审计。PLUS 许可证持有者可以为这些任务设置定期计划，让备份自动运行，无需人工干预。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a sync job for Alibaba OSS in RcloneView" class="img-large img-center" />

## 快速上手

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 点击 **New Remote**，选择 **S3 Compatible Storage**，并选择 **Alibaba OSS** 作为提供商。
3. 输入你的 **Access Key ID**、**Access Key Secret** 以及 OSS 区域终端节点。
4. 在双栏浏览器中浏览你的存储桶，并拖拽文件进行传输。
5. 打开 **Job Manager**，使用向导创建同步任务，在首次正式同步前先运行一次 dry run。

阿里云 OSS 天然契合任何亚太地区的数据工作流，而 RcloneView 消除了命令行的门槛，让你的整个团队都能自信地管理存储。

---

**相关指南：**

- [管理 Amazon S3——使用 RcloneView 同步和备份](https://rcloneview.com/support/blog/manage-amazon-s3-cloud-sync-backup-rcloneview)
- [管理 Cloudflare R2——使用 RcloneView 进行云同步](https://rcloneview.com/support/blog/manage-cloudflare-r2-cloud-sync-rcloneview)
- [使用 RcloneView 集中管理 S3、Wasabi 和 R2](https://rcloneview.com/support/blog/centralize-s3-wasabi-r2-with-rcloneview)

<CloudSupportGrid />
