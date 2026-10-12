---
slug: migrate-mailru-cloud-to-backblaze-b2-rcloneview
title: "將 Mail.ru Cloud 遷移到 Backblaze B2 — 使用 RcloneView 傳輸檔案"
authors:
  - morgan
description: "使用 RcloneView 將檔案從 Mail.ru Cloud 移到 Backblaze B2：連接兩個遠端，以 Dry Run 預覽，傳輸，並透過資料夾比較驗證。"
keywords:
  - 將 Mail.ru Cloud 遷移到 Backblaze B2
  - Mail.ru Cloud 備份
  - Mail.ru Cloud to B2
  - Backblaze B2 遷移
  - 雲端對雲端傳輸
  - RcloneView 遷移
  - Mail.ru Cloud rclone
  - 將檔案移到 Backblaze B2
tags:
  - RcloneView
  - mailru
  - backblaze-b2
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 將 Mail.ru Cloud 遷移到 Backblaze B2 — 使用 RcloneView 傳輸檔案

> 在單一視窗中將 Mail.ru Cloud 資料庫複製到 Backblaze B2 物件儲存，傳輸前預覽，傳輸後比較。

如果多年的文件與照片都存放在 Mail.ru Cloud，在物件儲存中再放一份副本就能擁有獨立的封存。RcloneView 將兩個服務都連接為遠端，並以雲端對雲端作業的方式執行傳輸，因此不必先把檔案下載到筆電。使用 FREE 授權即可以完整讀寫權限連接 S3、Azure 或 Backblaze B2。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 連接兩個遠端

開啟 Remote 分頁並點擊 New Remote。先依該供應商的提示新增 Mail.ru Cloud，再使用 B2 主控台中的 Application Key ID 與 Application Key 新增 Backblaze B2。請事先在 B2 建立儲存貯體，才有可指向的目的地。

在各自的 Explorer 面板中開啟每個遠端。在左側瀏覽 Mail.ru Cloud 資料夾，在右側瀏覽 B2 儲存貯體，於建立作業之前確認兩者都有回應。

<img src="/support/images/en/blog/new-remote.png" alt="在 RcloneView 中新增 Mail.ru Cloud 與 Backblaze B2 遠端" class="img-large img-center" />

## 規劃傳輸

決定要遷移全部還是一部分。例如，封存 400 GB 專案資料夾的工作室可以先複製一個最上層資料夾作為試行。在同步精靈中，選擇 Mail.ru Cloud 作為來源，B2 儲存貯體資料夾作為目的地，然後以字母、數字、連字號或底線為作業命名。

對於遷移，Copy 作業較為安全，因為它不會從來源刪除任何內容。只有在希望目的地與來源完全一致時，才使用 Sync。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="從 Mail.ru Cloud 到 Backblaze B2 的雲端對雲端傳輸" class="img-large img-center" />

## 預覽、執行與監控

先執行 Dry Run。它會列出將被複製或刪除的檔案而不做任何變更，及早發現錯誤的目的地路徑。接著啟動作業，並在 Transferring 分頁中查看進度、速度與檔案數。

物件儲存能妥善處理大量平行上傳，但消費型雲端可能較為嚴格。若出現錯誤，請在精靈步驟 2 中降低檔案傳輸數，並將 equality checkers 維持在 4 或更低。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="在 RcloneView 中監控 Mail.ru Cloud 到 B2 的傳輸" class="img-large img-center" />

## 驗證並保持更新

作業完成後，開啟資料夾比較，一側為 Mail.ru Cloud，另一側為 B2。篩選僅左側與不同的檔案，找出未送達的項目，並只複製這些項目。Job History 會記錄每次執行的狀態、持續時間、大小與檔案數。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Mail.ru Cloud 與 Backblaze B2 之間的資料夾比較" class="img-large img-center" />

若要讓 B2 副本保持最新，請儲存作業，並在擁有 PLUS 授權的情況下，於步驟 4 加入 crontab 風格的排程。

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 在 Remote 分頁中將 Mail.ru Cloud 與 Backblaze B2 新增為遠端。
3. 建立從 Mail.ru Cloud 到 B2 儲存貯體的 Copy 作業並執行 Dry Run。
4. 開始傳輸，然後以資料夾比較驗證。

經過驗證的 B2 第二份副本，能讓單一供應商的資料庫成為已備份的資料庫。

---

**相關指南：**

- [使用 RcloneView 管理 Mail.ru Cloud 儲存](https://rcloneview.com/support/blog/manage-mailru-cloud-sync-rcloneview)
- [管理 Backblaze B2 儲存 — 使用 RcloneView 同步與備份檔案](https://rcloneview.com/support/blog/manage-backblaze-b2-cloud-sync-backup-rcloneview)
- [使用 RcloneView 將 Yandex Disk 遷移到 Backblaze B2](https://rcloneview.com/support/blog/migrate-yandex-disk-to-backblaze-b2-rcloneview)

<CloudSupportGrid />
