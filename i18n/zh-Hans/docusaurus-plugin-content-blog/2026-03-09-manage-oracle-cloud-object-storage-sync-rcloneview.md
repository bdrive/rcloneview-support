---
slug: manage-oracle-cloud-object-storage-sync-rcloneview
title: "管理 Oracle Cloud 对象存储 — 使用 RcloneView 与 S3、Google Drive 和 NAS 同步"
authors:
  - tayson
description: "Oracle Cloud Infrastructure 提供极具竞争力的对象存储定价。了解如何使用 RcloneView 在多个云之间管理、同步和备份 Oracle Cloud 对象存储。"
keywords:
  - oracle cloud object storage
  - oracle cloud storage sync
  - oracle oci rclone
  - oracle cloud s3 compatible
  - oracle cloud backup tool
  - oracle object storage gui
  - oracle cloud file manager
  - oracle oci storage transfer
  - sync oracle cloud google drive
  - oracle cloud storage migration
tags:
  - oracle-cloud
  - s3-compatible
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 管理 Oracle Cloud 对象存储 — 使用 RcloneView 与 S3、Google Drive 和 NAS 同步

> Oracle Cloud Infrastructure (OCI) 提供 10 GB 免费对象存储，超出部分的价格也极具竞争力。但要在管理其他云的同时管理 OCI 存储，需要合适的工具。

Oracle Cloud 对象存储兼容 S3、持久耐用且经济实惠 — 尤其是在 Oracle 慷慨的免费套餐和 Always Free 资源加持下。许多组织将 OCI 与 AWS、Google Cloud 或 Azure 一起使用。RcloneView 将它们全部连接起来，为你提供一个可视化界面，用于在管理 Oracle Cloud 对象存储的同时管理其他 70 多个提供商。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 为什么选择 Oracle Cloud 对象存储？

### 具有竞争力的定价

| 特性 | Oracle Cloud | AWS S3 | Google Cloud |
|---------|-------------|--------|-------------|
| 存储（TB/月） | $26 | $23 | $20 |
| 出站流量（前 10 TB） | 免费 | $90 | $120 |
| 免费套餐 | 10 GB + Always Free | 5 GB（12 个月） | 5 GB |

Oracle 最大的优势：每月前 10 TB **免费出站流量**。如果你经常下载数据，仅这一项就能节省数百美元。

### S3 兼容性

OCI 对象存储提供兼容 S3 的 API，这意味着任何支持 S3 的工具 — 包括 rclone 和 RcloneView — 都可以用于 Oracle Cloud。

### 企业级特性

- **存储层级**：标准、低频访问和归档。
- **对象版本控制**：防止意外删除造成的损失。
- **生命周期策略**：自动在不同层级之间迁移数据。
- **复制**：跨区域复制以实现灾难恢复。

## 在 RcloneView 中设置 Oracle Cloud

### 获取凭据

1. 登录 OCI 控制台。
2. 依次进入 Identity → Users → Your user → Customer Secret Keys。
3. 生成 Access Key 和 Secret Key。
4. 记下你的 namespace 和 region（例如 `us-phoenix-1`）。

### 将 Oracle Cloud 添加为远程

1. 打开 RcloneView 并点击 **Add Remote**。
2. 选择 **S3 Compatible** 作为类型。
3. 选择 **Oracle**（或 Other S3）作为提供商。
4. 输入你的 Access Key、Secret Key、region 和 endpoint。

<img src="/support/images/en/blog/new-remote.png" alt="Add Oracle Cloud Object Storage remote" class="img-large img-center" />

Endpoint 格式为：`https://<namespace>.compat.objectstorage.<region>.oraclecloud.com`

## 实用工作流

### 1）可视化浏览 Oracle Cloud

无需再打开 OCI 控制台进行文件管理。在 RcloneView 的双栏浏览器中浏览你的存储桶和对象：

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Browse Oracle Cloud in RcloneView" class="img-large img-center" />

### 2）从 AWS S3 迁移到 Oracle Cloud

利用 Oracle 的免费出站流量，将数据从 S3 迁移过来：

1. 将 S3 和 Oracle Cloud 都添加为远程。
2. 创建一个从 S3 → Oracle Cloud 的复制任务。
3. 监控传输过程，并通过 Folder Comparison 进行验证。

### 3）将 Oracle Cloud 与 Google Drive 同步

在 Oracle Cloud 上归档的同时，在 Google Drive 上保留一份便于协作的副本：

- 安排每天从 Google Drive → Oracle Cloud 的同步。
- Oracle Cloud 作为你持久耐用、经济实惠的归档存储。

### 4）多云备份策略

将 Oracle Cloud 作为多云备份的一环：

```
Primary (Google Drive) → Oracle Cloud (archive with free egress)
Primary (Google Drive) → Backblaze B2 (second archive)
```

### 5）NAS 到 Oracle Cloud 的备份

将你的 Synology 或 QNAP NAS 备份到 Oracle Cloud：

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule NAS to Oracle Cloud backup" class="img-large img-center" />

## 验证传输

比较你的源和 Oracle Cloud 目标：

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify Oracle Cloud transfer" class="img-large img-center" />

## 监控大型传输

跟踪上传到 Oracle Cloud 的进度：

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitor Oracle Cloud upload" class="img-large img-center" />

## Oracle Cloud 存储层级

针对每种使用场景选择合适的层级：

| 层级 | 最适合 | 价格 |
|------|----------|-------|
| Standard | 频繁访问的数据 | $26/TB/月 |
| Infrequent Access | 每月访问 | $10/TB/月 |
| Archive | 每年访问 | $3/TB/月 |

生命周期策略可以根据数据的存放时长自动在不同层级之间迁移数据。

## 开始使用

1. **创建 Oracle Cloud 账户**（含 10 GB 免费存储）。
2. **下载 RcloneView**，访问 [rcloneview.com](https://rcloneview.com/src/download.html)。
3. **添加 Oracle Cloud** 作为 S3 兼容的远程。
4. **浏览、传输、同步**，与其他云一起管理。
5. **安排自动备份**，实现无人值守操作。

Oracle Cloud 的免费出站流量使其对于你经常访问的数据尤其具有吸引力。

---

**相关指南：**

- [创建同步任务](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [任务调度](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)
- [比较文件夹内容](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)

<CloudSupportGrid />
