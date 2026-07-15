---
sidebar_position: 2
description: 了解如何使用 RcloneView 直覺的拖放式圖形介面與工作排程器，在 Google Drive 與 OneDrive 之間複製、同步及排程檔案傳輸。
keywords:
  - rcloneview
  - Google Drive to OneDrive
  - cloud to cloud transfer
  - file synchronization
  - Cloud Migration
  - cloud storage
  - cloud sync
  - Onedrive
  - google drive
  - job scheduling
  - rclone
  - sync
  - scheduled jobs
  - drag and drop
tags:
  - RcloneView
  - Tutorial
  - cloud-storage
  - cloud-file-transfer
  - cloud-migration
  - google-drive
  - onedrive
  - Sync
  - job
  - cloud-to-cloud
date: 2025-05-19
author: Jay
---
import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';

# Google Drive 到 OneDrive 傳輸指南
  

雲端儲存服務已成為管理文件、媒體與備份不可或缺的工具。其中最廣泛使用的兩項服務是 **Google Drive** 與 **Microsoft OneDrive**。兩者皆提供充裕的儲存空間、與生產力工具（Google Workspace 及 Microsoft 365）的整合，以及廣泛的平台支援。

雖然這兩個平台都有各自的雲端生態系，**RcloneView** 提供了一個集中化的介面，讓你能在兩者之間管理、傳輸並同步檔案——**無需複雜的指令碼或命令列操作**。

在本指南中，我們將帶你了解如何使用 **RcloneView**（一款建立在 Rclone 之上、以圖形介面操作的工具）**將檔案從 Google Drive 傳輸到 OneDrive**，讓多雲端檔案管理變得簡單又強大。

<img src="/support/images/en/tutorials/google-drive-to-ondrive-transfer.png" alt="google drive to ondrive transfer" class="img-medium img-center" />

## **為什麼要使用 RcloneView 進行雲端對雲端傳輸？**

RcloneView 是建立在 Rclone 引擎之上的強大圖形介面，旨在簡化雲端儲存管理。

- 輕鬆連接多個雲端供應商
- 直覺的拖放式檔案傳輸介面
- 傳輸前可比對資料夾內容
- 簡潔的圖形介面，內建乾跑（dry-run）、篩選器與工作排程等進階功能
- 排程定期傳輸與備份
- Google Drive 與 OneDrive 皆採用安全的 OAuth 登入

與傳統的手動下載/上傳方式不同，RcloneView 透過直接呼叫 API 來自動化整個流程——讓雲端儲存之間的傳輸得以順暢、無人值守地進行。

## 📙 將檔案從 Google Drive 傳輸到 OneDrive


### 在 RcloneView 中新增 Google Drive 與 OneDrive 遠端

