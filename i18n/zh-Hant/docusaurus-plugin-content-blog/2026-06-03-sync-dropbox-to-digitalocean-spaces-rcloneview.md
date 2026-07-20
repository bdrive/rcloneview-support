---
slug: sync-dropbox-to-digitalocean-spaces-rcloneview
title: "將 Dropbox 同步至 DigitalOcean Spaces — 使用 RcloneView 進行雲端備份"
authors:
  - morgan
description: "了解如何使用 RcloneView 將 Dropbox 檔案同步並備份至 DigitalOcean Spaces。無需 CLI 即可設定自動化的雲端對雲端傳輸。"
keywords:
  - sync Dropbox to DigitalOcean Spaces
  - Dropbox to DigitalOcean backup
  - RcloneView Dropbox DigitalOcean
  - cloud-to-cloud sync
  - DigitalOcean Spaces backup
  - Dropbox backup object storage
  - cloud sync GUI
  - RcloneView S3 sync
  - automated cloud backup
  - DigitalOcean Spaces rclone
tags:
  - RcloneView
  - dropbox
  - digitalocean-spaces
  - cloud-to-cloud
  - sync
  - backup
  - cloud-sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 將 Dropbox 同步至 DigitalOcean Spaces — 使用 RcloneView 進行雲端備份

> 自動將您的 Dropbox 檔案備份至 DigitalOcean Spaces 物件儲存空間 — 完全不需要任何 CLI 指令。

Dropbox 是團隊每天共享檔案的天然協作工具。DigitalOcean Spaces 提供與 S3 相容的物件儲存服務，專為需要與現有基礎架構整合、可擴充且經濟實惠的儲存空間的開發者所設計。將兩者搭配 RcloneView 使用，即可打造自動化的異地備份流程：檔案留在 Dropbox 中供日常協作使用，而 Spaces 則保存持久的備份副本。RcloneView 以視覺化方式處理整個雲端對雲端傳輸 — 完全不需要終端機。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 連接 Dropbox 與 DigitalOcean Spaces

首先在 RcloneView 中將兩項服務都新增為遠端。對於 Dropbox，前往 **Remote tab > New Remote**，選擇 **Dropbox**，然後依照瀏覽器中的 OAuth 流程完成授權 RcloneView。無需複製任何 API 金鑰 — 開啟的瀏覽器視窗會自動處理驗證，完成後會自動返回 RcloneView。

<img src="/support/images/en/blog/new-remote.png" alt="Adding Dropbox and DigitalOcean Spaces remotes in RcloneView" class="img-large img-center" />

對於 DigitalOcean Spaces，請建立第二個新的遠端，選擇 **S3**，並選擇 **DigitalOcean** 作為供應商。您需要從 DigitalOcean 控制台（在 API > Spaces Keys 底下）取得 **Access Key** 與 **Secret Key**，以及您 Spaces 所在區域的 **region endpoint** — 例如紐約地區為 `nyc3.digitaloceanspaces.com`。儲存兩個遠端後，它們就會以可瀏覽的分頁形式出現在 RcloneView 檔案總管中。

## 設定同步工作

連接好兩個遠端後，點選 **Home tab** 中的 **Sync** 開啟 4 步驟同步精靈。在步驟 1 中，將您的 Dropbox 資料夾設為**來源**，並將 DigitalOcean Spaces 儲存貯體（或其中的子目錄）設為**目的地**。為工作命名一個具描述性的名稱 — `dropbox-spaces-backup` 是不錯的選擇 — 並選擇**單向同步**，使目的地成為來源的忠實副本。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-to-cloud sync job from Dropbox to DigitalOcean Spaces in RcloneView" class="img-large img-center" />

在步驟 2 中，依您的連線容量設定同時傳輸的檔案數量。對於擁有大量小型素材檔案、分散於多個 Dropbox 資料夾的設計公司而言，提高此數值能顯著加快初次完整同步的速度。在步驟 3 中，新增篩選規則以排除 Spaces 中不需要的內容 — 例如 `.DS_Store` 檔案、Dropbox Paper 文件，或任何僅用於暫存草稿的資料夾。

首次執行工作前，請點選 **Dry Run** 以確切檢視哪些檔案會被傳輸或刪除。這能在任何資料實際移動之前，確認您的篩選規則是否如預期運作。

## 監控進行中的傳輸

點選 **Run Job** 後，RcloneView 底部的 **Transferring** 分頁會即時顯示進度：檔案數量、傳輸速度以及已傳輸的總位元組數。對於大規模的初次同步 — 例如某內容工作室從完整的 Dropbox 帳戶移動 8 萬個檔案 — 此檢視畫面能讓您輕鬆估算工作所需時間，並及早察覺任何錯誤。您可以隨時取消正在執行的工作，而重試設定（可於步驟 2 中設定）會自動處理暫時性的網路問題。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Live transfer monitoring of Dropbox to DigitalOcean Spaces in RcloneView" class="img-large img-center" />

## 排程自動備份（PLUS 授權）

若想實現免人工介入的備份流程，**PLUS 授權**使用者可以在同步精靈的步驟 4 中新增類似 crontab 格式的排程。您可以設定工作每晚執行、每隔幾小時執行，或於每週特定幾天執行。儲存前請點選 **Simulate Schedule** 以預覽接下來幾次的執行時間，確認排程時間正確無誤。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a recurring Dropbox to DigitalOcean Spaces backup in RcloneView" class="img-large img-center" />

排程設定完成後，RcloneView 會在背景執行工作，並在完成時傳送桌面通知。**Job History** 檢視畫面會記錄每一次執行 — 開始時間、耗時、檔案數量、總大小以及最終狀態 — 讓您隨時清楚掌握 Dropbox 備份上次執行的時間與是否成功。

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 透過 OAuth 瀏覽器登入流程，將 **Dropbox** 新增為遠端。
3. 使用您的 Access Key、Secret Key 與 region endpoint，將 **DigitalOcean Spaces** 新增為 S3 遠端。
4. 開啟同步精靈，將 Dropbox 設為來源、Spaces 設為目的地，然後點選 **Run Job**。

完成此設定後，您的 Dropbox 內容將持續鏡像至 DigitalOcean Spaces — 為您提供一份持久、自動維護、無需持續人工投入的異地備份。

---

**相關指南：**

- [管理 Dropbox — 使用 RcloneView 進行雲端同步與備份](https://rcloneview.com/support/blog/manage-dropbox-cloud-sync-backup-rcloneview)
- [管理 DigitalOcean Spaces — 使用 RcloneView 同步與備份檔案](https://rcloneview.com/support/blog/manage-digitalocean-spaces-cloud-sync-backup-rcloneview)
- [將 Dropbox 備份至 Backblaze B2 — 使用 RcloneView 打造經濟實惠的雲端儲存](https://rcloneview.com/support/blog/backup-dropbox-to-backblaze-b2-affordable-storage-rcloneview)

<CloudSupportGrid />
