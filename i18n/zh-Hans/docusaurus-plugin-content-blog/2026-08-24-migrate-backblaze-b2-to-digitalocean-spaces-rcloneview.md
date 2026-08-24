---
slug: migrate-backblaze-b2-to-digitalocean-spaces-rcloneview
title: "将 Backblaze B2 迁移到 DigitalOcean Spaces — 使用 RcloneView 传输文件"
authors:
  - kai
description: "使用校验和验证传输、过滤器和 Dry Run 预览,通过 RcloneView 将文件从 Backblaze B2 迁移到 DigitalOcean Spaces。"
keywords:
  - 将 Backblaze B2 迁移到 DigitalOcean Spaces
  - Backblaze 到 DigitalOcean 传输
  - RcloneView 对象存储迁移
  - B2 迁移到 Spaces
  - S3 兼容云迁移
  - DigitalOcean Spaces 设置
  - Backblaze B2 迁移到 Spaces
  - 云存储提供商切换
tags:
  - RcloneView
  - backblaze-b2
  - digitalocean-spaces
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 将 Backblaze B2 迁移到 DigitalOcean Spaces — 使用 RcloneView 传输文件

> 在两个 S3 兼容提供商之间迁移对象存储,不需要手动编写 rclone 命令脚本 — RcloneView 通过其图形界面处理传输、验证和过滤。

从 Backblaze B2 切换到 DigitalOcean Spaces 的团队,通常是为了将基础设施与现有的 Droplet 或 App Platform 服务整合到同一个提供商上。由于两者都是 S3 兼容远程,RcloneView 只需 Access Key、Secret Key 和端点即可连接每一方,然后在两者之间直接传输数据,而无需先经过本地磁盘。对于存放数百 GB 应用备份或媒体资产的存储桶来说,这种直接的云到云路径比先下载再上传的工作流程节省了大量时间。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 设置两个远程

使用 B2 控制台中的 Application Key ID 和 Application Key 添加 Backblaze B2 远程,然后使用各自的 Access Key、Secret Key 和区域端点(例如 `nyc3.digitaloceanspaces.com`)为 DigitalOcean Spaces 添加另一个远程。两者都会在 RcloneView 的 Explorer 面板中以标签页形式显示,因此在开始任何迁移之前,你可以并排浏览源存储桶和目标 Space。

<img src="/support/images/en/blog/new-remote.png" alt="Adding Backblaze B2 and DigitalOcean Spaces remotes in RcloneView" class="img-large img-center" />

使用分屏布局同时查看两个存储桶,在正式开始完整迁移之前确认文件夹结构和命名规则符合应用程序的预期。

## 运行校验和验证传输

将迁移配置为在向导 Step 2 中启用校验和比较的 Copy 或 Sync 作业 — 这会按哈希值和大小比较文件,而不仅仅是时间戳,这在两个可能以不同方式报告修改时间的存储后端之间迁移时尤为重要。根据你的带宽设置文件传输数和多线程传输数;对于大型存储桶,4 个并发传输是一个合理的起点。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring a checksum-verified transfer from Backblaze B2 to DigitalOcean Spaces" class="img-large img-center" />

在运行完整迁移之前,使用 Dry Run 准确预览将要复制的文件 — 这可以在任何数据移动之前发现命名冲突或意外的文件数量。S3、Azure 和 Backblaze B2 在 FREE 许可证下即可获得完整的读写权限,因此没有任何等级限制会阻碍这条迁移路径。

## 安排切换时间

对于分阶段迁移,请先运行一次完整同步,然后再运行计划中的增量同步(PLUS 许可证),以在最终切换前捕获 Backblaze B2 中新增的文件。这样可以在整个过渡期间让两个存储桶保持同步,而不必进行一次风险较高的大规模传输。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling incremental sync jobs during a Backblaze B2 to DigitalOcean Spaces migration" class="img-large img-center" />

## 快速上手

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 为你的 Backblaze B2 存储桶和 DigitalOcean Spaces 目标分别添加远程。
3. 在复制任何文件之前,先运行 Dry Run 预览传输内容。
4. 启用校验和验证后执行 Copy 或 Sync 作业,然后确认双方文件数量一致。

经过验证的直接云到云迁移,意味着你的数据在不经过本地设备的情况下完整无损地到达 DigitalOcean Spaces。

---

**相关指南:**

- [管理 Backblaze B2 存储 — 使用 RcloneView 同步和备份文件](https://rcloneview.com/support/blog/manage-backblaze-b2-cloud-sync-backup-rcloneview)
- [将 Backblaze B2 迁移到 AWS S3 — 使用 RcloneView 传输文件](https://rcloneview.com/support/blog/migrate-backblaze-b2-to-aws-s3-rcloneview)
- [使用 RcloneView 将 Google Drive 迁移到 DigitalOcean Spaces](https://rcloneview.com/support/blog/migrate-google-drive-to-digitalocean-spaces-rcloneview)

<CloudSupportGrid />
