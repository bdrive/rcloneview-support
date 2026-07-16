---
slug: rcloneview-telegram-remote-control
title: "RcloneView Telegram 远程控制：随时随地在手机上管理云任务"
authors:
  - tayson
description: "通过安全的 Bot 和几个简单的命令，即时接收任务提醒，并直接从 Telegram 启动、停止或查看 RcloneView 任务。"
keywords:
  - rcloneview telegram
  - rclone telegram bot
  - rclone remote control
  - rcloneview notifications
  - mobile job control
  - rclone chatops
  - cloud backup alerts
  - remote job management
  - rcloneview job status
  - rclone cli telegram
tags:
  - RcloneView
  - backup
  - cloud-storage
  - job-management
  - security
  - automation
---


import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# RcloneView Telegram 远程控制：随时随地在手机上管理云任务

> 将 RcloneView 变成一个聊天式控制台：即使不在电脑旁，也能通过 Telegram 接收任务提醒、列出任务，并启动或停止任务。

借助 Telegram 远程控制，RcloneView 会将任务开始、完成和出错的提醒发送到你的手机,并接受简单的聊天命令来运行或停止任务。这非常适合长时间备份、通宵同步,或者你仍希望能快速控制的无头（headless）服务器场景。

<!-- truncate -->

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

## 你可以在 Telegram 中做什么

- 接收通知：任务开始、任务完成、任务出错。
- 列出可用任务。
- 按名称或索引启动任务。
- 停止正在运行的任务。
- 按需查看任务进度和状态。

RcloneView 必须处于运行状态（桌面版或无头模式）才能处理 Telegram 命令。

## 前置条件

- 已安装并正在运行 RcloneView。
- 拥有 Telegram 账号。
- 具备网络连接。
- 拥有创建 Telegram Bot 的权限（通过 BotFather）。

## 创建你的 Telegram Bot（BotFather）

1. 打开 Telegram，搜索 **BotFather**，然后打开对话。  
   <img src="/support/images/en/tutorials/telegram/telegram-botfather-search.jpg" alt="telegram botfather search" class="img-large img-center" />

2. 创建 Bot：设置一个 **Bot Name（机器人名称）** 和一个以 `bot` 结尾的 **Bot Username（机器人用户名）**。  
   示例：`RcloneView_test_bot` / `rcloneview_test_bot`。  
   <img src="/support/images/en/tutorials/telegram/telegram-newbot_rcloneview_test_bot.jpg" alt="telegram create new bot" class="img-large img-center" />

3. 复制 BotFather 显示的 **Bot Token**。请妥善保密——RcloneView 需要用它来完成设置。  
   <img src="/support/images/en/tutorials/telegram/telegram-bot-token.jpg" alt="telegram bot token" class="img-large img-center" />

## 启动你的 Bot（重要）

你必须先启动一次 Bot，Telegram 才能返回你的聊天更新。

1. 按名称或用户名搜索你的 Bot，然后打开对话。  
   <img src="/support/images/en/tutorials/telegram/telegram-search-my-bot.jpg" alt="telegram search my bot" class="img-large img-center" />

2. 点击 **Start（开始）**（或发送 `/start`），然后再发送一条消息（例如 `hi`）。  
   <img src="/support/images/en/tutorials/telegram/telegram-start-bot.jpg" alt="telegram start bot" class="img-large img-center" />

## 查找你的 Telegram Chat ID

1. 在浏览器中打开：  
   `https://api.telegram.org/bot<YOUR_BOT_TOKEN>/getUpdates`

<img src="/support/images/en/tutorials/telegram/telegram-get-chat-id_1.png" alt="telegram getUpdates url" class="img-large img-center" />
<img src="/support/images/en/tutorials/telegram/telegram-get-chat-id_2.png" alt="telegram getUpdates example url" class="img-large img-center" />

2. 在 JSON 响应中，记下 `chat.id` 中的数字（例如：`987654321`）。这就是你的 Chat ID。  
   <img src="/support/images/en/tutorials/telegram/telegram-get-chat-id_3.png" alt="telegram chat id" class="img-large img-center" />

