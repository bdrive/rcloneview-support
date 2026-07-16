---
slug: manage-ovh-cloud-object-storage-sync-rcloneview
title: "管理 OVH 云对象存储 — 使用 RcloneView 与 S3、Google Drive 等同步"
authors:
  - tayson
description: "OVH Cloud Object Storage 价格实惠且位于欧盟境内，但通过 Horizon 控制台进行管理却十分繁琐。使用 RcloneView 可以浏览、同步和备份 OVH 存储，享受可视化文件管理器带来的便利。"
keywords:
  - ovh cloud object storage
  - ovh cloud rclone
  - ovh cloud sync google drive
  - ovh object storage gui
  - ovh cloud file manager
  - ovh openstack swift gui
  - ovh cloud backup
  - ovh cloud transfer
  - ovh cloud sync s3
  - ovh cloud storage management
tags:
  - openstack
  - swift
  - s3-compatible
  - european-cloud
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 管理 OVH 云对象存储 — 使用 RcloneView 与 S3、Google Drive 等同步

> OVH Cloud 提供基于 OpenStack Swift 构建的实惠、符合 GDPR 规范的对象存储服务。但通过 Horizon 控制台管理容器感觉更像是基础设施工作，而不是文件管理。RcloneView 改变了这一切。

OVHcloud 的 Object Storage 是欧洲企业寻求符合 GDPR 规范、价格实惠的云存储的绝佳选择。它建立在 OpenStack Swift 之上，稳定可靠且价格合理。挑战在于日常管理——Horizon 控制台是为基础设施管理员设计的，而不是为了浏览文件、同步到其他云存储或运行自动备份。RcloneView 提供了 OVH Cloud 所缺乏的可视化文件管理层。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 为什么选择 OVH Cloud + RcloneView？

OVH Cloud Object Storage 提供兼容 S3 和兼容 Swift 的访问方式。RcloneView 同时支持这两种协议，因此你可以使用熟悉的双栏文件浏览器连接并管理容器。

### 你将获得

- **可视化浏览**所有 OVH 容器和对象
- **跨云同步**，可在 OVH 与 70 多个存储提供商之间进行
- **计划备份**，可从 OVH 存储备份或备份至 OVH 存储
- **文件夹比较**，用于验证传输结果

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Manage OVH Cloud in two panes" class="img-large img-center" />

## 将 OVH Cloud 连接到 RcloneView

<img src="/support/images/en/blog/new-remote.png" alt="Add OVH Cloud remote" class="img-large img-center" />

你可以通过兼容 S3 的 API（推荐用于新项目）或原生 Swift API 进行连接。无论选择哪种方式，你的 OVH 容器都会立即出现在文件浏览器中。

## 常见工作流程

### 将 OVH 同步到 Google Drive

在 Google Drive 中保留一份可供团队协作访问的 OVH 文件工作副本，并将变更同步回 OVH，以实现长期、经济高效的存储。

### 将 OVH 备份到其他存储提供商

通过在 Backblaze B2 或 AWS S3 上维护备份，防止被单一供应商锁定：

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule OVH backup" class="img-large img-center" />

### 迁移至或迁出 OVH

想从 AWS S3 迁移到 OVH 以节省成本？或者想将数据从 OVH 整合到 Azure？双栏浏览器让迁移操作变成简单的拖放动作。

### 监控传输进度

通过实时传输监控跟踪进度：

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitor OVH transfers" class="img-large img-center" />

## 快速上手

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. **添加 OVH Cloud**，作为兼容 S3 或 Swift 的远程。
3. 在双栏浏览器中**浏览你的容器**。
4. 为跨云工作流**设置同步任务**。

实惠的欧盟存储，理应配备一款出色的文件管理器。

---

**相关指南：**

- [管理 OpenStack Swift 存储](https://rcloneview.com/support/blog/manage-openstack-swift-object-storage-gui-rcloneview)
- [创建同步任务](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [任务计划](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)

<CloudSupportGrid />
