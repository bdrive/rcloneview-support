---
slug: manage-bunny-cdn-storage-sync-rcloneview
title: "管理 Bunny CDN 儲存空間——使用 RcloneView 同步與部署內容"
authors:
  - tayson
description: "Bunny.net 提供快速且實惠的 CDN 儲存服務。使用 RcloneView 管理 Bunny Storage 區域、從其他雲端同步內容,並自動化 CDN 部署。"
keywords:
  - bunny cdn storage
  - bunny net rclone
  - bunny storage sync
  - bunny cdn file manager
  - bunny storage gui
  - cdn storage management
  - bunny net sync tool
  - bunny cdn deploy
  - bunny storage backup
  - cdn content sync
tags:
  - RcloneView
  - cloud-storage
  - sync
  - s3-compatible
  - performance
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 管理 Bunny CDN 儲存空間——使用 RcloneView 同步與部署內容

> Bunny.net 儲存服務對於 CDN 內容而言既快速又便宜。但透過網頁儀表板管理儲存區域,在執行批次操作時顯得笨拙。RcloneView 為你的 CDN 資源提供了一套正規的檔案管理工具。

Bunny.net 因其效能與價格,已成為熱門的 CDN 選擇。其 Edge Storage 提供相容 S3 的儲存區域,透過 CDN 網路提供內容。然而,透過 Bunny 的網頁介面管理檔案,在批次上傳時速度緩慢、缺乏同步功能,也沒有排程功能。RcloneView 可透過 FTP 或 HTTP 端點連接到 Bunny Storage,並提供完整的檔案管理功能。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 將 Bunny Storage 連接到 RcloneView

<img src="/support/images/en/blog/new-remote.png" alt="Add Bunny CDN remote" class="img-large img-center" />

使用你 Bunny.net 儀表板中的憑證,將你的 Bunny Storage 區域新增為 FTP 遠端。

## 主要工作流程

### 將內容部署到 CDN

將網站資源、圖片或媒體檔案,從你的主要雲端儲存上傳到 Bunny CDN:

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Deploy to Bunny CDN" class="img-large img-center" />

### 從正式環境儲存同步

讓你的 CDN 儲存區域,與 S3 或 Google Drive 上的正式環境資源儲存保持同步:

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Sync to Bunny Storage" class="img-large img-center" />

### 排程自動化部署

依排程自動更新 CDN 內容:

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule CDN deployment" class="img-large img-center" />

### 驗證 CDN 內容

比較來源儲存空間與 Bunny CDN,確保已部署的內容為最新版本:

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify CDN content" class="img-large img-center" />

## 快速上手

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. **新增 Bunny Storage** 作為 FTP 遠端。
3. 從你的主要儲存空間**同步內容**。
4. **排程部署**以實現自動化更新。

快速的 CDN,值得配上快速的管理工具。

---

**相關指南:**

- [同步 Vultr 物件儲存](https://rcloneview.com/support/blog/sync-vultr-object-storage-s3-google-drive-rcloneview)
- [建立同步任務](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [任務排程](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)

<CloudSupportGrid />
