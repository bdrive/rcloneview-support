---
slug: sync-hidrive-to-google-drive-rcloneview
title: "将 HiDrive 同步到 Google Drive — 使用 RcloneView 进行云备份"
authors:
  - tayson
description: "使用 RcloneView 将您的 Strato HiDrive 存储同步到 Google Drive。自动执行云备份、在服务商之间直接传输文件，并保持两个账户同步。"
keywords:
  - sync HiDrive to Google Drive
  - HiDrive Google Drive sync RcloneView
  - Strato HiDrive backup to Google Drive
  - HiDrive cloud migration
  - move files HiDrive Google Drive
  - HiDrive sync tool GUI
  - Google Drive backup from HiDrive
  - RcloneView HiDrive sync
  - HiDrive file transfer tool
  - cloud to cloud sync HiDrive
tags:
  - RcloneView
  - hidrive
  - google-drive
  - cloud-to-cloud
  - sync
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 将 HiDrive 同步到 Google Drive — 使用 RcloneView 进行云备份

> RcloneView 可自动保持您的 Strato HiDrive 与 Google Drive 同步 —— 通过计划任务和完整的传输监控实现直接的云到云传输。

Strato HiDrive 在德语国家广泛用于安全云存储，并具有强大的 GDPR 合规性。同时使用 HiDrive 和 Google Workspace 的团队通常需要在这两个平台之间同步内容，从而保持项目文件在两种环境中都可访问。RcloneView 可可靠地处理此同步任务，连接到两个服务商，并按您定义的任意计划运行自动化传输。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 在 RcloneView 中连接 HiDrive 和 Google Drive

HiDrive 和 Google Drive 在 RcloneView 中均使用基于 OAuth 的身份验证。转到“远程”选项卡 > “新建远程”：

- **HiDrive：** 选择 HiDrive，并使用您的 Strato HiDrive 凭据完成 OAuth 登录
- **Google Drive：** 选择 Google Drive，并完成基于浏览器的 OAuth 身份验证

RcloneView 会安全地存储令牌，并在令牌过期时自动刷新。在配置同步之前，可在双面板资源管理器中打开两个远程，浏览各自现有的内容。

<img src="/support/images/en/blog/new-remote.png" alt="Adding HiDrive and Google Drive remotes in RcloneView" class="img-large img-center" />

## 配置从 HiDrive 到 Google Drive 的同步任务

在 RcloneView 的向导中创建一个同步任务，将 HiDrive 设为源，将某个 Google Drive 文件夹设为目标。对于将客户交付物存储在 HiDrive、并通过 Google Workspace 共享的咨询公司来说，每日同步任务可确保 Google Drive 副本在每个工作日结束后都保持最新。

在高级设置中，将并发传输数设置为与您的带宽相匹配，如果跨账户的数据完整性至关重要，可启用 **校验和（checksum）** 验证。预定义的过滤选项可以将特定文件类型（例如 HiDrive 缩略图缓存或临时文件）从同步中排除。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring HiDrive to Google Drive sync in RcloneView" class="img-large img-center" />

## 计划自动同步（PLUS）

拥有 PLUS 许可证后，可以设置从 HiDrive 到 Google Drive 的同步任务自动运行的计划。一种常见设置是：每天晚上 7 点将 HiDrive 同步到 Google Drive，以捕获当天的工作成果。在启用之前，可使用 **模拟计划（Simulate schedule）** 功能验证您的 cron 表达式是否会产生预期的运行时间。

“启动时自动开始计划任务”选项可确保计划任务在机器重启后恢复运行 —— 这对于在共享工作站上运行的同步任务尤为重要。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling HiDrive to Google Drive sync in RcloneView" class="img-large img-center" />

## 监控同步状态和历史记录

RcloneView 的“传输”选项卡会显示实时同步进度。每次同步完成后，“任务历史”会记录本次运行情况：已传输的文件、移动的字节数、速度和用时。如果 Google Drive 的 API 在大型同步过程中对请求进行了限流，日志会显示重试事件，帮助您为未来的任务调整并发传输设置。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history for HiDrive to Google Drive sync in RcloneView" class="img-large img-center" />

## 快速上手

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 在“远程”选项卡 > “新建远程”中添加 HiDrive 和 Google Drive 作为 OAuth 远程。
3. 创建一个从 HiDrive 到您的 Google Drive 文件夹的同步或复制任务。
4. 使用 PLUS 许可证计划自动运行，并在“任务历史”中监控进度。

借助 RcloneView 的自动同步引擎，保持 HiDrive 与 Google Drive 同步非常简单 —— 数据直接在云端移动，无需任何手动操作。

---

**相关指南：**

- [管理 HiDrive 存储 — 使用 RcloneView 同步和备份文件](https://rcloneview.com/support/blog/manage-hidrive-cloud-sync-backup-rcloneview)
- [管理 Google Drive 存储 — 使用 RcloneView 同步和备份文件](https://rcloneview.com/support/blog/manage-google-drive-cloud-sync-backup-rcloneview)
- [使用 RcloneView 将 HiDrive 同步到 OneDrive](https://rcloneview.com/support/blog/sync-hidrive-to-onedrive-rcloneview)

<CloudSupportGrid />
