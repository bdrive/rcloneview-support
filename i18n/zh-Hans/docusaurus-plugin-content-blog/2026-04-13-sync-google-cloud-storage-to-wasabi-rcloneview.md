---
slug: sync-google-cloud-storage-to-wasabi-rcloneview
title: "将 Google Cloud Storage 同步到 Wasabi —— 使用 RcloneView 实现经济高效的备份"
authors:
  - tayson
description: "将数据从 Google Cloud Storage 迁移到 Wasabi 兼容 S3 的存储，可显著节省成本。RcloneView 同时支持这两个服务商，并可自动化同步任务。"
keywords:
  - Google Cloud Storage to Wasabi sync
  - GCS Wasabi migration RcloneView
  - Wasabi cost-effective cloud backup
  - Google Cloud Storage backup alternative
  - S3-compatible cloud migration
  - cloud storage cost optimization
  - GCS Wasabi transfer
  - RcloneView Google Cloud Wasabi
tags:
  - google-cloud-storage
  - wasabi
  - cloud-to-cloud
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 将 Google Cloud Storage 同步到 Wasabi —— 使用 RcloneView 实现经济高效的备份

> Wasabi 以远低于 Google Cloud Storage 每 GB 成本的价格提供热云存储 —— RcloneView 可连接两者，并自动化迁移或持续同步过程。

Google Cloud Storage 与 GCP 工作流深度集成，但对于大型数据集而言，其存储费用会迅速累积。Wasabi 提供兼容 S3 的热存储，采用按 TB 计费的统一定价模式，且不收取出站流量费用，因此非常适合作为次要备份目标或节省成本的迁移目的地。RcloneView 同时支持这两个服务商，并可在单一 GUI 界面中处理同步任务。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 连接 Google Cloud Storage

在 RcloneView 中，Google Cloud Storage（GCS）可以通过两种方式连接：使用原生 GCS 提供商，或使用兼容 S3 的接口。对于大多数配置，原生 GCS 提供商更为直接。打开**远程管理器（Remote Manager）**，点击**新建远程（New Remote）**，然后选择 **Google Cloud Storage**。

您需要提供**项目编号（Project Number）**（可在 GCP 控制台的 Project Info 中找到）。身份验证可使用服务账号 JSON 密钥或 OAuth。若使用服务账号访问，请从 GCP 控制台 → IAM & Admin → Service Accounts 下载 JSON 密钥，并在远程配置中指定该路径。若使用 OAuth，RcloneView 会打开浏览器以完成 Google 账号授权。

<img src="/support/images/en/blog/new-remote.png" alt="Configuring Google Cloud Storage and Wasabi remotes in RcloneView" class="img-large img-center" />

## 连接 Wasabi

在**远程管理器（Remote Manager）**中，点击**新建远程（New Remote）**并选择 **S3 Compatible**（Wasabi 兼容 S3）。填写以下信息：

- **Access Key ID**：可在 Wasabi 控制台的 Access Keys 中获取
- **Secret Access Key**：对应的密钥
- **Endpoint**：您所在区域对应的 Wasabi 终端节点（例如 `s3.us-east-1.wasabisys.com` 或 `s3.eu-central-1.wasabisys.com`）

保存该远程。在继续操作前，请确认您的 Wasabi 存储桶已出现在文件资源管理器中。

## 设置同步任务

前往**任务（Jobs）**并点击**新建任务（New Job）**。将 Google Cloud Storage 设置为源 —— 选择具体的存储桶或文件夹路径。将 Wasabi 设置为目标，并指定目标存储桶和路径。

在任务向导的第 2 步中，进行以下配置以确保大规模同步的可靠性：

- **Transfers（传输数）**：8–16（GCS 和 Wasabi 都能很好地处理高并发）
- **Checkers（检查器数）**：8–16（控制并行运行的相等性检查数量）
- **Checksum verification（校验和验证）**：启用以确认数据完整性
- **Dry Run（模拟运行）**：先启用以查看同步范围

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Real-time monitoring of Google Cloud Storage to Wasabi sync" class="img-large img-center" />

## 安排持续同步

如果 GCS 仍是您的主要存储，而 Wasabi 作为经济高效的备份层，请安排一个周期性同步任务。使用 PLUS 许可证时，打开任务设置，在第 3 步中添加 cron 计划 —— 例如 `0 2 * * *` 表示每晚凌晨 2 点执行备份。

RcloneView 的增量同步意味着首次迁移完成后，每次运行只会传输发生变化或新增的文件。**任务历史（Job History）**选项卡会记录每次运行的文件数量、传输的数据量、速度和错误信息 —— 为您提供清晰的审计记录。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling Google Cloud Storage to Wasabi sync in RcloneView" class="img-large img-center" />

## 成本考量

Wasabi 的定价模式不收取按请求计费的费用，也不收取出站流量费用（在使用限额内），这使得大型数据集的成本更加可预测。GCS → Wasabi 的迁移确实会产生 GCS 的出站流量费用，但对于迁移而言这只是一次性支出。对于持续备份而言，数据来自您的服务器或应用管道，因此出站流量的影响取决于您的具体配置。

## 开始使用

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 在**远程管理器（Remote Manager）**中，使用您的项目编号和服务账号 JSON 或 OAuth 连接 Google Cloud Storage。
3. 使用 Access Key、Secret Key 和区域终端节点连接 Wasabi。
4. 创建同步任务，运行 Dry Run 以确认范围，然后安排持续自动备份。

将 GCS 备份迁移到 Wasabi 通常能显著降低存储成本，同时不影响数据的可访问性。

---

**相关指南：**

- [使用 RcloneView 管理 Scaleway 对象存储](https://rcloneview.com/support/blog/manage-scaleway-object-storage-cloud-sync-rcloneview)
- [使用 RcloneView 将 Wasabi 迁移到 Cloudflare R2](https://rcloneview.com/support/blog/migrate-wasabi-to-cloudflare-r2-rcloneview)
- [使用 RcloneView 自动化每日云备份](https://rcloneview.com/support/blog/automate-daily-cloud-backups-with-rcloneview)

<CloudSupportGrid />
