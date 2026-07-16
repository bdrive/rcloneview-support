---
slug: sync-yandex-disk-to-onedrive-rcloneview
title: "将 Yandex Disk 同步到 OneDrive —— 使用 RcloneView 进行云备份"
authors:
  - steve
description: "使用 RcloneView 将 Yandex Disk 同步到 OneDrive，在一个跨平台 GUI 中按计划在两个提供商之间镜像文件。"
keywords:
  - sync yandex disk to onedrive
  - yandex disk onedrive backup
  - yandex disk to microsoft onedrive
  - rcloneview yandex disk
  - cloud to cloud sync
  - yandex disk migration
  - onedrive backup destination
  - cross-cloud file sync
tags:
  - yandex-disk
  - onedrive
  - cloud-to-cloud
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 将 Yandex Disk 同步到 OneDrive —— 使用 RcloneView 进行云备份

> 在保留 Yandex Disk 作为源的同时，在 OneDrive 中维护一份可用的副本，无需导出再重新上传任何内容——RcloneView 将两者都作为远程连接，并直接在云与云之间同步文件夹。

对于在俄罗斯及周边市场开展工作的用户和团队来说，Yandex Disk 是常见的主要存储选择，但协作者或下游工具往往期望文件存放在 OneDrive 中——无论是为了 Office 集成、SharePoint 交接，还是单纯因为组织的其余部分都在那里。通常在两者之间移动文件意味着先将所有内容下载到本地再重新上传，这会使传输时间翻倍，并不必要地占用本地磁盘空间。RcloneView 在同一窗口中将 Yandex Disk 和 OneDrive 都作为远程连接，并在它们之间直接传输，完全跳过本地中转环节。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 连接两个远程

Yandex Disk 通过 OAuth 浏览器登录连接到 RcloneView——无需单独的 API 密钥或手动输入令牌，使用与 Google Drive 或 Dropbox 相同的流程。OneDrive 的连接方式相同。两者都完成身份验证后，并排打开两个资源管理器面板，一个指向 Yandex Disk 根目录，另一个指向目标 OneDrive 文件夹，这样你可以在配置传输任务之前确认双方的文件夹结构。

<img src="/support/images/en/blog/new-remote.png" alt="Connecting Yandex Disk and OneDrive as remotes in RcloneView" class="img-large img-center" />

RcloneView 在免费许可证下也支持同步和比较文件夹——在两个云提供商之间移动文件并不需要单独的付费套餐，这对于一次性迁移尤其重要，因为你不想为了单次传输而承诺订阅。

## 配置同步任务

同步向导的第 1 步用于定义传输：选择 Yandex Disk 文件夹作为源，OneDrive 文件夹作为目标，并选择"仅修改目标"以实现单向镜像，使 OneDrive 与 Yandex Disk 保持一致，而不改动原始内容。在正式运行之前，使用 Dry Run 预览将要复制的确切文件——这可以在任何数据真正移动之前发现命名问题或意外庞大的文件夹，鉴于两个提供商报告文件元数据的方式存在差异，这一步值得进行。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring a one-way sync job from Yandex Disk to OneDrive in RcloneView" class="img-large img-center" />

第 3 步的过滤设置允许你排除不需要传输的文件类型——可以使用最大文件大小或自定义路径排除规则跳过大型媒体文件或已同步的文件夹，使 OneDrive 副本专注于协作者实际需要的内容。

## 监控传输

任务运行后，底部信息视图中的"传输中"选项卡会显示实时进度：完成百分比、当前传输速度和文件数量，这样你可以确认一个较大的 Yandex Disk 归档确实在移动，而不是卡住了。任务完成后，任务历史记录会记录传输的总大小、持续时间和完成状态，为你留下一份记录，以便日后协作者询问某批文件是否已成功传输时可以参考。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Viewing Job History after syncing Yandex Disk to OneDrive in RcloneView" class="img-large img-center" />

## 开始使用

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 通过 OAuth 登录将 Yandex Disk 和 OneDrive 都连接为远程。
3. 配置从 Yandex Disk 到 OneDrive 的单向同步任务，并先运行 Dry Run。
4. 运行同步，然后查看任务历史以确认传输按预期完成。

跨云备份不应该需要绕道本地磁盘——只要两个提供商都在同一窗口中就绪，文件就会直接移动到需要去的地方。

---

**相关指南：**

- [管理 Yandex Disk 存储 —— 使用 RcloneView 同步和备份文件](https://rcloneview.com/support/blog/manage-yandex-disk-cloud-sync-backup-rcloneview)
- [管理 OneDrive 存储 —— 使用 RcloneView 同步和备份文件](https://rcloneview.com/support/blog/manage-onedrive-cloud-sync-backup-rcloneview)
- [使用 RcloneView 将 Yandex Disk 迁移到 Dropbox](https://rcloneview.com/support/blog/migrate-yandex-disk-to-dropbox-rcloneview)

<CloudSupportGrid />
