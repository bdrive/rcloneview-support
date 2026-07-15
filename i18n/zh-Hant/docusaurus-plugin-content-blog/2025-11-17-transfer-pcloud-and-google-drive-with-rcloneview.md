---
slug: transfer-pcloud-and-google-drive-with-rcloneview
title: "使用 RcloneView 在 pCloud 與 Google Drive 之間傳輸檔案"
authors:
  - tayson
description: "在 pCloud 與 Google Drive 之間搬移資料，無需重新下載?使用 RcloneView 進行拖放、比較、同步，並透過 OAuth 與多執行緒上傳排程 Jobs。"
keywords:
  - pcloud to google drive
  - google drive to pcloud
  - rcloneview
  - cloud to cloud transfer
  - multi thread upload
  - drag and drop sync
  - scheduled jobs
  - compare folders
  - oauth login
  - resumable transfers
tags:
  - RcloneView
  - cloud-migration
  - pcloud
  - google-drive
  - sync
  - automation
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 使用 RcloneView 在 pCloud 與 Google Drive 之間傳輸檔案

> 省去下載後再上傳的繁瑣過程。RcloneView 讓你在引導式 GUI 中拖放、比較、同步並排程 pCloud ↔ Google Drive 傳輸?完全不需要 CLI。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 為什麼使用 RcloneView 進行多雲端傳輸？

- Google Drive 採用安全的 OAuth 登入，pCloud 則只需簡單的電子郵件/密碼，無需貼上任何權杖。
- 多執行緒、可續傳的上傳，附帶進度紀錄與重試機制。
- 雙窗格檔案總管，可直接在雲端之間拖放。
- 比較功能可在複製或清理前預覽差異。
- 同步功能提供包含/排除篩選器、模擬執行（dry-run）與依檔案大小決策。
- 背景 Jobs 與排程功能可自動化重複性的搬移作業。

RcloneView 結合了 rclone 的可靠性與視覺化工作流程，讓團隊與管理員能有信心地搬移大量資料夾。

## 開始之前

- 登入兩個帳戶並確認配額與 API 限制（Google Drive 對每位使用者實施每日 750 GB 的上傳上限）。
- 安裝最新版 RcloneView：[下載](https://rcloneview.com/src/download.html)。
- 對於 pCloud，請準備好你的電子郵件/密碼；若安全性設定有要求，請啟用應用程式密碼。
- 進行大量傳輸時建議使用有線網路或穩定的 Wi-Fi，並保持 RcloneView 運作以避免作業中斷。

## 步驟 1：連接你的雲端遠端

1. 開啟 **Remote → + New Remote**。
2. 選擇 **pCloud** 並輸入你的**電子郵件**與**密碼**，然後儲存。
3. 對 **Google Drive** 重複相同步驟，點擊 **Connect** 完成 OAuth 瀏覽器登入。
4. 確認兩個遠端都出現在 Remote Manager 中。  

  <img src="/support/images/en/blog/new-remote.png" alt="Open multiple cloud remotes in RcloneView" class="img-large img-center" />
  
  👉 深入了解：
  - [新增 Google Drive 遠端](/howto/#step-2-adding-remote-storage-google-drive-example)
  - [新增遠端（OAuth）](/howto/remote-storage-connection-settings/add-oath-online-login)

## 步驟 2：在檔案總管窗格中開啟兩個遠端

1. 前往 **Browse**。
2. 在左側窗格點擊 **+** 並開啟你的 **pCloud** 遠端。
3. 在右側窗格點擊 **+** 並開啟你的 **Google Drive** 遠端。
4. 導覽至你計劃搬移的來源與目的地資料夾。

<!-- Image placeholder: add `/support/images/en/tutorials/open-pcloud-and-google-drive-remotes.png` if available -->
<img src="/support/images/en/howto/remote-storage-connection-settings/pcloud-first-in-explorer.png" alt="open pcloud and google drive remotes" class="img-medium img-center" />

## pCloud ↔ Google Drive 傳輸的四種方法

### 方法一：在窗格之間拖放

1. 在 pCloud 窗格中選取檔案或資料夾。
2. 將它們拖放到 Google Drive 窗格（或反方向操作）。
3. 在 **Transfer** 分頁中觀察進度；如有需要可暫停或繼續。  

  <img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="drag and drop" class="img-large img-center" />
    
  👉 更多細節：[瀏覽與管理遠端儲存](/howto/rcloneview-basic/browse-and-manage-remote-storage)

### 方法二：比較後再複製或刪除

1. 在左側開啟來源資料夾，右側開啟目的地資料夾。
2. 點擊工具列上的 **Compare**。
3. RcloneView 會標示出獨有項目、大小差異與相符項目。
4. 選擇要搬移的內容，然後選擇 **Copy →** 或 **← Copy**。
5. 謹慎使用 **Delete** 來清理重複或過時的資料。  

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare shared folder and My Drive contents" class="img-large img-center" />
  

👉 深入了解：[比較資料夾內容](/howto/rcloneview-basic/compare-folder-contents)

### 方法三：同步或另存為 Job

1. 選擇你的 pCloud 來源與 Google Drive 目的地。
2. 點擊 **Sync** 並選擇單向或雙向同步。
3. 預覽變更、調整篩選器（包含/排除），然後開始執行。
4. 點擊 **Save to Jobs** 以便日後重複使用相同設定。  

<img src="/support/images/en/howto/rcloneview-basic/add-job-in-job-manager.png" alt="add sync job in job manager" class="img-large img-center" />   
     

👉 深入了解：
- [同步遠端儲存](/howto/rcloneview-basic/synchronize-remote-storages)
- [建立同步 Jobs](/howto/rcloneview-basic/create-sync-jobs)
- [執行與管理 Jobs](/howto/rcloneview-basic/execute-manage-job)


### 方法四：排程重複性同步 Jobs

1. 開啟 **Job Manager → Add Job**。
2. 將 **pCloud** 設為來源、**Google Drive** 設為目的地（或反過來）。
3. 選擇排程頻率（每小時、每日、每週，或自訂的類 cron 排程）。
4. 啟用該 Job，讓 RcloneView 自動執行。
5. 檢查紀錄與歷史記錄以確認執行成功。

👉 深入了解：[Job 排程與執行](/howto/rcloneview-advanced/job-scheduling-and-execution)
<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="configure job schedule" class="img-large img-center" />

## 順暢傳輸的小技巧

- 在大型同步作業前執行**模擬執行（dry-run）**以確認計畫。
- 在工作時段使用**頻寬限制**以降低被限流的風險。
- 對於加密的 pCloud 資料夾，請確保你擁有存取金鑰，或在搬移前先在本機解密。
- 接近 Google Drive 的每日上限時，將作業分散到多天或多個帳戶執行。
- 保持 **Transfer** 分頁開啟，以監控重試次數、速度與任何 API 回應。

## 總結

RcloneView 為 **pCloud** 與 **Google Drive** 之間提供快速、可靠且免 CLI 的傳輸方式。透過並排瀏覽、比較、同步、可重複使用的 Jobs 與排程功能，你可以在無需手動下載或重新上傳的情況下完成遷移或重複性備份。

<CloudSupportGrid />
