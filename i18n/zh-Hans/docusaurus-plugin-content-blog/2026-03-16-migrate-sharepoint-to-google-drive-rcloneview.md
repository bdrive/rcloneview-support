---
slug: migrate-sharepoint-to-google-drive-rcloneview
title: "将 SharePoint 迁移到 Google Drive — 使用 RcloneView 传输文档库"
authors:
  - tayson
description: "正在从 Microsoft 365 切换到 Google Workspace？使用 RcloneView 将 SharePoint 文档库和 OneDrive 文件传输到 Google Drive 和共享云端硬盘。"
keywords:
  - sharepoint to google drive
  - migrate sharepoint to gdrive
  - sharepoint migration tool
  - microsoft to google migration
  - sharepoint to google workspace
  - sharepoint document library transfer
  - office 365 to google
  - sharepoint google drive sync
  - cross platform cloud migration
  - enterprise cloud migration
tags:
  - RcloneView
  - sharepoint
  - google-drive
  - migration
  - enterprise
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 将 SharePoint 迁移到 Google Drive — 使用 RcloneView 传输文档库

> 您的组织正在从 Microsoft 365 迁移到 Google Workspace。SharePoint 文档库、OneDrive 个人文件以及多年积累的团队文档，都需要完整地迁移到 Google Drive。以下是具体方法。

从 SharePoint 迁移到 Google Drive 是最常见的企业云迁移场景之一的逆向操作。无论出于成本考虑、平台偏好还是组织架构调整，面临的挑战都是一样的：结构化文档库中的数千个文件需要干净利落地传输到 Google Drive 和共享云端硬盘。RcloneView 原生支持两端的操作。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 规划迁移

### 结构映射

| SharePoint | Google Workspace |
|-----------|-----------------|
| 文档库 | 共享云端硬盘 |
| OneDrive（个人） | 我的云端硬盘（个人） |
| 团队网站 | 每个团队对应一个共享云端硬盘 |
| 共享文件 | 共享云端硬盘文件夹 |

### 连接两个平台

<img src="/support/images/en/blog/new-remote.png" alt="Connect SharePoint and Google Drive" class="img-large img-center" />

在 RcloneView 中添加您的 SharePoint/OneDrive 和 Google Drive 账户。

## 迁移步骤

### 1) 传输文档库

在一个面板中打开 SharePoint，在另一个面板中打开 Google 共享云端硬盘。逐个文档库进行传输：

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="SharePoint to Google Drive transfer" class="img-large img-center" />

### 2) 迁移个人 OneDrive 文件

每位用户的 OneDrive 文件都会转移到其 Google Drive 的"我的云端硬盘"中。

### 3) 验证完整性

文件夹对比功能可确认每个文件都已成功传输：

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify migration" class="img-large img-center" />

### 4) 将大型迁移安排在夜间进行

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule overnight migration" class="img-large img-center" />

### 5) 监控进度

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitor migration progress" class="img-large img-center" />

## 重要注意事项

- **文件格式转换**：Google 可以原生查看 Office 文件；转换为 Google Docs 格式是可选的
- **权限映射**：文件权限不会自动传输 — 请单独规划您的共享云端硬盘权限
- **路径长度**：SharePoint 允许的路径长度可能超出预期；请验证兼容性
- **大型文档库**：按部门或项目拆分成批次处理

## 快速上手

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. **添加 SharePoint** 和 **Google Drive** 远程。
3. 将文档库**映射**到共享云端硬盘。
4. 分批**传输并验证**。

平台切换干净利落，零数据丢失。

---

**相关指南：**

- [将 Google Workspace 迁移到 Microsoft 365](https://rcloneview.com/support/blog/migrate-google-workspace-to-microsoft-365-rcloneview)
- [零停机云迁移](https://rcloneview.com/support/blog/migrate-cloud-storage-zero-downtime-rcloneview)
- [对比文件夹内容](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)

<CloudSupportGrid />
