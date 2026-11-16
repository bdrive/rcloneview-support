---
slug: equality-checkers-slow-backends-sync-tuning-rcloneview
title: "Number of Equality Checkers — 在 RcloneView 中為慢速後端調整同步比較"
authors:
  - kai
description: "了解 RcloneView 同步精靈中 Number of equality checkers 設定的作用，以及如何針對 SFTP、FTP、WebDAV 與有速率限制的雲端遠端進行調整。"
keywords:
  - rclone checkers 設定
  - number of equality checkers
  - rclone checkers GUI
  - 為慢速後端調整同步
  - SFTP 同步效能
  - WebDAV 同步緩慢
  - 雲端 API 速率限制 同步
  - RcloneView 進階同步設定
  - 校驗碼比較同步
tags:
  - RcloneView
  - feature
  - performance
  - cloud-sync
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Number of Equality Checkers — 在 RcloneView 中為慢速後端調整同步比較

> 在複製任何內容之前，同步必須先判斷哪些檔案已經一致。checker 的數量決定了這一步對儲存空間施加多大的壓力。

RcloneView 中的每個 Sync 工作都從比較來源與目的地檔案開始，以確定真正需要傳輸的內容。這項工作由 equality checker 完成，同步精靈的 Step 2 讓你設定並行執行的數量。預設值 8 適合大多數雲端服務商，但小型 SFTP 伺服器、WebDAV 共用或 API 限制嚴格的服務商，往往在較低的值下表現更好。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Equality Checker 的作用

checker 會檢視兩側的檔案並判斷它們是否相同。預設情況下，比較依據大小與修改時間。如果在同一步驟中勾選 **Enable checksum**，則改為依雜湊值與大小比較檔案——這更嚴格，但需要為每個檔案向後端請求雜湊值。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Opening a sync job in RcloneView to adjust advanced settings" class="img-large img-center" />

checker 與 **Number of file transfers** 是分開的，後者控制同時複製的檔案數量。同步 200,000 個小檔案且大多數未變更時，檢查所花的時間遠多於傳輸，因此 checker 數量可能比傳輸數量更重要。

## 何時降低 Checker 數量

RcloneView 的建議是：對慢速後端使用 4 或更少。典型情況：

- **規格一般的伺服器上的 SFTP 或 FTP。** 並行檢查代表更多的同時連線，小型 VPS 或較舊的 NAS 可能會拒絕或限制額外的工作階段。
- 對中繼資料請求回應緩慢的 **WebDAV 共用**。
- **請求限制嚴格的雲端服務商**，突發的並行請求會觸發速率限制錯誤與重試。

降低 checker 是以原始並行度換取更穩定的進度。如果日誌在比較階段反覆出現重試或連線錯誤，請先降到 4，再降到 2，然後重新執行。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitoring sync progress and speed in the RcloneView Transferring tab" class="img-large img-center" />

## 何時預設值就足夠

Amazon S3、Wasabi 或 Cloudflare R2 等 S3 相容物件儲存通常可以毫無問題地處理 8 個 checker，本機磁碟或高速區域網路 NAS 也很少需要調整。RcloneView 可在 Windows、macOS 與 Linux 上從一個視窗掛載並同步 90+ 服務商，因此同一台機器上的不同工作需要不同的 checker 值是很常見的：S3 工作保持預設，只降低 SFTP 工作。

## 用 Dry Run 與 Job History 衡量變化

一次只變更一個設定。先執行 Dry Run 確認工作範圍，然後執行同步並開啟 Job History，它會記錄每次執行的 Time Spent、Status 與檔案數。比較同一工作在不同 checker 值下的兩次執行，就能看出變更是否有幫助。如果重試設定（**Retry entire sync if fails**，預設 3）不斷被觸發，這也表示後端需要更少的並行請求。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Comparing sync run durations in RcloneView Job History after changing the checker count" class="img-large img-center" />

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 開啟 Job Manager，編輯以慢速遠端為目標的同步工作。
3. 在 Step 2 中將 **Number of equality checkers** 設為 4，並決定是否需要 **Enable checksum**。
4. 執行工作，然後在 Job History 中將 Time Spent 與狀態和先前的執行進行比較。

只需幾分鐘的調整，就能把卡在比較階段的同步變成穩定完成的同步。

---

**相關指南：**

- [加速雲端傳輸 — RcloneView 中的多執行緒上傳與並行串流](https://rcloneview.com/support/blog/multi-threaded-transfers-parallel-streams-rcloneview)
- [解決雲端傳輸緩慢 — 在 RcloneView 中加快同步與複製](https://rcloneview.com/support/blog/fix-slow-cloud-transfers-speed-rcloneview)
- [使用 RcloneView 進行校驗碼驗證的雲端遷移（Drive、Dropbox、S3、R2）](https://rcloneview.com/support/blog/checksum-verified-cloud-migrations-rcloneview)

<CloudSupportGrid />
