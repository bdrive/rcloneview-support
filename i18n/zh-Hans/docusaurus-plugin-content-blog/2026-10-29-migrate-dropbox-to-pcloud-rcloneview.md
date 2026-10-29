---
slug: migrate-dropbox-to-pcloud-rcloneview
title: "将 Dropbox 迁移到 pCloud — 使用 RcloneView 传输文件"
authors:
  - robin
description: "使用 RcloneView 将文件从 Dropbox 移至 pCloud：连接两个远程、运行 Dry Run、进行云到云复制，并使用 Folder Compare 验证。"
keywords:
  - 迁移 dropbox 到 pcloud
  - dropbox 到 pcloud 传输
  - 将 dropbox 文件移到 pcloud
  - dropbox pcloud 迁移
  - 云到云传输
  - rcloneview dropbox
  - rcloneview pcloud
  - 从 dropbox 切换到 pcloud
  - 传输 dropbox 数据
tags:
  - RcloneView
  - dropbox
  - pcloud
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 将 Dropbox 迁移到 pCloud — 使用 RcloneView 传输文件

> 不必手动先下载再上传，一次可控、可验证的操作即可将 Dropbox 账户迁移到 pCloud。

更换提供商通常意味着先将数 GB 数据下载到笔记本电脑，再重新上传。RcloneView 可以避免这一点：它并排连接 Dropbox 和 pCloud，并通过 rclone 直接在云与云之间传输。RcloneView 可在 Windows、macOS 和 Linux 上，通过一个窗口挂载并同步 90 多个提供商。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 连接 Dropbox 和 pCloud

这两项服务在 RcloneView 中都使用基于浏览器的 OAuth 登录，因此无需粘贴 API 密钥。打开 Remote 选项卡，点击 **New Remote**，选择 Dropbox，并在弹出的浏览器窗口中批准访问。对 pCloud 重复同样的操作。如果迁移团队账户，Dropbox for Business 需要设置 `dropbox_business = true`。

<img src="/support/images/en/blog/new-remote.png" alt="在 RcloneView 中添加新的 Dropbox 和 pCloud 远程" class="img-large img-center" />

两个远程创建完成后，在两个 Explorer 面板中分别打开它们。将 Dropbox 文件夹树与 pCloud 目标并排查看，便于决定是移动全部内容还是仅移动选定的文件夹。

## 运行前先规划复制

首次迁移请使用 **Copy** 任务，因为它不会删除源端的任何内容。在 4 步任务向导中，选择 Dropbox 作为源，选择专用的 pCloud 文件夹作为目标。在 Advanced Settings 中，可以为大型照片或文档库提高文件传输数量；如果希望通过哈希和大小进行验证，还可以启用校验和比较。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="在 RcloneView 中从 Dropbox 到 pCloud 的云到云传输" class="img-large img-center" />

过滤也很有帮助。设置最大文件大小或排除 `.git/` 之类的模式，临时文件和构建文件夹就不会与其余内容一起传输。请先运行 **Dry Run**：它会列出将要复制的文件，而不会触及任何一个账户。

## 运行、监控和验证

启动任务，并在 Transferring 选项卡中查看进度、速度和文件数量。Dropbox 会应用 API 速率限制，因此大型传输有时可能会变慢；RcloneView 会重试同步（默认 3 次）而不是放弃。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="在 RcloneView 中监控正在运行的传输" class="img-large img-center" />

任务完成后，对 Dropbox 和 pCloud 文件夹打开 **Compare**。仅存在于左侧的文件是未能到达的内容，“different”文件则是大小不同的文件。一键将遗漏的文件复制过去，然后在 Job History 中查看每次运行的状态、总大小和文件数量。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder Compare 显示 Dropbox 与 pCloud 的差异" class="img-large img-center" />

## 开始使用

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 使用 **New Remote** 将 Dropbox 和 pCloud 添加为远程。
3. 创建以 Dropbox 为源的 Copy 任务，然后运行 Dry Run。
4. 运行任务，在停用旧账户之前，使用 Folder Compare 进行验证。

在 Compare 显示不再有仅存在于左侧的文件之前，请保持 Dropbox 原样，这样原始数据仍可作为后备。

---

**相关指南：**

- [Manage Dropbox Storage — Sync and Backup Files with RcloneView](https://rcloneview.com/support/blog/manage-dropbox-cloud-sync-backup-rcloneview)
- [Manage pCloud Storage — Sync and Backup Files with RcloneView](https://rcloneview.com/support/blog/manage-pcloud-cloud-sync-backup-rcloneview)
- [Migrate pCloud to Google Drive — Transfer Files with RcloneView](https://rcloneview.com/support/blog/migrate-pcloud-to-google-drive-rcloneview)

<CloudSupportGrid />
