---
sidebar_position: 2
description: "了解如何搭配 Wasabi 使用 RcloneView,在本機儲存與其他雲端之間瀏覽、備份、同步及遷移資料。"
keywords:
  - rcloneview
  - wasabi
  - s3-compatible
  - cloud backup
  - cloud sync
  - cloud migration
  - file synchronization
  - gui
  - rclone gui
tags:
  - RcloneView
  - cloud-file-transfer
  - cloud-migration
  - cloud-backup
  - Tutorial
  - wasabi
date: 2025-02-20
author: Jay
slug: /
---

# 在 RcloneView 中使用 Wasabi(S3 相容)

RcloneView 是一款桌面應用程式,為 **rclone** 提供視覺化的雙窗格檔案總管介面。它讓您能在 **Wasabi** 與其他雲端或本機儲存空間之間複製、同步及遷移檔案,無需使用命令列。

使用 RcloneView,您可以:

- 像瀏覽本機資料夾一樣瀏覽您的 Wasabi 儲存桶  
- 在 **本機磁碟 ↔ Wasabi** 或 **Wasabi ↔ 其他雲端** 之間拖放檔案  
- 執行一次性傳輸,或排程重複執行的同步工作  

如果您想先觀看實際操作示範,可以觀看以下簡短示範影片:

<iframe
  src="https://www.youtube.com/embed/yKc6qS2DG2A"
  title="Wasabi + RcloneView Demo"
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  allowFullScreen
  loading="lazy"
  style={{aspectRatio: '16 / 9', width: '100%', maxWidth: '960px', height: 'auto', display: 'block', margin: '0 auto', border: 0}}
></iframe>

<br />

