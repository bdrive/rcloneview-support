---
slug: find-unused-files-reduce-cloud-costs-rcloneview
title: "查找占用云存储空间的无用文件——通过 RcloneView 存储审计降低成本"
authors:
  - tayson
description: "云存储账单不断上涨，因为没人删除旧文件。了解如何使用 RcloneView 在所有云账户中查找被遗忘的数据、过期备份和不必要的重复文件。"
keywords:
  - 降低云存储成本
  - 查找无用云文件
  - 云存储清理
  - 云成本优化
  - 云存储浪费
  - 降低云账单
  - 云文件审计
  - 存储成本节省
  - 云清理工具
  - 不必要的云文件
tags:
  - RcloneView
  - cost-optimization
  - tips
  - cloud-storage
  - organization
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 查找占用云存储空间的无用文件——通过 RcloneView 存储审计降低成本

> 你正在为三个云服务商的 5 TB 存储付费。其中有多少是真正需要的？对大多数用户而言，30%-50% 的云存储被再也不会访问的文件占用。

云存储账单是逐渐增长的。这里多几个 GB，那里有一份被遗忘的备份，突然间你每年要为没人用的数据花费数百美元。问题不在于每 GB 的单价，而在于这种看不见的累积。RcloneView 帮助你清楚地看到每个账户中的内容，从而对哪些该保留、哪些该删除做出明智决策。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 常见的浪费来源

### 旧备份副本

备份任务会创建副本。如果你多年来更换过备份目标，旧副本仍留在之前的服务商那里，持续占用付费存储空间。

### 跨服务商的重复文件

同样的文件存储在 Google Drive、OneDrive 和 Dropbox 上——因为你曾经"以防万一"把它们同步到了所有地方。

### 过期的项目文件

两年前的项目仍然存放在 S3 Standard 上，每 TB 花费 23 美元，而它们本可以放在每 TB 只需 1 美元的 Glacier 上。

### 测试和临时数据

试用上传、测试文件夹、缓存数据、`.DS_Store` 文件、`Thumbs.db`——在成千上万个文件夹中累积起来数量惊人。

## 如何查找浪费的存储

### 浏览每个账户

连接你所有的云账户，并系统地浏览它们：

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Browse cloud accounts" class="img-large img-center" />

### 比较账户以查找重复文件

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Find duplicates across clouds" class="img-large img-center" />

两个服务商之间的文件夹比较会高亮显示完全相同的文件——这些可能是你重复付费的文件。

### 检查备份的新鲜度

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Check backup recency" class="img-large img-center" />

任务历史记录会显示备份上次运行的时间。如果某个备份已经 6 个月没有运行过，它还有必要保留吗？

## 行动计划

| 发现 | 行动 | 节省 |
|---------|--------|---------|
| 存放在高价存储上的旧备份 | 删除或迁移到 Glacier | 每 TB 每月 5-20 美元 |
| 跨服务商的重复文件 | 保留一份副本，删除其余 | 每 TB 每月 5-10 美元 |
| 存放在热存储上的过期项目 | 归档到冷存储 | 每 TB 每月 15-20 美元 |
| 临时文件和垃圾数据 | 删除 | 视情况而定 |
| 未使用的服务商账户 | 取消订阅 | 订阅费用 |

## 删除前先归档

不要过于激进地删除。先将旧文件迁移到冷存储——保留它"以防万一"的成本很低，但比热存储便宜 90%。

## 开始使用

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. **连接所有云账户**。
3. **系统地浏览和比较**。
4. **将未使用的数据归档**到冷存储。
5. 归档后**删除真正的无用数据**。

最便宜的存储，就是你不需要的存储。

---

**相关指南：**

- [云存储审计指南](https://rcloneview.com/support/blog/cloud-storage-permissions-audit-rcloneview)
- [隐藏的云存储成本](https://rcloneview.com/support/blog/hidden-cloud-storage-costs-save-money-rcloneview)
- [归档到 S3 Glacier](https://rcloneview.com/support/blog/archive-google-drive-to-s3-glacier-rcloneview)

<CloudSupportGrid />
