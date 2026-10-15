---
slug: cloud-storage-civil-engineering-rcloneview
title: "土木工程公司的雲端儲存 — 使用 RcloneView 管理專案檔案、測量資料與備份"
authors:
  - tayson
description: "適用於土木工程公司的雲端儲存：使用跨平台 GUI 工具 RcloneView，在多個雲端之間整理專案圖面、測量資料與備份。"
keywords:
  - 土木工程雲端儲存
  - 土木工程檔案備份
  - 工程專案檔案同步
  - 測量資料雲端備份
  - 工程師多雲備份
  - RcloneView
  - 雲端同步 GUI
  - 大型圖面檔案雲端
  - 專案封存雲端儲存
  - rclone GUI
tags:
  - RcloneView
  - cloud-storage
  - industry
  - backup
  - guide
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 土木工程公司的雲端儲存 — 使用 RcloneView 管理專案檔案、測量資料與備份

> 不必撰寫任何指令腳本，即可在多個雲端之間安全保存圖面、測量資料與已結案的專案。

一家中型土木工程公司可能將進行中的道路設計專案放在 Google Drive，客戶交付物放在 Box 或 OneDrive，而多年的已結案封存檔則放在 NAS 上。每個位置都有各自的介面，使得一致的備份變得困難。RcloneView 將它們整合到同一個視窗中，讓您能以視覺化方式複製、比較並排程傳輸。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 為什麼工程資料需要多雲方案

工程專案會產生大量且種類混雜的檔案集：CAD 圖面、GIS 匯出檔、點雲掃描、計算試算表，以及已簽署的 PDF 文件包。客戶通常會指定交付物的存放位置，因此單一供應商很難涵蓋所有需求。RcloneView 可連接 90 多個供應商，因此 Google Drive、Box、OneDrive、Amazon S3 與本機 NAS 都能並列顯示在檔案總管中。

<img src="/support/images/en/blog/new-remote.png" alt="在 RcloneView 中為工程公司新增雲端遠端" class="img-large img-center" />

RcloneView 可在同一個視窗中掛載並同步 90 多個供應商，支援 Windows、macOS 與 Linux，因此外勤筆電與辦公室工作站可共用同一套工作流程。

## 將已結案專案封存到低成本物件儲存

專案結案後，檔案很少再變動，但必須保存多年。使用雙窗格檔案總管，或在遠端之間拖放，將完成的專案資料夾從使用中的工作區複製到 Backblaze B2 或 Wasabi 等 S3 相容儲存貯體。在不同遠端之間移動會執行複製，因此在您確認結果之前，原始檔案會保持不變。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="專案封存檔的雲端對雲端傳輸" class="img-large img-center" />

## 使用 Folder Compare 驗證交付物

在從工作磁碟機刪除任何內容之前，請先在來源與封存檔之間執行 Folder Compare。篩選器會顯示僅在左側、僅在右側以及有差異的檔案，讓您確認每一套圖面都已完整傳送。對任何同步作業，請先執行 Dry Run，預覽哪些檔案將被複製或刪除。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder Compare 顯示專案資料夾之間的差異" class="img-large img-center" />

## 為進行中的專案排程夜間備份

建立一個從專案共用資料夾到第二個雲端的同步作業，並加入 crontab 風格的排程，讓備份在下班後執行。排程功能需要 PLUS 授權；手動作業、作業記錄（Job History）以及同步到多個目的地的 1:N 同步可在 FREE 授權下使用。作業記錄會記錄每次執行的狀態、大小與檔案數量，為您提供稽核軌跡。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="在 RcloneView 中排程夜間備份作業" class="img-large img-center" />

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 為使用中的工作區、NAS 與封存儲存貯體新增遠端。
3. 建立一個從進行中專案到封存檔的同步作業，並先執行 Dry Run。
4. 加入排程（PLUS），並在最初幾次執行後檢視作業記錄。

保護多年的工程紀錄，不再需要自訂腳本。

---

**相關指南：**

- [建築事務所的雲端儲存](https://rcloneview.com/support/blog/cloud-storage-architecture-firms-rcloneview)
- [Dry Run — 預覽雲端同步](https://rcloneview.com/support/blog/dry-run-preview-cloud-sync-rcloneview)
- [作業記錄與傳輸日誌](https://rcloneview.com/support/blog/job-history-transfer-logs-monitoring-rcloneview)

<CloudSupportGrid />
