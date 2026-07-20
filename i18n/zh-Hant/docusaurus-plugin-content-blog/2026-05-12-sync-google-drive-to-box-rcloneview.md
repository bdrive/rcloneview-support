---
slug: sync-google-drive-to-box-rcloneview
title: "將 Google Drive 同步至 Box — 使用 RcloneView 進行雲端備份"
authors:
  - kai
description: "了解如何使用 RcloneView 將 Google Drive 同步至 Box。在兩個平台之間傳輸檔案、自動化跨雲端備份，並讓您的團隊保持同步。"
keywords:
  - sync Google Drive to Box
  - Google Drive Box RcloneView
  - cloud-to-cloud sync RcloneView
  - Google Drive Box backup
  - migrate Google Drive Box
  - RcloneView cross-cloud transfer
  - automate Google Drive backup Box
  - Google Workspace Box sync
  - Box cloud backup RcloneView
  - Google Drive Box file transfer
tags:
  - RcloneView
  - google-drive
  - box
  - cloud-to-cloud
  - cloud-sync
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 將 Google Drive 同步至 Box — 使用 RcloneView 進行雲端備份

> 當您的團隊將內容儲存於 Google Workspace 與 Box 之間時，RcloneView 能以零腳本撰寫的方式無縫銜接兩者。

許多組織在 Google Drive 中維護作用中的檔案，同時以 Box 作為合規性歸檔、客戶入口網站或部門共享空間。以手動方式讓這兩個平台保持同步既容易出錯又耗費時間。RcloneView 提供點擊式操作流程，讓您能從 Google Drive 提取內容並推送至 Box——無論您需要的是一次性遷移、每晚的增量備份，還是供稽核用途持續更新的副本。由於這兩項服務皆受 rclone 原生支援，傳輸過程既有效率又經過總和檢查碼驗證。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 將 Google Drive 與 Box 連接至 RcloneView

Google Drive 與 Box 在 RcloneView 中皆使用 OAuth 瀏覽器驗證，這代表每個帳戶的設定只需不到兩分鐘。開啟「遠端」分頁，點選「新增遠端」，選擇 Google Drive。系統會開啟瀏覽器視窗，讓您登入 Google 帳戶並授予權限——無需手動建立 API 金鑰。針對 Box 重複相同步驟：新增遠端、選擇 Box，並完成瀏覽器 OAuth 流程。

如果您使用 Google 共用雲端硬碟（Team Drive），請在設定時啟用 `shared_with_me` 選項，或指定共用雲端硬碟 ID 作為根資料夾，以確保 Explorer 面板中能顯示所有團隊內容。若為 Box for Business 帳戶，請在建立遠端時設定 `box_sub_type = enterprise`，以解鎖企業資料夾與權限。

<img src="/support/images/en/blog/new-remote.png" alt="Adding Google Drive and Box remotes in RcloneView" class="img-large img-center" />

## 執行雲端對雲端傳輸

在左側 Explorer 面板開啟 Google Drive，右側開啟 Box。導覽至 Google Drive 中的來源資料夾——例如您團隊共用的 `Projects` 資料夾或客戶交付項目目錄——接著選取想要複製的項目，並將其拖曳至 Box 面板。RcloneView 會確認複製操作，並直接在兩個雲端服務之間串流資料，而您的本機裝置僅作為控制平面，讓您自身的頻寬使用量維持在低水準。

畫面底部的「傳輸中」分頁會顯示即時進度：目前速度、檔案數量與已傳輸的總位元組數。對於涵蓋簡報檔案、影片素材與試算表的大型傳輸作業，RcloneView 的多執行緒引擎可同時搬移多個檔案，相較於循序複製能大幅縮短總傳輸時間。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-to-cloud transfer from Google Drive to Box in RcloneView" class="img-large img-center" />

## 設定同步作業以進行持續備份

若需定期備份，可使用「工作管理員」建立同步作業。選擇 Google Drive 資料夾作為來源、Box 資料夾作為目的地，並設定篩選規則——例如排除 `.gdoc` Google 文件捷徑檔案，或將同步範圍限制在過去 30 天內修改過的內容。單向同步模式會將變更寫入 Box，而不會修改您的 Google Drive 內容，因此可安全地針對正式運作中的工作區執行。

在首次正式執行之前，請使用「模擬執行」選項預覽究竟會複製或覆寫哪些檔案。「工作歷史記錄」會記錄每次執行的時間戳記、傳輸大小與狀態碼，讓合規團隊擁有清楚的稽核軌跡可供參考。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a Google Drive to Box sync job in RcloneView" class="img-large img-center" />

## 使用排程同步自動化（PLUS 授權）

擁有 PLUS 授權後，您可以排程 Google Drive → Box 同步依任何 crontab 間隔自動執行——每晚午夜、每週一早上，或依貴組織 IT 政策要求的自訂週期。在作業精靈的「排程」步驟中填入分鐘、小時與星期幾欄位。每次執行都會記錄在「工作歷史記錄」中，附有時間戳記與狀態碼，讓您的合規團隊能確切稽核同步的執行時間及是否成功。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a Google Drive to Box automated sync in RcloneView" class="img-large img-center" />

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 透過「遠端」分頁 > 新增遠端 > Google Drive（OAuth 瀏覽器登入）新增您的 Google Drive 帳戶。
3. 透過「遠端」分頁 > 新增遠端 > Box（OAuth 瀏覽器登入）新增您的 Box 帳戶。
4. 在 Explorer 面板中並排開啟兩個遠端，拖曳檔案以立即複製，或在「工作管理員」中建立同步作業以取得可重複執行的工作流程。
5. 啟用排程功能（PLUS 授權）以定期自動執行同步，並設定完成通知。

維護良好的 Google Drive 到 Box 同步能讓您的合規歸檔保持最新，並確保跨平台檔案存取的一致性——RcloneView 讓這一切僅需五分鐘即可完成設定。

---

**相關指南：**

- [使用 RcloneView 管理 Google Drive 雲端同步與備份](https://rcloneview.com/support/blog/manage-google-drive-cloud-sync-backup-rcloneview)
- [使用 RcloneView 管理 Box 雲端同步與備份](https://rcloneview.com/support/blog/manage-box-cloud-sync-backup-rcloneview)
- [將 Box 同步至 Google Drive — 使用 RcloneView 進行雲端備份](https://rcloneview.com/support/blog/sync-box-to-google-drive-rcloneview)

<CloudSupportGrid />
