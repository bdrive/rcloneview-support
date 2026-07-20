---
slug: sync-koofr-to-amazon-s3-rcloneview
title: "将 Koofr 同步到 Amazon S3 —— 使用 RcloneView 进行云备份"
authors:
  - tayson
description: "使用 RcloneView 将 Koofr 同步到 Amazon S3 —— 借助基于 rclone 构建的可靠图形界面，在欧洲云存储和 AWS S3 之间传输文件。"
keywords:
  - Koofr to Amazon S3 sync
  - Koofr backup to S3
  - cloud sync tool
  - RcloneView Koofr
  - S3 archiving
  - cloud-to-cloud sync
  - AWS backup
  - European cloud to S3
  - Koofr rclone sync
  - GDPR cloud to S3
tags:
  - RcloneView
  - koofr
  - amazon-s3
  - cloud-to-cloud
  - sync
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 将 Koofr 同步到 Amazon S3 —— 使用 RcloneView 进行云备份

> Koofr 的欧洲托管存储与 Amazon S3 的全球持久性各自承担互补的角色 —— RcloneView 可直接在二者之间同步，构建无需占用本地磁盘的跨云备份策略。

Koofr 的欧洲数据中心和符合 GDPR 的基础设施使其成为强大的活跃存储平台，而 Amazon S3 则为归档和分发提供了世界级的持久性和 CDN 集成。在二者之间同步可以构建稳健的两层策略：将工作数据保留在 Koofr 的欧洲数据中心，同时归档到 S3 以实现长期的成本优化。RcloneView 直接在两个远程之间处理同步，无需占用本地磁盘。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 设置两个远程

在 RcloneView 中，通过 **Remote 标签页 > New Remote > Koofr** 添加 Koofr 并输入你的凭据。然后添加 **Amazon S3**：从提供商列表中选择它，并输入你的 Access Key ID、Secret Access Key 和 AWS Region。两个远程都激活后，打开双面板浏览器 —— 一侧是 Koofr，另一侧是你的 S3 存储桶 —— 即可并排查看你的存储内容。

<img src="/support/images/en/blog/new-remote.png" alt="Adding Koofr and Amazon S3 remotes in RcloneView" class="img-large img-center" />

这种直接对比有助于规划：查看 Koofr 中的内容，确认你想要的 S3 存储桶结构，并在启动同步任务前核实文件夹名称。

## 配置同步任务

在 **Job Manager** 中，创建一个从你的 Koofr 文件夹到目标 S3 存储桶路径的同步任务。对于需要将敏感文档从 Koofr 备份到 S3 Standard-IA 以实现经济高效保留的合规团队，可以借助计划任务（PLUS 授权）让同步任务每周运行一次。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Koofr to Amazon S3 sync job in RcloneView" class="img-large img-center" />

RcloneView 的筛选选项可让你将同步限制在特定文件类型 —— 例如，仅同步 `.pdf` 和 `.docx` 文件，同时排除临时文件和缩略图。**Max File Age** 筛选功能可进一步将同步限制在近期修改过的文件上，使增量运行保持快速且专注。

## 监控与验证

初次同步完成后，后续运行只会传输发生变化的内容 —— RcloneView 会比较文件大小和修改日期以识别差异。**Job History** 标签页会显示每次同步的结果，包括传输字节数、文件数量、耗时和状态。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history for Koofr to S3 sync runs in RcloneView" class="img-large img-center" />

对于将 Koofr 作为符合 GDPR 的主存储、将 S3 作为归档层的组织而言，这种同步模式创造了清晰的数据生命周期：数据在 Koofr 中保持活跃，并按计划归档到 S3。**Folder Compare** 功能可在需要时提供某一时间点的验证，确认两个平台是否已保持同步。

## 快速开始

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 添加 **Koofr** 远程（凭据）和 **Amazon S3** 远程（Access Key）。
3. 在 **Job Manager** 中创建一个从 Koofr 到 S3 的同步任务。
4. 启用计划任务（PLUS）以自动执行常规备份。

RcloneView 将双云架构转变为一个受管理的自动化工作流 —— Koofr 用于合规，S3 用于归档，同步则让两者始终保持最新。

---

**相关指南：**

- [管理 Koofr 存储 —— 使用 RcloneView 进行同步与备份](https://rcloneview.com/support/blog/manage-koofr-cloud-sync-backup-rcloneview)
- [Koofr 作为多云中枢 —— 通过 RcloneView 连接 Google Drive、OneDrive、Dropbox](https://rcloneview.com/support/blog/koofr-multi-cloud-hub-google-drive-onedrive-dropbox-rcloneview)
- [使用 RcloneView 将 Dropbox 备份到 AWS S3](https://rcloneview.com/support/blog/backup-dropbox-to-aws-s3-rcloneview)

<CloudSupportGrid />
