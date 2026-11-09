---
slug: fix-slow-s3-bucket-listing-many-small-files-rcloneview
title: "解決小檔案眾多的 S3 儲存貯體列表與同步緩慢問題 — 使用 RcloneView 調校"
authors:
  - morgan
description: "解決小檔案眾多的儲存貯體上 S3 同步與列表緩慢的問題。在 RcloneView 中調整檢查器、傳輸數與篩選器,並以 Dry Run 驗證。"
keywords:
  - S3 小檔案同步緩慢
  - S3 儲存貯體列表緩慢
  - rclone checkers 調校
  - S3 數百萬檔案同步
  - RcloneView S3
  - 加快 S3 同步
  - 小檔案傳輸緩慢
  - S3 相容儲存同步效能
tags:
  - RcloneView
  - troubleshooting
  - tips
  - s3
  - performance
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 解決小檔案眾多的 S3 儲存貯體列表與同步緩慢問題 — 使用 RcloneView 調校

> 擁有數十萬個小檔案的儲存貯體同步緩慢,原因是每個物件的額外負擔而非頻寬,幾項工作設定即可改善。

攝影師的代理資料夾或應用程式的日誌封存可能包含大量小物件。每個物件都需要列表項目、比較與請求,因此即使網路閒置,同步也會很慢。RcloneView 在工作精靈中提供相關的 rclone 設定,無需手寫參數即可調整。S3、Azure 或 Backblaze B2 在 FREE 授權下即可完整讀寫連線。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 為什麼小檔案很慢

對大檔案而言,吞吐量佔主導。對小檔案而言,請求數量佔主導:每個物件都要被列出、依大小、時間或檢查碼比較,並單獨上傳。這裡的緩慢通常源於單次請求延遲與提供者端的速率限制,因此增加頻寬毫無作用。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="顯示檔案數量與速度的 Transferring 分頁" class="img-large img-center" />

執行期間開啟 Transferring 分頁。若速度偏低但檔案數穩定增加,表示瓶頸在請求數量而非頻寬。

## 調整工作設定

在同步精靈的第 2 步中,提高檔案傳輸數量可讓更多物件並行移動。equality checkers 預設值為 8;在緩慢或被限流的後端上,建議使用 4 或更少,因為同時檢查過多可能觸發限流,使情況更糟。每次只修改一個值,然後重新執行。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="傳輸數與檢查器的工作進階設定" class="img-large img-center" />

啟用檢查碼比較會在大小檢查之外增加雜湊運算,因此僅在完整性比速度更重要時使用。將重試設定維持預設值 3,以免暫時性錯誤中斷長時間執行的工作。

## 縮減工作量

第 3 步的篩選器可減輕列表負載。使用最大檔案時長跳過舊物件,排除不需要的資料夾,並使用預先定義的篩選器排除某些檔案類型。將一個龐大的工作拆分為依前綴劃分的工作,也更便於隔離失敗並重新執行。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="在 RcloneView 中執行調校後的同步工作" class="img-large img-center" />

變更篩選器後,請務必執行 Dry Run,以便在正式執行前確切查看哪些檔案將被複製或刪除。

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 開啟緩慢的工作,觀察 Transferring 分頁,確認瓶頸在於請求數量。
3. 逐一調整傳輸數與檢查器,並新增篩選器以縮小範圍。
4. 在 Job History 中比較耗時,保留表現最佳的設定。

小而有條理的調整,可以讓通宵的同步變成日常工作。

---

**相關指南:**

- [解決 S3 分段上傳失敗](https://rcloneview.com/support/blog/fix-s3-multipart-upload-failures-rcloneview)
- [解決雲端傳輸速度緩慢](https://rcloneview.com/support/blog/fix-slow-cloud-transfers-speed-rcloneview)
- [解決雲端 API 速率限制錯誤](https://rcloneview.com/support/blog/fix-cloud-api-rate-limiting-errors-rcloneview)

<CloudSupportGrid />
