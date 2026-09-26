---
slug: sync-seafile-to-dropbox-rcloneview
title: "将 Seafile 同步到 Dropbox — 用 RcloneView 实现云备份"
authors:
  - casey
description: "使用 RcloneView 的计划同步任务和 Dry Run 预览,将自托管 Seafile 服务器安全、可验证地备份到 Dropbox。"
keywords:
  - 将Seafile同步到Dropbox
  - Seafile Dropbox备份
  - 自托管云备份
  - RcloneView Seafile
  - 云到云同步
  - Seafile异地备份
  - Dropbox备份工具
  - Seafile灾难恢复
  - 自托管迁移到Dropbox
tags:
  - RcloneView
  - seafile
  - dropbox
  - cloud-to-cloud
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 将 Seafile 同步到 Dropbox — 用 RcloneView 实现云备份

> 无需手动编写任何脚本,即可为自托管的 Seafile 服务器在 Dropbox 中建立一份异地副本。

Seafile 之所以受欢迎,正是因为它能让数据保持在组织自身的掌控之下,但也正因如此,它没有内置的外部备份途径。一旦服务器、其磁盘或宿主机出现故障,任何未被复制到别处的数据都会丢失。RcloneView 可以在同一个窗口中同时连接 Seafile 和 Dropbox,并通过计划同步任务在两者之间移动文件,使自托管服务器无需任何人手写 cron 脚本或 rclone 命令,就能获得真正的异地副本。RcloneView 可在一个窗口中挂载并同步 90 多种服务商,支持 Windows、macOS 和 Linux,因此无论同步任务是从管理员的笔记本电脑运行,还是从专用的备份机器运行,设置方式都是一样的。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 连接 Seafile 和 Dropbox

添加 Seafile 作为远端时,只需输入服务器 URL、资料库和账户凭据,RcloneView 会在保存前验证连接。Dropbox 使用更简单的 OAuth 流程:打开一个浏览器窗口,完成账户授权后,远端会自动以标签页形式出现。两者都配置完成后,Remote Manager 会将它们并排列出,之后可以分别编辑而不影响对方。

<img src="/support/images/en/blog/new-remote.png" alt="Adding a self-hosted Seafile server and Dropbox as remotes in RcloneView" class="img-large img-center" />

两个远端都连接好之后,可以先打开双面板布局,在正式执行完整同步之前,一起浏览 Seafile 资料库和 Dropbox 目标文件夹。

## 构建同步任务

创建一个以 Seafile 资料库为源、专用 Dropbox 文件夹为目标的单向同步任务,确保备份运行不会意外修改原始 Seafile 数据。在 Filtering Settings 中,使用 RcloneView 应用于任何同步任务的同一套自定义过滤语法,排除不应离开服务器的内容 —— 临时文件、任何受版本控制项目中的 `.git/` 文件夹,或超过大小阈值的文件类型。先运行一次 Dry Run:它会列出所有将被复制的文件而不实际传输任何内容,是在耗费带宽之前发现错误源文件夹的最快方式。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a recurring Seafile to Dropbox backup job in RcloneView" class="img-large img-center" />

PLUS 许可证用户可以为任务附加 crontab 风格的计划,让备份每晚自动运行,无需任何人手动启动 —— 这对于全天都在变化的 Seafile 服务器很有用。

## 在 Job History 中验证备份

在 Advanced Settings 中开启校验和比较,让 RcloneView 通过哈希值和大小而不仅仅是文件大小来确认文件是否一致,这在 Seafile 的版本控制可能留下大小相同但内容不同的文件时尤为重要。每次运行后,Job History 会显示传输的文件总数、耗时以及任何出错的项目,便于在信赖它作为还原点之前,轻松确认 Dropbox 副本确实是最新的。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history showing a completed Seafile to Dropbox sync" class="img-large img-center" />

## 开始使用

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 使用资料库路径和凭据将你的 Seafile 服务器添加为远端。
3. 通过 OAuth 登录流程添加 Dropbox。
4. 运行 Dry Run,然后执行同步任务并在 Job History 中确认结果。

有了这份定期、可验证的 Dropbox 副本,自托管 Seafile 部署就从单点故障变成了拥有真正后备方案的服务器。

---

**相关指南:**

- [用 RcloneView 将 Seafile 自托管云与 Google Drive、S3 和外部存储一起管理](https://rcloneview.com/support/blog/manage-seafile-self-hosted-cloud-sync-rcloneview)
- [管理 Dropbox — 用 RcloneView 同步和备份文件](https://rcloneview.com/support/blog/manage-dropbox-cloud-sync-backup-rcloneview)
- [用 RcloneView 修复 Seafile 同步错误](https://rcloneview.com/support/blog/fix-seafile-sync-errors-rcloneview)

<CloudSupportGrid />
