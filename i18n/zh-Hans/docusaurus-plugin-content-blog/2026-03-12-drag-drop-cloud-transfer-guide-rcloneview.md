---
slug: drag-drop-cloud-transfer-guide-rcloneview
title: "云端之间拖放传输——使用 RcloneView 最快的文件传输方式"
authors:
  - tayson
description: "在 RcloneView 的双栏浏览器中，通过拖放即可在 Google Drive、OneDrive、S3 及 70 多个云存储之间传输文件。无需命令，无需脚本。"
keywords:
  - drag drop cloud transfer
  - drag and drop cloud files
  - easy cloud file transfer
  - visual cloud transfer
  - cloud file manager drag drop
  - transfer files between clouds
  - simple cloud migration
  - no code cloud transfer
  - cloud explorer drag drop
  - easy multi cloud transfer
tags:
  - drag-and-drop
  - feature
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 云端之间拖放传输——使用 RcloneView 最快的文件传输方式

> 在 Google Drive 上选中文件，拖到你的 S3 存储桶中。完成。无需命令行，无需脚本，无需繁琐的五步上传流程。只需在任意两个云存储之间拖放即可。

云文件传输不应该需要一个计算机科学学位。RcloneView 的双栏浏览器可以将任意两个云存储位置并排显示——Google Drive 和 S3、OneDrive 和 Dropbox、NAS 和 Backblaze B2——你只需从一侧拖到另一侧即可传输文件。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 工作原理

### 双栏浏览器

RcloneView 将两个存储位置并排显示——如同双栏文件管理器：

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Two-pane cloud explorer" class="img-large img-center" />

- **左侧栏**：任意云存储、NAS 或本地磁盘。
- **右侧栏**：任意另一个云存储、NAS 或本地磁盘。

### 拖放即可传输

1. 在一侧导航到源文件夹。
2. 在另一侧导航到目标文件夹。
3. 选中文件或文件夹。
4. 从一侧拖到另一侧。
5. 传输开始。

### 实时监控

实时查看文件传输的进度：

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitor drag and drop transfer" class="img-large img-center" />

## 你可以在哪些存储之间拖放传输

任意组合都可以：

| 从 | 到 | 示例 |
|------|-----|---------|
| Google Drive | AWS S3 | 将文档备份到 S3 |
| OneDrive | Dropbox | 与使用 Dropbox 的客户共享 |
| 本地磁盘 | Backblaze B2 | 将本地备份上传到云端 |
| NAS | Google Drive | 让 NAS 文件可远程访问 |
| S3 | Azure Blob | 跨云迁移 |
| Dropbox | NAS | 将云端文件下载到本地存储 |

## 不止于简单的拖放

### 对于重复性传输 → 创建任务

如果你经常拖放同一批文件，可以将其保存为一个命名任务，然后设置定时自动运行：

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Save drag-drop as scheduled job" class="img-large img-center" />

### 用于验证 → 使用文件夹比较

传输完成后，比较两侧内容以确保所有文件都已到达：

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify transfer completeness" class="img-large img-center" />

### 对于大批量传输 → 监控进度

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Track large file transfer" class="img-large img-center" />

## 小技巧

- **拖放文件夹**可传输整个目录树。
- **拖放前多选文件**以实现批量传输。
- **右键点击**可查看更多选项（复制、移动、同步）。
- **使用地址栏**可快速导航到指定路径。

## 快速上手

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. **添加你的云账户**——任意两个（或更多）提供商。
3. 在双栏浏览器中**将它们并排打开**。
4. **拖放**以传输文件。

云端传输，从此简单。

---

**相关指南：**

- [创建同步任务](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [比较文件夹内容](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [挂载云存储](https://rcloneview.com/support/blog/mount-cloud-storage-local-drive-guide-rcloneview)

<CloudSupportGrid />
