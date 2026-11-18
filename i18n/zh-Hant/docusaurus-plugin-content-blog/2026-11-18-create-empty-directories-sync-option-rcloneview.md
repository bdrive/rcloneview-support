---
slug: create-empty-directories-sync-option-rcloneview
title: "建立空目錄 — 在 RcloneView 中同步時保留完整資料夾結構"
authors:
  - alex
description: "使用 RcloneView 的「Create empty directories」同步選項，在雲端儲存與本機磁碟之間複製完整的資料夾樹，包括空的專案資料夾。"
keywords:
  - 建立空目錄 同步
  - rclone create empty src dirs
  - 雲端同步 保留資料夾結構
  - 複製空資料夾到雲端
  - 同步 Google Drive 空資料夾
  - 資料夾範本備份
  - RcloneView 同步選項
  - rclone 空資料夾未複製
  - 雲端目錄樹鏡像
tags:
  - RcloneView
  - feature
  - cloud-sync
  - file-management
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 建立空目錄 — 在 RcloneView 中同步時保留完整資料夾結構

> 如果資料夾配置和檔案本身一樣重要，只要勾選一個核取方塊，空資料夾也會送達目的地。

預設情況下，rclone 複製的是檔案而非資料夾，因此來源端的空目錄永遠不會出現在目的地。這通常沒什麼問題，直到你還原備份時才發現團隊依賴的 `/Invoices/2027`、`/Raw` 和 `/Exports` 資料夾都不見了。RcloneView 在同步精靈中將此行為提供為單一選項，讓你無需輸入 rclone 參數即可保留整個目錄樹。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 空資料夾為何會消失

rclone 移動的是物件。同步工作會走訪來源端、找到檔案，並在目的地重建每個檔案的路徑。不含檔案的資料夾沒有任何可傳輸的內容，因此工作會略過它。許多雲端服務，尤其是 S3 風格的物件儲存，根本不會把資料夾當作獨立物件儲存。在那裡，「資料夾」只是檔名中共同的前綴。

這會讓依賴資料夾範本的人措手不及。影片製作公司可能以 `01_Footage`、`02_Audio`、`03_Graphics` 和 `04_Deliverables` 這樣的骨架展開每個案子。會計事務所可能在文件送達前，就先依客戶、依年份建立資料夾。如果這些空骨架沒有同步，目的地端的協作者看到的就是不完整的配置。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Syncing a project folder tree between two cloud remotes in RcloneView" class="img-large img-center" />

## 啟用 Create empty directories

此選項位於同步精靈的 **Step 1: Configure Storage**，與來源、目的地及同步方向設定並列。選擇來源和目的地後，勾選 **Create empty directories**。工作執行時，RcloneView 會讓 rclone 在目的地重建來源端的空資料夾，這相當於 rclone `--create-empty-src-dirs` 參數的 GUI 版本。

由於此設定會隨工作一起儲存，因此無論你是從 Job Manager 手動啟動，或由 PLUS 排程觸發，每次執行都會套用。它也適用於 1:N 同步，因此相同的資料夾骨架會送達你新增的每個目的地。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a saved sync job with empty directory creation enabled in RcloneView" class="img-large img-center" />

## 搭配篩選器與 Dry Run 使用

建立空資料夾可與 Step 3 的篩選器一起運作。如果你排除了 `.git/`，或用 **Max folder depth** 限制工作範圍，則只會建立通過這些規則的資料夾。在寫入任何內容之前，先執行 **Dry Run** 預覽操作。這對單向同步尤其重要，因為它也會刪除來源端已不存在的目的地項目。

在 Amazon S3、Wasabi 或 Backblaze B2 等以儲存貯體為基礎的儲存上，請保持合理預期。這些後端沒有真正的目錄，因此空資料夾可能無法像在 Google Drive、OneDrive、Dropbox、SFTP 或本機磁碟上那樣保留下來。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder Compare showing left-only folders after a sync in RcloneView" class="img-large img-center" />

工作完成後，在相同的兩個位置開啟 **Folder Compare**，並排檢查結果。同步與 Folder Compare 皆可在 FREE 授權下使用。

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 在 Home 分頁開啟 **Sync**，選擇來源與目的地資料夾。
3. 在 Step 1 勾選 **Create empty directories**，然後在 Step 3 設定所需的篩選器。
4. 執行 Dry Run，接著儲存工作並從 Job Manager 執行。

保留空資料夾後，還原或遷移得到的就是團隊原先設定的配置。

---

**相關指南：**

- [Max Folder Depth 與 Max File Size 篩選器](https://rcloneview.com/support/blog/max-folder-depth-file-size-filters-rcloneview)
- [Dry Run — 傳輸前預覽雲端同步](https://rcloneview.com/support/blog/dry-run-preview-cloud-sync-rcloneview)
- [修正同步篩選器未排除檔案的問題](https://rcloneview.com/support/blog/fix-sync-filters-not-excluding-files-rcloneview)

<CloudSupportGrid />
