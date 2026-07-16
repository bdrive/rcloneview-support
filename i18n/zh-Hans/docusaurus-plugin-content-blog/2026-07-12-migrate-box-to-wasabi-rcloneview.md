---
slug: migrate-box-to-wasabi-rcloneview
title: "将 Box 迁移到 Wasabi — 使用 RcloneView 传输文件"
authors:
  - casey
description: "使用 RcloneView 将文件从 Box 迁移到 Wasabi 热存储,借助文件夹对比、同步任务和 Dry Run 安全完成迁移。"
keywords:
  - migrate Box to Wasabi
  - Box to Wasabi transfer
  - Box cloud migration
  - Wasabi hot storage
  - RcloneView Box Wasabi
  - cloud to cloud transfer tool
  - Box storage backup
  - Wasabi sync software
  - move files between clouds
  - Box S3 migration
tags:
  - box
  - wasabi
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 将 Box 迁移到 Wasabi — 使用 RcloneView 传输文件

> 直接将 Box 账户中的文件和文件夹迁移到与 S3 兼容的 Wasabi 热存储,无需先将所有内容下载到本地磁盘再上传。

采用 Box 进行文档协作的团队,有时会发现它已不再适合长期存储,而与 S3 兼容的 Wasabi 对象存储便成为存放归档、媒体库或备份集的新去处。RcloneView 可在同一个窗口中同时连接这两项服务,因此这次迁移是直接的云到云传输,而不是通过本地机器先下载再上传的缓慢流程。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 将 Box 和 Wasabi 添加为远程

Box 通过 OAuth 方式添加——在“Remote”标签页中点击“New Remote”会打开一个浏览器窗口用于账户登录,身份验证完成后 RcloneView 会自动完成连接。需要企业级全局视图的商业账户可以在设置时配置 `box_sub_type = enterprise`。Wasabi 则通过与 S3 兼容的远程类型添加,需要提供 Access Key、Secret Key 以及目标区域的 Wasabi 端点。

配置好这两个远程后,它们会在 Explorer 中以独立标签页的形式显示,你可以在一个面板中打开 Box,在另一个面板中打开 Wasabi,在移动任何内容之前并排查看两边的文件树。

<img src="/support/images/en/blog/new-remote.png" alt="Adding Box and Wasabi remotes in RcloneView" class="img-large img-center" />

## 传输前先进行对比

“Folder Compare”(文件夹对比)会将 Box 源文件夹和 Wasabi 目标文件夹并排展示,并标出各自缺失的内容、已经一致的内容,以及大小存在差异的内容。对于首次迁移而言,这是在执行批量同步之前确认整个 Box 库都已被纳入统计的最快方式,同时它在传输完成后也可用作验证步骤——任何在复制后仍被标记为“left-only”(仅左侧存在)的文件都需要再检查一遍。

在“Folder Compare”界面内直接复制时,只会处理目标端尚不存在或大小不同的文件,因此中途中断的迁移可以在恢复后继续进行,而不必重新复制已经成功传输到 Wasabi 的文件。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Comparing Box and Wasabi folders before migration" class="img-large img-center" />

## 使用 Sync 执行迁移

对于批量传输,Sync 向导的四个步骤可以处理源/目标选择、传输并发数以及过滤设置——这在需要排除不想迁移到 Wasabi 的文件类型时非常有用,例如 Box 协作过程中产生的临时文件。Dry Run 会在实际执行前预览将要复制的具体文件,当 Box 库中积累了多年的内容、出错代价高昂时,这一点尤为重要。

RcloneView 可在 Windows、macOS 和 Linux 上于同一个窗口中挂载并同步 90 多个云存储提供商,因此这里用于 Box 和 Wasabi 的相同工作流程同样适用于任何其他远程配对,无需再学习新工具。同步任务保存到 Job Manager 后,其历史记录——状态、传输大小和耗时——会一直保留以供日后查阅。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Running a sync job from Box to Wasabi in RcloneView" class="img-large img-center" />

## 快速上手

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 在 Remote Manager 中通过 OAuth 登录添加 Box,并通过与 S3 兼容的凭证添加 Wasabi。
3. 在 Box 源与 Wasabi 目标之间运行 Folder Compare,在传输前确认迁移范围。
4. 先启用 Dry Run 创建 Sync 任务,确认无误后再正式运行,并在“Transferring”标签页中跟踪进度。

当两个远程都显示在同一个 Explorer 中时,将 Box 库迁移到 Wasabi 就变成了一个统一的引导式工作流程,而不再是需要多个工具配合的繁琐操作。

---

**相关指南:**

- [管理 Box 存储 — 使用 RcloneView 同步和备份文件](https://rcloneview.com/support/blog/manage-box-cloud-sync-backup-rcloneview)
- [管理 Wasabi 存储 — 使用 RcloneView 同步和备份文件](https://rcloneview.com/support/blog/manage-wasabi-cloud-sync-backup-rcloneview)
- [将 Box 迁移到 Google Drive — 使用 RcloneView 传输文件](https://rcloneview.com/support/blog/migrate-box-to-google-drive-rcloneview)

<CloudSupportGrid />
