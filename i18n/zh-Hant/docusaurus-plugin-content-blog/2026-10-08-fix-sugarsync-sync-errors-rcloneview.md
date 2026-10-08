---
slug: fix-sugarsync-sync-errors-rcloneview
title: "修復 SugarSync 同步錯誤 — 用 RcloneView 解決授權、傳輸與檔案遺失問題"
authors:
  - morgan
description: "使用 RcloneView 的記錄檔、作業歷程與 Folder Compare,排查 SugarSync 授權失敗、傳輸中斷與檔案遺失等同步錯誤。"
keywords:
  - 修復 SugarSync 同步錯誤
  - SugarSync rclone 錯誤
  - SugarSync 授權失敗
  - SugarSync 上傳失敗
  - SugarSync 疑難排解
  - RcloneView SugarSync
  - rclone SugarSync 遠端
  - 雲端同步疑難排解
  - SugarSync GUI
tags:
  - RcloneView
  - sugarsync
  - troubleshooting
  - tips
  - cloud-sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 修復 SugarSync 同步錯誤 — 用 RcloneView 解決授權、傳輸與檔案遺失問題

> SugarSync 作業失敗時,RcloneView 的作業歷程、DEBUG 記錄檔與 Folder Compare 可以幫助你判斷原因出在遠端、傳輸負載,還是檔案根本沒有送達。

SugarSync 同步因含糊的錯誤而中止,或結束後資料夾看起來不完整,光靠命令列很難診斷。RcloneView 將遠端檢查、作業紀錄、記錄檔與並排比較集中在同一個視窗,讓你依據證據排查,而不是盲目重新執行。RcloneView 可在 Windows、macOS 與 Linux 上,從單一視窗掛載並同步 90 多個提供者。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 確認遠端仍可連線

如果作業在幾秒內失敗,應先懷疑遠端,而不是資料。在 Remote 分頁中開啟 Remote Manager,編輯 SugarSync 遠端,若帳號資訊已變更,請重新授權。接著在 Explorer 面板中開啟該遠端並瀏覽根資料夾。若能正常列出內容,表示連線正常,問題出在其他地方。

你也可以在內建的 Terminal 分頁中執行 `rclone about "remote:"`(將 `remote` 替換為你的遠端名稱),快速檢查帳號是否有回應。

<img src="/support/images/en/blog/new-remote.png" alt="在 RcloneView Remote Manager 中編輯 SugarSync 遠端" class="img-large img-center" />

## 查看作業歷程並開啟 DEBUG 記錄

開啟 Job History,查看失敗那次執行的狀態、耗時與檔案數量。中途出錯的作業通常指向特定檔案或傳輸負載,而不是憑證問題。

若要查看每個檔案的確切錯誤訊息,請前往 Settings > Embedded Rclone,啟用 rclone 記錄,將層級設為 DEBUG,然後點選 Restart Embedded Rclone。重現問題後,在 Log 分頁或你設定的記錄資料夾中查看記錄檔。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="RcloneView 作業歷程中顯示出錯的 SugarSync 作業" class="img-large img-center" />

## 降低並行數並預覽重新執行

間歇性的上傳失敗,通常在同時傳輸的檔案變少後得到緩解。在同步精靈的第 2 步中,減少檔案傳輸數量,並將 equality checkers 設為 4 或更低,這是針對慢速後端的建議。將「Retry entire sync if fails」維持為 3,讓暫時性失敗最多重試三次。

重新執行之前,先用 Dry Run 檢視哪些檔案會被複製或刪除,避免重試帶來意外結果。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="在 RcloneView 中以較低並行數重新執行 SugarSync 作業" class="img-large img-center" />

## 使用 Folder Compare 驗證

重新執行後,開啟 Compare,一側放本機資料夾,另一側放 SugarSync。依僅左側、僅右側與不同的檔案進行篩選,找出仍然遺失或不一致的項目,然後只複製這些項目,而不必重複整個作業。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder Compare 列出 SugarSync 中遺失的檔案" class="img-large img-center" />

## 開始使用

1. **下載 RcloneView**:從 [rcloneview.com](https://rcloneview.com/src/download.html) 取得。
2. 在 Remote Manager 中重新授權 SugarSync 遠端,並確認根資料夾可以列出。
3. 查看 Job History,並為失敗的作業啟用 DEBUG 記錄。
4. 降低並行數,執行 Dry Run,重新執行,並用 Folder Compare 確認結果。

一旦在記錄檔與比較結果中看清原因,SugarSync 故障就能透過簡短、可重複的步驟解決。

---

**相關指南:**

- [管理 SugarSync 儲存空間 — 使用 RcloneView 同步與備份檔案](https://rcloneview.com/support/blog/manage-sugarsync-cloud-sync-backup-rcloneview)
- [使用 RcloneView 將 SugarSync 遷移到 Backblaze B2](https://rcloneview.com/support/blog/migrate-sugarsync-to-backblaze-b2-rcloneview)
- [使用 RcloneView 修復 OpenDrive 同步錯誤](https://rcloneview.com/support/blog/fix-opendrive-sync-errors-rcloneview)

<CloudSupportGrid />
