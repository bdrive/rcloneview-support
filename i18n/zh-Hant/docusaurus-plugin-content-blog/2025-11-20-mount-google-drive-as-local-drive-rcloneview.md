---
slug: mount-google-drive-local-drive-rcloneview
title: "在 Windows 與 macOS 上使用 RcloneView 將 Google Drive 掛載為本機磁碟機"
authors:
  - tayson
description: 透過 RcloneView 以引導式掛載、快取與自動化取代複雜的 CLI 步驟，將每月 4 萬多次搜尋「掛載 Google Drive」的需求，轉化為在 Windows 與 macOS 上點選即可完成的體驗。
keywords:
  - mount google drive windows
  - mount google drive mac
  - google drive local drive
  - rcloneview
  - rclone mount gui
  - google drive file stream alternative
  - map google drive letter
  - mount google drive finder
  - scheduler auto mount
  - multi cloud explorer
tags:
  - RcloneView
  - google-drive
  - mount
  - windows
  - macos
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 在 Windows 與 macOS 上使用 RcloneView 將 Google Drive 掛載為本機磁碟機

> 每月有超過 4 萬人搜尋「掛載 Google Drive」。RcloneView 將這個原本需要大量 CLI 操作的答案,轉變為具備快取、自動啟動與 GUI 監控功能的兩次點擊流程。

`rclone mount` 功能強大卻令人望而卻步:OAuth 權杖、設定密碼、WinFsp/macFUSE 安裝、冗長的參數字串,以及重開機後需要重新啟動的腳本。RcloneView 將這些環節整合進一套桌面應用程式,讓你能將 Google Drive(以及任何其他雲端)掛載為 Windows 上的真實磁碟機代號,或是 macOS 上的 Finder 磁碟區,完全不需要終端機。

<!-- truncate -->


<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />


## 為什麼選擇 RcloneView,而不是自行以 CLI 掛載

- **引導式 OAuth**:遠端管理員(Remote Manager)會開啟安全的瀏覽器,並儲存更新權杖(參見[遠端管理員](/howto/rcloneview-basic/remote-manager))。
- **驅動程式輔助**:WinFsp 與 macFUSE 的安裝提示已內建於安裝程式中,RcloneView 會在你按下「掛載」前先驗證它們。
- **可重複使用的範本**:掛載管理員(Mount Manager)會記住每一個 Google Drive、共用雲端硬碟或其他遠端,讓你只需切換開關,即可在重開機後重新掛載。
- **多雲端統一控管**:在掛載 Google Drive 的同時,你也能同步至 Dropbox、比對 S3 儲存桶內容,或在同一介面中排程工作。
- **監控與排程器**:內建的排程器與傳輸監控器會顯示傳輸速率,並可依你的選擇自動重新啟動掛載。

## 步驟 1 -- 準備你的桌面環境

1. **安裝 RcloneView**(安裝包已內含 rclone)。在 Windows 上,請接受 WinFsp 的安裝提示;在 macOS 上,請安裝 macFUSE。
2. **命名你要顯示 Google Drive 的外部磁碟機代號或 Finder 磁碟區**(例如 `G:` 或 `/Volumes/GDrive`)。
3. **決定快取空間**:選擇至少有幾 GB 可用空間的 SSD 資料夾;稍後你會將掛載指向此處,以加快預覽速度。

  <img src="/support/images/en/blog/new-remote.png" alt="Open multiple cloud remotes in RcloneView" class="img-large img-center" />
  

## 步驟 2 -- 連接 Google Drive(及其他雲端服務)

