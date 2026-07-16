---
slug: manage-cloudinary-cloud-sync-backup-rcloneview
title: "管理 Cloudinary 存储——使用 RcloneView 同步和备份文件"
authors:
  - jay
description: "了解如何使用 RcloneView 管理、同步并将 Cloudinary 数字资产备份到 Amazon S3、Google Drive 或其他云存储。"
keywords:
  - 使用 RcloneView 管理 Cloudinary
  - Cloudinary 备份到 S3
  - Cloudinary 同步 Google Drive
  - Cloudinary rclone
  - 备份 Cloudinary 资产
  - Cloudinary 云存储管理
  - 同步 Cloudinary 文件
  - Cloudinary 数字资产备份
tags:
  - RcloneView
  - cloud-storage
  - cloud-sync
  - backup
  - guide
  - dam
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 管理 Cloudinary 存储——使用 RcloneView 同步和备份文件

> Cloudinary 保存着你的生产环境图像和视频资产——RcloneView 让你无需编写任何脚本，即可将它们备份到 Amazon S3、Google Drive 或其他任意云存储。

Cloudinary 已成为开发者和创意团队管理大量图像、视频及富媒体文件库的首选平台。但仅将所有内容存储在 Cloudinary 中会造成单点故障：意外的批量删除、账户问题或 API 中断都可能在几分钟内导致整个媒体库无法访问。RcloneView 基于 rclone 的 Cloudinary 后端构建，为你提供可视化界面来浏览、同步并将 Cloudinary 账户备份到任何其他受支持的云存储——在你自己掌控的地方保留一份已验证的副本。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 将 Cloudinary 连接到 RcloneView

打开 RcloneView 并导航到"远程"选项卡，然后点击"新建远程"。从提供商列表中选择 Cloudinary，输入你的凭据以完成设置。连接成功后，你的 Cloudinary 存储会作为可浏览的远程出现在资源管理器面板中——使用左侧的文件夹树浏览你的媒体库，右侧的文件列表则用于查看单个资产的名称、大小和修改日期。

缩略图视图对 Cloudinary 内容尤其有用：在文件列表中切换到缩略图模式，即可获得图像的可视化网格，而不是纯文件名，这样在触发任何操作之前，你可以轻松确认自己正在查看正确的文件夹。

<img src="/support/images/en/blog/new-remote.png" alt="Adding Cloudinary as a new remote in RcloneView" class="img-large img-center" />

## 将 Cloudinary 资产备份到另一个云存储

在一个资源管理器面板中打开 Cloudinary，在另一个面板中打开目标云存储（例如 Amazon S3、Backblaze B2 或 Google Drive），然后通过"主页"选项卡 > "同步"启动同步任务。4 步向导可让你精确配置传输内容：

- 选择你的 Cloudinary 文件夹作为源，选择备份云存储作为目标
- 在第 3 步中使用预定义的文件过滤器（图像、视频）来定位特定媒体类型，并跳过不需要的文件
- 设置最大文件年龄以运行增量同步，仅捕获新更新的资产

务必先运行**空跑（Dry Run）**——它会在不改动任何内容的情况下，预览哪些文件将被传输或跳过。对于大型 Cloudinary 库，这能在造成备份遗漏之前发现过滤器配置错误。

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="Drag and drop interface for transferring Cloudinary assets to S3 backup" class="img-large img-center" />

## 定时执行自动化 Cloudinary 备份

为了持续保护资产，RcloneView PLUS 在同步向导的第 4 步中新增了类似 crontab 的定时功能。每晚凌晨 2 点的同步会捕获当天新上传的资产，同时将带宽占用保持在非高峰时段。使用"模拟计划"预览功能，在保存前验证下一次执行时间——首次定时任务触发时不会有任何意外。

任务运行后，作业完成通知会告知你状态、传输的文件数量和数据量。对于每天有数十次活跃 Cloudinary 转换和上传的团队来说，这种被动提醒意味着你无需登录检查，也能知道备份已正确运行。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Configuring a nightly scheduled backup of Cloudinary assets in RcloneView" class="img-large img-center" />

## 验证备份完整性

使用"文件夹比较"功能（主页选项卡 > 比较）随时对比 Cloudinary 源与备份目标的差异。RcloneView 会并排显示仅左侧存在、仅右侧存在、相同和不同的文件——你可以一目了然地识别覆盖范围中的缺口，并直接从比较视图中复制缺失的文件，而无需新建任务。对于高价值的媒体资产，在同步任务的高级设置中启用校验和，可以在文件大小匹配之外验证文件内容，确认每个文件都完整无损地到达。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder comparison between Cloudinary source and S3 backup destination" class="img-large img-center" />

## 开始使用

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 通过"远程"选项卡 > "新建远程"添加 Cloudinary 作为远程并完成配置。
3. 添加你的备份目标（Amazon S3、Backblaze B2、Google Drive）作为第二个远程。
4. 创建从 Cloudinary 到目标的同步任务，运行空跑，然后启用 PLUS 定时功能以实现每日自动化备份。

Cloudinary 保存着你最重要的生产环境资产——在第二个云存储中保留同步副本，可以将单点故障转变为你完全掌控的可靠、可审计的备份。

---

**相关指南：**

- [使用 RcloneView 跨多个云管理数字资产](https://rcloneview.com/support/blog/manage-digital-assets-multi-cloud-rcloneview)
- [管理 Amazon S3 存储——使用 RcloneView 同步和备份文件](https://rcloneview.com/support/blog/manage-amazon-s3-cloud-sync-backup-rcloneview)
- [使用 RcloneView 将 Google 相册备份到外部驱动器或 NAS](https://rcloneview.com/support/blog/backup-google-photos-external-drive-nas-rcloneview)

<CloudSupportGrid />
