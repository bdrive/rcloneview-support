---
slug: job-export-import-portable-workflow-rcloneview
title: "作业导出与导入 — RcloneView 中的可移植同步工作流"
authors:
  - tayson
description: "了解如何在 RcloneView 中导出和导入同步作业，以便在多台设备之间共享工作流、统一团队配置，并在系统迁移后快速恢复。"
keywords:
  - RcloneView job export
  - sync job import
  - portable sync workflow
  - job manager export
  - team sync configuration
  - backup sync jobs
  - migrate RcloneView jobs
  - job portability
tags:
  - feature
  - job-management
  - automation
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 作业导出与导入 — RcloneView 中的可移植同步工作流

> RcloneView 可以将您所有的同步作业导出为一个 JSON 文件，并在任何其他设备上导入 — 让您的工作流真正做到可移植，也让团队配置保持一致。

设置复杂的同步作业需要花费时间：选择正确的源和目标远程、配置过滤规则、设置带宽限制，并为每个作业调整选项。当您升级到新电脑、增加第二台工作站，或迎来新的团队成员时，最不希望做的事就是重复这些工作。RcloneView 的作业导出与导入功能通过将整个作业配置捕获到一个可移植的 JSON 文件中来解决这个问题，该文件可以在任何 RcloneView 安装上加载。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 导出您的同步作业

要导出您的作业，请打开 RcloneView 中的**作业管理器**，在工具栏或右键菜单中找到**导出**选项。RcloneView 会将所有已配置的同步作业 — 包括源/目标路径、过滤规则、rclone 标志以及调度信息 — 导出到一个 JSON 文件中。您可以选择保存该文件的位置。

作为更广泛备份策略的一部分，定期导出作业是一个好习惯。将导出的 JSON 存储在云文件夹中（例如您的 Google Drive 或 Backblaze B2 备份存储桶），这样无论本地设备发生什么情况，您都能始终访问该文件。可以将其视为对您备份配置本身的备份。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Job Manager in RcloneView showing export option" class="img-large img-center" />

## 在新设备上导入作业

在目标设备上，从 [rcloneview.com](https://rcloneview.com/src/download.html) 安装 RcloneView，并设置所需的云远程（导入的作业要正常工作，必须存在相同名称的远程）。然后打开**作业管理器**，使用**导入**功能加载您导出的 JSON 文件。您的所有同步作业会立即出现，随时可以运行。

在电脑迁移之后，这一工作流尤其有价值。导入只需几秒钟，而不必手动重新创建十几个同步作业。同样的流程也适用于团队标准化：团队负责人创建并导出一份标准作业配置，然后将该 JSON 文件分发给所有团队成员，成员们将其导入到各自的 RcloneView 安装中。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Imported jobs visible in RcloneView Job Manager" class="img-large img-center" />

## 团队标准化与灾难恢复

对于管理多个云目标的团队而言，同步作业配置的一致性至关重要。如果每个团队成员都自行手动配置作业，过滤规则或目标路径的差异可能导致文件遗漏或意外覆盖。通过维护一份主作业导出文件，并将其导入到所有团队设备，您可以确保每个人运行的都是完全相同的工作流。

导出/导入功能还可以作为同步配置的轻量级灾难恢复机制。如果需要重新安装 RcloneView 或更换设备，恢复整个工作流只需两步：导入 rclone 远程配置，再导入作业 JSON。RcloneView 的导出/导入功能在免费版中即可使用 — 此功能无需 PLUS 许可证。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Standardized sync jobs shared across team machines in RcloneView" class="img-large img-center" />

## 快速上手

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 在主设备的**作业管理器**中配置您的同步作业。
3. 在作业管理器中使用**导出**将所有作业保存到一个 JSON 文件。
4. 将导出的文件存储在云备份位置以妥善保管。
5. 在新设备上安装 RcloneView，设置匹配的远程名称，然后**导入** JSON 以恢复所有作业。

作业导出与导入让 RcloneView 成为真正可移植的同步平台 — 您在工作流上投入的时间与精力，不再受限于单一设备。

---

**相关指南：**

- [使用 RcloneView 自动执行每日云备份](https://rcloneview.com/support/blog/automate-daily-cloud-backups-with-rcloneview)
- [使用 RcloneView 备份与迁移 Rclone 配置](https://rcloneview.com/support/blog/backup-migrate-rclone-config-rcloneview)
- [RcloneView 中的批量操作](https://rcloneview.com/support/blog/batch-operations-rcloneview)

<CloudSupportGrid />
