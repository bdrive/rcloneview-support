---
sidebar_position: 9
description: 使用 RcloneView 中的 Telegram 远程控制功能接收任务通知，并通过 Telegram 远程列出、启动、停止任务及查看任务状态。
keywords:
  - rcloneview
  - telegram 远程控制
  - telegram 机器人
  - 任务通知
  - 远程任务控制
  - rclone 任务管理器
tags:
  - RcloneView
  - Tutorial
  - Telegram
  - Remote-Control
  - Job-Management
date: 2025-12-17
author: tayson
---

# RcloneView Telegram 远程控制

Telegram 远程控制功能可让您接收 RcloneView 的任务通知，并直接从 Telegram 控制任务——无需坐在电脑前。

本教程涵盖：

- 创建 Telegram 机器人（BotFather）
- 查找您的 Telegram Chat ID
- 在 RcloneView 中启用 Telegram 远程控制
- 使用 Telegram 命令列出/启动/停止任务并查看状态
- 实用示例与安全注意事项

---

## 什么是 Telegram 远程控制？

Telegram 远程控制是 RcloneView 内置的功能，可让您：

- 接收任务开始/完成/出错的通知
- 列出任务
- 远程启动任务
- 停止正在运行的任务
- 查看任务进度/状态

只要 RcloneView 在运行，您就可以仅用手机来管理任务。

---

## 前置条件

- 已安装并运行 RcloneView
- 一个 Telegram 账户
- 网络连接
- 创建 Telegram 机器人的权限（通过 BotFather）

---

## 步骤 1：创建 Telegram 机器人（BotFather）

### 步骤 1-1：打开 BotFather

1. 打开 Telegram。
2. 搜索 **BotFather**。
3. 打开 BotFather 聊天窗口。

<img src="/support/images/en/tutorials/telegram/telegram-botfather-search.jpg" alt="telegram botfather search" class="img-large img-center" />

### 步骤 1-2：创建新机器人

使用 BotFather 创建一个新机器人并设置：

- **机器人名称**（显示名称）
- **机器人用户名**（必须以 `bot` 结尾）

示例：

- 机器人名称：`RcloneView_test_bot`
- 机器人用户名：`rcloneview_test_bot`

<img src="/support/images/en/tutorials/telegram/telegram-newbot_rcloneview_test_bot.jpg" alt="telegram create new bot" class="img-large img-center" />

### 步骤 1-3：保存您的机器人令牌（重要）

机器人创建后，BotFather 会给您一个类似以下的令牌：

