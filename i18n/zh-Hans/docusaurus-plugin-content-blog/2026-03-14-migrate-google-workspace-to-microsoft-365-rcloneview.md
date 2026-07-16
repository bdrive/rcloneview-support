---
slug: migrate-google-workspace-to-microsoft-365-rcloneview
title: "将 Google Workspace 迁移到 Microsoft 365——使用 RcloneView 将 Drive 文件传输到 OneDrive 和 SharePoint"
authors:
  - tayson
description: "正在从 Google Workspace 切换到 Microsoft 365？了解如何使用 RcloneView 的可视化传输工具，在不丢失数据的情况下将 Google Drive 文件迁移到 OneDrive 和 SharePoint。"
keywords:
  - google workspace to microsoft 365
  - migrate google drive to onedrive
  - google workspace migration
  - switch google to microsoft
  - google drive to sharepoint
  - workspace to office 365 migration
  - google to microsoft file transfer
  - enterprise cloud migration
  - google workspace exit
  - business cloud migration tool
tags:
  - google-drive
  - onedrive
  - sharepoint
  - migration
  - enterprise
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 将 Google Workspace 迁移到 Microsoft 365——使用 RcloneView 将 Drive 文件传输到 OneDrive 和 SharePoint

> 您的组织正在切换生态系统。Google Drive 中数以千计的文件需要完整、有序、经过验证地迁移到 OneDrive 和 SharePoint。以下是如何在不陷入混乱的情况下完成这一切。

从 Google Workspace 迁移到 Microsoft 365 是最常见的企业级迁移之一。挑战不在于做决定，而在于数据本身。多年积累的文档、共享文件夹和团队云端硬盘需要从 Google Drive 干净利落地传输到 OneDrive 个人存储和 SharePoint 团队站点。RcloneView 让这次迁移变得可视化、可验证、可管理。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 迁移规划

### 首先规划结构映射

在传输任何内容之前，先规划 Google Drive 的结构如何映射到 Microsoft 365：

| Google Workspace | Microsoft 365 |
|-----------------|---------------|
| 我的云端硬盘（个人） | OneDrive（个人） |
| 共享云端硬盘 | SharePoint 文档库 |
| 与我共享的内容 | 通过 OneDrive/SharePoint 共享 |

### 准备账户

在 RcloneView 中连接 Google Workspace 和 Microsoft 365 两个账户：

<img src="/support/images/en/blog/new-remote.png" alt="Connect both cloud accounts" class="img-large img-center" />

## 分步迁移指南

### 1) 传输个人文件

在一个窗格中打开 Google Drive，在另一个窗格中打开 OneDrive。选择文件夹并传输：

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Google Drive to OneDrive transfer" class="img-large img-center" />

### 2) 将共享云端硬盘迁移到 SharePoint

将每个 Google 共享云端硬盘映射到对应的 SharePoint 文档库。逐个传输以保持结构清晰有序。

### 3) 验证每一次传输

这一步至关重要。使用文件夹比较功能确认所有文件都已正确传输：

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify migration completeness" class="img-large img-center" />

### 4) 分批处理大规模迁移

对于拥有数 TB 数据的组织，为每个部门或每个共享云端硬盘创建单独的同步任务：

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Batch migration jobs" class="img-large img-center" />

### 5) 安排非高峰时段传输

大规模迁移可能需要数天时间。将传输安排在夜间和周末进行，以避免影响日常工作：

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule off-peak migration" class="img-large img-center" />

## 迁移后检查清单

传输完成后，使用文件夹比较进行验证，然后在过渡期内保持 Google Workspace 处于活跃状态。用户可以在调整适应期间同时访问两个平台上的文件。

## 快速上手

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 添加 **Google Workspace** 和 **Microsoft 365** 远程。
3. **规划文件夹结构映射**，从 Drive 到 OneDrive/SharePoint。
4. 使用同步任务**分批传输**。
5. 使用文件夹比较**验证所有内容**。

一次干净的迁移，始于正确的工具。

---

**相关指南：**

- [将 Google Drive 迁移到 OneDrive](https://rcloneview.com/support/blog/migrate-google-drive-to-onedrive-rcloneview)
- [将 OneDrive 迁移到 Google Drive](https://rcloneview.com/support/blog/migrate-onedrive-to-google-drive-rcloneview)
- [零停机云存储迁移](https://rcloneview.com/support/blog/migrate-cloud-storage-zero-downtime-rcloneview)

<CloudSupportGrid />
