---
slug: cloud-storage-egress-fees-avoid-rcloneview
title: "雲端儲存出口費用解析——如何避免意外的下載費用"
authors:
  - tayson
description: "上傳到雲端儲存通常是免費的。下載卻可能花費一大筆錢。了解各家供應商的出口費用，並學習使用 RcloneView 將其降到最低的策略。"
keywords:
  - 雲端出口費用
  - 雲端下載費用
  - s3 出口成本
  - 雲端儲存隱藏費用
  - 避免雲端出口費用
  - 雲端資料傳輸成本
  - 雲端下載昂貴
  - 降低雲端成本
  - 免出口費雲端儲存
  - 雲端出口定價
tags:
  - cost-optimization
  - tips
  - best-practices
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 雲端儲存出口費用解析——如何避免意外的下載費用

> 你上傳了 5 TB 到 S3。現在你需要下載它。這將花費 450 美元的出口費用。是的，真的。以下說明出口費用的運作方式，以及如何避免這個陷阱。

雲端儲存的定價分為兩部分：儲存費用（每 GB/月）與出口費用（每下載 1 GB）。大多數人只關注儲存成本，卻被出口費用——也就是每次從雲端下載資料時收取的費用——殺得措手不及。在選擇供應商之前先了解出口費用，可以幫你省下數千美元。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 出口費用比較

| 供應商 | 儲存費用（每 TB/月） | 出口費用（每 GB） |
|----------|-------------------|-----------------|
| AWS S3 | $23 | $0.09 |
| Google Cloud Storage | $20 | $0.12 |
| Azure Blob | $18 | $0.087 |
| Backblaze B2 | $6 | $0.01 |
| Wasabi | $7 | 免費（有條件限制） |
| Cloudflare R2 | $15 | **免費** |
| Google Drive | 已包含 | 已包含 |
| OneDrive | 已包含 | 已包含 |
| Dropbox | 已包含 | 已包含 |

差異非常大。從 S3 下載 1 TB 要花 $90，從 Cloudflare R2 下載則是 $0。

## 降低出口費用的策略

### 為常存取的資料選擇對出口費用友善的供應商

將你會經常下載的資料存放在 Cloudflare R2、Backblaze B2 或消費級雲端服務（Google Drive、Dropbox）上，這些服務的出口費用是免費或便宜的。

### 將 S3/GCS/Azure 用於寫入密集、讀取較少的工作負載

出口費用較高的物件儲存供應商，非常適合用於備份和很少需要還原的封存資料。

### 有策略地在雲端之間傳輸

使用 RcloneView 從一開始就把資料放在合適的供應商上：

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Place data strategically" class="img-large img-center" />

### 避免跨區域傳輸

在同一供應商的不同區域之間傳輸資料，會產生內部出口費用。請將相關資料保存在同一個區域。

### 監控你的傳輸量

追蹤你的工作任務傳輸了多少資料，以估算成本：

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Monitor transfer volume" class="img-large img-center" />

## 智慧多雲策略

| 使用情境 | 最佳供應商 | 原因 |
|----------|--------------|-----|
| 封存備份（極少存取） | S3 Glacier | 儲存成本最低，很少產生出口費用 |
| 主動備份（偶爾還原） | Backblaze B2 | 儲存費用低，出口費用低 |
| CDN／經常提供的內容 | Cloudflare R2 | 零出口費用 |
| 團隊協作 | Google Drive / OneDrive | 出口費用已包含 |
| 大型資料集分享 | Wasabi | 免出口費用（在合理使用範圍內） |

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. **評估你的存取模式**——你多久下載一次資料？
3. 使用雙窗格檔案總管**將資料放在合適的供應商上**。
4. **監控傳輸情況**以追蹤成本。

最便宜的儲存費用，不一定等於最低的總成本。

---

**相關指南：**

- [雲端儲存的隱藏成本](https://rcloneview.com/support/blog/hidden-cloud-storage-costs-save-money-rcloneview)
- [尋找未使用的檔案](https://rcloneview.com/support/blog/find-unused-files-reduce-cloud-costs-rcloneview)
- [封存至 S3 Glacier](https://rcloneview.com/support/blog/archive-google-drive-to-s3-glacier-rcloneview)

<CloudSupportGrid />
