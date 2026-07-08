---
slug: manage-digitalocean-spaces-cloud-sync-backup-rcloneview
title: "管理 DigitalOcean Spaces — 使用 RcloneView 同步與備份檔案"
authors:
  - tayson
description: "將 DigitalOcean Spaces 連接到 RcloneView，透過 GUI 管理您的物件儲存空間。無需 CLI 指令即可跨區域同步、備份與傳輸檔案。"
keywords:
  - DigitalOcean Spaces RcloneView
  - DigitalOcean Spaces sync
  - DigitalOcean Spaces backup
  - S3-compatible object storage GUI
  - DigitalOcean Spaces management
  - rclone DigitalOcean Spaces
  - cloud object storage sync
  - DigitalOcean backup tool
tags:
  - RcloneView
  - digitalocean-spaces
  - cloud-storage
  - cloud-sync
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 管理 DigitalOcean Spaces — 使用 RcloneView 同步與備份檔案

> RcloneView 透過 S3 相容 API 連接 DigitalOcean Spaces，為您跨任何區域的物件儲存空間提供視覺化檔案管理工具。

DigitalOcean Spaces 是一項對開發者友善的物件儲存服務，採用統一定價模式並內建 CDN。在 DigitalOcean Droplets 上運行工作負載的團隊，經常將備份、靜態資源和部署成品儲存在 Spaces 中。RcloneView 在 rclone 的 S3 相容後端之上增加了圖形化層，讓您可以視覺化瀏覽儲存桶、執行排程同步，並比較本機目錄與遠端儲存空間的內容 — 完全不需要使用 CLI。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 在 RcloneView 中設定 DigitalOcean Spaces

DigitalOcean Spaces 使用 S3 相容 API，因此您可以在 RcloneView 中將其設定為 S3 遠端。導覽至 **Remote 分頁 → New Remote → Amazon S3 Compatible**，然後選擇 **DigitalOcean Spaces** 作為提供者。您需要準備：

- **Access Key ID** — 在 DigitalOcean 控制面板中的 API → Spaces Keys 產生
- **Secret Access Key** — 僅在產生時顯示一次
- **Endpoint** — 依區域而異，例如 `nyc3.digitaloceanspaces.com`

儲存後，您的 Spaces 儲存桶會立即出現在 Explorer 面板中。您可以瀏覽儲存桶內容、透過拖放方式從本機資料夾上傳檔案,並開啟並排面板來比較 Droplet 的備份目錄與 Spaces 儲存桶。

<img src="/support/images/en/blog/new-remote.png" alt="Configuring DigitalOcean Spaces as an S3 remote in RcloneView" class="img-large img-center" />

## 將本機伺服器同步到 DigitalOcean Spaces

一個典型的使用情境：開發團隊在 CI 伺服器上產生建置成品,並希望每晚將其推送到 Spaces 進行長期儲存。使用 RcloneView 的 Job Manager，建立一個從本機成品目錄到 `do-spaces:artifacts-bucket/builds` 的同步工作。將排程設定為凌晨 3:00 執行，啟用校驗和驗證，並新增最大檔案大小篩選條件以排除超過 500 MB 的暫存檔案。

1:N 同步選項讓您可以同時將同一個成品目錄鏡像到 DigitalOcean Spaces 與 Amazon S3 — 這對於維護多區域備援或正在過渡到不同儲存供應商的團隊非常實用。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitoring a DigitalOcean Spaces sync job in real time" class="img-large img-center" />

## 跨區域與跨供應商傳輸

當您需要在 Spaces 區域之間移動資料（例如從 `nyc3` 移到 `sfo3`）或完全遷移到另一個 S3 相容供應商時,RcloneView 會將其作為直接的雲端對雲端傳輸來處理。開啟兩個 Explorer 面板 — 一個指向來源 Spaces 儲存桶，另一個指向目標儲存桶 — 然後使用拖放或同步精靈進行操作。

對於大型遷移，請在同步精靈的第 2 步將**檔案傳輸數量**設定為 8–16，以最大化傳輸量。RcloneView 的即時傳輸監控會顯示每個檔案的進度與整體速度，讓您可以估算大型資料集的完成時間。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-to-cloud transfer between DigitalOcean Spaces and Amazon S3 in RcloneView" class="img-large img-center" />

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 在 DigitalOcean 控制面板中產生 Spaces 存取金鑰。
3. 使用您的 Spaces 憑證與 Endpoint 在 RcloneView 中建立新的 S3 遠端。
4. 在 Job Manager 中建立以您的 Spaces 儲存桶為目標的同步工作,並設定排程。

DigitalOcean Spaces 就此成為一個完全受管理、可排程的備份目標 — 即時監控與工作歷程全都整合在同一個介面中。

---

**相關指南：**

- [使用 RcloneView 將 Google Drive 遷移到 DigitalOcean Spaces](https://rcloneview.com/support/blog/migrate-google-drive-to-digitalocean-spaces-rcloneview)
- [使用 RcloneView 將 DigitalOcean Spaces 掛載為本機磁碟機](https://rcloneview.com/support/blog/mount-digitalocean-spaces-local-drive-rcloneview)
- [使用 RcloneView 集中管理 S3、Wasabi 與 R2](https://rcloneview.com/support/blog/centralize-s3-wasabi-r2-with-rcloneview)

<CloudSupportGrid />
