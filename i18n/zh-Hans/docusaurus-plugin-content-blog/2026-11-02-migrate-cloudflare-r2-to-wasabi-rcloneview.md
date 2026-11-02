---
slug: migrate-cloudflare-r2-to-wasabi-rcloneview
title: "将 Cloudflare R2 迁移到 Wasabi — 使用 RcloneView 传输文件"
authors:
  - robin
description: "使用 RcloneView 将存储桶从 Cloudflare R2 迁移到 Wasabi：连接两个 S3 兼容远程，先 Dry Run，再在存储桶之间复制，并用 Folder Compare 验证。"
keywords:
  - 将 Cloudflare R2 迁移到 Wasabi
  - R2 到 Wasabi 传输
  - 将 R2 存储桶迁移到 Wasabi
  - S3 兼容存储桶迁移
  - 云到云传输
  - RcloneView Cloudflare R2
  - RcloneView Wasabi
  - 对象存储迁移 GUI
tags:
  - RcloneView
  - cloudflare-r2
  - wasabi
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 将 Cloudflare R2 迁移到 Wasabi — 使用 RcloneView 传输文件

> 在一个窗口中把 Cloudflare R2 存储桶复制到 Wasabi，先做 Dry Run，完成后再直观核对。

Cloudflare R2 和 Wasabi 都使用 S3 协议，因此两者之间迁移数据在概念上很简单——但如果直接使用 CLI 参数，就要处理两个端点、两套凭据，而且难以确认究竟传过去了什么。RcloneView 将两者都作为远程连接，让你在 GUI 中完成复制、监控和验证。使用 FREE 许可证即可以完整读写权限连接 S3 兼容服务。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 连接两个 S3 兼容远程

打开 New Remote 对话框，先添加 Cloudflare R2。R2 需要 API 令牌、Account ID，以及形如 `https://<ACCOUNT_ID>.r2.cloudflarestorage.com` 的端点。请在创建存储桶后到 Cloudflare 控制台生成令牌；RcloneView 的 R2 设置要求令牌具有 Admin Read & Write 权限。

接着添加 Wasabi。输入 Wasabi 控制台中的 Access Key 和 Secret Key，并选择与目标存储桶所在区域相匹配的端点。请事先在 Wasabi 中创建目标存储桶，或在 Explorer 面板中创建文件夹。

<img src="/support/images/en/blog/new-remote.png" alt="在 RcloneView 中添加 Cloudflare R2 和 Wasabi 远程" class="img-large img-center" />

## 在双面板中规划复制

在左侧 Explorer 面板打开 R2 远程，在右侧打开 Wasabi 远程，然后进入要迁移的存储桶或前缀。对于拥有数 TB 媒体归档的工作室，可以先迁移一个项目前缀，确认权限和命名无误后再迁移整个存储桶。

由于两端都是远程，RcloneView 会将其作为两个远程之间的云到云传输来执行，你无需自己手动管理先下载再上传的步骤。当远程不同时，在面板之间拖放默认执行复制；也可以在 Sync 向导中创建 Copy 作业以便重复运行。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="在 RcloneView 中的两个面板之间进行云到云传输" class="img-large img-center" />

## Dry Run、调优与运行

正式传输之前，在作业向导中启用 Dry Run。它会准确列出将被复制的文件，让你在任何数据移动之前发现错误的前缀。在 Advanced Settings 中，对于包含大量小对象的存储桶可以提高文件传输数；如果希望按哈希加大小而不是仅按大小匹配，可以启用校验和比较。使用过滤步骤可以跳过临时文件夹或按文件时间范围限制。

从 Job Manager 启动作业，并在 Transferring 标签页观察进度：速度、文件数和已传输字节会实时更新。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="在 RcloneView 的 Job Manager 中运行迁移作业" class="img-large img-center" />

## 用 Folder Compare 验证

作业完成后，将 R2 放在左侧、Wasabi 放在右侧打开 Compare。筛选 left-only 文件可查看缺失项，筛选 different 文件可发现大小不一致。如果仍有遗漏，使用 Copy right 补齐，然后重新比较直到结果一致。可在 Job History 中查看本次运行的状态、耗时和文件总数。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="在 RcloneView 中用 Folder Compare 验证存储桶迁移" class="img-large img-center" />

## 开始使用

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html)**下载 RcloneView**。
2. 从 New Remote 添加你的 Cloudflare R2 和 Wasabi 远程。
3. 在并排面板中打开两者，并运行 Dry Run 的 Copy 作业。
4. 运行作业，然后用 Folder Compare 确认结果。

在 Compare 显示完全一致之前，请保持 R2 不变，这样你就可以放心地切换存储。

---

**相关指南：**

- [将 Wasabi 迁移到 Cloudflare R2](https://rcloneview.com/support/blog/migrate-wasabi-to-cloudflare-r2-rcloneview)
- [使用 RcloneView 管理 Wasabi 存储](https://rcloneview.com/support/blog/manage-wasabi-cloud-sync-backup-rcloneview)
- [使用 RcloneView 管理 Cloudflare R2](https://rcloneview.com/support/blog/manage-cloudflare-r2-cloud-sync-rcloneview)

<CloudSupportGrid />
