---
sidebar_position: 4
description: "了解如何使用 RcloneView 直觀的圖形介面，輕鬆在 Dropbox 與 Google Drive 之間傳輸或同步檔案——無需終端機或撰寫指令碼。"
keywords:
  - rcloneview
  - Dropbox
  - google drive
  - cloud to cloud transfer
  - cloud transfer
  - file synchronization
  - cloud storage
  - Cloud Migration
  - cloud sync
  - cloud file transfer
  - rclone
tags:
  - RcloneView
  - dropbox
  - google-drive
  - cloud-file-transfer
  - cloud-migration
  - Tutorial
  - Sync
  - cloud-to-cloud
date: 2025-07-01
author: Jay
---
import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';

# Dropbox 到 Google Drive 傳輸指南

在現今的數位工作環境中，使用多種雲端儲存服務來存放與管理檔案已相當常見——無論是個人使用、團隊協作，或是跨平台同步。

**Dropbox** 以簡單易用與快速的檔案同步聞名，特別受團隊青睞；而 **Google Drive** 則與 Google Workspace（文件、試算表、Gmail 等）深度整合，並提供優渥的免費儲存空間。當使用者的需求超出單一服務的範圍，或希望整合檔案以方便管理和協作時，跨雲端平台的資料傳輸便成為必要之舉。

手動下載後再重新上傳檔案不僅耗時，還容易出錯。這正是 **RcloneView** 派上用場的地方。

