---
slug: manage-petabox-cloud-sync-backup-rcloneview
title: "管理 Petabox 存储 — 使用 RcloneView 同步和备份文件"
authors:
  - kai
description: "将 Petabox 兼容 S3 的存储连接到 RcloneView,与其他 90 多个云提供商一起进行跨平台浏览、同步、备份和挂载。"
keywords:
  - Petabox
  - Petabox RcloneView
  - Petabox 同步
  - Petabox 备份
  - S3 兼容存储
  - 管理 Petabox
  - 对象存储 GUI
  - Petabox 云存储
  - S3 兼容云管理器
  - Petabox rclone
tags:
  - RcloneView
  - s3-compatible
  - cloud-storage
  - cloud-sync
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 管理 Petabox 存储 — 使用 RcloneView 同步和备份文件

> 在与您使用的所有其他云相同的窗口中浏览、同步和备份 Petabox 对象存储——无需单独的 S3 客户端。

Petabox 是一种兼容 S3 的对象存储服务,这意味着它接入 RcloneView 的方式与 Amazon S3 或 Wasabi 相同:通过访问密钥、私密密钥和自定义端点。连接后,Petabox 在 RcloneView 的文件浏览器中的表现与任何其他远程连接相同——可浏览、可同步、可与其他提供商一起挂载。对于那些出于对象存储经济性而选择 Petabox,但仍需要普通文件管理器体验而非 AWS CLI 或仅限存储桶的网页控制台的团队来说,这一点非常重要。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 将 Petabox 连接为兼容 S3 的远程

添加 Petabox 遵循 RcloneView 标准的兼容 S3 远程流程:打开新建远程,选择兼容 S3 的类型,然后输入您的 Petabox 访问密钥 ID、私密访问密钥,以及来自 Petabox 控制面板的存储桶端点 URL。RcloneView 内置了嵌入式 rclone 二进制文件,因此无需单独安装——仅凭凭证即可将存储桶带入文件浏览器。

<img src="/support/images/en/blog/new-remote.png" alt="Adding a Petabox S3-compatible remote in RcloneView" class="img-large img-center" />

添加后,Petabox 会像 Google Drive 或 OneDrive 一样以标签形式出现在浏览器面板中。与仅支持挂载的 S3 浏览器不同,RcloneView 还可以对 Petabox 进行同步和文件夹比较——在 FREE 许可下即可使用基本同步功能,无需单独购买。

## 将 Petabox 与其他云提供商同步

Petabox 的一个常见用例是归档目前存放在更昂贵提供商那里的数据,或为了冗余而镜像一个正在使用的存储桶。RcloneView 的同步向导允许您将 Petabox 设置为源或目标,并使用文件类型、时间和大小过滤器,确保只有您想要的数据被移动。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Syncing Petabox object storage with another cloud provider in RcloneView" class="img-large img-center" />

试运行(Dry Run)模式会在实际执行任何操作之前,准确预览将要复制或删除的内容——当您将单向同步指向一个不希望被意外覆盖的存储桶时,这是最安全的做法。比较(Compare)视图更进一步,在您提交复制之前显示 Petabox 与第二个远程之间仅存在于左侧、仅存在于右侧以及大小不同的文件。

## 安排定期的 Petabox 备份

为了持续保护数据,请将 Petabox 同步保存为 Job Manager 中的一个作业,而不是每次手动重新运行。PLUS 许可用户可以附加 crontab 样式的计划,使 Petabox 的备份自动运行,作业历史(Job History)会记录每次运行的状态、传输速度和文件数量。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a recurring Petabox backup job in RcloneView" class="img-large img-center" />

## 快速上手

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 打开新建远程,并为 Petabox 选择兼容 S3 的存储类型。
3. 输入您的访问密钥、私密密钥和 Petabox 端点,然后浏览存储桶。
4. 设置同步或备份作业,并在需要时于 Job Manager 中附加计划。

Petabox 的对象存储定价与 RcloneView 在其与您已管理的任何其他云之间自由移动数据的能力相得益彰。

---

**相关指南:**

- [管理 Cloudflare R2 — 使用 RcloneView 同步和备份文件](https://rcloneview.com/support/blog/manage-cloudflare-r2-cloud-sync-rcloneview)
- [管理 Wasabi 存储 — 使用 RcloneView 同步和备份文件](https://rcloneview.com/support/blog/manage-wasabi-cloud-sync-backup-rcloneview)
- [使用 RcloneView 将 Amazon S3 存储桶挂载为本地驱动器](https://rcloneview.com/support/blog/mount-amazon-s3-buckets-as-local-drives-rcloneview)

<CloudSupportGrid />
