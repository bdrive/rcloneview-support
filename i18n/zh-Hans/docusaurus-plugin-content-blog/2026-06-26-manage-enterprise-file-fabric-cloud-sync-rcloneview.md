---
slug: manage-enterprise-file-fabric-cloud-sync-rcloneview
title: "管理 Enterprise File Fabric 存储 —— 使用 RcloneView 同步和备份文件"
authors:
  - morgan
description: "使用 RcloneView 连接、同步和备份 Enterprise File Fabric 存储 —— 这是一款基于 rclone 打造的跨平台多云 GUI，支持 Windows、macOS 和 Linux。"
keywords:
  - Enterprise File Fabric RcloneView
  - 同步 Enterprise File Fabric
  - Enterprise File Fabric 云同步
  - Enterprise File Fabric 备份
  - 管理 Enterprise File Fabric 文件
  - 企业云存储管理
  - RcloneView 企业存储
  - Enterprise File Fabric GUI 客户端
tags:
  - enterprise
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 管理 Enterprise File Fabric 存储 —— 使用 RcloneView 同步和备份文件

> RcloneView 可直接连接 Enterprise File Fabric，让您无需编写任何 CLI 命令，即可浏览、同步和备份组织的托管文件存储。

Enterprise File Fabric 是一个云内容服务平台，适用于需要将分散的存储后端整合到统一治理层下的组织。无论您的团队在其中存储项目文件、合规记录还是共享数字资产，保持内容的同步与备份都需要一款可靠的跨云工具。RcloneView —— 一款基于 rclone 构建的 Flutter GUI 客户端 —— 可在 Windows、macOS 和 Linux 上通过统一界面管理 Enterprise File Fabric 以及其他 90 多个云服务提供商。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 在 RcloneView 中连接 Enterprise File Fabric

通过 RcloneView 内置的新建远程向导，只需几分钟即可将 Enterprise File Fabric 添加为远程。打开 **远程 (Remote)** 标签页，点击 **新建远程 (New Remote)**，然后从提供商列表中选择 Enterprise File Fabric。输入您的端点 URL 和 API 令牌 —— 与组织用于 API 访问的凭据相同 —— 然后保存。该远程会立即出现在资源管理器面板中，您可以在其中浏览文件夹、查看文件数量和大小，并直接从面包屑栏复制路径。

<img src="/support/images/en/blog/new-remote.png" alt="Adding a new Enterprise File Fabric remote in RcloneView" class="img-large img-center" />

与仅支持挂载的工具不同，RcloneView 在免费许可证下也支持同步和比较文件夹，因此您可以超越简单的驱动器映射，在所有云环境中主动管理您的 Enterprise File Fabric 内容。

## 将 Enterprise File Fabric 同步到其他云目标

一个常见的 Enterprise File Fabric 使用场景是将托管内容复制到辅助云目标，以用于灾难恢复或长期归档。在 RcloneView 的同步向导中，将 Enterprise File Fabric 设置为源，并选择任意目标 —— Amazon S3、Backblaze B2、Google Drive，或本地部署的 SFTP 服务器。该 4 步向导将引导您完成传输并发数、校验和验证以及文件时效过滤等设置，确保只传输您所需要的内容。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a sync job from Enterprise File Fabric in RcloneView" class="img-large img-center" />

在正式传输前，务必先执行一次 **试运行 (Dry Run)**。RcloneView 会列出它将要复制或跳过的确切文件，让您在移动任何一个字节之前先完善过滤规则。对于 1:N 复制 —— 即同时将同一个 Enterprise File Fabric 文件夹镜像到多个目标 —— 只需在步骤 1 中添加更多目标路径即可。此功能在免费许可证下可用，且目标数量没有上限。

## 安排自动化备份

使用 Enterprise File Fabric 的组织通常需要在无需人工干预的情况下运行每晚或每周的备份窗口。**PLUS 许可证** 可在 RcloneView 内部直接解锁 crontab 风格的调度功能。配置分钟、小时、星期几和月份字段，即可按任意节奏触发您的 Enterprise File Fabric 同步任务。内置的 **模拟调度 (Simulate schedule)** 工具可预览接下来的几次执行时间，以便您在正式启用前确认时间安排。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling an Enterprise File Fabric backup job in RcloneView" class="img-large img-center" />

即使应用最小化运行在系统托盘中，任务完成通知也能让运维团队及时了解情况。

## 监控传输历史与审计记录

每一次 Enterprise File Fabric 同步任务都会记录在 RcloneView 的 **任务历史 (Job History)** 视图中，包括开始时间、持续时长、传输速度、文件数量和最终状态。您可以按日期范围或结果筛选历史记录，以验证 SLA 合规性并审计数据移动情况 —— 这对于在其托管文件存储平台上有保留或治理要求的组织非常实用。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history log for Enterprise File Fabric transfers in RcloneView" class="img-large img-center" />

RcloneView 内置的 rclone 终端标签页还允许高级用户在不离开 GUI 的情况下，针对其 Enterprise File Fabric 远程运行自定义 `rclone` 命令 —— 这对于临时查询或一次性操作非常有用。

## 快速上手

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 打开 **远程 (Remote)** 标签页并点击 **新建远程 (New Remote)**，然后选择 Enterprise File Fabric。
3. 输入您的 Enterprise File Fabric 端点 URL 和 API 令牌，然后保存该远程。
4. 创建一个同步任务，设置您首选的备份目标，并先执行一次 **试运行 (Dry Run)**。
5. （PLUS）启用计划执行功能，通过电子邮件或 Slack 提醒实现持续备份的自动化。

将 Enterprise File Fabric 管理集中到 RcloneView 中，可以消除工具碎片化问题，为您的团队提供每一次云数据移动的单一、可审计记录。

---

**相关指南：**

- [使用 RcloneView 管理 SharePoint 存储](https://rcloneview.com/support/blog/manage-sharepoint-cloud-sync-backup-rcloneview)
- [使用 RcloneView 管理 Azure Files](https://rcloneview.com/support/blog/manage-azure-files-cloud-sync-rcloneview)
- [使用 RcloneView 为 DevOps 与软件团队提供云存储](https://rcloneview.com/support/blog/cloud-storage-devops-software-teams-rcloneview)

<CloudSupportGrid />
