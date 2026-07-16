---
slug: manage-oracle-cloud-storage-sync-rcloneview
title: "管理 Oracle 云对象存储 — 使用 RcloneView 进行同步和备份"
authors:
  - tayson
description: "使用 S3 兼容访问密钥将 Oracle 云对象存储连接到 RcloneView，轻松浏览存储桶并运行自动化同步和备份任务。"
keywords:
  - Oracle 云对象存储
  - RcloneView
  - S3 兼容
  - 云同步
  - 云备份
  - OCI 存储
  - 对象存储
  - rclone oracle
tags:
  - RcloneView
  - oracle-cloud
  - object-storage
  - cloud-storage
  - cloud-sync
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 管理 Oracle 云对象存储 — 使用 RcloneView 进行同步和备份

> Oracle 云对象存储提供有竞争力的价格和强大的企业级 SLA — RcloneView 为您提供了一个简单的图形界面，用于管理、同步和备份您的 OCI 存储桶。

Oracle Cloud Infrastructure（OCI）对象存储是一个完全兼容 S3 的对象存储服务，拥有丰厚的永久免费套餐和企业级的持久性保障。在 OCI 上运行工作负载或寻找 AWS S3 高性价比替代方案的团队，会发现 Oracle 云对象存储是一个极具吸引力的选择。RcloneView 通过 S3 兼容 API 与其连接，为存储桶管理、文件传输和自动化同步任务提供了功能齐全的图形界面 — 无需使用命令行。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 在 RcloneView 中设置 Oracle 云对象存储

要将 RcloneView 连接到 Oracle 云对象存储，您需要三样东西：一个 **Customer Access Key**（不是您的 OCI API 密钥）、**命名空间（namespace）**，以及**区域端点（regional endpoint）**。在 OCI 控制台的用户配置文件下的 Customer Secret Keys 中生成访问密钥。端点格式为 `https://<namespace>.compat.objectstorage.<region>.oraclecloud.com` — 例如，`https://axyz1234abcd.compat.objectstorage.us-ashburn-1.oraclecloud.com`。

在 RcloneView 中，点击 **New Remote**，选择 **S3 Compatible Storage**，然后从提供商下拉菜单中选择 **Oracle Cloud Infrastructure Object Storage**。粘贴您的 Access Key ID、Secret Key 和区域端点。将区域字段设置为与您的 OCI 区域代码匹配。点击 **Save**，RcloneView 将立即连接并列出您的存储桶。

<img src="/support/images/en/blog/new-remote.png" alt="Adding Oracle Cloud Object Storage remote in RcloneView" class="img-large img-center" />

## 浏览存储桶和管理文件

连接后，Oracle 云对象存储的表现与 RcloneView 双栏浏览器中的其他远程一样。您可以浏览存储桶命名空间和对象前缀，通过拖放上传文件，并将对象下载到本地计算机。RcloneView 会显示实时传输指标，方便您监控大文件上传的进度。

如果您为了地理冗余而使用多个 OCI 区域，可以将每个区域端点添加为一个单独命名的远程。这样您就可以在浏览器中并排打开它们，并通过云到云传输直接在区域之间复制对象 — 无需本地下载。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-to-cloud file transfer between OCI buckets in RcloneView" class="img-large img-center" />

## 创建同步任务以进行备份

RcloneView 的**任务向导（Job Wizard）**通过四个步骤引导您创建到 Oracle 云对象存储或从其发起的同步任务：选择源、选择目标、配置选项，以及在运行前进行审阅。请先使用**空运行（dry run）**模式，确切查看将要传输或删除哪些文件 — 这在同步到 OCI 时尤为重要，因为同步操作可能会删除目标端中源端已不存在的文件。

**任务历史（Job History）**面板会记录每次任务运行的时间戳和传输统计信息，为您提供合规审计所需的记录。PLUS 许可证用户可以为每个任务添加**计划任务（schedule）**，让备份自动运行 — 例如每晚凌晨 2 点 — 无需任何手动操作。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history log for Oracle Cloud sync jobs in RcloneView" class="img-large img-center" />

## 快速上手

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 在 OCI 控制台生成一个 **Customer Secret Key**，并记下您的命名空间和区域。
3. 在 RcloneView 中，依次点击 **New Remote** > **S3 Compatible Storage** > **Oracle Cloud Infrastructure Object Storage**。
4. 输入您的 Access Key ID、Secret Key 和区域端点 URL。
5. 浏览您的存储桶，并使用**任务向导**创建您的第一个同步或备份任务。

Oracle 云对象存储对 S3 的兼容性，使其能够无缝加入任何通过 RcloneView 管理的多云策略中。

---

**相关指南：**

- [管理 Amazon S3 — 使用 RcloneView 进行同步和备份](https://rcloneview.com/support/blog/manage-amazon-s3-cloud-sync-backup-rcloneview)
- [使用 RcloneView 集中管理 S3、Wasabi 和 R2](https://rcloneview.com/support/blog/centralize-s3-wasabi-r2-with-rcloneview)
- [管理 IDrive e2 — 使用 RcloneView 进行云同步和备份](https://rcloneview.com/support/blog/manage-idrive-e2-cloud-sync-backup-rcloneview)

<CloudSupportGrid />
