---
sidebar_position: 7
description: "了解如何使用 RcloneView 的圖形介面在 Box 和 Google Drive 之間無縫傳輸與同步檔案——具備拖放、資料夾比較與工作排程功能。"
keywords:
  - rcloneview
  - cloud
  - sync
  - rclone
  - cloud to cloud transfer
  - rclone GUI
  - cloud sync
  - Cloud Migration
  - cloud storage
  - cloud transfer
  - file synchronization
  - Box
  - google drive
  - box to google drive
tags:
  - RcloneView
  - Cloud
  - Sync
  - cloud-file-transfer
  - cloud-migration
  - Tutorial
  - box
  - google-drive
  - cloud-to-cloud
date: 2025-07-10
author: Jay
---
import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';

# Box ↔ Google Drive 檔案傳輸指南

**Box** 與 **Google Drive** 等雲端儲存平台各自擁有獨特優勢。Box 專為企業協作打造，提供進階安全性與工作流程功能，而 Google Drive 則與 Google Workspace 無縫整合，並提供大量免費儲存空間。然而，在兩個平台之間管理檔案可能相當繁瑣——尤其是當你需要在它們之間遷移資料時。

透過 **RcloneView**，你可以使用直覺式圖形介面，輕鬆在 Box 與 Google Drive 之間**雙向傳輸檔案**——無需使用命令列。

  
<img src="/support/images/en/tutorials/transfer-files-between-box-and-google-drive.png" alt="transfer files between box and google drive" class="img-medium img-center" />

## **為什麼要使用 RcloneView 進行多雲傳輸？**

RcloneView 透過以下功能簡化複雜的雲端傳輸：

- 為 Box 與 Google Drive 提供安全的 OAuth 整合
- 雲端之間的拖放檔案傳輸
- 資料夾比較工具，可在傳輸前預覽差異
- 同步與排程重複的傳輸與備份
- 試執行預覽、篩選器與進階傳輸選項
- 具進度紀錄的背景傳輸監控

RcloneView 採用直接基於 API 的傳輸方式，而非手動下載後再重新上傳檔案——讓你的工作流程更快速、更可靠。

## 🔄 傳輸檔案：Box ↔ Google Drive

### 步驟 1：連接你的雲端遠端

1. 啟動 **RcloneView**，然後從 **Remote** 選單中選擇 **`+ New Remote`**。
2. 在 **`Provider`** 分頁中，搜尋並選擇 **Box**。
3. 依照提示完成 OAuth 登入。
4. 對 **Google Drive** 重複相同流程。


👉 深入了解：

