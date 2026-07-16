---
slug: manage-citrix-sharefile-cloud-sync-backup-rcloneview
title: "管理 Citrix ShareFile 儲存空間 — 使用 RcloneView 同步與備份檔案"
authors:
  - tayson
description: "了解如何使用 RcloneView 連接並管理 Citrix ShareFile 儲存空間。透過單一 GUI 將 ShareFile 資料同步、備份並傳輸至其他雲端。"
keywords:
  - Citrix ShareFile
  - ShareFile 同步
  - ShareFile 備份
  - ShareFile 雲端管理
  - RcloneView ShareFile
  - 企業檔案同步
  - ShareFile 轉移至雲端
  - 雲端儲存管理
  - ShareFile 遷移
  - RcloneView 雲端同步
tags:
  - sharefile
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 管理 Citrix ShareFile 儲存空間 — 使用 RcloneView 同步與備份檔案

> 將 Citrix ShareFile 連接至 RcloneView，並在單一 GUI 中與 90 多種其他雲端儲存服務一同管理您的企業檔案。

Citrix ShareFile 廣泛用於企業與專業服務團隊，以進行安全的檔案共享與文件管理。雖然 ShareFile 提供自有的用戶端，但需要跨多個雲端平台管理檔案的團隊，往往需要一個集中式工具。RcloneView 是建構於 rclone 之上的 GUI 客戶端，讓您可以在同一介面中連接 ShareFile 以及其他服務 — Google Drive、OneDrive、Amazon S3 等。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 將 Citrix ShareFile 連接至 RcloneView

要將 Citrix ShareFile 加入 RcloneView，需要您的 ShareFile 帳號憑證以及 Root Folder ID。Root Folder ID 用於識別 rclone 會以 ShareFile 帳號中的哪個資料夾作為連線的根目錄 — 通常可在 ShareFile 網頁介面的資料夾屬性中找到。

要設定遠端，請開啟 RcloneView 並前往 Remote 分頁，然後點擊 New Remote。從供應商清單中選擇 Citrix ShareFile，並輸入所需的設定，包括您的 Root Folder ID。RcloneView 內建了 rclone 執行檔，因此無需另外安裝 rclone。

<img src="/support/images/en/blog/new-remote.png" alt="Adding a new Citrix ShareFile remote in RcloneView" class="img-large img-center" />

連接完成後，ShareFile 會以遠端的形式顯示在 File Explorer 中。您可以瀏覽資料夾、檢視檔案中繼資料（名稱、大小、修改日期），並執行複製、剪下、貼上、重新命名、刪除等操作 — 全部都不需要離開 RcloneView 介面。

## 將 ShareFile 與其他雲端服務同步

透過 RcloneView 管理 ShareFile 的一項實用優點，就是能夠將其直接與其他雲端儲存同步。舉例來說，律師事務所可以將 ShareFile 客戶資料夾同步至 Amazon S3 進行長期歸檔，或將 ShareFile 內容鏡像至 OneDrive，以整合 Microsoft 365。

要建立同步工作，請點擊 Home 分頁中的 Sync 按鈕，並依照四步驟精靈操作：選擇您的 ShareFile 資料夾作為來源（或目的地）、選擇目標遠端與資料夾、設定傳輸選項，並可選擇加入篩選規則。Dry Run 功能可讓您在正式執行同步前，預覽確切會複製或刪除哪些檔案。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Syncing Citrix ShareFile to another cloud with RcloneView" class="img-large img-center" />

若要進行持續性的資料保護，排程同步功能（PLUS 授權提供）可讓您依 crontab 樣式的排程 — 每日、每週或自訂間隔 — 執行 ShareFile 備份。Job History 會記錄每次執行的開始時間、持續時間、檔案數量與狀態。

## 整理與比較 ShareFile 內容

RcloneView 的 Folder Compare 功能，對於將 ShareFile 內容與備份目的地進行稽核相當有價值。透過 Home 分頁的 Compare 按鈕啟動此功能，選擇 ShareFile 作為一側、目標儲存作為另一側，畫面會標示出僅存在於單一側、大小不同，或完全相同的檔案。

這種「先比較再同步」的工作流程，對於遷移作業相當實用：在同步前先執行比較，可以確切了解將會發生哪些變更。若需更精準的稽核，Folder Compare with Filter（PLUS 授權）可讓您依檔案類型或資料夾名稱限制比較範圍，適用於處理大型 ShareFile 儲存庫的情境。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder comparison between ShareFile and backup storage in RcloneView" class="img-large img-center" />

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 開啟 Remote 分頁並點擊 **New Remote**，然後選擇 Citrix ShareFile。
3. 輸入您的 ShareFile 憑證與 Root Folder ID 以完成設定。
4. 使用 Sync 精靈建立工作，將 ShareFile 備份至您偏好的目標雲端。

透過單一介面管理 ShareFile 與其他雲端服務，可以減少來回切換的成本，並為備份、遷移與檔案整理提供一致的工作流程。

---

**相關指南：**

- [使用 RcloneView 管理 SharePoint 雲端同步與備份](https://rcloneview.com/support/blog/manage-sharepoint-cloud-sync-backup-rcloneview)
- [使用 RcloneView 將 Citrix ShareFile 遷移至 OneDrive 與 SharePoint](https://rcloneview.com/support/blog/migrate-citrix-sharefile-onedrive-sharepoint-rcloneview)
- [使用 RcloneView 進行雲端對雲端遷移](https://rcloneview.com/support/blog/cloud-to-cloud-migration-rcloneview)

<CloudSupportGrid />
