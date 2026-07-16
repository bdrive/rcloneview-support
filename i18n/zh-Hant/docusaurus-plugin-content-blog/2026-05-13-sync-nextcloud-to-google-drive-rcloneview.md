---
slug: sync-nextcloud-to-google-drive-rcloneview
title: "將 Nextcloud 同步到 Google Drive — 使用 RcloneView 遷移並備份檔案"
authors:
  - tayson
description: "了解如何使用 RcloneView 將 Nextcloud 同步到 Google Drive。將檔案從自架的 Nextcloud 伺服器傳輸到 Google Drive，並提供完整的自動化支援。"
keywords:
  - Nextcloud to Google Drive sync
  - migrate Nextcloud Google Drive
  - RcloneView Nextcloud Google Drive
  - sync self-hosted cloud to Google Drive
  - Nextcloud WebDAV sync RcloneView
  - backup Nextcloud to Google Drive
  - cloud migration self-hosted RcloneView
  - transfer Nextcloud files Google Drive
  - Nextcloud Google Drive automated sync
  - RcloneView WebDAV cloud transfer
tags:
  - nextcloud
  - google-drive
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 將 Nextcloud 同步到 Google Drive — 使用 RcloneView 遷移並備份檔案

> Nextcloud 讓您完全掌控自己的資料 — RcloneView 則為您搭起通往 Google Drive 的橋樑，實現備援、遷移或團隊存取。

Nextcloud 讓組織擁有自己的儲存基礎架構，但自架的資料仍然需要異地備份。使用 RcloneView 將 Nextcloud 同步到 Google Drive，可在不撰寫腳本或手動傳輸檔案的情況下，在主流雲端平台上建立第二份副本。無論您是要完全遷移離開自架基礎架構，還是要以 Nextcloud 作為主要儲存空間、Google Drive 作為次要備份，RcloneView 都能透過視覺化同步介面完成傳輸，並內建排程支援。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 在 RcloneView 中設定兩個遠端

在建立同步工作之前，您需要先設定好兩個遠端。對於 Google Drive，請前往 **Remote** 分頁，點擊 **New Remote**，然後選擇 Google Drive — 系統會開啟一個瀏覽器視窗進行 OAuth 驗證，因此不需要手動管理 API 金鑰或憑證。對於 Nextcloud，請選擇 **WebDAV** 作為遠端類型。輸入您的 Nextcloud 伺服器網址，格式為 `https://your-nextcloud.example.com/remote.php/dav/files/username/`，並填入您的 Nextcloud 使用者名稱與密碼（如果您的帳號已啟用兩步驟驗證，則需使用應用程式密碼）。

<img src="/support/images/en/blog/new-remote.png" alt="Adding Nextcloud WebDAV and Google Drive remotes in RcloneView" class="img-large img-center" />

儲存好兩個遠端後，請從檔案總管面板點入各自的遠端以確認連線狀態。成功連接的 Nextcloud 會顯示您家目錄的資料夾結構；Google Drive 則會顯示您的雲端硬碟根目錄。如果 Nextcloud 出現驗證錯誤，請確認網址包含完整的 WebDAV 路徑 — 遺漏 `/remote.php/dav/files/username/` 是最常見的設定錯誤。

## 建立 Nextcloud 到 Google Drive 的同步工作

在兩個遠端都驗證完成後，從 Home 分頁開啟 **Job Manager**，並建立一個新的 **Sync** 工作。在第 1 步中，將您的 Nextcloud 路徑設為來源，Google Drive 資料夾設為目的地。請確認同步方向設定為單向（僅由來源修改目的地）— 這樣可以將 Nextcloud 的內容鏡像到 Google Drive，而不會變更您的 Nextcloud 檔案。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring Nextcloud to Google Drive sync job in RcloneView" class="img-large img-center" />

在第 2 步中，根據您伺服器的上傳能力設定並行傳輸數量。對於龐大的 Nextcloud 資料庫 — 例如設計團隊擁有 200 GB 素材的共享專案資料夾 — 提高並行傳輸數量可以加快 Google Drive 目的地初次填充的速度。在資料完整性至關重要時，請啟用 **checksum** 校驗；這會透過內容雜湊值（而不僅僅是檔案大小）確認每個已傳輸的檔案與來源相符。

## 過濾系統資料夾與中繼資料

Nextcloud 伺服器會累積系統資料夾、縮圖快取及暫存檔案，這些內容不應出現在 Google Drive 的鏡像副本中。在工作精靈的第 3 步中，新增篩選規則以排除這些路徑。像 `.nextcloud/` 或 `.thumbs/` 這樣的模式可以跳過只會增加目的地雜訊、卻沒有實質價值的中繼資料目錄。RcloneView 提供適用於 Images、Documents 和 Videos 的預設篩選範本，讓您可以將同步範圍限定在團隊真正在意的檔案類型上。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running the Nextcloud to Google Drive sync job in RcloneView" class="img-large img-center" />

在正式執行工作之前，請使用 Job Manager 中的 **Dry Run** 選項預覽所有規劃中的操作。試執行會列出所有將被複製的檔案，而不會實際進行任何變更 — 這是在展開大規模初次傳輸前一個很有用的檢查步驟。

## 排程自動化同步

在確認試執行結果無誤後，儲存工作，並且如果您擁有 PLUS 授權，可在第 4 步中附加排程。每晚一次的類 cron 排程可讓您的 Google Drive 副本隨時反映 Nextcloud 每天的變動，無需手動介入。同步完成通知會在每次排定的執行成功時提醒您。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling automated Nextcloud to Google Drive sync in RcloneView" class="img-large img-center" />

## 快速上手

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 透過 New Remote 新增一個 **Google Drive** 遠端（OAuth 瀏覽器登入）以及一個 **Nextcloud** 遠端（WebDAV 網址 + 憑證）。
3. 建立一個 **Sync** 工作，將您的 Nextcloud 路徑設為來源，Google Drive 資料夾設為目的地。
4. 執行 **Dry Run** 確認同步範圍，然後儲存並附加排程以進行持續的自動化同步。

保持 Google Drive 上的 Nextcloud 資料同步副本，可確保伺服器中斷或意外刪除永遠不會導致資料永久遺失。

---

**相關指南：**

- [使用 RcloneView 將 Nextcloud 同步到 Backblaze B2](https://rcloneview.com/support/blog/sync-nextcloud-to-backblaze-b2-rcloneview)
- [使用 RcloneView 管理 Nextcloud 雲端同步與備份](https://rcloneview.com/support/blog/manage-nextcloud-cloud-sync-backup-rcloneview)
- [使用 RcloneView 將 Seafile 遷移到 Google Drive](https://rcloneview.com/support/blog/migrate-seafile-to-google-drive-rcloneview)

<CloudSupportGrid />
