---
slug: mount-cloud-storage-local-drive-guide-rcloneview
title: "將雲端儲存掛載為本機磁碟機 — 把 Google Drive、S3 和 OneDrive 當作本機資料夾使用的完整指南"
authors:
  - tayson
description: "將 Google Drive、AWS S3、OneDrive 及 70 多種雲端服務商當作電腦上的本機磁碟機使用。透過 RcloneView 掛載雲端儲存的完整指南。"
keywords:
  - mount cloud storage local drive
  - mount google drive local
  - mount s3 local drive
  - mount onedrive local folder
  - cloud storage as local drive
  - rclone mount guide
  - map cloud drive letter
  - cloud storage network drive
  - mount dropbox local
  - virtual drive cloud storage
tags:
  - mount
  - feature
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 將雲端儲存掛載為本機磁碟機 — 把 Google Drive、S3 和 OneDrive 當作本機資料夾使用的完整指南

> 如果你的 Google Drive、S3 儲存桶或 OneDrive 能像一般資料夾一樣出現在電腦上呢？在任何應用程式中開啟檔案、直接儲存到雲端、在檔案總管中瀏覽所有內容 — 完全不需要瀏覽器。

將雲端儲存掛載為本機磁碟機，能讓任何雲端服務商看起來、用起來就像插在電腦上的 USB 隨身碟或網路共用磁碟機。在 Photoshop 中開啟 Google Drive 檔案、將 Excel 報表直接儲存到 S3、在 Finder 中瀏覽你的 Dropbox。RcloneView 讓這一切在 70 多種雲端服務商上都能實現。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 什麼是雲端掛載？

當你「掛載」雲端儲存時，你的作業系統會建立一個對應到你雲端帳號的虛擬磁碟機。這些檔案會出現在你的檔案總管（Finder、檔案總管、Nautilus）中，就像其他磁碟機一樣。在幕後，rclone 負責處理讀寫檔案所需的 API 呼叫。

### 運作方式

```
Your App → Local Mount Point → rclone → Cloud API → Cloud Storage
```

當你開啟檔案時，rclone 會依需求下載該檔案；當你儲存時，rclone 會上傳變更內容。對你的應用程式來說，這一切都是透明無感的。

## 使用 RcloneView 掛載

### 從遠端瀏覽器操作

右鍵點擊任一遠端，選擇 Mount：

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="Mount from remote explorer" class="img-large img-center" />

### 從掛載管理員操作

使用掛載管理員以取得更多掛載設定的控制權：

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="Mount Manager interface" class="img-large img-center" />

## 各平台的設定方式

### Windows

在 Windows 上，掛載的雲端儲存會以磁碟機代號的形式出現（例如，Google Drive 為 `G:`，S3 為 `S:`）。

**需求：**
- WinFsp（Windows File System Proxy）— RcloneView 可以幫你安裝。

掛載完成後，雲端磁碟機會與本機磁碟機一起出現在檔案總管中。任何 Windows 應用程式都可以對其進行讀寫。

### macOS

在 macOS 上，掛載的儲存空間會出現在 `/Volumes/` 以及 Finder 的側邊欄中。

**需求：**
- macFUSE — 從 macfuse.io 下載。

掛載完成後，你的雲端儲存會以磁碟區的形式出現在 Finder 中。

### Linux

在 Linux 上，掛載的儲存空間會出現在你選擇的掛載點（例如 `/mnt/gdrive`）。

**需求：**
- FUSE 3 — 在 Ubuntu/Debian 上執行 `sudo apt install fuse3`。

## 掛載雲端後可以做的事

### 在任何應用程式中開啟雲端檔案

- 在 LibreOffice 中編輯 Google Drive 試算表。
- 在 Photoshop 中開啟 S3 中的圖片。
- 在 VLC 中播放 OneDrive 中的媒體檔案。
- 對 Dropbox 上的檔案執行腳本。

### 直接儲存至雲端

