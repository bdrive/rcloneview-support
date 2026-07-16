---
slug: migrate-wasabi-to-cloudflare-r2-rcloneview
title: "使用 RcloneView 將 Wasabi 遷移至 Cloudflare R2"
authors:
  - tayson
description: "使用 RcloneView 將資料從 Wasabi 遷移至 Cloudflare R2。比較價格、設定兩個 S3 相容遠端、傳輸資料，並逐步驗證遷移結果。"
keywords:
  - rcloneview
  - wasabi to cloudflare r2
  - migrate wasabi to r2
  - cloudflare r2 migration
  - wasabi migration tool
  - s3 compatible migration
  - cloud storage migration
  - r2 no egress fees
  - wasabi data transfer
  - object storage migration gui
tags:
  - wasabi
  - cloudflare-r2
  - migration
  - cloud-migration
  - s3-compatible
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 使用 RcloneView 將 Wasabi 遷移至 Cloudflare R2

> Wasabi 與 Cloudflare R2 皆與 S3 相容，並都以低成本取代 AWS S3 為賣點，但兩者的定價模式有重要差異——**RcloneView** 透過視覺化介面協助你在兩者之間完成遷移。

Wasabi 提供每月每 TB $6.99 的熱雲端儲存，不收取出站流量費用，但要求最少 90 天的儲存期限並設有每月最低收費。Cloudflare R2 則每月每 GB 收取 $0.015（約每 TB $15.36），同樣不收出站流量費，且無最低儲存期限限制。對於資料讀取頻繁或物件生命週期短的工作負載，R2 可能明顯更便宜。RcloneView 可將兩者連接為 S3 相容遠端，並提供直觀的遷移路徑。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 為什麼要從 Wasabi 遷移至 Cloudflare R2

兩家供應商都免收出站流量費，這是相對於 AWS S3 的主要賣點。是否遷移通常取決於以下幾點：

- **最低儲存期限**：Wasabi 每個物件至少收取 90 天的儲存費用，即使你提早刪除也一樣。R2 沒有最低期限限制，更適合暫時性或頻繁更替的資料。
- **CDN 整合**：R2 原生整合 Cloudflare 的 CDN 網路，可透過 Cloudflare 網域即時提供公開存取，無需額外設定。
- **Workers 整合**：如果你的應用程式使用 Cloudflare Workers，R2 可提供邊緣運算的零延遲存取。
- **規模化定價**：對於儲存量大的工作負載，Wasabi 固定的每 TB 費率可能更划算。對於 API 呼叫量大的工作負載，R2 的定價模式（每月前 1000 萬次 Class B 請求免費）可能更有優勢。

## 設定兩個遠端

### Wasabi 遠端

開啟 RcloneView 的遠端管理員，新增一個 S3 相容遠端。選擇 **Wasabi** 作為供應商，輸入你的 Wasabi Access Key 與 Secret Key，並指定區域端點（例如 `s3.us-east-1.wasabisys.com`）。選擇你要遷移的儲存桶。

### Cloudflare R2 遠端

新增另一個 S3 相容遠端，並選擇 **Cloudflare R2** 作為供應商。輸入你的 R2 Access Key ID 與 Secret Access Key（可在 Cloudflare 儀表板的 R2 > Manage R2 API Tokens 中產生）。端點格式為 `https://<account-id>.r2.cloudflarestorage.com`。在 Cloudflare 儀表板中建立目標儲存桶，或讓 RcloneView 在設定過程中自動建立。

<img src="/support/images/en/blog/new-remote.png" alt="Adding Wasabi and Cloudflare R2 remotes in RcloneView" class="img-large img-center" />

## 執行遷移

在左側面板開啟 Wasabi，右側面板開啟 R2。導覽至 Wasabi 上的來源儲存桶，以及 R2 上的目標儲存桶。

由於兩家供應商都使用 S3 API，中繼資料的傳輸相當直接——內容類型、快取控制標頭與自訂中繼資料都會被保留。RcloneView 在傳輸過程中使用伺服器端中繼資料，無需額外設定即可保留物件屬性。

首次遷移建議使用複製工作。RcloneView 會透過 MD5 校驗碼比對檔案（Wasabi 與 R2 對於非分段上傳的物件都會回傳標準的 MD5 ETag），僅傳輸新增或有變更的檔案。可設定並行數的多執行緒傳輸能讓遷移更有效率——大型儲存桶遷移建議將傳輸數設為 8 至 16。

請留意 Wasabi 的最低儲存期限規定：如果物件是最近（90 天內）上傳的，即使你刪除它們，Wasabi 仍會收取完整 90 天的費用。請據此規劃遷移時程——先遷移、再驗證，等過了 90 天的期限後再從 Wasabi 刪除。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Migrating Wasabi to Cloudflare R2 in RcloneView" class="img-large img-center" />

## 驗證遷移結果

傳輸完成後，使用 RcloneView 的比較功能來確認每個物件都已成功抵達 R2。選擇 Wasabi 作為來源、R2 作為目的地，並執行資料夾比較。內容相同的物件會顯示為相符；缺失或有差異的物件則會被標示出來供檢查。

若需要更高的信心，可執行 check 操作，在兩端都計算校驗碼，以位元組層級驗證資料完整性。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verifying Wasabi to R2 migration in RcloneView" class="img-large img-center" />

## 遷移後的清理工作

確認遷移完成後：

1. 更新應用程式設定，將端點指向 R2 而非 Wasabi。
2. 測試應用程式存取，確認一切在 R2 上正常運作。
3. 在 Wasabi 上等待 90 天最低儲存期限過後再刪除物件，以避免提早刪除的額外費用。
4. 刪除 Wasabi 儲存桶並停用 Wasabi 存取金鑰。

如果在過渡期間需要同時使用兩家供應商，可以在 RcloneView 中排程每日同步工作，讓 R2 隨時跟上 Wasabi 新增的物件。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling sync from Wasabi to R2 during transition" class="img-large img-center" />

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 將 Wasabi 與 Cloudflare R2 新增為 S3 相容遠端。
3. 執行從 Wasabi 到 R2 的複製工作。
4. 使用比較與 check 操作進行驗證。
5. 更新應用程式端點，並在保留期限過後清理 Wasabi。

Wasabi 與 R2 都是優秀的 S3 相容選項，但當你的工作負載型態改變時，RcloneView 能讓遷移過程變得輕鬆無痛。

---

**相關指南：**

- [新增 AWS S3 與 S3 相容儲存](https://rcloneview.com/support/howto/remote-storage-connection-settings/s3)
- [比較資料夾內容](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [建立同步工作](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)

<CloudSupportGrid />
