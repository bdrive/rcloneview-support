---
slug: rcloneview-discord-remote-control
title: "RcloneView Discord 遠端控制：從 Discord 管理雲端工作"
authors:
  - steve
description: "透過您自己安全的 Bot、Application ID 與 Discord User ID，從 Discord 接收工作提醒並執行 RcloneView 指令。"
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

# RcloneView Discord 遠端控制：從 Discord 管理雲端工作

> 將 RcloneView 變成 Discord chatops 主控台：接收工作提醒、列出工作清單，並可在不開啟電腦的情況下啟動或停止工作。

透過 Discord 遠端控制，RcloneView 會在工作開始、完成及發生錯誤時傳送提醒給您，並可接受簡單的指令來執行或停止工作。無論是長時間備份、通宵同步，或是遠端伺服器，只要您想在桌面或行動裝置上透過 Discord 快速掌控，這項功能都非常合適。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 您可以在 Discord 上做什麼

- **即時通知**：工作開始、完成或發生錯誤時立即收到提醒。
- **列出工作**：以清爽的清單檢視所有已註冊的 RcloneView 工作。
- **遠端工作控制**：依名稱或索引（#N）啟動工作，或立即停止工作。
- **隨時查詢狀態**：隨時查看進度、傳輸速度與預估剩餘時間。

*注意：RcloneView 必須在您的電腦或伺服器上執行中，才能處理 Discord 指令。*

## 事前準備

- 已安裝並執行中的 RcloneView（桌面版或無頭模式）。
- 一個 Discord 帳號。
- 一個可以安裝 Bot 的 Discord 伺服器（Guild Install）。
- 網際網路連線。

---

## 步驟 1：建立您的 Discord Application 與 Bot

為了達到最大安全性，RcloneView 採用「自帶 Bot」（bring your own bot）的方式。您的資料會直接在 RcloneView 與 Discord 之間傳輸，沒有任何第三方中繼。

1. 前往 [Discord Developer Portal](https://discord.com/developers/applications)，點擊 **New Application**。為其命名（例如 `RcloneView`）。
2. 開啟 **Installation**，將 Installation Context 選為 **Guild Install**（若已啟用 User Install 請關閉），然後儲存。
3. 前往 **Bot** 分頁，點擊 **Add Bot**，接著複製或重設以取得您的 **Discord Bot Token**。請妥善保密。
4. 若您打算傳送純文字指令（不只是斜線指令），請在 Bot 分頁中啟用 **MESSAGE CONTENT INTENT**，讓 RcloneView 能讀取指令文字。

---

## 步驟 2：建立伺服器並安裝 Bot

要使用此 Bot，您需要一個可供其運作的 Discord 伺服器（也稱為「Guild」）。若您尚未擁有用來存放 RcloneView 記錄的私人伺服器，請依照下列步驟操作。

### 步驟 2-1 建立新的 Discord 伺服器

1. 開啟您的 **Discord app**（桌面版或網頁版）。
2. 點擊左側伺服器清單底部的 **加號（+）圖示**（Add a Server）。
3. 選擇 **Create My Own**。
4. 選擇 **For me and my friends**。
5. 為您的伺服器命名（例如 `RcloneView Control Center`），然後點擊 **Create**。
   

### 步驟 2-2 將 Bot 安裝到您的伺服器

1. 回到 **Discord Developer Portal**。
2. 開啟 **OAuth2 > URL Generator**。
3. 選取範圍（scopes）：**bot** 與 **applications.commands**。
4. 在 **Bot Permissions** 中，選取 **Send Messages**、**Use Slash Commands**，以及（若您想接收記錄檔）**Attach Files**。
5. 複製底部產生的 URL 並貼到瀏覽器中。
6. 選擇您剛才建立的伺服器（例如 `RcloneView Control Center`），然後點擊 **Authorize**。

---

## 步驟 3：收集 RcloneView 所需的值

- **Discord Bot Token**：來自 **Bot** 分頁（步驟 1-3）。
- **Discord Application ID**：來自 Developer Portal 中的 **General Information**。
- **My Discord User ID（Snowflake）**：用於唯一識別您的一長串數字 ID。

### 如何取得您的 Discord User ID

1. 在 Discord（桌面版或網頁版）中，開啟 **User Settings**（⚙️）。
2. 前往 **Advanced**，並開啟 **Developer Mode**。
3. 在您的 **個人頭像** 或 **使用者名稱**（位於左下角或成員清單中）上按右鍵，選擇 **Copy User ID**。儲存這串數字（範例：`123456789012345678`）。

為什麼需要這個 ID？

- **安全性**：應用程式只會處理來自您帳號的指令。
- **直接通知**：Bot 能準確知道工作開始或失敗時該私訊哪一位使用者。

---

## 步驟 4：在 RcloneView 中啟用 Discord 控制

1. 開啟 RcloneView，前往 **Settings -> Interfaces & Notifications**。
2. 開啟 **Discord Remote Control** 開關。
3. 在欄位中輸入您的 **Discord Bot Token**、**Discord Application ID** 與 **My Discord User ID**。
4. 點擊 **Send Test Message**，確認您能收到來自 Bot 的私訊。

---

## ⌨️ 指令說明（ChatOps）

向 Bot 傳送指令（建議使用私訊以保護隱私；若 Bot 有頻道存取權限，在頻道中也能使用）：

- `/help` — 顯示所有可用指令。
- `/joblist` — 列出目前連線下所有已註冊的工作。
- `/start <jobName>` — 依確切名稱啟動工作。
- `/start #<number>` — 使用 `/joblist` 中的索引啟動工作（例如 `/start #1`）。
- `/stop <JobId>` — 使用 Job ID 停止執行中的工作。
- `/jobstatus <JobId>` — 查看指定工作的即時進度與統計資料。

---

## 安全與管理提示

- **使用者識別**：僅有已設定的 Discord User ID 有權執行指令。
- **Token 安全**：請將您的 Bot Token 與 Application ID 視同密碼妥善保管，一旦外洩應立即重設。
- **上線狀態**：若 RcloneView 未在執行中，Discord Bot 將不會回應任何指令。

## 相關資源

- [RcloneView 基本指南](https://www.google.com/search?q=https://rcloneview.com/support/howto/rcloneview-basic)
- [工作排程與自動化](https://www.google.com/search?q=https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling)
- [即時傳輸監控](https://www.google.com/search?q=https://rcloneview.com/support/howto/rcloneview-basic/monitoring)

## 總結

Discord 能將 RcloneView 化為行動指揮中心：您能隨時掌握通知、立即啟動或停止工作，並更快速地應對失敗狀況。只需設定一次，妥善保管好您的 Token，即使人不在電腦前，也能安心管理您的雲端自動化作業。

<CloudSupportGrid />
