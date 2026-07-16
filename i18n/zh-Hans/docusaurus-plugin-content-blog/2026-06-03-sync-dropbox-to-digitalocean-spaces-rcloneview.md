---
slug: sync-dropbox-to-digitalocean-spaces-rcloneview
title: "将 Dropbox 同步到 DigitalOcean Spaces — 使用 RcloneView 进行云备份"
authors:
  - morgan
description: "了解如何使用 RcloneView 将 Dropbox 文件同步并备份到 DigitalOcean Spaces。无需 CLI 即可设置自动化的云到云传输。"
keywords:
  - sync Dropbox to DigitalOcean Spaces
  - Dropbox to DigitalOcean backup
  - RcloneView Dropbox DigitalOcean
  - cloud-to-cloud sync
  - DigitalOcean Spaces backup
  - Dropbox backup object storage
  - cloud sync GUI
  - RcloneView S3 sync
  - automated cloud backup
  - DigitalOcean Spaces rclone
tags:
  - dropbox
  - digitalocean-spaces
  - cloud-to-cloud
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 将 Dropbox 同步到 DigitalOcean Spaces — 使用 RcloneView 进行云备份

> 自动将您的 Dropbox 文件备份到 DigitalOcean Spaces 对象存储 — 无需任何 CLI 命令。

Dropbox 是团队每天共享文件的天然协作工具。DigitalOcean Spaces 提供兼容 S3 的对象存储，专为希望将可扩展、经济实惠的存储与其基础设施集成的开发者而打造。将两者与 RcloneView 搭配使用，可以为您带来自动化的异地备份流程：文件保留在 Dropbox 中用于活跃协作，而 Spaces 则保存持久的备份副本。RcloneView 以可视化方式处理整个云到云传输过程 — 无需终端。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 连接 Dropbox 和 DigitalOcean Spaces

首先在 RcloneView 中将两个服务都添加为远程。对于 Dropbox，进入 **Remote tab > New Remote**，选择 **Dropbox**，然后通过浏览器中的 OAuth 流程完成 RcloneView 的授权。无需复制任何 API 密钥 — 打开的浏览器窗口会自动处理身份验证，完成后返回 RcloneView。

<img src="/support/images/en/blog/new-remote.png" alt="Adding Dropbox and DigitalOcean Spaces remotes in RcloneView" class="img-large img-center" />

对于 DigitalOcean Spaces，创建第二个新远程，选择 **S3**，并选择 **DigitalOcean** 作为提供商。您需要从 DigitalOcean 控制面板（位于 API > Spaces Keys 下）获取 **Access Key** 和 **Secret Key**，以及您的 Spaces 区域对应的**区域端点** — 例如纽约区域为 `nyc3.digitaloceanspaces.com`。两个远程都保存完成后，它们会在 RcloneView 文件浏览器中显示为可浏览的标签页。

## 配置同步任务

在两个远程都已连接的情况下，点击 **Home tab** 中的 **Sync** 以打开 4 步同步向导。在第 1 步中，将您的 Dropbox 文件夹设置为**源**，将 DigitalOcean Spaces 存储桶（或其中的子目录）设置为**目标**。为任务起一个具有描述性的名称 — `dropbox-spaces-backup` 就很合适 — 并选择**单向同步**，以使目标始终忠实地复制源内容。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-to-cloud sync job from Dropbox to DigitalOcean Spaces in RcloneView" class="img-large img-center" />

在第 2 步中，将并发文件传输数设置为与您的连接能力相匹配。对于拥有数千个小型素材文件分散在众多 Dropbox 文件夹中的设计机构而言，提高此数值可以明显加快首次全量同步的速度。在第 3 步中，添加过滤规则以排除任何您不希望出现在 Spaces 中的内容 — 例如 `.DS_Store` 文件、Dropbox Paper 文档，或任何您仅用于临时草稿的文件夹。

在首次运行任务之前，点击 **Dry Run** 以准确查看将要传输或删除的文件。这可以在任何数据移动之前，确认您的过滤规则按预期工作。

## 监控活动传输

点击 **Run Job** 后，RcloneView 底部的 **Transferring** 标签页会显示实时进度：文件数量、传输速度和已传输的总字节数。对于大型的首次同步 — 例如一家内容工作室要从完整的 Dropbox 账户中迁移 80,000 个文件 — 此视图可以让您轻松估算任务所需的时间，并及时发现早期错误。您可以随时取消正在运行的任务，重试设置（可在第 2 步中配置）会自动处理短暂的网络故障。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Live transfer monitoring of Dropbox to DigitalOcean Spaces in RcloneView" class="img-large img-center" />

## 安排自动备份（PLUS 许可证）

如需实现真正的免维护备份流程，**PLUS 许可证**用户可以在同步向导的第 4 步中添加 crontab 风格的计划任务。可以设置任务每晚运行、每隔几小时运行，或在每周的特定日期运行。保存之前点击 **Simulate Schedule**，即可预览接下来的多次执行时间，确认时间设置无误。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a recurring Dropbox to DigitalOcean Spaces backup in RcloneView" class="img-large img-center" />

设置计划后，RcloneView 会在后台运行任务，并在完成时发送桌面通知。**Job History** 视图会记录每一次执行 — 开始时间、耗时、文件数量、总大小和最终状态 — 因此您始终可以清楚地了解 Dropbox 备份上一次运行的时间以及是否成功。

## 开始使用

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 通过 OAuth 浏览器登录流程添加 **Dropbox** 作为远程。
3. 使用您的 Access Key、Secret Key 和区域端点，将 **DigitalOcean Spaces** 添加为 S3 远程。
4. 打开同步向导，将 Dropbox 设置为源、Spaces 设置为目标，然后点击 **Run Job**。

完成此设置后，您的 Dropbox 内容将持续镜像到 DigitalOcean Spaces — 为您提供一个持久、自动维护的异地备份，无需持续的手动操作。

---

**相关指南：**

- [管理 Dropbox — 使用 RcloneView 进行云同步和备份](https://rcloneview.com/support/blog/manage-dropbox-cloud-sync-backup-rcloneview)
- [管理 DigitalOcean Spaces — 使用 RcloneView 同步和备份文件](https://rcloneview.com/support/blog/manage-digitalocean-spaces-cloud-sync-backup-rcloneview)
- [将 Dropbox 备份到 Backblaze B2 — 使用 RcloneView 实现经济实惠的云存储](https://rcloneview.com/support/blog/backup-dropbox-to-backblaze-b2-affordable-storage-rcloneview)

<CloudSupportGrid />
