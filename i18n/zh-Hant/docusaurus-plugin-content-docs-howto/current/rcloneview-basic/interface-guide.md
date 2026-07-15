---
sidebar_position: 1
description: "RcloneView 版面配置的視覺化說明，包括標題列、主選單、檔案總管與傳輸分頁。"
keywords:
  - rcloneview
  - rclone GUI
  - 雲端檔案總管
  - 遠端儲存管理
  - 檔案總管
  - 雲對雲傳輸
  - 檔案同步
  - rcloneview 介面
  - rcloneview 版面配置
  - 工具列
  - 傳輸狀態
tags:
  - RcloneView
  - UI-guide
  - file-explorer
  - Remote-Storage
  - layout
  - interface
  - cloud-file-transfer
  - Remote-storage-managent
date: 2025-05-27
author: Jay
---
# RcloneView 介面指南

RcloneView 提供直覺的版面配置，讓使用者可以在本機儲存與雲端遠端之間瀏覽、比較並傳輸檔案。以下是各區塊的詳細說明。

<img src="/support/images/en/howto/rcloneview-basic/rcloneview-user-interface.png" alt="rcloneview user interface" class="img-large img-center" />
## ① 標題列

顯示應用程式名稱與標準視窗控制按鈕：

- `—`：最小化
- `□`：最大化 / 還原
- `X`：結束 RcloneView

## ② 主選單列

主要導覽分頁，可存取核心功能：

- **`Home`** – 提供檔案同步與比較、工作排程以及多視窗支援等工具
- **`Remote`** – 新增、設定並掛載雲端儲存遠端
- **`Settings`** – 管理遠端連線、一般偏好設定與介面版面配置
- **`Help`** – 存取產品支援、授權啟用、意見回饋與更新檢查

## ③ 工具列

工具列會依所選的選單分頁動態變化：

  ### 選取 `Home` 時：

| 按鈕          | 說明                                                                          |
| ------------- | ------------------------------------------------------------------------------------ |
| `Sync`        | 在兩個檔案總管窗格中，同步所選目錄之間的檔案與資料夾 |
| `Compare`     | 比較兩個檔案總管窗格中所選目錄之間的差異           |
| `Job Manager` | 建立並管理常用遠端之間的定期同步工作     |
| `New Window`  | 開啟新的 RcloneView 視窗，以連接至不同的 Rclone 常駐程式執行個體        |
 
### 選取 `Remote` 時：

<img src="/support/images/en/howto/rcloneview-basic/remote-tab-toolbar.png" alt="remote tab toolbar" class="img-medium img-center" />

| 按鈕             | 說明                                                                      |
| ---------------- | ---------------------------------------------------------------------------------- |
| `New Remote`     | 建立與雲端儲存遠端的新連線                                |
| `Remote Manager` | 檢視、編輯或刪除已儲存的遠端                                              |
| `Mount Manager`  | 將遠端掛載為本機磁碟機                                                  |
| `Job Manager`    | 建立並管理常用遠端之間的定期同步工作 |
  
### 選取 `Settings` 時：
<img src="/support/images/en/howto/rcloneview-basic/settings-menu-toolbar.png" alt="settings menu toolbar" class="img-medium img-center" />

| 按鈕               | 說明                                                                                                  |
| ------------------ | ------------------------------------------------------------------------------------------------------------ |
| `Connect Manager`  | 管理並切換內建或外部 Rclone 常駐程式連線                                     |
| `General settings` | 設定應用程式語言、檔案路徑、佈景主題、拖放行為、內建 Rclone 選項等。 |
| `Layout`           | 切換資料夾樹狀圖與檔案清單檢視的水平／垂直窗格版面配置                   |
| `View count`       | 切換單一窗格與雙窗格的檔案總管檢視                                                 |

### 選取 `Help` 時：
<img src="/support/images/en/howto/rcloneview-basic/help-menu-toolbar.png" alt="help menu toolbar" class="img-medium img-center" />

| 按鈕                 | 說明                           |
| ---------------------- | ------------------------------------- |
| `Check for Updates`    | 檢查是否有新版本可用   |
| `Feedback`             | 提交意見回饋或回報問題      |
| `Homepage`             | 造訪 RcloneView 官方網站 |
| `Register License Key` | 啟用您的 PLUS 授權            |

## ④ 檔案總管窗格

每個窗格都可讓您透過分頁式介面瀏覽本機磁碟機或雲端遠端。
您可以在每個窗格中開啟不同的來源，並輕鬆地在它們之間傳輸檔案。

  <img src="/support/images/en/howto/rcloneview-basic/file-explorer-pannel-layout.png" alt="file explorer panel layout" class="img-medium img-center" />
此窗格包含以下元件：

1. **分頁列** – 顯示目前的連線（例如 Local Disk、myAwsS3、myGoogleDrive）
2. **路徑導覽列** – > 顯示目前的資料夾路徑，並支援透過點擊或輸入（含自動建議）快速導覽。
3. **窗格工具列** – 包含快速動作：
	- <img src="/support/icons/alias-icon.png" alt="alias icon" class="inline-icon" /> **建立別名（我的最愛）** — 將目前的資料夾儲存為我的最愛以便快速存取
	- <img src="/support/icons/mount-icon.png" alt="mount icon" class="inline-icon" />**掛載資料夾** — 將所選的資料夾掛載為本機磁碟機
	- <img src="/support/icons/settings-icon.png" alt="settings icon" class="inline-icon" /> **編輯遠端設定** — 修改已連線遠端的設定
	- <img src="/support/icons/refresh-icon.png" alt="refresh icon" class="inline-icon" /> **重新整理** — 重新載入目前資料夾的內容
4. **資料夾樹狀圖** – 可摺疊的資料夾導覽器
5. **檔案／資料夾清單檢視** – 顯示內容名稱、類型、修改日期與大小
6. **摘要頁尾** – 顯示檔案／資料夾總數與檔案總大小

## ⑤ 傳輸狀態分頁

顯示同步或檔案傳輸作業的狀態與歷程記錄：

| 分頁             | 說明                                                                                  |
| --------------- | -------------------------------------------------------------------------------------------- |
| **`Transfer`**  | 顯示所有進行中的傳輸工作，包括速度、進度與剩餘時間 |
| **`Completed`** | 列出所有已完成的同步或複製工作，並顯示時間、大小與工作 ID 等詳細資訊               |
| **`Log`**       | 顯示帶有時間戳記的日誌項目，包含時間戳記、工作類型、訊息與狀態               |
## ⑥ 頁尾

- **版本資訊**：目前執行的 RcloneView 版本（例如 `RcloneView 0.6.301`）
- **授權資訊**：顯示授權類型（`FREE License` 或 `PLUS License`）
- **Rclone 連線資訊**：顯示已連線的 rclone 執行個體、伺服器位址與作業系統
  - 範例：`Connected to rclone v1.69.1 (http://127.0.0.1:5582, windows)`
