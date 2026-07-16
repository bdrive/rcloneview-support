---
slug: backup-dropbox-to-aws-s3-rcloneview
title: "如何将 Dropbox 备份到 AWS S3 —— 使用 RcloneView 实现自动化云到云备份"
authors:
  - tayson
description: "通过将 Dropbox 文件备份到 AWS S3 来保护你的数据。使用 RcloneView 设置带有计划任务和校验功能的自动化云到云备份。"
keywords:
  - backup dropbox to s3
  - dropbox aws s3 sync
  - dropbox cloud backup
  - dropbox to s3 transfer
  - cloud to cloud backup dropbox
  - dropbox backup solution
  - dropbox data protection
  - sync dropbox aws
  - automated dropbox backup
  - dropbox migration s3
tags:
  - RcloneView
  - dropbox
  - aws-s3
  - backup
  - cloud-storage
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 如何将 Dropbox 备份到 AWS S3 —— 使用 RcloneView 实现自动化云到云备份

> Dropbox 非常适合协作，但如果文件被意外删除、勒索软件加密了你的共享文件夹,或者 Dropbox 本身出现故障怎么办？将数据云到云备份到 AWS S3,可以让你免受这些问题的困扰。

仅依赖单一云服务商来存放重要文件是有风险的。Dropbox 的版本历史记录有助于应对意外更改,但无法防范账户被盗、超出保留期限的永久删除,或服务中断。将文件备份到 AWS S3,可以让你拥有一份独立、持久的副本。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 为什么要将 Dropbox 备份到 S3?

- **独立副本** —— 如果 Dropbox 宕机或你的账户被盗,S3 上仍然保留着你的文件。
- **99.999999999% 的持久性** —— S3 的十一个 9 持久性意味着你的数据极其安全。
- **经济高效的归档** —— 对于不常访问的文件,S3 Glacier 的价格低至每 TB 每月 $4。
- **合规性** —— 部分行业要求在独立基础设施上保存备份。
- **勒索软件防护** —— S3 版本控制和对象锁定可防止文件被覆盖。

## 设置步骤

### 1) 连接 Dropbox 和 AWS S3

在 RcloneView 中将两者都添加为远程:

<img src="/support/images/en/blog/new-remote.png" alt="Add Dropbox and S3 remotes" class="img-large img-center" />

对于 S3,你需要提供 Access Key ID、Secret Access Key 以及首选区域。

### 2) 同时浏览两侧

在双栏浏览器中,左侧打开 Dropbox,右侧打开 S3:

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Browse Dropbox and S3 side by side" class="img-large img-center" />

### 3) 创建复制任务

使用 **Copy(复制)** 功能将 Dropbox 备份到 S3 存储桶。复制操作只添加文件而不删除文件 —— 对备份来说非常安全:

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Run Dropbox to S3 backup" class="img-large img-center" />

### 4) 计划每晚备份

设置该任务每晚运行,以保持 S3 备份为最新状态:

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule nightly Dropbox backup" class="img-large img-center" />

### 5) 校验完整性

使用文件夹比对功能确认所有文件都已备份:

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify Dropbox backup on S3" class="img-large img-center" />

## 选择合适的 S3 存储类别

AWS S3 提供多种不同价位的存储类别:

| 存储类别 | 最适用场景 | 价格(每 TB/月) |
|---------------|----------|------------------|
| S3 Standard | 频繁访问的备份 | $23 |
| S3 Standard-IA | 每月访问一次的备份 | $12.50 |
| S3 Glacier Instant | 很少访问、需即时取回 | $4 |
| S3 Glacier Deep Archive | 合规性场景,每年访问一次 | $1 |

对于大多数 Dropbox 备份场景来说,**S3 Standard-IA**(低频访问)是最佳选择 —— 你不需要每天访问备份,但在需要时又希望能快速恢复。

## 使用过滤器进行选择性备份

你可能并不需要备份所有内容。可以使用 rclone 的过滤规则:

- **仅包含文档**: `--include "*.pdf" --include "*.docx" --include "*.xlsx"`
- **排除临时文件**: `--exclude "*.tmp" --exclude ".dropbox*"`
- **跳过大型媒体文件**: `--max-size 500M`

详情请参阅 [Rclone 过滤规则详解](https://rcloneview.com/support/blog/rclone-filter-rules-include-exclude-explained-rcloneview)。

## 批量任务实现完整的备份工作流

借助 v1.3 版本的批量任务功能,可以将多个操作串联起来:

1. 将 Dropbox 复制到 S3。
2. 比对 Dropbox 与 S3。
3. 完成后发送 Slack 通知。

以上步骤可全部整合为一个自动化流程。

## 从备份中恢复

如果需要将文件从 S3 恢复回 Dropbox:

1. 左侧打开 S3,右侧打开 Dropbox。
2. 选择要恢复的文件或文件夹。
3. 运行一个从 S3 到 Dropbox 的复制任务。

流程与备份相同,只是方向相反。

## 快速上手

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. **添加 Dropbox 和 AWS S3** 作为远程。
3. **运行一个复制任务**,将 Dropbox 复制到 S3。
4. **设置每晚自动备份**。
5. **使用文件夹比对功能进行校验**。

你的 Dropbox 文件值得拥有不止一个家。

---

**相关指南:**

- [创建同步任务](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [任务计划](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)
- [比对文件夹内容](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [Rclone 过滤规则](https://rcloneview.com/support/blog/rclone-filter-rules-include-exclude-explained-rcloneview)

<CloudSupportGrid />
