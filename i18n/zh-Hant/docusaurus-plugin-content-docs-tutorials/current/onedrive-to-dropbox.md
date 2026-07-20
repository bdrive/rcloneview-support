---
sidebar_position: 6
description: "了解如何使用 RcloneView 的 GUI 功能——拖放、比對、同步、排程與雲端對雲端傳輸效率——在 OneDrive 與 Dropbox 之間無縫傳輸檔案。"
keywords:
  - rcloneview
  - cloud
  - sync
  - onedrive 傳到 dropbox
  - 雲端對雲端傳輸
  - rclone GUI
  - Onedrive
  - Dropbox
  - rclone
  - 雲端同步
  - 雲端遷移
  - cloud storage
  - 雲端傳輸
  - 檔案同步
tags:
  - RcloneView
  - Cloud
  - Sync
  - cloud-file-transfer
  - cloud-migration
  - Tutorial
  - onedrive
  - dropbox
  - cloud-to-cloud
date: 2025-07-10
author: Jay
---
import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';

# 使用 RcloneView 輕鬆完成 OneDrive 到 Dropbox 的傳輸

在當今雲端優先的工作流程中,同時使用多個服務(例如 **OneDrive** 和 **Dropbox**)是很常見的情況。OneDrive 能與 Microsoft 365 無縫整合,而 Dropbox 則提供可靠的同步與共用功能——尤其適合團隊使用。但當你需要**整合檔案**、**跨平台共用資料**,或單純**遷移到新服務**時,瀏覽器中常見的拖放方式既緩慢又容易中斷。大型資料夾需要先下載再重新上傳,這會帶來錯誤風險、耗費頻寬與時間。

這時 **RcloneView** 就能派上用場。它提供了一個安全、高效的 GUI,可直接進行雲端對雲端傳輸——完全不需要下載到本機。你可以:

- 使用 OAuth 登入連接 **OneDrive** 和 **Dropbox**  
- 在雙面板介面中並排瀏覽兩個服務  
- 透過拖放、資料夾比對或自動化工作來傳輸檔案  
- 排程定期傳輸以進行備份或工作流程同步  

<img src="/support/images/en/tutorials/transfer-files-between-onedrive-and-dropbox.png" alt="transfer files between onedrive and dropbox" class="img-medium img-center" />

## 從 OneDrive 傳輸檔案到 Dropbox 的步驟

### 在 RcloneView 中新增 OneDrive 和 Dropbox 遠端  
1. 開啟 **RcloneView**,前往 **`Remote`** 分頁。  
2. 點擊 **`+ New Remote`**,選擇 **OneDrive**,然後完成 OAuth 流程。  
3. 重複上述步驟以新增 **Dropbox**。  
   - 若為 Dropbox Business,請前往 *Advanced Options* 並啟用 `dropbox_business=true`。

👉 深入了解:[使用瀏覽器登入連接雲端遠端](/howto/remote-storage-connection-settings/add-oath-online-login)

### 在檔案總管面板中開啟兩個遠端  
1. 前往 **Browse** 分頁。  
2. 點擊左側面板的 `+` 圖示,選擇你的 **OneDrive** 遠端。  
3. 點擊右側面板的 `+`,選擇你的 **Dropbox** 遠端。  
4. 兩個服務現在會並排顯示,方便瀏覽與移動檔案。

<img src="/support/images/en/tutorials/open-onedrive-and-dropbox-remotes.png" alt="open onedrive and dropbox remotes" class="img-medium img-center" />

## 🔄 四種傳輸檔案的方式

### 🖱️ 方法一:拖放  
- 只需將檔案或資料夾從 OneDrive 面板拖曳到 Dropbox 面板。  
- 傳輸會立即開始,並可在 **`Transfer`** 分頁中查看進度。

👉 深入了解:[瀏覽與管理遠端儲存](/howto/rcloneview-basic/browse-and-manage-remote-storage)

### 🔍 方法二:比對資料夾,再複製/刪除  
1. 在每個面板中導覽到目標資料夾。  
2. 點擊 **`Home`** 選單中的 **`Compare`**。  
3. RcloneView 會標示出:  
   - 僅存在於 OneDrive 的檔案  
   - 僅存在於 Dropbox 的檔案  
   - 同名但大小不同的檔案  
   - 完全相同的檔案  
1. 選取檔案並點擊 **`Copy →`** 傳送到 Dropbox,或點擊 **`← Copy`** 從 Dropbox 傳回 OneDrive。  
2. 使用 **`Delete`** 移除不需要的檔案。  
3. 在狀態列與 **`Transfer`** 日誌中監控狀態更新。

👉 詳見[比對資料夾內容指南](/howto/rcloneview-basic/compare-folder-contents)

### 🔁 方法三:同步或另存為工作  
1. 以 OneDrive 作為左側(來源)面板、Dropbox 作為右側(目的地)面板,點擊 **`Sync`**。  
2. 選擇同步方向、篩選條件與其他選項。  
3. 立即執行,或點擊 **`Save as Job`** 儲存設定以供日後執行。

 👉 深入了解:  
- [同步遠端儲存](/howto/rcloneview-basic/synchronize-remote-storages)  
- [建立同步工作](/howto/rcloneview-basic/create-sync-jobs)  
- [執行與管理工作](/howto/rcloneview-basic/execute-manage-job)


### ⏰ 方法四:排程自動同步工作  
1. 從 **`Home`** 選單開啟 **`Job Manager`** → 點擊 **`Add Job`**。  
2. 確認 OneDrive 來源與 Dropbox 目的地資料夾。  
3. 啟用排程並設定重複頻率(每日、每週等)。  
4. 儲存並啟動排程。  
5. RcloneView 會自動執行工作;可在 **`Job History`** 中查看結果。

👉 深入了解:[工作排程與執行](/howto/rcloneview-advanced/job-scheduling-and-execution)

## ✅ 結語  

無論你是在遷移服務、備份資料,還是在平台之間進行同步,**RcloneView** 都能簡化這個流程。透過拖放傳輸、資料夾比對、同步與排程等強大功能,你可以獲得快速、容錯且無需撰寫程式碼的雲端資料管理方式。

---

## 🔗 相關資源  

- [新增 OneDrive / Dropbox 遠端](/howto/remote-storage-connection-settings/add-oath-online-login#quick-setup-guide)  
- [瀏覽與管理遠端儲存](/howto/rcloneview-basic/browse-and-manage-remote-storage)  
- [比對資料夾內容](/howto/rcloneview-basic/compare-folder-contents)  
- [同步遠端儲存](/howto/rcloneview-basic/synchronize-remote-storages)  
- [建立同步工作](/howto/rcloneview-basic/create-sync-jobs)  
- [工作排程與執行](/howto/rcloneview-advanced/job-scheduling-and-execution)


<CloudSupportGrid />
