---
slug: manage-ftp-server-cloud-sync-backup-rcloneview
title: "管理 FTP 伺服器儲存空間——使用 RcloneView 同步與備份檔案"
authors:
  - robin
description: "使用 RcloneView 連接並管理您的 FTP 伺服器。將 FTP 檔案同步並備份至 Google Drive、S3、Backblaze B2 以及超過 90 種雲端儲存服務。"
keywords:
  - FTP server management
  - FTP cloud sync
  - FTP backup to cloud
  - RcloneView FTP
  - FTP file transfer
  - sync FTP to Google Drive
  - FTP to Amazon S3
  - FTP cloud backup tool
  - manage FTP storage
  - FTP rclone GUI
tags:
  - RcloneView
  - ftp
  - cloud-storage
  - cloud-sync
  - backup
  - guide
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 管理 FTP 伺服器儲存空間——使用 RcloneView 同步與備份檔案

> RcloneView 讓您的 FTP 伺服器搖身一變成為與 Google Drive、S3 及其他 90 多種雲端服務並列的一級遠端——以視覺化方式瀏覽、同步並備份其中的檔案。

FTP 至今仍是無數網站託管環境、舊式媒體檔案庫與內部檔案發佈伺服器的核心。管理 FTP 檔案通常意味著要在終端機工作階段、手動目錄清單與自製指令碼之間來回切換。RcloneView 將您的 FTP 伺服器視為與任何雲端儲存帳戶完全相同的存在——您可以透過一致的視覺化介面來瀏覽、傳輸與備份檔案，完全不需要動用命令列。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 在 RcloneView 中連接您的 FTP 伺服器

開啟 **Remote** 分頁並點選 **New Remote**。從服務供應商清單中選擇 FTP，然後輸入您伺服器的主機名稱或 IP 位址、連接埠、使用者名稱與密碼。如果您的伺服器支援 FTPS（透過 TLS 的 FTP），您可以在進階選項中啟用它以取得加密連線。

儲存完成後，該 FTP 遠端會與您的雲端帳戶一同顯示在檔案總管面板中。您可以展開其資料夾樹狀結構、瀏覽子目錄，並檢視檔案名稱、大小與修改時間戳記——體驗與使用 Amazon S3 或 Dropbox 完全相同。

<img src="/support/images/en/blog/new-remote.png" alt="Adding a new FTP remote in RcloneView" class="img-large img-center" />

## 以視覺化方式瀏覽與傳輸 FTP 檔案

RcloneView 的多面板檔案總管正是讓 FTP 管理變得高效的關鍵所在。在其中一個面板開啟您的 FTP 遠端，並在另一個面板開啟雲端目的地——可以是 Backblaze B2 儲存桶、Google Drive 資料夾，或是 Amazon S3 前綴路徑。在面板之間拖放檔案即可啟動複製作業。搬移大批檔案時，可使用 Ctrl+Click 或 Shift+Click 進行多重選取。右鍵點選可重新命名、刪除、建立資料夾，或取得資料夾大小。

對於在 FTP 伺服器上維護客戶檔案並需要將其歸檔至物件儲存的網頁代理商，或是需要將素材從 FTP 主機發佈至多個雲端 CDN 供應商的媒體團隊而言，這種並列檢視取代了容易出錯的手動作業流程。

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="Dragging files from FTP remote to cloud storage in RcloneView" class="img-large img-center" />

## 建立 FTP 與雲端儲存之間的同步工作

若需要可重複執行的工作流程，RcloneView 的 **Job Manager**（工作管理員）可讓您在 FTP 伺服器與任何雲端目的地之間設定同步或複製工作。4 步驟精靈涵蓋來源與目的地選擇、進階設定（並行傳輸數量、校驗碼驗證）以及篩選規則（檔案類型、大小限制、時效門檻）。

建議先執行 **Dry Run**（試執行）——它會預覽將被複製或刪除的每個檔案，而不做出任何實際變更。這對於目錄結構可能較為複雜、或存在意外覆寫風險的 FTP 來源尤其有用。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Executing a sync job from FTP to cloud storage in RcloneView" class="img-large img-center" />

每次執行完成後，**Job History**（工作歷史）分頁會顯示執行時間、傳輸速度、檔案數量與最終狀態——為您提供清楚的稽核記錄，讓您掌握何時搬移了哪些檔案。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history showing FTP to cloud backup results in RcloneView" class="img-large img-center" />

擁有 **PLUS 授權**後，您可以為 FTP 同步工作附加類似 cron 的排程——例如每晚備份新上傳的檔案，或每週同步至雲端儲存，全程無需保持工作階段開啟。

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 開啟 **Remote** > **New Remote**，並從供應商清單中選擇 FTP。
3. 輸入您的伺服器主機、連接埠、使用者名稱與密碼，然後儲存該遠端。
4. 在一個面板中開啟您的 FTP 遠端，在另一個面板中開啟雲端目的地。
5. 使用 **Job Manager** 設定同步工作，並在第一次正式傳輸前先執行 Dry Run。

將您的 FTP 伺服器連接至 RcloneView，代表您再也不需要撰寫任何同步指令碼——每一次傳輸都能在單一介面中被追蹤、重複執行並稽核。

---

**相關指南：**

- [管理 SFTP 伺服器儲存空間——使用 RcloneView 進行雲端同步](https://rcloneview.com/support/blog/manage-sftp-server-cloud-sync-rcloneview)
- [使用 RcloneView 將 FTP 伺服器遷移至雲端儲存](https://rcloneview.com/support/blog/migrate-ftp-server-to-cloud-storage-rcloneview)
- [連接 WebDAV 伺服器並使用 RcloneView 進行雲端同步](https://rcloneview.com/support/blog/connect-webdav-server-cloud-sync-rcloneview)

<CloudSupportGrid />
