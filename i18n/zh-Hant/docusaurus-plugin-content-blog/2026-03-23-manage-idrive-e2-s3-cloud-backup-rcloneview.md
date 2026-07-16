---
slug: manage-idrive-e2-s3-cloud-backup-rcloneview
title: "使用 RcloneView 管理 IDrive e2——相容 S3 的雲端備份"
authors:
  - tayson
description: "了解如何使用 RcloneView 管理 IDrive e2，這是一款價格實惠、相容 S3 的儲存解決方案，適用於可擴展的雲端備份與災難復原。"
keywords:
  - IDrive e2 backup
  - S3-compatible storage
  - affordable cloud backup
  - IDrive e2 sync
  - RcloneView S3
  - cheap cloud storage
  - object storage backup
  - IDrive e2 integration
  - cloud backup solution
  - cost-effective cloud storage
tags:
  - RcloneView
  - idrive-e2
  - s3-compatible
  - cloud-storage
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 使用 RcloneView 管理 IDrive e2——相容 S3 的雲端備份

> IDrive e2 以更低的成本提供相容 S3 的儲存服務——RcloneView 讓管理它變得輕而易舉。

IDrive e2 是一款高性價比、相容 S3 的物件儲存平台，能在不需要高昂費用的情況下提供企業級的可靠性。如果你正在尋找降低雲端儲存成本，同時又想保留完整備份與同步功能的方案，RcloneView 能與 IDrive e2 無縫整合，自動化你的整個備份流程。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 為什麼選擇 IDrive e2 進行雲端備份？

IDrive e2 提供相容 S3 API 的功能，這意味著它能與任何支援 S3 協定的工具搭配使用——包括 RcloneView。憑藉具競爭力的價格與多個資料中心選項，它非常適合需要管理大規模備份、同時又不想超支的企業。無論你要備份資料庫、媒體庫還是整個檔案系統，IDrive e2 都能依需求擴展。

<img src="/support/images/en/blog/new-remote.png" alt="Adding IDrive e2 as a new remote in RcloneView" class="img-large img-center" />

## 在 RcloneView 中設定 IDrive e2

RcloneView 將 IDrive e2 視為與其他相容 S3 的儲存服務相同的處理方式。只需：

1. 開啟 RcloneView 並新增一個遠端
2. 選擇「S3-compatible」作為供應商
3. 輸入你的 IDrive e2 端點網址與憑證
4. 為遠端命名並測試連線

只需幾分鐘，你就能透過 RcloneView 直覺的介面完整存取你的 IDrive e2 儲存桶。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Transferring data to IDrive e2 buckets" class="img-large img-center" />

## 自動化備份至 IDrive e2

使用 RcloneView 的排程工具，建立定期備份至 IDrive e2 的任務。你可以從本機儲存或其他雲端供應商設定每小時、每日或每週的備份。即時監控傳輸進度，並在任務完成或失敗時收到通知。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling recurring backup jobs to IDrive e2" class="img-large img-center" />

## 讓災難復原變得簡單

由於 IDrive e2 具備版本控管並分散於多個地理位置，你將擁有多個復原點。RcloneView 讓你能隨時快速還原檔案、整個資料夾，或完整的資料集。

---

## 開始使用

1. **註冊 IDrive e2** 並取得你的存取金鑰、密鑰以及端點網址。
2. **下載 RcloneView**，可從 [rcloneview.com](https://rcloneview.com/src/download.html) 取得。
3. **使用相容 S3 的供應商選項**，將 IDrive e2 新增為遠端。
4. **排程你的第一個備份任務**，接下來的一切交給 RcloneView 處理。

立即開始使用 IDrive e2 與 RcloneView，以實惠的價格保護你的資料。

---

**相關指南：**

- [使用 RcloneView 管理 Linode Object Storage——相容 S3 的備份](https://rcloneview.com/support/blog/manage-linode-object-storage-s3-rcloneview)
- [使用 RcloneView 將 Vultr Object Storage S3 同步至 Google Drive](https://rcloneview.com/support/blog/sync-vultr-object-storage-s3-google-drive-rcloneview)
- [使用 RcloneView 管理 Google Cloud Storage——同步與備份](https://rcloneview.com/support/blog/manage-google-cloud-storage-sync-rcloneview)

<CloudSupportGrid />
