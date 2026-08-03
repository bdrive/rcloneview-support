---
slug: manage-magalu-cloud-sync-backup-rcloneview
title: "管理 Magalu Cloud 儲存 — 使用 RcloneView 同步與備份檔案"
authors:
  - jay
description: "將 Magalu Cloud 物件儲存連接到 RcloneView,實現拖放式檔案管理、排程同步與跨雲備份工作流程。"
keywords:
  - magalu 雲端儲存
  - magalu 物件儲存
  - s3 相容儲存 gui
  - rcloneview magalu
  - 物件儲存備份
  - 雲端同步 gui
  - 多雲檔案總管
  - s3 相容管理器
  - magalu 備份
  - 巴西雲端儲存
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

# 管理 Magalu Cloud 儲存 — 使用 RcloneView 同步與備份檔案

> 在管理其他所有雲端服務的同一個視窗中瀏覽、同步並備份 Magalu Cloud 物件儲存。

Magalu Cloud 是一項 S3 相容的物件儲存服務,這代表它可以與任何以 S3 協定為基礎的工具搭配使用,包括 rclone。RcloneView 將這種協定支援封裝在一個視覺化檔案總管中,因此已經使用 Magalu 儲存桶存放應用程式資料或備份的團隊,不需要記住 `s3cmd` 的參數,也不必為了搬移檔案而在多個主控台分頁間切換。只要連接一次儲存桶,它的行為就會與應用程式中的其他遠端相同。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 將 Magalu Cloud 連接為遠端

由於 Magalu Cloud 使用 S3 協定,RcloneView 連接它的方式與連接 Amazon S3、Wasabi 或 Backblaze B2 相同,都是透過 S3 相容遠端類型。開啟 **New Remote**,選擇 S3 相容選項,然後提供你的 Access Key、Secret Key,以及你所在地區的 Magalu Cloud 端點 URL。RcloneView 可在 Windows、macOS 與 Linux 上從單一視窗掛載並同步 90 多個服務供應商,因此 Magalu 儲存桶可以與你現有的 Google Drive、OneDrive 或內部部署 NAS 連線並列使用。

<img src="/support/images/en/blog/new-remote.png" alt="在 RcloneView 中新增 Magalu Cloud S3 相容遠端" class="img-large img-center" />

儲存遠端後,它會以分頁形式出現在 Explorer 面板中,擁有完整的資料夾樹狀導覽、適用於圖片較多儲存桶的縮圖預覽,以及與本機檔案相同的右鍵操作(複製、剪下、重新命名、刪除)。

## 將 Magalu 儲存桶與其他儲存空間同步

物件儲存很少單獨存在——大多數團隊會將其與另一個雲端服務搭配以達到備援,或與本機基礎設施搭配以進行暫存。使用 RcloneView 的 Sync 精靈,你可以將 Magalu 儲存桶設為來源或目的地,選擇單向同步或雙向同步(Beta),並在傳輸前套用最大檔案大小或檔案存在時間等篩選條件。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="設定 Magalu Cloud 儲存桶與另一個遠端之間的同步工作" class="img-large img-center" />

在首次將正式環境儲存桶鏡像至備份目的地之前,先執行 **Dry Run**,預覽將要複製或刪除的確切物件——這是一項實用的檢查。

## 自動化定期備份

對於每天都在變動的儲存桶,手動傳輸無法擴展。將你的 Magalu 同步設定儲存為一個 Job,然後使用排程步驟(PLUS 授權)定義 crontab 風格的重複週期——每晚、每週或自訂間隔。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="為 Magalu Cloud 儲存桶排程定期備份工作" class="img-large img-center" />

每次執行都會連同狀態、傳輸速度與檔案數量一起記錄在 Job History 中,因此你可以確認排程備份是否確實完成,而不只是憑猜測。

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 為你的 Magalu Cloud 帳戶產生 Access Key 與 Secret Key,並記下所在地區的端點。
3. 在 RcloneView 中將 Magalu Cloud 新增為新的 S3 相容遠端。
4. 先執行 Dry Run,再設定一個同步工作,將其連接到你的備份或次要儲存目的地。

將一個 S3 相容儲存桶視為檔案總管中的另一個資料夾,消除了通常使物件儲存與工作流程其餘部分脫節的摩擦。

---

**相關指南:**

- [使用 RcloneView 管理 Wasabi 雲端儲存](https://rcloneview.com/support/blog/manage-wasabi-cloud-sync-backup-rcloneview)
- [使用 RcloneView 管理 Cloudflare R2 儲存](https://rcloneview.com/support/blog/manage-cloudflare-r2-cloud-sync-rcloneview)
- [使用 RcloneView 管理 IDrive e2 雲端儲存](https://rcloneview.com/support/blog/manage-idrive-e2-cloud-sync-backup-rcloneview)

<CloudSupportGrid />
