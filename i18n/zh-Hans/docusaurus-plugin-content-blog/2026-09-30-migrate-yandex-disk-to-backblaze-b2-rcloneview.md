---
slug: migrate-yandex-disk-to-backblaze-b2-rcloneview
title: "将 Yandex Disk 迁移到 Backblaze B2 — 使用 RcloneView 传输文件"
authors:
  - morgan
description: "使用 RcloneView 将 Yandex Disk 迁移到 Backblaze B2：连接两个远程，先试运行复制，用 Folder Compare 验证，并保留一份可靠的备份。"
keywords:
  - 将 Yandex Disk 迁移到 Backblaze B2
  - yandex disk to b2
  - Yandex Disk 备份
  - Backblaze B2 迁移
  - RcloneView Yandex Disk
  - 云到云传输
  - 从 Yandex Disk 移动文件
  - rclone yandex backblaze
  - 云迁移 GUI
  - 导出 Yandex Disk 文件
tags:
  - RcloneView
  - yandex-disk
  - backblaze-b2
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 将 Yandex Disk 迁移到 Backblaze B2 — 使用 RcloneView 传输文件

> 将 Yandex Disk 中的所有内容复制到 Backblaze B2 存储桶，并确认每个文件都已到达，无需使用命令行。

如果您的文件存放在 Yandex Disk，但希望在 Backblaze B2 中拥有一份独立的、基于存储桶的副本，通常的做法是通过自己的电脑手动下载再重新上传。RcloneView 在一个窗口中连接这两个服务并执行它们之间的传输，事前可以试运行，事后可以进行文件夹比较。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 连接 Yandex Disk 和 Backblaze B2

Yandex Disk 使用 OAuth：在 **New Remote** 中选择它，RcloneView 会打开浏览器，供您登录并授权访问，无需 API 密钥。Backblaze B2 使用来自 Backblaze 密钥管理页面的 Application Key ID 和 Application Key。请创建仅限目标存储桶的密钥，使迁移凭据无法访问其他任何内容。

<img src="/support/images/en/blog/new-remote.png" alt="Adding Yandex Disk and Backblaze B2 remotes in RcloneView" class="img-large img-center" />

在一个 Explorer 面板中打开 Yandex Disk，在另一个面板中打开 B2 存储桶。RcloneView 可在 Windows、macOS 和 Linux 上，通过一个窗口挂载并同步 90 多个服务提供商，因此工作时两侧始终可见。

## 规划目录结构并复制

确定文件夹如何映射到存储桶。例如，一家拥有十年项目文件夹的小型设计工作室，可以将 Yandex Disk 的每个顶级文件夹作为前缀镜像到同一个存储桶中，这样以后路径依然易读。请先使用 **New Folder** 创建目标文件夹。

将文件夹从 Yandex Disk 面板拖到 B2 面板；在不同远程之间，拖放执行的是复制，因此原始文件保持不变。对于较大或需要重复的迁移，请改用 Sync 向导：将 Yandex Disk 设为源，存储桶路径设为目标，任务名称可使用字母、数字、连字符或下划线。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-to-cloud transfer from Yandex Disk to Backblaze B2" class="img-large img-center" />

## Dry Run 并监控传输

请先运行 **Dry Run**。它会列出将被复制和将被删除的文件，因此源或目标设置错误时，可以在造成损失之前发现。这对于会修改目标以匹配源的单向同步尤为重要。

在 Advanced Settings 中，调整并发文件传输数量，如需哈希加大小的验证，请启用校验和比较。先从保守的设置开始，待传输稳定后再提高并发数。可在 **Transferring** 标签页中查看进度、速度和文件数。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitoring a Yandex Disk to B2 transfer in real time" class="img-large img-center" />

## 使用 Folder Compare 验证

任务完成后，从 Home 标签页打开 **Compare**，左侧为 Yandex Disk，右侧为 B2。筛选仅存在于左侧或存在差异的文件以发现遗漏，然后使用 Copy right 补齐。Job History 会记录每次运行的状态、大小、速度和文件数，可作为迁移记录。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder Compare between Yandex Disk and Backblaze B2" class="img-large img-center" />

## 开始使用

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 通过 OAuth 添加 Yandex Disk，并使用限定存储桶的应用密钥添加 Backblaze B2。
3. 运行 Dry Run，然后开始复制或同步任务。
4. 使用 Folder Compare 确认存储桶与源一致。

在对象存储中拥有一份经过验证的第二副本，意味着 Yandex Disk 不再是您的文件唯一的存放位置。

---

**相关指南：**

- [将 HiDrive 迁移到 Backblaze B2](https://rcloneview.com/support/blog/migrate-hidrive-to-backblaze-b2-rcloneview)
- [将 Yandex Disk 迁移到 Dropbox](https://rcloneview.com/support/blog/migrate-yandex-disk-to-dropbox-rcloneview)
- [Dry Run：传输前预览同步](https://rcloneview.com/support/blog/dry-run-preview-sync-before-transfer-rcloneview)

<CloudSupportGrid />
