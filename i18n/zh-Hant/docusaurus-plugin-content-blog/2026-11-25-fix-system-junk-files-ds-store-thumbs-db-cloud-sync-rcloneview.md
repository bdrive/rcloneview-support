---
slug: fix-system-junk-files-ds-store-thumbs-db-cloud-sync-rcloneview
title: "解決雲端同步中的 .DS_Store 與 Thumbs.db 雜亂問題 — 用 RcloneView 排除系統檔案"
authors:
  - morgan
description: "別再讓 .DS_Store、Thumbs.db 和 desktop.ini 檔案弄亂你的雲端備份。使用 RcloneView 篩選器將作業系統垃圾檔案排除在同步工作之外。"
keywords:
  - ds_store 檔案 雲端同步
  - thumbs.db 雲端儲存
  - 同步排除系統檔案
  - desktop.ini 雲端備份
  - rclone 排除 ds_store
  - RcloneView 自訂篩選器
  - 清理雲端同步垃圾檔案
  - 跨平台雲端同步雜亂檔案
  - rclone 篩選隱藏檔案
tags:
  - RcloneView
  - troubleshooting
  - tips
  - filters
  - cleanup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 解決雲端同步中的 .DS_Store 與 Thumbs.db 雜亂問題 — 用 RcloneView 排除系統檔案

> 把作業系統產生的垃圾檔案擋在雲端資料夾之外，讓每次同步只傳輸大家真正使用的檔案。

打開一個由 Mac 與 Windows 混合團隊同步的共用雲端資料夾，你通常會在幾乎每個目錄裡看到同樣的不速之客：macOS Finder 產生的 `.DS_Store`，以及 Windows 檔案總管產生的 `Thumbs.db` 和 `desktop.ini`。它們讓檔案清單變得雜亂、灌水檔案數量，而且每當兩台電腦存取同一資料夾時都會顯示為「不同」的檔案。RcloneView 能讓你在同步工作中排除這些檔案，並清理已經上傳到雲端的副本。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 為什麼系統檔案總是出現在雲端

這些檔案是中繼資料，而不是內容。Finder 寫入 `.DS_Store` 來記住圖示位置與檢視設定；Windows 寫入 `Thumbs.db` 來快取縮圖，寫入 `desktop.ini` 來儲存資料夾自訂設定。同步工具會像對待其他檔案一樣對待它們，因此從 MacBook 進行單向同步時，會把 `.DS_Store` 上傳到它造訪過的每個資料夾。

規模越大，問題越嚴重。一家備份 40,000 個專案資料夾的設計公司，儲存貯體裡可能會累積數萬個小型中繼資料檔案。每一個都是需要列出與比較的獨立物件，會拖慢後續的同步執行；而且每當同事在自己的電腦上瀏覽該資料夾時，檔案就會改變並再次被傳輸。

<img src="/support/images/en/blog/new-remote.png" alt="在設定同步排除規則之前，於 RcloneView 中新增雲端遠端" class="img-large img-center" />

## 用自訂篩選器排除垃圾檔案

解決方法從同步精靈開始。在 **Step 3: Filtering Settings** 中，為 `.DS_Store`、`Thumbs.db` 和 `desktop.ini` 新增自訂排除規則。自訂篩選器支援檔案類型、資料夾和路徑規則，因此你也可以排除從 Mac 格式化的外接硬碟同步時偶爾出現的 `.Trashes` 或 `.Spotlight-V100` 資料夾。

在正式執行工作之前，點擊 **Dry Run**。模擬會列出所有將被複製或刪除的檔案，讓你確認中繼資料檔案已從傳輸清單中移除。如果它們仍然出現，請檢查規則拼寫——篩選規則預設區分大小寫，因此 `Thumbs.db` 不會符合 `thumbs.db`。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="在 RcloneView 中執行套用篩選器的雲端同步工作" class="img-large img-center" />

## 清理已在雲端的檔案

篩選器能阻止新的雜亂檔案，但不會刪除已經存在的檔案。在一個 Explorer 面板中開啟雲端資料夾，在另一個面板中開啟本機來源，然後使用 **Compare**。本機已不存在的中繼資料檔案會出現在 "Show right-only files" 中；兩側仍都存在的副本則顯示為相同或不同的檔案。無論哪種情況，你都可以在比較檢視中直接選取並刪除雲端一側的副本。

這裡要留意單向同步。將來源鏡像到目的地的同步會刪除來源中已不存在的目的地檔案，但被排除的檔案會被完全略過——因此在 Compare 中進行清理，仍是刪除它們最清楚、最審慎的方式。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="RcloneView 的 Folder Compare 顯示雲端殘留的系統檔案" class="img-large img-center" />

## 每次執行都保持乾淨

將套用篩選器的同步儲存為 Job Manager 中的工作，這樣每次執行都會套用排除規則。RcloneView 在 Windows、macOS 和 Linux 上使用相同的篩選器執行這些工作，這在上傳者使用不同作業系統時特別重要。擁有 PLUS 授權時，你可以為工作設定排程，Job History 會顯示每次執行的檔案數——加入篩選器後檔案數突然下降，代表垃圾檔案已經消失。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="RcloneView 的 Job History 顯示排除系統檔案後的檔案數" class="img-large img-center" />

## 快速開始

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 建立或編輯同步工作，並在 Step 3 中將 `.DS_Store`、`Thumbs.db` 和 `desktop.ini` 新增為自訂排除篩選器。
3. 執行 Dry Run，確認中繼資料檔案已不在傳輸清單中。
4. 使用 Compare 找出並刪除已儲存在雲端的副本。

花幾分鐘設定篩選器，就能讓雲端資料夾清楚易讀，讓同步執行專注於真正的工作。

---

**相關指南：**

- [修正同步篩選器無法排除檔案的問題](https://rcloneview.com/support/blog/fix-sync-filters-not-excluding-files-rcloneview)
- [Rclone 篩選規則 — Include 與 Exclude 詳解](https://rcloneview.com/support/blog/rclone-filter-rules-include-exclude-explained-rcloneview)
- [清理已滿的雲端儲存帳戶](https://rcloneview.com/support/blog/manage-cloud-storage-full-cleanup-rcloneview)

<CloudSupportGrid />
