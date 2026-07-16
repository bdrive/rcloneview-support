---
slug: mount-pcloud-local-drive-rcloneview
title: "在 Windows 與 macOS 上使用 RcloneView 將 pCloud 掛載為本機磁碟機 — 免同步即可存取檔案"
authors:
  - tayson
description: "將 pCloud 掛載為磁碟機代號或磁碟區，無需完整同步即可即時瀏覽檔案，並使用 RcloneView 調整快取設定以獲得快速、穩定的存取體驗。"
keywords:
  - rcloneview
  - pcloud mount
  - cloud drive
  - vfs cache
  - windows
  - macos
  - cloud storage
  - rclone
  - multi cloud
  - drive letter
  - volume mount
  - file explorer
  - finder
  - scheduler
  - job history
  - transfer monitor
  - cache settings
  - offline access
  - read ahead
  - compare
  - sync
  - checksum
  - gui
  - cloud backup
  - mount manager
tags:
  - pcloud
  - mount
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 在 Windows 與 macOS 上使用 RcloneView 將 pCloud 掛載為本機磁碟機 — 免同步即可存取檔案

> 跳過完整同步。使用 RcloneView 將 pCloud 掛載為本機磁碟機，在檔案總管或 Finder 中瀏覽，並透過調校過的快取設定按需串流檔案。

pCloud 提供彈性的雲端儲存，但將所有內容複製到每台裝置既浪費時間又佔用磁碟空間。透過 RcloneView，你可以將 pCloud 掛載為本機磁碟機代號或磁碟區，按需擷取檔案，並控制頻寬用量。不需要記住任何 CLI 參數；只要連線、掛載，即可開始使用。

<!-- truncate -->

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />


## 為什麼要用掛載而非同步？

- 節省空間：只瀏覽並開啟你需要的內容，無需完整的本機鏡像。
- 啟動更快：只需對應一次磁碟機，即可省去冗長的初次同步。
- 安全編輯：快取會寫入本機，並交由 RcloneView 處理重試與續傳。

## 步驟 1 — 在 RcloneView 中連線 pCloud

- 透過 `+ New Remote`（WebDAV 或 OAuth 流程）新增 pCloud。指南：[add-oath-online-login](/howto/remote-storage-connection-settings/add-oath-online-login)。
- 在 **Remote Explorer** 中列出資料夾，確認遠端運作正常。

## 步驟 2 — 建立掛載（Windows 或 macOS）

- 開啟 **Mount Manager** 並選擇你的 pCloud 遠端。指南：[mount-cloud-storage-as-a-local-drive](/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive)。
- 選擇目標：
  - Windows：使用 `cmount` 選擇一個磁碟機代號（例如 `P:`）。
  - macOS：選擇一個掛載路徑（例如 `/Volumes/pcloud`）。
- 儲存並掛載。你應該會立即在檔案總管或 Finder 中看到該磁碟機。

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="Configure a mount from Mount Manager" class="img-large img-center" />


## 步驟 3 —（選用）在進行大量變更前用 Compare 驗證

- 在進行批次搬移或清理前，使用 **Compare** 預覽差異：[compare-folder-contents](/howto/rcloneview-basic/compare-folder-contents)。
- 在不執行具破壞性同步的情況下，找出較新、遺失或不一致的檔案。  

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare shared folder and My Drive contents" class="img-large img-center" />


## 步驟 4 —（選用）為重要資料夾建立同步工作

- 讓重要資料夾（例如 `Projects/` 或 `Photos/`）鏡像到另一個雲端或 NAS：[create-sync-jobs](/howto/rcloneview-basic/create-sync-jobs)。
- 為求安全，先從 **copy** 開始；等信任目標端後再切換為 **sync**。
- 排程在離峰時段執行，讓掛載在你工作時仍保持順暢。  

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running an encrypted sync job in RcloneView" class="img-large img-center" />


掛載 pCloud 一次、調校快取，讓你的儲存空間保持精簡。RcloneView 讓雲端磁碟機用起來就像本機磁碟，且無需承擔完整同步的風險與開銷。

<CloudSupportGrid />
