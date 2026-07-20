---
sidebar_position: 5
description: "了解如何使用 RcloneView 强大的同步功能，在本地或云存储之间即时镜像文件夹。包含设置、过滤器、模拟运行和计划任务选项。"
keywords:
  - rcloneview
  - cloud
  - sync
  - rclone
  - sync folders
  - bidirectional sync
  - sync job
  - dry run
  - scheduled sync
  - job scheduling
  - Job Monitor
tags:
  - RcloneView
  - Cloud
  - Sync
  - cloud-storage
  - file-synchronization
  - job-scheduler
  - dry-run
  - Remote-Storage
date: 2025-06-04
author: Jay
---
# 即时同步远程存储

使用 RcloneView 的 **`同步`** 功能，可以即时在云端远程或本地存储之间镜像文件夹。  

本指南将引导你完成同步操作的设置和运行。
## 选择源文件夹和目标文件夹

要开始同步操作，你需要定义 **源** 文件夹和 **目标** 文件夹。

- 在 **资源管理器** 面板中，打开两个标签页：
	- **左侧标签页** 中选中的文件夹将成为 **源**
	- **右侧标签页** 中选中的文件夹将成为 **目标**

- 你也可以使用每个标签页顶部的 **路径栏** 直接输入文件夹路径。
- 如果需要，这些设置之后可以在 **同步** 配置窗口中调整。

选定文件夹后，点击顶部 **`主页`** 菜单中的 **`同步`** 按钮以继续。
<img src="/support/images/en/howto/rcloneview-basic/sync-remote-folder-select.png" alt="sync remote folder select" class="img-medium img-center" />
## 运行同步操作

选择好源文件夹和目标文件夹后，你可以配置并运行同步。


<div class="img-grid-3">
<img src="/support/images/en/howto/rcloneview-basic/sync-configure-storage.png" alt="sync configure storage" class="img-medium img-center" />
<img src="/support/images/en/howto/rcloneview-basic/sync-advanced-settings.png" alt="sync advanced settings" class="img-medium img-center" />
<img src="/support/images/en/howto/rcloneview-basic/sync-filtering-settings.png" alt="sync filtering settings" class="img-medium img-center" />
</div>

### 第 1 步：核实文件夹路径

- 在 **`配置存储`** 步骤中，检查所选的源文件夹和目标文件夹。
- 在点击 **下一步** 之前，请确保两者都设置正确。

:::caution 同步的工作原理
RcloneView 同步会使源和目标保持一致。  
这意味着 **`仅修改目标`**。  
- **源** 文件夹的内容会被镜像到 **目标**。  
- 目标中存在但源中不存在的文件将被 **删除**。  

👍 **重要提示：** Rclone 官方仅正式支持 **单向同步**。  
⚠️ **双向同步（=Bidirection）** 目前是 **测试版功能**，尚未获得官方正式支持。它可能导致意外行为或错误，因此 **不建议在生产环境中使用**。
:::

<details>
<summary>配置存储详情</summary>

<img src="/support/images/en/howto/rcloneview-basic/sync-config-storage-details.png" alt="sync config storage details" class="img-medium img-center" />

1. **选择源文件夹**。   
 - 点击左侧面板中的文件夹图标以选择源。  
2. **选择目标文件夹**。 
- 点击右侧面板中的文件夹图标以选择目标。  
3. **添加额外的目标**（可选）。 
- 点击 **添加目标** 按钮可同时同步到多个目标。如有需要，你可以配置 **1:N 同步**。  
4. **选择同步方向**。 
 - **仅修改目标**：从源同步到目标。更新或删除目标内容以匹配源。  
 - **双向同步**（测试版）：比较两个文件夹并双向同步变更。  
⚠️ 此模式可能会无意中覆盖新文件，请谨慎使用。  
5. **创建空目录**（可选）。   
- 若启用，源中所有不包含文件的目录都会在目标中重新创建为空文件夹。  

