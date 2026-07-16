---
slug: cleanup-empty-trash-cloud-storage-rcloneview
title: "清理雲端儲存：使用 RcloneView 清空垃圾桶並移除舊版本"
authors:
  - tayson
description: "透過 RcloneView 清空垃圾桶、移除舊檔案版本，並清理 Google Drive、OneDrive、S3 等平台上的孤立資料，釋放雲端儲存空間。"
keywords:
  - rclone cleanup cloud storage
  - empty google drive trash rclone
  - onedrive recycle bin cleanup
  - remove old versions s3
  - free cloud storage space
  - rcloneview cleanup feature
  - cloud storage versioning cleanup
  - rclone delete old versions
  - reclaim cloud quota
  - cloud storage trash management
tags:
  - feature
  - cleanup
  - tips
  - cost-optimization
  - file-management
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 清理雲端儲存：使用 RcloneView 清空垃圾桶並移除舊版本

> 已刪除的檔案與舊版本會悄悄佔用你的雲端配額。RcloneView 讓你輕鬆清除這些資料，取回你已經付費的儲存空間。

每次你在 Google Drive 上刪除一個檔案，它就會進入垃圾桶。每次 OneDrive 覆寫一份文件，它就會保留舊版本。每次啟用版本控制的 S3 儲存貯體收到更新，先前的物件就會留存下來。這些隱形的副本會在數月、數年間不斷累積,佔用配額並拉高儲存費用。rclone 的 `cleanup` 指令可以移除這些隱藏的膨脹用量,而 RcloneView 讓你只需點選幾下就能執行它。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 已刪除與版本化檔案如何浪費配額

大多數雲端服務供應商會將垃圾桶與版本化的檔案計入你的儲存配額。其影響往往比預期更大：

| 服務供應商 | 計入配額的項目 | 自動清除政策 |
|----------|--------------------------|-------------------|
| **Google Drive** | 垃圾桶中的檔案、所有檔案版本 | 垃圾桶會在 30 天後自動刪除 |
| **OneDrive** | 資源回收筒項目、版本歷史記錄 | 資源回收筒會在 93 天後自動清除 |
| **Dropbox** | 已刪除的檔案與先前版本 | 保留 30 天（Basic 方案）或 180 天（Professional 方案） |
| **Amazon S3** | 所有物件版本（若已啟用版本控制） | 無自動清除機制；需要設定生命週期規則 |
| **Backblaze B2** | 所有檔案版本 | 若無生命週期規則則不會自動清除 |
| **Google Cloud Storage** | 非目前版本的物件 | 可透過生命週期政策設定 |

一個容量使用達 90% 的 Google Drive 帳號，光是垃圾桶就可能佔了整體用量的 5% 到 10%。在啟用版本控制的 S3 儲存貯體上，隨著時間推移，舊版本可能讓實際儲存用量翻倍甚至三倍。

## 依服務供應商執行清理

### Google Drive 垃圾桶

Google Drive 的垃圾桶是最常見的隱藏用量來源。若要清空它：

```bash
rclone cleanup gdrive:
```

這會永久刪除 Google Drive 垃圾桶中的所有檔案。此操作無法復原——執行前請務必確認垃圾桶中沒有你仍需要的內容。

在 RcloneView 中,你可以直接從介面觸發清理，無需開啟終端機。前往你的 Google Drive 遠端並使用清理動作即可。

<img src="/support/images/en/blog/new-remote.png" alt="RcloneView showing Google Drive remote ready for cleanup" class="img-large img-center" />

### OneDrive 資源回收筒

OneDrive 會將已刪除的檔案保留在資源回收筒中最長 93 天：

```bash
rclone cleanup onedrive:
```

這會清空資源回收筒。對於資源回收筒容量龐大的 OneDrive Business 帳號來說，這能立即釋放大量空間。

### S3 版本化物件

啟用版本控制的 S3 儲存貯體會不斷累積舊的物件版本。rclone 的清理功能會移除非目前版本的物件：

```bash
rclone cleanup s3-remote:my-bucket
```

對於擁有數千個版本化物件的儲存貯體，這項操作可能需要一些時間。你也可以針對特定前綴進行選擇性清理：

