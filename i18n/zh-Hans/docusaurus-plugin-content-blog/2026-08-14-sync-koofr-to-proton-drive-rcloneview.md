---
slug: sync-koofr-to-proton-drive-rcloneview
title: "将 Koofr 同步到 Proton Drive — 使用 RcloneView 进行云备份"
authors:
  - alex
description: "了解如何使用 RcloneView 将文件从 Koofr 同步到 Proton Drive,这是一款跨平台图形界面工具,可让两个云存储保持同步备份。"
keywords:
  - 将 Koofr 同步到 Proton Drive
  - Koofr Proton Drive 备份
  - RcloneView Koofr
  - RcloneView Proton Drive
  - 云到云同步
  - Koofr 备份
  - Proton Drive 同步
  - 加密云备份
  - 多云同步工具
tags:
  - RcloneView
  - koofr
  - proton-drive
  - cloud-to-cloud
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 将 Koofr 同步到 Proton Drive — 使用 RcloneView 进行云备份

> 无需先下载到本地磁盘,即可在 Proton Drive 上保留 Koofr 文件的常驻备份。

Koofr 是一项欧洲云存储服务,还能聚合其他账户;而 Proton Drive 则提供由 Proton Mail 团队打造的端到端加密存储。有些用户希望两者兼得 — 用 Koofr 获得统一视图,用 Proton Drive 获得隐私保障 — RcloneView 让你可以并排连接两者,并在云与云之间直接同步,无需经过本地磁盘中转。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 将 Koofr 与 Proton Drive 添加为远程

在 Remote Manager 中使用账户凭据将 Koofr 添加为远程,然后对 Proton Drive 重复相同流程,后者通过你的 Proton 邮箱、密码以及可选的双重验证码进行身份验证。两个远程都会在资源管理器中显示为独立标签页,因此在设置传输之前,你可以在一个面板中打开 Koofr,在另一个面板中打开 Proton Drive 进行直接对比。

<img src="/support/images/en/blog/new-remote.png" alt="在 RcloneView 中将 Koofr 和 Proton Drive 添加为远程" class="img-large img-center" />

即使是 FREE 许可证,也可以对 S3、Azure 或 Backblaze B2 进行完整的读写连接,因此 Koofr 到 Proton Drive 的同步可以与你已经运行的任何对象存储备份并存,全部都在同一个窗口中完成。

## 设置单向同步

从 Home 标签页打开同步向导,选择 Koofr 作为源,Proton Drive 作为目标,选择 "Modifying destination only" 以实现绝不改动 Koofr 原始数据的单向备份。在高级设置中启用校验和比较,让文件通过哈希值和大小进行匹配,而不仅仅依据修改时间 — 当 Koofr 与 Proton Drive 报告的时间戳不同时,这一点尤为重要。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="配置从 Koofr 到 Proton Drive 的单向同步" class="img-large img-center" />

在正式执行之前,先使用 Dry Run 精确查看哪些文件将被复制;如果只想镜像特定文件夹而非整个 Koofr 账户,可按文件类型、最大大小或文件夹深度应用过滤条件。

## 安排并追踪备份

将配置保存为 Job Manager 中的任务后,PLUS 许可证用户可以关联 crontab 格式的计划,使 Koofr 到 Proton Drive 的同步按设定周期自动运行,并在提交前预览即将到来的运行时间。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="为 Koofr 到 Proton Drive 的同步任务安排定期计划" class="img-large img-center" />

每次执行都会记录在 Job History 中,包括耗时、传输速度、文件数量和传输总大小,为你提供确认备份是否顺利运行、或找出需要重试的失败记录的依据。

## 开始使用

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 在 Remote Manager 中添加 Koofr 和 Proton Drive 作为远程。
3. 创建一个从 Koofr 到 Proton Drive 的单向同步任务,并先运行一次 Dry Run。
4. 保存任务;如果你使用 PLUS 版本,可关联计划以实现省心的定期备份。

配置完成后,每次运行都会将你的 Koofr 文件镜像到 Proton Drive,让你无需离开 RcloneView 就能获得一份加密副本。

---

**相关指南:**

- [使用 RcloneView 管理 Proton Drive 存储 — 文件同步与备份](https://rcloneview.com/support/blog/manage-proton-drive-cloud-sync-rcloneview)
- [使用 RcloneView 管理 Koofr 存储 — 文件同步与备份](https://rcloneview.com/support/blog/manage-koofr-cloud-sync-backup-rcloneview)
- [将 Proton Drive 迁移到 Backblaze B2 — 使用 RcloneView 传输文件](https://rcloneview.com/support/blog/migrate-proton-drive-to-backblaze-b2-rcloneview)

<CloudSupportGrid />
