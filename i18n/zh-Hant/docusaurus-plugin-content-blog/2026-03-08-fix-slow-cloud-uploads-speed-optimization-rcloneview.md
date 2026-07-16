---
slug: fix-slow-cloud-uploads-speed-optimization-rcloneview
title: "為什麼我的雲端上傳這麼慢？使用 RcloneView 進行速度優化的技巧"
authors:
  - tayson
description: "雲端上傳龜速？瞭解為什麼雲端傳輸會變慢，以及如何在 RcloneView 中透過平行傳輸、分塊、頻寬控制與供應商專屬調校來優化速度。"
keywords:
  - slow cloud upload fix
  - speed up cloud transfer
  - cloud upload slow
  - optimize cloud sync speed
  - parallel cloud transfers
  - rclone speed optimization
  - google drive upload slow
  - s3 upload speed
  - cloud transfer performance
  - fast cloud sync tool
tags:
  - performance
  - optimization
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 為什麼我的雲端上傳這麼慢？使用 RcloneView 進行速度優化的技巧

> 你原本預期雲端上傳只需要 30 分鐘。兩小時後，進度卻只有 40%。在責怪你的網路之前，問題可能出在你的工具，而不是你的連線。

緩慢的雲端傳輸令人沮喪，但這種情況很少是單一原因造成的。通常是多種因素綜合作用的結果：未針對你的情況優化的預設設定、供應商的專屬限速，以及低效的傳輸方式。RcloneView 提供了控制項，讓你能夠一次解決所有這些問題。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 為什麼雲端傳輸會變慢

### 1) 單執行緒傳輸

大多數雲端同步工具一次只上傳一個檔案。如果你有 10,000 個小檔案，每個檔案都需要一次獨立的 HTTP 連線——建立連線、傳輸、驗證。每個檔案的額外開銷甚至可能超過實際傳輸所需的時間。

**解決方法**：增加平行傳輸數量。rclone 預設值為 4，但許多連線可以承受 8–16 個甚至更多。

### 2) 分塊大小過小

大型檔案是以分塊（chunk）方式上傳的。如果分塊大小太小，每個分塊都需要各自的 HTTP 請求，增加了額外開銷。如果分塊太大，一旦某個分塊失敗，就必須重新上傳更多資料。

**解決方法**：對於穩定的連線，增加分塊大小。對於 Google Drive，可嘗試 64M 或 128M。對於 S3，可嘗試 16M–64M。

### 3) 供應商速率限制

雲端供應商會限制上傳速度以防止濫用：

- **Google Drive**：每日上傳限額約 750 GB。
- **OneDrive**：在持續高吞吐量後會進行限速。
- **Dropbox**：在高負載下會逐步限速。
- **S3**：每個前綴（prefix）每秒 3,500 次 PUT 請求。

**解決方法**：透過調整傳輸速度來遵守速率限制。使用[頻寬限制](https://rcloneview.com/support/blog/set-bandwidth-limits-cloud-transfers-rcloneview)來維持在門檻以下。

### 4) 沒有伺服器端複製

在兩個雲端之間傳輸時（例如 S3 到 S3），有些工具會先下載到你的電腦，再重新上傳。rclone 對相容的供應商支援伺服器端複製——資料會直接在雲端之間移動，不會經過你的電腦。

**解決方法**：RcloneView 在可用時會自動使用伺服器端複製。

### 5) 檢查每一個檔案

在傳輸之前，rclone 會檢查目的地是否已存在每個檔案。當檔案數量龐大時，這個檢查階段所花的時間可能比實際傳輸還要長。

**解決方法**：初次進行大量傳輸時使用 `--no-check-dest`。增量同步時則使用一般的檢查方式。

## 速度優化設定

### 平行傳輸

增加同時傳輸的檔案數量：

| 情境 | 建議設定 |
|----------|-------------------|
| 預設 | 4 個傳輸 |
| 高速網路（100+ Mbps） | 8–16 個傳輸 |
| 大量小檔案 | 16–32 個傳輸 |
| 僅有大型檔案 | 4–8 個傳輸 |

更多平行傳輸有助於處理大量小檔案。對於少數大型檔案，分塊大小更為重要。

### 依供應商設定分塊大小

| 供應商 | 預設分塊 | 建議值 |
|----------|--------------|-------------|
| Google Drive | 8 MB | 64–128 MB |
| OneDrive | 10 MB | 64 MB |
| S3 | 5 MB | 16–64 MB |
| Dropbox | 48 MB | 48–150 MB |

分塊愈大，代表 HTTP 請求愈少、額外開銷也愈低。

### 緩衝區大小

增加記憶體內緩衝區以加快讀取速度：

- 預設：16 MB
- 建議：64–256 MB（若你有足夠的 RAM）

這對於從速度較慢的來源讀取（如 NAS、傳統硬碟）特別有幫助。

## 監控與量測

即時追蹤傳輸速度，觀察你所做調整的效果：

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitor transfer speed in real time" class="img-large img-center" />

### 該關注什麼

- **傳輸速度** — 應該符合你網路上傳速度的合理百分比。
- **活躍傳輸數** — 應與你設定的平行傳輸數量一致。
- **錯誤** — 速率限制錯誤（429、403）代表你需要放慢速度。
- **檢查與傳輸的比例** — 如果檢查階段耗時過長，可以考慮在初次上傳時跳過檢查。

## 供應商專屬技巧

### Google Drive

- 將分塊大小設為 64M 或更高。
- 將平行傳輸數量維持在 4–8（Google 對超過此數量的情況會積極限速）。
- 如果達到每日 750 GB 的限額，可以將傳輸排程分散到多天進行。

### OneDrive / SharePoint

- 使用 4–8 個平行傳輸。
- 分塊大小 64 MB 效果良好。
- OneDrive 是依總傳輸量進行限速——大型傳輸應分散在較長的時間內進行。

### AWS S3

- S3 能夠很好地應付高並行度——可嘗試 16–32 個傳輸。
- 對超過 100 MB 的檔案使用分段上傳（multipart upload）。
- 選擇離你所在位置較近的 S3 區域以降低延遲。

### Backblaze B2

- 支援高並行度——16 個以上的傳輸效果良好。
- 分塊大小不適用（B2 使用自己的大型檔案 API）。
- 沒有每日傳輸限額。

## 批次作業以優化工作流程

使用 v1.3 批次作業（Batch Jobs），可以串接一整套優化的傳輸流程：

1. 以積極的設定進行大量傳輸。
2. 驗證比對。
3. 完成後發送通知。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Batch optimized transfer workflow" class="img-large img-center" />

## 快速檢查清單

- **增加平行傳輸數量** — 特別是有大量小檔案時。
- **增加分塊大小** — 特別是有大型檔案時。
- **檢查你的網路速度** — 使用 `speedtest-cli` 來為你的連線建立基準值。
- **監控速率限制** — 在傳輸日誌中留意 429/403 錯誤。
- **使用伺服器端複製** — 在相容的雲端之間傳輸時。
- **排程大型傳輸** — 安排在離峰時段進行，以避免影響你的網路。

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 在作業設定中**調整你的傳輸設定**。
3. **即時監控速度**。
4. **調整並反覆改進** — 微小的變動也能大幅提升吞吐量。

預設設定適用於大多數情況。但當你要搬移數 TB 的資料時，優化很快就能帶來回報。

---

**相關指南：**

- [設定頻寬限制](https://rcloneview.com/support/blog/set-bandwidth-limits-cloud-transfers-rcloneview)
- [建立同步作業](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [作業排程](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)

<CloudSupportGrid />
