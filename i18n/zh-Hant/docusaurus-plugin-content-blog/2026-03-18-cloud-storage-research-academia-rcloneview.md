---
slug: cloud-storage-research-academia-rcloneview
title: "研究人員的雲端儲存 — 使用 RcloneView 管理資料集、論文與實驗室資料"
authors:
  - tayson
description: "研究人員需要同時處理龐大的資料集、機構儲存空間、個人雲端與協作平台。了解如何使用 RcloneView 跨雲端管理學術資料。"
keywords:
  - research cloud storage
  - academic cloud management
  - research data backup
  - dataset cloud storage
  - researcher file management
  - lab data cloud sync
  - academic data backup
  - research multi cloud
  - university cloud storage
  - scientific data management
tags:
  - industry
  - best-practices
  - education
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 研究人員的雲端儲存 — 使用 RcloneView 管理資料集、論文與實驗室資料

> 學校提供 Google Workspace,補助計畫要求資料存放在 S3,合作夥伴使用 Dropbox,而你的資料集則透過 SFTP 存放在 HPC 叢集上。這聽起來是不是很熟悉?

學術研究產生的資料橫跨的平台,可能比其他任何領域都要多。機構儲存空間、個人雲端帳號、補助計畫建置的基礎設施、協作工具,以及 HPC 叢集,都會累積需要存取、備份,並最終歸檔的研究資料。RcloneView 將這一切整合到單一、易於管理的介面中。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 研究資料的樣貌

| 資料來源 | 常見平台 | 容量 |
|------------|-----------------|--------|
| 原始實驗資料 | HPC / SFTP | 100 GB - 10 TB |
| 分析程式碼 | GitHub / Google Drive | 1-10 GB |
| 論文與草稿 | Google Drive / OneDrive | 5-50 GB |
| 共享資料集 | S3 / 機構儲存空間 | 10 GB - 1 TB |
| 協作檔案 | Dropbox / Box | 10-100 GB |
| 已歸檔專案 | Glacier / 機構儲存空間 | 100 GB+ |

## 主要工作流程

### 整合來自 HPC 叢集的資料

透過 SFTP 連接你的 HPC 叢集,並將資料集同步到雲端儲存,以獲得更安全的存取方式:

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Sync HPC data to cloud" class="img-large img-center" />

### 備份無法重現的資料

實驗資料無法重新產生。排程自動備份到多個服務商:

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule research data backup" class="img-large img-center" />

### 與合作夥伴共享資料

將特定資料集同步到共享的 Dropbox 或 Google Drive 資料夾,供合作夥伴存取。

### 歸檔已完成的專案

專案結束後,將資料從昂貴的熱儲存移轉到 S3 Glacier,以進行長期保存:

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Archive completed research" class="img-large img-center" />

### 驗證資料完整性

研究資料必須是可驗證的。使用資料夾比較功能確認備份的完整性:

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify research data" class="img-large img-center" />

## 符合資料管理計畫要求

許多資助機構要求提交資料管理計畫(DMP)。RcloneView 透過提供有紀錄的備份程序、可驗證的資料副本,以及清楚的歸檔工作流程,協助你滿足 DMP 的要求。

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. **連接所有資料來源** — 機構儲存空間、雲端、SFTP。
3. **將關鍵資料備份**到至少兩個位置。
4. **將已完成的專案歸檔**到冷儲存。
5. **記錄你的工作流程**,以符合 DMP 要求。

你的研究值得被妥善保護。

---

**相關指南:**

- [大學適用的雲端儲存](https://rcloneview.com/support/blog/cloud-storage-for-universities-education-rcloneview)
- [歸檔至 S3 Glacier](https://rcloneview.com/support/blog/archive-google-drive-to-s3-glacier-rcloneview)
- [管理 SFTP 伺服器](https://rcloneview.com/support/blog/manage-sftp-server-cloud-sync-rcloneview)

<CloudSupportGrid />
