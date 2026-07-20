---
slug: fix-slow-folder-compare-large-directories-rcloneview
title: "修復大型目錄資料夾比較速度緩慢問題 — RcloneView 指南"
authors:
  - jay
description: "加快 RcloneView 中大型目錄的資料夾比較操作速度 — 涵蓋檢查器並行數、篩選規則,以及高效比較數百萬個檔案的策略。"
keywords:
  - slow folder compare RcloneView
  - fix slow cloud directory comparison
  - RcloneView folder compare large files
  - speed up cloud folder comparison
  - RcloneView compare performance
  - large directory cloud comparison
  - folder compare timeout fix
  - optimize RcloneView compare
tags:
  - RcloneView
  - folder-comparison
  - troubleshooting
  - tips
  - performance
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 修復大型目錄資料夾比較速度緩慢問題 — RcloneView 指南

> 如果設定沒有經過最佳化,比較擁有數萬個檔案的目錄可能會非常緩慢。以下說明如何調整 RcloneView 的資料夾比較功能,以應對大規模的雲端目錄。

RcloneView 的資料夾比較是其最強大的功能之一 — 它能精確顯示兩個位置之間哪些檔案不同、哪些只存在於單一端,以及哪些完全相同。但如果設定沒有針對工作負載進行調整,比較兩個各有 500,000 個檔案的 S3 儲存桶,或是將 NAS 目錄與雲端封存進行比較,可能會非常緩慢。以下這些調整能將比較時間從數小時縮短至數分鐘。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 比較前先透過篩選縮小範圍

加快資料夾比較速度最快的方法,就是減少需要比較的檔案數量。使用**含篩選功能的資料夾比較**(PLUS 授權)來排除不需要驗證的檔案類型 — 例如,排除不會影響資料完整性評估的 `.tmp`、`.log` 和 `.DS_Store` 檔案。你也可以依資料夾名稱進行篩選,只比較大型目錄樹中的特定子目錄。

篩選語法遵循 rclone 的篩選規則:`.tmp` 會排除任何具有該副檔名的檔案,`/.git/*` 會排除根目錄 `.git` 資料夾中的檔案,而 `/archive/` 則會跳過整個頂層資料夾。在開始比較前套用這些規則,能大幅減少 rclone 需要列舉與雜湊計算的項目數量。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Using Folder Compare with filter to reduce scope in RcloneView" class="img-large img-center" />

## 針對速度較慢的後端調整檢查器並行數

RcloneView 的工作設定中包含**相等性檢查器數量**,預設值為 8。對於速度較慢的雲端後端(延遲較高或 API 速率限制較嚴格),這麼高的預設值可能導致檢查器堆積、等待 API 回應,反而拖慢速度。對於 Google Drive、OneDrive 或速度較慢的 WebDAV 伺服器等提供者,可嘗試將檢查器數量降低至 2–4。

相反地,對於 Wasabi 或 Cloudflare R2 這類快速的 S3 相容後端,將檢查器數量提高至 16 或更高,能顯著加快列舉大型儲存桶的速度。請嘗試不同的數值 — 最佳設定會因提供者與網路狀況而異。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Configuring checker concurrency for folder compare in RcloneView" class="img-large img-center" />

## 初次比對使用僅比較大小模式

預設情況下,rclone 會同時依檔案大小與修改時間進行比較。若要對非常大的目錄進行快速的初步比對,可以使用僅比較大小的模式,以便在不產生校驗碼驗證額外負擔的情況下,找出明顯的差異(僅存在於單一端的檔案,或大小明顯不同的檔案)。

在 RcloneView 中,你可以在**設定 → 內嵌 Rclone → 全域 Rclone 旗標**中,為比較工作階段加入 `--size-only` 作為全域 Rclone 旗標。這是以部分精確度換取速度 — 適用於大規模的初步稽核,之後再針對可疑檔案進行完整的校驗碼比較。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Reviewing folder compare history and timing in RcloneView" class="img-large img-center" />

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 比較前先使用**含篩選功能的資料夾比較**(PLUS)排除不相關的檔案類型。
3. 針對速度較慢的後端,將檢查器並行數降低至 2–4;針對快速的 S3 提供者則提高並行數。
4. 對非常大的目錄使用僅比較大小模式,進行快速的初步稽核。

只要有正確的設定,資料夾比較就能在不產生不必要延遲的情況下,擴展至跨雲端提供者的數百萬個檔案。

---

**相關指南:**

- [資料夾比較指南 — 使用 RcloneView 偵測差異](https://rcloneview.com/support/blog/folder-comparison-guide-detect-differences-rcloneview)
- [使用 RcloneView 的篩選規則與選擇性同步](https://rcloneview.com/support/blog/filter-rules-selective-sync-rcloneview)
- [使用 RcloneView 檢查並驗證雲端檔案完整性](https://rcloneview.com/support/blog/check-verify-cloud-file-integrity-rcloneview)

<CloudSupportGrid />
