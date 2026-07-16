---
slug: manage-azure-blob-storage-cloud-sync-rcloneview
title: "管理 Azure Blob 存储 — 使用 RcloneView 同步和备份文件"
authors:
  - tayson
description: "使用 RcloneView 管理 Azure Blob 存储 — 通过图形界面同步容器、备份文件,并在 Azure 与其他云之间传输数据。"
keywords:
  - Azure Blob 存储管理
  - Azure blob 同步
  - Azure 备份工具
  - RcloneView Azure
  - Azure 容器同步
  - 云存储管理
  - Azure 文件传输
  - blob 存储 GUI
  - Azure Blob rclone
  - Azure 对象存储备份
tags:
  - RcloneView
  - azure
  - cloud-storage
  - cloud-sync
  - backup
  - object-storage
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 管理 Azure Blob 存储 — 使用 RcloneView 同步和备份文件

> Azure Blob 存储为云原生应用和企业数据湖提供动力 — RcloneView 将其容器带入可视化文件管理界面,实现高效的同步、备份和跨云迁移。

Azure Blob 存储是微软面向云原生应用、数据湖和企业归档的对象存储核心。虽然 Azure 门户适合偶尔浏览,但批量传输、跨云迁移和备份自动化则需要更灵活的方式。RcloneView 连接到 Azure Blob 存储,将您的容器与其他所有云远程一起直接带入多面板文件管理器。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 将 Azure Blob 存储连接到 RcloneView

在 RcloneView 中,打开 **Remote tab > New Remote**,然后从供应商列表中选择 **Microsoft Azure Blob Storage**。您需要提供存储账户名称,以及账户密钥或 SAS(共享访问签名)令牌。输入这些凭据并保存远程后,您的 blob 容器将以顶级文件夹的形式出现在资源管理面板中。

<img src="/support/images/en/blog/new-remote.png" alt="在 RcloneView 中添加 Azure Blob 存储作为新远程" class="img-large img-center" />

导航非常直观 — 容器可展开显示其 blob 路径,您还可以按名称筛选、查看大小和修改时间戳。与 Azure 门户扁平的 blob 列表不同,RcloneView 的文件夹树视图让分层前缀结构的浏览变得直观。您还可以右键单击任意项目查看其大小、复制其路径或发起传输。

## 将 Azure Blob 与其他云同步

Azure Blob 存储常用于归档来自其他平台的数据。一家媒体公司若要将视频资产从本地 NAS 迁移到 Azure Blob,可以在 RcloneView 的 **Job Manager** 中配置同步任务:源为 NAS 的 SFTP 远程,目标为对应的 Azure 容器。并发传输和多线程上传设置能够为大批量迁移最大化吞吐量。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="RcloneView 中从 NAS 到 Azure Blob 存储的云到云同步" class="img-large img-center" />

对于混合云架构,在 Azure Blob 与 Amazon S3 或 Cloudflare R2 之间同步容器可实现冗余而不产生供应商锁定。甚至可以在 RcloneView 中直接同步两个配置了不同存储账户的 Azure Blob 远程,使跨账户迁移变得简单。

## 定时备份自动化

需要定期备份到 Azure Blob 的组织可以使用 RcloneView 基于 cron 的调度功能(PLUS 许可证)来配置全自动任务。例如,一家法律事务所若要每晚将案件文档归档到 Azure Blob,只需设置一次调度 — 周一至周五每天凌晨 2 点执行 — RcloneView 便会自动处理执行。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="在 RcloneView 中调度 Azure Blob 存储备份任务" class="img-large img-center" />

**Job History** 标签页提供完整的审计跟踪:每次运行的开始时间、持续时间、传输字节数、移动文件数以及状态。对于合规性要求较高的工作流,该日志可以准确回答数据上次备份的时间以及任务是否成功完成。

## 快速上手

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 转到 **Remote tab > New Remote**,选择 **Microsoft Azure Blob Storage**,并输入您的账户名称和密钥。
3. 在资源管理面板中浏览您的容器 — 导航前缀、查看文件大小。
4. 在 **Job Manager** 中,在 Azure Blob 与其他存储之间设置同步或备份任务。

借助 RcloneView,管理 Azure Blob 存储就像管理本地磁盘一样简单 — 并能全面掌握存储内容、传输历史和定时执行情况。

---

**相关指南:**

- [使用 RcloneView 将 Azure Blob 存储挂载为本地磁盘](https://rcloneview.com/support/blog/mount-azure-blob-storage-local-drive-rcloneview)
- [使用 RcloneView 将 Azure Blob 迁移到 Cloudflare R2](https://rcloneview.com/support/blog/migrate-azure-blob-to-cloudflare-r2-rcloneview)
- [使用 RcloneView 管理 Azure Files 云同步](https://rcloneview.com/support/blog/manage-azure-files-cloud-sync-rcloneview)

<CloudSupportGrid />
