---
slug: backup-google-photos-external-drive-nas-rcloneview
title: "如何使用 RcloneView 将所有 Google Photos 备份到外接硬盘或 NAS"
authors:
  - tayson
description: "使用 RcloneView 将整个 Google Photos 照片库下载并备份到外接硬盘、NAS 或其他云存储 —— 自动完成，且不会丢失相册结构。"
keywords:
  - google photos backup
  - download all google photos
  - google photos to external drive
  - google photos to nas
  - backup google photos automatically
  - google photos to hard drive
  - google photos rclone
  - google photos sync nas
  - save google photos locally
  - google photos export alternative
tags:
  - google-photos
  - sync
  - nas
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 如何使用 RcloneView 将所有 Google Photos 备份到外接硬盘或 NAS

> Google Photos 保存着你的珍贵回忆，但如果账号被锁定、存储空间用尽,或者 Google 更改政策,会发生什么?本地备份能确保这些照片始终属于你。

Google Photos 很方便 —— 直到出问题为止。存储限制、账号封禁和政策变更都可能威胁到你多年积累的珍贵照片和视频。Google Takeout 虽然存在,但速度极慢,面对大型照片库容易失败,而且不支持增量更新。

RcloneView 提供了更好的方式:直接连接到 Google Photos,可视化浏览你的照片库,并将所有内容同步到外接硬盘、NAS 或其他云存储 —— 还能自动定时执行,确保未来新增的照片也能被备份。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 为什么要在本地备份 Google Photos?

### Google Takeout 还不够好

Google Takeout 可以导出照片,但存在明显的局限性:

- **速度慢且不可靠** —— 大型照片库经常在导出过程中失败,需要重新开始。
- **不支持增量更新** —— 每次导出都是完整转储。这个月新增了 500 张照片?那就得重新导出全部内容。
- **ZIP 压缩包格式** —— 你会得到几十个 ZIP 文件,需要手动解压和整理。
- **无法自动化** —— 每次都是完全手动的流程。

### 仅依赖云存储的真实风险

- **超出存储配额** —— 一旦达到 15 GB(与 Gmail 和 Drive 共享),Google 就会开始提示你删除文件或付费升级。
- **账号被锁定** —— 违反政策(即使是无意的)也可能冻结你的整个 Google 账号。
- **服务变更** —— Google 曾经停止过一些产品(Google+、Picasa)。你的数据策略应该考虑到这一点。

将照片备份到外接硬盘或 NAS,能让你拥有一份独立的副本,不受任何政策变更的影响。

## 将 Google Photos 设置为远程

### 步骤 1:在 RcloneView 中添加 Google Photos

打开 RcloneView 并创建一个新的远程:

1. 点击远程管理器中的 **Add Remote** 按钮。
2. 从提供商列表中选择 **Google Photos**。
3. 按照 OAuth 身份验证流程操作 —— RcloneView 会打开浏览器以授权访问。
4. 授权完成后,你的 Google Photos 照片库将显示为一个可浏览的远程。

<img src="/support/images/en/blog/new-remote.png" alt="Add Google Photos as a remote in RcloneView" class="img-large img-center" />

### 步骤 2:浏览你的照片库

