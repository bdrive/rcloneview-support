---
slug: cloud-to-synology-nas-with-rcloneview
title: "雲端到 NAS 橋接：使用 RcloneView 將 Google Drive 與 OneDrive 備份到 Synology"
authors:
  - jay
description: 使用 RcloneView 以點選優先的工作流程，將檔案從雲端硬碟（例如 Google Drive、OneDrive）移動並同步到您的 Synology NAS——拖放傳輸、視覺化比對，以及無需 CLI 的排程同步。
keywords:
  - rcloneview
  - synology nas
  - google drive backup
  - onedrive backup
  - cloud to nas
  - webdav
  - sftp
  - rclone GUI
  - scheduled sync
tags:
  - RcloneView
  - synology
  - google-drive
  - onedrive
  - cloud-file-transfer
  - backup
---



import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 雲端到 NAS 橋接：使用 RcloneView 將 Google Drive 與 OneDrive 備份到 Synology

> 保留一份本地安全副本，掌控您的資料。透過乾淨、點選式的工作流程，將您的**雲端硬碟**鏡像到 **Synology NAS**——無需命令列。

## 雲端到 NAS，聰明的做法——為什麼重要

雲端儲存對於協作與隨處存取相當便利。但在 Synology NAS 上保留**第二份、內部部署的副本**，能為您帶來版本化備份、區域網路速度的還原，以及不依賴單一服務商的獨立性。透過 **RcloneView**，您可以連接常見的雲端服務（例如 **Google Drive**、**OneDrive**，以及其他 rclone 支援的服務）與您的 NAS，然後在同一個畫面上**預覽、複製並排程**工作。

<!-- truncate -->

**認識雲端硬碟（概覽）**  
- 非常適合即時協作與分享。  
- 服務商端的限制/配額可能影響大型遷移（請分批規劃）。  

**認識 Synology NAS（概覽）**  
- 您在家中或辦公室的常駐儲存中心。  
- 可透過 **SMB/NFS**（掛載為本地資料夾）或 **WebDAV**、**SFTP** 等網路協定存取。  
- 非常適合集中備份、媒體託管與長期封存。

**為什麼要將雲端 → NAS？**  
- **韌性**：保留一份您可掌控、支援離線存取的副本。  
- **速度**：透過區域網路還原大型資料夾，無需等待網際網路頻寬。  
- **治理**：在本地統一保留、存取與稽核政策。

<!-- Obsidian note: CTA 컴포넌트 -->
<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />
## 步驟 1 – 準備工作

開始之前：

1. **選擇範圍** — 哪些 Google Drive/OneDrive 資料夾應該保留在 NAS 上？  
2. **確認 NAS 容量** — 確保有足夠的可用空間，並準備好目標共享資料夾。  
3. **選擇您 NAS 的連線方式**  

   - **WebDAV**：啟用 Synology 的 **WebDAV Server**，然後在 RcloneView 中透過 WebDAV 連線。  
   - **SMB**：啟用 Synology 的 **SMB**，然後在 RcloneView 中透過 SMB 連線。  
   - **SFTP**：在 Synology 上啟用 SSH/SFTP，並透過 **SFTP** 連線。  
4. **規劃您的頻率** — 一次性遷移、定期同步，或每晚排程工作。  
5. **留意服務商限制** — 大型移轉可能需要分批進行，建議先進行測試執行。

🔍 實用教學： 

- [使用 RcloneView 整合 Synology NAS](/tutorials/synology-nas-cloud-transfer)

## 步驟 2 – 在 RcloneView 中建立連線

RcloneView 以引導式的點選流程包裝了 rclone 的設定。

1. 開啟 **RcloneView** → 點選 **`+ New Remote`**  
2. 新增您的**雲端硬碟**  
   - **Google Drive**：OAuth 登入 → 命名（例如 `MyGoogleDrive`）  
   - **OneDrive**：OAuth 登入 → 命名（例如 `MyOneDrive`）  
   - （rclone 支援的其他服務也可以用類似方式新增）  
