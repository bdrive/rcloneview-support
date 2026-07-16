---
slug: archive-google-drive-to-s3-glacier-rcloneview
title: "將 Google Drive 檔案封存至 S3 Glacier — 透過 RcloneView 以低 90% 的成本實現長期儲存"
authors:
  - tayson
description: "對於封存資料來說，Google Drive 儲存空間成本高昂。將舊檔案移至 S3 Glacier，每 GB 只需幾分錢即可保留可還原性。RcloneView 可自動完成整個流程。"
keywords:
  - google drive to glacier
  - google drive archive
  - s3 glacier archive
  - cheap cloud archive
  - google drive cold storage
  - archive old cloud files
  - google drive to s3
  - reduce google drive cost
  - long term cloud storage
  - cloud archive strategy
tags:
  - google-drive
  - s3
  - glacier
  - archive
  - cost-optimization
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 將 Google Drive 檔案封存至 S3 Glacier — 透過 RcloneView 以低 90% 的成本實現長期儲存

> 你每月為 2 TB 的 Google Drive 支付 10 美元，但其中 80% 的檔案一年內都未曾被開啟過。將它們移至 S3 Glacier，每月只需 1 美元/TB，即可大幅削減你的儲存費用。

Google Drive 的定價是針對活躍檔案而設計的——你每天開啟的文件、與同事共享的檔案。但大多數 Google Drive 帳戶都會累積多年未曾存取的檔案：舊的專案資料夾、已完成的工作、封存的照片、過時的文件。這些檔案佔用著昂貴的儲存空間，而其實它們可以以極低的成本存放在 S3 Glacier 上。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 成本比較

| 儲存服務 | 每 TB/月價格 |
|---------|-------------------|
| Google Drive (One) | ~$5 |
| Google Workspace Business | ~$6 |
| S3 Standard | ~$23 |
| S3 Glacier Instant Retrieval | ~$4 |
| S3 Glacier Flexible Retrieval | ~$3.6 |
| S3 Glacier Deep Archive | ~$1 |

將 1 TB 的閒置檔案從 Google Drive 移至 Glacier Deep Archive，每年可節省約 48 美元。

## 應該封存哪些內容

適合封存至 Glacier 的內容：

- 已完成的專案資料夾（6 個月以上）
- 稅務文件與財務記錄（報稅完成後）
- 舊的照片／影片備份
- 離職員工的資料
- 已封存的團隊檔案

不適合封存的內容（應保留在 Google Drive 上）：

- 活躍的文件與試算表
- 共享協作檔案
- 每週或每月都會開啟的檔案

## 封存流程

### 1) 找出封存候選項目

在檔案總管中瀏覽你的 Google Drive，找出最近未曾存取的資料夾：

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Browse Google Drive for archive candidates" class="img-large img-center" />

### 2) 傳輸至 S3 Glacier

建立一個從 Google Drive 到你的 S3 儲存桶（已設定為 Glacier 儲存類別）的複製工作：

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Transfer to Glacier" class="img-large img-center" />

### 3) 驗證封存結果

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify archive completeness" class="img-large img-center" />

### 4) 從 Google Drive 中刪除

務必在驗證完成後才進行刪除。這樣可以釋放你的 Google Drive 儲存配額。

### 5) 排程定期封存

為新增的候選項目設定每月自動封存排程：

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule monthly archival" class="img-large img-center" />

## 注意事項

- **Glacier 的取回會產生費用並需要時間** — Glacier Instant Retrieval 可提供快速存取；Deep Archive 則可能需要 12 小時以上
- **最短儲存期限** — 若提早刪除，Glacier 會依儲存類別收取 90 至 180 天不等的額外費用
- **刪除前務必先驗證** — 在從 Drive 移除檔案之前，一定要確認封存內容完整無誤

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. **新增 Google Drive** 與 **S3** 遠端。
3. **找出閒置檔案**，於 Google Drive 上進行篩選。
4. **複製至 Glacier**，驗證後再清理 Drive。

活躍檔案留在 Drive 上，其餘一切都交給 Glacier。

---

**相關指南：**

- [隱藏的雲端儲存成本](https://rcloneview.com/support/blog/hidden-cloud-storage-costs-save-money-rcloneview)
- [使用 Glacier 進行冷封存](https://rcloneview.com/support/blog/cold-archive-glacier-rcloneview)
- [比較資料夾內容](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)

<CloudSupportGrid />
