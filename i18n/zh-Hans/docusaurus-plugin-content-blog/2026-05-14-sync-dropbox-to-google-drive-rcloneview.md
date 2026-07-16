---
slug: sync-dropbox-to-google-drive-rcloneview
title: "将 Dropbox 同步到 Google Drive — 使用 RcloneView 自动化云备份"
authors:
  - casey
description: "了解如何使用 RcloneView 自动将 Dropbox 同步到 Google Drive。设置具有计划任务、过滤和实时传输监控功能的定期云到云备份作业。"
keywords:
  - sync Dropbox to Google Drive
  - Dropbox Google Drive sync
  - Dropbox to Google Drive backup
  - cloud to cloud sync RcloneView
  - automate Dropbox Google Drive transfer
  - rclone Dropbox Google Drive GUI
  - Dropbox cloud backup solution
  - recurring cloud sync job
  - cross-cloud backup automation
  - RcloneView cloud sync tool
tags:
  - RcloneView
  - dropbox
  - google-drive
  - cloud-to-cloud
  - sync
  - backup
  - automation
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 将 Dropbox 同步到 Google Drive — 使用 RcloneView 自动化云备份

> 让你的 Dropbox 和 Google Drive 自动保持同步——无需脚本、终端，也无需昂贵的第三方同步服务。

许多团队依赖 Dropbox 进行日常文件共享，但明智的云策略意味着在第二个提供商（如 Google Drive）中保留一份冗余副本。无论你是要防止意外删除、为工作区迁移做准备，还是要满足双云备份策略，RcloneView 都能为你提供一个基于计划任务、图形界面驱动的流程，可靠地将 Dropbox 同步到 Google Drive。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 将 Dropbox 和 Google Drive 添加为远程

在安排任何同步作业之前，RcloneView 需要获得对这两个提供商的授权连接。打开应用程序，进入 **Remote（远程）选项卡**，点击 **New Remote（新建远程）**。从提供商列表中选择 **Dropbox**，并完成 OAuth 浏览器登录——无需 API 密钥。对 **Google Drive** 重复相同的流程，使用你的 Google 账户进行身份验证。

现在这两个远程都会出现在远程管理器中，并可以在任何资源管理器面板中访问。你可以在左侧面板浏览 Dropbox 文件夹，在右侧面板浏览 Google Drive 目标位置，这样在构建作业之前就能轻松确定源和目标。

<img src="/support/images/en/blog/new-remote.png" alt="Adding Dropbox and Google Drive remotes in RcloneView" class="img-large img-center" />

对于使用 **Dropbox for Business** 的团队，请在远程设置期间设置 `dropbox_business = true` 参数。对于 **Google 共享云端硬盘**，请启用共享云端硬盘选项，以便在远程资源管理器中访问团队文件夹。

## 创建带计划任务的同步作业

连接好两个远程后，前往 **Home（主页）选项卡**，点击 **Sync（同步）** 打开作业向导。在第 1 步中，选择你的 Dropbox 文件夹作为源，选择 Google Drive 文件夹作为目标。为作业指定一个描述性名称，例如 `dropbox-to-gdrive-backup`。

在第 2 步中，根据你的连接速度调整并发传输数量。启用 **校验和验证（checksum verification）** 可确保逐字节确认文件完整性，而不仅仅是通过文件大小判断。第 3 步允许你按文件类型进行过滤——例如，排除 Dropbox 有时会在同步的团队文件夹中留下的 `.tmp` 或 `.lnk` 文件。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Setting up a scheduled Dropbox to Google Drive sync job in RcloneView" class="img-large img-center" />

第 4 步是实现自动化的关键。使用 **PLUS 许可证**，可以设置类似 cron 的计划任务——例如每天凌晨 2:00——这样新的 Dropbox 内容就会自动镜像到 Google Drive。使用 cron 表达式 `0 2 * * *` 实现每日执行，或使用 `0 2 * * 0` 实现每周日同步。**Simulate schedule（模拟计划）** 按钮可在保存之前预览接下来的几次运行时间。

## 监控实时传输并查看历史记录

作业运行后，应用程序底部的 **Transferring（传输中）选项卡** 会显示实时传输进度：文件数量、传输速度、已传输的总数据量，以及在需要时中途停止的取消按钮。对于将 80 GB 项目档案从 Dropbox 同步到 Google Drive 的创意机构而言，你可以观察每个文件的状态随着传输完成而逐一更新。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Real-time transfer monitoring for Dropbox to Google Drive sync" class="img-large img-center" />

每次运行结束后，**Job History（作业历史）** 视图会记录执行类型（手动或计划任务）、持续时间、传输的总字节数、速度以及最终状态——已完成、出错或已取消。如果某次运行遇到来自 Dropbox 或 Google Drive 的临时 API 速率限制，内置的重试机制（默认：3 次尝试）会自动处理这些临时故障，无需人工干预。

## 使用文件夹比较验证同步结果

首次完整同步后，使用 RcloneView 的 **Folder Compare（文件夹比较）** 工具来验证双方是否一致。从 Home 选项卡启动它，选择你的 Dropbox 源和 Google Drive 目标，然后点击 Compare（比较）。结果会显示仅存在于左侧的文件（尚未同步）、仅存在于右侧的文件（手动添加到 Drive 的文件）、相同文件以及大小不匹配的文件。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder Compare verifying Dropbox and Google Drive are in sync" class="img-large img-center" />

在首次实际同步之前运行 **Dry Run（试运行）**，以准确预览哪些文件将被复制或删除。这在同步一个活跃的 Dropbox 团队文件夹时尤其重要——你需要在任何更改影响到 Google Drive 目标之前确认同步范围。

## 快速上手

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 通过 OAuth 登录添加你的 Dropbox 远程（Remote 选项卡 > New Remote）。
3. 以相同方式添加你的 Google Drive 远程。
4. 创建一个从 Dropbox 指向 Google Drive 的同步作业，并设置你偏好的计划任务。

建立起完善的 Dropbox 到 Google Drive 流程后，你的数据将存在于两个云端——从而防范提供商中断、意外删除以及账单意外等风险。

---

**相关指南：**

- [使用 RcloneView 将 Dropbox 迁移到 Google Drive](https://rcloneview.com/support/blog/migrate-dropbox-to-google-drive-with-rcloneview)
- [管理 Dropbox — 使用 RcloneView 进行云同步和备份](https://rcloneview.com/support/blog/manage-dropbox-cloud-sync-backup-rcloneview)
- [使用 RcloneView 将 Google Drive 同步到 Dropbox](https://rcloneview.com/support/blog/sync-google-drive-to-dropbox-rcloneview)

<CloudSupportGrid />
