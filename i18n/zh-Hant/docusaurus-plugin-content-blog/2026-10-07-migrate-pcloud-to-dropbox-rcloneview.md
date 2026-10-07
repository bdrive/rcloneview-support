---
slug: migrate-pcloud-to-dropbox-rcloneview
title: "將 pCloud 遷移到 Dropbox — 使用 RcloneView 傳輸檔案"
authors:
  - tayson
description: "使用 RcloneView 將 pCloud 遷移到 Dropbox：透過 OAuth 連接兩個服務，先以 Dry Run 預覽，再進行雲端對雲端複製，並用 Folder Compare 驗證。"
keywords:
  - 將 pCloud 遷移到 Dropbox
  - pCloud 到 Dropbox 傳輸
  - 將 pCloud 檔案移到 Dropbox
  - pCloud Dropbox 遷移工具
  - 雲端對雲端傳輸
  - RcloneView
  - rclone GUI
  - pCloud 同步
  - Dropbox 同步
  - 資料夾比較
tags:
  - RcloneView
  - pcloud
  - dropbox
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 將 pCloud 遷移到 Dropbox — 使用 RcloneView 傳輸檔案

> 不必先下載到本機磁碟，就能把整個 pCloud 資料庫搬到 Dropbox。

從 pCloud 轉到 Dropbox，通常是因為團隊已統一使用 Dropbox 進行分享，或客戶有此要求。手動下載再重新上傳數百 GB 的資料既緩慢又容易出錯。RcloneView 透過 rclone 連接兩個服務，在單一視窗中完成雲端對雲端的檔案傳輸，並提供 Dry Run 與驗證步驟。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 連接 pCloud 與 Dropbox

在 RcloneView 中，pCloud 與 Dropbox 都使用 OAuth 瀏覽器登入，因此不需要 API 金鑰。開啟 Remote 分頁，點選 **New Remote**，選擇 pCloud，並在瀏覽器開啟後登入。Dropbox 也重複相同的步驟。若使用 Dropbox Business 帳號，請在設定時啟用 `dropbox_business = true` 選項。

RcloneView 在 Windows、macOS 與 Linux 上支援 90 多種雲端儲存服務，因此兩個帳號會並排顯示為 Explorer 面板。

<img src="/support/images/en/blog/new-remote.png" alt="在 RcloneView 中新增 pCloud 與 Dropbox 遠端" class="img-large img-center" />

## 以 Dry Run 預覽遷移

在移動任何內容之前，先開啟 Sync 精靈，選擇 pCloud 作為來源，並選擇一個 Dropbox 資料夾作為目的地。首次遷移請使用 **Copy** 方式，這樣來源端不會有任何變動。執行 **Dry Run** 可列出將被傳輸的所有檔案，並確認資料夾結構會落在預期的位置。

假設一位設計師在 pCloud 中有 400 GB 的專案資料夾。透過 Dry Run 可以找出過大的檔案或不需要的子資料夾，並可在 Sync 精靈的篩選步驟中使用最大檔案大小、檔案時間長度或自訂篩選規則將其排除。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="從 pCloud 到 Dropbox 的雲端對雲端傳輸" class="img-large img-center" />

## 執行傳輸並監控進度

啟動作業，並在 Transferring 分頁中查看進度與檔案數量。在 Advanced Settings 中可以調整檔案傳輸數量並啟用校驗碼比較。若執行到一半失敗，作業的重試設定（預設為 3）會重新嘗試同步，再次執行時只會複製缺少的檔案。

由於資料透過 rclone 在兩個服務之間直接傳輸，因此不需要為整個資料庫預留本機磁碟空間。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="在 RcloneView 中監控執行中的傳輸" class="img-large img-center" />

## 使用 Folder Compare 驗證

傳輸完成後，在 Home 分頁中開啟 **Compare**，左側選擇 pCloud，右側選擇 Dropbox。篩選僅存在於左側的檔案與有差異的檔案以找出遺漏項目，然後使用 Copy right 補齊。在 Job History 中查看狀態、大小與檔案數量，作為遷移紀錄。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="pCloud 與 Dropbox 之間的 Folder Compare" class="img-large img-center" />

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 在 Remote 分頁中透過 OAuth 登入新增 pCloud 與 Dropbox 遠端。
3. 建立從 pCloud 到 Dropbox 的 Copy 作業，並先執行 Dry Run。
4. 執行作業，然後在停用舊帳號之前以 Folder Compare 進行驗證。

分階段並經過驗證的遷移，可在 Dropbox 擁有所需的全部內容之前，讓 pCloud 資料保持完整。

---

**相關指南：**

- [將 pCloud 遷移到 OneDrive](https://rcloneview.com/support/blog/migrate-pcloud-to-onedrive-rcloneview)
- [將 Dropbox 同步到 pCloud](https://rcloneview.com/support/blog/sync-dropbox-to-pcloud-rcloneview)
- [Dry Run — 預覽雲端同步](https://rcloneview.com/support/blog/dry-run-preview-cloud-sync-rcloneview)

<CloudSupportGrid />
