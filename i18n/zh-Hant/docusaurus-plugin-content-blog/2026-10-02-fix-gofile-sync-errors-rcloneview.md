---
slug: fix-gofile-sync-errors-rcloneview
title: "修復 Gofile 同步錯誤 — 使用 RcloneView 解決權杖、上傳和清單問題"
authors:
  - jay
description: "藉由 RcloneView 的工作記錄、日誌和內建終端機，排查權杖無效、上傳失敗和清單為空等 Gofile 同步錯誤。"
keywords:
  - 修復 Gofile 同步錯誤
  - Gofile rclone 錯誤
  - Gofile 權杖無效
  - Gofile 上傳失敗
  - Gofile 疑難排解
  - RcloneView Gofile
  - Gofile 帳戶 API 權杖
  - rclone Gofile 遠端
  - 雲端同步疑難排解
  - Gofile GUI
tags:
  - RcloneView
  - gofile
  - troubleshooting
  - tips
  - cloud-sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 修復 Gofile 同步錯誤 — 使用 RcloneView 解決權杖、上傳和清單問題

> 大多數 Gofile 同步失敗都可歸結為幾個原因:過期的權杖、錯誤的根資料夾,或需要重試的傳輸,而 RcloneView 能在工作記錄和日誌中讓您逐一查看。

Gofile 使用帳戶 API 權杖而不是瀏覽器登入進行驗證,因此錯誤通常表現為 "unauthorized" 訊息或看起來為空的資料夾。與其在命令列中猜測,不如使用 RcloneView 的工作記錄、日誌和終端機,準確查看是哪一步失敗了。RcloneView 可在 Windows、macOS 和 Linux 上,透過一個視窗掛載並同步 90 多個提供者。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 先檢查帳戶 API 權杖

最常見的失敗原因是權杖無效或已過期。Gofile 權杖位於 Gofile 個人資料頁面的 Account API Token 欄位中。如果您重新產生了權杖,或貼上時尾端帶有空格,所有請求都會被拒絕。

在 Remote 分頁中開啟 Remote Manager,編輯 Gofile 遠端,然後重新貼上權杖。接著在 Explorer 面板中瀏覽該遠端的根目錄。如果清單能夠載入,表示驗證沒有問題,問題出在別處。

<img src="/support/images/en/blog/new-remote.png" alt="在 RcloneView 中編輯 Gofile 遠端並重新輸入帳戶 API 權杖" class="img-large img-center" />

## 查看工作記錄和日誌

當排程工作或手動工作以 Errored 狀態結束時,請開啟 Job History。每個項目都會記錄執行類型、持續時間、狀態、大小和檔案數,因此您可以判斷工作是立即失敗(通常是驗證問題)還是中途失敗(通常是網路或檔案層級問題)。

如需更多細節,請在 Settings > Embedded Rclone 下啟用 rclone 日誌,將等級設定為 DEBUG,重新啟動內建 rclone,然後重現故障。日誌會顯示每個檔案傳回的確切錯誤。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="RcloneView 工作記錄顯示出錯的 Gofile 同步工作" class="img-large img-center" />

## 透過 Dry Run 找出上傳失敗原因

如果只有部分檔案失敗,請先執行 Dry Run。它會列出將被複製或刪除的內容而不做任何變更,因此您可以確認來源和目的地是否符合預期。然後在同步精靈的第 2 步中降低檔案傳輸數量,並將 "Retry entire sync if fails" 保持為預設值 3。減少並行傳輸通常能消除間歇性的上傳錯誤。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="在 RcloneView 中調整傳輸設定後執行 Gofile 同步工作" class="img-large img-center" />

## 使用 Folder Compare 驗證

重新執行後,使用 Compare 將本機資料夾與 Gofile 資料夾並排比較。僅左側、僅右側和不同檔案的篩選器會準確顯示仍然缺少的內容,因此無需重新上傳所有檔案。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder Compare 檢視醒目標示 Gofile 上缺少的檔案" class="img-large img-center" />

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 在 Remote Manager 中重新輸入 Gofile 的 Account API Token,並確認根資料夾可以列出。
3. 如果工作為 Errored,請查看 Job History 並啟用 DEBUG 日誌。
4. 執行 Dry Run,減少並行傳輸數,然後使用 Folder Compare 驗證。

清楚掌握權杖、日誌和差異,就能把含糊不清的 Gofile 故障變成快速修復。

---

**相關指南:**

- [管理 Gofile 儲存空間 — 使用 RcloneView 同步和備份檔案](https://rcloneview.com/support/blog/manage-gofile-cloud-sync-backup-rcloneview)
- [使用 RcloneView 修復 Put.io 同步錯誤](https://rcloneview.com/support/blog/fix-put-io-sync-errors-rcloneview)
- [使用 RcloneView 修復雲端同步卡住和當機](https://rcloneview.com/support/blog/fix-cloud-sync-stuck-hanging-rcloneview)

<CloudSupportGrid />
