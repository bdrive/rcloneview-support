---
sidebar_position: 4
description: "了解如何使用 RcloneView 直观的图形界面在 Dropbox 和 Google Drive 之间轻松传输或同步文件——无需终端或脚本操作。"
keywords:
  - rcloneview
  - Dropbox
  - google drive
  - cloud to cloud transfer
  - cloud transfer
  - file synchronization
  - cloud storage
  - Cloud Migration
  - cloud sync
  - cloud file transfer
  - rclone
tags:
  - RcloneView
  - dropbox
  - google-drive
  - cloud-file-transfer
  - cloud-migration
  - Tutorial
  - Sync
  - cloud-to-cloud
date: 2025-07-01
author: Jay
---
import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';

# Dropbox 到 Google Drive 传输指南

在如今的数字化工作环境中，无论是个人使用、团队协作，还是跨平台同步，使用多个云存储服务来存储和管理文件已经变得非常普遍。

**Dropbox** 以简单易用和快速文件同步著称，尤其受到团队的青睐；而 **Google Drive** 则与 Google Workspace（文档、表格、Gmail 等）深度集成，并提供大容量的免费存储空间。当用户不再满足于单一服务，或希望为了便利与协作而整合文件时，在云平台之间传输数据就变得至关重要。

手动下载再重新上传文件既耗时又容易出错。这正是 **RcloneView** 的用武之地。

