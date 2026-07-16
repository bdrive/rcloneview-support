---
slug: migrate-aws-s3-to-google-drive-rcloneview
title: "將 AWS S3 遷移至 Google Drive — 使用 RcloneView 傳輸檔案"
authors:
  - tayson
description: "使用 RcloneView 的圖形介面，將檔案從 AWS S3 儲存桶移轉至 Google Drive。進行 S3 到 Google Drive 的遷移不需要 CLI — 輕鬆傳輸、驗證並排程。"
keywords:
  - migrate AWS S3 to Google Drive
  - S3 to Google Drive transfer
  - AWS S3 Google Drive migration
  - rclone S3 to Google Drive
  - cloud-to-cloud migration tool
  - move S3 files to Google Drive
  - object storage to Google Drive
  - RcloneView S3 migration
tags:
  - amazon-s3
  - google-drive
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 將 AWS S3 遷移至 Google Drive — 使用 RcloneView 傳輸檔案

> RcloneView 將 S3 到 Google Drive 的遷移視為直接的雲端對雲端傳輸 — 無需下載到本機，並提供即時進度與檢查碼驗證。

當團隊從以基礎架構為主的儲存服務轉向以協作為導向的平台時，將 AWS S3 遷移至 Google Drive 是常見的情境。新創公司可能會將多年累積的 S3 應用程式日誌與資產封存至 Google Drive，以便跨團隊更輕鬆地存取。小型代理商可能會將分散在各專案 S3 儲存桶中的客戶交付項目，整合至共用的 Google Drive。RcloneView 讓這項遷移可視化且可稽核，並在伺服器端處理傳輸，不需要在本機暫存檔案。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 設定兩個遠端

在開始遷移之前，請先將兩個雲端服務商都加入 RcloneView。針對 AWS S3，前往 **Remote 分頁 → New Remote → Amazon S3**，輸入您的 Access Key ID、Secret Access Key，並選擇您的儲存桶區域。針對 Google Drive，透過 OAuth 瀏覽器登入新增另一個遠端 — RcloneView 會開啟 Google 的授權頁面，並自動儲存權杖。

設定完兩個遠端後，以雙面板配置開啟 Explorer。左側面板顯示您的 S3 儲存桶，右側面板顯示您的目標 Google Drive 資料夾。這種並排檢視非常適合在遷移開始前確認資料夾結構。

<img src="/support/images/en/blog/new-remote.png" alt="Configuring AWS S3 and Google Drive remotes in RcloneView" class="img-large img-center" />

## 使用同步精靈執行遷移

對於大規模遷移，建議使用 Sync Job 精靈，而非手動拖放。在 **Job Manager → Add Job** 中，將來源設定為您的 S3 儲存桶路徑（例如 `mybucket/exports/`），並將目的地設定為您的 Google Drive 資料夾。在第 2 步中，依照您的頻寬將並行傳輸數設為 8 到 12，並啟用檢查碼驗證，以在傳輸後確認每個檔案的完整性。

請先執行 **Dry Run（試跑）**。RcloneView 會列出所有將要複製的檔案，而不會實際進行傳輸。對於一個擁有 50,000 個檔案、總容量達數百 GB 的儲存桶而言，這項預覽可讓您在投入數小時的傳輸時間之前先確認範圍。如果檔案清單看起來正確，即可執行實際同步。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="S3 to Google Drive cloud-to-cloud transfer in RcloneView" class="img-large img-center" />

## 處理檔案類型差異與篩選條件

S3 儲存桶通常包含機器產生的檔案 — `.log` 檔案、暫存上傳項目、零位元組的標記物件 — 這些不需要遷移到 Google Drive。使用第 3 步的篩選功能來排除不需要的副檔名：將 `.log`、`.tmp` 和 `.part` 加入自訂排除篩選條件。您也可以設定檔案最長存留期限篩選，僅遷移過去 90 天內修改過的檔案，以縮小活躍使用情境下的傳輸範圍。

Google Drive 在檔案命名方面有一些特殊之處：S3 物件金鑰中的 `?`、`*`、`:` 等字元，rclone 會自動進行轉寫。RcloneView 會在 Log 分頁中顯示編碼錯誤，方便您檢視任何需要變更名稱的物件。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Executing the S3 to Google Drive migration job in RcloneView" class="img-large img-center" />

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 在 New Remote 精靈中，使用 Access Key + Secret + Region 新增您的 AWS S3 遠端。
3. 透過 OAuth 瀏覽器驗證新增您的 Google Drive 遠端。
4. 在 Job Manager 中建立同步工作，執行 Dry Run 進行預覽，接著執行遷移。

使用 RcloneView，您的 S3 到 Google Drive 遷移將具備完整可視性 — 不需要 CLI 指令碼、沒有暫存費用，並保有完整的工作紀錄供日後查核。

---

**相關指南：**

- [使用 RcloneView 將 Google Drive 遷移至 AWS S3](https://rcloneview.com/support/blog/migrate-google-drive-to-aws-s3-rcloneview)
- [增量備份：Google Drive 至 Amazon S3](https://rcloneview.com/support/blog/incremental-backup-google-drive-to-amazon-s3)
- [使用 RcloneView 進行檢查碼驗證的雲端遷移](https://rcloneview.com/support/blog/checksum-verified-cloud-migrations-rcloneview)

<CloudSupportGrid />
