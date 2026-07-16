---
slug: sync-synology-google-drive-without-data-loss
title: "在不遺失資料的情況下同步 Synology NAS 與 Google Drive：先比對再同步的策略"
authors:
  - tayson
description: "使用「先比對（Compare-first）」的工作流程，安全地將 Synology NAS 與 Google Drive 或 OneDrive 同步。避免方向錯誤的同步、誤刪檔案，以及代價高昂的錯誤。"
keywords:
  - synology google drive sync
  - synology onedrive sync
  - nas cloud sync
  - synology sync without data loss
  - compare first sync
  - rcloneview synology
  - cloud sync safety
  - prevent wrong way sync
  - nas backup strategy
  - rcloneview compare
tags:
  - sync
  - file-management
---

import RvCta from '@site/src/components/RvCta';

# 在不遺失資料的情況下同步 Synology NAS 與 Google Drive：先比對再同步的策略

> NAS 與雲端之間的同步功能強大，但一旦方向錯誤，就可能刪除所有資料。採用「先比對」的工作流程，能讓 NAS 同步變得可預測且安全。

Synology NAS 搭配 Google Drive（或 OneDrive）是最常見的中小企業與家庭設定。問題在於，同步看似簡單，直到方向錯誤、雲端端的清理，或時間點不一致，導致大量檔案被刪除。本指南將說明如何在 RcloneView 中透過「先比對」策略，讓同步保持安全。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 為什麼 NAS 與雲端同步既受歡迎又有風險

NAS 是本機端的資料真實來源（source of truth）。雲端服務則提供了分享與異地保護的能力。但同步這件事並不容錯：

- 方向錯誤會清空目的端
- 其中一端的清理動作會刪除另一端的檔案
- NAS 的檔案語意與雲端 API 的行為並不相同

這正是為什麼「synology google drive sync delete」或「nas cloud sync problem」這類搜尋如此常見的原因。

## DSM Cloud Sync 簡單，但有其局限

DSM Cloud Sync 用起來很方便，但缺乏關鍵的安全控管機制：

- 沒有清楚的刪除預覽
- 對 NAS 系統檔案的過濾能力有限
- 在大型遷移時缺乏足夠的防護機制

如果你需要更精細的控制，就需要「先比對」的工作流程。

## 為什麼 Google Drive 和 OneDrive 特別容易出問題

- Google Drive 使用虛擬檔案結構與基於 API 的中繼資料。
- OneDrive 會產生衝突檔案，並有鎖定行為。
- NAS 則預期本機端的檔案語意與即時更新。

這些差異會放大同步錯誤的風險，除非你先驗證變更內容。

## 核心問題：盲目同步

盲目同步指的是在沒有先確認會發生哪些變更的情況下，直接點下「同步」。常見的意外情況包括：

- NAS 資料夾被清空 -> 執行同步 -> 雲端端所有檔案被刪除
- 雲端端進行清理 -> 執行同步 -> NAS 端所有檔案被刪除

「先比對」能透過在變更發生前先顯示結果，消除這種風險。

## 比對（Compare）與同步（Sync）：目的不同，風險也不同

- **比對（Compare）** 是唯讀且安全的操作，會顯示將發生的變更。
- **同步（Sync）** 會進行實際變更，且難以復原。

比對並非可有可無的步驟，而是安全防護的關卡。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare results filters" class="img-large img-center" />

## 逐步操作：安全的 NAS -> Google Drive / OneDrive 同步

### 步驟 1：定義同步範圍

- 不要同步整個 NAS 磁碟區
- 選擇特定的共享資料夾
- 依團隊或專案分開處理

### 步驟 2：先決定方向

- NAS -> 雲端：用於備份
- 雲端 -> NAS：用於還原
- 雙向同步是最危險的做法

### 步驟 3：每次同步前都先比對

檢查以下項目：

- 大量的刪除數量
- 意外的檔案數量變化
- 時間戳記或檔案大小不一致

<img src="/support/images/en/howto/rcloneview-basic/folder-comparison-completed.png" alt="Folder comparison completed" class="img-large img-center" />

## 先複製，再同步（更安全的做法）

**複製（Copy）** 更為安全，因為它不會刪除任何檔案。在執行同步之前，先用複製來驗證整個工作流程。

<img src="/support/images/en/tutorials/wasabi-and-local-compare-and-copy.png" alt="Compare and copy only changes" class="img-large img-center" />

當結構穩定之後，可以考慮使用「模擬執行（Dry Run）」的同步方式：

<img src="/support/images/en/howto/rcloneview-basic/sync-dry-run.png" alt="Sync dry run" class="img-large img-center" />

## 處理同步過程中的 NAS 系統檔案

NAS 目錄中經常包含：

- `@eaDir`
- 暫存快取
- 套件產生的中繼資料

這些檔案經常變動，會導致同步被重複觸發。請利用比對功能與過濾條件將它們排除。

## 「先比對」能降低成本與風險

- 減少 API 流量
- 加快同步週期
- 讓雲端用量更可預測
- 減少意外刪除的情況

## 自動化安全的同步作業

將整套工作流程儲存為工作（Job）並排程執行：

<div class="img-grid-2">
<img src="/support/images/en/howto/rcloneview-basic/save-sync-to-jobs.png" alt="Save sync to Jobs" class="img-large img-center" />
<img src="/support/images/en/howto/rcloneview-basic/add-job-scheduling.png" alt="Add job scheduling" class="img-large img-center" />
</div>

這能讓你擁有可重複使用的設定、歷史紀錄，以及更容易進行的稽核。

## 實際案例：NAS 同步情境

### 家用 NAS 照片備份

- NAS -> Google Drive
- 先比對，再複製

### 辦公室檔案伺服器

- NAS -> OneDrive
- 單向策略，過濾系統檔案

### 混合式工作流程

- NAS -> 雲端：用於備份
- 雲端 -> NAS：用於選擇性還原

## 常見迷思

**「雙向同步永遠是最好的選擇。」**
雖然方便，但卻是最危險的做法。

**「DSM Cloud Sync 就已經夠用了。」**
在簡單情境下沒問題，但規模一大就會出問題。

## 最佳實務檢查清單

- 每次同步前務必先比對
- 先從複製開始
- 保持範圍小
- 留意刪除數量
- 過濾 NAS 系統檔案

## 結論：先比對，同步才安全

NAS 搭配 Google Drive 或 OneDrive 的組合很強大，但前提是你必須掌控整個工作流程。「先比對」能讓同步變得安全、可預測且可復原。先確認，再複製，最後才同步。

