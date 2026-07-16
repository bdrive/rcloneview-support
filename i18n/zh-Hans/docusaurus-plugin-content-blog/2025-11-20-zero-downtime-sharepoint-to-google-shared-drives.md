---
slug: zero-downtime-sharepoint-to-google-shared-drives-rcloneview
title: "使用 RcloneView 实现从 SharePoint 到 Google 共享云端硬盘的零停机迁移"
authors:
  - tayson
description: 通过结合 RcloneView 的多云 Explorer、Compare 预览、Sync 任务以及基于调度器的增量传输，将 Microsoft 365 SharePoint Online 库迁移到 Google 共享云端硬盘，且不中断用户使用。
keywords:
  - sharepoint to google drive
  - google shared drive migration
  - rcloneview
  - zero downtime transfer
  - microsoft 365 to workspace
  - rclone compare
  - multi cloud sync
  - scheduler automation
  - sharepoint cutover plan
  - cloud migration blueprint
tags:
  - sharepoint
  - google-drive
  - migration
  - automation
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 使用 RcloneView 实现从 SharePoint 到 Google 共享云端硬盘的零停机迁移

> 在后台将数据填充到 Google 共享云端硬盘的同时，让设计、财务和项目团队继续在 SharePoint 中正常工作——然后在一个切换窗口内完成最终切换。

SharePoint Online 库通常包含权限复杂的文件夹、文档集和区域数据控制。与此同时，Google Workspace 共享云端硬盘承诺提供更简单的协作和存储配额，但原生迁移工具很少能正确保留元数据、增量窗口或限速设置。RcloneView 将 rclone 的 SharePoint 和 Google Drive 后端封装在图形界面中，让你可以通过分阶段的 Compare 运行、Sync + Copy 任务、基于挂载的 QA，以及基于调度器的增量传输来规划多云迁移。

<!-- truncate -->

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />


## 为什么要规划零停机的 SharePoint -> Google 切换

- **分布式团队无法暂停工作** —— 在新的共享云端硬盘填充数据期间，市场资产、PMO 和合同都需要持续可访问。
- **精细的权限控制** —— SharePoint 库混合了与 Teams 关联的文件夹和独立的文档中心；你需要一种可重复的方法在共享云端硬盘中重建这些结构，并保留清晰的审计日志。

零停机策略意味着在两个平台都保持在线的情况下运行多阶段同步，然后在最后一次增量传输完成后进行切换。

## 迁移蓝图：多云控制面板

1. **连接两端**：使用 [远程管理器](/howto/rcloneview-basic/remote-manager)，并参考 [SharePoint for Business](/howto/remote-storage-connection-settings/connect-using-cli/add-sharepoint-for-business) 和 [Google 共享云端硬盘](/howto/remote-storage-connection-settings/connect-using-cli/add-google-shared-drive) 的提供商指南进行连接。RcloneView 会按租户隔离 OAuth 令牌，并通过相应保护机制进行存储。
2. **组织 Explorer 窗格**，使每个窗格分别对应一个库和其匹配的共享云端硬盘。
3. **任务模板**来自 [创建同步任务](/howto/rcloneview-basic/create-sync-jobs) 和 [同步远程存储](/howto/rcloneview-basic/synchronize-remote-storages)。Copy 任务用于初始数据填充；Sync 任务处理单向清理；Compare 运行用于验证。
4. **用于 QA 的挂载**遵循 [将云存储挂载为本地驱动器](/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive) 的方法，让高级用户可以在切换前于 Finder 或资源管理器中预览内容。
5. **调度器与监控**依赖 [任务调度与执行](/howto/rcloneview-advanced/job-scheduling-and-execution) 和 [实时传输监控](/howto/rcloneview-basic/real-time-transfer-monitoring)，以保持增量传输运行的可预测性。  

<img src="/support/images/en/blog/new-remote.png" alt="Open multiple cloud remotes in RcloneView" class="img-large img-center" />  
  

## 第 1 步 —— 强化连接与元数据

- 为每个远程命名（如 `sp-marketing`、`sp-pmo`、`gdrive-regional-apac`），并将根路径限制在特定的库中。这样可以确保在 [浏览和管理远程存储](/howto/rcloneview-basic/browse-and-manage-remote-storage) 中的远程浏览保持快速。

## 第 2 步 —— 使用 Compare 运行建立基线

1. 打开双窗格 Explorer，将左侧指向 SharePoint，右侧指向空的共享云端硬盘。
2. 使用 [比较文件夹内容](/howto/rcloneview-basic/compare-folder-contents) 检测大小、校验和以及时间戳的差异。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare SharePoint library to Google Shared Drive before migrating" class="img-large img-center" />

基线 Compare 快照可以为原始状态提供取证记录，并帮助识别可能需要归档而非迁移的过时子网站。

## 第 3 步 —— 分阶段部署 Copy + Sync 任务

- 为每个业务单元创建一个 **Copy** 任务，将数据填充到共享云端硬盘中，而不会删除 SharePoint 上的任何内容。参考：[创建同步任务](/howto/rcloneview-basic/create-sync-jobs)。  

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running an encrypted sync job in RcloneView" class="img-large img-center" />  
   

## 第 4 步 —— 使用调度器自动化增量传输窗口

打开调度器，全局启用它，然后为每个任务分配运行周期：

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule staged SharePoint to Google migration jobs inside RcloneView" class="img-large img-center" />


## 第 5 步 —— 切换日检查清单

1. **冻结写入**：在 SharePoint 上冻结写入（通过 Teams/Slack 通知），但保留站点在线以满足只读需求。
2. 运行最后一组 Sync + Compare 任务。使用 Compare 差异确认自上次增量传输以来只有少数文件发生了变化。
3. 使用 [将云存储挂载为本地驱动器](/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive) 挂载新的共享云端硬盘，并让业务负责人抽查复杂的文件夹树。  

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="mount from remote explorer" class="img-large img-center" />  
       


## 迁移后的 QA 与挂载操作

挂载管理器让工程师、财务或创意负责人可以将新的共享云端硬盘（或旧的 SharePoint 远程）以只读方式挂载，用于审计和培训。

## 项目时间表指南

| 阶段 | RcloneView 操作 | 结果 |
| --- | --- | --- |
| 第 1 周 | 连接远程、建立 Compare 基线、创建 Copy 任务 | 每个库的清单及已填充数据的共享云端硬盘 |
| 第 2 周 | 每晚调度器增量传输 + 每周 Compare 报告 | 持续更新并具备偏差可见性 |
| 第 3 周 | 试点挂载、权限验证、用户培训 | 相关方可安全预览 Google 共享云端硬盘 |
| 切换周 | SharePoint 冻结、最终 Sync/Compare、共享云端硬盘正式上线 | 停机时间以分钟计，并具备已签署的验证日志 |
| 2 周后 | 对旧远程执行计划中的 Sync，并可选地对 S3/Wasabi 执行归档 Copy | 在下线前证明没有遗漏任何文件 |


RcloneView 将多云迁移变成一个可预测的执行方案：设置远程、预览差异、分阶段部署 Copy + Sync 任务、自动化增量传输，并挂载以进行 QA。在你将团队重定向到 Google 共享云端硬盘之前的每一刻，他们都能在 SharePoint 上保持高效工作。

<CloudSupportGrid />
