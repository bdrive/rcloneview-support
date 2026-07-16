---
slug: manage-azure-files-cloud-sync-rcloneview
title: "使用 RcloneView 管理 Azure Files：同步、備份與掛載 SMB 雲端共用"
authors:
  - tayson
description: 了解如何使用 RcloneView 管理 Azure Files 共用資料夾——新增遠端、瀏覽 SMB 共用、與其他雲端同步、掛載為本機磁碟機，以及排程備份。
keywords:
  - rcloneview
  - azure files
  - azure file shares
  - smb cloud storage
  - cloud sync
  - mount azure files
  - azure backup
  - rclone GUI
  - multi-cloud management
  - azure file management
tags:
  - RcloneView
  - azure-files
  - azure
  - cloud-storage
  - cloud-sync
  - guide
  - mount
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 使用 RcloneView 管理 Azure Files：同步、備份與掛載 SMB 雲端共用

> Azure Files 提供完全託管的雲端 SMB 檔案共用。**RcloneView** 讓你能瀏覽、同步、備份及掛載這些共用——全部透過視覺化介面完成，完全不需要指令列操作。

Azure Files 是微軟提供的託管檔案共用服務，可直接從 Azure 存取 SMB 與 NFS。它深受企業歡迎，常用於混合式工作負載、直接搬遷（lift-and-shift）應用程式，以及虛擬機器的共用儲存空間。然而，在 Azure 入口網站之外管理 Azure Files 可能相當繁瑣——尤其是當你需要在 Azure 與其他雲端之間搬移資料，或維持本機副本同步時。

RcloneView 透過將 rclone 的 Azure Files 後端包裝在簡潔的雙窗格 GUI 中解決了這個問題。你可以將 Azure 檔案共用新增為遠端、以視覺化方式瀏覽、在雲端之間拖放檔案、比較資料夾內容、排程自動備份，甚至將共用掛載為本機磁碟機代號。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 為何在 Azure Files 上使用 RcloneView

Azure Files 在 Azure 生態系統內運作良好，但現實中的工作流程往往橫跨多個供應商。你可能需要：

- **將 Azure 檔案共用備份**到獨立的雲端，例如 Amazon S3、Backblaze B2 或 Wasabi，以進行災難復原。
- **將 Azure Files 與 Google Drive 或 OneDrive 同步**，讓團隊成員能用熟悉的工具存取相同資料。
- **在本機掛載 Azure 共用**，供需要本機檔案路徑而非 SMB 連線字串的應用程式使用。
- **搬移資料**，從 Azure Files 移至其他供應商，或反向操作。

RcloneView 無需撰寫指令碼、PowerShell 或使用 AzCopy 即可完成上述所有工作。

## 將 Azure Files 新增為遠端

在 RcloneView 中設定 Azure Files 不到一分鐘即可完成：

1. 開啟 RcloneView，點選 **+ New Remote**。
2. 從清單中選擇 **Azure Files** 儲存類型。
3. 輸入你的 **Azure 儲存體帳戶名稱** 與 **帳戶金鑰**（或 SAS 權杖）。
4. 為遠端命名（例如 `AzureFileShares`）並儲存。

你的 Azure 檔案共用現在會出現在 Explorer 窗格中，可供瀏覽。

<img src="/support/images/en/blog/new-remote.png" alt="Adding an Azure Files remote in RcloneView" class="img-large img-center" />

## 瀏覽與管理檔案共用

連線完成後，RcloneView 會以熟悉的雙窗格版面顯示你的 Azure 檔案共用。你可以：

- **在任何共用內瀏覽目錄**——像本機檔案管理員一樣深入巢狀資料夾。
- **預覽檔案中繼資料**，如大小、修改日期與路徑。
- **直接從 GUI 重新命名、刪除或建立**資料夾。
- **在另一窗格開啟第二個雲端**，以並排方式進行管理。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Two-pane explorer showing Azure Files alongside another cloud" class="img-large img-center" />

## 將 Azure Files 與其他雲端同步

當你將 Azure Files 連接到另一個雲端時，RcloneView 的真正威力才顯現出來。在一側載入 Azure Files，在另一側載入目的地——Google Drive、OneDrive、Amazon S3，或任何支援的遠端。

### 拖放

在 Azure Files 中選取檔案或資料夾，並拖曳至目的地窗格。RcloneView 會在背景處理傳輸，並顯示即時進度。

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="Drag and drop files from Azure Files to another cloud" class="img-large img-center" />

### 比較與選擇性複製

使用 **Compare** 功能查看哪些檔案在兩側是新增、已變更或缺少的。接著只複製差異部分——非常適合在不傳輸全部資料的情況下進行增量更新。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare folders between Azure Files and a destination cloud" class="img-large img-center" />

### 完整同步

執行 **Sync** 操作，讓目的地成為你 Azure 檔案共用的精確鏡像。務必先使用 **Dry Run** 預覽將會變更的內容，再正式執行。

## 將 Azure Files 掛載為本機磁碟機

RcloneView 可以將任何 Azure 檔案共用掛載為 Windows、macOS 或 Linux 上的本機磁碟機代號。這在以下情況特別有用：

- 桌面應用程式需要本機路徑來讀寫檔案。
- 你想在不使用 SMB 用戶端的情況下，透過檔案總管或 Finder 存取 Azure Files。
- 你需要為一次性任務快速建立臨時掛載。

在 Explorer 中開啟遠端，右鍵點選共用資料夾，選擇 **Mount**。選擇你的磁碟機代號或掛載點，該共用即會以本機磁碟區的形式出現。

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="Mount Azure Files as a local drive from RcloneView Explorer" class="img-large img-center" />

## 排程自動備份

若要進行持續保護，可在 RcloneView 中建立 **Scheduled Job**：

1. 設定一個從 Azure Files 到備份目的地的 Sync 或 Copy 工作。
2. 開啟 **Job Scheduling** 面板，定義排程——每日、每週，或自訂 cron 運算式。
3. 啟用排程，讓 RcloneView 處理其餘的一切。

每次執行都會記錄在 **Job History** 面板中，方便你稽核傳輸內容並抓出任何錯誤。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule an automated backup job for Azure Files" class="img-large img-center" />

## 使用 Azure Files 的小技巧

- **使用範圍受限的 SAS 權杖**，若你想讓 RcloneView 存取而不暴露完整的帳戶金鑰。
- **監控傳輸大小**——Azure Files 會針對儲存與交易收費，頻繁同步大量差異資料可能累積出可觀費用。
- **排除暫存檔案**，利用 RcloneView 的篩選規則，避免同步鎖定檔、記錄檔或快取目錄。
- **定期測試還原**，從你的備份目的地複製幾個檔案回來，以驗證完整性。

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 使用你的儲存體帳戶憑證**新增 Azure Files 遠端**。
3. **瀏覽、同步、掛載或排程**——全部透過 GUI 完成，無需指令列。

管理 Azure Files 不必再意味著在入口網站分頁與 PowerShell 指令碼之間來回切換。RcloneView 將一切整合到單一視窗中。

---

**相關指南：**

- [使用 RcloneView 進行雲端對雲端傳輸與同步](https://rcloneview.com/support/blog/cloud-to-cloud-transfer-sync-rcloneview)
- [使用 RcloneView 將 Dropbox 遷移至 Azure Blob Storage](https://rcloneview.com/support/blog/migrate-dropbox-to-azure-blob-storage-rcloneview)
- [使用 RcloneView 管理 Google Cloud Storage Buckets](https://rcloneview.com/support/blog/manage-google-cloud-storage-buckets-rcloneview)

<CloudSupportGrid />
