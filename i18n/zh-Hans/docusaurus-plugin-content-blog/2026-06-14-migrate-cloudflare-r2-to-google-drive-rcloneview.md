---
slug: migrate-cloudflare-r2-to-google-drive-rcloneview
title: "将 Cloudflare R2 迁移到 Google Drive —— 使用 RcloneView 传输文件"
authors:
  - jay
description: "了解如何使用 RcloneView 将文件从 Cloudflare R2 迁移到 Google Drive —— 没有意外的出口流量费用，只有引导式的可视化传输流程。"
keywords:
  - cloudflare r2 to google drive
  - migrate r2 to google drive rcloneview
  - cloudflare r2 google drive transfer
  - rcloneview cloudflare r2 migration
  - object storage to google drive
  - r2 bucket to google drive rclone
  - cloudflare r2 backup google drive
  - cloud migration rcloneview
tags:
  - RcloneView
  - cloudflare-r2
  - google-drive
  - cloud-to-cloud
  - migration
  - cloud-storage
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 将 Cloudflare R2 迁移到 Google Drive —— 使用 RcloneView 传输文件

> 使用 RcloneView 的可视化界面，将文件从 Cloudflare R2 存储桶迁移到 Google Drive —— 无需命令行，也不会产生 R2 的出口费用。

Cloudflare R2 因其零出口费用的对象存储而深受开发者欢迎，但团队通常需要将数据迁移到 Google Drive，以便与非技术同事共享、与 Google Workspace 集成，或整合存储账户。RcloneView 通过点击式操作流程连接这两项服务，让你无需编写任何命令即可将 R2 存储桶迁移到 Google Drive。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 连接 Cloudflare R2 和 Google Drive

首先将两项服务都添加为远程。在 **Remote**（远程）选项卡中，点击 **New Remote**（新建远程）并选择 Cloudflare R2。你需要提供 Cloudflare 的 **API Token**（API 令牌）、**Account ID**（账户 ID）和 **Endpoint URL**（端点 URL，格式为 `https://<account-id>.r2.cloudflarestorage.com`）。RcloneView 使用 rclone 的 S3 兼容后端来支持 R2，因此你的 R2 API 令牌可以直接对应到 Access Key 和 Secret Key 字段。

接下来，添加 Google Drive 作为第二个远程。RcloneView 会打开一个浏览器窗口进行 OAuth 身份验证 —— 登录你的 Google 账户并授予访问权限，无需输入任何 API 密钥。

<img src="/support/images/en/blog/new-remote.png" alt="Setting up Cloudflare R2 and Google Drive remotes in RcloneView" class="img-large img-center" />

配置好两个远程后，你就可以在 RcloneView 的双面板浏览器中并排浏览你的 R2 存储桶和 Google Drive 文件夹。

## 执行迁移

在 Home（主页）选项卡中点击 **Sync**（同步），启动 4 步任务向导。在第 1 步中，选择你的 R2 存储桶（或其中的特定子文件夹）作为源，选择一个 Google Drive 文件夹作为目标。为任务命名要清晰明确 —— 类似 `r2-to-gdrive-migration` 这样的名称，有助于日后查看历史记录时快速识别。

在第 2 步中，启用 **checksum verification**（校验和验证），以确认每次传输后的文件完整性。这对于视频或压缩包等大文件尤为重要，否则传输过程中的损坏可能不会被察觉。将重试次数设置为至少 3 次，以便自动处理临时的网络中断。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring a migration job from Cloudflare R2 to Google Drive in RcloneView" class="img-large img-center" />

在正式提交之前，先运行一次 **Dry Run**（模拟运行），以准确预览将要复制的文件。这会显示完整的传输列表和文件大小，让你在任何文件被写入 Google Drive 之前就能确认迁移范围。

## 筛选与处理大批量传输

如果你的 R2 存储桶中混合了多种文件类型，第 3 步允许你应用筛选条件。例如，一个正在迁移项目存储桶的设计团队，可以使用 Max File Size（最大文件大小）筛选器，排除超过 500 MB 的原始 `.psd` 文件，同时保留所有可直接用于网页的导出文件。**Max File Age**（最大文件年龄）筛选器同样适用于增量迁移 —— 只迁移最近 30 天内修改过的文件，而不是整个历史数据集。

对于耗时数小时的大规模迁移，**Job History**（任务历史）选项卡会记录每次执行的速度、文件数量和完成状态。如果任务中途被中断，重新运行是安全的 —— RcloneView 会跳过已经成功传输的文件，并从上次中断的地方继续。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Monitoring a Cloudflare R2 to Google Drive transfer job in RcloneView" class="img-large img-center" />

## 开始使用

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 使用你的 API Token、Account ID 和 Endpoint URL，将 Cloudflare R2 添加为远程。
3. 通过 OAuth 浏览器登录，将 Google Drive 添加为远程。
4. 创建一个从 R2 存储桶到 Google Drive 文件夹的复制或同步任务 —— 先运行一次 Dry Run 以确认迁移范围。

Cloudflare R2 的零出口费用模式意味着从 R2 端迁出数据不会产生任何费用，而 RcloneView 则以可视化方式为你处理其余一切。

---

**相关指南：**

- [使用 RcloneView 将 Google Drive 迁移到 Cloudflare R2](https://rcloneview.com/support/blog/migrate-google-drive-to-cloudflare-r2-rcloneview)
- [管理 Cloudflare R2 —— 使用 RcloneView 同步与备份](https://rcloneview.com/support/blog/manage-cloudflare-r2-cloud-sync-rcloneview)
- [管理 Google Drive —— 使用 RcloneView 同步与备份文件](https://rcloneview.com/support/blog/manage-google-drive-cloud-sync-backup-rcloneview)

<CloudSupportGrid />
