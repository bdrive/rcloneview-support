---
slug: recover-interrupted-failed-transfers-rcloneview
title: "如何使用 RcloneView 復原中斷或失敗的雲端傳輸"
authors:
  - tayson
description: "在 RcloneView 中恢復中斷的雲端傳輸、從部分上傳中復原，並修復失敗的同步工作。適用於無法完成的大型檔案傳輸的實用技巧。"
keywords:
  - resume interrupted cloud transfer rclone
  - recover failed file transfer rcloneview
  - rclone resume partial upload
  - interrupted cloud sync recovery
  - rcloneview transfer failed
  - rclone retry failed transfers
  - cloud upload resume after disconnect
  - partial cloud transfer recovery
  - rclone resume large file upload
  - fix interrupted sync rcloneview
tags:
  - RcloneView
  - cloud-storage
  - troubleshooting
  - tips
  - backup
  - guide
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 如何使用 RcloneView 復原中斷或失敗的雲端傳輸

> 網路斷線、API 逾時、筆電休眠與停電都可能中斷雲端傳輸。RcloneView 與 rclone 具備內建機制，能安全地恢復傳輸，而不需要從頭重新上傳所有內容。

將數 TB 的資料傳輸至雲端絕非五分鐘就能完成的操作。在長時間執行的工作中，連線中斷幾乎是無法避免的。好消息是，RcloneView 底層所使用的 rclone 智慧型傳輸引擎，正是為這種情境設計的。複製與同步操作本質上是冪等的：重新執行時會跳過已傳輸的檔案，並從中斷處繼續。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Rclone 如何處理中斷的傳輸

Rclone 會在傳輸每個檔案前比對來源與目的地。當你在中斷後重新執行複製或同步工作時：

- **已傳輸的檔案**會被跳過（依檔案大小與修改時間比對，若啟用校驗碼則依校驗碼比對）。
- **部分傳輸的檔案**會被清除，並從頭重新傳輸。
- **尚未開始的檔案**會被排入佇列，並在恢復執行時傳輸。

這代表大多數情況下並沒有特殊的「恢復」按鈕——只需重新執行同一個工作即可。

## 步驟 1 — 重新執行同一個工作

發生中斷後，開啟 RcloneView 中的 **Jobs**，並在同一個工作上再次點擊 **Run**：

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Re-run a failed transfer job in RcloneView" class="img-large img-center" />

RcloneView 將會：
1. 列出來源與目的地。
2. 比對目的地中已存在的檔案。
3. 跳過已成功傳輸的檔案。
4. 僅傳輸缺少或已修改的檔案。

以一個包含 10,000 個檔案、其中 8,000 個已成功傳輸的工作為例，重新執行只需原始時間的一小部分。

## 步驟 2 — 檢查工作紀錄中失敗的檔案

在重新執行之前，先檢視 RcloneView 中的 **Job History**，以了解哪些部分失敗：

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Review failed files in RcloneView job history" class="img-large img-center" />

紀錄會顯示：
- 哪些特定檔案失敗
- 每個失敗的錯誤訊息
- 失敗是暫時性的（網路錯誤）還是持續性的（權限問題、路徑過長）

持續性錯誤需要先修復才能重新執行——暫時性錯誤在重試時通常會自行解決。

## 步驟 3 — 處理部分上傳的大型檔案

對於非常大的檔案（多 GB），若在上傳過程中中斷，目的地會留下一個部分檔案。Rclone 的行為會依供應商而異：

| 供應商 | 部分檔案的處理方式 |
|----------|-----------------------|
| Amazon S3 / S3 相容服務 | 分段上傳：未完成的部分會成為孤立資料，rclone 會從頭重試 |
| Google Drive | 可續傳上傳：若工作階段仍有效，rclone 可從中斷處繼續 |
| OneDrive | 可續傳上傳：與 Google Drive 類似 |
| Backblaze B2 | 大型檔案分段：未完成的上傳可在 B2 主控台中查看 |

**針對 S3 孤立的分段上傳：** 這些資料會不斷累積並產生費用。可透過以下方式清除：
- RcloneView 終端機：`rclone cleanup s3-remote:bucket-name`
- 或透過 AWS 主控台，於 S3 → Your Bucket → Multipart uploads 中清除

## 步驟 4 — 使用 `--retries` 與 `--low-level-retries`

對於因暫時性錯誤而失敗的工作，可設定 RcloneView 工作以自動重試：

在 **Custom flags** 欄位中加入以下內容：
```
--retries 5 --retries-sleep 10s --low-level-retries 20
```

- `--retries 5` — 若發生錯誤，整個工作最多重試 5 次
- `--retries-sleep 10s` — 每次重試之間等待 10 秒
- `--low-level-retries 20` — 個別低階操作（API 呼叫）最多重試 20 次

## 步驟 5 — 處理校驗碼不符

傳輸中斷後，搭配校驗碼驗證重新執行可確保資料完整性：

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify transfer integrity with folder comparison" class="img-large img-center" />

在 RcloneView 中，於工作設定中啟用 **Checksum verification**。這會強制 rclone 比對檔案內容（而不僅是大小／修改時間）——速度較慢，但能確保部分寫入的檔案被偵測到並重新傳輸。

## 步驟 6 — 從刪除檔案的同步中復原

若同步工作以錯誤的方向執行——把目的地覆蓋到來源，而非反過來——你需要透過雲端供應商的版本紀錄進行復原：

- **Google Drive**：從垃圾桶或版本紀錄還原（保留 30 至 180 天）。
- **OneDrive**：從資源回收筒或版本紀錄還原。
- **啟用版本控制的 S3**：從 S3 主控台的先前版本還原。
- **Backblaze B2**：若已啟用版本紀錄，可從中還原。

這也是為什麼強烈建議初次進行大型傳輸時使用（非破壞性的）**Copy** 模式，而非 Sync。

## 預防措施：為傳輸建立韌性

從一開始就為你的傳輸工作建立韌性：

| 設定 | 建議 |
|---------|----------------|
| 工作模式 | 初次搬移使用 **Copy**；持續維護使用 Sync |
| 重試 | 設定 `--retries 5 --retries-sleep 10s` |
| 校驗碼 | 對關鍵資料啟用 |
| 傳輸數 | 在不穩定的連線環境下降低並行數量 |
| 排程 | 於網路穩定的時段執行（如夜間、離峰、非 VPN 時段） |
| 頻寬 | 設定限制以避免因網路飽和造成逾時 |

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. **檢查工作紀錄**，找出失敗的部分及原因。
3. **重新執行工作**——rclone 會自動跳過已完成的檔案。
4. **設定重試與校驗碼驗證**，為未來的傳輸建立韌性。

大多數中斷的傳輸只需再次點擊 Run 即可解決，其餘的交給 rclone 處理。

---

**相關指南：**

- [避免因同步方向錯誤造成的資料遺失](https://rcloneview.com/support/blog/avoid-data-loss-wrong-sync-direction-rcloneview)
- [具校驗碼驗證的雲端搬遷](https://rcloneview.com/support/blog/checksum-verified-cloud-migrations-rcloneview)
- [加速大型雲端傳輸](https://rcloneview.com/support/blog/accelerate-large-cloud-transfers-rcloneview)

<CloudSupportGrid />
