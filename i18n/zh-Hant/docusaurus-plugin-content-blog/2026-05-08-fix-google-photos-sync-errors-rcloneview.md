---
slug: fix-google-photos-sync-errors-rcloneview
title: "修復 Google 相簿同步錯誤 — RcloneView 中的空白相簿庫、403 Forbidden 與唯讀問題"
authors:
  - steve
description: "排解 RcloneView 中常見的 Google 相簿錯誤 — 遠端看起來是空的或顯示沒有變更、因停用的用戶端 ID 或速率限制造成的 403 Forbidden、目的地唯讀錯誤，以及上傳後檔案遺失。"
keywords:
  - Google 相簿同步錯誤 RcloneView
  - Google 相簿空資料夾 rclone
  - Google 相簿 403 用戶端 ID
  - 修復 Google 相簿備份問題
  - Google 相簿 rclone 錯誤
  - Google Photos API 配額錯誤
  - RcloneView Google 相簿疑難排解
  - Google 相簿上傳問題
  - Google 相簿備份修復
tags:
  - RcloneView
  - google-photos
  - troubleshooting
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 修復 Google 相簿同步錯誤 — RcloneView 中的空白相簿庫、403 Forbidden 與唯讀問題

> Google 相簿有其他雲端硬碟所沒有的 API 限制。在 RcloneView 中遇到的多數「錯誤」其實都是 Google 的規則在發揮作用 — 以下說明每種情況的意義與處理方式。

Google 相簿常被用來儲存個人照片，但它的 rclone 後端與一般雲端硬碟的行為大不相同。自 2025 年 3 月 31 日起，Google Photos API 只會向第三方應用程式顯示該應用程式自己上傳的媒體；既有媒體無法透過 API 修改或刪除；而且速率限制比 Google Drive 更嚴格。了解這些限制，是解決在 RcloneView 中使用 Google 相簿時所遇錯誤的第一步。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 遠端看起來是空的 — 「No Changes Detected」或複製了 0 個檔案

最常見的回報：您新增了 Google Photos 遠端，在檔案總管中開啟後幾乎什麼都沒有 — 或是複製到 NAS 的 Copy 作業幾秒就結束，傳輸了零個檔案。其實並沒有任何東西壞掉。2025 年 3 月 31 日，Google 移除了允許第三方應用程式讀取使用者整個相簿庫的 API 範圍。依 Google 的說法，應用程式「現在只能列出、搜尋和擷取由您的應用程式所建立的相簿與媒體項目」。因此 RcloneView 只能看到透過 RcloneView 或 rclone 上傳的照片；手機與網頁上傳的照片不可見，而共用相簿會回傳 `403 PERMISSION_DENIED`。

RcloneView 1.6 及更新版本在您開啟 Google Photos 遠端時，會在應用程式內說明此限制，因此看起來不再像是一個空帳號。

處理方式：使用 **Google Takeout** 匯出您既有的相簿庫 — 最好是傳送到 Google Drive — 再讓 RcloneView 將匯出內容複製到您的外接硬碟、NAS 或其他雲端儲存。完整步驟請參閱 [How to Back Up Google 相簿 to an External Drive or NAS](https://rcloneview.com/support/blog/backup-google-photos-external-drive-nas-rcloneview)。

## 錯誤：「403 Forbidden」— 停用的用戶端 ID 或速率限制

Google 相簿的 `403` 有兩種不同的成因。請查看 RcloneView 的 **Log 分頁**加以區分。

**連線或列出時出現 403 — 共用的用戶端 ID。** rclone 內建的 Google Photos 用戶端 ID 將於 2026 年內停用，Google 現在要求每位使用者以自己的 OAuth 用戶端 ID 連線。如果遠端無法連線或所有請求都被拒絕，原因就在此。當無法建立連線時，RcloneView 1.6 及更新版本會在連線精靈中引導您建立自己的用戶端 ID；rclone 的 [Google 相簿文件](https://rclone.org/googlephotos/#making-your-own-client-id)也說明了在 Google Cloud Console 中的相同步驟。

**上傳時出現 403 與 `userRateLimitExceeded` — 寫入配額。** Google 對透過 API 上傳照片設有每位使用者的每日限制，大量上傳數千張照片可能在傳輸途中觸及限制。請降低傳輸並行數 — 前往作業的進階設定，將檔案傳輸數設為 2 或 3 — 並啟用**失敗時重試**（5 次或以上），讓 RcloneView 重新嘗試被限流的上傳，而不是讓整個作業失敗。必要時，請將非常大量的上傳分散到數天進行。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="在 RcloneView 中監控 Google Photos 上傳速率" class="img-large img-center" />

## 錯誤：「Can't Copy — Destination is Read Only」

如果您看到與目的地唯讀相關的錯誤，表示您正嘗試進行雙向同步，或覆寫 Google 相簿中已存在的照片。Google Photos API 不允許透過 rclone 修改或刪除既有媒體，RcloneView 也遵循這項限制。

解決方式是將作業設定為從來源到 Google 相簿的單向 **Copy**（而非 Sync）。這樣只會上傳新檔案，不會嘗試刪除或覆寫 Google 相簿端的任何內容。如果需要刪除照片，請在 Google 相簿網頁版或行動版應用程式中操作。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="在 RcloneView 中設定複製到 Google Photos 的 Copy 作業" class="img-large img-center" />

## 上傳後檔案遺失

Google 相簿依相簿與建立日期整理媒體，而非依照您原本的資料夾結構。當您將資料夾階層複製到 Google 相簿時，檔案會進入相簿庫，但不會保留您預期的資料夾 — API 不會保留資料夾結構。另請注意，透過 API 下載回來的照片並非原始解析度，且會遺失 EXIF 位置資料。

若要保留資料夾組織，請改為複製到 Google Drive，子目錄會與來源完全一致地保留。若要建立真正的照片封存，Backblaze B2 或 Amazon S3 搭配原始資料夾樹狀結構的副本，是更可靠的長期選擇。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="檢視 Google Photos 作業後的作業歷史記錄" class="img-large img-center" />

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 如果遠端看起來是空的，那是 Google 的 API 限制 — 請用 Google Takeout 匯出您既有的相簿庫，再用 RcloneView 複製匯出內容。
3. 連線時出現 403，請建立您自己的 OAuth 用戶端 ID；出現 `userRateLimitExceeded` 時，請將並行數降至 2–3 並增加重試次數。
4. 上傳到 Google 相簿時，請使用 **Copy** 作業類型，而非 Sync。

了解自己觸及的是 Google 的哪一項規則，就能第一次就正確設定 RcloneView，避免令人沮喪的反覆重試。

---

**Related Guides:**

- [如何將 Google 相簿備份到外接硬碟或 NAS — Google Takeout + RcloneView](https://rcloneview.com/support/blog/backup-google-photos-external-drive-nas-rcloneview)
- [修復 Google Drive 配額與速率限制錯誤](https://rcloneview.com/support/blog/fix-google-drive-quota-rate-limit-api-errors)
- [透過瀏覽器登入 (OAuth) 新增遠端](https://rcloneview.com/support/howto/remote-storage-connection-settings/add-oath-online-login)

<CloudSupportGrid />
