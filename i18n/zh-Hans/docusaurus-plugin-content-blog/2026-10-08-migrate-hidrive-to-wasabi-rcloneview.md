---
slug: migrate-hidrive-to-wasabi-rcloneview
title: "将 HiDrive 迁移到 Wasabi — 使用 RcloneView 传输文件"
authors:
  - morgan
description: "使用 RcloneView 将文件从 HiDrive 迁移到 Wasabi 对象存储：连接两个远程，先 Dry Run，再执行传输，并用 Folder Compare 验证。"
keywords:
  - HiDrive 迁移到 Wasabi
  - HiDrive 到 Wasabi 传输
  - HiDrive Wasabi 同步
  - RcloneView HiDrive
  - Wasabi S3 迁移
  - 云到云传输
  - HiDrive 备份到 S3
  - rclone HiDrive Wasabi
  - HiDrive 迁移工具
  - Wasabi GUI
tags:
  - RcloneView
  - hidrive
  - wasabi
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 将 HiDrive 迁移到 Wasabi — 使用 RcloneView 传输文件

> 通过可视化流程将 HiDrive 归档迁移到 Wasabi 对象存储：连接、预览、传输、验证。

HiDrive 适合作为个人或团队的文件存储，但长期归档往往更适合放在 API 访问可预期的 S3 风格对象存储中。RcloneView 在一个窗口中连接这两个服务，因此您无需先把所有内容下载到本地磁盘，就能在云与云之间直接复制文件夹。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 将 HiDrive 和 Wasabi 连接为远程

HiDrive 使用 OAuth：RcloneView 会打开浏览器，您登录后即可连接远程，无需单独的 API 密钥。Wasabi 兼容 S3，因此需要输入 Access Key、Secret Key 以及存储桶所在区域的端点。

在 Remote 标签页中通过 New Remote 添加两者。然后在 Explorer 面板的左右两侧分别打开它们，确认可以浏览 HiDrive 文件夹和目标 Wasabi 存储桶。

<img src="/support/images/en/blog/new-remote.png" alt="在 RcloneView 中添加 HiDrive 和 Wasabi 远程" class="img-large img-center" />

## 用 Dry Run 规划传输

假设一家设计工作室要把 800 GB 已完成的项目文件夹从 HiDrive 迁出。在动任何东西之前，先把传输创建为作业。选择 HiDrive 作为源，Wasabi 存储桶路径作为目标，然后使用 One-way "Modifying destination only" 模式。

先运行 Dry Run。它会列出将被复制或删除的文件而不做任何更改，是发现目标文件夹选错的可靠方法。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="在 RcloneView 中将 HiDrive 云到云传输至 Wasabi" class="img-large img-center" />

## 调整设置并运行作业

在向导的 Step 2 中设置文件传输数量，如果需要按哈希和大小校验，请启用校验和比较。重试值保持默认的 3，这样短暂的网络故障不会中止整个任务。使用 Step 3 的过滤器跳过临时文件或 `.git/` 文件夹等内容。

预览无误后运行作业，并在 Transferring 标签页中查看速度、进度和文件数量。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="在 Transferring 标签页中监控 HiDrive 到 Wasabi 的传输" class="img-large img-center" />

## 用 Folder Compare 验证

作业完成后，打开 Compare，一侧选 HiDrive，另一侧选 Wasabi。筛选仅存在于左侧的文件，即可看到未到达的内容，然后只复制缺失的项目。Job History 会记录状态、耗时、大小和文件数量，可作为迁移日志。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder Compare 确认 HiDrive 与 Wasabi 内容一致" class="img-large img-center" />

## 开始使用

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 将 HiDrive（浏览器登录）和 Wasabi（Access Key、Secret Key、端点）添加为远程。
3. 创建一个从 HiDrive 到 Wasabi 存储桶的单向作业，并运行 Dry Run。
4. 执行传输，然后用 Folder Compare 验证。

经过预览和验证的迁移，会在您确认所有内容都已到达 Wasabi 之前，保持 HiDrive 文件原封不动。

---

**相关指南：**

- [使用 RcloneView 将 HiDrive 同步到 Amazon S3](https://rcloneview.com/support/blog/sync-hidrive-to-amazon-s3-rcloneview)
- [使用 RcloneView 将 HiDrive 迁移到 Backblaze B2](https://rcloneview.com/support/blog/migrate-hidrive-to-backblaze-b2-rcloneview)
- [管理 Wasabi 存储 — 使用 RcloneView 同步和备份文件](https://rcloneview.com/support/blog/manage-wasabi-cloud-sync-backup-rcloneview)

<CloudSupportGrid />
