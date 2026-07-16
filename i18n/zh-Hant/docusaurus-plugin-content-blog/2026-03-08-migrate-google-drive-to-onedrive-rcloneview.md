---
slug: migrate-google-drive-to-onedrive-rcloneview
title: "如何將 Google Drive 遷移到 OneDrive — 使用 RcloneView 的完整傳輸指南"
authors:
  - tayson
description: "正從 Google Workspace 轉換到 Microsoft 365？了解如何使用 RcloneView 將所有 Google Drive 檔案遷移到 OneDrive，同時不遺失資料夾結構。"
keywords:
  - migrate google drive to onedrive
  - google drive to onedrive transfer
  - switch google workspace to microsoft 365
  - move files google drive onedrive
  - google to microsoft migration
  - cloud to cloud migration tool
  - google drive onedrive sync
  - transfer google drive files
  - google workspace to office 365
  - cloud migration without data loss
tags:
  - google-drive
  - onedrive
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 如何將 Google Drive 遷移到 OneDrive — 使用 RcloneView 的完整傳輸指南

> 正從 Google Workspace 轉換到 Microsoft 365？最大的麻煩不是新的應用程式，而是要在不遺失資料夾結構、共用設定，也不失去理智的情況下，將數 TB 的檔案從 Google Drive 搬到 OneDrive。

無論您的組織是要轉換生產力套件，還是只是想在 OneDrive 上保留一份 Google Drive 的副本，遷移過程都可能相當痛苦。Google Takeout 匯出的是 ZIP 檔案，會遺失資料夾結構。手動拖放又極其耗時。RcloneView 能妥善處理這件事——直接進行雲端對雲端傳輸，並保留您的資料夾結構。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 為什麼不使用 Google Takeout？

Google Takeout 是 Google 官方的匯出工具，但用於遷移時有明顯的限制：

- **以 ZIP 匯出** — 您得到的是一個壓縮封存檔，而非即時的資料夾結構。
- **遺失組織架構** — 共用雲端硬碟與資料夾階層可能會被攤平。
- **無增量更新** — 若匯出過程中檔案發生變動，就得從頭來過。
- **需手動重新上傳** — 您仍然需要把所有內容上傳到 OneDrive。

RcloneView 會直接將檔案從 Google Drive 傳輸到 OneDrive，並保留原始的資料夾結構。

## 逐步遷移

### 1) 連接兩個帳戶

在 RcloneView 中將 Google Drive 與 OneDrive 都新增為遠端：

<img src="/support/images/en/blog/new-remote.png" alt="Add Google Drive and OneDrive remotes" class="img-large img-center" />

### 2) 瀏覽並規劃

在雙窗格瀏覽器中同時開啟兩個遠端。左側為 Google Drive，右側為 OneDrive：

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Browse Google Drive and OneDrive side by side" class="img-large img-center" />

在遷移前先檢視您的 Google Drive 結構，確認：

- 哪些資料夾需要遷移（也許不是全部）。
- 總容量大小（會影響傳輸時間）。
- Google 文件／試算表／簡報（這些需要轉換——詳見下方說明）。

### 3) 處理 Google 原生檔案

Google 文件、試算表和簡報並非傳統檔案，而是以網頁形式存在。傳輸時，rclone 會將它們轉換為 Microsoft Office 格式：

| Google 格式 | 轉換為 |
|---------------|------------|
| Google 文件 | .docx |
| Google 試算表 | .xlsx |
| Google 簡報 | .pptx |
| Google 繪圖 | .png |

此轉換會在傳輸過程中自動完成。

### 4) 開始傳輸

建立一個從 Google Drive 到 OneDrive 的**複製**工作：

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Run migration job" class="img-large img-center" />

遷移時請使用**複製**（而非同步）。複製只會將檔案新增到目的地——絕不會刪除任何內容。

### 5) 監控進度

即時觀看傳輸過程：

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitor Google Drive to OneDrive transfer" class="img-large img-center" />

### 6) 使用資料夾比對進行驗證

傳輸完成後，比對雙方內容以確保沒有遺漏：

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify migration completeness" class="img-large img-center" />

## 遷移小技巧

### 分批遷移

對於大型雲端硬碟（500 GB 以上），建議逐一資料夾遷移，而非一次搬移全部內容：

1. 先從關鍵資料夾開始（文件、專案）。
2. 接著搬移共用資料夾。
3. 封存與媒體檔案最後處理。

如此一來，使用者就能立即在 OneDrive 上使用最重要的檔案開始工作。

### 處理速率限制

Google Drive 與 OneDrive 都有 API 速率限制。RcloneView 會自動遵守這些限制，但對於非常大型的遷移作業：

- 使用[頻寬限制](https://rcloneview.com/support/blog/set-bandwidth-limits-cloud-transfers-rcloneview)以避免觸及限制。
- 安排在離峰時段進行傳輸。
- 讓失敗的傳輸自動重試（v1.3 新功能）。

### 執行增量更新

初次遷移完成後，再次執行相同的複製工作。它只會傳輸新增或已變更的檔案——跳過已經複製過的內容。這能捕捉到遷移期間新增到 Google Drive 中的任何檔案。

## 遷移後：讓兩端保持同步

如果您在過渡期間需要同時啟用兩個雲端服務，可以設定排程同步：

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule ongoing sync during transition" class="img-large img-center" />

這能讓 OneDrive 持續跟上 Google Drive 的任何變動，直到您完全切換完成為止。

## 常見問題

### 「檔案名稱過長」

OneDrive 有 400 字元的路徑長度限制，而 Google Drive 較為寬鬆。若遇到此問題，請在遷移前縮短巢狀過深的資料夾名稱。

### 共用雲端硬碟檔案

Google 共用雲端硬碟（團隊雲端硬碟）與您個人的「我的雲端硬碟」是分開的。請將其新增為獨立的遠端，或設定 rclone 以納入共用雲端硬碟。

### 大型檔案

OneDrive 商務版支援最大 250 GB 的檔案。OneDrive 個人版同樣支援最大 250 GB。在開始遷移前，請先確認您最大的檔案大小是否符合限制。

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. **新增 Google Drive 與 OneDrive** 作為遠端。
3. **執行複製工作**——資料夾結構會自動保留。
4. **使用資料夾比對進行驗證**——確保沒有遺漏任何內容。
5. **排程增量更新**，直到轉換完成為止。

別讓檔案遷移成為您平台轉換過程中的瓶頸。

---

**相關指南：**

- [建立同步工作](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [比對資料夾內容](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [設定頻寬限制](https://rcloneview.com/support/blog/set-bandwidth-limits-cloud-transfers-rcloneview)
- [工作排程](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)

<CloudSupportGrid />
