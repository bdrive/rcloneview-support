---
slug: migrate-box-to-google-drive-rcloneview
title: "将 Box 迁移到 Google Drive —— 使用 RcloneView 传输文件和文件夹"
authors:
  - tayson
description: "正在从 Box 迁移到 Google Drive？使用 RcloneView 将整个 Box 账户（包括文件夹、共享文件和归档文件）迁移到 Google Drive，并进行完整校验。"
keywords:
  - box to google drive
  - migrate box to gdrive
  - box migration tool
  - box to google workspace
  - switch from box
  - box file transfer
  - box to google shared drive
  - box cloud migration
  - box alternative google
  - transfer box files
tags:
  - box
  - google-drive
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 将 Box 迁移到 Google Drive —— 使用 RcloneView 传输文件和文件夹

> Box 曾经很好地满足了你的需求，但现在 Google Workspace 更合适了。将个人文件、共享文件夹和部门归档等所有内容迁移到 Google Drive，且不丢失任何一个文件。

Box 在企业环境中很受欢迎，但许多组织为了与 Gmail、Calendar 和 Docs 更紧密地集成，正在整合迁移到 Google Workspace。迁移过程需要保留文件夹结构、处理大规模数据集，并校验迁移的完整性。RcloneView 原生支持连接 Box 和 Google Drive。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 连接 Box 和 Google Drive

<img src="/support/images/en/blog/new-remote.png" alt="Add Box and Google Drive" class="img-large img-center" />

## 迁移流程

### 1) 规划文件夹结构映射

| Box | Google Drive |
|-----|-------------|
| 个人文件夹 | 我的云端硬盘 |
| 共享文件夹 | 共享云端硬盘 |
| 部门归档 | 共享云端硬盘文件夹 |

### 2) 逐个文件夹传输

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Box to Google Drive" class="img-large img-center" />

### 3) 将大型传输任务安排在非高峰时段

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule migration" class="img-large img-center" />

### 4) 校验完整性

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify Box migration" class="img-large img-center" />

## Box 特有的注意事项

- **Box 文件版本历史** 不会被传输 —— 只有当前版本会被迁移
- **Box Notes** 是专有格式 —— 请在迁移前先导出这些内容
- **共享链接** 不会被保留 —— 迁移后需要更新书签
- **大型企业**：可以按部门创建批量任务，以便分批、可控地完成迁移

## 快速上手

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 添加 **Box** 和 **Google Drive** 远程。
3. **分批传输** 并进行校验。
4. 在过渡期间 **保持 Box 处于激活状态**。

干净利落的迁移，完整无误的校验。

---

**相关指南：**

- [将 Box 迁移到 SharePoint](https://rcloneview.com/support/blog/migrate-box-to-sharepoint-onedrive-rcloneview)
- [将 Dropbox Business 迁移到 Google](https://rcloneview.com/support/blog/migrate-dropbox-business-to-google-workspace-rcloneview)
- [比较文件夹内容](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)

<CloudSupportGrid />
