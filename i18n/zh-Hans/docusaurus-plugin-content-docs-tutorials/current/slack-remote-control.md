---

sidebar_position: 10
description: "在 RcloneView 中使用 Slack 远程控制来接收任务通知，并从 Slack 远程列出、启动、停止任务以及查看任务状态。"
keywords:
  - rcloneview
  - slack 远程控制
  - slack 机器人
  - 任务通知
  - 远程任务控制
  - rclone 任务管理器
tags:
  - RcloneView
  - Tutorial
  - Slack
  - Remote-Control
  - Job-Management
date: 2026-01-19
author: steve

---

# RcloneView Slack 远程控制

Slack 远程控制功能让您无需坐在电脑前，即可接收 RcloneView 任务通知并直接从 Slack 控制任务。

本教程涵盖以下内容：

* 创建 Slack 应用（使用 App Manifest）
* 签发所需的令牌（App Token 和 Bot Token）
* 查找您的 Slack 会员 ID
* 在 RcloneView 中启用 Slack 远程控制
* 使用 Slack 命令列出、启动、停止任务并查看状态

---

## 什么是 Slack 远程控制？

Slack 远程控制是 RcloneView 内置的功能，可让您：

* 实时接收任务开始、完成和出错的通知
* 列出已注册的任务
* 远程启动任务
* 停止正在运行的任务
* 按需查看任务进度和状态

只要 RcloneView 在运行，您就可以仅使用手机上的 Slack 应用来管理云端任务。

---

## 前提条件

* 已安装并运行 RcloneView（桌面版或无头版）
* 一个 Slack 账户和工作区
* 互联网连接

---

## 步骤 1：创建 Slack 应用（App Manifest）

为了实现最快、最准确的设置，我们使用 "App Manifest" 方式创建您的机器人。

### 1-1 打开 Slack API 控制台

1. 前往 [Slack API 控制台](https://api.slack.com/apps)。
2. 点击 **Create New App** 按钮。

### 1-2 使用 Manifest 创建

1. 选择 **From an app manifest** 选项。
2. 选择要安装该应用的 **Workspace**（工作区）。
3. 选择 **JSON** 选项卡，并粘贴以下配置代码：

```json
{
    "display_information": {
        "name": "RcloneView",
        "description": "Effortlessly browse, organize, transfer files across your cloud storages.",
        "background_color": "#3f2f3f"
    },
    "features": {
        "bot_user": {
            "display_name": "RcloneView",
            "always_online": false
        },
        "slash_commands": [
            {
                "command": "/help",
                "description": "Show all commands",
                "should_escape": false
            },
            {
                "command": "/joblist",
                "description": "List jobs",
                "should_escape": false
            },
            {
                "command": "/start",
                "description": "Starts a job (Enter number or name)",
                "usage_hint": "<#number> or <jobName>",
                "should_escape": false
            },
            {
                "command": "/stop",
                "description": "Stop a running job by JobId",
                "usage_hint": "<JobId>",
                "should_escape": false
            },
            {
                "command": "/jobstatus",
                "description": "Check status by JobId",
                "usage_hint": "<JobId>",
                "should_escape": false
            }
        ]
    },
    "oauth_config": {
        "scopes": {
            "bot": [
                "commands",
                "chat:write",
                "chat:write.public",
                "im:write",
                "app_mentions:read",
                "files:write"
            ]
        }
    },
    "settings": {
        "interactivity": {
            "is_enabled": true
        },
        "org_deploy_enabled": false,
        "socket_mode_enabled": true,
        "token_rotation_enabled": false
    }
}

```

4. 点击 **Next**，然后点击 **Create** 完成设置。

---

## 步骤 2：签发并保存令牌

RcloneView 需要两种类型的令牌。**请像对待密码一样妥善保管这些令牌。**

### 2-1 签发 App Token（用于 Socket Mode）

1. 在左侧菜单中点击 **Basic Information**。
2. 在 **App-Level Tokens** 部分下，点击 **Generate Token and Scopes**。
3. 将令牌命名为 `RcloneView`，添加 `connections:write` 权限范围，然后生成令牌。
4. 保存以 **`xapp-`** 开头的令牌。

### 2-2 获取 Bot Token

1. 在左侧菜单中点击 **Install App**。
2. 点击 **Install to Workspace**，然后点击 **Allow**。
3. 复制以 **`xoxb-`** 开头的 **Bot User OAuth Token**。

---

### 步骤 3：启用 Messages 选项卡

1. 在左侧菜单中点击 **App Home**。
2. 打开 `Messages Tab`
3. 勾选 `Allow users to send Slash commands and messages from the messages tab`

这将允许您直接向机器人发送斜杠命令。

---

## 步骤 4：查找您的 Slack 会员 ID

机器人需要您的唯一 ID，才能知道应将通知发送给哪位用户。

1. 打开 Slack，点击您的**头像**，然后选择 **Profile**。
2. 点击 **More(···)** 按钮，选择 **Copy member ID**。
3. 保存该 ID（例如 `U1234567890`）。
   <img src="/support/images/en/tutorials/slack/slack-copy-member-id.png" alt="Copy Slack Member ID" class="img-large img-center" />

---

## 步骤 5：在 RcloneView 中启用 Slack 远程控制

### 5-1 打开设置

1. 启动 RcloneView。
2. 前往 **Settings** -> **Interfaces & Notifications**。

### 5-2 输入凭据

1. 打开 **Slack Remote Control** 开关。
2. 输入您的令牌和 ID：
* **Slack App Token**：`xapp-...`
* **Slack Bot Token**：`xoxb-...`
* **My Member ID**：`U...`

### 5-3 发送测试消息

点击 **Send Test Message**。如果成功，您将在手机上收到一条消息。

---

## 步骤 6：Slack 命令（任务控制）

在安装了该机器人的任意聊天中输入以下命令。

### `/help`

显示所有可用命令。

### `/joblist`

列出当前所选连接的任务。

### `/start <jobName>`

按名称启动指定任务。

### `/start #<number>`（推荐）

使用最近一次 `/joblist` 结果中的序号启动任务（例如 `/start #1`）。

### `/stop <JobId>`

停止正在运行的任务。

### `/jobstatus <JobId>`

查看指定任务的实时进度和统计信息。

---

## 自动任务通知

启用后，RcloneView 会自动发送以下通知：

* 任务已开始
* 任务已成功完成
* 任务因出错而失败

---

## 安全须知

* 只有来自已配置的 **Member ID** 的命令才会被处理。
* 请对您的 **App Token** 和 **Bot Token** 保密。
* 如需暂停远程控制，只需在设置中关闭该开关即可。

---

## 总结

Slack 远程控制让管理长时间运行的云端任务变得更加高效：

* 无论身处何地都能进行远程任务管理
* 通过通知实时获取状态更新
* 无需电脑，通过手机即可即时控制

立即完成一次性设置，享受更智能的云端自动化体验！
