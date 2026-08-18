---
slug: manage-icloud-photos-cloud-sync-rcloneview
title: "管理 iCloud Photos — 使用 RcloneView 同步與備份檔案"
authors:
  - robin
description: "使用 RcloneView 管理 iCloud Photos——在單一跨平台 GUI 中瀏覽、同步並將您的 Apple 照片庫備份到其他雲端。"
keywords:
  - iCloud Photos 管理
  - iCloud Photos 備份
  - iCloud Photos 同步
  - RcloneView iCloud Photos
  - Apple Photos 雲端備份
  - iCloud Photos to Google Drive
  - iCloud Photos 遷移
  - Apple 照片庫備份工具
  - iCloud Photos rclone
tags:
  - RcloneView
  - cloud-storage
  - cloud-sync
  - backup
  - macos
  - guide
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 管理 iCloud Photos — 使用 RcloneView 同步與備份檔案

> 在 RcloneView 中連接您的 iCloud Photos 照片庫，不必手動匯出相簿即可備份到另一個雲端。

Apple 的 Photos 生態系統將多年累積的照片與影片鎖在 iCloud 之中，想在別處保留第二份副本，通常得透過 Photos 應用程式逐一匯出相簿。RcloneView 將 iCloud Photos 視為自己專屬的遠端連線——與 iCloud Drive 是不同的遠端——因此您可以直接瀏覽照片庫，並複製到 Google Drive、Amazon S3 或本機備份磁碟機，而不需要手動匯出步驟。在 FREE 授權下即可以完整讀寫權限連接 S3、Azure File Storage 或 Backblaze B2，因此照片備份目的端的設定不需要額外費用。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 將 iCloud Photos 新增為遠端

iCloud Photos 是透過 RcloneView 的 Remote 分頁 > New Remote 新增的，並被設定為與 iCloud Drive 不同的專屬遠端類型——即使兩者都來自同一個 Apple 帳號，仍會視為兩個獨立的遠端運作。完成驗證後，該照片庫會像其他雲端儲存空間一樣出現在 Explorer 面板中，您可以瀏覽並選取資料夾、縮圖與檔案中繼資料。

<img src="/support/images/en/blog/new-remote.png" alt="Adding an iCloud Photos remote in RcloneView" class="img-large img-center" />

對於長期使用 iCloud 的使用者而言，照片庫可能多達數萬個檔案，因此在進行大量複製之前，切換到 RcloneView 的 Thumbnail View 是值得的——它能讓您瀏覽影像預覽，在傳輸開始前確認您指向的是正確的相簿或日期範圍。

## 備份到第二個雲端

連接 iCloud Photos 後，透過 4 步驟精靈設定同步工作：選擇 iCloud Photos 作為來源，選擇目的端遠端——Google Drive、S3 相容儲存貯體，或本機外接磁碟機——然後先執行 Dry Run，在實際傳輸發生前準確預覽將複製的內容。就照片庫而言，由於照片檔案的大小很少改變，但您仍希望確信副本與原始檔案逐位元組一致，因此第 2 步驟中的校驗和比對特別有用。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring a sync job from iCloud Photos to another cloud remote in RcloneView" class="img-large img-center" />

第 3 步驟的 Filtering Settings 也有助於縮小大型照片庫的範圍——最大檔案存留時間篩選器可將備份工作限制為僅包含最近新增的內容，這樣在完成首次完整複製之後，重複執行的速度會更快。

## 自動化定期備份

一次性匯出無法保護下個月拍攝的照片，因此大多數 iCloud Photos 使用者會設定重複執行的同步工作，而不是手動單次執行。在 PLUS 授權下，可以為工作附加 crontab 格式的排程，使其依您需要的任意頻率自動執行——每天、每週，或每晚特定時間之後——之後可在 Job History 中確認執行已完成，並查看傳輸了多少檔案。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a recurring iCloud Photos backup job in RcloneView" class="img-large img-center" />

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 透過 Remote 分頁 > New Remote 新增一個 iCloud Photos 遠端。
3. 設定同步工作到您選擇的備份目的端，並先執行 Dry Run。
4. 排程定期備份，讓新照片自動受到保護。

在 Apple 生態系統之外保留照片庫的第二份副本，代表即使帳號被鎖定或裝置遺失，也能少一個單點故障。

---

**相關指南：**

- [使用 RcloneView 管理 iCloud Drive](https://rcloneview.com/support/blog/icloud-drive-with-rcloneview)
- [使用 RcloneView 管理 iCloud Drive 雲端同步](https://rcloneview.com/support/blog/manage-icloud-drive-cloud-sync-rcloneview)
- [使用 RcloneView 修復 iCloud Drive 同步錯誤](https://rcloneview.com/support/blog/fix-icloud-drive-sync-errors-rcloneview)

<CloudSupportGrid />