1. 開啟 **RcloneView**，並在 **`Remote`** 選單中點擊 **`+ New Remote`**。  
2. 在 **`Provider`** 分頁中，搜尋並選擇 **Google Drive**。  
3. 依照精靈指示完成 OAuth 登入。  
4. 對 **OneDrive** 重複相同的流程。  

 🔍 詳細設定步驟請參考：
 - [如何新增 Google Drive 遠端](/howto/#step-2-adding-remote-storage-google-drive-example)
 - [如何新增 OneDrive 遠端](/howto/remote-storage-connection-settings/add-oath-online-login#quick-setup-guide)

### 在檔案總管窗格中開啟兩個遠端

1. 開啟 **RcloneView**，前往檔案總管窗格中的 **Browse 分頁**。  
2. 在其中一個窗格中，點擊標題列上的加號圖示 `+`，並從清單中選擇你的 **Google Drive** 遠端。  
3. 在另一個窗格中，點擊 `+` 圖示，並從清單中選擇你的 **OneDrive** 遠端。  
4. 兩個遠端現在會並排顯示，方便你在它們之間輕鬆複製、比對、拖曳或同步檔案與資料夾。  

<img src="/support/images/en/tutorials/open-google-drive-and-onedrive.png" alt="open google drive and onedrive" class="img-medium img-center" />

### 📌 4 種傳輸檔案的方法

RcloneView 提供多種強大的方法，用於在 Google Drive 與 OneDrive 之間搬移或同步資料。請選擇最符合你工作流程的方式：

#### 🖱️ **方法一：在檔案總管窗格之間拖放**

  
	1. 開啟 **RcloneView** 並前往 **Browse** 分頁（啟動時預設顯示）。  
	2. 確認兩個雲端遠端（Google Drive 與 OneDrive）已在雙窗格檔案總管中並排顯示。  
	3. 只需將**檔案或資料夾**從 Google Drive 窗格中**拖曳**並**放到** OneDrive 窗格中即可。  
	4. Rclone 背景引擎將自動開始傳輸。你可以在 **`Transfer`** 記錄分頁中即時監控進度。  

  
這種直覺的拖放介面讓搬移或複製檔案變得簡單——無需輸入任何指令。

👉 深入了解：[瀏覽與管理遠端儲存空間](/howto/rcloneview-basic/browse-and-manage-remote-storage)

#### 🔍 **方法二：比對資料夾內容、複製或刪除**

  
	1. 在兩個檔案總管窗格中，分別瀏覽並選取要比對的資料夾（左：Google Drive，右：OneDrive）。  
	2. 點擊主選單中的 **`Compare`** 按鈕以開始比對資料夾。  
	3. RcloneView 會掃描並標示出：  
		- 僅存在於其中一側的檔案  
		- 檔名相同但大小不同的檔案  
		- 完全相同的檔案
	4. 選取你想要處理的檔案。  
	5. 若要將檔案由左向右傳輸，點擊 **`Copy →`** 按鈕。  
		   若要由右向左傳輸，使用 **`← Copy`** 按鈕。  
		   若要從某個遠端刪除檔案，點擊該窗格上的 **`Delete`** 按鈕。  
	6. 進度與摘要更新會顯示在狀態列中。  


這種視覺化比對方式讓你能在移動或刪除檔案**之前**先行檢視，將錯誤降到最低。

👉 深入了解請參考[比對資料夾內容指南](/howto/rcloneview-basic/compare-folder-contents)


#### 🔁 **方法三：使用同步或工作**

1. 在檔案總管窗格中，瀏覽並選取你想要保持同步的 **Google Drive** 資料夾與 **OneDrive** 資料夾。  
2. 點擊 `home` 選單中的 **`Sync`** 按鈕。  
3. 選擇同步選項（單向或雙向），預覽動作，然後確認。   
4. RcloneView 會執行同步，並在 **`transfer`** 記錄分頁中顯示進度指示器。   

- 或者，若要進行重複性或排程傳輸：  

  1. 在 Sync 彈出視窗中點擊 **`Save to Jobs`**，或開啟 **`Job Manager`** → 點擊 **`Add Job`**。   
  2. 設定來源與目的地並調整選項。   
  3. 儲存工作後，可手動執行或設定排程。  

 👉 深入了解：  

- [同步遠端儲存空間](/howto/rcloneview-basic/synchronize-remote-storages)  
- [建立同步工作](/howto/rcloneview-basic/create-sync-jobs)  
- [執行與管理工作](/howto/rcloneview-basic/execute-manage-job)

#### ⏰ 方法四：排程自動同步工作 

1. 在檔案總管窗格中，瀏覽並選取你想要保持同步的 **Google Drive** 資料夾與 **OneDrive** 資料夾。  
2. 從 **`Home`** 或 **`Remote`** 選單開啟 **`Job Manager`**，然後點擊 **`Add Job`**。  
3. 確認你選取的來源與目的地；如有需要可進行調整。  
4. 使用排程編輯器設定工作應在何時執行。RcloneView 內建模擬工具，可在儲存前預覽你的排程模式。  
5. 儲存並啟用該排程工作。   

儲存完成後，RcloneView 會自動在你指定的時間執行同步。  

執行詳情與記錄可在 **`Job History`** 中查看，工作成功完成時你也會收到通知。

👉 深入了解：[工作排程與執行](/howto/rcloneview-advanced/job-scheduling-and-execution)


## **結語**

在 Google Drive 與 OneDrive 等雲端服務之間傳輸檔案，其實不需要那麼複雜。使用 **RcloneView**，只需點擊幾下滑鼠即可完成——完全不需要使用命令列。

無論你是要搬移數 GB 的個人檔案，還是在帳號之間同步公司文件，這種方式都快速、安全又可靠。

 🎯 立即試用 RcloneView，讓你的多雲端管理輕鬆無比。

---

## 🔗 相關指南

- [如何新增 Google Drive 遠端](/howto/#step-2-adding-remote-storage-google-drive-example)
- [如何新增 OneDrive 遠端](/howto/remote-storage-connection-settings/add-oath-online-login#quick-setup-guide)
- [瀏覽與管理遠端儲存空間](/howto/rcloneview-basic/browse-and-manage-remote-storage)
- [比對資料夾內容指南](/howto/rcloneview-basic/compare-folder-contents)
- [同步遠端儲存空間](/howto/rcloneview-basic/synchronize-remote-storages)  
- [建立同步工作](/howto/rcloneview-basic/create-sync-jobs)  
- [執行與管理工作](/howto/rcloneview-basic/execute-manage-job)
- [工作排程與執行](/howto/rcloneview-advanced/job-scheduling-and-execution)


<CloudSupportGrid />