**RcloneView** 是 [Rclone](https://rclone.org) 的圖形化介面，專為簡化雲端到雲端的檔案傳輸而設計，無需使用命令列工具。透過 RcloneView，您可以：

- 在雙欄介面中連接並瀏覽 Dropbox 與 Google Drive
- 透過拖放或同步操作傳輸檔案
- 在移動前預覽資料夾差異
- 透過排程工作自動執行重複性傳輸

無論您是要更換服務、備份重要資料，或是在帳戶之間同步檔案，**RcloneView 都能讓 Dropbox 到 Google Drive 的傳輸變得輕鬆可靠**——完全不需要撰寫任何一行程式碼。

  <img src="/support/images/en/tutorials/dropbox-to-google-drive-transfer.png" alt="dropbox to google drive transfer" class="img-medium img-center" />
## **為什麼要使用 RcloneView 進行雲端到雲端傳輸？**

RcloneView 是建構於 Rclone CLI 之上的易用圖形化工具，以簡潔的介面提供強大的功能：

- 為 Dropbox 與 Google Drive 提供基於 OAuth 的安全登入
- 雙欄式檔案總管，方便瀏覽檔案
- 遠端之間的拖放傳輸
- 複製前先比對資料夾
- 建立並排程同步工作

無論您是要同步大量資料，還是只是搬移幾個資料夾，RcloneView 都能讓您在幾分鐘內完成工作。

## 📙 將檔案從 Dropbox 傳輸到 Google Drive

### 在 RcloneView 中新增 Dropbox 與 Google Drive 遠端

1. 啟動 **RcloneView**，並在 `Remote` 選單中點選 **`+ New Remote`**。
2. 在 **`Provider`** 分頁中，搜尋並選取 **Dropbox**。
3. 依指示完成 OAuth 登入。
4. 重複相同步驟以新增 **Google Drive**。

👉 詳細設定請參閱：
- [如何新增 Dropbox 遠端](/howto/remote-storage-connection-settings/add-oath-online-login#quick-setup-guide)
- [如何新增 Google Drive 遠端](/howto/#step-2-adding-remote-storage-google-drive-example)

:::important 連接 Dropbox Business
若您使用的是 **Dropbox Business**，請務必在新增遠端時啟用商務模式。

在 **`Options`** 分頁中，捲動至底部並點選 **`Advanced Options`**，找到 `dropbox_business` 欄位並將其設為 `true`。

:::
### 在檔案總管中同時開啟兩個遠端

1. 前往 **Browse** 分頁（啟動時預設顯示）。
2. 在左側窗格點選 `+` 並選取您的 **Dropbox** 遠端。
3. 在右側窗格點選 `+` 並選取您的 **Google Drive** 遠端。
4. 現在您可以並排檢視並操作這兩個儲存空間。

<img src="/support/images/en/tutorials/open-dropbox-and-google-drive.png" alt="open dropbox and google drive" class="img-medium img-center" />
## 🔄 傳輸方式

### 🖱️ **方法一：拖放**

- 只需將檔案/資料夾從 Dropbox 窗格拖曳到 Google Drive 窗格。
- RcloneView 會立即開始傳輸。
- 在 **`Transfer`** 記錄分頁中監控進度。

👉 深入了解：[瀏覽與管理遠端儲存空間](/howto/rcloneview-basic/browse-and-manage-remote-storage)

### 🔍 方法二：比對資料夾內容，然後複製或刪除

1. 在兩個檔案總管窗格中，選取您想要比對的來源（例如 Dropbox）與目標（例如 Google Drive）資料夾。
2. 點選 `Home` 選單中的 **`Compare`** 按鈕，開始進行資料夾比對。
3. RcloneView 會標示出資料夾之間的差異：
       - 僅存在於其中一側的檔案
       - 名稱相同但大小不同的檔案
       - 相同的檔案
4. 以視覺化方式檢視結果，然後選取要處理的檔案。
5. 點選 **Copy →** 由左向右複製，或點選 **← Copy** 進行相反方向的複製。
       使用 **Delete** 從任一側移除選取的檔案。
6. 傳輸進度與結果會顯示在狀態列與記錄分頁中。

  此方法可協助您仔細比對並掌控要複製或刪除的內容——將錯誤降到最低，並確保傳輸的準確性。

  👉 深入了解：[比對資料夾內容](/howto/rcloneview-basic/compare-folder-contents)

### 🔁  方法三：同步或建立工作

1. 在檔案總管窗格中，選取 **Dropbox** 資料夾（來源）與 **Google Drive** 資料夾（目標）。
2. 點選 **`Home`** 選單中的 **`Sync`** 按鈕，開啟同步對話框。
3. 選擇您想要的同步方向與選項，然後開始執行。
4. 若要建立重複性或已儲存的工作，可在同步視窗中點選 **Save as Job**，
       或透過 **`Home`** 選單前往 **`Job Manager` → `Add Job`** 來建立排程工作。

👉 深入了解：
- [同步遠端儲存空間](/howto/rcloneview-basic/synchronize-remote-storages)
- [建立同步工作](/howto/rcloneview-basic/create-sync-jobs)
- [執行與管理工作](/howto/rcloneview-basic/execute-manage-job)

### **⏰** 方法四：排程自動同步工作

1. 在檔案總管窗格中，選取您想要自動同步的 **Dropbox** 來源資料夾與 **Google Drive** 目標資料夾。
2. 從 **`Home`** 或 **`Remote`** 選單開啟 **`Job Manager`**，並點選 **`Add Job`**。
3. 確認您的來源與目標資料夾正確無誤，如有需要可重新選取或修改。
4. 使用 **Schedule Editor** 設定同步的執行時間與頻率（例如每天午夜執行一次）。
       RcloneView 內建**預覽工具**，讓您可以在儲存前模擬並確認排程模式。
5. 儲存並啟用該排程工作。

建立完成後，該工作將依照您的排程**自動**執行——**無需任何使用者操作**。

所有進度與結果都會顯示在 **`Job History`** 分頁中，工作完成後您也會收到系統通知。

👉 深入了解：[工作排程與執行](/howto/rcloneview-advanced/job-scheduling-and-execution)

---

## ✅ 結語

透過 RcloneView，雲端到雲端的傳輸變得無縫且高效。無論您是要整合備份，還是在跨平台的團隊之間同步資料，RcloneView 都能助您更快完成工作——完全無需終端機指令。

立即試用，讓您的 Dropbox ↔ Google Drive 檔案工作流程更加簡便。

---

## 🔗 相關指南

- [如何新增 Dropbox 遠端](/howto/remote-storage-connection-settings/add-oath-online-login#quick-setup-guide)
- [如何新增 Google Drive 遠端](/howto/#step-2-adding-remote-storage-google-drive-example)
- [瀏覽與管理遠端儲存空間](/howto/rcloneview-basic/browse-and-manage-remote-storage)
- [比對資料夾內容](/howto/rcloneview-basic/compare-folder-contents)
- [同步遠端儲存空間](/howto/rcloneview-basic/synchronize-remote-storages)
- [建立同步工作](/howto/rcloneview-basic/create-sync-jobs)
- [工作排程與執行](/howto/rcloneview-advanced/job-scheduling-and-execution)

<CloudSupportGrid />
