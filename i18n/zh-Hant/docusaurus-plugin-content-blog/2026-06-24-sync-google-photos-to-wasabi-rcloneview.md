---
slug: sync-google-photos-to-wasabi-rcloneview
title: "將 Google 相簿同步至 Wasabi — 使用 RcloneView 打造實惠的相片封存備份"
authors:
  - steve
description: "了解如何使用 RcloneView 將您的 Google 相簿同步並備份至 Wasabi S3 相容儲存空間 — 打造備援、實惠的異地相片封存。"
keywords:
  - sync Google Photos to Wasabi
  - Google Photos Wasabi backup
  - RcloneView Google Photos backup
  - Wasabi photo archive storage
  - affordable cloud photo backup
  - Google Photos offsite backup
  - rclone Google Photos Wasabi
  - cloud photo library backup
tags:
  - RcloneView
  - google-photos
  - wasabi
  - cloud-to-cloud
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 將 Google 相簿同步至 Wasabi — 使用 RcloneView 打造實惠的相片封存備份

> 透過將您的 Google 相簿同步至 Wasabi S3 相容儲存空間，保護多年來累積的珍貴照片 — 備援、異地存放,且成本效益高。

Google 相簿是許多人存放相片庫的地方,但將無可取代的回憶完全依賴單一平台存在實際風險。儲存空間配額可能用盡、帳號政策可能變更,存取權限也可能在毫無預警的情況下被撤銷。同步至 Wasabi — 一項 S3 相容的物件儲存服務 — 可建立一份可靠、獨立且完全由您掌控的異地備份。RcloneView 以視覺化雙面板介面連接這兩項服務,讓雲端對雲端的相片傳輸變得簡單,無需任何命令列設定。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 在 RcloneView 中連接 Google 相簿與 Wasabi

首先新增 Google 相簿作為遠端。開啟 **Remote** 分頁,點擊 **New Remote**,並從供應商清單中選擇 Google Photos。RcloneView 會開啟瀏覽器視窗進行 OAuth 驗證 — 使用您的 Google 帳號登入並授予存取權限。您的照片與相簿隨即可在瀏覽面板中瀏覽。

接著,新增 Wasabi 作為 S3 相容遠端。再次點擊 **New Remote**,選擇 Amazon S3 作為類型,並選擇 Wasabi 作為供應商。輸入您的 Wasabi Access Key、Secret Key 及區域端點。請事先在 Wasabi 主控台建立目的地儲存桶,使其準備好接收檔案。儲存兩個遠端後,您即可在一個面板瀏覽 Google 相簿庫,並在另一個面板瀏覽 Wasabi 儲存桶。

<img src="/support/images/en/blog/new-remote.png" alt="Adding Google Photos and Wasabi remotes in RcloneView" class="img-large img-center" />

RcloneView 在 FREE 授權方案中即提供對 Wasabi 等 S3 相容供應商的完整讀寫存取權限 — 使其成為無需升級方案即可使用的強大備份目的地。

## 建立並執行同步作業

在瀏覽面板中確認兩個遠端皆可見後,開啟 **Job Manager** 並建立新的同步作業。將 Google 相簿設為來源,將您的 Wasabi 儲存桶設為目的地。在 Advanced Settings 步驟中,啟用 **checksum verification**(校驗和驗證)— 此功能會依內容雜湊值而非僅依檔案大小比對傳輸的檔案,可偵測傳輸過程中的任何損毀。

在執行完整同步之前,使用 **Dry Run** 預覽完整的檔案清單。對於累積多年的相片庫而言,乾跑測試有助於您了解所涉及的資料量,並確認您的篩選設定(如有)是否正確配置。

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="Transferring Google Photos files to a Wasabi bucket in RcloneView" class="img-large img-center" />

## 監控即時傳輸進度

作業開始後,RcloneView 底部的 **Transferring** 分頁會顯示即時進度:傳輸速度、已完成檔案數,以及已傳輸的總容量。對擁有 80,000 張以上原始檔案的攝影師而言,初次同步可能需要執行數小時 — 後續執行則只會傳輸新增或變更過的檔案,讓漸進式備份保持快速。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Real-time monitoring of the Google Photos to Wasabi transfer" class="img-large img-center" />

**Job History** 會記錄每次執行的開始時間、持續時間、檔案數量與狀態。定期檢視可確認您的備份是否順利完成,並及早發現任何反覆出現的錯誤。

## 使用 PLUS 排程定期備份

擁有 PLUS 授權後,您可依任何 crontab 排程 — 每日、每週或指定時間 — 自動排程 Google 相簿至 Wasabi 的同步作業。Simulate Schedule 工具可在您儲存作業前預覽即將執行的時間,方便您確認排程頻率是否符合工作流程。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Setting a schedule for the Google Photos to Wasabi backup job" class="img-large img-center" />

舉例來說,負責備份客戶相簿的婚攝攝影師,可排程夜間作業將 Google 相簿中的新交付成品推送至 Wasabi 封存儲存桶 — 每次拍攝後無需任何手動介入。

## 快速上手

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 透過 **New Remote** 新增 Google 相簿(OAuth 瀏覽器登入)。
3. 透過 **New Remote** 新增 Wasabi — 選擇 Amazon S3,選擇 Wasabi 作為供應商,並輸入您的憑證。
4. 在 **Job Manager** 中建立同步作業,將 Google 相簿設為來源,將您的 Wasabi 儲存桶設為目的地。

您的 Google 相簿庫將獲得一份實惠且獨立掌控的異地封存,讓您的珍貴回憶不再侷限於單一平台。

---

**相關指南:**

- [使用 RcloneView 將 Google 相簿同步至 Backblaze B2](https://rcloneview.com/support/blog/sync-google-photos-to-backblaze-b2-rcloneview)
- [管理 Google 相簿儲存空間 — 使用 RcloneView 同步與備份檔案](https://rcloneview.com/support/blog/manage-google-photos-cloud-sync-backup-rcloneview)
- [使用 RcloneView 管理 Wasabi 雲端儲存空間](https://rcloneview.com/support/blog/manage-wasabi-cloud-sync-backup-rcloneview)

<CloudSupportGrid />
