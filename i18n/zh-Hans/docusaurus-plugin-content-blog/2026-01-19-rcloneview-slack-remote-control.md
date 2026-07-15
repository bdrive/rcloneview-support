---
slug: rcloneview-slack-remote-control
title: "RcloneView Slack 远程控制：随时随地在手机上管理云任务"
authors:
  - steve
description: "通过安全的应用和简单的斜杠命令，直接从 Slack 接收实时任务提醒，并启动、停止或查看 RcloneView 任务。"
keywords:
  - rcloneview slack
  - rclone slack bot
  - rclone remote control
  - rcloneview notifications
  - slack chatops
  - cloud backup alerts
  - remote job management
  - rcloneview job status
tags:
  - RcloneView
  - backup
  - cloud-storage
  - job-management
  - security
  - automation
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import RvCta from '@site/src/components/RvCta';

# RcloneView Slack 远程控制：随时随地在手机上管理云任务

> 将 RcloneView 变成一个聊天运维（chatops）控制台：即使不在电脑旁，也可以通过 Slack 获取任务提醒、查看任务列表并启动或停止任务。

借助 Slack 远程控制功能，RcloneView 会将任务的开始、完成和错误提醒发送到你的手机，并支持通过简单的斜杠命令来运行或停止任务。对于耗时较长的备份、通宵进行的同步，或是希望通过手机快速控制的远程服务器来说，这项功能非常实用。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 你可以在 Slack 中做什么

- **实时通知**：任务开始、完成或出错时立即收到提醒。
- **查看任务列表**：以简洁的列表形式查看所有已注册的 RcloneView 任务。
- **远程任务控制**：通过任务名称或序号（#N）启动任务，或即时停止任务。
- **按需查看状态**：随时查看进度、传输速度和预计剩余时间。

*注意：RcloneView 必须在你的电脑或服务器上运行，才能处理 Slack 命令。*

## 前提条件

- 已安装并正在运行 RcloneView（桌面版或无界面版）。
- 拥有一个 Slack 账户及你自己的工作区。
- 具备网络连接。

---

## 步骤 1：创建你的 Slack 应用（使用清单文件）

为了实现最大程度的安全性，RcloneView 采用"私有应用"方式，由你自行创建机器人。这样可以确保你的数据不会经过任何第三方服务器——而是直接从你的电脑传输到 Slack。

1. 前往 [Slack API Dashboard](https://api.slack.com/apps)，点击 **[Create New App]**。
   
2. 选择 **[From a manifest]**。
   
3. 选择你要安装该应用的 **Workspace**，然后点击 **[Next]**。
4. 选择 **[JSON]** 选项卡，删除已有内容，粘贴以下代码：

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
                "description": "Start a job (Enter number or name)",
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

5. 点击 **[Next]**，然后点击 **[Create]** 完成应用创建。

---

## 步骤 2：获取你的令牌（Tokens）

设置 RcloneView 需要用到两种类型的令牌。**请像对待密码一样妥善保管，切勿与他人分享。**

### ① 获取 App Token（用于 Socket Mode）

1. 在左侧菜单中，进入 **[Basic Information]**。
2. 向下滚动到 **[App-Level Tokens]** 部分，点击 **[Generate Token and Scopes]**。
3. 将名称设置为 `RcloneView`，点击 **[Add Scope]**，选择 `connections:write`，然后点击 **[Generate]**。
4. 复制以 `xapp-...` 开头的令牌并保存。

### ② 获取 Bot Token（用于消息传递）

1. 在左侧菜单中，进入 **[Install App]**。
2. 点击绿色的 **[Install to Workspace]** 按钮，然后点击 **[Allow]**。
3. 复制以 `xoxb-...` 开头的 **Bot User OAuth Token** 并保存。

---

### 步骤 3：启用消息选项卡

1. 在左侧菜单中点击 **App Home**。
2. 开启 `Messages Tab`。
3. 勾选 `Allow users to send Slash commands and messages from the messages tab`。

这样即可直接向你的机器人发送斜杠命令。

---

## 步骤 4：查找你的成员 ID（Member ID）

机器人需要你的唯一 ID，才能知道要将通知（DM）发送给哪个用户。

1. 打开你的 Slack 应用，点击你的头像，选择 **[Profile]**。
2. 点击 **[More (···)]** 按钮。
3. 在菜单底部选择 **[Copy member ID]**。（示例：`U1234567890`）
   <img src="/support/images/en/tutorials/slack/slack-copy-member-id.png" alt="Copy Slack Member ID" class="img-large img-center" />


---

## 步骤 5：在 RcloneView 中启用 Slack 控制

1. 打开 RcloneView，进入 **Settings -> Interfaces & Notifications**。
2. 打开 **Slack Remote Control** 开关。
3. 在对应字段中输入你的 **App Token**、**Bot Token** 和 **Member ID**。
4. 点击 **[Send Test Message]**，确认能在手机上收到消息。

---

## ⌨️ 命令指南（ChatOps）

在机器人所在的任意聊天中输入以下命令：

* `/help` - 显示所有可用命令。
* `/joblist` - 列出当前连接下所有已注册的任务。
* `/start <jobName>` - 通过任务的确切名称启动任务。
* `/start #<number>` - 使用 `/joblist` 中的序号启动任务（例如 `/start #1`）。
* `/stop <JobId>` - 使用任务 ID 停止正在运行的任务。
* `/jobstatus <JobId>` - 查看指定任务的实时进度和统计信息。

---

## 安全与管理提示

* **用户身份验证**：只有配置的 Member ID 才有权限执行命令。
* **令牌轮换**：如果你的令牌不慎泄露，请立即前往 Slack API 页面点击 `Regenerate`。
* **离线状态**：如果 RcloneView 未在运行，Slack 机器人将不会响应命令。

## 相关资源

* [RcloneView 基础指南](https://www.google.com/search?q=https://rcloneview.com/support/howto/rcloneview-basic)
* [任务调度与自动化](https://www.google.com/search?q=https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling)
* [实时传输监控](https://www.google.com/search?q=https://rcloneview.com/support/howto/rcloneview-basic/monitoring)

## 总结

Slack 让 RcloneView 化身为移动指挥中心：你能随时收到通知，即时启动或停止任务，并更快地应对故障。只需设置一次，妥善保管好令牌，即使你不在电脑前，也能安心管理你的云自动化任务。

<CloudSupportGrid />
