---
slug: migrate-azure-blob-to-cloudflare-r2-rcloneview
title: "使用 RcloneView 將 Azure Blob Storage 遷移至 Cloudflare R2：零出口費用遷移"
authors:
  - tayson
description: 使用 RcloneView 從 Azure Blob Storage 遷移至 Cloudflare R2 — 消除出口費用、設定兩端遠端、傳輸資料並以視覺化方式驗證完整性。
keywords:
  - rcloneview
  - azure blob to cloudflare r2
  - cloudflare r2 migration
  - azure blob storage
  - zero egress
  - s3 compatible storage
  - rclone GUI
  - cloud migration
  - r2 storage
  - cost optimization
tags:
  - RcloneView
  - azure
  - cloudflare-r2
  - r2
  - migration
  - cloud-migration
  - s3-compatible
  - guide
  - cost-optimization
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 使用 RcloneView 將 Azure Blob Storage 遷移至 Cloudflare R2：零出口費用遷移

> Azure Blob Storage 功能強大，但出口費用累積得很快。**Cloudflare R2** 提供與 S3 相容的物件儲存，且完全沒有出口費用 — 而 **RcloneView** 能以視覺化方式完成遷移。

Azure Blob Storage 是許多雲端架構的骨幹。它可靠、功能豐富，並與 Azure 生態系統深度整合。但有一個持續存在的痛點：**出口費用**。從 Azure Blob 下載的每一 GB 資料都要付費，對於經常提供資料的應用程式 — CDN、API、媒體傳送或分析管線 — 這些費用甚至可能超過儲存費用本身。

Cloudflare R2 完全消除了出口費用。你只需為儲存空間和操作付費，讀取不收取任何頻寬費用。對於讀取次數多於寫入次數的工作負載，R2 可以大幅降低你的雲端儲存帳單。RcloneView 讓遷移變得簡單直接 — 連接兩個供應商、傳輸資料，並驗證所有內容是否相符。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 為何要從 Azure Blob 轉換到 Cloudflare R2

這個決定通常取決於經濟因素：

- **零出口費用**：R2 對下載的資料不收取任何費用。Azure 依區域和用量收取每 GB $0.05-$0.12 的費用。
- **S3 API 相容性**：R2 支援 S3 API，因此現有工具、SDK 和應用程式只需極少改動即可使用。
- **可預測的定價**：R2 每月每 GB 儲存空間收費 $0.015，操作費用則是固定費率。沒有隱藏的分層或預留容量承諾。
- **Cloudflare 整合**：如果你已經使用 Cloudflare 的 DNS、CDN 或 Workers，R2 能自然融入你的技術堆疊。
- **無最低儲存期限**：與某些供應商不同，R2 不會因為你提早刪除資料而處罰你。

### 快速成本比較

| 成本因素 | Azure Blob（Hot，美國東部） | Cloudflare R2 |
|---|---|---|
| 每 GB/月儲存費用 | ~$0.018 | $0.015 |
| 每 GB 出口費用 | $0.05-$0.12 | $0.00 |
| 每 100 萬次 Class A 操作（寫入） | ~$0.065 | $4.50 |
| 每 100 萬次 Class B 操作（讀取） | ~$0.005 | $0.36 |

對於讀取密集型工作負載，僅出口費用的節省就足以證明遷移是值得的。

## 步驟 1：設定兩端遠端

在 RcloneView 中連接 Azure Blob 與 Cloudflare R2：

1. 在 RcloneView 中點選 **+ New Remote**。
2. **新增 Azure Blob Storage**：選擇 Azure Blob 後端，輸入你的儲存體帳戶名稱和金鑰（或連接字串）。為其命名（例如 `AzureBlob`）。
3. **新增 Cloudflare R2**：選擇 S3-compatible storage，選擇 Cloudflare R2 作為供應商。輸入你的 R2 Access Key ID、Secret Access Key，以及來自 Cloudflare 儀表板的端點 URL。為其命名（例如 `CloudflareR2`）。
4. 確認兩個遠端都出現在 Explorer 中。

