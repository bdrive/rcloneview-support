---
slug: sync-google-drive-to-hetzner-storage-box-rcloneview
title: "將 Google Drive 同步到 Hetzner Storage Box — 使用 RcloneView 進行雲端備份"
authors:
  - steve
description: "使用 RcloneView 的跨提供商同步作業，將 Google Drive 檔案同步到 Hetzner Storage Box，實現經濟實惠的異地備份。"
keywords:
  - 將 Google Drive 同步到 Hetzner
  - Google Drive Hetzner Storage Box 備份
  - Hetzner Storage Box rclone
  - Google Drive 異地備份
  - 經濟型雲端儲存同步
  - 歐洲雲端儲存備份
  - Google Drive RcloneView 同步
  - Hetzner Box 備份
  - Google Drive SFTP 備份
  - 雲對雲備份
tags:
  - RcloneView
  - google-drive
  - hetzner
  - cloud-to-cloud
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 將 Google Drive 同步到 Hetzner Storage Box — 使用 RcloneView 進行雲端備份

> 無需離開桌面、無需撰寫任何指令碼，即可在 Hetzner Storage Box 上保留一份低成本的 Google Drive 檔案副本。

Google Drive 便於日常協作，但它本身並非為長期備份而設計——在獨立基礎設施上保留第二份副本，可以防範帳戶鎖定、意外刪除或配額超出等問題。Hetzner Storage Box 因其每 TB 的低成本而成為此用途的熱門選擇，RcloneView 透過一個排程同步作業將兩者直接連接起來，無需任何命令列指令碼。RcloneView 可在一個視窗中掛載並同步兩個提供商，支援 Windows、macOS 和 Linux。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 連接兩個遠端

首先透過標準的 OAuth 瀏覽器登入，在遠端管理員（Remote Manager）中新增 Google Drive——由於 RcloneView 會自動處理驗證流程，因此無需輸入 API 金鑰。接著將 Hetzner Storage Box 新增為 SFTP 遠端，在憑證輸入（Credential Entry）設定畫面中輸入該儲存盒的主機位址和 SSH 憑證。

當兩個遠端都以標籤頁形式出現在檔案總管面板中後，開啟分割畫面配置並排瀏覽。在設定任何自動化作業之前，這是一個有用的檢查步驟——在啟動同步之前，確認 Storage Box 上的目標資料夾結構與預期一致。

<img src="/support/images/en/blog/new-remote.png" alt="在 RcloneView 中將 Google Drive 和 Hetzner Storage Box 新增為遠端" class="img-large img-center" />

## 設定同步作業

在同步精靈中，選擇 Google Drive 作為來源，Hetzner Storage Box 作為目的地，然後選擇**單向（One-way）**同步方向，讓 Storage Box 鏡像 Google Drive，而不會刪除來源上的任何內容。在第 3 步中套用篩選器，略過不需要備份的檔案類型——排除 `.tmp` 檔案或僅限 Google 文件的格式，可以縮小傳輸量，並加快後續執行速度。

在進階設定（Advanced Settings）中啟用校驗碼（checksum）比對，可讓 RcloneView 只重新傳輸真正變更過的檔案，而不是所有修改日期較新的檔案——這一點在 Google Drive 上尤其重要，因為中繼資料時間戳記可能在內容未變的情況下發生變化。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="在 RcloneView 中設定從 Google Drive 到 Hetzner Storage Box 的單向同步作業" class="img-large img-center" />

## 自動化與監控備份

先執行 Dry Run（模擬執行）預覽將要複製的確切檔案，然後執行該作業，並在資訊檢視（Info View）的傳輸（Transferring）標籤中即時查看進度——傳輸速度、檔案數量和總大小都會顯示。PLUS 授權使用者可以附加 crontab 格式的排程，使同步自動重複而無需人工介入，而工作記錄（Job History）會永久記錄每次執行的耗時與結果，便於日後稽核。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="在 RcloneView 中為從 Google Drive 到 Hetzner Storage Box 的重複同步作業設定排程" class="img-large img-center" />

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 透過 OAuth 連接 Google Drive，並將 Hetzner Storage Box 新增為 SFTP 遠端。
3. 建立啟用篩選器與校驗碼比對的單向同步作業。
4. 執行 Dry Run，然後執行同步並在傳輸（Transferring）標籤中監控。

在獨立的低成本基礎設施上保留第二份副本，是保護 Google Drive 資料最簡單的方法之一，而 RcloneView 讓這個流程無需手動整理檔案即可持續運行。

---

**相關指南：**

- [管理 Hetzner Storage Box 儲存空間 — 使用 RcloneView 同步與備份檔案](https://rcloneview.com/support/blog/manage-hetzner-storage-box-sync-rcloneview)
- [將 Dropbox 同步到 Hetzner Storage Box — 使用 RcloneView 進行雲端備份](https://rcloneview.com/support/blog/sync-dropbox-to-hetzner-storage-box-rcloneview)
- [管理 Google Drive 儲存空間 — 使用 RcloneView 同步與備份檔案](https://rcloneview.com/support/blog/manage-google-drive-cloud-sync-backup-rcloneview)

<CloudSupportGrid />
