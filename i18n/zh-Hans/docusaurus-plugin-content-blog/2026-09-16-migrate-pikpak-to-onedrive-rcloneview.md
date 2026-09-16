---
slug: migrate-pikpak-to-onedrive-rcloneview
title: "将 PikPak 迁移到 OneDrive — 使用 RcloneView 传输文件"
authors:
  - steve
description: "使用 RcloneView(一款无需命令行操作即可迁移云存储的 rclone GUI)将文件从 PikPak 移动到 OneDrive。"
keywords:
  - pikpak 迁移到 onedrive
  - pikpak onedrive 传输
  - pikpak onedrive 迁移
  - rclone gui pikpak
  - 云到云迁移工具
  - pikpak onedrive 备份
  - 传输 pikpak 文件
  - rcloneview 迁移
  - pikpak 云存储
  - onedrive 同步工具
tags:
  - RcloneView
  - pikpak
  - onedrive
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 将 PikPak 迁移到 OneDrive — 使用 RcloneView 传输文件

> 无需先下载到本地磁盘,就能把你在 PikPak 中积累的文件整合到 OneDrive。

PikPak 是接收离线下载和磁力链接的热门去处,但大多数人并不打算把文件长期存放在那里——集成了 Microsoft 365 的 OneDrive 通常才是长期存放的选择。手动把文件从一个搬到另一个,意味着要先下载到本地驱动器再重新上传,既慢又容易中断。RcloneView 可以在一个任务中直接在两个远程之间完成搬移。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 将 PikPak 和 OneDrive 连接为远程

打开 **Remote 标签 > New Remote**,先添加 PikPak,按照屏幕提示完成账户身份验证。接着添加 OneDrive,它使用 RcloneView 的 OAuth 浏览器登录方式——弹出窗口后登录即可,无需复制粘贴任何 API 密钥,远程会自动连接。

<img src="/support/images/en/blog/new-remote.png" alt="在 RcloneView 中将 PikPak 和 OneDrive 添加为新远程" class="img-large img-center" />

当两个远程都出现在 Remote Manager 中后,在双栏 Explorer 中并排打开它们,确认你看到的是正确的文件夹,然后再配置传输。

## 配置迁移任务

在 Home 标签中点击 **Sync**,启动四步向导。在步骤 1 中,选择 PikPak 文件夹作为源,目标 OneDrive 文件夹作为目的地,并选择 **One-way (modifying destination only)**,这样 PikPak 保持不变,只有 OneDrive 接收副本。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="在 RcloneView 中配置从 PikPak 到 OneDrive 的传输任务" class="img-large img-center" />

如果要移动大量小文件,可在步骤 2 中提高文件传输数量;如果只想先移动特定内容,可在步骤 3 中应用最大文件大小或扩展名过滤器。正式传输前先运行 **Dry Run**——它会准确列出将要复制的内容,方便你在浪费时间之前发现文件夹选错的问题。

## 监控并验证传输

启动任务后切换到 **Transferring** 标签,实时查看进度、速度和文件数量。RcloneView 可以在一个窗口内挂载并同步 90 多个服务商,因此在 PikPak 到 OneDrive 的任务于后台运行时,你仍可以继续查看其他远程。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="作业历史记录显示一次已完成的 PikPak 到 OneDrive 迁移" class="img-large img-center" />

任务完成后,在 **Job History** 中查看传输的总大小和文件数量,然后使用 **Folder Compare** 确认两边一致,再确定迁移已经完成。

## 快速上手

1. 前往 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 通过 Remote Manager 将你的 PikPak 和 OneDrive 账户添加为远程。
3. 创建一个从 PikPak 到 OneDrive 的单向同步任务,先运行 Dry Run。
4. 执行任务,并用 Job History 和 Folder Compare 验证结果。

当 PikPak 的内容落地到 OneDrive 后,就可以立即享受 OneDrive 提供的协作与 Office 集成功能。

---

**相关指南:**

- [将 PikPak 迁移到 Google Drive](https://rcloneview.com/support/blog/migrate-pikpak-to-google-drive-rcloneview)
- [同步 PikPak、Google Drive 和 S3](https://rcloneview.com/support/blog/sync-pikpak-cloud-google-drive-s3-rcloneview)
- [修复 PikPak 同步错误](https://rcloneview.com/support/blog/fix-pikpak-sync-errors-rcloneview)

<CloudSupportGrid />
