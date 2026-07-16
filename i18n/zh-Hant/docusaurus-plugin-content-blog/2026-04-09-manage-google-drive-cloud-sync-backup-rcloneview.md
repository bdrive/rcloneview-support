---
slug: manage-google-drive-cloud-sync-backup-rcloneview
title: "使用 RcloneView 管理 Google Drive 檔案與雲端同步"
authors:
  - tayson
description: "使用 RcloneView 管理 Google Drive 檔案。透過視覺化 GUI 在 Google Drive、共用雲端硬碟與其他雲端服務供應商之間同步、備份與傳輸資料。"
keywords:
  - rcloneview
  - google drive sync rcloneview
  - google drive backup
  - google drive file manager
  - google drive cloud sync tool
  - google drive to s3
  - google drive rclone gui
  - google shared drives backup
  - google drive multi-cloud
  - google drive automated backup
tags:
  - RcloneView
  - google-drive
  - cloud-storage
  - cloud-sync
  - guide
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 使用 RcloneView 管理 Google Drive 檔案與雲端同步

> Google Drive 是 Google Workspace 的核心，但管理備份與跨雲端傳輸需要的不只是原生用戶端 —— **RcloneView** 透過視覺化介面提供這樣的控制能力。

Google Drive 服務超過二十億使用者，Gmail、Drive 與 Photos 共用 15 GB 免費儲存空間，Workspace 方案在 Enterprise 層級可擴展至無限儲存空間。原生 Google Drive 桌面用戶端可將檔案同步到本機，但無法將資料複寫到 AWS S3、OneDrive 或 NAS。RcloneView 透過 Drive API v3 連接 Google Drive，並提供完整的檔案管理介面 —— 瀏覽、同步、複製、移動，並在 Google Drive 與任何其他儲存服務供應商之間排程備份。

無論你是保護課業資料的學生、管理數千份 RAW 檔案的攝影師，或是需要將共用雲端硬碟同步到獨立備份目標的 Workspace 管理員，RcloneView 都能提供原生用戶端所沒有的功能。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 在 RcloneView 中連接 Google Drive

新增 Google Drive 使用標準的 OAuth 2.0 流程。開啟遠端管理員，選擇 **Google Drive**，然後點擊授權。系統會開啟瀏覽器視窗，讓你登入 Google 帳號並授予存取權限。權杖會安全地儲存在你本機的 rclone 設定中。

設定過程中你可以選擇存取範圍 —— 完整雲端硬碟存取、唯讀，或僅限於 RcloneView 建立的檔案的檔案層級存取。對於大多數備份與同步工作流程而言，完整存取權是正確的選擇。你也可以在此步驟中設定共用雲端硬碟（前身為 Team Drives）的存取，可依 ID 選擇特定的共用雲端硬碟，或讓 RcloneView 列出所有可用的雲端硬碟。

Google Drive 會強制執行 API 配額 —— 預設每個專案每 100 秒可執行 10,000 次查詢。RcloneView 會以指數退避方式自動處理 403 userRateLimitExceeded 回應。若要進行大規模操作，你可以註冊自己的 Google Cloud 專案並提供自己的 client ID，以提高配額限制。

<img src="/support/images/en/blog/new-remote.png" alt="Adding a Google Drive remote in RcloneView Remote Manager" class="img-large img-center" />

## 我的雲端硬碟 vs. 共用雲端硬碟

Google Drive 區分「我的雲端硬碟」（與使用者帳號綁定的個人儲存空間）和「共用雲端硬碟」（檔案屬於團隊而非個人的組織擁有儲存空間）。這項區別對同步與備份很重要，因為共用雲端硬碟具有不同的擁有權語意、更嚴格的檔案命名規則，以及獨立的儲存配額。

RcloneView 能透明地處理這兩者。你可以在雙欄總管中並排開啟「我的雲端硬碟」與一個共用雲端硬碟，比較資料夾內容，並在兩者之間同步。從「我的雲端硬碟」同步到共用雲端硬碟時，RcloneView 會自動調整以因應共用雲端硬碟的限制 —— 含有不支援字元的檔案會被重新命名，捷徑檔案則依你的偏好設定被解析或略過。

## 將 Google Drive 與其他雲端服務供應商同步

RcloneView 的雙欄總管會將 Google Drive 與任何其他遠端並排顯示。你可以將整個雲端硬碟同步到 Backblaze B2 以取得經濟實惠的備份，將特定專案資料夾複製到 AWS S3 進行封存，或將舊檔案移動到 Wasabi 以取得具成本效益的冷儲存。

Google Drive 使用 MD5 校驗碼來驗證檔案完整性。RcloneView 原生支援同步期間的 MD5 比對，因此只有實際變更過的檔案才會被傳輸。這能同時節省時間與 API 配額。對於 Google Docs、Sheets 與 Slides —— 這些以雲端原生格式儲存、沒有固定檔案大小的檔案 —— RcloneView 會在下載與同步期間將其匯出為標準格式（docx、xlsx、pptx）。

