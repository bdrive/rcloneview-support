---
sidebar_position: 9
description: 變更 RcloneView 儲存其 SQLite 資料庫（rclone_view.db）的位置，並選擇一個安全、可寫入的資料夾來存放歷史記錄、工作、掛載與 UI 狀態。
keywords:
  - rcloneview
  - database
  - rclone_view.db
  - settings
  - path settings
  - job history
  - transfer history
  - sqlite
  - backup
tags:
  - RcloneView
  - Tutorial
  - settings
  - backup
  - database
date: 2025-12-08
author: tayson
---

# 變更資料庫儲存位置

RcloneView 會將其核心狀態儲存在名為 **`rclone_view.db`** 的 SQLite 檔案中。此資料庫會記錄您的傳輸歷史、工作定義、掛載設定、工作執行歷史以及 UI 狀態——這些是應用程式在介面中「記住您做過的事」與「顯示目前狀態」所需的一切。

預設情況下，資料庫位於您的「文件」資料夾中。您可以將它移到其他可寫入的位置，例如外接磁碟或已同步的備份資料夾。

<img src="/support/images/en/tutorials/database/database-windows-path.png" class="img-medium img-center" alt="Default database path on Windows" />

## 各作業系統的預設資料庫路徑

| Platform | Default path                               |
| -------- | ------------------------------------------ |
| Windows  | `C:\Users\<user>\Documents\rclone_view.db` |
| macOS    | `/Users/<user>/Documents/rclone_view.db`   |
| Linux    | `/home/<user>/Documents/rclone_view.db`    |

## 如何變更資料庫位置

您可以直接在 RcloneView 中選擇任何可寫入的資料夾（本機或外部）。

### 步驟 1 — 開啟設定

- 前往頂端選單的 **Settings → General Settings**。  
  <img src="/support/images/en/tutorials/database/database-settings-menu.png" class="img-medium img-center" alt="Open Settings menu" />

### 步驟 2 — Embedded Rclone → Path Settings

- 在設定視窗中，開啟 **Embedded Rclone → Path Settings**。
- 點擊 **Database folder** 為 `rclone_view.db` 選擇新的儲存位置。  
  <img src="/support/images/en/tutorials/database/database-settings-dlg.png" class="img-medium img-center" alt="Database folder picker" />

- 使用資料夾圖示瀏覽至目標目錄；RcloneView 會將 `rclone_view.db` 存放在該處。

## 權限與路徑注意事項

RcloneView 會透過在所選資料夾中建立暫存檔來測試寫入權限。某些系統資料夾會封鎖一般使用者的寫入操作，並觸發警告：

- **Windows**：`C:\Program Files`、`C:\Windows` 等。
- **macOS**：`/Applications`、`/System`、`/usr` 等。
- **Linux**：`/usr`、`/opt`、`/etc` 等。

<img src="/support/images/en/tutorials/database/database-settings-warning.png" class="img-medium img-center" alt="Permission warning" />

若出現此警告，請選擇另一個具有完整寫入權限的路徑。

## 建議的位置

- `C:\Users\<user>\Documents`
- `C:\Users\<user>\AppData\Roaming`
- 任何您擁有寫入權限的個人資料夾
- 您自己管理的外接磁碟（請確認具有寫入權限）

請避免速度緩慢或受權限限制的位置，並注意網路共用資料夾可能會產生延遲。

## 資料庫維護建議

- 避免使用系統保護的資料夾。
- 若使用雲端同步資料夾，建議選擇能可靠同步小型檔案的服務（例如 OneDrive、Dropbox）。
- 定期備份 `rclone_view.db`。
- 避免將高延遲的網路路徑用於正在使用中的資料庫。

## 快速摘要

| Item             | Details                                                    |
| ---------------- | ---------------------------------------------------------- |
| 資料庫檔案        | `rclone_view.db`                                           |
| 儲存內容          | 傳輸歷史、工作、掛載、UI 狀態                                |
| 預設路徑          | 使用者「文件」資料夾                                         |
| 變更路徑          | Settings → Embedded Rclone → Path Settings                 |
| 權限檢查          | 暫存檔寫入測試                                               |
| 最佳位置          | 使用者可寫入的資料夾（文件、Roaming、外接磁碟）                |

請為 `rclone_view.db` 選擇一個穩定、可寫入的位置，以維持 RcloneView 的可靠性並保留您的歷史記錄。
