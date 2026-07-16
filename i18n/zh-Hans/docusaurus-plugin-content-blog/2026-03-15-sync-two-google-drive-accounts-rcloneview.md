---
slug: sync-two-google-drive-accounts-rcloneview
title: "如何同步两个 Google Drive 账号——使用 RcloneView 同步个人与工作 Drive"
authors:
  - tayson
description: "许多人拥有多个 Google Drive 账号——个人、工作、学校。了解如何使用 RcloneView 在它们之间同步文件，而无需在本地下载任何内容。"
keywords:
  - sync two google drive accounts
  - google drive to google drive
  - transfer between google drives
  - multiple google drive sync
  - google drive personal to work
  - sync google accounts
  - google drive account transfer
  - google drive cross account
  - two google drive sync tool
  - google drive migration between accounts
tags:
  - google-drive
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 如何同步两个 Google Drive 账号——使用 RcloneView 同步个人与工作 Drive

> 你的个人 Google Drive 里有家庭照片，工作 Drive 里有项目文件，大学的 Drive 即将到期。Google 原生不支持在账号之间同步——但 RcloneView 可以。

几乎每个人最终都会拥有多个 Google Drive 账号：一个个人 Gmail 账号、一个来自工作单位的 Workspace 账号，也许还有一个即将到期的学校账号。Google 让你可以轻松地单独使用每个账号，但没有提供在它们之间同步或传输文件的方式。你最终只能从一个账号下载再上传到另一个账号——手动、缓慢，还会占用本地存储空间。RcloneView 可以同时连接多个 Google Drive 账号，并在它们之间直接传输文件。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 添加多个 Google Drive 账号

<img src="/support/images/en/blog/new-remote.png" alt="Add multiple Google Drive accounts" class="img-large img-center" />

在 RcloneView 中将每个 Google Drive 账号添加为单独的远程。为它们取清晰的名称——例如 "GDrive-Personal"（个人）、"GDrive-Work"（工作）、"GDrive-School"（学校）——以便区分。

## 在账号之间传输

在左侧面板打开一个账号，右侧面板打开另一个账号。在它们之间拖拽文件和文件夹：

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Transfer between Google Drive accounts" class="img-large img-center" />

文件通过 Google 的服务器直接传输——不会下载到你的电脑上，而且传输速度很快。

## 常见使用场景

### 保存即将到期的学校账号中的文件

大学的 Google Workspace 账号通常会在毕业后被删除。在失去访问权限之前，把所有内容传输到你的个人 Drive。

### 分离个人和工作文件

不小心把个人文件存到了工作 Drive 里？无需通过 IT 部门，直接把它们移到你的个人账号。

### 合并旧账号

将旧 Gmail 账号中的文件合并到当前账号。使用 RcloneView，这只是一次简单的拖放操作。

### 镜像重要文件夹

让特定文件夹在两个账号之间保持同步。创建一个自动运行的同步任务：

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Sync job between accounts" class="img-large img-center" />

## 安排持续同步

对于想要在账号之间持续同步的文件夹，可以安排自动同步：

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule cross-account sync" class="img-large img-center" />

## 验证传输结果

使用文件夹对比功能，确认文件已在账号之间正确传输：

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify cross-account transfer" class="img-large img-center" />

## 快速上手

1. **下载 RcloneView**：访问 [rcloneview.com](https://rcloneview.com/src/download.html)。
2. **添加两个 Google Drive 账号**作为独立的远程。
3. **在双面板浏览器中打开两个账号**。
4. **直接传输**——无需在本地下载。

你的 Google 账号，终于连接在一起了。

---

**相关指南：**

- [将 Google Drive 迁移到 OneDrive](https://rcloneview.com/support/blog/migrate-google-drive-to-onedrive-rcloneview)
- [同步 Google Drive 到 Dropbox](https://rcloneview.com/support/blog/sync-google-drive-to-dropbox-rcloneview)
- [上传大文件到 Google Drive](https://rcloneview.com/support/blog/upload-large-files-google-drive-sync-rcloneview)

<CloudSupportGrid />
