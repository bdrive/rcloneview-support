---
slug: sync-onedrive-to-s3-enterprise-backup-rcloneview
title: "將 OneDrive 同步至 AWS S3 — 使用 RcloneView 進行企業級雲端對雲端備份"
authors:
  - tayson
description: "OneDrive 用於協作，S3 用於持久備份。使用 RcloneView 設定自動化的 OneDrive 到 S3 備份，以進行企業資料保護。"
keywords:
  - onedrive to s3 backup
  - sync onedrive aws
  - onedrive cloud backup
  - onedrive s3 sync
  - onedrive enterprise backup
  - onedrive offsite backup
  - microsoft 365 backup s3
  - onedrive aws transfer
  - onedrive data protection
  - onedrive redundancy
tags:
  - RcloneView
  - onedrive
  - s3
  - aws-s3
  - backup
  - enterprise
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 將 OneDrive 同步至 AWS S3 — 使用 RcloneView 進行企業級雲端對雲端備份

> Microsoft 365 並不包含真正的備份功能。刪除的檔案、勒索軟體或管理員錯誤都可能永久摧毀 OneDrive 資料。S3 備份能提供您所需的獨立副本。

Microsoft 365 的保留原則並非備份。已刪除的項目會存放在資源回收筒中 93 天,之後就會永久消失。勒索軟體可能會加密跨所有裝置同步的檔案。管理員錯誤可能會清空整個團隊網站。在 Microsoft 生態系統之外的 AWS S3 上建立獨立備份,能提供真正的資料保護。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 為何選擇 S3 作為 OneDrive 備份?

- **獨立供應商** — 即使 Microsoft 發生問題,您的 S3 備份也不會受到影響
- **版本控制** — S3 版本控制功能可保留每個檔案的歷史副本
- **成本分級** — S3 Glacier 提供長期保存方案,每 TB 每月僅需 $1
- **合規性** — S3 Object Lock 提供不可變更的備份(符合法規要求)

## 設定備份

<img src="/support/images/en/blog/new-remote.png" alt="Connect OneDrive and S3" class="img-large img-center" />

## 建立備份工作

在一個窗格中開啟 OneDrive,另一個窗格中開啟 S3。依部門或使用者建立複製工作:

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="OneDrive to S3 backup" class="img-large img-center" />

## 排程自動化備份

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule OneDrive backup" class="img-large img-center" />

每晚執行。每次執行僅傳輸變更內容,將成本降至最低。

## 驗證與監控

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify OneDrive backup" class="img-large img-center" />

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Monitor backup jobs" class="img-large img-center" />

## 為合規性進行加密

在資料到達 S3 之前,先使用 crypt 遠端對 OneDrive 備份進行加密 — 無需依賴僅限 S3 的加密功能,即可滿足資料保護要求。

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 新增 **OneDrive** 與 **AWS S3** 遠端。
3. **建立複製工作**進行備份。
4. **排程每晚執行**並每週驗證一次。

在 OneDrive 上協作,在 S3 上獲得保護。

---

**相關指南:**

- [將 Google Drive 同步至 Backblaze B2](https://rcloneview.com/support/blog/sync-google-drive-to-backblaze-b2-rcloneview)
- [將 Dropbox 同步至 S3 備份](https://rcloneview.com/support/blog/sync-dropbox-to-s3-backup-rcloneview)
- [雲端儲存安全檢查清單](https://rcloneview.com/support/blog/cloud-storage-security-checklist-rcloneview)

<CloudSupportGrid />
