---
slug: archive-google-drive-to-s3-glacier-rcloneview
title: "将 Google Drive 文件归档到 S3 Glacier — 使用 RcloneView 实现长期存储，成本降低 90%"
authors:
  - tayson
description: "对于归档数据来说，Google Drive 存储费用高昂。将旧文件迁移到 S3 Glacier，每 GB 只需几分钱，同时仍可随时恢复。RcloneView 可自动完成整个流程。"
keywords:
  - google drive to glacier
  - google drive archive
  - s3 glacier archive
  - cheap cloud archive
  - google drive cold storage
  - archive old cloud files
  - google drive to s3
  - reduce google drive cost
  - long term cloud storage
  - cloud archive strategy
tags:
  - google-drive
  - s3
  - glacier
  - archive
  - cost-optimization
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 将 Google Drive 文件归档到 S3 Glacier — 使用 RcloneView 实现长期存储，成本降低 90%

> 你每月为 2 TB 的 Google Drive 支付 10 美元，但其中 80% 的文件一年都没有被打开过。将它们迁移到 S3 Glacier，每 TB 每月只需 1 美元，大幅削减你的存储账单。

Google Drive 的定价是为活跃文件设计的——你每天打开的文档、与同事共享的文件。但大多数 Google Drive 账户会积累多年从未被访问过的文件：旧的项目文件夹、已完成的工作、归档的照片、过时的文档。这些文件占用着昂贵的存储空间，而它们本可以以极低的成本存放在 S3 Glacier 上。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 费用对比

| 存储服务 | 每 TB/月价格 |
|---------|-------------------|
| Google Drive（个人版） | 约 5 美元 |
| Google Workspace Business | 约 6 美元 |
| S3 Standard | 约 23 美元 |
| S3 Glacier Instant Retrieval | 约 4 美元 |
| S3 Glacier Flexible Retrieval | 约 3.6 美元 |
| S3 Glacier Deep Archive | 约 1 美元 |

将 1 TB 的不活跃文件从 Google Drive 迁移到 Glacier Deep Archive，每年可节省约 48 美元。

## 哪些文件适合归档

适合放入 Glacier 的文件：

- 已完成的项目文件夹（超过 6 个月未更新）
- 税务文件和财务记录（申报完成后）
- 旧的照片/视频备份
- 离职员工的数据
- 已归档的团队文件

不适合归档的文件（应保留在 Google Drive 上）：

- 活跃的文档和电子表格
- 共享协作文件
- 每周或每月都会打开的文件

## 归档流程

### 1）识别归档候选文件

在浏览器中查看你的 Google Drive，找出近期未被访问过的文件夹：

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Browse Google Drive for archive candidates" class="img-large img-center" />

### 2）传输到 S3 Glacier

创建一个从 Google Drive 到已配置 Glacier 存储类别的 S3 存储桶的复制任务：

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Transfer to Glacier" class="img-large img-center" />

### 3）验证归档结果

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify archive completeness" class="img-large img-center" />

### 4）从 Google Drive 中删除

务必在验证完成后再执行此步骤。这样可以释放你的 Google Drive 存储配额。

### 5）设置定期归档任务

为新的归档候选文件设置每月定期运行的归档任务：

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule monthly archival" class="img-large img-center" />

## 注意事项

- **Glacier 的检索需要付费且耗时**——Glacier Instant Retrieval 提供快速访问；Deep Archive 的检索可能需要 12 小时以上
- **最短存储期限**——如果提前删除，Glacier 会收取额外费用（根据存储类别不同，为 90-180 天）
- **删除前务必验证**——在从 Drive 中移除文件之前，始终要确认归档已完整无误

## 快速上手

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. **添加 Google Drive** 和 **S3** 远程。
3. **识别** Google Drive 上的不活跃文件。
4. **复制到 Glacier**，验证后再清理 Drive。

活跃文件留在 Drive 上，其余全部放到 Glacier。

---

**相关指南：**

- [隐藏的云存储成本](https://rcloneview.com/support/blog/hidden-cloud-storage-costs-save-money-rcloneview)
- [使用 Glacier 进行冷归档](https://rcloneview.com/support/blog/cold-archive-glacier-rcloneview)
- [比较文件夹内容](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)

<CloudSupportGrid />
