---
slug: manage-alibaba-oss-cloud-sync-backup-rcloneview
title: "管理阿里雲 OSS — 使用 RcloneView 同步與備份檔案"
authors:
  - tayson
description: "了解如何將阿里雲 OSS 連接到 RcloneView、瀏覽儲存桶，並為亞太與中國地區的工作負載執行同步與備份工作。"
keywords:
  - Alibaba Cloud OSS
  - RcloneView
  - S3-compatible storage
  - cloud sync
  - cloud backup
  - object storage
  - Asia-Pacific cloud
  - rclone OSS
tags:
  - RcloneView
  - alibaba-cloud
  - cloud-storage
  - cloud-sync
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 管理阿里雲 OSS — 使用 RcloneView 同步與備份檔案

> 阿里雲 OSS 是亞太地區工作負載的領先物件儲存平台 — RcloneView 讓您無需接觸命令列，就能輕鬆瀏覽、同步並備份您的儲存桶。

阿里雲物件儲存服務（OSS）是在中國或亞太地區有資料落地需求之團隊的首選儲存平台。無論您是要封存大型媒體檔案、備份應用程式資料，還是在不同地區之間同步資料集，RcloneView 都能在 rclone 久經考驗的 OSS 支援之上，提供簡潔的圖形化介面。無需另外安裝 rclone — RcloneView 內建了 rclone 執行檔。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 新增阿里雲 OSS 作為遠端

開啟 RcloneView，並點擊側邊欄中的 **New Remote** 按鈕。從供應商清單中選擇 **S3 Compatible Storage**，然後選擇 **Alibaba OSS** 作為供應商（或者，若有顯示，可選擇專屬的 **Alibaba Cloud Object Storage** 類型）。您需要準備您的 **Access Key ID**、**Access Key Secret**，以及適用於您所在地區的正確 OSS 端點 — 例如，華東地區使用 `oss-cn-hangzhou.aliyuncs.com`，新加坡則使用 `oss-ap-southeast-1.aliyuncs.com`。

輸入憑證後，RcloneView 會立即驗證連線並列出您的儲存桶。若您的儲存桶位於特定地區，請確認端點是否相符 — 端點不匹配是 OSS 連線失敗最常見的原因。

<img src="/support/images/en/blog/new-remote.png" alt="Adding Alibaba Cloud OSS remote in RcloneView" class="img-large img-center" />

## 瀏覽儲存桶與傳輸檔案

新增遠端後，阿里雲 OSS 遠端會顯示在雙窗格檔案總管中。您可以像瀏覽本機檔案系統一樣瀏覽資料夾與物件。將本機硬碟中的檔案拖放到 OSS 儲存桶，或直接在 OSS 前綴之間移動物件。RcloneView 會即時顯示傳輸進度，讓您隨時掌握大型上傳作業的狀態。

對於在多個地區擁有多個 OSS 儲存桶的團隊，您可以將每個地區端點新增為個別的遠端，並在同一個 RcloneView 視窗中統一管理。這讓跨地區資料搬移變得簡單，不必在多個命令列工作階段之間來回切換。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-to-cloud file transfer using RcloneView" class="img-large img-center" />

## 執行同步與備份工作

對於 OSS 工作流程而言，RcloneView 真正強大之處在於同步工作系統。使用 **Job Wizard** 可透過四個引導步驟，將任何本機資料夾或雲端遠端建立為同步至您 OSS 儲存桶的工作。**dry run**（試跑）選項可讓您在正式執行前，預覽將會傳輸哪些檔案 — 這在處理大型 OSS 儲存桶時至關重要。

RcloneView 的 **1:N 同步** 功能可讓您將一個來源同時同步至多個 OSS 儲存桶，這對於在不同 OSS 地區維護備援副本相當實用。**Job Manager** 會追蹤所有執行中的工作，而 **Job History** 則提供完整的過往傳輸記錄以供稽核。PLUS 授權持有者可以為這些工作設定循環排程，讓備份自動執行，無需人工介入。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a sync job for Alibaba OSS in RcloneView" class="img-large img-center" />

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 點擊 **New Remote**，選擇 **S3 Compatible Storage**，並選擇 **Alibaba OSS** 作為供應商。
3. 輸入您的 **Access Key ID**、**Access Key Secret**，以及 OSS 地區端點。
4. 在雙窗格總管中瀏覽您的儲存桶，並拖曳檔案進行傳輸。
5. 開啟 **Job Manager**，使用精靈建立同步工作，並在首次正式同步前執行一次試跑。

阿里雲 OSS 自然契合任何亞太地區的資料工作流程，而 RcloneView 消除了命令列的門檻，讓您整個團隊都能自信地管理儲存空間。

---

**Related Guides:**

- [管理 Amazon S3 — 使用 RcloneView 同步與備份](https://rcloneview.com/support/blog/manage-amazon-s3-cloud-sync-backup-rcloneview)
- [管理 Cloudflare R2 — 使用 RcloneView 進行雲端同步](https://rcloneview.com/support/blog/manage-cloudflare-r2-cloud-sync-rcloneview)
- [使用 RcloneView 集中管理 S3、Wasabi 與 R2](https://rcloneview.com/support/blog/centralize-s3-wasabi-r2-with-rcloneview)

<CloudSupportGrid />
