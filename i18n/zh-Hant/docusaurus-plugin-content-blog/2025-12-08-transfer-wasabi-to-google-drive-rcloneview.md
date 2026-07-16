---
slug: transfer-wasabi-to-google-drive-rcloneview
title: "使用 RcloneView 在 Wasabi 與 Google Drive 之間傳輸檔案"
authors:
  - tayson
description: "使用 RcloneView 在 Wasabi 儲存桶與 Google Drive 之間移動或備份資料——快速設定遠端、優化 S3 上傳、同步前先比較差異，並排程持續執行的工作。"
keywords:
  - Wasabi to Google Drive transfer
  - Wasabi cloud migration
  - cloud-to-cloud backup
  - rcloneview
  - rclone s3
  - google drive migration
  - cloud sync
  - wasabi google drive transfer
  - s3 multipart upload
  - cloud automation
tags:
  - cloud-migration
  - wasabi
  - google-drive
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 使用 RcloneView 在 Wasabi 與 Google Drive 之間傳輸檔案

> 在不需要操作命令列的情況下，將數 TB 的資料從 Wasabi 移動到 Google Drive（或反向操作）。RcloneView 將 rclone 的速度與 S3 調校能力整合進一個引導式 GUI，讓你能有信心地比較、同步並排程遷移作業。

RcloneView 同時支援 Wasabi 這類 S3 相容儲存服務，以及 Google Drive 的 OAuth 登入流程。並排開啟兩個遠端，依照你的工作流程選擇 Explorer/Compare/Sync，並套用適合 S3 的分塊設定，讓大型上傳保持穩定。

<!-- truncate -->

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />


## Wasabi 與 Google Drive 一覽比較

- **Wasabi**：S3 API、快速匯入、低儲存成本、依儲存桶提供不同端點（例如 `s3.us-east-1.wasabisys.com`）。
- **Google Drive / Workspace**：熟悉的共用機制、強大的協作能力，尖峰時段需留意 API 配額限制。
- **RcloneView**：一個介面同時管理兩者——同步前先比較、支援拖放操作、可執行預演（dry run），並能排程重複性工作。

## 新增 Wasabi 遠端（S3 相容）

1. 點擊 **`+ New Remote`** -> 選擇 **S3**。
2. 輸入你的 **Access Key** / **Secret Key**、儲存桶區域，以及端點（例如 `s3.wasabisys.com` 或區域專屬網址）。
3. 為求清晰，儲存為 `Wasabi_Archive`（或類似名稱）。  
   <img src="/support/images/en/tutorials/add-new-wasabi-remote-configuration.png" alt="New remote wizard" class="img-large img-center" />

參考設定：[S3 相容設定](https://rcloneview.com/support/howto/remote-storage-connection-settings/s3)

## 透過 OAuth 連接 Google Drive

1. 在 **`+ New Remote`** 中，選擇 **Google Drive**。
2. 透過瀏覽器的 OAuth 提示登入，並確認你要遷移到的帳號或 Workspace。
3. 為其命名（例如 `GDrive_Workspace`）。

更多詳情：[透過 OAuth 新增 Google Drive](https://rcloneview.com/support/howto/remote-storage-connection-settings/add-oath-online-login)

## 並排開啟兩個雲端服務

1. 在 **Explorer -> Browse** 中，於一側開啟你的 **Wasabi** 遠端，另一側開啟 **Google Drive**。
2. 導覽至來源儲存桶／資料夾，以及目標 Drive 資料夾。  


## 選擇最合適的傳輸方式

- **拖放操作（Explorer）**：適合選定資料夾的快速複製，進度會顯示於 **Transfer** 日誌中。
- **Compare -> Copy**：先預覽差異，再有信心地複製缺少或較新的檔案。
- **Sync**：適合持續備份的單向鏡像同步（Wasabi -> Drive 或反向）。建議先加上 **`--dry-run`** 進行驗證。
- 需要教學步驟？請參考多雲端教學流程：[在 MEGA 與 Google Drive 之間傳輸檔案](https://rcloneview.com/support/tutorials/transfer-files-between-mega-and-google-drive)

## 建立排程備份工作

1. 成功執行 Sync 後，點擊 **Save to Jobs**。
2. 開啟 **Job Manager** -> **Add Job**（或編輯已儲存的工作），並設定排程（例如每晚執行）。
3. 保留 **Backup Dir** 或版本化資料夾，以在 Drive 上保存已變更／刪除的項目。
4. 於 **Transfer** 分頁與 **History** 監控每項工作的執行結果。  
- 指南：[建立同步工作](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)、[執行與管理工作](https://rcloneview.com/support/howto/rcloneview-basic/execute-manage-job)、[工作排程](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)、[傳輸監控](https://rcloneview.com/support/howto/rcloneview-basic/real-time-transfer-monitoring)

## 遷移檢查清單（完整性與安全性）

- 先執行 **Compare** 以查看將移動的內容；如有需要可匯出結果。
- 在 Sync 上先使用 **`--dry-run`**，避免意外情況發生。
- 對於關鍵資料，可在內建終端機中使用 `rclone check source: dest:` 進行驗證，並檢視 **API 日誌**。
- 在確認資料完整性之前，使用獨立的目標資料夾（例如 `Wasabi_Archive_2025`）。
- 為工作命名時使用清楚的名稱（`Wasabi->GDrive_Nightly`），並將端點／金鑰的權限限定在所需的儲存桶內。

## 總結

有了 RcloneView，Wasabi 的 S3 效能與 Google Drive 的協作能力便能整合於同一介面之中。建立兩個遠端、預覽變更、調校 S3 上傳，並排程重複性工作——完全不需編輯設定檔或使用 CLI 參數。立即開始你的 Wasabi -> Google Drive 遷移，並讓每次執行都能被驗證。

<CloudSupportGrid />
