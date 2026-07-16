---
slug: rcloneview-pop-os-linux-cloud-sync
title: "在 Pop!_OS 上執行 RcloneView 進行雲端同步與備份"
authors:
  - tayson
description: "了解如何在 Pop!_OS 上安裝並執行 RcloneView 以進行雲端同步與備份，內容涵蓋 .deb 安裝、FUSE 掛載、平鋪工作流程技巧,以及自動啟動設定。"
keywords:
  - rcloneview
  - pop os cloud sync
  - pop os cloud backup
  - rclone pop os
  - system76 cloud storage
  - pop os fuse mount
  - pop os rclone gui
  - linux cloud file manager
  - pop os deb install
  - pop os tiling cloud sync
tags:
  - RcloneView
  - linux
  - platform
  - cloud-sync
  - guide
  - installation
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 在 Pop!_OS 上執行 RcloneView 進行雲端同步與備份

> Pop!_OS 是一款精緻、對開發者友善的 Linux 發行版，非常適合作為雲端檔案管理的工作站。**RcloneView** 可透過 .deb 套件在 Pop!_OS 上快速安裝完成，讓您擁有功能完整的視覺化雲端管理工具，並與原生桌面整合。

Pop!_OS 由 System76 開發，是一款以 Ubuntu 為基礎、專為提升生產力而設計的 Linux 發行版。它內建平鋪式視窗管理員、出色的硬體支援(尤其是對 System76 機型與 NVIDIA GPU),以及乾淨的 GNOME 桌面環境。它已成為許多開發者、創作者與進階使用者的熱門選擇，因為它提供了一個精緻且不干擾工作流程的 Linux 桌面。

在雲端儲存管理方面，Pop!_OS 提供了理想的環境。其 Ubuntu 血統意味著廣泛的軟體相容性，而其對工作流程效率的專注也與 RcloneView 的雙窗格檔案總管相輔相成。無論您是需要備份專案檔案的自由工作者、將程式碼儲存庫同步到 S3 的開發者,或是在多個雲端之間封存媒體檔案的內容創作者，本指南都能滿足您的需求。

從下載並安裝 .deb 套件，到設定 FUSE 掛載、登入時自動啟動，以及平鋪工作流程技巧，您將能在幾分鐘內把 RcloneView 完全整合進您的 Pop!_OS 工作站。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 為何選擇 Pop!_OS 進行雲端儲存管理

Pop!_OS 結合了 Ubuntu 龐大的軟體生態系統與精心設計的桌面強化功能。自動平鋪視窗管理員讓您能將 RcloneView 與終端機、檔案管理員或瀏覽器並排配置，而不需要手動調整視窗大小。Pop!_Shop 提供輕鬆存取數千個套件的管道，而此發行版對硬體相容性的重視也意味著較少的驅動程式問題。

對於需要處理大型檔案傳輸的工作站使用者而言，Pop!_OS 的效能調校與現代核心支援有助於在高速網路連線上發揮最大傳輸速度。

## 下載並安裝 .deb 套件

RcloneView 提供 `.deb` 套件，可像任何以 Ubuntu 為基礎的應用程式一樣，原生安裝在 Pop!_OS 上。

