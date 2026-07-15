---
slug: find-remove-duplicate-files-cloud-storage-rcloneview
title: "如何在云存储中查找并删除重复文件——使用 RcloneView 释放存储空间"
authors:
  - tayson
description: "重复文件会浪费云存储空间和金钱。了解如何使用 RcloneView 的文件夹比较功能，在 Google Drive、OneDrive、S3 及其他云存储中识别重复文件。"
keywords:
  - find duplicate files cloud storage
  - remove duplicate files google drive
  - cloud storage duplicate finder
  - free up cloud storage space
  - duplicate files onedrive
  - cloud storage cleanup
  - find duplicates across clouds
  - reduce cloud storage cost
  - cloud deduplication tool
  - clean up google drive
tags:
  - RcloneView
  - cloud-storage
  - duplicates
  - cleanup
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 如何在云存储中查找并删除重复文件——使用 RcloneView 释放存储空间

> 你使用云存储已经很多年了。文件被复制、同步、移动、并在多个账户之间共享。现在你正在为存放在三个不同位置的相同文件付费。是不是很熟悉？

重复文件是多云工作流中隐藏的成本。一个文件被复制到 Google Drive 用于分享，又因 IT 策略被备份到 OneDrive，还被一个你早已忘记的同步脚本归档到了 S3。每一份副本都要花钱。RcloneView 的文件夹比较功能可以帮助你识别这些重复文件，并决定保留哪些副本。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 重复文件问题

### 重复文件是如何积累的

- **手动复制** —— "我先把这个复制到我的另一个 Drive 保险一下。"
- **多个同步工具** —— 不同的备份工具把相同的文件复制到不同的云存储。
- **团队协作** —— 共享文件夹在团队成员的各自云盘中重复存放文件。
- **迁移遗留** —— 迁移到新云存储后，文件仍留在旧云存储上。
- **下载后重新上传** —— 从一个云存储下载再上传到另一个，却忘记了原始文件。

### 实际成本影响

如果你有 500 GB 的真实数据，但在各个云存储中却有 200 GB 的重复文件：

| 场景 | 已使用存储 | 每月费用 |
|----------|-------------|-------------|
| 存在重复文件 | 700 GB × 3 个云存储 | $30–70/月 |
| 清理后 | 500 GB × 1 个主存储 + 1 个备份 | $10–25/月 |

这意味着每年可节省数百美元。

## 使用文件夹比较查找重复文件

RcloneView 的文件夹比较功能会准确显示哪些文件同时存在于两个位置、哪些文件仅存在于一侧、以及哪些文件存在不同版本：

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare folders to find duplicates" class="img-large img-center" />

### 第 1 步：比较两个云账户

在左侧打开 Google Drive，右侧打开 OneDrive。导航到相似的文件夹并运行比较：

- **两侧都有** —— 这些就是你的重复文件。比较大小和日期以确认它们是否完全相同。
- **仅左侧有** —— 仅存在于 Google Drive 中的文件。
- **仅右侧有** —— 仅存在于 OneDrive 中的文件。

### 第 2 步：在多个组合之间进行比较

对每一对云存储重复上述比较：

- Google Drive 与 OneDrive
- Google Drive 与 S3
- OneDrive 与 Dropbox
- 任意组合

### 第 3 步：决定保留哪个版本

对于每组重复文件，确定一个唯一的权威版本：

- **常用文件** → 保留在 Google Drive 或 OneDrive（取决于团队日常使用哪个）。
- **归档副本** → 保留在更便宜的存储上（Backblaze B2、S3 Glacier）。
- **真正的重复文件** → 除保留一份外，从其他所有位置删除。

## 防止未来产生重复文件

### 使用同步而非复制

**复制（Copy）** 只是添加文件，而不检查目标位置已有哪些内容。**同步（Sync）** 则确保目标位置与源保持一致——不会积累多余的文件。

### 整合到单一备份目标

与其使用多个工具分别备份到不同的云存储，不如使用 RcloneView 设置一个统一的、按计划执行的备份工作流：

```
Primary (Google Drive) → Backup (Backblaze B2)
```

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Set up consolidated backup schedule" class="img-large img-center" />

### 定期进行比较审查

每月安排一次云存储之间的比较检查。即使只花 5 分钟审查，也能及早发现重复文件的积累。

## 清理工作流程

1. **比较** —— 使用文件夹比较功能比较你的云账户。
2. **识别** —— 找出存在于多个位置的文件。
3. **验证** —— 确认它们确实完全相同（相同大小、相同内容）。
4. **选择** —— 决定哪个位置保留该文件。
5. **删除** —— 删除其他位置的重复文件。
6. **设置同步任务** —— 防止重复文件再次积累。

## 快速上手

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 将你的所有云账户**添加为远程**。
3. 在各云存储之间**运行文件夹比较**。
4. **清理重复文件**以释放存储空间并降低成本。
5. **设置合理的同步任务**以防止未来再产生重复文件。

不要再为同一个文件付三次钱了。

---

**相关指南：**

- [比较文件夹内容](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [创建同步任务](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [云存储空间不足？释放空间](https://rcloneview.com/support/blog/cloud-storage-full-free-up-space-multiple-clouds-rcloneview)

<CloudSupportGrid />
