---
slug: cloud-storage-tax-preparers-rcloneview
title: "稅務師的雲端儲存 — 使用 RcloneView 進行有條理的客戶備份"
authors:
  - casey
description: "稅務師的雲端儲存：使用 RcloneView 備份客戶申報表、加密敏感檔案，並在每個申報季保留一份經過驗證的異地副本。"
keywords:
  - 稅務師的雲端儲存
  - 稅務師檔案備份
  - 報稅季雲端備份
  - 客戶文件備份
  - 加密雲端備份
  - RcloneView 稅務
  - 將報稅表備份到雲端
  - 多雲備份 會計
  - Crypt 遠端 敏感檔案
  - 雲端資料夾比較
tags:
  - RcloneView
  - cloud-storage
  - industry
  - backup
  - guide
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 稅務師的雲端儲存 — 使用 RcloneView 進行有條理的客戶備份

> 將客戶申報表、原始資料與委任合約異地備份、加密並核對，全部在一個桌面應用程式中完成。

稅務事務所每個申報季都會累積數千份 PDF：W-2 表、上一年度申報表、已簽署的授權書。其中大部分存放在一台辦公工作站或 NAS 上，3 月份一顆硬碟損壞就可能損失數天時間。RcloneView 讓小型事務所可以依排程將這些資料複製到雲端儲存，先行加密，並證明副本是完整的。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 將本機客戶資料夾備份到雲端

假設一家兩人事務所把客戶資料夾存放在本機磁碟上，每位客戶每年一個資料夾。在 **New Remote** 中新增 Backblaze B2、Amazon S3 或 OneDrive 等雲端遠端，然後在一個 Explorer 面板中開啟本機資料夾，在另一個面板中開啟雲端目的地。

<img src="/support/images/en/blog/new-remote.png" alt="Adding a cloud remote for tax client backups in RcloneView" class="img-large img-center" />

使用 Sync 精靈建立從本機資料夾到儲存桶的作業。將其命名為類似 `clients-2026` 的名稱，並在 Advanced Settings 中啟用校驗和比較，這樣變更的檔案會透過雜湊與大小偵測，而不僅僅依據時間戳記。

## 上傳前加密敏感文件

申報表包含姓名、身分證明號碼與銀行資訊。RcloneView 支援 Crypt 虛擬遠端，會在檔案送達服務供應商之前加密檔案名稱、資料夾名稱與內容。建立一個包裹儲存桶路徑的 Crypt 遠端，然後讓同步作業指向 Crypt 遠端，而不是原始儲存桶。請將 crypt 密碼保存在同一雲端帳戶之外的安全位置；沒有它，備份將無法解密。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Syncing encrypted client folders to cloud storage" class="img-large img-center" />

## 排程季度備份並檢視歷程記錄

申報季期間，每天都會有變動。排程是 PLUS 功能：使用 crontab 風格的 Step 4 讓作業每晚執行，並使用 Simulate schedule 預覽接下來的執行時間。使用 FREE 授權時，您仍可在 Job Manager 中一鍵手動執行同一作業。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a nightly tax client backup job" class="img-large img-center" />

Job History 會列出每次執行的狀態、時間長度、大小與檔案數，因此您可以證明關鍵的夜晚備份確實執行了。在任何單向同步之前先執行 **Dry Run**，查看哪些內容將被複製或刪除。

## 封存本季之前先驗證

申報季結束時，將本機資料夾放在左側、雲端副本放在右側，開啟 **Compare**。篩選僅存在於左側或存在差異的檔案以找出遺漏，然後將其複製過去。比較結果一致之後，您就可以清理辦公電腦上的空間。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Comparing local client folders with the cloud backup" class="img-large img-center" />

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 新增雲端遠端，如有需要，在其之上新增 Crypt 遠端。
3. 以客戶資料夾建立同步作業，並先執行 Dry Run。
4. 使用 Folder Compare 驗證，並檢視 Job History。

一份經過測試的加密異地副本，可以讓申報季中的硬體故障只是一次小麻煩，而不是一場危機。

---

**相關指南：**

- [會計與財務事務所的雲端儲存](https://rcloneview.com/support/blog/cloud-storage-accounting-finance-firms-rcloneview)
- [Zero-CLI Crypt 遠端](https://rcloneview.com/support/blog/zero-cli-crypt-remote-rcloneview)
- [雲端儲存安全檢查清單](https://rcloneview.com/support/blog/cloud-storage-security-checklist-rcloneview)

<CloudSupportGrid />
