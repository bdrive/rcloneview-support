---
slug: manage-yandex-disk-cloud-sync-backup-rcloneview
title: "管理 Yandex Disk 儲存空間 — 使用 RcloneView 同步與備份檔案"
authors:
  - tayson
description: "使用 RcloneView 管理 Yandex Disk — 透過可靠的 GUI 介面在 Yandex Disk 與其他雲端之間同步、備份及傳輸檔案。"
keywords:
  - Yandex Disk 管理
  - Yandex Disk 同步
  - Yandex Disk 備份
  - RcloneView Yandex
  - Yandex 雲端儲存 GUI
  - Yandex Disk 檔案傳輸
  - 雲端備份工具
  - 多雲同步
  - Yandex Disk rclone
  - Yandex 儲存管理員
tags:
  - yandex-disk
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 管理 Yandex Disk 儲存空間 — 使用 RcloneView 同步與備份檔案

> Yandex Disk 為歐洲使用者提供充裕的儲存空間與穩定的效能表現——RcloneView 透過 OAuth 與其連接，將您的 Yandex 內容整合進統一的多雲端檔案管理器。

Yandex Disk 提供可靠的雲端儲存服務，在歐洲與俄羅斯地區的使用者中擁有良好的效能口碑，但過去要在 Yandex Disk 與其他平台之間傳輸檔案，通常需要使用獨立的 Yandex 用戶端或手動下載。RcloneView 透過瀏覽器 OAuth 直接連接到 Yandex Disk，讓您無需額外軟體，就能與其他雲端遠端一起，在統一的檔案管理介面中操作。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 在 RcloneView 中設定 Yandex Disk

在 RcloneView 中點選 **Remote tab > New Remote**，並從清單中選擇 **Yandex Disk**。驗證流程透過瀏覽器 OAuth 進行——系統會在您的預設瀏覽器中開啟 Yandex 登入頁面，您登入帳號後，RcloneView 會自動取得存取權杖。無需手動產生金鑰或進行 API 設定。

<img src="/support/images/en/blog/new-remote.png" alt="Adding Yandex Disk as a new remote in RcloneView" class="img-large img-center" />

連接完成後，您的 Yandex Disk 會以可瀏覽的遠端形式出現在檔案總管面板中。您可以檢視資料夾與檔案、查看大小與修改日期，並直接在介面中建立新資料夾。縮圖檢視功能讓您無需開啟瀏覽器或 Yandex 應用程式，即可輕鬆瀏覽儲存在 Yandex Disk 上的相片庫。

## 將 Yandex Disk 檔案同步至本機或其他雲端

對於將專案檔案儲存在 Yandex Disk 上的內容創作者而言，設定單向同步至本機外接硬碟，可建立一份即使在網路中斷時也能保存的離線備份。在 **Job Manager** 中設定同步工作：來源為您的 Yandex Disk 資料夾，目的地為外接硬碟路徑。後續執行時只會傳輸有變更的檔案——即使檔案庫龐大，也能維持同步速度。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a sync job from Yandex Disk in RcloneView Job Manager" class="img-large img-center" />

跨供應商的傳輸同樣簡單。若一個團隊使用 Yandex Disk 進行歐洲地區的檔案發佈，同時使用 Google Drive 進行協作編輯，即可設定兩個遠端之間的定期同步，確保兩個平台上的內容一致，無需手動上傳。RcloneView 會依檔案大小與修改時間進行比對，僅傳輸新增或變更的內容。

## 備份至 Yandex Disk

Yandex Disk 也很適合作為已儲存在其他雲端上檔案的次要備份目標。主要儲存空間在 Google Drive 的攝影師，可以使用 RcloneView 每月將副本推送至 Yandex Disk——建立跨供應商的備份策略，避免單一雲端服務中斷或限制存取時造成資料損失。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling Yandex Disk backup jobs in RcloneView" class="img-large img-center" />

搭配 PLUS 授權，排程功能可自動執行備份——每日、每週，或依任何以 cron 為基礎的間隔執行。**Job History** 分頁會記錄每次執行的結果：傳輸大小、速度、檔案數量與完成狀態，讓您掌握每一次備份週期的完整記錄。

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 前往 **Remote tab > New Remote**，選擇 **Yandex Disk**，並透過瀏覽器完成驗證。
3. 在檔案總管面板中瀏覽您的 Yandex Disk 檔案。
4. 在 **Job Manager** 中建立同步工作，將檔案備份至本機儲存空間或其他雲端。

透過 RcloneView 管理 Yandex Disk，代表您所有的雲端儲存都能使用同一個一致的介面——無論是備份進行中的專案，還是將檔案遷移至新的供應商。

---

**相關指南：**

- [使用 RcloneView 同步 Yandex Disk 與 Google Drive](https://rcloneview.com/support/blog/sync-yandex-disk-with-google-drive-using-rcloneview)
- [管理 Dropbox 雲端儲存 — 使用 RcloneView 同步與備份](https://rcloneview.com/support/blog/manage-dropbox-cloud-sync-backup-rcloneview)
- [使用 RcloneView 傳輸 Yandex Disk 與 Google Drive 檔案](https://rcloneview.com/support/blog/transfer-yandex-and-google-drive-with-rcloneview)

<CloudSupportGrid />
