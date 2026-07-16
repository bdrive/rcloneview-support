---
slug: hidden-cloud-storage-costs-save-money-rcloneview
title: "隱藏的雲端儲存成本——傳出流量費、API 費用，以及如何省錢"
authors:
  - tayson
description: "雲端儲存的價格看似簡單，直到你發現傳出流量費、API 費用和最短儲存期限。了解這些隱藏成本，以及如何透過 RcloneView 進行最佳化。"
keywords:
  - 雲端儲存隱藏成本
  - 雲端傳出流量費
  - 雲端儲存定價
  - s3 傳出流量費用
  - 雲端 api 費用
  - 降低雲端儲存成本
  - 雲端儲存成本最佳化
  - 便宜的雲端儲存
  - 雲端儲存費用說明
  - 節省雲端儲存費用
tags:
  - pricing
  - cost-optimization
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 隱藏的雲端儲存成本——傳出流量費、API 費用，以及如何省錢

> AWS S3 宣傳的價格是 $0.023/GB/月。對 1 TB 來說聽起來很便宜——每月僅 $23。但當你下載這 1 TB 資料時，帳單卻暴增到 $113。歡迎認識傳出流量費（egress fees）。

雲端儲存的定價有標價和實際價格之分。標價是每 GB 的儲存費用。實際價格則包含傳出（下載）流量費、API 請求費用、最短儲存期限，以及冷儲存的取回費用。了解這些隱藏成本能幫助你選擇合適的服務商，避免帳單出現意外驚喜。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 隱藏的成本

### 1) 傳出流量費

傳出流量（egress）是指從雲端下載資料所需支付的費用。這是大多數雲端帳單中最令人意外的部分。

| 服務商 | 傳出流量（每 TB） |
|----------|----------------|
| AWS S3 | $90 |
| Google Cloud | $120 |
| Azure | $87 |
| Oracle Cloud | 免費（前 10 TB） |
| Backblaze B2 | $10（透過 Cloudflare 免費） |
| Wasabi | 免費* |
| Storj | $7 |

*Wasabi 的免費傳出流量有合理使用政策——傳出流量不應超過儲存量。

**實際影響：** 從 AWS S3 遷移 10 TB 資料，光是傳出流量費就要 $900。

### 2) API 請求費用

每個檔案操作（列出、讀取、寫入、刪除）都是一次 API 呼叫。每次呼叫都需要付費。

| 服務商 | PUT/POST（每 1,000 次） | GET（每 1,000 次） |
|----------|---------------------|-----------------|
| AWS S3 Standard | $0.005 | $0.0004 |
| Google Cloud | $0.005 | $0.0004 |
| Backblaze B2 | $0.004 | 免費（每天 2,500 次） |

同步 100,000 個小檔案意味著超過 100,000 次 API 呼叫——費用會不斷累積。

### 3) 最短儲存期限

| 服務商 | 最短期限 | 會發生什麼 |
|----------|-----------------|-------------|
| AWS S3 Standard | 無 | 按用量計費 |
| AWS S3 Standard-IA | 30 天 | 即使提早刪除，仍需支付 30 天費用 |
| AWS S3 Glacier | 90 天 | 最低收取 90 天費用 |
| Wasabi | 90 天 | 最低收取 90 天費用 |
| Backblaze B2 | 1 天 | 基本上沒有最短期限 |

從 Wasabi 刪除一個檔案，即使只儲存了 10 天，你仍需支付 90 天的儲存費用。

### 4) 取回費用

冷儲存層級在取回資料時會收取費用：

| 層級 | 取回費用 |
|------|---------------|
| S3 Glacier Instant | $10/TB |
| S3 Glacier Flexible | $30/TB（3–5 小時） |
| S3 Glacier Deep Archive | $20/TB（12 小時） |

### 5) 提前刪除費用

若物件在最短儲存期限之前被移除，S3 Glacier 會收取提前刪除費用。

## 如何最佳化雲端儲存成本

### 為合適的資料選擇合適的服務商

| 資料類型 | 最佳服務商 | 原因 |
|-----------|--------------|-----|
| 熱資料（每日存取） | Google Drive、OneDrive | 已包含在 Workspace/M365 訂閱中 |
| 溫資料（每週存取） | S3 Standard-IA、B2 | 儲存便宜，傳出流量費適中 |
| 冷資料（每月存取） | B2、Wasabi | 儲存費用低，定價可預測 |
| 封存資料（每年存取） | S3 Glacier、Storj | 儲存費用最低 |

### 使用 RcloneView 在不同層級之間搬移資料

隨著資料老化，將其移至更便宜的儲存層級：

```
第 1-4 週：Google Drive（訂閱已包含）
第 2-12 個月：Backblaze B2（$6/TB，低傳出流量費）
第 2 年以後：S3 Glacier（$4/TB，封存）
```

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Automate tiered storage" class="img-large img-center" />

### 透過智慧同步減少傳出流量

- **在免費傳出流量時段同步**——部分服務商在特定時段或針對特定合作夥伴提供免費傳出流量。
- **搭配 Cloudflare 使用 B2**——透過 Cloudflare 的 Bandwidth Alliance，B2 的傳出流量是免費的。
- **選擇 Oracle Cloud**——每月 10 TB 免費傳出流量。
- **使用篩選器**只同步需要的內容——傳輸的資料越少，傳出流量費就越低。

### 減少 API 呼叫

- 在 rclone 設定中**使用 `--fast-list`**，以減少列出目錄時的 API 呼叫次數。
- 對穩定的資料**減少同步頻率**——改為每週一次而非每小時一次。
- 對大型檔案**使用僅比對檔案大小**而非校驗碼比對。

### 找出並消除浪費

使用資料夾比較功能找出跨雲端的重複資料：

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Find duplicate data across clouds" class="img-large img-center" />

## 每月成本比較：5 TB 儲存

| 情境 | 每月成本 |
|----------|-------------|
| AWS S3 Standard（5 TB 儲存 + 1 TB 傳出流量） | $205 |
| Backblaze B2（5 TB + 1 TB 傳出流量） | $40 |
| Wasabi（5 TB，無傳出流量費） | $35 |
| Google Drive（2 TB 方案，個人版） | $10 |
| 最佳化混合方案（B2 + Glacier） | $25 |

正確的服務商組合可將成本降低 80%。

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. **檢視你目前的雲端成本**——確認你目前支付的費用。
3. **找出浪費**——重複資料、未使用的資料、錯誤的儲存層級。
4. 使用 RcloneView **將資料搬移至最佳服務商**。
5. **排程自動分層**，長期維持低成本。

最便宜的雲端，就是最符合你存取模式的那一個。

---

**相關指南：**

- [雲端儲存空間不足？釋放空間](https://rcloneview.com/support/blog/cloud-storage-full-free-up-space-multiple-clouds-rcloneview)
- [尋找並移除重複檔案](https://rcloneview.com/support/blog/find-remove-duplicate-files-cloud-storage-rcloneview)
- [設定頻寬限制](https://rcloneview.com/support/blog/set-bandwidth-limits-cloud-transfers-rcloneview)

<CloudSupportGrid />
