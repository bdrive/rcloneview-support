---
slug: migrate-backblaze-b2-to-google-drive-rcloneview
title: "將 Backblaze B2 遷移至 Google Drive — 使用 RcloneView 傳輸檔案"
authors:
  - tayson
description: "無需下載至本機即可將檔案從 Backblaze B2 移轉至 Google Drive。RcloneView 支援雲端對雲端直接傳輸，並提供進度監控與篩選功能。"
keywords:
  - Backblaze B2 to Google Drive
  - migrate B2 to Google Drive
  - Backblaze B2 migration
  - cloud-to-cloud transfer
  - B2 to GDrive RcloneView
  - transfer Backblaze files
  - cloud storage migration
  - Backblaze B2 sync
  - Google Drive import
  - RcloneView migration
tags:
  - RcloneView
  - backblaze-b2
  - google-drive
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 將 Backblaze B2 遷移至 Google Drive — 使用 RcloneView 傳輸檔案

> 使用 RcloneView 將檔案從 Backblaze B2 儲存桶直接傳輸至 Google Drive — 無需中間的本機儲存空間，並支援即時進度追蹤與篩選功能。

Backblaze B2 是一個功能完善的物件儲存方案，但高度依賴 Google Workspace 的團隊可能會發現，將工作檔案集中在 Google Drive 上更便於協作。過去要將多年累積的 B2 封存資料遷移至 Google Drive，通常得先將所有內容下載到本機——這是個緩慢又佔用儲存空間的過程。RcloneView 透過其同步引擎，讓 B2 與 Google Drive 之間可以直接進行雲端對雲端傳輸，資料在兩個服務商之間傳送時完全不會經過你的本機磁碟。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 設定兩個遠端

在開始遷移之前，請先在 RcloneView 中將 Backblaze B2 和 Google Drive 都新增為遠端。對於 Backblaze B2，前往「Remote」分頁，點擊「New Remote」，然後選擇 Backblaze B2。輸入你的 Application Key ID 與 Application Key——兩者皆可在 Backblaze 帳戶的「App Keys」頁面產生。對於 Google Drive，從服務商清單中選擇 Google Drive；系統會開啟瀏覽器視窗進行 OAuth 驗證。使用你的 Google 帳戶登入並授權存取。

兩個遠端都設定完成後，你可以在 RcloneView 的雙面板檔案總管中並排開啟它們。在一側瀏覽你的 B2 儲存桶，另一側瀏覽你的 Google Drive 資料夾，讓你能直觀地參考想要建立的遷移結構。

<img src="/support/images/en/blog/new-remote.png" alt="Adding Backblaze B2 and Google Drive remotes in RcloneView" class="img-large img-center" />

## 執行遷移

兩個遠端都連線完成後，使用「Sync」精靈來設定傳輸。選擇你的 Backblaze B2 儲存桶（或其中的特定路徑）作為來源，並選擇你的 Google Drive 目的資料夾。在「Advanced Settings」步驟中，校驗和驗證可確保每個檔案都正確傳輸——這對於容易發生無聲資料損毀且難以察覺的大型封存檔案來說尤其重要。

「Filtering」步驟對大型 B2 儲存桶特別有用：可使用檔案年齡篩選，只遷移特定日期之前的檔案；排除特定副檔名（例如暫存的 `.tmp` 檔案）；或限制最大檔案大小，以分批進行遷移。這在遷移一家設計公司 3TB 的專案封存檔案時特別實用——依檔案類型與資料夾深度篩選，控制每一批要傳輸的內容。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Migrating Backblaze B2 files to Google Drive with RcloneView" class="img-large img-center" />

在正式執行完整遷移之前，先執行「Dry Run」模式，預覽哪些檔案將會被複製。此模擬功能會顯示完整的預定作業清單，而不會進行任何實際變更——這是遷移正式環境資料時至關重要的安全步驟。

## 監控與驗證傳輸

RcloneView 底部的「Transferring」分頁會顯示即時的工作進度：檔案數量、傳輸狀態，以及遇到的任何錯誤。對於需要執行數小時的大型遷移工作，「Job History」會記錄每次執行的開始時間、持續時間、總傳輸資料量與最終狀態。

傳輸完成後，使用「Folder Compare」驗證 Google Drive 是否已包含 B2 來源中的所有內容。比對結果會標示出僅存在於其中一側，或檔案大小有差異的檔案，讓你能輕鬆找出並重新傳輸任何未成功完成的項目。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Viewing migration job history for B2 to Google Drive transfer in RcloneView" class="img-large img-center" />

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 使用你的 Application Key ID 與 Application Key 新增 Backblaze B2。
3. 透過 OAuth 瀏覽器驗證流程新增 Google Drive。
4. 使用「Sync」精靈搭配「Dry Run」，在執行完整傳輸前先預覽遷移內容。

直接的雲端對雲端遷移消除了本機中間儲存造成的瓶頸，讓你的 B2 至 Google Drive 傳輸能以服務商端的頻寬全速進行。

---

**相關指南：**

- [使用 RcloneView 將 Backblaze B2 遷移至 Amazon S3](https://rcloneview.com/support/blog/migrate-backblaze-b2-to-aws-s3-rcloneview)
- [使用 RcloneView 管理 Google Drive 雲端同步與備份](https://rcloneview.com/support/blog/manage-google-drive-cloud-sync-backup-rcloneview)
- [使用 RcloneView 將 Dropbox 備份至實惠的 Backblaze B2 儲存空間](https://rcloneview.com/support/blog/backup-dropbox-to-backblaze-b2-affordable-storage-rcloneview)

<CloudSupportGrid />
