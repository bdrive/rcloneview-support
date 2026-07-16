---
slug: migrate-koofr-to-backblaze-b2-rcloneview
title: "将 Koofr 迁移到 Backblaze B2 — 使用 RcloneView 传输文件"
authors:
  - tayson
description: "了解如何使用 RcloneView 将文件从 Koofr 云存储迁移到 Backblaze B2 对象存储 — 支持校验和验证以及大文件传输的自动重试。"
keywords:
  - Koofr to Backblaze B2 migration
  - migrate Koofr B2 RcloneView
  - Koofr Backblaze B2 transfer
  - switch Koofr to B2 storage
  - cloud migration Koofr
  - Koofr backup Backblaze B2
  - Koofr to S3 migration guide
  - rclone Koofr B2 GUI
tags:
  - koofr
  - backblaze-b2
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 将 Koofr 迁移到 Backblaze B2 — 使用 RcloneView 传输文件

> 通过单个 RcloneView 任务，将您的 Koofr 云存储库迁移到 Backblaze B2 对象存储 — 全程验证、可监控，中断后可恢复。

Koofr 是一款注重隐私的欧洲云存储服务，同时也可作为连接其他云账户的枢纽。如果您出于归档或成本原因要整合到 Backblaze B2，RcloneView 可以直接在两个提供商之间完成迁移 — 无需本地下载。文件会通过 rclone 的传输引擎，从 Koofr 基于 WebDAV 的后端直接流式传输到您的 B2 存储桶。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 设置 Koofr 和 Backblaze B2 远程

对于 Koofr，前往 **远程标签页 → 新建远程**，并从提供商列表中选择 Koofr。Koofr 支持 OAuth 登录 — RcloneView 会打开一个浏览器窗口供您使用 Koofr 账户进行身份验证。或者，如果您更倾向于基于密码的访问方式，可以在 Koofr 的账户设置中生成一个应用密码，并将其与您的 Koofr 邮箱一起使用。

对于 Backblaze B2，输入从 B2 控制台生成的 Application Key ID 和 Application Key。在配置中指定存储桶名称。两个远程都保存后，将 Koofr 放在左侧浏览面板，B2 放在右侧，以确认两者均可正常浏览。

<img src="/support/images/en/blog/new-remote.png" alt="Connecting Koofr and Backblaze B2 in RcloneView" class="img-large img-center" />

## 执行迁移

在主页标签页点击 **同步**，并配置任务：以 Koofr 文件夹作为源，B2 存储桶作为目标。在高级设置中，启用 **校验和** 以进行完整性验证。Koofr 内部使用 WebDAV，这意味着文件列表的获取可能比原生 S3 稍慢，因此请将检查程序数量设置为 4，以避免对 Koofr API 造成过大压力。

请先运行 **模拟运行（Dry Run）**，查看将要传输的完整文件列表。这对于较大的 Koofr 库尤为有用，因为 Koofr 还会聚合来自其他已连接账户（Google Drive、Dropbox 等）的文件 — 模拟运行可以帮助您确认自己迁移的只是实际的 Koofr 存储内容，而不是其他提供商的镜像视图。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Koofr to Backblaze B2 migration in progress in RcloneView" class="img-large img-center" />

## 处理中断的传输

如果迁移过程中断（网络中断、电脑休眠等），RcloneView 的同步模式天生支持恢复。当您重新运行同一个同步任务时，rclone 会比较源和目标，仅传输尚未存在或在 B2 端不同的文件。已经传输完成的文件无需重新发送。

迁移完成后，使用 **文件夹比较** 验证 Koofr 源和 B2 目标是否一致。比较视图会高亮显示存在于 Koofr 但在 B2 中缺失的任何文件，为您提供一份清晰的清单，列出需要重试的内容。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history showing completed Koofr to B2 migration runs" class="img-large img-center" />

## 快速上手

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 添加 Koofr（OAuth）和 Backblaze B2（Application Key）作为远程。
3. 运行模拟运行以确认迁移范围，然后启用校验和执行迁移。
4. 完成后使用文件夹比较，验证迁移是否完全成功。

使用 RcloneView 从 Koofr 迁移到 Backblaze B2 是一个可靠、可恢复的过程，全程保护您的数据完整性。

---

**相关指南：**

- [使用 RcloneView 管理 Koofr 云存储](https://rcloneview.com/support/blog/manage-koofr-cloud-sync-backup-rcloneview)
- [使用 RcloneView 将 Koofr 迁移到 Google Drive](https://rcloneview.com/support/blog/migrate-koofr-to-google-drive-rcloneview)
- [使用 RcloneView 管理 Backblaze B2 云存储](https://rcloneview.com/support/blog/manage-backblaze-b2-cloud-sync-backup-rcloneview)

<CloudSupportGrid />
