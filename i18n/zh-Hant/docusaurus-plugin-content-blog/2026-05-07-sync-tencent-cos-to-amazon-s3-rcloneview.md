---
slug: sync-tencent-cos-to-amazon-s3-rcloneview
title: "將 Tencent COS 同步至 Amazon S3 — 使用 RcloneView 進行雲端備份"
authors:
  - tayson
description: "了解如何使用 RcloneView 將騰訊雲 COS 資料同步至 Amazon S3，以實現全球可用性、跨區域備援，以及自動化的雲端備份工作。"
keywords:
  - Tencent COS to S3
  - Tencent COS sync
  - Amazon S3 backup
  - RcloneView Tencent
  - cloud-to-cloud sync
  - S3-compatible storage
  - China cloud to global
  - cross-region cloud sync
tags:
  - RcloneView
  - tencent-cos
  - amazon-s3
  - cloud-to-cloud
  - sync
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 將 Tencent COS 同步至 Amazon S3 — 使用 RcloneView 進行雲端備份

> 使用 Tencent Cloud COS 處理中國區域資料的企業，可以透過 RcloneView 將該資料同步至 Amazon S3，以實現全球可用性與跨區域備援。

Tencent Cloud Object Storage（COS）廣泛用於在中國大陸擁有使用者或營運業務的企業，因為它提供低延遲並符合當地資料法規。然而，為了實現全球可用性或災難復原，企業組織通常需要將資料複寫至涵蓋範圍更廣的 Amazon S3。RcloneView 透過對這兩個服務供應商共用的 S3 相容遠端支援，讓這種跨雲端同步變得簡單直接，所有操作皆可在單一圖形化介面中完成。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 設定 Tencent COS 遠端

Tencent COS 與 Amazon S3 皆與 S3 相容，因此 RcloneView 會透過相同的 S3 供應商框架來處理它們。在 RcloneView 中點選 **New Remote**，並選擇 **S3 Compatible Storage**。從供應商下拉選單中選擇 **Tencent Cloud COS**。輸入你從 Tencent Cloud Console 取得的 **SecretId** 與 **SecretKey**，並填入符合你的 COS 區域的正確 **endpoint**——例如廣州區域為 `cos.ap-guangzhou.myqcloud.com`。

儲存後，Tencent COS 遠端會出現在雙窗格檔案總管中。你可以瀏覽 COS 儲存桶與物件、確認內容可正常存取，並在設定同步工作之前確認資料夾結構符合預期。

<img src="/support/images/en/blog/new-remote.png" alt="Adding Tencent Cloud COS as an S3-compatible remote in RcloneView" class="img-large img-center" />

## 新增 Amazon S3 作為目的地

再次點選 **New Remote**，並選擇 **Amazon S3**。輸入你的 AWS **Access Key ID** 與 **Secret Access Key**，並指定目的地儲存桶所在的 AWS 區域。如果你的目的地儲存桶尚未建立，請先在 AWS S3 主控台中建立——RcloneView 會在設定過程中連接至該儲存桶。

在兩個遠端都設定完成後，於雙窗格檔案總管中並排開啟它們，以比對內容並確認連線狀態。在執行完整同步工作之前，你可以先在雙方各瀏覽幾個資料夾進行抽查。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-to-cloud view of Tencent COS and Amazon S3 in RcloneView" class="img-large img-center" />

## 建立並排程同步工作

開啟 **Job Manager** 並啟動 **Job Wizard**。將 Tencent COS 儲存桶（或特定前綴）設為來源，並將你的 Amazon S3 儲存桶設為目的地。在執行正式同步之前，請使用 **dry run** 選項預覽將要傳輸的內容。對於既有 COS 儲存桶的初始大量遷移而言，dry run 有助於估算傳輸容量，並及早發現路徑或編碼方面的問題。

工作成功執行後，可以考慮將其設定為週期性排程。PLUS 授權使用者可以設定每日或每週執行的自動同步工作，讓 S3 複本隨著 Tencent COS 中新資料的產生而保持最新狀態。**Job History** 面板會記錄每一次執行結果，讓你能夠掌握傳輸量與任何錯誤資訊。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a recurring Tencent COS to Amazon S3 sync in RcloneView" class="img-large img-center" />

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 透過 **New Remote** > **S3 Compatible Storage** > **Tencent Cloud COS** 新增 **Tencent Cloud COS** 遠端。
3. 使用你的 AWS 憑證新增 **Amazon S3** 遠端。
4. 使用 **Job Wizard** 建立從 COS 到 S3 的同步工作，並先執行 dry run。
5. 使用 PLUS 授權排程週期性同步工作，以實現持續的跨雲端複寫。

透過 RcloneView 將資料從 Tencent COS 同步至 Amazon S3，是從中國區域主要儲存空間實現全球資料可用性最乾淨俐落的方式之一。

---

**相關指南：**

- [管理 Tencent COS — 使用 RcloneView 進行雲端同步](https://rcloneview.com/support/blog/manage-tencent-cos-cloud-sync-rcloneview)
- [管理 Amazon S3 — 使用 RcloneView 進行雲端同步與備份](https://rcloneview.com/support/blog/manage-amazon-s3-cloud-sync-backup-rcloneview)
- [使用 RcloneView 集中管理 S3、Wasabi 與 R2](https://rcloneview.com/support/blog/centralize-s3-wasabi-r2-with-rcloneview)

<CloudSupportGrid />
