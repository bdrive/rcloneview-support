---
slug: folder-compare-with-filter-rcloneview
title: "帶篩選器的資料夾比較 — RcloneView 中的精準比較"
authors:
  - alex
description: "使用 RcloneView 的篩選規則從資料夾比較中排除干擾項 —— 在比較前跳過建置產物、快取和不需要的檔案類型。"
keywords:
  - 資料夾比較篩選器
  - 從比較中排除檔案
  - RcloneView 篩選規則
  - 資料夾比較排除模式
  - 雲端資料夾差異篩選器
  - 跳過 .git 資料夾比較
  - 選擇性資料夾比較
  - 雲端備份驗證篩選器
tags:
  - RcloneView
  - feature
  - folder-comparison
  - filters
  - compare
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 帶篩選器的資料夾比較 — RcloneView 中的精準比較

> 只有當結果不會被你原本就不在意的檔案淹沒時，完整的資料夾比較才有意義。

在兩個大型儲存位置之間執行一般的資料夾比較，經常會得到一大堆與你實際需要核實的資料毫無關係的差異 —— 建置快取、`.git` 資料夾、暫存檔案，以及那些原本就不該被備份的 ISO 檔案。RcloneView 的帶篩選器的資料夾比較可讓你在比較執行前排除這些類別，使結果只反映真正重要的檔案。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 為什麼篩選後的比較很重要

對兩個大型目錄樹進行原始比較時，所有檔案都被視為同等重要，這代表帶有龐大 `.git` 歷史紀錄的原始碼儲存庫，或是裝滿 `.iso` 映像的專案資料夾，可能會掩蓋你實際想要找出的差異。將比較範圍篩選到相關的資料夾名稱與檔案類型，能把雜亂、難以閱讀的結果轉變成一份聚焦的清單，準確顯示你關心的資料中發生了哪些變更。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="RcloneView 中經篩選的資料夾比較結果" class="img-large img-center" />

RcloneView 在 FREE 授權下也提供同步與資料夾比較功能，而篩選比較則做為 PLUS 層級的強化功能疊加其上，供有此需求的團隊使用。

## 設定篩選規則

篩選規則遵循 RcloneView 其他地方使用的相同模式：依副檔名、資料夾路徑或確切的資料夾名稱排除。像 `.iso` 這樣的規則會從比較中排除所有 ISO 檔案，無論其位於何處；`/.git/*` 只排除根層級的 `.git` 檔案；`/.git/` 則專門移除根層級的 `.git` 資料夾；而 `.git/` 會剝離所有 `.git` 資料夾，無論巢狀多深。組合多條規則，可以將比較範圍精確縮小到值得檢視的檔案類型與路徑。

<img src="/support/images/en/blog/new-remote.png" alt="在 RcloneView 中為資料夾比較設定篩選規則" class="img-large img-center" />

這是一項 PLUS 授權功能 —— 未篩選的基本資料夾比較(顯示僅左側、僅右側、相同與不同的檔案)在所有授權層級皆可使用，篩選功能建立於同一個比較引擎之上。

## 實際篩選情境

將專案資料夾與雲端備份比較的開發團隊，通常會排除 `node_modules/`、`.git/` 以及建置輸出目錄，因為這些內容可以重新產生，不應影響對備份完整性的判斷。封存 RAW 相片庫的媒體團隊經常會排除側車快取檔案與縮圖預覽，使比較聚焦於實際的影像素材。而稽核兩個雲端帳戶之間遷移狀況的人員，則可以排除那些原本就不該在搬移後留存的暫存或草稿資料夾，藉此將「僅左側」與「僅右側」清單限制在真正需要留意的檔案。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="在針對差異採取行動前檢視篩選後的比較結果" class="img-large img-center" />

篩選比較完成後，適用的動作與其他資料夾比較相同：將僅左側的檔案複製到右側，在刪除前檢視僅右側的檔案，並更新任何被標記為不同的項目 —— 只是不會再受到刻意排除之檔案的干擾。

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 從主頁分頁啟動**比較**功能並選取你的兩個資料夾。
3. 開啟篩選設定，為想要排除的資料夾名稱與檔案類型新增排除規則。
4. 執行比較，並檢視僅限於真正重要內容的結果清單。

篩選後的比較能把一堆雜亂資訊變成簡短、可執行的清單 —— 這正是你在決定複製、更新或保留內容之前所需要的。

---

**相關指南：**

- [資料夾比較深度解析 — 偵測雲端儲存位置之間的每一處差異](https://rcloneview.com/support/blog/folder-comparison-guide-detect-differences-rcloneview)
- [Rclone 篩選規則詳解 — 使用 RcloneView 的包含與排除模式](https://rcloneview.com/support/blog/rclone-filter-rules-include-exclude-explained-rcloneview)
- [用於選擇性同步的篩選規則 — RcloneView 指南](https://rcloneview.com/support/blog/filter-rules-selective-sync-rcloneview)

<CloudSupportGrid />