對於大型傳輸，你可以設定多執行緒下載並調整區塊大小。Google Drive 支援超過 5 MB 檔案的可續傳上傳，RcloneView 會利用此功能，在中斷後恢復傳輸而無需重新開始整個檔案。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Syncing Google Drive files to another cloud provider in RcloneView" class="img-large img-center" />

## 排程自動化 Google Drive 備份

在 Google Drive 上只保留一份資料副本並不算是備份。意外刪除、帳號停用與勒索軟體都可能導致資料遺失。備份到獨立的服務供應商能增加關鍵的安全防護。

RcloneView 的排程器能自動化這個流程。設定從 Google Drive 到 AWS S3 或 Backblaze B2 的夜間同步工作，RcloneView 會處理差異偵測、傳輸與記錄。工作歷史面板會記錄每次執行的統計資料 —— 已傳輸檔案數、已略過檔案數、傳輸的總位元組數，以及所花費的時間。

對於 Workspace 管理員而言，排程備份共用雲端硬碟能確保團隊資料獨立於 Google 基礎架構之外進行複寫。將排程備份搭配加密（使用 crypt 遠端）可提供額外一層保護。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling automated Google Drive backup in RcloneView" class="img-large img-center" />

## 比較資料夾與驗證資料

在進行大型同步之前，RcloneView 的比較功能會準確顯示將會發生哪些變更。選擇兩個資料夾 —— 一個在 Google Drive 上，一個在其他遠端上 —— RcloneView 會標示只存在於其中一側的檔案、大小或雜湊值不同的檔案，以及完全相同的檔案。

這在遷移後特別有價值。在你的 Google Drive 來源與備份目的地之間執行比較，以確認每個檔案都完整送達。視覺化差異比對讓你能輕鬆發現缺漏並在淘汰原始資料之前予以修正。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Comparing Google Drive files with another cloud in RcloneView" class="img-large img-center" />

## 將 Google Drive 掛載為本機磁碟機

RcloneView 可將 Google Drive 掛載為 Windows 上的本機磁碟機代號，或 macOS 與 Linux 上的掛載點。這讓你能直接從任何應用程式 —— 檔案總管、影片編輯軟體或命令列工具 —— 存取 Drive 檔案，而無需先下載它們。

啟用 VFS 快取以取得最佳效能。這會將最近存取過的檔案儲存在本機，讓後續讀取即時完成。快取大小與過期時間皆可設定。掛載功能對於媒體工作流程特別有用，讓你能在不進行完整同步的情況下瀏覽或預覽 Drive 檔案。

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="Mounting Google Drive as a local drive in RcloneView" class="img-large img-center" />

## 即時監控傳輸狀態

在大型傳輸期間，RcloneView 提供即時監控儀表板，顯示傳輸速度、每個檔案的進度，以及整體完成百分比。你可以暫停、繼續或取消個別傳輸，而不影響佇列中的其他項目。頻寬節流可防止 Google Drive 傳輸佔滿你的網路 —— 在上班時段設定限制，並在夜間允許全速傳輸。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Real-time transfer monitoring for Google Drive in RcloneView" class="img-large img-center" />

## 瀏覽與管理檔案

RcloneView 的總管提供 Google Drive 網頁介面所沒有的功能 —— 對數萬個檔案進行批次操作、在任兩個雲端服務供應商之間拖放，以及並排資料夾比較。你可以直接透過總管在 Google Drive 上重新命名、移動、刪除與建立資料夾。共用雲端硬碟、捷徑與巢狀資料夾結構都能在總管面板中導覽。

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="Drag and drop files to and from Google Drive in RcloneView" class="img-large img-center" />

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 在遠端管理員中透過 OAuth 授權你的 Google 帳號，並選擇你的雲端硬碟類型（我的雲端硬碟或共用雲端硬碟）。
3. 在雙欄總管中瀏覽你的 Google Drive，並設定同步或複製工作到其他服務供應商。
4. 排程每日備份，在 S3、B2 或其他雲端上保留一份備援副本。

Google Drive 負責協作與文件編輯，而 RcloneView 則確保你的資料在你使用的每個雲端上都獲得備份、可攜且可存取。

---

**相關指南：**

- [新增 Google Drive](https://rcloneview.com/support/howto/#step-2-adding-remote-storage-google-drive-example)
- [瀏覽與管理遠端儲存空間](https://rcloneview.com/support/howto/rcloneview-basic/browse-and-manage-remote-storage)
- [建立同步工作](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [將雲端儲存空間掛載為本機磁碟機](https://rcloneview.com/support/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive)

<CloudSupportGrid />
