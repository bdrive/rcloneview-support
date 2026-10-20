---
slug: sync-wasabi-to-google-drive-rcloneview
title: "將 Wasabi 同步到 Google Drive — 使用 RcloneView 進行雲端備份"
authors:
  - morgan
description: "使用 RcloneView 將 Wasabi 同步到 Google Drive：連接兩個遠端，用 Dry Run 預覽，執行單向同步，並用 Folder Compare 驗證結果。"
keywords:
  - 將 wasabi 同步到 google drive
  - wasabi 到 google drive 備份
  - wasabi google drive 傳輸
  - RcloneView wasabi
  - RcloneView google drive
  - 雲端到雲端同步
  - s3 到 google drive
  - wasabi 儲存貯體備份
tags:
  - RcloneView
  - wasabi
  - google-drive
  - cloud-to-cloud
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 將 Wasabi 同步到 Google Drive — 使用 RcloneView 進行雲端備份

> 透過可預覽的單向同步，在 Google Drive 中保留一份便於協作的 Wasabi 儲存貯體副本。

Wasabi 常被用來存放封存資料和專案交付物，但需要這些檔案的人往往在 Google Drive 中工作。將兩者同步，可以在同事已經使用的地方保留一份可讀的副本，並在其中一個帳戶出現問題時提供第二個存放位置。RcloneView 在一個視窗中連接這兩項服務，預覽工作並驗證結果。S3、Azure 或 Backblaze B2 在 FREE 授權下即可完整讀寫連接，此外還支援 90 多個其他供應商。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 連接兩個遠端

Wasabi 透過 rclone 的 S3 通訊協定接入：輸入 Access Key、Secret Key 以及您所在 Wasabi 區域的端點。Google Drive 使用瀏覽器 OAuth，因此 RcloneView 會開啟 Google 登入頁面，您核准存取後即可連接。

在各自的 Explorer 面板中開啟每個遠端。並排瀏覽儲存貯體和 Drive 資料夾樹，這樣您就能清楚地知道哪個前綴對應哪個資料夾。

<img src="/support/images/en/blog/new-remote.png" alt="在 RcloneView 中新增 Wasabi 和 Google Drive 遠端" class="img-large img-center" />

## 設定同步工作

設想一個影片工作室，儲存貯體中有已完成的剪輯，製作人希望在共用的 Drive 資料夾中看到它們。透過 Sync 按鈕建立工作：選擇 Wasabi 前綴作為來源，Drive 資料夾作為目的地，然後用字母、數字、連字號或底線為工作命名。

單向同步（"Modifying destination only"）會讓目的地與來源保持一致，因此僅存在於 Drive 資料夾中的檔案將被刪除。如果 Drive 資料夾裡有需要保留的檔案，請改用 Copy 工作。在 Advanced Settings 下，可以設定同時傳輸的檔案數並啟用檢查碼比較。請注意，Google 文件、試算表和簡報並不是一般檔案，因此預先定義的 Google Docs 篩選器可用來排除它們。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="在 RcloneView 中進行 Wasabi 與 Google Drive 之間的雲端到雲端傳輸" class="img-large img-center" />

## 使用 Dry Run 預覽

首次正式執行之前，請使用 Dry Run。它會在不更動任何內容的情況下列出將要複製和刪除的檔案，是發現來源前綴錯誤或意外刪除的最省事方式。清單無誤後執行工作，並在 Transferring 分頁中查看進度、速度和檔案數。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="在 RcloneView 中執行同步工作" class="img-large img-center" />

## 驗證並重複

同步完成後，對這兩個位置開啟 Folder Compare，確認沒有僅存在於一側或存在差異的檔案。Job History 會記錄每次執行的狀態、持續時間、大小和檔案數，方便您回顧過去的執行。使用 PLUS 授權，您可以新增 crontab 樣式的排程，讓副本自動更新。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="RcloneView 中的 Folder Compare 檢視" class="img-large img-center" />

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 使用 Access Key、Secret Key 和區域端點新增 Wasabi 遠端，然後透過瀏覽器登入新增 Google Drive。
3. 建立從 Wasabi 前綴到 Drive 資料夾的 Sync 工作，並先執行 Dry Run。
4. 執行工作，然後用 Folder Compare 確認結果。

儲存貯體的 Drive 副本，讓封存資料變成整個團隊都能開啟的資料。

---

**相關指南：**

- [將 Wasabi 遷移到 OneDrive](https://rcloneview.com/support/blog/migrate-wasabi-to-onedrive-rcloneview)
- [Dry Run — 傳輸前預覽同步](https://rcloneview.com/support/blog/dry-run-preview-sync-before-transfer-rcloneview)
- [先比較的工作流程](https://rcloneview.com/support/blog/compare-first-workflow-rcloneview)

<CloudSupportGrid />
