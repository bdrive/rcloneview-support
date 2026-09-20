---
slug: migrate-idrive-e2-to-backblaze-b2-rcloneview
title: "将 IDrive e2 迁移到 Backblaze B2 — 使用 RcloneView 传输文件"
authors:
  - steve
description: "使用 RcloneView 的云到云传输工具、试运行预览和作业历史,将存储桶从 IDrive e2 迁移到 Backblaze B2。"
keywords:
  - migrate idrive e2 to backblaze b2
  - idrive e2 to backblaze b2 transfer
  - s3 compatible storage migration
  - cloud to cloud object storage transfer
  - RcloneView migration guide
  - backblaze b2 bucket migration
  - idrive e2 rcloneview
  - object storage provider switch
tags:
  - RcloneView
  - idrive-e2
  - backblaze-b2
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 将 IDrive e2 迁移到 Backblaze B2 — 使用 RcloneView 传输文件

> 无需先在本地暂存文件,即可在两个兼容 S3 的提供商之间迁移对象存储桶。

切换兼容 S3 的对象存储提供商通常意味着在迁移任何一个文件之前,先要梳理访问密钥、端点和存储桶结构。RcloneView 将 IDrive e2 和 Backblaze B2 都作为原生远程连接,因此两者之间的迁移是一次直接的云到云传输,而不是先下载再上传的两步流程。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 连接两个远程

IDrive e2 和 Backblaze B2 都通过 RcloneView 的 S3 兼容远程设置进行配置,各自需要一个访问密钥、密钥和端点。对于 Backblaze B2,RcloneView 还支持其原生凭据输入方式,使用 Application Key ID 和 Application Key,一些团队更喜欢这种方式而非 S3 兼容路径。两个远程出现在 Remote Manager 中后,使用 RcloneView 的水平或垂直分屏布局并排打开两个文件浏览器面板,每个远程各占一个。

<img src="/support/images/en/blog/new-remote.png" alt="RcloneView remote manager with IDrive e2 and Backblaze B2 remotes configured" class="img-large img-center" />

同时查看两个存储桶,可以在提交传输之前浏览双方的文件夹结构,及早发现命名不一致或意外的嵌套文件夹。

## 以同步任务的形式执行传输

与其手动拖动大型存储桶,不如通过 4 步向导设置一个同步任务:选择 IDrive e2 作为源、Backblaze B2 作为目标,并选择单向同步,这样只有目标会被修改以匹配源——IDrive e2 上的内容不会发生任何变化。在第 2 步中,RcloneView 可在一个窗口内挂载并同步 90 多个提供商,你可以调整文件传输数量并启用校验和比较,以便按哈希值和大小而不仅仅是修改时间来验证文件,这在两个不同存储后端之间迁移时尤为重要。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="RcloneView sync job configured between two S3-compatible object storage remotes" class="img-large img-center" />

在运行真正的传输之前,先使用试运行预览将要复制哪些文件,并确认不会意外删除或跳过任何内容。

## 验证迁移结果

同步完成后,作业历史会显示该次运行的总传输大小、传输速度和文件数量,方便你与源存储桶的总量进行核对。为了进一步检查,RcloneView 的文件夹比较工具可以在迁移后对两个存储桶进行并排比较,标记出大小不同或仅存在于一侧的文件。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="RcloneView job history showing a completed cloud-to-cloud migration" class="img-large img-center" />

## 快速开始

1. **从 [rcloneview.com](https://rcloneview.com/src/download.html) 下载 RcloneView**
2. 使用访问密钥、密钥和端点添加你的 IDrive e2 远程。
3. 使用 S3 兼容方式或原生凭据添加你的 Backblaze B2 远程。
4. 配置单向同步任务,先运行试运行,然后执行并通过作业历史进行验证。

一次干净的存储桶迁移,关键在于迁移前后都要进行验证——RcloneView 的试运行和比较工具让这两个步骤成为同一工作流的一部分。

---

**相关指南:**

- [管理 IDrive e2 存储 — 使用 RcloneView 同步和备份文件](https://rcloneview.com/support/blog/manage-idrive-e2-cloud-sync-backup-rcloneview)
- [管理 Backblaze B2 存储 — 使用 RcloneView 同步和备份文件](https://rcloneview.com/support/blog/manage-backblaze-b2-cloud-sync-backup-rcloneview)
- [Wasabi 与 Backblaze B2 与 IDrive e2 — 对象存储对比](https://rcloneview.com/support/blog/wasabi-vs-backblaze-b2-vs-idrive-e2-comparison-rcloneview)

<CloudSupportGrid />
