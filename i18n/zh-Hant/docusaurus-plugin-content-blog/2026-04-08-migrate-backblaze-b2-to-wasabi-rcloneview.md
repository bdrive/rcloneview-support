---
slug: migrate-backblaze-b2-to-wasabi-rcloneview
title: "使用 RcloneView 將 Backblaze B2 遷移至 Wasabi"
authors:
  - tayson
description: "使用 RcloneView 從 Backblaze B2 遷移至 Wasabi。比較兩者的計價模式、設定雙方遠端、傳輸資料，並逐步驗證遷移結果。"
keywords:
  - rcloneview
  - backblaze b2 to wasabi
  - migrate b2 to wasabi
  - wasabi cloud migration
  - backblaze migration tool
  - s3 compatible migration
  - cloud storage migration
  - wasabi no egress fees
  - b2 data transfer
  - object storage migration gui
tags:
  - RcloneView
  - backblaze-b2
  - wasabi
  - migration
  - cloud-migration
  - s3-compatible
  - guide
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 使用 RcloneView 將 Backblaze B2 遷移至 Wasabi

> Backblaze B2 的儲存成本雖低，但流出流量與 API 費用可能累積成一筆可觀的開銷——**RcloneView** 讓遷移到 Wasabi 的固定費率變得簡單又可驗證。

Backblaze B2 與 Wasabi 是注重成本的團隊最常使用的兩大 S3 相容物件儲存服務。B2 以其低廉的每 GB 儲存費率（$0.006/GB/月）著稱，但其計價模式包含流出流量費用（$0.01/GB）與交易次數費用，對於讀取密集型工作負載的團隊來說，這些費用可能出乎意料。Wasabi 則提供固定費率（$0.0069/GB/月），沒有流出流量或 API 費用，讓成本完全可預測。RcloneView 透過視覺化介面處理這兩個 S3 相容供應商之間的遷移，無需撰寫 CLI 腳本。

本指南涵蓋完整的遷移流程——從了解計價差異到在傳輸後驗證每個物件。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 為什麼要從 Backblaze B2 遷移至 Wasabi

遷移的決策通常取決於可預測性。B2 的儲存費率略低於 Wasabi，但一旦加上流出流量與 Class B/C 交易費用，總成本往往會超過 Wasabi 的固定費率——尤其是對於經常讀取資料的工作負載而言。

考慮這樣的情境：在 B2 上儲存 10 TB 資料，每月費用為 $60。如果你每月下載其中的 5 TB（用於串流媒體、發佈建置版本、執行分析），流出流量將額外增加 $50。列出與下載檔案的 Class B 交易費用還會再增加更多。而在 Wasabi 上，同樣 10 TB 的資料每月總共只需 $69，無論你讀取多少資料或呼叫多少次 API。

Wasabi 同時維持最低 90 天的儲存政策——在 90 天內刪除物件會按剩餘天數收取比例費用。如果你儲存的是短期存在的資料，務必將此納入規劃考量。

## 在 RcloneView 中設定 Backblaze B2

開啟遠端管理員並新增一個 Backblaze B2 遠端。你可以使用原生 B2 API 或 S3 相容 API。就遷移用途而言，建議使用 S3 相容端點，因為這樣 RcloneView 可以對來源與目的地使用相同的傳輸邏輯。

輸入你的 B2 Application Key ID 與 Application Key。如果你有針對特定儲存桶的金鑰，建議使用它們以提升安全性——來源端的金鑰只需具備讀取權限即可。

<img src="/support/images/en/blog/new-remote.png" alt="Adding Backblaze B2 remote in RcloneView" class="img-large img-center" />

## 在 RcloneView 中設定 Wasabi

將 Wasabi 新增為 S3 相容遠端。在遠端管理員中，選擇 **Amazon S3 Compatible**，並設定：

- **Provider**：Wasabi
- **Access Key** 與 **Secret Key**：從 Wasabi 主控台產生
- **Region**：選擇離你的使用者最近的區域（us-east-1、eu-central-1、ap-northeast-1 等）
- **Endpoint**：根據所選區域自動設定

在 Wasabi 主控台或透過 RcloneView 的檔案總管建立目的地儲存桶。選擇與你主要使用者群相同的區域以降低延遲。

## 執行遷移

