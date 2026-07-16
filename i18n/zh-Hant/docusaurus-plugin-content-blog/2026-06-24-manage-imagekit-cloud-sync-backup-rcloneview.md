---
slug: manage-imagekit-cloud-sync-backup-rcloneview
title: "管理 ImageKit 儲存空間 — 使用 RcloneView 同步與備份檔案"
authors:
  - jay
description: "了解如何將 ImageKit 連接至 RcloneView，並透過視覺化 GUI 跨平台同步、備份或整理您的媒體資產庫。"
keywords:
  - ImageKit 雲端儲存
  - ImageKit 同步備份
  - RcloneView ImageKit
  - 管理 ImageKit 檔案
  - ImageKit rclone GUI
  - 備份 ImageKit 資產
  - 雲端媒體管理
  - image CDN storage backup
tags:
  - dam
  - media
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 管理 ImageKit 儲存空間 — 使用 RcloneView 同步與備份檔案

> 將 ImageKit 連接至 RcloneView，即可透過視覺化 GUI 瀏覽、同步並備份您的媒體資產 — 無需使用命令列。

依賴 ImageKit 進行圖片與影片傳遞的團隊，通常會在該平台的媒體庫中累積數千個原始資產。雖然 ImageKit 的網頁儀表板能妥善處理個別上傳作業，但若要搬移大量媒體檔案，或維護異地備份，使用專屬的同步工具會更加實用。RcloneView 透過 rclone 後端直接連接 ImageKit，提供雙面板檔案總管、一鍵同步工作及工作紀錄，全部整合於單一視窗，並支援 Windows、macOS 及 Linux。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 在 RcloneView 中將 ImageKit 新增為遠端

透過引導式的遠端設定精靈，只需幾個步驟即可將 ImageKit 新增至 RcloneView。開啟 **Remote** 分頁並點選 **New Remote**，然後在提供者清單中找到 ImageKit。依提示輸入您的認證資訊 — 可從您的 ImageKit 開發者設定中取得 — 並儲存該遠端。設定完成後，您的 ImageKit 媒體庫將以可瀏覽面板的形式，與您連接的其他遠端一同出現在檔案總管中。

<img src="/support/images/en/blog/new-remote.png" alt="Adding a new ImageKit remote in RcloneView" class="img-large img-center" />

與僅支援掛載的工具不同，RcloneView 也讓您能在 FREE 授權下，於任何已連接的遠端（包括 ImageKit）之間同步並比對資料夾。舉例來說，一家管理數百個客戶圖片資產的數位代理商，可以透過從 ImageKit 面板執行同步工作，將其 ImageKit 媒體庫鏡像至本地 NAS 或另一個雲端儲存桶，在不使用命令列的情況下保有已驗證的封存副本。

## 瀏覽與傳輸媒體檔案

連接完成後，ImageKit 的資料夾結構會顯示在雙面板檔案總管中。您可以瀏覽目錄、使用 Ctrl+Click 或 Shift+Click 選取多個檔案，並在 ImageKit 與任何其他已連接的遠端（本地磁碟機、S3 儲存桶，或其他雲端服務）之間拖曳檔案。在任一檔案上按右鍵即可將其下載至本地，或從您的檔案總管將項目拖曳至 RcloneView，直接上傳至 ImageKit。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a sync job to back up ImageKit media assets" class="img-large img-center" />

## 設定 ImageKit 的自動備份

對於經常發佈新視覺資產的團隊，同步工作可確保每個檔案都有最新的備份。在 **Job Manager** 中，建立一個以 ImageKit 為來源、以您的備份目的地（本地資料夾、Backblaze B2、Amazon S3 或任何其他已連接的遠端）為目標的新同步工作。在進階設定步驟中，啟用 **checksum verification**（校驗和驗證），透過比對內容雜湊值 — 而不僅是檔案大小與名稱 — 來確認每個檔案都已正確傳輸。

在進行完整傳輸之前，請使用 **Dry Run** 預覽將被複製或移除的檔案。這在變更篩選設定或新增目的地之後特別有用，因為它能顯示確切的檔案清單，而不會對您的資料做出任何變更。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history showing completed ImageKit backup transfers" class="img-large img-center" />

**Job History**（工作紀錄）會記錄每一次傳輸的開始時間、持續時間、檔案數量、總大小及完成狀態，讓您清楚掌握媒體備份作業的稽核軌跡。

## 快速上手

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 開啟 **Remote** 分頁，點選 **New Remote**，並從提供者清單中選擇 ImageKit。
3. 輸入您的 ImageKit 認證資訊並儲存該遠端。
4. 在 **Job Manager** 中建立以 ImageKit 為來源、並指定備份目的地的同步工作。

透過 RcloneView，您的 ImageKit 媒體庫將成為更廣泛的自動化備份策略的一部分，無需撰寫任何一行指令。

---

**相關指南：**

- [管理 Cloudinary 儲存空間 — 使用 RcloneView 同步與備份檔案](https://rcloneview.com/support/blog/manage-cloudinary-cloud-sync-backup-rcloneview)
- [管理 Google 相簿儲存空間 — 使用 RcloneView 同步與備份檔案](https://rcloneview.com/support/blog/manage-google-photos-cloud-sync-backup-rcloneview)
- [使用 RcloneView 進行拖放式雲端傳輸指南](https://rcloneview.com/support/blog/drag-drop-cloud-transfer-guide-rcloneview)

<CloudSupportGrid />