**RcloneView** 是 [Rclone](https://rclone.org) 的图形界面工具，旨在简化云到云的文件传输，无需使用命令行工具。使用 RcloneView，你可以：  

- 在双窗格界面中连接并浏览 Dropbox 和 Google Drive  
- 通过拖放或同步操作传输文件  
- 在移动文件前预览文件夹差异   
- 使用计划任务自动执行重复性传输   

无论你是要切换服务、备份重要数据，还是在账户之间同步文件，**RcloneView 都能让 Dropbox 到 Google Drive 的传输变得简单可靠**——全程无需编写一行代码。

  <img src="/support/images/en/tutorials/dropbox-to-google-drive-transfer.png" alt="dropbox to google drive transfer" class="img-medium img-center" />
## **为什么使用 RcloneView 进行云到云传输？**

RcloneView 是构建于 Rclone CLI 之上的用户友好型图形工具。它以简洁的界面提供了强大的功能：

- 基于 OAuth 的 Dropbox 和 Google Drive 安全登录
- 双窗格资源管理器，便于文件导航
- 远程之间的拖放传输
- 复制前先比较文件夹
- 创建并计划同步任务

无论你是要同步大量数据，还是仅迁移几个文件夹，RcloneView 都能让你在几分钟内完成任务。

## 📙 从 Dropbox 传输文件到 Google Drive

### 在 RcloneView 中添加 Dropbox 和 Google Drive 远程

1. 启动 **RcloneView**，在 `Remote` 菜单中点击 **`+ New Remote`**。
2. 在 **`Provider`** 标签页中，搜索并选择 **Dropbox**。
3. 继续完成 OAuth 登录。
4. 重复相同步骤添加 **Google Drive**。

👉 详细设置请参见：
- [如何添加 Dropbox 远程](/howto/remote-storage-connection-settings/add-oath-online-login#quick-setup-guide)
- [如何添加 Google Drive 远程](/howto/#step-2-adding-remote-storage-google-drive-example)

:::important 连接 Dropbox Business
如果你使用的是 **Dropbox Business**，添加远程时请务必启用企业模式。  

在 **`Options`** 标签页中，滚动到底部并点击 **`Advanced Options`**，然后找到 `dropbox_business` 字段并将其设置为 `true`。

:::
### 在资源管理器窗格中打开两个远程

1. 前往 **Browse** 标签页（启动时默认打开）。
2. 在左侧窗格中，点击 `+` 并选择你的 **Dropbox** 远程。
3. 在右侧窗格中，点击 `+` 并选择你的 **Google Drive** 远程。
4. 现在你可以并排查看和操作这两个存储空间。

<img src="/support/images/en/tutorials/open-dropbox-and-google-drive.png" alt="open dropbox and google drive" class="img-medium img-center" />
## 🔄 传输方法

### 🖱️ **方法一：拖放**

- 只需将文件/文件夹从 Dropbox 窗格拖到 Google Drive 窗格。
- RcloneView 会立即开始传输。
- 在 **`Transfer`** 日志标签页中查看进度。

👉 了解更多：[浏览与管理远程存储](/howto/rcloneview-basic/browse-and-manage-remote-storage)

### 🔍 方法二：比较文件夹内容，然后复制或删除

1. 在两个资源管理器窗格中，分别选择要比较的源文件夹（例如 Dropbox）和目标文件夹（例如 Google Drive）。  
2. 点击 `Home` 菜单中的 **`Compare`** 按钮开始比较文件夹。  
3. RcloneView 会高亮显示文件夹之间的差异：
       - 仅存在于一侧的文件
       - 名称相同但大小不同的文件
       - 完全相同的文件
4. 直观查看比较结果，然后选择要操作的文件。
5. 点击 **Copy →** 将文件从左侧复制到右侧，或点击 **← Copy** 反向复制。
       使用 **Delete** 删除任一侧选中的文件。
6. 传输进度和结果会显示在状态栏和日志标签页中。  

  此方法可帮助你仔细比较并控制要复制或删除的内容——最大程度减少错误，确保传输准确无误。

  👉 了解更多：[比较文件夹内容](/howto/rcloneview-basic/compare-folder-contents)

### 🔁  方法三：同步或创建任务

1. 在资源管理器窗格中，选择 **Dropbox** 文件夹（源）和 **Google Drive** 文件夹（目标）。
2. 点击 **`Home`** 菜单中的 **`Sync`** 按钮打开同步对话框。
3. 选择所需的同步方向和选项，然后开始操作。
4. 如需重复执行或保存该任务，可在同步窗口中点击 **Save as Job**，    
       或通过 **`Home`** 菜单进入 **`Job Manager` → `Add Job`** 来创建计划任务。  

👉 了解更多：
- [同步远程存储](/howto/rcloneview-basic/synchronize-remote-storages)
- [创建同步任务](/howto/rcloneview-basic/create-sync-jobs)
- [执行与管理任务](/howto/rcloneview-basic/execute-manage-job)

### **⏰** 方法四：计划自动同步任务

1. 在资源管理器窗格中，选择要自动同步的 **Dropbox** 源文件夹和 **Google Drive** 目标文件夹。  
2. 从 **`Home`** 或 **`Remote`** 菜单打开 **`Job Manager`**，然后点击 **`Add Job`**。  
3. 确认源文件夹和目标文件夹正确无误。如有需要，可重新选择或修改。  
4. 使用 **Schedule Editor** 定义同步的执行时间和频率（例如每天午夜执行）。  
       RcloneView 内置了 **预览工具**，可在保存前模拟并确认你的计划模式。  
5. 保存并启用该计划任务。  

任务创建后，将根据你设定的计划**自动**运行——**无需任何人工干预**。

所有进度和结果都可以在 **`Job History`** 标签页中查看，任务完成后系统通知也会提醒你。

👉 了解更多：[任务计划与执行](/howto/rcloneview-advanced/job-scheduling-and-execution)

---

## ✅ 结语

借助 RcloneView，云到云传输变得无缝且高效。无论你是要整合备份，还是在跨平台团队间同步文件，RcloneView 都能帮助你更快地完成工作——无需任何终端命令。

立即体验，简化你的 Dropbox ↔ Google Drive 文件工作流程。

---

## 🔗 相关指南

- [如何添加 Dropbox 远程](/howto/remote-storage-connection-settings/add-oath-online-login#quick-setup-guide)
- [如何添加 Google Drive 远程](/howto/#step-2-adding-remote-storage-google-drive-example)
- [浏览与管理远程存储](/howto/rcloneview-basic/browse-and-manage-remote-storage)
- [比较文件夹内容](/howto/rcloneview-basic/compare-folder-contents)
- [同步远程存储](/howto/rcloneview-basic/synchronize-remote-storages)
- [创建同步任务](/howto/rcloneview-basic/create-sync-jobs)
- [任务计划与执行](/howto/rcloneview-advanced/job-scheduling-and-execution)

<CloudSupportGrid />
