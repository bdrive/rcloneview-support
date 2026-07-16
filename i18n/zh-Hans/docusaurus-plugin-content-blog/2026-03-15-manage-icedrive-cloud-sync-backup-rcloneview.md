---
slug: manage-icedrive-cloud-sync-backup-rcloneview
title: "管理 Icedrive 云存储 — 使用 RcloneView 同步与备份"
authors:
  - tayson
description: "Icedrive 提供价格实惠、界面简洁的云存储服务，但同步选项有限。使用 RcloneView 可将 Icedrive 与 Google Drive、S3 及其他 70 多个提供商同步。"
keywords:
  - icedrive sync
  - icedrive backup
  - icedrive rclone
  - icedrive file manager
  - icedrive to google drive
  - icedrive alternative sync
  - icedrive cloud management
  - icedrive multi cloud
  - icedrive transfer tool
  - icedrive desktop sync
tags:
  - RcloneView
  - cloud-storage
  - sync
  - backup
  - webdav
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 管理 Icedrive 云存储 — 使用 RcloneView 同步与备份

> Icedrive 因其实惠的价格和简洁的设计而广受欢迎，但其同步功能仅限于自家应用。RcloneView 让 Icedrive 接入更广泛的云生态系统。

Icedrive 已成为一个颇具吸引力的云存储选择——价格实惠、付费计划提供零知识加密，并拥有现代化的界面。然而，Icedrive 的同步和集成选项仅限于其自身的桌面和移动应用。如果你想将 Icedrive 与 Google Drive 同步、备份到 S3，或将 Icedrive 与其他云账户一起管理，RcloneView 可以通过 Icedrive 的 WebDAV 支持来弥合这一差距。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 将 Icedrive 连接到 RcloneView

Icedrive 在付费计划中支持 WebDAV 连接。在 RcloneView 中将其添加为 WebDAV 远程：

<img src="/support/images/en/blog/new-remote.png" alt="Add Icedrive via WebDAV" class="img-large img-center" />

连接完成后，你的 Icedrive 存储会与其他云账户一起显示在双栏浏览器中。

## 为什么要将 RcloneView 与 Icedrive 搭配使用？

### 跨云同步

Icedrive 自带的应用只能同步到本地设备。RcloneView 可以让你将 Icedrive 直接与 Google Drive、OneDrive、S3、Dropbox 或其他任意提供商同步：

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Icedrive cross-cloud sync" class="img-large img-center" />

### 自动备份

安排定期备份任务，将 Icedrive 的数据备份到另一个云端以实现冗余保护：

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule Icedrive backup" class="img-large img-center" />

### 多云管理

无需切换应用即可浏览和管理 Icedrive 文件以及其他所有存储。

### 备份验证

使用文件夹对比功能来验证你的 Icedrive 备份是否完整：

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify Icedrive backup" class="img-large img-center" />

## 常见工作流程

### Icedrive 用于经济存储，Google Drive 用于协作

将大文件和归档资料存放在 Icedrive 上（每 TB 成本更低）。将工作文档同步到 Google Drive 以便团队访问。

### 将 Icedrive 备份到 B2

在 Backblaze B2 上维护一份辅助备份，以防 Icedrive 出现问题。每晚定时同步可保持两份副本的最新状态。

### 迁移到或迁出 Icedrive

正打算从 Dropbox 或 Google Drive 切换到 Icedrive？使用 RcloneView 的双栏拖放功能即可传输所有内容。

## 开始使用

1. **下载 RcloneView**，访问 [rcloneview.com](https://rcloneview.com/src/download.html)。
2. **添加 Icedrive** 作为 WebDAV 远程（需要 Icedrive 付费计划）。
3. **与其他云账户一起浏览**。
4. **通过定时任务进行同步与备份**。

实惠的存储，无限的连接性。

---

**相关指南：**

- [创建同步任务](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [对比文件夹内容](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [隐藏的云存储成本](https://rcloneview.com/support/blog/hidden-cloud-storage-costs-save-money-rcloneview)

<CloudSupportGrid />
