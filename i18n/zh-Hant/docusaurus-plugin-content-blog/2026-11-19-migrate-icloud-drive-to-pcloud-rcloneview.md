---
slug: migrate-icloud-drive-to-pcloud-rcloneview
title: "將 iCloud Drive 遷移到 pCloud — 用 RcloneView 傳輸檔案"
authors:
  - jay
description: "使用 RcloneView 將檔案從 iCloud Drive 移到 pCloud。連接兩個雲端，用 Dry Run 預覽複製，在雲端之間直接傳輸，並用 Folder Compare 驗證。"
keywords:
  - iCloud Drive 遷移到 pCloud
  - iCloud Drive 到 pCloud 傳輸
  - 從 iCloud Drive 移動檔案
  - iCloud Drive 遷移工具
  - pCloud 遷移
  - 雲端到雲端傳輸
  - rcloneview icloud drive
  - rcloneview pcloud
  - rclone gui icloud drive
tags:
  - RcloneView
  - pcloud
  - cloud-to-cloud
  - migration
  - cloud-storage
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 將 iCloud Drive 遷移到 pCloud — 用 RcloneView 傳輸檔案

> 使用可預覽、觀察與驗證的複製工作，把 iCloud Drive 資料夾移入 pCloud，無需先將所有內容暫存到本機磁碟。

人們從 iCloud Drive 轉向 pCloud 的理由很實際：家中混用 Windows、Linux 與 Mac 裝置，或是自由工作者想要一個在每台桌機上都一致運作的儲存帳號。iCloud Drive 沒有內建匯出到其他雲端服務的功能，因此大多數遷移都變成「先全部下載到 Mac，再重新上傳」。RcloneView 同時連接兩個服務，並透過 rclone 在兩者之間複製檔案，因此能在單一視窗中完成雲端到雲端的傳輸。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 將 iCloud Drive 與 pCloud 連接為遠端

iCloud Drive 支援需要 rclone v1.69 或更新版本。RcloneView 內含符合此需求的內建 rclone 執行檔，因此不需額外安裝。開啟 Remote 分頁，點選 **New Remote**，選擇 iCloud Drive，並輸入您的 Apple 帳號憑證。接著新增 pCloud。它透過瀏覽器 OAuth 登入，因此不需要產生任何 API 金鑰。

兩個遠端都連接後，並排開啟兩個 Explorer 面板。在 iCloud Drive 的最上層資料夾按右鍵並選擇 **Get Size**，即可查看要移動的資料量。這個數字能讓您在複製第一個檔案之前，就知道 pCloud 方案是否有足夠空間。

<img src="/support/images/en/blog/new-remote.png" alt="Adding iCloud Drive and pCloud remotes in RcloneView" class="img-large img-center" />

## 建立複製工作並以 Dry Run 預覽

就遷移而言，**Copy** 工作是穩妥的選擇：它只會將檔案新增到 pCloud，絕不刪除那裡的任何內容。只有在 pCloud 必須與 iCloud Drive 完全鏡像（包括刪除）時，才選擇 **Sync**。

在 Job Manager 中，以 iCloud Drive 資料夾為來源、pCloud 資料夾為目的地建立工作。在 Step 2 中將重試設定保留為預設值 3，這樣連線中斷時執行不會就此結束。Step 3 可讓您排除不再需要的資料。自訂篩選器可排除 `.iso` 映像檔或 `.git/` 資料夾，最大檔案時長則能把舊的雜亂檔案留在原處。

在正式傳輸前執行 **Dry Run**。以一位要搬移 300 GB 客戶專案的設計師為例：Dry Run 會列出每一個將被複製的檔案，讓您在投入數小時傳輸之前確認資料夾結構。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-to-cloud copy from iCloud Drive to pCloud in RcloneView" class="img-large img-center" />

## 執行傳輸並追蹤進度

啟動工作並查看 Transferring 分頁，其中會顯示進度、速度與檔案數。若資料量龐大，請為每個最上層資料夾（Documents、Desktop、專案資料夾）各建立一個工作。如果某一批失敗，只需重新執行那一批。每次執行都會連同狀態、總大小與檔案數記錄在 Job History 中，讓您清楚掌握何時移動了哪些內容。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job History showing completed iCloud Drive to pCloud copy runs" class="img-large img-center" />

## 以 Folder Compare 驗證結果

點選 **Compare**，左側開啟 iCloud Drive 資料夾，右側開啟 pCloud 資料夾。篩選僅在左側與有差異的檔案，找出被略過的項目，然後使用 **Copy right** 將缺少的檔案傳送過去。當兩側都顯示為相同時，您就能放心地停用舊的儲存空間。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Comparing iCloud Drive and pCloud folders after migration" class="img-large img-center" />

## 開始使用

RcloneView 可在 Windows、macOS 與 Linux 上透過單一視窗掛載與同步 90 多個供應商。

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 新增 iCloud Drive（已內含內建 rclone v1.69+），並透過 OAuth 登入新增 pCloud。
3. 建立從 iCloud Drive 到 pCloud 的 Copy 工作，並以 Dry Run 檢查。
4. 執行工作，然後在降級 iCloud 方案之前以 Folder Compare 確認結果。

逐一資料夾驗證的遷移，能讓您的檔案完整進入 pCloud，每個資料夾都有據可查。

---

**相關指南:**

- [管理 iCloud Drive 儲存空間 — 用 RcloneView 同步與備份檔案](https://rcloneview.com/support/blog/manage-icloud-drive-cloud-sync-rcloneview)
- [管理 pCloud 儲存空間 — 用 RcloneView 同步與備份檔案](https://rcloneview.com/support/blog/manage-pcloud-cloud-sync-backup-rcloneview)
- [將 iCloud Drive 遷移到 Dropbox — 用 RcloneView 傳輸檔案](https://rcloneview.com/support/blog/migrate-icloud-drive-to-dropbox-rcloneview)

<CloudSupportGrid />
