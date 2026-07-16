---
slug: filter-rules-selective-sync-rcloneview
title: "RcloneView 篩選規則：排除資料夾與檔案類型，讓同步更快、更乾淨"
authors:
  - tayson
description: "使用 RcloneView 篩選規則建立選擇性同步工作流程，略過雜訊、減少雲端流量並保持備份乾淨。GUI 優先，無需 CLI 指令參數。"
keywords:
  - rclone filter rules
  - rclone exclude
  - rclone include
  - rcloneview filters
  - selective sync
  - cloud sync optimization
  - reduce sync time
  - file sync filters
  - rcloneview workflow
  - cloud backup efficiency
tags:
  - sync
  - file-management
---

import RvCta from '@site/src/components/RvCta';

# RcloneView 篩選規則：排除資料夾與檔案類型，讓同步更快、更乾淨

> 最快的同步就是忽略雜訊的同步。RcloneView 篩選規則能協助你略過快取資料夾、暫存檔案與建置產物，讓每次傳輸都有明確目的。

選擇性同步是最常被搜尋的 rclone 主題之一，因為它能直接節省時間、頻寬與雲端費用。多數指南只列出 CLI 指令參數就結束了。本文將說明如何在 RcloneView 中透過視覺化介面建立**以篩選為核心的工作流程**，讓結果可預測。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 為什麼篩選規則比以往更重要

雲端同步的成本與延遲，來自掃描與傳輸那些你根本不需要的檔案：

- 快取資料夾（`.cache`、`node_modules`、`.gradle`）
- 暫存或預覽檔案（`*.tmp`、`*_preview.*`）
- 自動產生的建置產物
- 對未變更檔案重複進行的中繼資料檢查

篩選規則能減少雜訊，讓每次同步或複製工作更小、更快、更安全。

## RcloneView 中篩選規則的作用

篩選規則定義了**在任何傳輸發生之前，該包含什麼與排除什麼**。在 RcloneView 中，你可以透過同步／工作介面套用篩選規則，不需要記住 CLI 語法。

使用篩選規則可以：

- 排除整個資料夾
- 只包含特定的專案路徑
- 略過你從不想備份的檔案類型
- 保護敏感或不相關的資料

## 在 GUI 中設定篩選規則的位置

執行同步或建立工作時，可以加入篩選規則：

<img src="/support/images/en/howto/rcloneview-basic/sync-filtering-settings.png" alt="Sync filtering settings" class="img-large img-center" />

幾秒內即可新增自訂規則：

<img src="/support/images/en/howto/rcloneview-basic/add-custom-filter-rule.png" alt="Add custom filter rule" class="img-large img-center" />

依需要編輯與調整規則：

<img src="/support/images/en/howto/rcloneview-basic/addjust-custom-filter-rule.png" alt="Adjust custom filter rule" class="img-large img-center" />

## 實用的篩選規則（可直接複製使用的範例）

### 排除常見雜訊

- `**/node_modules/**`
- `**/.cache/**`
- `**/*.tmp`
- `**/*.log`

### 只同步你的工作資料夾

- 包含：`**/Projects/**`
- 排除：`**/Downloads/**`

### 媒體專案規則

- 包含：`**/*.mp4`、`**/*.mov`、`**/*.wav`
- 排除：`**/*_proxy.*`、`**/*_preview.*`

### 設計／創意工作流程

- 包含：`**/*.psd`、`**/*.ai`、`**/*.blend`
- 排除：`**/renders/**`、`**/cache/**`

## 先比較，再篩選，最後同步

篩選規則在經過視覺化驗證後才最安全：

1. 執行**比較**，查看將會發生哪些變更。
2. 若有重要內容消失，調整篩選規則。
3. 有信心地執行同步。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare results filters" class="img-large img-center" />

指南：[/support/howto/rcloneview-basic/compare-folder-contents](/howto/rcloneview-basic/compare-folder-contents)

## 以篩選為核心的工作流程（設計上即安全）

### 步驟 1：確認來源與目的地

在套用篩選規則前，先使用「設定儲存空間」步驟驗證路徑。

<div class="img-grid-2">
<img src="/support/images/en/howto/rcloneview-basic/sync-configure-storage.png" alt="Sync configure storage" class="img-large img-center" />
<img src="/support/images/en/howto/rcloneview-basic/sync-advanced-settings.png" alt="Sync advanced settings" class="img-large img-center" />
</div>

### 步驟 2：套用篩選規則

根據你的工作流程加入排除與包含規則。

<img src="/support/images/en/howto/rcloneview-basic/sync-filtering-settings.png" alt="Sync filtering settings" class="img-large img-center" />

### 步驟 3：試跑以進行驗證

執行試跑（Dry Run），在移動資料前確認篩選後的結果集。

<div class="img-grid-2">
<img src="/support/images/en/howto/rcloneview-basic/sync-dry-run.png" alt="Sync dry run" class="img-large img-center" />
<img src="/support/images/en/howto/rcloneview-basic/sync-dry-run-details.png" alt="Sync dry run details" class="img-large img-center" />
</div>

## 將篩選後的工作流程儲存為工作

篩選規則確認無誤後，將此同步儲存為工作：

- 每次執行行為一致
- 減少人為錯誤
- 便於為自動備份排程

<div class="img-grid-2">
<img src="/support/images/en/howto/rcloneview-basic/save-sync-to-jobs.png" alt="Save sync to Jobs" class="img-large img-center" />
<img src="/support/images/en/howto/rcloneview-basic/add-job-scheduling.png" alt="Add job scheduling" class="img-large img-center" />
</div>

指南：[/support/howto/rcloneview-basic/create-sync-jobs](/howto/rcloneview-basic/create-sync-jobs)

## 為篩選後的同步排程

使用工作排程來自動化選擇性備份：

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Create job schedule" class="img-large img-center" />

指南：[/support/howto/rcloneview-advanced/job-scheduling-and-execution](/howto/rcloneview-advanced/job-scheduling-and-execution)

## 篩選規則帶來的實際效益

- **更快的同步速度**：掃描與傳輸的檔案更少
- **更低的成本**：更少的 API 流量與重複上傳
- **更乾淨的備份**：只保留有意義的檔案
- **更穩定的運作**：工作記錄更小，疑難排解更容易

## 應避免的常見錯誤

- 過度篩選關鍵資料夾（先用比較功能測試）
- 混用包含／排除規則卻沒有明確順序
- 在大型遷移中略過試跑
- 誤以為篩選規則會回溯套用到舊資料

## 最佳實務摘要

- 讓篩選規則成為每個同步或複製工作的一部分。  
- 使用比較功能驗證篩選規則會移除哪些內容。  
- 在套用到完整資料集前，先以小型測試資料夾嘗試。  
- 儲存篩選後的工作以確保可重複性與可稽核性。  

## 結語

選擇性同步是讓雲端作業更快、更省成本的最快方法。RcloneView 將複雜的 rclone 篩選規則轉化為你能理解、測試並自動化的視覺化工作流程。從排除一個雜亂的資料夾開始，你會在下一次執行時就看到同步時間下降。

