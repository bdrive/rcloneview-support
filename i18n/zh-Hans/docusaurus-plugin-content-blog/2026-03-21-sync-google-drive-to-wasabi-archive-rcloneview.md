---
slug: sync-google-drive-to-wasabi-archive-rcloneview
title: "将 Google Drive 同步到 Wasabi——使用 RcloneView 实现经济实惠的归档与备份"
authors:
  - tayson
description: "使用 RcloneView 将 Google Drive 归档到 Wasabi 热存储云存储，以低于 AWS S3 的成本实现可靠备份。"
keywords:
  - Google Drive 备份
  - Wasabi 云存储
  - 经济实惠的云归档
  - 备份到 Wasabi
  - RcloneView
  - 云到云同步
  - 数据归档
  - 高性价比备份
  - Google Drive 归档
  - 热存储
tags:
  - RcloneView
  - google-drive
  - wasabi
  - cloud-sync
  - archive
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 将 Google Drive 同步到 Wasabi——使用 RcloneView 实现经济实惠的归档与备份

> Google Drive 便于团队协作,但长期存储的成本会不断累积。Wasabi 提供与 S3 兼容的热存储,价格仅为一半——非常适合使用 RcloneView 归档你的 Google Drive 数据。

Google Drive 非常适合团队协作,但无限存储容量也带来了保留策略的复杂性。Wasabi 提供定价可预测且无出口费用的热存储云存储。RcloneView 可以自动化将已完成的项目、旧文件和冷数据归档到 Wasabi 的流程。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 连接 Google Drive 和 Wasabi

在 RcloneView 中设置这两个远程既快捷又安全。

**Google Drive:**
1. 点击 **Add Remote** → 选择 **Google Drive**
2. 通过 OAuth 授权 RcloneView
3. 授予文件夹/文件访问权限
4. 验证连接

**Wasabi:**
1. 点击 **Add Remote** → 选择 **Wasabi**
2. 输入你的 Wasabi Access Key 和 Secret Key
3. 选择你的存储桶(bucket)和区域
4. 测试连接

![New Remote Setup](/images/en/blog/new-remote.png)

## 将 Google Drive 归档到 Wasabi 热存储

创建一次性或周期性的同步任务来转移你的文件。Wasabi 的热存储可即时访问——不像冰川存储(glacier)那样需要恢复延迟。

**归档场景:**
- **项目完成**:在项目结束后归档客户交付物
- **存储优化**:将超过 90 天的旧文件转移到 Wasabi
- **合规备份**:保留可搜索的业务记录副本

![Wasabi Transfer Setup](/images/en/tutorials/wasabi-drag-and-drop.png)

## 实时监控传输性能

RcloneView 会为你的归档任务显示实时指标——传输速度、已处理文件数以及剩余时长。

![Real-Time Transfer Monitoring](/images/en/tutorials/wasabi-real-time-monitoring-transferring.png)

## 开始使用

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 在 [wasabi.com](https://wasabi.com/) 创建 Wasabi 账户。
3. 使用 OAuth 身份验证将 Google Drive 添加为远程。
4. 将你的 Wasabi 存储桶配置为远程。
5. 创建同步或复制任务并开始归档。
6. 安排定期备份以保持归档数据最新。

经济实惠地归档,即时检索——Wasabi 与 RcloneView 让这一切变得简单。

---

**相关指南:**

- [使用 RcloneView 将 Google Drive 同步到 Backblaze B2](https://rcloneview.com/support/blog/sync-google-drive-to-backblaze-b2-rcloneview)
- [使用 RcloneView 将 Google Drive 归档到 S3 Glacier](https://rcloneview.com/support/blog/archive-google-drive-to-s3-glacier-rcloneview)
- [云存储出口费用——如何通过 RcloneView 避免](https://rcloneview.com/support/blog/cloud-storage-egress-fees-avoid-rcloneview)

<CloudSupportGrid />
