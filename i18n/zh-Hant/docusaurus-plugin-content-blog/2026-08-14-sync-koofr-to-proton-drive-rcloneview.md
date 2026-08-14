---
slug: sync-koofr-to-proton-drive-rcloneview
title: "將 Koofr 同步到 Proton Drive — 使用 RcloneView 進行雲端備份"
authors:
  - alex
description: "了解如何使用 RcloneView 將檔案從 Koofr 同步到 Proton Drive,這是一款跨平台圖形介面工具,可讓兩個雲端保持同步備份。"
keywords:
  - 將 Koofr 同步到 Proton Drive
  - Koofr Proton Drive 備份
  - RcloneView Koofr
  - RcloneView Proton Drive
  - 雲對雲同步
  - Koofr 備份
  - Proton Drive 同步
  - 加密雲端備份
  - 多雲同步工具
tags:
  - RcloneView
  - koofr
  - proton-drive
  - cloud-to-cloud
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 將 Koofr 同步到 Proton Drive — 使用 RcloneView 進行雲端備份

> 無需先下載到本機磁碟,即可在 Proton Drive 上保留 Koofr 檔案的常駐備份。

Koofr 是一項歐洲雲端儲存服務,也能整合其他帳戶;而 Proton Drive 則提供由 Proton Mail 團隊打造的端對端加密儲存。有些使用者希望兩者兼得 — 用 Koofr 取得整合檢視,用 Proton Drive 取得隱私保障 — RcloneView 讓你能並排連接兩者,並在雲端之間直接同步,無需經過本機磁碟中轉。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 將 Koofr 與 Proton Drive 新增為遠端

在 Remote Manager 中使用帳戶憑證將 Koofr 新增為遠端,接著對 Proton Drive 重複相同流程,後者透過你的 Proton 電子郵件、密碼以及選用的雙重驗證碼進行身分驗證。兩個遠端都會在檔案總管中顯示為獨立分頁,因此在設定傳輸之前,你可以在一個面板開啟 Koofr,在另一個面板開啟 Proton Drive 直接比對。

<img src="/support/images/en/blog/new-remote.png" alt="在 RcloneView 中將 Koofr 與 Proton Drive 新增為遠端" class="img-large img-center" />

即使是 FREE 授權,也能對 S3、Azure 或 Backblaze B2 進行完整的讀寫連線,因此 Koofr 到 Proton Drive 的同步可以與你已經執行的任何物件儲存備份並存,全部都在同一個視窗中完成。

## 設定單向同步

從 Home 分頁開啟同步精靈,選擇 Koofr 作為來源,Proton Drive 作為目的地,選擇「Modifying destination only」以實現絕不變更 Koofr 原始資料的單向備份。在進階設定中啟用檢查碼比對,讓檔案依雜湊值與大小進行比對,而不僅僅依據修改時間 — 當 Koofr 與 Proton Drive 回報的時間戳不同時,這一點格外重要。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="設定從 Koofr 到 Proton Drive 的單向同步" class="img-large img-center" />

在正式執行之前,先使用 Dry Run 精確查看哪些檔案將被複製;若只想鏡像特定資料夾而非整個 Koofr 帳戶,可依檔案類型、最大大小或資料夾深度套用篩選條件。

## 排程並追蹤備份

將設定儲存為 Job Manager 中的作業後,PLUS 授權使用者可以連接 crontab 格式的排程,讓 Koofr 到 Proton Drive 的同步依設定週期自動執行,並在提交前預覽即將到來的執行時間。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="為 Koofr 到 Proton Drive 的同步作業設定定期排程" class="img-large img-center" />

每次執行都會記錄在 Job History 中,包括耗時、傳輸速度、檔案數量與傳輸總大小,提供你確認備份是否順利執行、或找出需要重試的失敗記錄的依據。

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 在 Remote Manager 中新增 Koofr 與 Proton Drive 作為遠端。
3. 建立一個從 Koofr 到 Proton Drive 的單向同步作業,並先執行一次 Dry Run。
4. 儲存作業;若你使用 PLUS 版本,可連接排程以實現省心的定期備份。

設定完成後,每次執行都會將你的 Koofr 檔案鏡像到 Proton Drive,讓你無需離開 RcloneView 就能取得一份加密副本。

---

**相關指南:**

- [使用 RcloneView 管理 Proton Drive 儲存 — 檔案同步與備份](https://rcloneview.com/support/blog/manage-proton-drive-cloud-sync-rcloneview)
- [使用 RcloneView 管理 Koofr 儲存 — 檔案同步與備份](https://rcloneview.com/support/blog/manage-koofr-cloud-sync-backup-rcloneview)
- [將 Proton Drive 遷移到 Backblaze B2 — 使用 RcloneView 傳輸檔案](https://rcloneview.com/support/blog/migrate-proton-drive-to-backblaze-b2-rcloneview)

<CloudSupportGrid />
