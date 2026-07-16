---
slug: multi-cloud-cost-optimization-storage-tiers-rcloneview
title: "多云成本优化——使用 RcloneView 进行存储分层与归档"
authors:
  - jay
description: "通过 RcloneView 在热存储、温存储和冷存储之间对数据进行分层，从而降低云存储成本。自动将老旧文件从高级云存储迁移到 S3、B2 或 Glacier。"
keywords:
  - RcloneView 多云成本优化
  - 云存储分层指南
  - 降低云存储成本
  - 热温冷云存储
  - 归档云存储旧文件
  - 云存储成本管理
  - RcloneView 分层云备份
  - 自动将文件迁移到云归档
tags:
  - multi-cloud
  - cost-optimization
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 多云成本优化——使用 RcloneView 进行存储分层与归档

> 大多数组织由于将所有数据都保留在热存储服务商中而在云存储上支出过高。RcloneView 让在不同服务商之间自动分层数据变得切实可行，从而在不损失访问能力的前提下降低成本。

当快速访问的“热”存储——Google Drive、Dropbox、OneDrive——存放着多年很少被访问的文件时，云存储成本会迅速累积。一种务实的分层策略是：将近期活跃的文件保留在高级存储中，同时将老旧数据迁移到 Backblaze B2、Wasabi 或 Amazon S3 Glacier 等更具成本效益的归档服务商。RcloneView 基于筛选条件的任务和调度功能，使这种分层过程实现自动化。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 了解三种存储层级

**热存储层**（Google Drive、Dropbox、OneDrive）：针对即时访问、实时协作和移动同步进行了优化。最适合每天或每周访问的文件。每 GB 成本最高。

**温存储层**（Wasabi、Backblaze B2、Amazon S3 Standard）：兼容 S3 的对象存储，检索速度快，但成本低于热存储服务商。Wasabi 和 B2（配合 Cloudflare）没有出口流量费用。非常适合每月访问一次的文件——项目归档、过去一年的客户交付物以及参考资料库。

**冷存储层**（Amazon S3 Glacier、Cloudflare R2 + 生命周期规则）：针对不频繁访问的长期保留进行了优化。每 GB 成本最低。适用于合规性归档、不再用于制作的原始素材，以及多年期的备份保留。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Comparing files across storage tiers in RcloneView" class="img-large img-center" />

## 使用 RcloneView 自动化分层迁移

RcloneView 任务向导中的 **Max file age**（最大文件年龄）筛选条件是实现自动分层的核心工具。在同步任务向导的第 3 步中，将 **Max file age** 设置为 `90d`，以仅定位最近 90 天内未被修改的文件。将源设置为你的 Dropbox 或 Google Drive 工作文件夹，将目标设置为 Wasabi 或 Backblaze B2。

使用 PLUS 许可证，可以将此任务安排为每月运行一次。每次运行都会识别出超过阈值时间的文件，并将其复制到温存储归档中。对于冷存储层的迁移（将温存储数据迁移到 Glacier 级存储），可创建第二个使用相同筛选逻辑的任务，从 B2 指向 S3，并在“Global Rclone Flags”中设置适当的存储类别。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling automated cloud storage tier transitions in RcloneView" class="img-large img-center" />

## 验证分层迁移并安全删除

在确认文件已存在于温存储层或冷存储层之前，切勿从热存储层中删除文件。此时应使用 RcloneView 的 **Folder Compare**（文件夹对比）功能：将即将清理的 Dropbox 文件夹与 Backblaze B2 目标进行对比。筛选出仅显示与目标不同或缺失的文件。如果对比结果显示零差异，说明归档已完成，原始文件即可安全删除。

对于合规性要求较高的行业，可保留“任务历史”日志作为每批数据归档时间的审计记录。该日志会记录每次运行所传输的文件数量、总大小以及时间戳。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitoring a tier transition job from Dropbox to Backblaze B2" class="img-large img-center" />

## 快速上手

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 确定你的热存储服务商（Google Drive、Dropbox）以及目标温存储服务商（B2、Wasabi）。
3. 创建一个复制任务，设置 **Max file age**（最大文件年龄）筛选为 90 天，并将其安排为每月运行。
4. 在从热存储层删除之前，使用 Folder Compare 验证已归档的文件。

一套实施得当的分层策略结合 RcloneView，可以在不牺牲数据可用性的前提下显著降低云存储支出。

---

**相关指南：**

- [使用 RcloneView 降低多云成本并清理幽灵文件](https://rcloneview.com/support/blog/reduce-multi-cloud-costs-ghost-files-rcloneview)
- [使用 RcloneView 进行 Glacier 冷归档](https://rcloneview.com/support/blog/cold-archive-glacier-rcloneview)
- [使用 RcloneView 制定多云备份策略](https://rcloneview.com/support/blog/multi-cloud-backup-strategy-rcloneview)

<CloudSupportGrid />
