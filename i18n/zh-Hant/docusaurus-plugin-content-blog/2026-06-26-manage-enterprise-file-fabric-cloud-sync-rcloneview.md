---
slug: manage-enterprise-file-fabric-cloud-sync-rcloneview
title: "管理 Enterprise File Fabric 儲存空間 — 使用 RcloneView 同步與備份檔案"
authors:
  - morgan
description: "使用 RcloneView 連接、同步並備份 Enterprise File Fabric 儲存空間 — 這是一款基於 rclone 打造、適用於 Windows、macOS 與 Linux 的跨平台多雲端 GUI。"
keywords:
  - Enterprise File Fabric RcloneView
  - sync Enterprise File Fabric
  - Enterprise File Fabric cloud sync
  - Enterprise File Fabric backup
  - manage Enterprise File Fabric files
  - cloud storage management enterprise
  - RcloneView enterprise storage
  - Enterprise File Fabric GUI client
tags:
  - RcloneView
  - enterprise
  - cloud-storage
  - cloud-sync
  - backup
  - guide
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 管理 Enterprise File Fabric 儲存空間 — 使用 RcloneView 同步與備份檔案

> RcloneView 可直接連接 Enterprise File Fabric，讓您無需撰寫任何 CLI 指令，即可瀏覽、同步並備份組織的受管理檔案儲存空間。

Enterprise File Fabric 是一個雲端內容服務平台，適用於需要在單一治理層下整合各種不同儲存後端的組織。無論您的團隊在此存放專案檔案、合規紀錄，還是共用的數位資產，要讓這些內容保持同步並備份，都需要一款可靠且支援跨雲端的工具。RcloneView 是一款基於 Flutter 打造、以 rclone 為基礎的 GUI 用戶端，能在 Windows、macOS 與 Linux 上以單一統一介面，同時管理 Enterprise File Fabric 以及其他 90 多個雲端供應商。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 在 RcloneView 中連接 Enterprise File Fabric

透過 RcloneView 內建的新增遠端精靈，只需幾分鐘即可將 Enterprise File Fabric 新增為遠端。開啟 **Remote** 分頁，點擊 **New Remote**，然後從供應商清單中選擇 Enterprise File Fabric。輸入您的端點 URL 與 API 權杖（與您組織用於 API 存取的憑證相同），然後儲存。該遠端會立即出現在瀏覽面板中，您可以在此瀏覽資料夾、檢視檔案數量與大小，並直接從路徑列複製路徑。

<img src="/support/images/en/blog/new-remote.png" alt="Adding a new Enterprise File Fabric remote in RcloneView" class="img-large img-center" />

與僅提供掛載功能的工具不同，RcloneView 在 FREE 授權方案下也能同步並比對資料夾，讓您超越簡單的磁碟機對應，主動管理跨所有雲端環境的 Enterprise File Fabric 內容。

## 將 Enterprise File Fabric 同步至其他雲端目的地

Enterprise File Fabric 的常見應用情境，是為了災難復原或長期封存而將受管理內容複製到次要雲端目的地。在 RcloneView 的同步精靈中，將 Enterprise File Fabric 設為來源，並選擇任意目的地 — Amazon S3、Backblaze B2、Google Drive 或內部部署的 SFTP 伺服器皆可。這個 4 步驟精靈會引導您完成傳輸並行數、校驗碼驗證，以及檔案存續時間篩選等設定，確保您只傳輸真正需要的內容。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a sync job from Enterprise File Fabric in RcloneView" class="img-large img-center" />

在正式傳輸之前，務必先執行一次 **Dry Run**（模擬執行）。RcloneView 會列出它將會複製或略過的確切檔案清單，讓您在任何一個位元組實際移動之前，先調整篩選規則。若需進行 1 對多複製 — 即同時將同一個 Enterprise File Fabric 資料夾鏡像至多個目的地 — 只需在第一步中新增額外的目的地路徑即可。此功能在 FREE 授權方案下即可使用，且不限目的地數量。

## 排程自動備份

使用 Enterprise File Fabric 的組織通常需要在夜間或每週的固定時段自動執行備份，無需人工介入。**PLUS 授權方案**可直接在 RcloneView 內解鎖 crontab 風格的排程功能。您可以設定分鐘、小時、星期幾與月份等欄位，讓 Enterprise File Fabric 的同步工作以任意頻率觸發。內建的 **Simulate schedule**（模擬排程）工具可預覽接下來數次的執行時間，讓您在正式套用前先行確認時間安排。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling an Enterprise File Fabric backup job in RcloneView" class="img-large img-center" />

即使應用程式最小化於系統匣中執行，工作完成通知仍能讓維運團隊隨時掌握狀況。

## 監控傳輸紀錄與稽核軌跡

每一個 Enterprise File Fabric 同步工作都會記錄在 RcloneView 的 **Job History**（工作歷程）檢視畫面中，包含開始時間、持續時間、傳輸速度、檔案數量與最終狀態。您可依日期範圍或結果篩選歷程紀錄，以驗證 SLA 合規性並稽核資料移動情形 — 這對於在受管理檔案儲存平台上有保留或治理要求的組織相當實用。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history log for Enterprise File Fabric transfers in RcloneView" class="img-large img-center" />

RcloneView 內建的 rclone 終端機分頁，也讓進階使用者能夠在不離開 GUI 的情況下，針對其 Enterprise File Fabric 遠端執行自訂的 `rclone` 指令 — 適合用於臨時查詢或一次性操作。

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 開啟 **Remote** 分頁並點擊 **New Remote**，然後選擇 Enterprise File Fabric。
3. 輸入您的 Enterprise File Fabric 端點 URL 與 API 權杖，然後儲存該遠端。
4. 建立同步工作，設定您偏好的備份目的地，並先執行一次 **Dry Run**。
5. （PLUS）啟用排程執行功能，透過電子郵件或 Slack 提醒自動化持續進行的備份作業。

在 RcloneView 中集中管理 Enterprise File Fabric，能消除工具零散分散的問題，並為您的團隊提供每一次雲端資料移動的單一、可稽核紀錄。

---

**相關指南：**

- [使用 RcloneView 管理 SharePoint 儲存空間](https://rcloneview.com/support/blog/manage-sharepoint-cloud-sync-backup-rcloneview)
- [使用 RcloneView 管理 Azure Files](https://rcloneview.com/support/blog/manage-azure-files-cloud-sync-rcloneview)
- [使用 RcloneView 為 DevOps 與軟體團隊提供雲端儲存](https://rcloneview.com/support/blog/cloud-storage-devops-software-teams-rcloneview)

<CloudSupportGrid />
