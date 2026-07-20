---
slug: migrate-amazon-s3-to-cloudflare-r2-rcloneview
title: "將 Amazon S3 遷移至 Cloudflare R2 —— 使用 RcloneView 進行零外傳費用的遷移"
authors:
  - tayson
description: "透過遷移至 Cloudflare R2 來消除 AWS 外傳費用。使用 RcloneView 進行零成本、高效率的 S3 至 R2 雲端儲存遷移。"
keywords:
  - S3 migration
  - Cloudflare R2
  - zero egress fees
  - AWS cost savings
  - cloud storage migration
  - S3 to R2
  - RcloneView
  - cost optimization
  - s3-compatible storage
  - cloud migration tool
tags:
  - RcloneView
  - amazon-s3
  - cloudflare-r2
  - cloud-migration
  - s3-compatible
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 將 Amazon S3 遷移至 Cloudflare R2 —— 使用 RcloneView 進行零外傳費用的遷移

> AWS 外傳費用正在侵蝕你的預算嗎？Cloudflare R2 消除了按 GB 計費的頻寬費用，同時維持與 S3 API 的相容性。使用 RcloneView 放心遷移。

Amazon S3 功能強大，但外傳費用累積得很快——尤其是對高頻寬工作負載而言。Cloudflare R2 提供與 S3 相容的物件儲存，且不收取外傳費用。RcloneView 簡化了遷移流程，能高效處理龐大的資料集，同時保留你的存取模式。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 在 RcloneView 中同時新增 S3 和 Cloudflare R2

首先在 RcloneView 中設定這兩個儲存後端。

**針對 AWS S3：**
1. 點擊 **Add Remote** → 選擇 **Amazon S3**
2. 輸入你的 AWS Access Key ID 和 Secret Access Key
3. 選擇你的 S3 儲存桶區域
4. 測試連線

**針對 Cloudflare R2：**
1. 點擊 **Add Remote** → 選擇 **S3 Compatible**
2. 將端點設定為你的 R2 網域
3. 加入你的 R2 API token 憑證
4. 驗證連線

![New Remote Setup](/images/en/blog/new-remote.png)

## 規劃你的遷移策略

大型 S3 遷移需要謹慎規劃。RcloneView 支援多種策略：

- **直接傳輸**：快速的儲存桶對儲存桶遷移（R2 對來自 AWS 的流量提供免費外傳）
- **增量同步**：在維持 S3 為線上服務的同時逐步遷移資料
- **篩選式遷移**：優先移動特定前綴或檔案類型

![Cloud to Cloud Transfer](/images/en/blog/cloud-to-cloud-transfer-default.png)

## 即時監控遷移進度

RcloneView 提供即時進度追蹤、錯誤回報和效能指標。即時觀察傳輸速度、完成百分比，並立即找出任何失敗的物件。

![Migration Monitoring](/images/en/tutorials/wasabi-real-time-monitoring-transferring.png)

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 使用你的憑證設定一個 AWS S3 遠端。
3. 在 [cloudflare.com](https://www.cloudflare.com/) 建立一個 Cloudflare R2 帳號。
4. 在 RcloneView 中將你的 R2 儲存桶設定為相容 S3 的遠端。
5. 建立一個遷移工作並執行傳輸。
6. 完成後驗證資料完整性。

省下數千美元的外傳費用——你的雲端預算會感謝你。

---

**相關指南：**

- [雲端儲存外傳費用 —— 如何用 RcloneView 避免](https://rcloneview.com/support/blog/cloud-storage-egress-fees-avoid-rcloneview)
- [使用 RcloneView 將 Azure Blob 同步至 AWS S3](https://rcloneview.com/support/blog/sync-azure-blob-to-aws-s3-rcloneview)
- [管理 Google Cloud Storage —— 使用 RcloneView 同步](https://rcloneview.com/support/blog/manage-google-cloud-storage-sync-rcloneview)

<CloudSupportGrid />
