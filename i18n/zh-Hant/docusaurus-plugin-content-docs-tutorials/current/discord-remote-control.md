---
sidebar_position: 11
description: "使用 RcloneView 的 Discord 遠端控制功能，接收工作通知，並可從 Discord 遠端列出、啟動、停止及查詢工作狀態。"
keywords:
  - rcloneview
  - discord 遠端控制
  - discord bot
  - 工作通知
  - 遠端工作控制
  - rclone 工作管理員
tags:
  - RcloneView
  - Tutorial
  - Discord
  - Remote-Control
  - Job-Management
date: 2026-01-20
author: steve
---

# RcloneView Discord 遠端控制

Discord 遠端控制功能讓你可以接收 RcloneView 的工作通知，並直接從 Discord 控制工作——不需要坐在電腦前操作。

本教學涵蓋以下內容：

- 建立 Discord 應用程式與機器人（Bot）
- 將安裝內容（Installation Context）設定為 **Guild Install**
- 取得所需的 ID（Bot Token、Application ID、Discord User ID）
- 在 RcloneView 中啟用 Discord 遠端控制
- 使用 Discord 指令列出/啟動/停止工作及查詢狀態

---

## 什麼是 Discord 遠端控制？

Discord 遠端控制是 RcloneView 內建的功能，讓你可以：

- 即時接收工作開始、完成及發生錯誤的通知
- 列出已註冊的工作
- 遠端啟動工作
- 停止正在執行的工作
- 隨時查詢工作進度與狀態

只要 RcloneView 仍在執行，你就能透過 Discord 客戶端管理你的雲端工作。

---

## 需求

- 已安裝並執行中的 RcloneView（桌面版或無介面版）
- Discord 帳號
- 在伺服器中建立並安裝 Discord 機器人的權限（Guild Install）
- 網路連線

---

## 步驟 1：建立 Discord 應用程式與機器人

### 步驟 1-1 開啟 Discord 開發者入口網站

