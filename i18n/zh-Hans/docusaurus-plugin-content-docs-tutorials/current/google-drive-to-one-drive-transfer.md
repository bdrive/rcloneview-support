---
sidebar_position: 2
description: "了解如何使用 RcloneView 直观的拖放式图形界面和任务调度器，在 Google Drive 和 OneDrive 之间复制、同步和计划文件传输。"
keywords:
  - rcloneview
  - Google Drive 到 OneDrive
  - 云到云传输
  - 文件同步
  - 云迁移
  - 云存储
  - 云同步
  - Onedrive
  - google drive
  - 任务调度
  - rclone
  - sync
  - 定时任务
  - 拖放
tags:
  - RcloneView
  - Tutorial
  - cloud-storage
  - cloud-file-transfer
  - cloud-migration
  - google-drive
  - onedrive
  - Sync
  - job
  - cloud-to-cloud
date: 2025-05-19
author: Jay
---
import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';

# Google Drive 到 OneDrive 传输指南
  

云存储服务已成为管理文档、媒体和备份不可或缺的工具。其中使用最广泛的两项服务是 **Google Drive** 和 **Microsoft OneDrive**。两者都提供充裕的存储空间、与生产力工具（Google Workspace 和 Microsoft 365）的集成，以及广泛的平台支持。

虽然两个平台都拥有各自的云生态系统，但 **RcloneView** 提供了一个集中式界面，可在它们之间管理、传输和同步文件——**无需复杂脚本或命令行操作**。

在本指南中，我们将带你了解如何使用 **RcloneView**（一款基于 Rclone 构建的图形界面工具，让多云文件管理变得简单而强大）**将文件从 Google Drive 传输到 OneDrive**。

<img src="/support/images/en/tutorials/google-drive-to-ondrive-transfer.png" alt="google drive to ondrive transfer" class="img-medium img-center" />

## **为什么使用 RcloneView 进行云到云传输？**

RcloneView 是一款基于 Rclone 引擎构建的强大图形界面工具，旨在简化云存储管理。

- 轻松连接多个云服务提供商
- 直观的拖放式文件传输界面
- 传输前比较文件夹内容
- 简洁的图形界面，配备试运行（dry-run）、过滤器和任务调度等高级功能
- 计划定期传输和备份
- Google Drive 和 OneDrive 的安全 OAuth 登录

与传统的手动下载/上传方式不同，RcloneView 通过基于 API 的直接操作实现自动化——让云存储之间的传输变得顺畅、无需人工值守。

## 📙 将文件从 Google Drive 传输到 OneDrive


### 在 RcloneView 中添加 Google Drive 和 OneDrive 远程

