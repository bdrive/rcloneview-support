---
slug: fix-google-drive-sync-errors-rcloneview
title: "修復 Google Drive 同步錯誤 — 使用 RcloneView 解決資料夾遺失、工作失敗與清單為空的問題"
authors:
  - steve
description: "使用 RcloneView 記錄檔與 Folder Compare 排查 Google Drive 同步錯誤，例如共用資料夾遺失、Computers 清單為空以及工作出錯。"
keywords:
  - 修復 Google Drive 同步錯誤
  - Google Drive rclone 錯誤
  - Google Drive 與我共用 遺失
  - Google Drive Computers 資料夾為空
  - Google Drive 同步失敗
  - RcloneView Google Drive
  - Google Docs 同步篩選器
  - Google Drive 疑難排解
  - 雲端同步疑難排解
  - Google Drive GUI
tags:
  - RcloneView
  - google-drive
  - troubleshooting
  - tips
  - cloud-sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 修復 Google Drive 同步錯誤 — 使用 RcloneView 解決資料夾遺失、工作失敗與清單為空的問題

> 許多 Google Drive 同步問題都源於缺少設定、登入過期或篩選器，RcloneView 可協助您找出確切原因。

Google Drive 工作以 Errored 結束，或遠端沒有列出您預期的內容，只要能查看記錄檔，原因通常並不神秘。常見原因包括需要特定設定的共用資料夾、需要資料夾 ID 的已備份電腦，以及行為與一般檔案不同的 Google Docs 檔案。RcloneView 將遠端設定、工作歷程與記錄檔集中在同一處，幫助您快速縮小範圍。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 未顯示的資料夾

如果與您共用的檔案沒有出現在根目錄清單中，該遠端可能需要 `shared_with_me = true` 設定，它可提供 Google Drive Shared with Me 檢視。來自 Drive for desktop 的已備份電腦則是另一種情況：Google Drive Computers 遠端需要將 `root_folder_id` 設定為該電腦的 ID。

在 Remote 分頁中開啟 Remote Manager，編輯該遠端並檢查這些值。接著按 F5 重新整理 Explorer 面板。

<img src="/support/images/en/blog/new-remote.png" alt="在 RcloneView Remote Manager 中編輯 Google Drive 遠端設定" class="img-large img-center" />

## 登入過期與授權失敗

Google Drive 透過瀏覽器 OAuth 連線。如果所有請求都因授權錯誤而失敗，請編輯該遠端並重新登入，以取得新的權杖。對於先前正常運作的遠端突然失敗的情況，這是常見的解決方式。

關於配額與速率限制的訊息，請參閱我們關於 Google Drive 速率限制與儲存配額的專屬指南。無論哪種情況，在同步精靈的第 2 步降低檔案傳輸數量都是合理的第一步。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="RcloneView 的 Job History 顯示出錯的 Google Drive 同步" class="img-large img-center" />

## 透過記錄檔查看確切錯誤

開啟 Job History，查看工作是立即失敗還是中途失敗。如需詳細資訊，請前往 Settings > Embedded Rclone，啟用 rclone 記錄，將等級設為 DEBUG，然後點選 Restart Embedded Rclone。重現故障後閱讀記錄檔：其中會列出檔案與錯誤。您也可以在內建的 Terminal 分頁中執行 `rclone about "remote:"` 等指令來確認連線狀況。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="修正設定後重新執行 Google Drive 工作" class="img-large img-center" />

## 處理 Google Docs 並驗證結果

Google Docs、Sheets 與 Slides 並非一般檔案，因此傳輸後看起來可能有所不同。若想排除它們，同步精靈第 3 步包含預先定義的 Google Docs 篩選器。重新執行後，使用 Compare 檢查兩側：僅左側、僅右側以及不同的檔案會顯示仍需處理的項目。在可能刪除檔案的同步之前，請先執行 Dry Run。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="使用 Folder Compare 驗證 Google Drive 同步" class="img-large img-center" />

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 檢查遠端是否有 `shared_with_me` 或 `root_folder_id`，必要時重新授權。
3. 檢視 Job History，並為出錯的工作啟用 DEBUG 記錄。
4. 執行 Dry Run，重新執行工作，然後使用 Folder Compare 驗證。

設定、記錄檔與比較都集中在同一個視窗中，失敗的 Drive 工作就變成一份簡短的檢查清單。

---

**相關指南：**

- [管理 Google Drive 儲存空間 — 使用 RcloneView 同步與備份檔案](https://rcloneview.com/support/blog/manage-google-drive-cloud-sync-backup-rcloneview)
- [使用 RcloneView 修復 Google Drive 403 速率限制錯誤](https://rcloneview.com/support/blog/fix-google-drive-403-rate-limit-errors-rcloneview)
- [使用 RcloneView 修復 Google Drive 儲存配額已滿問題](https://rcloneview.com/support/blog/fix-google-drive-storage-quota-exceeded-rcloneview)

<CloudSupportGrid />
