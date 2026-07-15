---
slug: backup-dropbox-to-aws-s3-rcloneview
title: "如何將 Dropbox 備份到 AWS S3 —— 使用 RcloneView 自動化雲對雲備份"
authors:
  - tayson
description: "透過將 Dropbox 檔案備份到 AWS S3 來保護你的資料。使用 RcloneView 設定具備排程與驗證功能的自動化雲對雲備份。"
keywords:
  - backup dropbox to s3
  - dropbox aws s3 sync
  - dropbox cloud backup
  - dropbox to s3 transfer
  - cloud to cloud backup dropbox
  - dropbox backup solution
  - dropbox data protection
  - sync dropbox aws
  - automated dropbox backup
  - dropbox migration s3
tags:
  - RcloneView
  - dropbox
  - aws-s3
  - backup
  - cloud-storage
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 如何將 Dropbox 備份到 AWS S3 —— 使用 RcloneView 自動化雲對雲備份

> Dropbox 非常適合協作使用。但如果檔案不慎被刪除、勒索軟體加密了你的共享資料夾,或是 Dropbox 本身發生故障,該怎麼辦？將檔案備份到 AWS S3 的雲對雲備份可以保護你免受這些風險影響。

僅依賴單一雲端儲存供應商來存放重要檔案是有風險的。Dropbox 的版本歷史功能有助於應對意外變更,但無法防範帳號遭入侵、超過保留期限的永久刪除,或服務中斷等問題。將檔案備份到 AWS S3,可以讓你擁有一份獨立且持久的資料副本。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 為什麼要將 Dropbox 備份到 S3?

- **獨立副本** —— 若 Dropbox 發生故障或帳號遭入侵,S3 仍保有你的檔案。
- **99.999999999% 的耐用性** —— S3 的十一個 9 耐用性,代表你的資料極為安全。
- **具成本效益的封存** —— S3 Glacier 對於不常存取的檔案,每 TB 每月最低只需 $4。
- **合規性** —— 部分產業要求備份必須存放在獨立的基礎設施上。
- **勒索軟體防護** —— S3 版本控制與物件鎖定功能可防止檔案遭覆寫。

## 設定步驟

### 1) 連接 Dropbox 與 AWS S3

在 RcloneView 中將兩者新增為遠端:

<img src="/support/images/en/blog/new-remote.png" alt="Add Dropbox and S3 remotes" class="img-large img-center" />

對於 S3,你需要提供 Access Key ID、Secret Access Key,以及偏好的區域。

### 2) 瀏覽兩端

在雙窗格瀏覽器中,左側開啟 Dropbox,右側開啟 S3:

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Browse Dropbox and S3 side by side" class="img-large img-center" />

### 3) 建立複製工作

使用**複製 (Copy)** 功能將 Dropbox 備份至 S3 儲存桶。複製只會新增檔案而不會刪除——對備份而言相當安全:

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Run Dropbox to S3 backup" class="img-large img-center" />

### 4) 排程每夜備份

將工作設定為每晚執行,讓你的 S3 備份保持最新狀態:

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule nightly Dropbox backup" class="img-large img-center" />

### 5) 驗證完整性

使用資料夾比對功能確認所有檔案皆已備份完成:

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify Dropbox backup on S3" class="img-large img-center" />

## 選擇合適的 S3 儲存類別

AWS S3 提供多種不同價格區間的儲存類別:

| 儲存類別 | 最適合用途 | 價格 (每 TB/月) |
|---------------|----------|------------------|
| S3 Standard | 經常存取的備份 | $23 |
| S3 Standard-IA | 每月存取一次的備份 | $12.50 |
| S3 Glacier Instant | 極少存取,即時取回 | $4 |
| S3 Glacier Deep Archive | 合規用途,每年存取一次 | $1 |

對大多數 Dropbox 備份而言,**S3 Standard-IA**(不常存取)是最理想的選擇——你不會每天存取備份,但需要在有需求時能快速還原。

## 使用篩選規則進行選擇性備份

你可能不需要備份所有內容。可使用 rclone 篩選規則:

- **僅包含文件檔案**: `--include "*.pdf" --include "*.docx" --include "*.xlsx"`
- **排除暫存檔**: `--exclude "*.tmp" --exclude ".dropbox*"`
- **略過大型媒體檔案**: `--max-size 500M`

詳情請參閱 [Rclone 篩選規則詳解](https://rcloneview.com/support/blog/rclone-filter-rules-include-exclude-explained-rcloneview)。

## 使用批次工作打造完整備份流程

透過 v1.3 的批次工作 (Batch Jobs) 功能,可以串連多個操作:

1. 將 Dropbox 複製到 S3。
2. 比對 Dropbox 與 S3。
3. 完成後發送 Slack 通知。

以上皆可自動化在同一序列中完成。

## 從備份還原

若你需要將檔案從 S3 還原回 Dropbox:

1. 左側開啟 S3,右側開啟 Dropbox。
2. 選取要還原的檔案或資料夾。
3. 執行從 S3 → Dropbox 的複製工作。

流程與備份完全相同,只是方向相反。

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. **新增 Dropbox 與 AWS S3** 作為遠端。
3. **執行複製工作**,將檔案從 Dropbox 傳輸到 S3。
4. **排程每夜備份**。
5. **使用資料夾比對進行驗證**。

你的 Dropbox 檔案值得擁有不只一個安身之處。

---

**相關指南:**

- [建立同步工作](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [工作排程](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)
- [比對資料夾內容](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [Rclone 篩選規則](https://rcloneview.com/support/blog/rclone-filter-rules-include-exclude-explained-rcloneview)

<CloudSupportGrid />
