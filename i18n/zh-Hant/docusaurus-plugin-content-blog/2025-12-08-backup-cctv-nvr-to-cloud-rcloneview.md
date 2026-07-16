---
slug: backup-cctv-nvr-to-cloud-rcloneview
title: "如何使用 RcloneView 自動將 CCTV/NVR 監控畫面備份並封存至雲端儲存"
authors:
  - tayson
description: "使用 RcloneView 將 NAS、SMB 或 SFTP 路徑中的 CCTV/NVR 影片傳輸至 Wasabi、S3 或 Google Drive。透過 Compare、支援校驗碼的同步作業（Sync Jobs）與排程執行，在無需手動上傳的情況下保護證據資料。"
keywords:
  - rcloneview
  - cctv backup
  - nvr cloud archive
  - wasabi s3
  - google drive backup
  - smb sftp
  - surveillance storage
  - checksum verification
  - scheduled backup
  - disaster recovery
tags:
  - RcloneView
  - cloud
  - sync
  - nas
  - cctv
  - sftp
  - smb
  - webdav
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 如何使用 RcloneView 自動將 CCTV/NVR 監控畫面備份並封存至雲端儲存

> 讓監控影像免於失竊、火災或裝置故障的威脅。RcloneView 可將 NAS/SFTP/SMB 上的 NVR 資料夾連接至 Wasabi、S3 或 Google Drive，並自動執行 Compare 與同步作業（Sync Jobs），只傳輸新增的畫面，確保證據資料完整無缺。

<!-- truncate -->


<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />


## 1. 為什麼 CCTV 影像需要雲端備份

- NVR/NAS 硬碟因 24 小時不間斷錄影而快速填滿。
- 竊盜、火災或蓄意破壞可能會讓唯一的一份副本消失。
- 法規遵循與稽核要求更長的保存期限。
- 遠端審閱與證據分享需要異地存取能力。
- 手動複製多 GB 的 H.264/H.265 檔案容易出錯。

## 2. 監控檔案的棘手之處

- 持續寫入會產生數千個以日期命名的片段檔案。
- 高位元率（1080p/4K）在備份時會對頻寬造成壓力。
- 各廠牌的資料夾結構不盡相同（YYYY/MM/DD、攝影機 ID 等）。
- 需要在無人監督的情況下進行排程傳輸（每小時／每日）。
- 完整性至關重要：畫面損毀會削弱證據的效力。

## 3. RcloneView 如何提供協助

- 在同一介面中連接 **NAS/SMB/SFTP/WebDAV** 來源與 **Wasabi/S3/Google Drive** 目標。
- 雙窗格 Explorer 讓雲端對雲端或區域網路對雲端的傳輸更加直覺清楚。
- **Compare** 會標示新增或有變更的片段，讓你只傳輸差異部分。
- **校驗碼（Checksum）** 支援（S3/Wasabi）可驗證上傳結果。
- **同步作業（Sync Jobs）與排程** 可自動執行備份，無需撰寫腳本。

<!-- Image verified: exists -->


## 4. CCTV/NVR 備份逐步設定教學

### 步驟一）連接 NVR 儲存空間（SMB 或 SFTP）

1. 點選 **Remote → + New Remote**。
2. 選擇 **SMB**（適用於 NAS/Windows 共用資料夾）或 **SFTP**（適用於 Linux NVR 匯出）。
3. 輸入伺服器位址、共用路徑與登入憑證（如有需要請加入網域資訊）。
4. 儲存後於 Remote Manager 中確認已列出。

<!-- Image verified: exists -->
<img src="/support/images/en/howto/rcloneview-basic/create-remote-by-remote-manager.png" alt="Create NVR remote from Remote Manager" class="img-medium img-center" />

### 步驟二）新增雲端目標（Wasabi/S3/Google Drive）

- **Wasabi/S3**：貼上存取金鑰（access key）/私密金鑰（secret key）、區域與儲存桶（bucket）。
- **Google Drive**：點選 **Connect** 並於瀏覽器中完成 OAuth 授權。
- 讓兩個遠端同時顯示，以便並排作業。

### 步驟三）開啟來源與目標

