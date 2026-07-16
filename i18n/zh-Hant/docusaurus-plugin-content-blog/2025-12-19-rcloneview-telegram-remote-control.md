---
slug: rcloneview-telegram-remote-control
title: "RcloneView Telegram 遠端控制：從手機管理雲端工作"
authors:
  - tayson
description: "透過安全的 Bot 與幾個簡單指令，即時取得工作提醒，並直接從 Telegram 啟動、停止或查看 RcloneView 工作。"
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
  - job-management
  - security
  - automation
---


import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# RcloneView Telegram 遠端控制：從手機管理雲端工作

> 將 RcloneView 變成聊天操作控制台：即使不在電腦前，也能取得工作提醒、列出工作,並啟動或停止工作。

透過 Telegram 遠端控制，RcloneView 會將工作開始、完成、錯誤等提醒發送到你的手機,並接受簡單的聊天指令來執行或停止工作。這對於長時間備份、隔夜同步或無圖形介面伺服器,而你仍想快速控制的情況非常實用。

<!-- truncate -->

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

## 你可以在 Telegram 上做什麼

- 接收通知：工作已開始、工作已完成、工作錯誤。
- 列出可用的工作。
- 依名稱或索引啟動工作。
- 停止執行中的工作。
- 隨時查看工作進度與狀態。

RcloneView 必須正在執行（桌面版或無圖形介面版）才能處理 Telegram 指令。

## 前置需求

- 已安裝並執行中的 RcloneView。
- Telegram 帳號。
- 網際網路連線。
- 建立 Telegram Bot 的權限（透過 BotFather）。

## 建立你的 Telegram Bot（BotFather）

1. 開啟 Telegram 並搜尋 **BotFather**，然後開啟聊天視窗。  
   <img src="/support/images/en/tutorials/telegram/telegram-botfather-search.jpg" alt="telegram botfather search" class="img-large img-center" />

2. 建立 Bot：設定一個 **Bot Name**（Bot 名稱）與一個以 `bot` 結尾的 **Bot Username**（Bot 使用者名稱）。  
   範例：`RcloneView_test_bot` / `rcloneview_test_bot`。  
   <img src="/support/images/en/tutorials/telegram/telegram-newbot_rcloneview_test_bot.jpg" alt="telegram create new bot" class="img-large img-center" />

3. 複製 BotFather 顯示的 **Bot Token**。請妥善保密——RcloneView 設定時需要用到它。  
   <img src="/support/images/en/tutorials/telegram/telegram-bot-token.jpg" alt="telegram bot token" class="img-large img-center" />

## 啟動你的 Bot（重要）

你必須先啟動一次 Bot,Telegram 才能回傳你的聊天更新。

1. 依名稱或使用者名稱搜尋你的 Bot 並開啟聊天視窗。  
   <img src="/support/images/en/tutorials/telegram/telegram-search-my-bot.jpg" alt="telegram search my bot" class="img-large img-center" />

2. 點選 **Start**（或傳送 `/start`），接著再傳送一則訊息（例如 `hi`）。  
   <img src="/support/images/en/tutorials/telegram/telegram-start-bot.jpg" alt="telegram start bot" class="img-large img-center" />

## 找到你的 Telegram Chat ID

1. 在瀏覽器中開啟：  
   `https://api.telegram.org/bot<YOUR_BOT_TOKEN>/getUpdates`

<img src="/support/images/en/tutorials/telegram/telegram-get-chat-id_1.png" alt="telegram getUpdates url" class="img-large img-center" />
<img src="/support/images/en/tutorials/telegram/telegram-get-chat-id_2.png" alt="telegram getUpdates example url" class="img-large img-center" />

2. 在 JSON 回應中，記下 `chat.id` 中的數字（範例：`987654321`）。那就是你的 Chat ID。  
   <img src="/support/images/en/tutorials/telegram/telegram-get-chat-id_3.png" alt="telegram chat id" class="img-large img-center" />

