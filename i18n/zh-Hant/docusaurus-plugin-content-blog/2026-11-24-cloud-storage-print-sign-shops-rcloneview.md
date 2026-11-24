---
slug: cloud-storage-print-sign-shops-rcloneview
title: "印刷與招牌店的雲端儲存 — 使用 RcloneView 整理與備份設計稿"
authors:
  - kai
description: "使用 RcloneView 管理印刷與招牌店的雲端儲存。收集客戶設計稿，將生產檔案備份到多個雲端，並讓作業封存井然有序。"
keywords:
  - 印刷店雲端儲存
  - 招牌店檔案備份
  - 印刷店設計稿儲存
  - 大圖輸出檔案管理
  - 備份印刷生產檔案
  - 客戶設計稿雲端備份
  - RcloneView 印刷店
  - 小型企業多雲備份
  - 招牌公司檔案封存
tags:
  - RcloneView
  - cloud-storage
  - industry
  - backup
  - guide
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 印刷與招牌店的雲端儲存 — 使用 RcloneView 整理與備份設計稿

> 無論客戶設計稿來自哪個雲端，都能集中收取；生產檔案隨時有備份；去年的橫幅也能從井然有序的封存中重新開啟。

印刷與招牌店處理的檔案體積大、種類多，而且往往無法取代：向量 Logo、保留圖層的 PSD、可直接印刷的 PDF、車體包膜範本以及 RIP 輸出檔。客戶透過 Google Drive、Dropbox、OneDrive 或 Box 連結傳送設計稿，而完成的作業不斷累積在工作站或 Synology NAS 上。RcloneView 將這些全部整合到一個 GUI 中，讓店家不必在瀏覽器分頁之間來回切換，就能收集、封存與備份設計稿。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 從任何雲端收集客戶設計稿

在 **Remote tab > New Remote** 中將店內使用的每個服務新增為遠端。Google Drive、Dropbox、OneDrive 與 Box 透過瀏覽器登入即可連線。如果客戶經常在 Google Drive 與您分享資料夾，可以使用 Google Drive Shared with Me 遠端（`shared_with_me = true`）直接瀏覽這些資料夾。

<img src="/support/images/en/blog/new-remote.png" alt="Adding client cloud remotes for a print shop in RcloneView" class="img-large img-center" />

最多可同時開啟四個 Explorer 面板，因此客戶的資料夾可以與 NAS 上的待處理作業資料夾並排顯示。在不同遠端之間拖曳檔案即可複製。在拉取一個 20 GB 的車體包膜專案前，先用 **Get Size** 了解下載量。

## 將生產檔案備份到多個位置

店家真正的資產是封存：回頭客的新招牌要用的 Logo，或整支卡車車隊的範本。從生產資料夾建立一個 Sync 或 Copy 作業，目標為 Backblaze B2、Wasabi 或 Amazon S3 等異地儲存。透過 **1:N sync**，一個作業就能同時將同一資料夾傳送到多個目標（例如 NAS 與一個 S3 相容儲存桶），而且在 FREE License 下即可使用。

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="Dragging print production files to an S3-compatible bucket in RcloneView" class="img-large img-center" />

使用篩選器讓備份保持精簡。透過自訂規則排除暫存資料夾與快取檔案，或在忙碌的工作日使用 **Max file age** 只備份近期作業。首次同步前請先執行 **Dry Run**，確認目標端不會有意外的檔案被刪除。

## 排程夜間封存

擁有 PLUS License 時，可以在作業的最後一步新增 crontab 格式的排程，讓封存在店家打烊後執行，例如週一至週六晚上 11 點。**Simulate schedule** 按鈕可在儲存前預覽接下來的執行時間。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a nightly print shop archive job in RcloneView" class="img-large img-center" />

每天早上查看 **Job History**，確認執行已完成，並查看移動了多少檔案。如果作業出錯，狀態與時間資訊可協助您輕鬆重新執行。

## 不必全部下載即可重新開啟舊作業

當客戶要求重印時，在 Mount Manager 中將封存儲存桶掛載為磁碟機。設計軟體即可直接從掛載的磁碟機開啟檔案，本機快取則由 VFS 快取（預設 writes 模式）處理。

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="Mounting a print archive bucket as a drive in RcloneView" class="img-large img-center" />

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 將客戶使用的雲端、您的 NAS 以及一個異地儲存桶新增為遠端。
3. 從生產資料夾建立一個指向一個或多個備份目標的 Copy 或 Sync 作業，並以 Dry Run 預覽。
4. 掛載封存儲存桶，讓任何工作站都能開啟過去的作業。

設計稿集中收取、完成備份並統一封存後，您的團隊可以少花時間找檔案，多花時間做印刷。

---

**相關指南：**

- [使用 RcloneView 管理出版與印刷媒體的雲端儲存](https://rcloneview.com/support/blog/cloud-storage-publishing-print-media-rcloneview)
- [使用 RcloneView 管理平面設計師的雲端儲存](https://rcloneview.com/support/blog/cloud-storage-graphic-designers-rcloneview)
- [使用 RcloneView 將一個來源同步到多個雲端目標](https://rcloneview.com/support/blog/sync-one-source-multiple-cloud-destinations-rcloneview)

<CloudSupportGrid />
