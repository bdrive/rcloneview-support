---
slug: multi-threaded-transfers-parallel-streams-rcloneview
title: "加速雲端傳輸——在 RcloneView 中使用多執行緒上傳與平行串流"
authors:
  - tayson
description: "雲端傳輸不必如此緩慢。了解如何在 RcloneView 中使用多執行緒上傳、平行檔案傳輸與傳輸優化設定，將吞吐量最大化。"
keywords:
  - multi threaded cloud upload
  - parallel cloud transfer
  - speed up cloud sync
  - rclone parallel transfers
  - fast cloud upload
  - cloud transfer optimization
  - rcloneview transfer speed
  - concurrent cloud uploads
  - multi stream upload
  - maximize cloud transfer speed
tags:
  - RcloneView
  - performance
  - feature
  - guide
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 加速雲端傳輸——在 RcloneView 中使用多執行緒上傳與平行串流

> 以單一檔案逐一上傳的方式將 500 GB 資料傳到 S3 需要好幾天。透過平行傳輸與多執行緒上傳，只需要幾小時即可完成。以下說明如何設定 RcloneView 以達到最大速度。

預設情況下，雲端傳輸工具會依序處理檔案，並以單一串流上傳每個檔案。這幾乎無法發揮您的網路與雲端服務商所能提供的效能。由 rclone 驅動的 RcloneView 同時支援平行檔案傳輸（同時傳輸多個檔案）與多執行緒上傳（將大型檔案拆分為多個並行串流）。正確設定這些選項可大幅縮短傳輸時間。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 兩種平行處理方式

### 平行檔案傳輸

同時傳輸多個檔案。不再是先上傳檔案 1，再上傳檔案 2、檔案 3，而是同時上傳這三個檔案。此功能由 `--transfers` 設定控制（預設值：4）。

### 單一檔案多執行緒上傳

將一個大型檔案拆分成多個區塊並同時上傳。一個 10 GB 的影片檔案會被拆分成多個部分，各自平行上傳，並在目的地重新組合。此功能由 `--multi-thread-streams` 設定控制（預設值：4）。

## 如何在 RcloneView 中設定

### 調整平行傳輸數

在工作設定或透過 RcloneView 的終端機，設定同時傳輸的檔案數量：

- **4 個傳輸**（預設值）——適用於大多數情況
- **8-16 個傳輸**——適合快速連線且檔案數量多的小型檔案
- **2-4 個傳輸**——較適合慢速連線或有嚴格速率限制的服務商

### 調整多執行緒串流數

針對大型檔案上傳，可增加串流數量：

- **4 個串流**（預設值）——效能平衡
- **8-16 個串流**——最適合快速連線下的大型檔案
- **1 個串流**——適用於不支援分段上傳的服務商

## 觀察傳輸效果

即時觀察傳輸速度，了解設定變更所帶來的影響：

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitor transfer speed" class="img-large img-center" />

## 各情境的最佳設定

| 情境 | 傳輸數 | 串流數 | 原因 |
|----------|-----------|---------|-----|
| 大量小型檔案（照片、文件） | 16 | 1 | 檔案本身的額外負擔佔主導；增加平行檔案數有幫助 |
| 少量大型檔案（影片、備份） | 2-4 | 8-16 | 單一檔案速度較重要；增加串流數有幫助 |
| 檔案大小混合 | 8 | 4 | 平衡的方式 |
| 慢速網路（低於 50 Mbps） | 2-4 | 2-4 | 避免使連線負荷過重 |
| 快速網路（高於 500 Mbps） | 16+ | 8-16 | 充分利用可用頻寬 |
| 有速率限制的服務商 | 2-4 | 4 | 維持在 API 限制之下 |

## 各服務商的專屬建議

### Google Drive
Google 設有每日上傳限制（750 GB）以及每秒 API 呼叫限制。請將傳輸數維持在適中範圍（4-8），並使用 `--tpslimit` 以維持在速率限制之下。

### S3 / S3 相容服務
S3 能夠很好地處理高度平行化。可將傳輸數提升至 16 以上、串流數提升至 8-16，以達到最大吞吐量。

### OneDrive
OneDrive 對高並行處理較為敏感。請從 4 個傳輸開始，再逐步增加。

### Backblaze B2
B2 能良好地處理分段上傳。建議使用 4-8 個傳輸搭配 4-8 個串流。

## 使用 RcloneView 的終端機進行細部調整

若需進階調整，可使用內建終端機執行帶有特定旗標的 rclone 指令。測試不同的設定組合，並透過即時監控來衡量結果。

## 查看工作紀錄以檢視結果

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Review transfer performance" class="img-large img-center" />

比較優化前後的工作耗時。工作紀錄會顯示總時間、已傳輸的檔案數以及平均速度。

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. **從預設值開始**（4 個傳輸、4 個串流）。
3. 在傳輸過程中**監控速度**。
4. 根據您的網路與服務商**逐步增加**數值。
5. **比較工作紀錄**以衡量改善程度。

更高的平行處理程度代表更快的傳輸速度——直到達到您的網路與服務商的極限為止。

---

**相關指南：**

- [修復緩慢的雲端上傳](https://rcloneview.com/support/blog/fix-slow-cloud-uploads-speed-optimization-rcloneview)
- [設定頻寬限制](https://rcloneview.com/support/blog/set-bandwidth-limits-cloud-transfers-rcloneview)
- [工作紀錄與傳輸日誌](https://rcloneview.com/support/blog/job-history-transfer-logs-monitoring-rcloneview)

<CloudSupportGrid />
