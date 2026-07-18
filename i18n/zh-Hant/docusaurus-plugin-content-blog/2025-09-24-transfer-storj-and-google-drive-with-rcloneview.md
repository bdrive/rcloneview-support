---
slug: transfer-storj-and-google-drive-with-rcloneview
title: "使用 RcloneView 在 Storj 與 Google Drive 之間傳輸檔案"
authors:
  - tayson
description: "在 Storj 與 Google Drive 之間搬移資料，無需重新下載——使用 RcloneView 的拖放操作、比較、同步與排程 Jobs，並支援 OAuth 與 Storj access grant。"
keywords:
  - storj to google drive
  - google drive to storj
  - rcloneview
  - cloud to cloud transfer
  - access grant
  - drag and drop sync
  - scheduled jobs
  - compare folders
  - resumable uploads
  - s3 compatible storage
tags:
  - RcloneView
  - cloud-migration
  - storj
  - google-drive
  - sync
  - automation
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 使用 RcloneView 在 Storj 與 Google Drive 之間傳輸檔案

> 在 **Storj** 與 **Google Drive** 之間搬移資料夾，完全不需要使用命令列。RcloneView 提供並排的檔案總管窗格、比較、同步與排程 Jobs，讓雲端對雲端的傳輸保持快速且可預期。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 為什麼使用 RcloneView 處理 Storj ↔ Google Drive？

- Google Drive 支援 OAuth 登入；Storj 支援 access grant（無需手動輸入 CLI 指令）。
- 多執行緒、可續傳的傳輸，附帶進度紀錄與重試機制。
- 雙窗格檔案總管，支援拖放搬移操作。
- 比較功能可在複製或刪除前預覽差異。
- 同步功能支援篩選與試跑（dry-run），並可儲存為可重複使用的 Jobs 與排程。
- 頻寬限制與流量節流控制，讓工作時段保持順暢。

RcloneView 建構於 rclone 之上，讓你在不需撰寫腳本的情況下，也能獲得可靠性與進階選項。

## 開始之前

- 準備好你的 **Storj access grant**（包含加密範圍）。請妥善保存。
- 登入 Google Drive，並留意其每位使用者每日 750 GB 的上傳上限。
- 安裝最新版本的 RcloneView：[下載](https://rcloneview.com/src/download.html)。
- 對於大量傳輸，建議使用有線網路連線，並讓 RcloneView 持續執行。

## 步驟 1：連接雲端遠端

1. 開啟 **遠端 → + 新增遠端**。
2. 選擇 **Storj** 並貼上你的 **access grant**。（若使用獨立的加密密碼，請在選項中加入。）儲存該遠端。
3. 對 **Google Drive** 重複相同步驟，點擊 **連接**，並完成 OAuth 瀏覽器登入。
4. 確認兩個遠端都已顯示在遠端管理員中。

👉 深入了解：[新增 Google Drive 遠端](/howto/#step-2-adding-remote-storage-google-drive-example)  
👉 管理遠端：[遠端管理員](/howto/rcloneview-basic/remote-manager/)

## 步驟 2：在檔案總管窗格中開啟兩個遠端

1. 前往 **瀏覽**。
2. 在左側窗格中，點擊 **+** 並開啟你的 **Storj** 遠端。
3. 在右側窗格中，點擊 **+** 並開啟你的 **Google Drive** 遠端。
4. 導覽至你要搬移的來源與目的地儲存桶（bucket）/資料夾。


## Storj ↔ Google Drive 傳輸的四種方法

### 方法 1：在窗格之間拖放

1. 在 Storj 窗格中選取檔案或資料夾。
2. 將它們拖放到 Google Drive 窗格中（反向亦可）。
3. 在 **傳輸** 分頁中追蹤進度；可依需要暫停/繼續。

👉 更多細節：[瀏覽與管理遠端儲存](/howto/rcloneview-basic/browse-and-manage-remote-storage)

### 方法 2：比較後再複製或刪除

1. 在左側開啟來源，右側開啟目的地。
2. 點擊 **比較**。
3. RcloneView 會標示出獨有項目、大小差異與相符項目。
4. 選取要搬移的項目，然後選擇 **複製 →** 或 **← 複製**。
5. 謹慎使用 **刪除** 功能來清除重複或過時的資料。

👉 深入了解：[比較資料夾內容](/howto/rcloneview-basic/compare-folder-contents)

### 方法 3：同步或另存為 Job

1. 選取你的 Storj 來源與 Google Drive 目的地。
2. 點擊 **同步**，並選擇單向或雙向同步。
3. 預覽變更、調整篩選條件（包含/排除），然後開始執行。
4. 點擊 **儲存至 Jobs** 以便日後重複使用該設定。

👉 深入了解：

- [同步遠端儲存](/howto/rcloneview-basic/synchronize-remote-storages)
- [建立同步 Jobs](/howto/rcloneview-basic/create-sync-jobs)
- [執行與管理 Jobs](/howto/rcloneview-basic/execute-manage-job)

### 方法 4：排程週期性同步 Jobs

1. 開啟 **Job 管理員 → 新增 Job**。
2. 將 **Storj** 設為來源、**Google Drive** 設為目的地（或反向）。
3. 選擇排程方式（每小時、每日、每週，或類似 cron 的排程）。
4. 啟用該 Job，讓 RcloneView 自動執行。
5. 查看日誌與歷史紀錄以確認執行成功。

👉 深入了解：[Job 排程與執行](/howto/rcloneview-advanced/job-scheduling-and-execution)

## 順暢傳輸的小技巧

- 在大型同步前使用 **試跑（dry-run）** 來確認將會發生的變更。
- 對於 Storj，建議將你的 access grant 範圍縮小（限定特定 bucket）以提升安全性。
- 若上傳停滯，可降低並行數量或設定頻寬限制以減少節流。
- 當 Google Drive 接近每日上限時，可將 Jobs 分散到不同日期或帳號執行。
- 留意 **傳輸** 分頁中的重試次數、速度與任何 API 訊息。

## 總結

RcloneView 讓 Storj ↔ Google Drive 的資料搬移變得簡單：連接遠端、並排瀏覽、比較、同步，或排程週期性 Jobs——完全不需要使用命令列。

<CloudSupportGrid />
