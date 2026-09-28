---
slug: rcloneview-void-linux-cloud-sync
title: "在 Void Linux 上使用 RcloneView — 雲端儲存同步與備份"
authors:
  - steve
description: "使用 AppImage 版本在 Void Linux 上安裝並執行 RcloneView,實現多雲端檔案管理、掛載與同步。"
keywords:
  - RcloneView Void Linux
  - void linux 雲端儲存
  - void linux appimage
  - rclone gui void linux
  - void linux 掛載雲端儲存
  - void linux 備份工具
  - xbps rclone gui
  - void linux runit 雲端同步
  - void linux 雲端檔案管理器
  - 跨平台雲端 gui linux
tags:
  - RcloneView
  - linux
  - cloud-sync
  - installation
  - guide
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 在 Void Linux 上使用 RcloneView — 雲端儲存同步與備份

> 不必等待 XBPS 套件出現,即可在 Void Linux 上執行功能完整的圖形化多雲端管理工具。

Void Linux 採用滾動發行、獨立的套件體系(XBPS、runit),這意味著許多 GUI 應用程式要麼很晚才被打包,要麼根本不會被打包。RcloneView 並不在 XBPS 儲存庫中,但由於它以 Linux 版 .AppImage、.deb 和 .rpm 的形式在自己的下載頁面上提供,Void 使用者不需要特定發行版的建置版本即可直接執行。RcloneView 是原生 GUI 應用程式,而非無頭(headless)服務,因此需要 X11 或 Wayland 桌面環境。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 在 Void 上安裝 RcloneView

在 Void 上最可靠的方式是 .AppImage,因為它自帶執行環境,完全繞開了 XBPS 的套件命名或相依性不符問題。下載適用於 x86_64 或 aarch64 的 `RcloneView-{version}-{arch}.AppImage` 檔案,賦予其可執行權限,然後直接從檔案管理員或終端機執行。Void 不維護 APT 或 RPM 儲存庫,因此如果你比較想用 .deb 或 .rpm 版本,需要手動解壓縮而不是透過 `xbps-install` 安裝。RcloneView 僅透過 rcloneview.com 發布,沒有 AUR、Flatpak 或 Snap 套件可作為替代途徑。

<img src="/support/images/en/blog/new-remote.png" alt="RcloneView remote setup running on Void Linux" class="img-large img-center" />

執行前,請確認已安裝 GTK+3,以及 `libayatana-appindicator3-1` 或 `libappindicator3-1` 其中之一以支援系統匣 —— Void 的最小化基礎系統不像一些以桌面為導向的發行版那樣預設安裝這些元件。

## 設定遠端與掛載

RcloneView 執行後,新增雲端遠端的方式與在其他平台上完全相同:Google Drive、Dropbox 等服務使用 OAuth 登入,S3 相容或 SFTP 端點則使用憑證輸入。掛載功能透過內建 rclone 在 Linux 上的 nfsmount 方式運作,需要 FUSE —— 由於 Void 的最小化安裝經常缺少此元件,如果尚未安裝,請透過 XBPS 安裝 `fuse3`。

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="Mounting a cloud remote as a local drive on Void Linux" class="img-large img-center" />

RcloneView 可連接 90 多個提供商,並在同一視窗中掛載與同步所有這些服務,無論是在 Windows、macOS 還是 Linux 上 —— 如果你的工作分散在 Void Linux 工作站與其他機器之間,這會很有用。

## 以 runit 為前提安排備份排程

RcloneView 無法作為 systemd 服務執行,而 Void 根本不使用 systemd,它執行的是 runit。這項差異在這裡並不重要,因為 RcloneView 自身的 Job Manager 會在內部處理排程,而不依賴初始化系統。可以透過 crontab 風格的排程器(PLUS 功能)設定排程同步工作,讓應用程式保持在系統匣中開啟時,備份能依計時器執行。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a recurring cloud backup job on Void Linux" class="img-large img-center" />

如果你想在 Void 上執行一個完全沒有 GUI、真正在背景執行的守護程式,那應該交給 `rclone rcd` 直接完成,而不是 RcloneView —— 該應用程式本身永遠需要顯示伺服器才能執行。

## 快速上手

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 AppImage** 並賦予其可執行權限。
2. 如果掛載或系統匣功能無法直接運作,請透過 XBPS 安裝 `fuse3` 與 AppIndicator 函式庫。
3. 新增你的雲端遠端,並在 Explorer 面板中確認可以存取。
4. 建立一個同步或備份工作,如有需要,可設定為自動執行。

Void 的極簡主義不代表你必須手動管理雲端儲存 —— RcloneView 把同樣的 GUI 工作流程帶到了這裡,和在其他任何地方一樣。

---

**相關指南:**

- [在 Gentoo Linux 上使用 RcloneView — 雲端儲存同步與備份](https://rcloneview.com/support/blog/rcloneview-gentoo-linux-cloud-sync)
- [在 Arch Linux 上使用 RcloneView — 雲端儲存同步與備份](https://rcloneview.com/support/blog/rcloneview-arch-linux-cloud-sync)
- [在 Ubuntu 與 Debian Linux 上安裝 RcloneView](https://rcloneview.com/support/blog/install-rcloneview-ubuntu-debian-linux)

<CloudSupportGrid />
