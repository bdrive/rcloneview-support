---
slug: manage-scaleway-object-storage-cloud-sync-rcloneview
title: "管理 Scaleway 对象存储 — 使用 RcloneView 进行云同步与备份"
authors:
  - tayson
description: "使用 S3 兼容凭证将 Scaleway 对象存储连接到 RcloneView,快速将您的欧洲云存储桶与其他任何提供商同步。"
keywords:
  - Scaleway 对象存储 RcloneView
  - Scaleway S3 兼容同步
  - Scaleway 云备份
  - Scaleway rclone 图形界面
  - 欧洲云存储同步
  - Scaleway 存储桶传输
  - S3 兼容云同步
  - Scaleway rcloneview 设置
tags:
  - s3-compatible
  - object-storage
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 管理 Scaleway 对象存储 — 使用 RcloneView 进行云同步与备份

> Scaleway 对象存储是一项 S3 兼容的欧洲云服务 — 只需使用访问密钥(Access Key)、私密密钥(Secret Key)和端点 URL,即可在几分钟内将其连接到 RcloneView。

Scaleway 是一家法国云服务提供商,在欧洲多个地区提供 S3 兼容的对象存储服务。对于需要符合 GDPR 合规要求且价格具有竞争力的存储服务的团队来说,它是一个不错的选择。RcloneView 支持任何 S3 兼容的提供商,这意味着您可以连接 Scaleway、浏览您的存储桶,并与所有其他云端远程一起设置同步任务 — 无需使用命令行。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 获取您的 Scaleway 凭证

在 RcloneView 中进行连接之前,您需要从 Scaleway 控制台获取**访问密钥(Access Key)**和**私密密钥(Secret Key)**。登录 console.scaleway.com,进入您的项目或组织下的**凭证(Credentials)**,然后生成一个新的 API 密钥。请务必记下私密密钥 — 它仅显示一次。同时记下您所在地区的端点,其格式为 `s3.{region}.scw.cloud`(例如,阿姆斯特丹为 `s3.nl-ams.scw.cloud`,巴黎为 `s3.fr-par.scw.cloud`)。

访问密钥、私密密钥和端点这三项信息,就是在 RcloneView 中配置 Scaleway 所需的全部内容。

<img src="/support/images/en/blog/new-remote.png" alt="Adding a Scaleway S3-compatible remote in RcloneView" class="img-large img-center" />

## 将 Scaleway 连接到 RcloneView

打开 RcloneView,进入**远程管理器(Remote Manager)**。点击**新建远程(New Remote)**,然后从提供商列表中选择 **S3 Compatible**。在配置表单中,输入:

- **Provider**:Other (S3-compatible)
- **Access Key ID**:您的 Scaleway 访问密钥
- **Secret Access Key**:您的 Scaleway 私密密钥
- **Endpoint**:您所在地区的端点(例如 `s3.nl-ams.scw.cloud`)

如果系统提示,请将区域字段留空,或输入 Scaleway 的区域代码。保存该远程后,它将出现在您的远程管理器中。点击**打开(Open)**,即可在文件浏览器中浏览您的 Scaleway 存储桶。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitoring a Scaleway transfer in real time" class="img-large img-center" />

## 浏览存储桶并传输文件

文件浏览器会在顶层显示您的 Scaleway 存储桶。进入任意存储桶即可查看其中的对象和文件夹前缀。您可以选中文件和目录,然后将它们复制或移动到第二个面板中打开的另一个远程 — 无论是 AWS S3、Backblaze B2,还是本地目录。

对于大型数据集,右键点击文件夹并使用**复制到(Copy to)**或**移动到(Move to)**即可发起批量传输。RcloneView 会实时显示传输速度和预计完成时间等进度信息。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Transferring files between Scaleway and another cloud" class="img-large img-center" />

## 设置定时同步任务

对于 Scaleway 与其他提供商之间的自动备份或常规数据管道任务,**任务(Job)**系统可以可靠地处理这些工作。进入**任务(Jobs)**,点击**新建任务(New Job)**,将 Scaleway 配置为源或目标。在任务的高级选项中,您可以设置带宽限制、控制传输并发数,并启用校验和验证以确认数据完整性。

使用 PLUS 许可证,您可以使用类似 cron 的语法来调度任务 — 例如,每晚 2 点从另一个云端同步到 Scaleway。任务结果会记录在**任务历史(Job History)**中,让您清楚地了解每次运行的传输数量和任何错误。

## 快速上手

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 从 Scaleway 控制台获取您的访问密钥、私密密钥和区域端点。
3. 打开**远程管理器(Remote Manager)**,点击**新建远程(New Remote)**,选择 **S3 Compatible**,并输入您的凭证。
4. 浏览您的存储桶,并创建同步任务以自动化与 Scaleway 之间的备份。

Scaleway 的欧洲基础设施与 RcloneView 的多云任务系统相结合,非常适合注重 GDPR 合规的工作流程。

---

**相关指南:**

- [使用 RcloneView 将 Google Cloud Storage 同步到 Wasabi](https://rcloneview.com/support/blog/sync-google-cloud-storage-to-wasabi-rcloneview)
- [管理 IDrive E2 云同步与备份](https://rcloneview.com/support/blog/manage-idrive-e2-cloud-sync-backup-rcloneview)
- [使用 RcloneView 进行校验和验证的云迁移](https://rcloneview.com/support/blog/checksum-verified-cloud-migrations-rcloneview)

<CloudSupportGrid />
