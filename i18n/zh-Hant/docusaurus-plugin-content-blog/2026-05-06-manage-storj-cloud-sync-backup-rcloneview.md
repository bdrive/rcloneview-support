---
slug: manage-storj-cloud-sync-backup-rcloneview
title: "管理 Storj 儲存空間 — 使用 RcloneView 同步與備份檔案"
authors:
  - tayson
description: "了解如何使用 RcloneView 管理 Storj 去中心化雲端儲存。透過簡單的 GUI 在 Storj 上同步、備份與傳輸檔案 — 無需使用 CLI。"
keywords:
  - Storj 雲端儲存管理
  - RcloneView Storj 同步
  - Storj 備份檔案
  - 去中心化雲端儲存 GUI
  - Storj 檔案傳輸
  - Storj rclone GUI
  - Storj 同步備份工具
  - 使用 RcloneView 管理 Storj
  - Storj 桌面用戶端
  - Storj S3 相容 GUI
tags:
  - storj
  - decentralized-storage
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 管理 Storj 儲存空間 — 使用 RcloneView 同步與備份檔案

> RcloneView 提供功能完整的 GUI，讓你在無需輸入任何指令的情況下，同步、備份與管理你的 Storj 去中心化雲端儲存。

Storj 是一個去中心化的物件儲存平台，會將加密後的檔案片段分散儲存在全球節點網路中。管理敏感資料的團隊 — 例如醫療紀錄、財務檔案或創意資產 — 選擇 Storj 是因為它內建的加密機制與韌性。透過 RcloneView，你可以連接你的 Storj 儲存桶（bucket），並將它與所有其他雲端帳戶一起以視覺化方式管理。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 將 Storj 連接至 RcloneView

RcloneView 透過兩種連接方式支援 Storj：原生 Storj 後端，以及 S3 相容端點。對大多數使用者來說，S3 相容路徑最為簡單 — 你在 Storj 控制台中產生 S3 憑證（Access Key ID、Secret Access Key 及區域端點 URL），然後在 RcloneView 中新增一個遠端，選擇 Amazon S3 作為提供者類型並輸入這些憑證。

原生 Storj 後端需要一個 Access Grant 權杖，你可以在 Storj 網頁介面中建立。新增一個遠端，選擇 Storj 作為提供者，然後貼上你的 Access Grant。無論採用哪種方式，都只需不到兩分鐘，而 RcloneView 會使用加密的本地儲存安全地保存你的憑證。

<img src="/support/images/en/blog/new-remote.png" alt="Adding a new Storj remote in RcloneView" class="img-large img-center" />

連接完成後，你的 Storj 儲存桶就會與其他遠端一起出現在檔案總管中。瀏覽資料夾、預覽縮圖，並像管理任何其他雲端供應商一樣管理檔案。

## 同步與備份檔案至 Storj

RcloneView 的 4 步驟同步精靈讓設定定期備份至 Storj 變得十分簡單。選擇本地資料夾或雲端遠端作為來源，選取你的 Storj 儲存桶或子資料夾作為目的地，為工作命名，並選擇同步或複製模式。以一間正在封存 2TB RAW 檔案的攝影工作室為例，每晚執行的同步工作可讓 Storj 儲存桶隨時保持最新，無需人工介入。

在進階設定中啟用 **checksum**（校驗碼）選項以驗證資料完整性 — Storj 的糾刪碼儲存本身具有韌性，但透過雜湊比對驗證上傳內容，能提供多一層保障。將重試次數設為 3（預設值），以妥善處理暫時性的網路中斷。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a sync job to Storj in RcloneView" class="img-large img-center" />

## 排程自動化 Storj 備份（PLUS）

擁有 PLUS 授權後，你可以使用類似 crontab 的排程器來排程 Storj 備份工作。設定每天凌晨 2 點的每日備份、每週封存執行，或任何自訂週期。RcloneView 的 **Simulate schedule**（模擬排程）功能可在你正式套用前，預覽下一次執行的時間。

工作歷史記錄會追蹤每一次執行 — 開始時間、持續時間、傳輸位元組數與完成狀態 — 讓你清楚掌握每一個傳送至 Storj 的檔案的稽核軌跡。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling automated Storj backup jobs in RcloneView" class="img-large img-center" />

## 在 Storj 與其他雲端之間傳輸

若你的資料已經存放在 Google Drive 或 Dropbox，Storj 很適合作為第二份異地備份。RcloneView 的雙面板檔案總管讓你可以直接在遠端之間拖曳檔案。若要進行大規模遷移，可使用同步工作搭配 **dry run**（模擬執行）模式，在正式執行前預覽將被傳輸的內容。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-to-cloud transfer from another remote to Storj" class="img-large img-center" />

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 前往 Remote 分頁 > New Remote，選擇 Storj 或 S3 相容提供者。
3. 輸入你的 Storj Access Grant 或 S3 相容憑證並儲存。
4. 開啟檔案總管以瀏覽你的 Storj 儲存桶並建立同步工作。

Storj 的去中心化架構使其成為絕佳的異地備份目標，而 RcloneView 讓管理它就像管理任何主流雲端供應商一樣輕鬆。

---

**相關指南：**

- [管理 Amazon S3 儲存空間 — 使用 RcloneView 同步與備份檔案](https://rcloneview.com/support/blog/manage-amazon-s3-cloud-sync-backup-rcloneview)
- [將 Dropbox 遷移至 Storj — 使用 RcloneView 傳輸檔案](https://rcloneview.com/support/blog/migrate-dropbox-to-storj-rcloneview)
- [使用 RcloneView 在 Storj 與 Google Drive 之間傳輸](https://rcloneview.com/support/blog/transfer-storj-and-google-drive-with-rcloneview)

<CloudSupportGrid />
