---
slug: manage-amazon-s3-cloud-sync-backup-rcloneview
title: "管理 Amazon S3 存储 — 使用 RcloneView 同步与备份文件"
authors:
  - tayson
description: "使用 RcloneView 管理 Amazon S3 存储桶——通过简洁的 GUI 界面在 S3 与其他云之间同步、备份和传输文件。"
keywords:
  - Amazon S3 management
  - S3 backup tool
  - S3 sync GUI
  - Amazon S3 RcloneView
  - S3 bucket sync
  - cloud storage management
  - S3 file transfer
  - AWS S3 backup
  - S3 object storage GUI
  - rclone S3 frontend
tags:
  - amazon-s3
  - s3
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 管理 Amazon S3 存储 — 使用 RcloneView 同步与备份文件

> Amazon S3 是对象存储行业的标杆——RcloneView 将其存储桶管理带入可视化的多云界面，同时不牺牲 rclone 底层的任何强大功能。

Amazon S3 依然是对象存储的黄金标准，但对于那些希望在不持续依赖命令行的情况下完成工作的团队来说，通过 AWS 控制台或 CLI 来管理存储桶、同步数据和安排备份是很繁琐的。RcloneView 直接连接到 S3，让你能够以拖放式的简便操作来传输、同步和备份文件——并在同一窗口中管理你所有其他的云远程。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 将 Amazon S3 连接到 RcloneView

要在 RcloneView 中添加 S3 作为远程，请打开 **Remote** 标签页并点击 **New Remote**。从提供商列表中选择 **Amazon S3**，然后输入你的 Access Key ID、Secret Access Key，以及存储桶所在的 AWS 区域（例如 `us-east-1`）。保存后，你的 S3 远程会出现在资源管理器面板中，将所有可访问的存储桶和前缀显示为文件夹。

<img src="/support/images/en/blog/new-remote.png" alt="Adding Amazon S3 as a new remote in RcloneView" class="img-large img-center" />

在文件资源管理器中，你可以像浏览本地文件系统一样浏览存储桶内容——遍历前缀、查看文件大小、验证修改时间戳。面包屑导航栏以 rclone 格式显示当前的 S3 路径（例如 `mys3:mybucket/folder`），你可以直接复制它，通过内置终端在 CLI 命令中使用。

缩略图视图让你能够一眼发现存储在 S3 中的图像，而文件列表中的大小和日期列则有助于识别占用存储预算的大文件或过时对象。

## 将文件同步与备份到 S3

RcloneView 的任务管理器负责处理 S3 与任何其他存储之间的同步工作流。一个典型场景是：将本地 NAS 或本地文件夹同步到 S3 以实现灾难恢复。设置好你的源（本地路径或另一个云远程）和目标（你的 S3 存储桶路径），配置同步模式，然后安排任务每天或每周自动运行。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a sync job to Amazon S3 in RcloneView Job Manager" class="img-large img-center" />

多线程传输和并发文件上传设置能让大型备份任务显著提速。RcloneView 底层的 rclone 支持 S3 原生的分段上传——大文件会自动被拆分为多个分块，并行上传，并在 S3 端重新组装。这能避免使用单流方式上传超过 5 GB 的文件时常见的超时故障。

对于需要备份完整性验证的团队，启用校验和比较可确保文件同时通过大小和哈希值进行验证，从而在损坏悄然影响你的存档之前将其捕获。

## 跨存储桶与跨账户传输

基础设施团队的一个常见场景是：在不同账户或区域的 S3 存储桶之间迁移数据。在 RcloneView 中创建多个 S3 远程——每个都指向不同的 IAM 凭证或终端节点——然后使用同步（Sync）或复制（Copy）任务类型在它们之间镜像内容。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-to-cloud transfer between two Amazon S3 remotes in RcloneView" class="img-large img-center" />

一家软件公司如果需要将 500 GB 的部署产物复制到次要区域以满足合规要求，可以将其配置为每晚自动运行的任务。任务历史（Job History）标签页会记录每次运行的传输大小、速度和状态——无需任何额外工具即可提供审计追踪。

## 快速上手

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 进入 **Remote tab > New Remote**，选择 **Amazon S3**，然后输入你的 Access Key ID、Secret Access Key 和区域。
3. 在资源管理器面板中浏览你的 S3 存储桶——遍历前缀、检查文件大小并验证内容。
4. 打开 **Job Manager**，在 S3 与你的本地存储或其他云之间设置同步或备份任务。

可靠的 S3 备份策略需要一致性和验证——RcloneView 通过一个消除脚本编写开销、同时保留 rclone 全部功能的 GUI 实现了这两点。

---

**相关指南：**

- [管理 Cloudflare R2 云存储 — 使用 RcloneView 同步与备份](https://rcloneview.com/support/blog/manage-cloudflare-r2-cloud-sync-rcloneview)
- [使用 RcloneView 修复 S3 访问被拒绝权限错误](https://rcloneview.com/support/blog/fix-s3-access-denied-permission-errors-rcloneview)
- [使用 RcloneView 将 Backblaze B2 迁移到 AWS S3](https://rcloneview.com/support/blog/migrate-backblaze-b2-to-aws-s3-rcloneview)

<CloudSupportGrid />
