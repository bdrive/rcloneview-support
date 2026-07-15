---
sidebar_position: 9
description: "使用 RcloneView 的 Telegram 遠端控制功能,接收工作通知,並透過 Telegram 遠端列出、啟動、停止工作及查看工作狀態。"
keywords:
  - rcloneview
  - telegram 遠端控制
  - telegram 機器人
  - 工作通知
  - 遠端工作控制
  - rclone 工作管理員
tags:
  - RcloneView
  - Tutorial
  - Telegram
  - Remote-Control
  - Job-Management
date: 2025-12-17
author: tayson
---

# RcloneView Telegram 遠端控制

Telegram 遠端控制讓你可以接收 RcloneView 的工作通知,並直接透過 Telegram 控制工作——不需要坐在電腦前操作。

本教學涵蓋:

- 建立 Telegram 機器人(BotFather)
- 尋找你的 Telegram Chat ID
- 在 RcloneView 中啟用 Telegram 遠端控制
- 使用 Telegram 指令列出/啟動/停止工作並查看狀態
- 實用範例與安全性注意事項

---

## 什麼是 Telegram 遠端控制?

Telegram 遠端控制是 RcloneView 內建的功能,可讓你:

- 接收工作開始/完成/錯誤通知
- 列出工作
- 遠端啟動工作
- 停止正在執行的工作
- 查看工作進度/狀態

只要 RcloneView 正在執行,你就能用手機管理工作。

---

## 需求

- 已安裝並執行 RcloneView
- 一個 Telegram 帳號
- 網際網路連線
- 建立 Telegram 機器人的權限(透過 BotFather)

---

## 步驟 1 建立 Telegram 機器人(BotFather)

### 步驟 1-1 開啟 BotFather

1. 開啟 Telegram。
2. 搜尋 **BotFather**。
3. 開啟 BotFather 對話。

<img src="/support/images/en/tutorials/telegram/telegram-botfather-search.jpg" alt="telegram botfather search" class="img-large img-center" />

### 步驟 1-2 建立新機器人

使用 BotFather 建立新機器人並設定:

- **機器人名稱**(顯示名稱)
- **機器人使用者名稱**(必須以 `bot` 結尾)

範例:

- 機器人名稱:`RcloneView_test_bot`
- 機器人使用者名稱:`rcloneview_test_bot`

<img src="/support/images/en/tutorials/telegram/telegram-newbot_rcloneview_test_bot.jpg" alt="telegram create new bot" class="img-large img-center" />

### 步驟 1-3 儲存你的機器人權杖(重要)

機器人建立後,BotFather 會提供類似以下的權杖:

