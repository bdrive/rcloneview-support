---
slug: manage-cloudflare-r2-cloud-sync-rcloneview
title: "使用 RcloneView 管理 Cloudflare R2 儲存與雲端同步"
authors:
  - tayson
description: "使用 RcloneView 管理 Cloudflare R2 儲存。透過視覺化的 S3 相容 GUI 瀏覽儲存桶、同步檔案，並以零流出費用排程備份。"
keywords:
  - rcloneview
  - cloudflare r2 management
  - cloudflare r2 sync
  - r2 backup tool
  - r2 file manager
  - r2 s3 compatible gui
  - cloudflare r2 rclone
  - zero egress cloud storage
  - r2 bucket management
  - r2 multi-cloud sync
tags:
  - RcloneView
  - cloudflare-r2
  - r2
  - cloud-storage
  - s3-compatible
  - guide
  - object-storage
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 使用 RcloneView 管理 Cloudflare R2 儲存與雲端同步

> Cloudflare R2 提供與 S3 相容的物件儲存，且零流出費用 — **RcloneView** 讓你用視覺化介面管理儲存桶、同步資料並自動化備份。

Cloudflare R2 已迅速成為 AWS S3 的高性價比替代方案。透過取消每 GB 的流出費用，R2 讓資料取得的成本變得可預測且實惠 — 對於頻繁提供內容的工作負載來說是一大變革。RcloneView 透過 S3 相容 API 連接到 R2，並提供完整的檔案管理 GUI：瀏覽儲存桶、上傳與下載檔案、與其他雲端同步，以及排程自動備份。

無論你是託管靜態資源、封存應用程式日誌，還是將 R2 作為跨多個雲端的中央資料樞紐，RcloneView 都能免除 CLI 指令的需求,讓團隊中的每個人都能輕鬆管理 R2。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 在 RcloneView 中連接 Cloudflare R2

R2 使用與 S3 相容的憑證，因此將其加入 RcloneView 的流程與 S3 遠端設定相同。開啟遠端管理器，選擇 **Amazon S3 Compatible**，並輸入你的 R2 憑證：

- **Provider**：Cloudflare
- **Access Key ID**：從 Cloudflare 控制台的 R2 > Manage R2 API Tokens 產生
- **Secret Access Key**：對應的密鑰
- **Endpoint**：`https://<account-id>.r2.cloudflarestorage.com`

設定完成後，RcloneView 會在檔案總管面板中列出你所有的 R2 儲存桶。你可以建立新的儲存桶、刪除空的儲存桶，並像操作任何檔案系統一樣瀏覽物件階層。

R2 並不支援所有 S3 功能 — 特別是它缺乏生命週期政策以及部分分段上傳的邊緣情況。RcloneView 能優雅地處理這些限制，在遇到不支援的功能時退回使用相容的操作方式。

<img src="/support/images/en/blog/new-remote.png" alt="Adding a Cloudflare R2 remote in RcloneView" class="img-large img-center" />

## 零流出費用的優勢

R2 最大的差異化優勢在於其定價模式。AWS S3 對傳輸到網際網路的資料收取每 GB $0.09 的費用。對於每月傳輸 10 TB 的工作負載而言，光是流出費用就高達 $900。R2 對流出流量完全不收費 — 你只需為儲存空間（每月每 GB $0.015）以及 Class A/B 操作付費。

這使得 R2 成為理想的同步目標。你可以將資料從 Google Drive、OneDrive 或 S3 複製到 R2，之後在提供該資料時無需擔心頻寬費用。RcloneView 讓這種複製變得簡單：從任何來源設定一個同步至 R2 儲存桶的同步任務,存取該資料的成本就會降為零。

對於分發大型資料集的團隊 — 媒體檔案、軟體建置、機器學習模型 — 節省的成本相當可觀。RcloneView 的排程同步能確保 R2 始終擁有最新的副本。

## 將 R2 與其他雲端服務商同步

RcloneView 的雙窗格檔案總管會將 R2 與任何其他遠端並排顯示。常見的工作流程包括：

- **Google Drive 到 R2**：將協作文件備份到 R2,以取得長期且經濟實惠的保存。
- **S3 到 R2**：將現有的 S3 儲存桶鏡像到 R2,在不變更應用程式層的情況下降低流出成本。
- **R2 到 Backblaze B2**：在不同服務商上建立次要封存,以進行災難復原。

