---
slug: rcloneview-discord-remote-control
title: "RcloneView Discord 远程控制：在 Discord 中管理云端任务"
authors:
  - steve
description: "通过使用您自己的安全机器人、Application ID 和 Discord User ID，从 Discord 获取任务提醒并运行 RcloneView 命令。"
keywords:
  - rcloneview discord
  - rclone discord bot
  - rclone remote control
  - rcloneview notifications
  - discord chatops
  - cloud backup alerts
  - remote job management
  - rcloneview job status
tags:
  - job-management
  - security
  - automation
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import RvCta from '@site/src/components/RvCta';

# RcloneView Discord 远程控制：在 Discord 中管理云端任务

> 将 RcloneView 变成一个 Discord chatops 控制台：获取任务提醒、列出任务，并可以在不打开电脑的情况下从 Discord 启动或停止任务。

借助 Discord 远程控制,RcloneView 会向您发送任务开始、完成和出错的提醒,并接受简单的命令来运行或停止任务。对于长时间的备份、通宵的同步,或是您仍希望通过桌面端或移动端 Discord 进行快速控制的远程服务器来说,这个功能非常适合。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 您可以在 Discord 中做什么

- **实时通知**：在任务开始、完成或发生错误时立即收到提醒。
- **列出任务**：以简洁的列表查看您已注册的所有 RcloneView 任务。
- **远程任务控制**：按名称或按索引（#N）启动任务,或立即停止任务。
- **按需查看状态**：随时查看进度、传输速度和预计剩余时间。

*注意：RcloneView 必须在您的电脑或服务器上运行,才能处理 Discord 命令。*

## 前提条件

- 已安装并正在运行 RcloneView（桌面版或无界面版）。
- 一个 Discord 账户。
- 一个可以安装机器人的 Discord 服务器（Guild Install）。
- 网络连接。

---

## 步骤 1：创建您的 Discord 应用和机器人

为了最大限度地保证安全,RcloneView 采用“自带机器人”的方式。您的数据直接在 RcloneView 和 Discord 之间传输——没有第三方中转。

1. 前往 [Discord Developer Portal](https://discord.com/developers/applications) 并点击 **New Application**。为其命名（例如 `RcloneView`）。
2. 打开 **Installation**,将 Installation Context 选择为 **Guild Install**（如已启用 User Install 请关闭）,然后保存。
3. 前往 **Bot** 标签页,点击 **Add Bot**,然后复制或重置以获取您的 **Discord Bot Token**。请妥善保密。
4. 如果您打算发送纯文本命令（不仅仅是斜杠命令）,请在 Bot 标签页中启用 **MESSAGE CONTENT INTENT**,以便 RcloneView 可以读取命令文本。

---

## 步骤 2：创建服务器并安装机器人

要使用该机器人,您需要一个机器人可以驻留的 Discord 服务器（也称为 "Guild"）。如果您还没有用于存放 RcloneView 日志的私人服务器,请按照以下步骤操作。

### 步骤 2-1 创建一个新的 Discord 服务器

1. 打开您的 **Discord 应用**（桌面端或网页版）。
2. 点击左侧服务器列表底部的**加号（+）图标**（Add a Server）。
3. 选择 **Create My Own**。
4. 选择 **For me and my friends**。
5. 为您的服务器命名（例如 `RcloneView Control Center`）,然后点击 **Create**。


### 步骤 2-2 将机器人安装到您的服务器

1. 返回 **Discord Developer Portal**。
2. 打开 **OAuth2 > URL Generator**。
3. 选择作用域：**bot** 和 **applications.commands**。
4. 在 **Bot Permissions** 中,选择 **Send Messages**、**Use Slash Commands**,以及 **Attach Files**（如果您希望接收日志文件）。
5. 复制页面底部生成的 URL,并将其粘贴到浏览器中。
6. 选择您刚刚创建的服务器（例如 `RcloneView Control Center`）,然后点击 **Authorize**。

---

## 步骤 3：收集 RcloneView 所需的信息

- **Discord Bot Token**：来自 **Bot** 标签页（步骤 1-3）。
- **Discord Application ID**：来自 Developer Portal 中的 **General Information**。
- **My Discord User ID (Snowflake)**：一个可以唯一标识您的长数字 ID。

### 如何获取您的 Discord User ID

1. 在 Discord（桌面端或网页版）中,打开 **User Settings**（⚙️）。
2. 前往 **Advanced**,并打开 **Developer Mode** 开关。
3. 右键点击您的**头像**或**用户名**（位于左下角或成员列表中）,选择 **Copy User ID**。保存这串数字（例如：`123456789012345678`）。

为什么需要这个 ID？

- **安全性**：应用只处理来自您账户的命令。
- **直接通知**：机器人可以准确知道在任务开始或失败时应向哪位用户发送私信。

---

## 步骤 4：在 RcloneView 中启用 Discord 控制

1. 打开 RcloneView,前往 **Settings -> Interfaces & Notifications**。
2. 打开 **Discord Remote Control** 开关。
3. 在相应字段中输入您的 **Discord Bot Token**、**Discord Application ID** 和 **My Discord User ID**。
4. 点击 **Send Test Message**,验证您是否收到了来自机器人的私信。

---

## ⌨️ 命令指南（ChatOps）

向机器人发送命令（建议使用私信以保护隐私；如果机器人有访问权限,频道内也可以使用）：

- `/help` — 显示所有可用命令。
- `/joblist` — 列出当前连接下所有已注册的任务。
- `/start <jobName>` — 按确切名称启动任务。
- `/start #<number>` — 使用 `/joblist` 中的索引启动任务（例如 `/start #1`）。
- `/stop <JobId>` — 使用 Job ID 停止正在运行的任务。
- `/jobstatus <JobId>` — 查看指定任务的实时进度和统计信息。

---

## 安全与管理提示

- **用户识别**：只有配置的 Discord User ID 才有权限执行命令。
- **令牌安全**：请将您的 Bot Token 和 Application ID 视为密码一样对待。如果泄露,请立即重置。
- **在线状态**：如果 RcloneView 未运行,Discord 机器人将不会响应命令。

## 相关资源

- [RcloneView 基础指南](https://www.google.com/search?q=https://rcloneview.com/support/howto/rcloneview-basic)
- [任务调度与自动化](https://www.google.com/search?q=https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling)
- [实时传输监控](https://www.google.com/search?q=https://rcloneview.com/support/howto/rcloneview-basic/monitoring)

## 结语

Discord 让 RcloneView 变成了一个移动指挥中心：您可以随时收到通知,即时启动或停止任务,并更快地应对故障。只需设置一次,妥善保管好您的令牌,即使您离开办公桌,也能自信地管理您的云端自动化任务。

<CloudSupportGrid />
