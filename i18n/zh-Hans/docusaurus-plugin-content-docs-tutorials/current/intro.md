---
sidebar_position: 2
description: "了解如何使用 RcloneView 与 Wasabi 配合,在本地存储和其他云之间浏览、备份、同步和迁移数据。"
keywords:
  - rcloneview
  - wasabi
  - s3-compatible
  - cloud backup
  - cloud sync
  - cloud migration
  - file synchronization
  - gui
  - rclone gui
tags:
  - RcloneView
  - cloud-file-transfer
  - cloud-migration
  - cloud-backup
  - Tutorial
  - wasabi
date: 2025-02-20
author: Jay
slug: /
---

# 在 RcloneView 中使用 Wasabi(兼容 S3)

RcloneView 是一款桌面应用程序,为 **rclone** 提供可视化的双栏资源管理器界面。它让你无需使用命令行,即可在 **Wasabi** 与其他云存储或本地存储之间复制、同步和迁移文件。

使用 RcloneView,你可以:

- 像浏览本地文件夹一样浏览 Wasabi 存储桶  
- 在**本地磁盘 ↔ Wasabi** 或 **Wasabi ↔ 其他云**之间拖放文件  
- 运行一次性传输任务或安排定期同步任务  

如果你想先看看实际效果,可以观看简短的演示视频:

<iframe
  src="https://www.youtube.com/embed/yKc6qS2DG2A"
  title="Wasabi + RcloneView Demo"
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  allowFullScreen
  loading="lazy"
  style={{aspectRatio: '16 / 9', width: '100%', maxWidth: '960px', height: 'auto', display: 'block', margin: '0 auto', border: 0}}
></iframe>

<br />

