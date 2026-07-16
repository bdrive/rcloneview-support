---
slug: manage-linkbox-cloud-sync-backup-rcloneview
title: "管理 Linkbox 儲存空間 — 使用 RcloneView 同步與備份檔案"
authors:
  - kai
description: "將 Linkbox 雲端儲存連接到 RcloneView，透過單一桌面應用程式即可享有拖放檔案管理、排程備份與跨供應商同步功能。"
keywords:
  - Linkbox
  - Linkbox 雲端儲存
  - 管理 Linkbox 檔案
  - Linkbox 備份
  - Linkbox 同步
  - RcloneView Linkbox
  - 雲端檔案管理員
  - Linkbox 替代用戶端
tags:
  - RcloneView
  - cloud-storage
  - cloud-sync
  - backup
  - file-management
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 管理 Linkbox 儲存空間 — 使用 RcloneView 同步與備份檔案

> 透過完整的桌面檔案總管、排程備份，以及一鍵傳輸到任何其他雲端服務,將 Linkbox 帶入你的日常檔案工作流程。

Linkbox 是線上儲存與分享檔案的便利選擇,但其網頁介面並不適合大量檔案管理、資料夾比對或定期備份作業。RcloneView 在 Linkbox 之上新增了原生桌面層,提供完整的檔案總管、拖放上傳,以及自動化同步,讓 Linkbox 不再是孤立的儲存孤島,而是成為真正多雲端工作流程的一部分。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 新增 Linkbox 作為遠端

開啟「遠端」分頁並點擊「新增遠端」以啟動設定精靈。RcloneView 會引導你從供應商清單中選擇 Linkbox 並輸入所需的連線資訊,接著在儲存前先測試連線。新增完成後,Linkbox 會像其他已設定的遠端一樣,以分頁形式出現在你的檔案總管面板中,讓你無需切換瀏覽器分頁,即可瀏覽資料夾、預覽檔案並檢視檔案大小。

由於 RcloneView 能在 Windows、macOS 和 Linux 上,於同一個視窗中掛載並同步 90 多個供應商,Linkbox 會與你的 Google Drive、S3 儲存桶或 NAS 共用資料夾一同並列於同一個檔案總管檢視畫面中 — 不必為每個服務安裝各自的應用程式。

<img src="/support/images/en/blog/new-remote.png" alt="Adding a new Linkbox remote in RcloneView remote setup wizard" class="img-large img-center" />

連線完成後,隨時可使用「遠端管理員」檢視或編輯 Linkbox 設定,若要並排比較 Linkbox 內容與其他遠端,也可在多個面板間切換。

## 自動備份 Linkbox 內容

每次變更後手動重新上傳檔案到 Linkbox 很容易被遺忘。RcloneView 的「工作管理員」讓你可以定義同步、複製或下載工作,以重複執行的方式將 Linkbox 中新增或變更的檔案傳輸至本機磁碟、外接 SSD 或其他雲端供應商。4 步驟的工作精靈涵蓋來源/目的地選擇、傳輸並行數量與篩選設定 — 例如,你可以排除暫存檔案,或在備份執行前設定檔案的最長保留時間上限。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring a backup job from Linkbox to another cloud destination in RcloneView" class="img-large img-center" />

在正式執行傳輸前,先執行「模擬執行」(Dry Run)以預覽哪些檔案將會被複製或刪除 — 當你第一次針對尚未完全檢視過內容的 Linkbox 資料夾設定工作時,這項功能特別實用。

## 排程與監控 Linkbox 工作

對於 PLUS 授權使用者,工作管理員的排程步驟支援 crontab 風格的時間設定,讓 Linkbox 備份可以依照你的保留需求每晚、每週或以任何頻率執行,不需要你手動觸發。FREE 授權使用者仍可在需要時手動執行相同的工作,或以單次執行方式運行。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a recurring Linkbox backup job in RcloneView Job Manager" class="img-large img-center" />

每次執行都會記錄在「工作紀錄」中,包含開始時間、持續時間、傳輸速度與檔案數量,讓你可以確認 Linkbox 備份是否成功完成,或在傳輸失敗時進行調查,而不必翻閱原始日誌。

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 開啟「遠端」分頁,並透過設定精靈將 Linkbox 新增為新遠端。
3. 建立一個從 Linkbox 指向你偏好目的地的同步或備份工作。
4. 執行模擬執行,接著儲存工作,並可選擇將其排程為重複執行。

當 Linkbox 整合進 RcloneView 後,它就不再是一個需要你特別記住的獨立目的地,而是成為統一雲端工作流程中的另一個資料夾。

---

**相關指南:**

- [Manage Gofile Storage — Sync and Backup Files with RcloneView](https://rcloneview.com/support/blog/manage-gofile-cloud-sync-backup-rcloneview)
- [Manage Pixeldrain Storage — Cloud Sync with RcloneView](https://rcloneview.com/support/blog/manage-pixeldrain-cloud-sync-rcloneview)
- [Manage Uptobox Cloud Downloads with RcloneView](https://rcloneview.com/support/blog/manage-uptobox-cloud-downloads-rcloneview)

<CloudSupportGrid />
