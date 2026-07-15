---
slug: migrate-onedrive-to-google-drive-rcloneview
title: "如何從 OneDrive 遷移到 Google Drive — 使用 RcloneView 的逐步傳輸指南"
authors:
  - tayson
description: "正在從 Microsoft 365 切換到 Google Workspace？瞭解如何使用 RcloneView 在保留資料夾結構的同時，將所有檔案從 OneDrive 遷移到 Google Drive。"
keywords:
  - migrate onedrive to google drive
  - onedrive to google drive transfer
  - switch microsoft 365 to google workspace
  - move files onedrive google drive
  - onedrive google drive migration tool
  - cloud migration tool
  - onedrive to gdrive sync
  - transfer onedrive files
  - microsoft to google migration
  - onedrive migration tool
tags:
  - RcloneView
  - onedrive
  - google-drive
  - migration
  - cloud-storage
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 如何從 OneDrive 遷移到 Google Drive — 使用 RcloneView 的逐步傳輸指南

> 您的組織正在轉移到 Google Workspace。現在您需要在不打亂團隊工作流程的情況下，將數 TB 的 OneDrive 檔案搬移到 Google Drive。以下是正確的做法。

無論您是要切換辦公套件、整合雲端帳號，還是維護並行備份，從 OneDrive 遷移到 Google Drive 都需要謹慎規劃。RcloneView 負責繁重的工作 —— 直接進行雲端對雲端傳輸，保留您的資料夾結構，並自動處理檔案格式差異。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 為什麼不直接下載再重新上傳？

手動方式 —— 從 OneDrive 下載，再上傳到 Google Drive —— 存在嚴重缺點：

- **需要本機磁碟空間**來存放整個資料集。
- **時間加倍** —— 下載加上傳，而非直接傳輸。
- **無法增量更新** —— 傳輸期間發生的任何變更都會遺失。
- **在大型資料集上會失敗** —— 瀏覽器上傳在檔案超過幾 GB 時會失敗。

RcloneView 直接在雲端之間傳輸，只需要頻寬 —— 不需要本機儲存空間。

## 遷移步驟

### 1) 連接兩個帳號

在 RcloneView 中將 OneDrive 和 Google Drive 新增為遠端：

<img src="/support/images/en/blog/new-remote.png" alt="Add OneDrive and Google Drive remotes" class="img-large img-center" />

### 2) 評估與規劃

並排瀏覽兩個雲端：

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Browse OneDrive and Google Drive side by side" class="img-large img-center" />

遷移前，請檢查：

- **總大小** —— 需要搬移多少資料？
- **檔案類型** —— Office 文件會自動轉換（詳見下文）。
- **共用資料夾** —— OneDrive 共用項目需要另外處理。
- **路徑長度** —— Google Drive 的路徑長度限制為 400 個字元。

### 3) 檔案格式處理

傳輸時，Office 文件可以原樣上傳到 Google Drive。Google Drive 支援原生開啟 `.docx`、`.xlsx` 和 `.pptx`。您也可以選擇在遷移後將它們轉換為 Google 原生格式。

| OneDrive 格式 | Google Drive 處理方式 |
|-----------------|---------------------|
| .docx | 原生開啟或轉換為 Google 文件 |
| .xlsx | 原生開啟或轉換為 Google 試算表 |
| .pptx | 原生開啟或轉換為 Google 簡報 |
| 圖片、PDF | 原樣傳輸 |

### 4) 執行遷移

建立一個從 OneDrive 到 Google Drive 的**複製**工作：

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Run OneDrive to Google Drive migration" class="img-large img-center" />

請使用**複製**而非同步 —— 它只會新增檔案，絕不會刪除目的地的檔案。

### 5) 監控進度

即時觀察遷移狀況：

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitor migration progress" class="img-large img-center" />

### 6) 驗證

遷移後比對雙方：

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify migration completeness" class="img-large img-center" />

## 處理特殊情況

### SharePoint 文件庫

SharePoint 文件庫與個人 OneDrive 是分開的。在 RcloneView 中將 SharePoint 新增為獨立的遠端，以遷移團隊網站。

### OneDrive for Business 與個人版

如果是從 OneDrive for Business 遷移，其 OAuth 設定與個人版 OneDrive 不同。RcloneView 會引導您完成兩種驗證流程。

### 大型遷移（500 GB 以上）

對於非常大型的資料集：

- **分批遷移** —— 先從關鍵資料夾開始，再處理次要資料。
- **使用篩選規則** —— 依檔案類型或日期排定優先順序。
- **排定離峰時段** —— 在夜間／週末執行，以避免速率限制。
- **啟用重試** —— v1.3 的重試功能可處理暫時性失敗。

### 過渡期間

在團隊轉換期間讓兩個雲端保持同步：

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule ongoing sync during transition" class="img-large img-center" />

排定每日同步作業，從 OneDrive → Google Drive，直到所有人都完成切換為止。

## 遷移後檢查清單

1. **驗證檔案數量** —— 資料夾比對功能可確認所有檔案已傳輸完成。
2. **測試檔案存取** —— 在 Google Drive 上開啟關鍵文件。
3. **更新共用設定** —— 在 Google Drive 上與團隊成員重新共用資料夾。
4. **更新應用程式整合** —— 將指令碼、工具與工作流程指向 Google Drive。
5. **保留 OneDrive 帳號** —— 保留舊帳號 30 天作為安全網。
6. **停用** —— 確認一切正常運作後，取消 OneDrive 訂閱。

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. **新增 OneDrive 和 Google Drive**作為遠端。
3. **執行複製工作**以傳輸檔案。
4. **使用資料夾比對進行驗證**。
5. 在過渡期間**排定增量同步**。

遷移已經夠讓人焦慮了，不需要再為遺失檔案而擔心。讓 RcloneView 處理傳輸工作，您可以專注於轉換計畫。

---

**相關指南：**

- [建立同步工作](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [比對資料夾內容](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [從 Google Drive 遷移到 OneDrive](https://rcloneview.com/support/blog/migrate-google-drive-to-onedrive-rcloneview)
- [工作排程](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)

<CloudSupportGrid />
