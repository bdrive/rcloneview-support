---
sidebar_position: 1
description: "RcloneView 界面布局的可视化说明，包括标题栏、主菜单、文件浏览器和传输选项卡。"
keywords:
  - rcloneview
  - rclone GUI
  - cloud file manager
  - remote storage management
  - file explorer
  - cloud to cloud transfer
  - file synchronization
  - rcloneview interface
  - rcloneview layout
  - toolbar
  - transfer status
tags:
  - RcloneView
  - UI-guide
  - file-explorer
  - Remote-Storage
  - layout
  - interface
  - cloud-file-transfer
  - Remote-storage-managent
date: 2025-05-27
author: Jay
---
# RcloneView 界面指南

RcloneView 提供直观的布局，用户可以在本地存储和云端远程之间浏览、比较和传输文件。以下是各部分的详细说明。

<img src="/support/images/en/howto/rcloneview-basic/rcloneview-user-interface.png" alt="rcloneview user interface" class="img-large img-center" />
## ① 标题栏

显示应用程序名称和标准窗口控制按钮：

- `—`：最小化
- `□`：最大化 / 还原
- `X`：退出 RcloneView

## ② 主菜单栏

用于访问核心功能的主导航选项卡：

- **`Home`** – 文件同步和比较工具、任务调度以及多窗口支持
- **`Remote`** – 添加、配置和挂载云存储远程
- **`Settings`** – 管理远程连接、常规首选项和界面布局
- **`Help`** – 访问产品支持、许可证激活、反馈和更新检查

## ③ 工具栏

工具栏会根据所选菜单选项卡动态变化：

  ### 选择 `Home` 时：

| 按钮          | 说明                                                                          |
| ------------- | ------------------------------------------------------------------------------------ |
| `Sync`        | 在两个浏览器窗格中所选目录之间同步文件和文件夹 |
| `Compare`     | 比较两个浏览器窗格中所选目录之间的差异           |
| `Job Manager` | 在常用远程之间创建和管理定期同步任务     |
| `New Window`  | 打开新的 RcloneView 窗口以连接到不同的 Rclone 守护进程实例        |
 
### 选择 `Remote` 时：

<img src="/support/images/en/howto/rcloneview-basic/remote-tab-toolbar.png" alt="remote tab toolbar" class="img-medium img-center" />

| 按钮           | 说明                                                                      |
| ---------------- | -------------------------------------------------------------------------------- |
| `New Remote`     | 创建与云存储远程的新连接                                |
| `Remote Manager` | 查看、编辑或删除已保存的远程                                              |
| `Mount Manager`  | 将远程挂载为本地驱动器                                                  |
| `Job Manager`    | 在常用远程之间创建和管理定期同步任务 |
  
### 选择 `Settings` 时：
<img src="/support/images/en/howto/rcloneview-basic/settings-menu-toolbar.png" alt="settings menu toolbar" class="img-medium img-center" />

| 按钮             | 说明                                                                                                  |
| ------------------ | ------------------------------------------------------------------------------------------------------------ |
| `Connect Manager`  | 管理并切换内置或外部 Rclone 守护进程连接                                     |
| `General settings` | 配置应用程序语言、文件路径、主题、拖放行为、内置 Rclone 选项等。 |
| `Layout`           | 在文件夹树和文件列表视图的水平与垂直窗格布局之间切换                   |
| `View count`       | 在单窗格和双窗格文件浏览器视图之间切换                                                 |

### 选择 `Help` 时：
<img src="/support/images/en/howto/rcloneview-basic/help-menu-toolbar.png" alt="help menu toolbar" class="img-medium img-center" />

| 按钮                 | 说明                           |
| ---------------------- | ------------------------------------- |
| `Check for Updates`    | 检查是否有新版本可用   |
| `Feedback`             | 提交反馈或报告问题      |
| `Homepage`             | 访问 RcloneView 官方网站 |
| `Register License Key` | 激活您的 PLUS 许可证            |

## ④ 文件浏览器窗格

每个窗格都允许您使用选项卡界面浏览本地驱动器或云端远程。
您可以在每个窗格中打开不同的来源，并轻松地在它们之间传输文件。

  <img src="/support/images/en/howto/rcloneview-basic/file-explorer-pannel-layout.png" alt="file explorer panel layout" class="img-medium img-center" />
该窗格包含以下组件：

1. **选项卡栏** – 显示当前连接（例如 Local Disk、myAwsS3、myGoogleDrive）
2. **面包屑路径栏** – > 显示当前文件夹路径，支持通过点击或输入并配合自动建议进行快速导航。
3. **窗格工具栏** – 包括以下快捷操作：
	- <img src="/support/icons/alias-icon.png" alt="alias icon" class="inline-icon" /> **创建别名（收藏）** — 将当前文件夹保存为收藏夹以便快速访问
	- <img src="/support/icons/mount-icon.png" alt="mount icon" class="inline-icon" />**挂载文件夹** — 将所选文件夹挂载为本地驱动器
	- <img src="/support/icons/settings-icon.png" alt="settings icon" class="inline-icon" /> **编辑远程设置** — 修改所连接远程的配置
	- <img src="/support/icons/refresh-icon.png" alt="refresh icon" class="inline-icon" /> **刷新** — 重新加载当前文件夹的内容
4. **文件夹树** – 可折叠的文件夹导航器
5. **文件/文件夹列表视图** – 显示名称、类型、修改日期和大小等内容
6. **摘要页脚** – 显示文件/文件夹总数和总文件大小

## ⑤ 传输状态选项卡

显示同步或文件传输操作的状态和历史记录：

| 选项卡             | 说明                                                                                  |
| --------------- | -------------------------------------------------------------------------------------------- |
| **`Transfer`**  | 显示所有正在进行的活动传输任务，包括速度、进度和剩余时间 |
| **`Completed`** | 列出所有已完成的同步或复制任务，包含时间、大小和任务 ID 等详细信息               |
| **`Log`**       | 显示带时间戳的日志条目，包括时间戳、任务类型、消息和状态               |
## ⑥ 页脚

- **版本信息**：RcloneView 当前运行的版本（例如 `RcloneView 0.6.301`）
- **许可证信息**：显示许可证类型（`FREE License` 或 `PLUS License`）
- **Rclone 连接信息**：显示所连接的 rclone 实例、服务器地址和操作系统
  - 示例：`Connected to rclone v1.69.1 (http://127.0.0.1:5582, windows)`