3. 使用以下**其中一種**方式新增您的 **Synology NAS 目標**：  
   - **WebDAV**：來自 Synology WebDAV Server 的端點、憑證 → 命名（例如 `MyNAS-WebDAV`）  
   - **SMB**：NAS 主機 IP、連接埠、帳號 → 命名（例如 `MyNAS-SMB`）  
   - **SFTP**：NAS 主機名稱/IP、連接埠、帳號 → 命名（例如 `MyNAS-SFTP`）  
4. 確認兩者都並排顯示在 Explorer 面板中。

🔍 實用指南：  
- [使用 RcloneView 整合 Synology NAS](/tutorials/synology-nas-cloud-transfer)
- [如何新增 Google Drive 遠端](https://rcloneview.com/support/howto/intro#step-2-adding-remote-storage-google-drive-example)  
- [快速 OAuth 設定（OneDrive/Google）](/howto/remote-storage-connection-settings/add-oath-online-login#quick-setup-guide)


<img src="/support/images/en/tutorials/synology-nas-webdav-and-google-drive.png" alt="synology nas webdav and google drive" class="img-medium img-center" />

## 步驟 3 – 執行備份/同步工作

RcloneView 提供三種實用的方法。先從小規模開始，再逐步擴大。

### A) 拖放（手動複製）
- 在一側開啟 **Google Drive/OneDrive**，另一側開啟您的 **NAS** 目標，然後**跨側拖放資料夾/檔案**。  
- 非常適合有選擇性的移動與快速上手。  

👉 更多資訊：[使用拖放複製檔案](/howto/rcloneview-basic/browse-and-manage-remote-storage#copying-files-using-drag-and-drop)

### B) 比對與複製（預覽變更）
- 執行**比對**以查看雲端與您的 NAS 之間有哪些新增/變更的內容。  
- 只複製有變更的部分——減少意外並節省時間。  

👉 更多資訊：[比對與管理檔案](/howto/rcloneview-basic/compare-folder-contents#compare-results-and-manage-files)

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare results highlighting changed files" class="img-medium img-center" />

### C) 同步與排程工作（自動化）
- 使用**同步**將選定的雲端資料夾鏡像到您的 NAS 共享。  
- 先進行**試跑**，然後儲存為可重複使用的**工作（Job）**並加入排程（每晚/每週）。  

👉 更多資訊：
- [同步遠端儲存](/howto/rcloneview-basic/synchronize-remote-storages)
- [建立同步工作](/howto/rcloneview-basic/create-sync-jobs)
- [工作排程與執行](/howto/rcloneview-advanced/job-scheduling-and-execution)
<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a saved job in RcloneView" class="img-medium img-center" />

## 結論 — 重點整理與額外小技巧

- **為什麼要這麼做**：擁有一份自己掌控的第二份副本、透過區域網路更快速地還原，以及統一的保留政策。  
- **運作方式**：RcloneView 讓您連接雲端硬碟與 Synology NAS，然後透過**拖放**、**比對**或**同步**——並可**排程**以實現免動手的備份。  
- **安全地擴展**：先進行試點、遵守服務商配額，並監控工作日誌以維持乾淨的稽核記錄。

## 常見問題

**Q. RcloneView 可以自動執行週期性備份嗎？**  
**A.** 可以——將您的同步儲存為**工作（Job）**並加以排程（例如每晚）。您可以在工作管理員中看到歷史記錄與狀態。

**Q. iCloud 呢？**  
**A.** Rclone 支援許多服務商。對於沒有直接後端支援的服務，可以考慮先在本地匯出資料，再使用 RcloneView 將其移動到您的 NAS。


**準備好為您的雲端生活保留一份本地、可靠的副本了嗎？**  


<!-- Obsidian note: Download 컴포넌트 -->
<CloudSupportGrid />
