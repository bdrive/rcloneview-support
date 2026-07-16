---
slug: sync-vultr-object-storage-s3-google-drive-rcloneview
title: "使用 RcloneView 將 Vultr Object Storage 與 S3、Google Drive 等同步"
authors:
  - tayson
description: "Vultr Object Storage 提供實惠的 S3 相容雲端儲存。了解如何使用 RcloneView 的視覺化檔案管理器來管理、同步及備份您的 Vultr 儲存桶（bucket）。"
keywords:
  - vultr object storage
  - vultr s3 compatible
  - vultr cloud sync
  - vultr backup tool
  - vultr object storage gui
  - vultr to google drive
  - vultr to aws s3
  - vultr storage manager
  - vultr rclone
  - vultr file transfer
tags:
  - s3-compatible
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 使用 RcloneView 將 Vultr Object Storage 與 S3、Google Drive 等同步

> Vultr Object Storage 提供實惠且與 S3 相容的雲端儲存。但 Vultr 的儀表板是為開發者設計，而非檔案管理。RcloneView 為其加上了視覺化層。

Vultr 以其對開發者友善的雲端基礎架構聞名，其 Object Storage 服務以具競爭力的價格提供與 S3 相容的 API。然而，在 Vultr 的網頁儀表板中管理檔案，代表您需要在為 API 設定而非檔案操作所設計的介面中操作。RcloneView 透過其 S3 相容端點連接到 Vultr Object Storage，提供熟悉的檔案管理器體驗。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 將 Vultr 連接到 RcloneView

<img src="/support/images/en/blog/new-remote.png" alt="Add Vultr Object Storage" class="img-large img-center" />

使用您的 Vultr access key、secret key 及區域端點，將 Vultr 新增為 S3 相容遠端。您的儲存桶會立即顯示在檔案總管中。

## 主要工作流程

### 以視覺化方式瀏覽及管理檔案

使用雙窗格檔案總管瀏覽您的 Vultr 儲存桶，取代開發者儀表板：

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Browse Vultr storage" class="img-large img-center" />

### 將 Vultr 與其他雲端同步

在 Google Drive 上保留 Vultr 資料的副本供團隊存取，或在 Backblaze B2 上維護備援備份。

### 遷移至或遷出 Vultr

為節省成本要從 AWS S3 移轉到 Vultr？只需拖放即可在不同服務商之間搬移整個儲存桶結構。

### 排程自動備份

設定每晚從主要儲存空間同步至 Vultr，或從 Vultr 同步至備份服務商：

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule Vultr sync" class="img-large img-center" />

### 監控與驗證

即時追蹤傳輸進度，並使用資料夾比對（Folder Comparison）驗證完整性：

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify Vultr transfer" class="img-large img-center" />

## 將 Vultr 作為備份層

Vultr Object Storage 非常適合作為次要備份目的地。其 S3 相容 API 意味著它能與 AWS S3 相同的工具及工作流程搭配使用，但在儲存密集型工作負載下價格更低。

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. **新增 Vultr Object Storage** 作為 S3 相容遠端。
3. 在雙窗格檔案總管中**瀏覽您的儲存桶**。
4. 與其他 70 多個服務商一起**同步及排程**。

S3 相容，即代表與 RcloneView 相容。

---

**相關指南：**

- [同步 Linode Object Storage](https://rcloneview.com/support/blog/sync-linode-object-storage-s3-google-drive-rcloneview)
- [同步 DigitalOcean Spaces](https://rcloneview.com/support/blog/mount-digitalocean-spaces-local-drive-rcloneview)
- [建立同步作業](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)

<CloudSupportGrid />
