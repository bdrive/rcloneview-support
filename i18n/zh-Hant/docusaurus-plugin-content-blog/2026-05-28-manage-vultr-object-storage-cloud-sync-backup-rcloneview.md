---
slug: manage-vultr-object-storage-cloud-sync-backup-rcloneview
title: "管理 Vultr Object Storage — 使用 RcloneView 同步與備份檔案"
authors:
  - alex
description: "將 Vultr Object Storage 連接到 RcloneView，透過 GUI 管理您的 S3 相容儲存桶——無需任何 CLI 即可同步、備份、掛載並自動化傳輸。"
keywords:
  - Vultr Object Storage
  - RcloneView Vultr
  - Vultr S3 相容備份
  - Vultr 雲端同步 GUI
  - S3 相容物件儲存管理工具
  - Vultr 儲存桶同步
  - 物件儲存備份工具
  - Vultr 雲端檔案傳輸
  - Vultr 雲端管理
  - S3 相容 GUI rclone
tags:
  - RcloneView
  - cloud-storage
  - cloud-sync
  - backup
  - s3-compatible
  - object-storage
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 管理 Vultr Object Storage — 使用 RcloneView 同步與備份檔案

> RcloneView 連接到 Vultr Object Storage 的 S3 相容 API，提供完整的 GUI 讓您瀏覽儲存桶、排程備份，以及將雲端儲存掛載為本機磁碟機。

Vultr Object Storage 是建構在 Vultr 雲端基礎架構上的 S3 相容物件儲存服務，深受需要全球分散、具成本效益的儲存空間，並搭配 Vultr 運算服務的開發人員與基礎架構團隊青睞。雖然這項服務在程式化設定上相當直覺，但透過 CLI 進行日常檔案管理或撰寫自訂腳本，是大多數團隊想要避免的麻煩。RcloneView 將 Vultr 儲存桶視為與其他遠端完全相同的方式來解決這個問題——您可以在分割窗格檔案總管中瀏覽它們，透過精靈設定週期性同步工作，並即時監控傳輸狀況，完全不需撰寫任何一行 rclone 指令。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 在 RcloneView 中連接 Vultr Object Storage

在 RcloneView 中新增 Vultr 採用標準的 S3 相容設定流程。開啟 **Remote** 標籤頁並點擊 **New Remote**，然後選擇 **Amazon S3** 作為供應商類型。輸入您的 Vultr Object Storage Access Key 與 Secret Key——這些資訊可在 Vultr 控制台中，您的 Object Storage 執行個體憑證區段找到。在 **Endpoint** 欄位中，貼上 Vultr 儀表板顯示的端點 URL（每個資料中心區域都有自己的端點 URL）。區域欄位留空或設為 `auto` 即可；Vultr 會根據端點自動處理路由。

儲存後，您的 Vultr 儲存桶會以頂層資料夾的形式出現在 RcloneView 的 Explorer 面板中。透過麵包屑路徑列瀏覽物件前綴，切換清單與縮圖檢視，並一目了然地查看檔案名稱、大小與修改日期。雙窗格版面配置讓您可以在一個面板中開啟 Vultr，另一個面板開啟本機資料夾、NAS 路徑或其他雲端服務——讓拖放上傳、下載與跨供應商複製變得輕而易舉。

<img src="/support/images/en/blog/new-remote.png" alt="Adding Vultr Object Storage as an S3-compatible remote in RcloneView" class="img-large img-center" />

RcloneView 最多可同時顯示四個 Explorer 面板，這在跨多個 Vultr 區域搬移資料，或是在 Vultr 與 Backblaze B2 等供應商之間交叉上傳時相當實用。

## 同步與備份檔案至 Vultr Object Storage

RcloneView 中的自動備份工作採用 4 步驟精靈流程。選擇您的來源——本機資料夾、外接磁碟機或其他雲端遠端——並選擇 Vultr 儲存桶作為目的地。為工作命名，選擇單向同步以將資料鏡像至 Vultr，然後設定篩選條件與進階選項。提高並行傳輸數量可加快處理速度，適合像軟體團隊每晚備份建置產出物（數百個小檔案）這類工作負載。啟用校驗和比對可確保每個檔案都逐位元組完整送達，這在封存編譯後的二進位檔或資料庫轉存檔時相當重要。

在首次正式執行前，點擊 **Dry Run** 可預覽將被傳輸或移除的完整檔案清單。這項安全檢查可防止共用儲存桶中發生意外刪除。確認無誤後，點擊 **Run**——RcloneView 底部的 Transferring 標籤頁會即時顯示檔案數量、傳輸速度與總位元組數。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a sync job to Vultr Object Storage in RcloneView" class="img-large img-center" />

RcloneView PLUS 使用者可透過類似 crontab 的規則排程工作——例如每週一至週五凌晨 03:00 執行的夜間備份——並在完成後接收通知。

## 將 Vultr 儲存空間掛載為本機磁碟機

RcloneView 的 Mount 功能讓您可以直接將 Vultr 儲存桶掛接為本機磁碟機代號（Windows）或掛載點（macOS/Linux），使其能被任何應用程式存取，無需額外的同步步驟。從 Remote 標籤頁開啟 **Mount Manager**，點擊 **New Mount**，選擇您的 Vultr 遠端，然後選擇要公開的儲存桶或子資料夾。將大多數工作負載的 VFS 快取模式設為 **writes**，然後點擊 **Save and Mount**。

該儲存桶會以本機磁碟區的形式出現。舉例來說，直接將建置產出物存放到已掛載磁碟機的 CI 流水線，完全不需要了解 Vultr 的 API——它就像寫入本機磁碟一樣寫入檔案，而 rclone 會在背後透明地處理上傳作業。

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="Mounting a Vultr Object Storage bucket as a local drive using RcloneView's Mount Manager" class="img-large img-center" />

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 在 Vultr 控制台中，開啟您的 Object Storage 執行個體並複製 Access Key、Secret Key 與端點 URL。
3. 在 RcloneView 中，前往 **Remote tab → New Remote → Amazon S3**，輸入您的憑證與 Vultr 端點，然後儲存。
4. 在 Explorer 面板中瀏覽您的儲存桶，或透過 **Job Manager** 設定自動備份工作。

連接完成後，Vultr Object Storage 便能無縫整合進您在 RcloneView 中管理的任何多雲端工作流程——與本機儲存、NAS 及其他雲端供應商一同呈現在單一介面中。

---

**相關指南：**

- [使用 RcloneView 將 Vultr Object Storage 同步至 Google Drive](https://rcloneview.com/support/blog/sync-vultr-object-storage-s3-google-drive-rcloneview)
- [使用 RcloneView 管理 Cloudflare R2 雲端儲存](https://rcloneview.com/support/blog/manage-cloudflare-r2-cloud-sync-rcloneview)
- [使用 RcloneView 將 Amazon S3 儲存桶掛載為本機磁碟機](https://rcloneview.com/support/blog/mount-amazon-s3-buckets-as-local-drives-rcloneview)

<CloudSupportGrid />
