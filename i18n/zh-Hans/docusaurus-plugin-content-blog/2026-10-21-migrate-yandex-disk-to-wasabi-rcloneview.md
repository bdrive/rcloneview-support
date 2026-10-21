---
slug: migrate-yandex-disk-to-wasabi-rcloneview
title: "将 Yandex Disk 迁移到 Wasabi — 使用 RcloneView 传输文件"
authors:
  - alex
description: "使用 RcloneView 将 Yandex Disk 迁移到 Wasabi 对象存储：连接两个远程，运行 Dry Run，执行云到云复制，并通过校验和进行验证。"
keywords:
  - 将 Yandex Disk 迁移到 Wasabi
  - Yandex Disk 备份
  - Wasabi 迁移
  - RcloneView Yandex Disk
  - RcloneView Wasabi
  - 云到云传输
  - S3 备份
  - rclone GUI
  - 对象存储迁移
  - 云迁移工具
tags:
  - RcloneView
  - yandex-disk
  - wasabi
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 将 Yandex Disk 迁移到 Wasabi — 使用 RcloneView 传输文件

> 无需经过本地中转，将 Yandex Disk 归档复制到 Wasabi 存储桶，并确认每个文件都已送达。

Yandex Disk 适合作为个人网盘，但长期归档和共享项目数据通常更适合放在 S3 兼容的对象存储中，由您自行掌控存储桶和访问密钥。RcloneView 在一个窗口中将 Yandex Disk 和 Wasabi 连接为远程并执行二者之间的传输，因此您无需先把数 TB 的数据暂存到本地磁盘。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 设置两个远程

Yandex Disk 通过浏览器登录：在 **Remote > New Remote** 下选择它，批准访问，远程即可连接。Wasabi 作为 S3 兼容提供商进行配置。在 Wasabi 控制台中创建存储桶，生成 Access Key 和 Secret Key，然后将它们连同存储桶所在区域的终端节点一起输入 RcloneView。

Wasabi 是 S3 兼容提供商，因此可以使用与其他 S3 兼容服务相同的远程设置方式。

<img src="/support/images/en/blog/new-remote.png" alt="在 RcloneView 中添加 Yandex Disk 和 Wasabi 远程" class="img-large img-center" />

## 选择要迁移的内容

在一个资源管理器面板中浏览 Yandex Disk，在另一个面板中浏览您的 Wasabi 存储桶。常见做法是用一个存储桶存放归档，并让存储桶中的顶层文件夹与 Yandex 的文件夹一一对应。对象存储没有真正的文件夹，因此请保持命名一致，并避免过长的路径。

如果磁盘上有可丢弃的文件，请使用作业的过滤步骤按扩展名、最大大小或文件存在时长将其排除，这样只会迁移您需要的内容。

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="在 RcloneView 中在 Yandex Disk 和 Wasabi 之间拖放文件" class="img-large img-center" />

## Dry Run 与传输

创建一个以 Yandex Disk 为源、以 Wasabi 存储桶为目标的作业。选择 Copy，使源数据在您验证结果之前保持完整。运行 **Dry Run** 预览文件列表，然后启动作业。在 Advanced Settings 中，您可以启用 **checksum** 比较（在提供商支持时检查哈希值和大小），并在 Yandex 变慢时调整并发文件传输数量。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="实时监控从 Yandex Disk 到 Wasabi 的传输" class="img-large img-center" />

## 验证并安排后续作业

作业完成后，对两个位置打开 **Compare**，找出 left-only 或不匹配的文件，并在比较视图中复制遗漏的文件。如果过渡期间仍在使用 Yandex Disk，PLUS 许可证允许您按 crontab 风格的时间安排作业，使新文件持续进入 Wasabi，直到您完成切换。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="安排从 Yandex Disk 到 Wasabi 的定期作业" class="img-large img-center" />

## 开始使用

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 通过 **Remote > New Remote** 添加 Yandex Disk 和 Wasabi。
3. 创建 Copy 作业，运行 Dry Run，然后开始传输。
4. 在删除源端任何内容之前，先用 Folder Compare 进行验证。

一旦归档存放在您掌控的存储桶中，停用旧副本就成为一个深思熟虑的决定，而不是一场赌博。

---

**相关指南：**

- [管理 Yandex Disk 存储 — 使用 RcloneView 同步和备份文件](https://rcloneview.com/support/blog/manage-yandex-disk-cloud-sync-backup-rcloneview)
- [管理 Wasabi 存储 — 使用 RcloneView 同步和备份文件](https://rcloneview.com/support/blog/manage-wasabi-cloud-sync-backup-rcloneview)
- [使用 RcloneView 进行校验和验证的云迁移](https://rcloneview.com/support/blog/checksum-verified-cloud-migrations-rcloneview)

<CloudSupportGrid />
