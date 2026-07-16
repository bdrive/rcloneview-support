---
slug: transfer-onedrive-and-google-drive-with-rcloneview
title: "使用 RcloneView 在 OneDrive 與 Google Drive 之間傳輸檔案"
authors:
  - tayson
description: "無需下載即可在 Microsoft OneDrive 與 Google Drive 之間移動檔案——使用 RcloneView 的拖放、比較、同步與排程工作，實現可靠的雲端對雲端傳輸。"
keywords:
  - onedrive to google drive transfer
  - google drive to onedrive migration
  - rcloneview
  - cloud to cloud sync
  - drag and drop transfer
  - scheduled sync jobs
  - compare folders
  - resumable uploads
  - oauth login
tags:
  - RcloneView
  - cloud-migration
  - onedrive
  - google-drive
  - sync
  - automation
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 使用 RcloneView 在 OneDrive 與 Google Drive 之間傳輸檔案

> 切換雲端服務,不必重新下載數 GB 的資料。RcloneView 提供雙窗格總管、比較、同步與排程工作,讓 OneDrive ↔ Google Drive 的資料搬移保持快速且可預期——完全不需要 CLI。


<!-- truncate -->

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />



## 為什麼要用 RcloneView 進行 OneDrive ↔ Google Drive 傳輸?

- 兩個雲端服務均採用安全的 OAuth 登入;無需貼上任何權杖(token)。
- 可續傳的傳輸,附帶進度紀錄、重試與頻寬限制。
- 雙窗格總管,可透過拖放完成移動,無需撰寫腳本。
- 比較功能可在複製前突顯新增/變更的檔案。
- 支援單向或雙向同步,並提供可重複使用的工作與排程功能。
- 提供選用的模擬執行(dry-run)與篩選條件,精準控制要移動的內容。

RcloneView 在 rclone 之上提供了具引導性的使用介面,即使是大型遷移也能保持可靠,同時工程師在需要時仍能使用進階選項。

<img src="/support/images/en/tutorials/open-google-drive-and-onedrive.png" alt="transfer files between onedrive and google drive" class="img-large img-center" />


## 開始之前

- 登入 OneDrive 與 Google Drive 帳戶。
- 從最新版本安裝 RcloneView:[下載](https://rcloneview.com/src/download.html)。
- 檢查雲端服務配額及每日 API 限制(Google Drive 對每位使用者的上傳強制實施每日 750 GB 的限制)。
- 為獲得最佳傳輸速度,長時間執行工作時請保持 RcloneView 運作,並優先使用有線網路。

## 步驟 1:連接兩個雲端遠端

1. 開啟 **遠端 → + 新增遠端**。
2. 在 **提供者** 底下,選擇 **OneDrive**,然後點擊 **連接** 以完成 Microsoft OAuth 登入。
3. 對 **Google Drive** 重複相同步驟,並完成 OAuth 流程。
4. 確認兩個遠端都已顯示在遠端管理員中。

👉 進一步了解:[新增 Google Drive 遠端](/howto/#step-2-adding-remote-storage-google-drive-example)

<img src="/support/images/en/howto/remote-storage-connection-settings/remote-manager-mega-view.png" alt="Remote Manager showing connected cloud remotes" class="img-large img-center" />

## 步驟 2:在總管窗格中開啟兩個遠端

1. 前往 **瀏覽** 分頁。
2. 在左側窗格中,點擊 **+** 並開啟你的 **OneDrive** 遠端。
3. 在右側窗格中,點擊 **+** 並開啟你的 **Google Drive** 遠端。
4. 瀏覽至你打算同步的來源與目的地資料夾。


## 四種移動檔案的方式

### 方法 1:在總管窗格之間拖放

1. 在 OneDrive 窗格中選取檔案或資料夾。
2. 將它們拖曳到 Google Drive 窗格(或反方向操作)。
3. 在 **傳輸** 分頁中觀察進度;需要時可暫停/繼續。

👉 更多詳情:[瀏覽與管理遠端儲存](/howto/rcloneview-basic/browse-and-manage-remote-storage)

  <img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="drag and drop" class="img-large img-center" />

### 方法 2:比較後再複製或刪除

1. 在左側開啟來源資料夾,右側開啟目的地資料夾。
2. 點擊工具列上的 **比較**。
3. RcloneView 會標示出獨有的檔案、大小不符與相符的項目。
4. 選取要移動的項目,然後選擇 **複製 →** 或 **← 複製**。
5. 謹慎使用 **刪除** 來清理舊資料。

👉 進一步了解:[比較資料夾內容](/howto/rcloneview-basic/compare-folder-contents)

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare OneDrive and Google Drive folders" class="img-large img-center" />

### 方法 3:同步或另存為工作

1. 選取你的 OneDrive 來源與 Google Drive 目的地。
2. 點擊 **同步**,並選擇單向(OneDrive → Google Drive)或雙向。
3. 檢視預覽、調整篩選條件(包含/排除),然後開始執行。
4. 點擊 **儲存至工作** 以便日後重複使用相同的同步設定。

👉 進一步了解:

- [同步遠端儲存](/howto/rcloneview-basic/synchronize-remote-storages)
- [建立同步工作](/howto/rcloneview-basic/create-sync-jobs)
- [執行與管理工作](/howto/rcloneview-basic/execute-manage-job)

<img src="/support/images/en/howto/rcloneview-basic/add-job-configure-storage.png" alt="Configure sync job between OneDrive and Google Drive" class="img-large img-center" />

### 方法 4:排程自動同步工作

1. 開啟 **工作管理員 → 新增工作**。
2. 將 **OneDrive** 設為來源,**Google Drive** 設為目的地(或反過來)。
3. 選擇排程方式(每小時、每日、每週或 cron 樣式)。
4. 儲存並啟用該工作;RcloneView 將自動執行。
5. 檢視日誌與歷史紀錄以進行驗證。

👉 進一步了解:[工作排程與執行](/howto/rcloneview-advanced/job-scheduling-and-execution)

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule OneDrive to Google Drive sync job" class="img-large img-center" />

## 順暢執行多雲端傳輸的小技巧

- 在大型同步作業前使用 **模擬執行(dry-run)** 確認將會發生的變更。
- 對於共享的 OneDrive/Drive 資料夾,請確保雙方都擁有編輯權限。
- 在工作時段使用 **頻寬限制**,避免被限速。
- 若 Google Drive 達到每日 750 GB 上限,可將工作分散到多天或多個帳戶執行。
- 保持 **傳輸** 分頁開啟,以追蹤重試與傳輸速率。

## 總結

RcloneView 消除了在 **OneDrive** 與 **Google Drive** 之間下載/重新上傳的繁瑣流程。透過並排瀏覽、比較、同步、可重複使用的工作以及排程功能,你可以放心執行一次性搬移或定期備份——完全不需要命令列。

<CloudSupportGrid />
