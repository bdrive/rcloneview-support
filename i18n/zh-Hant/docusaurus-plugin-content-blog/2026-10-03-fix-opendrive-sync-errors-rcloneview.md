---
slug: fix-opendrive-sync-errors-rcloneview
title: "修復 OpenDrive 同步錯誤 — 使用 RcloneView 解決登入、上傳與列表問題"
authors:
  - kai
description: "藉由 RcloneView 的作業歷程、日誌與 Folder Compare，排查登入失敗、上傳中斷與檔案遺失等 OpenDrive 同步錯誤。"
keywords:
  - 修復 OpenDrive 同步錯誤
  - OpenDrive rclone 錯誤
  - OpenDrive 登入失敗
  - OpenDrive 上傳失敗
  - OpenDrive 疑難排解
  - RcloneView OpenDrive
  - rclone OpenDrive 遠端
  - 雲端同步疑難排解
  - OpenDrive GUI
tags:
  - RcloneView
  - opendrive
  - troubleshooting
  - tips
  - cloud-sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 修復 OpenDrive 同步錯誤 — 使用 RcloneView 解決登入、上傳與列表問題

> 當 OpenDrive 同步失敗時，RcloneView 中的作業歷程、日誌與 Folder Compare 可以顯示原因是憑證、傳輸負載，還是檔案根本沒有抵達。

同步失敗很少會自己說明原因。作業可能立即停止，可能在缺少部分檔案的情況下結束，也可能留下一個看起來不完整的資料夾。與其盲目重新執行，不如查看 RcloneView 的作業歷程、開啟 DEBUG 日誌，並比對兩側內容來找出真正的原因。RcloneView 可在 Windows、macOS 與 Linux 上透過單一視窗掛載並同步 90 多個供應商。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 排除連線與憑證問題

如果作業在數秒內失敗，請懷疑遠端本身。在 Remote 分頁中開啟 Remote Manager，編輯 OpenDrive 遠端並重新輸入帳號資訊。接著在 Explorer 面板中開啟該遠端並瀏覽根資料夾。如果能正常列出，代表連線正常，問題出在其他地方。

你也可以在內建的 Terminal 分頁中執行 `rclone about "remote:"`，確認帳號能夠回應，其中 `remote` 請替換為你的遠端名稱。

<img src="/support/images/en/blog/new-remote.png" alt="在 RcloneView Remote Manager 中編輯 OpenDrive 遠端" class="img-large img-center" />

## 檢視作業歷程並啟用 DEBUG 日誌

開啟 Job History，查看失敗執行的狀態、持續時間與檔案數量。作業在中途出錯，通常指向某個特定檔案或傳輸負載問題，而不是登入錯誤。

若要查看每個檔案的具體訊息，請前往 Settings > Embedded Rclone，啟用 rclone 日誌，將等級設為 DEBUG，然後重新啟動內建 rclone。重現問題後，在 Log 分頁或你設定的日誌資料夾中閱讀日誌。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="顯示出錯 OpenDrive 作業的 RcloneView 作業歷程" class="img-large img-center" />

## 降低中斷傳輸的負載

間歇性失敗的上傳通常在同時傳輸的檔案減少後獲得改善。在同步精靈的第 2 步中，降低檔案傳輸數與 equality checker 數(對於較慢的後端，建議不超過 4)。將 "Retry entire sync if fails" 維持為 3，暫時性失敗就會自動重試。

重新執行之前，先使用 Dry Run 確認將要複製或刪除的檔案清單符合預期。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="在 RcloneView 中以較低並行數重新執行 OpenDrive 作業" class="img-large img-center" />

## 使用 Folder Compare 驗證

重新執行後，開啟 Compare，一側選擇本機資料夾，另一側選擇 OpenDrive。依 left-only、right-only 與 different 檔案篩選，即可準確看出仍然遺失或不一致的項目，然後只複製這些項目，而不必重複整個作業。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="顯示 OpenDrive 上遺失檔案的 Folder Compare" class="img-large img-center" />

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 在 Remote Manager 中重新輸入 OpenDrive 憑證，並確認能列出根資料夾。
3. 檢視失敗作業的 Job History 並啟用 DEBUG 日誌。
4. 降低並行數，執行 Dry Run，重新執行，並以 Folder Compare 確認。

透過日誌與比對找出原因後，OpenDrive 的問題就能成為一次簡短且可重複的修復。

---

**相關指南：**

- [管理 OpenDrive 儲存 — 使用 RcloneView 同步與備份檔案](https://rcloneview.com/support/blog/manage-opendrive-cloud-sync-backup-rcloneview)
- [使用 RcloneView 修復 Gofile 同步錯誤](https://rcloneview.com/support/blog/fix-gofile-sync-errors-rcloneview)
- [使用 RcloneView 修復雲端同步卡住與停滯問題](https://rcloneview.com/support/blog/fix-cloud-sync-stuck-hanging-rcloneview)

<CloudSupportGrid />
