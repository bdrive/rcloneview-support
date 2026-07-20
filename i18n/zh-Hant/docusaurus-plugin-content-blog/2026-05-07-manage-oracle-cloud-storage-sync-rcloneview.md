---
slug: manage-oracle-cloud-storage-sync-rcloneview
title: "管理 Oracle Cloud Object Storage — 使用 RcloneView 進行同步與備份"
authors:
  - tayson
description: "使用 S3 相容存取金鑰將 Oracle Cloud Object Storage 連接至 RcloneView，瀏覽儲存桶，並輕鬆執行自動化的同步與備份工作。"
keywords:
  - Oracle Cloud Object Storage
  - RcloneView
  - S3-compatible
  - cloud sync
  - cloud backup
  - OCI storage
  - object storage
  - rclone oracle
tags:
  - RcloneView
  - oracle-cloud
  - object-storage
  - cloud-storage
  - cloud-sync
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 管理 Oracle Cloud Object Storage — 使用 RcloneView 進行同步與備份

> Oracle Cloud Object Storage 提供具競爭力的價格與強大的企業級 SLA — RcloneView 讓你能透過簡單的圖形介面來管理、同步並備份你的 OCI 儲存桶。

Oracle Cloud Infrastructure（OCI）Object Storage 是一個完全相容於 S3 的物件儲存服務,提供慷慨的永久免費方案與企業級的持久性保證。在 OCI 上執行工作負載,或正在尋找比 AWS S3 更具成本效益替代方案的團隊,會發現 Oracle Cloud Object Storage 是一個很有吸引力的選擇。RcloneView 透過 S3 相容 API 與其連接,提供功能完整的圖形介面來進行儲存桶管理、檔案傳輸與自動化同步工作 — 完全不需要使用命令列。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 在 RcloneView 中設定 Oracle Cloud Object Storage

若要將 RcloneView 連接至 Oracle Cloud Object Storage,你需要三項資訊:**Customer Access Key**(注意,不是你的 OCI API 金鑰)、**namespace**,以及**區域端點（regional endpoint）**。你可以在 OCI 主控台的使用者設定檔中的 Customer Secret Keys 產生存取金鑰。端點格式為 `https://<namespace>.compat.objectstorage.<region>.oraclecloud.com`,例如 `https://axyz1234abcd.compat.objectstorage.us-ashburn-1.oraclecloud.com`。

在 RcloneView 中,點選 **New Remote**,選擇 **S3 Compatible Storage**,再從提供者下拉選單中選擇 **Oracle Cloud Infrastructure Object Storage**。貼上你的 Access Key ID、Secret Key,以及區域端點。將 region 欄位設定為與你的 OCI 區域代碼相符。點選 **Save**,RcloneView 會立即連接並列出你的儲存桶。

<img src="/support/images/en/blog/new-remote.png" alt="Adding Oracle Cloud Object Storage remote in RcloneView" class="img-large img-center" />

## 瀏覽儲存桶與管理檔案

連接完成後,Oracle Cloud Object Storage 的運作方式就如同 RcloneView 雙窗格檔案總管中的其他遠端一樣。你可以瀏覽儲存桶命名空間與物件前綴,以拖放方式上傳檔案,並將物件下載到本機。RcloneView 會顯示即時傳輸指標,讓你能隨時監控大型上傳的進度。

如果你為了地理備援而使用多個 OCI 區域,可以將每個區域端點新增為個別的具名遠端。接著你就能在檔案總管中並排開啟它們,並透過雲端到雲端傳輸直接在不同區域之間複製物件 — 完全不需要先下載到本機。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-to-cloud file transfer between OCI buckets in RcloneView" class="img-large img-center" />

## 建立備份用的同步工作

RcloneView 的 **Job Wizard（工作精靈）**會以四個步驟引導你建立與 Oracle Cloud Object Storage 之間的同步工作:選擇來源、選擇目的地、設定選項,以及在執行前進行檢視。建議先使用 **dry run（模擬執行）**模式,確切了解哪些檔案會被傳輸或刪除 — 這在同步至 OCI 時尤其重要,因為同步作業可能會刪除目的地中已不存在於來源的檔案。

**Job History（工作記錄）**面板會記錄每次工作執行的時間戳記與傳輸統計資料,為你提供符合稽核要求的軌跡記錄。PLUS 授權使用者可以為每項工作新增**排程**,讓備份自動執行 — 例如每晚凌晨 2 點自動執行 — 完全不需要任何手動操作。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history log for Oracle Cloud sync jobs in RcloneView" class="img-large img-center" />

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 在 OCI 主控台產生 **Customer Secret Key**,並記下你的 namespace 與 region。
3. 在 RcloneView 中,點選 **New Remote** > **S3 Compatible Storage** > **Oracle Cloud Infrastructure Object Storage**。
4. 輸入你的 Access Key ID、Secret Key,以及區域端點 URL。
5. 瀏覽你的儲存桶,並使用 **Job Wizard** 建立你的第一個同步或備份工作。

Oracle Cloud Object Storage 的 S3 相容性,使其能輕鬆整合進透過 RcloneView 管理的任何多雲策略之中。

---

**相關指南:**

- [管理 Amazon S3 — 使用 RcloneView 進行同步與備份](https://rcloneview.com/support/blog/manage-amazon-s3-cloud-sync-backup-rcloneview)
- [使用 RcloneView 集中管理 S3、Wasabi 與 R2](https://rcloneview.com/support/blog/centralize-s3-wasabi-r2-with-rcloneview)
- [管理 IDrive e2 — 使用 RcloneView 進行雲端同步與備份](https://rcloneview.com/support/blog/manage-idrive-e2-cloud-sync-backup-rcloneview)

<CloudSupportGrid />
