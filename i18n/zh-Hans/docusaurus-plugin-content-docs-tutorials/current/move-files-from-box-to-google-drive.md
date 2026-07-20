---
sidebar_position: 7
description: "了解如何使用 RcloneView 的图形界面在 Box 和 Google Drive 之间无缝传输和同步文件——支持拖放操作、文件夹比较和任务调度。"
keywords:
  - rcloneview
  - cloud
  - sync
  - rclone
  - cloud to cloud transfer
  - rclone GUI
  - cloud sync
  - Cloud Migration
  - cloud storage
  - cloud transfer
  - file synchronization
  - Box
  - google drive
  - box to google drive
tags:
  - RcloneView
  - Cloud
  - Sync
  - cloud-file-transfer
  - cloud-migration
  - Tutorial
  - box
  - google-drive
  - cloud-to-cloud
date: 2025-07-10
author: Jay
---
import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';

# Box ↔ Google Drive 文件传输指南

像 **Box** 和 **Google Drive** 这样的云存储平台各有独特优势。Box 专为企业协作打造，具备高级安全性和工作流功能，而 Google Drive 与 Google Workspace 无缝集成，并提供大量免费存储空间。然而，同时管理两个平台上的文件可能会很麻烦——尤其是在需要在它们之间迁移数据时。

借助 **RcloneView**，你可以通过直观的图形界面轻松地在 Box 和 Google Drive 之间**双向传输文件**——无需使用命令行。

  
<img src="/support/images/en/tutorials/transfer-files-between-box-and-google-drive.png" alt="transfer files between box and google drive" class="img-medium img-center" />

## **为什么要使用 RcloneView 进行多云传输？**

RcloneView 通过以下功能简化复杂的云传输：

- 面向 Box 和 Google Drive 的安全 OAuth 集成  
- 云端之间的拖放文件传输
- 文件夹比较工具，可在传输前预览差异  
- 同步和调度周期性传输与备份
- 试运行预览、过滤器和高级传输选项  
- 带进度日志的后台传输监控  

RcloneView 采用基于 API 的直接传输方式，而不是先下载后再重新上传文件，从而使你的工作流程更快、更可靠。

## 🔄 传输文件：Box ↔ Google Drive

### 步骤 1：连接你的云远程

1. 启动 **RcloneView**，然后在 **Remote** 菜单中选择 **`+ New Remote`**。  
2. 在 **`Provider`** 选项卡中，搜索并选择 **Box**。
3. 按提示完成 OAuth 登录。
4. 对 **Google Drive** 重复相同的流程。


👉 了解更多：  

