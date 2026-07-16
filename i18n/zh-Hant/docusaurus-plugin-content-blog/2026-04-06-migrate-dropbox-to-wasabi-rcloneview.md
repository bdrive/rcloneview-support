---
slug: migrate-dropbox-to-wasabi-rcloneview
title: "如何使用 RcloneView 將 Dropbox 遷移至 Wasabi Hot Cloud Storage"
authors:
  - tayson
description: 使用 RcloneView 將檔案從 Dropbox 遷移至 Wasabi Hot Cloud Storage 的逐步指南——節省成本、透過比較功能驗證，並排程持續同步。
keywords:
  - rcloneview
  - dropbox to wasabi
  - migrate dropbox
  - wasabi hot storage
  - cloud migration
  - s3 compatible storage
  - rclone GUI
  - dropbox alternative
  - wasabi cloud storage
  - cloud-to-cloud transfer
tags:
  - dropbox
  - wasabi
  - migration
  - cloud-migration
  - s3-compatible
  - cloud-to-cloud
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 如何使用 RcloneView 將 Dropbox 遷移至 Wasabi Hot Cloud Storage

> Dropbox 使用方便，但在大規模使用時成本高昂。**Wasabi Hot Cloud Storage** 提供與 S3 相容的物件儲存服務，價格僅為 Dropbox 的一小部分——而 **RcloneView** 讓遷移過程變得輕鬆無比。

長久以來，Dropbox 一直是檔案共享與協作的首選工具。但隨著儲存需求成長——尤其是對媒體公司、創意代理商和資料密集型團隊而言——按使用者計費的模式變得難以合理化。Wasabi 提供無出站流量費用、無 API 請求費用的熱儲存服務，並採用可預測的按 TB 計費方式,與 Dropbox Business 相比可節省 80% 或以上的儲存成本。

遷移本身才是最困難的部分。在雲端之間搬移數百 GB(甚至數 TB)的資料，需要一個可靠的工具來處理中斷、驗證完整性,並讓你監控進度。RcloneView 正好提供了這一切——一個由 rclone 久經考驗的引擎驅動、採用視覺化雙窗格介面的雲端對雲端傳輸工具。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 為什麼要從 Dropbox 遷移至 Wasabi

遷移的動機通常歸結為成本與掌控權：

- **節省成本**：Wasabi 每月每 TB 約收費 $6.99，且無出站流量費用或 API 費用。Dropbox Business 方案則按使用者計費，無論實際使用的儲存空間多寡。
- **S3 相容性**：Wasabi 使用 S3 API，因此你的資料可以從任何與 S3 相容的工具、SDK 或應用程式存取——不會被單一廠商綁定。
- **無出站流量費用**：隨時下載資料，不會產生意外的頻寬費用。
- **預設即為熱儲存**：Wasabi 中的每個物件都能立即存取。沒有取回延遲,也不需要管理儲存等級。
- **可擴充性**：Wasabi 可處理 PB 等級的資料，而不需改變你的工作流程或計費模式。

## 步驟 1：在 RcloneView 中設定兩個遠端

首先連接兩個雲端服務：

1. 開啟 RcloneView 並點擊 **+ New Remote**。
2. **新增 Dropbox**：選擇 Dropbox，完成 OAuth 登入，並為其命名(例如 `MyDropbox`)。
3. **新增 Wasabi**：選擇 S3-compatible storage，選擇 Wasabi 作為提供者，輸入你的 Access Key、Secret Key 以及區域端點(例如 `s3.wasabisys.com`)。為其命名(例如 `MyWasabi`)。
4. 確認兩個遠端都已顯示在 Explorer 中。

<img src="/support/images/en/blog/new-remote.png" alt="Adding Dropbox and Wasabi remotes in RcloneView" class="img-large img-center" />

## 步驟 2：規劃你的遷移計畫

在搬移任何資料之前，先規劃你的資料夾結構：

