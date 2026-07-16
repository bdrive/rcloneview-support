---
slug: sync-google-photos-to-google-drive-rcloneview
title: "将 Google 相册同步到 Google Drive——使用 RcloneView 整理和备份您的照片库"
authors:
  - kai
description: "了解如何使用 RcloneView 自动将 Google 相册同步到 Google Drive。在云账户之间传输、整理并备份您的整个照片库。"
keywords:
  - 将 Google 相册同步到 Google Drive
  - 使用 RcloneView 备份 Google 相册到 Google Drive
  - Google 相册 Google Drive 传输
  - RcloneView Google 相册同步
  - 云照片库备份
  - 自动 Google 相册备份
  - 云端照片文件管理
  - Google 相册云同步
  - 在 Google 服务之间传输照片
  - 云照片整理工具
tags:
  - RcloneView
  - google-photos
  - google-drive
  - cloud-sync
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 将 Google 相册同步到 Google Drive——使用 RcloneView 整理和备份您的照片库

> Google 相册和 Google Drive 在 rclone 中是两个独立的云端远程——RcloneView 让您只需点击几下即可在两者之间同步整个照片库，并可设置自动定时运行。

许多摄影师和团队将 Google 相册作为主要的拍摄和整理工具，同时依靠 Google Drive 进行结构化的文件共享与协作。问题在于：这是 rclone 中两个不同的云服务，内容不会在它们之间自动流转。一位在 Google 相册中管理着数万张已处理图片的婚礼摄影师，可能需要将这些文件存放到结构化的 Google Drive 文件夹中，以便客户交付和长期归档。RcloneView 在同一界面中连接两项服务，使您无需任何命令行操作即可轻松地在它们之间传输、同步和定时迁移照片。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 在 RcloneView 中连接 Google 相册和 Google Drive

Google 相册和 Google Drive 都使用基于浏览器的 OAuth 身份验证。在 RcloneView 中，打开“远程”选项卡并点击“新建远程”，然后选择 Google Photos 并在浏览器中完成登录。重复此过程以添加 Google Drive 作为第二个远程。几分钟后，两个账户会分别显示在双栏文件浏览器的各自面板中。

两个远程并排显示后，您可以在同一窗口中浏览 Google 相册库以及 Google Drive 的文件夹结构。这种并排视图便于您快速发现哪些相册或日期范围尚未传输，也方便您将单个文件夹拖拽过去进行一次性快速复制。拖放确认弹窗（可在设置中开关）可在处理大型照片库时防止误操作。

<img src="/support/images/en/blog/new-remote.png" alt="Adding Google Photos and Google Drive as remotes in RcloneView" class="img-large img-center" />

## 设置同步任务以传输您的照片库

对于批量传输，请使用任务管理器创建专门的同步任务。在“主页”选项卡中点击“同步”按钮，选择您的 Google 相册文件夹作为源，并选择 Google Drive 中的目标文件夹作为目的地。四步向导可让您配置并发传输流，启用校验和验证以在传输过程中捕获损坏的文件，并应用文件大小或时间过滤器，以排除视频或仅提取特定时间段的照片。

在运行完整传输之前，请使用“预演”（Dry Run）功能预览将要复制的确切文件——在同步大型归档时，这一步至关重要，可以避免意外用重复文件覆盖已经整理好的 Drive 文件夹。预演会显示计划操作的完整列表，而不会进行任何实际更改。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-to-cloud sync job between Google Photos and Google Drive in RcloneView" class="img-large img-center" />

屏幕底部的“传输中”选项卡提供实时传输监控——进度百分比、当前传输速度和文件数量——让您在进行大规模照片迁移时无需猜测还剩多少内容。

## 定时自动同步照片（PLUS 许可证）

对于持续上传到 Google 相册的摄影师或团队来说，一次性传输是不够的。使用 PLUS 许可证，您可以通过类似 crontab 的调度方式安排周期性同步任务。配置一个每晚运行的任务，将新增的 Google 相册照片拉取到对应的 Google Drive 文件夹中，从而在无需人工干预的情况下保持两个账户的内容同步更新。调度器支持精细的时间间隔设置：按分钟、小时、星期几、每月的日期或月份运行。

任务历史记录会记录每次执行情况——运行时间、传输的文件数量、总数据大小、速度，以及是否成功完成或出错。如果网络问题中断了会话，RcloneView 会自动重试（默认 3 次），并记录结果以便您稍后查看。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history showing completed Google Photos to Google Drive sync transfers" class="img-large img-center" />

## 快速上手

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 通过“远程”选项卡 > “新建远程” > Google Photos 添加 Google 相册，然后通过浏览器进行身份验证。
3. 以同样的方式添加 Google Drive 作为第二个远程。
4. 在任务管理器中创建一个同步任务，选择 Google 相册作为源，选择 Google Drive 文件夹作为目的地，先运行一次预演，然后执行完整传输。

使用 RcloneView，只需几分钟即可完成将 Google 相册库同步到 Google Drive 的配置，为您提供结构化的文件访问方式，以及整个照片库的可靠副本。

---

**相关指南：**

- [管理 Google 相册存储——使用 RcloneView 同步与备份文件](https://rcloneview.com/support/blog/manage-google-photos-cloud-sync-backup-rcloneview)
- [管理 Google Drive 存储——使用 RcloneView 同步与备份文件](https://rcloneview.com/support/blog/manage-google-drive-cloud-sync-backup-rcloneview)
- [使用 RcloneView 将 Google 相册备份到外部硬盘和 NAS](https://rcloneview.com/support/blog/backup-google-photos-external-drive-nas-rcloneview)

<CloudSupportGrid />
