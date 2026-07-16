---
slug: stream-sync-putio-media-nas-cloud-rcloneview
title: "使用 RcloneView 串流並同步 Put.io 媒體檔案到您的 NAS 或雲端硬碟"
authors:
  - tayson
description: "自動將 Put.io 下載內容同步到您的 Synology NAS、Plex 媒體庫或 Google Drive — 使用 RcloneView 整理媒體檔案並保持所有內容都有備份。"
keywords:
  - putio sync nas
  - putio download manager
  - putio to google drive
  - putio file manager
  - putio rclone
  - putio media sync
  - putio backup tool
  - putio plex integration
  - putio to nas
  - putio automated download
tags:
  - RcloneView
  - putio
  - cloud-storage
  - media
  - sync
  - nas
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 使用 RcloneView 串流並同步 Put.io 媒體檔案到您的 NAS 或雲端硬碟

> Put.io 非常適合雲端下載，但要將這些檔案整理並傳送到您的 NAS 或 Plex 伺服器，通常需要手動傳輸。RcloneView 能將整個流程自動化。

Put.io 是一項熱門的雲端服務，能為您抓取檔案 — 種子檔、直接連結等等 — 並將它們儲存在雲端以供即時串流播放。但檔案一旦到了 Put.io 上，大多數使用者仍需手動將它們下載到本機硬碟或 NAS。RcloneView 可直接連接 Put.io，並將整個工作流程自動化：將新下載的內容同步到您的 Synology NAS、Plex 媒體庫、Google Drive 或任何其他儲存空間。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 為何要自動化 Put.io 同步？

- **手動下載很繁瑣** — 每個新檔案都需要開啟瀏覽器、點擊下載、等待，再移動檔案。
- **NAS/Plex 整合** — 讓檔案自動落入您的 Plex 媒體庫資料夾，即可立即取用。
- **儲存空間管理** — Put.io 的儲存空間有限。自動同步能讓您在檔案安全轉移到其他地方後釋放空間。
- **多目的地傳送** — 同時將媒體傳送到您的 NAS、雲端備份，以及可攜式硬碟。

## 連接 Put.io

1. 開啟 RcloneView 並點擊 **新增遠端**。
2. 從提供者清單中選擇 **Put.io**。
3. 透過 OAuth 進行驗證。
4. 儲存 — 您的 Put.io 檔案現在即可瀏覽。

<img src="/support/images/en/blog/new-remote.png" alt="Add Put.io remote in RcloneView" class="img-large img-center" />

## 瀏覽並管理您的 Put.io 檔案

在檔案總管中檢視您整個 Put.io 媒體庫，並與您的本機硬碟或其他雲端並列顯示：

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Browse Put.io files alongside NAS" class="img-large img-center" />

## 同步工作流程

### Put.io → Synology NAS（Plex/Jellyfin）

自動將媒體檔案傳送到您的媒體伺服器：

1. 建立複製工作：Put.io → NAS 媒體資料夾（例如 `/volume1/Plex/Movies`）。
2. 排程每小時執行一次 — 新的 Put.io 下載內容會自動落入 Plex。
3. Plex 偵測到新檔案後即可供串流播放。

### Put.io → Google Drive

保留一份 Put.io 下載內容的雲端備份：

1. 建立複製工作：Put.io → Google Drive 資料夾。
2. 透過 Google Drive 隨時隨地存取您的媒體內容。

### Put.io → 外接硬碟

維護離線媒體封存：

1. 建立複製工作：Put.io → 外接硬碟路徑。
2. 連接硬碟時手動執行，若硬碟一直保持連接，也可設定排程。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Run Put.io sync job" class="img-large img-center" />

## 自動化整個流程

1. 使用[工作排程](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)**排程每小時同步**。
2. **使用批次工作**依序將 Put.io 同步到多個目的地。
3. 新檔案同步完成時，透過 [Telegram](https://rcloneview.com/support/blog/rcloneview-telegram-remote-control) **接收通知**。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule Put.io sync" class="img-large img-center" />

## 監控傳輸狀態

即時觀看檔案從 Put.io 流向您的 NAS：

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitor Put.io file transfers" class="img-large img-center" />

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Put.io sync job history" class="img-large img-center" />

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 透過 OAuth **新增 Put.io** 作為遠端。
3. **新增您的目的地**（NAS、Google Drive、外接硬碟）。
4. **建立複製工作**並設定排程。
5. **享受自動化的媒體傳送** — 檔案會自動從 Put.io 傳送到您的 Plex 媒體庫，完全不需動手。

停止手動從 Put.io 下載檔案。RcloneView 能將其轉變為自動化媒體管線，將檔案精準傳送到您想要的位置。

---

**相關指南：**

- [透過瀏覽器登入新增遠端（OAuth）](https://rcloneview.com/support/howto/remote-storage-connection-settings/add-oath-online-login)
- [瀏覽與管理遠端](https://rcloneview.com/support/howto/rcloneview-basic/browse-and-manage-remote-storage)
- [建立同步工作](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [工作排程](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)
- [Synology NAS 自動偵測與連線](https://rcloneview.com/support/tutorials/synology-nas-cloud-transfer)

<CloudSupportGrid />
