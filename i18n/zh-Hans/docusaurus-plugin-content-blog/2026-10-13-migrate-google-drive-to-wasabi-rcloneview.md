---
slug: migrate-google-drive-to-wasabi-rcloneview
title: "将 Google Drive 迁移到 Wasabi — 使用 RcloneView 传输文件"
authors:
  - alex
description: "使用 RcloneView 将 Google Drive 迁移到 Wasabi。跨云复制文件,通过 Dry Run 和 Folder Compare 验证,并保留 S3 兼容的归档。"
keywords:
  - 迁移 Google Drive 到 Wasabi
  - google drive to wasabi
  - Google Drive Wasabi 传输
  - Google Drive 归档 S3
  - Wasabi 迁移 图形界面
  - 云到云传输
  - rcloneview google drive wasabi
  - 将 Google Drive 迁移到对象存储
  - Google Drive 备份 Wasabi
  - Wasabi 存储桶同步
tags:
  - RcloneView
  - google-drive
  - wasabi
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 将 Google Drive 迁移到 Wasabi — 使用 RcloneView 传输文件

> 无需先下载到本地磁盘,即可将 Google Drive 移动或归档到 Wasabi 存储桶。

一家拥有 2TB 已完成项目的设计工作室,可能希望将它们从 Google Drive 迁出,存入 S3 兼容的对象存储。RcloneView 可直接从 Drive 传输到 Wasabi,事前可运行 Dry Run,事后可使用 Folder Compare,确认没有遗漏。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 连接两个远程

Google Drive 使用 OAuth:在 **New Remote** 中选择它,然后通过浏览器登录。Wasabi 是 S3 兼容的提供商,因此需要输入 Access Key、Secret Key 以及所在 Wasabi 区域的终端节点。请先在 Wasabi 控制台创建存储桶,作为目标位置。

<img src="/support/images/en/blog/new-remote.png" alt="在 RcloneView 中添加 Google Drive 和 Wasabi 远程" class="img-large img-center" />

使用 FREE 许可证即可对 S3、Azure 或 Backblaze B2 进行完整的读写,Wasabi 及其他 S3 兼容服务的使用方式相同。

## 通过 Dry Run 规划传输

在一个 Explorer 面板中打开 Google Drive,在另一个面板中打开 Wasabi 存储桶。如果只是一次性迁移,可在面板之间拖动文件夹;不同远程之间执行的是复制。对于大型资料库,请改为创建作业。Step 1 设置源和目标,Step 2 可调整并发传输数,Step 3 可按文件大小、时间或类型进行过滤。运行 **Dry Run** 可预览将要复制的所有文件。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="从 Google Drive 到 Wasabi 的跨云传输" class="img-large img-center" />

迁移期间请选择 **Copy** 作业类型,而不是 Sync。Copy 不会删除目标端的任何内容,在验证结果之前这是更安全的选择。

## 监控传输

启动作业后,在窗口底部的 Transferring 选项卡中查看进度:百分比、速度和文件数量。如果 Google Drive 的速率限制导致变慢,请在作业的高级设置中降低并发文件传输数后重新运行;已复制的文件会被跳过。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="在 RcloneView 中监控到 Wasabi 的传输" class="img-large img-center" />

## 清理之前先验证

使用 **Compare** 并排查看两个位置。过滤器可显示仅在左侧、仅在右侧、相同和不同的文件,任何缺口都一目了然。只有在比较结果无误之后,才应考虑删除 Google Drive 中的数据。Job History 会保留每次运行的记录。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="使用 Folder Compare 验证 Google Drive 到 Wasabi 的迁移" class="img-large img-center" />

## 开始使用

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 添加 Google Drive(OAuth)和 Wasabi(Access Key、Secret Key、终端节点)作为远程。
3. 创建从 Drive 到存储桶的 Copy 作业,并运行 Dry Run。
4. 启动作业,然后使用 Compare 确认结果。

在由您掌控的存储桶中保存一份经过验证的副本,后续清理工作的风险就会很低。

---

**相关指南:**

- [使用 RcloneView 管理 Wasabi 存储](https://rcloneview.com/support/blog/manage-wasabi-cloud-sync-backup-rcloneview)
- [将 OneDrive 迁移到 Wasabi](https://rcloneview.com/support/blog/migrate-onedrive-to-wasabi-rcloneview)
- [将 Dropbox 迁移到 Wasabi](https://rcloneview.com/support/blog/migrate-dropbox-to-wasabi-rcloneview)

<CloudSupportGrid />
