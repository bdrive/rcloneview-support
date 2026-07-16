---
slug: manage-google-drive-shared-with-me-rcloneview
title: "管理 Google Drive 與我共用的內容 — 使用 RcloneView 同步與備份檔案"
authors:
  - alex
description: "使用 RcloneView 跨平台圖形介面瀏覽、同步並備份 Google Drive「與我共用」資料夾，不再遺漏共用內容的追蹤。"
keywords:
  - google drive shared with me
  - google drive shared with me sync
  - rcloneview google drive
  - backup shared google drive folders
  - google drive gui client
  - shared_with_me rclone
  - google drive collaboration backup
  - manage shared google drive files
tags:
  - google-drive
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 管理 Google Drive 與我共用的內容 — 使用 RcloneView 同步與備份檔案

> 其他人與您共用的檔案存在於與您自己 Drive 分離的空間中 — RcloneView 讓您能像瀏覽自己的檔案一樣輕鬆瀏覽、備份並同步這些共用內容。

Google Drive 的「與我共用」區段存放著同事、客戶或協作者分享給您帳號的所有檔案與資料夾，但預設情況下它並不屬於您常規的 Drive 資料夾樹狀結構。這種分離使得共用內容很容易被遺漏追蹤，尤其是當某個客戶資料夾需要在本機封存或鏡像到另一個雲端以妥善保存時。RcloneView 透過將「與我共用」空間連接為其自身可瀏覽的遠端來解決此問題，讓您能像處理工作流程中的其他資料夾一樣處理共用內容。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 連接到「與我共用」內容

標準的 Google Drive 遠端只會顯示您擁有或已放入自己資料夾結構中的檔案。若要存取與您共用的項目，RcloneView 的遠端設定會公開 Google Drive 遠端的 `shared_with_me` 設定 — 啟用後會將連線指向「與我共用」檢視，而非您的個人 Drive 根目錄。這表示您不需要第二個 Google 帳號或瀏覽器變通方法即可存取客戶的共用資料夾；您只需在「新增遠端」精靈中設定一次，共用的樹狀結構就會像其他連線一樣出現在檔案總管面板中。

<img src="/support/images/en/blog/new-remote.png" alt="Creating a new Google Drive remote configured for Shared with Me content in RcloneView" class="img-large img-center" />

連接完成後，「與我共用」遠端的運作方式就如同一般檔案來源：資料夾樹狀導覽、圖片縮圖預覽，以及用於複製、下載和取得公開連結的標準右鍵選單，全都以相同方式運作。RcloneView 也支援同步與比較資料夾 — 即使在免費授權下亦然 — 因此共用內容並不侷限於唯讀瀏覽。

## 在共用資料夾消失前進行備份

如果擁有者撤銷存取權限或刪除來源檔案，共用資料夾可能會從您的檢視中消失，當專案交付成果仰賴他人的 Drive 時，這是一個真實的風險。從「與我共用」遠端執行一個單向同步工作，將內容同步到您自己的 Google Drive、本機磁碟或物件儲存儲存桶，即可建立一份由您掌控的獨立副本。將工作設定為「僅修改目的地」方向，讓備份目的地始終鏡像共用資料夾的當前狀態，而不會變更原始內容。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Syncing a Google Drive Shared with Me folder to a backup destination in RcloneView" class="img-large img-center" />

對於經常往來的客戶關係，篩選設定可讓您排除不需要封存的檔案類型 — 可在同步精靈第 3 步中使用預先定義或自訂篩選規則，略過 Google 文件或特定副檔名，讓備份專注於真正重要的檔案。

## 排程持續性保護

客戶每週更新的共用資料夾需要的不只是一次性複製。PLUS 授權使用者可以為同步工作附加類似 crontab 的排程，讓「與我共用」內容定期自動備份，無需手動重新執行工作。之後「工作歷史記錄」會記錄每次執行的狀態、傳輸大小與所需時間，讓您清楚掌握共用內容最後一次擷取的時間。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a recurring backup job for a Google Drive Shared with Me remote" class="img-large img-center" />

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 建立新的 Google Drive 遠端，並在設定過程中啟用 `shared_with_me` 選項。
3. 在檔案總管面板中瀏覽「與我共用」樹狀結構，確認預期的資料夾都已出現。
4. 設定一個單向同步工作到備份目的地，若您使用 PLUS 授權，可為其設定排程。

共用內容不應成為您備份策略中的盲點 — 將其納入 RcloneView，即可讓它獲得與您管理的其他一切相同的保護。

---

**相關指南：**

- [管理 Google Drive 儲存空間 — 使用 RcloneView 同步與備份檔案](https://rcloneview.com/support/blog/manage-google-drive-cloud-sync-backup-rcloneview)
- [修復 Google 共用雲端硬碟權限錯誤 — 如何透過 RcloneView 解決](https://rcloneview.com/support/blog/fix-google-shared-drive-permission-errors-rcloneview)
- [使用 RcloneView 同步兩個 Google Drive 帳號](https://rcloneview.com/support/blog/sync-two-google-drive-accounts-rcloneview)

<CloudSupportGrid />
