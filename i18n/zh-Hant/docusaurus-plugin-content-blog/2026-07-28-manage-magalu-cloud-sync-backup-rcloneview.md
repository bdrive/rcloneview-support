---
slug: manage-magalu-cloud-sync-backup-rcloneview
title: "管理 Magalu Cloud 儲存 — 使用 RcloneView 同步和備份檔案"
authors:
  - casey
description: "將 Magalu Cloud 物件儲存連接到 RcloneView，使用拖放式檔案管理、排程同步和跨雲備份。"
keywords:
  - Magalu Cloud RcloneView
  - Magalu 物件儲存 GUI
  - 管理 Magalu Cloud 儲存
  - S3 相容雲端備份
  - Magalu Cloud 同步工具
  - 巴西物件儲存 GUI
  - Magalu Cloud 檔案管理器
  - RcloneView S3 相容遠端
  - 雲端儲存 同步 備份
tags:
  - RcloneView
  - s3-compatible
  - cloud-storage
  - cloud-sync
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 管理 Magalu Cloud 儲存 — 使用 RcloneView 同步和備份檔案

> 使用完整的拖放式檔案管理器瀏覽、同步和備份 Magalu Cloud 物件儲存，而不必在終端機中來回擺弄 API 憑證。

Magalu Cloud 是一項相容 S3 的物件儲存服務，這代表它可以直接融入任何以 S3 協定建構的工具。RcloneView 將其視為與 Amazon S3 或 Backblaze B2 完全相同：輸入存取金鑰、密鑰和端點，儲存貯體就會與你管理的所有其他遠端一起出現在檔案總管中。對於已經在巴西或拉丁美洲執行工作負載、又想要一個無需離開熟悉的 S3 工具的物件儲存選項的團隊來說，這非常實用。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 連接 Magalu Cloud 遠端

新增 Magalu Cloud 遵循 RcloneView 用於每個 S3 相容提供商的相同憑證輸入流程：開啟 New Remote，選擇 S3 相容類型，然後提供存取金鑰 ID、私密存取金鑰以及適用於你所在地區的 Magalu Cloud 端點 URL。儲存後，儲存貯體將載入到 Explorer 面板中，具有完整的資料夾樹導覽、圖片縮圖預覽，以及用於複製、重新命名、刪除和取得大小的右鍵選單 —— 無需另開一個 S3 主控台標籤頁。

<img src="/support/images/en/blog/new-remote.png" alt="Adding a Magalu Cloud S3-compatible remote in RcloneView" class="img-large img-center" />

由於 RcloneView 透過 rclone 的 S3 後端進行連接，標準的物件儲存行為依然適用：資料夾是由鍵前置字元建構的虛擬結構，檔案操作會對應到 rclone 發出的底層 PUT/GET/DELETE 呼叫。與僅支援掛載的工具不同，RcloneView 在 FREE 授權下也支援同步和資料夾比較，因此 Magalu 儲存貯體不會僅限於被動瀏覽。

## 將 Magalu Cloud 與其他儲存同步

大多數團隊並不孤立地使用物件儲存 —— 它通常與本機磁碟機、NAS 裝置或其他雲端提供商一起，作為備份或遷移計畫的一部分。4 步驟同步精靈讓你可以將 Magalu 儲存貯體設定為來源或目的地，設定並行傳輸數和相等性檢查器數以實現可靠的大批量傳輸，並套用篩選條件(最大檔案大小、最大檔案存留期、副檔名排除)以確保只移動你真正需要的檔案。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring a sync job with a Magalu Cloud bucket as destination" class="img-large img-center" />

在提交實際傳輸之前，先執行 Dry Run 以準確預覽哪些檔案將被複製或刪除 —— 尤其是在首次將同步工作指向新儲存貯體時，這時候正確設定來源和目的地資料夾尤為重要。

## 排程定期 Magalu 備份

對於持續性的備份例行程序，PLUS 授權使用者可以為任何同步工作附加 crontab 風格的排程，使本機專案資料夾或另一個雲端遠端按照任何合適的節奏 —— 每晚、每週或自訂間隔 —— 自動鏡像到 Magalu Cloud。之後，Job History 會記錄每次執行的持續時間、傳輸速度、檔案數量和完成狀態，讓你無需查看終端機記錄即可獲得清楚的稽核記錄。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a recurring backup job to a Magalu Cloud bucket" class="img-large img-center" />

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 開啟 New Remote，選擇 S3 相容提供商類型，輸入你的 Magalu Cloud 存取金鑰、密鑰和端點。
3. 在 Explorer 面板中瀏覽儲存貯體，確認連接和資料夾結構。
4. 建立一個指向 Magalu 遠端的同步或備份工作，執行 Dry Run，然後執行傳輸。

連接完成後，Magalu Cloud 儲存貯體的行為就像 RcloneView 中的任何其他遠端一樣 —— 隨時可用於日常使用、跨雲傳輸和排程保護。

---

**相關指南:**

- [管理 IDrive e2 S3 雲端備份 — 使用 RcloneView 同步和備份檔案](https://rcloneview.com/support/blog/manage-idrive-e2-s3-cloud-backup-rcloneview)
- [管理 Cloudflare R2 — 使用 RcloneView 同步和備份檔案](https://rcloneview.com/support/blog/manage-cloudflare-r2-cloud-sync-rcloneview)
- [Dry Run — 使用 RcloneView 在傳輸前預覽雲端同步](https://rcloneview.com/support/blog/dry-run-preview-sync-before-transfer-rcloneview)

<CloudSupportGrid />