由於 R2 支援標準的 S3 校驗碼（非分段上傳使用 ETag 的 MD5），RcloneView 能有效地比較 R2 與其他 S3 相容服務商之間的檔案。未變更的檔案會被跳過，讓同步作業保持快速並降低 API 成本。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Syncing Cloudflare R2 with other cloud providers in RcloneView" class="img-large img-center" />

## 排程自動化 R2 備份

透過 RcloneView 的排程器，自動備份到 R2 非常簡單。定義一個同步任務 — 例如,將 Google Drive 專案資料夾每晚備份到 R2 儲存桶 — 並設定排程。RcloneView 會處理差異偵測，只傳輸有變更的檔案，並記錄每次執行。

任務歷史面板提供詳細的統計資訊：已傳輸的檔案、已跳過的檔案、傳輸的位元組數、耗時，以及遇到的任何錯誤。如果傳輸在執行期間失敗（網路中斷、API 逾時），RcloneView 會在下次排程執行時從中斷處繼續。

對於關鍵資料，可以考慮執行兩個排程任務，分別同步到不同地區的 R2 儲存桶（R2 支援自動配置或指定位置提示）。這樣可以提供地理冗餘，而無需手動設定跨地區複寫的複雜性。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling automated backups to Cloudflare R2 in RcloneView" class="img-large img-center" />

## 瀏覽與管理 R2 儲存桶

RcloneView 的檔案總管讓你像瀏覽本機資料夾一樣瀏覽 R2 儲存桶。你可以透過拖放上傳檔案、建立資料夾式的前綴、重新命名物件，並批次刪除。檔案總管會顯示物件大小、最後修改時間戳記以及儲存類別中繼資料。

對於擁有數百萬個物件的儲存桶，RcloneView 能有效地分頁處理列表請求，讓介面保持流暢回應。你可以依前綴篩選，或使用搜尋功能來定位特定物件，而無需捲動整個儲存桶。

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="Drag and drop files into Cloudflare R2 buckets in RcloneView" class="img-large img-center" />

## 監控傳輸並優化效能

R2 對大於 5 MB 的物件支援分段上傳，RcloneView 會自動使用此功能以最大化傳輸量。即時監控儀表板會顯示每個檔案的進度、整體傳輸速度以及預估剩餘時間。

對於大型遷移，你可以調整並行數（同時傳輸的數量）與區塊大小,以配合你的網路容量。頻寬節流功能可防止 R2 傳輸在工作時間佔用所有可用頻寬。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitoring Cloudflare R2 transfer progress in RcloneView" class="img-large img-center" />

## 成本優化技巧

若要盡可能降低 R2 成本，請在使用 RcloneView 時遵循以下做法：

- **使用同步而非複製**：同步會刪除目的地中來源已不存在的檔案，防止孤立物件累積儲存成本。
- **篩選不必要的檔案**：使用 RcloneView 的篩選規則，將暫存檔、快取以及作業系統中繼資料排除在備份之外。
- **監控儲存成長**：定期檢視任務歷史，以追蹤每個同步任務為你的 R2 儲存桶增加了多少資料。
- **搭配比較功能**：在執行大型同步之前，使用 RcloneView 的比較功能預覽將發生的變更，避免不必要的操作。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Comparing R2 bucket contents with source cloud in RcloneView" class="img-large img-center" />

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 在 Cloudflare 控制台建立 R2 API 權杖，並在遠端管理器中將 R2 加入為 S3 相容遠端。
3. 在雙窗格檔案總管中瀏覽你的 R2 儲存桶，並從其他雲端服務商設定同步任務。
4. 排程自動備份，讓 R2 與你的主要儲存保持同步。

Cloudflare R2 提供可預測的定價與零流出費用，而 RcloneView 提供視覺化管理層，助你充分善用它。

---

**相關指南：**

- [瀏覽與管理遠端儲存](https://rcloneview.com/support/howto/rcloneview-basic/browse-and-manage-remote-storage)
- [新增 AWS S3 與 S3 相容儲存](https://rcloneview.com/support/howto/remote-storage-connection-settings/s3)
- [任務排程](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)

<CloudSupportGrid />
