---
slug: migrate-sftp-to-google-drive-rcloneview
title: "将 SFTP 迁移到 Google Drive — 使用 RcloneView 传输文件"
authors:
  - kai
description: "使用 RcloneView 的双栏浏览器、模拟运行预览和计划同步任务,将文件从 SFTP 服务器迁移到 Google Drive。"
keywords:
  - RcloneView
  - 将 SFTP 迁移到 Google Drive
  - SFTP 迁移到云端
  - 传输 SFTP 文件
  - SSH 文件传输到云端
  - 云存储迁移
  - SFTP 客户端 GUI
  - Google Drive 备份
  - 安全文件传输工具
  - 停用 SFTP 服务器
tags:
  - RcloneView
  - sftp
  - google-drive
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 将 SFTP 迁移到 Google Drive — 使用 RcloneView 传输文件

> 无需丢失任何一个文件,即可退役老旧的 SFTP 服务器——用 RcloneView 把一切直接迁移到 Google Drive。

许多团队仍在运行内部 SFTP 服务器用于文件传递,但维护该服务器上的 SSH 凭据、防火墙规则和磁盘空间的成本,相比让 Google Drive 来处理存储和分享要高得多。RcloneView 可以在同一个窗口中同时连接 SFTP 主机和 Google Drive,让你无需接触终端就能在两者之间浏览、比较和传输文件。对于打算在淘汰旧硬件之前迁移遗留文件服务器的小型 IT 团队来说,这是切实可行的第一步。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 并排连接 SFTP 服务器和 Google Drive

先添加 SFTP 远程:在 New Remote 向导中输入主机地址和 SSH 凭据,默认使用端口 22。然后通过 OAuth 浏览器登录添加 Google Drive 作为第二个远程——无需输入 API 密钥。使用 RcloneView 的分割面板布局,在两个独立的 Explorer 面板中分别打开它们,这样就能同时看到双方的完整文件夹结构。

<img src="/support/images/en/blog/new-remote.png" alt="Adding an SFTP remote and a Google Drive remote in RcloneView" class="img-large img-center" />

RcloneView 可以在一个窗口内挂载并同步 90 多个服务商,支持 Windows、macOS 和 Linux,因此无论 SFTP 主机是在本地网络上,还是只能通过跳板机访问,同样的设置都能正常工作。

## 迁移前先预览

在传输多年积累的文件之前,先在 SFTP 根目录与目标 Google Drive 文件夹之间运行 Folder Compare,准确查看目标端缺少哪些内容。然后将传输配置为 Sync 任务,并使用 Dry Run 模拟复制过程——RcloneView 会列出所有将要移动的文件和将要创建的文件夹,而不会实际写入任何内容,直到你确认为止。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Comparing SFTP and Google Drive folder contents before migration in RcloneView" class="img-large img-center" />

当 SFTP 服务器积累了多年、命名不一致的嵌套文件夹时,这一步尤为重要——模拟运行能在问题演变成夜间支持事故之前把它们暴露出来。

## 用计划任务自动完成剩余传输

对于大型 SFTP 归档,不要试图一次性全部迁移完毕。将迁移保存为 Job Manager 中的一个 Job,把文件传输数量设置为与网络实际吞吐量相匹配,然后让它在后台运行,同时你可以继续在其他 Explorer 面板中工作。如果在切换期间 SFTP 服务器还需要再运行几周,PLUS 许可证的计划功能可以按照 crontab 风格的计划重复同步,让 Google Drive 在旧服务器关闭之前始终保持最新。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a recurring SFTP to Google Drive sync job in RcloneView" class="img-large img-center" />

## 开始使用

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 使用主机地址和 SSH 凭据将你的 SFTP 服务器添加为远程。
3. 通过 OAuth 浏览器登录流程将 Google Drive 添加为第二个远程。
4. 运行 Folder Compare 和 Dry Run,然后在正式执行前将传输保存为 Job。

当同步任务在重复运行时干净地完成、没有任何内容需要复制时,旧的 SFTP 服务器就可以安全关闭了。

---

**相关指南:**

- [管理 SFTP 服务器存储 — 使用 RcloneView 同步和备份文件](https://rcloneview.com/support/blog/manage-sftp-server-cloud-sync-rcloneview)
- [管理 Google Drive 存储 — 使用 RcloneView 同步和备份文件](https://rcloneview.com/support/blog/manage-google-drive-cloud-sync-backup-rcloneview)
- [使用 RcloneView 将 SFTP 和 SMB 挂载为本地磁盘](https://rcloneview.com/support/blog/mount-sftp-smb-local-drive-rcloneview)

<CloudSupportGrid />