開啟雙欄檔案總管，左側為 B2，右側為 Wasabi。前往你要遷移的 B2 儲存桶，以及 Wasabi 的目的地儲存桶。

若要進行完整遷移，請建立一個同步工作。RcloneView 會列舉 B2 儲存桶中的所有物件，與 Wasabi 目的地進行比對，並僅傳輸缺少或已變更的部分。由於兩家供應商都透過 ETag 支援 MD5 校驗碼，檔案比對既快速又準確。

傳輸時的重要考量：

- **B2 的流出流量**：遷移過程中你將產生 B2 的流出流量費用。若要降低成本，可考慮使用 Backblaze 與 Cloudflare 的免流出流量合作方案（如適用於你的環境），或是 B2 頻寬聯盟。
- **平行傳輸**：B2 與 Wasabi 都支援高並行度。將平行傳輸數設為 8-16 以獲得最佳吞吐量。
- **大型檔案**：兩家供應商都支援分段上傳。RcloneView 會自動對超過門檻值的檔案使用分段上傳，確保大型物件能可靠地傳輸。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Migrating Backblaze B2 to Wasabi in RcloneView two-pane explorer" class="img-large img-center" />

## 監控傳輸進度

即時監控儀表板會顯示傳輸佇列中每個檔案的狀態。你可以追蹤個別檔案的進度、整體完成百分比,以及目前的傳輸速度。如果網路狀況發生變化，可以暫停傳輸並稍後繼續——RcloneView 會從中斷處接續進行。

對於數 TB 等級的遷移，傳輸可能會持續數小時或數天。RcloneView 的日誌記錄功能能確保你擁有完整的紀錄，包含已傳輸的內容、被略過的項目，以及發生的任何錯誤。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitoring B2 to Wasabi migration progress in RcloneView" class="img-large img-center" />

## 驗證遷移結果

傳輸完成後，在 B2 來源與 Wasabi 目的地之間執行比較操作。RcloneView 會列出僅存在於單一端的檔案,以及大小或校驗碼不一致的檔案。若比較結果乾淨無差異,即可確認遷移成功。

請留意以下事項：

- **空目錄**：物件儲存並沒有真正的目錄結構。B2 與 Wasabi 都使用以前綴為基礎的「資料夾」概念。RcloneView 會一致地處理這種情況,但請確認你的應用程式邏輯不依賴目錄標記。
- **中繼資料保留**：標準中繼資料（content-type、last-modified）在 S3 相容傳輸過程中會被保留。自訂中繼資料（x-amz-meta-*）也會由 RcloneView 一併傳輸。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verifying B2 to Wasabi migration with compare in RcloneView" class="img-large img-center" />

## 遷移後的清理工作

在你驗證完遷移結果並將所有應用程式端點從 B2 更新為 Wasabi 之後：

1. **更新 DNS 與應用程式設定**：將你的服務指向新的 Wasabi 端點。
2. **執行最後一次同步**：捕捉在遷移期間新增到 B2 的任何檔案。
3. **暫時保留 B2 資料**：保留 B2 儲存桶一段回復期（通常為 2-4 週）。
4. **刪除 B2 資料**：在確認 Wasabi 上一切運作正常後，刪除 B2 儲存桶以停止產生儲存費用。

在規劃保留策略時，請記得 Wasabi 最低 90 天的儲存政策。如果你在 90 天內從 Wasabi 刪除物件，仍會被收取完整 90 天的費用。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Reviewing migration job history in RcloneView" class="img-large img-center" />

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 在遠端管理員中，將 Backblaze B2 與 Wasabi 新增為 S3 相容遠端。
3. 使用雙欄檔案總管執行從 B2 到 Wasabi 的同步工作，並即時監控進度。
4. 使用比較功能驗證遷移結果，並更新你的應用程式端點。

B2 與 Wasabi 都是優秀的物件儲存供應商，但當可預測的成本很重要時，Wasabi 的固定費率模式勝出——而 RcloneView 讓這次切換變得毫不費力。

---

**相關指南：**

- [新增 AWS S3 與 S3 相容儲存](https://rcloneview.com/support/howto/remote-storage-connection-settings/s3)
- [比較資料夾內容](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [即時傳輸監控](https://rcloneview.com/support/howto/rcloneview-basic/real-time-transfer-monitoring)

<CloudSupportGrid />
