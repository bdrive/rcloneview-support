---
slug: manage-petabox-cloud-sync-backup-rcloneview
title: "管理 Petabox 儲存 — 使用 RcloneView 同步與備份檔案"
authors:
  - kai
description: "將 Petabox 相容 S3 的物件儲存連接到 RcloneView，在一個 GUI 中實現跨平台瀏覽、同步、備份與掛載。"
keywords:
  - Petabox RcloneView
  - Petabox 雲端儲存
  - S3 相容物件儲存
  - Petabox 備份
  - Petabox 同步
  - 掛載 Petabox
  - 物件儲存 GUI
  - Petabox 檔案管理
  - 雲端儲存管理員
  - Petabox 儲存貯體同步
tags:
  - RcloneView
  - s3-compatible
  - object-storage
  - cloud-storage
  - cloud-sync
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 管理 Petabox 儲存 — 使用 RcloneView 同步與備份檔案

> 在單一桌面視窗中，與你使用的所有其他雲端一起瀏覽、同步並備份 Petabox 儲存貯體。

Petabox 是一項相容 S3 的物件儲存服務，這代表 RcloneView 可以用連接 Amazon S3、Wasabi 或任何其他 S3 協定供應商相同的方式連接它：使用 Access Key ID、Secret Access Key 與端點（endpoint）。連線完成後，Petabox 儲存貯體會以一般遠端連線的形式顯示在檔案總管中，可像本機資料夾一樣瀏覽、傳輸與排程。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 將 Petabox 新增為遠端連線

從 Remote 分頁開啟 Remote Manager，然後選擇 New Remote。由於 Petabox 是透過 rclone 的 S3 協定存取，請選擇 S3 相容選項，並輸入你的 Access Key ID、Secret Access Key，以及帳戶提供的 Petabox 端點 URL。這裡不需要完成 OAuth 瀏覽器流程——僅憑憑證即可完成連線驗證，測試連線成功後，該遠端連線便會立即出現在你的分頁列中。

<img src="/support/images/en/blog/new-remote.png" alt="在 RcloneView 中新增新的 S3 相容遠端連線" class="img-large img-center" />

與僅支援掛載的工具不同，RcloneView 在 FREE 授權下同樣提供同步與資料夾比較功能——Petabox 儲存貯體可以像其他受支援的供應商一樣使用同步、比較與工作歷程功能，不需升級即可開始使用。

## 瀏覽、傳輸與同步儲存貯體

新增 Petabox 後，將檔案總管拆分為兩個面板——一個顯示本機資料夾或另一個雲端，另一個顯示你的 Petabox 儲存貯體——然後在兩者之間拖曳檔案。在同一遠端連線內移動檔案會執行移動操作；在不同遠端連線之間拖曳則會執行複製操作，因此你可以在不動到來源檔案的情況下準備 Petabox 備份。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="在本機資料夾與 Petabox 儲存貯體之間傳輸檔案" class="img-large img-center" />

對於經常性傳輸，請使用四步驟同步精靈：選擇來源與目的地，在 Advanced Settings 中設定並行傳輸數與相等性檢查器數量，然後在儲存工作前依檔案類型、大小或存在時間套用篩選器。在提交實際傳輸之前，先執行一次 Dry Run，準確預覽將複製或刪除哪些內容。

## 排程備份與監控工作

同步工作在 Job Manager 中儲存後，PLUS 授權使用者可以附加 crontab 格式的排程，讓 Petabox 備份依自己的節奏自動執行，並可在儲存前預覽即將到來的執行時間。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="為 Petabox 同步工作設定定期備份排程" class="img-large img-center" />

每次執行——無論是排程執行還是手動執行——都會在 Job History 中記錄狀態、傳輸速度、檔案數量與總大小，方便你確認 Petabox 備份是否順利完成，或找出需要重試的失敗執行。

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 在你的 Petabox 帳戶中產生 Access Key ID 與 Secret Access Key，並記下端點 URL。
3. 在 Remote Manager 中將 Petabox 新增為新的 S3 相容遠端連線，並測試連線。
4. 在為 Petabox 儲存貯體排程定期備份之前，先執行一次 Dry Run 同步。

連接 Petabox 後，你的物件儲存會與你管理的所有其他雲端並列顯示——不需要另外的用戶端，也不需要切換視窗。

---

**相關指南：**

- [使用 RcloneView 管理 Storj 儲存 —— 檔案同步與備份](https://rcloneview.com/support/blog/manage-storj-cloud-sync-backup-rcloneview)
- [使用 RcloneView 管理 IDrive E2 儲存 —— 檔案同步與備份](https://rcloneview.com/support/blog/manage-idrive-e2-cloud-sync-backup-rcloneview)
- [使用 RcloneView 管理 Wasabi 儲存 —— 檔案同步與備份](https://rcloneview.com/support/blog/manage-wasabi-cloud-sync-backup-rcloneview)

<CloudSupportGrid />
