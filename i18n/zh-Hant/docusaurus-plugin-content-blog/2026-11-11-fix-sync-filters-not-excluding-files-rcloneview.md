---
slug: fix-sync-filters-not-excluding-files-rcloneview
title: "修正同步篩選器無法排除檔案的問題 — 用 RcloneView 撰寫正確的排除規則"
authors:
  - jay
description: "同步篩選器沒有排除檔案？了解 RcloneView 中排除規則漏掉資料夾的原因、如何撰寫正確的模式，以及如何用試執行（Dry Run）確認。"
keywords:
  - 同步篩選器無效
  - 從雲端同步中排除資料夾
  - rclone 篩選器無法排除檔案
  - RcloneView 篩選規則
  - 同步時排除 .git 資料夾
  - 雲端同步排除規則
  - 最大檔案大小篩選器
  - 試執行篩選器測試
  - 選擇性雲端同步疑難排解
tags:
  - RcloneView
  - troubleshooting
  - tips
  - filters
  - cloud-sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 修正同步篩選器無法排除檔案的問題 — 用 RcloneView 撰寫正確的排除規則

> 如果原本要排除的檔案仍出現在目的地，原因通常是模式的錨定方式，而不是篩選器壞了。

一位開發者將專案資料夾同步到 Backblaze B2，並加入了 `.git` 排除規則。隔天早上，儲存貯體裡仍然有成千上萬個 Git 物件。篩選規則遵循 rclone 的比對邏輯，因此少一個斜線就會改變規則比對的內容。RcloneView 將這些規則放在同步精靈的 Step 3，並提供試執行（Dry Run），讓你在任何檔案移動之前先行測試。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 排除規則為何會漏掉檔案

大多數篩選問題都來自錨定。以 `/` 開頭的模式只會從同步來源的根目錄開始比對。不帶 `/` 的模式則可在任何層級比對。RcloneView 篩選設定中的範例說明了兩者的差異：

- `.iso` 會排除目錄樹中任何位置具有該副檔名的檔案。
- `/.git/*` 只排除來源根目錄下 `.git` 資料夾中直接包含的檔案。
- `.git/` 會排除任何層級的所有 `.git` 資料夾，這正是大多數開發者想要的。

如果你只寫了 `/.git/*`，像 `client-a/app/.git` 這樣的巢狀儲存庫仍會被同步。由於 `*` 在資料夾邊界處停止，它們的子資料夾也一樣。改用不帶錨定的資料夾規則後，巢狀儲存庫就會被排除。

<img src="/support/images/en/blog/new-remote.png" alt="在設定同步篩選器之前於 RcloneView 中新增遠端" class="img-large img-center" />

第二個常見錯誤是選錯來源資料夾。根錨定的模式是相對於 Step 1 中所選的資料夾，因此將來源往上移一層就會改變它們比對的內容。

## 檢查其他篩選設定

精靈中的篩選器不只有自訂規則。Step 3 還提供 **Max file size**（以 MB 為單位）、**Max file age**（使用 `y`、`d`、`h`、`m`、`s` 單位）、**Max folder depth**，以及針對 Music、Video、Image、Document、Google Docs 和 Box Docs 的預先定義篩選器。這些設定會一併生效，因此早先複製的工作可能出現意料之外的行為。

例如，測試時設定後忘記移除的資料夾深度限制，會讓較深的子資料夾在毫無提示的情況下被略過。在重寫自訂規則之前，請在 Job Manager 中開啟工作，清除不需要的限制。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="RcloneView 中顯示篩選後同步結果的雲端對雲端傳輸畫面" class="img-large img-center" />

## 用試執行與比較驗證修正

切勿在實際資料上測試篩選器的變更。請先以試執行模式執行工作。它會列出將被複製的檔案與將被刪除的檔案。如果被排除的路徑仍出現在複製清單中，表示模式仍有錯誤。

請記得，被排除的檔案在目的地端同樣不會被處理。如果不需要的檔案已經進入儲存貯體，以新篩選器執行單向同步也不會移除它們。使用 Folder Compare 找出這些檔案，在目的地端選取多餘的 `.git` 資料夾並將其刪除。在 PLUS 授權下，Folder Compare with Filter 會將相同規則套用到比較中，讓畫面只顯示工作實際管理的內容。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="RcloneView 中顯示僅存在於一側檔案的 Folder Compare" class="img-large img-center" />

試執行結果確認無誤後，執行工作，並將 Job History 中的檔案數量與試執行預覽相互核對。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="RcloneView Job History 顯示修正篩選器後傳輸的檔案" class="img-large img-center" />

## 開始使用

同步工作、篩選器、試執行和 Folder Compare 都包含在 FREE 授權中。

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 開啟 Job Manager，編輯工作，檢查 Step 1 的來源資料夾與 Step 3 的篩選設定。
3. 當資料夾可能出現在任何層級時，將 `/.git/*` 這類根錨定模式改為 `.git/`。
4. 執行試執行，確認被排除的路徑已消失，再用 Folder Compare 清理殘留檔案。

精確的篩選規則能讓備份保持精簡，並避免建置產物與儲存庫資料計入你的雲端帳單。

---

**相關指南：**

- [Rclone 篩選規則詳解 — 包含與排除](https://rcloneview.com/support/blog/rclone-filter-rules-include-exclude-explained-rcloneview)
- [試執行 — 傳輸前預覽同步](https://rcloneview.com/support/blog/dry-run-preview-sync-before-transfer-rcloneview)
- [搭配篩選器的 Folder Compare](https://rcloneview.com/support/blog/folder-compare-with-filter-rcloneview)

<CloudSupportGrid />