> 有关 RcloneView 的更多信息,请访问官方网站:[https://rcloneview.com](https://rcloneview.com)  


---

## 1. 下载并安装 RcloneView

RcloneView 支持 **Windows、macOS 和 Linux**。

1. 访问下载页面:[https://rcloneview.com/src/download](https://rcloneview.com/src/download)。  
2. 选择适合你操作系统的安装程序(Windows、macOS 或 Linux)。  
3. 安装并启动 **RcloneView**。

---

## 2. 在 RcloneView 中添加 Wasabi 作为远程

RcloneView 将 Wasabi 视为**兼容 S3** 的后端。你只需创建一次远程,即可在浏览、复制、同步和计划任务中重复使用。

### 2.1 前提条件——Wasabi 访问密钥和端点

要将 RcloneView 连接到 Wasabi,你需要:

- **访问密钥(Access Key)** / **私密密钥(Secret Key)**  
- **区域/端点 URL**(例如区域 `ap-northeast-2` 和端点 `s3.ap-northeast-2.wasabisys.com`)  

请参考 Wasabi 的官方文档来创建访问密钥并查找你的端点:

- Wasabi 文档:[https://docs.wasabi.com/docs](https://docs.wasabi.com/docs)  
- 示例:"[Creating a New Access Key](https://docs.wasabi.com/docs/creating-a-new-access-key)" 或 "[Creating a Bucket](https://docs.wasabi.com/docs/creating-a-bucket)"(在 Wasabi 文档门户中搜索)。

获得**访问密钥**、**私密密钥**和**端点**后,返回 RcloneView。

### 2.2 打开"新建远程"向导

1. 启动 **RcloneView**。  
2. 在顶部菜单中,点击 **`远程` → `+ 新建远程`**。  
   - 或点击资源管理器窗格中的 **`+`** 标签,然后选择 **`新建远程`**。

<div class="img-grid-2">
<img src="/support/images/en/howto/remote-storage-connection-settings/add-new-remote.png" alt="add new remote" class="img-medium img-center" />
<img src="/support/images/en/howto/remote-storage-connection-settings/add-new-remote-explorer.png" alt="add new remote explorer" class="img-medium img-center" />
</div>

### 2.3 将 Wasabi 配置为兼容 S3 的提供商

1. 在**新建远程**对话框中,搜索 `Wasabi`。  
2. 选择 **Wasabi** 提供商图标。  
3. 配置连接:
   - **远程名称**:输入一个清晰的名称,例如 `MyWasabi`。  
   - **Access Key ID**:粘贴你的 Wasabi 访问密钥。  
   - **Secret Access Key**:粘贴你的 Wasabi 私密密钥。  
   - **端点**:输入 Wasabi S3 端点(例如 `s3.ap-northeast-2.wasabisys.com`)。  
4. 点击**添加远程**。

<img src="/support/images/en/tutorials/add-new-wasabi-remote-configuration.png" alt="add new wasabi remote configuration" class="img-large img-center" />

### 2.4 验证 Wasabi 远程

1. 打开 **`远程 → 远程管理器`**。  
2. 确认你的 Wasabi 远程(例如 `MyWasabi`)已列出且可访问。

<img src="/support/images/en/tutorials/verify-wasabi-in-remote-manager.png" alt="verify wasabi in remote manager" class="img-large img-center" />

有关更多详情,请参阅通用的兼容 S3 指南:  
- [How to Add S3-Compatible Remote](/howto/remote-storage-connection-settings/s3)

---

## 3. 浏览 Wasabi 中的文件夹

创建远程后,你可以在 RcloneView 的资源管理器中浏览存储桶和对象。

1. 在资源管理器窗格中,点击 **`+`** 标签。  
2. 在"打开远程"列表中,选择你的 **Wasabi** 远程(例如 `MyWasabi`)。  
3. RcloneView 会在一个标签页中打开该远程,存储桶显示为顶层文件夹。  
4. 双击存储桶以浏览其内容。

<img src="/support/images/en/tutorials/wasabi-remote-in-rcloneview-explorer.png" alt="wasabi remote in rcloneview explorer" class="img-large img-center" />

有关更多通用导航技巧,请参阅:  
- [File Management with RcloneView](/howto/rcloneview-basic/browse-and-manage-remote-storage)

---

## 4. 在本地磁盘和 Wasabi 之间管理文件

本节介绍如何使用 RcloneView 在本地计算机和 Wasabi 之间移动数据的实用方法。

你可以打开:

- **左侧窗格**:本地磁盘(例如 `C:\` 或特定文件夹)  
- **右侧窗格**:你的 Wasabi 远程存储桶  

然后根据你的工作流程使用拖放、文件夹比较或同步任务。

---

### 4.1 在本地和 Wasabi 之间拖放

拖放是复制文件最简单的方法。

1. 在左侧窗格中,打开你的**本地文件夹**(例如 `D:\Media`)。  
2. 在右侧窗格中,打开你的 **Wasabi 存储桶/文件夹**。  
3. 在左侧选择文件或文件夹。  
4. 将它们拖到右侧窗格并放到目标位置。  
5. RcloneView 会启动传输任务;进度会显示在**传输**标签页中。

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="wasabi drag and drop" class="img-large img-center" />
有关多选、右键操作等更多信息,请参阅:  
- [File Management with RcloneView](/howto/rcloneview-basic/browse-and-manage-remote-storage)

---

### 4.2 比较文件夹并复制已更改的文件

如果你想在复制前查看**差异**,可以使用**比较**功能。

典型用例:比较本地备份文件夹与 Wasabi 备份文件夹。

1. 在左侧窗格中,打开**源文件夹**(例如本地或其他云)。  
2. 在右侧窗格中,打开 **Wasabi 目标文件夹**。  
3. 在顶部**主页**菜单中点击 **`比较`**。  
4. RcloneView 会标记:
   - 仅存在于左侧的文件(仅源)  
   - 仅存在于右侧的文件(仅目标)  
   - 已更改的文件(大小、时间戳或校验和不同)  
5. 选择要移动的项目并点击**复制 →**(反方向则点击**← 复制**)。

<img src="/support/images/en/tutorials/wasabi-and-local-compare-and-copy.png" alt="wasabi and local compare and copy" class="img-large img-center" />
了解更多:  
- [Compare Folder Contents](/howto/rcloneview-basic/compare-folder-contents)

---

### 4.3 在本地磁盘和 Wasabi 之间执行同步任务

对于可重复的备份或镜像,请使用**同步**。同步会使目标与源保持一致。

有三种常见模式:

- **即时同步**(立即运行一次)  
- **已保存的同步任务**(需要时重新运行)  
- **计划同步任务**(按计划自动运行)  

> ⚠️ 同步会将目标更新为与源一致;仅存在于目标中的文件可能会被删除。运行前请仔细检查同步设置。

#### 4.3.1 即时同步(一次性)

1. 在左侧窗格中打开**源文件夹**(例如本地文件夹)。  
2. 在右侧窗格中打开**目标 Wasabi 文件夹**。  
3. 在**主页**菜单中点击 **`同步`**。  

<img src="/support/images/en/tutorials/wasabi-and-local-instant-sync.png" alt="wasabi and local instant sync" class="img-large img-center" />

然后,在**同步**对话框中:

1. 在**配置存储**中,确认源和目标。  
2. 根据需要调整**高级设置**或**筛选设置**。  
3. 如果想预览更改,可先运行**试运行**。  
4. 点击**运行**以启动同步。

<img src="/support/images/en/tutorials/wasabi-configure-sync-job.png" alt="wasabi configure sync job" class="img-large img-center" />
运行同步后,你可以实时监控文件传输进度。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="wasabi real time monitoring transferring" class="img-large img-center" />

参考:  
- [Synchronize Remote Storages Instantly](/howto/rcloneview-basic/synchronize-remote-storages)

#### 4.3.2 保存同步任务以便重复使用

如果你会定期运行相同的本地 → Wasabi 备份:  
按上述方式配置同步(源在左侧,Wasabi 目标在右侧)。    

1. 在同步对话框中,选择**保存到任务**,而不是立即运行。  
2. 为任务取一个描述性名称,例如 `SyncLocalToWasabi`。  
3. 之后,打开**任务管理器**,在需要更新备份时手动运行该任务。

<img src="/support/images/en/tutorials/wasabi-saved-sync-job-execution.png" alt="wasabi saved sync job execution" class="img-large img-right" />  
在受支持的平台上(例如 Windows),任务完成时 RcloneView 可以显示系统通知。

参考:  
- [Create Sync Jobs](/howto/rcloneview-basic/create-sync-jobs)  
- [Execute & Manage Jobs](/howto/rcloneview-basic/execute-manage-job)

#### 4.3.3 安排自动 Wasabi 备份(任务计划)

要完全自动化对 Wasabi 的备份,请为你的同步任务设置计划。

> 📌 **任务计划是 PLUS 功能。** 你需要 [PLUS 许可证](https://rcloneview.com/src/pricing.html) 才能启用计划功能。

从工具栏打开**任务管理器**。    
1. 选择你的 Wasabi 同步任务(例如 `LocalToWasabi_DailyBackup`)并点击**编辑任务**,或根据当前资源管理器的选择创建新任务。  
2. 转到**步骤 4:计划**。  
3. 启用**在指定时间单位内运行 ~**,并设置计划(例如每天 01:00)。  
4. 使用**模拟**预览即将到来的运行时间。  
5. 保存任务并保持 RcloneView 运行;该任务将自动执行。

<img src="/support/images/en/tutorials/scheule-automatic-wasabi-backup.png" alt="scheule automatic wasabi backup" class="img-large img-center" />


有关更深入的详情:  
- [Job Scheduling and Automated Execution](/howto/rcloneview-advanced/job-scheduling-and-execution)

---

### 4.4 使用挂载在 Windows 资源管理器中操作 Wasabi

你可以将 Wasabi 存储桶挂载为系统上的**虚拟驱动器或文件夹**,然后像往常一样使用 Windows 资源管理器(或 macOS 上的 Finder)。

典型流程:

确保你的 Wasabi 远程已配置并可正常工作。  
1. 选择你要挂载的 Wasabi 文件夹。  
2. 点击 RcloneView 资源管理器右上角的**挂载**图标。  
3. 点击**保存并挂载**按钮以开始挂载。  
4. 片刻之后,操作系统中会出现一个新的驱动器或文件夹。浏览该路径即可通过 RcloneView/rclone 直接读写 Wasabi 中的数据。

<img src="/support/images/en/tutorials/mount-wasabi-as-local-drive.png" alt="mount wasabi as local drive" class="img-large img-center" />
更多信息:  
- [Mount Cloud Storage as a Local Drive](/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive)

---

## 5. 从哪里获得帮助

- RcloneView 文档和操作指南:[https://rcloneview.com/support](https://rcloneview.com/support)  
- Wasabi 文档门户:[https://docs.wasabi.com](https://docs.wasabi.com)  

通过将 Wasabi 兼容 S3 的对象存储与 RcloneView 的可视化任务管理相结合,你可以构建可靠的备份、同步和迁移工作流程,而无需学习 rclone 命令行语法。