- **決定遷移範圍**：全部遷移，還是只遷移特定資料夾？可使用 RcloneView 的篩選功能來排除暫存檔案、共享捷徑或舊專案封存。
- **建立你的 Wasabi 儲存桶**：如果尚未建立，可在 Wasabi 主控台或透過 RcloneView 的 Explorer 建立儲存桶。
- **規劃資料夾路徑**：Dropbox 採用扁平的根目錄結構；Wasabi 則使用儲存桶與前綴。決定你想要 `MyWasabi:my-bucket/Dropbox/` 這樣的結構，還是更扁平的架構。

## 步驟 3：執行遷移

在 Explorer 的一側開啟 Dropbox，另一側開啟 Wasabi。你有幾個選擇：

### 拖放適用於小批量傳輸

在 Dropbox 中選取資料夾並將其拖放至 Wasabi 窗格。這種方式適合在正式進行完整遷移前，先用少量資料進行測試。

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="Drag and drop files from Dropbox to Wasabi" class="img-large img-center" />

### 使用複製工作進行完整遷移

對於大型遷移，建議建立 **Copy** 工作。這能提供 Dry Run 功能、進度監控,以及中斷後可恢復的能力。

1. 在 Dropbox 中選取來源資料夾，並在 Wasabi 中選取目標位置。
2. 選擇 **Copy** 作為操作方式。
3. 先執行 **Dry Run** 以檢視將要傳輸的內容。
4. 執行工作並即時監控進度。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Real-time transfer monitoring during Dropbox to Wasabi migration" class="img-large img-center" />

## 步驟 4：使用比較功能驗證結果

遷移完成後，使用 RcloneView 的 **Compare** 功能來驗證完整性：

1. 並排開啟 Dropbox 與 Wasabi。
2. 對已遷移的目錄執行資料夾比較。
3. 檢視結果——任何被標記為不同或缺失的檔案都需要處理。

對於可能因網路逾時或 API 速率限制而導致個別檔案傳輸失敗的大型遷移而言，這個步驟至關重要。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare folders between Dropbox and Wasabi to verify migration" class="img-large img-center" />

## 步驟 5：處理大型資料集

如果你要遷移數 TB 的資料，請牢記以下要點：

- **Dropbox API 速率限制**：Dropbox 會限制 API 請求速率。RcloneView 與 rclone 會自動處理重試,但非常大型的遷移可能需要數天才能完成，請耐心等候。
- **在離峰時段執行**：在夜間或週末啟動大型傳輸，以將對團隊 Dropbox 使用的影響降到最低。
- **使用增量執行**：如果第一次執行中斷，只需重新執行同一個 Copy 工作即可。Rclone 會跳過目標端已存在且相符的檔案。
- **注意 Wasabi 最低儲存期限**：Wasabi 有 90 天的最低儲存期限政策。如果你要在正式遷移前進行測試，請據此規劃。

## 步驟 6：排程持續同步(選用)

如果你需要一段過渡期，讓 Dropbox 和 Wasabi 保持同步：

1. 建立一個從 Dropbox 到 Wasabi 的 **Sync** 工作。
2. 在 **Job Scheduling** 面板中將其排程為每日或每週執行。
3. 一旦你的團隊完全轉移至 Wasabi,即可停用排程並淘汰 Dropbox。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule ongoing sync from Dropbox to Wasabi" class="img-large img-center" />

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 在 New Remote 精靈中**連接 Dropbox 與 Wasabi**。
3. **複製、驗證並排程**——以你自己的步調進行遷移,並保有完整的可視性。

擺脫 Dropbox 並不需要花上一整個週末。RcloneView 讓這一切成為一個受管理、可重複執行的流程。

---

**相關指南：**

- [使用 RcloneView 將 Dropbox 遷移至 Google Drive](https://rcloneview.com/support/blog/migrate-dropbox-to-google-drive-with-rcloneview)
- [Wasabi vs Backblaze B2 vs IDrive e2 比較](https://rcloneview.com/support/blog/wasabi-vs-backblaze-b2-vs-idrive-e2-comparison-rcloneview)
- [使用 RcloneView 將 Dropbox 遷移至 Azure Blob Storage](https://rcloneview.com/support/blog/migrate-dropbox-to-azure-blob-storage-rcloneview)

<CloudSupportGrid />