:::caution 在 RcloneView 中使用双向同步
RcloneView 使用 `bisync`（rclone 中的一个测试版命令）来执行双向同步。    
由于该功能仍处于 **实验阶段**，在启用前我们建议先阅读官方 [用户手册](https://rclone.org/bisync/)——尤其是 [限制](https://rclone.org/bisync/#limitations) 部分。

不当使用 bisync 可能导致数据丢失，请谨慎使用。
:::


</details>

### 第 2 步：高级设置（可选）

  - 高级设置包括以下选项：
	  - 传输性能
	  - 连接方式
	  - 错误处理行为

> 💡 除非需要自定义行为，否则我们建议使用默认值。

<details>
<summary>高级设置详情</summary>

<img src="/support/images/en/howto/rcloneview-basic/sync-advanced-settings-details.png" alt="sync advanced settings details" class="img-medium img-center" /> 
**性能：**

1. **`文件传输数量`**：   
   并行运行的文件传输数量。如果远程经常出现超时，将其设置为较小的数值有时会有帮助；如果你有充足的带宽和快速的远程，则可以设置得更大。  
2. **`多线程传输数量`**：  
   使用多线程传输时，此项设置使用的流数量。设置为 `0` 可禁用多线程传输（默认 4）。在向支持该功能的后端传输超过 256MB 的文件时，rclone 会使用多个线程来传输文件。  
3. **`相等性检查器数量`**：  
   检查器在同步过程中对文件进行相等性检查。对于某些存储系统（如 S3、Swift、Dropbox），这可能会耗费大量时间，因此会并行运行。默认情况下会并行运行 8 个检查器。但是，对于响应较慢的后端，你可能需要将 `--checkers` 设置为 4 或更少的线程数来降低（而不是提高）该默认值。  


**安全性与完整性：**

5. **` 启用校验和比较文件`** ：  
   通常情况下，rclone 会通过查看文件的修改时间和大小来判断文件是否相等。如果设置此选项，rclone 将检查文件的哈希值和大小以确定文件是否相等。当在存储相同哈希类型的远程之间传输时（例如 Drive 和 Swift），此功能非常有用。有关哪些远程支持哪种哈希类型的详细信息，请参阅 [概览部分](https://rclone.org/overview/) 中的表格。  


**错误控制：**

5. **`同步失败时重试整个同步的次数`**：  
   如果整个同步失败达到此次数（默认 3 次），则重试整个同步。有些远程可能不太可靠，几次重试有助于获取因错误而未能传输的文件。将其设置为 `1` 可禁用重试。  

</details>



### 第 3 步：过滤文件和文件夹（可选）

- RcloneView 默认会针对 Google Docs 或 Box Docs 等服务应用基本过滤器。
- 你可以添加更多要从同步中排除的文件类型或文件夹。

<details>
<summary>过滤设置详情</summary>

<img src="/support/images/en/howto/rcloneview-basic/sync-filtering-settings-details.png" alt="sync filtering settings details" class="img-medium img-center" />

1. **`不同步超过此大小的文件`** ：  
   控制允许同步的 **最大文件大小**。  
   默认单位为 MB。  
2. **`不同步早于此时间的文件`** ：    
   控制允许同步的 **最长文件存留时间**。  
   此选项仅适用于 **文件**，不适用于目录。  
   使用以下单位：  
   `y` = 年，`d` = 天，`h` = 小时，`m` = 分钟，`s` = 秒（示例：2y30d12h30m45s）  
3. **`不同步超过此深度的文件夹`** ：   
   如果设置，Rclone 将只同步指定深度以内的文件夹。  
   例如，将此值设置为 `1` 将只同步顶层目录中的文件。  
   设置为 `2` 将同步前两层文件夹中的文件，以此类推。
4. **预定义过滤器**。   
   你可以为常见文件类型快速应用内置过滤器，例如：  
   - 音乐、视频、图片、文档、Google Docs、Box Docs  
     这些过滤器可作为过滤器列表中的预定义选项使用。
1. **其他（=自定义过滤器）**。  
   你可以定义自定义规则来排除或包含特定的文件类型、文件夹或路径。  
   以下是一些常见示例：  
   **`.iso`** ：排除所有 .iso 文件。  
   **`/.git/*`** ：仅排除根目录下 .git 文件夹内的文件，不包括子文件夹。  
   **`/.git/`** ：排除根目录下整个 .git 文件夹，包括其中的所有内容。   
   **`.git/`** ：排除所有位置的 .git 文件夹及其中的所有内容，无论其位于何处。   
   
   🔗 有关更多高级示例和语法，请参阅 [Rclone 过滤指南](https://rclone.org/filtering/#exclude-exclude-files-matching-pattern)


</details>

  
  
### 第 4 步：运行同步

- 所有设置完成后，点击 **运行** 以启动同步过程。

:::important 同步计划任务 
要在计划的日期和时间运行同步任务，请先点击 **保存到任务** 将同步任务注册为一个任务。然后运行 **`任务管理器`** 来配置计划。  

> ⚠️ **计划任务功能属于 PLUS 功能。**   

你需要购买 [**PLUS 许可证**](https://rcloneview.com/src/pricing.html) 才能启用此功能。
:::

### 模拟：运行模拟运行（可选）

你可以运行 **模拟运行** 来模拟同步操作，而不进行任何实际更改。

- 该预览会显示哪些文件将被复制到 **目标**，哪些文件将被删除。
- 点击 **`查看详情`** 可查看在目标中将发生的操作的完整列表（例如复制、创建、删除）。

<div class="img-grid-2">
<img src="/support/images/en/howto/rcloneview-basic/sync-dry-run.png" alt="sync dry run" class="img-medium img-center" />
<img src="/support/images/en/howto/rcloneview-basic/sync-dry-run-details.png" alt="sync dry run details" class="img-medium img-center" />
</div>

## 监控同步结果

你可以实时查看同步操作的进度和结果。

### 传输状态（进行中）

- 同步过程中，打开 **`传输`** 标签页可查看每个文件的实时进度。
- 点击 **+** 图标可展开并监控各个文件的传输情况。
<img src="/support/images/en/howto/rcloneview-basic/sync-transfer-window.png" alt="sync transfer window" class="img-medium img-center" />

### 已完成的任务（同步之后）

- 同步完成后，前往 **`已完成`** 标签页查看结果。
- 点击 **+** 图标可查看每个已完成任务的文件级详情。
<img src="/support/images/en/howto/rcloneview-basic/sync-completed-window.png" alt="sync completed window" class="img-medium img-center" />
:::tip 快速打开已同步的远程
在 **`已完成`** 标签页中，你可以双击任意已完成的任务，在资源管理器面板中同时打开源文件夹和目标文件夹。  
这样可以方便地立即查看已同步的文件夹。
:::

### 完成通知提醒（Windows）

同步完成后，Windows 系统托盘中会出现一个通知弹窗，显示同步操作的摘要信息。

  - 你可以点击 **`查看详情`** 查看结果的完整明细。
<img src="/support/images/en/howto/rcloneview-basic/sync-completed-windows-alarm.png" alt="sync completed windows alarm" class="img-medium img-center" />
:::tip 在 Windows 通知中查看提醒消息
如果你错过了弹窗，仍然可以通过点击 **Windows 系统托盘** 中的 **通知图标** 来查看同步提醒。
<img src="/support/images/en/howto/rcloneview-basic/click-windows-alarm-notification.png" alt="click windows alarm notification" class="img-small img-left" />
:::



## 将同步操作保存为任务

如果你经常执行相同的同步任务，可以将其保存为 **任务**，以便日后重复使用。

- 配置好同步后，点击 **`保存到任务`**。
- 输入 **任务名称**，然后点击 **保存** 以存储该任务。  
  - ❗允许使用的字符：`a–z`、`A–Z`、`0–9`、`-`、`_`、`.`
- 之后你可以在 **`任务管理器`** 中一键运行已保存的任务。

<img src="/support/images/en/howto/rcloneview-basic/save-sync-to-jobs.png" alt="save sync to jobs" class="img-medium img-center" />
你可以点击主页菜单中的 **`任务管理器`** 工具栏来查看和运行已保存的任务。
<img src="/support/images/en/howto/rcloneview-basic/verify-job-in-job-manager.png" alt="verify job in job manager" class="img-medium img-center" />
