---
slug: migrate-icloud-drive-to-dropbox-rcloneview
title: "将 iCloud Drive 迁移到 Dropbox — 使用 RcloneView 传输文件"
authors:
  - casey
description: "使用 RcloneView 将文件从 iCloud Drive 移动到 Dropbox——这是一款跨平台 GUI 工具，可同时连接两个云端,实现直接、可验证的传输。"
keywords:
  - 将 iCloud Drive 迁移到 Dropbox
  - iCloud 到 Dropbox 的传输
  - Apple 云到 Dropbox
  - iCloud Drive 迁移
  - RcloneView 云到云传输
  - 从 iCloud 切换到 Dropbox
  - 将 iCloud Drive 备份到 Dropbox
  - 将 Apple 文件传输到 Dropbox
tags:
  - RcloneView
  - cloud-to-cloud
  - migration
  - dropbox
  - macos
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 将 iCloud Drive 迁移到 Dropbox — 使用 RcloneView 传输文件

> 离开 iCloud Drive 通常意味着要先把所有内容下载到 Mac 上——RcloneView 可以直接连接两个云端,无需经过本地中转即可传输文件。

无论是离开 Apple 生态系统、转向跨平台团队协作,还是单纯想把存储整合到 Dropbox,都会遇到同一个问题:iCloud Drive 并不提供导出到其他云服务商的原生功能。常见的变通方法是把整个资料库下载到本地磁盘,再重新上传到 Dropbox,这样不仅会使传输时间翻倍,还会占用你可能并不宽裕的本地磁盘空间。RcloneView 依托支持 iCloud Drive 所需的 rclone v1.69+,可同时连接两个远程存储,直接在云端之间移动文件。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 连接 iCloud Drive 和 Dropbox

iCloud Drive 需要 rclone v1.69 或更高版本,而 RcloneView 默认内置的 rclone 已经满足这一要求,无需额外设置。使用你的 Apple 账户凭据添加 iCloud Drive 远程,然后通过 OAuth 浏览器登录添加 Dropbox。两个远程随即会以标签页形式出现在文件浏览器中,你可以在开始传输前以双面板布局并排打开,浏览各自的资料库。RcloneView 可在 Windows、macOS 和 Linux 上的同一个窗口中挂载并同步 90+ 服务商,因此无论是在 Mac 上,还是在管理全家共享 Apple 存储的 Windows 电脑上,这套工作流程都同样适用。

<img src="/support/images/en/blog/new-remote.png" alt="Adding an iCloud Drive remote alongside Dropbox in RcloneView" class="img-large img-center" />

## 将迁移作为同步任务运行

与其一个个文件夹地拖动,不如在 4 步向导中设置一个单向同步任务:源为 iCloud Drive,目标为 Dropbox,方向选择“仅修改目标”,这样 iCloud 一侧不会有任何变动。对于较大的照片或文档资料库,先运行一次 Dry Run 可以在数据实际移动前准确显示将要复制的内容——考虑到 iCloud Drive 中个人内容往往会随年月不断积累,这一步格外值得一做。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring a one-way sync job from iCloud Drive to Dropbox in RcloneView" class="img-large img-center" />

## 监控传输并确认完成

大型资料库需要一些时间,尤其是数量可观的照片或文档集合。Transferring 标签页会显示实时进度、速度和文件数,而 Job History 会记录已完成任务的总大小以及出错的文件,方便你查看哪些内容需要重试。如果传输中途被打断,RcloneView 的自动重试设置会重新运行整个同步(默认 3 次),以补上未完成的部分。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history showing a completed iCloud Drive to Dropbox transfer in RcloneView" class="img-large img-center" />

## 快速开始

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 添加你的 iCloud Drive 远程(需要 rclone v1.69+,默认已内置)以及通过 OAuth 登录的 Dropbox 远程。
3. 运行 Dry Run,预览将要传输的文件。
4. 创建一个单向同步任务,并在 Job History 中监控其完成情况。

一旦设置好同步任务,之后为新增文件重复传输只需点击一次,而不必再手动导出一遍。

---

**相关指南:**

- [将 iCloud Drive 迁移到 Google Drive — 使用 RcloneView 传输文件](https://rcloneview.com/support/blog/migrate-icloud-drive-to-google-drive-rcloneview)
- [将 iCloud Drive 迁移到 OneDrive — 使用 RcloneView 传输文件](https://rcloneview.com/support/blog/migrate-icloud-drive-to-onedrive-rcloneview)
- [管理 iCloud Drive 存储 — 使用 RcloneView 同步与备份文件](https://rcloneview.com/support/blog/manage-icloud-drive-cloud-sync-rcloneview)

<CloudSupportGrid />
