---
slug: fix-cloud-sync-stuck-hanging-rcloneview
title: "修復雲端同步卡在 99% 或無回應——在 RcloneView 中排除傳輸停滯問題"
authors:
  - tayson
description: "您的雲端同步已經執行了好幾個小時，但似乎卡住了。進度顯示 99% 卻無法完成。以下說明是什麼原因造成傳輸停滯，以及如何修復。"
keywords:
  - cloud sync stuck
  - cloud transfer hanging
  - sync stuck 99 percent
  - cloud upload frozen
  - rclone transfer stuck
  - cloud sync not completing
  - fix stalled cloud transfer
  - cloud sync timeout
  - cloud upload hanging
  - rclone sync frozen
tags:
  - troubleshooting
  - performance
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 修復雲端同步卡在 99% 或無回應——在 RcloneView 中排除傳輸停滯問題

> 進度條顯示 99%。已經顯示 99% 長達 45 分鐘。它還在運作嗎？是不是卡住了？該取消嗎？以下說明如何診斷並修復停滯的雲端傳輸。

停滯的雲端傳輸是雲端同步中最令人沮喪的問題之一。工作看起來正在執行，進度指示器幾乎不動，讓您不確定該等待還是重新開始。好消息是：傳輸停滯幾乎總是有特定且可修復的原因。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 常見原因

### 1) 大檔案接近完成

最常見的「假警報」。一個 50 GB 的檔案完成 98% 時，還剩 1 GB。以 10 MB/s 的速度計算，還需要 100 秒——但進度條幾乎不動，因為它衡量的是檔案數量，而非位元組數。

**修復方式**：監控傳輸速度指示器。如果位元組仍在流動，代表傳輸正在運作——只是最後一個大檔案傳輸得比較慢。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Check if bytes are flowing" class="img-large img-center" />

### 2) API 速率限制節流

當您觸及 API 限制時，Google Drive、OneDrive 及其他提供商會對傳輸進行節流。傳輸速度會變得非常緩慢，但不會失敗。

**修復方式**：減少並行傳輸數量。透過內建終端機加入 `--tpslimit`。

### 3) 大檔案的網路逾時

某些提供商會在長時間執行的上傳過程中悄悄斷線。傳輸看起來仍在進行中，但實際上沒有資料在移動。

**修復方式**：在您的遠端設定中配置逾時。使用 `--timeout` 更早偵測到停滯情況。

### 4) 檔案被其他程序鎖定

來源檔案在另一個應用程式中開啟。傳輸會等待存取權限。

**修復方式**：關閉可能正在使用該檔案的應用程式，或使用篩選器排除正在使用中的檔案。

### 5) 提供商端處理

某些提供商會在確認完成之前處理已上傳的檔案（病毒掃描、索引建立）。這會在上傳完成與確認之間產生一段延遲。

**修復方式**：等待。這通常會在 1-5 分鐘內解決。

### 6) 記憶體耗盡

非常龐大的傳輸清單（數百萬個檔案）可能會耗盡可用記憶體，導致程序速度大幅下降。

**修復方式**：依資料夾將傳輸拆分為較小的批次。

## 診斷步驟

### 檢查工作歷史記錄

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Check job status" class="img-large img-center" />

### 使用終端機取得詳細輸出

在 RcloneView 的終端機中執行相同的操作，並加上 `-vv` 旗標以取得詳細的診斷輸出。

### 取消並重新執行

如果傳輸確實卡住了，取消並重新執行該工作。RcloneView 會跳過已傳輸的檔案，並從停滯處繼續執行。

## 預防措施

- 在遠端設定中**設定合理的逾時時間**
- **使用適度的並行數**（4-8 個傳輸），以避免觸及速率限制
- 將大型工作**拆分為較小的批次**
- **排程重試**——如果夜間工作停滯，第二次排程執行可以補上進度

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. **檢查傳輸速度**——如果位元組仍在流動，代表正常運作中。
3. 如果遭到速率限制，**降低並行數**。
4. 如果確實卡住了，**取消並重新執行**。

卡在 99% 幾乎總是因為最後一個大檔案完成得比較慢。

---

**相關指南：**

- [修復緩慢的雲端上傳](https://rcloneview.com/support/blog/fix-slow-cloud-uploads-speed-optimization-rcloneview)
- [恢復失敗的傳輸](https://rcloneview.com/support/blog/resume-failed-cloud-transfers-rcloneview)
- [雲端 API 速率限制詳解](https://rcloneview.com/support/blog/cloud-api-rate-limits-explained-rcloneview)

<CloudSupportGrid />
