---
slug: backup-nas-to-multiple-clouds-rcloneview
title: "如何將 NAS 備份到多個雲端 — 使用 RcloneView 實現 3-2-1 備份策略"
authors:
  - tayson
description: "透過同時備份到多個雲端儲存供應商來保護您的 NAS 資料。使用 RcloneView 的批次工作實現正確的 3-2-1 備份策略。"
keywords:
  - nas multi cloud backup
  - 3 2 1 backup strategy
  - nas cloud backup multiple
  - synology multi cloud backup
  - qnap multi cloud backup
  - nas backup strategy
  - nas to s3 and b2 backup
  - nas disaster recovery
  - multi cloud backup plan
  - nas off site backup
tags:
  - nas
  - multi-cloud
  - best-practices
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 如何將 NAS 備份到多個雲端 — 使用 RcloneView 實現 3-2-1 備份策略

> 一個雲端備份很好，兩個雲端備份更好。3-2-1 原則是：3 份副本、2 種不同媒介、1 份異地備援。您的 NAS 是第一份副本，雲端 A 是第二份副本，雲端 B 是第三份副本。RcloneView 能自動完成這一切。

NAS 是一種絕佳的集中式儲存方案，但它終究是位於單一地點的單一裝置。硬體故障、火災、失竊或天災都可能將它連同所有資料一併摧毀。將資料備份到多個雲端儲存供應商——分布在不同的基礎設施、不同的地區——才能實現真正的災難復原。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 3-2-1 策略

| 副本 | 位置 | 供應商 |
|------|----------|----------|
| 1（主要） | NAS（本地） | Synology/QNAP |
| 2（雲端備份） | 雲端 A | Backblaze B2（每 TB $6） |
| 3（雲端備份） | 雲端 B | AWS S3 或 Wasabi |

三份副本。兩種不同類型的儲存（本地 NAS + 雲端）。一份異地備援（雲端本質上就是異地）。

## 使用 RcloneView 進行設定

### 1）連接您的 NAS 與雲端

<img src="/support/images/en/blog/new-remote.png" alt="Add NAS and cloud remotes" class="img-large img-center" />

### 2）為每個雲端建立備份工作

**工作 1**：NAS → Backblaze B2（主要雲端備份）。
**工作 2**：NAS → AWS S3（次要雲端備份）。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Create multi-cloud backup jobs" class="img-large img-center" />

### 3）排程夜間備份

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule multi-cloud NAS backup" class="img-large img-center" />

錯開排程時間：
- 凌晨 2:00 → NAS → Backblaze B2。
- 凌晨 4:00 → NAS → AWS S3。

### 4）使用批次工作實現自動化

v1.3 的批次工作能將所有步驟串連起來：

1. 複製 NAS → B2。
2. 複製 NAS → S3。
3. 比對 NAS 與 B2。
4. 比對 NAS 與 S3。
5. 透過 Slack 發送通知。

### 5）驗證兩個備份

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify multi-cloud backup" class="img-large img-center" />

## 成本優化

| 資料量 | B2 每月費用 | S3 Standard-IA 每月費用 | 總計 |
|-------------|-----------|----------------------|-------|
| 1 TB | $6 | $12.50 | $18.50 |
| 5 TB | $30 | $62.50 | $92.50 |
| 10 TB | $60 | $125 | $185 |

對於次要備份，可使用更便宜的方案：S3 Glacier（每 TB $4）或 Wasabi（每 TB $7，免出站流量費）。

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. **連接 NAS 與兩個雲端儲存供應商**。
3. **為每個雲端建立複製工作**。
4. **使用批次工作進行排程與自動化**。
5. 每週**驗證兩個備份**。

兩朵雲、一台 NAS，零資料遺失風險。

---

**相關指南：**

- [在 Synology NAS 上使用 RcloneView](https://rcloneview.com/support/blog/run-rcloneview-synology-nas-docker-rcloneview)
- [在 QNAP NAS 上使用 RcloneView](https://rcloneview.com/support/blog/rcloneview-qnap-nas-cloud-backup-rcloneview)
- [為什麼雲端對雲端備份很重要](https://rcloneview.com/support/blog/why-cloud-to-cloud-backup-matters-rcloneview)

<CloudSupportGrid />
