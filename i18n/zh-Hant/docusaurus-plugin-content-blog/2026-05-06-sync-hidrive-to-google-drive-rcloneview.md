---
slug: sync-hidrive-to-google-drive-rcloneview
title: "將 HiDrive 同步到 Google Drive — 使用 RcloneView 進行雲端備份"
authors:
  - tayson
description: "使用 RcloneView 將您的 Strato HiDrive 儲存空間同步到 Google Drive。自動化雲端備份、在供應商之間直接傳輸檔案，並保持兩個帳戶同步。"
keywords:
  - sync HiDrive to Google Drive
  - HiDrive Google Drive sync RcloneView
  - Strato HiDrive backup to Google Drive
  - HiDrive cloud migration
  - move files HiDrive Google Drive
  - HiDrive sync tool GUI
  - Google Drive backup from HiDrive
  - RcloneView HiDrive sync
  - HiDrive file transfer tool
  - cloud to cloud sync HiDrive
tags:
  - hidrive
  - google-drive
  - cloud-to-cloud
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 將 HiDrive 同步到 Google Drive — 使用 RcloneView 進行雲端備份

> RcloneView 讓您的 Strato HiDrive 與 Google Drive 自動保持同步 — 透過排程工作進行直接的雲端對雲端傳輸，並提供完整的傳輸監控。

Strato HiDrive 在德語系國家廣泛用於具備嚴格 GDPR 合規性的安全雲端儲存。同時使用 HiDrive 與 Google Workspace 的團隊，經常需要在兩個平台之間同步內容 — 讓專案檔案可以從兩種環境中都能存取。RcloneView 能可靠地處理這種同步，連接兩個服務供應商，並依您設定的任何排程執行自動化傳輸。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 在 RcloneView 中連接 HiDrive 與 Google Drive

HiDrive 與 Google Drive 在 RcloneView 中都使用基於 OAuth 的身分驗證。前往「遠端」分頁 > 「新增遠端」：

- **HiDrive：**選擇 HiDrive，並使用您的 Strato HiDrive 帳號完成 OAuth 登入
- **Google Drive：**選擇 Google Drive，並完成以瀏覽器進行的 OAuth 身分驗證

RcloneView 會安全地儲存權杖，並在過期時自動重新整理。在設定同步之前，可在雙面板檔案總管中開啟兩個遠端，瀏覽雙方現有的內容。

<img src="/support/images/en/blog/new-remote.png" alt="Adding HiDrive and Google Drive remotes in RcloneView" class="img-large img-center" />

## 設定 HiDrive 到 Google Drive 的同步工作

在 RcloneView 的精靈中建立同步工作，以 HiDrive 為來源、Google Drive 資料夾為目的地。對於將客戶交付成果儲存在 HiDrive、並透過 Google Workspace 分享的顧問公司來說，每日同步工作可確保 Google Drive 上的副本在每個工作日結束後保持最新。

在進階設定中，將並行傳輸數量設定為符合您的頻寬，若跨帳戶的資料完整性至關重要，可啟用**校驗碼（checksum）**驗證。預先定義的篩選選項可將特定檔案類型（例如 HiDrive 縮圖快取或暫存檔案）排除在同步之外。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring HiDrive to Google Drive sync in RcloneView" class="img-large img-center" />

## 排程自動同步（PLUS）

擁有 PLUS 授權後，可排程 HiDrive 到 Google Drive 的同步工作自動執行。常見的設定方式：每天晚上 7 點將 HiDrive 同步到 Google Drive，以擷取當天的工作成果。啟用排程前，可使用**模擬排程**功能驗證您的 cron 運算式是否會產生預期的執行時間。

「啟動時自動啟用排程」選項可確保排程工作在機器重新開機後繼續執行 — 這對於在共用工作站上執行的同步工作尤其重要。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling HiDrive to Google Drive sync in RcloneView" class="img-large img-center" />

## 監控同步狀態與歷史紀錄

RcloneView 的「傳輸」分頁會顯示即時同步進度。每次同步完成後，「工作歷史」會記錄該次執行：已傳輸的檔案、移動的位元組數、速度與耗時。若 Google Drive 的 API 在大型同步過程中對請求進行節流限制，記錄檔會顯示重試事件 — 協助您為未來的工作調整並行傳輸設定。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history for HiDrive to Google Drive sync in RcloneView" class="img-large img-center" />

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 在「遠端」分頁 > 「新增遠端」中，新增 HiDrive 與 Google Drive 作為 OAuth 遠端。
3. 建立從 HiDrive 到您的 Google Drive 資料夾的同步或複製工作。
4. 使用 PLUS 授權排程自動執行，並在「工作歷史」中監控進度。

透過 RcloneView 的自動化同步引擎，讓 HiDrive 與 Google Drive 保持同步變得十分簡單 — 資料直接在雲端之間移動，無需任何手動步驟。

---

**相關指南：**

- [管理 HiDrive 儲存空間 — 使用 RcloneView 同步與備份檔案](https://rcloneview.com/support/blog/manage-hidrive-cloud-sync-backup-rcloneview)
- [管理 Google Drive 儲存空間 — 使用 RcloneView 同步與備份檔案](https://rcloneview.com/support/blog/manage-google-drive-cloud-sync-backup-rcloneview)
- [使用 RcloneView 將 HiDrive 同步到 OneDrive](https://rcloneview.com/support/blog/sync-hidrive-to-onedrive-rcloneview)

<CloudSupportGrid />
