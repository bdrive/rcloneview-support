---
slug: manage-hidrive-cloud-sync-backup-rcloneview
title: "管理 HiDrive 儲存空間——使用 RcloneView 同步與備份檔案"
authors:
  - tayson
description: "了解如何使用 RcloneView 連接、同步並備份 HiDrive 雲端儲存空間。無需任何 CLI 指令，即可透過 GUI 管理所有 HiDrive 檔案。"
keywords:
  - HiDrive RcloneView
  - HiDrive 雲端同步
  - HiDrive 備份
  - STRATO HiDrive 管理
  - HiDrive 檔案傳輸
  - rclone HiDrive GUI
  - HiDrive 同步工具
  - HiDrive 雲端儲存管理
tags:
  - RcloneView
  - hidrive
  - cloud-storage
  - cloud-sync
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 管理 HiDrive 儲存空間——使用 RcloneView 同步與備份檔案

> RcloneView 為 HiDrive 帶來完整的 GUI 控制功能，讓您無需開啟命令列即可瀏覽、同步、備份並排程傳輸。

HiDrive 由 STRATO 提供，並在歐洲各地的資料中心運作，是重視隱私的使用者以及受 GDPR 規範的企業的熱門選擇。透過 rclone 以程式化方式管理 HiDrive 一直是可行的，但 RcloneView 將這股力量包裝在簡潔的介面中——讓 Windows、macOS 或 Linux 上的任何人都能輕鬆進行檔案傳輸、排程備份與跨雲端同步。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 將 HiDrive 連接到 RcloneView

在 RcloneView 中新增 HiDrive 遠端非常簡單。點選 **Remote tab → New Remote**，在提供者清單中捲動找到 HiDrive，然後依照 OAuth 瀏覽器登入流程操作。RcloneView 會開啟您的預設瀏覽器，使用您的 STRATO 帳號進行驗證，遠端便會自動儲存——無需複製任何權杖。

連接完成後，您的 HiDrive 資料夾會立即顯示在 Explorer 面板中。您可以開啟多個分頁，比較本機資料夾與 HiDrive 備份，或分割檢視畫面，將 HiDrive 與 Amazon S3 等其他雲端服務並排顯示。

<img src="/support/images/en/blog/new-remote.png" alt="Adding HiDrive as a new remote in RcloneView" class="img-large img-center" />

HiDrive 透過 RcloneView 支援標準檔案操作：上傳、下載、重新命名、刪除、新增資料夾以及產生公開連結。您可以將檔案從 Windows 檔案總管直接拖放至 HiDrive 的 Explorer 面板進行上傳，或在面板之間拖曳以觸發雲端對雲端的複製。

## 排程自動化 HiDrive 備份

對於將專案封存或客戶交付成果儲存在 HiDrive 上的企業而言，自動化備份至關重要。RcloneView 的 Job Manager（PLUS 授權）可讓您設定類似 crontab 的排程——例如，每天凌晨 2:00 將本機的 `D:\Projects` 資料夾同步到 `hidrive:Backups/Projects`。

4 步驟同步精靈會引導您完成來源與目的地選擇、傳輸並行設定、檔案篩選條件以及排程設定。在步驟 2 中啟用校驗碼驗證，可逐位元組確認檔案完整性，而不僅僅依賴修改時間——在同步到歐洲伺服器時，時區差異可能導致誤判不符,這一點特別重要。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Setting up a scheduled HiDrive backup job in RcloneView" class="img-large img-center" />

在第一次正式同步之前，請使用 Dry Run 選項，預覽究竟哪些檔案將被複製或刪除。在設定單向同步（目的地檔案可能會被覆寫）時，這項功能特別實用。

## 監控傳輸與工作紀錄

RcloneView 底部的 **Transferring** 分頁可即時顯示進行中的 HiDrive 傳輸狀態：檔案數量、傳輸速度、已傳輸位元組數以及已耗時間。若某項工作因網路故障而失敗，RcloneView 會自動重試（預設：重試 3 次）。

**Job History** 分頁會儲存過去執行紀錄的完整日誌——執行類型（手動或排程）、開始時間、耗時、狀態以及傳輸總大小。對於需要證明定期執行資料保護活動的合規團隊而言，這份稽核軌跡立即派得上用場。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Reviewing HiDrive backup job history in RcloneView" class="img-large img-center" />

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 開啟 RcloneView，點選 **Remote tab → New Remote**，選擇 HiDrive，並完成 OAuth 登入。
3. 使用 Explorer 面板瀏覽您的 HiDrive 資料夾並驗證連線。
4. 開啟 **Job Manager**，建立一個從本機磁碟機到 HiDrive 的新同步工作，並設定排程。

有了 RcloneView，HiDrive 就能成為您備份策略中完全受管理的一環——自動排程、監控並驗證。

---

**相關指南：**

- [管理 OneDrive 儲存空間——使用 RcloneView 同步與備份檔案](https://rcloneview.com/support/blog/manage-onedrive-cloud-sync-backup-rcloneview)
- [管理 Jottacloud——使用 RcloneView 進行雲端同步與備份](https://rcloneview.com/support/blog/manage-jottacloud-cloud-sync-backup-rcloneview)
- [使用 RcloneView 自動化每日雲端備份](https://rcloneview.com/support/blog/automate-daily-cloud-backups-with-rcloneview)

<CloudSupportGrid />
