---
slug: migrate-pikpak-to-google-drive-rcloneview
title: "将 PikPak 迁移到 Google Drive — 使用 RcloneView 传输文件"
authors:
  - tayson
description: "使用 RcloneView 的云到云传输功能，将文件从 PikPak 迁移到 Google Drive 的分步指南 — 设置两个远程后无需先下载到本地即可传输。"
keywords:
  - PikPak to Google Drive
  - PikPak migration
  - RcloneView PikPak
  - cloud-to-cloud transfer
  - PikPak export
  - Google Drive import
  - rclone PikPak
  - cloud file migration
tags:
  - RcloneView
  - pikpak
  - google-drive
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 将 PikPak 迁移到 Google Drive — 使用 RcloneView 传输文件

> 希望将文件从 PikPak 迁移到 Google Drive 的用户，可以使用 RcloneView 完全在云端完成迁移 — 无需先将所有文件下载到本地设备。

PikPak 是一款在亚洲广泛使用的热门云存储与离线下载服务，因能够将种子和磁力链接直接保存到云端而备受青睐。当用户希望迁移离开 PikPak，或者只是想在 Google Drive 上保留一份 PikPak 文件的备份时，RcloneView 提供了最简洁的方案：一次云到云的传输，直接在两个服务商之间移动文件，而无需经过本地磁盘中转。RcloneView 内置了 rclone 二进制文件，因此无需额外安装任何软件。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 设置 PikPak 远程

在 RcloneView 中点击 **New Remote**，从服务商列表中选择 **PikPak**。输入你的 PikPak **用户名**（邮箱地址）和**密码**。RcloneView 将通过 PikPak API 进行身份验证并连接到你的账户。保存后，你的 PikPak 远程会出现在双栏浏览器中，你可以像浏览本地文件系统一样浏览其中的文件和文件夹。

在开始迁移之前，先花几分钟浏览一下你的 PikPak 文件夹结构，了解内容的组织方式。留意那些较大的文件夹或层级很深的结构，这些内容可能更适合拆分成多个单独的任务来传输，而不是一次性打包传输。

<img src="/support/images/en/blog/new-remote.png" alt="Adding PikPak as a remote in RcloneView" class="img-large img-center" />

## 添加 Google Drive

再次点击 **New Remote**，选择 **Google Drive**。RcloneView 会打开一个浏览器标签页进行 Google OAuth 授权 — 登录你的 Google 账户并授予所请求的权限。OAuth 流程完成后，Google Drive 远程会与你的 PikPak 远程一同出现在浏览器中。

在开始传输之前，先在 Google Drive 中创建一个专门的迁移目标文件夹 — 例如 `PikPak Import/`。这样可以让迁移后的内容保持有序，也便于通过比较 PikPak 和 Google Drive 之间的文件夹大小来验证传输是否完整。

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="PikPak and Google Drive open side by side for migration in RcloneView" class="img-large img-center" />

## 执行云到云传输

在双栏视图中同时打开两个远程后，对于小规模迁移，你可以直接将文件夹从 PikPak 拖放到 Google Drive。对于较大规模的迁移，使用 **Job Wizard** 更加可靠。将 PikPak 设为源，Google Drive 目标文件夹设为目标，并选择 **Copy** 模式（复制文件而不删除 PikPak 中的任何内容）。

务必先运行一次**空跑（dry run）**。PikPak 账户中可能积累了成千上万个来自离线下载的文件，空跑可以让你在正式执行之前清楚地了解传输量。确认无误后，再运行正式任务。RcloneView 的 **Job Manager** 会实时显示进度，包括当前文件名和传输计数。任务完成后，检查 **Job History** 以确认所有文件都已成功传输。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a PikPak to Google Drive migration job in RcloneView" class="img-large img-center" />

## 开始使用

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 点击 **New Remote** > **PikPak**，输入你的 PikPak 用户名和密码。
3. 点击 **New Remote** > **Google Drive**，完成 OAuth 授权。
4. 在 Google Drive 中创建一个 `PikPak Import/` 文件夹作为迁移目标。
5. 使用 **Job Wizard** 创建一个复制任务，先运行空跑，然后执行完整迁移。

通过 RcloneView 将文件从 PikPak 迁移到 Google Drive 是一个流畅的过程，即使面对庞大的云端资料库，也能可靠地完成迁移，且不会占用本地存储空间。

---

**相关指南：**

- [使用 RcloneView 管理 PikPak 云端下载](https://rcloneview.com/support/blog/manage-pikpak-cloud-downloads-rcloneview)
- [管理 Google Drive — 使用 RcloneView 进行云同步与备份](https://rcloneview.com/support/blog/manage-google-drive-cloud-sync-backup-rcloneview)
- [使用 RcloneView 实现云到云迁移](https://rcloneview.com/support/blog/cloud-to-cloud-migration-rcloneview)

<CloudSupportGrid />
