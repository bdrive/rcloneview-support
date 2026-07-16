---
slug: plex-cloud-mount-rcloneview
title: "使用 Plex 與 RcloneView 串流雲端電影——將 Google Drive、Dropbox 或 S3 掛載為您的媒體庫"
authors:
  - tayson
description: 使用 RcloneView 將 Google Drive、Dropbox、Wasabi 或 S3 掛載為本機磁碟，讓 Plex 能夠建立索引。無需下載即可串流雲端儲存的電影——完全不需要 CLI。
keywords:
  - plex cloud mount
  - google drive plex
  - rclone mount plex
  - cloud movie server
  - plex cloud streaming
  - rcloneview
  - vfs cache plex
tags:
  - RcloneView
  - plex
  - google-drive
  - onedrive
  - dropbox
  - s3
  - mount
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 使用 Plex 與 RcloneView 串流雲端電影——將 Google Drive、Dropbox 或 S3 掛載為您的媒體庫

> 磁碟空間不夠了嗎？使用 RcloneView 將您的雲端掛載為本機磁碟，讓 Plex 直接從中串流——順暢、可靠，且無需命令列設定。

Plex 在整理與串流媒體方面表現出色，但本機儲存空間很快就會用完。與此同時，雲端儲存桶——Google Drive、Dropbox、Wasabi、Cloudflare R2、S3——提供了便宜且幾乎無限的空間。唯一缺少的環節，是一個能讓 Plex 把這些雲端資料夾當作本機路徑「看見」的簡潔方式。Rclone 的 `mount` 指令解決了這個問題，而 RcloneView 則把這股力量包裝成簡單的圖形化介面：選擇一個雲端資料夾、選擇磁碟機代號或掛載路徑、啟用快取，然後開始使用。不需要終端機，也不需要記住任何參數。

<!-- truncate -->

RcloneView 底層使用經過驗證的 rclone 引擎。您可以連接所有主要的儲存服務商，將它們掛載為本機資料夾或磁碟機代號，並讓 Plex 指向這些路徑。只要配置正確的 VFS 快取設定，Plex 就能以最小的緩衝來掃描、跳轉並從雲端儲存串流播放。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

## Plex 與 RcloneView 如何協同運作

Plex 會掃描一個本機路徑（例如 Windows 上的 `X:\Movies`，或 macOS 上的 `/Volumes/Cloud/Movies`）。RcloneView 將您的雲端資料夾掛載到該路徑上，讓 Plex 將其視為普通的本機目錄。

文字示意圖
[Google Drive 電影] ⇄ [RcloneView 掛載 (X:/ 或 /Volumes/Cloud)] ⇄ [Plex 媒體庫]

實用文件

- RcloneView 掛載基礎：[將雲端儲存掛載為本機磁碟](/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive)
- 透過內建 Rclone 使用進階參數：[一般設定](/howto/rcloneview-basic/general-settings)
- 新增 OAuth 登入（Google/Dropbox/OneDrive）：[透過瀏覽器登入連線](/howto/remote-storage-connection-settings/add-oath-online-login)
- S3/Wasabi/R2 設定：[配置 S3 儲存](/howto/remote-storage-connection-settings/s3) · [Cloudflare R2 憑證](/howto/cloud-storage-setting/cloudflare-r2-credential)

## 只需幾次點擊即可掛載並串流

連接雲端、建立掛載，然後讓 Plex 指向它，就是這麼簡單。

1. 連接遠端

