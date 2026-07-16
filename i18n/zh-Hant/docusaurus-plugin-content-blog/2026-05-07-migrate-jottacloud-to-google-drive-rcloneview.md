---
slug: migrate-jottacloud-to-google-drive-rcloneview
title: "將 Jottacloud 遷移至 Google Drive — 使用 RcloneView 傳輸檔案"
authors:
  - tayson
description: "使用 RcloneView 的雲端對雲端傳輸功能，將檔案從 Jottacloud 遷移至 Google Drive 的逐步指南 — 設定兩個遠端並執行遷移作業。"
keywords:
  - Jottacloud migration
  - Jottacloud to Google Drive
  - RcloneView migration
  - cloud-to-cloud transfer
  - Jottacloud export
  - cloud storage migration
  - rclone Jottacloud
  - Google Drive import
tags:
  - jottacloud
  - google-drive
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 將 Jottacloud 遷移至 Google Drive — 使用 RcloneView 傳輸檔案

> 使用 RcloneView 將檔案從 Jottacloud 移動到 Google Drive 十分簡單 — 連接兩個遠端，即可在雲端直接傳輸，無需先下載所有檔案。

Jottacloud 是一家挪威的雲端儲存服務，以無限儲存空間著稱，但現在許多使用者正尋求遷移至更通用、更容易存取的平台，例如 Google Drive。無論您是因為方案變更、價格考量，還是單純想整合雲端儲存而搬移資料，RcloneView 都能讓遷移過程乾淨又可靠。您無需先將所有檔案下載到本機 — RcloneView 會以雲端對雲端的方式，直接將檔案從 Jottacloud 傳輸至 Google Drive。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 設定您的 Jottacloud 遠端

在 RcloneView 中點擊 **New Remote**，然後從供應商清單中選擇 **Jottacloud**。RcloneView 會引導您完成驗證流程 — Jottacloud 使用以裝置為基礎的登入流程，您需透過瀏覽器登入，產生的權杖會安全地儲存在 RcloneView 中。驗證完成後，您的 Jottacloud 帳戶會出現在檔案總管中，包括您的個人封存、備份資料夾以及任何共用內容。

在開始遷移之前，請先瀏覽您的 Jottacloud 資料夾結構，以了解內容的組織方式。請注意任何含有特殊字元的資料夾名稱，或是深層巢狀結構，因為這些情況偶爾會在大型遷移過程中造成問題。

<img src="/support/images/en/blog/new-remote.png" alt="Adding Jottacloud as a remote in RcloneView" class="img-large img-center" />

## 新增 Google Drive

再次點擊 **New Remote**，然後選擇 **Google Drive**。RcloneView 會開啟一個瀏覽器分頁進行 Google OAuth 授權 — 使用您的 Google 帳戶登入並授予所需的權限。授權完成後，Google Drive 遠端便會出現在檔案總管中。

在開始遷移之前，先在 Google Drive 中建立一個目的地資料夾 — 例如 `Jottacloud Import/` — 讓遷移後的檔案井然有序，並與現有內容區隔開來。這樣一來，您就能輕鬆確認遷移結果，而不會混淆檔案來源。

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="Google Drive and Jottacloud open side by side in RcloneView" class="img-large img-center" />

## 執行遷移作業

在兩個遠端都設定完成後，於工作管理員（Job Manager）中開啟 **Job Wizard**。將 Jottacloud 設為來源（選擇最上層資料夾或您想遷移的特定子資料夾），並將 Google Drive 的目的地資料夾設為目標。遷移作業請選擇 **Copy** 模式而非 **Sync** 模式 — 這樣可確保檔案被複製，而不會刪除來源端的任何內容。

務必先執行一次 **dry run（試跑）**，以確切了解哪些檔案將被傳輸。對於擁有數千個檔案的大型 Jottacloud 帳戶，試跑的輸出結果能協助您在正式傳輸前發現潛在問題。確認無誤後，即可執行正式作業。RcloneView 的 **Job Manager** 會顯示即時進度，**Job History** 則會記錄最終傳輸數量與任何錯誤。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a Jottacloud to Google Drive migration job in RcloneView" class="img-large img-center" />

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 點擊 **New Remote** > **Jottacloud**，並完成瀏覽器驗證。
3. 點擊 **New Remote** > **Google Drive**，並完成 OAuth 授權。
4. 在 Google Drive 中建立一個目的地資料夾，用於存放遷移後的內容。
5. 使用 **Job Wizard** 建立複製作業，先執行試跑，再執行完整遷移。

有了 RcloneView，從 Jottacloud 遷移至 Google Drive 只是一次性作業，只需幾分鐘設定，即可自動執行至完成。

---

**相關指南：**

- [管理 Jottacloud — 使用 RcloneView 進行雲端同步與備份](https://rcloneview.com/support/blog/manage-jottacloud-cloud-sync-backup-rcloneview)
- [管理 Google Drive — 使用 RcloneView 進行雲端同步與備份](https://rcloneview.com/support/blog/manage-google-drive-cloud-sync-backup-rcloneview)
- [使用 RcloneView 將 Jottacloud 遷移至 Backblaze B2](https://rcloneview.com/support/blog/migrate-jottacloud-to-backblaze-b2-rcloneview)

<CloudSupportGrid />