```
123456789:AAHxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

:::caution 妥善保管令牌
在 RcloneView 设置中需要使用此令牌。请勿公开分享。
:::

<img src="/support/images/en/tutorials/telegram/telegram-bot-token.jpg" alt="telegram bot token" class="img-large img-center" />

---

## 步骤 2：在 Telegram 中启动您的机器人（重要）

在通过 `getUpdates` 获取您的 Chat ID 之前，必须先与您的机器人开始聊天。

### 步骤 2-1：搜索您的机器人

1. 通过名称或用户名搜索您的机器人。
2. 打开机器人聊天窗口。

<img src="/support/images/en/tutorials/telegram/telegram-search-my-bot.jpg" alt="telegram search my bot" class="img-large img-center" />

### 步骤 2-2：点击 Start 并发送一条消息

1. 点击 **Start**（或发送 `/start`）。
2. 再发送一条消息（例如：`hi`）。

这样会创建一条更新记录，供您稍后从 Telegram 读取。

<img src="/support/images/en/tutorials/telegram/telegram-start-bot.jpg" alt="telegram start bot" class="img-large img-center" />

---

## 步骤 3：查找您的 Telegram Chat ID

### 步骤 3-1：在浏览器中打开 getUpdates

打开以下网址（替换为您自己的令牌）：

```
https://api.telegram.org/bot<YOUR_BOT_TOKEN>/getUpdates
```

<img src="/support/images/en/tutorials/telegram/telegram-get-chat-id_1.png" alt="telegram getUpdates url" class="img-large img-center" />
<img src="/support/images/en/tutorials/telegram/telegram-get-chat-id_2.png" alt="telegram getUpdates example url" class="img-large img-center" />

### 步骤 3-2：提取 `chat.id`

在 JSON 响应中，找到：

```json
"chat": {
  "id": 987654321
}
```

您的 **Chat ID** 就是 `chat.id` 中的数字（示例：`987654321`）。

<img src="/support/images/en/tutorials/telegram/telegram-get-chat-id_3.png" alt="telegram chat id" class="img-large img-center" />

---

## 步骤 4：在 RcloneView 中启用 Telegram 远程控制

### 步骤 4-1：打开设置

1. 打开 RcloneView。
2. 进入 **设置**。
3. 选择 **接口与通知**。
4. 找到 **Telegram 远程控制**。

### 步骤 4-2：开启该功能

启用 **Telegram 远程控制**：

<img src="/support/images/en/tutorials/telegram/rcloneview-telegram-enable.png" alt="rcloneview telegram enable" class="img-large img-center" />

### 步骤 4-3：输入令牌和 Chat ID

- **Telegram Bot Token**：来自 BotFather
- **Telegram Chat ID**：来自 `getUpdates`

<img src="/support/images/en/tutorials/telegram/rcloneview-telegram-fields.png" alt="rcloneview telegram token chat id fields" class="img-large img-center" />

### 步骤 4-4：发送测试消息

点击 **发送测试消息**。如果成功，您将收到：
`RcloneView Telegram Test Message`

<img src="/support/images/en/tutorials/telegram/telegram-test-message.jpg" alt="telegram test message" class="img-large img-center" />

---

## 步骤 5：Telegram 命令（任务控制）

在与机器人的 Telegram 聊天中输入以下命令。

### `/help`

显示所有可用命令：

```
/help
```

<img src="/support/images/en/tutorials/telegram/telegram-help.jpg" alt="telegram help" class="img-large img-center" />

### `/listjobs`

列出当前选定连接的任务：

```
/listjobs
```

示例输出：

```
Total: 3
1) Backup_Photos
2) Sync_Documents
3) Archive_To_NAS
```

<img src="/support/images/en/tutorials/telegram/telegram-listjobs.jpg" alt="telegram listjobs" class="img-large img-center" />

### `/start <jobName>`

按名称启动任务：

```
/start Backup_Photos
```

:::note 任务名称必须完全匹配
使用 `/listjobs` 复制准确的任务名称。
:::

<img src="/support/images/en/tutorials/telegram/telegram-job-start_by_jobname.jpg" alt="telegram start by job name" class="img-large img-center" />

### `/start #<number>`（推荐）

根据最近一次 `/listjobs` 结果中的编号启动任务：

```
/start #2
```

:::important 请先运行 `/listjobs`
该编号基于当前的任务列表输出。
:::

<img src="/support/images/en/tutorials/telegram/telegram-job-start_by_index_1.jpg" alt="telegram start by index step1" class="img-large img-center" />
<img src="/support/images/en/tutorials/telegram/telegram-job-start_by_index_2.jpg" alt="telegram start by index step2" class="img-large img-center" />

### `/stop <jobId>`

停止正在运行的任务：

```
/stop 123
```

<img src="/support/images/en/tutorials/telegram/telegram-job-stop.jpg" alt="telegram job stop" class="img-large img-center" />

### `/status <jobId>`

显示正在运行任务的进度：

```
/status 123
```

<img src="/support/images/en/tutorials/telegram/telegram-job-status.jpg" alt="telegram job status" class="img-large img-center" />

---

## 自动任务通知

启用 Telegram 远程控制后，RcloneView 可以自动发送以下通知：

- 任务已开始
- 任务成功完成
- 任务出错失败

<img src="/support/images/en/tutorials/telegram/telegram-job-notifications.jpg" alt="telegram job notifications" class="img-large img-center" />

---

## 安全注意事项

- 只有来自配置的 **Chat ID** 的命令才会被处理。
- 请对 **机器人令牌** 保密，将其视为密码对待。
- 如果您想暂停远程控制，可在设置中关闭该开关。

---

## 总结

Telegram 远程控制让长时间运行的任务更易于操作：

- 远程管理任务
- 通过实时通知随时掌握进度
- 无需打开电脑即可从手机控制任务

当您运行计划备份、同步或大型传输任务，并希望随时随地掌握进度时，不妨试试这个功能。
