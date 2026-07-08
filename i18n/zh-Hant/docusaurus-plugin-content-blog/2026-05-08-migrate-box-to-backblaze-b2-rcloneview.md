---
slug: migrate-box-to-backblaze-b2-rcloneview
title: "將 Box 遷移至 Backblaze B2 — 使用 RcloneView 傳輸檔案"
authors:
  - steve
description: "使用 RcloneView 將您的 Box 雲端儲存遷移至 Backblaze B2 物件儲存。完整指南涵蓋檔案遷移、傳輸驗證，以及未來備份的自動化。"
keywords:
  - Box to Backblaze B2 migration
  - migrate Box Backblaze B2 RcloneView
  - Box Backblaze B2 file transfer
  - switch Box to B2 storage
  - cloud storage migration Box
  - Box backup Backblaze B2
  - Box to S3 migration
  - rclone Box B2 GUI
tags:
  - RcloneView
  - box
  - backblaze-b2
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 將 Box 遷移至 Backblaze B2 — 使用 RcloneView 傳輸檔案

> 使用 RcloneView 以 GUI 驅動的遷移流程，將您整個 Box 工作區遷移至 Backblaze B2 物件儲存——或建立第二份備份副本。

Box 是廣泛使用的企業協作平台，但就封存與備份用途而言，其儲存成本相較於 Backblaze B2 等專為此設計的物件儲存服務要高出許多。想要將封存資料從 Box 移出、或以更具成本效益的方案為 Box 內容建立備份副本的團隊，可以使用 RcloneView 直接遷移——無需先下載到本機。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 連接 Box 與 Backblaze B2

對於 Box，請前往 **Remote 頁籤 → New Remote**，選擇 Box，並使用您的 Box 帳戶完成 OAuth 驗證。Box for Business 使用者也應在遠端設定中設定 `box_sub_type = enterprise`，以取得完整的工作區存取權限。對於 Backblaze B2，請在建立遠端時輸入您的 Application Key ID 與 Application Key。

兩個遠端都設定完成後，將 Box 放在左側檔案總管面板，B2 放在右側。瀏覽至您要遷移的特定 Box 資料夾，並在開始任何傳輸前，確認目標 B2 儲存桶（bucket）名稱正確且可存取。

<img src="/support/images/en/blog/new-remote.png" alt="Setting up Box and Backblaze B2 remotes in RcloneView" class="img-large img-center" />

## 設定遷移工作

使用 Home 頁籤中的 **Sync** 按鈕來建立遷移工作。將 Box 資料夾設為來源，將 B2 儲存桶（或其中的子資料夾）設為目的地。在第 2 步中，啟用 **Checksum** 以在傳輸過程中驗證每個檔案的完整性。將重試次數設定為 5 次以上——B2 的 API 在大量批次傳輸期間偶爾會限制請求速率，自動重試可確保遷移在無需人工介入的情況下完成。

在進行正式遷移前，先執行一次 **Dry Run**，以檢視將要傳輸的完整檔案清單。這對 Box 遷移尤其重要，因為共用檔案或 Box Notes（`.boxnote` 格式）可能無法如預期般傳輸——dry run 的輸出結果會在影響正式資料前，突顯出任何失敗的檔案。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Box to Backblaze B2 migration job in RcloneView" class="img-large img-center" />

## 處理 Box Notes 與特殊檔案類型

Box Notes 是一種專有格式（`.boxnote`），在 Box 以外的環境中可能無法正確顯示。遷移前，請先從 Box 網頁介面將需要保留的 Box Notes 匯出為標準格式（例如 `.docx` 或 `.pdf`）。RcloneView 會以二進位資料的形式遷移 `.boxnote` 檔案，但這些檔案在 B2 或任何非 Box 的用戶端中將無法編輯。

對於共用資料夾與外部協作者的內容，請確認您的 Box 帳戶擁有存取所有欲遷移內容的權限。RcloneView 的 **Log 頁籤** 會顯示您的帳戶無法存取的任何檔案的權限錯誤。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitoring Box to B2 migration progress in RcloneView" class="img-large img-center" />

## 快速開始

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 新增 Box（OAuth）與 Backblaze B2（Application Key）作為遠端。
3. 執行 dry run 以在正式執行前預覽遷移內容。
4. 啟用 checksum 驗證後執行正式遷移。

使用 RcloneView 將資料從 Box 遷移至 Backblaze B2，是一個乾淨且可驗證的流程，能為您的封存內容提供具成本效益且耐用的儲存空間。

---

**相關指南：**

- [使用 RcloneView 將 Box 遷移至 AWS S3](https://rcloneview.com/support/blog/migrate-box-to-aws-s3-rcloneview)
- [使用 RcloneView 管理 Backblaze B2 雲端儲存](https://rcloneview.com/support/blog/manage-backblaze-b2-cloud-sync-backup-rcloneview)
- [使用 RcloneView 將 Box 封存至 S3 Glacier](https://rcloneview.com/support/blog/box-to-s3-glacier-archive-rcloneview)

<CloudSupportGrid />
