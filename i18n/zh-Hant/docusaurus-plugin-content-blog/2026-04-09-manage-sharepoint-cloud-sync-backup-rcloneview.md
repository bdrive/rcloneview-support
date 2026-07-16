---
slug: manage-sharepoint-cloud-sync-backup-rcloneview
title: "使用 RcloneView 管理 SharePoint 檔案與雲端同步"
authors:
  - tayson
description: "使用 RcloneView 管理 SharePoint Online 檔案。透過視覺化 GUI 在 SharePoint 文件庫與其他雲端服務供應商之間同步、備份及傳輸資料。"
keywords:
  - rcloneview
  - sharepoint sync rcloneview
  - sharepoint backup
  - sharepoint file manager
  - sharepoint cloud sync tool
  - sharepoint to google drive
  - sharepoint rclone gui
  - sharepoint document library backup
  - sharepoint multi-cloud
  - sharepoint automated backup
tags:
  - sharepoint
  - enterprise
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 使用 RcloneView 管理 SharePoint 檔案與雲端同步

> SharePoint Online 是 Microsoft 365 的文件管理核心，但要將其內容同步到外部雲端或 NAS，需要一款專用工具——**RcloneView** 正好能彌補這個缺口。

SharePoint Online 是數百萬使用 Microsoft 365 的組織的文件管理骨幹。每個 SharePoint 網站都包含用於儲存團隊檔案、專案資產與公司紀錄的文件庫。雖然原生的 OneDrive 同步用戶端可以將 SharePoint 文件庫同步到本機，但它並未提供將資料複寫到 AWS S3、Google Drive 或外部儲存空間的機制。RcloneView 透過 Microsoft Graph API 連接到 SharePoint Online，並將文件庫呈現為可瀏覽的遠端——你可以在 SharePoint 與任何其他服務供應商之間瀏覽、同步、複製、移動並排程備份。

無論你是需要將合規敏感的文件庫備份到不可變的 S3 儲存空間，還是要將離職團隊的 SharePoint 網站遷移到 Google Workspace，RcloneView 都能透過視覺化介面完成。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 在 RcloneView 中連接 SharePoint

RcloneView 中的 SharePoint 遠端是透過 OneDrive 遠端類型進行設定的。在 OAuth 授權過程中，選擇 **SharePoint site**，而非 OneDrive Personal 或 Business。RcloneView 會向 Graph API 查詢可用的網站，讓你選擇目標網站與文件庫。

每個文件庫都會顯示為獨立可瀏覽的路徑。如果你的組織有數十個 SharePoint 網站——行銷、工程、法務、人資——你可以將每個網站新增為個別的遠端，或在單一遠端設定中切換不同的文件庫。

SharePoint 的 API 節流機制與 OneDrive for Business 相同——回傳帶有 Retry-After 標頭的 429 回應。RcloneView 會自動遵守這些限制，使用指數退避（exponential backoff）確保大型傳輸能在無需人工介入的情況下完成。

<img src="/support/images/en/blog/new-remote.png" alt="Adding a SharePoint remote in RcloneView Remote Manager" class="img-large img-center" />

## 瀏覽 SharePoint 文件庫

SharePoint 文件庫可以包含巢狀資料夾結構、中繼資料欄位以及版本化檔案。RcloneView 的檔案總管以熟悉的雙窗格版面顯示資料夾樹狀結構與檔案清單。你可以瀏覽深層的資料夾階層、跨多個資料夾選取檔案，並執行批次操作——複製、移動、刪除或下載。

SharePoint 對檔名的限制比許多其他服務供應商更嚴格。`#`、`%`、`*` 等字元是不允許的，路徑長度也限制在 400 個字元以內。當從限制較少的服務供應商（如 Google Drive 或本機檔案系統）同步到 SharePoint 時，RcloneView 會自動編碼或取代受限制的字元，以避免傳輸失敗。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Browsing SharePoint document libraries in RcloneView two-pane explorer" class="img-large img-center" />

## 將 SharePoint 同步到其他雲端服務供應商

組織經常需要將 SharePoint 資料複寫到外部系統——用於災難復原的次要雲端、供本機存取的 NAS，或是在平台遷移期間使用不同的雲端套件。RcloneView 讓這一切變得簡單。

