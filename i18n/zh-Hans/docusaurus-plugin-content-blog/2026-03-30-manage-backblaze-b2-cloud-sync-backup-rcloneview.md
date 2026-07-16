---
slug: manage-backblaze-b2-cloud-sync-backup-rcloneview
title: "管理 Backblaze B2 存储 — 使用 RcloneView 同步和备份文件"
authors:
  - tayson
description: "了解如何使用 RcloneView 管理 Backblaze B2 云存储。轻松在 B2 存储桶与其他云服务商之间同步、备份和传输文件。"
keywords:
  - backblaze b2 sync
  - backblaze b2 backup
  - rcloneview backblaze
  - b2 cloud storage manager
  - backblaze b2 file transfer
  - b2 bucket management
  - s3 compatible backup
  - backblaze b2 rclone gui
  - cloud to cloud sync b2
  - b2 lifecycle rules
tags:
  - backblaze-b2
  - Backblaze
  - s3-compatible
  - object-storage
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 管理 Backblaze B2 存储 — 使用 RcloneView 同步和备份文件

> Backblaze B2 以远低于 AWS S3 的成本提供企业级对象存储，而 RcloneView 让管理它变得轻而易举。

对于需要经济实惠、可靠的云存储、又不想应付传统 S3 服务商复杂性的团队和个人来说，Backblaze B2 已成为首选方案。存储费用低至每 GB/月 0.006 美元，出站流量费用为每 GB 0.01 美元（在 Cloudflare 带宽联盟计划下，每天前 10 GB 免费），B2 的价格明显低于大多数竞争对手。RcloneView 为你提供完整的图形界面来管理 B2 存储桶——浏览文件、安排备份、执行同步，以及在不使用命令行的情况下与其他云服务之间传输数据。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 在 RcloneView 中连接 Backblaze B2

在 RcloneView 中设置 Backblaze B2 只需不到一分钟。打开远程管理器，选择 **Backblaze B2** 作为服务商，然后输入你的 Application Key ID 和 Application Key。你可以使用主密钥，也可以使用仅限于单个存储桶的应用专用密钥。强烈建议在生产环境的工作流中使用应用专用密钥，因为它遵循最小权限原则——即使密钥泄露，也只有一个存储桶会受到影响。

连接成功后，RcloneView 会在双栏浏览器中列出所有可访问的存储桶。你可以浏览目录、预览文件，并查看文件大小、修改时间以及 B2 在服务端计算的 SHA-1 校验和等元数据。

<img src="/support/images/en/blog/new-remote.png" alt="Adding a Backblaze B2 remote in RcloneView Remote Manager" class="img-large img-center" />

## 使用 B2 同步和传输文件

RcloneView 支持在 Backblaze B2 与任何其他已配置的远程之间执行**同步**、**复制**和**移动**操作——包括本地磁盘、Google Drive、Dropbox、AWS S3 和 Wasabi。双栏浏览器让你可以直接拖放文件，而任务系统会自动处理排队与重试逻辑。

对于大规模迁移，B2 通过 Cloudflare 或 Fastly CDN 合作提供的免费出站流量，意味着你可以将数据移出 B2 而不必担心带宽费用飙升。RcloneView 内置的带宽限速和多线程传输功能，让你可以在需要速度时充分利用连接带宽，或在工作时间内降低使用量。

在同步文件夹时，RcloneView 默认会比对校验和。B2 为每个文件存储 SHA-1 哈希值，RcloneView 利用这些哈希值跳过未更改的文件——从而节省时间和 API 调用次数。这一点尤为重要，因为 B2 每 10,000 次 Class B（下载）事务收取 0.004 美元。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Transferring files between Backblaze B2 and another cloud in RcloneView" class="img-large img-center" />

## 安排自动化备份到 B2

B2 最强大的用途之一就是作为备份目标。RcloneView 的任务调度器允许你定义定期备份任务——每天、每周，或按自定义 cron 计划执行。将本地文件夹或另一个云端远程设置为源，将 B2 设置为目标，剩下的交给调度器处理即可。

B2 的生命周期规则可以很好地配合这一工作流程。你可以配置存储桶，在一段时间后自动隐藏文件，或永久删除旧版本，从而使存储成本保持可预测。RcloneView 的任务历史面板为每次传输提供清晰的审计记录，包括文件数量、传输字节数、错误信息和耗时。

对于需要满足合规要求的团队，将 RcloneView 的定时同步与 B2 的对象锁定（Object Lock）功能结合使用，可以提供在保留期内无法修改或删除的不可变备份。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling an automated backup job to Backblaze B2" class="img-large img-center" />

## 将 B2 挂载为本地磁盘

RcloneView 的挂载功能让你可以将 B2 存储桶映射为 Windows 上的本地磁盘符，或 macOS 和 Linux 上的挂载点。这对于需要本地文件访问的应用程序非常有用——例如媒体播放器、照片编辑器，或处理目录中文件的脚本。VFS 缓存层负责处理预读缓冲，因此即使在普通的网络连接下，顺序读取也能保持良好性能。

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="Mounting a Backblaze B2 bucket as a local drive in RcloneView" class="img-large img-center" />

## 开始使用

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 在你的 Backblaze B2 控制台中生成 Application Key，并在 RcloneView 中将其添加为新的远程。
3. 在双栏浏览器中浏览你的存储桶，拖动文件进行同步或传输。
4. 创建一个定时任务，实现每晚自动备份到 B2。

Backblaze B2 提供了让云备份在大规模场景下依然经济实惠的存储经济性，而 RcloneView 则消除了命令行的门槛，让你的整个团队都能轻松管理它。

---

**相关指南：**

- [使用 RcloneView 将 Backblaze B2 迁移到 AWS S3](https://rcloneview.com/support/blog/migrate-backblaze-b2-to-aws-s3-rcloneview)
- [使用 RcloneView 将 Google Drive 同步到 Backblaze B2](https://rcloneview.com/support/blog/sync-google-drive-to-backblaze-b2-rcloneview)
- [将 Dropbox 备份到 Backblaze B2 — 使用 RcloneView 实现经济实惠的存储](https://rcloneview.com/support/blog/backup-dropbox-to-backblaze-b2-affordable-storage-rcloneview)

<CloudSupportGrid />
