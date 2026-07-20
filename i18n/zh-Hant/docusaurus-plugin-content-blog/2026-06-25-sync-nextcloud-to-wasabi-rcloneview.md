---
slug: sync-nextcloud-to-wasabi-rcloneview
title: "同步 Nextcloud 到 Wasabi — 使用 RcloneView 進行雲端備份"
authors:
  - jay
description: "使用 RcloneView 將您的 Nextcloud 執行個體同步至 Wasabi S3 — 連接 WebDAV 與 S3 遠端、自動化備份作業，並讓自架資料獲得異地保護。"
keywords:
  - sync nextcloud to wasabi
  - nextcloud wasabi backup
  - nextcloud s3 backup gui
  - backup nextcloud to s3
  - nextcloud cloud backup rcloneview
  - wasabi s3 backup tool
  - webdav to s3 sync rcloneview
  - nextcloud off-site backup
  - rcloneview nextcloud wasabi
tags:
  - RcloneView
  - nextcloud
  - wasabi
  - cloud-sync
  - backup
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 同步 Nextcloud 到 Wasabi — 使用 RcloneView 進行雲端備份

> 自架的 Nextcloud 執行個體需要異地備份 — RcloneView 讓您能輕鬆將 Nextcloud 資料夾同步至 Wasabi S3 儲存空間，並可完全自動化。

自架 Nextcloud 伺服器讓您能完全掌控自己的檔案，但這份掌控也伴隨著責任：一旦伺服器故障、遭到勒索軟體攻擊，或硬碟毀損，您的資料也將隨之消失。同步至 Wasabi 可為您提供持久的異地備份，且不必擔心傳輸費用的突發狀況。RcloneView 透過 WebDAV 連接 Nextcloud，並透過 S3 協定連接 Wasabi，讓您能在兩者之間建立可靠的同步作業 — 完全不需要使用 CLI。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 將您的 Nextcloud 執行個體新增為遠端

開啟 RcloneView，前往**遠端分頁 > 新增遠端**。選擇 **WebDAV** 作為遠端類型，並選擇 **Nextcloud** 作為供應商。輸入您的 Nextcloud 伺服器網址，格式為 `https://cloud.yourdomain.com/remote.php/dav/files/username/`，並提供您的 Nextcloud 使用者名稱，以及帳戶密碼或從 Nextcloud 的安全性設定中產生的應用程式專用密碼。儲存遠端後，它會以可瀏覽的來源出現在檔案總管中。

與僅支援掛載的工具不同，RcloneView 可將 Nextcloud 等 WebDAV 來源直接同步至 Wasabi 等 S3 相容目的地 — 完全在免費授權下即可使用。

<img src="/support/images/en/blog/new-remote.png" alt="Adding Nextcloud as a WebDAV remote in RcloneView" class="img-large img-center" />

連線完成後，瀏覽您的 Nextcloud 目錄以確認連結正常運作。您可以檢視檔案名稱、大小及修改日期 — 這有助於決定哪些資料夾應納入備份作業，以及應排除哪些內部 Nextcloud 目錄（例如 `trashbin`）。

## 新增 Wasabi 作為 S3 相容遠端

再次從**遠端分頁 > 新增遠端**，選擇 **Amazon S3**，並選擇 **Wasabi** 作為供應商。輸入您的 Wasabi Access Key ID 與 Secret Access Key，選擇對應的區域端點（例如 `s3.us-east-1.wasabisys.com`），並指定目標儲存桶。儲存後，RcloneView 可在第二個檔案總管面板中開啟您的 Wasabi 儲存桶，與 Nextcloud 並排顯示 — 您可以在執行完整同步之前，先拖曳個別檔案於兩者之間以驗證連線。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Nextcloud and Wasabi remotes open side by side for cloud-to-cloud backup in RcloneView" class="img-large img-center" />

由於 Wasabi 的 S3 相容 API，RcloneView 會將其視為與 Amazon S3 相同，因此所有同步、複製、移動與篩選操作皆無需額外設定即可運作。

## 設定同步作業

從首頁分頁點選**同步**，開啟 4 步驟作業精靈。在步驟 1 中，將您的 Nextcloud 資料夾設為來源，並將 Wasabi 儲存桶（或子資料夾，例如 `nextcloud-backup/`）設為目的地。為作業命名一個具描述性的名稱，例如 `nextcloud-to-wasabi-daily`。

在步驟 2 中，如果您的連線允許，可增加平行傳輸數量 — 這能加快同步 Nextcloud 中常見的大量小型檔案。啟用**校驗碼驗證**以比對檔案雜湊值而非僅比對檔案大小，這能偵測先前部分上傳過程中發生的任何損壞。在步驟 3 中，新增篩選規則以排除 Nextcloud 的 `trashbin` 資料夾及任何分塊上傳暫存檔，讓備份保持乾淨。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a recurring Nextcloud to Wasabi sync job in RcloneView" class="img-large img-center" />

若擁有 PLUS 授權，步驟 4 可讓您新增類似 crontab 的排程 — 例如每晚凌晨 2 點 — 讓備份無需手動觸發即可自動執行。此排程器支援指定星期、每月間隔以及以步進為基礎的範圍設定。

## 檢視傳輸紀錄

每次執行後，**作業紀錄**分頁會記錄每一次執行：開始時間、持續時間、狀態（完成 / 錯誤 / 已取消）、總傳輸位元組數，以及傳輸速度。若備份似乎停滯或遺漏檔案，這份紀錄是最先應查看的地方，讓您能輕鬆稽核 Nextcloud 資料是否如預期般抵達 Wasabi。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history log showing completed Nextcloud to Wasabi backup runs" class="img-large img-center" />

對於同時運行多個 Nextcloud 執行個體，或需要備份至不同區域的 Wasabi 儲存桶以達成地理備援的作業，RcloneView 的 1:N 同步功能可讓您設定一個來源對應多個目的地，並在單一作業中一併執行。

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 將您的 Nextcloud 伺服器新增為 WebDAV 遠端（遠端分頁 > 新增遠端 > WebDAV > Nextcloud 供應商）。
3. 新增 Wasabi 作為 S3 相容遠端，並提供您的 Access Key、Secret Key、區域端點及儲存桶名稱。
4. 建立同步作業，將 Nextcloud 設為來源、Wasabi 儲存桶設為目的地 — 在步驟 2 中啟用校驗碼驗證，以確保備份的完整性。

您的自架 Nextcloud 資料將在 Wasabi 上擁有可靠的異地副本，並自動執行，完全不需要任何命令列腳本。

---

**相關指南：**

- [使用 RcloneView 管理 Nextcloud 雲端同步與備份](https://rcloneview.com/support/blog/manage-nextcloud-cloud-sync-backup-rcloneview)
- [使用 RcloneView 管理 Wasabi 雲端同步與備份](https://rcloneview.com/support/blog/manage-wasabi-cloud-sync-backup-rcloneview)
- [使用 RcloneView 同步 Nextcloud 到 Backblaze B2](https://rcloneview.com/support/blog/sync-nextcloud-to-backblaze-b2-rcloneview)

<CloudSupportGrid />
