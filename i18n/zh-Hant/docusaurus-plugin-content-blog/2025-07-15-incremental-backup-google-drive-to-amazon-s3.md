---
slug: backup-google-drive-to-amazon-s3
title: 使用 RcloneView 將 Google Drive 備份到 Amazon S3
authors:
  - jay
description: 透過 RcloneView 的點選式工具，將 Google Drive 資料夾複製到 Amazon S3——連線一次、執行備份，並保留額外副本以求安心。
keywords:
  - rcloneview
  - google drive
  - amazon s3
  - cloud backup
  - cloud sync
  - rclone gui
tags:
  - RcloneView
  - google-drive
  - amazon-s3
  - cloud-backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 使用 RcloneView 將 Google Drive 備份到 Amazon S3

> 讓 Google Drive 中的團隊協作順暢運作，同時在 Amazon S3 中保存安全副本。透過 RcloneView，您只需點選幾下即可完成整個備份——無需腳本，無需命令列。

## 這個組合為何實用？

- **Google Drive** 是您日常文件、試算表和共用資料夾的所在地。
- **Amazon S3** 透過版本控制、生命週期政策和低成本封存層，保存多年的副本。
- **RcloneView** 透過雙窗格檔案總管、比較預覽和排程任務將兩者連結起來，讓您隨時掌握資料的移動狀況。

<!-- truncate -->

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

## 開始前的準備

1. **選出重要的資料夾** – 檢視專案空間、共用雲端硬碟以及任何交接資料夾。略過您不需要的快取或暫存資料夾。
2. **建立或選擇一個 S3 儲存桶** – 決定區域、儲存桶名稱以及預設加密方式（SSE-S3 或 SSE-KMS）。[AWS Documentation](https://docs.aws.amazon.com/AmazonS3/latest/userguide/serv-side-encryption.html)
3. **檢查供應商限制** – Google 將 Drive API 傳輸量限制為 **每位使用者每天 750 GB**，檔案上限為 **5 TB**。大型搬移作業應規劃分幾天進行。[Google for Developers](https://developers.google.com/drive/api/guides/limits) [Google Help](https://support.google.com/drive/answer/37603)
4. **規劃您的資料夾結構** – 使用像 `drive-backup/marketing/2025/` 這樣的 S3 前綴，方便日後瀏覽快照。
5. **先在應用程式中看一次** – 瀏覽 [瀏覽與管理遠端儲存](/howto/rcloneview-basic/browse-and-manage-remote-storage) 中的檔案總管截圖，讓您先熟悉版面配置。

## 步驟 1 — 在 RcloneView 中連線兩項服務

1. 開啟 **RcloneView** → 按下 **`+ New Remote`**。
2. 選擇 **Google Drive**，登入後為此遠端取一個清楚的名稱，例如 `Drive-Main`。若您要備份共用雲端硬碟，請在設定時啟用該選項。
3. 再新增一個 **Amazon S3** 遠端。貼上您的 access key/secret（或使用 IAM 角色），選擇目標儲存桶，並將其命名為 `S3-Backup`。
4. 確認兩個遠端都並排顯示在檔案總管中。若需要複習，可參考 [遠端管理員指南](/howto/rcloneview-basic/remote-manager) 中的額外截圖。

<img src="/support/images/en/tutorials/browsing-aws-s3-and-google-drive-via-ec2-rclone.png" alt="browsing aws s3 and google drive via ec2 rclone" class="img-medium img-center" />

## 步驟 2 — 規劃備份任務

- **對某個資料夾試跑一次**：在左側開啟 `Drive-Main`，右側開啟 `S3-Backup`。拖曳一個小型測試資料夾過去，查看傳輸對話框。
- **使用「比較」功能**：比較工具會在您複製前，標示出新增與變更的檔案。這與 [比較資料夾內容](/howto/rcloneview-basic/compare-folder-contents) 中展示的畫面相同。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare view in RcloneView before copying Google Drive files" class="img-medium img-center" />

## 步驟 3 — 執行第一次備份

1. 在工具列中選擇 **Copy**（單次執行）或 **Sync (copy direction)**（若您希望目的地鏡像 Drive 內容，但不刪除 Drive 上的資料）。
2. 如需略過像 `/Personal/` 這類資料夾，可加入篩選規則。
3. 先執行一次 **Dry Run**。您會看到待處理傳輸項目的簡潔摘要。
4. 點擊 **Start**。在任務監控器中觀察進度——已傳輸位元組數、檔案數量以及任何警告都會顯示在此處。

## 步驟 4 — 排程後續複製作業

第一次執行結果良好後：

1. 直接從完成對話框中，將其儲存為 **Job**。
2. 開啟 **Job Manager** → 設定每日或每週排程。這與 [任務排程指南](/howto/rcloneview-advanced/job-scheduling-and-execution) 中的模式相同。
3. 檢查行事曆預覽以確認時間，接下來就交給 RcloneView 自動處理。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Scheduling a backup job in RcloneView" class="img-medium img-center" />

## 讓 S3 副本保持整潔

- **生命週期政策**：將超過 90 天的備份移至 Glacier Instant Retrieval 或 Deep Archive，以降低成本。[AWS Documentation](https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lifecycle-mgmt.html)
- **儲存桶版本控制**：若您希望保留每次覆寫的版本，請開啟此功能。這樣一來，RcloneView 每次執行都會成為一個還原點。
- **標籤**：為物件加上像 `Team=Finance` 或 `Compliance=SOC2` 這樣的標籤，讓帳單與稽核作業更簡單。

我們的部落格文章 [RcloneView 雲端對雲端傳輸](/blog/Effortless-Cloud-to-Cloud-Transfers-&-Syncing) 提供了更多篩選與整理雲端副本的想法。

## 有信心地監控與還原

- **任務歷史紀錄**：每次執行都會記錄位元組數、耗時與錯誤訊息。稽核人員需要時，可直接從介面匯出記錄。
- **雲端儀表板**：使用 S3 Storage Lens 或 CloudWatch 觀察儲存桶成長狀況。[AWS Documentation](https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage-lens.html)
- **還原步驟**：在 S3 中選取所需的快照，然後使用相同的 RcloneView 任務範本，複製回 Drive 或另一個儲存桶。

## 相關指南與資源

- [在 RcloneView 中快速設定 Google OAuth](/howto/remote-storage-connection-settings/add-oath-online-login)
- [Amazon S3 遠端設定](/howto/remote-storage-connection-settings/s3) — 逐步憑證設定截圖。
- [即時傳輸監控](/howto/rcloneview-basic/real-time-transfer-monitoring) — 了解如何解讀任務進度圖表。

## 常見問題

**Google 文件、試算表和簡報也會一併傳輸嗎？**
會的。備份執行時，RcloneView 會依您選擇的格式（DOCX、XLSX 等）匯出這些檔案。

**如果達到每日 750 GB 限制怎麼辦？**
RcloneView 會暫停並顯示清楚的訊息。請等待 24 小時，或改用另一個 Google 服務帳戶，然後重新啟動任務——它會從中斷的地方繼續執行。

**我可以使用 Wasabi 或 Cloudflare R2 來取代 AWS S3 嗎？**
當然可以。在 RcloneView 中設定一個相容 S3 的遠端，並指向該供應商的端點即可。

**準備好長期保護並讓 Google Drive 檔案可被搜尋了嗎？**

<CloudSupportGrid />
