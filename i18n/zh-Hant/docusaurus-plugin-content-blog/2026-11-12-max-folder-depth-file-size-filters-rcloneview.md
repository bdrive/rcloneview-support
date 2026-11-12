---
slug: max-folder-depth-file-size-filters-rcloneview
title: "最大資料夾深度與最大檔案大小篩選器 — 在 RcloneView 中控制同步內容"
authors:
  - kai
description: "使用 RcloneView 的 Max folder depth 與 Max file size 篩選器略過深層子資料夾與超大檔案，讓雲端同步工作保持快速、聚焦。"
keywords:
  - 最大資料夾深度同步
  - 最大檔案大小篩選器
  - rclone max depth GUI
  - 雲端同步略過大型檔案
  - 限制同步資料夾層級
  - RcloneView 同步篩選器
  - 從備份中排除大型檔案
  - 選擇性雲端同步
  - 淺層資料夾同步
tags:
  - RcloneView
  - feature
  - filters
  - cloud-sync
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 最大資料夾深度與最大檔案大小篩選器 — 在 RcloneView 中控制同步內容

> 同步精靈中的兩個數字欄位，決定了工作能深入到哪一層，以及檔案多大時會被排除在外。

並不是每個同步工作都需要整個目錄樹。設計團隊可能只需要客戶 Dropbox 中的最上層交付資料夾，而不是所有巢狀的工作資料夾。將 Documents 備份到 OneDrive 的家庭使用者可能想排除幾個 30 GB 的磁碟映像檔。RcloneView 在同步精靈第 3 步中透過 **Max folder depth** 與 **Max file size** 處理這兩種情況，而且兩者在 FREE License 下皆可使用。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Max Folder Depth：限制工作深入的層級

Max folder depth 設定工作處理來源下多少層資料夾。更深的內容會被略過。較小的值可以把龐大、層級繁雜的來源變成只同步上層的淺層同步。

當重要檔案位於上層時，這一點很實用。例如，某代理商的 `Clients/` 資料夾中，每個客戶有一個資料夾存放最終交付物，同時還有深達十層的 `working/` 與 `cache/` 目錄樹。設定深度限制後，不必撰寫一長串排除規則，就能保留交付物並略過雜亂內容。

<img src="/support/images/en/blog/new-remote.png" alt="Adding a remote in RcloneView before configuring a depth-limited sync job" class="img-large img-center" />

深度限制會無聲地生效。如果測試執行時留下了深度限制，之後的同步中更深的子資料夾會在沒有任何錯誤的情況下消失。如果目的地缺少檔案，請先檢查這個欄位。

## Max File Size：排除超大檔案

Max file size 以 MB 為單位輸入，任何大於該值的檔案都會被排除。常見用法：

- 備份工作資料夾時排除 ISO 映像檔、虛擬機磁碟與原始影片。
- 讓同步到較小免費方案帳戶的資料保持在其限額內。
- 略過偶爾出現的超大匯出檔，讓夜間辦公檔案工作保持快速。

此欄位只設定上限。若要不論大小都排除某種已知檔案類型，請在同一步中新增自訂規則，例如 `.iso`。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a sync job with file size filters in RcloneView Job Manager" class="img-large img-center" />

## 與其他篩選器搭配使用

這兩個欄位可以與第 3 步中的其他選項搭配使用：Max file age（單位為 `y`、`d`、`h`、`m`、`s`）、預先定義的 Music、Video、Image、Document、Google Docs 與 Box Docs 篩選器，以及自訂規則。例如，一個工作可以只同步小於 50 MB、最近 30 天內修改過、且位於前三層資料夾內的文件。

篩選器會改變單向同步視為來源內容的範圍，因此請先執行 **Dry Run**。它會列出將被複製與刪除的檔案，讓您在任何變更發生前發現設定過嚴的限制。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job History in RcloneView showing file counts for filtered sync runs" class="img-large img-center" />

工作執行後，Job History 會顯示每次執行的檔案數與總大小。如果數量突然下降，通常代表篩選器設定有誤。

## 開始使用

RcloneView 可在 Windows、macOS 與 Linux 上透過一個視窗掛載並同步 90+ 個服務商。

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 開啟 Sync，選擇來源與目的地，並為工作命名。
3. 在第 3 步中設定 Max folder depth 與 Max file size（MB）。
4. 執行 Dry Run，檢查檔案清單，然後在 Job Manager 中儲存工作。

更小、更聚焦的工作完成得更快，占用的儲存空間更少，也更容易檢查。

---

**相關指南：**

- [依檔案類型同步的預先定義篩選器](https://rcloneview.com/support/blog/predefined-filters-sync-file-types-rcloneview)
- [Min Age 與 Max Age 時間型篩選器](https://rcloneview.com/support/blog/min-age-max-age-time-based-filters-rcloneview)
- [修正同步篩選器未排除檔案的問題](https://rcloneview.com/support/blog/fix-sync-filters-not-excluding-files-rcloneview)

<CloudSupportGrid />