:::caution 请对令牌保密
请像对待密码一样对待 Bot Token 和 Chat ID。只有配置的 Chat ID 才被允许控制任务。
:::

## 在 RcloneView 中启用 Telegram 远程控制

1. 打开 **Settings -> Interfaces & Notifications（设置 -> 接口与通知）**。
2. 打开 **Telegram Remote Control（Telegram 远程控制）**。  
   <img src="/support/images/en/tutorials/telegram/rcloneview-telegram-enable.png" alt="rcloneview telegram enable" class="img-large img-center" />

3. 输入你的 **Bot Token** 和 **Chat ID**。  
   <img src="/support/images/en/tutorials/telegram/rcloneview-telegram-fields.png" alt="rcloneview telegram token chat id fields" class="img-large img-center" />

4. 点击 **Send Test Message（发送测试消息）**。你应该会收到：`RcloneView Telegram Test Message`。  
   <img src="/support/images/en/tutorials/telegram/telegram-test-message.jpg" alt="telegram test message" class="img-large img-center" />

## 命令指南（任务的聊天式操作）

在与 Bot 的对话中使用以下命令：

- `/help` - 显示所有命令。  
  <img src="/support/images/en/tutorials/telegram/telegram-help.jpg" alt="telegram help" class="img-large img-center" />

- `/listjobs` - 列出当前连接下的任务。  
  <img src="/support/images/en/tutorials/telegram/telegram-listjobs.jpg" alt="telegram listjobs" class="img-large img-center" />

- `/start <jobName>` - 按确切名称启动任务。  
  <img src="/support/images/en/tutorials/telegram/telegram-job-start_by_jobname.jpg" alt="telegram start by job name" class="img-large img-center" />

- `/start #<n>`（推荐）- 按最近一次 `/listjobs` 中的列表索引启动任务。  
  <img src="/support/images/en/tutorials/telegram/telegram-job-start_by_index_1.jpg" alt="telegram start by index step1" class="img-large img-center" />
  <img src="/support/images/en/tutorials/telegram/telegram-job-start_by_index_2.jpg" alt="telegram start by index step2" class="img-large img-center" />

- `/stop <jobId>` - 停止正在运行的任务。  
  <img src="/support/images/en/tutorials/telegram/telegram-job-stop.jpg" alt="telegram job stop" class="img-large img-center" />

- `/status <jobId>` - 查看进度和已传输大小。  
  <img src="/support/images/en/tutorials/telegram/telegram-job-status.jpg" alt="telegram job status" class="img-large img-center" />

## 为什么它对自动化很重要

- 通宵或长时间传输：接收提醒后即可重启或停止,无需通过 VPN 连回主机。
- 计划备份：立即确认成功或失败，并在手机上重新运行。
- 多云任务：即使不在控制台前，也能保持统一的控制中心。
- 更快的故障响应：迅速停止失控的任务、重新排程，或切换到其他预设。

## 安全提示

- 只有配置的 Chat ID 才能执行命令。
- 如果 Bot Token 曾经泄露，请及时轮换。
- 如果暂时不需要远程命令，请在设置中禁用 Telegram 远程控制。

## 相关资源

- [如何使用 Telegram 远程控制（教程）](https://rcloneview.com/support/tutorials/telegram-remote-control)
- [创建和管理任务](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [执行和管理任务](https://rcloneview.com/support/howto/rcloneview-basic/execute-manage-job)
- [任务调度](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)
- [实时传输监控](https://rcloneview.com/support/howto/rcloneview-basic/real-time-transfer-monitoring)
- [使用内置终端](https://rcloneview.com/support/tutorials/rcloneview-terminal-rclone-cli-inside-gui) <!-- replace with actual link if different -->

## 总结

Telegram 让 RcloneView 变成了一个移动指挥中心：你能持续收到通知，能即时启动或停止任务，也能更快地应对故障。设置一次，保管好令牌，即使离开桌面，也能放心地运行你的云端自动化任务。

<CloudSupportGrid />
