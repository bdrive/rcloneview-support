---
slug: rcloneview-elementary-os-cloud-sync
title: "在 Elementary OS 上使用 RcloneView — 雲端儲存同步與備份"
authors:
  - alex
description: "在 Elementary OS 上安裝 RcloneView，透過拖放同步、掛載與排程備份，在單一 GUI 中管理 90 多個雲端服務供應商。"
keywords:
  - RcloneView Elementary OS
  - Elementary OS 雲端儲存
  - Elementary OS rclone GUI
  - install RcloneView deb Elementary
  - Elementary OS 雲端同步
  - Elementary OS 雲端備份
  - Pantheon 雲端儲存用戶端
  - cross-platform cloud manager Linux
tags:
  - RcloneView
  - linux
  - cloud-sync
  - installation
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 在 Elementary OS 上使用 RcloneView — 雲端儲存同步與備份

> 在 Elementary OS 上執行 RcloneView，透過一款符合 Pantheon 桌面風格的原生 GUI 瀏覽、同步、掛載並備份 90 多個雲端服務供應商。

Elementary OS 建構於 Ubuntu LTS 之上，但搭載了自己的 Pantheon 桌面環境，選擇它以獲得簡潔、類似 macOS 工作流程的使用者，通常也希望雲端儲存工具具備同樣的精緻體驗，而不是退回到單純的終端機操作。RcloneView 在 Elementary OS 上以原生 .deb 套件形式安裝，為 rclone 支援的每一個遠端——從 Google Drive 到 Amazon S3 再到 SFTP 伺服器——提供完整的檔案管理員式介面。與僅支援掛載的工具不同，RcloneView 在 FREE 授權下也提供同步與資料夾比較功能，因此掛載磁碟機與執行排程備份都可以在同一個應用程式中完成。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 在 Elementary OS 上安裝 RcloneView

由於 Elementary OS 以 Debian/Ubuntu 為基礎，RcloneView 透過官方[下載頁面](https://rcloneview.com/src/download.html)提供的 .deb 套件安裝——取得 x86_64 版本（若您在 ARM64 硬體上執行 Elementary，則取得 aarch64 版本），然後在終端機中使用 `sudo dpkg -i rclone_view-*-linux-{arch}.deb` 安裝。這裡沒有 Flathub 或 Snap Store 套件可用——.deb 直接下載是唯一受支援的安裝方式，若您想完全略過套件管理，也可以使用 AppImage。

Elementary OS 透過 Pantheon 預設提供 GTK+ 與 Wayland/X11 工作階段，這已開箱即用地滿足了 RcloneView 對顯示與工具套件的需求。安裝後值得確認的一件事是 `libayatana-appindicator3-1`，因為 RcloneView 的系統匣圖示依賴它，而部分精簡版的 Elementary 安裝為了保持桌面輕量會移除指示器函式庫。

<img src="/support/images/en/blog/new-remote.png" alt="RcloneView main window running on Elementary OS with a new remote dialog open" class="img-large img-center" />

## 連接雲端遠端

安裝 RcloneView 後，新增遠端的方式與其他所有平台完全相同：在 Remote 分頁 > New Remote 中選擇您的服務供應商，然後透過瀏覽器彈出視窗進行驗證（Google Drive、Dropbox、OneDrive、Box），或直接輸入憑證（Amazon S3、Backblaze B2、SFTP）。內建的 rclone 執行檔透過 `http://127.0.0.1:5582` 處理一切，因此除非您想讓 RcloneView 連接到另外執行的外部 rclone 執行個體，否則在 Elementary OS 上不需要額外安裝或設定任何東西。

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="Mounting a cloud remote as a local drive on Elementary OS with RcloneView" class="img-large img-center" />

在 Linux 上掛載使用 `nfsmount`——在 Explorer 中選擇一個遠端資料夾，點擊面板工具列中的掛載圖示，雲端資料夾就會以本機路徑的形式出現，任何 Pantheon 應用程式都能直接開啟。掛載功能需要安裝 FUSE（建議使用 fuse3）。

## 排程同步工作

對於整天保持開機的 Elementary OS 電腦，排程同步工作可以讓 RcloneView 變成一個無需手動操作的備份工具，而不是需要手動觸發的東西。透過 4 步驟 Sync 精靈建立工作，新增篩選條件以略過暫存檔或過大的檔案，然後——在 PLUS 授權下——附加一個 crontab 格式的排程，使其依您需要的任意頻率自動觸發。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Creating a scheduled sync job on Elementary OS in RcloneView" class="img-large img-center" />

Job History 會記錄每次執行的狀態、持續時間與傳輸速度，讓您能輕鬆確認夜間備份確實已經完成，而不是在您沒有留意時悄悄失敗。

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**——取得適用於 Elementary OS 的 x86_64 或 aarch64 .deb。
2. 使用 `sudo dpkg -i rclone_view-*-linux-{arch}.deb` 進行安裝。
3. 透過 Remote 分頁 > New Remote 新增您的第一個雲端遠端。
4. 設定同步或掛載，直接從 Pantheon 桌面開始管理雲端儲存。

安裝了 .deb 之後，Elementary OS 也能獲得與 Windows 和 macOS 使用者相同的拖放式雲端管理體驗，而不必犧牲該桌面簡潔一致的觀感。

---

**相關指南：**

- [在 Ubuntu 和 Debian Linux 上安裝 RcloneView](https://rcloneview.com/support/blog/install-rcloneview-ubuntu-debian-linux)
- [在 Linux Mint 上使用 RcloneView — 雲端儲存同步與備份](https://rcloneview.com/support/blog/rcloneview-linux-mint-cloud-sync)
- [在 Zorin OS 上使用 RcloneView — 雲端儲存同步與備份](https://rcloneview.com/support/blog/rcloneview-zorin-os-linux-cloud-sync)

<CloudSupportGrid />
