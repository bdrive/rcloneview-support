---
slug: manage-ovhcloud-object-storage-sync-rcloneview
title: "管理 OVHcloud 对象存储 — 使用 RcloneView 进行同步与备份"
authors:
  - tayson
description: "通过 S3 兼容凭证将 OVHcloud 对象存储连接到 RcloneView，将符合 GDPR 的欧洲存储桶与任意云服务商同步。"
keywords:
  - OVHcloud object storage RcloneView
  - OVHcloud S3 sync
  - OVHcloud backup rclone
  - OVHcloud cloud storage GUI
  - European GDPR cloud sync
  - OVHcloud bucket transfer
  - S3-compatible object storage
  - OVHcloud rcloneview setup
tags:
  - RcloneView
  - s3-compatible
  - object-storage
  - cloud-sync
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 管理 OVHcloud 对象存储 — 使用 RcloneView 进行同步与备份

> OVHcloud 对象存储是托管在欧洲、符合 GDPR 的 S3 兼容服务 —— RcloneView 通过 Access Key、Secret Key 和端点将其与您完整的云生态系统连接起来。

OVHcloud 是欧洲最大的云服务商之一，在法国、德国、英国等多个地区提供对象存储服务。其 S3 兼容接口意味着 RcloneView 可以像连接 AWS S3 一样连接它 —— 您提供凭证和端点，即可浏览、传输文件并自动执行备份。对于有欧洲数据驻留要求的组织而言，OVHcloud 与 RcloneView 的结合是一种实用且可审计的解决方案。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 获取您的 OVHcloud S3 凭证

OVHcloud 通过其 **High Performance Object Storage** 服务提供 S3 兼容访问。要获取凭证，请登录 OVHcloud 控制面板，打开您的项目，进入 **Object Storage**。在 **S3 users** 下，创建一个新用户并下载 Access Key 和 Secret Key。记下您所在区域的端点 —— 例如，Roubaix 为 `s3.rbx.io.cloud.ovh.net`，Gravelines 为 `s3.gra.io.cloud.ovh.net`。

请妥善保存端点 URL；它标识了您的存储桶所在的区域，必须与您在 RcloneView 中输入的内容一致。

<img src="/support/images/en/blog/new-remote.png" alt="Configuring OVHcloud Object Storage as a new remote in RcloneView" class="img-large img-center" />

## 将 OVHcloud 连接到 RcloneView

打开 RcloneView，进入 **Remote Manager**，点击 **New Remote**。从提供商列表中选择 **S3 Compatible**，并填写以下字段：

- **Access Key ID**：来自 OVHcloud S3 users 页面的密钥
- **Secret Access Key**：对应的密钥
- **Endpoint**：您所在区域的端点（例如 `s3.gra.io.cloud.ovh.net`）

保存远程连接后在文件浏览器中打开它。您的 OVHcloud 存储桶将显示在根目录下。进入任意存储桶即可查看按前缀组织的内容。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-to-cloud transfer between OVHcloud and another provider" class="img-large img-center" />

## 将 OVHcloud 与其他云服务商同步

在 RcloneView 中打开第二个面板，指向任意其他远程连接 —— Google Drive、Backblaze B2、其他 S3 兼容服务商，或本地文件夹。在面板之间拖放文件，或右键复制整个目录。对于大型存储桶迁移，**Job** 系统更为可靠：配置源和目标，在第 2 步设置并发数和带宽限制，并可选启用校验和验证。

OVHcloud 的 S3 API 支持大对象的分段上传，当 RcloneView 检测到文件超过一定大小阈值时会自动利用这一特性。这确保了大型视频文件、数据库转储文件或压缩包能够可靠传输，而不会触及单次请求的大小限制。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Real-time monitoring of OVHcloud transfer progress" class="img-large img-center" />

## 安排定期备份

使用 PLUS 许可证，您可以安排 OVHcloud 同步任务自动运行。进入 **Jobs**，配置任务，并在第 3 步设置 cron 计划 —— 例如，`0 3 * * *` 表示每晚 3 点同步一次。这对于备份流程特别有用：存储在其他地方的生产数据需要在 OVHcloud 中保留一份副本，以满足欧洲数据驻留合规要求。

**Job History** 会记录每次执行情况：已传输的文件、数据量、传输速度以及任何错误。如果夜间任务失败，日志条目会准确显示是哪些文件导致了问题，方便您快速排查。

## 快速上手

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 在 OVHcloud 控制面板中创建一个 S3 用户，并记下 Access Key、Secret Key 和区域端点。
3. 在 RcloneView 中打开 **Remote Manager**，点击 **New Remote**，选择 **S3 Compatible**，输入您的凭证。
4. 浏览您的存储桶并配置同步任务，将 OVHcloud 整合到您更广泛的云战略中。

OVHcloud 的欧洲基础设施与 RcloneView 灵活的任务系统相结合，为注重 GDPR 合规的多云工作流提供了可靠的组合。

---

**相关指南：**

- [管理 Scaleway 对象存储 — 使用 RcloneView 进行云同步](https://rcloneview.com/support/blog/manage-scaleway-object-storage-cloud-sync-rcloneview)
- [管理 IDrive E2 云同步与备份](https://rcloneview.com/support/blog/manage-idrive-e2-cloud-sync-backup-rcloneview)
- [使用 RcloneView 自动化每日云备份](https://rcloneview.com/support/blog/automate-daily-cloud-backups-with-rcloneview)

<CloudSupportGrid />
