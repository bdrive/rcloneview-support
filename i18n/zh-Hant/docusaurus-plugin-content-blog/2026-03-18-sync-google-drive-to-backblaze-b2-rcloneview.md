---
slug: sync-google-drive-to-backblaze-b2-rcloneview
title: "同步 Google Drive 到 Backblaze B2 ── 使用 RcloneView 打造平價的雲端對雲端備份"
authors:
  - tayson
description: "Google Drive 用於日常工作，Backblaze B2 用於平價備份。了解如何使用 RcloneView 設定從 Google Drive 到 B2 的自動化雲端對雲端備份。"
keywords:
  - google drive to backblaze b2
  - google drive backup b2
  - sync google drive b2
  - google drive cloud backup
  - backblaze b2 backup tool
  - google drive offsite backup
  - google drive b2 sync
  - affordable google drive backup
  - cloud to cloud backup google
  - google drive redundancy
tags:
  - google-drive
  - backblaze-b2
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 同步 Google Drive 到 Backblaze B2 ── 使用 RcloneView 打造平價的雲端對雲端備份

> Google Drive 儲存你的工作內容。Backblaze B2 以每月每 TB 6 美元的價格保護它。兩者結合，構成目前最具成本效益的雲端備份策略之一。

Google Drive 是你日常存放檔案的地方。但單靠 Google Drive 並不算是備份——意外刪除、帳號遭入侵、同步錯誤都可能摧毀 Google 無法救回的資料。Backblaze B2 每月每 TB 6 美元的價格提供了安全網：透過 RcloneView 自動更新的獨立副本。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 為什麼選擇 B2 來備份 Google Drive？

| 因素 | Backblaze B2 |
|--------|-------------|
| 儲存費用 | $6/TB/月 |
| 下載費用 | $0.01/GB |
| 免費流出額度 | 每月為儲存量的 3 倍 |
| 耐用性 | 99.999999999% |
| API | 相容 S3 |

B2 專為備份工作負載而設計：儲存費用低廉、按用量計費，並且相容 S3，能廣泛支援各種工具。

## 設定備份

<img src="/support/images/en/blog/new-remote.png" alt="Connect Google Drive and B2" class="img-large img-center" />

在 RcloneView 中將 Google Drive 和 Backblaze B2 都新增為遠端。

## 建立備份工作

在一側面板開啟 Google Drive，另一側開啟 B2。建立一個複製工作：

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Google Drive to B2" class="img-large img-center" />

使用**複製**（而非同步），這樣從 Google Drive 刪除的檔案仍會保留在 B2 中。

## 排程每晚備份

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule nightly backup" class="img-large img-center" />

每次執行只會傳輸新增或變更的檔案。一般 Google Drive 帳號的每日備份所使用的頻寬非常有限。

## 驗證備份完整性

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify backup" class="img-large img-center" />

## 加入加密

若資料較為敏感，可在 B2 之上再疊加一層 crypt 遠端。檔案會在離開你的裝置前完成加密——Backblaze 永遠看不到未加密的資料。

## 費用範例

| Google Drive 容量 | B2 每月費用 |
|-------------------|----------------|
| 100 GB | $0.60 |
| 500 GB | $3.00 |
| 1 TB | $6.00 |
| 5 TB | $30.00 |

## 開始使用

1. 前往 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. **新增 Google Drive** 與 **Backblaze B2** 遠端。
3. **建立複製工作**以進行備份。
4. **排程每晚執行**。
5. **安心休息**，因為你的檔案已受到保護。

Google Drive 上進行日常工作，B2 上進行每晚備份。

---

**相關指南：**

- [備份 Dropbox 到 Backblaze B2](https://rcloneview.com/support/blog/backup-dropbox-to-backblaze-b2-affordable-storage-rcloneview)
- [同步 Dropbox 到 S3 備份](https://rcloneview.com/support/blog/sync-dropbox-to-s3-backup-rcloneview)
- [加密雲端備份](https://rcloneview.com/support/blog/encrypt-cloud-backups-crypt-remote-guide-rcloneview)

<CloudSupportGrid />
