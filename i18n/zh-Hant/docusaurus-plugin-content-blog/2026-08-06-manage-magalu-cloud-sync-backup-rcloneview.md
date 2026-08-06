---
slug: manage-magalu-cloud-sync-backup-rcloneview
title: "管理 Magalu 雲端儲存 — 使用 RcloneView 同步與備份檔案"
authors:
  - robin
description: "將 Magalu Cloud 相容 S3 的物件儲存連接到 RcloneView，實現拖放瀏覽、排程備份與跨雲同步。"
keywords:
  - Magalu 雲端儲存
  - Magalu S3
  - RcloneView Magalu
  - 管理 Magalu 檔案
  - Magalu 雲端備份
  - Magalu 同步
  - S3 相容儲存 GUI
  - 巴西雲端儲存
tags:
  - RcloneView
  - s3-compatible
  - object-storage
  - cloud-storage
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 管理 Magalu 雲端儲存 — 使用 RcloneView 同步與備份檔案

> 在你用來處理其他所有雲端服務的同一個視窗中，瀏覽、同步並備份 Magalu Cloud 相容 S3 的物件儲存。

Magalu Cloud 是一項相容 S3 的物件儲存服務，和大多數 S3 相容供應商一樣，它並未附帶專用的桌面檔案管理員 —— 你只能靠撰寫 `curl` 腳本或架設 CLI 來搬運檔案。RcloneView 將 Magalu 儲存桶視為任何其他遠端一樣處理，藉此彌補這項落差：完整的檔案瀏覽、拖放傳輸與排程同步工作，全程無需終端機。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 連接 Magalu 儲存桶

由於 Magalu Cloud 使用 S3 通訊協定，你可以像新增 Amazon S3 或 Backblaze B2 一樣將其加入 RcloneView：建立一個新的遠端，選擇 S3 相容供應商選項，然後輸入你帳戶所在地區對應的 Access Key、Secret Key 與 Magalu 端點 URL。儲存後，該儲存桶就會以一般分頁的形式顯示在檔案總管面板中，可立即進行瀏覽與傳輸。

<img src="/support/images/en/blog/new-remote.png" alt="在 RcloneView 中新增 Magalu Cloud 相容 S3 的遠端" class="img-large img-center" />

在 FREE 授權下即可對 S3、Azure 與 Backblaze B2 進行完整的讀寫連接，因此 Magalu 也能不受付費限制地加入你既有的雲端陣容。

## 瀏覽與整理 Magalu 儲存

連接後，Magalu 儲存桶在檔案總管中的表現就像任何本機資料夾一樣。你可以依名稱、類型、修改日期或大小排序，在儲存桶裝滿圖片時切換到縮圖檢視，並在決定是否將某個資料夾封存到別處之前，使用「取得大小」來檢查其占用的空間。使用 Ctrl+按一下 或 Shift+按一下 進行多選，無需撰寫腳本即可批次下載與刪除。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="在 RcloneView 中瀏覽 Magalu Cloud 儲存桶內容" class="img-large img-center" />

## 與 Magalu 之間的備份往返

若要進行定期備份，可以設定以 Magalu 作為來源或目標的同步工作。四步驟精靈涵蓋同時傳輸數量、透過雜湊值與大小(而非僅依賴時間戳記)比較檔案的核對總和驗證，以及用來排除你不想封存之檔案類型的篩選規則。在針對存有正式環境資料的儲存桶執行同步工作之前，先執行一次試執行(Dry Run)以預覽究竟會複製或刪除哪些內容，是值得的一步。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="在 RcloneView 中排程 Magalu Cloud 備份工作" class="img-large img-center" />

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 建立一個新的遠端，並選擇 S3 相容供應商類型。
3. 輸入你的 Magalu Access Key、Secret Key 與端點 URL。
4. 設定一個同步或複製工作，在 Magalu 與其他雲端遠端之間移動檔案。

一旦 Magalu 整合進 RcloneView，管理物件儲存就不再是需要撰寫腳本的苦差事，而是成為你日常檔案工作流程的一部分。

---

**相關指南：**

- [管理 Scaleway 物件儲存 — 使用 RcloneView 進行雲端同步與備份](https://rcloneview.com/support/blog/manage-scaleway-object-storage-cloud-sync-rcloneview)
- [管理 IONOS 物件儲存 — 使用 RcloneView 同步與備份檔案](https://rcloneview.com/support/blog/manage-ionos-object-storage-cloud-sync-rcloneview)
- [管理 Leviia 物件儲存 — 使用 RcloneView 同步與備份檔案](https://rcloneview.com/support/blog/manage-leviia-cloud-sync-backup-rcloneview)

<CloudSupportGrid />