> 若想進一步了解 RcloneView,請造訪官方網站: [https://rcloneview.com](https://rcloneview.com)  


---

## 1. 下載並安裝 RcloneView

RcloneView 支援 **Windows、macOS 及 Linux**。

1. 前往下載頁面: [https://rcloneview.com/src/download](https://rcloneview.com/src/download)。  
2. 選擇適用於您作業系統的安裝程式(Windows、macOS 或 Linux)。  
3. 安裝並啟動 **RcloneView**。

---

## 2. 在 RcloneView 中新增 Wasabi 遠端

RcloneView 將 Wasabi 視為 **S3 相容** 後端。您只需建立一次遠端,即可重複用於瀏覽、複製、同步及排程工作。

### 2.1 事前準備 – Wasabi 存取金鑰與端點

要將 RcloneView 連接到 Wasabi,您需要:

- **存取金鑰(Access Key)** / **私密金鑰(Secret Key)**  
- **地區 / 端點 URL**(例如地區 `ap-northeast-2`、端點 `s3.ap-northeast-2.wasabisys.com`)  

請參閱 Wasabi 官方文件以建立存取金鑰並找到您的端點:

- Wasabi 文件: [https://docs.wasabi.com/docs](https://docs.wasabi.com/docs)  
- 範例:「[Creating a New Access Key](https://docs.wasabi.com/docs/creating-a-new-access-key)」或「[Creating a Bucket](https://docs.wasabi.com/docs/creating-a-bucket)」(可在 Wasabi 文件入口網站中搜尋)。

取得 **存取金鑰**、**私密金鑰** 及 **端點** 後,請返回 RcloneView。

### 2.2 開啟「新增遠端」精靈

1. 啟動 **RcloneView**。  
2. 從頂端選單點選 **`Remote` → `+ New Remote`**。  
   - 或點選檔案總管窗格中的 **`+`** 分頁,選擇 **`New Remote`**。

<div class="img-grid-2">
<img src="/support/images/en/howto/remote-storage-connection-settings/add-new-remote.png" alt="add new remote" class="img-medium img-center" />
<img src="/support/images/en/howto/remote-storage-connection-settings/add-new-remote-explorer.png" alt="add new remote explorer" class="img-medium img-center" />
</div>

### 2.3 將 Wasabi 設定為 S3 相容供應商

1. 在 **New Remote** 對話框中,搜尋 `Wasabi`。  
2. 選擇 **Wasabi** 供應商圖磚。  
3. 設定連線:
   - **Remote name**:輸入清楚易懂的名稱,例如 `MyWasabi`。  
   - **Access Key ID**:貼上您的 Wasabi 存取金鑰。  
   - **Secret Access Key**:貼上您的 Wasabi 私密金鑰。  
   - **Endpoint**:輸入 Wasabi S3 端點(例如 `s3.ap-northeast-2.wasabisys.com`)。  
4. 點選 **Add Remote**。

<img src="/support/images/en/tutorials/add-new-wasabi-remote-configuration.png" alt="add new wasabi remote configuration" class="img-large img-center" />

### 2.4 驗證 Wasabi 遠端

1. 開啟 **`Remote → Remote Manager`**。  
2. 確認您的 Wasabi 遠端(例如 `MyWasabi`)已列出且可正常連線。

<img src="/support/images/en/tutorials/verify-wasabi-in-remote-manager.png" alt="verify wasabi in remote manager" class="img-large img-center" />

如需更多詳細資訊,請參閱通用的 S3 相容指南:  
- [How to Add S3-Compatible Remote](/howto/remote-storage-connection-settings/s3)

---

## 3. 瀏覽 Wasabi 中的資料夾

建立遠端後,您即可在 RcloneView 的檔案總管中瀏覽儲存桶與物件。

1. 在檔案總管窗格中,點選 **`+`** 分頁。  
2. 在「Open Remote」清單中,選擇您的 **Wasabi** 遠端(例如 `MyWasabi`)。  
3. RcloneView 會在分頁中開啟該遠端,儲存桶會顯示為頂層資料夾。  
4. 雙擊儲存桶以瀏覽其內容。

<img src="/support/images/en/tutorials/wasabi-remote-in-rcloneview-explorer.png" alt="wasabi remote in rcloneview explorer" class="img-large img-center" />

如需更多一般導覽技巧,請參閱:  
- [File Management with RcloneView](/howto/rcloneview-basic/browse-and-manage-remote-storage)

---

## 4. 在本機磁碟與 Wasabi 之間管理檔案

本節說明如何使用 RcloneView 在您的本機電腦與 Wasabi 之間實際搬移資料。

您可以開啟:

- **左側窗格**:本機磁碟(例如 `C:\` 或特定資料夾)  
- **右側窗格**:您的 Wasabi 遠端儲存桶  

接著依照您的工作流程,使用拖放、資料夾比對或同步工作。

---

### 4.1 在本機與 Wasabi 之間拖放

拖放是複製檔案最簡單的方式。

1. 在左側窗格中,開啟您的 **本機資料夾**(例如 `D:\Media`)。  
2. 在右側窗格中,開啟您的 **Wasabi 儲存桶/資料夾**。  
3. 在左側選取檔案或資料夾。  
4. 將其拖曳到右側窗格,並放置到目標位置。  
5. RcloneView 會啟動傳輸工作;進度會顯示在 **Transfer** 分頁中。

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="wasabi drag and drop" class="img-large img-center" />
如需多重選取、右鍵選單動作等更多資訊,請參閱:  
- [File Management with RcloneView](/howto/rcloneview-basic/browse-and-manage-remote-storage)

---

### 4.2 比對資料夾並複製有變更的檔案

若您想在複製前先查看**差異**,可使用 **Compare(比對)** 功能。

常見情境:比對本機備份資料夾與 Wasabi 備份資料夾。

1. 在左側窗格中,開啟**來源資料夾**(例如本機或其他雲端)。  
2. 在右側窗格中,開啟 **Wasabi 目標資料夾**。  
3. 點選頂端 **Home** 選單中的 **`Compare`**。  
4. RcloneView 會標示:
   - 僅存在於左側的檔案(僅來源)  
   - 僅存在於右側的檔案(僅目標)  
   - 有變更的檔案(大小、時間戳記或校驗和不同)  
5. 選取您想搬移的項目,點選 **Copy →**(或反方向的 **← Copy**)。

<img src="/support/images/en/tutorials/wasabi-and-local-compare-and-copy.png" alt="wasabi and local compare and copy" class="img-large img-center" />
了解更多:  
- [Compare Folder Contents](/howto/rcloneview-basic/compare-folder-contents)

---

### 4.3 在本機磁碟與 Wasabi 之間執行同步工作

若需要可重複執行的備份或鏡像,請使用 **Sync(同步)**。同步會讓目標與來源保持一致。

有三種常見模式:

- **即時同步**(立即執行一次)  
- **已儲存的同步工作**(需要時重新執行)  
- **排程同步工作**(依排程自動執行)  

> ⚠️ 同步會將目標更新為與來源一致;僅存在於目標中的檔案可能會被刪除。執行前請務必仔細檢查同步設定。

#### 4.3.1 即時同步(一次性)

1. 在左側窗格開啟**來源資料夾**(例如本機資料夾)。  
2. 在右側窗格開啟**目標 Wasabi 資料夾**。  
3. 點選 **Home** 選單中的 **`Sync`**。  

<img src="/support/images/en/tutorials/wasabi-and-local-instant-sync.png" alt="wasabi and local instant sync" class="img-large img-center" />

接著,在 **Sync** 對話框中:

1. 在 **Configure Storage** 中確認來源與目標。  
2. 視需要調整 **Advanced Settings** 或 **Filtering Settings**。  
3. 若想先預覽變更,可先執行 **Dry Run**。  
4. 點選 **Run** 開始同步。

<img src="/support/images/en/tutorials/wasabi-configure-sync-job.png" alt="wasabi configure sync job" class="img-large img-center" />
執行同步後,您可以即時監控檔案傳輸進度。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="wasabi real time monitoring transferring" class="img-large img-center" />

參考資料:  
- [Synchronize Remote Storages Instantly](/howto/rcloneview-basic/synchronize-remote-storages)

#### 4.3.2 儲存同步工作以供重複使用

如果您將定期執行相同的本機 → Wasabi 備份:  
請依上述方式設定同步(左側為來源,右側為 Wasabi 目標)。    

1. 在 Sync 對話框中,選擇 **Save to Jobs**,而非立即執行。  
2. 為工作取一個容易辨識的名稱,例如 `SyncLocalToWasabi`。  
3. 之後,開啟 **Job Manager**,在需要更新備份時手動執行該工作。

<img src="/support/images/en/tutorials/wasabi-saved-sync-job-execution.png" alt="wasabi saved sync job execution" class="img-large img-right" />  
在支援的平台(例如 Windows)上,RcloneView 可在工作完成時顯示系統通知。

參考資料:  
- [Create Sync Jobs](/howto/rcloneview-basic/create-sync-jobs)  
- [Execute & Manage Jobs](/howto/rcloneview-basic/execute-manage-job)

#### 4.3.3 排程自動 Wasabi 備份(工作排程)

若要完全自動化 Wasabi 備份,可排程您的同步工作。

> 📌 **工作排程為 PLUS 功能。** 您需要 [PLUS 授權](https://rcloneview.com/src/pricing.html) 才能啟用排程功能。

從工具列開啟 **Job Manager**。    
1. 選取您的 Wasabi 同步工作(例如 `LocalToWasabi_DailyBackup`),點選 **Edit Job**,或從目前的檔案總管選取範圍建立新工作。  
2. 前往 **Step 4: Scheduling**。  
3. 啟用 **Run whenever time units ~**,並設定排程(例如每天 01:00)。  
4. 使用 **Simulate** 預覽即將執行的時間。  
5. 儲存工作並保持 RcloneView 運作中;工作將自動執行。

<img src="/support/images/en/tutorials/scheule-automatic-wasabi-backup.png" alt="scheule automatic wasabi backup" class="img-large img-center" />


如需更深入的說明:  
- [Job Scheduling and Automated Execution](/howto/rcloneview-advanced/job-scheduling-and-execution)

---

### 4.4 使用掛載功能在 Windows 檔案總管中操作 Wasabi

您可以將 Wasabi 儲存桶掛載為系統上的**虛擬磁碟機或資料夾**,接著就能像平常一樣使用 Windows 檔案總管(或 macOS 上的 Finder)操作。

一般流程:

請確認您的 Wasabi 遠端已設定完成且可正常運作。  
1. 選擇您想掛載的 Wasabi 資料夾。  
2. 點選 RcloneView 檔案總管右上角的 **Mount** 圖示。  
3. 點選 **Save and mount** 按鈕以開始掛載。  
4. 稍待片刻後,您的作業系統中會出現新的磁碟機或資料夾。瀏覽該路徑時,會透過 RcloneView/rclone 直接讀寫 Wasabi 的資料。

<img src="/support/images/en/tutorials/mount-wasabi-as-local-drive.png" alt="mount wasabi as local drive" class="img-large img-center" />
更多資訊:  
- [Mount Cloud Storage as a Local Drive](/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive)

---

## 5. 哪裡可以取得協助

- RcloneView 文件與操作指南: [https://rcloneview.com/support](https://rcloneview.com/support)  
- Wasabi 文件入口網站: [https://docs.wasabi.com](https://docs.wasabi.com)  

結合 Wasabi 的 S3 相容物件儲存與 RcloneView 的視覺化工作管理,您可以打造穩定可靠的備份、同步及遷移工作流程,而無需學習 rclone 的命令列語法。
