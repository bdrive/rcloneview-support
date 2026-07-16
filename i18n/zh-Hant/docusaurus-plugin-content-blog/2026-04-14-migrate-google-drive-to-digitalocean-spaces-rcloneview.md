---
slug: migrate-google-drive-to-digitalocean-spaces-rcloneview
title: "將 Google Drive 遷移至 DigitalOcean Spaces — 使用 RcloneView 傳輸檔案"
authors:
  - tayson
description: "使用 RcloneView 將檔案從 Google Drive 移轉至 DigitalOcean Spaces 物件儲存。無需 CLI 腳本，直接進行雲端對雲端遷移的逐步指南。"
keywords:
  - migrate Google Drive to DigitalOcean Spaces
  - Google Drive to object storage migration
  - DigitalOcean Spaces backup from Google Drive
  - rclone Google Drive DigitalOcean
  - cloud-to-cloud migration Google Drive
  - move Google Drive to S3 compatible
  - RcloneView Google Drive migration
  - DigitalOcean Spaces file transfer
tags:
  - RcloneView
  - google-drive
  - digitalocean-spaces
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 將 Google Drive 遷移至 DigitalOcean Spaces — 使用 RcloneView 傳輸檔案

> RcloneView 將 Google Drive 遷移至 DigitalOcean Spaces 視為直接的雲端對雲端傳輸——無需本機暫存、具備完整進度可視性，並在完成時進行校驗碼驗證。

將檔案從 Google Drive 移轉至 DigitalOcean Spaces，是開發者從消費導向儲存服務遷移至基礎架構等級物件儲存的常見流程。新創公司可能會從使用 Google Drive 進行檔案分享，轉換為使用 Spaces 以取得程式化存取、CDN 整合，以及在規模化時更低的每 GB 成本。RcloneView 可同時連線兩個服務商，並直接傳輸檔案，而不需要將數 GB 的資料經過本機。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 準備兩個遠端

新增 Google Drive 作為 OAuth 遠端：**Remote 分頁 → New Remote → Google Drive**，在瀏覽器中完成驗證。你的 Drive 資料夾會立即出現在 Explorer 中。

新增 DigitalOcean Spaces 作為 S3 相容遠端：**New Remote → Amazon S3 Compatible → DigitalOcean Spaces**。輸入你的 Spaces access key、secret key 與區域端點（例如 `nyc3.digitaloceanspaces.com`）。若目標儲存桶尚未建立，請於 DigitalOcean Control Panel 中建立。

開啟雙面板 Explorer 版面：左側為 Google Drive，右側為 DigitalOcean Spaces。在執行遷移前先瀏覽兩邊，確認資料夾結構。

<img src="/support/images/en/blog/new-remote.png" alt="Setting up Google Drive and DigitalOcean Spaces remotes in RcloneView" class="img-large img-center" />

## 執行遷移

若要進行資料夾層級的遷移（例如將 `Google Drive:/Client Projects/` 遷移至 `do-spaces:projects-bucket/`），請在 Job Manager 中使用 Sync 工作精靈。設定來源與目的地後，於第 2 步進行以下設定：

- **同時傳輸數（Concurrent transfers）**：在高速連線下設為 8–12 以獲得最大輸送量
- **校驗碼驗證（Checksum verification）**：啟用——Google Drive 使用自己的雜湊機制，rclone 會處理轉換
- **重試次數（Retries）**：3——可在不使整個工作失敗的情況下，處理暫時性的 Google API 速率限制

請先執行 Dry Run。Google Drive 中常包含無法直接複製到 Spaces 的 Google Docs、Sheets 與 Slides 檔案（它們僅以 Google 專屬格式存在，並非可下載的檔案）。Dry Run 會顯示這些項目，讓你決定是否要先匯出，或以篩選規則將它們排除。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Google Drive to DigitalOcean Spaces cloud-to-cloud transfer in RcloneView" class="img-large img-center" />

## 處理 Google Workspace 檔案

原生 Google Workspace 檔案（Docs、Sheets、Slides）沒有直接對應的檔案格式——必須先匯出。Rclone 可在傳輸過程中自動將它們匯出為 PDF 或 Office 格式。在 RcloneView 的同步工作中，除非你設定匯出格式，否則 Google Docs 預設會被略過。可使用 Terminal 分頁執行 `rclone copy --drive-export-formats docx,xlsx,pptx` 進行一次性匯出，或在 Settings → Global Rclone Flags 中新增自訂旗標。

一般檔案（PDF、圖片、影片、程式碼）無需任何特殊處理即可傳輸，並會以原始格式與檔名完整落地於 Spaces 中。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verifying Google Drive to DigitalOcean Spaces migration with folder comparison" class="img-large img-center" />

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 將 Google Drive（OAuth）與 DigitalOcean Spaces（S3 憑證）新增為遠端。
3. 在 Job Manager 中建立 Sync 工作，執行 Dry Run，並檢查 Google Workspace 檔案的處理方式。
4. 執行遷移，並使用 Folder Compare 驗證是否完成。

使用 RcloneView 將 Google Drive 遷移至 DigitalOcean Spaces，是一個結構化且可驗證的流程——工作歷史與傳輸紀錄清楚記錄了何時搬移了哪些內容。

---

**相關指南：**

- [使用 RcloneView 管理 DigitalOcean Spaces 雲端同步與備份](https://rcloneview.com/support/blog/manage-digitalocean-spaces-cloud-sync-backup-rcloneview)
- [使用 RcloneView 將 Google Drive 遷移至 AWS S3](https://rcloneview.com/support/blog/migrate-google-drive-to-aws-s3-rcloneview)
- [使用 RcloneView 進行校驗碼驗證的雲端遷移](https://rcloneview.com/support/blog/checksum-verified-cloud-migrations-rcloneview)

<CloudSupportGrid />
