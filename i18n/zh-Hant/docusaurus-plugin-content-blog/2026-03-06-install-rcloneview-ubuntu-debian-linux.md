---
slug: install-rcloneview-ubuntu-debian-linux
title: "如何在 Ubuntu 與 Debian Linux 上安裝 RcloneView — 完整設定指南"
authors:
  - tayson
description: "在 Ubuntu 22.04/24.04 與 Debian 12 上安裝 RcloneView 的逐步指南。涵蓋下載、相依套件、掛載用的 FUSE 設定，以及常見問題排解。"
keywords:
  - install rcloneview linux
  - rcloneview ubuntu
  - rcloneview debian
  - rclone gui linux
  - rcloneview linux setup
  - cloud sync tool linux
  - rclone desktop linux
  - mount cloud storage linux
  - rcloneview installation guide
  - linux cloud file manager
tags:
  - linux
  - ubuntu
  - debian
  - installation
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 如何在 Ubuntu 與 Debian Linux 上安裝 RcloneView — 完整設定指南

> RcloneView 可原生執行於 Linux。本指南將引導你在 Ubuntu 與 Debian 上完成安裝，包含用於將雲端儲存掛載為本機磁碟的 FUSE 設定。

Linux 使用者長期以來仰賴 rclone 的命令列工具來管理雲端儲存。RcloneView 在 rclone 之上新增了完整的圖形介面——雙窗格檔案總管、視覺化同步工作、排程，以及一鍵掛載。以下說明如何在 Ubuntu 與 Debian 上安裝並執行它。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 系統需求

- **作業系統**：Ubuntu 20.04、22.04、24.04 或 Debian 11、12
- **架構**：x86_64（AMD64）
- **記憶體**：最低 4 GB（大量傳輸建議 8 GB）
- **磁碟空間**：安裝需 200 MB
- **相依套件**：FUSE 3（用於掛載）、Qt 6 執行階段函式庫

## 步驟 1：下載 RcloneView

從官方網站下載 `.deb` 套件：

前往 [rcloneview.com/src/download.html](https://rcloneview.com/src/download.html) 並下載 Linux 的 `.deb` 套件。

## 步驟 2：安裝套件

使用 `dpkg` 進行安裝：

```bash
sudo dpkg -i rcloneview_*.deb
```

若有缺少的相依套件，請修復它：

```bash
sudo apt-get install -f
```

這將安裝 RcloneView 並自動拉取所需的 Qt 函式庫。

## 步驟 3：設定 FUSE 以進行掛載

若要將雲端儲存掛載為本機目錄，你需要 FUSE：

```bash
sudo apt-get install fuse3
```

驗證 FUSE 是否正常運作：

```bash
fusermount3 --version
```

### 允許非 root 使用者掛載

編輯 FUSE 設定檔：

```bash
sudo nano /etc/fuse.conf
```

取消以下這行的註解：

```
user_allow_other
```

這將允許 RcloneView 使用 `--allow-other` 旗標進行掛載，使掛載的磁碟機可供你的使用者存取。

## 步驟 4：啟動 RcloneView

從應用程式選單或終端機啟動：

```bash
rcloneview
```

首次啟動時，RcloneView 會自動偵測或下載最新的 rclone 執行檔。

## 步驟 5：新增你的第一個遠端

點選 **Add Remote（新增遠端）**並設定你的雲端服務供應商：

<img src="/support/images/en/blog/new-remote.png" alt="Add cloud remote on Linux" class="img-large img-center" />

## 步驟 6：掛載雲端儲存

將任一遠端掛載為本機目錄。像存取本機資料夾一樣存取你的 Google Drive、S3 儲存桶或 OneDrive：

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="Mount cloud storage on Linux" class="img-large img-center" />

已掛載的遠端會顯示為一般目錄——可在 Nautilus、Dolphin 或任何檔案管理員中瀏覽它們。

## 疑難排解

### 「找不到 rclone」

RcloneView 會自動內建或下載 rclone。若找不到它：

```bash
which rclone
```

若尚未安裝 rclone，RcloneView 會提示你下載它。你也可以手動安裝：

```bash
sudo apt-get install rclone
```

### 掛載失敗並出現「Permission denied（權限被拒）」

請確認已安裝 FUSE，且 `/etc/fuse.conf` 中已啟用 `user_allow_other`。接著重新啟動 RcloneView。

### Qt 函式庫錯誤

若你看到缺少 Qt 函式庫的錯誤：

```bash
sudo apt-get install libqt6widgets6 libqt6gui6 libqt6core6 libqt6network6
```

### AppImage 替代方案

若你不想進行系統層級安裝，RcloneView 也提供 AppImage：

```bash
chmod +x RcloneView-*.AppImage
./RcloneView-*.AppImage
```

AppImage 已包含所有相依套件，無需安裝即可執行。

## 開機自動啟動

若要在登入時自動啟動 RcloneView，請將其加入你桌面環境的自動啟動項目：

**GNOME（Ubuntu）：**

建立 `~/.config/autostart/rcloneview.desktop`：

```ini
[Desktop Entry]
Type=Application
Name=RcloneView
Exec=rcloneview
Hidden=false
X-GNOME-Autostart-enabled=true
```

這可確保你排程的同步工作與已掛載的磁碟機，在你登入後立即可用。

## 現在你可以做什麼

在 Linux 上執行 RcloneView 後，你可以：

- **瀏覽** 70 多家雲端服務供應商，於雙窗格檔案總管中操作。
- **掛載** 任何雲端服務為本機目錄。
- **同步** 雲端、NAS 與本機儲存之間的資料。
- **排程** 自動化備份工作。
- **比較** 資料夾內容，於同步前避免衝突。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="RcloneView running on Linux" class="img-large img-center" />

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 使用 `dpkg -i` 與 `apt-get install -f` **進行安裝**。
3. **設定 FUSE** 以進行掛載。
4. **新增遠端**、掛載、同步並排程。

---

**相關指南：**

- [將雲端儲存掛載為本機磁碟](https://rcloneview.com/support/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive)
- [建立同步工作](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [工作排程](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)
- [比較資料夾內容](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)

<CloudSupportGrid />
