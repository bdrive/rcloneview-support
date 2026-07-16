---
slug: sync-hidrive-to-amazon-s3-rcloneview
title: "同步 HiDrive 至 Amazon S3 — 使用 RcloneView 進行雲端備份"
authors:
  - morgan
description: "了解如何使用 RcloneView 將 HiDrive 檔案同步並備份至 Amazon S3。透過簡單的圖形介面，在歐洲與全球雲端儲存之間傳輸檔案。"
keywords:
  - HiDrive to Amazon S3
  - RcloneView HiDrive backup
  - sync HiDrive S3
  - HiDrive cloud backup
  - transfer HiDrive to AWS
  - cloud-to-cloud backup RcloneView
  - HiDrive migration to S3
  - Amazon S3 backup tool
  - cross-cloud file transfer
  - HiDrive file sync
tags:
  - hidrive
  - amazon-s3
  - cloud-to-cloud
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 同步 HiDrive 至 Amazon S3 — 使用 RcloneView 進行雲端備份

> 使用 RcloneView 的視覺化同步工具將 HiDrive 儲存空間備份至 Amazon S3 — 無需使用命令列，並內建排程、篩選與即時傳輸監控功能。

HiDrive 是 Strato 旗下的歐洲雲端平台，深受重視 GDPR 合規儲存的企業青睞。而 Amazon S3 則是物件儲存耐用性與生態系整合的標竿——對於任何關鍵任務資料而言，都是理想的次要備份目的地。透過 RcloneView，您可以在單一介面中連接這兩個服務供應商，並執行自動化、可篩選的同步作業，讓您的 S3 儲存桶與 HiDrive 資料夾保持一致，完全不需要輸入任何指令。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 在 RcloneView 中連接 HiDrive 與 Amazon S3

HiDrive 使用 OAuth 進行驗證，也就是說 RcloneView 會開啟瀏覽器分頁，讓您登入 Strato 帳戶並授予存取權限——無需管理 API 金鑰。前往 **Remote > New Remote**，選擇 **HiDrive**，並完成瀏覽器登入。您的 HiDrive 資料夾樹會立即顯示在檔案總管中。

至於 Amazon S3，請再次前往 **Remote > New Remote**，選擇 **Amazon S3**，並輸入您的 AWS 存取金鑰 ID（Access Key ID）、私密存取金鑰（Secret Access Key）以及目標區域。若您希望採用最小權限存取原則，可在 AWS 主控台中建立專用的 IAM 使用者，僅授予對目標儲存桶的寫入權限，然後在 RcloneView 中輸入該憑證。

<img src="/support/images/en/blog/new-remote.png" alt="Connecting HiDrive and Amazon S3 as remotes in RcloneView" class="img-large img-center" />

兩個遠端都註冊完成後，可在 RcloneView 的雙面板檔案總管中並排開啟兩個視窗——左側為 HiDrive，右側為 S3——在執行完整同步之前，先以視覺化方式比較資料夾內容。

## 建立 HiDrive 至 S3 的同步作業

連接好兩個遠端後，前往 **Home > Sync** 開啟作業精靈。將您的 HiDrive 資料夾設為來源，將 S3 儲存桶（可選擇加上子資料夾前綴）設為目的地。在進階設定步驟中，依照可用頻寬調整並行傳輸執行緒數——較高的數值可加速扁平檔案結構的大量傳輸，而較低的數值則適用於有嚴格速率限制的連線。

在篩選步驟中，您可依檔案類型（例如 `.tmp`、`.part`）或依檔案存放時間排除不相關的檔案——例如，使用 **Max file age** 篩選器（`90d`）只同步最近 90 天內修改過的檔案。這能讓作業更聚焦，並減少對兩端端點不必要的 API 呼叫。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring a HiDrive to Amazon S3 sync job in RcloneView" class="img-large img-center" />

首次執行前，務必點選 **Dry Run**（試跑）以預覽將被傳輸或刪除的確切檔案清單——當您要從已有大量資料的 HiDrive 帳戶同步至全新的 S3 儲存桶時，這是不可或缺的步驟，因為必須先確認單向同步的方向正確，才能移動任何資料。

## 排程自動化備份

若要持續進行資料保護，PLUS 授權使用者可將 HiDrive 至 S3 的作業設定為依 crontab 樣式排程自動執行。常見的設定包括凌晨 2 點的每晚完整同步，以及上班時間內每小時執行的增量同步。作業精靈第 4 步的排程模擬器會在您確認儲存前，預覽接下來 10 次的執行時間。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling automated HiDrive to S3 backup in RcloneView" class="img-large img-center" />

作業無人值守運行時，**Transferring** 分頁會顯示每次排程執行的即時傳輸速度與檔案數量，而 **Job History** 則會記錄每一次執行的結果、傳輸位元組數及任何錯誤詳情——為備份問責提供完整的稽核軌跡。

## 使用資料夾比較驗證同步完整性

首次同步完成後，可使用 RcloneView 的 **Folder Compare**（資料夾比較）功能來確認 HiDrive 與 S3 是否確實已同步。在比較檢視中開啟兩個資料夾；RcloneView 會標示僅存在於左側、僅存在於右側，以及大小不同的檔案——讓您無需手動逐一核對檔案清單，即可發現遺漏或不一致的項目。對於高風險的封存資料，可在同步作業的進階設定中啟用 **checksum**（校驗碼）比較，以雜湊值而非僅憑檔案大小來驗證檔案完整性。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Comparing HiDrive and Amazon S3 folder contents in RcloneView" class="img-large img-center" />

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 透過 **Remote > New Remote > HiDrive**，使用 OAuth 瀏覽器登入方式新增您的 HiDrive 帳戶。
3. 透過 **Remote > New Remote > Amazon S3**，使用您的 IAM 憑證新增您的 Amazon S3 儲存桶。
4. 在 **Home > Sync** 中建立從 HiDrive 到 S3 的同步作業，先執行 Dry Run，再正式執行。

啟用自動排程後，您的 HiDrive 檔案便會依您設定的排程流入 S3——讓您在不需持續手動操作的情況下，擁有跨服務供應商的備份。

---

**相關指南：**

- [管理 HiDrive 雲端儲存 — 使用 RcloneView 同步與備份檔案](https://rcloneview.com/support/blog/manage-hidrive-cloud-sync-backup-rcloneview)
- [管理 Amazon S3 — 使用 RcloneView 同步與備份檔案](https://rcloneview.com/support/blog/manage-amazon-s3-cloud-sync-backup-rcloneview)
- [同步 HiDrive 至 Google Drive — 使用 RcloneView 進行雲端備份](https://rcloneview.com/support/blog/sync-hidrive-to-google-drive-rcloneview)

<CloudSupportGrid />
