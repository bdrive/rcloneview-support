---
slug: migrate-proton-drive-to-dropbox-rcloneview
title: "将 Proton Drive 迁移到 Dropbox — 使用 RcloneView 传输文件"
authors:
  - kai
description: "使用 RcloneView 将 Proton Drive 迁移到 Dropbox：连接两个远程，先用 Dry Run 预览，再进行云到云复制，并通过 Folder Compare 验证结果。"
keywords:
  - Proton Drive 迁移到 Dropbox
  - Proton Drive 到 Dropbox 传输
  - 将文件从 Proton Drive 移到 Dropbox
  - RcloneView Proton Drive
  - RcloneView Dropbox
  - 云到云迁移
  - Proton Drive Dropbox 同步
  - 传输 Proton Drive 文件
tags:
  - RcloneView
  - proton-drive
  - dropbox
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 将 Proton Drive 迁移到 Dropbox — 使用 RcloneView 传输文件

> 以云到云的方式将 Proton Drive 文件复制到 Dropbox，传输前可预览，传输后可比较。

从 Proton Drive 迁移到 Dropbox，通常是出于协作需要：共享文件夹、团队成员，以及已经在 Dropbox 中使用的工具。先把所有文件下载到笔记本电脑既慢，又需要额外的磁盘空间。RcloneView 在一个窗口中连接两个账户，并直接在它们之间复制。RcloneView 可在 Windows、macOS 和 Linux 上通过一个窗口挂载并同步 90 多个提供商。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 连接 Proton Drive 和 Dropbox

Proton Drive 使用凭据输入方式：添加新的远程，选择 Proton Drive，输入邮箱和密码；如果启用了两步验证，还需输入 2FA 验证码。Proton Drive 支持需要 rclone v1.69 或更高版本。RcloneView 内置了 rclone，因此如果远程创建失败，请在页脚检查版本。

Dropbox 使用浏览器 OAuth。RcloneView 会打开登录页面，您批准访问后，远程会自动连接。

<img src="/support/images/en/blog/new-remote.png" alt="在 RcloneView 中添加 Proton Drive 和 Dropbox 远程" class="img-large img-center" />

## 选择要迁移的内容

设想一位自由职业顾问，客户文件夹存放在 Proton Drive，现在通过 Dropbox 共享交付成果。每个作业复制一个客户文件夹，这样每次运行都较短，也便于重试。

如果 Dropbox 中已有需要保留的文件，请使用 Copy 而不是 Sync，因为单向同步会使目标与源保持一致。向导中的过滤器可按文件大小或时间范围限制，也可选择 Document、Image 等预定义分组。请先运行 Dry Run：它会列出将要复制或删除的内容，而不会更改任何数据。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="迁移前比较 Proton Drive 和 Dropbox 文件夹" class="img-large img-center" />

## 传输与监控

要快速复制，请将文件夹从 Proton Drive 面板拖到 Dropbox 面板。在不同远程之间拖动执行的是复制而不是移动，因此原始文件仍保留在 Proton Drive。若需重复运行，可将传输保存为作业。

Transferring 选项卡会显示速度、文件数量和进度。对于大型归档，请在 Advanced Settings 中减少并发传输数，避免任一服务中断运行。失败的运行会自动重试（默认：3 次）。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="从 Proton Drive 到 Dropbox 的云到云传输" class="img-large img-center" />

## 验证结果

复制完成后，对两个根目录运行 Folder Compare。它会显示仅在左侧、仅在右侧、相同和不同的文件，并允许您把遗漏的文件复制过去。Job History 会记录每次运行的开始时间、持续时间、状态和文件数量，为迁移提供清晰的记录。

请注意，离开 Proton Drive 的文件会按照 Dropbox 自身的存储模型保存，因此在邀请协作者之前，请检查目标位置的共享设置。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Proton Drive 迁移到 Dropbox 的作业历史" class="img-large img-center" />

## 开始使用

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 添加 Proton Drive 远程（邮箱、密码、可选 2FA）和 Dropbox 远程（浏览器登录）。
3. 对一个文件夹运行 Dry Run，然后执行复制作业。
4. 使用 Folder Compare 验证，然后对其余文件夹重复上述步骤。

分阶段验证迁移，可以让您放心切换到 Dropbox，不必担心遗漏了什么。

---

**相关指南：**

- [将 Dropbox 迁移到 Proton Drive](https://rcloneview.com/support/blog/migrate-dropbox-to-proton-drive-rcloneview)
- [将 Proton Drive 迁移到 Google Drive](https://rcloneview.com/support/blog/migrate-proton-drive-to-google-drive-rcloneview)
- [Dry Run：传输前预览同步](https://rcloneview.com/support/blog/dry-run-preview-sync-before-transfer-rcloneview)

<CloudSupportGrid />
