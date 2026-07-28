---
slug: fix-empty-folders-not-syncing-rcloneview
title: "修復空資料夾不同步的問題 — 使用 RcloneView 解決"
authors:
  - morgan
description: "同步後空資料夾不見了？了解 rclone 為何預設略過空資料夾，以及如何透過 RcloneView 的建立空目錄選項來解決此問題。"
keywords:
  - 空資料夾不同步
  - rclone 空目錄遺失
  - 修復雲端同步空資料夾
  - RcloneView 建立空目錄
  - 同步資料夾結構遺失
  - 雲端備份空資料夾
  - rclone 同步資料夾結構
  - RcloneView 同步疑難排解
tags:
  - RcloneView
  - troubleshooting
  - tips
  - cloud-sync
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 修復空資料夾不同步的問題 — 使用 RcloneView 解決

> 如果同步工作悄悄地從目的地捨棄了空資料夾，修復方法就是大多數使用者在設定時從未注意到的一個核取方塊。

在雲端之間遷移專案封存的團隊通常期望目的地能精確鏡像來源的資料夾結構 —— 包括那些尚未包含檔案的佔位資料夾。預設情況下，rclone(以及由此延伸的 RcloneView)不會在目的地建立空目錄，因為大多數物件儲存後端並沒有真正意義上的資料夾概念，它們只追蹤檔案鍵。如果你的同步工作成功完成，但目的地卻缺少了一批空的子資料夾，這是預期行為，而非缺陷 —— RcloneView 有一個內建設定可以改變這一點。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 為什麼空資料夾會遺失

本機檔案系統和一些供應商將資料夾儲存為真實物件，但許多雲端後端 —— 包括 S3 相容儲存 —— 僅將「資料夾」表示為檔案鍵共用的公共前置字元。當一個目錄中沒有任何檔案時，就沒有需要建立的鍵，因此對方看不到任何內容。rclone 的預設同步行為反映了這一點：它複製檔案，讓資料夾結構從檔案路徑中隱含產生，這樣可以維持傳輸速度，但會遺留下真正為空的資料夾。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job History showing a completed sync with no errors despite missing empty folders" class="img-large img-center" />

這就是為什麼一個同步工作可以回報「已完成」且零錯誤，而目的地資料夾樹卻比來源資料夾樹「更薄」。這不是傳輸失敗 —— 而是工具完全按照指示執行，只是少了大多數使用者以為會自動處理的一個細節。

## 啟用建立空目錄

RcloneView 直接在同步精靈中公開了這項行為。在第 1 步(設定儲存)中，除了來源和目的地選擇以及同步方向切換之外，還有一個**建立空目錄(Create empty directories)**選項。在執行工作之前啟用它，會告訴 rclone 在目的地明確建立空資料夾的佔位項目，使複製的結構與來源資料夾逐一對應。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Enabling create empty directories in the RcloneView sync configuration wizard" class="img-large img-center" />

如果你已經在未勾選此選項的情況下執行過同步，只需編輯現有工作、啟用該設定，然後再次執行即可 —— RcloneView 可在一個視窗中掛載並同步 90 多個供應商，因此針對相同的來源和目的地重新執行只是一個快速修復，而非完整的重新設定。

## 修復後驗證資料夾結構

在將大型遷移交給單次執行之前，使用 Dry Run 預覽修正後的工作實際會執行的操作 —— 它會列出所有預計建立的檔案和資料夾，而不會觸及目的地，這樣你就可以在提交之前確認空資料夾問題已經解決。對於持續進行的專案，之後使用 Folder Compare 也很有用：指向兩側，並依「僅左側」或「僅右側」篩選，以發現任何仍然存在的結構性不符。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Using Folder Compare to verify folder structure matches after enabling empty directory creation" class="img-large img-center" />

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 開啟缺少空資料夾的同步工作，點擊 Edit。
3. 在第 1 步中啟用**建立空目錄(Create empty directories)**核取方塊。
4. 執行 Dry Run 確認資料夾將被建立，然後執行同步。

啟用該設定後，該工作此後每次執行都會保留完整的資料夾樹 —— 再也不用在遷移後到處尋找遺失的佔位目錄了。

---

**相關指南:**

- [Dry Run — 使用 RcloneView 在傳輸前預覽雲端同步](https://rcloneview.com/support/blog/dry-run-preview-sync-before-transfer-rcloneview)
- [篩選規則 — 使用 RcloneView 進行選擇性同步](https://rcloneview.com/support/blog/filter-rules-selective-sync-rcloneview)
- [使用 RcloneView 避免因同步方向錯誤導致的資料遺失](https://rcloneview.com/support/blog/avoid-data-loss-wrong-sync-direction-rcloneview)

<CloudSupportGrid />
