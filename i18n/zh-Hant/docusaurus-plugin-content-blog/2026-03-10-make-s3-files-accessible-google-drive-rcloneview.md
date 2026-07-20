---
slug: make-s3-files-accessible-google-drive-rcloneview
title: "如何透過 Google Drive 存取 AWS S3 檔案 — 同步 S3 儲存桶以利團隊協作"
authors:
  - tayson
description: "AWS S3 非常適合儲存資料，但非技術團隊難以存取。了解如何使用 RcloneView 將 S3 儲存桶內容同步到 Google Drive，方便輕鬆分享。"
keywords:
  - s3 to google drive sync
  - aws s3 google drive
  - share s3 files team
  - s3 bucket google drive
  - make s3 accessible
  - s3 collaboration tool
  - sync s3 google drive
  - s3 files non technical users
  - aws s3 file sharing
  - s3 to gdrive transfer
tags:
  - RcloneView
  - aws-s3
  - google-drive
  - collaboration
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 如何透過 Google Drive 存取 AWS S3 檔案 — 同步 S3 儲存桶以利團隊協作

> 你的開發人員將所有東西都儲存在 S3 儲存桶中。你的行銷團隊使用 Google Drive。當行銷團隊需要 S3 中的檔案時，他們得請開發人員下載並分享。其實有更好的方法。

AWS S3 功能強大且成本效益高，但它是為開發人員設計的。AWS 主控台對非技術團隊成員來說並不友善，而分享單一 S3 物件則需要產生預先簽署的 URL。透過將選定的 S3 資料夾同步到 Google Drive，每個人都能在不需要 AWS 憑證的情況下存取所需檔案。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 問題所在

- **開發人員**將資產、報告和匯出檔案儲存在 S3 中。
- **非技術團隊**（行銷、業務、管理層）無法輕鬆存取 S3。
- **目前的變通方法**：由某人從 S3 下載後，再手動上傳到 Google Drive。
- **結果**：檔案過時、額外的工作量,以及團隊的挫折感。

## 解決方案

使用 RcloneView 自動將特定 S3 資料夾同步到 Google Drive：

```
S3: reports/monthly/ → Google Drive: Shared/Monthly Reports/
S3: assets/marketing/ → Google Drive: Shared/Marketing Assets/
S3: exports/data/ → Google Drive: Shared/Data Exports/
```

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Sync S3 to Google Drive" class="img-large img-center" />

## 設定步驟

### 1) 連結兩個帳戶

新增 AWS S3 和 Google Drive 作為遠端：

<img src="/support/images/en/blog/new-remote.png" alt="Add S3 and Google Drive remotes" class="img-large img-center" />

### 2) 建立選擇性同步工作

不要同步整個 S3 儲存桶——只同步非技術團隊需要的資料夾。使用篩選規則來指定特定路徑或檔案類型。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Create S3 to Google Drive sync job" class="img-large img-center" />

### 3) 排程自動更新

每小時或每天同步一次，讓 Google Drive 始終擁有最新的檔案：

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule S3 to Google Drive sync" class="img-large img-center" />

### 4) 驗證同步完整性

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify S3 and Google Drive are in sync" class="img-large img-center" />

## 單向同步 vs 雙向同步

### 單向（S3 → Google Drive）

從 S3 到 Google Drive 使用**複製**或**同步**。Google Drive 為唯讀（作為鏡像）。變更必須在 S3 中進行。

適合：報告、匯出檔案、產生的資產。

### 雙向

雙向同步。Google Drive 中的變更會同步回 S3，反之亦然。

適合：兩個團隊都會參與的共用工作資料夾。

## 篩選相關內容

不要讓 S3 中的所有內容都湧入 Google Drive。使用篩選器：

- 僅包含 `*.pdf`、`*.xlsx`、`*.pptx` — 業務文件。
- 排除原始資料、日誌和暫存檔案。
- 使用 `--max-age 90d` 僅同步最近的檔案。

## 成本意識

S3 的資料外傳需要付費（前 10 TB 為 $90/TB）。若要頻繁同步大型資料集，可以考慮：

- 在離峰時段進行同步。
- 使用篩選器限制資料量。
- 考慮以 Backblaze B2 或 Wasabi 作為中介（免費或低廉的外傳費用）。

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. **新增 S3 和 Google Drive** 作為遠端。
3. 為特定資料夾**建立目標同步工作**。
4. **排程每小時或每天更新**。
5. 與團隊**分享 Google Drive 資料夾**。

彌合開發基礎設施與團隊協作之間的差距。

---

**相關指南：**

- [建立同步工作](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [Rclone 篩選規則](https://rcloneview.com/support/blog/rclone-filter-rules-include-exclude-explained-rcloneview)
- [工作排程](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)
- [設定頻寬限制](https://rcloneview.com/support/blog/set-bandwidth-limits-cloud-transfers-rcloneview)

<CloudSupportGrid />
