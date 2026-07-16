---
slug: migrate-proton-drive-to-backblaze-b2-rcloneview
title: "將 Proton Drive 遷移至 Backblaze B2 — 使用 RcloneView 進行安全的雲端傳輸"
authors:
  - jay
description: "使用 RcloneView 將檔案從 Proton Drive 移轉至 Backblaze B2。逐步指南教您將加密雲端儲存資料遷移至價格實惠的物件儲存服務。"
keywords:
  - Proton Drive to Backblaze B2
  - migrate Proton Drive Backblaze
  - Proton Drive cloud migration
  - Backblaze B2 cloud backup
  - RcloneView cloud transfer
  - cloud-to-cloud file migration
  - move files from Proton Drive
  - Backblaze B2 object storage backup
  - Proton Drive export backup
tags:
  - proton-drive
  - backblaze-b2
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 將 Proton Drive 遷移至 Backblaze B2 — 使用 RcloneView 進行安全的雲端傳輸

> 使用 RcloneView 將您的 Proton Drive 檔案移轉至 Backblaze B2 價格實惠的物件儲存服務 — 無需手動下載檔案。

Proton Drive 提供強大的端對端加密與隱私優先的儲存服務,是儲存敏感個人與企業資料的熱門選擇。隨著儲存需求增長 — 或當您需要一個具成本效益的次要備份目的地時 — 將檔案遷移至 Backblaze B2 便成為一個實用的選項。無論是需要封存數 TB RAW 檔案的攝影工作室,或是要整合雲端資產的開發團隊,都能受益於 B2 可擴充的物件儲存服務,同時保留 Proton 以隱私為核心的主要儲存空間。RcloneView 讓這類雲端到雲端的遷移變得簡單直接,能在供應商之間直接串流傳輸資料,無需先將檔案下載至本機。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 連接 Proton Drive 與 Backblaze B2

在開始遷移之前,請先在 RcloneView 中設定好兩個雲端遠端。首先新增您的 Proton Drive 帳號:前往選單列中的 Remote 分頁,點選 New Remote。從供應商清單中選擇 Proton Drive,並輸入您的 Proton 帳號電子郵件與密碼。如果您已啟用雙重驗證,RcloneView 會在設定過程中提示您輸入 2FA 驗證碼。Proton Drive 支援需要 rclone v1.69 或更新版本 — RcloneView 內建的 rclone 會自動處理這項需求。

接著,新增您的 Backblaze B2 遠端。再次點選 New Remote,並選擇 Backblaze B2。您需要準備從 Backblaze B2 主控台 App Keys 頁面產生的 Application Key ID 與 Application Key。您可以將金鑰的權限範圍限定於作為遷移目的地的特定儲存桶,或是若您打算在設定過程中建立新的儲存桶,則授予帳號層級的存取權限。

<img src="/support/images/en/blog/new-remote.png" alt="Adding Proton Drive and Backblaze B2 remotes in RcloneView" class="img-large img-center" />

兩個遠端都設定完成後,在 RcloneView 的雙面板檔案總管中並排瀏覽它們。在其中一側導覽至您的 Proton Drive 資料夾,另一側則導覽至您的 B2 儲存桶,以確認兩邊的連線都正常運作後再開始遷移。

## 設定遷移工作

連接好兩個遠端後,從 Home 分頁開啟 Job Manager,並建立新的同步或複製工作。將您的 Proton Drive 資料夾設為來源,將您的 Backblaze B2 儲存桶設為目的地。為工作取一個具描述性的名稱,例如 `proton-to-b2-archive`,以便與其他傳輸工作區分開來。

在執行完整遷移之前,使用 Dry Run 選項預覽哪些檔案將會被傳輸。此模擬功能會顯示要複製的完整檔案清單,而不會實際移動任何資料 — 這是遷移大型檔案庫時不可或缺的步驟,能及早發現路徑對應的問題。若是大型的 Proton Drive 封存資料,建議在 Advanced Settings 中啟用校驗碼驗證,以確保檔案在兩個供應商之間傳輸時的完整性。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring a cloud-to-cloud transfer job from Proton Drive to Backblaze B2" class="img-large img-center" />

工作精靈第 2 步中的並行傳輸設定可讓您調整效能。以 4 個並行傳輸作為起始值是合理的預設選擇,待確認遷移運作順暢後,您可以再進一步提高此數值。

## 監控與驗證傳輸

啟動遷移工作後,RcloneView 底部面板中的 Transferring 分頁會即時顯示進度:傳輸速度、已完成的檔案數、總大小以及剩餘資料量。對於數十或數百 GB 的大型遷移作業,可將 RcloneView 縮小至系統匣,讓傳輸在背景持續進行,不中斷其他工作的執行。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Real-time transfer monitoring showing Proton Drive to Backblaze B2 migration progress" class="img-large img-center" />

遷移完成後,請檢查 Job History 分頁以確認傳輸狀態、已移動的檔案總數以及任何錯誤訊息。如果工作回報特定檔案有錯誤,日誌檢視畫面會提供確切的錯誤訊息,協助判斷問題是權限問題、網路逾時,還是檔名編碼衝突。

## 排程持續性備份

若使用者希望將 Backblaze B2 作為 Proton Drive 資料的持續性備份目的地,RcloneView PLUS 支援類似 crontab 的排程功能。在初次遷移完成後,編輯該工作並前往第 4 步(Scheduling),即可設定週期性同步 — 例如每晚凌晨 2 點執行一次。排程工作會自動執行,僅複製自上次執行以來新增或變更的檔案,讓您的 B2 封存資料保持最新,無需手動介入。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling automatic Proton Drive to Backblaze B2 sync in RcloneView" class="img-large img-center" />

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 透過 Remote 分頁 > New Remote 新增您的 Proton Drive 遠端,輸入您的電子郵件與密碼。
3. 使用來自 B2 主控台的 Application Key ID 與 Application Key,新增您的 Backblaze B2 遠端。
4. 在 Job Manager 中建立同步或複製工作,以 Proton Drive 為來源、您的 B2 儲存桶為目的地。
5. 執行 Dry Run 預覽遷移內容,接著執行完整傳輸並在 Transferring 分頁中監控進度。

透過 RcloneView 處理 Proton Drive 與 Backblaze B2 之間的連接,您可以打造出一套可靠的跨雲端備份策略,兼顧 Proton 的隱私保護與 B2 具成本效益的儲存容量。

---

**相關指南:**

- [將 Proton Drive 遷移至 Google Drive — 使用 RcloneView 傳輸檔案](https://rcloneview.com/support/blog/migrate-proton-drive-to-google-drive-rcloneview)
- [將 Dropbox 遷移至 Proton Drive — 使用 RcloneView 進行雲端傳輸](https://rcloneview.com/support/blog/migrate-dropbox-to-proton-drive-rcloneview)
- [將 Google Drive 遷移至 Backblaze B2 — 使用 RcloneView 進行雲端傳輸](https://rcloneview.com/support/blog/migrate-google-drive-to-backblaze-b2-rcloneview)

<CloudSupportGrid />
