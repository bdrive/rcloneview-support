---
slug: zero-downtime-sharepoint-to-google-shared-drives-rcloneview
title: "使用 RcloneView 實現 SharePoint 到 Google 共用雲端硬碟的零停機遷移"
authors:
  - tayson
description: 結合 RcloneView 的多雲端 Explorer、Compare 預覽、Sync 工作，以及排程器驅動的差異傳輸，將 Microsoft 365 SharePoint Online 文件庫遷移至 Google 共用雲端硬碟，且不中斷使用者作業。
keywords:
  - sharepoint to google drive
  - google shared drive migration
  - rcloneview
  - zero downtime transfer
  - microsoft 365 to workspace
  - rclone compare
  - multi cloud sync
  - scheduler automation
  - sharepoint cutover plan
  - cloud migration blueprint
tags:
  - RcloneView
  - sharepoint
  - google-drive
  - migration
  - automation
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 使用 RcloneView 實現 SharePoint 到 Google 共用雲端硬碟的零停機遷移

> 讓設計、財務與專案團隊持續在 SharePoint 上工作，同時在背景中將資料填入 Google 共用雲端硬碟——然後在一次切換窗口中完成轉換。

SharePoint Online 文件庫通常包含大量權限設定的資料夾、文件集，以及區域資料控管規則。與此同時，Google Workspace 共用雲端硬碟承諾提供更簡單的協作與儲存配額，但原生的搬移工具往往無法保留中繼資料、差異視窗或速率限制。RcloneView 將 rclone 的 SharePoint 與 Google Drive 後端包裝成 GUI，讓你能透過分階段的 Compare 執行、Sync + Copy 工作、以掛載為基礎的 QA，以及以排程器為基礎的差異傳輸，來規劃多雲端遷移。

<!-- truncate -->

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />


## 為什麼要規劃零停機的 SharePoint -> Google 轉換

- **分散式團隊無法暫停作業** -- 行銷素材、PMO 與合約需要在新的共用雲端硬碟填入資料期間持續存取。
- **細緻的權限控管** -- SharePoint 文件庫混合了與 Teams 連結的資料夾及獨立的文件中心；你需要一套可重複的方法，在共用雲端硬碟中以清楚的稽核記錄重建這些結構。

零停機策略意味著在兩個平台皆保持上線的情況下執行多階段同步，並在最後一次差異傳輸後才進行切換。

## 遷移藍圖：多雲端控制面板

1. **連接雙方**，使用 [Remote Manager](/howto/rcloneview-basic/remote-manager)，並搭配 [SharePoint for Business](/howto/remote-storage-connection-settings/connect-using-cli/add-sharepoint-for-business) 與 [Google 共用雲端硬碟](/howto/remote-storage-connection-settings/connect-using-cli/add-google-shared-drive) 的提供商指南。RcloneView 會為每個租戶隔離 OAuth 權杖並加以保護儲存。
2. **整理 Explorer 面板**，讓每個面板對應到相符的文件庫與共用雲端硬碟。
3. **工作範本**來自 [Create Sync Jobs](/howto/rcloneview-basic/create-sync-jobs) 與 [Synchronize Remote Storages](/howto/rcloneview-basic/synchronize-remote-storages)。Copy 工作用來填入目標端；Sync 工作處理單向清理；Compare 執行則用於驗證。
4. **用於 QA 的掛載**，依照 [Mount cloud storage as a local drive](/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive) 的說明，讓進階使用者能在切換前於 Finder 或檔案總管中預覽內容。
5. **排程器與監控**，依賴 [Job scheduling and execution](/howto/rcloneview-advanced/job-scheduling-and-execution) 與 [Real-time transfer monitoring](/howto/rcloneview-basic/real-time-transfer-monitoring)，讓差異傳輸的執行結果保持可預測。  

<img src="/support/images/en/blog/new-remote.png" alt="Open multiple cloud remotes in RcloneView" class="img-large img-center" />  
  

## 第一步 -- 強化連接器與中繼資料

- 為每個遠端命名（`sp-marketing`、`sp-pmo`、`gdrive-regional-apac`），並將根路徑限制在特定文件庫。這能讓遠端瀏覽在 [Browse and manage remote storage](/howto/rcloneview-basic/browse-and-manage-remote-storage) 中保持快速。

## 第二步 -- 以 Compare 執行建立基準線

1. 開啟雙面板 Explorer，將左側指向 SharePoint，右側指向空的共用雲端硬碟。
2. 使用 [Compare folder contents](/howto/rcloneview-basic/compare-folder-contents) 偵測大小、校驗碼與時間戳記的差異。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare SharePoint library to Google Shared Drive before migrating" class="img-large img-center" />

基準線 Compare 快照能為你保留原始狀態的鑑識記錄，並協助辨識可能該封存而非遷移的過期子網站。

## 第三步 -- 分階段建立 Copy + Sync 工作

- 為每個業務單位建立一個 **Copy** 工作，將資料填入共用雲端硬碟，且不刪除 SharePoint 上的任何內容。參考：[Create Sync Jobs](/howto/rcloneview-basic/create-sync-jobs)。  

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running an encrypted sync job in RcloneView" class="img-large img-center" />  
   

## 第四步 -- 使用排程器自動化差異視窗

開啟排程器，全域啟用後，為每個工作指派執行頻率：

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule staged SharePoint to Google migration jobs inside RcloneView" class="img-large img-center" />


## 第五步 -- 切換日檢查清單

1. **凍結 SharePoint 的寫入**（透過 Teams/Slack 溝通），但保持網站上線以供唯讀需求使用。
2. 執行最終的 Sync + Compare 工作組合。使用 Compare 差異結果確認自上次差異傳輸以來僅有少數檔案變更。
3. 使用 [Mount cloud storage as a local drive](/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive) 掛載新的共用雲端硬碟，並讓業務負責人抽查複雜的資料夾結構。  

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="mount from remote explorer" class="img-large img-center" />  
       


## 遷移後 QA 與掛載作業

掛載管理員讓工程師、財務或創意部門主管能將新的共用雲端硬碟（或舊有的 SharePoint 遠端）以唯讀方式掛載，用於稽核與教育訓練。

## 專案時程手冊

| 階段 | RcloneView 動作 | 結果 |
| --- | --- | --- |
| 第 1 週 | 連接遠端、建立 Compare 基準線、建立 Copy 工作 | 各文件庫的清單，以及已填入資料的共用雲端硬碟 |
| 第 2 週 | 每晚排程差異傳輸 + 每週 Compare 報告 | 持續更新並具備差異可視性 |
| 第 3 週 | 試點掛載、權限驗證、使用者教育訓練 | 利害關係人能安全地預覽 Google 共用雲端硬碟 |
| 切換週 | SharePoint 凍結、最終 Sync/Compare、共用雲端硬碟正式上線 | 僅需數分鐘停機，並附有已簽署的驗證記錄 |
| 兩週後 | 在舊有遠端上排程 Sync，並選擇性將封存 Copy 至 S3/Wasabi | 證明在淘汰前沒有遺漏任何檔案 |


RcloneView 讓多雲端遷移變成可預測的作業手冊：設定遠端、預覽差異、分階段建立 Copy + Sync 工作、自動化差異傳輸，並掛載以進行 QA。你的團隊能持續在 SharePoint 上保持生產力，直到你將他們導向 Google 共用雲端硬碟的那一刻。

<CloudSupportGrid />
