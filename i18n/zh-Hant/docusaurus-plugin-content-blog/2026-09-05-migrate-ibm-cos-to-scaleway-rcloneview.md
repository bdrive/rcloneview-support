---
slug: migrate-ibm-cos-to-scaleway-rcloneview
title: "將 IBM Cloud Object Storage 遷移到 Scaleway — 使用 RcloneView 傳輸檔案"
authors:
  - kai
description: "使用 RcloneView 將儲存貯體從 IBM Cloud Object Storage 遷移到 Scaleway Object Storage,以校驗碼驗證,並用 dry run 預覽。"
keywords:
  - IBM COS 遷移到 Scaleway
  - IBM Cloud Object Storage 遷移
  - Scaleway Object Storage
  - S3 相容儲存傳輸
  - RcloneView
  - 物件儲存遷移
  - 雲端對雲端傳輸
  - 校驗碼驗證同步
  - 儲存貯體遷移工具
  - 多雲物件儲存
tags:
  - RcloneView
  - object-storage
  - s3-compatible
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 將 IBM Cloud Object Storage 遷移到 Scaleway — 使用 RcloneView 傳輸檔案

> 直接在兩個 S3 相容物件儲存服務商之間遷移儲存貯體,並搭配 dry-run 預覽與校驗碼驗證。

團隊會因為資料落地要求、區域延遲,或單純為了整合基礎架構而更換物件儲存服務商,但在兩個 S3 相容端點之間手動重新上傳數 TB 的儲存貯體內容既緩慢又容易出錯。RcloneView 將 IBM Cloud Object Storage 與 Scaleway Object Storage 都當作標準 S3 相容遠端連接,接著在儲存貯體之間直接傳輸資料,不必先經過本機磁碟。S3、Azure File Storage 與 Backblaze B2 在 FREE 授權下即可實現完整的讀寫連線。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 連接兩個物件儲存端點

IBM COS 與 Scaleway 都以 S3 相容遠端的形式新增到 RcloneView 中,兩者都需要 Access Key、Secret Key 以及各自服務商特定的端點 URL,而非 OAuth 登入。先使用 IBM Cloud 執行個體中的 API 金鑰與端點新增 IBM Cloud Object Storage,接著對 Scaleway Object Storage 憑證重複相同流程。

<img src="/support/images/en/blog/new-remote.png" alt="在 RcloneView 中新增 IBM Cloud Object Storage 與 Scaleway 遠端" class="img-large img-center" />

兩個遠端都設定完成後,會在檔案總管面板中顯示為各自獨立的分頁,方便你在決定實際要遷移什麼內容之前,先瀏覽雙方的儲存貯體內容。

## 預覽並執行遷移

以 IBM COS 為來源、Scaleway 為目的地所設定的同步或複製工作會處理大量傳輸。在正式執行完整流程之前,使用 Dry Run 準確查看哪些物件將被複製 — 這有助於及早發現命名或路徑問題,在兩個服務商的儲存貯體結構並非完全一致時尤其有用。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="將物件從 IBM Cloud Object Storage 直接傳輸到 Scaleway" class="img-large img-center" />

在工作的進階設定中啟用校驗碼比對,可以依雜湊值與大小、而非僅憑修改時間來驗證檔案,這在兩個可能以不同方式處理時間戳記的儲存後端之間搬移資料時尤其重要。篩選設定也能讓你在只需遷移儲存貯體部分內容時,排除特定檔案類型或超出大小限制的物件。

## 監控與排程傳輸

大型物件儲存遷移很少能一次完成。Transferring 分頁會顯示執行中工作的即時進度、速度與檔案數量,而 Job History 會保留每次已完成或已取消執行的紀錄 — 包括狀態、耗時與傳輸的總大小 — 讓你確認遷移是否順利完成,或是從已取消的工作處繼續。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="遷移 IBM COS 儲存貯體到 Scaleway 後檢視工作歷史紀錄" class="img-large img-center" />

在工作的進階設定中調整檔案傳輸數量與多執行緒傳輸數量,有助於更有效率地搬移大量物件,而失敗重試設定則能降低不穩定連線毀掉一次長達數小時傳輸的可能性。

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 將你的 IBM Cloud Object Storage 憑證新增為新的 S3 相容遠端。
3. 將你的 Scaleway Object Storage 憑證新增為第二個 S3 相容遠端。
4. 執行 dry run,接著在兩者之間執行經校驗碼驗證的同步工作。

當兩個端點並排出現在同一個檔案總管中時,在物件儲存服務商之間遷移儲存貯體就從手動猜測變成了一項可監控的工作。

---

**相關指南:**

- [管理 IBM Cloud Object Storage — 使用 RcloneView 同步與備份檔案](https://rcloneview.com/support/blog/manage-ibm-cos-cloud-sync-backup-rcloneview)
- [管理 Scaleway Object Storage — 使用 RcloneView 進行雲端同步與備份](https://rcloneview.com/support/blog/manage-scaleway-object-storage-cloud-sync-rcloneview)
- [Wasabi vs Backblaze B2 vs IDrive e2:高性價比 S3 相容儲存比較](https://rcloneview.com/support/blog/wasabi-vs-backblaze-b2-vs-idrive-e2-comparison-rcloneview)

<CloudSupportGrid />
