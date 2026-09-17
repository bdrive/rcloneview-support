---
slug: sync-seafile-to-wasabi-rcloneview
title: "将 Seafile 同步到 Wasabi — 使用 RcloneView 进行云备份"
authors:
  - kai
description: "使用 RcloneView 将自建的 Seafile 资料库同步到 S3 兼容存储 Wasabi。无需手动导出文件即可保留异地副本。"
keywords:
  - 将 Seafile 同步到 Wasabi
  - Seafile 备份
  - Wasabi 云同步
  - 自建云备份
  - Seafile RcloneView
  - Wasabi S3 兼容存储
  - 云到云同步
  - 自建异地备份
  - RcloneView Seafile
  - RcloneView Wasabi
tags:
  - RcloneView
  - seafile
  - wasabi
  - cloud-to-cloud
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 将 Seafile 同步到 Wasabi — 使用 RcloneView 进行云备份

> 无需编写一行同步脚本，就能为自建的 Seafile 资料库在 Wasabi 上建立异地备份。

Seafile 是许多希望在自己的服务器上运行文件同步平台的团队的热门选择，但自行托管也意味着备份完全是你自己的责任——一旦服务器磁盘故障，唯一的副本也随之消失。Wasabi 是理想的异地存放目标：兼容 S3、大规模使用也很实惠，且可随时随地访问。RcloneView 可以直接连接这两者，因此 Seafile 资料库能够按计划镜像到 Wasabi 存储桶，而不必依赖手动导出。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 将 Seafile 和 Wasabi 连接为远程

先添加你的 Seafile 服务器作为远程，将 RcloneView 指向你的服务器地址和资料库凭证。然后使用你的 Access Key ID、Secret Access Key 以及对应的 Wasabi 区域端点单独添加 Wasabi。两个远程都配置好后，它们会在 Explorer 面板中显示为可浏览的文件树，方便你在建立同步任务之前确认资料库结构和文件数量。RcloneView 可在 Windows、macOS 和 Linux 上从一个窗口挂载并同步 90+ 个服务商，因此 Seafile 和 Wasabi 可以与你已配置的其他云一起使用。

<img src="/support/images/en/blog/new-remote.png" alt="在 RcloneView 中添加 Seafile 和 Wasabi 远程" class="img-large img-center" />

## 构建单向同步任务

将 Seafile 资料库设为源，Wasabi 存储桶设为目标，配置同步任务并使用「仅修改目标」选项，让 Wasabi 保持为纯镜像，不会反向写入 Seafile。对于拥有 500GB 共享资料库(包含源文件和导出内容)的设计团队来说，Filtering 步骤可以让你排除 Seafile 内部生成的临时文件和锁文件，使 Wasabi 副本不被同步产生的杂项文件弄乱。

在 Advanced Settings 步骤中启用校验和比较，让文件按哈希值和大小匹配，而不仅仅是修改时间——由于 Seafile 和 S3 兼容存储对文件元数据的追踪方式不同，这一点很有用。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="使用 RcloneView 将 Seafile 资料库同步到 Wasabi 存储桶" class="img-large img-center" />

在第一次正式同步前先运行 Dry Run。它会准确列出将要传输的内容，而不会移动任何数据——在你还不确定资料库实际有多大的第一次运行中，这一点尤为重要。

## 安排并验证备份

在 PLUS 许可下，为任务附加 crontab 格式的计划，使其自动重新运行——常用资料库可以每晚运行，偏归档性质的资料库则每周运行一次即可。Job History 会记录每次运行的耗时、传输速度和状态，清楚记录 Wasabi 副本最近一次更新到最新状态的时间。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="在 RcloneView 中安排定期的 Seafile 到 Wasabi 同步任务" class="img-large img-center" />

完成首次完整同步后，在 Seafile 源和 Wasabi 目标之间运行 Folder Compare，确认所有文件都已到达且大小匹配——这是发现因网络中断而遗漏内容的快捷方法。

## 快速上手

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 使用服务器地址和资料库凭证，将你的 Seafile 服务器添加为远程。
3. 使用 Access Key ID、Secret Access Key 和区域端点，将 Wasabi 添加为远程。
4. 构建单向同步任务，运行 Dry Run，然后安排定期运行以保持备份最新。

自建资料库只有在别处也存在副本时才真正安全，而定时的 Seafile 到 Wasabi 同步能让这一要求自动运转起来。

---

**相关指南：**

- [使用 RcloneView 管理 Seafile 自建云同步](https://rcloneview.com/support/blog/manage-seafile-self-hosted-cloud-sync-rcloneview)
- [使用 RcloneView 管理 Wasabi 云同步与备份](https://rcloneview.com/support/blog/manage-wasabi-cloud-sync-backup-rcloneview)
- [使用 RcloneView 将 Seafile 迁移到 Backblaze B2](https://rcloneview.com/support/blog/migrate-seafile-to-backblaze-b2-rcloneview)

<CloudSupportGrid />
