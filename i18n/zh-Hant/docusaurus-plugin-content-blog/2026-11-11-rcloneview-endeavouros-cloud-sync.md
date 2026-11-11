---
slug: rcloneview-endeavouros-cloud-sync
title: "在 EndeavourOS 上使用 RcloneView — 雲端儲存同步與備份"
authors:
  - steve
description: "使用官方 AppImage 在 EndeavourOS 上執行 RcloneView。涵蓋 GTK+3 與 FUSE 需求、掛載雲端硬碟，以及同步 90 多個雲端服務供應商。"
keywords:
  - RcloneView EndeavourOS
  - EndeavourOS 雲端同步
  - EndeavourOS rclone GUI
  - 基於 Arch 的 Linux 雲端備份
  - RcloneView AppImage
  - EndeavourOS 掛載雲端硬碟
  - EndeavourOS Google Drive 同步
  - Linux 多雲檔案管理器
  - 滾動發行版雲端備份
tags:
  - RcloneView
  - linux
  - platform
  - cloud-sync
  - installation
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 在 EndeavourOS 上使用 RcloneView — 雲端儲存同步與備份

> EndeavourOS 是附有即用桌面的滾動式 Arch 基礎系統，官方 RcloneView AppImage 無需任何第三方套件即可在其上執行。

EndeavourOS 使用者通常想要最新的軟體，並盡量減少手動設定。雲端儲存往往是其中的缺口：Google Drive、OneDrive 和 S3 儲存貯體在這裡沒有原生桌面用戶端，而在多個 CLI 設定之間切換又很繁瑣。RcloneView 在 Windows、macOS 和 Linux 上以單一視窗掛載並同步 90 多個供應商，並隨附內建的 rclone。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 使用官方 AppImage 安裝

RcloneView 僅透過 [rcloneview.com](https://rcloneview.com/src/download.html) 發布。沒有 AUR 套件，因此請忽略在其他地方看到的 `yay` 或 `paru` 安裝說明。對於基於 Arch 的系統，AppImage 是自然的選擇。下載符合你架構（x86_64 或 aarch64）的版本，設定執行權限後啟動：

```bash
chmod +x RcloneView-*-x86_64.AppImage
./RcloneView-*-x86_64.AppImage
```

RcloneView 是 Flutter 桌面應用程式，而不是 Qt 應用程式。它需要 GTK+3、正在執行的 X11 或 Wayland 工作階段，以及用於系統匣圖示的 AppIndicator 程式庫。EndeavourOS 的預設桌面版本（KDE Plasma、Xfce、GNOME 等）已提供顯示伺服器，通常也包含 GTK+3。掛載功能需要安裝 FUSE，建議使用 fuse3（`sudo pacman -S --needed fuse3`）。

<img src="/support/images/en/blog/new-remote.png" alt="在 EndeavourOS 上的 RcloneView 中新增雲端遠端" class="img-large img-center" />

由於 AppImage 是自給自足的，滾動更新 `pacman -Syu` 不會取代它。自動更新僅適用於 macOS，因此在 Linux 上需從同一頁面下載較新的 AppImage 來更新。

## 連接遠端並掛載雲端硬碟

開啟 **Remote > New Remote**。Google Drive、Dropbox、OneDrive、Box 和 pCloud 透過瀏覽器以 OAuth 登入。S3、Backblaze B2 和 Cloudflare R2 需要輸入存取金鑰。你的遠端會以分頁形式顯示在 Explorer 中，你也可以分割出最多四個面板，將 NAS 共用資料夾與雲端儲存貯體並排瀏覽。

若要在 Dolphin 或 Thunar 中處理雲端檔案，請掛載遠端。點選面板工具列中的 Mount 圖示，或開啟 Mount Manager 建立新的掛載。在 Linux 上，你需要選擇一個本機路徑，例如 `~/cloud/gdrive`，預設的 `writes` 快取模式即可應付大多數編輯需求。只有在其他本機使用者需要存取該掛載時，才啟用 **Allow other**。

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="在 Linux 上從 RcloneView 檔案瀏覽器掛載雲端遠端" class="img-large img-center" />

## 同步與排程備份

想像一台有 `~/Projects` 和 `~/Documents` 的開發者工作站。建立一個從本機磁碟到 Backblaze B2 的同步工作，在 Step 3 加入 `.git/` 篩選器，並執行試執行（Dry Run）以準確查看將傳輸的內容。單向同步只會修改目的地。雙向同步（Beta）仍屬實驗性質，請先在非關鍵資料夾上測試。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Linux 備份工作期間 RcloneView 的傳輸進度監控" class="img-large img-center" />

使用 PLUS 授權時，Step 4 會加入 crontab 風格的排程功能，讓工作在 RcloneView 常駐系統匣時於每晚執行。RcloneView 需要桌面工作階段才能執行，無法作為 systemd 服務執行。在無頭 Arch 伺服器上，請在伺服器上執行 `rclone rcd`，再從桌面透過 Connect Manager 連線。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="在 RcloneView 中建立排程同步工作" class="img-large img-center" />

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**，選擇符合你架構的 Linux AppImage。
2. 為 AppImage 設定執行權限，若需要掛載則安裝 `fuse3`，然後從桌面工作階段啟動。
3. 新增雲端遠端，並掛載你想在檔案管理器中使用的遠端。
4. 建立同步工作，以試執行測試，若有 PLUS 則設定排程。

滾動發行版桌面加上單一多雲視窗，就能打造低維護成本的備份環境。

---

**相關指南：**

- [VFS 快取掛載效能](https://rcloneview.com/support/blog/vfs-cache-mount-performance-rcloneview)
- [修正 Rclone 掛載 FUSE 錯誤](https://rcloneview.com/support/blog/fix-rclone-mount-fuse-errors-rcloneview)
- [Connection Manager — 內建與外部 Rclone](https://rcloneview.com/support/blog/rcloneview-connection-manager-embedded-external)

<CloudSupportGrid />
