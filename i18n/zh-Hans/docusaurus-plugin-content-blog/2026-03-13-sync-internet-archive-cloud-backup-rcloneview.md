---
slug: sync-internet-archive-cloud-backup-rcloneview
title: "如何使用 RcloneView 上传和管理 Internet Archive 收藏"
authors:
  - tayson
description: "Internet Archive 免费保存数字内容。了解如何使用 RcloneView 上传收藏、同步本地存档并管理你的 Internet Archive 账户。"
keywords:
  - internet archive upload
  - internet archive rclone
  - upload to internet archive
  - internet archive backup
  - internet archive manager
  - internet archive file transfer
  - internet archive collections
  - archive.org upload tool
  - digital preservation cloud
  - internet archive sync
tags:
  - RcloneView
  - internet-archive
  - digital-preservation
  - cloud-storage
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 如何使用 RcloneView 上传和管理 Internet Archive 收藏

> archive.org 上的 Internet Archive 是世界上最大的免费数字图书馆。如果你正在保存历史文献、媒体或数据集，RcloneView 可以将你的上传任务与其他云存储一并管理。

Internet Archive 为可公开访问的数字内容——书籍、音频、视频、软件和数据集——提供免费、无限的存储空间。许多研究人员、图书管理员和数字保存专家都用它进行长期存档。RcloneView 将 Internet Archive 支持为一个远程，让你可以与其他云一起管理上传。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 为什么使用 Internet Archive?

- **免费存储** — 公开可访问的内容无需付费。
- **永久保存** — 专为长期数字保存而设计。
- **公开访问** — 内容对所有人免费开放。
- **多种格式** — 支持音频、视频、文本、图像、软件。
- **DOI 支持** — 可供学术内容引用的引用标识。

## 在 RcloneView 中设置 Internet Archive

### 获取 API 凭证

1. 在 [archive.org](https://archive.org/) 创建账户。
2. 在 [archive.org/account/s3.php](https://archive.org/account/s3.php) 获取你的 API 密钥。

### 添加为远程

1. 打开 RcloneView 并点击 **Add Remote**。
2. 选择 **Internet Archive** 作为类型。
3. 输入你的访问密钥和私密密钥。

<img src="/support/images/en/blog/new-remote.png" alt="Add Internet Archive remote" class="img-large img-center" />

## 常见工作流程

### 上传本地收藏

将数字化的书籍、录音或历史文献从本地存储传输到 Internet Archive：

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Upload to Internet Archive" class="img-large img-center" />

### 从其他云备份

将 Google Drive 或 S3 中的数字保存内容复制到 Internet Archive，以实现永久的公开访问。

### 定期上传

对于持续进行的数字化项目，可以安排定期上传：

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule Internet Archive uploads" class="img-large img-center" />

### 验证上传结果

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify Internet Archive uploads" class="img-large img-center" />

## 开始使用

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 使用你的 API 密钥**添加 Internet Archive**。
3. **上传、同步并管理**你的收藏。
4. 为持续进行的数字化项目**安排上传计划**。

用一款可以连接一切的工具来保存数字历史。

---

**相关指南：**

- [创建同步任务](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [任务调度](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)
- [比较文件夹内容](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)

<CloudSupportGrid />
