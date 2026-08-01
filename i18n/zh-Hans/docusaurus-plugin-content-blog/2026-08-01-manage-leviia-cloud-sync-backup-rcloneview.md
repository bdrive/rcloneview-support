---
slug: manage-leviia-cloud-sync-backup-rcloneview
title: "管理 Leviia 对象存储 — 使用 RcloneView 同步和备份文件"
authors:
  - casey
description: "将 Leviia 兼容 S3 的对象存储连接到 RcloneView，实现拖放式文件管理、定时备份和跨云同步。"
keywords:
  - Leviia 对象存储
  - Leviia S3
  - RcloneView Leviia
  - 管理 Leviia 文件
  - Leviia 云备份
  - Leviia 同步
  - S3 兼容存储 GUI
  - 欧洲对象存储
tags:
  - RcloneView
  - s3-compatible
  - object-storage
  - cloud-storage
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 管理 Leviia 对象存储 — 使用 RcloneView 同步和备份文件

> 在管理其他所有云服务的同一窗口中浏览、同步并备份 Leviia 兼容 S3 的对象存储。

Leviia 提供托管在欧洲的兼容 S3 的对象存储，对于既想要数据驻留保障、又不想放弃已经适配 S3 的工具生态的团队来说，是一个常见选择。缺点是兼容 S3 的服务商很少提供打磨完善的专属桌面客户端，用户往往只能编写脚本上传或直接使用简陋的命令行。RcloneView 把 Leviia 当作和其他远程完全一样的存储来处理，从而消除了这种摩擦——完整的文件浏览、拖放式传输、定时同步任务，全程无需任何命令。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 连接 Leviia 存储桶

由于 Leviia 采用 S3 协议，你可以像添加 Amazon S3 或 Wasabi 一样将其添加到 RcloneView：创建一个新的远程，选择兼容 S3 的服务商选项，然后输入你所在账户区域对应的 Access Key、Secret Key 以及 Leviia 端点 URL。保存后，该存储桶会以普通标签页的形式出现在 Explorer 面板中，随时可以浏览和传输。

<img src="/support/images/en/blog/new-remote.png" alt="Adding a Leviia object storage remote in RcloneView" class="img-large img-center" />

RcloneView 可在同一窗口挂载并同步 90 多个服务商，且支持 Windows、macOS 和 Linux，因此 Leviia 存储桶可以与你管理的其他任何云账户并列出现，无需切换工具。

## 浏览和整理 Leviia 存储

连接完成后，Leviia 存储桶在 Explorer 中的表现与本地文件夹完全一致。可以按名称、类型、修改日期或大小排序，为存满图片的存储桶切换到缩略图视图，并使用 Get Size 查看某个文件夹占用的空间，再决定是否将其归档到别处。使用 Ctrl+Click 或 Shift+Click 进行多选，无需编写脚本循环即可完成批量下载和删除。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Browsing Leviia bucket contents in RcloneView" class="img-large img-center" />

## 与 Leviia 之间进行备份

对于经常性备份，可以设置以 Leviia 作为源或目标的同步任务。四步向导涵盖并发传输数、按哈希和大小而非仅按时间戳比较文件的校验和验证，以及排除不想归档的文件类型的过滤规则。在针对存有生产数据的存储桶执行同步任务之前，先运行一次 Dry Run 预览将复制或删除的内容是值得的。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a Leviia backup job in RcloneView" class="img-large img-center" />

## 快速上手

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 创建一个新的远程，并选择兼容 S3 的服务商类型。
3. 输入你的 Leviia Access Key、Secret Key 和端点 URL。
4. 设置一个 Sync 或 Copy 任务，在 Leviia 与其他云端远程之间移动文件。

一旦 Leviia 接入 RcloneView，管理对象存储就不再是编写脚本的苦差事，而成为日常文件操作的一部分。

---

**相关指南：**

- [使用 RcloneView 管理 Ceph 对象存储 — 面向 Ceph 集群的 S3 兼容 GUI](https://rcloneview.com/support/blog/manage-ceph-object-storage-s3-rcloneview)
- [管理 Scaleway 对象存储 — 使用 RcloneView 进行云同步和备份](https://rcloneview.com/support/blog/manage-scaleway-object-storage-cloud-sync-rcloneview)
- [管理 IONOS 对象存储 — 使用 RcloneView 同步和备份文件](https://rcloneview.com/support/blog/manage-ionos-object-storage-cloud-sync-rcloneview)

<CloudSupportGrid />
