---
slug: optimize-rcloneview-mount-s3-r2-performance
title: "為 S3 與 Cloudflare R2 優化 RcloneView 掛載效能"
authors:
  - tayson
description: 為 Amazon S3 與 Cloudflare R2 調校 RcloneView 掛載設定，透過正確的快取模式、區塊大小與並行度，讓媒體伺服器與分析工作保持快速穩定。
keywords:
  - rcloneview
  - rclone mount
  - s3 mount performance
  - cloudflare r2 mount
  - vfs cache
  - rclone tuning
  - multi-thread streams
  - s3 chunk size
tags:
  - RcloneView
  - mount
  - cloudflare-r2
  - aws-s3
  - performance
unlisted: true
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 為 S3 與 Cloudflare R2 優化 RcloneView 掛載效能

> 透過調校 RcloneView 針對 S3 相容儲存空間的掛載設定，即可獲得更流暢的播放體驗與更快的讀取速度，完全不需要修改任何 CLI 參數。

將 S3 儲存桶或 Cloudflare R2 掛載到你的工作站、NAS 或媒體伺服器可以帶來即時存取的便利，但預設設定可能會限制傳輸量。透過在 RcloneView 中進行幾項針對性的調整，你就能降低延遲、減少緩衝，並在 AWS 與 R2 之間維持可預測的成本。

<!-- truncate -->

**主要關鍵字：** *rclone mount*、*S3 mount performance*、*Cloudflare R2*、*VFS cache*、*multi-thread streams*。

---

## 為什麼調校掛載設定很重要

- 順暢串流不卡頓：媒體伺服器與 BI 工具需要一致的預讀與快取機制，才能避免緩衝。
- 保護 API 免於過載：受控的並行度可防止 S3 相容端點出現 429/503 限流錯誤。
- 節省出口流量與重複讀取：更聰明的快取可減少重複的 GET 請求與網路往返。
- 確保寫入安全：正確的快取模式可避免資料庫損壞或在斷線時發生部分上傳。

---

## 前置條件與快速檢查

1. 位置與延遲：選擇最接近使用者的 AWS 區域；至於 R2，則選擇最近的 Cloudflare 據點以縮短 RTT。
2. 網路路徑：確認 VPN/防火牆規則允許持續的 HTTPS (443) 流量，且不會被過於積極的 IDS 限流。
3. RcloneView 中的憑證：為 Amazon S3 與 Cloudflare R2 新增遠端（S3 相容端點，例如 `https://<account>.r2.cloudflarestorage.com`）。
   - 需要複習一下嗎？參閱[如何新增 S3 遠端](/howto/remote-storage-connection-settings/s3)與[如何取得 Cloudflare R2 API 憑證](/howto/cloud-storage-setting/cloudflare-r2-credential)。
4. 了解工作負載類型：媒體串流偏好預讀；分析工作偏好平行讀取；備份目標可能需要更安全的寫入快取。

---

## 步驟 1 - 在 RcloneView 中建立掛載

1. 開啟 **RcloneView** -> **Mounts** -> **New Mount**。
2. 選擇你的遠端（S3 或 R2）與本機掛載路徑。
3. 若你有在開機時執行服務（Plex/Jellyfin、BI 工具），請開啟 **Auto-start on launch**。
4. 儲存後啟動一次掛載，確認它出現在作業系統的檔案總管中。

> 提示：對於 R2，請在 Advanced Settings 中設定正確的端點，以維持較低的區域延遲。

---

## 步驟 2 - 設定正確的 VFS 快取模式

| 使用情境 | 建議的 `--vfs-cache-mode` | 原因 |
| --- | --- | --- |
| 媒體播放 / BI 儀表板 | `writes` | 緩衝下載與暫存寫入；對部分更新較安全 |
| 相片/影片編輯 | `full` | 確保隨機讀寫先命中本機快取再上傳 |
| 簡單的唯讀瀏覽 | `off`（預設值） | 在你很少修改檔案時開銷最低 |

掛載視窗中的其他快取設定：

- 快取上限大小：SSD 上先從 10-50 GB 開始；若你要串流大型媒體庫可再提高。
- `--vfs-read-ahead`：設為 32M-128M，讓播放器能提前緩衝而不卡頓。
- `--buffer-size`：每個檔案 8M-32M，在高延遲連線上維持 TCP 視窗填滿。
- `--dir-cache-time`：5m-30m 可減少對深層儲存桶的 LIST 呼叫；搭配 `--poll-interval`（例如 30s）使用，讓更新仍能傳播。

---

## 步驟 3 - 透過並行度與分段上傳調校釋放傳輸效能

即使是掛載模式，rclone 仍會遵循後端調校參數：

