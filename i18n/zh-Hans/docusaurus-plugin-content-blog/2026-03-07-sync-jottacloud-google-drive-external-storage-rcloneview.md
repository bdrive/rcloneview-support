---
slug: sync-jottacloud-google-drive-external-storage-rcloneview
title: "使用 RcloneView 轻松将 Jottacloud 与 Google Drive 或外部存储同步"
authors:
  - tayson
description: "使用 RcloneView，自动且带可视化验证地将您的 Jottacloud 文件与 Google Drive、外部硬盘或其他云保持同步。"
keywords:
  - jottacloud sync
  - jottacloud backup tool
  - jottacloud to google drive
  - jottacloud export
  - jottacloud alternative backup
  - sync jottacloud files
  - jottacloud rclone
  - jottacloud multi-cloud
  - jottacloud external drive
  - jottacloud file transfer
tags:
  - jottacloud
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 使用 RcloneView 轻松将 Jottacloud 与 Google Drive 或外部存储同步

> 喜欢 Jottacloud 的无限存储空间,但又想在别处保留备份?RcloneView 可以自动将您的 Jottacloud 数据同步到 Google Drive、外部硬盘或任何其他云存储。

Jottacloud 是一款广受欢迎的云存储服务,尤其在北欧国家颇受欢迎,以其无限存储套餐和严格的隐私政策著称。但把所有数据都依赖于单一提供商始终存在风险。RcloneView 让您可以将 Jottacloud 与 Google Drive、外部硬盘、NAS 设备或任何其他云存储进行同步,从而获得冗余保障和安心保障。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 为什么要将 Jottacloud 与其他存储同步?

- **冗余保障** — 没有任何提供商能完全免于服务中断、政策变更或关停风险。第二份副本能为您提供保护。
- **跨平台访问** — 与没有 Jottacloud 账号的 Google Workspace 或 Microsoft 365 用户共享文件。
- **本地备份** — 在外部硬盘或 NAS 上保留一份可快速访问的副本。
- **迁移准备** — 如果您日后更换提供商,数据已经存放在其他地方。

## 连接 Jottacloud

1. 打开 RcloneView,点击 **添加远程**。
2. 从提供商列表中选择 **Jottacloud**。
3. 使用您的 Jottacloud 账号凭据进行身份验证。
4. 保存 — 您的 Jottacloud 文件和文件夹现在即可浏览。

<img src="/support/images/en/blog/new-remote.png" alt="Add Jottacloud remote in RcloneView" class="img-large img-center" />

## 浏览与管理

在双栏资源管理器中查看您整个 Jottacloud 库,并与其他存储并排显示:

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Browse Jottacloud alongside other clouds" class="img-large img-center" />

## 同步场景

### Jottacloud → Google Drive

在 Google Drive 中保留一份 Jottacloud 数据的镜像:

1. 创建一个同步任务:Jottacloud → Google Drive 文件夹。
2. 使用[任务调度](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)设置每日执行。
3. 首次同步后,仅会传输发生变化的文件。

### Jottacloud → 外部硬盘

维护一份本地离线备份:

1. 创建一个复制任务:Jottacloud → 外部硬盘路径。
2. 每周运行一次,或在连接硬盘时运行。
3. 使用[文件夹对比](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)来验证完整性。

### Jottacloud → AWS S3

将 Jottacloud 数据归档到经济高效的 S3 存储:

1. 创建一个复制任务:Jottacloud → S3 存储桶。
2. 使用 S3 生命周期规则将较旧的数据分层转移到 Glacier。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Run Jottacloud sync job" class="img-large img-center" />

## 自动化与监控

调度您的同步任务,并在结果出来时收到提醒:

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule Jottacloud sync" class="img-large img-center" />

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Jottacloud sync job history" class="img-large img-center" />

## 快速上手

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. **添加 Jottacloud** 作为远程。
3. **添加您的备份目标**(Google Drive、S3、外部硬盘)。
4. **创建同步或复制任务**并进行调度。
5. 首次运行后,使用文件夹对比进行**验证**。

Jottacloud 是一个出色的主力云存储,而 RcloneView 则确保它永远不会是您唯一的副本。

---

**相关指南:**

- [浏览与管理远程存储](https://rcloneview.com/support/howto/rcloneview-basic/browse-and-manage-remote-storage)
- [对比文件夹内容](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [创建同步任务](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [任务调度](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)
- [实时传输监控](https://rcloneview.com/support/howto/rcloneview-basic/real-time-transfer-monitoring)

<CloudSupportGrid />
