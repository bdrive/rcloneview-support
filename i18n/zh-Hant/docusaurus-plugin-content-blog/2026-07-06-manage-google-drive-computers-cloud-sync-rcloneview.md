---
slug: manage-google-drive-computers-cloud-sync-rcloneview
title: "管理 Google Drive Computers — 用 RcloneView 同步與備份檔案"
authors:
  - jay
description: "在 RcloneView 中連接並備份 Google Drive Computers 資料夾，將桌面備份資料同步至 90 多個雲端服務供應商，全部在同一個 GUI 中完成。"
keywords:
  - google drive computers
  - google drive computers backup
  - root_folder_id google drive
  - rcloneview google drive computers
  - backup and sync computers folder
  - google drive desktop backup
  - google drive computers sync
  - manage google drive computers
tags:
  - google-drive
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 管理 Google Drive Computers — 用 RcloneView 同步與備份檔案

> Google 的 Backup and Sync 應用程式推送到 Drive 中的桌面資料夾，存放在你一般 Drive 目錄結構之外 — RcloneView 可直接連接這些資料，讓它們能像其他遠端一樣被瀏覽、複製與備份。

當某台工作站啟用了 Google Drive 桌面用戶端的「備份我的電腦」資料夾功能後，這些檔案會存放在 Drive 中一個標準遠端預設無法看到的區域 — 它是以電腦 ID 定址，而非一般的資料夾路徑。這使得從 GUI 存取變得不易，也難以納入更廣泛的備份或封存策略。RcloneView 將此開放為可設定的遠端選項，讓 Computers 備份成為另一個可與你一般雲端儲存並列瀏覽、篩選與複製的來源。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 連接到 Computers 備份

Google Drive 一般的遠端設定只會顯示你自己的 Drive 根目錄以及你在其中建立的資料夾。若要存取 Computers 備份，RcloneView 的新增遠端精靈接受指向特定電腦備份 ID 的 `root_folder_id` 值 — 一旦設定完成，該台機器已備份的資料夾（桌面、文件，或桌面用戶端中選取的任何項目）就會像一般資料夾樹一樣出現在 Explorer 面板中。這對於管理多台員工筆電的 IT 團隊，或想在不登入瀏覽器的情況下確認某台機器的 Backup and Sync 用戶端實際擷取了什麼內容的人來說相當實用。

<img src="/support/images/en/blog/new-remote.png" alt="Configuring a Google Drive remote with root_folder_id to access a Computers backup in RcloneView" class="img-large img-center" />

連接完成後，該遠端支援與其他 Google Drive 連線相同的檔案操作：縮圖預覽、資料夾樹狀導覽、右鍵複製／下載，以及用於稽核某台機器已推送多少資料到 Drive 的「取得大小」功能。RcloneView 可在同一個視窗中跨 90 多個服務供應商進行掛載與同步，因此 Computers 備份可以放在一個面板中，而目的地封存則放在另一個面板。

## 將多台機器整合為單一封存

備份多台工作站的組織最終會為每台機器產生一個各自以其 ID 定址的 Computers 資料夾，這使得難以取得「公司筆電所有已備份內容」的單一視角。為每台機器建立獨立的遠端，並執行排程的單向同步工作，將資料傳送到共用的目的地 — 例如本地 NAS、S3 儲存貯體，或第二個 Drive 帳號 — 可將這些分散的備份資料整合到一個你真正掌控的位置，而不是讓資料鎖在每位員工各自的 Drive 視角中。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Syncing a Google Drive Computers backup to a consolidated archive destination in RcloneView" class="img-large img-center" />

同步精靈第 3 步中的篩選設定有助於讓這些工作保持高效 — 排除暫存檔案、系統快取或非必要的擴充功能，可確保整合後的封存只保留真正值得保留的內容，而不是完整鏡像桌面用戶端所擷取到的每一個檔案。

## 排程定期檢查

Computers 備份並非靜態資料 — 它會隨著桌面用戶端每次執行自身的同步週期而持續成長，因此一次性複製到你的封存中很快就會過時。PLUS 授權使用者可為同步工作附加類似 crontab 的排程，讓新備份的檔案能定期自動被擷取。Job History 會清楚顯示每台機器的 Computers 資料夾上次擷取的時間、傳輸大小，以及該次執行是否順利完成。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a recurring sync job for a Google Drive Computers remote in RcloneView" class="img-large img-center" />

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 建立新的 Google Drive 遠端，並將 `root_folder_id` 設為目標電腦的備份 ID。
3. 瀏覽 Explorer 面板，確認出現預期的桌面資料夾。
4. 建立單向同步工作，傳送到整合封存目的地；若你使用 PLUS 授權，可為其設定排程。

桌面備份資料不應被困在一個只能透過瀏覽器查看的電腦 ID 之後 — 將其納入 RcloneView，讓它與你其餘的雲端儲存享有同樣的可見性與保護。

---

**相關指南：**

- [管理 Google Drive Storage — 用 RcloneView 同步與備份檔案](https://rcloneview.com/support/blog/manage-google-drive-cloud-sync-backup-rcloneview)
- [管理 Google Drive Shared With Me — 用 RcloneView 同步與備份檔案](https://rcloneview.com/support/blog/manage-google-drive-shared-with-me-rcloneview)
- [用 RcloneView 將 Google Drive 掛載為本地磁碟機](https://rcloneview.com/support/blog/mount-google-drive-as-local-drive-rcloneview)

<CloudSupportGrid />
