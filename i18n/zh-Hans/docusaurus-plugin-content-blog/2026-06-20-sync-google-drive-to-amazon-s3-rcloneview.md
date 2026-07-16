---
slug: sync-google-drive-to-amazon-s3-rcloneview
title: "将 Google Drive 同步到 Amazon S3 —— 使用 RcloneView 实现自动化云备份"
authors:
  - jay
description: "使用 RcloneView 将 Google Drive 同步到 Amazon S3。设置自动化的云到云备份任务、安排传输计划，并在同一个 GUI 中监控进度。"
keywords:
  - Google Drive to Amazon S3
  - sync Google Drive to S3
  - backup Google Drive to S3
  - RcloneView Google Drive S3
  - cloud to cloud sync
  - Amazon S3 backup
  - Google Drive backup
  - automated cloud backup
  - cloud storage migration
  - rclone Google Drive S3
tags:
  - google-drive
  - amazon-s3
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 将 Google Drive 同步到 Amazon S3 —— 使用 RcloneView 实现自动化云备份

> 将 Google Drive 备份到 Amazon S3 会在独立的云基础设施上创建一份数据的独立副本 —— RcloneView 让这一切成为一次设置、无需再管的工作流程。

Google Drive 非常适合协作，但如果仅依赖它作为关键文件的唯一副本，对大多数团队来说都是不应承担的风险。Amazon S3 提供了持久、经济实惠的对象存储，可作为独立的备份目的地与 Google Drive 形成互补。借助 RcloneView 由 GUI 驱动的任务系统，一个管理着 200 GB 共享项目文件的内容团队可以在几分钟内建立自动化的云到云备份 —— 完全不需要输入 rclone 命令。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 在 RcloneView 中设置 Google Drive 和 Amazon S3

在创建同步任务之前，需要先配置好两个远程。在 RcloneView 中，点击**远程标签页 > 新建远程**。对于 Google Drive，从服务商列表中选择它 —— 系统会打开一个浏览器窗口进行 OAuth 身份验证。登录并授权后，远程会自动保存，无需手动管理任何 API 密钥。

对于 Amazon S3，选择 **Amazon S3** 作为服务商，然后输入你的 **Access Key ID**、**Secret Access Key**，以及 S3 存储桶所在的**区域**（例如 `us-east-1`）。RcloneView 会将所有凭据安全地存储在加密的本地存储中。两个远程都保存完成后，它们会分别显示为浏览面板中的一个标签页，随时可供浏览。

<img src="/support/images/en/blog/new-remote.png" alt="Adding Google Drive and Amazon S3 remotes in RcloneView" class="img-large img-center" />

## 配置云到云同步任务

点击**主页标签页 > 同步**打开任务向导。将 Google Drive —— 或某个特定子文件夹，如 `My Drive/Projects` —— 设为源，将某个 S3 存储桶前缀（例如 `my-backup-bucket/google-drive/`）设为目标。为任务取一个描述性的名称，例如 `gdrive-to-s3-daily`。

在**高级设置**中，启用**校验和验证**，以便通过哈希值而非仅凭文件大小来比较文件 —— 这可以捕捉到那些因部分覆写而大小相同但内容不同的文件。将并发传输数设置为与你的网络容量相匹配；4–8 个并发传输适合大多数宽带连接，且不会触发 Google Drive 的速率限制。

**过滤**步骤可以精确控制同步的内容：如果只需要备份文档，可以排除大型视频文件；或者使用最大文件时限字段，限定只同步最近 90 天内修改过的文件。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring Google Drive to Amazon S3 sync job in RcloneView" class="img-large img-center" />

## 运行与监控传输

在首次完整同步之前，可使用内置的**试运行**功能预览目标位置将要复制或删除的具体文件。在初次设置时，S3 存储桶为空，你希望在正式提交数吉字节的数据之前确认任务配置是否正确，这一功能尤其有价值。

准备好后点击**运行**。RcloneView 底部的**传输中**标签页会实时显示进度：速度、文件数量以及完成百分比。对于包含数万个文件的大型 Google Drive 资料库，首次同步可能需要数小时 —— 后续运行只会传输发生变化的文件，速度会快得多。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitoring Google Drive to S3 transfer progress in RcloneView" class="img-large img-center" />

## 安排每日自动备份

拥有 **PLUS 许可证**后，在**任务管理器**中打开该任务，并使用 cron 风格的界面添加计划 —— 例如每天凌晨 1 点执行。**模拟计划**工具会预览接下来十次的执行时间，方便你确认备份会在正确的时间触发。保存后，无论 RcloneView 窗口是否打开，备份都会自动运行。

每次运行结束后，**任务历史**会记录耗时、传输速度、文件数量以及完成状态，为每一次推送到 S3 的 Google Drive 备份提供清晰的审计记录。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling automated Google Drive to Amazon S3 backup in RcloneView" class="img-large img-center" />

## 开始使用

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 在**远程标签页 > 新建远程**中通过 OAuth 登录添加 Google Drive 远程。
3. 使用你的 AWS Access Key ID、Secret Key 和存储桶区域添加 Amazon S3 远程。
4. 创建一个同步任务：源 = Google Drive 文件夹，目标 = S3 存储桶前缀，然后运行或安排该任务。

现在，你的 Google Drive 数据已经在 AWS 基础设施上拥有了独立的备份 —— 无论是意外删除、账户被封还是任一平台发生服务中断，你的数据都能得到保护。

---

**相关指南：**

- [增量备份：使用 RcloneView 将 Google Drive 备份到 Amazon S3](https://rcloneview.com/support/blog/incremental-backup-google-drive-to-amazon-s3)
- [使用 RcloneView 将 Amazon S3 存储桶挂载为本地驱动器](https://rcloneview.com/support/blog/mount-amazon-s3-buckets-as-local-drives-rcloneview)
- [使用 RcloneView 自动化每日云备份](https://rcloneview.com/support/blog/automate-daily-cloud-backups-with-rcloneview)

<CloudSupportGrid />