- [添加 Box 远程](/howto/remote-storage-connection-settings/add-oath-online-login#quick-setup-guide)  
- [添加 Google Drive 远程](/howto/#step-2-adding-remote-storage-google-drive-example)

### 步骤 2：并排打开远程

1. 前往资源管理器面板中的 **Browse** 选项卡。
2. 在其中一个面板中，点击加号图标 `+` 并选择你的 **Box** 远程。
3. 在另一个面板中，点击 `+` 并选择你的 **Google Drive** 远程。
4. 两个远程将并排显示，方便你在它们之间进行拖动、复制或同步。

现在你可以在它们之间无缝地执行传输操作。

<img src="/support/images/en/tutorials/open-box-and-google-drive-remotes.png" alt="open box and google drive remotes" class="img-medium img-center" />

### 📌 4 种文件传输方法

RcloneView 提供了多种灵活的方式，用于将数据从 Box 移动或同步到 Google Drive。请选择最适合你工作流程的方式：

#### 🖱️ 方法 1：在资源管理器面板之间拖放

1. 打开 **RcloneView**，并导航至 **Browse** 选项卡。
2. 确保 Box 和 Google Drive 远程都并排显示。
3. 从 Box 面板**拖动文件或文件夹**并**放入** Google Drive 面板。
4. 传输将自动开始。可在 **`Transfer`** 日志选项卡中查看进度。

这种直观的拖放界面让云到云的传输变得轻而易举——无需任何命令。

👉 更多详情：[浏览与管理远程存储](/howto/rcloneview-basic/browse-and-manage-remote-storage)

#### 🔍 方法 2：比较文件夹内容、复制或删除

1. 在两个资源管理器面板中，分别导航到并选择要比较的文件夹（左侧：Box，右侧：Google Drive）。
2. 点击主菜单中的 **`Compare`** 按钮。
3. RcloneView 会高亮显示：
   - 仅存在于一侧的文件
   - 名称相同但大小不同的文件
   - 完全相同的文件
4. 选择要传输或删除的文件。
5. 要将文件从左向右传输，点击 **`Copy →`**；要从右向左传输，使用 **`← Copy`**；要删除文件，点击 **`Delete`**。
6. 进度和摘要更新会显示在状态栏中。

可视化比较有助于避免出错，确保你只移动想要移动的内容。

👉 了解更多：[比较文件夹内容指南](/howto/rcloneview-basic/compare-folder-contents)

  
#### 🔁 方法 3：使用同步或任务

1. 在资源管理器面板中，选择要同步的 **Box** 文件夹和 **Google Drive** 文件夹。
2. 点击 `home` 菜单中的 **`Sync`** 按钮。
3. 选择同步选项（单向或双向），预览操作并确认。
4. RcloneView 将运行同步，并在 **`transfer`** 日志选项卡中显示进度。

- 若需重复或定时传输：
  1. 在同步对话框中点击 **`Save to Jobs`**，或打开 **`Job Manager`** → **`Add Job`**。
  2. 配置源、目标和相关选项。
  3. 保存后可手动运行，或设置调度计划。

👉 了解更多：
- [同步远程存储](/howto/rcloneview-basic/synchronize-remote-storages)
- [创建同步任务](/howto/rcloneview-basic/create-sync-jobs)
- [执行与管理任务](/howto/rcloneview-basic/execute-manage-job)

  
#### ⏰ 方法 4：调度自动同步任务

1. 在资源管理器面板中，选择要保持同步的 **Box** 和 **Google Drive** 文件夹。
2. 从 **`Home`** 或 **`Remote`** 菜单打开 **`Job Manager`**，然后点击 **`Add Job`**。
3. 确认你的源和目标。
4. 使用调度编辑器设置任务运行时间。保存前请预览你的调度计划。
5. 保存并启用该调度任务。

RcloneView 将在你指定的时间运行同步。你可以在 **`Job History`** 中查看执行详情和日志，并在完成后收到通知。

👉 了解更多：[任务调度与执行](/howto/rcloneview-advanced/job-scheduling-and-execution)

  
## ✅ 总结

无论是一次性迁移数据，还是持续保持同步，RcloneView 都能让你在 Box 和 Google Drive 之间实现快速、安全、可靠的文件传输——无需手动下载或使用命令行工具。

  
不妨立即尝试，简化你的多云工作流程！

  
## 🔗 相关指南

- [如何添加 Box 远程](/howto/remote-storage-connection-settings/add-oath-online-login#quick-setup-guide)  
- [如何添加 Google Drive 远程](/howto/#step-2-adding-remote-storage-google-drive-example)  
- [浏览与管理远程存储](/howto/rcloneview-basic/browse-and-manage-remote-storage)  
- [比较文件夹内容](/howto/rcloneview-basic/compare-folder-contents)  
- [同步远程存储](/howto/rcloneview-basic/synchronize-remote-storages)  
- [创建同步任务](/howto/rcloneview-basic/create-sync-jobs)  
- [执行与管理任务](/howto/rcloneview-basic/execute-manage-job)  
- [任务调度与执行](/howto/rcloneview-advanced/job-scheduling-and-execution)

  

<CloudSupportGrid />
