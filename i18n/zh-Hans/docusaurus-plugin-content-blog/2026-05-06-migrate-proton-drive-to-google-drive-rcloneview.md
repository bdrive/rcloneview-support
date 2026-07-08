---
slug: migrate-proton-drive-to-google-drive-rcloneview
title: "将 Proton Drive 迁移到 Google Drive — 使用 RcloneView 传输文件"
authors:
  - tayson
description: "使用 RcloneView 将文件从 Proton Drive 移动到 Google Drive。直接在不同服务商之间传输加密的云端数据——无需手动下载，完整保留文件夹结构。"
keywords:
  - migrate Proton Drive to Google Drive
  - Proton Drive Google Drive transfer
  - RcloneView Proton Google Drive migration
  - Proton Drive migration tool
  - move files Proton Drive Google Drive
  - Proton Drive cloud migration GUI
  - Google Drive import Proton Drive
  - cloud to cloud migration
  - Proton Drive file transfer tool
  - RcloneView Proton Drive sync
tags:
  - RcloneView
  - proton-drive
  - google-drive
  - cloud-to-cloud
  - migration
  - cloud-sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 将 Proton Drive 迁移到 Google Drive — 使用 RcloneView 传输文件

> RcloneView 直接在云端将您的 Proton Drive 内容迁移到 Google Drive——实时解密文件并上传，无需在本地存储任何内容。

Proton Drive 的端到端加密使其成为注重隐私用户信赖的存储平台。当迁移到基于 Google Workspace 构建的团队环境时，将 Proton Drive 中的文档、照片和项目资产迁移到 Google Drive 是常见需求。RcloneView 可高效处理此类迁移，同时连接两个服务商，并通过单个同步任务协调传输过程。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 在 RcloneView 中连接 Proton Drive 和 Google Drive

将 Proton Drive 添加为远程需要 rclone v1.69 或更高版本——RcloneView 内置的 rclone 默认满足此要求。前往 Remote 标签页 > New Remote，选择 Proton Drive，然后输入您的 Proton 账户邮箱和密码。如果您启用了双因素认证，系统还会提示您输入 2FA 验证码。

对于 Google Drive，选择 Google Drive 并完成 OAuth 浏览器授权流程。配置完成后，两个远程都会显示在 RcloneView 的文件浏览器中。在双面板视图中并排打开 Proton Drive 和 Google Drive，以评估迁移范围。

<img src="/support/images/en/blog/new-remote.png" alt="Adding Proton Drive and Google Drive remotes in RcloneView" class="img-large img-center" />

## 配置迁移任务

创建一个复制或同步任务，以 Proton Drive 为源，以您的 Google Drive 文件夹为目标。在 RcloneView 的同步向导中：

- **模式：** 选择“复制”以移动文件而不从 Proton Drive 中删除它们（在迁移过程中将原始文件保留为备份）
- **过滤：** 使用预定义的 Google Docs 过滤器，以避免文件类型不兼容的问题
- **校验和：** 启用该选项以验证传输文件的完整性

由于 Proton Drive 采用加密存储，rclone 会在下载时解密内容，并将明文重新上传到 Google Drive。开始之前，请确认您的 Google Drive 目标文件夹有足够的配额。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring Proton Drive to Google Drive migration in RcloneView" class="img-large img-center" />

## 运行试运行并预览

在执行大规模迁移之前，请务必先使用试运行模式。RcloneView 的试运行会扫描 Proton Drive 源，并列出所有将要传输的文件——在正式执行之前为您提供文件数量、文件夹结构预览以及传输大小估算。这有助于识别您可能想要排除的文件夹，例如 Proton Drive 的内部文件版本或共享链接。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running the Proton Drive to Google Drive migration in RcloneView" class="img-large img-center" />

## 监控进度并验证结果

RcloneView 的 Transfer 标签页会实时显示迁移进度。与明文存储服务商相比，Proton Drive 的加密存储会带来一些额外的处理开销，因此传输速度可能比等效的 Google Drive 到 Drive 操作略慢。任务完成后，Job History 会显示完整摘要：已迁移文件数、已传输字节数、耗时以及错误信息。

将 Google Drive 中的文件数量和大小与您的 Proton Drive 源进行比对，以验证迁移是否成功完成。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitoring Proton Drive to Google Drive migration progress in RcloneView" class="img-large img-center" />

## 快速上手

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 添加 Proton Drive（邮箱 + 密码）和 Google Drive（OAuth）作为远程。
3. 创建一个从 Proton Drive 到您的 Google Drive 目标文件夹的复制任务。
4. 运行试运行以确认范围，然后执行完整迁移。

借助 RcloneView，从 Proton Drive 迁移到 Google Drive 是一个简单直接的过程——并配有进度监控和详细的传输历史记录。

---

**相关指南：**

- [管理 Proton Drive 存储 — 使用 RcloneView 同步和备份文件](https://rcloneview.com/support/blog/manage-proton-drive-cloud-sync-rcloneview)
- [使用 RcloneView 将 Proton Drive 迁移到 OneDrive](https://rcloneview.com/support/blog/migrate-proton-drive-to-onedrive-rcloneview)
- [管理 Google Drive 存储 — 使用 RcloneView 同步和备份文件](https://rcloneview.com/support/blog/manage-google-drive-cloud-sync-backup-rcloneview)

<CloudSupportGrid />
