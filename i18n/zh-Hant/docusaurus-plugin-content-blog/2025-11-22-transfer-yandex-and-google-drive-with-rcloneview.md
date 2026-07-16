---
slug: transfer-yandex-and-google-drive-with-rcloneview
title: "使用 RcloneView 在 Yandex Disk 與 Google Drive 之間傳輸檔案"
authors:
  - tayson
description: "使用 RcloneView 的圖形化介面在 Yandex Disk 與 Google Drive 之間遷移及同步檔案——原生 Yandex 登入、Google OAuth、拖放操作、比較、同步及排程工作。"
keywords:
  - rcloneview
  - yandex disk
  - google drive
  - cloud migration
  - cloud sync
  - rclone
  - cloud transfer
  - multi cloud
  - cloud to cloud transfer
tags:
  - cloud
  - sync
  - cloud-migration
  - tutorial
  - yandex
  - google-drive
  - cloud-to-cloud
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 使用 RcloneView 在 Yandex Disk 與 Google Drive 之間傳輸檔案

> 不需使用命令列，即可在 Yandex Disk ↔ Google Drive 之間移動或同步檔案。  
> RcloneView 提供並排的檔案總管窗格、比較、同步及排程工作——同時自動處理 Yandex 瀏覽器登入與 Google OAuth。

<!-- truncate -->


<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />


## 為何選擇 RcloneView 進行 Yandex ↔ Google Drive 傳輸？

- **透過瀏覽器進行原生 Yandex 登入**（無需 WebDAV，無需手動輸入權杖）。
- Google Drive 的**安全 OAuth** 登入。
- **並排的檔案總管窗格**，讓拖放操作更直覺。
- **比較**模式，可在複製或刪除前預覽差異。
- **同步**功能支援試執行、篩選器與校驗碼。
- **可重複使用的工作與排程**，適合定期備份與自動化。
- 透過日誌、重試機制與頻寬控制，提供**完整的進度可見性**。

RcloneView 在 rclone 之上建構了視覺化工作流程，即使是複雜的多雲端傳輸也能輕鬆完成。

---

## 開始之前

- 確認您可以登入您的 **Yandex 帳戶**——設定過程使用瀏覽器登入，而非 WebDAV。
- 檢查您的 **Google Drive** 容量，並留意 Google 每日 750 GB 的上傳限制。
- 從以下網址安裝最新版 RcloneView：  
  👉 https://rcloneview.com/src/download.html
- 對於大型工作，請保持電腦開機並優先使用穩定的網路。

---

## 步驟 1：新增您的雲端遠端

<img src="/support/images/en/blog/new-remote.png" alt="Open multiple cloud remotes in RcloneView" class="img-large img-center" />  

### 連接 Yandex Disk（以瀏覽器登入）

1. 開啟**遠端 → + 新增遠端**。
2. 選擇 **Yandex Disk** 作為提供者。
3. 點擊**連接**，這會在您的瀏覽器中開啟 Yandex 登入頁面。
4. 登入並授予存取權限。
5. 待 RcloneView 確認驗證完成後儲存該遠端。  

### 連接 Google Drive

1. 再次點擊 **+ 新增遠端**。
2. 選擇 **Google Drive**。
3. 按下**連接**，在瀏覽器中完成 OAuth 登入，並允許權限。
4. 儲存該遠端。

👉 指南：[新增 Google Drive 遠端](/howto/#step-2-adding-remote-storage-google-drive-example)

---

## 步驟 2：在檔案總管窗格中開啟兩個雲端

1. 前往**瀏覽**頁籤。
2. 點擊左側窗格的 **+** 圖示 → 選擇 **Yandex Disk**。
3. 點擊右側窗格的 **+** 圖示 → 選擇 **Google Drive**。
4. 導覽至您要移動或同步的資料夾。  

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="cloud to cloud transfer default" class="img-large img-center" />  

---

## 四種傳輸檔案的方式

### 方法一：在檔案總管窗格之間拖放

1. 在 Yandex 窗格中選取檔案或資料夾。
2. 將它們拖曳至 Google Drive 窗格（或反方向操作）。
3. 在**傳輸**下方查看進度。  

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="drag and drop" class="img-large img-center" />  


👉 參考資料：  
[瀏覽與管理遠端儲存](/howto/rcloneview-basic/browse-and-manage-remote-storage)  
[拖放檔案](https://rcloneview.com/support/howto/rcloneview-basic/browse-and-manage-remote-storage#copying-files-using-drag-and-drop)  

---

### 方法二：比較後再複製或刪除

1. 在左側開啟 Yandex Disk 的來源資料夾，在右側開啟 Google Drive 的目標資料夾。
2. 選擇**比較**。
3. RcloneView 會標示出：
   - 僅存在於單側的項目
   - 大小不同的項目
   - 相符的檔案
4. 依方向點擊**複製 →** 或 **← 複製**。
5. 清理重複檔案時，請謹慎使用**刪除**功能。  

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare shared folder and My Drive contents" class="img-large img-center" />  


👉 指南：[比較資料夾內容](/howto/rcloneview-basic/compare-folder-contents)  


---

### 方法三：同步或另存為工作

1. 選擇 **Yandex 資料夾**作為來源，**Google Drive 資料夾**作為目的地。
2. 點擊**同步**。
3. 選擇：
   - 單向同步（Yandex → Google Drive）
   - 單向同步（Google Drive → Yandex）
   - 雙向同步
4. 使用試執行預覽計畫中的操作。
5. 執行同步，或點擊**儲存為工作**以便日後重複使用。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running an encrypted sync job in RcloneView" class="img-large img-center" />  


👉 進一步了解：

- [同步遠端儲存](/howto/rcloneview-basic/synchronize-remote-storages)
- [建立同步工作](/howto/rcloneview-basic/create-sync-jobs)
- [執行與管理工作](/howto/rcloneview-basic/execute-manage-job)

---

### 方法四：排程定期同步工作

1. 開啟**工作管理員 → 新增工作**。
2. 選擇 Yandex 作為來源、Google Drive 作為目的地（或反向設定）。
3. 設定間隔時間（例如每日、每小時、每週）。
4. 啟用該工作。
5. 檢視日誌與工作歷史記錄以查看結果。  

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="create job schedule" class="img-large img-center" />  

👉 進一步了解：[工作排程與執行](/howto/rcloneview-advanced/job-scheduling-and-execution)

---

## 順暢傳輸的小技巧

- 在進行大型單向同步前，先使用**試執行**。
- Google Drive API 可能會限制非常大量的突發流量；如有需要請降低並行數量。
- 讓 RcloneView 保持執行，以確保排程工作能正常運作。

---

## 總結

RcloneView 讓在 **Yandex Disk** 與 **Google Drive** 之間傳輸檔案變得簡單又可靠。  
透過兩項服務皆支援的原生登入、視覺化檔案總管窗格、比較、同步與工作功能，您無需接觸命令列，即可遷移或維護多雲端工作流程。

<CloudSupportGrid />
