---
slug: compress-remote-reduce-backup-size-rcloneview
title: "壓縮遠端 — 在 RcloneView 中自動縮小雲端備份大小"
authors:
  - tayson
description: "RcloneView 支援 rclone 的壓縮遠端（compress remote），可在上傳到雲端儲存前自動壓縮檔案。每次備份都能節省儲存成本與頻寬。"
keywords:
  - rclone compress remote
  - compress cloud backup
  - reduce cloud storage size
  - compressed cloud upload
  - rcloneview compress
  - save cloud storage space
  - compress before upload
  - cloud backup compression
  - reduce backup size
  - rclone compression
tags:
  - RcloneView
  - feature
  - cost-optimization
  - backup
  - guide
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 壓縮遠端 — 在 RcloneView 中自動縮小雲端備份大小

> 您的 500 GB 備份透過壓縮後可能只需 300 GB。壓縮遠端能包覆任何雲端供應商，自動進行 gzip 壓縮 — 更小的備份、更低的成本、相同的資料。

雲端儲存成本會隨容量增加而上升。如果能將備份大小縮減 30-60%，每月的儲存費用也能節省相應的比例。rclone 的壓縮遠端提供透明的壓縮功能 — 檔案在上傳前自動壓縮、下載時自動解壓縮，無需任何手動步驟。RcloneView 讓您可以用視覺化方式設定此功能，並與其他雲端帳戶一起管理已壓縮的備份。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 壓縮遠端的運作方式

壓縮遠端會包覆另一個遠端（Google Drive、S3、B2 等），並自動：

1. **壓縮檔案**：上傳前使用 gzip 進行壓縮
2. **解壓縮檔案**：下載時透明地自動解壓縮
3. **跳過已壓縮的格式**（jpg、mp4、zip 等），以避免浪費 CPU 資源

您可以像操作其他遠端一樣使用壓縮遠端 — 瀏覽、複製、同步 — 但目的端儲存的檔案會是壓縮狀態。

## 依檔案類型計算的壓縮節省幅度

| 檔案類型 | 典型壓縮率 | 範例 |
|-----------|-------------------|---------|
| 文字檔、CSV、日誌 | 縮小 60-90% | 100 MB → 10-40 MB |
| Office 文件 (docx, xlsx) | 縮小 5-15% | 本身已有一定程度的壓縮 |
| 資料庫傾印檔 | 縮小 50-80% | 1 GB → 200-500 MB |
| 原始碼 | 縮小 60-80% | 500 MB → 100-200 MB |
| 相片 (JPG, PNG) | 約 0% | 本身已壓縮 |
| 影片 (MP4, MKV) | 約 0% | 本身已壓縮 |
| ZIP/RAR 壓縮檔 | 約 0% | 本身已壓縮 |

最適合：文字為主的資料、日誌、資料庫備份、原始碼、未壓縮的資料格式。
不適合：相片、影片以及已壓縮的封存檔。

## 設定壓縮遠端

<img src="/support/images/en/blog/new-remote.png" alt="Create compress remote" class="img-large img-center" />

建立一個包覆現有儲存遠端的壓縮遠端。接著將壓縮遠端作為備份目的地使用，而非原始的遠端。

## 使用情境

### 壓縮日誌備份

伺服器日誌的壓縮效果非常好（80-90%）。50 GB 的日誌封存檔在雲端儲存上會縮小為 5-10 GB。

### 降低資料庫備份成本

每日的資料庫傾印檔具有高度可壓縮性。上傳前先壓縮，即可降低雲端儲存費用。

### 原始碼封存

擁有大量文字檔案的開發專案，能從壓縮中獲得顯著效益。

### 排程壓縮備份

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule compressed backup" class="img-large img-center" />

## 重要注意事項

- **CPU 額外負擔**：壓縮在上傳與下載過程中會使用 CPU，現代 CPU 可輕鬆應付。
- **並非所有檔案都能壓縮**：已壓縮的格式（JPG、MP4、ZIP）會直接通過，不進行壓縮。
- **透明存取**：透過壓縮遠端瀏覽時，檔案看起來與一般檔案無異 — 解壓縮會自動進行。
- **與加密結合**：您可以疊加壓縮遠端與加密（crypt）遠端，同時實現壓縮與加密的備份。

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. **新增您的雲端儲存**作為一般遠端。
3. **建立包覆該遠端的壓縮遠端**。
4. **使用壓縮遠端**作為您的備份目的地。
5. **享受更小的備份**與更低的成本。

更小的備份、更低的帳單、相同的資料。

---

**相關指南：**

- [隱藏的雲端儲存成本](https://rcloneview.com/support/blog/hidden-cloud-storage-costs-save-money-rcloneview)
- [加密雲端備份](https://rcloneview.com/support/blog/encrypt-cloud-backups-crypt-remote-guide-rcloneview)
- [虛擬遠端：合併、聯合、別名](https://rcloneview.com/support/blog/virtual-remotes-combine-union-alias-rcloneview)

<CloudSupportGrid />
