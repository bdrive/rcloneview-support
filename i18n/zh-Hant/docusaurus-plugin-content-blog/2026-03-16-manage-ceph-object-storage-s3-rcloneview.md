---
slug: manage-ceph-object-storage-s3-rcloneview
title: "使用 RcloneView 管理 Ceph 物件儲存 — 適用於您 Ceph 叢集的 S3 相容 GUI"
authors:
  - tayson
description: "Ceph 的 RADOS Gateway 提供 S3 相容儲存,但以視覺化方式管理卻相當麻煩。使用 RcloneView 透過桌面檔案管理器瀏覽、同步並備份您的 Ceph 叢集。"
keywords:
  - ceph object storage gui
  - ceph s3 file manager
  - ceph rados gateway gui
  - ceph storage management
  - ceph sync tool
  - ceph rclone
  - ceph backup cloud
  - ceph rgw gui
  - ceph s3 compatible
  - ceph visual file manager
tags:
  - RcloneView
  - s3-compatible
  - cloud-storage
  - self-hosted
  - enterprise
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 使用 RcloneView 管理 Ceph 物件儲存 — 適用於您 Ceph 叢集的 S3 相容 GUI

> Ceph 驅動著全球一些最大型的儲存叢集。但瀏覽儲存桶、同步至外部雲端或驗證資料,通常都需要仰賴 CLI 工具與腳本。RcloneView 為 Ceph 管理員提供了長期缺乏的視覺化操作層。

Ceph 是企業、研究機構與雲端服務供應商首選的分散式儲存系統。其 RADOS Gateway (RGW) 提供 S3 相容的 API,這代表 RcloneView 可以直接連接您的 Ceph 叢集,並提供完整的視覺化檔案管理體驗 — 瀏覽儲存桶、將資料傳輸至外部雲端、排程備份,以及驗證完整性。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 將 Ceph 連接至 RcloneView

<img src="/support/images/en/blog/new-remote.png" alt="Add Ceph S3 remote" class="img-large img-center" />

使用您的 RGW 端點、存取金鑰與私密金鑰,將您的 Ceph 叢集新增為 S3 相容遠端。RcloneView 會將其視為與其他 S3 供應商相同的方式處理。

## 主要使用情境

### 以視覺化方式瀏覽並管理儲存桶

在雙窗格檔案總管中瀏覽您的 Ceph 儲存桶與物件,不再需要使用 `s3cmd` 或 `aws cli`:

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Browse Ceph buckets" class="img-large img-center" />

### 複製至外部雲端

在 AWS S3、Google Cloud Storage 或 Backblaze B2 上維護關鍵 Ceph 資料的異地副本:

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Replicate Ceph to cloud" class="img-large img-center" />

### 排程跨站點備份

自動化每晚從您的 Ceph 叢集複製至外部雲端服務供應商:

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule Ceph backup" class="img-large img-center" />

### 將資料遷移至/從 Ceph

想從 AWS S3 遷移至您自己的 Ceph 叢集?或是想將資料從 Ceph 遷出至商用供應商?雙窗格檔案總管讓這一切都能以視覺化方式完成。

### 驗證資料完整性

使用資料夾比對功能確認複製後的資料與來源一致:

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify Ceph replication" class="img-large img-center" />

## 效能考量

Ceph 叢集能夠承載高吞吐量。在進行大規模遷移或備份時,可提高並行傳輸數量(8-16)並使用多執行緒串流,以最大化頻寬利用率。

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 將您的 **Ceph RGW** 新增為 S3 相容遠端。
3. 在檔案總管中**瀏覽您的儲存桶**。
4. **設定複製工作**至外部雲端。

企業級儲存系統值得擁有企業級的管理工具。

---

**相關指南:**

- [管理 MinIO 儲存](https://rcloneview.com/support/blog/sync-minio-to-aws-s3-google-drive-gui-rcloneview)
- [管理 OpenStack Swift](https://rcloneview.com/support/blog/manage-openstack-swift-object-storage-gui-rcloneview)
- [多執行緒傳輸](https://rcloneview.com/support/blog/multi-threaded-transfers-parallel-streams-rcloneview)

<CloudSupportGrid />