<img src="/support/images/en/blog/new-remote.png" alt="Adding Azure Blob and Cloudflare R2 remotes in RcloneView" class="img-large img-center" />

## 步驟 2：準備你的 R2 儲存桶

在傳輸資料之前：

- **建立目的地儲存桶**：在 R2 中建立與你的 Azure 容器對應的儲存桶。你可以透過 Cloudflare 儀表板或直接在 RcloneView 的 Explorer 中完成。
- **檢查命名慣例**：Azure 容器名稱和 R2 儲存桶名稱遵循類似的規則（小寫字母、允許連字號），因此大多數名稱可以直接沿用。
- **檢查物件鍵值相容性**：Azure Blob 支援某些可能需要調整的鍵值格式。請檢查含有特殊字元的鍵值。

## 步驟 3：執行遷移

在雙窗格 Explorer 中，一側開啟 Azure Blob，另一側開啟 Cloudflare R2。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Azure Blob and Cloudflare R2 side by side in RcloneView" class="img-large img-center" />

### 適用於小型容器

直接將容器或資料夾從 Azure Blob 拖放到 R2。RcloneView 會在背景傳輸檔案並顯示進度追蹤。

### 適用於大型容器

建立一個 **Copy** 工作以確保可靠性：

1. 選擇 Azure Blob 容器作為來源。
2. 選擇對應的 R2 儲存桶作為目的地。
3. 執行 **Dry Run** 以預覽傳輸範圍。
4. 執行工作。RcloneView 會顯示即時進度，包括傳輸速度、檔案數量和預估剩餘時間。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Real-time monitoring of Azure Blob to R2 migration" class="img-large img-center" />

## 步驟 4：驗證資料完整性

遷移完成後，驗證所有內容是否完整送達：

1. 使用 RcloneView 的 **Compare** 功能，將來源容器與 R2 儲存桶進行比對。
2. 檢視比對結果 — 留意任何標記為遺失或不同的檔案。
3. 個別重新複製任何失敗的項目。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare Azure Blob container with R2 bucket to verify migration" class="img-large img-center" />

## 步驟 5：處理大規模遷移

要遷移數百 GB 或數 TB 的資料？請妥善規劃：

- **遷移期間的 Azure 出口費用**：將資料傳出時你會需要支付 Azure 出口費用。可考慮使用 Azure 的頻寬定價分層，並在單一計費週期內完成遷移。
- **依容器並行處理**：為每個容器執行個別的工作，以分散負載並讓進度追蹤更容易。
- **失敗後恢復**：如果工作被中斷，重新執行即可。Rclone 的 Copy 操作會跳過已存在且相符的檔案，因此你只會傳輸缺少的部分。
- **頻寬考量**：Azure 和 Cloudflare 都支援高吞吐量傳輸，但透過 RcloneView 路由時，你本機的頻寬會是瓶頸。為了達到最快的遷移速度，可以在靠近你 Azure 區域的 VM 上執行 RcloneView。

## 步驟 6：更新你的應用程式

驗證完成後：

1. 更新應用程式設定，指向 R2 端點而非 Azure Blob。
2. 在測試環境中徹底測試。
3. 切換正式環境流量。
4. 保留 Azure Blob 資料一段回溯期（常見作法是 30 天），之後刪除以停止累積儲存費用。

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 在 New Remote 精靈中**連接 Azure Blob 與 Cloudflare R2**。
3. **遷移、驗證並切換** — 從你的雲端帳單中消除出口費用。

零出口費用代表每一次讀取都是免費的。RcloneView 幫你把資料送達目的地。

---

**相關指南：**

- [使用 RcloneView 從 Cloudflare R2 遷移至 AWS S3](https://rcloneview.com/support/blog/move-from-cloudflare-r2-to-aws-s3-with-rcloneview)
- [使用 RcloneView 比較 Cloudflare R2 與 AWS S3](https://rcloneview.com/support/blog/compare-cloudflare-r2-and-aws-s3-with-rcloneview)
- [使用 RcloneView 將 Dropbox 遷移至 Azure Blob Storage](https://rcloneview.com/support/blog/migrate-dropbox-to-azure-blob-storage-rcloneview)

<CloudSupportGrid />
