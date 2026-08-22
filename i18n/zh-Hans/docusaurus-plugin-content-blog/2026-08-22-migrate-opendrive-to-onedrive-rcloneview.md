---
slug: migrate-opendrive-to-onedrive-rcloneview
title: "将 OpenDrive 迁移到 OneDrive — 用 RcloneView 传输文件"
authors:
  - alex
description: "用 RcloneView 的云到云传输、Dry Run 预览和 Job History 跟踪功能,将文件从 OpenDrive 移动到 Microsoft OneDrive。"
keywords:
  - opendrive 迁移到 onedrive
  - opendrive onedrive 传输
  - rcloneview opendrive 迁移
  - opendrive onedrive 同步
  - 云到云迁移
  - opendrive 替代方案
  - onedrive 迁移工具
  - 传输 opendrive 文件
  - 多云文件传输
  - 云存储迁移 gui
tags:
  - RcloneView
  - opendrive
  - onedrive
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 将 OpenDrive 迁移到 OneDrive — 用 RcloneView 传输文件

> 用 RcloneView 将 OpenDrive 账户的文件直接迁移到 Microsoft OneDrive,不需要先下载到本地再重新上传。

将存储整合到更少的供应商上,是许多人离开 OpenDrive 的常见原因,对于已经在 Microsoft 365 上统一协作的团队来说尤其如此。RcloneView 在同一个窗口中连接这两项服务,并在它们之间直接传输数据,因此迁移过程不需要依赖用本地磁盘空间临时存放所有文件的副本。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 连接两个远程

通过 New Remote 向导添加 OpenDrive 作为远程,输入它所要求的账户信息,然后使用基于浏览器的 OAuth 登录添加 OneDrive 作为第二个远程。两个远程会在 Explorer 面板中以独立的标签页显示,而且 RcloneView 可以在一个窗口内挂载并同步 90 多个供应商,因此一旦两个账户都连接完成,就不再需要另外的工具。

两个远程并排显示后,拖放会触发直接复制——在不同远程之间拖动始终是复制而不是移动,因此在你确认传输完成之前,原始的 OpenDrive 文件都保持不变。

<img src="/support/images/en/blog/new-remote.png" alt="Adding OpenDrive and OneDrive remotes in RcloneView" class="img-large img-center" />

## 以 Sync 作业运行迁移

如果要进行完整账户迁移,而不只是一次性的文件夹复制,4 步 Sync 向导是更可靠的方式。选择 OpenDrive 远程及其文件夹作为源,OneDrive 作为目标,并选择单向同步,这样目标会被构建为与源一致,而不会有任何变化流回源端。Advanced 设置可以调整并发文件传输数,并启用校验和比较,它会通过哈希和大小来确认每个文件是否一致,而不仅仅依赖大小——对于数据完整性比原始速度更重要的迁移来说,值得开启此选项。

在提交完整运行之前,Dry Run 会准确预览将要复制的文件,让你可以在过时的共享文件夹之类的意外内容进入 OneDrive 之前发现它们。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Migrating files from OpenDrive to OneDrive with RcloneView Sync" class="img-large img-center" />

## 验证传输是否顺利完成

同步完成后,Compare 功能会将 OpenDrive 源与 OneDrive 目标并排对比,标记出仅左侧存在的文件、仅右侧存在的文件,以及大小不同的文件。这可以在你认为可以安全关闭 OpenDrive 账户之前,捕捉到部分传输或被跳过的文件,任何发现的差异都可以直接从对比视图中复制过去。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Comparing OpenDrive and OneDrive after migration in RcloneView" class="img-large img-center" />

## 在 Job History 中跟踪迁移

迁移作业的每一次运行——无论是为了补上遗漏文件的手动重新运行,还是网络故障后的重试——都会连同开始时间、耗时、状态、总大小和文件数量一起记录在 Job History 中。当你之后需要说明这次迁移的情况时,这份记录能帮助你确认具体迁移了什么、发生在什么时间。

## 快速开始

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 将 OpenDrive 和 OneDrive 都添加为远程。
3. 配置一个从 OpenDrive 到 OneDrive 的单向 Sync 作业,先运行 Dry Run,再执行传输。
4. 在停用 OpenDrive 账户之前,用 Compare 验证每个文件都已到达。

直接的云到云迁移让整个过程更快,并避免了先下载所有内容所带来的本地存储空间紧张问题。

---

**相关指南:**

- [用 RcloneView 管理 OneDrive 存储 — 同步和备份文件](https://rcloneview.com/support/blog/manage-onedrive-cloud-sync-backup-rcloneview)
- [将 OpenDrive 同步到 Google Drive — 用 RcloneView 进行云备份](https://rcloneview.com/support/blog/sync-opendrive-to-google-drive-rcloneview)
- [将 OpenDrive 备份到 AWS S3 — RcloneView 外部存储](https://rcloneview.com/support/blog/backup-opendrive-aws-s3-external-storage-rcloneview)

<CloudSupportGrid />
