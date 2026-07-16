---
slug: rcloneview-raspberry-pi-cloud-sync
title: "RcloneView 於 Raspberry Pi 上——雲端儲存同步與備份"
authors:
  - tayson
description: "在具備桌面環境的 Raspberry Pi 上執行 RcloneView，打造全天候雲端備份與同步方案。了解安裝方式、VNC 存取以及關鍵需求。"
keywords:
  - RcloneView Raspberry Pi
  - Raspberry Pi 雲端同步
  - Raspberry Pi 雲端備份
  - rclone Raspberry Pi GUI
  - Raspberry Pi 桌面雲端
  - 全天候備份站
  - ARM Linux 雲端同步
  - Raspberry Pi 儲存
tags:
  - raspberry-pi
  - linux
  - installation
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# RcloneView 於 Raspberry Pi 上——雲端儲存同步與備份

> 執行桌面環境的 Raspberry Pi 是理想的全天候雲端備份站——而 RcloneView 則能將它打造成功能完整的雲端儲存管理中心。

Raspberry Pi 低耗電、體積小巧且與 Linux 相容的特性，使其成為家用伺服器與備份站專案的熱門選擇。安裝 RcloneView 後，Pi 就能化身為強大的雲端同步裝置，持續將檔案備份至 Google Drive、Backblaze B2、Amazon S3，或是其他 90 多種支援的服務——全部透過圖形化介面管理，不需要使用命令列。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 需要桌面環境

在開始之前，有個關鍵需求必須先了解：**RcloneView 需要 GUI／顯示環境，無法在無頭（headless）模式下執行**。如果你的 Raspberry Pi 執行的是 Raspberry Pi OS Lite（伺服器／無頭版本），RcloneView 將無法啟動。你必須使用**具備桌面環境的 Raspberry Pi OS**（或是在精簡版作業系統上安裝 LXDE、XFCE 等桌面環境）。

這並非 RcloneView 特有的限制——而是所有桌面 GUI 應用程式共通的特性。基於 LXDE 的 Raspberry Pi Desktop 環境運作良好，且已內建於官方 Raspberry Pi OS 映像檔中。桌面環境啟動後，RcloneView 的安裝與運作方式就與在其他 Linux 系統上完全相同。

<img src="/support/images/en/blog/new-remote.png" alt="RcloneView running on Raspberry Pi desktop environment" class="img-large img-center" />

## 在 Raspberry Pi 上安裝 RcloneView

從 [rcloneview.com](https://rcloneview.com/src/download.html) 下載對應的 Linux 安裝包。RcloneView 提供 **.AppImage**、**.deb** 與 **.rpm** 三種 Linux 格式——目前沒有 AUR、Snap、Flatpak、Homebrew 或 APT 套件庫版本。若使用 Raspberry Pi，請選擇 ARM64 版本：

- **.AppImage**：賦予執行權限（`chmod +x RcloneView*.AppImage`）後即可直接執行，無需安裝。
- **.deb**：在 Raspberry Pi OS（基於 Debian）上使用 `sudo dpkg -i rcloneview*.deb` 進行安裝。

兩種安裝包都內建了 rclone 執行檔，因此不需要另外安裝 rclone。首次啟動後，RcloneView 就會出現在 Pi 的應用程式選單中。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitoring a cloud sync job on Raspberry Pi with RcloneView" class="img-large img-center" />

## 透過 VNC 或 X11 轉發進行遠端存取

一個相當實用的設定方式，是讓 Raspberry Pi 在實體顯示器上以無頭模式運作，並透過 **VNC** 或 SSH 上的 **X11 轉發**來遠端存取桌面環境。在 Pi 上啟用 VNC 伺服器（透過 `raspi-config` > Interface Options > VNC），再從主要電腦使用 VNC 用戶端連線，即可看到執行 RcloneView 的完整 Pi 桌面。

若使用 X11 轉發，可透過 `ssh -X pi@<pi-ip>` 連線，並從 SSH 工作階段中啟動 RcloneView——應用程式視窗會顯示在你的主要電腦螢幕上。這兩種方式都能讓你在本地網路的任何位置管理以 Pi 為基礎的備份站，而不需要在 Pi 上接上顯示器。

若擁有 PLUS 授權，你可以排程同步工作自動執行，讓 Pi 無人值守地完成備份任務——只需透過 VNC 連線即可查看工作歷史紀錄或調整設定。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling cloud backup jobs on Raspberry Pi in RcloneView" class="img-large img-center" />

## 開始使用

1. **安裝具備桌面環境的 Raspberry Pi OS**——完整桌面版本，而非 Lite 版本。
2. **下載 RcloneView**，前往 [rcloneview.com](https://rcloneview.com/src/download.html)——選擇 ARM64 版本的 .deb 或 .AppImage。
3. 安裝或執行安裝包，並從 Pi 桌面啟動 RcloneView。
4. 新增你的雲端遠端，並透過工作精靈設定同步工作。
5. 啟用 VNC 以便遠端存取，並使用 PLUS 授權排程自動化備份。

執行 RcloneView 的 Raspberry Pi，是為家庭或小型辦公室打造專屬全天候雲端備份站最經濟實惠的方式之一。

---

**相關指南：**

- [RcloneView 於 Debian Linux 上——雲端同步](https://rcloneview.com/support/blog/rcloneview-debian-linux-cloud-sync)
- [RcloneView 於 DietPi 上——輕量化雲端同步](https://rcloneview.com/support/blog/rcloneview-dietpi-lightweight-cloud-sync)
- [使用 RcloneView 自動化每日雲端備份](https://rcloneview.com/support/blog/automate-daily-cloud-backups-with-rcloneview)

<CloudSupportGrid />
