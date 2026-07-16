---
slug: migrate-cloudflare-r2-to-backblaze-b2-rcloneview
title: "將 Cloudflare R2 遷移至 Backblaze B2 — 使用 RcloneView 傳輸檔案"
authors:
  - tayson
description: "了解如何使用 RcloneView 的視覺化介面將檔案從 Cloudflare R2 遷移至 Backblaze B2。無需 CLI 命令即可傳輸 S3 相容儲存空間。"
keywords:
  - cloudflare r2 to backblaze b2
  - migrate r2 to b2
  - cloudflare r2 migration
  - backblaze b2 transfer
  - cloud-to-cloud migration
  - rcloneview cloud transfer
  - s3 compatible migration
  - object storage migration
  - r2 backup to b2
tags:
  - cloudflare-r2
  - backblaze-b2
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 將 Cloudflare R2 遷移至 Backblaze B2 — 使用 RcloneView 傳輸檔案

> 從 Cloudflare R2 遷移到 Backblaze B2，不必寫腳本或在終端機中管理 API 權杖。

Cloudflare R2 提供零出口流量費用的定價方案，但有些團隊發現 Backblaze B2 更深入的生態系整合、生命週期政策以及 Bandwidth Alliance 合作夥伴關係，讓它更適合長期使用。無論您是要整合物件儲存還是搬遷工作負載，RcloneView 都能讓您透過點選式介面將每個儲存桶從 R2 遷移到 B2 — 完全不需要 CLI。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 為什麼要從 Cloudflare R2 遷移到 Backblaze B2

Backblaze B2 提供與 Cloudflare(透過 Bandwidth Alliance)和 Fastly 等 CDN 合作夥伴的原生整合，這代表透過這些網路從 B2 傳出的流量是免費或大幅折扣的。B2 除了自家的原生 API 外，也支援 S3 相容的 API 端點，讓應用程式的連線方式更具彈性。對於需要應用程式層級生命週期規則、伺服器端加密金鑰管理或事件通知的團隊來說,B2 提供的功能是 R2 目前尚未具備的。

成本的可預測性是另一個考量因素。Backblaze B2 每 TB 每月固定收取 6 美元的儲存費用,並透過合作夥伴網路提供免費的出口流量。如果您的架構已經透過 Cloudflare 的 CDN 路由流量,那麼在考量運算與 Workers 費用後,B2 儲存搭配 Cloudflare 傳遞的組合可能會比單獨使用 R2 更經濟實惠。

<img src="/support/images/en/blog/new-remote.png" alt="Adding Cloudflare R2 and Backblaze B2 remotes in RcloneView" class="img-large img-center" />

## 在 RcloneView 中設定兩個遠端

開啟 RcloneView,為 Cloudflare R2 建立一個新的遠端。選擇「Amazon S3 Compliant」作為提供者類型,然後從 S3 提供者下拉選單中選擇「Cloudflare R2」。輸入您的 R2 Access Key ID、Secret Access Key 以及端點 URL — 格式通常為 `https://<account-id>.r2.cloudflarestorage.com`。RcloneView 會在儲存前驗證連線。

接著,新增一個 Backblaze B2 遠端。您可以使用原生的 B2 提供者類型,或是 S3 相容介面。若選擇原生選項,請輸入您的 B2 Application Key ID 和 Application Key。連線後,RcloneView 會自動列出您現有的儲存桶。如果目標儲存桶尚未存在,請先在 B2 主控台中以您偏好的區域與加密設定建立該儲存桶。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring cloud-to-cloud transfer from R2 to B2" class="img-large img-center" />

## 執行遷移

設定好兩個遠端後,開啟 RcloneView 的雙窗格檔案總管。在一側選擇您的 R2 遠端,另一側選擇 B2 遠端。瀏覽至 R2 中的來源儲存桶,以及 B2 中的目標儲存桶。您可以拖放整個儲存桶的內容,或選擇特定的前綴與資料夾進行傳輸。

若是大型遷移,建議改為建立同步或複製工作。前往工作管理員,將 R2 設為來源、B2 設為目標,並選擇「Copy」模式,以確保檔案在轉換過程中複製到 B2,而不會刪除 R2 中的任何內容。啟用校驗碼驗證,以確認每個物件都完整送達 — R2 和 B2 在 S3 相容上傳中都支援 MD5 校驗碼,因此 RcloneView 可以驗證端到端的完整性。

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="Drag and drop files from Cloudflare R2 to Backblaze B2" class="img-large img-center" />

## 排程與監控傳輸作業

如果您的 R2 儲存桶包含數 TB 的資料,請將遷移工作拆分成排程作業。RcloneView 的排程器可讓您在離峰時段執行傳輸,避免佔滿網路頻寬。您可以為每個工作設定頻寬限制,讓其他服務維持順暢運作。

在傳輸儀表板中監控進度,該儀表板會顯示即時傳輸速率、檔案數量以及任何錯誤。初始複製完成後,將工作切換為「Sync」模式,並定期執行,直到您將應用程式端點從 R2 切換至 B2 為止。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling R2 to B2 migration jobs in RcloneView" class="img-large img-center" />

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 使用 S3 相容憑證與您的帳戶端點,新增您的 Cloudflare R2 遠端。
3. 使用您的 Application Key ID 與 Application Key,新增您的 Backblaze B2 遠端。
4. 建立一個從 R2 到 B2 的複製工作,啟用校驗碼驗證,然後排程在離峰時段執行。

當所有物件都在 B2 中驗證完成後,更新您的應用程式端點,並依自己的步調淘汰 R2 儲存桶。

---

**相關指南:**

- [使用 RcloneView 從 Cloudflare R2 遷移到 AWS S3](https://rcloneview.com/support/blog/move-from-cloudflare-r2-to-aws-s3-with-rcloneview)
- [使用 RcloneView 比較 Cloudflare R2 與 AWS S3](https://rcloneview.com/support/blog/compare-cloudflare-r2-and-aws-s3-with-rcloneview)
- [使用 RcloneView 集中管理 S3、Wasabi 與 R2](https://rcloneview.com/support/blog/centralize-s3-wasabi-r2-with-rcloneview)

<CloudSupportGrid />
