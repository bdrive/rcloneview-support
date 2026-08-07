---
slug: sync-google-drive-to-hetzner-storage-box-rcloneview
title: "将 Google Drive 同步到 Hetzner Storage Box — 使用 RcloneView 进行云备份"
authors:
  - steve
description: "使用 RcloneView 的跨提供商同步作业,将 Google Drive 文件同步到 Hetzner Storage Box,实现经济实惠的异地备份。"
keywords:
  - 将 Google Drive 同步到 Hetzner
  - Google Drive Hetzner Storage Box 备份
  - Hetzner Storage Box rclone
  - Google Drive 异地备份
  - 经济型云存储同步
  - 欧洲云存储备份
  - Google Drive RcloneView 同步
  - Hetzner Box 备份
  - Google Drive SFTP 备份
  - 云到云备份
tags:
  - RcloneView
  - google-drive
  - hetzner
  - cloud-to-cloud
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 将 Google Drive 同步到 Hetzner Storage Box — 使用 RcloneView 进行云备份

> 无需离开桌面、无需编写任何脚本,即可在 Hetzner Storage Box 上保留一份低成本的 Google Drive 文件副本。

Google Drive 便于日常协作,但它本身并非为长期备份而设计——在独立基础设施上保留第二份副本,可以防范账户锁定、意外删除或配额超限等问题。Hetzner Storage Box 因其每 TB 的低成本而成为此用途的热门选择,RcloneView 通过一个计划同步作业将两者直接连接起来,无需任何命令行脚本。RcloneView 可在一个窗口中挂载并同步两个提供商,支持 Windows、macOS 和 Linux。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 连接两个远程

首先通过标准的 OAuth 浏览器登录,在远程管理器(Remote Manager)中添加 Google Drive——由于 RcloneView 会自动处理认证流程,因此无需输入 API 密钥。然后将 Hetzner Storage Box 添加为 SFTP 远程,在凭据输入(Credential Entry)设置界面中输入该存储盒的主机地址和 SSH 凭据。

当两个远程都以标签页形式出现在资源管理器面板中后,打开分屏布局并排浏览。在配置任何自动化作业之前,这是一个有用的检查步骤——在启动同步之前,确认 Storage Box 上的目标文件夹结构与预期一致。

<img src="/support/images/en/blog/new-remote.png" alt="在 RcloneView 中将 Google Drive 和 Hetzner Storage Box 添加为远程" class="img-large img-center" />

## 配置同步作业

在同步向导中,选择 Google Drive 作为源,Hetzner Storage Box 作为目标,然后选择**单向(One-way)**同步方向,使 Storage Box 镜像 Google Drive,而不会删除源上的任何内容。在第 3 步中应用过滤器,跳过无需备份的文件类型——排除 `.tmp` 文件或仅限 Google 文档的格式,可以减小传输体积,并加快后续运行速度。

在高级设置(Advanced Settings)中启用校验和(checksum)比较,可让 RcloneView 只重新传输真正发生变化的文件,而不是所有修改日期较新的文件——这一点在 Google Drive 上尤为重要,因为元数据时间戳可能在内容未变的情况下发生变化。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="在 RcloneView 中配置从 Google Drive 到 Hetzner Storage Box 的单向同步作业" class="img-large img-center" />

## 自动化与监控备份

先运行 Dry Run(演练)预览将要复制的确切文件,然后执行该作业,并在信息视图(Info View)的传输(Transferring)标签中实时查看进度——传输速度、文件数量和总大小都会显示。PLUS 许可证用户可以附加 crontab 格式的计划,使同步自动重复而无需人工干预,而作业历史(Job History)会永久记录每次运行的时长和结果,便于日后审计。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="在 RcloneView 中为从 Google Drive 到 Hetzner Storage Box 的重复同步作业设置计划" class="img-large img-center" />

## 开始使用

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 通过 OAuth 连接 Google Drive,并将 Hetzner Storage Box 添加为 SFTP 远程。
3. 创建启用了过滤器和校验和比较的单向同步作业。
4. 运行 Dry Run,然后执行同步并在传输(Transferring)标签中监控。

在独立的低成本基础设施上保留第二份副本,是保护 Google Drive 数据最简单的方法之一,而 RcloneView 让这一流程无需手动整理文件即可持续运行。

---

**相关指南:**

- [管理 Hetzner Storage Box 存储 — 使用 RcloneView 同步和备份文件](https://rcloneview.com/support/blog/manage-hetzner-storage-box-sync-rcloneview)
- [将 Dropbox 同步到 Hetzner Storage Box — 使用 RcloneView 进行云备份](https://rcloneview.com/support/blog/sync-dropbox-to-hetzner-storage-box-rcloneview)
- [管理 Google Drive 存储 — 使用 RcloneView 同步和备份文件](https://rcloneview.com/support/blog/manage-google-drive-cloud-sync-backup-rcloneview)

<CloudSupportGrid />
