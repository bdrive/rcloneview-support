---
slug: migrate-wasabi-to-onedrive-rcloneview
title: "将 Wasabi 迁移到 OneDrive — 使用 RcloneView 传输文件"
authors:
  - tayson
description: "使用 RcloneView 将 Wasabi 迁移到 OneDrive：连接两个远程，先用 Dry Run 预览，再以云到云方式复制存储桶数据，并通过 Folder Compare 验证。"
keywords:
  - Wasabi 迁移到 OneDrive
  - Wasabi 到 OneDrive 传输
  - 将 Wasabi 存储桶移到 OneDrive
  - RcloneView Wasabi
  - RcloneView OneDrive
  - 云到云迁移
  - Wasabi OneDrive 同步
  - S3 到 OneDrive
tags:
  - RcloneView
  - wasabi
  - onedrive
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 将 Wasabi 迁移到 OneDrive — 使用 RcloneView 传输文件

> 通过可预览、可验证的云到云复制，把 Wasabi 存储桶中的数据迁入 OneDrive，而无需先下载再重新上传。

把项目归档存放在 Wasabi 的团队，有时需要将这些数据放入 OneDrive，因为同事们已在 Microsoft 365 中工作。对象存储和文件同步服务的行为不同，盲目复制可能会带来意外。RcloneView 并排连接两个服务，用 Dry Run 预览作业，并在完成后验证结果。您可以在 FREE 许可证下以完整读写权限连接 S3、Azure 或 Backblaze B2，同时还能使用其他 90 多个提供商。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 连接 Wasabi 和 OneDrive

Wasabi 通过 rclone 的 S3 协议访问，因此您需要输入 Access Key、Secret Key 以及 Wasabi 区域的终端节点。OneDrive 使用浏览器 OAuth：RcloneView 会打开 Microsoft 登录页面，您批准访问后，无需复制任何密钥即可连接远程。

在两个 Explorer 面板中打开这两个远程。浏览存储桶和 OneDrive 文件夹树，了解数据当前的位置以及应该存放的位置。

<img src="/support/images/en/blog/new-remote.png" alt="在 RcloneView 中添加 Wasabi 和 OneDrive 远程" class="img-large img-center" />

## 规划复制

设想一家设计工作室，有多个存放已完成项目文件夹的存储桶。与其一次性迁移全部内容，不如每个作业复制一个存储桶或前缀。较短的作业更容易重试，也更容易检查。

如果 OneDrive 中已有需要保留的文件，请选择 Copy 而不是 Sync，因为单向同步会使目标与源保持一致。在过滤步骤中，您可以限制文件大小或时间范围，并使用 Document、Image、Video 等预定义分组。另外，请提前检查文件名：对象键可能包含 OneDrive 会拒绝的字符或过长的路径，因此花一分钟运行 Dry Run 是值得的。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="迁移前比较 Wasabi 和 OneDrive 文件夹" class="img-large img-center" />

## 运行传输

如果只是快速的一次性操作，请将文件夹从 Wasabi 面板拖到 OneDrive 面板。在不同远程之间拖动执行的是复制而不是移动，因此在您满意之前，存储桶保持不变。若需重复运行，可通过四步向导保存作业：存储、高级设置、过滤器和计划（计划功能需要 PLUS）。

在 Transferring 选项卡中查看速度、文件数量和进度。如果大规模运行时 OneDrive 变慢，请在 Advanced Settings 中降低并发文件传输数。同步作业失败时会重试整个运行（默认：3 次）。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="从 Wasabi 到 OneDrive 的云到云传输" class="img-large img-center" />

## 验证并保留记录

复制完成后，在两个根目录上打开 Folder Compare。过滤器会显示仅在左侧、仅在右侧、相同和不同的文件，您可以一键复制缺失的项目。Job History 会记录开始时间、持续时间、状态和已传输的文件数，同时也可作为迁移日志。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Wasabi 迁移到 OneDrive 的作业历史" class="img-large img-center" />

## 开始使用

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 添加 Wasabi 远程（访问密钥、密钥、区域终端节点）和 OneDrive 远程（浏览器登录）。
3. 对一个前缀运行 Dry Run，然后执行复制作业。
4. 使用 Folder Compare 验证，并对其余存储桶重复上述步骤。

分阶段且经过验证的迁移，意味着在停用存储桶之前，每个文件都已得到确认。

---

**相关指南：**

- [将 OneDrive 迁移到 Wasabi](https://rcloneview.com/support/blog/migrate-onedrive-to-wasabi-rcloneview)
- [管理 Wasabi 存储](https://rcloneview.com/support/blog/manage-wasabi-cloud-sync-backup-rcloneview)
- [Dry Run：传输前预览同步](https://rcloneview.com/support/blog/dry-run-preview-sync-before-transfer-rcloneview)

<CloudSupportGrid />
