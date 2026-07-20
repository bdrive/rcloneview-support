---
slug: migrate-box-to-sharepoint-onedrive-rcloneview
title: "如何從 Box 遷移至 SharePoint 或 OneDrive — 使用 RcloneView 進行企業雲端遷移"
authors:
  - tayson
description: "正準備從 Box 轉移到 Microsoft 365 嗎？了解如何使用 RcloneView 將檔案從 Box 遷移至 SharePoint Online 或 OneDrive for Business，同時保留資料夾結構。"
keywords:
  - migrate box to sharepoint
  - box to onedrive migration
  - box to microsoft 365 transfer
  - box sharepoint migration tool
  - move files from box
  - box migration tool
  - enterprise cloud migration
  - box to office 365
  - box data migration
  - box alternative migration
tags:
  - RcloneView
  - box
  - sharepoint
  - onedrive
  - migration
  - enterprise
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 如何從 Box 遷移至 SharePoint 或 OneDrive — 使用 RcloneView 進行企業雲端遷移

> 貴公司已決定整合至 Microsoft 365。第一步：將所有檔案從 Box 遷移到 SharePoint 和 OneDrive。第二步：在過程中不遺失任何資料。

Box 一直是企業檔案共享的主力，但許多組織正在將其雲端生態系整合至 Microsoft 365。從 Box 遷移到 SharePoint Online 或 OneDrive for Business 是一項重大專案——尤其是當你要處理多年累積的資料、複雜的資料夾結構以及共享工作區時。RcloneView 讓這件事變得可管理。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 遷移規劃

### 評估你的 Box 環境

在遷移之前，先盤點你擁有的內容：

- **個人資料夾** → 遷移至個別的 OneDrive 帳號。
- **共享資料夾／工作區** → 遷移至 SharePoint 文件庫。
- **封存資料** → 考慮改用較便宜的儲存空間（S3、B2），而非 SharePoint。
- **總資料量** — 決定時程與遷移方式。

### 目標對應

| Box 來源 | Microsoft 365 目標 |
|-----------|--------------------------|
| My Files | OneDrive for Business |
| Shared Folders | SharePoint 團隊網站 |
| Department Folders | SharePoint 文件庫 |
| Archive/Cold Data | OneDrive 或 Azure Blob Storage |

## 逐步遷移

### 1) 新增 Box 與 Microsoft 遠端

在 RcloneView 中連接兩個服務：

<img src="/support/images/en/blog/new-remote.png" alt="Add Box and SharePoint remotes" class="img-large img-center" />

對於 SharePoint，將其新增為 OneDrive Business 遠端，並指定 SharePoint 網站 URL。

### 2) 瀏覽並比對

在左側開啟 Box，右側開啟 SharePoint／OneDrive：

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Browse Box and SharePoint side by side" class="img-large img-center" />

### 3) 分階段傳輸

不要試圖一次遷移所有內容。請依優先順序進行：

**第一階段：進行中的專案** — 使用者每天需要用到的檔案。
**第二階段：共享工作區** — 團隊資料夾與協作空間。
**第三階段：封存資料** — 舊專案與歷史資料。

### 4) 執行 Copy 工作

為每個階段建立 Copy 工作：

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Run Box to SharePoint migration job" class="img-large img-center" />

### 5) 驗證每個階段

每個階段完成後，比對來源與目標：

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify Box to SharePoint migration" class="img-large img-center" />

## 處理限制

### 檔案名稱限制

SharePoint／OneDrive 的命名規則比 Box 更嚴格：

- 不允許的字元：`" * : < > ? / \ |`
- 檔案名稱開頭或結尾不能有空格。
- 路徑長度上限：400 個字元。

Rclone 會在傳輸過程中自動處理許多此類轉換。

### Box Notes

Box Notes 是專屬格式，在 Microsoft 365 中沒有直接對應的功能。需要將其匯出為 PDF，或手動複製到 OneNote／Word 中。

### 權限與共享

RcloneView 會傳輸檔案，但不會傳輸共享權限。遷移完成後，你需要在 SharePoint／OneDrive 上重新設定共享。請將此規劃為獨立的一個步驟。

### 速率限制

Box 和 SharePoint 都有 API 速率限制：

- **Box**：依方案而異（通常為每秒 10–20 次請求）。
- **SharePoint**：Microsoft 會依使用模式進行節流。

RcloneView 會遵守這些限制。對於大型遷移，請將傳輸排程在離峰時段，並使用重試功能（v1.3）。

## 過渡期間保持 Box 與 SharePoint 同步

並非所有人都會在同一天切換。排程同步作業，讓兩個平台保持最新狀態：

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule sync during Box to SharePoint transition" class="img-large img-center" />

這讓你的團隊有時間逐步過渡，而不會產生資料落差。

## 監控大型傳輸

企業級遷移涉及數 TB 的資料。監控進度：

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitor Box to SharePoint migration" class="img-large img-center" />

## 使用批次工作自動化遷移流程

使用 v1.3 批次工作（Batch Jobs）將整個遷移流程自動化：

1. 將 Box 複製到 SharePoint（進行中的專案）。
2. 將 Box 複製到 OneDrive（個人檔案）。
3. 比對 Box 與 SharePoint 以進行驗證。
4. 完成後傳送 Slack 通知。

## 遷移後作業

1. **驗證所有檔案** — 執行最終的資料夾比對。
2. **設定 SharePoint 權限** — 重新建立共享結構。
3. **訓練你的團隊** — 協助使用者在新位置找到他們的檔案。
4. **監控 30 天** — 保留 Box 作為備援方案。
5. **停用 Box** — 確認一切穩定後再取消訂閱。

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. **新增 Box 與 SharePoint／OneDrive** 作為遠端。
3. **規劃你的遷移階段**。
4. 為每個階段**執行 Copy 工作**。
5. 每個階段完成後，**使用資料夾比對進行驗證**。
6. 在過渡期間**排程同步作業**。

企業遷移不必意味著企業級的複雜性。

---

**相關指南：**

- [建立同步工作](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [比對資料夾內容](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [工作排程](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)
- [設定雲端傳輸頻寬限制](https://rcloneview.com/support/blog/set-bandwidth-limits-cloud-transfers-rcloneview)

<CloudSupportGrid />
