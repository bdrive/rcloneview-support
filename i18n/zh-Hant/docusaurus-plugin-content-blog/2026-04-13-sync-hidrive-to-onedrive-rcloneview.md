---
slug: sync-hidrive-to-onedrive-rcloneview
title: "同步 HiDrive 到 OneDrive — 使用 RcloneView 進行雲端備份"
authors:
  - tayson
description: "使用 RcloneView 將檔案從 HiDrive 同步到 OneDrive。將 Strato HiDrive 儲存空間直接傳輸到 Microsoft OneDrive，無需先下載到本機。"
keywords:
  - HiDrive to OneDrive
  - sync HiDrive OneDrive
  - HiDrive migration
  - Strato HiDrive sync
  - cloud-to-cloud transfer
  - HiDrive RcloneView
  - OneDrive backup
  - European cloud migration
  - RcloneView sync
  - cloud storage transfer
tags:
  - hidrive
  - onedrive
  - cloud-to-cloud
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 同步 HiDrive 到 OneDrive — 使用 RcloneView 進行雲端備份

> 使用 RcloneView 將檔案從 Strato HiDrive 直接傳輸到 Microsoft OneDrive — 直接進行雲端對雲端同步，無需本機下載。

Strato 的 HiDrive 是一項深受需要符合 GDPR 資料落地要求之企業歡迎的歐洲雲端儲存服務。隨著各組織採用 Microsoft 365，許多人希望將其 HiDrive 檔案整合到 OneDrive，以便在 Teams 與 SharePoint 中無縫協作。RcloneView 讓這個轉換過程變得簡單：將兩項服務都新增為遠端，然後透過 RcloneView 的 GUI 直接將 HiDrive 資料夾同步到 OneDrive，無需先將檔案下載到中介的本機電腦。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 連接 HiDrive 與 OneDrive

HiDrive 在 rclone 中使用 OAuth 驗證 — 當你在 RcloneView 中新增 HiDrive 遠端時，會開啟瀏覽器視窗讓你使用 Strato HiDrive 帳號登入並授予存取權限。同樣的 OAuth 流程也適用於 OneDrive：從服務供應商清單中選取 Microsoft OneDrive，透過你的 Microsoft 帳號進行驗證，遠端即設定完成。

在兩個遠端都啟用後，於 RcloneView 的雙面板檔案總管中將它們並排開啟。你的 HiDrive 資料夾結構會顯示在一側，OneDrive 則顯示在另一側。這種視覺化配置有助於你規劃遷移作業：在建立同步工作之前，先確認哪些 HiDrive 資料夾要對應到哪些 OneDrive 目的地。

<img src="/support/images/en/blog/new-remote.png" alt="Adding HiDrive and OneDrive remotes in RcloneView" class="img-large img-center" />

## 設定同步工作

使用同步精靈來建立 HiDrive 到 OneDrive 的傳輸。選取 HiDrive 來源資料夾與 OneDrive 目的地資料夾，然後依序完成設定步驟。單向同步（預設且穩定的選項）會將你的 HiDrive 內容鏡像到 OneDrive — 新增與變更的檔案會被複製，若你選擇啟用，從 HiDrive 刪除的檔案也會一併從 OneDrive 中移除。

對於正在整合專案封存資料的團隊而言，篩選步驟相當有價值：可設定最大檔案時效，僅遷移過去兩年內建立或修改的檔案，或使用檔案類型篩選，僅納入文件、試算表與簡報，同時排除大型影片檔案。像是 `.tmp` 或 `/.git/` 之類的自訂篩選規則，能讓你在遷移過程中排除工作區的雜項檔案。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Syncing HiDrive folders to OneDrive with RcloneView" class="img-large img-center" />

在正式傳輸之前，先執行「模擬執行」（Dry Run）模式，確認檔案清單符合你的預期。此模擬功能會準確顯示哪些檔案將被複製，而不會實際進行任何變更 — 在企業間搬移業務資料時，這是相當值得的一個步驟。

## 排程持續同步

對於在轉換期間需要並行運作 HiDrive 與 OneDrive 的團隊，以排程為基礎的同步（PLUS 授權）可讓兩項服務保持同步。設定週期性排程 — 每日、每週兩次，或以自訂 cron 間隔執行 — RcloneView 便會在背景處理同步作業。工作歷程記錄會記載每次執行的開始時間、已傳輸的檔案數，以及完成狀態。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling recurring HiDrive to OneDrive sync in RcloneView" class="img-large img-center" />

若你需要確認同步是否正確完成，可使用資料夾比較功能，檢查 OneDrive 現在是否已包含來自 HiDrive 的預期檔案。比較檢視畫面會顯示僅存在於左側、僅存在於右側，以及大小不同的檔案，協助你抓出任何需要重新傳輸的項目。

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 在「遠端」分頁中，透過 OAuth 瀏覽器登入流程新增 HiDrive。
3. 透過 OAuth 瀏覽器登入流程新增 OneDrive。
4. 使用同步精靈將 HiDrive 資料夾傳輸到 OneDrive，並先以模擬執行進行預覽。

透過 RcloneView 從 HiDrive 遷移到 OneDrive，能讓整個過程維持 GUI 操作、可稽核，且不消耗任何中介的本機儲存空間。

---

**相關指南：**

- [使用 RcloneView 管理 HiDrive Strato 雲端同步](https://rcloneview.com/support/blog/manage-hidrive-strato-sync-cloud-rcloneview)
- [使用 RcloneView 管理 OneDrive 雲端同步與備份](https://rcloneview.com/support/blog/manage-onedrive-cloud-sync-backup-rcloneview)
- [使用 RcloneView 進行雲端對雲端遷移](https://rcloneview.com/support/blog/cloud-to-cloud-migration-rcloneview)

<CloudSupportGrid />
