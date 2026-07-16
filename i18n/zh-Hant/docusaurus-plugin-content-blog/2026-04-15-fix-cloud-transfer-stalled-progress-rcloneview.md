---
slug: fix-cloud-transfer-stalled-progress-rcloneview
title: "修復雲端傳輸進度停滯問題 — 使用 RcloneView 解決"
authors:
  - tayson
description: "修復 RcloneView 中停滯或凍結的雲端傳輸 — 診斷卡住的同步工作、解決逾時問題，並在不遺失資料的情況下重新啟動傳輸。"
keywords:
  - cloud transfer stuck
  - sync stalled fix
  - RcloneView transfer freeze
  - cloud upload stuck
  - fix stalled sync
  - rclone transfer timeout
  - cloud backup not progressing
  - resolve frozen transfer
  - cloud transfer hang
  - rclone timeout recovery
tags:
  - troubleshooting
  - tips
  - performance
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 修復雲端傳輸進度停滯問題 — 使用 RcloneView 解決

> 傳輸進度顯示 99% 卻停滯數小時，通常代表存在特定的潛在問題 — RcloneView 提供監控與控制工具，協助你診斷停滯原因，並在不遺失資料的情況下乾淨地重新啟動。

雲端傳輸在接近完成時凍結，或同步工作無限期執行卻遲遲無法完成，是最令人困擾的雲端管理問題之一。傳輸停滯通常源自大檔案觸發 API 逾時限制、rclone 重試機制無法復原的網路中斷，或服務商端的節流導致連線卡住。RcloneView 會呈現正在發生的狀況，讓你能精確地介入處理。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 診斷停滯原因

開啟 RcloneView 底部資訊檢視中的 **Transferring**（傳輸中）標籤。此面板會即時顯示進行中工作的進度：傳輸速度、檔案數量，以及目前正在處理的具體檔案。停滯狀況在此一目了然 — 速度降至 0 B/s，而特定檔案的進度毫無變化。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="RcloneView Transferring tab showing a stalled cloud transfer" class="img-large img-center" />

切換至 **Log**（記錄）標籤查看錯誤訊息。常見的停滯原因會在此以時間戳記顯示：
- **「too many requests」** — API 速率限制正在節流傳輸
- **「connection reset by peer」** — 網路中斷導致進行中的連線工作階段中斷
- **「EOF」** 或逾時訊息 — 服務商在大檔案上傳過程中關閉了連線

對於非常大的檔案（多 GB 的影片檔、資料庫傾印檔），問題通常出在服務商端於分段上傳（multipart upload）組裝過程中的連線工作階段逾時。上傳已完成，但服務商的連線工作階段在確認已完成的分段之前就已過期，導致 rclone 無限期等待。

## 復原停滯的傳輸

在 Transferring 標籤中點選進行中工作的 **Cancel**（取消），以取消停滯的工作。RcloneView 的同步與複製工作設計為可安全重新啟動 — 當你再次執行同一個工作時，rclone 會比對目的端已存在的內容，並跳過已成功傳輸的檔案。只有停滯的檔案（以及尚未開始的檔案）會被重試。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Canceling and restarting a stalled transfer job in RcloneView" class="img-large img-center" />

若特定大檔案傳輸至 S3 相容後端時持續停滯，可在 RcloneView 的全域 rclone 旗標（Settings > Embedded Rclone > Global Rclone Flags）中增加區塊大小：新增 `--s3-chunk-size 256M`，以減少大檔案組裝所需的 API 呼叫總數。

## 預防未來的停滯問題

將工作設定中的重試次數（Step 2: Advanced Settings > **Retry entire sync if fails**）設為 3 次或以上 — 這能確保暫時性的網路問題會觸發自動重試，而非立即導致工作失敗。對於在不穩定或速度較慢的連線（VPN、行動熱點）上進行的傳輸，降低**檔案傳輸數量**（同時傳輸數）可減少對連線的爭用。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history showing recovered transfers after stall resolution in RcloneView" class="img-large img-center" />

**Job History**（工作歷程記錄）標籤會顯示長期趨勢 — 若同一個工作固定在某個時段停滯，原因很可能是服務商端在尖峰時段的速率限制。將排程調整至離峰時段即可解決此問題，無需變更任何設定。

## 快速開始

1. 在 **Transferring 標籤**中監控傳輸 — 留意特定檔案速度是否降至 0 B/s。
2. 檢查 **Log 標籤**中的錯誤訊息，找出根本原因（逾時、速率限制、網路重置）。
3. 取消並重新啟動工作 — rclone 會從中斷處繼續，並跳過已完成的檔案。
4. 在 Advanced Settings 中增加重試次數並調整區塊大小，以預防未來再次停滯。

停滯的傳輸幾乎都能復原 — 關鍵在於找出原因是服務商端、網路端，還是設定相關，然後採取對應的解決方式。

---

**相關指南：**

- [使用 RcloneView 復原中斷或失敗的雲端傳輸](https://rcloneview.com/support/blog/recover-interrupted-failed-transfers-rcloneview)
- [修復緩慢的雲端上傳 — 使用 RcloneView 進行速度優化](https://rcloneview.com/support/blog/fix-slow-cloud-uploads-speed-optimization-rcloneview)
- [使用 RcloneView 監控工作歷程記錄與傳輸記錄](https://rcloneview.com/support/blog/job-history-transfer-logs-monitoring-rcloneview)

<CloudSupportGrid />
