---
slug: manage-ovh-cloud-object-storage-sync-rcloneview
title: "管理 OVH Cloud Object Storage — 使用 RcloneView 與 S3、Google Drive 等服務同步"
authors:
  - tayson
description: "OVH Cloud Object Storage 價格實惠且位於歐盟境內，但透過 Horizon 儀表板管理十分繁瑣。使用 RcloneView 以視覺化檔案管理員瀏覽、同步並備份 OVH 儲存空間。"
keywords:
  - ovh cloud object storage
  - ovh cloud rclone
  - ovh cloud sync google drive
  - ovh object storage gui
  - ovh cloud file manager
  - ovh openstack swift gui
  - ovh cloud backup
  - ovh cloud transfer
  - ovh cloud sync s3
  - ovh cloud storage management
tags:
  - openstack
  - swift
  - s3-compatible
  - european-cloud
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 管理 OVH Cloud Object Storage — 使用 RcloneView 與 S3、Google Drive 等服務同步

> OVH Cloud 提供價格實惠、符合 GDPR 規範、建構於 OpenStack Swift 之上的物件儲存服務。但透過 Horizon 儀表板管理容器（container）感覺更像基礎架構作業，而非檔案管理。RcloneView 改變了這一點。

OVHcloud 的 Object Storage 對於需要符合 GDPR 規範、價格實惠的歐洲企業來說是絕佳選擇。它建構於 OpenStack Swift 之上，穩定可靠且定價合理。挑戰在於日常管理——Horizon 儀表板是為基礎架構管理員設計的，並不適合瀏覽檔案、與其他雲端同步或執行自動化備份。RcloneView 提供了 OVH Cloud 所欠缺的視覺化檔案管理層。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 為什麼選擇 OVH Cloud + RcloneView？

OVH Cloud Object Storage 提供相容 S3 與相容 Swift 的存取方式。RcloneView 同時支援這兩種協定，因此你可以透過熟悉的雙欄式檔案總管連接並管理你的容器。

### 你可以獲得

- **視覺化瀏覽**所有 OVH 容器與物件
- **跨雲端同步**，可連接 OVH 與 70 多家供應商
- **排程備份**，可從 OVH 儲存空間備份或備份至 OVH 儲存空間
- **資料夾比對**，用於驗證傳輸結果

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Manage OVH Cloud in two panes" class="img-large img-center" />

## 將 OVH Cloud 連接至 RcloneView

<img src="/support/images/en/blog/new-remote.png" alt="Add OVH Cloud remote" class="img-large img-center" />

你可以透過相容 S3 的 API（建議用於新專案）或原生 Swift API 連接。無論選擇哪一種方式，你的 OVH 容器都會立即顯示在檔案總管中。

## 常見工作流程

### 將 OVH 同步至 Google Drive

在 Google Drive 中保留一份 OVH 檔案的工作副本，方便團隊協作。再將變更同步回 OVH，以取得經濟實惠的長期儲存。

### 將 OVH 備份至其他供應商

透過在 Backblaze B2 或 AWS S3 上維護備份，避免被單一供應商綁定：

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule OVH backup" class="img-large img-center" />

### 遷移至或遷出 OVH

想從 AWS S3 遷移到 OVH 以節省成本？還是想將資料從 OVH 整合到 Azure？雙欄式檔案總管讓遷移作業變成拖放即可完成的操作。

### 監控傳輸進度

透過即時傳輸監控追蹤進度：

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitor OVH transfers" class="img-large img-center" />

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. **新增 OVH Cloud** 作為相容 S3 或 Swift 遠端。
3. 在雙欄式檔案總管中**瀏覽你的容器**。
4. **設定同步工作**，實現跨雲端工作流程。

實惠的歐盟儲存空間，值得擁有一款優秀的檔案管理員。

---

**相關指南：**

- [管理 OpenStack Swift 儲存空間](https://rcloneview.com/support/blog/manage-openstack-swift-object-storage-gui-rcloneview)
- [建立同步工作](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [工作排程](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)

<CloudSupportGrid />
