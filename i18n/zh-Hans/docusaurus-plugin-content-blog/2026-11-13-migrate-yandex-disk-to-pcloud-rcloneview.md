---
slug: migrate-yandex-disk-to-pcloud-rcloneview
title: "将 Yandex Disk 迁移到 pCloud — 用 RcloneView 传输文件"
authors:
  - morgan
description: "使用 RcloneView 将文件从 Yandex Disk 迁移到 pCloud。通过 OAuth 连接两个云，用 Dry Run 预览，进行云到云复制，并用 Folder Compare 验证。"
keywords:
  - yandex disk 迁移到 pcloud
  - yandex disk 到 pcloud 传输
  - yandex disk 迁移
  - pcloud 迁移工具
  - 云到云传输
  - 从 yandex disk 移动文件
  - rcloneview yandex disk
  - rcloneview pcloud
  - rclone gui 云迁移
tags:
  - RcloneView
  - yandex-disk
  - pcloud
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 将 Yandex Disk 迁移到 pCloud — 用 RcloneView 传输文件

> 通过可预览、可监控、可验证的图形化复制任务，将多年积累的 Yandex Disk 文件迁移到 pCloud。

整合存储账户往往卡在同一个地方：必须先把所有文件下载到笔记本电脑，再重新上传。RcloneView 将 Yandex Disk 和 pCloud 并排连接，并通过 rclone 在两者之间复制文件，无需先暂存到本地磁盘。两个服务都通过浏览器 OAuth 登录连接，因此也无需生成 API 密钥。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 将 Yandex Disk 和 pCloud 连接为远程

打开 Remote 选项卡，点击 **New Remote**。选择 Yandex Disk，为远程指定一个简短名称，例如 `yandex`，然后完成浏览器登录。对 pCloud 重复相同步骤，名称可设为 `pcloud`。两者都会显示在 Remote Manager 中，之后可以编辑或删除。

连接后，打开两个 Explorer 面板 — 每个远程一个 — 并浏览文件夹树。右键单击顶层文件夹并选择 **Get Size**，即可查看要迁移的数据量。借助这个数字，你可以在复制第一个文件之前确认 pCloud 套餐是否有足够空间。

<img src="/support/images/en/blog/new-remote.png" alt="Adding Yandex Disk and pCloud remotes in RcloneView" class="img-large img-center" />

## 规划并预览复制任务

对于一次性迁移，**Copy** 任务是更安全的选择：它只向 pCloud 添加文件，不会删除任何内容。只有当你希望 pCloud 精确镜像 Yandex Disk（包括删除）时才使用 **Sync**。

在 Job Manager 中创建任务。在 Step 1 中，选择 Yandex Disk 文件夹作为源，pCloud 文件夹作为目标。在 Step 2 中，可以考虑启用校验和比较，在两端支持相同哈希类型时按哈希加大小比较文件（Yandex Disk 使用 MD5，而 pCloud 仅在 US 区域账户中提供 MD5），并为不稳定的连接保留重试设置（默认：3）。Step 3 可让你跳过不再需要的内容 — 例如最大文件时长，或排除 `.iso` 镜像或 `.git/` 文件夹的自定义规则。

运行前请使用 **Dry Run**。它会列出将要复制的每个文件，因此即使是要迁移 400 GB RAW 归档的摄影师，也能在投入数小时传输之前确认文件夹结构正确。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-to-cloud copy from Yandex Disk to pCloud in RcloneView" class="img-large img-center" />

## 运行并监控传输

启动任务，在 Transferring 选项卡中查看进度、速度和文件数。大型资料库最好拆分为多个任务 — 每个顶层文件夹一个 — 这样网络波动只会影响一个批次。每次运行都会连同状态、总大小和文件数记录在 Job History 中，为迁移提供审计记录。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitoring a Yandex Disk to pCloud transfer in the Transferring tab" class="img-large img-center" />

## 用 Folder Compare 验证

任务完成后，打开 **Compare**，左侧放 Yandex Disk 文件夹，右侧放 pCloud 文件夹。筛选"left-only"和"different"文件，即可找出被跳过的内容。使用 Copy right 一键补传剩余文件。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Comparing Yandex Disk and pCloud folders after migration" class="img-large img-center" />

## 开始使用

RcloneView 可在 Windows、macOS 和 Linux 上，从一个窗口挂载并同步 90+ 种存储服务。

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 通过 OAuth 浏览器登录将 Yandex Disk 和 pCloud 添加为远程。
3. 创建从 Yandex Disk 到 pCloud 的 Copy 任务，并用 Dry Run 检查。
4. 运行任务，然后在关闭 Yandex Disk 账户之前用 Folder Compare 确认结果。

经过验证的迁移意味着你可以放心停用旧账户，确信每个文件夹都已完整迁移。

---

**相关指南：**

- [管理 Yandex Disk 存储 — 用 RcloneView 同步和备份文件](https://rcloneview.com/support/blog/manage-yandex-disk-cloud-sync-backup-rcloneview)
- [管理 pCloud 存储 — 用 RcloneView 同步和备份文件](https://rcloneview.com/support/blog/manage-pcloud-cloud-sync-backup-rcloneview)
- [解决 Yandex Disk 同步错误 — 用 RcloneView 诊断并解决传输失败](https://rcloneview.com/support/blog/fix-yandex-disk-sync-errors-rcloneview)

<CloudSupportGrid />
