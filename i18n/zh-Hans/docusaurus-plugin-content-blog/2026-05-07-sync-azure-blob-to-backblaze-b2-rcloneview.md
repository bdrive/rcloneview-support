---
slug: sync-azure-blob-to-backblaze-b2-rcloneview
title: "将 Azure Blob Storage 同步到 Backblaze B2 —— 使用 RcloneView 进行云备份"
authors:
  - tayson
description: "了解如何使用 RcloneView 将文件从 Azure Blob Storage 同步或迁移到 Backblaze B2，从而节省成本、提升冗余性并实现自动化云备份。"
keywords:
  - Azure Blob Storage
  - Backblaze B2
  - 云迁移
  - RcloneView
  - 云到云同步
  - 云备份
  - 存储成本节省
  - rclone azure b2
tags:
  - RcloneView
  - azure
  - backblaze-b2
  - cloud-to-cloud
  - migration
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 将 Azure Blob Storage 同步到 Backblaze B2 —— 使用 RcloneView 进行云备份

> 将数据从 Azure Blob Storage 迁移到 Backblaze B2 可以大幅降低存储成本 —— RcloneView 通过引导式图形界面，让迁移和持续同步都变得简单直接。

Azure Blob Storage 被广泛用于企业级工作负载，但 Backblaze B2 提供的存储价格明显更低——通常只是 Azure 成本的一小部分——这使其成为理想的二级备份目标，或是完整迁移的目的地。无论你是需要一次性迁移，还是希望通过持续同步来提升冗余性，RcloneView 都能胜任，且无需任何命令行专业知识。RcloneView 内置了 rclone 二进制文件，因此无需额外安装任何东西。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 在 RcloneView 中设置 Azure Blob Storage

在 RcloneView 中点击 **New Remote**（新建远程），从服务商列表中选择 **Microsoft Azure Blob Storage**。你需要在 Azure 门户中获取你的 **Storage Account Name**（存储账户名称）和 **Storage Account Key**（存储账户密钥）（位于你的存储账户 > Access Keys 下）。你也可以选择使用 SAS 令牌或连接字符串。保存后，RcloneView 会连接并列出你所有的 Blob 容器。

如果你使用多个 Azure 存储账户——例如按环境或区域分别设置账户——可以将每一个都添加为独立的命名远程。RcloneView 会在同一界面中统一管理这些远程，让你可以轻松对比容器内容，并在不同账户之间移动数据。

<img src="/support/images/en/blog/new-remote.png" alt="Adding Azure Blob Storage remote in RcloneView" class="img-large img-center" />

## 连接 Backblaze B2

再次点击 **New Remote**（新建远程）并选择 **Backblaze B2**，添加第二个远程。输入你在 Backblaze 控制面板中获取的 **Application Key ID** 和 **Application Key**。为了提升安全性，你可以将密钥限定在特定的存储桶范围内。保存后，B2 远程会与你的 Azure 远程一并显示在浏览器中。

现在你可以在双栏视图中同时打开这两个远程。对于一次性传输，可以直接将单个文件或整个文件夹树从 Azure 拖放到 B2。而对于大型容器的迁移，使用同步任务（sync job）方式会更加可靠，也支持断点续传。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-to-cloud transfer from Azure Blob to Backblaze B2 in RcloneView" class="img-large img-center" />

## 创建并安排同步任务

打开 **Job Manager**（任务管理器），通过四步式 **Job Wizard**（任务向导）创建一个以 Azure Blob 为源、Backblaze B2 为目标的同步任务。务必先运行一次 **dry run**（模拟运行）——它会预览所有将要新增和删除的内容，而不会实际改动你的数据。确认预览结果无误后，再执行正式同步。

为了实现持续的冗余保护，PLUS 许可证用户可以为 Azure 到 B2 的同步添加**计划任务**，按每日或每周的频率自动运行。**Job History**（任务历史）面板会记录每次运行的文件数量和传输大小，方便你验证备份是否成功完成，并满足相关合规要求。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling Azure Blob to Backblaze B2 sync in RcloneView" class="img-large img-center" />

## 开始使用

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 使用你的 Storage Account Name 和 Key 添加一个 **Azure Blob Storage** 远程。
3. 使用你的 Application Key ID 和 Key 添加一个 **Backblaze B2** 远程。
4. 在双栏浏览器中同时打开这两个远程，并使用 **Job Wizard**（任务向导）创建同步任务。
5. 先运行一次 **dry run**（模拟运行），然后使用 PLUS 许可证安排定期同步。

通过 RcloneView 将数据从 Azure Blob 同步到 Backblaze B2，是在不牺牲可靠性的前提下，构建高性价比云备份策略的最有效方式之一。

---

**相关指南：**

- [管理 Azure Blob Storage —— 使用 RcloneView 进行云同步](https://rcloneview.com/support/blog/manage-azure-blob-storage-cloud-sync-rcloneview)
- [管理 Backblaze B2 —— 使用 RcloneView 进行云同步与备份](https://rcloneview.com/support/blog/manage-backblaze-b2-cloud-sync-backup-rcloneview)
- [使用 RcloneView 将 OneDrive 迁移到 Backblaze B2](https://rcloneview.com/support/blog/migrate-onedrive-to-backblaze-b2-rcloneview)

<CloudSupportGrid />
