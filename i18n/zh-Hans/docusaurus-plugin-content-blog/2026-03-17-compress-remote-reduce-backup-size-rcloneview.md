---
slug: compress-remote-reduce-backup-size-rcloneview
title: "压缩远程 — 在 RcloneView 中自动减少云备份大小"
authors:
  - tayson
description: "RcloneView 支持 rclone 的压缩远程，可在上传到云存储之前自动压缩文件。为每次备份节省存储成本和带宽。"
keywords:
  - rclone compress remote
  - compress cloud backup
  - reduce cloud storage size
  - compressed cloud upload
  - rcloneview compress
  - save cloud storage space
  - compress before upload
  - cloud backup compression
  - reduce backup size
  - rclone compression
tags:
  - RcloneView
  - feature
  - cost-optimization
  - backup
  - guide
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 压缩远程 — 在 RcloneView 中自动减少云备份大小

> 你的 500 GB 备份经过压缩后可能只有 300 GB。压缩远程可以为任意云存储提供商套上自动 gzip 压缩层 —— 更小的备份、更低的成本、相同的数据。

云存储成本随容量增加而增长。如果能将备份大小减少 30% 到 60%，你每个月就能在存储账单上节省相应的费用。rclone 的压缩远程提供透明压缩 —— 文件在上传前被压缩，在下载时自动解压缩，无需任何手动操作。RcloneView 让你可以可视化地完成这一设置，并与其他云账户一起管理已压缩的备份。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 压缩远程的工作原理

压缩远程会包装另一个远程（Google Drive、S3、B2 等），并自动完成以下操作：

1. 在上传前使用 gzip **压缩文件**
2. 在下载时透明地**解压缩文件**
3. **跳过已压缩的格式**（jpg、mp4、zip 等），以避免浪费 CPU

你可以像操作其他远程一样操作压缩远程 —— 浏览、复制、同步 —— 但目标端的文件会以压缩形式存储。

## 按文件类型划分的压缩节省效果

| 文件类型 | 典型压缩率 | 示例 |
|-----------|-------------------|---------|
| 文本文件、CSV、日志 | 缩小 60%-90% | 100 MB → 10-40 MB |
| Office 文档（docx、xlsx） | 缩小 5%-15% | 本身已具备一定压缩 |
| 数据库转储文件 | 缩小 50%-80% | 1 GB → 200-500 MB |
| 源代码 | 缩小 60%-80% | 500 MB → 100-200 MB |
| 照片（JPG、PNG） | 约 0% | 本身已压缩 |
| 视频（MP4、MKV） | 约 0% | 本身已压缩 |
| ZIP/RAR 压缩包 | 约 0% | 本身已压缩 |

最适合：以文本为主的数据、日志、数据库备份、源代码、未压缩的数据格式。
不适用：照片、视频以及已经压缩过的压缩包。

## 设置压缩远程

<img src="/support/images/en/blog/new-remote.png" alt="Create compress remote" class="img-large img-center" />

创建一个包装现有存储远程的压缩远程。然后将该压缩远程用作备份目标，而不是直接使用原始远程。

## 使用场景

### 压缩日志备份

服务器日志的压缩效果非常好（80%-90%）。一个 50 GB 的日志归档在云存储上会变成 5-10 GB。

### 降低数据库备份成本

每日的数据库转储文件具有很高的可压缩性。上传前先压缩它们，可以降低云存储账单。

### 源代码归档

包含成千上万个文本文件的开发项目，能从压缩中获得显著收益。

### 定时压缩备份

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule compressed backup" class="img-large img-center" />

## 重要说明

- **CPU 开销**：压缩在上传和下载时会占用 CPU。现代 CPU 可以轻松应对这一开销。
- **并非所有文件都会被压缩**：已经压缩过的格式（JPG、MP4、ZIP）会原样通过，不会再次压缩。
- **透明访问**：通过压缩远程浏览时，文件看起来一切正常 —— 解压缩会自动完成。
- **与加密结合**：你可以将压缩远程与加密远程叠加使用，同时实现压缩和加密的备份。

## 快速上手

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 将你的云存储**添加为普通远程**。
3. **创建一个压缩远程**来包装它。
4. **使用该压缩远程**作为备份目标。
5. **享受更小的备份**和更低的成本。

更小的备份，更低的账单，相同的数据。

---

**相关指南：**

- [隐藏的云存储成本](https://rcloneview.com/support/blog/hidden-cloud-storage-costs-save-money-rcloneview)
- [加密云备份](https://rcloneview.com/support/blog/encrypt-cloud-backups-crypt-remote-guide-rcloneview)
- [虚拟远程：组合、联合、别名](https://rcloneview.com/support/blog/virtual-remotes-combine-union-alias-rcloneview)

<CloudSupportGrid />
