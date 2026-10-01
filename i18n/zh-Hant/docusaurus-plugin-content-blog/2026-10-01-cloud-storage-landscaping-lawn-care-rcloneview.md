---
slug: cloud-storage-landscaping-lawn-care-rcloneview
title: "園藝景觀公司的雲端儲存 — 使用 RcloneView 保護專案檔案"
authors:
  - alex
description: "適用於園藝景觀與草坪養護公司的雲端儲存：使用 RcloneView 的排程同步與加密功能備份現場照片、設計圖和報價單。"
keywords:
  - 園藝景觀公司雲端儲存
  - 景觀設計檔案備份
  - 草坪養護業務備份
  - 現場照片備份
  - 景觀雲端同步
  - 加密雲端備份
  - RcloneView 備份
  - 小型企業雲端備份
  - 排程雲端備份
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

# 園藝景觀公司的雲端儲存 — 使用 RcloneView 保護專案檔案

> 無需改變施工人員的工作方式，即可將現場照片、設計圖紙和報價單備份到異地。

園藝景觀公司的檔案往往散落各處：施工前後的照片在手機裡，CAD 或設計匯出檔在辦公室電腦上，簽署後的報價單在共用資料夾中。一旦旺季中某台筆記型電腦故障，每位客戶的承諾紀錄也隨之遺失。RcloneView 為小型企業提供一種視覺化的方式，將這些工作成果複製到雲端儲存，並確認檔案已成功送達。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 備份前先整理專案檔案

先在辦公室電腦上建立清楚的資料夾結構：每位客戶一個資料夾，其中包含照片、設計、報價單和發票子資料夾。施工人員拍攝的照片可在每天收工時放入對應的客戶資料夾。

在 RcloneView 的一個 Explorer 面板中開啟本機資料夾，在另一個面板中開啟雲端遠端。透過 File Explorer，可以在上傳前確認現場照片已放入正確的專案資料夾。

<img src="/support/images/en/blog/new-remote.png" alt="在 RcloneView 中為景觀專案檔案新增雲端遠端" class="img-large img-center" />

## 選擇適合業務的儲存空間

RcloneView 支援 Google Drive、OneDrive、Dropbox、Backblaze B2、Wasabi、Amazon S3 以及 90 多種其他供應商，因此您可以使用已有的帳戶，也可以為大型照片檔案庫選擇物件儲存。

如果涉及客戶的地址和合約，請在目的地之上新增 Crypt 遠端。檔案名稱和內容會在上傳前透過 rclone Crypt 加密。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="在 RcloneView 中將專案資料夾複製到雲端儲存" class="img-large img-center" />

## 自動執行夜間複製

建立一個從專案資料夾到雲端目的地的 Sync 或 Copy 工作。先使用 Dry Run 預覽將被複製或刪除的內容。單向同步只會修改目的地，非常適合備份。使用 PLUS 授權，您可以加入 crontab 風格的排程，讓工作在施工人員上傳照片後每晚執行。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="在 RcloneView 中排程夜間備份工作" class="img-large img-center" />

## 確認備份確實成功

Job History 會顯示每次執行的開始時間、持續時間、狀態、大小和檔案數量。使用 Folder Compare 比對本機資料夾與雲端副本，可以發現遺漏的內容，尤其是在安裝工程繁忙的一週之後。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="RcloneView 中備份執行的工作歷程" class="img-large img-center" />

## 開始使用

1. **下載 RcloneView**：請從 [rcloneview.com](https://rcloneview.com/src/download.html) 取得。
2. 透過 New Remote 新增您的雲端儲存，並可為敏感檔案新增 Crypt 遠端。
3. 建立一個從專案資料夾到雲端的 Sync 工作，並執行 Dry Run。
4. 設定排程（PLUS）或手動執行，然後每週查看 Job History。

可靠的備份意味著筆記型電腦故障只是一件不便之事，而不會遺失整個旺季的客戶紀錄。

---

**相關指南：**

- [空調與管線承包商的雲端儲存](https://rcloneview.com/support/blog/cloud-storage-hvac-plumbing-contractors-rcloneview)
- [室內設計公司的雲端儲存](https://rcloneview.com/support/blog/cloud-storage-interior-design-firms-rcloneview)
- [測量公司的雲端儲存](https://rcloneview.com/support/blog/cloud-storage-surveying-firms-rcloneview)

<CloudSupportGrid />