- `--multi-thread-streams`：改善高延遲路徑上的單檔讀取（可嘗試 4-8）。
- `--transfers`：控制從快取進行並行上傳的數量；建議從 4-8 開始，避免觸發供應商限流。
- S3 區塊大小：設定 `--s3-chunk-size 64M`（1Gbps 以上頻寬可設 128M）以減少大型檔案的往返次數。
- S3 上傳並行度：`--s3-upload-concurrency 4` 是安全的基準值；若 CPU 與網路允許可再提高。
- 校驗碼：除非你純粹是為了非關鍵資料的速度而優化，否則請保留 `--s3-disable-checksum=false` 以確保完整性。
- R2 分段上傳：使用 `--chunk-size 64M` 與 `--upload-cutoff 64M`，對較大的檔案強制採用分段上傳。

注意速率限制；若看到 429/503 回應，請將 transfers 調降 25%，並加上 `--retries-sleep 10s`。

---

## 步驟 4 - 在長時間工作階段中保持掛載穩定

- 重試與退避：設定 `--retries 10` 與 `--low-level-retries 20`；並搭配 `--retries-sleep 5s`。
- 逾時保護：若 Wi-Fi 不穩，可加上 `--contimeout 15s` 與 `--timeout 5m`，讓長時間讀取得以存活。
- 寫入安全：在共享編輯的工作負載中，只針對永遠不會變動的封存資料啟用 `--immutable`。
- 日誌記錄：在 RcloneView 掛載中啟用詳細日誌；在調整並行度時追蹤日誌以找出限流狀況。
- 健康檢查：排程每晚在 S3 與 R2 之間執行 `--size-only` 或 `--checksum` 工作，以驗證完整性。

---

## 步驟 5 - 常見情境的設定範本

### 從 R2/S3 串流媒體到 Plex 或 Jellyfin
- `--vfs-cache-mode writes`
- `--vfs-read-ahead 96M`、`--buffer-size 16M`
- `--multi-thread-streams 6`
- 將 `--transfers` 限制為 4，讓 R2/S3 維持穩定；在尖峰時段啟用 `--bwlimit 80M`。

### 在已掛載的 parquet/CSV 上執行 BI 儀表板或資料科學筆記本
- 隨機讀取使用 `--vfs-cache-mode full`
- `--multi-thread-streams 8`、`--transfers 6`
- 提高 `--s3-chunk-size 128M` 與 `--s3-upload-concurrency 6`，加快從快取溢出寫入的速度。

### 備份落地目標（NAS 到 S3/R2）
- `--vfs-cache-mode writes`、`--dir-cache-time 30m`
- 保守設定 `--transfers 4`、`--checkers 8`
- 若儲存桶政策要求，請開啟伺服器端加密；並保持校驗碼啟用。

---

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

## 疑難排解檢查清單

1. 瀏覽大型資料夾很慢？在供應商支援的情況下加上 `--fast-list`，並延長 `--dir-cache-time`。
2. 緩衝問題持續發生？提高 `--vfs-read-ahead`，並確認 SSD 快取空間充足；同時留意作業系統磁碟佇列。
3. 出現限流錯誤？降低 `--transfers` 與 `--multi-thread-streams`；在上班時段加上 `--bwlimit`。
4. 上傳卡在 99%？提高 `--timeout`，並確認分段區塊大小符合供應商的最低要求（S3 為 5 MB，R2 為 5-50 MB）。
5. 應用程式看到過期的中繼資料？降低 `--poll-interval` 並重新啟動掛載以刷新目錄快取。

---

## 常見問題

**問：S3 與 R2 需要建立不同的掛載嗎？**
**答：** 請為每個遠端建立獨立的掛載；你可以讓兩者同時保持啟用，並在 RcloneView 內於兩者之間拖放檔案。

**問：快取大小會影響成本嗎？**
**答：** 會 - 較大的快取可降低重複的 GET 請求次數，進而減少出口流量與請求費用，在 R2 的按請求計費模式下尤其明顯。

**問：我可以混用唯讀與讀寫工作負載嗎？**
**答：** 使用兩個掛載：一個唯讀（`--read-only`）用於媒體播放，另一個讀寫用於編輯，這樣可讓權限與快取保持可預測性。

**問：我該如何長期監控效能？**
**答：** 每週匯出掛載日誌與 Job History，為設定加上標籤（例如 `[MountTest] R2 64M/6threads`），並為你的團隊保留一份簡短的成功設定手冊。

---

調校得當的掛載能讓體驗如同本機儲存一般順暢。透過 RcloneView 針對快取、並行度與日誌記錄的 GUI 控制項，你可以讓 S3 與 R2 維持如同地端儲存般的效能 - 完全不需要撰寫 shell 腳本。

<CloudSupportGrid />
