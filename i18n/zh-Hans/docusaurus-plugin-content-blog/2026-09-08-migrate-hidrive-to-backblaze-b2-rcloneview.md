---
slug: migrate-hidrive-to-backblaze-b2-rcloneview
title: "将 HiDrive 迁移到 Backblaze B2 — 使用 RcloneView 传输文件"
authors:
  - steve
description: "使用 RcloneView 的校验和验证同步、试运行预览和作业历史跟踪功能，将文件从 HiDrive 迁移到 Backblaze B2。"
keywords:
  - 将 HiDrive 迁移到 Backblaze B2
  - HiDrive Backblaze B2 传输
  - HiDrive 云迁移
  - Backblaze B2 备份工具
  - RcloneView HiDrive
  - 云到云传输
  - 校验和验证迁移
  - 从 HiDrive 到对象存储
  - 从欧洲云到 Backblaze B2
tags:
  - RcloneView
  - hidrive
  - backblaze-b2
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 将 HiDrive 迁移到 Backblaze B2 — 使用 RcloneView 传输文件

> 通过校验和验证传输和事前试运行，将不断增长的 HiDrive 账户迁移到 Backblaze B2 对象存储。

HiDrive 非常适合日常文件访问，但当数据集增长超出个人或商业云套餐的预期范围时，需要更便宜的长期保留或异地对象存储副本的团队，往往会转向 Backblaze B2。RcloneView 在同一窗口中连接这两项服务 — HiDrive 通过 OAuth，Backblaze B2 通过 Application Key — 因此迁移作为一个配置好的作业运行，而不必先把所有内容下载到本地。RcloneView 可在一个窗口中挂载并同步 90+ 家服务商，并支持 Windows、macOS 和 Linux。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 连接 HiDrive 和 Backblaze B2

HiDrive 通过 RcloneView 基于浏览器的 OAuth 登录添加 — 无需输入单独的 API 密钥。Backblaze B2 需要在 Backblaze 账户控制台中生成的 Application Key ID 和 Application Key，直接输入远程设置表单中。当两个远程都出现在 Remote Manager 中后，它们会作为 Explorer 中的独立标签页显示，方便你在正式传输前并排浏览 HiDrive 源和 B2 目标。

<img src="/support/images/en/blog/new-remote.png" alt="Adding HiDrive and Backblaze B2 remotes in RcloneView" class="img-large img-center" />

## 配置迁移作业

使用 Home 标签页中的 Sync 按钮打开 4 步向导。在步骤 1 中，选择 HiDrive 源文件夹和作为目标的 Backblaze B2 存储桶，并选择单向同步，使迁移只写入 B2 而不影响 HiDrive。步骤 2 允许你启用校验和比较，以便按哈希值和大小（而不仅仅是修改时间）匹配文件，这在两个截然不同的存储后端之间迁移时尤为重要。步骤 3 支持按文件类型、最大大小或存放时间进行过滤，如果你只想先迁移一部分内容。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring a HiDrive to Backblaze B2 sync job in RcloneView" class="img-large img-center" />

在正式传输前运行 Dry Run — 它会准确列出将要复制的内容，而不移动任何一个字节，是在错误的文件夹路径演变成大规模意外传输之前发现问题的最安全方法。

## 验证迁移结果

同步完成后，打开 Folder Compare，比较 HiDrive 源和 B2 目标，确认双方的文件数量和大小是否一致。Job History 会记录每次运行传输的总大小、传输速度和文件数量，以便在出现异常时进行核对。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Comparing HiDrive and Backblaze B2 folders after migration in RcloneView" class="img-large img-center" />

## 快速上手

1. **下载 RcloneView**：访问 [rcloneview.com](https://rcloneview.com/src/download.html)。
2. 通过 OAuth 连接你的 HiDrive 账户，并使用 Application Key ID 和 Key 添加 Backblaze B2。
3. 配置启用校验和比较的单向同步作业，然后先运行 Dry Run。
4. 在停用 HiDrive 副本之前，用 Folder Compare 和 Job History 确认结果。

迁移到 Backblaze B2 并不意味着放弃已经在 HiDrive 中建立的文件夹结构和文件组织 — RcloneView 会在传输过程中完整保留这些内容。

---

**相关指南：**

- [管理 HiDrive 存储 — 使用 RcloneView 同步和备份文件](https://rcloneview.com/support/blog/manage-hidrive-cloud-sync-backup-rcloneview)
- [管理 Backblaze B2 存储 — 使用 RcloneView 同步和备份文件](https://rcloneview.com/support/blog/manage-backblaze-b2-cloud-sync-backup-rcloneview)
- [修复 HiDrive 同步错误 — 使用 RcloneView 实现可靠的云备份](https://rcloneview.com/support/blog/fix-hidrive-sync-errors-rcloneview)

<CloudSupportGrid />
