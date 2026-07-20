---
sidebar_position: 6
description: "了解如何使用 RcloneView 的 GUI 功能（拖放、比较、同步、计划任务和云到云传输效率）在 OneDrive 和 Dropbox 之间无缝传输文件。"
keywords:
  - rcloneview
  - cloud
  - sync
  - onedrive to dropbox
  - cloud to cloud transfer
  - rclone GUI
  - Onedrive
  - Dropbox
  - rclone
  - cloud sync
  - Cloud Migration
  - cloud storage
  - cloud transfer
  - file synchronization
tags:
  - RcloneView
  - Cloud
  - Sync
  - cloud-file-transfer
  - cloud-migration
  - Tutorial
  - onedrive
  - dropbox
  - cloud-to-cloud
date: 2025-07-10
author: Jay
---
import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';

# 使用 RcloneView 轻松实现 OneDrive 到 Dropbox 的传输

在如今以云为先的工作流程中，同时使用多个服务（例如 **OneDrive** 和 **Dropbox**）非常常见。OneDrive 与 Microsoft 365 无缝集成，而 Dropbox 则提供可靠的同步和共享功能——尤其适合团队使用。但当你需要**整合文件**、**跨平台共享数据**，或只是想**迁移到新服务**时，浏览器中常用的拖放方式既缓慢又容易中断。大文件夹需要先下载再重新上传，这会带来出错风险、占用带宽并耗费时间。

这时 **RcloneView** 就派上用场了。它提供了一个安全、高效的图形界面，可实现直接的云到云传输——无需本地下载。你可以：

- 使用 OAuth 登录同时连接 **OneDrive** 和 **Dropbox**
- 在双窗格界面中并排浏览两个服务
- 通过拖放、文件夹比较或自动化任务传输文件
- 计划定期传输以实现备份或工作流同步

<img src="/support/images/en/tutorials/transfer-files-between-onedrive-and-dropbox.png" alt="transfer files between onedrive and dropbox" class="img-medium img-center" />

## 从 OneDrive 传输文件到 Dropbox 的步骤

### 在 RcloneView 中添加 OneDrive 和 Dropbox 远程
1. 打开 **RcloneView**，进入 **`Remote`** 标签页。
2. 点击 **`+ New Remote`**，选择 **OneDrive**，然后完成 OAuth 流程。
3. 重复上述步骤添加 **Dropbox**。
   - 对于 Dropbox Business，请前往 *Advanced Options* 并启用 `dropbox_business=true`。

👉 了解更多：[通过浏览器登录连接云远程](/howto/remote-storage-connection-settings/add-oath-online-login)

### 在浏览器窗格中打开两个远程
1. 进入 **Browse** 标签页。
2. 点击左侧窗格中的 `+` 图标并选择你的 **OneDrive** 远程。
3. 点击右侧窗格中的 `+` 并选择你的 **Dropbox** 远程。
4. 现在两个服务并排显示，便于浏览和移动文件。

<img src="/support/images/en/tutorials/open-onedrive-and-dropbox-remotes.png" alt="open onedrive and dropbox remotes" class="img-medium img-center" />

## 🔄 四种文件传输方式

### 🖱️ 方法一：拖放
- 只需将文件或文件夹从 OneDrive 窗格拖到 Dropbox 窗格。
- 传输会立即开始，进度会显示在 **`Transfer`** 标签页中。

👉 了解更多：[浏览与管理远程存储](/howto/rcloneview-basic/browse-and-manage-remote-storage)

### 🔍 方法二：比较文件夹，然后复制/删除
1. 在每个窗格中导航到所需的文件夹。
2. 在 **`Home`** 菜单中点击 **`Compare`**。
3. RcloneView 会高亮显示：
   - 仅存在于 OneDrive 中的文件
   - 仅存在于 Dropbox 中的文件
   - 同名但大小不同的文件
   - 完全相同的文件
1. 选择文件并点击 **`Copy →`** 发送到 Dropbox，或点击 **`← Copy`** 从 Dropbox 传回 OneDrive。
2. 使用 **`Delete`** 删除不需要的文件。
3. 在状态栏和 **`Transfer`** 日志中查看状态更新。

👉 在[比较文件夹内容指南](/howto/rcloneview-basic/compare-folder-contents)中了解更多

### 🔁 方法三：同步或保存为任务
1. 将 OneDrive 设为左侧（源）窗格，Dropbox 设为右侧（目标）窗格，然后点击 **`Sync`**。
2. 选择同步方向、筛选条件及其他选项。
3. 立即运行，或点击 **`Save as Job`** 保存配置以供日后执行。

 👉 了解更多：
- [同步远程存储](/howto/rcloneview-basic/synchronize-remote-storages)
- [创建同步任务](/howto/rcloneview-basic/create-sync-jobs)
- [执行与管理任务](/howto/rcloneview-basic/execute-manage-job)


### ⏰ 方法四：计划自动同步任务
1. 从 **`Home`** 菜单打开 **`Job Manager`** → 点击 **`Add Job`**。
2. 确认 OneDrive 源文件夹和 Dropbox 目标文件夹。
3. 启用计划任务并设置重复频率（每天、每周等）。
4. 保存并激活该计划。
5. RcloneView 将自动运行该任务；在 **`Job History`** 中查看结果。

👉 了解更多：[任务计划与执行](/howto/rcloneview-advanced/job-scheduling-and-execution)

## ✅ 结语

无论你是在迁移服务、备份数据，还是在不同平台间同步，**RcloneView** 都能简化整个流程。凭借拖放传输、文件夹比较、同步和计划任务等强大功能，你将获得一种快速、容错且无需编写代码的云数据管理方式。

---

## 🔗 相关资源

- [添加 OneDrive / Dropbox 远程](/howto/remote-storage-connection-settings/add-oath-online-login#quick-setup-guide)
- [浏览与管理远程存储](/howto/rcloneview-basic/browse-and-manage-remote-storage)
- [比较文件夹内容](/howto/rcloneview-basic/compare-folder-contents)
- [同步远程存储](/howto/rcloneview-basic/synchronize-remote-storages)
- [创建同步任务](/howto/rcloneview-basic/create-sync-jobs)
- [任务计划与执行](/howto/rcloneview-advanced/job-scheduling-and-execution)


<CloudSupportGrid />
