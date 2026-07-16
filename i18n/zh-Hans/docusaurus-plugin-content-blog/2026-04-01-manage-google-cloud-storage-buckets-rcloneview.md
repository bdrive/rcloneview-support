---
slug: manage-google-cloud-storage-buckets-rcloneview
title: "使用 RcloneView 管理 Google Cloud Storage 存储桶"
authors:
  - tayson
description: "使用 RcloneView 以可视化方式浏览、上传、同步和管理 Google Cloud Storage(GCS)存储桶。无需 CLI —— 通过 GUI 实现完整的 GCS 管理。"
keywords:
  - google cloud storage rcloneview
  - manage gcs buckets gui
  - rclone google cloud storage
  - gcs bucket management tool
  - google cloud storage gui
  - sync files google cloud storage
  - upload to gcs without cli
  - rcloneview gcs
  - google cloud storage backup
  - gcs rclone gui
tags:
  - google-cloud-storage
  - object-storage
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 使用 RcloneView 管理 Google Cloud Storage 存储桶

> Google Cloud Storage 是 GCP 的对象存储支柱 —— 持久、快速,并与 Google 云平台深度集成。RcloneView 为你的 GCS 存储桶提供可视化文件管理器,无需依赖 `gsutil` 或 GCP 控制台。

对于已经在使用 Google Cloud Platform 的团队来说,无论是用于应用数据、机器学习数据集、BigQuery 暂存,还是媒体分发,Google Cloud Storage(GCS)都是首选的对象存储。虽然 `gsutil` 和 GCP 控制台可以完成任务,但它们在批量文件操作和日常文件管理方面速度较慢。RcloneView 为 GCS 存储桶提供双栏文件管理器,让你可以像使用桌面文件资源管理器一样浏览、传输和同步文件。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## RcloneView 为 GCS 管理带来了什么

| 任务 | GCP 控制台 | gsutil CLI | RcloneView |
|------|------------|------------|------------|
| 可视化浏览存储桶 | ✓ | ✗ | ✓ |
| 拖放上传 | 有限 | ✗ | ✓ |
| 同步到其他云 | ✗ | ✗ | ✓ |
| 传输到本地磁盘 | 慢 | ✓ | ✓ |
| 计划同步任务 | ✗ | 手动 | ✓ |
| 实时传输监控 | ✗ | ✓ | ✓ |

## 将 Google Cloud Storage 连接到 RcloneView

### 第一步 —— 创建服务账号

在 GCP 控制台中:

1. 进入 **IAM & Admin → Service Accounts**。
2. 创建一个新的服务账号,并赋予 **Storage Admin**(或用于读写但不管理存储桶的 **Storage Object Admin**)角色。
3. 生成一个 JSON 密钥文件并下载。

### 第二步 —— 在 RcloneView 中添加 GCS 远程

打开 RcloneView 并点击 **New Remote**:

<img src="/support/images/en/blog/new-remote.png" alt="Add Google Cloud Storage remote in RcloneView" class="img-large img-center" />

1. 从远程类型列表中选择 **Google Cloud Storage**。
2. 指向你下载的 **JSON 服务账号密钥文件**。
3. 输入你的 **GCP 项目 ID**。
4. 为远程命名(例如 `gcs-prod`)并保存。

连接后,你的 GCS 存储桶将作为顶层文件夹出现在 RcloneView 的文件浏览器中。

## 浏览和管理 GCS 存储桶

进入任意存储桶即可查看其内容。RcloneView 会将对象键的层级结构渲染为文件夹,与 GCP 控制台中看到的一致。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Browse GCS buckets in RcloneView" class="img-large img-center" />

在双栏界面中,你可以:
- **复制文件**:在 GCS 路径之间,或与本地磁盘之间
- **移动对象**:在同一存储桶内或跨存储桶
- **删除对象**:带确认提示
- **重命名**:通过使用新键复制并删除旧对象实现

## 在 GCS 与本地之间同步文件

### 将本地数据集上传到 GCS

1. 在 RcloneView 中打开一个 **Job**。
2. 将源设置为你的本地文件夹(例如 `D:\ml-dataset\`)。
3. 将目标设置为一个 GCS 路径(例如 `gcs-prod:my-ml-bucket/training-data/`)。
4. 选择 **Copy**(仅添加新文件)或 **Sync**(完全镜像)。
5. 运行任务并实时监控进度。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Upload dataset to GCS in RcloneView" class="img-large img-center" />

### 跨云:GCS 到其他提供商

RcloneView 可以在云之间直接传输。常见的 GCS 工作流包括:

- **GCS → AWS S3** —— 跨云复制存储桶以实现冗余
- **GCS → Backblaze B2** —— 将冷数据归档到更廉价的存储
- **GCS → Google Drive** —— 与非技术相关方共享处理后的输出
- **GCS → 本地 NAS** —— 拉取数据用于本地处理

## GCS 存储类别识别

GCS 提供多种存储类别:Standard、Nearline、Coldline 和 Archive。在 RcloneView 中设置同步任务时,你可以传递 rclone 标志,为新对象指定特定的存储类别:

| 存储类别 | 使用场景 | 最短存储期限 |
|--------------|----------|--------------------------|
| Standard | 频繁访问的数据 | 无 |
| Nearline | 每月访问 | 30 天 |
| Coldline | 每季度访问 | 90 天 |
| Archive | 每年访问 | 365 天 |

对于归档数据,可在 RcloneView 任务编辑器的 **Custom flags** 字段中传递 `--gcs-storage-class COLDLINE`。

## 计划定期 GCS 同步

对于周期性备份任务 —— 例如夜间上传、每日暂存同步或每周归档运行:

1. 创建一个包含源和 GCS 目标的任务。
2. 打开 **Schedule** 设置。
3. 设置频率(每日、每周、自定义 cron)。
4. 启用完成后的邮件或通知提醒。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule GCS sync job" class="img-large img-center" />

## 使用文件夹比较进行验证

在完成大批量传输后,可使用 RcloneView 的 **Folder Comparison** 功能验证本地文件与 GCS 中的内容是否一致 —— 检查文件数量、大小和校验和:

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify GCS sync with folder comparison" class="img-large img-center" />

任何缺失或不匹配的对象都会被高亮显示,方便你只重新运行受影响的文件。

## 快速上手

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 在 GCP 控制台中**创建一个具有 Storage Object Admin 权限的服务账号**。
3. **下载 JSON 密钥**并在 RcloneView 中添加 GCS 远程。
4. **浏览你的存储桶**,开始以可视化方式传输文件。

GCS 是强大的基础设施 —— RcloneView 让日常文件管理变得像本地磁盘一样简单。

---

**相关指南:**

- [将 Google Cloud Storage 传输到 AWS S3](https://rcloneview.com/support/blog/transfer-google-cloud-storage-aws-s3-without-cli-rcloneview)
- [将 Amazon S3 存储桶挂载为本地驱动器](https://rcloneview.com/support/blog/mount-amazon-s3-buckets-as-local-drives-rcloneview)
- [使用 RcloneView 集中管理 S3、Wasabi 和 R2](https://rcloneview.com/support/blog/centralize-s3-wasabi-r2-with-rcloneview)

<CloudSupportGrid />
