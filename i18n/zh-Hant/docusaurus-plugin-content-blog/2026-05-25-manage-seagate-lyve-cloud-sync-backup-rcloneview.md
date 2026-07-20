---
slug: manage-seagate-lyve-cloud-sync-backup-rcloneview
title: "管理 Seagate Lyve Cloud — 使用 RcloneView 同步與備份檔案"
authors:
  - kai
description: "了解如何使用 RcloneView 管理 Seagate Lyve Cloud 儲存空間。透過這款相容 S3 的雲端儲存 GUI 進行同步、備份與傳輸檔案。"
keywords:
  - Seagate Lyve Cloud
  - RcloneView Seagate
  - Lyve Cloud sync
  - Lyve Cloud backup
  - S3-compatible storage GUI
  - object storage management
  - Lyve Cloud RcloneView
  - manage Seagate cloud storage
  - cloud file transfer tool
  - Lyve Cloud file manager
tags:
  - RcloneView
  - cloud-storage
  - cloud-sync
  - backup
  - s3-compatible
  - object-storage
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 管理 Seagate Lyve Cloud — 使用 RcloneView 同步與備份檔案

> 將 Seagate Lyve Cloud 連接至 RcloneView，透過完整的 GUI 掌控您相容 S3 的物件儲存空間——瀏覽、同步、備份與掛載，無需接觸任何命令列。

Seagate Lyve Cloud 是一個相容 S3 的物件儲存平台，專為高吞吐量工作負載與長期資料保存而設計。無論您是在管理監控錄影、大型媒體檔案庫，還是企業資料集，Lyve Cloud 的架構都使其成為大量資料極具吸引力的儲存層。將其連接至 RcloneView 後,每個儲存桶都會轉變為可瀏覽的檔案樹狀結構，讓您能與 RcloneView 支援的其他 90 多個服務供應商之間進行拖放、同步及排程操作。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 在 RcloneView 中新增 Seagate Lyve Cloud 遠端

Seagate Lyve Cloud 使用 S3 協定，因此您可以像設定任何相容 S3 的服務供應商一樣進行設定：使用存取金鑰（Access Key）、秘密金鑰（Secret Key），以及您所在地區的 Lyve Cloud 端點。

開啟 RcloneView,前往 **Remote > New Remote**，並選擇 **Amazon S3** 作為供應商類型。在下一個畫面中，從供應商子類型清單中選取 **Seagate Lyve Cloud**——RcloneView 會自動套用適合您所在地區的正確端點格式。輸入從 Lyve Cloud 控制台產生的 Lyve Cloud API 憑證（存取金鑰 ID 與秘密存取金鑰），然後儲存該遠端。幾秒鐘內，您的儲存桶就會像本機資料夾一樣出現在檔案總管中。

<img src="/support/images/en/blog/new-remote.png" alt="Adding a new Seagate Lyve Cloud remote in RcloneView" class="img-large img-center" />

如果您的組織跨多個 Lyve Cloud 地區營運，請將每一個地區新增為獨立命名的遠端——例如 `lyve-us`、`lyve-eu`、`lyve-ap`——並在 RcloneView 的雙面板檔案總管中並排比較或同步它們。

## 同步與備份檔案至 Lyve Cloud

連接遠端後，您可以立即透過拖放進行臨時傳輸，或使用工作管理員（Job Manager）建立可重複執行的同步工作。一個常見的工作流程是：影片製作公司將 4K 專案成品從本機伺服器同步至 Lyve Cloud 進行長期封存，同時在另一個雲端保留同步的鏡像副本以供快速存取。

前往 **Home > Sync**，選擇本機資料夾或另一個雲端遠端作為來源,並選取您的 Lyve Cloud 儲存桶作為目標。在同步精靈的進階設定（Advanced Settings）中，您可以調整並行傳輸執行緒數量、啟用以雜湊值進行的校驗和驗證，並在篩選（Filtering）步驟中設定檔案的存放時間或大小篩選條件——例如將監控錄影中的 `.tmp` 與 `.part` 檔案排除在外。設定滿意後，點選 **Dry Run** 即可在不影響正式資料的情況下，預覽確切會移動哪些檔案。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a sync job to Seagate Lyve Cloud in RcloneView" class="img-large img-center" />

擁有 PLUS 授權後，您可以透過類似 crontab 的表達式排程工作——設定每日離峰時段自動傳輸至 Lyve Cloud，完全無需人工介入。

## 監控傳輸與檢視工作歷史記錄

RcloneView 底部面板中的 **Transferring** 分頁會顯示每個進行中工作的即時進度：傳輸速度、檔案數量、完成百分比,以及可取消任何執行中傳輸的按鈕。每個工作完成後，**Job History** 檢視畫面會記錄開始時間、持續時間、移動的總位元組數、平均速度與最終狀態——為需要記錄儲存來源的高合規性產業提供可稽核的軌跡。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history for Seagate Lyve Cloud sync transfers in RcloneView" class="img-large img-center" />

對於跨多個站點運作 Lyve Cloud 的團隊，可將您的同步工作設定匯出為 JSON 檔案，並在其他機器上匯入——確保工作設定完全一致，無需手動重新輸入。

## 將 Lyve Cloud 掛載為本機磁碟機

對於需要應用程式直接從 Lyve Cloud 讀取檔案而無需先下載的工作流程，RcloneView 的掛載功能可將您的 Lyve Cloud 儲存桶對應至本機磁碟機代號（Windows）或掛載路徑（macOS/Linux）。前往 **Remote > Mount Manager**，建立一個以您的 Lyve Cloud 遠端為目標的新掛載，然後點選 **Save and mount**。該儲存桶即會以磁碟機的形式出現在 Windows 檔案總管或 macOS Finder 中。

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="Mounting Seagate Lyve Cloud bucket as a local drive in RcloneView" class="img-large img-center" />

預設的 VFS 快取模式（`writes`）會在上傳前先在本機緩衝寫入操作，即使在較高延遲的連線下也能提供靈敏的效能。對於受益於本機快取的讀取密集型工作流程，可在掛載設定中切換至 `full` 快取模式。

## 快速上手

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 前往 **Remote > New Remote**，選擇 **Amazon S3**，接著選取 **Seagate Lyve Cloud** 作為供應商子類型。
3. 輸入您的 Lyve Cloud 存取金鑰 ID 與秘密存取金鑰，然後儲存該遠端。
4. 在檔案總管中開啟 Seagate Lyve Cloud 遠端，立即開始瀏覽您的儲存桶。

連接完成後，建立一個同步工作，將檔案從本機儲存空間或其他雲端移至 Lyve Cloud——接著排程使其每晚自動執行，實現無人值守的封存作業。

---

**相關指南：**

- [管理 Wasabi 雲端儲存 — 使用 RcloneView 同步與備份檔案](https://rcloneview.com/support/blog/manage-wasabi-cloud-sync-backup-rcloneview)
- [管理 Backblaze B2 雲端儲存 — 使用 RcloneView 同步與備份檔案](https://rcloneview.com/support/blog/manage-backblaze-b2-cloud-sync-backup-rcloneview)
- [管理 Amazon S3 — 使用 RcloneView 同步與備份檔案](https://rcloneview.com/support/blog/manage-amazon-s3-cloud-sync-backup-rcloneview)

<CloudSupportGrid />
