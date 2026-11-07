---
slug: fix-yandex-disk-sync-errors-rcloneview
title: "修復 Yandex Disk 同步錯誤 — 使用 RcloneView 診斷並解決傳輸失敗"
authors:
  - kai
description: "使用 RcloneView 修復 Yandex Disk 同步錯誤：重新授權 OAuth、調整 checkers 與重試次數、查看 DEBUG 日誌，並透過 Dry Run 與 Folder Compare 驗證結果。"
keywords:
  - 修復 Yandex Disk 同步錯誤
  - Yandex Disk 傳輸失敗
  - Yandex Disk OAuth 重新授權
  - RcloneView Yandex Disk 疑難排解
  - Yandex Disk 同步無法運作
  - rclone Yandex 錯誤
  - 雲端同步疑難排解
  - rclone 除錯日誌
  - Yandex Disk 備份失敗
  - Yandex Disk 作業出錯
tags:
  - RcloneView
  - yandex-disk
  - troubleshooting
  - tips
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 修復 Yandex Disk 同步錯誤 — 使用 RcloneView 診斷並解決傳輸失敗

> 一步步找出 Yandex Disk 作業為何出錯，並在不重新複製全部檔案的情況下修復。

Yandex Disk 作業在 Job History 中以「Errored」結束，令人沮喪，尤其是在夜間執行的情況下。大多數失敗可歸為幾類：登入過期、對慢速後端平行度過高，或是路徑與篩選條件設定錯誤。RcloneView 提供了區分這些情況所需的設定與日誌。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 從 Job History 與 Log 分頁開始

開啟 **Job History** 並找到失敗的執行。其狀態、耗時、總大小與檔案數可以顯示作業是立即失敗（可能是驗證或路徑問題）還是中途失敗（可能是節流或某個特定檔案）。接著在底部 Info View 的 **Log** 分頁中查看失敗前後帶有時間戳記的項目。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="RcloneView 中顯示出錯執行的 Job History" class="img-large img-center" />

如果日誌資訊不足，請前往 Settings > Embedded Rclone，啟用 rclone Logging，將等級設為 DEBUG，點擊 Restart Embedded Rclone，然後重現問題。產生的檔案會準確顯示哪個操作失敗。

## 重新授權已過期或被拒絕的登入

Yandex Disk 透過瀏覽器中的 OAuth 連線。如果列出資料夾立即失敗，或每個檔案都因授權訊息而出錯，請開啟 Remote Manager，編輯 Yandex Disk 遠端，並重新完成瀏覽器登入。然後重新整理 Explorer 面板。成功列出內容即可在執行任何作業之前確認連線正常。

<img src="/support/images/en/blog/new-remote.png" alt="在 RcloneView 中編輯並重新授權遠端" class="img-large img-center" />

## 為較慢的後端調整作業設定

如果錯誤只出現在大型作業中，請降低負載。在 Sync 精靈的 Advanced Settings 中減少檔案傳輸數，並對慢速後端將 equality checkers 維持在 4 或更少（預設值為 8）。整體同步重試次數預設為 3 次，對暫時性故障很有用，請保持啟用。如果需要確認內容而不僅僅是大小，可以考慮啟用 checksum。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="RcloneView 中的進階作業設定與排程" class="img-large img-center" />

## 無需重新複製即可確認修復結果

執行 **Dry Run** 查看仍會傳輸哪些內容，然後再次執行作業。開啟 **Compare**，將 Yandex Disk 與來源進行比對：left-only 或 different 的檔案即為剩餘內容，您可以只複製這些檔案。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="使用 Folder Compare 確認剩餘差異" class="img-large img-center" />

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 在 Job History 與 Log 分頁中檢查失敗的執行。
3. 如果列出內容失敗，請重新授權 Yandex Disk 遠端。
4. 降低傳輸數與 checkers，執行 Dry Run，然後重新執行並 Compare。

有條理的診斷能把含糊的「Errored」狀態變成一份簡短且可修復的清單。

---

**相關指南：**

- [修復 Yandex Disk 配額已滿錯誤](https://rcloneview.com/support/blog/fix-yandex-disk-quota-full-errors-rcloneview)
- [管理 Yandex Disk 雲端同步與備份](https://rcloneview.com/support/blog/manage-yandex-disk-cloud-sync-backup-rcloneview)
- [將 Yandex Disk 同步到 Google Drive 與 S3](https://rcloneview.com/support/blog/sync-yandex-disk-google-drive-s3-rcloneview)

<CloudSupportGrid />
