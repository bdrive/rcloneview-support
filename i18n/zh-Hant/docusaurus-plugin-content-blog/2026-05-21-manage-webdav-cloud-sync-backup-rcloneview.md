---
slug: manage-webdav-cloud-sync-backup-rcloneview
title: "管理 WebDAV 伺服器儲存空間——使用 RcloneView 同步與備份檔案"
authors:
  - casey
description: "使用 RcloneView 連接、同步並備份任何 WebDAV 伺服器。與 90 多個雲端服務供應商一起管理 Nextcloud、ownCloud 及企業 WebDAV 端點。"
keywords:
  - WebDAV sync RcloneView
  - manage WebDAV cloud storage
  - WebDAV file transfer GUI
  - Nextcloud WebDAV backup
  - sync WebDAV to cloud storage
  - ownCloud backup tool
  - WebDAV rclone GUI
  - WebDAV file management desktop
  - cross-platform WebDAV client
  - WebDAV cloud backup automation
tags:
  - webdav
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 管理 WebDAV 伺服器儲存空間——使用 RcloneView 同步與備份檔案

> 將任何 WebDAV 端點連接到 RcloneView，透過簡潔的 GUI 控制您的檔案——無需操作命令列即可同步、備份與傳輸。

WebDAV（Web Distributed Authoring and Versioning）是許多廣泛部署的自架檔案平台的基礎。Nextcloud、ownCloud、SharePoint 以及許多企業內容管理系統都會提供 WebDAV 端點。管理這些伺服器通常意味著要與命令列工具或不穩定的桌面同步用戶端搏鬥。RcloneView 將 WebDAV 遠端視為與其他雲端服務供應商完全相同的對象——提供拖放式傳輸、排程同步工作，以及即時傳輸監控——全都在您用來管理 Amazon S3 或 Google Drive 的同一介面中完成。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 幾分鐘內連接您的 WebDAV 伺服器

在 RcloneView 中新增 WebDAV 遠端只需不到兩分鐘。點擊 **Remote tab > New Remote**，選擇 WebDAV 作為儲存類型，然後輸入您的伺服器 URL、使用者名稱與密碼。對於使用自簽 SSL 憑證的伺服器，請在 **Settings > Embedded Rclone** 的 **Global Rclone Flags** 欄位中加入 `--no-check-certificate`，以繞過憑證驗證。儲存後，您的 WebDAV 伺服器就會與您已設定的其他雲端帳戶一起出現在檔案總管面板中。

這種統一檢視對於同時執行 Nextcloud 進行內部協作、並使用公有雲端儲存進行異地備份的團隊來說格外有價值。一間擁有自架 Nextcloud 伺服器的影片製作工作室，可以在左側面板瀏覽專案檔案，右側面板瀏覽 Backblaze B2 儲存桶——接著直接將完成的成品拖曳過去，或定義排程同步工作以自動處理夜間封存。

<img src="/support/images/en/blog/new-remote.png" alt="Adding a WebDAV remote in RcloneView Remote Manager" class="img-large img-center" />

## 將 WebDAV 同步至任何雲端服務供應商

連接好您的 WebDAV 伺服器後，即可在 Job Manager 中建立同步工作，將檔案傳輸至 RcloneView 支援的 90 多個雲端服務供應商中的任何一個。4 步驟同步精靈會引導您選擇來源與目的地遠端、設定並行傳輸數量與校驗和驗證、套用檔案大小或時間篩選條件，並可選擇排程該工作。

對於備份情境，請在同步方向欄位中選擇「**Modifying destination only**」。這樣可確保您的雲端備份鏡射 WebDAV 伺服器，而不會引入反向變更。當資料完整性至關重要時——例如法律文件檔案庫或醫療影像庫——請啟用校驗和選項，讓 RcloneView 在每次執行時都以雜湊值與檔案大小雙重驗證檔案，而不僅是依修改日期判斷。

在首次同步前，值得先使用 Dry Run 功能：它會列出目的地將被複製或刪除的確切檔案清單，而不會實際進行任何變更。這只需幾秒鐘，卻能避免意外覆寫。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring a sync job from WebDAV server to cloud storage in RcloneView" class="img-large img-center" />

## 依排程自動執行備份（PLUS 授權）

手動同步可涵蓋即時傳輸需求，但排程自動化才是讓 WebDAV 備份真正可靠的關鍵。使用 PLUS 授權後，RcloneView 類似 crontab 的排程器可讓您設定工作每晚、每小時或依任何自訂間隔執行。排程模擬器會在您儲存前預覽接下來十次的執行時間，讓備份何時觸發不再是個謎。

Job History 會追蹤每次執行的結果：開始時間、持續時間、傳輸速度、檔案數量與狀態（Completed / Errored / Canceled）。如果排程工作遇到暫時性的網路故障，RcloneView 會在標記該工作為錯誤之前，依您設定的重試次數進行重試。對於管理大型 Nextcloud 或 ownCloud 部署的組織來說，這能在無需人工監控的情況下產生可靠的稽核紀錄。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Setting up a scheduled sync job from WebDAV to cloud storage in RcloneView" class="img-large img-center" />

## 並排瀏覽與比對檔案

RcloneView 的多面板檔案總管可讓您同時瀏覽 WebDAV 伺服器與雲端目的地。Folder Compare 工具能精確辨識雙方之間有差異的檔案——顯示僅存在於左側、僅存在於右側，或大小不一致的檔案。對於增量備份的驗證作業，這比手動檢查傳輸紀錄更快也更可靠。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Comparing WebDAV server files with cloud backup using Folder Compare in RcloneView" class="img-large img-center" />

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 開啟 **Remote tab > New Remote**，選擇 WebDAV，並輸入您的伺服器 URL 與憑證。
3. 在 Job Manager 中建立同步工作，以您的 WebDAV 遠端作為來源，以您偏好的雲端服務供應商作為目的地。
4. 執行 **Dry Run** 預覽將傳輸的內容，然後啟用該工作或設定排程。

無論您是要保護自架的 Nextcloud 執行個體，還是要將企業內容平台橋接至長期雲端封存儲存，RcloneView 都能讓 WebDAV 伺服器成為您多雲策略中的一級成員。

---

**相關指南：**

- [管理 SFTP 伺服器儲存空間——使用 RcloneView 同步與備份檔案](https://rcloneview.com/support/blog/manage-sftp-server-cloud-sync-rcloneview)
- [連接 WebDAV 伺服器——使用 RcloneView 進行雲端同步](https://rcloneview.com/support/blog/connect-webdav-server-cloud-sync-rcloneview)
- [管理 Nextcloud——使用 RcloneView 進行雲端同步與備份](https://rcloneview.com/support/blog/manage-nextcloud-cloud-sync-backup-rcloneview)

<CloudSupportGrid />
