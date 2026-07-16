---
slug: manage-mailru-cloud-sync-rcloneview
title: "管理 Mail.ru 雲端儲存 — 使用 RcloneView 同步與備份檔案"
authors:
  - tayson
description: "了解如何使用 RcloneView 連接並管理 Mail.ru 雲端儲存。透過簡潔的圖形介面同步、備份與傳輸 Mail.ru 檔案，無需任何指令列操作。"
keywords:
  - Mail.ru cloud storage RcloneView
  - Mail.ru cloud sync GUI
  - manage Mail.ru files
  - Mail.ru backup tool
  - rclone Mail.ru GUI
  - Mail.ru file transfer
  - cloud storage management
  - Mail.ru sync desktop app
tags:
  - mailru
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 管理 Mail.ru 雲端儲存 — 使用 RcloneView 同步與備份檔案

> 將 Mail.ru Cloud 連接到 RcloneView，管理您的檔案、執行自動化備份，並在不同服務供應商之間同步資料 — 全部透過單一桌面圖形介面完成。

Mail.ru Cloud 提供大量免費儲存空間，在俄羅斯及鄰近國家廣泛使用。若沒有合適的工具，要有效地管理它可能相當困難。RcloneView 彌補了這個缺口，透過 rclone 成熟的 Mail.ru 後端連接至 Mail.ru Cloud，並以熟悉的雙窗格檔案總管呈現您的檔案。完全不需要任何指令列知識。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 在 RcloneView 中新增 Mail.ru Cloud 遠端

在 RcloneView 中設定 Mail.ru 只需不到兩分鐘。開啟選單列中的**遠端分頁**並點擊**新增遠端**。捲動服務供應商列表找到 Mail.ru Cloud（或在搜尋欄輸入「mail」），然後輸入您的 Mail.ru 帳號憑證 — 使用者名稱與密碼。RcloneView 會將這些資訊傳遞給內嵌的 rclone 實例，由它負責向 Mail.ru API 進行身分驗證。

儲存完成後，該遠端會立即出現在您的檔案總管面板中。您可以瀏覽資料夾、預覽縮圖、檢查檔案中繼資料，並像瀏覽本機磁碟一樣導覽資料夾樹狀結構。路徑導覽列提供可點擊的層級結構，讓您能快速深入巢狀目錄。

<img src="/support/images/en/blog/new-remote.png" alt="Adding Mail.ru Cloud as a new remote in RcloneView" class="img-large img-center" />

## 將 Mail.ru 檔案同步到其他雲端或本機磁碟

RcloneView 最強大的功能之一，就是無縫的雲端對雲端傳輸。如果您需要將檔案從 Mail.ru Cloud 複製到 Google Drive、Backblaze B2 或本機資料夾，只需在雙窗格檔案總管中並排開啟兩個位置。將檔案從一個面板拖曳到另一個面板，或按右鍵選擇**複製**，再於目標面板中選擇**貼上**。

若需要定期備份，可使用內建的工作管理員。建立一個以 Mail.ru 為來源、您偏好的目的地為目標的同步或複製工作。設定傳輸並行數，並啟用校驗和驗證以在傳輸過程中偵測任何損壞的檔案。使用 PLUS 授權，您可以將這些工作設定為 crontab 風格的排程，讓備份自動執行，無需任何手動介入。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a Mail.ru sync job in RcloneView Job Manager" class="img-large img-center" />

## 監控傳輸與檢視歷史記錄

RcloneView 視窗底部的**傳輸中**分頁會顯示任何進行中工作的即時進度 — 檔案數量、已傳輸位元組數以及目前速度。若需要暫停或調整設定，您可以隨時取消正在執行的工作。

每個工作完成後，**工作歷史記錄**分頁會保留完整的記錄：開始時間、持續時間、傳輸總大小，以及最終狀態（已完成、發生錯誤或已取消）。對於將客戶交付檔案儲存在 Mail.ru 上的攝影工作室來說，這份歷史記錄提供了可靠的稽核軌跡，並能輕鬆察覺備份工作是否在夜間失敗。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history log showing Mail.ru sync results" class="img-large img-center" />

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 開啟**遠端分頁 → 新增遠端**，選擇 Mail.ru Cloud，並輸入您的憑證。
3. 在檔案總管面板中瀏覽您的 Mail.ru 檔案，並將項目拖曳到任何目的地。
4. 在**工作管理員**中建立同步工作，以自動執行定期備份。

有了 RcloneView，Mail.ru Cloud 能完美融入您的多雲端工作流程 — 完全不需要終端機。

---

**相關指南：**

- [使用 RcloneView 管理 Yandex Disk 雲端儲存](https://rcloneview.com/support/blog/manage-yandex-disk-cloud-sync-backup-rcloneview)
- [將 Mail.ru Cloud 傳輸到 Google Drive 與 S3](https://rcloneview.com/support/blog/transfer-mailru-cloud-google-drive-s3-rcloneview)
- [使用 RcloneView 管理多個雲端帳戶](https://rcloneview.com/support/blog/manage-multiple-cloud-accounts-with-rcloneview)

<CloudSupportGrid />
