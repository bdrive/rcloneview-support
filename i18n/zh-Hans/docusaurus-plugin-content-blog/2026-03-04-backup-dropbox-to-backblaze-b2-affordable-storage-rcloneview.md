---
slug: backup-dropbox-to-backblaze-b2-affordable-storage-rcloneview
title: "使用 RcloneView 将 Dropbox 备份到 Backblaze B2,实现经济实惠的长期存储"
authors:
  - tayson
description: "通过 RcloneView 将 Dropbox 数据以极低成本备份到 Backblaze B2,自动完成计划任务和校验,保护您的数据。"
keywords:
  - dropbox backup to backblaze
  - dropbox to b2
  - backup dropbox cheap
  - dropbox backblaze b2 sync
  - dropbox long-term backup
  - affordable cloud backup
  - dropbox data protection
  - dropbox to backblaze transfer
  - dropbox rclone backup
  - cheap dropbox backup solution
tags:
  - dropbox
  - backblaze-b2
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 使用 RcloneView 将 Dropbox 备份到 Backblaze B2,实现经济实惠的长期存储

> Dropbox 非常适合日常同步,但作为长期备份成本较高。Backblaze B2 的价格仅为其一小部分。RcloneView 将两者连接起来,并自动完成备份。

Dropbox 擅长实时文件同步与协作,但仅依赖它作为唯一备份既有风险又成本高昂——尤其是对于大型资料库而言。Backblaze B2 提供兼容 S3 的对象存储,价格为 $0.006/GB/月(约为大多数竞争对手成本的 1/3),非常适合长期归档。RcloneView 弥合了这一差距:按计划自动将您的 Dropbox 备份到 B2,通过校验和进行验证,并可随时恢复。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 为什么要将 Dropbox 备份到 Backblaze B2?

### 节省成本

| 提供商 | 每 TB/月成本 | 10 TB/年 |
|----------|-------------------|------------|
| Dropbox Business | 约 $15/用户(有限制) | 因情况而异 |
| Backblaze B2 | $6 | $72 |
| AWS S3 Standard | $23 | $276 |

B2 的定价使其成为目前最便宜的云备份目的地之一。

### 独立于 Dropbox

- **账户问题**——如果您的 Dropbox 账户被暂停或遭到入侵,您的 B2 备份不会受到影响。
- **意外删除**——Dropbox 的版本历史存在限制。B2 为您提供独立的安全保障。
- **勒索软件防护**——配合生命周期规则的独立 B2 备份可作为不可篡改的恢复点。

## 设置备份

### 步骤一:添加 Dropbox

1. 点击**添加远程**→选择 **Dropbox**。
2. 通过 OAuth 进行身份验证。
3. 现在可以浏览您的 Dropbox 文件了。

### 步骤二:添加 Backblaze B2

1. 点击**添加远程**→选择 **Backblaze B2**(或兼容 S3)。
2. 输入您的 B2 Application Key ID 和 Application Key。
3. 现在可以浏览您的 B2 存储桶了。

<img src="/support/images/en/blog/new-remote.png" alt="Add Dropbox and Backblaze B2 remotes" class="img-large img-center" />

### 步骤三:创建备份任务

1. 创建一个**复制任务**:Dropbox → B2 存储桶。
2. 使用复制(而非同步),以避免在 Dropbox 文件被删除时同时删除 B2 上的文件。
3. 运行初始备份。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Run Dropbox to B2 backup job" class="img-large img-center" />

### 步骤四:验证

使用[文件夹对比](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)确认每个文件都已成功传输到 B2:

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify Dropbox backup on B2" class="img-large img-center" />

### 步骤五:设置计划任务

设置每日自动备份:

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule Dropbox to B2 backups" class="img-large img-center" />

## 监控

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitor Dropbox to B2 transfer" class="img-large img-center" />

添加 [Slack](https://rcloneview.com/support/blog/rcloneview-slack-remote-control) 或 [Telegram](https://rcloneview.com/support/blog/rcloneview-telegram-remote-control) 通知,以便及时了解备份完成或失败的情况。

## 从 B2 恢复

如果您需要恢复数据:

1. 创建一个反向的复制任务:B2 → Dropbox(或 B2 → 本地驱动器)。
2. 使用文件夹对比来选择需要恢复的特定文件。
3. RcloneView 以可视化方式处理传输——无需使用命令行。

## 快速开始

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. **添加 Dropbox** 和 **Backblaze B2** 作为远程存储。
3. **创建一个复制任务**并运行初始备份。
4. **设置计划任务**以实现每日自动保护。
5. **安心无忧**,因为您的 Dropbox 数据已拥有经济实惠、独立的备份。

---

**相关指南:**

- [通过浏览器登录方式添加远程存储(OAuth)](https://rcloneview.com/support/howto/remote-storage-connection-settings/add-oath-online-login)
- [对比文件夹内容](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [创建同步任务](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [任务计划设置](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)

<CloudSupportGrid />