1. 打开 **RcloneView**，在 **`远程`** 菜单中点击 **`+ 新建远程`**。  
2. 在 **`提供商`** 选项卡中，搜索并选择 **Google Drive**。  
3. 按照向导操作并完成 OAuth 登录。  
4. 对 **OneDrive** 重复相同的流程。  

 🔍 有关详细设置，请参阅：
 - [如何添加 Google Drive 远程](/howto/#step-2-adding-remote-storage-google-drive-example)
 - [如何添加 OneDrive 远程](/howto/remote-storage-connection-settings/add-oath-online-login#quick-setup-guide)

### 在浏览器面板中打开两个远程

1. 打开 **RcloneView**，进入浏览器面板中的 **浏览选项卡**。  
2. 在其中一个面板中，点击其标题栏中的加号图标 `+`，从列表中选择你的 **Google Drive** 远程。  
3. 在另一个面板中，点击 `+` 图标，从列表中选择你的 **OneDrive** 远程。  
4. 此时两个远程将并排显示，方便你在它们之间轻松复制、比较、拖动或同步文件和文件夹。  

<img src="/support/images/en/tutorials/open-google-drive-and-onedrive.png" alt="open google drive and onedrive" class="img-medium img-center" />

### 📌 4 种传输文件的方法

RcloneView 提供了多种强大的方法，可在 Google Drive 和 OneDrive 之间移动或同步数据。请选择最适合你工作流程的方式：

#### 🖱️ **方法一：在浏览器面板之间拖放**

  
	1. 打开 **RcloneView**，进入 **浏览** 选项卡（启动时默认显示）。  
	2. 确保两个云端远程（Google Drive 和 OneDrive）在双栏浏览器中并排可见。  
	3. 只需从 Google Drive 面板中**拖动文件或文件夹**，然后**放置**到 OneDrive 面板中。  
	4. 传输将通过 Rclone 后台引擎自动开始。你可以在 **`传输`** 日志选项卡中实时查看进度。  

  
这种直观的拖放界面简化了移动或复制文件的操作——无需命令。

👉 了解更多：[浏览与管理远程存储](/howto/rcloneview-basic/browse-and-manage-remote-storage)

#### 🔍 **方法二：比较文件夹内容、复制或删除**

  
	1. 在两个浏览器面板中，导航并选择你要比较的文件夹（左侧：Google Drive，右侧：OneDrive）。  
	2. 点击主菜单选项卡中的 **`比较`** 按钮以启动文件夹比较。  
	3. RcloneView 将扫描并高亮显示：  
		- 仅存在于一侧的文件  
		- 名称相同但大小不同的文件  
		- 相同的文件
	4. 选择文件以确定要对哪些文件执行操作。  
	5. 若要将文件从左向右传输，点击 **`复制 →`** 按钮。  
		   若要从右向左传输，使用 **`← 复制`** 按钮。  
		   若要从远程中删除某个文件，点击其面板上的 **`删除`** 按钮。  
	6. 进度和摘要更新将显示在状态栏中。  


这种可视化比较通过让你在移动或删除文件**之前**先进行审查，从而最大程度减少错误。

👉 在[比较文件夹内容指南](/howto/rcloneview-basic/compare-folder-contents)中了解更多


#### 🔁 **方法三：使用同步或任务**

1. 在浏览器面板中，导航并选择要保持同步的 **Google Drive** 文件夹和 **OneDrive** 文件夹。  
2. 点击 `home` 菜单中的 **`同步`** 按钮。  
3. 选择同步选项（单向或反向），预览操作并确认。   
4. RcloneView 将运行同步，并在 **`传输`** 日志选项卡中显示进度指示器。   

- 或者，若需要重复或定时传输：  

  1. 在同步弹窗中点击 **`保存到任务`**，或打开 **`任务管理器`** → 点击 **`添加任务`**。   
  2. 配置源和目标并设置选项。   
  3. 保存任务后手动运行或进行调度。  

 👉 了解更多：  

- [同步远程存储](/howto/rcloneview-basic/synchronize-remote-storages)  
- [创建同步任务](/howto/rcloneview-basic/create-sync-jobs)  
- [执行与管理任务](/howto/rcloneview-basic/execute-manage-job)

#### ⏰ 方法四：安排自动同步任务 

1. 在浏览器面板中，导航并选择要保持同步的 **Google Drive** 文件夹和 **OneDrive** 文件夹。  
2. 从 **`主页`** 或 **`远程`** 菜单打开 **`任务管理器`**，然后点击 **`添加任务`**。  
3. 核实你所选择的源和目标；如有需要可进行调整。  
4. 使用调度编辑器定义任务的运行时间。RcloneView 提供内置的模拟工具，可在保存之前预览你的调度模式。  
5. 保存并启用该定时任务。   

保存后，RcloneView 将在你指定的时间自动运行同步。  

执行详情和日志可在 **`任务历史`** 中查看，任务成功完成后你还会收到通知。

👉 了解更多：[任务调度与执行](/howto/rcloneview-advanced/job-scheduling-and-execution)


## **结语**

在 Google Drive 和 OneDrive 等云服务之间传输文件并不需要变得复杂。使用 **RcloneView**，只需点击几下即可完成——无需使用命令行。

无论你是要移动数 GB 的个人文件，还是在多个账户之间同步公司文档，这种方法都快速、安全且可靠。

 🎯 立即尝试使用 RcloneView，让你的多云管理变得轻松无忧。

---

## 🔗 相关指南

- [如何添加 Google Drive 远程](/howto/#step-2-adding-remote-storage-google-drive-example)
- [如何添加 OneDrive 远程](/howto/remote-storage-connection-settings/add-oath-online-login#quick-setup-guide)
- [浏览与管理远程存储](/howto/rcloneview-basic/browse-and-manage-remote-storage)
- [比较文件夹内容指南](/howto/rcloneview-basic/compare-folder-contents)
- [同步远程存储](/howto/rcloneview-basic/synchronize-remote-storages)  
- [创建同步任务](/howto/rcloneview-basic/create-sync-jobs)  
- [执行与管理任务](/howto/rcloneview-basic/execute-manage-job)
- [任务调度与执行](/howto/rcloneview-advanced/job-scheduling-and-execution)


<CloudSupportGrid />