任何應用程式中的「另存新檔」對話框，都可以直接儲存到你掛載的雲端磁碟機，無需額外的上傳步驟。

### 使用腳本自動化

掛載的雲端儲存可與任何命令列工具搭配使用：

```bash
# Copy local backups to mounted S3
cp /backups/database.sql /mnt/s3-backup/

# Process files from mounted Google Drive
python analyze.py /mnt/gdrive/reports/*.csv
```

### 在檔案總管中瀏覽

以瀏覽本機檔案的相同方式探索你的雲端儲存 — 包含資料夾、搜尋和預覽功能。

## 效能提升技巧

### 快取

啟用 VFS（虛擬檔案系統）快取以獲得更好的效能：

- **唯讀工作負載**：使用最少量的快取即可。
- **讀寫工作負載**：啟用完整快取以獲得更流暢的效能。
- **媒體串流**：使用預先讀取快取。

### 緩衝區大小

增加緩衝區大小可加快大型檔案的串流速度。預設值適用於大多數檔案，但影片播放會因較大的緩衝區而受益。

### 目錄快取

對於包含數千個檔案的目錄，啟用目錄快取可避免重複的 API 呼叫，讓瀏覽感覺更順暢快速。

## 同時掛載多個雲端

一次掛載你所有的雲端服務：

| 雲端服務 | 掛載點（Windows） | 掛載點（Linux） |
|-------|----------------------|-------------------|
| Google Drive | `G:` | `/mnt/gdrive` |
| OneDrive | `O:` | `/mnt/onedrive` |
| AWS S3 | `S:` | `/mnt/s3` |
| Dropbox | `D:` | `/mnt/dropbox` |
| Backblaze B2 | `B:` | `/mnt/b2` |

當所有雲端都掛載完成後，你的檔案總管就會成為所有儲存空間的統一檢視畫面。

## 掛載 vs 同步：何時該用哪一種

| 情境 | 使用掛載 | 使用同步 |
|----------|:---------:|:--------:|
| 偶爾開啟檔案 | ✅ | ❌ |
| 離線工作 | ❌ | ✅ |
| 大型媒體串流 | ✅（搭配快取） | ❌ |
| 需要完整本機副本 | ❌ | ✅ |
| 應用程式整合 | ✅ | ❌ |
| 備份/封存 | ❌ | ✅ |

當你想要按需存取而不下載所有內容時，**掛載**是最佳選擇；當你需要完整的本機副本以供離線工作或備份時，**同步**是最佳選擇。

## 常見問題

### 「找不到掛載點」

先建立掛載點目錄（Linux/macOS）：

```bash
sudo mkdir -p /mnt/gdrive
```

在 Windows 上，選擇一個未使用的磁碟機代號。

### 檔案清單載入緩慢

大型目錄（1 萬個以上檔案）在首次存取時可能需要一些時間。啟用目錄快取可加快後續清單載入速度。

### 應用程式相容性

大多數應用程式都能與掛載磁碟機正常搭配使用。不過，某些需要快速隨機存取的應用程式（資料庫、處理大型專案的影片編輯軟體）搭配已同步的本機副本可能會有更好的效能表現。

## 開始使用

1. **下載 RcloneView**，前往 [rcloneview.com](https://rcloneview.com/src/download.html)。
2. **安裝 FUSE**（macOS 上為 macFUSE，Windows 上為 WinFsp，Linux 上為 fuse3）。
3. **新增你的雲端遠端**。
4. **掛載**，從遠端瀏覽器或掛載管理員進行操作。
5. **存取你的雲端**，在 Finder、檔案總管或 Nautilus 中，就像使用其他磁碟機一樣。

你的雲端儲存，你的檔案總管，不再需要瀏覽器分頁。

---

**相關指南：**

- [將雲端儲存掛載為本機磁碟機](https://rcloneview.com/support/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive)
- [建立同步工作](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [比較資料夾內容](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)

<CloudSupportGrid />