在一個窗格中開啟你的 SharePoint 文件庫，在另一個窗格中開啟目的地（AWS S3、Google Drive、Backblaze B2、本機路徑）。RcloneView 會依據檔案大小與修改時間比對檔案清單，僅傳輸有變更的檔案。對於包含數千個檔案的初次遷移，多執行緒傳輸與可設定的區塊大小能讓流程維持高效率。

SharePoint 使用 QuickXorHash 儲存檔案雜湊值，這與 OneDrive for Business 使用的演算法相同。RcloneView 原生支援 QuickXorHash，無需下載檔案內容進行比對即可準確偵測差異。

## 排程自動化 SharePoint 備份

SharePoint 內建的保留原則與資源回收桶提供了一定程度的保護，但這些機制都在 Microsoft 的生態系統內運作。若勒索軟體攻擊入侵了你的 Microsoft 365 租戶，可能會連同其他一切一併影響到 SharePoint 資料。獨立備份到另一個服務供應商是最強而有力的保護方式。

RcloneView 的排程器能自動完成這項工作。設定一個從 SharePoint 文件庫每晚同步到啟用版本控制的 AWS S3 的工作，其餘的交給 RcloneView 處理即可。工作歷程面板會記錄每次執行的傳輸統計資料，讓你輕鬆確認備份是否成功完成。

對於受合規要求驅動的組織，將排程的 SharePoint 備份與 S3 Object Lock 或 Backblaze B2 的檔案鎖定功能搭配使用，可建立符合資料保留法規要求的不可變封存。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling automated SharePoint backup in RcloneView" class="img-large img-center" />

## 比對資料夾並驗證遷移結果

在同步或遷移 SharePoint 文件庫之後，使用 RcloneView 的比對功能來驗證完整性。選取 SharePoint 來源與備份目的地，RcloneView 會標示僅存在於一側的檔案、內容不同的檔案，以及完全相同的檔案。這種視覺化驗證消除了猜測，並確保在淘汰原始資料之前資料的完整性。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Comparing SharePoint library with backup destination in RcloneView" class="img-large img-center" />

## 將 SharePoint 掛載為本機磁碟

RcloneView 可以將 SharePoint 文件庫掛載為本機磁碟機代號（Windows）或掛載點（macOS/Linux）。這讓你能從任何桌面應用程式——CAD 軟體、影像編輯器或分析工具——存取 SharePoint 檔案，而不需要 OneDrive 同步用戶端的額外負擔。

啟用 VFS 快取以在本機儲存近期存取的檔案，實現快速的重複存取。對於需要在不原生支援雲端儲存的應用程式中處理 SharePoint 託管檔案的團隊而言，這特別有用。

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="Mounting SharePoint as a local drive in RcloneView" class="img-large img-center" />

## 監控傳輸狀態

大型 SharePoint 遷移可能涉及數十萬個檔案。RcloneView 的即時監控儀表板會顯示傳輸速度、逐檔進度以及整體完成度。你可以個別暫停、繼續或取消傳輸。頻寬限制能防止 SharePoint 傳輸在上班時間佔用你的整個網路連線。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Real-time SharePoint transfer monitoring in RcloneView" class="img-large img-center" />

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 透過 OAuth 授權你的 Microsoft 365 帳號，並選擇 SharePoint 網站與文件庫。
3. 在雙窗格檔案總管中瀏覽你的 SharePoint 文件庫，並設定同步或複製工作到另一個服務供應商。
4. 排程每日備份，以在 S3、B2 或其他雲端維持獨立的副本。

SharePoint 負責 Microsoft 365 內的文件管理，而 RcloneView 則確保你的 SharePoint 資料在你所使用的每個雲端都能被備份、可攜且可存取。

---

**相關指南：**

- [透過瀏覽器登入(OAuth)新增遠端](https://rcloneview.com/support/howto/remote-storage-connection-settings/add-oath-online-login)
- [瀏覽與管理遠端儲存空間](https://rcloneview.com/support/howto/rcloneview-basic/browse-and-manage-remote-storage)
- [建立同步工作](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [工作排程](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)

<CloudSupportGrid />
