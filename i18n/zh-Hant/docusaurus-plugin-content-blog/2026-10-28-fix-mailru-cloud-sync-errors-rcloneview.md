---
slug: fix-mailru-cloud-sync-errors-rcloneview
title: "修復 Mail.ru Cloud 同步錯誤 — RcloneView 疑難排解指南"
authors:
  - casey
description: "解決 RcloneView 中常見的 Mail.ru Cloud 同步失敗問題:驗證錯誤、逾時、被略過的檔案與不一致,並提供實用的修復方法。"
keywords:
  - 修復 mail.ru cloud 同步錯誤
  - mailru cloud 同步失敗
  - mail.ru cloud rcloneview
  - mailru 驗證錯誤
  - mailru 逾時
  - mail.ru cloud 疑難排解
  - 雲端同步錯誤
  - rcloneview 疑難排解
  - mailru 備份錯誤
tags:
  - RcloneView
  - mailru
  - troubleshooting
  - tips
  - cloud-sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 修復 Mail.ru Cloud 同步錯誤 — RcloneView 疑難排解指南

> RcloneView 中的 Mail.ru Cloud 同步失敗大多源於憑證、並行數或篩選器,只需點擊幾下即可修復。

當 Mail.ru Cloud 作業停滯或回報錯誤時,原因很少是神祕莫測的。RcloneView 會在 Job History 和 Log 分頁中記錄每次執行,因此你可以將訊息對應到已知原因。本指南介紹最常見的問題以及解決它們的設定。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 驗證與連線失敗

如果上週還能正常運作的作業現在立即失敗,首先應懷疑已儲存的憑證。開啟 Remote Manager,選取 Mail.ru Cloud 遠端並編輯,重新輸入帳號資訊;如果帳號啟用了額外的安全措施,請確認你輸入的憑證是該服務接受用於第三方存取的憑證。儲存後,在 Explorer 面板中瀏覽該遠端。如果資料夾清單能夠載入,表示連線正常,問題出在作業本身。

<img src="/support/images/en/blog/new-remote.png" alt="在 RcloneView 中重新建立 Mail.ru Cloud 遠端" class="img-large img-center" />

## 逾時與停滯的傳輸

傳輸緩慢或中斷通常表示相對於連線而言並行數過高。在作業的 Advanced Settings 中,降低 Number of file transfers,並將 Number of equality checkers 設為 4 或更低,因為較慢的後端在平行檢查較少時表現更好。對於長時間執行的作業,將 "Retry entire sync if fails" 提高到預設值 3 以上,讓暫時性的網路中斷可以自動恢復。觀察 Transferring 分頁,確認速度趨於穩定。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="在 Transferring 分頁中監控 Mail.ru Cloud 傳輸" class="img-large img-center" />

## 缺漏或不相符的檔案

如果同步完成後檔案看起來不同,請在來源與 Mail.ru Cloud 遠端之間執行 Compare。顯示 left-only 檔案即可找出從未抵達的內容,並可直接在比較檢視中複製過去。對於內容不相符的情況,請在 Sync 精靈的第 2 步啟用核對碼選項,這樣檔案會以雜湊值和大小進行比較,而不只是依靠時間戳記。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="比較資料夾以找出 Mail.ru Cloud 上缺少的檔案" class="img-large img-center" />

## 篩選器、Dry Run 與 Job History

作業也可能依設計略過檔案。請檢查第 3 步 Filtering Settings 中是否有你忘記的最大檔案大小、最大檔案存在時間或自訂排除規則。接著執行 Dry Run,在動到真實資料之前確切查看哪些檔案將被複製或刪除。之後,開啟 Job History,將狀態、大小和檔案數與先前成功的執行進行比較。RcloneView 可以在同一個視窗中掛載並同步 90 多個提供者,因此你也可以掛載 Mail.ru Cloud 遠端,像本機磁碟機一樣檢視其內容。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="在 RcloneView 中檢查 Mail.ru Cloud 作業歷程記錄" class="img-large img-center" />

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 開啟 Job History,閱讀失敗的 Mail.ru Cloud 作業在 Log 分頁中的項目。
3. 套用上述對應的修復:憑證、並行數、核對碼或篩選器。
4. 執行 Dry Run,然後重新執行作業並以 Compare 確認。

有條理的檢查勝過猜測——一次解決根本原因,你的 Mail.ru Cloud 作業就能再次順暢執行。

---

**相關指南:**

- [管理 Mail.ru Cloud — 使用 RcloneView 同步與備份檔案](https://rcloneview.com/support/blog/manage-mailru-cloud-sync-rcloneview)
- [將 Mail.ru Cloud 遷移至 Backblaze B2 — 使用 RcloneView 傳輸檔案](https://rcloneview.com/support/blog/migrate-mailru-cloud-to-backblaze-b2-rcloneview)
- [使用 RcloneView 修復雲端 API 速率限制錯誤](https://rcloneview.com/support/blog/fix-cloud-api-rate-limiting-errors-rcloneview)

<CloudSupportGrid />
