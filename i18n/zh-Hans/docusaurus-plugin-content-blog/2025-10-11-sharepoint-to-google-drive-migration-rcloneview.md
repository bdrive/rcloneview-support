---
slug: sharepoint-to-google-drive-migration-rcloneview
title: "使用 RcloneView 掌握 SharePoint 到 Google Drive 的迁移：分步业务指南"
authors:
  - tayson
description: "使用 RcloneView 进行可视化、可限速、可审计的 SharePoint 到 Google Drive 迁移——专为需要无需 CLI、符合策略要求的切换方案的企业 IT 团队打造。"
keywords:
  - SharePoint to Google Drive
  - move files from SharePoint to Drive
  - RcloneView SharePoint
  - cloud migration for business
  - Microsoft 365 migration tool
  - migrate sharepoint document library
  - google drive workspace migration
  - rclone sharepoint connector
  - office 365 to google drive
  - sharepoint migration guide
tags:
  - RcloneView
  - migration
  - sharepoint
  - google-drive
  - microsoft-365
  - business
  - cloud-storage
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 使用 RcloneView 掌握 SharePoint 到 Google Drive 的迁移：分步业务指南

> 通过可视化、可限速、可重复执行的流程，将 SharePoint 文档库迁移到 Google Drive（Workspace），企业管理员无需接触命令行即可完成操作。

RcloneView 将 rclone 的 SharePoint 和 Google Drive 连接器封装为图形界面，提供便于审计的日志、调度器和实时监控功能。本指南将展示如何规划并执行分阶段迁移，让您能够在不中断业务的情况下迁移团队站点、项目文件夹或整个业务部门的数据。

<!-- truncate -->

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

## 为什么选择 RcloneView 完成 SharePoint → Google Drive 迁移

- 无需 CLI：通过引导式对话框配置 Microsoft 365（SharePoint/OneDrive for Business）和 Google Drive 远程。
- 企业友好：可限制请求速率以避免触发 SharePoint 和 Drive API 的速率限制，并可在维护窗口期间安排切换任务。
- 操作可视化：并排资源管理器、比较与复制、任务历史记录，以及用于审计的实时传输监控。
- 灵活的迁移方式：单次复制、双向同步，或保持源和目标保持一致的分阶段增量同步。

## 前置条件（企业级）

- 已安装 RcloneView，并使用有权访问目标 SharePoint 站点和 Google Drive 目标位置（共享云端硬盘或我的云端硬盘）的账户登录。
- 如果您的租户限制第三方应用，需已获得 Microsoft Graph 的管理员同意。
- 已确定切换窗口（或允许分阶段同步），并有足够的 Drive/共享云端硬盘配额。

## 步骤 1 — 连接 SharePoint 和 Google Drive 远程

1) 在 **RcloneView ? 设置 ? 远程存储** 中，添加一个新的远程。  
<img src="/support/images/en/blog/new-remote.png" alt="Open multiple cloud remotes in RcloneView" class="img-large img-center" />

2) 选择 **OneDrive/SharePoint (Microsoft 365)**，使用拥有该站点访问权限的账户登录，并选择正确的 **站点 / 文档库**（例如 `/sites/Marketing/Shared Documents`）。  
3) 添加 **Google Drive**（Workspace）：选择该项目要存放到 **我的云端硬盘** 还是特定的 **共享云端硬盘**。  
4) 测试每个远程并保存。

## 步骤 2 — 映射正确的文档库和目标文件夹

- 对于每个 SharePoint 文档库，记下您在连接对话框中选择的路径；在资源管理器中打开它以确认根目录（您应该能看到预期的部门文件夹）。
- 如果 Google Drive/共享云端硬盘中尚未存在对应的文件夹结构，请先创建。
- 如果需要按团队隔离，请针对多个 SharePoint 远程重复此操作（每个站点或每个敏感集合对应一个远程）。

## 步骤 3 — 通过并排检查进行验证

