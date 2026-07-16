---
slug: sync-dropbox-to-google-drive-rcloneview
title: "同步 Dropbox 到 Google Drive — 用 RcloneView 自動化雲端備份"
authors:
  - casey
description: "了解如何使用 RcloneView 自動將 Dropbox 同步到 Google Drive。設定具備排程、篩選與即時傳輸監控功能的定期雲端對雲端備份工作。"
keywords:
  - sync Dropbox to Google Drive
  - Dropbox Google Drive sync
  - Dropbox to Google Drive backup
  - cloud to cloud sync RcloneView
  - automate Dropbox Google Drive transfer
  - rclone Dropbox Google Drive GUI
  - Dropbox cloud backup solution
  - recurring cloud sync job
  - cross-cloud backup automation
  - RcloneView cloud sync tool
tags:
  - dropbox
  - google-drive
  - cloud-to-cloud
  - sync
  - automation
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 同步 Dropbox 到 Google Drive — 用 RcloneView 自動化雲端備份

> 讓 Dropbox 與 Google Drive 自動保持同步 — 無需腳本、終端機或昂貴的第三方同步服務。

許多團隊仰賴 Dropbox 進行日常檔案共享，但聰明的雲端策略意味著要在第二個提供商（例如 Google Drive）中保留一份備援副本。無論是為了防範意外刪除、準備工作區遷移，還是滿足雙雲備份政策，RcloneView 都能提供以排程、GUI 驅動的流程，可靠地將 Dropbox 同步到 Google Drive。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 將 Dropbox 與 Google Drive 連接為遠端

在排程任何同步工作之前，RcloneView 需要先取得兩個提供商的授權連線。開啟應用程式，前往 **Remote 分頁**，點擊 **New Remote**。從提供商清單中選擇 **Dropbox**，並完成 OAuth 瀏覽器登入 — 不需要 API 金鑰。針對 **Google Drive** 重複相同步驟，並以你的 Google 帳號完成驗證。

現在兩個遠端都會出現在 Remote Manager 中，並可從任何 Explorer 面板存取。你可以在左側面板瀏覽 Dropbox 資料夾，在右側面板瀏覽 Google Drive 目的地，方便在建立工作前確認來源與目的地。

<img src="/support/images/en/blog/new-remote.png" alt="Adding Dropbox and Google Drive remotes in RcloneView" class="img-large img-center" />

對於使用 **Dropbox for Business** 的團隊，請在設定遠端時設定 `dropbox_business = true` 參數。對於 **Google 共用雲端硬碟**，請啟用共用雲端硬碟選項，讓團隊資料夾可在遠端瀏覽器中存取。

## 建立具備排程功能的同步工作

連接兩個遠端後，前往 **Home 分頁**並點擊 **Sync** 開啟工作精靈。在步驟 1 中，選擇你的 Dropbox 資料夾作為來源，Google Drive 資料夾作為目的地。為工作取一個具描述性的名稱，例如 `dropbox-to-gdrive-backup`。

在步驟 2 中，根據你的連線速度調整並行傳輸數量。啟用 **checksum 驗證** 可確保檔案完整性是逐位元組確認的，而不僅僅依照檔案大小判斷。步驟 3 讓你可以依檔案類型篩選 — 例如排除 Dropbox 有時會在同步的團隊資料夾中留下的 `.tmp` 或 `.lnk` 檔案。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Setting up a scheduled Dropbox to Google Drive sync job in RcloneView" class="img-large img-center" />

步驟 4 是實現自動化的關鍵。使用 **PLUS 授權**，可以設定類似 cron 的排程 — 例如每晚凌晨 2:00 — 讓最新的 Dropbox 內容自動鏡像到 Google Drive。使用 cron 表達式 `0 2 * * *` 進行每日執行，或使用 `0 2 * * 0` 於每週日同步。**Simulate schedule** 按鈕會在儲存前預覽接下來幾次的執行時間。

## 監控即時傳輸並檢視歷史紀錄

工作執行後，應用程式底部的 **Transferring 分頁**會顯示即時傳輸進度：檔案數量、傳輸速度、已傳輸總資料量，以及需要中途停止時可用的取消按鈕。對於將 80 GB 專案封存檔從 Dropbox 同步到 Google Drive 的創意公司而言，你可以觀察每個檔案的狀態隨著傳輸完成而逐一更新。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Real-time transfer monitoring for Dropbox to Google Drive sync" class="img-large img-center" />

每次執行後，**Job History** 檢視畫面會記錄執行類型（手動或排程）、持續時間、傳輸總位元組數、速度以及最終狀態 — 已完成、發生錯誤或已取消。如果執行過程中遇到 Dropbox 或 Google Drive 任一方的暫時性 API 速率限制，內建的重試機制（預設：3 次）會自動處理暫時性失敗，無需人工介入。

## 使用 Folder Compare 驗證同步結果

完成初次完整同步後，使用 RcloneView 的 **Folder Compare** 工具驗證雙方是否一致。從 Home 分頁啟動它，選擇你的 Dropbox 來源與 Google Drive 目的地，然後點擊 Compare。結果會顯示僅存在於左側的檔案（尚未同步）、僅存在於右側的檔案（手動新增到 Drive）、相同的檔案，以及大小不符的檔案。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder Compare verifying Dropbox and Google Drive are in sync" class="img-large img-center" />

在首次正式同步前執行 **Dry Run**，以精確預覽哪些檔案將被複製或刪除。當同步一個正在使用中的 Dropbox 團隊資料夾時，這一點尤其重要 — 你會希望在任何變更影響 Google Drive 目的地之前先確認範圍。

## 快速上手

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 透過 OAuth 登入新增你的 Dropbox 遠端（Remote 分頁 > New Remote）。
3. 以相同方式新增你的 Google Drive 遠端。
4. 建立一個從 Dropbox 指向 Google Drive、並依你偏好排程執行的 Sync 工作。

建立好完善的 Dropbox 到 Google Drive 流程後，你的資料將同時存在於兩朵雲端 — 有效防範提供商服務中斷、意外刪除以及帳單意外。

---

**相關指南：**

- [使用 RcloneView 將 Dropbox 遷移到 Google Drive](https://rcloneview.com/support/blog/migrate-dropbox-to-google-drive-with-rcloneview)
- [管理 Dropbox — 使用 RcloneView 進行雲端同步與備份](https://rcloneview.com/support/blog/manage-dropbox-cloud-sync-backup-rcloneview)
- [使用 RcloneView 將 Google Drive 同步到 Dropbox](https://rcloneview.com/support/blog/sync-google-drive-to-dropbox-rcloneview)

<CloudSupportGrid />
