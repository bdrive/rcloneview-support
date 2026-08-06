---
slug: manage-magalu-cloud-sync-backup-rcloneview
title: "管理 Magalu 云存储 — 使用 RcloneView 同步与备份文件"
authors:
  - robin
description: "将 Magalu Cloud 兼容 S3 的对象存储连接到 RcloneView，实现拖放浏览、定时备份和跨云同步。"
keywords:
  - Magalu 云存储
  - Magalu S3
  - RcloneView Magalu
  - 管理 Magalu 文件
  - Magalu 云备份
  - Magalu 同步
  - S3 兼容存储 GUI
  - 巴西云存储
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

# 管理 Magalu 云存储 — 使用 RcloneView 同步与备份文件

> 在你用来处理其他所有云端服务的同一个窗口中浏览、同步并备份 Magalu Cloud 兼容 S3 的对象存储。

Magalu Cloud 是一项兼容 S3 的对象存储服务，和大多数 S3 兼容供应商一样，它没有配备专用的桌面文件管理器 —— 你只能靠编写 `curl` 脚本或搭建 CLI 来搬运文件。RcloneView 把 Magalu 存储桶当作任何其他远程存储一样对待，从而弥补了这一空白：完整的文件浏览、拖放传输和计划同步任务，全程无需终端。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 连接 Magalu 存储桶

由于 Magalu Cloud 使用 S3 协议，你可以像添加 Amazon S3 或 Backblaze B2 一样将其添加到 RcloneView：创建一个新的远程连接，选择 S3 兼容供应商选项，然后输入你账户所在地区对应的 Access Key、Secret Key 和 Magalu 端点 URL。保存后，该存储桶就会作为普通标签页出现在资源管理器面板中，可以立即浏览和传输。

<img src="/support/images/en/blog/new-remote.png" alt="在 RcloneView 中添加 Magalu Cloud 兼容 S3 的远程连接" class="img-large img-center" />

在 FREE 许可证下即可对 S3、Azure 和 Backblaze B2 进行完整的读写连接，因此 Magalu 也能无需付费门槛地加入你现有的云端阵容。

## 浏览与整理 Magalu 存储

连接后，Magalu 存储桶在资源管理器中的表现就像任何本地文件夹一样。你可以按名称、类型、修改日期或大小排序，在存储桶装满图片时切换到缩略图视图，并在决定是否将某个文件夹归档到别处之前使用"获取大小"来检查它占用了多少空间。使用 Ctrl+点击 或 Shift+点击 进行多选，无需编写脚本即可批量下载和删除。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="在 RcloneView 中浏览 Magalu Cloud 存储桶内容" class="img-large img-center" />

## 向 Magalu 备份与从 Magalu 备份

对于定期备份，可以设置一个以 Magalu 作为来源或目标的同步任务。四步向导涵盖并发传输数量、通过哈希值和大小(而非仅靠时间戳)比较文件的校验和验证，以及用于排除你不想归档的文件类型的过滤规则。在针对存有生产数据的存储桶执行同步任务之前，先运行一次试运行(Dry Run)来预览到底会复制或删除哪些内容，这是值得做的一步。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="在 RcloneView 中安排 Magalu Cloud 备份任务" class="img-large img-center" />

## 开始使用

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 创建一个新的远程连接，并选择 S3 兼容供应商类型。
3. 输入你的 Magalu Access Key、Secret Key 和端点 URL。
4. 设置一个同步或复制任务，在 Magalu 与你的其他云端远程连接之间移动文件。

一旦 Magalu 接入 RcloneView，管理对象存储就不再是一件需要编写脚本的苦差事，而是成为你日常文件工作流程的一部分。

---

**相关指南：**

- [管理 Scaleway 对象存储 — 使用 RcloneView 进行云同步与备份](https://rcloneview.com/support/blog/manage-scaleway-object-storage-cloud-sync-rcloneview)
- [管理 IONOS 对象存储 — 使用 RcloneView 同步与备份文件](https://rcloneview.com/support/blog/manage-ionos-object-storage-cloud-sync-rcloneview)
- [管理 Leviia 对象存储 — 使用 RcloneView 同步与备份文件](https://rcloneview.com/support/blog/manage-leviia-cloud-sync-backup-rcloneview)

<CloudSupportGrid />
