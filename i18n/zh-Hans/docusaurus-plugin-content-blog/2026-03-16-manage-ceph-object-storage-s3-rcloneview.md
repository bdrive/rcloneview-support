---
slug: manage-ceph-object-storage-s3-rcloneview
title: "使用 RcloneView 管理 Ceph 对象存储 — 面向 Ceph 集群的 S3 兼容图形界面"
authors:
  - tayson
description: "Ceph 的 RADOS Gateway 提供 S3 兼容存储，但可视化管理却很麻烦。使用 RcloneView，通过桌面文件管理器浏览、同步并备份您的 Ceph 集群。"
keywords:
  - ceph object storage gui
  - ceph s3 file manager
  - ceph rados gateway gui
  - ceph storage management
  - ceph sync tool
  - ceph rclone
  - ceph backup cloud
  - ceph rgw gui
  - ceph s3 compatible
  - ceph visual file manager
tags:
  - RcloneView
  - s3-compatible
  - cloud-storage
  - self-hosted
  - enterprise
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 使用 RcloneView 管理 Ceph 对象存储 — 面向 Ceph 集群的 S3 兼容图形界面

> Ceph 支撑着全球一些规模最大的存储集群。但浏览存储桶、同步到外部云、或验证数据通常都需要依赖命令行工具和脚本。RcloneView 为 Ceph 管理员提供了长期缺失的可视化层。

Ceph 是企业、科研机构和云服务商首选的分布式存储系统。其 RADOS Gateway（RGW）提供 S3 兼容 API，这意味着 RcloneView 可以直接连接到您的 Ceph 集群，提供完整的可视化文件管理体验——浏览存储桶、将数据传输到外部云、安排备份计划，以及校验完整性。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 将 Ceph 连接到 RcloneView

<img src="/support/images/en/blog/new-remote.png" alt="Add Ceph S3 remote" class="img-large img-center" />

使用您的 RGW 端点、访问密钥和私密密钥，将 Ceph 集群添加为 S3 兼容远程。RcloneView 会将其视为普通的 S3 提供商处理。

## 主要使用场景

### 可视化浏览与管理存储桶

在双栏浏览器中导览您的 Ceph 存储桶和对象，无需使用 `s3cmd` 或 `aws cli`：

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Browse Ceph buckets" class="img-large img-center" />

### 复制到外部云

在 AWS S3、Google Cloud Storage 或 Backblaze B2 上为关键 Ceph 数据保留异地副本：

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Replicate Ceph to cloud" class="img-large img-center" />

### 安排跨站点备份

自动化将您的 Ceph 集群数据每晚复制到外部云提供商：

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule Ceph backup" class="img-large img-center" />

### 与 Ceph 之间的数据迁移

要从 AWS S3 迁移到您自己的 Ceph 集群？或是要从 Ceph 迁出到商业云服务商？双栏浏览器让这一切都能通过可视化操作完成。

### 校验数据完整性

使用文件夹比较功能确认复制后的数据与源数据一致：

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify Ceph replication" class="img-large img-center" />

## 性能考量

Ceph 集群能够承受高吞吐量。在大规模迁移或备份期间，提高并行传输数（8-16）和多线程流数量，以最大化带宽利用率。

## 快速上手

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 将您的 **Ceph RGW** 添加为 S3 兼容远程。
3. 在文件浏览器中**浏览您的存储桶**。
4. 设置**复制任务**到外部云。

企业级存储理应配备企业级管理工具。

---

**相关指南：**

- [管理 MinIO 存储](https://rcloneview.com/support/blog/sync-minio-to-aws-s3-google-drive-gui-rcloneview)
- [管理 OpenStack Swift](https://rcloneview.com/support/blog/manage-openstack-swift-object-storage-gui-rcloneview)
- [多线程传输](https://rcloneview.com/support/blog/multi-threaded-transfers-parallel-streams-rcloneview)

<CloudSupportGrid />
