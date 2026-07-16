---
slug: sync-http-remote-download-organize-rcloneview
title: "在 RcloneView 中使用 HTTP/HTTPS 遠端 — 從網頁伺服器下載並整理檔案"
authors:
  - tayson
description: "RcloneView 可以將任何 HTTP/HTTPS 檔案伺服器連接為唯讀遠端。自動下載、整理並將公開託管的檔案同步到您的雲端儲存。"
keywords:
  - rclone http remote
  - http file download sync
  - web server file sync
  - http to cloud transfer
  - download files to cloud
  - http remote rcloneview
  - web directory sync
  - http ftp file manager
  - download organize cloud
  - web hosted files sync
tags:
  - RcloneView
  - ftp
  - cloud-storage
  - sync
  - guide
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 在 RcloneView 中使用 HTTP/HTTPS 遠端 — 從網頁伺服器下載並整理檔案

> 有個網頁伺服器上存放著您需要的檔案 — 資料集、韌體、封存檔、媒體檔案。與其手動下載後再重新上傳到雲端，不如使用 RcloneView 的 HTTP 遠端直接傳輸。

許多組織、研究機構和開源專案都將檔案託管在 HTTP/HTTPS 網頁伺服器上。手動下載這些檔案再上傳到雲端儲存既繁瑣又浪費本機頻寬。RcloneView 可以將任何 HTTP 目錄列表連接為唯讀遠端，讓您瀏覽內容並直接傳輸到任何雲端供應商。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## HTTP 遠端的運作方式

HTTP 遠端會連接到提供目錄列表的網頁伺服器。RcloneView 會解析目錄結構，並將其呈現為可瀏覽的檔案樹 — 就像任何其他遠端一樣。接著即可將檔案複製到任何其他遠端（Google Drive、S3、本機儲存等）。

**重要提示**：HTTP 遠端為唯讀。您可以從中下載/複製檔案，但無法上傳至其中。

## 新增 HTTP 遠端

<img src="/support/images/en/blog/new-remote.png" alt="Add HTTP remote" class="img-large img-center" />

將遠端指向任何提供目錄列表的網頁伺服器 URL。

## 使用情境

### 鏡像公開資料集

研究機構經常透過 HTTP 託管大型資料集。將其鏡像到您的 S3 或 Google Drive 以獲得可靠的存取：

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Mirror web dataset to cloud" class="img-large img-center" />

### 封存網頁託管檔案

如果檔案可能會從伺服器上移除，可建立雲端副本以便保存。

### 整理下載內容

瀏覽 HTTP 伺服器結構，選取所需檔案，並傳輸到有條理的雲端資料夾。

### 排程定期下載

對於會定期更新的伺服器（韌體、套件、資料發布），可排程定期同步工作：

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule HTTP sync" class="img-large img-center" />

### 驗證下載內容

比對 HTTP 來源與您的雲端副本：

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify HTTP downloads" class="img-large img-center" />

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. **新增指向網頁伺服器的 HTTP 遠端**。
3. 在檔案總管中**瀏覽目錄**。
4. **複製到您的雲端** — 支援 70 多家供應商中的任一家。

網頁伺服器就此成為您雲端工具箱中的另一個遠端。

---

**相關指南：**

- [連接 WebDAV 伺服器](https://rcloneview.com/support/blog/connect-webdav-server-cloud-sync-rcloneview)
- [將 FTP 伺服器遷移至雲端](https://rcloneview.com/support/blog/migrate-ftp-server-to-cloud-storage-rcloneview)
- [建立同步工作](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)

<CloudSupportGrid />