```
123456789:AAHxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

:::caution 妥善保管權杖
此權杖需要輸入至 RcloneView 設定中。請勿公開分享此權杖。
:::

<img src="/support/images/en/tutorials/telegram/telegram-bot-token.jpg" alt="telegram bot token" class="img-large img-center" />

---

## 步驟 2 在 Telegram 中啟動你的機器人(重要)

在透過 `getUpdates` 取得你的 Chat ID 之前,你必須先與機器人開始對話。

### 步驟 2-1 搜尋你的機器人

1. 依名稱或使用者名稱搜尋你的機器人。
2. 開啟機器人對話。

<img src="/support/images/en/tutorials/telegram/telegram-search-my-bot.jpg" alt="telegram search my bot" class="img-large img-center" />

### 步驟 2-2 按下開始並傳送訊息

1. 點擊 **Start**(或傳送 `/start`)。
2. 再傳送一則訊息(例如:`hi`)。

這會建立一筆更新紀錄,供你之後從 Telegram 讀取。

<img src="/support/images/en/tutorials/telegram/telegram-start-bot.jpg" alt="telegram start bot" class="img-large img-center" />

---

## 步驟 3 尋找你的 Telegram Chat ID

### 步驟 3-1 在瀏覽器中開啟 getUpdates

開啟以下網址(請替換為你的權杖):

```
https://api.telegram.org/bot<YOUR_BOT_TOKEN>/getUpdates
```

<img src="/support/images/en/tutorials/telegram/telegram-get-chat-id_1.png" alt="telegram getUpdates url" class="img-large img-center" />
<img src="/support/images/en/tutorials/telegram/telegram-get-chat-id_2.png" alt="telegram getUpdates example url" class="img-large img-center" />

### 步驟 3-2 取出 `chat.id`

在 JSON 回應中找到:

```json
"chat": {
  "id": 987654321
}
```

你的 **Chat ID** 就是 `chat.id` 中的數字(範例:`987654321`)。

<img src="/support/images/en/tutorials/telegram/telegram-get-chat-id_3.png" alt="telegram chat id" class="img-large img-center" />

---

## 步驟 4 在 RcloneView 中啟用 Telegram 遠端控制

### 步驟 4-1 開啟設定

1. 開啟 RcloneView。
2. 前往 **設定(Settings)**。
3. 選擇 **介面與通知(Interfaces & Notifications)**。
4. 找到 **Telegram 遠端控制**。

### 步驟 4-2 開啟功能

啟用 **Telegram 遠端控制**:

<img src="/support/images/en/tutorials/telegram/rcloneview-telegram-enable.png" alt="rcloneview telegram enable" class="img-large img-center" />

### 步驟 4-3 輸入權杖與 Chat ID

- **Telegram Bot Token**:來自 BotFather
- **Telegram Chat ID**:來自 `getUpdates`

<img src="/support/images/en/tutorials/telegram/rcloneview-telegram-fields.png" alt="rcloneview telegram token chat id fields" class="img-large img-center" />

### 步驟 4-4 傳送測試訊息

點擊 **傳送測試訊息(Send Test Message)**。若設定正確,你會收到:
`RcloneView Telegram Test Message`

<img src="/support/images/en/tutorials/telegram/telegram-test-message.jpg" alt="telegram test message" class="img-large img-center" />

---

## 步驟 5 Telegram 指令(工作控制)

在你與機器人的 Telegram 對話中輸入以下指令。

### `/help`

顯示所有可用指令:

```
/help
```

<img src="/support/images/en/tutorials/telegram/telegram-help.jpg" alt="telegram help" class="img-large img-center" />

### `/listjobs`

列出目前所選連線的工作:

```
/listjobs
```

輸出範例:

```
Total: 3
1) Backup_Photos
2) Sync_Documents
3) Archive_To_NAS
```

<img src="/support/images/en/tutorials/telegram/telegram-listjobs.jpg" alt="telegram listjobs" class="img-large img-center" />

### `/start <jobName>`

依名稱啟動工作:

```
/start Backup_Photos
```

:::note 工作名稱必須完全相符
請使用 `/listjobs` 複製確切的工作名稱。
:::

<img src="/support/images/en/tutorials/telegram/telegram-job-start_by_jobname.jpg" alt="telegram start by job name" class="img-large img-center" />

### `/start #<number>`(建議)

依最新一次 `/listjobs` 結果中的編號啟動工作:

```
/start #2
```

:::important 請先執行 `/listjobs`
此編號是根據目前工作清單輸出結果而定。
:::

<img src="/support/images/en/tutorials/telegram/telegram-job-start_by_index_1.jpg" alt="telegram start by index step1" class="img-large img-center" />
<img src="/support/images/en/tutorials/telegram/telegram-job-start_by_index_2.jpg" alt="telegram start by index step2" class="img-large img-center" />

### `/stop <jobId>`

停止正在執行的工作:

```
/stop 123
```

<img src="/support/images/en/tutorials/telegram/telegram-job-stop.jpg" alt="telegram job stop" class="img-large img-center" />

### `/status <jobId>`

顯示正在執行工作的進度:

```
/status 123
```

<img src="/support/images/en/tutorials/telegram/telegram-job-status.jpg" alt="telegram job status" class="img-large img-center" />

---

## 自動工作通知

啟用 Telegram 遠端控制後,RcloneView 可自動傳送以下通知:

- 工作已開始
- 工作已成功完成
- 工作發生錯誤而失敗

<img src="/support/images/en/tutorials/telegram/telegram-job-notifications.jpg" alt="telegram job notifications" class="img-large img-center" />

---

## 安全性注意事項

- 指令僅會從已設定的 **Chat ID** 處理。
- 請妥善保管你的 **Bot Token**,將其視為密碼一樣保護。
- 若想暫停遠端控制,請在設定中關閉此開關。

---

## 總結

Telegram 遠端控制讓長時間執行的工作更容易操作 RcloneView:

- 遠端管理工作
- 透過即時通知掌握最新狀態
- 無需開啟電腦,即可在手機上控制工作

當你執行排程備份、同步或大型傳輸,並希望隨時隨地掌握進度時,不妨試試這項功能。