- 在双面板资源管理器中打开两个远程。  
<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="cloud to cloud transfer default" class="img-large img-center" />
- 使用 **比较** 功能在复制之前预览差异（大小、缺失文件）。  
<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare shared folder and My Drive contents" class="img-large img-center" />
- 先复制一个小的试点文件夹，以验证权限、版本化文件和命名规则（SharePoint 中的 `# % & { }` 在 Drive 上是合法的，但长路径可能仍需要清理）。

## 步骤 4 — 选择您的迁移模式

- **一次性复制（最快）**：使用 **复制** 将数据整体搬迁到新的共享云端硬盘。适用于切换期间源保持只读的场景。
- **同步（可选双向）**：如果用户在迁移期间仍在编辑文件，请使用 **同步**；在切换窗口内完成最后一次增量同步。
- **尽可能使用服务器端传输**：如果您的 SharePoint 和 Drive 可通过互联网访问，RcloneView 会在支持的情况下利用服务器端复制以减少出站流量。

拖放操作同样适用于临时迁移和快速修正。  
<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="drag and drop" class="img-large img-center" />

## 步骤 5 — 创建可重复执行的任务并安排切换时间

1) 在 **任务** 中，创建一个从 SharePoint 文档库到目标共享云端硬盘路径的新 **复制** 或 **同步** 任务。  
2) 设置 **带宽限制** 和 **传输数**，以遵守 Microsoft 365 和 Google Drive 的限速要求（例如 `tpslimit`、`--drive-chunk-size`，或 **最大传输量** 滑块）。  
3) 保存后，将批量迁移安排在非高峰时段执行；再为增量同步添加第二个调度计划。  
<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="create job schedule" class="img-large img-center" />

## 步骤 6 — 运行、监控并处理限速

- 启动任务并实时查看进度（吞吐量、预计完成时间、错误信息）。  
<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="transfer monitoring" class="img-large img-center" />
- 如果看到 `throttled` 或 `403`/`429` 响应，请降低传输数或增加短暂退避时间；RcloneView 无需打开终端即可展示这些日志。
- 使用 **任务历史记录** 导出结果以满足合规要求，并可直接在界面中重试任何失败的对象。

## 步骤 7 — 迁移后检查与交接

- 重新运行 **比较** 功能，确认目标与 SharePoint 一致后再解锁用户访问权限。
- 抽查权限设置：由于 Drive 的 ACL 不会自动镜像 SharePoint 的权限，您可以将新的根目录批量共享给相应的 Workspace 群组。
- 如果团队仍在 SharePoint 上保持活跃，请将该任务保留为计划中的增量同步几天，然后再将源切换为只读。

## 面向企业环境的故障排查提示

- **复杂站点**：按站点/文档库单独连接，而不是整个租户级连接，以避免范围意外扩大。
- **长路径或特殊字符**：在高级选项中启用 Rclone 的 Unicode 规范化和路径长度处理；在切换前于资源管理器中重命名边缘情况的文件。
- **数据主权**：对于受监管的团队，请将目标设为区域性共享云端硬盘，并保留任务历史记录导出的审计记录。

## 相关资源

- [通过浏览器登录方式添加远程 (OAuth)](https://rcloneview.com/support/howto/remote-storage-connection-settings/add-oath-online-login)
- [添加 Google Drive](https://rcloneview.com/support/howto/#step-2-adding-remote-storage-google-drive-example)
- [比较文件夹内容](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [即时同步远程存储](https://rcloneview.com/support/howto/rcloneview-basic/synchronize-remote-storages)
- [创建同步任务](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [任务调度](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)
- [实时传输监控](https://rcloneview.com/support/howto/rcloneview-basic/real-time-transfer-monitoring)
- [将云存储挂载为本地磁盘](https://rcloneview.com/support/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive)

## 总结

RcloneView 为 IT 团队提供了一条可视化、低风险的路径，将 SharePoint 文档库迁移到 Google Drive 或共享云端硬盘。凭借符合策略要求的限速功能、计划中的切换时间以及实时监控，您可以在无需命令行脚本的情况下迁移业务关键数据，让相关方随时了解进度，并保留一个可重复执行的任务以备未来整合之需。

<CloudSupportGrid />
