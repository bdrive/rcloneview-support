---
slug: manage-dreamhost-object-storage-rcloneview
title: "管理 DreamHost DreamObjects — 使用 RcloneView 同步與備份檔案"
authors:
  - robin
description: "將 DreamHost DreamObjects 連接至 RcloneView，透過視覺化介面管理相容 S3 的儲存桶、同步檔案並自動化備份，完全不需輸入任何 CLI 指令。"
keywords:
  - DreamHost DreamObjects
  - DreamObjects S3 storage
  - DreamHost cloud backup
  - S3 compatible storage management
  - sync files to DreamObjects
  - DreamHost object storage RcloneView
  - cloud backup web developers
  - S3 cloud storage GUI
  - DreamHost file sync
tags:
  - RcloneView
  - s3-compatible
  - object-storage
  - cloud-storage
  - cloud-sync
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 管理 DreamHost DreamObjects — 使用 RcloneView 同步與備份檔案

> DreamHost DreamObjects 是一個經濟實惠、相容 S3 的物件儲存服務——RcloneView 讓您能以視覺化方式瀏覽儲存桶、同步檔案並排程備份，完全不需接觸命令列。

DreamHost DreamObjects 與 DreamHost 代管的網站可謂天作之合：它將備份、媒體資產與靜態檔案儲存在具備冗餘機制的硬體上，並提供相容 S3 的 API。已在 DreamHost 代管網站的團隊，可透過將 DreamObjects 連接至 RcloneView，並在雙窗格檔案總管中管理一切，將這項投資延伸至結構化的雲端備份。在免費授權下即可連接 S3、Azure 或 Backblaze B2 並擁有完整讀寫權限，DreamObjects 也不例外。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 為何 DreamObjects 值得擁有專屬工作流程

維護數十個客戶專案的網頁代理商，會累積大量上傳的媒體檔案、資料庫匯出檔與建置產物，這些都需要定期進行異地備份。DreamObjects 提供了這樣的異地備份目標，而且不需要另外向一個對代管業務一無所知的供應商申請雲端帳戶。將每夜匯出的資料與正式站點一同儲存至 DreamObjects，代表當遷移或意外刪除發生時，復原只需向同一家供應商取回資料，不必在多家廠商之間手忙腳亂。

由於 DreamObjects 相容 S3，RcloneView 使用與連接 Amazon S3、Cloudflare R2、Wasabi 及其他數十種物件儲存服務相同的 S3 遠端類型來連接它。如果您先前已設定過任何 S3 類型的遠端，DreamObjects 的設定流程對您來說會相當熟悉。

<img src="/support/images/en/blog/new-remote.png" alt="Adding a new DreamHost DreamObjects S3 remote in RcloneView using Access Key and endpoint credentials" class="img-large img-center" />

## 將 DreamObjects 連接至 RcloneView

開啟 RcloneView 並前往 **Remote** 分頁，然後點擊 **New Remote**。選擇 **S3** 遠端類型，並輸入從 DreamHost 控制台取得的 DreamObjects Access Key ID、Secret Access Key 以及儲存桶端點 URL。儲存後，新的遠端會出現在 Remote Manager 中，並立即可作為檔案總管中的一個窗格使用。

從檔案總管瀏覽 DreamObjects 的體驗就像瀏覽本機磁碟一樣：檔案名稱、大小與修改日期皆一目瞭然。您可以建立資料夾、將檔案從本機窗格拖曳上傳、以滑鼠右鍵刪除物件，並為需要分享的物件產生公開連結。您不再需要每次要檢視或搬移檔案時都登入 DreamHost 網頁控制台。

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="Dragging files from a local folder into a DreamObjects bucket using RcloneView drag-and-drop upload" class="img-large img-center" />

## 同步與備份至 DreamObjects

若要進行定期備份，請從 **Home** 分頁的精靈建立同步工作。選擇本機專案資料夾或另一個雲端遠端作為來源，並將您的 DreamObjects 儲存桶路徑設為目的地。在正式執行前，請啟用 **Dry Run** 以預覽所有將被傳輸的檔案——這在第一次同步大型媒體庫時特別有用，因為預覽功能可在不移動任何資料的情況下,發現過大的檔案或命名問題。

確認無誤後，將工作儲存至 Job Manager 並依需求執行。PLUS 授權使用者可附加類似 cron 的排程，讓 DreamObjects 備份每晚自動執行。**Job History** 分頁會記錄每一次執行的檔案數量、傳輸速度、總大小與最終狀態，提供便於客戶報告或合規審查的稽核紀錄。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a sync job to a DreamHost DreamObjects bucket from the RcloneView Job Manager" class="img-large img-center" />

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history tab in RcloneView showing completed DreamObjects backup transfer records" class="img-large img-center" />

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 前往 **Remote** > **New Remote**，選擇 **S3**，並輸入從 DreamHost 控制台取得的 DreamObjects Access Key、Secret Key 與端點。
3. 在檔案總管窗格中開啟新的遠端，並直接拖曳檔案以上傳。
4. 在 **Home** 分頁建立同步工作，先執行 Dry Run，再正式執行並於 **Job History** 中檢視結果。

持續進行 DreamObjects 備份可保護網頁專案免受意外刪除、代管遷移與資料遺失事件的影響——完全不需要 CLI 專業知識或另外建置監控系統。

---

**相關指南：**

- [使用 RcloneView 管理 Cloudflare R2 雲端同步](https://rcloneview.com/support/blog/manage-cloudflare-r2-cloud-sync-rcloneview)
- [管理 Amazon S3 — 使用 RcloneView 進行雲端同步與備份](https://rcloneview.com/support/blog/manage-amazon-s3-cloud-sync-backup-rcloneview)
- [使用 RcloneView 管理 Wasabi 雲端同步與備份](https://rcloneview.com/support/blog/manage-wasabi-cloud-sync-backup-rcloneview)

<CloudSupportGrid />
