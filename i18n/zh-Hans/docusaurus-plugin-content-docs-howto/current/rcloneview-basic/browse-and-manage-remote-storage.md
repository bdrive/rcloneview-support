---
sidebar_position: 3
description: "了解如何使用 RcloneView 的拖放界面和右键菜单，在本地和云存储之间浏览、复制和管理文件。"
keywords:
  - rcloneview
  - 文件管理
  - 复制文件
  - 移动文件
  - 拖放
  - 云文件传输
  - 云存储
  - 文件资源管理器
  - 云到云传输
  - 远程浏览器
  - 上传
  - 下载
  - 清除
  - 删除
tags:
  - howto
  - file-management
  - cloud-storage
  - drag-and-drop
  - cloud-file-transfer
  - file-explorer
date: 2025-05-27
author: Jay
---
# 使用 RcloneView 进行文件管理  

RcloneView 让你能够通过熟悉的、类似资源管理器的界面，在本地磁盘和多个云存储服务之间轻松浏览、传输和整理文件。   

本指南将带你了解：   

- 浏览远程存储
- 使用拖放复制文件
- 使用右键菜单管理文件
 
## 浏览远程存储

你可以打开任何已连接的云远程，并像浏览本地文件夹一样查看它。

### 如何浏览远程：

1. 点击**资源管理器面板**中的 **`+`** 标签页。
2. 选择你要打开的远程存储。
3. 所选远程将在新标签页中打开，可以立即进行文件操作。

<div class="img-grid-2">
<img src="/support/images/en/howto/rcloneview-basic/file-explorer-open-remote.png" alt="file explorer open remote" class="img-medium img-center" />
<img src="/support/images/en/howto/rcloneview-basic/file-explorer-remote-open-complete.png" alt="file explorer remote open complete" class="img-medium img-center" />
</div>

:::tip 视图布局
前往 **`设置 > 布局`** 可在纵向和横向视图之间切换 
<img src="/support/images/en/howto/rcloneview-basic/explorer-view-layout.png" alt="explorer view layout" class="img-small img-left" />
:::

## 使用拖放复制文件

你可以通过简单的拖放操作在本地和云存储之间传输文件。
#### 在两个远程之间复制

在 RcloneView 中将文件从一个远程标签页拖到另一个标签页，即可在云存储之间复制文件。
<video src="/support/videos/en/howto/rcloneview-basic/rclonview-explorer-drag-and-drop.mp4" class="video-medium video-center" controls muted loop playsinline>
  rclonview explorer drag and drop
</video>

**👉  多选和批量操作**
你可以一次选择多个文件以执行批量操作。
- 使用 **`Ctrl + 点击`** 选择多个单独的文件。
- 使用 **`Shift + 点击`** 选择一系列文件。

**👉  拖放行为 **
- **同一远程** = 移动操作  
- **不同远程** = 复制操作


:::tip 提示
-  如果你不想在复制过程中看到确认弹窗，取消勾选**确认拖放**复选框。
- 若要之后重新启用该弹窗，请前往**设置 > 常规设置 > 确认拖放**并重新勾选。
:::

#### 从 Windows 资源管理器复制到 RcloneView 中的远程
- 你也可以直接从 **Windows 文件资源管理器**将文件拖入 RcloneView 标签页，将其上传到云存储。
<video src="/support/videos/en/howto/rcloneview-basic/windows-explorer-drag-and-drop.mp4" class="video-medium video-center" controls muted loop playsinline>
  windows explorer drag and drop
</video>
### 使用右键菜单管理文件

RcloneView 通过便捷的右键菜单支持完整的文件操作。

### 可用操作：

- <img src="/support/icons/download-icon.png" alt="download icon" class="inline-icon" />**下载** – 将文件保存到本地磁盘  
- <img src="/support/icons/upload-icon.png" alt="upload icon" class="inline-icon" />**上传** – 将本地文件发送到云远程  
- <img src="/support/icons/copy icon.png" alt="copy icon" class="inline-icon" />**复制 / <img src="/support/icons/paste-icon.png" alt="paste icon" class="inline-icon" />粘贴** – 在文件夹或远程之间复制文件  
- <img src="/support/icons/cut-icon.png" alt="cut icon" class="inline-icon" />**剪切 / <img src="/support/icons/paste-icon.png" alt="paste icon" class="inline-icon" />粘贴** – 将文件移动到其他位置  
- <img src="/support/icons/delete-icon.png" alt="delete icon" class="inline-icon" />**删除** – 移除文件或文件夹  
- <img src="/support/icons/rename-icon.png" alt="rename icon" class="inline-icon" />**重命名** – 重命名文件或文件夹  
- <img src="/support/icons/new-folder-icon.png" alt="new folder icon" class="inline-icon" />**新建文件夹** – 创建新文件夹  
- <img src="/support/icons/refresh-icon.png" alt="refresh icon" class="inline-icon" />**重新加载** – 刷新文件夹内容
