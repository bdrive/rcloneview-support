---
slug: fix-backblaze-b2-sync-errors-rcloneview
title: "修復 Backblaze B2 同步錯誤 — 使用 RcloneView 診斷並解決"
authors:
  - alex
description: "使用 RcloneView 排查 Backblaze B2 同步錯誤：檢查 Application Key 範圍、查看日誌、調整傳輸與重試，並以 Folder Compare 驗證結果。"
keywords:
  - 修復 Backblaze B2 同步錯誤
  - Backblaze B2 401 unauthorized
  - B2 application key 權限
  - B2 同步失敗
  - rclone B2 疑難排解
  - RcloneView Backblaze B2
  - B2 上傳錯誤
  - 雲端同步疑難排解
tags:
  - RcloneView
  - troubleshooting
  - tips
  - backblaze-b2
  - cloud-sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 修復 Backblaze B2 同步錯誤 — 使用 RcloneView 診斷並解決

> 大多數 B2 同步失敗都源於少數幾個原因：金鑰範圍、重試設定，或是你還沒查看的日誌。

Backblaze B2 同步停滯或回報錯誤，只要能看到 rclone 實際回報的內容，通常幾分鐘就能解決。RcloneView 在同一個視窗中呈現作業狀態、日誌和內建終端機，讓你不必猜測即可診斷。使用 FREE 授權即可以完整讀寫權限連接 S3、Azure 或 Backblaze B2。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 先檢查 Application Key

B2 遠端使用 Application Key ID 和 Application Key 進行驗證。如果作業立即因授權錯誤而失敗，常見原因包括：金鑰被限制在其他儲存貯體、金鑰沒有寫入權限，或複製貼上時把金鑰 ID 與金鑰弄反、混入了結尾空白。

開啟 Remote Manager，編輯 B2 遠端並重新輸入這兩個值。如果你在 Backblaze 金鑰管理頁面產生新金鑰，請記得完整的 Application Key 只會在建立時顯示一次。接著在 Explorer 中瀏覽儲存貯體：如果能列出內容但上傳失敗，則金鑰很可能缺少寫入權限。

<img src="/support/images/en/blog/new-remote.png" alt="在 RcloneView 中編輯 Backblaze B2 遠端" class="img-large img-center" />

## 查看 Job History 與日誌

開啟 Job History，查看每次執行的狀態（Completed、Errored 或 Canceled）、耗時、檔案數和速度。只有部分檔案出錯的執行指向個別檔案的問題；一開始就失敗的執行則指向憑證或連線問題。

如需更多細節，請在 Settings > Embedded Rclone 中啟用 rclone 日誌，將日誌等級設為 DEBUG，重新啟動內建 rclone 並重現問題。Log 分頁和日誌檔會顯示帶時間戳記的項目，方便搜尋失敗的檔案或訊息。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="RcloneView 的 Job History 顯示出錯與已完成的執行" class="img-large img-center" />

## 調整傳輸與重試

大型任務中的錯誤往往源於並行過高。在作業的 Advanced Settings 中，降低檔案傳輸數和 equality checker 數量（對於較慢的後端，建議 checker 不超過 4 個）。將 "Retry entire sync if fails" 維持預設值 3，讓短暫的網路中斷能自行恢復。例如攝影師需要連夜同步數千個 RAW 檔案時，出現錯誤後先降低並行數是合理的第一步調整。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="在 RcloneView 的 Transferring 分頁中即時監控傳輸" class="img-large img-center" />

## 驗證並安全地重新執行

修改後，先執行 Dry Run 預覽將被複製或刪除的內容。接著執行作業，並在本機資料夾與 B2 儲存貯體之間使用 Folder Compare：left-only 檔案是仍需上傳的內容，different 檔案則顯示大小不一致。使用 Copy right 補齊差異，並重複比較直到結果一致。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="在 RcloneView 中以 Folder Compare 確認 B2 同步" class="img-large img-center" />

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html)**下載 RcloneView**。
2. 在 Remote Manager 中重新輸入 B2 Application Key ID 和 Key。
3. 啟用 DEBUG 日誌並重新執行失敗的作業。
4. 降低並行數，執行 Dry Run，然後以 Folder Compare 驗證。

依序檢查金鑰、日誌和設定，大多數 B2 錯誤都能很快解決。

---

**相關指南：**

- [使用 RcloneView 管理 Backblaze B2](https://rcloneview.com/support/blog/manage-backblaze-b2-cloud-sync-backup-rcloneview)
- [修復 Wasabi 同步錯誤](https://rcloneview.com/support/blog/fix-wasabi-sync-errors-rcloneview)
- [Dry Run：傳輸前預覽同步](https://rcloneview.com/support/blog/dry-run-preview-sync-before-transfer-rcloneview)

<CloudSupportGrid />
