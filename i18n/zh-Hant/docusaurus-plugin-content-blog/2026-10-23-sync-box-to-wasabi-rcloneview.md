---
slug: sync-box-to-wasabi-rcloneview
title: "將 Box 同步到 Wasabi — 使用 RcloneView 進行雲端備份"
authors:
  - tayson
description: "使用 RcloneView 將 Box 同步到 Wasabi：連接兩個遠端，透過 Dry Run 預覽，執行單向備份，並使用資料夾比較驗證結果。"
keywords:
  - 將 Box 同步到 Wasabi
  - Box 到 Wasabi 備份
  - Box Wasabi 傳輸
  - RcloneView box
  - RcloneView wasabi
  - 雲端對雲端同步
  - Box 物件儲存備份
  - Wasabi S3 備份
tags:
  - RcloneView
  - box
  - wasabi
  - cloud-to-cloud
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 將 Box 同步到 Wasabi — 使用 RcloneView 進行雲端備份

> 透過可重複執行的單向同步，在 Wasabi 物件儲存中保留一份獨立的 Box 內容副本。

Box 是便於協作的平台，但在平台之外再保留一份副本，可以防範誤刪除、帳戶被鎖定以及保留期限缺口。Wasabi 是相容 S3 的物件儲存，很適合作為這份副本的目標。RcloneView 可以在單一視窗中連接這兩項服務，基本的同步和 Dry Run 可使用 FREE 授權。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 將 Box 和 Wasabi 連接為遠端

Box 使用以瀏覽器為基礎的 OAuth。在 RcloneView 中新增遠端，選擇 Box，並在瀏覽器開啟後登入。如果你的組織使用 Box for Business，則遠端需要設定 `box_sub_type = enterprise`。Wasabi 以相容 S3 的遠端新增：輸入你的 Access Key、Secret Key 以及 Wasabi 區域的端點。

兩個遠端都出現在遠端管理員（Remote Manager）後，在兩個檔案總管（Explorer）面板中並排開啟它們。這樣在設定任何內容之前，你就可以在左側瀏覽 Box 資料夾樹，在右側瀏覽 Wasabi 儲存貯體。

<img src="/support/images/en/blog/new-remote.png" alt="在 RcloneView 中新增 Box 和 Wasabi 遠端" class="img-large img-center" />

## 同步前先用 Dry Run 預覽

假設一家設計公司在 Box 中存放著 800 GB 的客戶專案資料夾。首次同步之前，請先執行 Dry Run。它會列出將被複製和將被刪除的檔案，而不會變更任何內容。這有助於避免把同步指向錯誤的儲存貯體路徑。

對於備份，單向同步（"Modifying destination only"）是合適的方向：Box 保持為資料來源，Wasabi 對其進行鏡像。請記住，同步也會刪除來源中已不存在的目的地檔案，因此請為鏡像使用專用的儲存貯體或前綴。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Box 與 Wasabi 之間的雲端對雲端傳輸" class="img-large img-center" />

## 設定同步作業

作業精靈包含四個步驟：儲存空間、進階設定、過濾器和排程。如果有大量小文件，可以提高檔案傳輸數量；需要以雜湊為基礎的驗證時，可啟用檢查碼比較。預先定義的過濾器包含 Box Docs 選項，這很有用，因為 Box Notes 等僅限線上的項目不像一般檔案那樣運作。

作業名稱可使用字母、數字、連字號或底線，儲存後即可執行。進度、速度和檔案數量會顯示在 Transferring 索引標籤中。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="執行已儲存的 Box 到 Wasabi 同步作業" class="img-large img-center" />

## 排程與驗證

以排程為基礎的同步是 PLUS 功能，提供 crontab 風格的欄位以及可預覽後續執行時間的模擬器。每晚執行一次可讓 Wasabi 副本保持最新。每次執行後，開啟作業歷史記錄（Job History）查看狀態、大小和檔案數量，或使用資料夾比較（Folder Compare）確認兩側一致。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="在 RcloneView 中排程定期同步作業" class="img-large img-center" />

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 透過 OAuth 新增 Box 遠端，並使用金鑰和端點新增 Wasabi 遠端。
3. 建立從 Box 到專用 Wasabi 儲存貯體的同步作業，並先執行 Dry Run。
4. 執行作業，然後使用資料夾比較和作業歷史記錄進行驗證。

經過測試並按排程執行的鏡像，能讓 Box 從單點故障變為真正備份的一半。

---

**相關指南：**

- [將 Box 遷移到 Wasabi](https://rcloneview.com/support/blog/migrate-box-to-wasabi-rcloneview)
- [將 Google Drive 同步到 Box](https://rcloneview.com/support/blog/sync-google-drive-to-box-rcloneview)
- [修復 Wasabi 同步錯誤](https://rcloneview.com/support/blog/fix-wasabi-sync-errors-rcloneview)

<CloudSupportGrid />
