---
slug: rcloneview-almalinux-cloud-sync
title: "AlmaLinux 上的 RcloneView — 雲端儲存同步與備份"
authors:
  - kai
description: "在 AlmaLinux 上安裝 RcloneView,透過拖放式同步、掛載與排程備份,從一個 GUI 管理 90 個以上的雲端供應商。"
keywords:
  - RcloneView AlmaLinux
  - AlmaLinux 雲端儲存
  - AlmaLinux rclone GUI
  - 安裝 RcloneView RPM
  - AlmaLinux 雲端同步
  - AlmaLinux 雲端備份
  - RHEL 雲端儲存用戶端
  - 跨平台雲端管理器 Linux
tags:
  - RcloneView
  - linux
  - cloud-sync
  - installation
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# AlmaLinux 上的 RcloneView — 雲端儲存同步與備份

> 在 AlmaLinux 上執行 RcloneView,使用原生 GUI 瀏覽、同步、掛載並備份 90 個以上的雲端供應商,而不需要拼湊 CLI 指令碼。

AlmaLinux 已成為許多從 CentOS 遷移團隊的常見選擇,而這些伺服器或工作站中有許多最終都需要可靠的雲端儲存存取能力。RcloneView 以原生 .rpm 套件的形式安裝在 AlmaLinux 上,為 rclone 支援的每一個遠端 — 從 Amazon S3 到 Google Drive 再到 SFTP 伺服器 — 提供完整的檔案總管風格介面。RcloneView 可在單一視窗中掛載並同步 90 個以上的供應商,涵蓋 Windows、macOS 與 Linux — 在你的整個環境中使用相同的應用程式與相同的工作流程。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 在 AlmaLinux 上安裝 RcloneView

RcloneView 提供了專為 AlmaLinux 等 RHEL 系發行版建置的 .rpm 套件。從官方[下載頁面](https://rcloneview.com/src/download.html)下載 `.rpm` 檔案,然後使用系統的套件工具進行安裝(`dnf install ./rclone_view-{version}-linux-x86_64.rpm`,或在 ARM64 硬體上使用 aarch64 版本)。沒有 AlmaLinux 專屬的軟體庫或 PPA 需要新增 — .rpm 是直接下載的形式,也是此發行版上唯一受支援的路徑。

由於 RcloneView 是以 Flutter 為基礎的 GUI 應用程式,AlmaLinux 需要一個執行 X11 或 Wayland 顯示伺服器的桌面環境,以及 GTK+ 3.0,並且需要 `libayatana-appindicator3-1` 或 `libappindicator3-1` 其中之一以支援系統匣圖示。若是沒有桌面環境的 AlmaLinux 最小伺服器安裝,請先安裝桌面堆疊,或是在工作站上使用 RcloneView 並連接到伺服器上以無頭模式執行的外部 rclone 執行個體 — RcloneView 本身無法在沒有顯示器的情況下執行,也不是 systemd 服務。

<img src="/support/images/en/blog/new-remote.png" alt="在 AlmaLinux 上執行的 RcloneView 主視窗,開啟了新增遠端對話方塊" class="img-large img-center" />

## 連接雲端遠端

安裝完成後,新增遠端的方式與在其他任何平台上相同:前往 Remote 分頁 > New Remote,選擇你的供應商,透過瀏覽器彈出視窗完成驗證(Google Drive、Dropbox、OneDrive、Box)或直接輸入憑證(Amazon S3、Backblaze B2、SFTP)。內建的 rclone 執行檔會透過 `http://127.0.0.1:5582` 處理連線,因此除非你特意讓 RcloneView 指向外部 rclone 執行個體,否則在 AlmaLinux 上不需要另外管理 rclone 安裝。

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="在 AlmaLinux 上使用 RcloneView 將雲端遠端掛載為本機磁碟機" class="img-large img-center" />

掛載可透過 `nfsmount`(RcloneView 在 Linux 上的預設掛載方式)實現 — 選擇一個遠端資料夾,按一下面板工具列中的掛載圖示,它就會顯示為其他應用程式可以直接讀取的本機路徑。掛載功能需要安裝 FUSE(建議使用 fuse3)。

## 排程同步工作

對於大部分時間保持開機的 AlmaLinux 工作站,排程同步工作可以將 RcloneView 變成背景備份工具。透過 4 步驟 Sync 精靈設定工作,設定篩選器以略過暫存檔案或過大的檔案 — 在 PLUS 授權下 — 附加一個 crontab 風格的排程,讓它自動執行,不需要每次手動觸發。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="在 AlmaLinux 上的 RcloneView 中建立排程同步工作" class="img-large img-center" />

Job History 會記錄每次執行的狀態、耗時與傳輸速度,有助於確認排程備份是否真正完成,而不是在夜間悄悄失敗。

## 快速上手

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView** — 取得適用於 AlmaLinux 的 x86_64 或 aarch64 .rpm。
2. 使用 `dnf install ./rclone_view-{version}-linux-{arch}.rpm` 安裝,並確認已具備 GTK+3 與顯示伺服器。
3. 透過 Remote 分頁 > New Remote 新增你的第一個雲端遠端。
4. 設定同步或掛載,直接從 AlmaLinux 開始管理雲端儲存。

安裝 .rpm 後,除了套件庫以及 GTK 與顯示伺服器之外不需要其他額外相依性,AlmaLinux 就能獲得與 Windows 及 macOS 使用者相同的拖放式雲端管理體驗。

---

**相關指南:**

- [Fedora、RHEL 與 CentOS 上的 RcloneView — 雲端儲存同步與備份](https://rcloneview.com/support/blog/rcloneview-fedora-rhel-centos-linux)
- [在 Ubuntu 與 Debian Linux 上安裝 RcloneView](https://rcloneview.com/support/blog/install-rcloneview-ubuntu-debian-linux)
- [CentOS/Rocky Linux 上的 RcloneView — 雲端儲存同步與備份](https://rcloneview.com/support/blog/rcloneview-centos-rocky-linux-cloud-sync)

<CloudSupportGrid />
