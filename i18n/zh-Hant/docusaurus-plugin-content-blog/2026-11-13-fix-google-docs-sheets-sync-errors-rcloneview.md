---
slug: fix-google-docs-sheets-sync-errors-rcloneview
title: "解決 Google 文件與試算表同步問題 — 用 RcloneView 處理原生檔案"
authors:
  - casey
description: "Google 文件、試算表與簡報一再被重新複製，或總是顯示為不同？了解原生檔案為何表現不同，以及如何在 RcloneView 同步工作中處理它們。"
keywords:
  - google 文件 同步錯誤
  - google 試算表 備份問題
  - google drive 原生檔案 同步
  - google docs export rclone
  - google docs 篩選器 rcloneview
  - google drive 備份 docx xlsx
  - rclone drive 匯出格式
  - rcloneview 修正 google drive 同步
  - google workspace 檔案備份
tags:
  - RcloneView
  - troubleshooting
  - tips
  - google-drive
  - filters
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 解決 Google 文件與試算表同步問題 — 用 RcloneView 處理原生檔案

> Google 文件、試算表與簡報並非一般檔案，忽略這項差異的備份工作會不斷帶來意外。

你將 Google Drive 備份到 NAS 或另一個雲端，工作順利完成 — 但文件與試算表變成了 Word 和 Excel 檔案，Folder Compare 每次都將它們標示為不同，或下次執行時它們又出現在複製清單中。這些都不代表傳輸出了問題。RcloneView 透過 rclone 執行這些工作，了解 rclone 如何處理 Google 原生文件，就能選擇你真正想要的行為。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 原生 Google 檔案為何表現不同

Google 文件只存在於 Google 的編輯器中，背後沒有儲存的二進位檔案。當 rclone 從 Google Drive 將其複製到非 Google 目的地時，會把文件匯出為可下載的格式 — 預設為 `.docx`、`.xlsx`、`.pptx` 等 Office 格式。

這種轉換有副作用。Drive 不會回報原生文件的固定大小，因此以大小為基礎的比較無法將其與匯出的副本對應。Drive 也不會為它們儲存 MD5 雜湊，因此在同步工作中啟用總和檢查碼也無法驗證它們。結果就是一組每次檢查都顯示「不同」的檔案。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder Compare showing Google Docs flagged as different files" class="img-large img-center" />

## 選項 1：從檔案備份中排除原生文件

如果你的團隊只需要備份上傳的檔案 — PDF、圖片、影片 — 最乾淨的做法是將原生文件排除在外。在同步精靈的 Step 3 中，啟用預先定義的 **Google Docs** 篩選器。這樣工作會專注於一般檔案，不再重複列出無法比較的文件。

在第一次正式執行前搭配 **Dry Run** 使用。預覽會精確列出將被複製的檔案，你可以確認文件與試算表已不在佇列中。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a Google Drive sync job with the Google Docs filter applied" class="img-large img-center" />

## 選項 2：刻意保留匯出的副本

有時匯出的副本本身就是目的 — 例如會計事務所可能希望將每份試算表以 `.xlsx` 格式封存在 NAS 上，無需 Google 帳戶即可開啟。這種情況下，請在工作中保留原生檔案，並將轉換後的副本視為封存。

你可以透過 rclone 旗標變更匯出格式。在 Settings 中，**Global Rclone Flags** 欄位可接受 `--drive-export-formats` 等額外旗標（例如用於唯讀封存的 `pdf`）。由於此旗標會套用到所有涉及 Google Drive 的工作，請先在小資料夾上用 Dry Run 測試。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Configuring a recurring Google Drive export job in RcloneView" class="img-large img-center" />

## 在 Job History 中檢查結果

每次執行後，開啟 Job History 檢視狀態、檔案數與總大小。若各次執行之間的數量出現意外波動，請重新檢查 Step 3 的篩選規則。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Reviewing Google Drive job results in Job History" class="img-large img-center" />

## 開始使用

與僅支援掛載的工具不同，RcloneView 在 FREE 授權下也能同步與比較資料夾。

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 透過 OAuth 瀏覽器登入連接 Google Drive。
3. 決定要用 Google Docs 篩選器排除原生文件，還是將其匯出為 Office 檔案。
4. 用 Dry Run 預覽工作，執行後在 Job History 中確認結果。

刻意處理原生檔案後，你的 Google Drive 備份就不會再產生誤報。

---

**相關指南：**

- [解決 Google Drive 同步錯誤 — 用 RcloneView 解決資料夾遺失、工作失敗與清單空白的問題](https://rcloneview.com/support/blog/fix-google-drive-sync-errors-rcloneview)
- [RcloneView 篩選規則：排除資料夾與檔案類型，讓同步更快更整潔](https://rcloneview.com/support/blog/filter-rules-selective-sync-rcloneview)
- [Dry Run 預覽 — 在 RcloneView 中套用變更前測試雲端同步](https://rcloneview.com/support/blog/dry-run-preview-cloud-sync-rcloneview)

<CloudSupportGrid />
