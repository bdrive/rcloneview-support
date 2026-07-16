---
slug: sync-dropbox-to-s3-backup-rcloneview
title: "將 Dropbox 同步到 AWS S3 進行備份 — 使用 RcloneView 實現自動化雲對雲防護"
authors:
  - tayson
description: "Dropbox 很適合協作，但它不是備份工具。了解如何使用 RcloneView 自動將您的 Dropbox 檔案同步到 AWS S3，實現實惠且具備冗餘性的雲端備份。"
keywords:
  - dropbox to s3 backup
  - sync dropbox aws
  - dropbox backup s3
  - dropbox cloud to cloud backup
  - dropbox offsite backup
  - dropbox s3 sync tool
  - dropbox redundant backup
  - dropbox aws transfer
  - automated dropbox backup
  - dropbox data protection
tags:
  - dropbox
  - s3
  - aws-s3
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 將 Dropbox 同步到 AWS S3 進行備份 — 使用 RcloneView 實現自動化雲對雲防護

> Dropbox 會同步您的檔案，但不會備份它們。如果有人刪除了一個共用資料夾，Dropbox 會忠實地將這個刪除動作同步到各處。在 S3 上建立獨立備份正是為了防止這種情況。

許多人將同步與備份混為一談。Dropbox 是一種同步服務 — 變更（包括刪除與覆寫）會傳播到所有連接的裝置。真正的備份是一份不會隨來源變更而改變的獨立副本。AWS S3 非常適合這個用途：耐久、具版本控制且成本效益高。RcloneView 可自動化 Dropbox 到 S3 的備份流程。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 為什麼 Dropbox 需要備份

- **意外刪除** — Dropbox 會傳播刪除動作。S3 備份可以保留這些檔案。
- **勒索軟體** — 被加密的檔案會同步到 Dropbox。S3 版本控制讓您能還原加密前的版本。
- **帳號遭入侵** — 若有人取得存取權並刪除資料，您的 S3 備份不受影響。
- **Dropbox 服務中斷** — 雖然罕見但仍有可能發生。S3 備份能確保您仍可存取檔案。

## 設定備份

<img src="/support/images/en/blog/new-remote.png" alt="Connect Dropbox and S3" class="img-large img-center" />

在 RcloneView 中將您的 Dropbox 和 AWS S3 帳號新增為遠端。

## 建立備份工作

在其中一個窗格開啟 Dropbox，另一個窗格開啟 S3。建立一個複製（Copy）工作（不要使用同步 Sync — 您不會希望 Dropbox 檔案被移除時 S3 也跟著刪除）：

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Dropbox to S3 backup" class="img-large img-center" />

## 排程每晚備份

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule Dropbox backup" class="img-large img-center" />

讓備份工作每晚執行一次。每次執行只會傳輸新增或變更的檔案，讓頻寬與成本保持在最低。

## 驗證備份完整性

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify Dropbox backup" class="img-large img-center" />

定期比較 Dropbox 與 S3，確保您的備份完整且為最新狀態。

## 成本最佳化

| S3 儲存類別 | 最適合 | 成本 |
|-----------------|---------|------|
| S3 Standard | 頻繁存取備份 | ~$23/TB/月 |
| S3 Infrequent Access | 每月需要還原 | ~$12.5/TB/月 |
| S3 Glacier Instant | 罕見還原，需要時能快速存取 | ~$4/TB/月 |
| S3 Glacier Deep Archive | 僅供封存 | ~$1/TB/月 |

對於大多數 Dropbox 備份情境而言，S3 Infrequent Access 或 Glacier Instant 能提供最佳的平衡。

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 新增 **Dropbox** 與 **AWS S3** 遠端。
3. **建立複製（Copy）工作**（不要使用同步 Sync）。
4. **排程每晚執行**。
5. 使用資料夾比較功能**定期驗證**。

同步讓檔案保持最新，備份讓檔案保持安全。

---

**相關指南：**

- [將 Dropbox 備份到 AWS S3](https://rcloneview.com/support/blog/backup-dropbox-to-aws-s3-rcloneview)
- [將 Dropbox 備份到 Backblaze B2](https://rcloneview.com/support/blog/backup-dropbox-to-backblaze-b2-affordable-storage-rcloneview)
- [同步 vs 複製 vs 移動的差異](https://rcloneview.com/support/blog/sync-copy-move-difference-explained-rcloneview)

<CloudSupportGrid />
