---
slug: rcloneview-mx-linux-cloud-sync
title: "在 MX Linux 上使用 RcloneView — 雲端儲存同步與備份"
authors:
  - casey
description: "透過 .deb 或 AppImage 在 MX Linux 上執行 RcloneView,在單一 GUI 中以拖放同步、掛載和排程備份管理 90+ 雲端服務商。"
keywords:
  - RcloneView MX Linux
  - MX Linux 雲端儲存
  - MX Linux rclone GUI
  - 安裝 RcloneView deb
  - MX Linux 雲端同步
  - MX Linux 雲端備份
  - 基於 Debian 的雲端用戶端
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

# 在 MX Linux 上使用 RcloneView — 雲端儲存同步與備份

> 透過官方 .deb 套件或 AppImage 在 MX Linux 上執行 RcloneView,並在原生 GUI 中管理 rclone 支援的每一個雲端遠端。

MX Linux 以輕量化且基於 Debian、卻不沿用 Debian 較保守的套件版本而建立了名聲,這使它成為舊硬體與極簡桌面環境的常見選擇。這樣的組合正是雲端檔案管理器保持低調所需要的:小巧的體積、真正的桌面環境,以及直接繼承自 Debian 的 .deb 相容性。RcloneView 可在單一視窗中掛載並同步 90+ 服務商,同時支援 Windows、macOS 與 Linux,因此 MX Linux 裝置獲得的功能與其他受支援平台完全相同,而非精簡版本。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 在 MX Linux 上安裝 RcloneView

由於 MX Linux 基於 Debian,[官方下載頁面](https://rcloneview.com/src/download.html)的 `.deb` 套件安裝方式與在 Debian 或 Ubuntu 上相同 —— 下載 x86_64 或 aarch64 版本,並透過你選擇的套件管理員安裝(MX Package Installer、GDebi,或在終端機中使用 `dpkg -i`)。如果你完全不想使用套件管理員,`.AppImage` 版本同樣可行:賦予其可執行權限後直接執行即可,不需要任何安裝步驟。

RcloneView 沒有針對 MX Linux 的專屬存放庫或 PPA,也沒有類似 AUR 的社群套件 —— 下載頁面是唯一的官方發佈管道。安裝前,請確認系統已安裝 GTK+ 3.0,以及 `libayatana-appindicator3-1` 或 `libappindicator3-1` 其中之一以支援系統匣圖示;若你打算將遠端掛載為本機磁碟機,還需確認已安裝 FUSE(建議使用 fuse3)。

<img src="/support/images/en/blog/new-remote.png" alt="在 MX Linux 上執行的 RcloneView 主視窗,開啟了新增遠端對話框" class="img-large img-center" />

## 連線雲端遠端

在 MX Linux 上設定遠端的方式,與 RcloneView 支援的其他任何 Linux 發行版完全相同。開啟 Remote 分頁 > New Remote,選擇一個服務商,然後透過瀏覽器彈出視窗進行驗證(Google Drive、Dropbox、OneDrive、Box、pCloud),或直接輸入憑證(Amazon S3、Backblaze B2、SFTP)。內建的 rclone 執行檔預設會與 `http://127.0.0.1:5582` 通訊,因此除非你特別想連線到網路上其他位置執行的外部 rclone 執行個體,否則不需要另外管理 rclone 的安裝。

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="在 MX Linux 上使用 RcloneView 將雲端遠端掛載為本機磁碟機" class="img-large img-center" />

連線完成後,透過 `nfsmount` 掛載遠端,其行為就像任何其他本機路徑一樣 —— 系統上的任何檔案管理員或應用程式都能瀏覽它,而不需要知道它其實是由雲端支援的。

## 排程備份

對於大部分時間都開機的 MX Linux 機器,一個排程同步工作可以把這個應用程式變成一個設定好就能忘記的備份工具。依照 4 步驟 Sync 精靈操作,套用篩選器以略過快取目錄或過大的檔案,並在 PLUS 授權下附加一個類似 crontab 的排程,讓工作不需手動啟動即可執行。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="在 RcloneView 中為 MX Linux 建立排程雲端同步工作" class="img-large img-center" />

Job History 會記錄每次執行的耗時、傳輸速度與檔案數量,讓你很容易確認排程備份確實已完成,而不是在夜間悄悄失敗。

## 快速開始

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView** —— 取得適合你架構的 .deb,或若想略過安裝步驟,可選擇 .AppImage。
2. 安裝該套件(或賦予 AppImage 可執行權限),並確認已安裝 GTK+3 與 FUSE。
3. 透過 Remote 分頁 > New Remote 新增你的第一個雲端遠端。
4. 設定同步或掛載,開始在 MX Linux 上管理雲端儲存。

無論安裝哪一種套件,MX Linux 都能獲得與其他受支援 Linux 桌面完全相同的完整雲端同步與掛載體驗。

---

**相關指南:**

- [在 Debian Linux 上使用 RcloneView — 雲端同步](https://rcloneview.com/support/blog/rcloneview-debian-linux-cloud-sync)
- [在 Ubuntu 與 Debian Linux 上安裝 RcloneView](https://rcloneview.com/support/blog/install-rcloneview-ubuntu-debian-linux)
- [在 Linux Mint 上使用 RcloneView — 雲端同步](https://rcloneview.com/support/blog/rcloneview-linux-mint-cloud-sync)

<CloudSupportGrid />
