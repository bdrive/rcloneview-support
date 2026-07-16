---
slug: mount-amazon-s3-buckets-as-local-drives-rcloneview
title: "透過 RcloneView 將 Amazon S3 儲存桶掛載為本機磁碟(Windows 與 macOS)"
authors:
  - tayson
description: 針對每月搜尋量超過 2.2 萬次的「mount S3 bucket」需求，提供以點擊操作為主的 RcloneView 工作流程，將任何 Amazon S3 儲存桶轉換為原生磁碟代號或 Finder 磁碟區，並支援快取、IAM 權限限制與排程自動化。
keywords:
  - mount s3 bucket windows
  - mount s3 bucket mac
  - amazon s3 local drive
  - rcloneview
  - rclone mount gui
  - winfsp s3 mount
  - macfuse s3 mount
  - map s3 drive letter
  - s3 explorer
  - scheduler auto mount
tags:
  - amazon-s3
  - mount
  - windows
  - macos
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 透過 RcloneView 將 Amazon S3 儲存桶掛載為本機磁碟(Windows 與 macOS)

> 開發者每月搜尋「mount S3 bucket Windows」超過 2.2 萬次。RcloneView 以兩次點擊的 GUI 操作取代了包含 20 個參數的 `rclone mount` 指令稿。

Amazon S3 無所不在:日誌、機器學習成品、備份與靜態網站皆會用到。然而官方工具往往要求你手動下載檔案,或自行撰寫搭配 WinFsp、macFUSE、快取參數與監控守護程式的客製化腳本。RcloneView 將經過驗證的 `rclone mount` 引擎包裝成桌面版使用者介面,讓工程師、系統管理員與創作者都能將任何儲存桶(或 Wasabi、R2、Backblaze B2 等相容服務)以原生磁碟的形式呈現在 Windows 或 macOS 上。

<!-- truncate -->

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />



## 為何選擇 RcloneView,而非自行以 CLI 掛載

- **引導式 IAM 設定**:遠端管理員(Remote Manager)會依照 [Amazon S3 指南](/howto/remote-storage-connection-settings/s3) 引導你完成金鑰、角色與端點設定,確保憑證權限範圍受到控管。
- **驅動程式輔助**:內建 WinFsp 與 macFUSE 提示,無需手動下載或修改登錄檔。
- **範本式掛載**:掛載管理員(Mount Manager)會為每個 S3 掛載保存快取大小、磁碟代號與自動啟動等設定。
- **多雲端延伸功能**:在掛載 S3 的同時,你可以在同一個介面中對 Google Drive、Dropbox、Wasabi、NAS 或外接磁碟執行比較(Compare)、同步(Sync)或複製(Copy)。
- **監控與排程器**:內建排程器(Scheduler)會在重新開機後自動重新掛載。

## 步驟 1 -- 準備桌面環境與 IAM

1. **安裝 RcloneView**(內含 rclone)。在 Windows 上請同意安裝 WinFsp;在 macOS 上請核准 macFUSE 的安全性提示。
2. **規劃 IAM 存取權限**:建立僅限存取欲掛載儲存桶的角色或使用者(分析人員採唯讀,暫存工具則採讀寫)。

## 步驟 2 -- 新增 S3 與其他雲端服務

- 開啟 **遠端管理員(Remote Manager)**,點擊「新增遠端」(Add Remote) -> 「Amazon S3」(或相容服務)。依照 S3 指南貼上 Access Key、Secret、地區及選填的端點資訊。
- 將此遠端命名為 `s3-prod-logs`(亦可新增其他遠端,如 `s3-staging`、Wasabi、R2)。可利用備註欄位說明保留規則與轉換規則。

  <img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="cloud to cloud transfer default" class="img-large img-center" />

## 步驟 3 -- 從 Explorer 或掛載管理員進行掛載

1. 在雙欄式 Explorer 中,選取你的 S3 遠端並點擊 **掛載圖示**。
2. 選擇磁碟代號/磁碟區、快取大小、唯讀或讀寫模式,以及要顯示儲存桶根目錄還是子資料夾。
3. 點擊 **掛載**,儲存桶便會立即顯示在檔案總管或 Finder 中。[將雲端儲存掛載為本機磁碟](https://rcloneview.com/support/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive)

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="Mount S3 buckets from RcloneView Explorer" class="img-large img-center" />

掛載管理員(遠端 -> 掛載管理員)會將每個掛載保存為可重複使用的設定檔。開啟 **開機時自動掛載**,設定重新連線的重試次數,並新增 IAM 金鑰輪替日期的提醒。


## 步驟 4 -- 為掛載建立自動化工作流程

掛載只是起點,RcloneView 讓你可以進一步疊加自動化功能:

- **比較(Compare)** 已掛載的儲存桶與本機資料夾,以驗證部署結果(參見 [比較資料夾內容](/howto/rcloneview-basic/compare-folder-contents))。

  <img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare shared folder and My Drive contents" class="img-large img-center" />
- **同步(Sync)** 將 S3 同步至外接磁碟或 NAS,可透過 [建立同步工作](/howto/rcloneview-basic/create-sync-jobs) 與 [同步遠端儲存](/howto/rcloneview-basic/synchronize-remote-storages) 執行夜間同步作業。

  <img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare shared folder and My Drive contents" class="img-large img-center" />
- **多雲端切換**:同時保持 Google Drive、Dropbox 或 Wasabi 的掛載狀態,即可在 Finder/Explorer 視窗之間直接拖曳檔案。

## 開發者喜愛的使用情境

- **日誌分析**:在 macOS 上掛載 S3 日誌,於本機執行 grep,完成後卸載即可,無需依賴 `aws s3 sync` 造成的雜亂檔案。
- **資料科學暫存**:將 Jupyter 或 VS Code 指向已掛載的磁碟,即可直接載入 parquet/CSV 檔案,無需複製到筆電儲存空間。
- **備份驗證**:以唯讀方式掛載 Glacier 或 Object Lock 儲存桶,同時讓排程器將熱資料複製到其他位置。

## 疑難排解與常見問題

**RcloneView 是否支援自訂 S3 端點(Wasabi、R2、MinIO)?**  
是的。使用同一個 S3 遠端精靈,設定端點後即可如同一般儲存桶般掛載。

**如何只掛載某個資料夾,而非整個儲存桶?**  
請在「掛載路徑」欄位中指定 `bucket/prefix`,或在啟動掛載前,先為該資料夾建立 Explorer 書籤。

## 準備好取代掛載腳本了嗎?

RcloneView 將過去需要一整份 README 說明的 CLI 參數,濃縮成短短幾次點擊:只需新增一次 S3 遠端、儲存掛載範本,即可讓排程器在每次開機時自動重新掛載。同時,你還能在同一個應用程式中享有比較預覽、同步工作、多雲端 Explorer 面板與監控儀表板等功能。

<CloudSupportGrid />
