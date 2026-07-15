---
sidebar_position: 2
description: 了解如何使用 RcloneView 添加、编辑和删除云端与本地远程,包括 Google Drive、Dropbox、WebDAV、S3 等。
keywords:
  - rcloneview
  - remote storage management
  - add remote
  - remote manager
  - cloud sync
  - cloud storage
  - open remote
  - delete remote
  - google drive
  - Dropbox
  - s3 compatible
  - aws s3
  - webdav
  - SFTP
  - Onedrive
  - icloud
  - mega
tags:
  - RcloneView
  - Remote-Storage
  - Remote-manager
  - Remote-storage-managent
  - remote-connection
  - remote-control
  - cloud-storage
date: 2025-06-20
author: Jay
---
# 在 RcloneView 中添加和管理远程存储

RcloneView 允许您连接并管理云端和本地存储服务。  
本指南将说明如何使用 RcloneView **添加**、**编辑**和**删除**远程存储。

## 添加新远程

您可以先打开**新建远程**对话框,然后完成设置来添加新的远程存储。

### 打开**新建远程**对话框

您可以使用以下方法之一打开**`新建远程`**设置对话框:

<div class="img-grid-3">
<img src="/support/images/en/howto/rcloneview-basic/create-remote-top-remote-menu.png" alt="create remote top remote menu" class="img-medium img-center" />
<img src="/support/images/en/howto/rcloneview-basic/create-remote-by-plus-button.png" alt="create remote by plus button" class="img-medium img-center" />
<img src="/support/images/en/howto/rcloneview-basic/create-remote-by-remote-manager.png" alt="create remote by remote manager" class="img-medium img-center" />
</div>

#### 方法 1：使用顶部远程菜单

点击顶部远程选项卡上的 **`+ 新建远程`**。

#### 方法 2：使用文件浏览面板中的 `+` 按钮

点击文件浏览面板(左侧或右侧)中的 **`+`** 图标,然后选择**新建远程**。

#### 方法 3：使用远程管理器

点击**`远程`**选项卡中的**`远程管理器`**按钮,然后点击空白远程卡片上的**`+`**按钮。


### 设置新远程

打开**新建远程**对话框后,选择远程类型(例如 Google Drive、Dropbox、S3)并填写所需设置。  

字段会根据所选提供商而有所不同。

有关特定提供商的详细说明,请参阅[**远程存储连接设置**](/howto/category/remote-storage-connection-settings)。  

## 在 RcloneView 中管理现有远程

将远程添加到 RcloneView 后,您可以通过多种方式对其进行管理——包括打开、编辑或删除它们。以下指南将说明如何执行每项操作。

### 在浏览面板中打开远程

您可以打开远程的文件夹视图,以浏览或在本地与云端之间传输文件。

<div class="img-grid-3">
<img src="/support/images/en/howto/rcloneview-basic/open-remote-by-remote-card.png" alt="open remote by remote card" class="img-medium img-center" />
<img src="/support/images/en/howto/rcloneview-basic/open-remote-by-plus-button.png" alt="open remote by plus button" class="img-medium img-center" />
<img src="/support/images/en/howto/rcloneview-basic/open-remote-by-remote-manager.png" alt="open remote by remote manager" class="img-medium img-center" />
</div>

#### 方法 1：点击远程卡片上的 `打开` 按钮

点击右侧面板中任意远程卡片上的**`打开`**按钮。

#### 方法 2：使用浏览面板的 `+` 按钮打开远程

点击左侧或右侧**浏览面板**中的**`+`**按钮,将显示当前已配置的所有远程列表。

1. 点击您想要打开远程的浏览面板中的 `+` 图标。
2. 将出现一个下拉列表,显示所有可用的远程。
3. 从列表中选择所需的远程(例如 `MyWebDAV`)。
4. 所选远程将在您点击的面板中打开。如果该面板中已打开其他远程,则会为所选远程添加一个**新标签页**。

:::note
标记为**收藏(别名)**的远程会显示在列表**顶部**,以便更快访问。
:::
#### 方法 3：使用远程管理器的 `打开` 按钮

1. 点击工具栏中的**远程管理器**按钮。
2. 在远程管理器对话框中,找到所需的远程。
3. 点击**`打开`**以在文件浏览面板中打开它。

:::tip 从系统托盘快速访问
您可以通过点击系统托盘中的 RcloneView 图标,并从列表中选择一个远程,快速打开该远程。  
<img src="/support/images/en/howto/rcloneview-basic/open-remote-via-system-tray.png" alt="open remote via system tray" class="img-small img-left" />
:::

### 编辑远程设置


您可以使用以下方法之一修改现有远程的设置:

<div class="img-grid-2">
<img src="/support/images/en/howto/rcloneview-basic/edit-remote-from-explorer-panel.png" alt="edit remote from explorer panel" class="img-medium img-center" />
<img src="/support/images/en/howto/rcloneview-basic/edit-remote-from-remote-manager.png" alt="edit remote from remote manager" class="img-medium img-center" />
</div>


#### 方法 1：从浏览面板编辑  

如果您当前正在**浏览面板**中浏览某个远程,请点击活动远程面板右上角的**齿轮图标(⚙️)**。

这将打开**编辑远程**对话框,您可以在其中更新所选远程的**提供商**和**选项**值。  

 ⚠️ **注意:** 您无法在此处重命名远程。


#### 方法 2：从远程管理器编辑  

1. 点击**远程**菜单下主工具栏中的**远程管理器**按钮。  
2. 在**远程管理器**窗口中,找到您要编辑的远程。  
3. 点击远程卡片上的**编辑**按钮以打开**编辑远程**对话框。

此方法同样允许您更改**提供商**和**选项**,但**远程名称**保持不变。


### 删除远程


如果您不再需要某个已配置的远程,可以使用**远程管理器**安全地将其删除。

<img src="/support/images/en/howto/rcloneview-basic/delete-remote.png" alt="delete remote" class="img-medium img-center" />

1. 在顶部菜单的**远程**选项卡中,点击工具栏中的**远程管理器**按钮。
2. 在**远程管理器**窗口中,找到您要删除的远程。
3. 点击相应远程卡片上的**`删除`**按钮。

此操作将:
- 从您的配置中永久删除该远程。
- 如果该远程当前已在浏览面板中打开,则会自动将其关闭。
