---
slug: fix-junk-system-files-ds-store-thumbs-db-sync-rcloneview
title: "清理雲端同步中的系統垃圾檔案 — 用 RcloneView 排除 .DS_Store 和 Thumbs.db"
authors:
  - kai
description: "別再讓 .DS_Store、Thumbs.db 和 desktop.ini 弄亂你的雲端備份。使用 RcloneView 的同步篩選器、Dry Run 和資料夾比較將它們排除在外。"
keywords:
  - 雲端同步排除 .DS_Store
  - Thumbs.db 雲端備份
  - desktop.ini 同步雜亂檔案
  - 刪除雲端儲存中的垃圾檔案
  - rclone 排除系統檔案
  - RcloneView 自訂篩選器
  - macOS Windows 雲端同步清理
  - 隱藏檔案同步篩選器
  - 跨平台雲端同步技巧
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

# 清理雲端同步中的系統垃圾檔案 — 用 RcloneView 排除 .DS_Store 和 Thumbs.db

> 作業系統產生的中繼資料檔案會讓備份變得雜亂。幾條篩選規則就能把它們徹底擋在外面。

打開一個同時被 Mac 和 Windows PC 使用過的共用雲端資料夾，你通常會發現每個目錄裡都有 `.DS_Store`，每批圖片旁邊都有 `Thumbs.db`，整個目錄樹中還散落著 `desktop.ini`。它們體積很小，卻會增加檔案數量，在比較時顯示為「不同」，並觸發不必要的重複上傳。RcloneView 可以透過篩選規則將它們排除在同步工作之外，然後確認目的地是乾淨的。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 為什麼這些檔案總是反覆出現

macOS Finder 會寫入 `.DS_Store` 來儲存資料夾的顯示設定。Windows 檔案總管會建立 `Thumbs.db` 來快取圖片縮圖，並建立 `desktop.ini` 來儲存資料夾自訂設定。每當有人瀏覽已同步的資料夾或已掛載的磁碟機時，作業系統都可能重寫這些檔案，於是下一次同步會將其視為「已變更」的檔案並再次傳輸。

設想一家設計公司在 NAS 上有 40,000 個專案資料夾，每晚同步到雲端。即使實際工作只在少數資料夾中有所變動，每個被瀏覽過的資料夾仍可能產生新的中繼資料檔案，使工作日誌變得雜亂，並淹沒真正重要的傳輸。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="RcloneView Job History showing file counts inflated by system metadata files" class="img-large img-center" />

## 為同步工作新增排除篩選器

在 **Job Manager** 中開啟工作並點擊 **Edit**，然後進入 **Step 3: Filtering Settings**。在自訂篩選器中，為每個檔名新增一條排除規則：`.DS_Store`、`Thumbs.db` 和 `desktop.ini`。如果團隊也使用 Office，可以考慮排除以 `~$` 開頭的暫存鎖定檔。這些規則使用 rclone 的篩選語法，與文件中 `.iso` 和 `.git/` 等範例的語法相同。

篩選器在工作每次執行時都會生效，包括 PLUS 授權下的排程執行，因此只需設定一次。使用 Job Manager 中的 **Export** 將工作儲存為 JSON 檔案，再於其他電腦上 **Import**，即可讓所有人使用相同的規則。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Editing sync job settings in RcloneView to add exclusion filters" class="img-large img-center" />

## 預覽、清理與驗證

儲存後執行 **Dry Run**。預覽中應不再列出待傳輸的中繼資料檔案。如果它們仍然出現，請檢查每條規則的拼寫和大小寫，因為拼寫錯誤是篩選器看似被忽略的常見原因。

篩選器可以阻止新副本被傳輸，但已經存在於雲端的檔案仍會保留。在 Explorer 面板中開啟目的地，找到殘留檔案，並透過右鍵 **Delete** 刪除。若要全面檢查，請在來源和目的地之間開啟 **Compare**，使用「Show right-only files」找出先前執行遺留的中繼資料檔案。在 PLUS 授權下，Folder Compare with Filter 可以將相同的排除規則套用到比較檢視。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Using RcloneView Folder Compare to find leftover .DS_Store and Thumbs.db files" class="img-large img-center" />

## 開始使用

RcloneView 在 Windows、macOS 和 Linux 上透過一個視窗掛載和同步 90+ 種服務，因此無論檔案由哪個作業系統建立，都能使用相同的篩選規則。

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 編輯同步工作，將 `.DS_Store`、`Thumbs.db` 和 `desktop.ini` 新增為自訂排除篩選器。
3. 執行 **Dry Run**，確認中繼資料檔案不再出現在傳輸清單中。
4. 使用 **Compare** 找出並刪除已殘留在雲端的檔案。

更短的工作日誌和更乾淨的備份，讓真正重要的變更更容易被發現。

---

**相關指南：**

- [修正同步篩選器無法排除檔案的問題 — 在 RcloneView 中設定正確的排除規則](https://rcloneview.com/support/blog/fix-sync-filters-not-excluding-files-rcloneview)
- [最大資料夾深度和最大檔案大小篩選器 — 在 RcloneView 中控制同步內容](https://rcloneview.com/support/blog/max-folder-depth-file-size-filters-rcloneview)
- [修正 macOS 桌面和文件資料夾顯示為空的問題 — RcloneView 權限設定](https://rcloneview.com/support/blog/fix-macos-empty-folders-permissions-rcloneview)

<CloudSupportGrid />