1. 前往 **Browse**。
2. 左側窗格：開啟 NVR 資料夾（例如 `/recordings/2025/12/08`）。
3. 右側窗格：開啟用於備份的儲存桶或 Drive 資料夾。
4. 展開幾個日期資料夾以確認路徑正確。

### 步驟四）使用 Compare 預覽差異

<!-- Image verified: exists -->
<img src="/support/images/en/howto/rcloneview-basic/folder-comparison-completed.png" alt="Folder comparison showing CCTV deltas" class="img-medium img-center" />

- 點選 **Compare** 以標示遺失或大小有變更的影片檔案。
- 在複製前先解決名稱衝突（重複的攝影機 ID）。
- 這可避免覆蓋目標端較新的片段。

### 步驟五）安全地複製或同步

- 先從 NVR → 雲端進行 **單向複製**（不刪除任何檔案）。
- 為 S3/Wasabi 啟用 **校驗碼（checksum）** 以驗證上傳結果。
- 在上班時段使用 **頻寬限制**；夜間再解除限制。
- 若單日資料量非常大，可先降低並行數以避免被限流，之後再調高。

### 步驟六）將工作流程儲存為 Job

<!-- Image verified: exists -->
<img src="/support/images/en/howto/rcloneview-basic/save-sync-to-jobs.png" alt="Save CCTV sync to jobs" class="img-medium img-center" />

1. 在 Sync/Copy 對話方塊中，點選 **Save to Jobs**。
2. 為其命名（例如 `cctv-daily-wasabi`）。
3. 若計畫日後清除舊片段，請選擇單向同步。

### 步驟七）排程自動執行

<!-- Image verified: exists with /support prefix -->
<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule CCTV backup job" class="img-medium img-center" />

- 開啟 **Job Manager → Add Job**。
- 選擇已儲存的 Job 並設定頻率：每小時、每 3 小時，或每晚 02:00。
- 若頻寬有限，可依攝影機群組錯開執行時間。
- 在前幾次執行後檢查 **Job History**。

## 5. 備份政策範例

- **短期（熱）儲存：** 在 NAS/NVR 上保留最近 7 天，以便快速查閱。
- **長期封存：** 每週將所有畫面上傳至 Wasabi/S3，並啟用版本控制。
- **稽核/審閱：** 將特定日期的資料複製到 Google Drive，供調查人員與管理者使用。
- **連鎖店或多據點：** 每家門市使用獨立的儲存桶/前綴，以隔離存取權限。


## 6. 影像封存的成本優化

- 將不常存取的畫面存放於 **Wasabi** 或 S3 的不頻繁存取層級。
- Google Drive 上只保留近期資料，便於快速分享。
- 使用 S3/Wasabi 的生命週期規則，將較舊的物件轉移至更便宜的儲存層級。
- 若政策允許，可排除攝影機測試片段與無動態的片段。

## 7. 需要時還原影像

- 在 Explorer 中瀏覽雲端遠端，依日期資料夾篩選。
- 只複製相關的時段/日期至本機硬碟以供審閱。
- 使用 **Compare** 確認還原的檔案與原始檔案相符（依大小/時間或校驗碼）。
- 若涉及法律保留（legal hold），請複製一份至獨立的唯讀前綴/儲存桶。

## 8. 實際部署範例

- **小型零售店：** NVR → Wasabi 每小時備份；雲端保留 30 天，本機保留 7 天。
- **工廠：** CCTV → NAS → 每晚 Wasabi 複製；每月執行 S3 冷儲存封存。
- **連鎖網路：** 同一儲存桶內依據點分前綴；並複製至 Drive 供總部稽核。
- **保全服務商：** 每位客戶使用獨立儲存桶、排程作業，並針對受規範場域使用加密遠端。

## 9. 總結

RcloneView 讓 CCTV/NVR 備份成為可預測、無需命令列的工作流程。透過 SMB/SFTP 連接你的 NAS 或錄影主機，搭配 Wasabi/S3/Google Drive，使用 Compare 預覽差異，並排程支援校驗碼的同步作業（Sync Jobs）。憑藉自動化、日誌記錄與加密選項，你可以在無需徹夜盯著上傳進度的情況下，滿足保存、稽核與災難復原的需求。

<CloudSupportGrid />
