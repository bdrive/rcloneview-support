---
slug: migrate-citrix-sharefile-to-box-rcloneview
title: "將 Citrix ShareFile 遷移到 Box — 使用 RcloneView 傳輸檔案"
authors:
  - morgan
description: "使用 RcloneView 將 Citrix ShareFile 遷移到 Box。連接兩個遠端,用 Dry Run 預覽,在雲端之間複製資料夾,並用 Folder Compare 驗證。"
keywords:
  - Citrix ShareFile 遷移到 Box
  - ShareFile 到 Box 遷移
  - Citrix ShareFile Box 傳輸
  - 雲端對雲端遷移工具
  - RcloneView ShareFile
  - Box for Business 遷移
  - 企業檔案遷移 GUI
  - 將 ShareFile 資料夾移到 Box
  - rclone ShareFile Box
tags:
  - RcloneView
  - sharefile
  - box
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 將 Citrix ShareFile 遷移到 Box — 使用 RcloneView 傳輸檔案

> 以雲端對雲端的方式將 ShareFile 資料夾樹移到 Box,先預覽每一項變更,再並排驗證結果 — 全部在一個 GUI 中完成。

當組織統一使用 Box 時,存放合約、客戶交付物和專案資料夾的 ShareFile 封存也必須一起移轉。把所有內容下載到筆記型電腦再重新上傳既慢又容易出錯。RcloneView 將兩個服務都連接為遠端,並透過 rclone 執行傳輸,檔案在兩個雲端之間直接移動,你可以在一個視窗中查看進度。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 連接 Citrix ShareFile 和 Box

開啟 **Remote tab > New Remote**,選擇 Citrix ShareFile。除了登入之外,ShareFile 還需要 **Root Folder ID**,用來告訴 rclone 將哪個資料夾視為遠端的最上層。如果計畫按部門逐一遷移,為每個根資料夾分別建立遠端,可以讓每個作業保持精簡且易於稽核。

接著新增 Box。Box 使用 OAuth:RcloneView 會開啟瀏覽器,登入後連線即被儲存,無需複製任何 API 金鑰。如果你的組織使用 Box for Business,請在設定時指定 `box_sub_type = enterprise`,讓遠端指向企業帳戶。

<img src="/support/images/en/blog/new-remote.png" alt="Adding Citrix ShareFile and Box remotes in RcloneView" class="img-large img-center" />

在左側面板開啟 ShareFile,在右側面板開啟 Box。並排瀏覽兩者,可以在移動任何內容之前快速確認是否看到預期的資料夾。

## 規劃傳輸並預覽

對於一次性遷移,**Copy** 作業是穩妥的選擇:它會將檔案新增到 Box,而不會刪除 Box 中已有的任何內容。從 **Home tab > Sync** 或 Job Manager 建立作業,選擇 ShareFile 資料夾作為來源、Box 資料夾作為目標,並為作業命名,例如 `sharefile-legal-to-box`。

在 Advanced Settings 步驟中,這個組合請保持總和檢查碼關閉:總和檢查碼比較需要雙方共有的雜湊類型,而 ShareFile(MD5)和 Box(SHA-1)使用不同的雜湊,因此 rclone 會改以大小和修改時間進行比較。如果列出目錄感覺較慢,請適度控制 equality checker 的數量。在 Filtering 步驟中,可以排除大型安裝檔(`.iso`)或決定不保留的舊資料夾。

執行之前,先使用 **Dry Run**。它會在不傳輸任何內容的情況下列出將被複製的檔案,因此即使是要移轉 40,000 份客戶文件的律師事務所,也能先確認範圍。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-to-cloud transfer from Citrix ShareFile to Box in RcloneView" class="img-large img-center" />

## 執行、監控與驗證

啟動作業後,在 **Transferring** 分頁中查看進度、速度和檔案數量。大型遷移可以拆分為多個作業,每個最上層資料夾一個,這樣一個作業失敗不會阻擋其他作業。每次執行都會記錄在 **Job History** 中,包括狀態、總大小和檔案數,為遷移提供稽核記錄。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job History showing completed ShareFile to Box migration runs" class="img-large img-center" />

作業完成後,在來源和目標上開啟 **Folder Compare**。篩選 left-only 檔案找出未送達的內容,再使用 Copy right 補齊缺漏。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder Compare verifying ShareFile and Box contents" class="img-large img-center" />

## 開始使用

RcloneView 可在 Windows、macOS 和 Linux 上執行,並能在一個視窗中掛載和同步 90+ 個服務供應商。

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 將 Citrix ShareFile(含 Root Folder ID)和 Box 新增為遠端。
3. 建立從 ShareFile 到 Box 的 Copy 作業,並先執行 Dry Run。
4. 執行作業,然後用 Folder Compare 和 Job History 確認結果。

經過規劃與驗證的遷移,能讓團隊切換到 Box 時不必擔心遺漏了某個資料夾。

---

**相關指南:**

- [管理 Citrix ShareFile 儲存空間 — 使用 RcloneView 同步和備份檔案](https://rcloneview.com/support/blog/manage-citrix-sharefile-cloud-sync-backup-rcloneview)
- [管理 Box 儲存空間 — 使用 RcloneView 同步和備份檔案](https://rcloneview.com/support/blog/manage-box-cloud-sync-backup-rcloneview)
- [使用 RcloneView 將 Citrix ShareFile 遷移到 Google Drive](https://rcloneview.com/support/blog/migrate-citrix-sharefile-to-google-drive-rcloneview)

<CloudSupportGrid />
