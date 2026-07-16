---
slug: migrate-wasabi-to-backblaze-b2-s3-rcloneview
title: "在 Wasabi、Backblaze B2 與 AWS S3 之間遷移 — 使用 RcloneView 進行 S3 相容雲端遷移"
authors:
  - tayson
description: "想要切換 S3 相容儲存供應商嗎？了解如何使用 RcloneView 在 Wasabi、Backblaze B2 與 AWS S3 之間遷移資料，同時將成本降到最低。"
keywords:
  - wasabi to backblaze b2
  - migrate s3 compatible storage
  - wasabi migration tool
  - backblaze b2 to s3
  - s3 provider migration
  - wasabi vs backblaze b2
  - switch cloud storage provider
  - s3 compatible transfer
  - wasabi to aws s3
  - cloud storage migration cost
tags:
  - wasabi
  - backblaze-b2
  - aws-s3
  - migration
  - s3-compatible
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 在 Wasabi、Backblaze B2 與 AWS S3 之間遷移 — 使用 RcloneView 進行 S3 相容雲端遷移

> 找到更划算的 S3 相容儲存方案了嗎？Wasabi、Backblaze B2 與 AWS S3 都採用相同的協定 — 在它們之間遷移應該很簡單。有了 RcloneView，事實正是如此。

S3 相容儲存已成為物件儲存的標準。當你找到一個定價更好、功能更多或涵蓋不同地區的供應商時，你不應該被綁死。由於 Wasabi、Backblaze B2 與 AWS S3 都使用 S3 API，RcloneView 可以無縫地在它們之間搬移資料。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 價格比較

| 功能 | AWS S3 Standard | Backblaze B2 | Wasabi |
|---------|----------------|-------------|--------|
| 儲存費用（TB/月） | $23 | $6 | $7 |
| 外流流量（TB） | $90 | $10 | 免費* |
| 最短儲存期限 | 無 | 1 天 | 90 天 |
| 免費額度 | 5 GB（12 個月） | 10 GB | 無 |
| API 相容性 | 原生 S3 | S3 相容 | S3 相容 |

*Wasabi 的「免費外流流量」有合理使用政策 — 外流流量不應超過儲存容量。

## 遷移情境

### Wasabi → Backblaze B2

Wasabi 的 90 天最短儲存政策，即使你提早刪除檔案也會照樣收費。如果你的使用模式牽涉到頻繁的檔案汰換，沒有最短儲存限制的 B2 可能更便宜。

### Backblaze B2 → Wasabi

Wasabi 提供可預測的定價，且沒有外流流量費用。如果你經常下載資料，Wasabi 的統一費率定價可以省下不少錢。

### AWS S3 → Backblaze B2 或 Wasabi

AWS S3 是最昂貴的選項。將封存或備份資料搬到 B2 或 Wasabi，可以節省 70–80% 的成本。

### 任意來源 → AWS S3

如果你需要 AWS 生態系整合（Lambda、CloudFront、Athena），S3 是唯一的選擇。

## 如何遷移

### 1）新增兩個供應商

<img src="/support/images/en/blog/new-remote.png" alt="Add S3-compatible remotes" class="img-large img-center" />

### 2）瀏覽並比較

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Browse source and destination buckets" class="img-large img-center" />

### 3）執行遷移

使用**複製**工作以確保遷移安全：

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Run S3 migration" class="img-large img-center" />

### 4）驗證

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify migration completeness" class="img-large img-center" />

### 5）監控大型傳輸

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitor migration progress" class="img-large img-center" />

## 將遷移成本降到最低

### 外流流量是最大的成本

從 AWS S3 遷移時，外流流量費用會不斷累積。以 10 TB 為例：S3 外流流量費用高達 $900。請事先規劃：

- **分階段遷移** — 將傳輸分散到多個計費週期。
- **優先處理冷資料** — 先遷移不常存取的資料。
- **使用頻寬限制**來控制每日外流流量。

### Backblaze B2 外流流量

B2 透過 Cloudflare（Bandwidth Alliance）提供免費外流流量。如果你的目的地支援此功能，請使用 Cloudflare 整合。

### Wasabi 注意事項

Wasabi 最短收費期為 90 天。請勿在上傳後 90 天內從 Wasabi 刪除資料，否則你仍需支付完整的 90 天費用。

## 遷移後步驟

1. **驗證所有物件** — 資料夾比較功能可確認完整性。
2. **更新應用程式設定** — 將你的應用程式指向新的端點。
3. **測試存取** — 確保應用程式可以在新供應商上讀寫。
4. **保留原始來源** — 將舊供應商保留 30 天作為備援。
5. **刪除來源資料** — 在確認一切正常後再刪除。

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. **新增來源與目的地** S3 相容遠端。
3. **執行複製工作**以遷移資料。
4. **使用資料夾比較功能驗證**。
5. **更新應用程式**並停用舊供應商。

同樣的 API，不同的供應商，更划算的價格。

---

**相關指南：**

- [建立同步工作](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [比較資料夾內容](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [設定雲端傳輸頻寬限制](https://rcloneview.com/support/blog/set-bandwidth-limits-cloud-transfers-rcloneview)

<CloudSupportGrid />
