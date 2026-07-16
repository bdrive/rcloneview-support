---
slug: job-history-transfer-logs-monitoring-rcloneview
title: "透過工作歷史與記錄追蹤雲端傳輸——在 RcloneView 中監控每一次同步與備份"
authors:
  - tayson
description: "透過 RcloneView 的工作歷史與傳輸記錄，追蹤每一個雲端同步、複製與備份工作。長期監控成功、失敗與效能表現。"
keywords:
  - cloud transfer history
  - sync job log
  - cloud backup monitoring
  - transfer log cloud
  - rclone job history
  - cloud sync monitoring
  - backup job tracking
  - cloud transfer status
  - rclone transfer log
  - cloud job monitoring tool
tags:
  - monitoring
  - job-history
  - feature
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 透過工作歷史與記錄追蹤雲端傳輸——在 RcloneView 中監控每一次同步與備份

> 你上週排程了一個備份工作。它真的執行了嗎？有成功完成嗎？傳輸了多少檔案？如果沒有工作歷史，你只能用猜的。有了 RcloneView，每個工作都會留下軌跡。

設定雲端同步只是第一步。確認它能可靠運作才是第二步——而且可以說更為重要。RcloneView 的工作歷史會追蹤每一次執行：何時執行、耗時多久、傳輸了多少檔案，以及是否發生錯誤。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 為什麼工作歷史很重要

### 無聲的失敗

最糟糕的備份失敗，就是你根本不知道它失敗了。常見的無聲問題包括：

- **OAuth 權杖過期**——雲端服務商撤銷了存取權限，工作靜靜地失敗。
- **磁碟空間不足**——目的地在傳輸過程中空間耗盡。
- **速率限制**——服務商限制了傳輸速度，部分檔案被跳過。
- **網路逾時**——間歇性的連線問題導致傳輸不完整。

如果沒有工作歷史，這些問題會一直不被察覺，直到你需要還原資料時，才發現你的「備份」其實已經是好幾個月前的了。

### 合規性與稽核

某些產業要求提供已完成備份的書面證明。工作歷史可以提供：

- 每次工作執行的時間戳記。
- 檔案數量與傳輸容量。
- 成功／失敗狀態。
- 用於疑難排解的錯誤詳情。

## RcloneView 中的工作歷史

### 檢視過去的執行紀錄

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history view" class="img-large img-center" />

每一筆紀錄會顯示：

- **工作名稱**——執行的是哪一個同步／複製／移動工作。
- **開始時間**——執行何時開始。
- **持續時間**——耗費了多長時間。
- **狀態**——成功、部分完成或失敗。
- **已傳輸檔案數**——移動的檔案數量。
- **資料量**——傳輸的總位元組數。
- **錯誤**——錯誤數量（如果有的話）。

### 觀察趨勢

隨著時間累積，工作歷史會揭露出一些模式：

- **持續時間增加**——你的資料集正在成長，或效能正在下降。
- **間歇性失敗**——特定日子出現網路或服務商問題。
- **零傳輸**——沒有任何變更（對增量同步而言屬正常現象），或該工作根本沒有正常運作。
- **錯誤激增**——速率限制、權限問題或儲存空間已滿。

## 即時傳輸監控

當工作正在執行時，可以即時監控進度：

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Real-time transfer monitoring" class="img-large img-center" />

即時監控會顯示：

- **目前速度**——MB/s 或 GB/s。
- **進行中的傳輸**——並行檔案操作的數量。
- **進度**——完成百分比。
- **預估剩餘時間**——預估還需要多久完成。
- **錯誤**——即時的錯誤計數。

## 失敗通知

v1.3 新增了 Slack、Discord 與 Telegram 通知功能。設定提醒後，你可以在以下情況第一時間得知：

- 排程工作失敗。
- 工作完成但出現錯誤。
- 工作成功完成（可選擇性確認）。

這就是「我的備份大概有跑吧」和「我的備份確實有跑——我收到 Slack 訊息了」之間的差別。

## 透過記錄進行疑難排解

當工作失敗時，傳輸記錄會確切告訴你原因：

- **403 Forbidden**——速率限制或權限問題。
- **404 Not Found**——來源檔案在傳輸過程中被刪除。
- **429 Too Many Requests**——服務商進行了限流。
- **Timeout**——網路連線問題。
- **磁碟空間不足**——目的地空間不足。

## 最佳實務

### 每週檢視工作歷史

每週一花 2 分鐘檢視過去一週的工作執行狀況。在問題演變成危機之前及早發現。

### 設定失敗提醒

不要只依賴人工檢查。為工作失敗設定 Slack 或 Discord 通知。

### 出錯後進行驗證

當工作回報錯誤時，接著使用「資料夾比對」功能，準確找出哪些檔案遺失或有差異：

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify after job errors" class="img-large img-center" />

### 重試失敗的傳輸

v1.3 的重試功能可以自動重新執行失敗的檔案傳輸。若失敗持續發生，請使用記錄調查根本原因。

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. **建立並排程你的同步／備份工作**。
3. 透過工作歷史**監控執行狀況**。
4. **設定通知**以取得失敗提醒。
5. **每週檢視**——信任，但仍要驗證。

不被監控的備份，是無法信任的備份。

---

**相關指南：**

- [建立同步工作](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [工作排程](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)
- [比對資料夾內容](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)

<CloudSupportGrid />
