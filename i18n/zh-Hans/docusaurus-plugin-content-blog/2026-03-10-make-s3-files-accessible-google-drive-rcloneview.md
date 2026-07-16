---
slug: make-s3-files-accessible-google-drive-rcloneview
title: "如何通过 Google Drive 访问 AWS S3 文件——为团队协作同步 S3 存储桶"
authors:
  - tayson
description: "AWS S3 非常适合存储，但非技术团队访问起来却很困难。了解如何使用 RcloneView 将 S3 存储桶内容同步到 Google Drive，实现便捷共享。"
keywords:
  - s3 to google drive sync
  - aws s3 google drive
  - share s3 files team
  - s3 bucket google drive
  - make s3 accessible
  - s3 collaboration tool
  - sync s3 google drive
  - s3 files non technical users
  - aws s3 file sharing
  - s3 to gdrive transfer
tags:
  - aws-s3
  - google-drive
  - collaboration
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 如何通过 Google Drive 访问 AWS S3 文件——为团队协作同步 S3 存储桶

> 你的开发人员把所有东西都存储在 S3 存储桶中。你的市场团队使用 Google Drive。当市场团队需要 S3 中的某个文件时，他们只能请开发人员下载并分享给他们。其实有更好的办法。

AWS S3 强大且经济，但它是为开发人员设计的。AWS 控制台对非技术团队成员并不友好，共享单个 S3 对象还需要生成预签名 URL。通过将选定的 S3 文件夹同步到 Google Drive，每个人都无需 AWS 凭据即可访问所需文件。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 问题所在

- **开发人员**将资产、报告和导出文件存储在 S3 中。
- **非技术团队**（市场、销售、管理层）难以轻松访问 S3。
- **目前的变通方法**：由某人从 S3 下载，再手动上传到 Google Drive。
- **结果**：文件陈旧、额外工作量增加，团队苦不堪言。

## 解决方案

使用 RcloneView 自动将特定的 S3 文件夹同步到 Google Drive：

```
S3: reports/monthly/ → Google Drive: Shared/Monthly Reports/
S3: assets/marketing/ → Google Drive: Shared/Marketing Assets/
S3: exports/data/ → Google Drive: Shared/Data Exports/
```

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Sync S3 to Google Drive" class="img-large img-center" />

## 设置步骤

### 1）连接两个账户

将 AWS S3 和 Google Drive 添加为远程：

<img src="/support/images/en/blog/new-remote.png" alt="Add S3 and Google Drive remotes" class="img-large img-center" />

### 2）创建选择性同步任务

不要同步整个 S3 存储桶——只同步非技术团队需要的文件夹。使用过滤规则来包含特定路径或文件类型。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Create S3 to Google Drive sync job" class="img-large img-center" />

### 3）安排自动更新

每小时或每天同步一次，确保 Google Drive 始终拥有最新文件：

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule S3 to Google Drive sync" class="img-large img-center" />

### 4）验证同步完整性

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify S3 and Google Drive are in sync" class="img-large img-center" />

## 单向同步 vs 双向同步

### 单向（S3 → Google Drive）

使用**复制**或**同步**将文件从 S3 传输到 Google Drive。Google Drive 是只读的（镜像）。更改必须在 S3 中进行。

适用场景：报告、导出文件、生成的资产。

### 双向同步

在两个方向上同步。Google Drive 中的更改会同步回 S3，反之亦然。

适用场景：需要双方团队共同参与的共享工作文件夹。

## 按相关性过滤

不要把 S3 中的所有内容都塞进 Google Drive。使用过滤器：

- 仅包含 `*.pdf`、`*.xlsx`、`*.pptx`——业务文档。
- 排除原始数据、日志和临时文件。
- 使用 `--max-age 90d` 仅同步近期文件。

## 成本意识

S3 出站流量需要付费（前 10 TB 为 90 美元/TB）。对于大型数据集的频繁同步，请考虑：

- 在非高峰时段进行同步。
- 使用过滤器限制数据量。
- 考虑将 Backblaze B2 或 Wasabi 作为中间存储（出站流量免费或低廉）。

## 快速上手

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. **添加 S3 和 Google Drive** 作为远程。
3. 为特定文件夹**创建定向同步任务**。
4. **安排每小时或每天的更新**。
5. **将 Google Drive 文件夹共享**给你的团队。

弥合开发基础设施与团队协作之间的鸿沟。

---

**相关指南：**

- [创建同步任务](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [Rclone 过滤规则详解](https://rcloneview.com/support/blog/rclone-filter-rules-include-exclude-explained-rcloneview)
- [任务调度](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)
- [设置带宽限制](https://rcloneview.com/support/blog/set-bandwidth-limits-cloud-transfers-rcloneview)

<CloudSupportGrid />
