---
slug: aws-s3-vs-cloudflare-r2-object-storage-comparison-rcloneview
title: "AWS S3 與 Cloudflare R2：RcloneView 使用者的物件儲存比較"
authors:
  - tayson
description: "比較 AWS S3 與 Cloudflare R2 的物件儲存服務。分析價格、流出費用、效能與功能，協助您為 RcloneView 選擇合適的後端。"
keywords:
  - aws s3 vs cloudflare r2
  - s3 vs r2
  - cloudflare r2 comparison
  - object storage comparison
  - s3 egress fees
  - r2 no egress
  - cloud storage pricing
  - s3 compatible storage
  - best object storage
  - rcloneview storage comparison
tags:
  - RcloneView
  - amazon-s3
  - cloudflare-r2
  - comparison
  - storage-comparison
  - cost-optimization
  - guide
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# AWS S3 與 Cloudflare R2：RcloneView 使用者的物件儲存比較

> AWS S3 是物件儲存領域的業界標準。Cloudflare R2 則完全免除了流出費用。RcloneView 同時支援兩者——以下說明如何選擇。

AWS S3 開創了物件儲存這個類別，至今仍是採用最廣泛的服務，具備 11 個 9 的耐用性、完善的生命週期管理，以及與 AWS 生態系的深度整合。Cloudflare R2 則以極具顛覆性的定價優勢——零流出費用——作為直接競爭對手推出市場。對於跨多個供應商管理資料的 RcloneView 使用者而言，了解 S3 與 R2 之間的取捨有助於同時優化成本與功能。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 價格比較

### 儲存成本

| 等級 | AWS S3 | Cloudflare R2 |
|---|---|---|
| Standard | $0.023/GB/月 | $0.015/GB/月 |
| Infrequent Access | $0.0125/GB/月 | 不提供 |
| Glacier Instant | $0.004/GB/月 | 不提供 |
| Glacier Deep Archive | $0.00099/GB/月 | 不提供 |

在主動儲存方面，R2 比 S3 Standard 便宜 35%。不過，S3 的分層儲存類別（Infrequent Access、Glacier、Deep Archive）對於甚少存取的資料提供了顯著更低的價格。如果您的資料存取模式較為混合，S3 的生命週期政策可隨時間自動將物件轉移至更便宜的層級——這是 R2 目前不提供的功能。

### 流出費用

這是 R2 最主要的優勢。AWS S3 對傳輸到網際網路的資料收取 $0.09/GB 的費用（大量傳輸有較低費率，傳輸至 CloudFront 則免費）。Cloudflare R2 的流出費用則為 $0.00——所有資料取出皆免費。

以每月 10 TB 的流出量為例，差異相當懸殊：S3 大約每月需支付 $900，而 R2 則為 $0。對於儲存量大、流出量低的工作負載而言，差異會較小，此時 S3 的生態系優勢可能超過流出費用的節省。

### API 操作

| 操作 | AWS S3 | Cloudflare R2 |
|---|---|---|
| PUT/POST（Class A） | $0.005/1,000 | $0.0045/1,000（前 1M 次免費） |
| GET（Class B） | $0.0004/1,000 | $0.00036/1,000（前 10M 次免費） |
| DELETE | 免費 | 免費 |

R2 提供了慷慨的 API 操作免費額度，超出免費額度後每次操作的費用也略低。對於 API 呼叫量極高的工作負載（數百萬次小型物件操作），R2 的免費額度能帶來實質的節省。

## 功能比較

### 儲存類別與生命週期

**AWS S3** 提供六種儲存類別（Standard、Intelligent-Tiering、Standard-IA、One Zone-IA、Glacier Instant Retrieval、Glacier Flexible Retrieval、Glacier Deep Archive），並可透過生命週期政策依物件的存續時間或存取模式自動轉移。

**Cloudflare R2** 僅提供單一儲存類別，並附帶一個 Infrequent Access 層級。目前沒有相當於 Glacier 的冷儲存選項，生命週期管理功能也較有限。

對於封存型工作負載而言，S3 的 Glacier Deep Archive（$0.00099/GB/月）無人能及。

### 耐用性與可用性

兩項服務皆提供高耐用性。AWS S3 宣稱達 99.999999999%（11 個 9）的耐用性。Cloudflare 並未公布 R2 的具體耐用性數字，但表示其設計目標是在多個可用區間實現高耐用性。

S3 Standard 提供 99.99% 的可用性。R2 未公布具體的 SLA，但受益於 Cloudflare 的全球網路。

### 生態系整合

**AWS S3** 與整個 AWS 生態系整合——Lambda、CloudFront、Athena、EMR、SageMaker、CloudTrail 以及數百項其他服務。透過 IAM 政策、儲存貯體政策與 VPC 端點，可實現精細的存取控制。

**Cloudflare R2** 則與 Cloudflare Workers（邊緣運算）、Cloudflare CDN 以及 Cloudflare 控制台整合。整合更為緊密且簡單，但範圍較窄。

### S3 API 相容性

兩項服務皆支援 S3 API。R2 實作了最常用的 S3 操作（GET、PUT、DELETE、多部分上傳、列出物件），但並未支援所有 S3 功能——特別是 S3 Select、S3 Object Lambda 以及部分進階儲存貯體設定在 R2 上並不支援。

RcloneView 使用相同的 S3 相容遠端類型連接兩者，因此在 RcloneView 中切換 S3 與 R2 只需變更端點與憑證即可。

## 在 RcloneView 中同時使用兩者

RcloneView 的多雲端方式意味著您不必二選一。常見的策略是使用 S3 存放封存資料（善用 Glacier 層級），並使用 R2 存放頻繁存取的資料（免除流出費用）。RcloneView 可在雙窗格檔案總管中，只需點擊幾下就能在兩者之間同步、複製或遷移資料。

只需在遠端管理員中將兩者設為 S3 相容遠端，其餘的工作交給 RcloneView 即可——比較儲存貯體內容、執行遷移，或排程持續進行的複寫作業。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Managing AWS S3 and Cloudflare R2 side by side in RcloneView" class="img-large img-center" />

## 何時該選擇哪個供應商

**在以下情況選擇 AWS S3：**
- 您需要生命週期政策以及 Glacier 冷儲存層級。
- 您的工作負載需與其他 AWS 服務整合。
- 您需要進階功能，例如 S3 Select、Object Lambda 或 Inventory。
- 相對於儲存量而言，資料流出量極少。
- 您需要官方公布的 11 個 9 耐用性 SLA。

**在以下情況選擇 Cloudflare R2：**
- 資料流出費用佔成本相當大的比例。
- 您透過 Cloudflare 的 CDN 網路提供內容服務。
- 您的應用程式使用 Cloudflare Workers 進行邊緣運算。
- 您希望有簡單、可預期的定價，不會有流出費用的意外支出。
- 您的資料不需要冷儲存分層。

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 在遠端管理員中將 AWS S3 與 Cloudflare R2 新增為 S3 相容遠端。
3. 在雙窗格檔案總管中並排瀏覽兩者。
4. 根據您的成本與存取需求，在兩者之間遷移、同步或複寫資料。

AWS S3 憑藉其深厚的生態系與封存層級，依然是物件儲存的黃金標準。Cloudflare R2 則以免除流出費用顛覆了定價模式。RcloneView 讓您能同時運用兩者——或在兩者之間自由切換——而不受供應商鎖定。

---

**相關指南：**

- [新增 AWS S3 與 S3 相容儲存](https://rcloneview.com/support/howto/remote-storage-connection-settings/s3)
- [比較資料夾內容](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [建立同步作業](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)

<CloudSupportGrid />
