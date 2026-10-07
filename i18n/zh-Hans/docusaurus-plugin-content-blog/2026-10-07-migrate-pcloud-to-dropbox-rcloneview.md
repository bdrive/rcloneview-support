---
slug: migrate-pcloud-to-dropbox-rcloneview
title: "将 pCloud 迁移到 Dropbox — 使用 RcloneView 传输文件"
authors:
  - tayson
description: "使用 RcloneView 将 pCloud 迁移到 Dropbox：通过 OAuth 连接两个服务，先进行 Dry Run 预览，再进行云到云复制，并用 Folder Compare 验证。"
keywords:
  - 将 pCloud 迁移到 Dropbox
  - pCloud 到 Dropbox 传输
  - 将 pCloud 文件移动到 Dropbox
  - pCloud Dropbox 迁移工具
  - 云到云传输
  - RcloneView
  - rclone GUI
  - pCloud 同步
  - Dropbox 同步
  - 文件夹比较
tags:
  - RcloneView
  - pcloud
  - dropbox
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 将 pCloud 迁移到 Dropbox — 使用 RcloneView 传输文件

> 无需先下载到本地磁盘，即可把整个 pCloud 库迁移到 Dropbox。

从 pCloud 切换到 Dropbox，通常是因为团队已统一使用 Dropbox 进行共享，或客户有此要求。手动下载再重新上传数百 GB 的数据既缓慢又容易出错。RcloneView 通过 rclone 连接两个服务，在一个窗口中完成云到云的文件传输，并提供 Dry Run 和验证步骤。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 连接 pCloud 和 Dropbox

在 RcloneView 中，pCloud 和 Dropbox 都使用 OAuth 浏览器登录，因此无需 API 密钥。打开 Remote 选项卡，点击 **New Remote**，选择 pCloud，并在浏览器打开后登录。对 Dropbox 重复同样的操作。如果使用 Dropbox Business 账户，请在配置时启用 `dropbox_business = true` 设置。

RcloneView 在 Windows、macOS 和 Linux 上支持 90 多种云存储服务，因此两个账户会并排显示为 Explorer 面板。

<img src="/support/images/en/blog/new-remote.png" alt="在 RcloneView 中添加 pCloud 和 Dropbox 远程" class="img-large img-center" />

## 使用 Dry Run 预览迁移

在移动任何内容之前，打开 Sync 向导，选择 pCloud 作为源，选择一个 Dropbox 文件夹作为目标。首次迁移请使用 **Copy** 方式，这样源端不会有任何改动。运行 **Dry Run** 可列出将要传输的所有文件，并确认文件夹结构落在预期的位置。

假设一位设计师在 pCloud 中有 400 GB 的项目文件夹。通过 Dry Run 可以发现过大的文件或不需要的子文件夹，并可在 Sync 向导的过滤步骤中使用最大文件大小、文件时长或自定义过滤规则将其排除。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="从 pCloud 到 Dropbox 的云到云传输" class="img-large img-center" />

## 运行传输并监控进度

启动作业，并在 Transferring 选项卡中查看进度和文件数量。在 Advanced Settings 中可以调整文件传输数量并启用校验和比较。如果运行中途失败，作业的重试设置（默认 3 次）会重新尝试同步，再次运行时只会复制缺失的文件。

由于数据通过 rclone 在两个服务之间直接传输，因此不需要为整个库预留本地磁盘空间。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="在 RcloneView 中监控正在运行的传输" class="img-large img-center" />

## 使用 Folder Compare 验证

传输完成后，在 Home 选项卡中打开 **Compare**，左侧选择 pCloud，右侧选择 Dropbox。筛选仅存在于左侧的文件和有差异的文件以找出遗漏项，然后使用 Copy right 补齐。在 Job History 中查看状态、大小和文件数量，作为迁移记录。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="pCloud 与 Dropbox 之间的 Folder Compare" class="img-large img-center" />

## 开始使用

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 在 Remote 选项卡中通过 OAuth 登录添加 pCloud 和 Dropbox 远程。
3. 创建从 pCloud 到 Dropbox 的 Copy 作业，并先运行 Dry Run。
4. 运行作业，然后在停用旧账户之前用 Folder Compare 进行验证。

分阶段并经过验证的迁移，可在 Dropbox 拥有所需的全部内容之前，保持 pCloud 数据完整无损。

---

**相关指南：**

- [将 pCloud 迁移到 OneDrive](https://rcloneview.com/support/blog/migrate-pcloud-to-onedrive-rcloneview)
- [将 Dropbox 同步到 pCloud](https://rcloneview.com/support/blog/sync-dropbox-to-pcloud-rcloneview)
- [Dry Run — 预览云同步](https://rcloneview.com/support/blog/dry-run-preview-cloud-sync-rcloneview)

<CloudSupportGrid />
