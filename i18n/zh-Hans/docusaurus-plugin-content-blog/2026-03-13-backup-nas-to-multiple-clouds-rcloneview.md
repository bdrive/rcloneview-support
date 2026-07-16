---
slug: backup-nas-to-multiple-clouds-rcloneview
title: "如何将 NAS 备份到多个云端 — 使用 RcloneView 实施 3-2-1 备份策略"
authors:
  - tayson
description: "通过同时备份到多个云存储提供商来保护您的 NAS 数据。使用 RcloneView 的批处理任务实施规范的 3-2-1 备份策略。"
keywords:
  - nas multi cloud backup
  - 3 2 1 backup strategy
  - nas cloud backup multiple
  - synology multi cloud backup
  - qnap multi cloud backup
  - nas backup strategy
  - nas to s3 and b2 backup
  - nas disaster recovery
  - multi cloud backup plan
  - nas off site backup
tags:
  - nas
  - multi-cloud
  - best-practices
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 如何将 NAS 备份到多个云端 — 使用 RcloneView 实施 3-2-1 备份策略

> 一个云备份很好，两个云备份更好。3-2-1 规则是:3 份副本、2 种不同介质、1 份异地存放。您的 NAS 是第一份副本,云 A 是第二份副本,云 B 是第三份副本。RcloneView 将这一切全部自动化。

NAS 是一种出色的集中式存储解决方案,但它终究只是位于单一地点的单一设备。硬件故障、火灾、盗窃或自然灾害都可能将其连同其中的所有数据一并摧毁。将数据备份到多个云存储提供商——使用不同的基础设施、位于不同的地区——才能真正实现灾难恢复。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 3-2-1 策略

| 副本 | 位置 | 提供商 |
|------|----------|----------|
| 1 (主副本) | NAS(本地) | Synology/QNAP |
| 2 (云备份) | 云 A | Backblaze B2 ($6/TB) |
| 3 (云备份) | 云 B | AWS S3 或 Wasabi |

三份副本。两种不同类型的存储(本地 NAS + 云存储)。一份异地存放(云存储本身就是异地)。

## 使用 RcloneView 进行设置

### 1) 连接您的 NAS 和云端

<img src="/support/images/en/blog/new-remote.png" alt="Add NAS and cloud remotes" class="img-large img-center" />

### 2) 为每个云端创建备份任务

**任务 1**: NAS → Backblaze B2(主云备份)。
**任务 2**: NAS → AWS S3(次云备份)。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Create multi-cloud backup jobs" class="img-large img-center" />

### 3) 安排夜间备份

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule multi-cloud NAS backup" class="img-large img-center" />

将时间错开:
- 凌晨 2:00 → NAS → Backblaze B2。
- 凌晨 4:00 → NAS → AWS S3。

### 4) 使用批处理任务实现自动化

v1.3 批处理任务将所有步骤串联起来:

1. 将 NAS 复制到 B2。
2. 将 NAS 复制到 S3。
3. 对比 NAS 与 B2。
4. 对比 NAS 与 S3。
5. 通过 Slack 发送通知。

### 5) 验证两份备份

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify multi-cloud backup" class="img-large img-center" />

## 成本优化

| 数据量 | B2 月费 | S3 Standard-IA 月费 | 总计 |
|-------------|-----------|----------------------|-------|
| 1 TB | $6 | $12.50 | $18.50 |
| 5 TB | $30 | $62.50 | $92.50 |
| 10 TB | $60 | $125 | $185 |

对于次要备份,可以使用更便宜的存储层级,如 S3 Glacier($4/TB)或 Wasabi($7/TB,免费出站流量)。

## 快速上手

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. **连接 NAS 和两个云存储提供商**。
3. **为每个云端创建复制任务**。
4. **通过批处理任务进行安排和自动化**。
5. **每周验证两份备份**。

两个云端,一台 NAS,零数据丢失风险。

---

**相关指南:**

- [在 Synology NAS 上运行 RcloneView](https://rcloneview.com/support/blog/run-rcloneview-synology-nas-docker-rcloneview)
- [在 QNAP NAS 上运行 RcloneView](https://rcloneview.com/support/blog/rcloneview-qnap-nas-cloud-backup-rcloneview)
- [为什么云到云备份很重要](https://rcloneview.com/support/blog/why-cloud-to-cloud-backup-matters-rcloneview)

<CloudSupportGrid />
