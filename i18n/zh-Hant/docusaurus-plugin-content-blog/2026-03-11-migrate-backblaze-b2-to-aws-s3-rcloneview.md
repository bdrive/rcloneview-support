---
slug: migrate-backblaze-b2-to-aws-s3-rcloneview
title: "如何從 Backblaze B2 遷移到 AWS S3 —— 使用 RcloneView 的逐步指南"
authors:
  - tayson
description: "需要將資料從 Backblaze B2 移動到 AWS S3 以整合 AWS 生態系統嗎？瞭解如何使用 RcloneView 以最低成本、零資料遺失的方式完成遷移。"
keywords:
  - backblaze b2 to aws s3
  - migrate b2 to s3
  - backblaze to amazon s3
  - b2 s3 migration tool
  - switch cloud storage provider
  - backblaze b2 migration
  - b2 to s3 transfer
  - cloud storage migration
  - backblaze to aws
  - s3 migration tool
tags:
  - RcloneView
  - backblaze-b2
  - aws-s3
  - migration
  - cloud-storage
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 如何從 Backblaze B2 遷移到 AWS S3 —— 使用 RcloneView 的逐步指南

> Backblaze B2 是實惠儲存空間的絕佳選擇。但當你需要整合 AWS 生態系統——Lambda 觸發器、CloudFront CDN、Athena 查詢——你就需要 S3。以下是如何在不遺失資料的情況下完成遷移。

Backblaze B2 和 AWS S3 都相容於 S3，只要使用合適的工具，遷移過程就會相當直接。主要考量因素是外流費用、傳輸時間與驗證。RcloneView 負責處理傳輸，同時提供視覺化監控與驗證功能。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 遷移規劃

### 成本估算

B2 外流費用：$10/TB（若透過 Cloudflare Bandwidth Alliance 則免費）。

| 資料量 | B2 外流費用 | S3 儲存費用（首月） |
|-------------|---------------|-------------------------|
| 100 GB | $1 | $2.30 |
| 1 TB | $10 | $23 |
| 10 TB | $100 | $230 |

### 時程

傳輸速度取決於你的網路連線以及 B2/S3 的傳輸量。兩項服務都能很好地處理高並行度傳輸。

## 逐步操作

### 1) 新增兩個遠端

<img src="/support/images/en/blog/new-remote.png" alt="Add B2 and S3 remotes" class="img-large img-center" />

### 2) 瀏覽並比較

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Browse B2 and S3 side by side" class="img-large img-center" />

### 3) 執行複製工作

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Migrate B2 to S3" class="img-large img-center" />

使用高並行度（16–32 個傳輸）——B2 和 S3 都能良好處理。

### 4) 監控進度

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitor B2 to S3 migration" class="img-large img-center" />

### 5) 驗證完整性

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify B2 to S3 migration" class="img-large img-center" />

## 遷移後作業

1. **更新應用程式設定** —— 將應用程式指向 S3 端點。
2. **徹底測試** —— 驗證讀寫功能是否正常運作。
3. **保留 B2 30 天** —— 以防出現問題時可作為備援。
4. **刪除 B2 資料** —— 在確認 S3 上一切正常運作後再刪除。

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. **新增 B2 和 S3** 作為遠端。
3. 以高並行度**執行複製工作**。
4. **使用資料夾比較功能進行驗證**。

同樣的 API，更大的生態系統。

---

**相關指南：**

- [建立同步工作](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [比較資料夾內容](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [在相容 S3 的服務提供者之間遷移](https://rcloneview.com/support/blog/migrate-wasabi-to-backblaze-b2-s3-rcloneview)

<CloudSupportGrid />
