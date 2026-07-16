---
slug: resume-failed-cloud-transfers-rcloneview
title: "如何在 RcloneView 中續傳失敗的雲端傳輸，不必從頭開始"
authors:
  - tayson
description: "大型雲端傳輸經常失敗。網路中斷、API 節流、機器休眠。了解 RcloneView 如何處理中斷的傳輸，讓你不必從頭浪費頻寬重新開始。"
keywords:
  - resume cloud transfer
  - continue failed upload
  - cloud transfer interrupted
  - resume rclone transfer
  - partial upload resume
  - cloud sync resume
  - interrupted cloud migration
  - resume large file upload
  - cloud transfer restart
  - failed sync recovery
tags:
  - troubleshooting
  - performance
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 如何在 RcloneView 中續傳失敗的雲端傳輸，不必從頭開始

> 你正在把 2 TB 的資料從 Google Drive 遷移到 S3。傳到 1.3 TB 時，網路斷線了。要從頭再來一次嗎？絕對不用。

大型雲端傳輸難免會被中斷。網路故障、電腦休眠、API 限制觸發，或是服務商暫時性中斷。問題不在於傳輸會不會失敗，而在於你如何恢復。RcloneView 使用 rclone 的智慧續傳邏輯，讓你能從中斷的地方繼續進行。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 續傳的運作方式

當你在 RcloneView 中執行同步或複製工作時，rclone 會追蹤哪些內容已經傳輸完成。如果工作中斷後你再次執行，rclone 會自動：

1. **檢查目的地已有的內容** — 透過比對檔案名稱、大小與修改時間
2. **跳過已完成的檔案** — 已傳輸的檔案不會重新上傳
3. **續傳部分完成的檔案** — 對於支援此功能的服務商，部分上傳的檔案會從中斷處繼續

這意味著重新執行失敗的工作不會重新傳輸所有內容，只會處理缺失的部分。

## 實際復原步驟

### 步驟 1：檢查發生了什麼事

開啟工作歷史記錄，查看哪些檔案失敗以及原因：

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Review failed transfer details" class="img-large img-center" />

### 步驟 2：重新執行同一個工作

只需再次執行同一個同步或複製工作。RcloneView 會跳過所有已成功完成的內容，只傳輸剩餘的檔案：

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Re-run failed job" class="img-large img-center" />

### 步驟 3：驗證完整性

重新執行完成後，使用資料夾比對來確認所有內容都已傳輸：

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify complete transfer" class="img-large img-center" />

## 可靠大型傳輸的技巧

### 使用同步工作，而非一次性複製

同步工作天生就是可續傳的 — 它們會比對來源與目的地，然後只傳輸差異部分。將你的傳輸儲存為具名工作，這樣你隨時都能重新執行。

### 自動排程重試

對於可能失敗的夜間傳輸，可以排程同一個工作每隔幾小時執行一次。每次執行都會從上次中斷的地方繼續。當所有內容都傳輸完成後，後續的執行會立即完成，因為沒有內容需要處理。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule automatic retries" class="img-large img-center" />

### 監控進度

即時追蹤傳輸速率與檔案數量，及早發現問題：

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitor transfer progress" class="img-large img-center" />

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. **將傳輸儲存為具名工作**，方便重新執行。
3. **重新執行失敗的工作** — 它們會自動跳過已完成的檔案。
4. 完成後 **使用資料夾比對進行驗證**。

傳輸失敗只是路上的顛簸，不是無法跨越的高牆。

---

**相關指南：**

- [修正緩慢的雲端上傳](https://rcloneview.com/support/blog/fix-slow-cloud-uploads-speed-optimization-rcloneview)
- [工作歷史記錄與傳輸日誌](https://rcloneview.com/support/blog/job-history-transfer-logs-monitoring-rcloneview)
- [同步、複製與移動的差異](https://rcloneview.com/support/blog/sync-copy-move-difference-explained-rcloneview)

<CloudSupportGrid />
