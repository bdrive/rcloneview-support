---
slug: sync-backblaze-b2-to-onedrive-rcloneview
title: "将 Backblaze B2 同步到 OneDrive —— 使用 RcloneView 进行云备份"
authors:
  - tayson
description: "了解如何使用 RcloneView 将文件从 Backblaze B2 对象存储同步或迁移到 Microsoft OneDrive —— 一种基于图形界面且支持计划自动化的方法。"
keywords:
  - Backblaze B2 到 OneDrive 同步
  - 使用 RcloneView 迁移 Backblaze B2 到 OneDrive
  - Backblaze B2 OneDrive 传输
  - B2 到 OneDrive 迁移指南
  - 云存储同步工具
  - Backblaze B2 备份到 OneDrive
  - 从 B2 迁移到 OneDrive
  - rclone B2 OneDrive 图形界面
tags:
  - RcloneView
  - backblaze-b2
  - onedrive
  - cloud-to-cloud
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 将 Backblaze B2 同步到 OneDrive —— 使用 RcloneView 进行云备份

> 将 Backblaze B2 冷存储中的指定文件拉取到 OneDrive 以供日常使用——或者通过一个 RcloneView 任务将整个 B2 存储桶迁移到 OneDrive。

Backblaze B2 是出色的归档和备份目标，但其兼容 S3 的 API 并不适合日常协作。如果你的团队需要在 Microsoft 365 中访问文件、通过 SharePoint 共享文档，或者只是想把数据从 B2 转移到更易访问的位置，同步到 OneDrive 就是答案。RcloneView 通过可视化的任务构建器和实时监控，让这一传输过程变得简单直观。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 连接 Backblaze B2 和 OneDrive

在 RcloneView 中，打开 **远程标签页 → 新建远程**，先添加 Backblaze B2。输入你的 Application Key ID 和 Application Key，然后指定存储桶名称。对于 OneDrive，从提供商列表中选择它，并使用你的 Microsoft 账户完成浏览器 OAuth 登录。两个远程都保存后，在双栏浏览器中并排打开它们。

在左侧浏览你的 B2 存储桶，在右侧浏览你的 OneDrive。你可以在两侧深入文件夹层级进行导航，并在开始任何传输之前比较文件数量。这一可视化确认步骤可以避免大规模迁移时出现意外情况。

<img src="/support/images/en/blog/new-remote.png" alt="Connecting Backblaze B2 and OneDrive remotes in RcloneView" class="img-large img-center" />

## 配置并运行同步任务

在主页标签页中点击 **同步** 打开任务向导。将 Backblaze B2 路径设置为源，将 OneDrive 目标文件夹设置为目标。在第 2 步中，配置并发传输数量——OneDrive 有 API 速率限制，因此从 4–8 个并发传输开始比一开始就拉满更安全。如果数据完整性对你的场景至关重要，可以启用校验和比较。

在提交完整传输之前，使用 **模拟运行（Dry Run）** 选项。如果你要进行选择性同步，这一点尤其有用——例如，在第 3 步中设置 **最大文件年龄** 过滤器，只拉取 B2 中最近 90 天的文件。模拟运行的输出结果无误后，再运行正式任务。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="B2 to OneDrive sync job in progress in RcloneView" class="img-large img-center" />

## 定期从 B2 拉取数据的计划任务

有些工作流需要从 B2 到 OneDrive 的周期性同步——例如，每天早上将新归档的报告从 B2 拉取到 OneDrive 文件夹，以便团队成员可以通过 Microsoft 365 界面访问它们。使用 PLUS 许可证，RcloneView 的 crontab 计划程序可以自动完成这一任务。在任务向导的第 4 步设置计划，选择适合你工作流的日期和时间。

**任务历史** 标签页记录了每一次运行，因此你可以确认每次计划同步是否成功完成，并查看传输了多少数据。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a recurring Backblaze B2 to OneDrive sync" class="img-large img-center" />

## 开始使用

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 添加 Backblaze B2（Application Key）和 OneDrive（OAuth）作为远程。
3. 创建一个从 B2 到 OneDrive 的同步任务，并设置适当的传输限制。
4. 使用 PLUS 许可证安排周期性同步，实现自动化免人工操作。

借助 RcloneView，将数据从 B2 的持久归档存储转移到 OneDrive 的协作环境，将变成一项常规且可靠的操作。

---

**相关指南：**

- [使用 RcloneView 将 Backblaze B2 同步到 Azure Blob Storage](https://rcloneview.com/support/blog/sync-backblaze-b2-to-azure-blob-rcloneview)
- [使用 RcloneView 管理 Backblaze B2 云存储](https://rcloneview.com/support/blog/manage-backblaze-b2-cloud-sync-backup-rcloneview)
- [使用 RcloneView 将 OneDrive 迁移到 Backblaze B2](https://rcloneview.com/support/blog/migrate-onedrive-to-backblaze-b2-rcloneview)

<CloudSupportGrid />
