---
slug: mount-azure-blob-storage-local-drive-rcloneview
title: "透過 RcloneView 在 Windows 與 macOS 上將 Azure Blob Storage 掛載為本機磁碟"
authors:
  - tayson
description: 使用 RcloneView 的 GUI、VFS 快取與排程器，將 Azure Blob 容器轉換為真正的磁碟機代號或 /Volumes 掛載點——無需 CLI 腳本。
keywords:
  - rcloneview
  - azure blob storage mount
  - map azure drive letter
  - mount azure blob mac
  - rclone mount gui
  - azure storage explorer alternative
  - blob to local drive
  - winfsp
  - macfuse
tags:
  - RcloneView
  - azure
  - mount
  - windows
  - macos
unlisted: true
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 透過 RcloneView 在 Windows 與 macOS 上將 Azure Blob Storage 掛載為本機磁碟

> 以兩次點擊取代腳本與 Storage Explorer：RcloneView 讓 Azure Blob 容器變成真正的本機磁碟，具備快取、緩衝，並可在 Windows、macOS 與 Linux 上自動重新掛載。

Azure Blob 非常適合用來卸載媒體、備份與靜態資源——但要將它掛載為快速可靠的磁碟卻不容易。`rclone mount` 的參數、WinFsp/macFUSE 安裝、共用存取簽章（SAS）以及重新連線腳本很快就會變得複雜。

RcloneView 將這一切包裝進 GUI 中：只需新增一次 Azure 遠端、選擇磁碟機代號或 `/Volumes` 路徑、為縮圖與媒體瀏覽開啟 VFS 快取，並讓排程器在登入時重新掛載。完全不需要 CLI。

<!-- truncate -->

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />


## 為什麼選擇 RcloneView 掛載 Azure Blob，而不是使用腳本

- **零 CLI**：遠端管理員會建立你的 Azure 遠端並安全地儲存憑證（參閱 [遠端管理員](/howto/rcloneview-basic/remote-manager)）。
- **跨平台一致性**：Windows（WinFsp）、macOS（macFUSE）、Linux（FUSE）使用相同的介面。
- **真正的磁碟對應**：任何容器都可對應為 Windows 的磁碟機代號或 macOS 的 `/Volumes/Azure`。
- **內建效能優化**：VFS 快取、縮圖串流、預讀與緩衝都呈現在掛載對話框中（參閱 [將雲端儲存掛載為本機磁碟](/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive)）。
- **自動化與監控**：開機自動掛載、失敗時自動重新連線，並提供即時傳輸量圖表（參閱 [工作排程與執行](/howto/rcloneview-advanced/job-scheduling-and-execution) 與 [即時傳輸監控](/howto/rcloneview-basic/real-time-transfer-monitoring)）。

## 逐步操作——將 Azure Blob 對應為本機磁碟

### 1) 準備 Azure 憑證

- 建立一個儲存體帳戶與一個 Blob 容器。
- 產生 **存取金鑰（Access Key）** 或 **SAS 權杖**（正式環境建議採用最小權限原則）。
- 記下你要掛載的 **帳戶名稱** 與 **容器**。

### 2) 新增 Azure 遠端

- 開啟 **遠端管理員** → **新增遠端** → 選擇 **S3 相容**（可搭配 Azure Blob 的 S3 閘道使用）或 **WebDAV**（若使用該端點）。
- 若選擇 **S3 相容**：
  - **提供者**：Custom / S3-compatible
  - **端點**：`https://<account>.blob.core.windows.net`
  - **地區**：留空或填入 `us-east-1` 佔位值
  - **存取金鑰／密鑰**：你的 Azure 金鑰或由 SAS 衍生的金鑰組
- 儲存遠端。請在 [一般設定](/howto/rcloneview-basic/general-settings) 中使用強度足夠的 **設定密碼**。

### 3) 建立掛載工作

- 在 **掛載管理員**（或檔案總管工具列）中，按一下 **掛載**。
- 選擇你的 Azure 遠端並指定容器路徑（例如 `azure:media-assets`）。
- 選擇掛載目標：
  - Windows → `Z:`（或任何可用的磁碟機代號）
  - macOS → `/Volumes/AzureMedia`
  - Linux → `/mnt/azure-media`
- - 開啟 **開機時自動掛載**，讓 RcloneView 在重新開機後自動重新連線。
   
<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="mount from remote explorer" class="img-large img-center" />


### 4) 調整 VFS 快取與緩衝

- **快取模式**：縮圖、預覽與媒體瀏覽建議使用 `Full`。
- **快取目錄**：指向一個 SSD 資料夾。
- **預讀**：瀏覽相片／影片時建議 4–8 MB；4K 以上工作負載可再提高。
- **回寫／緩衝**：大型循序上傳建議開啟；若與他人共用上行頻寬則需設定頻寬上限。

## 使用情境

- **設計與媒體團隊**：將大型資源庫保留在 Blob 中，並透過快取讀取在本機進行編輯。
- **開發／測試環境**：掛載建置成果或靜態網站以加快迭代速度。
- **資料收集**：將 IoT 或日誌匯出檔案直接放入 Blob，無需透過瀏覽器上傳。
- **混合雲工作流程**：在單一儀表板中於 Azure、S3、Google Drive 與 NAS 之間拖放檔案。
- **備份暫存**：將 Blob 掛載為低成本的溫儲存，於封存至 Glacier/R2 之前使用。

## 效能建議

- 大型媒體／相片資源庫請將 **快取模式設為 Full**。
- 使用 **NVMe/SSD 快取目錄**，並保留數 GB 的可用空間。
- 循序讀寫請提高 **預讀** 與 **緩衝大小**；隨機小檔案則應調低。
- 對於分散式團隊，可搭配 **排程器** 每日重新整理或預熱快取。
- 於 [即時傳輸監控](/howto/rcloneview-basic/real-time-transfer-monitoring) 觀察傳輸量，以便及早發現節流情形。



## 疑難排解

- **403 或驗證錯誤**：重新產生 SAS/金鑰，並確認端點為 `https://<account>.blob.core.windows.net`。
- **列表速度緩慢**：提高 VFS 快取大小與預讀值；確認快取路徑位於 SSD 上。
- **睡眠後掛載消失**：開啟自動掛載，並搭配排程器的「重新啟動失敗工作」選項。
- **macOS 權限問題**：核准 macFUSE 的提示，然後透過掛載管理員重新掛載。

## 結論——讓 Azure Blob 成為一等公民磁碟

有了 RcloneView，Azure Blob 就像原生磁碟一樣好用：對應的磁碟機代號或 `/Volumes`、智慧快取，以及自動化——完全不需要 CLI 腳本。只需新增一次容器、依工作負載調整 VFS，即可在單一控制面板中管理你的自架與多雲儲存。

<CloudSupportGrid />