- 開啟遠端管理員,點選**新增遠端** -> **Google Drive**,依照[新增 OAuth 線上登入](/howto/remote-storage-connection-settings/add-oath-online-login#quick-setup-guide)中的說明完成 OAuth 授權流程。
- 將此遠端命名為 `gdrive-main`(你也可以選擇性地新增共用雲端硬碟,或是 Dropbox、OneDrive、S3 等其他雲端服務,以便日後比對/同步)。
- 使用[瀏覽與管理遠端儲存空間](/howto/rcloneview-basic/browse-and-manage-remote-storage)建立你經常需要掛載的資料夾預設集(例如設計、財務、共用雲端硬碟等)。

  <img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="cloud to cloud transfer default" class="img-large img-center" />
  


## 步驟 3 -- 從檔案總管或掛載管理員掛載 Google Drive

1. 開啟雙窗格檔案總管,選取你的 Google Drive 遠端,然後點選工具列中的**掛載圖示**。
2. 選擇**磁碟機代號/磁碟區**,選取你的快取路徑,並切換讀寫模式、快取模式與頻寬上限。
3. 點選**掛載**,然後開啟檔案總管或 Finder 查看新出現的磁碟機。

  <img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="Mount Google Drive from RcloneView Explorer" class="img-large img-center" />

掛載管理員(工具 -> 掛載管理員)會保留一份掛載清單,並提供自動啟動、自動重新連線與開機時啟動等開關。你甚至可以同時公開多個 Google 帳戶,這在傳統做法中通常需要開啟多個命令列視窗才能完成。


## 步驟 4 -- 讓工作流程自動化,不只是掛載

掛載只是第一步。RcloneView 在此基礎上疊加了多雲端工作流程:

- 在掛載保持連線的狀態下,使用[比對資料夾內容](/howto/rcloneview-basic/compare-folder-contents)**比對並清理** Google Drive 與本機 SSD 或 Dropbox 的內容。

  <img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare shared folder and My Drive contents" class="img-large img-center" />
  

- 使用[建立同步工作](/howto/rcloneview-basic/create-sync-jobs)與[同步遠端儲存空間](/howto/rcloneview-basic/synchronize-remote-storages)將整個資料夾**同步或複製**至外接磁碟機,以進行離線備份。

  <img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running an encrypted sync job in RcloneView" class="img-large img-center" />
  

- **排程**這些工作,讓每晚你已掛載的 Google Drive 自動將同步工作加入佇列,傳送至 NAS 或 Wasabi,完全不需手動點選(參見[工作排程與執行](/howto/rcloneview-advanced/job-scheduling-and-execution))。

  <img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="create job schedule" class="img-large img-center" />
  

- 同時**掛載其他雲端服務**(OneDrive、Dropbox、S3),並像操作本機磁碟一樣,在 Finder 視窗之間拖曳檔案。

## RcloneView 解鎖的使用情境

- **設計師與媒體團隊**:可直接將素材串流至 Adobe 或 DaVinci Resolve,而無需將整個資料庫儲存於本機。
- **開發者與 DevOps**:掛載共用雲端硬碟以取得設定檔,再透過腳本將比對或同步工作部署至測試/正式環境儲存桶。
- **稽核與合規**:為審查人員以唯讀模式掛載 Google Drive,同時排程器會持續將不可變副本存放至 S3 或外接磁碟機。
- **進階使用者**:以更輕量、可自訂快取路徑、頻寬上限與日誌記錄的掛載方式,取代 Drive for Desktop。

## 疑難排解與常見問題

**我還需要使用 CLI 嗎?**  
不需要。RcloneView 會在背後自動產生所有 `rclone mount` 參數。進階使用者仍可開啟工作詳細資訊,查看確切的指令內容。

**macOS 的權限設定要注意什麼?**  
請核准 macFUSE 的系統延伸功能提示,若 Finder 無法看到該磁碟區,再回到掛載管理員檢查。操作說明文件中附有授予權限的截圖步驟。

**我可以掛載多個 Google 帳戶嗎?**  
可以。只需在遠端管理員中為每個帳戶新增一個遠端,再分別建立掛載項目即可。RcloneView 會將各帳戶的權杖分開保存,因此你可以同時檢視 `gdrive-marketing` 與 `gdrive-personal`。

掛載 Google Drive 至今仍是 Google 搜尋的熱門關鍵字,原因就在於 CLI 的操作方式過於複雜。RcloneView 為這超過 4 萬名的搜尋者提供了一條免程式碼的路徑:只需連接一次你的 Google 帳戶、點選掛載,即可獲得穩定可靠的磁碟機代號或 Finder 磁碟區,並享有你原本就依賴的多雲端強大功能(比對、同步、排程器)。立即下載最新版本,告別你的掛載腳本吧。

<CloudSupportGrid />
