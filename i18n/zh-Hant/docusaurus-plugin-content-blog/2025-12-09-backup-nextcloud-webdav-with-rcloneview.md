---
slug: backup-nextcloud-webdav-with-rcloneview
title: "使用 RcloneView 備份 Nextcloud 和 WebDAV 磁碟機:視覺化同步、排程與完整性檢查"
authors:
  - tayson
description: "透過 RcloneView 保護您的 Nextcloud 或任何 WebDAV 磁碟機 - 新增遠端、預覽差異、排程版本化備份,並在不需記住 CLI 參數的情況下驗證完整性。"
keywords:
  - nextcloud backup
  - webdav backup
  - rcloneview webdav
  - nextcloud to s3
  - webdav to google drive
  - cloud to cloud backup
  - rclone webdav gui
  - versioned backup
  - rclone check
  - cloud automation
tags:
  - RcloneView
  - backup
  - webdav
  - nextcloud
  - cloud-storage
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 使用 RcloneView 備份 Nextcloud 和 WebDAV 磁碟機:視覺化同步、排程與完整性檢查

> 透過將 Nextcloud 或任何 WebDAV 磁碟機鏡像到 Google Drive、S3/Wasabi 或其他雲端,保護您的資料安全-不需要命令列。RcloneView 可預覽變更、排程工作,並驗證完整性,讓備份始終值得信賴。

Nextcloud 和其他 WebDAV 服務為團隊共用與自架儲存提供動力,但它們仍然需要異地備份。RcloneView 將 rclone 引擎包裝在 GUI 中,讓您只需新增一次 WebDAV,將其與目標雲端配對,並透過工作排程器與比較功能自動執行已驗證的備份。

<!-- truncate -->


<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />


## 為什麼要用 RcloneView 備份 WebDAV/Nextcloud

- 使用**比較**功能在同步前將差異視覺化,避免覆寫。
- 重複使用同一個 WebDAV 遠端來備份至多個目標(Drive、S3、Wasabi)。
- 排程定期備份,並在工作歷史記錄中保留日誌。
- 在複製/同步流程中啟用校驗碼選項以確認資料完整性(視支援情況而定)。

## 連接您的 WebDAV/Nextcloud 遠端

1. 點擊 **`+ New Remote`** -> 選擇 **WebDAV**。
2. 輸入您的 **URL**、**使用者名稱**、**密碼/應用程式密碼**,並選擇正確的廠商預設值(例如 Nextcloud)。
3. 為其命名清楚易懂,例如 `Nextcloud_Main`。  
   <img src="/support/images/en/blog/new-remote.png" alt="New remote wizard" class="img-medium img-center" />

需要參考資料嗎?請參閱 WebDAV 指南:[新增 WebDAV/Nextcloud 遠端](https://rcloneview.com/support/howto/remote-storage-connection-settings/webdav)。

## 選擇備份目的地

- **Google Drive / Workspace** 便於分享與保留歷史紀錄。
- **S3 相容**雲端(Amazon S3、Wasabi、R2)提供可預測的成本與生命週期規則。
- **另一個 WebDAV** 用於簡單的鏡像複製。

使用 `+ New Remote` 新增目的地遠端,然後在**檔案總管 -> 瀏覽**中並排開啟兩者。  
<img src="/support/images/en/blog/open-multiple-google-drive-remotes.png" alt="Side-by-side remotes" class="img-medium img-center" />

## 複製前先預覽

- 在檔案總管中選擇來源(WebDAV)與目的地資料夾。
- 點擊**比較**以標示缺失、較新或相同的項目。
- 使用 **`Copy ->`** 或 **`<- Copy`** 只移動您需要的內容,或安全地刪除多餘的檔案。

## 使用同步執行一次性備份

1. 選擇來源/目的地資料夾。
2. 點擊**同步**,並先啟用**模擬執行**以查看預計的變更。
3. 在同步選項中,若您的伺服器有速率限制,請保持適中的並行度;測試後可在設定中提高傳輸/檢查數量。
4. 在**傳輸**與**已完成**分頁中觀察進度;檢查日誌以確認是否有任何 API 限制。

## 排程定期備份(設定一次即可自動執行)

1. 在同步對話框中,點擊**儲存至工作**(或開啟**工作管理員 -> 新增工作**)。
2. 選擇排程(每日或特定日期),若您想要簡單的時間點複本,可將目的地指向日期命名的資料夾。
3. 啟用通知,並在**工作歷史記錄**中檢視成功/失敗的詳細資訊。  

- 指南:[建立同步工作](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)、[執行與管理工作](https://rcloneview.com/support/howto/rcloneview-basic/execute-manage-job)、[工作排程](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)、[傳輸監控](https://rcloneview.com/support/howto/rcloneview-basic/real-time-transfer-monitoring)

## 快速問答

**這適用於任何 WebDAV,不只是 Nextcloud 嗎?**  
是的-選擇 WebDAV 並選擇對應的廠商/預設值,或選「其他」以符合您的服務。

**我可以備份到多個目的地嗎?**  
可以-在多個工作中重複使用同一個 WebDAV 來源(例如 Nextcloud -> Drive 以及 Nextcloud -> Wasabi)。

**如果應用程式被鎖定,排程工作還會執行嗎?**  
工作會依照設定執行;應用程式鎖定只是保護 UI 存取(請參閱[啟用應用程式鎖定](/tutorials/enable-app-lock))。

## 總結

RcloneView 讓 WebDAV/Nextcloud 備份變得視覺化且可預測:只需新增一次遠端、預覽變更、調整效能,並排程已驗證的工作。以值得信賴的異地備份保護您團隊的檔案-不需要 CLI 專業知識。

<CloudSupportGrid />