1. 前往 [rcloneview.com](https://rcloneview.com/src/download.html) 下載適用於 Linux 的 `.deb` 套件。
2. 開啟終端機並安裝:

```bash
sudo dpkg -i rcloneview_*.deb
sudo apt-get install -f
```

第二個指令會自動解決任何缺少的相依套件。安裝完成後，RcloneView 會出現在您的應用程式啟動器中。如果尚未安裝 rclone 本身，您也可以一併安裝:

```bash
sudo apt install rclone
```

或者，您也可以在 Files 應用程式中雙擊 `.deb` 檔案，Pop!_OS 會透過 Eddy(套件安裝程式)開啟它，提供圖形化的安裝體驗。

## 設定雲端遠端

從應用程式選單啟動 RcloneView，或在終端機中輸入 `rcloneview`。第一步是新增您的雲端儲存供應商。

<img src="/support/images/en/blog/new-remote.png" alt="Open multiple cloud remotes in RcloneView" class="img-large img-center" />

點擊遠端設定按鈕，並依照精靈引導設定每個供應商。RcloneView 支援 Google Drive、OneDrive、Dropbox、AWS S3、Wasabi、Backblaze B2、Cloudflare R2、SFTP 以及數十種其他服務。以 OAuth 為基礎的供應商會在您的預設瀏覽器(Pop!_OS 上的 Firefox 或 Chrome)中開啟驗證頁面。

您的設定會儲存在 `~/.config/rclone/rclone.conf` 中，因此即使在更新後，甚至在保留主目錄的情況下重新安裝 Pop!_OS，設定也能保留下來。

## 在 Pop!_OS 平鋪式視窗管理員中使用 RcloneView

Pop!_OS 的自動平鋪功能是其招牌特色之一。當您將 RcloneView 與其他應用程式一起開啟時，平鋪管理員會自動將它們排列成有效率的版面配置。

建議的工作流程:將 RcloneView 平鋪在螢幕左半部，終端機或文字編輯器平鋪在右半部。這樣您就能在繼續工作的同時監控雲端傳輸狀態。如果您正在從本機專案上傳檔案，可以將 Files 應用程式平鋪在 RcloneView 旁邊,以便快速拖放操作。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="cloud to cloud transfer default" class="img-large img-center" />

使用 Pop!_OS 鍵盤快捷鍵(`Super + 方向鍵`)可快速將 RcloneView 對齊到指定位置。您也可以將 RcloneView 放置在專門用於雲端管理任務的工作區中。

## 設定 FUSE 以進行雲端掛載

RcloneView 可以將任何雲端儲存供應商掛載為 Pop!_OS 系統上的本機目錄。這需要 FUSE，而 Pop!_OS 通常已預先安裝。可透過以下指令確認:

```bash
ls /dev/fuse
```

若尚未安裝 FUSE，請執行以下指令安裝:

```bash
sudo apt install fuse3
```

若要允許使用 `--allow-other` 旗標進行使用者層級掛載，請取消 `/etc/fuse.conf` 中 `user_allow_other` 這一行的註解。

設定好 FUSE 後，即可直接從 RcloneView 的遠端總管掛載雲端儲存:

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="mount from remote explorer" class="img-large img-center" />

您的雲端儲存會以一般資料夾的形式出現在 Files 應用程式中，讓系統上的任何應用程式都能存取。

## 建立同步任務並排程備份

RcloneView 的任務系統讓您可以定義依需求或依排程執行的同步任務。使用雙窗格總管選擇來源與目的地、設定同步選項，然後儲存該任務。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a sync job in RcloneView" class="img-large img-center" />

對於自動化備份，可使用任務排程功能，每天、每週或以自訂間隔執行同步任務。這非常適合將您的主目錄、專案檔案或資料庫備份到遠端雲端供應商。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="create job schedule" class="img-large img-center" />

## 即時監控傳輸狀態

Pop!_OS 工作站經常需要處理大型傳輸任務:影片專案、設計檔案、程式碼儲存庫以及資料集封存檔。RcloneView 的即時監控面板能準確顯示目前正在傳輸的內容、目前速度，以及每個檔案的進度。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="transfer monitoring" class="img-large img-center" />

如果傳輸中途失敗，任務歷史面板會顯示哪些檔案尚未完成，讓您可以重試，而不需要重新上傳所有內容。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="job history" class="img-large img-center" />

## 設定登入時自動啟動 RcloneView

如果您每天都會使用 RcloneView，可以設定登入時自動啟動它。在 Pop!_OS 上，您可以將其加入啟動應用程式:

1. 開啟 **設定**，然後前往 **啟動應用程式**(或使用 GNOME Tweaks)。
2. 點擊 **新增** 並輸入:
   - **名稱:** RcloneView
   - **指令:** `rcloneview`(若您使用 AppImage 方式安裝，則輸入其完整路徑)
3. 儲存並重新啟動工作階段，確認它會自動啟動。

這能確保當您坐到工作站前時，您的雲端掛載與排程任務都已隨時就緒。

## Pop!_OS 專屬技巧

**利用 Pop!_OS 工作區進行整理。** 可將一個工作區專門用於雲端管理(RcloneView 與瀏覽器)，另一個用於主要工作。使用 `Super + 方向鍵上/下` 在工作區之間切換。

**如有需要可利用 Flatpak。** Pop!_OS 內建支援 Flatpak。雖然建議使用 .deb 套件以獲得最佳整合效果，但如果您偏好可攜式安裝方式，RcloneView 也能以 AppImage 形式運作。

**善用高效能硬體。** System76 機型通常配備 NVMe 儲存裝置與高頻寬網路。RcloneView 可使用多個並行傳輸來最大化高速連線上的傳輸量。您可以在同步任務設定中調整並行傳輸的數量。

**持續更新 Pop!_OS。** 定期執行 `sudo apt update && sudo apt upgrade`，以確保您擁有最新的核心與 FUSE 改進功能。Pop!_OS 的滾動更新模式意味著您能持續獲得修正與改進。

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 使用 `sudo dpkg -i` 安裝 `.deb` 套件，並執行 `sudo apt-get install -f` 以解決相依套件問題。
3. 啟動 RcloneView，新增您的雲端遠端，並開始在雙窗格總管中瀏覽您的儲存空間。
4. 設定 FUSE 掛載與排程同步任務，打造完全自動化的雲端備份工作流程。

Pop!_OS 與 RcloneView 攜手打造出一個高效率、視覺乾淨的環境，讓您能在同一個地方管理所有雲端儲存。

---

**相關指南:**

- [瀏覽與管理遠端儲存](https://rcloneview.com/support/howto/rcloneview-basic/browse-and-manage-remote-storage)
- [將雲端儲存掛載為本機磁碟機](https://rcloneview.com/support/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive)
- [新增 Google Drive](https://rcloneview.com/support/howto/#step-2-adding-remote-storage-google-drive-example)

<CloudSupportGrid />