- Google Drive、OneDrive、Dropbox、S3/Wasabi/R2 都支援。透過 `+ New Remote` 逐一新增。
- 指南：[基於 OAuth 的服務商](/howto/remote-storage-connection-settings/add-oath-online-login) · [S3 相容儲存](/howto/remote-storage-connection-settings/s3) · [Dropbox 後端說明](https://rclone.org/dropbox/)

<img src="/support/images/en/howto/remote-storage-connection-settings/add-new-remote.png" alt="Add a new remote in RcloneView" class="img-large img-center" />

2. 建立掛載

- 方法一——從遠端瀏覽器：[從遠端瀏覽器掛載](/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive#method-1-mount-from-remote-explorer)
- 方法二——透過掛載管理器：[透過掛載管理器掛載](/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive#method-2-mount-via-mount-manager)

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="Mount from Remote Explorer in RcloneView" class="img-large img-center" />

3. 選擇掛載目標

- Windows：選擇一個磁碟機代號（例如 `X:`）。在底層，RcloneView 會使用 `cmount` 以確保相容性。
- macOS：在 `/Volumes/Cloud` 下選擇掛載路徑（或自訂路徑）。
- Linux：選擇掛載目錄（例如 `/mnt/plex-cloud`）。

4. 為 Plex 配置快取

- 在掛載對話框的進階選項中，將 **Cache mode** 設為 `full`，以獲得最佳的 Plex 相容性。
- 可選擇性設定 **Cache max size**（例如 10–50 GB）與 **Dir cache time**。
- 您也可以在內建 Rclone → **Global Rclone Flags** 中調整全域參數，例如 `--vfs-read-ahead`。參見：/support/howto/rcloneview-basic/general-settings

5. 掛載並驗證

- 點擊「Save and mount」，然後在檔案總管中開啟掛載資料夾，確認可以瀏覽電影。

6. 加入 Plex

- Plex → Libraries → Add Library → Add folders → 選擇您掛載的路徑（`X:\Movies` 或 `/Volumes/Cloud/Movies`）。讓 Plex 掃描並建立索引。

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="Configure mount from Mount Manager" class="img-large img-center" />

## 優化效能以獲得流暢播放

以下設定能減少緩衝，並在從雲端儲存串流高位元速率檔案時改善跳轉表現。

- VFS 快取模式：使用 `full` 進行掃描與跳轉（轉碼與縮圖生成也會更可靠）。
- 快取大小：若有可用的 SSD 空間，可分配 10–50 GB。
- 預先讀取：透過 Global Rclone Flags 增加 `--vfs-read-ahead`（例如 64M–256M）。
- 頻寬限制：若您的網路繁忙，設定一個合理的限制，讓 Plex 在尖峰時段仍保持流暢。
- 將 Plex 中繼資料保留在本機：將中繼資料與縮圖儲存在本機 SSD，僅將媒體檔案保留在雲端。

注意：快取大小與預先讀取設定取決於實際工作負載。建議先從保守設定開始，並在監控播放與磁碟活動的同時逐步調整。

## 誰能從中受益最多

- 家庭影院收藏者：將 10 TB 的電影典藏保存在 Google Drive 或 Dropbox 中，透過 Plex 串流播放而無需擴充本機磁碟。
- NAS 混合架構：將 NAS 用作 SSD 快取層，而主要媒體庫則透過掛載存放在 S3/Wasabi/R2 中。
- 開發者與家庭實驗室愛好者：將 RcloneView 掛載點接入 Docker 化的 Plex；使用已儲存的掛載並在登入時自動掛載，以確保可靠性。

## 疑難排解要點

- Plex 中看不到媒體庫路徑：確認掛載處於作用中狀態，且執行 Plex 的作業系統使用者有權存取該掛載路徑。
- 重新開機後掛載消失：在掛載對話框中啟用 **Auto mount**，並考慮在設定中啟用「Launch at login」。→ [將雲端儲存掛載為本機磁碟](/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive) · [一般設定](/howto/rcloneview-basic/general-settings)
- 掃描緩慢或播放卡頓：使用 `Cache mode: full`，增加快取大小與 `--vfs-read-ahead`，並將中繼資料保留在本機。
- API 限制或節流：安排在離峰時段進行掃描；若媒體庫非常龐大，可使用「比較與同步」來篩選 Plex 要掃描的內容。→ [比較資料夾內容](/howto/rcloneview-basic/compare-folder-contents) · [建立同步工作](/howto/rcloneview-basic/create-sync-jobs)

## 雲端電影，本機般的體驗

使用 RcloneView 進行掛載，能讓 Plex 將您的雲端當作快速的本機磁碟來對待。您既能保有 Google Drive、Dropbox、Wasabi 或 S3 的靈活性與擴充性，Plex 也能提供同樣精緻的體驗——同時擺脫磁碟空間不足的困擾。設定掛載、讓 Plex 指向它、調整快取，然後按下播放鍵。

準備好試試看了嗎？立即下載 RcloneView，打造您的雲端動力 Plex 媒體庫。


<CloudSupportGrid />
