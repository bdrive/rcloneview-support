---
slug: migrate-backblaze-b2-to-cloudflare-r2-rcloneview
title: "將 Backblaze B2 遷移至 Cloudflare R2 — 使用 RcloneView 傳輸檔案"
authors:
  - alex
description: "使用 RcloneView 將 Backblaze B2 物件儲存遷移至 Cloudflare R2。逐步圖形介面指南，內建校驗碼驗證，無需使用任何 CLI 指令。"
keywords:
  - Backblaze B2 to Cloudflare R2 migration
  - migrate B2 to R2
  - Cloudflare R2 migration guide
  - RcloneView cloud migration
  - B2 to R2 transfer
  - object storage migration
  - Backblaze to Cloudflare
  - cloud storage migration tool
  - S3 compatible migration
  - transfer B2 bucket rcloneview
tags:
  - backblaze-b2
  - cloudflare-r2
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 將 Backblaze B2 遷移至 Cloudflare R2 — 使用 RcloneView 傳輸檔案

> 在 RcloneView 中，將 B2 儲存桶搬移至 Cloudflare R2 是一項簡單直接的雲端對雲端操作 — 新增兩個遠端、設定複製工作，並透過校驗碼比對驗證資料完整性即可。

Backblaze B2 與 Cloudflare R2 都是熱門的 S3 相容物件儲存平台，隨著基礎架構需求的演變，許多團隊都需要在兩者之間搬移資料。RcloneView 並非先將資料下載到本機再重新上傳，而是透過 rclone 的雲端對雲端引擎在伺服器端直接處理傳輸 — 讓您能透過圖形介面遷移整個儲存桶,完全不需要輸入任何指令。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 新增 Backblaze B2 與 Cloudflare R2 作為遠端

在執行遷移之前,請先在 RcloneView 中連接兩個儲存帳戶。

**Backblaze B2:** 開啟 **Remote** > **New Remote**,選擇 Backblaze B2,並輸入您的 Application Key ID 與 Application Key。儲存後,RcloneView 會在檔案總管中列出您的 B2 儲存桶。

**Cloudflare R2:** 新增第二個遠端,選擇 Cloudflare R2,並提供您的 API Token、Account ID 與 R2 端點。與 B2 相同,您的 R2 儲存桶也會立即顯示在檔案總管中。

連接好兩個遠端後,您可以在 RcloneView 的雙欄介面中並排瀏覽它們,並在開始遷移前確認來源儲存桶與目的地儲存桶皆正確無誤。

<img src="/support/images/en/blog/new-remote.png" alt="Adding Backblaze B2 and Cloudflare R2 remotes in RcloneView" class="img-large img-center" />

## 執行雲端對雲端遷移

開啟 **Job Manager** 並建立新的複製或同步工作。將您的 Backblaze B2 儲存桶(或其中特定的前綴路徑)設為來源,並將 Cloudflare R2 儲存桶設為目的地。

在進階設定步驟中,依照您的網路頻寬調整並行傳輸檔案數量 — 對於包含大量小檔案的儲存桶,提高數值可加快速度,而大型媒體檔案庫則受益於多執行緒傳輸。啟用**校驗碼驗證**功能,讓 B2 與 R2 透過雜湊比對而非僅依賴檔案大小與修改時間來確認檔案完整性一致。

在正式傳輸前先執行一次**模擬執行(Dry Run)**。預覽畫面會顯示每一個將被複製的物件,讓您在正式執行前先發現任何意外的篩選條件比對或路徑不符的情況。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-to-cloud transfer from Backblaze B2 to Cloudflare R2 in RcloneView" class="img-large img-center" />

## 即時監控傳輸進度

工作開始後,下方資訊面板中的**傳輸中(Transferring)**分頁會顯示即時進度:各檔案的傳輸速度、整體傳輸量,以及已完成與剩餘物件的數量。對於龐大的 B2 儲存桶 — 例如包含數萬個檔案的影音檔案庫 — 即時檢視畫面能讓您及早發現任何卡住的情況,並視需要取消或調整設定。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Real-time transfer monitoring during B2 to R2 migration in RcloneView" class="img-large img-center" />

傳輸完成後,請至**工作紀錄(Job History)**分頁查看完整摘要:總傳輸大小、傳輸速度、檔案數量與最終狀態。若經過校驗碼驗證的執行結果顯示零錯誤,即代表您的 R2 儲存桶與來源 B2 資料完全一致,逐位元組相符。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history confirming successful Backblaze B2 to Cloudflare R2 migration" class="img-large img-center" />

使用 **PLUS 授權**,您可以排程增量同步工作,在分階段轉換過程中讓 R2 隨著 B2 新增的物件持續更新 — 以分批方式進行遷移,而非一次性的大批次傳輸。

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 透過 **Remote** > **New Remote** 新增您的 Backblaze B2 帳戶(Application Key ID + Application Key)。
3. 新增您的 Cloudflare R2 帳戶(API Token + Account ID + Endpoint)。
4. 開啟 **Job Manager**,建立從 B2 到 R2 的複製工作,並啟用校驗碼驗證。
5. 先執行模擬執行(Dry Run),再執行正式遷移,並於工作紀錄中檢視結果。

RcloneView 免除了對 CLI 專業知識或中介本機儲存空間的需求 — 您的 B2 資料會直接搬移至 R2,並內建完整的完整性驗證機制。

---

**相關指南:**

- [管理 Backblaze B2 雲端儲存 — 使用 RcloneView 進行同步與備份](https://rcloneview.com/support/blog/manage-backblaze-b2-cloud-sync-backup-rcloneview)
- [管理 Cloudflare R2 雲端儲存 — 使用 RcloneView 進行同步](https://rcloneview.com/support/blog/manage-cloudflare-r2-cloud-sync-rcloneview)
- [使用 RcloneView 將 Cloudflare R2 遷移至 Backblaze B2](https://rcloneview.com/support/blog/migrate-cloudflare-r2-to-backblaze-b2-rcloneview)

<CloudSupportGrid />
