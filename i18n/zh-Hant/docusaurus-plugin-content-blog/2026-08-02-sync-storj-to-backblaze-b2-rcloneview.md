---
slug: sync-storj-to-backblaze-b2-rcloneview
title: "將 Storj 同步到 Backblaze B2 — 使用 RcloneView 進行雲端備份"
authors:
  - alex
description: "使用 RcloneView 將檔案從 Storj 去中心化儲存同步到 Backblaze B2。為您的 S3 相容資料保留一份備援的離網副本。"
keywords:
  - Storj 到 Backblaze B2
  - Storj 同步
  - Storj 備份
  - Backblaze B2 同步
  - 去中心化儲存備份
  - Storj RcloneView
  - S3 相容儲存同步
  - 雲端到雲端備份
  - 物件儲存備援
  - RcloneView 同步
tags:
  - RcloneView
  - storj
  - backblaze-b2
  - cloud-to-cloud
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 將 Storj 同步到 Backblaze B2 — 使用 RcloneView 進行雲端備份

> 使用 RcloneView 在 Backblaze B2 上保留一份備援的、集中式的 Storj 去中心化儲存資料副本——一項工作,兩種截然不同的儲存架構。

Storj 將加密的檔案分片分散到一個獨立的節點網路中,這在抗審查性和成本方面表現出色,但這也意味著團隊通常希望有一個傳統的、集中託管的備份作為第二層保護。Backblaze B2 很好地扮演了這個角色:一個標準的 S3 相容儲存桶,擷取簡單直接。RcloneView 透過其 S3 相容遠端儲存支援連接到兩者,並直接在它們之間移動資料,無需本機暫存磁碟機。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 連接 Storj 和 Backblaze B2

根據您專案的設定方式,使用其 S3 相容閘道端點和存取授權,或原生的 Storj 存取金鑰對,在 RcloneView 中將 Storj 新增為遠端儲存。使用 B2 主控台中的 Application Key ID 和 Application Key 個別新增 Backblaze B2。兩個遠端儲存隨後會在檔案總管面板中並排顯示為可瀏覽的檔案樹,以便您在建立同步工作之前確認儲存桶結構和物件數量。

RcloneView 可在 Windows、macOS 和 Linux 的一個視窗中掛載並同步 90 多個供應商,因此用於 Storj 和 B2 的同一介面也能處理您堆疊中已有的任何其他雲端服務。

<img src="/support/images/en/blog/new-remote.png" alt="Adding Storj and Backblaze B2 remotes in RcloneView" class="img-large img-center" />

## 建立同步工作

建立一個以 Storj 儲存桶為來源、Backblaze B2 儲存桶為目標的單向同步工作——「僅修改目標」可確保 B2 保持為純鏡像,永不寫回 Storj。在進階設定(Advanced Settings)步驟中,啟用總和檢查碼比較,以便檔案透過雜湊值和大小而非僅修改時間進行比對,這在物件中繼資料在兩個不同儲存後端之間表現不同時尤為重要。

對於封存去中心化資料集的團隊——比如一個在 Storj 上擁有 4TB 分片影片擷取素材的研究團隊——篩選(Filtering)步驟可讓您依檔案存留期或副檔名限定首次執行的範圍,以便在完全投入之前先在一個子集上驗證流程。初始同步完成後,排定的重新執行只會移動新增或已變更的物件。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Syncing a Storj bucket to Backblaze B2 with RcloneView" class="img-large img-center" />

首先執行試執行(Dry Run)。它會列出所有將被複製的物件而不實際傳輸任何內容,這是在兩個具有不同定價和擷取特性的供應商之間移動資料前確認範圍的最安全方式。

## 監控和驗證傳輸

在底部資訊檢視(Info View)的傳輸(Transferring)標籤中追蹤進度——檔案數量、傳輸速度和完成百分比會在同步執行期間即時更新。完成後,開啟 Storj 來源與 B2 目標之間的資料夾比較(Folder Compare),確認每個物件都已抵達並且大小相符,從而捕捉任何一側因網路故障而中途失敗的物件。

工作記錄(Job History)會永久記錄每次同步執行,包括持續時間、移動的總資料量和狀態,讓您擁有一份準確顯示 B2 備份上次與 Storj 保持同步的稽核記錄。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Reviewing Storj to Backblaze B2 sync job history in RcloneView" class="img-large img-center" />

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 使用其 S3 相容端點和存取憑證將 Storj 新增為遠端儲存。
3. 使用您的 Application Key ID 和 Application Key 新增 Backblaze B2。
4. 建立單向同步工作,執行試執行,然後執行以將 Storj 鏡像到 B2。

去中心化儲存資料的第二份集中託管副本彌補了大多數備份策略中容易被忽略的缺口,而 RcloneView 讓維護這份備份成為一項排定執行的、由圖形介面驅動的例行工作,而非手動繁瑣的操作。

---

**相關指南:**

- [使用 RcloneView 管理 Storj 去中心化雲端同步](https://rcloneview.com/support/blog/manage-storj-decentralized-cloud-sync-rcloneview)
- [使用 RcloneView 將 Backblaze B2 遷移到 Wasabi](https://rcloneview.com/support/blog/migrate-backblaze-b2-to-wasabi-rcloneview)
- [使用 RcloneView 修復 Storj 上傳錯誤](https://rcloneview.com/support/blog/fix-storj-upload-errors-rcloneview)

<CloudSupportGrid />