连接完成后,你可以在 RcloneView 的[资源管理器](https://rcloneview.com/support/howto/rcloneview-basic/browse-and-manage-remote-storage)中直接浏览你的 Google Photos 照片库。Google Photos 按以下方式组织文件:

- **年/月文件夹** —— 照片按照 `media/by-year/2024/01` 这样的路径排列。
- **相册** —— 你的相册会显示为 `album` 路径下的单独文件夹。
- **共享相册** —— 可在 `shared-album` 下访问。

这样你可以在开始传输之前清楚地看到要备份的内容。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Browse Google Photos library in RcloneView Explorer" class="img-large img-center" />

## 备份方案 1:Google Photos → 外接硬盘

最简单的方式 —— 将所有内容复制到通过 USB 连接的外接硬盘。

### 如何设置

1. **连接你的外接硬盘**,并记下驱动器盘符(Windows)或挂载点(Mac/Linux)。
2. **在 RcloneView 中创建复制任务**:
   - **源**:你的 Google Photos 远程(选择 `media/by-year` 文件夹以获取所有照片)
   - **目标**:你的外接硬盘路径(例如 `E:\Google Photos Backup`)
3. **运行任务** —— RcloneView 会下载所有照片和视频,同时保留文件夹结构。

### 推荐设置

- **并行传输数**:4–6(Google Photos API 有速率限制)
- **任务类型**:复制(而非同步 —— 你不希望在从 Google Photos 中删除文件后,本地文件也被删除)

### 增量更新

首次完整备份后,后续运行只会下载新增的照片。RcloneView 会比对硬盘上已有的内容,跳过已存在的文件。这样一来,耗时数小时的首次备份就能变成快速的日常更新。

## 备份方案 2:Google Photos → Synology NAS

对于使用 Synology NAS 的用户,RcloneView 提供了更加集成的体验。自 v1.0 起,Synology NAS 设备会在你的网络中被[自动检测](https://rcloneview.com/support/tutorials/synology-nas-cloud-transfer)到。

### 如何设置

1. **启动 RcloneView** —— 你的 Synology NAS 应该会自动出现在本地选项卡中。
2. **创建复制任务**:
   - **源**:Google Photos 远程
   - **目标**:NAS 上的共享文件夹(例如 `/photos/google-backup`)
3. **安排任务**,使用[任务调度](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)按每日或每周运行。

<img src="/support/images/en/blog/synology-nas-autodection-and-connection.png" alt="Synology NAS auto-detection for Google Photos backup" class="img-large img-center" />

### 为什么 NAS 是照片备份的理想选择

- **始终在线** —— 与外接硬盘不同,你的 NAS 始终保持连接并处于就绪状态。
- **RAID 保护** —— 大多数 NAS 系统使用 RAID 来防止磁盘故障。
- **随时随地访问** —— 可以从网络中的任何设备查看已备份的照片。
- **二级云备份** —— 使用另一个 RcloneView 任务将 NAS 同步到 S3 或 Backblaze B2,以实现异地冗余备份。

## 备份方案 3:Google Photos → 其他云存储

想在不同的云存储提供商中保留一份副本?RcloneView 让云到云的传输变得无缝顺畅:

- **Google Photos → OneDrive** —— 充分利用你的 Microsoft 365 存储空间。
- **Google Photos → AWS S3** —— 归档到廉价、耐用的对象存储。
- **Google Photos → Backblaze B2** —— 低成本无限制的备份存储。
- **Google Photos → Wasabi** —— 兼容 S3,且无出站流量费用。

只需创建一个复制任务,以 Google Photos 作为源,以目标云存储作为目的地即可。数据不会经过本地设备存储 —— RcloneView 通过其 rclone 引擎处理传输。

## 自动化你的照片备份

一次性备份固然不错,但自动化、周期性的备份更胜一筹。

### 设置定时备份

1. **创建你的复制任务**,使用上述任意一种方案。
2. **打开任务调度**,设置周期性计划:
   - **每天凌晨 2 点** —— 捕获前一天所有新增的照片。
   - **每周日一次** —— 适合较小照片库的轻量方案。
3. **添加通知**,以便了解任务是否成功执行:
   - [Slack 提醒](https://rcloneview.com/support/blog/rcloneview-slack-remote-control),适合团队使用
   - [Telegram 提醒](https://rcloneview.com/support/blog/rcloneview-telegram-remote-control),适合个人使用
   - [Discord 提醒](https://rcloneview.com/support/blog/rcloneview-discord-remote-control),适合社区使用

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule automatic Google Photos backups" class="img-large img-center" />

### 使用批量任务实现多目标备份

借助 v1.3 的[批量任务](https://rcloneview.com/support/blog/batch-jobs-run-multiple-cloud-tasks-rcloneview)功能,你可以在一个自动化流程中将 Google Photos 备份到多个目标:

1. 将 Google Photos 复制到外接硬盘
2. 将 Google Photos 复制到 NAS
3. 将 Google Photos 复制到 Backblaze B2

只需一次点击(或一次定时触发),即可运行全部三项任务。

## 监控与验证

### 实时传输监控

实时查看备份进度 —— 包括文件数量、传输速度和预计完成时间。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitor Google Photos backup progress" class="img-large img-center" />

### 使用文件夹比较进行验证

备份完成后,使用[文件夹比较](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)功能来验证本地副本是否与 Google Photos 照片库一致。这能让你确信没有遗漏任何内容。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare Google Photos with local backup" class="img-large img-center" />

### 查看任务历史

查看[任务历史](https://rcloneview.com/support/howto/rcloneview-basic/execute-manage-job#view-job-history),了解以往备份运行的完整记录,包括已传输的文件、遇到的错误以及总耗时。

## 应对大型 Google Photos 照片库的技巧

如果你有数万张照片:

1. **从最近几年开始** —— 先备份最近 2–3 年的内容,再逐步向前推进。这样能最快保护你最新的珍贵回忆。
2. **使用增量复制** —— 首次运行之后,只会传输新文件。
3. **耐心应对速率限制** —— Google Photos API 的限制比 Google Drive 更严格。请将并行传输数保持在 4–6 之间。
4. **失败后重试** —— v1.3 的失败任务重试功能能够妥善处理临时性 API 错误。
5. **考虑安排在非高峰时段** —— 在夜间运行大型备份,以避免网络拥堵。

## 开始使用

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**(支持 Windows、macOS、Linux)。
2. 使用 OAuth 身份验证**添加 Google Photos** 作为远程。
3. 在资源管理器中**浏览你的照片库**,查看要备份的内容。
4. **创建复制任务**,指向你选择的目标(外接硬盘、NAS 或云存储)。
5. **设置定时计划**,实现自动周期性备份。
6. 首次运行后,使用文件夹比较进行**验证**。

你的照片是无可替代的。你的备份也不应该依赖单一提供商。RcloneView 让你轻松保留一份独立副本 —— 自动、可靠,且无需任何命令行操作。

---

**相关指南:**

- [通过浏览器登录方式添加远程(OAuth)](https://rcloneview.com/support/howto/remote-storage-connection-settings/add-oath-online-login)
- [浏览与管理远程存储](https://rcloneview.com/support/howto/rcloneview-basic/browse-and-manage-remote-storage)
- [比较文件夹内容](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [创建同步任务](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [任务调度](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)
- [Synology NAS 自动检测与连接](https://rcloneview.com/support/tutorials/synology-nas-cloud-transfer)

<CloudSupportGrid />
