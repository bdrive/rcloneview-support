---
slug: migrate-hidrive-to-backblaze-b2-rcloneview
title: "将 HiDrive 迁移到 Backblaze B2 — 使用 RcloneView 传输文件"
authors:
  - kai
description: "使用 RcloneView 将文件从 HiDrive 迁移到 Backblaze B2——这是一款跨平台图形界面工具,可在两个提供商之间移动数据,无需先在本地暂存文件。"
keywords:
  - 将 HiDrive 迁移到 Backblaze B2
  - HiDrive 到 Backblaze B2 传输
  - RcloneView HiDrive 迁移
  - HiDrive 云备份工具
  - Backblaze B2 迁移 GUI
  - 将 HiDrive 文件移动到 B2
  - 云到云传输 RcloneView
  - HiDrive B2 同步
tags:
  - RcloneView
  - hidrive
  - backblaze-b2
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 将 HiDrive 迁移到 Backblaze B2 — 使用 RcloneView 传输文件

> 使用 RcloneView 将文件直接从 HiDrive 移动到 Backblaze B2,无需先下载到本地驱动器。

超出 HiDrive 账户容量的团队常常因为更低成本的对象存储和应用密钥模型而转向 Backblaze B2,但这两项服务之间并不能原生互通。RcloneView 可在一个窗口中桥接两者:将两者都连接为远程,在面板之间拖拽文件,内置的 rclone 引擎会在提供商支持的范围内处理服务器到服务器的传输。传输本身无需手动导出,也不需要本地暂存文件夹。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 连接 HiDrive 和 Backblaze B2

首先通过 **Remote tab → New Remote** 添加 HiDrive。HiDrive 使用 OAuth 浏览器登录,因此 RcloneView 会打开一个浏览器窗口供您登录并授权访问——无需手动复制 API 密钥。Backblaze B2 的设置方式不同:选择 Backblaze B2 作为远程类型,并输入从 Backblaze 密钥管理页面生成的 Application Key ID 和 Application Key。两个远程都出现在 Remote Manager 中后,并排打开两个 Explorer 面板——一个指向 HiDrive,另一个指向您的 B2 存储桶。

与仅支持挂载的工具不同,RcloneView 还可以在这些远程之间进行同步和文件夹比较——且属于 FREE 许可证功能。

<img src="/support/images/en/blog/new-remote.png" alt="在 RcloneView 中添加 HiDrive 远程" class="img-large img-center" />

## 运行一次性传输或定期同步

对于一次性迁移,在 HiDrive 面板上选择文件夹,将其拖到 B2 面板并确认传输——RcloneView 会将跨远程拖拽视为复制操作,在您确认数据成功送达之前,HiDrive 上的原始文件将保持不变。如果是持续迁移,且 HiDrive 在切换期间仍在不断接收新文件,则应改为创建同步作业:在 4 步向导中选择 HiDrive 作为源、B2 作为目标,将方向设置为单向的“Modifying destination only”,并在需要追平差异时手动运行。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="从 HiDrive 到 Backblaze B2 的云到云同步作业" class="img-large img-center" />

在最终切换之前,请运行该作业的 Dry Run 选项,预览哪些文件将被复制、哪些文件(如有)会在目标端被删除——这是在将生产工作流指向新 B2 存储桶之前一个有用的检查步骤。

## 验证并自动化迁移

初始迁移完成后,使用 Folder Compare 逐文件核对双方,确认文件数量和大小是否一致,而不要仅仅相信一条完成状态消息。如果迁移需要按计划重复进行——例如在过渡阶段将新上传到 HiDrive 的文件持续镜像到 B2——PLUS 许可证可解锁 crontab 风格的定时任务,让同步作业按照适合过渡计划的时间间隔自动无人值守运行。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="安排从 HiDrive 到 Backblaze B2 的定期同步作业" class="img-large img-center" />

## 开始使用

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 在 Remote Manager 中通过 OAuth 浏览器登录添加 HiDrive。
3. 使用您的 Application Key ID 和 Application Key 添加 Backblaze B2。
4. 运行 Dry Run,然后在两个面板之间执行传输或同步作业。

配置好两个远程后,从 HiDrive 迁移到 B2 就只是您日常文件管理中同一界面里的一次拖放或计划任务而已。

---

**相关指南:**

- [管理 HiDrive 存储 — 使用 RcloneView 同步和备份文件](https://rcloneview.com/support/blog/manage-hidrive-cloud-sync-backup-rcloneview)
- [管理 Backblaze B2 存储 — 使用 RcloneView 同步和备份文件](https://rcloneview.com/support/blog/manage-backblaze-b2-cloud-sync-backup-rcloneview)
- [将 HiDrive 同步到 Amazon S3 — 使用 RcloneView 进行云备份](https://rcloneview.com/support/blog/sync-hidrive-to-amazon-s3-rcloneview)

<CloudSupportGrid />