1. 前往 [Discord 開發者入口網站](https://discord.com/developers/applications)。
2. 點選 **New Application**，並為其命名（例如：`RcloneView`）。
   <img src="/support/images/en/tutorials/discord/discord-new-application.png" class="img-large img-center" />

### 步驟 1-2 將安裝內容設定為 Guild Install

1. 在左側選單中，開啟 **Installation**。
2. 在 **Installation Contexts** 下，選擇 **Guild Install**。（若 User Install 已啟用，請將其停用。）
3. 儲存變更。
   <img src="/support/images/en/tutorials/discord/discord-installation-context.png" class="img-large img-center" />

### 步驟 1-3 新增機器人並取得 Bot Token

1. 開啟 **Bot** 分頁。
2. 點選 **Add Bot** 並確認。
3. 點選 **Reset Token**（或 **Copy Token**）取得你的 **Discord Bot Token**。請妥善保密。
   <img src="/support/images/en/tutorials/discord/discord-bot-token.png" class="img-large img-center" />

### 步驟 1-4 允許機器人讀取訊息（建議設定）

若你打算傳送文字指令（而非斜線指令），請在 Bot 分頁中啟用 **MESSAGE CONTENT INTENT**，讓 RcloneView 能夠讀取你在私訊或頻道中輸入的指令文字。
   <img src="/support/images/en/tutorials/discord/discord-privileged-intent.png" class="img-large img-center" />

---

## 步驟 2：建立伺服器並安裝機器人

要使用機器人，你需要一個機器人可以進駐的 Discord 伺服器（也稱為「Guild」）。如果你還沒有專屬於 RcloneView 記錄的私人伺服器，請依照以下步驟操作。

### 步驟 2-1 建立新的 Discord 伺服器

1. 開啟你的 **Discord 應用程式**（桌面版或網頁版）。
2. 點選左側伺服器清單底部的 **加號（+）圖示**（新增伺服器）。
3. 選擇 **自行建立**。
4. 選擇 **僅供我和朋友使用**。
5. 為你的伺服器命名（例如：`RcloneView Control Center`），並點選 **建立**。
   

### 步驟 2-2 將機器人安裝到你的伺服器

1. 回到 **Discord 開發者入口網站**。
2. 開啟 **OAuth2 > URL Generator**。
3. 選擇範圍（scopes）：**bot** 與 **applications.commands**。
4. 在 **Bot Permissions** 中，勾選 **Send Messages**、**Use Slash Commands**，以及（若想接收記錄檔）**Attach Files**。
5. 複製頁面底部產生的網址，並貼到瀏覽器中。
6. 選擇你剛建立的伺服器（例如：`RcloneView Control Center`），並點選 **Authorize**。

---

## 步驟 3：收集 RcloneView 所需的資訊

- **Discord Bot Token**：來自 **Bot** 分頁（步驟 1-3）。
- **Discord Application ID**：來自開發者入口網站的 **General Information**。
- **My Discord User ID（Snowflake）**：一組能唯一識別你的長數字。

### 如何取得你的 Discord User ID

要取得你的 `Discord User ID`，請先啟用開發者模式：

1. 開啟 Discord（桌面版或網頁版）。
2. 點選左下角的 **User Settings**（⚙️）。
3. 在 **App Settings** 中，開啟 **Advanced**。
4. 將 **Developer Mode** 切換為 **開啟**。

接著複製你的 ID：

1. 在左下角或聊天/成員清單中，於你的 **個人頭像** 或 **使用者名稱** 上按右鍵。
2. 點選 **Copy User ID**。
3. 儲存這串長數字字串（範例：`123456789012345678`）。
   <img src="/support/images/en/tutorials/discord/discord-copy-userid.png" class="img-large img-center" />

為什麼需要這個 ID？

- 安全性：Flutter 應用程式只會處理來自你帳號的指令。
- 直接通知：機器人能明確知道當工作開始或失敗時，該傳送私訊給哪位使用者。

---

## 步驟 4：在 RcloneView 中啟用 Discord 遠端控制

### 步驟 4-1 開啟設定

1. 啟動 RcloneView。
2. 前往 **Settings** -> **Interfaces & Notifications**。

### 步驟 4-2 輸入憑證

1. 開啟 **Discord Remote Control** 的切換開關。
2. 輸入：
   - **Discord Bot Token**：`...`
   - **Discord Application ID**：來自 **General Information**。
   - **My Discord User ID**：`123456789012345678`

### 步驟 4-3 傳送測試訊息

點選 **Send Test Message**。若成功，你將會在 Discord 收到來自機器人的私訊。
   <img src="/support/images/en/tutorials/discord/discord-test-message-received.png" class="img-large img-center" />

---

## 步驟 5：Discord 指令（工作控制）

向機器人傳送指令（為了隱私建議使用私訊，但你也可以在機器人所在、且你擁有執行權限的頻道中使用）。

### `/help`

顯示所有可用的指令。

### `/joblist`

列出目前所選連線的工作清單。

### `/start <jobName>`

依名稱啟動特定工作。

### `/start #<number>`（建議使用）

使用最新一次 `/joblist` 結果中的索引來啟動工作（範例：`/start #1`）。

### `/stop <JobId>`

停止正在執行的工作。

### `/jobstatus <JobId>`

查詢特定工作的即時進度與統計資訊。

---

## 自動工作通知

啟用後，RcloneView 會自動傳送以下通知：

- 工作已開始
- 工作已成功完成
- 工作發生錯誤而失敗

---

## 安全性注意事項

- 只有來自已設定的 **Discord User ID** 的指令才會被處理。
- 請妥善保密你的 **Discord Bot Token** 與 **Application ID**。
- 若需暫停遠端控制，只要在設定中關閉切換開關即可。

---

## 總結

Discord 遠端控制讓你即使不在電腦前，也能操作長時間執行的傳輸作業：

- 從 Discord 遠端管理工作
- 透過通知取得即時狀態更新
- 透過手機或桌面版 Discord 即時控制

只需設定一次，即可隨時隨地管理你的雲端自動化作業。