```bash
rclone cleanup s3-remote:my-bucket/logs/
```

### Dropbox 與其他服務供應商

Dropbox 不支援透過 rclone 直接執行 cleanup 指令。對於 Dropbox，請透過其網頁介面或 API 來管理已刪除的檔案與版本。其他服務供應商如 pCloud 與 Backblaze B2，其清理方式與上述範例類似。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="RcloneView explorer showing storage before cleanup" class="img-large img-center" />

## 檢查垃圾桶佔用了多少空間

在執行清理之前，先確認你能釋放多少空間：

```bash
rclone about gdrive:
```

輸出內容會包含一行 **Trashed**，顯示已刪除檔案確切佔用了多少空間：

```
Total:   15 GiB
Used:    12.3 GiB
Free:    2.7 GiB
Trashed: 3.8 GiB
```

在這個範例中，清空垃圾桶能立即釋放 3.8 GiB 空間——讓可用空間增加超過一倍。

## 選擇性移除舊檔案版本

有些工作流程需要保留最新版本，同時移除所有較舊的版本。rclone 透過後端專屬指令支援這種需求：

針對啟用版本控制的 S3：

```bash
rclone backend cleanup-hidden s3-remote:my-bucket
```

這只會移除隱藏（非目前）版本，同時保留每個物件的目前版本完整無缺。

針對 Google Drive，你可以在遠端設定中使用 `--drive-keep-revision-forever=false`，以防止未來無限期保留版本。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Execute cleanup job in RcloneView" class="img-large img-center" />

## 使用排程工作自動化清理

手動清理雖然有效，但排程清理能防止問題再次發生：

1. 在 RcloneView 中，為每個遠端建立一個帶有清理指令的新**工作（Job）**。
2. 開啟**工作排程器（Job Scheduler）**並設定重複排程——對大多數帳號來說，每月一次就足夠了。
3. 每次執行後檢視**工作歷史記錄（Job History）**，確認清理成功完成。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule automated cleanup job in RcloneView" class="img-large img-center" />

每月排程清理能確保垃圾桶與舊版本不會累積到引發配額問題或費用暴增的程度。

## 安全注意事項

- **清理是永久性的**——執行 `rclone cleanup` 後，垃圾桶中的檔案將無法復原。
- **先稽核垃圾桶內容**——在清空之前，透過服務供應商的網頁介面瀏覽垃圾桶內容。
- **S3 版本控制有其用途**——如果你依賴版本來進行回復，請勿盲目清理。可以考慮改用只保留最近 N 個版本的生命週期規則。
- **先在非關鍵遠端上測試**——在正式資料上執行清理之前，先確認行為符合你的預期。
- **清理功能不提供試跑（Dry Run）模式**——與同步或複製不同，沒有 `--dry-run` 模式可用。請在確認垃圾桶內容後，再放心執行。

## 費用影響

對於按用量計費的服務供應商而言，清理能直接降低你的帳單：

| 服務供應商 | 儲存費用 | 100 GB 舊版本／垃圾桶可節省 |
|----------|-------------|------------------------------|
| Amazon S3 Standard | $0.023/GB/月 | 每月節省 $2.30 |
| Backblaze B2 | $0.006/GB/月 | 每月節省 $0.60 |
| Google Cloud Standard | $0.020/GB/月 | 每月節省 $2.00 |
| Wasabi | $0.0069/GB/月 | 每月節省 $0.69 |

對於按配額計費的服務供應商而言，清理能避免觸及限制而導致同步與備份失敗。

---

**相關指南：**

- [分析雲端儲存用量與配額](https://rcloneview.com/support/blog/rclone-about-storage-usage-analysis-rcloneview)
- [Wasabi 對比 Backblaze B2 對比 IDrive e2 比較](https://rcloneview.com/support/blog/wasabi-vs-backblaze-b2-vs-idrive-e2-comparison-rcloneview)
- [雲端對雲端傳輸與同步](https://rcloneview.com/support/blog/effortless-cloud-to-cloud-transfers-syncing)

<CloudSupportGrid />
