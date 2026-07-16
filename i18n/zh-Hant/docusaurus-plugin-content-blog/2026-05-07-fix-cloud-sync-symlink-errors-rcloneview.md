---
slug: fix-cloud-sync-symlink-errors-rcloneview
title: "修復雲端同步符號連結錯誤 — 使用 RcloneView 解決連結傳輸問題"
authors:
  - tayson
description: "了解如何修復 RcloneView 雲端同步過程中的符號連結錯誤 — 理解 rclone 如何處理符號連結，並設定正確的選項以避免失敗。"
keywords:
  - symlink errors cloud sync
  - rclone symlink
  - RcloneView troubleshooting
  - copy-links flag
  - cloud sync errors
  - symbolic link transfer
  - rclone flags
  - file sync errors
tags:
  - troubleshooting
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 修復雲端同步符號連結錯誤 — 使用 RcloneView 解決連結傳輸問題

> 符號連結可能在不知不覺中破壞雲端同步作業 — 以下說明如何理解 rclone 的符號連結行為，並正確設定 RcloneView 以妥善處理它們。

如果您的雲端同步作業出現非預期的錯誤，或是檔案似乎不見了，符號連結可能就是罪魁禍首。驅動 RcloneView 的引擎 rclone，對符號連結有特定的預設行為，這常常讓許多使用者措手不及。了解這項行為，並知道該在 RcloneView 中調整哪些設定，就能快速解決大多數與符號連結相關的同步問題。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Rclone 預設如何處理符號連結

預設情況下，rclone 會跟隨符號連結，並傳輸該符號連結所指向的檔案或目錄 — 它不會傳輸符號連結本身。這表示如果您有一個指向系統其他位置某個大檔案的符號連結，rclone 會將實際的檔案內容複製到雲端目的地。在大多數情況下，這正是預期的行為，但當符號連結的目標不存在、位於同步根目錄之外，或造成循環參照時，就可能引發混淆。

當符號連結的目標遺失或無法存取時，rclone 會記錄一則錯誤並跳過該符號連結。在冗長的傳輸紀錄中，這些被跳過的檔案很容易被忽略。RcloneView 的**作業歷史記錄**面板會記錄這些錯誤，因此請務必在作業完成後檢查歷史記錄，以確認沒有檔案被悄悄跳過。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Checking job history for symlink errors in RcloneView" class="img-large img-center" />

## 在 RcloneView 中使用 --copy-links 旗標

如果您希望 rclone 跟隨符號連結並複製目標內容（即使該目標位於同步根目錄之外），可以透過 RcloneView 的**全域 Rclone 旗標**設定傳入 `--copy-links` 旗標。開啟 RcloneView 偏好設定，找到**全域 Rclone 旗標**欄位，並加入 `--copy-links`。這會指示 rclone 將符號連結視為一般檔案，複製其底層內容。

在符號連結指向非常龐大目錄的系統上，請謹慎使用 `--copy-links`，因為它可能會大幅增加傳輸大小。另外請注意，某些雲端儲存供應商對檔名或路徑長度有限制，如果符號連結的目標路徑過長，可能會導致問題。

<img src="/support/images/en/blog/new-remote.png" alt="Configuring global rclone flags in RcloneView settings" class="img-large img-center" />

## 使用篩選器排除符號連結

對許多工作流程而言，更安全的替代做法是將符號連結完全排除在同步範圍之外。在 RcloneView 的作業設定中，您可以加入篩選規則來跳過符號連結。使用 `--exclude` 選項並搭配與您的符號連結名稱相符的樣式，或使用 `--links` 將符號連結複製為文字檔（儲存連結目標路徑，而非實際內容）。這種做法能讓您的同步結果保持可預期，不會有意外造成大量傳輸的風險。

對於像軟體開發儲存庫這類經常使用符號連結的專案，在執行正式同步前，將篩選規則與試跑（dry run）結合使用是最佳做法。RcloneView 的試跑模式會精確顯示哪些檔案將被傳輸、跳過或發生錯誤 — 讓您在進行完整同步前更有把握。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Using filters and dry run to handle symlinks in RcloneView" class="img-large img-center" />

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 同步失敗後，開啟**作業歷史記錄**以找出與符號連結相關的錯誤訊息。
3. 前往 RcloneView 偏好設定，若希望傳輸符號連結內容，請在**全域 Rclone 旗標**中加入 `--copy-links`。
4. 或者，在**作業精靈**中加入篩選規則，將符號連結排除在同步範圍之外。
5. 在執行正式同步前，先執行**試跑**以確認行為是否符合預期。

正確處理符號連結是那種看似微小、卻能大幅提升同步可靠性的設定細節 — 而 RcloneView 提供了所有讓您做對這件事的工具。

---

**相關指南：**

- [RcloneView 中的自訂 Rclone 旗標與進階選項](https://rcloneview.com/support/blog/custom-rclone-flags-advanced-options-rcloneview)
- [RcloneView 中選擇性同步的篩選規則](https://rcloneview.com/support/blog/filter-rules-selective-sync-rcloneview)
- [使用 RcloneView 排解 Rclone 錯誤](https://rcloneview.com/support/blog/troubleshoot-rclone-errors-rcloneview)

<CloudSupportGrid />
