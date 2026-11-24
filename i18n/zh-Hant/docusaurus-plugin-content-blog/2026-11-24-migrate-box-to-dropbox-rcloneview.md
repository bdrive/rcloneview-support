---
slug: migrate-box-to-dropbox-rcloneview
title: "從 Box 遷移到 Dropbox — 使用 RcloneView 傳輸檔案"
authors:
  - tayson
description: "使用 RcloneView 將 Box 遷移到 Dropbox。透過 OAuth 連接兩個遠端，用 Dry Run 預覽，在雲端之間複製資料夾，並以 Folder Compare 進行驗證。"
keywords:
  - Box 遷移到 Dropbox
  - Box 到 Dropbox 遷移
  - 從 Box 傳輸檔案到 Dropbox
  - Box Dropbox 雲端對雲端傳輸
  - 將 Box 資料夾移到 Dropbox
  - Dropbox for Business 遷移
  - RcloneView Box Dropbox
  - rclone Box 到 Dropbox GUI
  - 雲端遷移工具
tags:
  - RcloneView
  - box
  - dropbox
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 從 Box 遷移到 Dropbox — 使用 RcloneView 傳輸檔案

> 將 Box 資料夾樹以雲端對雲端的方式移到 Dropbox，在任何變更前預覽範圍，並並排確認結果。

團隊從 Box 轉換到 Dropbox 的原因很多：公司合併、新客戶的要求，或是創意部門早已在使用 Dropbox。困難之處在於如何把多年累積的共用資料夾完整無缺地搬過去。RcloneView 將兩個服務都連接為遠端，並透過 rclone 執行複製，因此您可以在同一個視窗中規劃、執行與驗證遷移，而不必先把所有內容下載到筆電上。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 將 Box 與 Dropbox 連接為遠端

兩個服務都使用 OAuth，因此不需要複製 API 金鑰。開啟 **Remote tab > New Remote**，選擇 Box，並在瀏覽器開啟後登入。Dropbox 也以相同步驟新增。如果任一方是企業帳戶，請在設定時啟用對應選項：Box for Business 使用 `box_sub_type = enterprise`，Dropbox for Business 使用 `dropbox_business = true`。

<img src="/support/images/en/blog/new-remote.png" alt="Adding Box and Dropbox remotes in RcloneView" class="img-large img-center" />

在左側 Explorer 面板開啟 Box，在右側面板開啟 Dropbox。並排瀏覽兩者，可以在建立作業前確認看得到預期的資料夾，且目標資料夾已存在。在 Box 資料夾上按右鍵並選擇 **Get Size**，即可估算即將搬移的資料量。

## 建立 Copy 作業並預覽

對遷移而言，**Copy** 作業是穩妥的選擇：它只會將檔案新增到 Dropbox，絕不刪除目標端的任何內容。從 **Home tab > Sync** 或 Job Manager 建立作業，選擇 Box 資料夾作為來源、Dropbox 資料夾作為目標，並取一個清楚的名稱，例如 `box-marketing-to-dropbox`。

在 Advanced Settings 中，這個組合請保持總和檢查碼關閉。Box 與 Dropbox 使用不同的雜湊類型，因此 rclone 會改以檔案大小與修改時間來比較檔案。如果 Dropbox 開始限制速率，請減少檔案傳輸數量，而不是增加。在 Filtering 步驟中，預先定義的 **Box Docs** 篩選器可讓您另外處理 Box 原生文件，自訂規則則可略過您決定不再保留的資料夾。

請先執行 **Dry Run**。它會列出所有將被複製的檔案而不實際傳輸——當一家代理商要搬移 60,000 個客戶素材並想與利害關係人確認範圍時，這非常實用。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-to-cloud transfer from Box to Dropbox in RcloneView" class="img-large img-center" />

## 執行、監控並保留稽核紀錄

啟動作業，在 **Transferring** 分頁中追蹤進度、速度與檔案數。將大型遷移依頂層資料夾拆成多個作業，可避免單一錯誤卡住整體進度。每次執行都會連同狀態、總大小與檔案數記錄在 **Job History** 中，也可作為遷移核准者的紀錄。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job History showing Box to Dropbox migration runs" class="img-large img-center" />

## 使用 Folder Compare 驗證

作業完成後，針對 Box 來源與 Dropbox 目標開啟 **Folder Compare**。篩選僅存在於左側的檔案，找出未送達的內容，並使用 Copy right 補齊缺漏。在仍有人將檔案存到 Box 的過渡期間，請在最終切換前重新執行同一個 Copy 作業以取得新檔案。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder Compare verifying Box and Dropbox contents" class="img-large img-center" />

## 開始使用

與僅支援掛載的工具不同，RcloneView 也支援同步與資料夾比較——在 FREE License 下即可使用。

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 透過 OAuth 將 Box 與 Dropbox 新增為遠端，必要時啟用企業選項。
3. 建立從 Box 到 Dropbox 的 Copy 作業，並以 Dry Run 檢查。
4. 執行作業，然後在 Folder Compare 與 Job History 中確認結果。

經過預覽與驗證的遷移，能讓您的團隊安心移轉到 Dropbox，而不必擔心遺漏了哪個資料夾。

---

**相關指南：**

- [管理 Box 儲存空間 — 使用 RcloneView 同步與備份檔案](https://rcloneview.com/support/blog/manage-box-cloud-sync-backup-rcloneview)
- [管理 Dropbox 儲存空間 — 使用 RcloneView 同步與備份檔案](https://rcloneview.com/support/blog/manage-dropbox-cloud-sync-backup-rcloneview)
- [使用 RcloneView 將 Dropbox 同步到 Box](https://rcloneview.com/support/blog/sync-dropbox-to-box-rcloneview)

<CloudSupportGrid />
