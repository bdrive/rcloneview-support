---
slug: fix-cloudinary-sync-errors-rcloneview
title: "修復 Cloudinary 同步錯誤 — 使用 RcloneView 解決連線、傳輸與檔案遺失問題"
authors:
  - jay
description: "使用 RcloneView 修復 Cloudinary 同步錯誤：重新檢查遠端、檢視作業歷程與 DEBUG 日誌、降低並行數，並以資料夾比較驗證結果。"
keywords:
  - 修復 Cloudinary 同步錯誤
  - Cloudinary 同步失敗
  - Cloudinary rclone 錯誤
  - RcloneView 疑難排解
  - Cloudinary 檔案遺失
  - rclone DEBUG 日誌
  - 資料夾比較
  - 雲端同步疑難排解
tags:
  - RcloneView
  - troubleshooting
  - tips
  - cloud-storage
  - dam
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 修復 Cloudinary 同步錯誤 — 使用 RcloneView 解決連線、傳輸與檔案遺失問題

> 當 Cloudinary 作業失敗時，RcloneView 的作業歷程、DEBUG 日誌與資料夾比較可以顯示原因出在遠端、傳輸負載，還是檔案根本沒有送達。

Cloudinary 同步因含糊的錯誤而中斷，或結束後資料夾看起來不完整，僅靠命令列很難診斷。RcloneView 將遠端檢查、作業記錄、日誌與並排比較集中在同一個視窗中，讓你依據證據而非盲目重試來排查。RcloneView 可在同一個視窗中掛載並同步 90 多個供應商，支援 Windows、macOS 與 Linux。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 確認遠端仍可連線

如果作業在幾秒內失敗，應先懷疑遠端而非資料。在 Remote 分頁中開啟 Remote Manager，編輯 Cloudinary 遠端，若憑證已變更或過期，請重新輸入。接著在 Explorer 面板中開啟該遠端並瀏覽根資料夾。如果能正常列出，代表連線正常，問題出在別處。

你也可以在內建的 Terminal 分頁中執行 `rclone about "remote:"`，將 `remote` 替換為你的遠端名稱，以快速檢查帳號是否有回應。

<img src="/support/images/en/blog/new-remote.png" alt="在 RcloneView Remote Manager 中編輯 Cloudinary 遠端" class="img-large img-center" />

## 檢視作業歷程並開啟 DEBUG 日誌

開啟 Job History，查看失敗執行的狀態、耗時與檔案數量。中途出錯的作業通常指向特定檔案或傳輸負載，而不是憑證問題。

若要查看每個檔案的確切訊息，請前往 Settings > Embedded Rclone，啟用 rclone 日誌，將等級設為 DEBUG，然後點擊 Restart Embedded Rclone。重現故障後，在 Log 分頁或你設定的日誌資料夾中查看日誌。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="顯示 Cloudinary 作業出錯的 RcloneView 作業歷程" class="img-large img-center" />

## 降低並行數並預覽重新執行

間歇性失敗通常會在同時移動的檔案減少時緩解。在同步精靈的第 2 步中，減少檔案傳輸數量，並將 equality checkers 設為 4 或更低，這是針對慢速後端的建議。將 "Retry entire sync if fails" 保持為 3，暫時性失敗最多會重試三次。

重新執行之前，使用 Dry Run 檢視將要複製或刪除的檔案，避免重試帶來意外。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="在 RcloneView 中以較低並行數重新執行 Cloudinary 作業" class="img-large img-center" />

## 使用資料夾比較驗證

重新執行後，開啟 Compare，一側選擇本機資料夾，另一側選擇 Cloudinary。篩選 left-only、right-only 與 different 檔案，查看仍然缺少或不一致的項目，然後只複製這些項目，而不必重複整個作業。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="列出 Cloudinary 上遺失檔案的資料夾比較" class="img-large img-center" />

## 開始使用

1. **下載 RcloneView**：從 [rcloneview.com](https://rcloneview.com/src/download.html) 下載。
2. 在 Remote Manager 中重新檢查 Cloudinary 遠端，並確認根資料夾可以列出。
3. 檢視 Job History，並為失敗的作業開啟 DEBUG 日誌。
4. 降低並行數，執行 Dry Run，重新執行，並以資料夾比較確認結果。

一旦在日誌與比較中看清原因，Cloudinary 故障就會成為一次簡短、可重複的修復。

---

**相關指南：**

- [管理 Cloudinary 儲存空間 — 使用 RcloneView 同步與備份檔案](https://rcloneview.com/support/blog/manage-cloudinary-cloud-sync-backup-rcloneview)
- [使用 RcloneView 修復 SugarSync 同步錯誤](https://rcloneview.com/support/blog/fix-sugarsync-sync-errors-rcloneview)
- [記錄與除錯雲端傳輸 — 在 RcloneView 中排解問題](https://rcloneview.com/support/blog/log-debug-troubleshoot-transfers-rcloneview)

<CloudSupportGrid />