- [新增 Box 遠端](/howto/remote-storage-connection-settings/add-oath-online-login#quick-setup-guide)
- [新增 Google Drive 遠端](/howto/#step-2-adding-remote-storage-google-drive-example)

### 步驟 2：並排開啟遠端

1. 前往 Explorer 面板中的 **Browse** 分頁。
2. 在其中一個面板中，點選加號圖示 `+` 並選擇你的 **Box** 遠端。
3. 在另一個面板中，點選 `+` 並選擇你的 **Google Drive** 遠端。
4. 兩個遠端會並排顯示，方便你在它們之間輕鬆拖曳、複製或同步。

現在你可以在它們之間無縫執行傳輸。

<img src="/support/images/en/tutorials/open-box-and-google-drive-remotes.png" alt="open box and google drive remotes" class="img-medium img-center" />

### 📌 4 種檔案傳輸方法

RcloneView 提供多種靈活方式，將資料從 Box 移動或同步至 Google Drive。選擇最適合你工作流程的方式：

#### 🖱️ 方法 1：在 Explorer 面板之間拖放

1. 開啟 **RcloneView** 並前往 **Browse** 分頁。
2. 確認 Box 與 Google Drive 遠端都已並排顯示。
3. 從 Box 面板**拖曳檔案或資料夾**，並**放置**到 Google Drive 面板中。
4. 傳輸會自動開始。可在 **`Transfer`** 記錄分頁中監控進度。

這種直覺式的拖放介面讓雲端對雲端的傳輸變得輕而易舉——無需輸入任何指令。

👉 更多詳情：[瀏覽與管理遠端儲存](/howto/rcloneview-basic/browse-and-manage-remote-storage)

#### 🔍 方法 2：比較資料夾內容、複製或刪除

1. 在兩個 Explorer 面板中，導覽並選擇你要比較的資料夾（左側：Box，右側：Google Drive）。
2. 點選主選單中的 **`Compare`** 按鈕。
3. RcloneView 會標示出：
   - 僅存在於其中一側的檔案
   - 檔名相同但大小不同的檔案
   - 完全相同的檔案
4. 選擇要傳輸或刪除的檔案。
5. 若要由左向右傳輸檔案，點選 **`Copy →`**；若要由右向左傳輸，使用 **`← Copy`**；若要移除檔案，點選 **`Delete`**。
6. 進度與摘要更新會顯示在狀態列中。

視覺化比較有助於防止錯誤，確保你只移動你真正想移動的檔案。

👉 深入了解：[資料夾內容比較指南](/howto/rcloneview-basic/compare-folder-contents)

  
#### 🔁 方法 3：使用同步或工作

1. 在 Explorer 面板中，選擇你要同步的 **Box** 資料夾與 **Google Drive** 資料夾。
2. 點選 `home` 選單中的 **`Sync`** 按鈕。
3. 選擇同步選項（單向或雙向）、預覽動作並確認。
4. RcloneView 會執行同步，並在 **`transfer`** 記錄分頁中顯示進度。

- 若要進行重複或排程傳輸：
  1. 在 Sync 對話框中點選 **`Save to Jobs`**，或開啟 **`Job Manager`** → **`Add Job`**。
  2. 設定來源、目的地與選項。
  3. 儲存後可手動執行或設定排程。

👉 深入了解：
- [同步遠端儲存](/howto/rcloneview-basic/synchronize-remote-storages)
- [建立同步工作](/howto/rcloneview-basic/create-sync-jobs)
- [執行與管理工作](/howto/rcloneview-basic/execute-manage-job)

  
#### ⏰ 方法 4：排程自動同步工作

1. 在 Explorer 面板中，選擇你要保持同步的 **Box** 與 **Google Drive** 資料夾。
2. 從 **`Home`** 或 **`Remote`** 選單開啟 **`Job Manager`**，然後點選 **`Add Job`**。
3. 確認你的來源與目的地。
4. 使用排程編輯器設定工作執行時間。儲存前請先預覽你的排程。
5. 儲存並啟用排程工作。

RcloneView 會在你指定的時間執行同步。可在 **`Job History`** 中查看執行詳情與記錄，並於完成後收到通知。

👉 深入了解：[工作排程與執行](/howto/rcloneview-advanced/job-scheduling-and-execution)

  
## ✅ 總結

無論是一次性資料遷移，或是持續維護同步，RcloneView 都能讓你在 Box 與 Google Drive 之間進行快速、安全且可靠的檔案傳輸——無需手動下載或使用命令列工具。

  
立即嘗試，讓你的多雲工作流程更順暢！

  
## 🔗 相關指南

- [如何新增 Box 遠端](/howto/remote-storage-connection-settings/add-oath-online-login#quick-setup-guide)
- [如何新增 Google Drive 遠端](/howto/#step-2-adding-remote-storage-google-drive-example)
- [瀏覽與管理遠端儲存](/howto/rcloneview-basic/browse-and-manage-remote-storage)
- [比較資料夾內容](/howto/rcloneview-basic/compare-folder-contents)
- [同步遠端儲存](/howto/rcloneview-basic/synchronize-remote-storages)
- [建立同步工作](/howto/rcloneview-basic/create-sync-jobs)
- [執行與管理工作](/howto/rcloneview-basic/execute-manage-job)
- [工作排程與執行](/howto/rcloneview-advanced/job-scheduling-and-execution)

  

<CloudSupportGrid />
