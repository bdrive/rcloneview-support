---
slug: sync-linode-object-storage-s3-google-drive-rcloneview
title: "使用 RcloneView 將 Linode Object Storage 同步至 AWS S3 或 Google Drive"
authors:
  - tayson
description: "使用 RcloneView 的圖形化介面視覺化管理 Linode Object Storage — 瀏覽儲存桶、同步至 AWS S3 或 Google Drive，並排程自動化備份。"
keywords:
  - linode object storage sync
  - linode object storage backup
  - linode object storage gui
  - linode to aws s3
  - linode object storage mount
  - linode s3 compatible
  - akamai object storage sync
  - linode object storage file manager
  - linode object storage rclone
  - linode cloud backup tool
tags:
  - RcloneView
  - linode
  - s3-compatible
  - cloud-storage
  - sync
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 使用 RcloneView 將 Linode Object Storage 同步至 AWS S3 或 Google Drive

> Linode（現為 Akamai）Object Storage 提供價格實惠、相容於 S3 的儲存桶，但沒有桌面用戶端。RcloneView 補上了這個缺口 — 讓你能以視覺化方式瀏覽、同步並自動化備份。

Linode Object Storage（現為 Akamai Connected Cloud 的一部分）是一項熱門的 S3 相容儲存服務，因其簡單易用與具競爭力的價格，深受開發者與小型企業喜愛。但和多數物件儲存服務一樣，其網頁儀表板並非為日常檔案管理而設計，也沒有原生的桌面同步用戶端。RcloneView 透過 S3 API 連接 Linode，提供完整的圖形化介面來瀏覽、同步並自動化資料傳輸。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 為什麼要在 Linode Object Storage 上使用 RcloneView？

- **沒有桌面用戶端** — Linode 提供網頁控制台與 API，但沒有同步應用程式。
- **視覺化儲存桶管理** — 無需使用命令列即可瀏覽、拖放與整理檔案。
- **跨雲端同步** — 將 Linode 資料複寫至 AWS S3、Google Drive 或任何其他服務商。
- **自動化備份** — 排程每晚同步至第二個雲端，確保資料備援。

## 連接 Linode Object Storage

由於 Linode 相容於 S3，設定時請使用 S3 服務商類型：

1. 開啟 RcloneView，點選 **新增遠端**。
2. 選擇 **Amazon S3** 作為服務商類型。
3. 從 S3 服務商下拉選單中選擇 **Other**。
4. 輸入你的 Linode 認證資訊：
   - 來自 Linode Cloud Manager 的 **Access Key** 與 **Secret Key**。
   - **端點（Endpoint）**：`https://{cluster-id}.linodeobjects.com`（例如 `https://us-east-1.linodeobjects.com`）。
   - **區域（Region）**：你的叢集所在區域。
5. 儲存 — 現在即可瀏覽你的 Linode 儲存桶。

<img src="/support/images/en/blog/new-remote.png" alt="Add Linode Object Storage as S3-compatible remote" class="img-large img-center" />

## 瀏覽你的儲存桶

在同一畫面中查看 Linode 儲存桶及其他雲端或本機硬碟：

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Browse Linode Object Storage" class="img-large img-center" />

## 同步情境

### Linode → AWS S3（跨雲端備援）

1. 建立一個同步工作：Linode → S3 儲存桶。
2. 使用[工作排程](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)設定每日排程。
3. 兩者皆相容於 S3，因此傳輸快速且高效。

### Linode → Google Drive（團隊存取）

1. 建立一個複製工作：Linode → Google Drive 資料夾。
2. 讓非技術性團隊成員也能存取開發者資產。

### 本機/NAS → Linode（異地備份）

1. 建立一個從本機儲存空間 → Linode 儲存桶的同步工作。
2. Linode 的定價使其成為異地備份的高性價比選擇。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Run Linode sync job" class="img-large img-center" />

## 掛載為本機磁碟

像存取一般資料夾一樣存取 Linode 儲存桶：

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="Mount Linode Object Storage as local drive" class="img-large img-center" />

## 自動化與監控

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule Linode backups" class="img-large img-center" />

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitor Linode transfers" class="img-large img-center" />

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 將 **Linode Object Storage 新增**為 S3 相容遠端。
3. **瀏覽**、**掛載**或**同步**至任何目的地。
4. **排程**以進行自動化備份。

Linode Object Storage 值得擁有比網頁控制台更好的體驗。RcloneView 為它帶來了完整的桌面體驗，並內建多雲端同步功能。

---

**相關指南：**

- [新增 AWS S3 與 S3 相容儲存](https://rcloneview.com/support/howto/remote-storage-connection-settings/s3)
- [將雲端儲存掛載為本機磁碟](https://rcloneview.com/support/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive)
- [比較資料夾內容](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [工作排程](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)

<CloudSupportGrid />
