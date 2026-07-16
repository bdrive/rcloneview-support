---
slug: manage-opendrive-cloud-sync-backup-rcloneview
title: "管理 OpenDrive 雲端儲存 — 使用 RcloneView 同步與備份檔案"
authors:
  - jay
description: "將 OpenDrive 連接到 RcloneView，管理您的檔案、自動化備份，並透過無需任何命令列知識的 GUI 在多個雲端之間同步資料。"
keywords:
  - OpenDrive 雲端儲存 RcloneView
  - OpenDrive 同步 GUI
  - 管理 OpenDrive 檔案
  - OpenDrive 備份工具
  - rclone OpenDrive GUI
  - OpenDrive 檔案傳輸
  - 雲端儲存管理
  - OpenDrive 桌面應用程式
tags:
  - opendrive
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 管理 OpenDrive 雲端儲存 — 使用 RcloneView 同步與備份檔案

> 將 OpenDrive 連接到 RcloneView，享受拖放式檔案管理、排程備份，以及跨雲端傳輸 — 完全不需要命令列。

OpenDrive 是一個雲端儲存平台，提供個人與企業方案，專注於檔案分享與協作。雖然其網頁介面適合一般使用，但需要移動大量資料集、自動化備份或同步到其他雲端的進階使用者，則需要功能更強大的工具。RcloneView 由 rclone 的 OpenDrive 後端驅動，為您的 OpenDrive 帳戶帶來功能完整的 GUI。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 將 OpenDrive 連接到 RcloneView

前往 **遠端分頁 → 新增遠端**，然後從提供者清單中選擇 OpenDrive。您需要透過 OAuth 進行驗證 — RcloneView 會開啟一個瀏覽器視窗，供您以 OpenDrive 憑證登入並授予存取權限。授權完成後，該遠端會立即儲存並顯示於您的檔案總管面板中。

檔案總管會顯示您的 OpenDrive 資料夾與檔案的完整中繼資料：名稱、大小、最後修改日期與類型。左側的資料夾樹狀結構讓您瀏覽整個儲存階層，右側的檔案清單則顯示所選資料夾的內容，並提供可排序的欄位。針對圖片較多的資料夾,還提供縮圖檢視,方便您在相片或素材庫中快速找到所需項目。

<img src="/support/images/en/blog/new-remote.png" alt="Configuring OpenDrive as a new remote in RcloneView" class="img-large img-center" />

## 將 OpenDrive 檔案備份到外部硬碟或其他雲端

對於一家將客戶專案檔案儲存在 OpenDrive 上的小型設計工作室來說,在其他位置保留第二份備份至關重要。RcloneView 讓您可以輕鬆設定從 OpenDrive 到 Amazon S3、Backblaze B2,甚至本機外部硬碟的備份工作。在其中一個面板開啟來源（OpenDrive）,在另一個面板開啟目的地,然後使用工作管理員設定一個同步工作。

4 步驟工作精靈讓您設定來源與目的地路徑、設定傳輸並行數、啟用校驗碼驗證,以及設定檔案篩選條件（排除暫存檔案或依檔案時間限制）。使用 PLUS 授權,您可以將工作排程為每晚執行,或依照任何 crontab 排程執行,確保您的 OpenDrive 資料無需任何手動操作即可持續獲得備份。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling an OpenDrive backup job in RcloneView" class="img-large img-center" />

## 同步前先進行試跑

在執行大型同步作業之前,建議先使用 RcloneView 的 **試跑（Dry Run）** 模式。此模式會模擬同步過程,並準確顯示哪些檔案會被複製、更新或刪除 — 而不會實際進行任何變更。對於正在將龐大的 OpenDrive 資料庫遷移到新提供者的團隊而言,試跑功能能在意外的檔案刪除發生之前及早發現,非常寶貴。

試跑結果會顯示在傳輸中分頁與記錄分頁中,讓您完整掌握規劃中的操作內容。確認無誤後,只需點擊一下即可執行實際的同步。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Real-time transfer monitoring for an OpenDrive sync job" class="img-large img-center" />

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 前往 **遠端分頁 → 新增遠端**,選擇 OpenDrive,並完成 OAuth 登入。
3. 在雙面板檔案總管中瀏覽並管理您的 OpenDrive 檔案。
4. 使用工作管理員建立排程備份至您偏好的目的地。

RcloneView 讓 OpenDrive 與 Google Drive、S3 及您使用的其他任何提供者一樣,成為您雲端工作流程中的一等公民。

---

**相關指南：**

- [使用 RcloneView 將 OpenDrive 檔案備份到 AWS S3](https://rcloneview.com/support/blog/backup-opendrive-aws-s3-external-storage-rcloneview)
- [使用 RcloneView 管理多個雲端帳戶](https://rcloneview.com/support/blog/manage-multiple-cloud-accounts-with-rcloneview)
- [使用 RcloneView 自動化每日雲端備份](https://rcloneview.com/support/blog/automate-daily-cloud-backups-with-rcloneview)

<CloudSupportGrid />
