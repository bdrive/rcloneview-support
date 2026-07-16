---
slug: find-unused-files-reduce-cloud-costs-rcloneview
title: "找出占用雲端儲存空間的無用檔案——透過 RcloneView 的儲存空間稽核降低成本"
authors:
  - tayson
description: "雲端帳單持續增加，因為沒有人刪除舊檔案。學習如何使用 RcloneView 在所有雲端帳戶中找出被遺忘的資料、過時的備份與不必要的重複檔案。"
keywords:
  - 降低雲端儲存成本
  - 找出未使用的雲端檔案
  - 雲端儲存清理
  - 雲端成本優化
  - 雲端儲存浪費
  - 降低雲端帳單
  - 雲端檔案稽核
  - 儲存成本節省
  - 雲端清理工具
  - 不必要的雲端檔案
tags:
  - cost-optimization
  - tips
  - organization
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 找出占用雲端儲存空間的無用檔案——透過 RcloneView 的儲存空間稽核降低成本

> 你在三個雲端服務商上支付了 5 TB 的費用。其中有多少是真正需要的？對大多數使用者而言，30-50% 的雲端儲存空間被他們永遠不會再存取的檔案占用。

雲端儲存帳單是逐漸增加的。這裡多幾 GB，那裡有個被遺忘的備份，突然間你每年要為沒人使用的資料花上數百元。問題不在於每 GB 的價格——而在於那看不見的累積。RcloneView 幫助你清楚看見每個帳戶中的內容，並就哪些該保留、哪些該刪除做出明智的決定。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 常見的浪費來源

### 舊的備份副本

備份工作會建立副本。如果你這些年來更換過備份目的地，舊的副本仍留在先前的服務商上，繼續占用付費的儲存空間。

### 跨服務商的重複檔案

同樣的檔案同時存放在 Google Drive、OneDrive 和 Dropbox 上——因為你「以防萬一」把它們同步到了每個地方。

### 過時的專案檔案

兩年前的專案仍放在 S3 Standard，每 TB 要價 23 美元，其實它們可以放在每 TB 只要 1 美元的 Glacier 上。

### 測試與臨時資料

試用上傳、測試資料夾、快取資料、`.DS_Store` 檔案、`Thumbs.db`——這些散布在數千個資料夾中，累積起來相當可觀。

## 如何找出浪費之處

### 瀏覽每個帳戶

連接你所有的雲端帳戶，並有系統地逐一瀏覽：

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Browse cloud accounts" class="img-large img-center" />

### 比較帳戶以找出重複檔案

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Find duplicates across clouds" class="img-large img-center" />

在兩個服務商之間進行資料夾比較，會標示出相同的檔案——這些可能是你重複付費的檔案。

### 檢查備份的新舊程度

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Check backup recency" class="img-large img-center" />

工作歷史記錄會顯示備份最後執行的時間。如果某個備份已經 6 個月沒有執行過，它還有必要保留嗎？

## 行動計畫

| 發現問題 | 行動 | 節省成本 |
|---------|--------|---------|
| 存放在昂貴儲存空間上的舊備份 | 刪除或搬移至 Glacier | 每 TB 每月 $5-20 美元 |
| 跨服務商的重複檔案 | 保留一份，刪除其餘 | 每 TB 每月 $5-10 美元 |
| 存放在熱儲存空間上的過時專案 | 封存至冷儲存空間 | 每 TB 每月 $15-20 美元 |
| 臨時檔案與垃圾檔案 | 刪除 | 視情況而定 |
| 未使用的服務商帳戶 | 取消訂閱 | 訂閱費用 |

## 刪除前先封存

不要過度積極地刪除。先將舊檔案移至冷儲存空間——它便宜到足以讓你「以防萬一」保留下來，但成本比熱儲存空間低 90%。

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. **連接所有雲端帳戶**。
3. **有系統地瀏覽與比較**。
4. **將未使用的資料封存**至冷儲存空間。
5. 封存後**刪除真正的浪費項目**。

最便宜的儲存空間，就是你不需要的儲存空間。

---

**相關指南：**

- [雲端儲存稽核指南](https://rcloneview.com/support/blog/cloud-storage-permissions-audit-rcloneview)
- [隱藏的雲端儲存成本](https://rcloneview.com/support/blog/hidden-cloud-storage-costs-save-money-rcloneview)
- [封存至 S3 Glacier](https://rcloneview.com/support/blog/archive-google-drive-to-s3-glacier-rcloneview)

<CloudSupportGrid />
