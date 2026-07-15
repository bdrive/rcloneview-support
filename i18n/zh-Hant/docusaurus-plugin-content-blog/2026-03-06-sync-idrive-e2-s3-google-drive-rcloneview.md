---
slug: sync-idrive-e2-s3-google-drive-rcloneview
title: "使用 RcloneView 將 IDrive e2 物件儲存同步至 AWS S3 或 Google Drive"
authors:
  - tayson
description: "使用視覺化介面管理 IDrive e2 物件儲存——瀏覽儲存桶、同步至 AWS S3 或 Google Drive，並透過 RcloneView 的 S3 相容連線排程備份。"
keywords:
  - idrive e2 同步
  - idrive e2 備份
  - idrive e2 GUI 工具
  - idrive e2 to s3
  - idrive e2 rclone
  - idrive e2 檔案管理員
  - idrive e2 掛載本機磁碟
  - idrive e2 google drive
  - idrive e2 物件儲存
  - s3 相容儲存 GUI
tags:
  - RcloneView
  - idrive-e2
  - s3-compatible
  - cloud-storage
  - sync
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 使用 RcloneView 將 IDrive e2 物件儲存同步至 AWS S3 或 Google Drive

> IDrive e2 以每 GB 每月 $0.004 美元的價格提供極為實惠的 S3 相容儲存服務。但沒有桌面同步用戶端，管理檔案就得依賴 API 呼叫或網頁介面。RcloneView 為你帶來完整的視覺化介面。

IDrive e2 是目前最具成本效益的 S3 相容物件儲存服務之一——比 Backblaze B2、Wasabi 和 AWS S3 都便宜。它非常適合用於備份、封存與冷儲存。然而，如同大多數物件儲存供應商，IDrive e2 並沒有原生的桌面用戶端。RcloneView 透過 S3 API 連線，為你提供視覺化檔案管理、雲端對雲端同步以及排程自動化。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 為什麼選擇 IDrive e2？

| 供應商 | 每 TB/月成本 | 流出流量費用 |
|----------|-------------------|--------|
| IDrive e2 | $4.00 | 免費（3 倍儲存量） |
| Backblaze B2 | $6.00 | $0.01/GB |
| Wasabi | $6.99 | 免費 |
| AWS S3 Standard | $23.00 | $0.09/GB |

IDrive e2 的價格對任何需要實惠又可靠的物件儲存的人來說，都是極具吸引力的選擇。

## 連接 IDrive e2

由於 IDrive e2 與 S3 相容：

1. 點擊 **Add Remote** → 選擇 **Amazon S3**。
2. 從 S3 供應商下拉選單中選擇 **IDrive e2** 或 **Other**。
3. 輸入你的憑證：
   - 來自 IDrive e2 儀表板的 **Access Key** 與 **Secret Key**。
   - **Endpoint**：你的區域端點（例如 `https://s3.us-west-1.idrivecloud.io`）。
4. 儲存——你的 e2 儲存桶現在即可瀏覽。

<img src="/support/images/en/blog/new-remote.png" alt="Add IDrive e2 as S3-compatible remote" class="img-large img-center" />

## 瀏覽與管理

在同一畫面中與其他雲端一起檢視 IDrive e2 儲存桶：

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Browse IDrive e2 buckets" class="img-large img-center" />

## 同步情境

### Google Drive → IDrive e2（實惠備份）

將 e2 用作 Google Drive 的低成本備份：

1. 建立一個 Copy 工作：Google Drive → IDrive e2 儲存桶。
2. 使用 [Job Scheduling](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution) 排程每晚執行。
3. 只需支付 Google 對同樣資料收費的一小部分。

### IDrive e2 → AWS S3（跨雲端備援）

1. 建立一個 Sync 工作：IDrive e2 → S3 儲存桶。
2. 在兩個不同的 S3 相容供應商之間維持備援。

### 本機/NAS → IDrive e2（異地封存）

1. 建立一個 Copy 工作：本機資料夾或 NAS → IDrive e2。
2. 非常適合以最低成本進行異地備份。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Run IDrive e2 sync job" class="img-large img-center" />

## 掛載為本機磁碟

將 IDrive e2 當作一般資料夾存取：

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="Mount IDrive e2 as local drive" class="img-large img-center" />

## 自動化與監控

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule IDrive e2 backups" class="img-large img-center" />

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitor IDrive e2 transfers" class="img-large img-center" />

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. **新增 IDrive e2** 作為 S3 相容遠端。
3. **瀏覽、掛載或同步**至任何目的地。
4. **排程**以實現自動化的低成本雲端備份。

IDrive e2 是物件儲存界的省錢之王。RcloneView 讓它擁有應得的桌面體驗。

---

**相關指南：**

- [新增 AWS S3 與 S3 相容儲存](https://rcloneview.com/support/howto/remote-storage-connection-settings/s3)
- [將雲端儲存掛載為本機磁碟](https://rcloneview.com/support/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive)
- [比較資料夾內容](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [工作排程](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)

<CloudSupportGrid />
