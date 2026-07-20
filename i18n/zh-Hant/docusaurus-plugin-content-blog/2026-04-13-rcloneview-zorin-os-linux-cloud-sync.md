---
slug: rcloneview-zorin-os-linux-cloud-sync
title: "RcloneView 在 Zorin OS 上——雲端儲存同步與備份"
authors:
  - tayson
description: "在 Zorin OS 上安裝並使用 RcloneView 進行雲端儲存同步與備份。以圖形介面管理 Google Drive、OneDrive、S3 及 90 多種服務，適用於 Zorin OS。"
keywords:
  - RcloneView Zorin OS
  - Zorin OS 雲端儲存
  - Zorin OS 雲端同步
  - Zorin OS 雲端備份
  - RcloneView Linux Debian
  - Zorin OS 檔案管理員 雲端
  - 安裝 RcloneView Zorin
  - Linux 雲端儲存圖形介面
  - Zorin OS Google Drive
  - 以 Ubuntu 為基礎的雲端同步
tags:
  - RcloneView
  - linux
  - cloud-sync
  - installation
  - platform
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# RcloneView 在 Zorin OS 上——雲端儲存同步與備份

> 在 Zorin OS 上安裝 RcloneView，透過圖形介面管理 90 多種雲端儲存服務——在 Zorin OS 桌面上同步 Google Drive、OneDrive、Amazon S3 等服務。

Zorin OS 是一款以 Ubuntu 為基礎的 Linux 發行版，擁有熟悉且精緻的桌面介面設計——特別受到從 Windows 或 macOS 轉換過來的使用者歡迎。其 Ubuntu/Debian 基礎意味著它能與 `.deb` 套件無縫搭配，讓 RcloneView 的安裝變得簡單直接。RcloneView 是以 Flutter 打造的圖形介面桌面應用程式，需要顯示伺服器（X11 或 Wayland）以及運作中的桌面環境——Zorin OS 以 GNOME 為基礎的桌面完全符合這些需求。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 在 Zorin OS 上安裝 RcloneView

RcloneView 是透過從 [rcloneview.com](https://rcloneview.com/src/download.html) 直接下載來散布的。目前並沒有 apt 儲存庫或 Snap 套件——請勿嘗試 `apt install rcloneview` 或 `snap install rcloneview`，因為兩者都不存在。請從官方下載頁面下載適合您架構的 `.deb` 套件。

**安裝 .deb 套件：**

```bash
sudo dpkg -i rclone_view-*-linux-x86_64.deb
```

如果 `dpkg` 回報缺少相依套件，請以下列指令解決：

```bash
sudo apt install -f
```

這會在 Zorin OS 上自動安裝任何缺少的 GTK 或系統函式庫（因為 Zorin OS 繼承了 Ubuntu 的 apt 儲存庫）。

另外，您也可以使用 `.AppImage` 進行不需系統整合的可攜式安裝：

```bash
chmod +x RcloneView-*-x86_64.AppImage
./RcloneView-*-x86_64.AppImage
```

<img src="/support/images/en/blog/new-remote.png" alt="Setting up cloud storage remotes in RcloneView on Zorin OS" class="img-large img-center" />

## Zorin OS 上所需的函式庫

Zorin OS 預設安裝的 GNOME 桌面已內建 GTK+ 3.0 與 X11/Wayland。若需要系統匣支援，請安裝 AppIndicator 函式庫（若尚未安裝）：

```bash
sudo apt install libayatana-appindicator3-1
```

若需要雲端硬碟掛載（虛擬硬碟功能），請安裝 FUSE3：

```bash
sudo apt install fuse3
```

安裝完成後，可從應用程式選單或終端機啟動 RcloneView。此應用程式與 Zorin OS 桌面整合良好，包括系統匣圖示支援以及工作完成時的原生桌面通知。

## 連接雲端儲存

RcloneView 內建了 rclone 執行檔——不需要另外安裝 rclone。透過「遠端」（Remote）分頁新增您的雲端服務：點選「新增遠端」並選擇您的服務供應商。對於採用 OAuth 驗證的服務（如 Google Drive、OneDrive 和 Dropbox），系統會開啟瀏覽器視窗進行帳號驗證。對於相容 S3 的服務，請輸入您的 Access Key、Secret Key 及端點網址。

Zorin OS 以 GNOME 為基礎的桌面能順暢處理 OAuth 瀏覽器重新導向——驗證視窗會在您的預設瀏覽器中開啟，並將認證資訊自動傳回 RcloneView。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-to-cloud sync running in RcloneView on Zorin OS" class="img-large img-center" />

## 同步與掛載雲端儲存

設定好遠端後，可使用同步精靈建立備份或搬遷工作。選擇來源與目的地遠端、設定傳輸選項與篩選條件，並可選擇性地排程定期執行（PLUS 授權）。RcloneView 在 Zorin OS 上以圖形介面應用程式方式執行——需要有作用中的桌面工作階段與顯示伺服器。它無法直接設定為 systemd 背景服務；若需要在沒有使用者工作階段的情況下執行無人值守的排程工作，請使用 rclone 本身的 `rclone rcd` 搭配 systemd 服務，並從 RcloneView 連接至該服務。

若要將雲端儲存掛載為本機目錄，請在「遠端」分頁中使用「掛載管理員」（Mount Manager）。在 Zorin OS 上，指定掛載點路徑後點選「儲存並掛載」。掛載後的資料夾會出現在 Nautilus（Zorin OS 的預設檔案管理員）中，可以像存取任何本機目錄一樣使用。

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="Mounting Google Drive as a local folder on Zorin OS with RcloneView" class="img-large img-center" />

## 快速上手

1. **下載 RcloneView**：前往 [rcloneview.com](https://rcloneview.com/src/download.html)——選擇適用於 x86_64 的 Linux `.deb` 版本。
2. 以 `sudo dpkg -i rclone_view-*-linux-x86_64.deb` 進行安裝，若缺少相依套件則執行 `sudo apt install -f`。
3. 若需要掛載與系統匣支援，請安裝 `fuse3` 與 `libayatana-appindicator3-1`。
4. 新增您的雲端遠端，並在熟悉的 Zorin OS 桌面環境中開始同步。

Zorin OS 與 Ubuntu 的相容性讓 RcloneView 的安裝變得簡單直接，為使用者提供一套以圖形介面驅動的雲端儲存管理工具，自然融入 Zorin OS 精緻的桌面工作流程中。

---

**相關指南：**

- [在 Ubuntu 與 Debian Linux 上安裝 RcloneView](https://rcloneview.com/support/blog/install-rcloneview-ubuntu-debian-linux)
- [RcloneView 在 Pop!_OS Linux 上——雲端同步](https://rcloneview.com/support/blog/rcloneview-pop-os-linux-cloud-sync)
- [RcloneView 在 Fedora、RHEL 與 CentOS Linux 上](https://rcloneview.com/support/blog/rcloneview-fedora-rhel-centos-linux)

<CloudSupportGrid />