:::caution 妥善保管你的權杖
請將 Bot Token 與 Chat ID 視同密碼般保護。只有設定的 Chat ID 才被允許控制工作。
:::

## 在 RcloneView 中啟用 Telegram 遠端控制

1. 開啟 **Settings -> Interfaces & Notifications**（設定 -> 介面與通知）。
2. 開啟 **Telegram Remote Control**（Telegram 遠端控制）。  
   <img src="/support/images/en/tutorials/telegram/rcloneview-telegram-enable.png" alt="rcloneview telegram enable" class="img-large img-center" />

3. 輸入你的 **Bot Token** 與 **Chat ID**。  
   <img src="/support/images/en/tutorials/telegram/rcloneview-telegram-fields.png" alt="rcloneview telegram token chat id fields" class="img-large img-center" />

4. 點擊 **Send Test Message**（傳送測試訊息）。你應該會收到：`RcloneView Telegram Test Message`。  
   <img src="/support/images/en/tutorials/telegram/telegram-test-message.jpg" alt="telegram test message" class="img-large img-center" />

## 指令指南（工作聊天操作）

在 Bot 聊天視窗中使用以下指令：

- `/help` - 顯示所有指令。  
  <img src="/support/images/en/tutorials/telegram/telegram-help.jpg" alt="telegram help" class="img-large img-center" />

- `/listjobs` - 列出目前連線的工作。  
  <img src="/support/images/en/tutorials/telegram/telegram-listjobs.jpg" alt="telegram listjobs" class="img-large img-center" />

- `/start <jobName>` - 依確切名稱啟動工作。  
  <img src="/support/images/en/tutorials/telegram/telegram-job-start_by_jobname.jpg" alt="telegram start by job name" class="img-large img-center" />

- `/start #<n>`（建議使用）- 依最新一次 `/listjobs` 的清單索引啟動工作。  
  <img src="/support/images/en/tutorials/telegram/telegram-job-start_by_index_1.jpg" alt="telegram start by index step1" class="img-large img-center" />
  <img src="/support/images/en/tutorials/telegram/telegram-job-start_by_index_2.jpg" alt="telegram start by index step2" class="img-large img-center" />

- `/stop <jobId>` - 停止執行中的工作。  
  <img src="/support/images/en/tutorials/telegram/telegram-job-stop.jpg" alt="telegram job stop" class="img-large img-center" />

- `/status <jobId>` - 查看進度與已傳輸大小。  
  <img src="/support/images/en/tutorials/telegram/telegram-job-status.jpg" alt="telegram job status" class="img-large img-center" />

## 為什麼這對自動化很重要

- 隔夜或長時間傳輸：即時收到提醒,無需連 VPN 進機器即可重新啟動或停止。
- 排程備份：立即確認成功或失敗,並可從手機重新執行。
- 多雲工作：即使不在主控台前,也能維持統一的控制中心。
- 更快的事件回應：快速停止失控的工作、重新排程,或切換到其他預設設定。

## 安全提示

- 只有設定的 Chat ID 才能執行指令。
- 若 Bot Token 曾外洩,請立即輪替更新。
- 若暫時不需要遠端指令,可在設定中停用 Telegram 遠端控制。

## 相關資源

- [如何使用 Telegram 遠端控制（教學）](https://rcloneview.com/support/tutorials/telegram-remote-control)
- [建立與管理工作](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [執行與管理工作](https://rcloneview.com/support/howto/rcloneview-basic/execute-manage-job)
- [工作排程](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)
- [即時傳輸監控](https://rcloneview.com/support/howto/rcloneview-basic/real-time-transfer-monitoring)
- [使用內建終端機](https://rcloneview.com/support/tutorials/rcloneview-terminal-rclone-cli-inside-gui) <!-- replace with actual link if different -->

## 總結

Telegram 讓 RcloneView 成為行動指揮中心：你能隨時收到通知、即時啟動或停止工作,並更快回應失敗狀況。只需設定一次,妥善保管權杖,即使不在辦公桌前,也能安心運行你的雲端自動化流程。

<CloudSupportGrid />
