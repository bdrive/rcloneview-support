---
slug: migrate-opendrive-to-backblaze-b2-rcloneview
title: "從 OpenDrive 遷移到 Backblaze B2 — 使用 RcloneView 傳輸檔案"
authors:
  - tayson
description: "使用 RcloneView 將檔案從 OpenDrive 遷移到 Backblaze B2：連接兩個遠端、以 Dry Run 預覽複製、執行傳輸，並用 Folder Compare 驗證。"
keywords:
  - 從 OpenDrive 遷移到 Backblaze B2
  - OpenDrive 到 B2 傳輸
  - OpenDrive 遷移
  - Backblaze B2 備份
  - 雲端對雲端傳輸
  - RcloneView OpenDrive
  - RcloneView Backblaze B2
  - 將檔案從 OpenDrive 移到 B2
tags:
  - RcloneView
  - opendrive
  - backblaze-b2
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 從 OpenDrive 遷移到 Backblaze B2 — 使用 RcloneView 傳輸檔案

> 透過可預覽、可驗證的雲端對雲端傳輸，將 OpenDrive 檔案庫遷移到 Backblaze B2 儲存貯體，而無需手動下載再重新上傳。

超出檔案分享帳號承載能力的團隊，往往希望以物件儲存來做長期封存。手動把資料從 OpenDrive 遷移到 Backblaze B2，代表必須先把所有內容下載到本機。RcloneView 同時連接兩個服務並在它們之間直接傳輸，並提供 Dry Run 與比對步驟，讓你清楚哪些內容已經遷移。使用 FREE 授權即可對 S3、Azure 或 Backblaze B2 進行完整的讀寫連線。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 連接兩個遠端

開啟 Remote 分頁並選擇 New Remote。將 OpenDrive 新增為一個遠端，將 Backblaze B2 新增為另一個遠端。B2 使用 Application Key ID 與 Application Key，可在 Backblaze 的金鑰管理頁面建立。請先在 Backblaze 中建立目的地儲存貯體，以便準備好目標路徑。

兩個遠端都出現在 Remote Manager 後，將它們並排開啟到兩個 Explorer 面板中。在進行大量傳輸之前，瀏覽每個遠端的頂層目錄以確認憑證可用。

<img src="/support/images/en/blog/new-remote.png" alt="在 RcloneView 中新增 OpenDrive 與 Backblaze B2 遠端" class="img-large img-center" />

## 規劃資料夾配置

遷移是決定資料如何存放到 B2 的好時機。常見做法是依用途劃分儲存貯體，例如為已完成的專案建立一個封存儲存貯體，頂層資料夾與你目前的 OpenDrive 結構保持一致。對最大的 OpenDrive 資料夾使用 Get Size 來估算資料量，並優先複製最重要的資料夾。

如果某些檔案類型不需要遷移，可在同步精靈的第 3 步中設定最大檔案大小、最大檔案時效，或自訂排除規則，例如 `.iso`。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="在 RcloneView 中從 OpenDrive 到 Backblaze B2 的雲端對雲端傳輸" class="img-large img-center" />

## 先 Dry Run，再傳輸

建立一個作業，以 OpenDrive 為來源，以你的 B2 儲存貯體為目的地。對於遷移，Copy 作業較為穩妥，因為它不會變動來源；Sync 作業可能會刪除目的地上的檔案以與來源保持一致。請先執行 Dry Run，查看將要複製的檔案清單。

在第 2 步中，將 "Retry entire sync if fails" 維持預設值 3；如果來源端限流，可以考慮降低並行傳輸數。接著執行作業，並在 Transferring 分頁中查看進度、速度與檔案數量。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="在 RcloneView 中執行 OpenDrive 到 B2 的作業" class="img-large img-center" />

## 在停用來源之前先驗證

作業完成後，開啟 Job History，確認狀態為 Completed，並檢視總大小與檔案數量。接著對 OpenDrive 與 B2 資料夾使用 Compare。left-only 檔案是沒有抵達的項目；different 檔案則表示大小不一致，值得重新複製。在比對結果中不再出現 left-only 檔案之前，請保留 OpenDrive 的資料。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="OpenDrive 與 Backblaze B2 之間的 Folder Compare" class="img-large img-center" />

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 將 OpenDrive 與 Backblaze B2 新增為遠端，並建立目的地儲存貯體。
3. 建立 Copy 作業，執行 Dry Run，然後執行傳輸。
4. 在停用來源之前，使用 Job History 與 Folder Compare 進行驗證。

經過預覽與驗證的複製，讓遷移到 B2 的過程即使面對大型檔案庫也更可預期。

---

**相關指南：**

- [管理 OpenDrive 儲存 — 使用 RcloneView 同步與備份檔案](https://rcloneview.com/support/blog/manage-opendrive-cloud-sync-backup-rcloneview)
- [使用 RcloneView 從 SugarSync 遷移到 Backblaze B2](https://rcloneview.com/support/blog/migrate-sugarsync-to-backblaze-b2-rcloneview)
- [使用 RcloneView 從 Koofr 遷移到 Backblaze B2](https://rcloneview.com/support/blog/migrate-koofr-to-backblaze-b2-rcloneview)

<CloudSupportGrid />
