---
slug: manage-box-business-cloud-sync-backup-rcloneview
title: "管理 Box for Business — 使用 RcloneView 同步和备份"
authors:
  - robin
description: "在 RcloneView 中连接 Box for Business，通过一个跨平台 GUI 浏览、同步和备份企业文件。"
keywords:
  - box for business
  - box 企业云存储
  - RcloneView box business
  - box_sub_type enterprise
  - 同步 box business 文件
  - 备份 box for business
  - 管理 box 企业账户
  - box 云存储 GUI
  - box business 文件管理
tags:
  - RcloneView
  - box
  - cloud-storage
  - cloud-sync
  - backup
  - business
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 管理 Box for Business — 使用 RcloneView 同步和备份

> Box for Business 账户在连接时需要一个额外设置 — RcloneView 会处理它，然后为你提供完整的文件管理器。

Box for Business 使用与个人 Box 账户不同的账户类型运行，正确连接它需要在远程设置期间启用一个企业标志。对于在数十个席位间共享企业文件夹的设计代理机构来说，无法承受一个悄悄浏览错误工作区的损坏远程连接。RcloneView 会在设置期间添加正确的设置，然后将 Box for Business 像其他任何远程一样对待 —— 可以在一个窗口中浏览、同步和挂载。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 连接 Box for Business 账户

Box for Business 使用与个人 Box 账户相同的 OAuth 浏览器登录方式，但需要在创建远程时设置 `box_sub_type = enterprise`，以便 RcloneView 指向正确的企业工作区，而不是个人文件夹树。打开 Remote 标签 > New Remote，选择 Box，完成浏览器登录，并在保存前设置子类型。与仅支持挂载的工具不同，RcloneView 在 Box for Business 远程上也支持同步和文件夹比较 —— 在 FREE 许可下即可使用。

连接完成后，该远程会像其他任何云存储一样出现在 Explorer 标签栏中。你可以浏览企业文件夹，在底部摘要中查看文件数量和大小，并在多个 Box 工作区之间切换而无需每次重新进行身份验证。

<img src="/support/images/en/blog/new-remote.png" alt="Adding a new Box for Business remote in RcloneView" class="img-large img-center" />

## 备份企业文件夹

同步作业以保护其他远程相同的方式保护 Box for Business 内容：在同步向导的第 1 步配置源和目标，选择单向"仅修改目标"以获得稳定的备份方向，并在第 3 步添加过滤器以排除临时文件或超大附件。对于处理合同或客户交付物的团队，每晚向本地存储或第二个云账户进行的单向同步，可以在共享工作区之外保留一份恢复副本。

此后 Job History 会追踪每次运行 —— 状态、文件数量、传输大小和持续时间 —— 让管理员能够确认备份是否真正完成，而不是假设计划任务在后台悄悄运行。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history showing completed Box for Business backup runs" class="img-large img-center" />

## 将 Box for Business 挂载为本地驱动器

挂载会将企业账户转变为驱动器盘符或挂载点，任何桌面应用程序都可以直接打开它，而无需先下载文件。这对于依赖本地文件路径而不是网页上传对话框的设计或文档软件团队来说非常重要。将缓存模式配置为"writes"以在响应性和可靠性之间取得平衡，并为不应修改共享内容的审阅者启用 Read only。

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="Mounting a Box for Business folder from the Remote Explorer panel" class="img-large img-center" />

## 快速上手

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 创建一个新的 Box 远程，并在设置期间启用企业子类型。
3. 配置单向同步作业以备份关键的企业文件夹。
4. 为需要直接本地文件访问的团队挂载该远程。

企业账户应该获得与其他任何云存储相同的可靠同步和备份保障 —— RcloneView 只是确保连接从一开始就配置正确。

---

**相关指南：**

- [管理 Box 存储 — 使用 RcloneView 同步和备份文件](https://rcloneview.com/support/blog/manage-box-cloud-sync-backup-rcloneview)
- [管理 Dropbox for Business 存储 — 使用 RcloneView 同步与备份文件](https://rcloneview.com/support/blog/manage-dropbox-business-cloud-sync-backup-rcloneview)
- [使用 RcloneView 将 Box 存储挂载为网络驱动器，实现无缝团队访问](https://rcloneview.com/support/blog/mount-box-storage-network-drive-rcloneview)

<CloudSupportGrid />
