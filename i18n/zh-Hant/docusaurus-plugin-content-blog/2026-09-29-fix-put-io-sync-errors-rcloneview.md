---
slug: fix-put-io-sync-errors-rcloneview
title: "修復 Put.io 同步錯誤 — 使用 RcloneView 診斷並解決"
authors:
  - kai
description: "使用 RcloneView 修復 Put.io 同步錯誤:重新授權 OAuth、調整傳輸設定、查看作業歷史與日誌,並以 Folder Compare 驗證結果。"
keywords:
  - 修復 put.io 同步錯誤
  - put.io 驗證錯誤
  - put.io 傳輸失敗
  - putio rclone 錯誤
  - RcloneView put.io
  - put.io oauth 重新授權
  - 雲端同步疑難排解
  - put.io 下載失敗
  - rclone 日誌除錯
  - put.io 同步 GUI
tags:
  - RcloneView
  - troubleshooting
  - tips
  - putio
  - cloud-sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 修復 Put.io 同步錯誤 — 使用 RcloneView 診斷並解決

> 從過期授權到過度並行,運用 RcloneView 內建工具逐一排查 Put.io 傳輸失敗的常見原因。

Put.io 同步中途停止,常讓人無從判斷:是登入問題、網路問題,還是作業設定問題?RcloneView 把線索集中在同一處。Transferring 分頁、Job History 與日誌檢視器各自呈現不同的資訊,而 Folder Compare 會告訴您之後還缺少哪些檔案。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 先檢查授權

Put.io 透過瀏覽器式 OAuth 連線。如果作業一開始就因驗證或權限錯誤而失敗,首先應懷疑已儲存的授權。在 Remote 分頁中開啟 **Remote Manager**,編輯 Put.io 遠端,並重新完成瀏覽器登入。請確認登入的是存放檔案的同一個 Put.io 帳號,因為同一瀏覽器中登入了另一個帳號,是清單顯示為空的常見原因。

<img src="/support/images/en/blog/new-remote.png" alt="在 RcloneView 中重新授權 Put.io 遠端" class="img-large img-center" />

重新授權後,按 F5(macOS 上為 Cmd+R)重新整理 Put.io 面板,並在重新執行任何作業之前確認資料夾能正常列出。

## 查看 Job History 與日誌

作業中途失敗時,請開啟 **Job History**。每次執行都會記錄執行類型、開始時間、耗時、狀態(Completed、Errored 或 Canceled)、總大小、速度與檔案數。將失敗的執行與先前成功的執行比較,可以看出它是早期失敗(指向憑證問題),還是後期失敗(指向網路或資料量問題)。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="顯示 Errored 與 Completed 的 Put.io 執行的 Job History" class="img-large img-center" />

如需詳細資訊,請在 **Settings > Embedded Rclone** 中開啟檔案日誌,將日誌等級設為 DEBUG,然後按一下 Restart Embedded Rclone。重現問題後,在日誌分頁中查看出錯的檔案與錯誤文字。您也可以在 Terminal 分頁中執行 `rclone about "putio:"`(使用您自己的遠端名稱),以確認遠端有回應。

## 調整作業設定

遠端服務上的傳輸失敗,往往是自己造成的。在同步精靈的 Advanced Settings 中,降低 **Number of file transfers** 與 **Number of equality checkers**;對於速度較慢的後端,建議將 checkers 維持在 4 以下。將 **Retry entire sync if fails** 保持預設值 3,短暫的中斷即可自行復原。如果問題出在超大檔案,可使用最大檔案大小篩選器,先處理較小的檔案,再另外處理其餘檔案。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="調整設定後執行 Put.io 同步作業" class="img-large img-center" />

## 確認缺少哪些檔案

重新執行後,開啟 **Compare**,一側選擇 Put.io,另一側選擇目的地。Left-only 檔案就是未能抵達的檔案,**Copy right** 只會傳送這些檔案。RcloneView 在 FREE 授權下就提供此功能,與掛載和同步一樣,因此無需升級即可完成復原。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder Compare 列出目的地中仍缺少的檔案" class="img-large img-center" />

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 在 Remote Manager 中重新授權 Put.io 遠端並重新整理清單。
3. 查看 Job History;如果原因不明顯,請啟用 DEBUG 日誌。
4. 降低並行數後重新執行,再使用 Compare 複製剩餘的檔案。

先讀懂證據,就能把模糊的失敗變成具體、可修復的設定。

---

**相關指南:**

- [管理 Put.io 儲存空間](https://rcloneview.com/support/blog/manage-put-io-cloud-sync-backup-rcloneview)
- [將 Put.io 遷移到 Google Drive](https://rcloneview.com/support/blog/migrate-put-io-to-google-drive-rcloneview)
- [修復 OAuth 權杖過期導致的雲端同步錯誤](https://rcloneview.com/support/blog/fix-oauth-token-expired-cloud-sync-rcloneview)

<CloudSupportGrid />
