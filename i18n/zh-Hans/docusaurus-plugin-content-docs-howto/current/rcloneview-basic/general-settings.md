---
sidebar_position: 10
description: 了解如何在 RcloneView 中配置常规首选项、界面布局、通知以及内嵌 Rclone 设置。
keywords:
  - rcloneview
  - rclone
  - rcloneview settings
  - 常规首选项
  - dark mode
  - rclone log
  - rclone configurations
tags:
  - RcloneView
  - settings
  - configuration
  - preferences
date: 2025-06-22
author: Jay
---
# 常规设置

为了更清晰、更便于自定义，RcloneView 的**设置**菜单分为四个选项卡：

- **常规**
- **界面与通知**
- **内嵌 Rclone**
- **网络与其他**

每个选项卡都可以配置应用程序的不同部分。以下是各部分的详细说明。

---

## 🛠 常规

<img src="/support/images/en/howto/rcloneview-basic/general-settings.png" alt="general settings" class="img-medium img-center" />
### 语言

- **语言**：从下拉菜单中选择您偏好的界面语言。

### 启动行为

- **登录时启动**：在您登录系统时自动启动 RcloneView。

:::important 自动启动：调度与挂载

启用**登录时启动**后：  

- [**任务调度器**](/howto/rcloneview-advanced/job-scheduling-and-execution) 中定义的所有计划任务将在登录后自动运行。  
- [**挂载管理器**](/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive#method-1-mount-from-remote-explorer) 中配置为自动挂载的所有远程将在 RcloneView 启动时自动挂载。  
:::

- **最小化启动**：将 RcloneView 启动到系统托盘中。

- **自动检测 Synology NAS**：自动扫描本地网络以查找 Synology NAS 设备。

### 重置

- **恢复默认设置**：将所有选项重置为其原始默认值。

---

## 🎛  界面与通知

<img src="/support/images/en/howto/rcloneview-basic/interface-settings.png" alt="interface settings" class="img-medium img-center" />
### 界面外观

- **深色模式**：在浅色和深色主题之间切换。
- **主题色**：从可用的强调色中选择。

### 拖放

- **确认拖放**：在通过拖放移动文件时启用确认弹窗。

### 显示任务类型（传输日志过滤器）

选择要在传输日志面板中显示的任务类型：
- **下载**
- **上传**
- **同步**

<img src="/support/images/en/howto/rcloneview-basic/notification-dialogs-settings.png" alt="notification dialogs settings" class="img-medium img-center" />
### 通知对话框

决定您在使用 RcloneView 时希望接收哪些类型的弹出通知：

- **显示任务状态日志**：在每个传输任务完成后显示详细的日志对话框。
- **显示比较完成**：在文件夹比较任务成功完成时通知您。
- **在比较中删除文件前显示确认**：在文件夹比较过程中删除任何文件之前要求确认。
- **显示同步完成通知**：在同步操作完成时显示消息。
- **显示网络错误对话框**：在任务执行期间发生网络连接错误时立即提醒您。

---

## ⚙️ 内嵌 Rclone

<img src="/support/images/en/howto/rcloneview-basic/embedded-rclone-settings.png" alt="embedded rclone settings" class="img-medium img-center" />

### 内嵌生命周期

- **应用退出时停止 rclone**：在 RcloneView 关闭时自动关闭内嵌的 `rclone` 进程。

:::caution 更改后需要重启

在**内嵌 Rclone**选项卡中修改任何设置后——包括路径配置、全局标志或日志选项——请点击**重启内嵌 Rclone**以应用更改。  
这将重启内嵌的 Rclone 进程，并可能中断当前正在运行的任务。

:::
### 路径设置

- **本地 Rclone 位置**：您的 `rclone` 二进制文件的绝对路径。
- **本地 Rclone 配置位置**：`rclone.conf` 文件的路径（包含远程信息）。
- **默认下载文件夹**：下载文件的保存目录。
- **默认上传文件夹**：用作上传任务源的目录。

   <img src="/support/images/en/howto/rcloneview-basic/embedded-rclone-advanced-options-settings.png" alt="embedded rclone advanced options settings" class="img-medium img-center" />
### 高级选项

- **全局 Rclone 标志**：传递给 rclone 的附加标志（例如 `--s3-directory-markers`）。
- **配置密码**：用于加密 rclone 配置的密码。如果设置了此密码，则 rclone 配置文件将被加密。

<img src="/support/images/en/howto/rcloneview-basic/embedded-rclone-logging-configuration-settings.png" alt="embedded rclone logging configuration settings" class="img-medium img-center" />
### 日志配置

- **启用 rclone 日志记录**：为 Rclone 操作启用基于文件的日志记录。
- **日志文件夹**：存储日志文件的目录。
- **日志文件名**：日志的默认文件名。
- **日志级别**：选择详细程度（DEBUG、INFO、NOTICE、ERROR）。

---

## 🌐 网络与其他

<img src="/support/images/en/howto/rcloneview-basic/network-etc-settings.png" alt="network etc settings" class="img-medium img-center" />

### 网络

- **代理设置**：配置代理（功能即将推出）。
- **Rclone 连接管理器**：查看或管理活动的 Rclone 连接。  
  → [了解更多](/howto/rcloneview-basic/connection-manager)

### 诊断

- **应用日志**：打开内部日志以协助排查问题或错误报告。

---

## ✅ 总结

这些设置使您能够完全掌控 RcloneView 在启动时的行为方式、如何与 Rclone 交互，以及如何向您传达任务结果或错误。无论您是在调度同步任务、自动挂载驱动器，还是排查网络问题，都可以根据自己的工作流程进行调整。
