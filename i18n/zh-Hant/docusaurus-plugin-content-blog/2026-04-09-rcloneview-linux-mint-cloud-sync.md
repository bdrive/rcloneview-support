---
slug: rcloneview-linux-mint-cloud-sync
title: "在 Linux Mint 上安裝並使用 RcloneView 進行雲端同步"
authors:
  - tayson
description: "在 Linux Mint 上安裝 RcloneView，設定雲端同步、備份與檔案管理。適用於 Cinnamon、MATE 與 Xfce 版本的逐步指南。"
keywords:
  - rcloneview
  - linux mint cloud sync
  - rcloneview linux mint
  - linux mint cloud storage
  - linux mint google drive
  - linux mint onedrive
  - linux mint cloud backup
  - linux mint file manager cloud
  - mint rclone gui
  - linux mint dropbox alternative
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

# 在 Linux Mint 上安裝並使用 RcloneView 進行雲端同步

> Linux Mint 是最受歡迎的桌面 Linux 發行版之一，但除了 Nemo 檔案管理員的基本外掛之外，並未內建雲端儲存整合功能——**RcloneView** 填補了這項空缺，提供完整的多雲支援。

Linux Mint 內建了優秀的桌面工具——Nemo 檔案管理員、用於系統備份的 Timeshift，以及精緻的 Cinnamon（或 MATE/Xfce）桌面環境。然而，其雲端儲存整合功能相當有限。系統並未提供原生的 Google Drive、OneDrive 或 Dropbox 客戶端。雖然存在第三方解決方案（Insync、rclone CLI、MATE 上的 GNOME Online Accounts），但沒有一個能提供完整的多雲 GUI。RcloneView 可在所有版本的 Linux Mint 上原生執行，並連接至 70 多個雲端服務供應商。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 在 Linux Mint 上安裝

Linux Mint 基於 Ubuntu LTS，因此安裝流程與 Ubuntu/Debian 系統相同。

### 方法一：AppImage（建議使用）

AppImage 是最簡單的安裝方式，適用於所有 Linux Mint 版本（Cinnamon、MATE、Xfce）：

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) 下載 RcloneView 的 AppImage。
2. 使其可執行：在 Nemo 中右鍵點擊該檔案，選擇「內容」>「權限」，然後勾選「允許以程式執行檔案」。或在終端機中執行 `chmod +x RcloneView-*.AppImage`。
3. 雙擊即可啟動。

AppImage 內含 RcloneView 所需的一切，包括內嵌的 rclone 二進位檔案。無需額外安裝系統套件。

### 方法二：.deb 套件

從 RcloneView 網站下載 `.deb` 套件。透過雙擊安裝（會開啟套件管理員），或於終端機中執行：

```
sudo dpkg -i rcloneview_*.deb
sudo apt-get install -f
```

`.deb` 套件會與系統整合——它會將 RcloneView 加入應用程式選單，並處理桌面檔案關聯設定。

## 掛載所需的 FUSE 設定

若要在 Linux Mint 上將雲端儲存掛載為本機目錄，必須具備 FUSE。大多數 Mint 安裝預設已包含 FUSE。可執行以下指令進行確認：

```
fusermount --version
```

若尚未安裝 FUSE，請加入：

```
sudo apt install fuse3
```

確保您的使用者帳號已加入 `fuse` 群組：

```
sudo usermod -a -G fuse $USER
```

登出後重新登入，群組變更才會生效。完成後，RcloneView 便可將任何雲端服務供應商掛載為本機目錄，並與您的本機資料夾一同顯示於 Nemo 中。

## 新增雲端儲存遠端

啟動 RcloneView 並開啟遠端管理員。新增您的雲端帳戶：

- **Google Drive**：選擇 Google Drive，在您於 Mint 上預設的瀏覽器（Firefox 或 Chromium）中透過 OAuth 進行授權。
- **OneDrive**：選擇 Microsoft OneDrive，透過 OAuth 進行授權。
- **Dropbox**：選擇 Dropbox，透過 OAuth 進行授權。
- **S3 相容服務**：輸入您的 access key、secret key 以及 endpoint，適用於 AWS S3、Wasabi、Backblaze B2 S3 等服務。

每個遠端都會顯示於總管的下拉選單中。Linux Mint 的預設瀏覽器能順暢處理 OAuth 流程——無需任何特殊設定。

<img src="/support/images/en/blog/new-remote.png" alt="Adding cloud remotes on Linux Mint in RcloneView" class="img-large img-center" />

## 瀏覽與管理雲端檔案

RcloneView 的雙面板總管與 Nemo 相輔相成，用於雲端操作。雖然 Nemo 在處理本機檔案方面表現出色，但 RcloneView 將此能力延伸至雲端儲存。在一個面板中瀏覽 Google Drive，另一個面板則顯示您的本機家目錄。您可以在兩者之間拖放檔案，或是在兩個不同的雲端服務供應商之間拖放。

對於熟悉 Nemo 雙面板模式（可透過 Nemo 擴充功能取得）的使用者來說，RcloneView 的版面配置會感覺相當自然。差別在於，RcloneView 的面板可以開啟任何雲端服務供應商，而不僅限於本機與網路路徑。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Browsing cloud storage on Linux Mint with RcloneView" class="img-large img-center" />

## 在 Nemo 中掛載雲端儲存

掛載完成後，雲端儲存目錄會如同其他資料夾一樣顯示於 Nemo 中。您可以直接從已掛載的雲端儲存中，在 Linux Mint 的應用程式——LibreOffice、GIMP、VLC 或任何其他應用程式——中開啟檔案。

將您的 Google Drive 掛載至 `~/GoogleDrive`，它便會出現在 Nemo 的側邊欄中。啟用 VFS 快取以獲得流暢的效能——最近存取過的檔案會被快取於本機，因此重複存取時可即時載入。您可依可用磁碟空間設定快取大小。

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="Mounting cloud storage as local drive on Linux Mint" class="img-large img-center" />

## 透過系統整合排程備份

RcloneView 內建的排程器可處理定期備份工作。您可以設定每晚將家目錄（或特定資料夾）同步至 Google Drive、Backblaze B2 或其他任何雲端服務供應商。RcloneView 會自動執行已排程的工作。

對於偏好使用系統層級排程的 Linux Mint 使用者，您也可以透過 RcloneView 的外部 rclone 連線模式，藉由 cron 或 systemd timer 觸發 rclone 指令。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling cloud backup on Linux Mint in RcloneView" class="img-large img-center" />

## 登入時自動啟動

若要讓 RcloneView 在您登入 Linux Mint 時自動啟動：

1. 從系統選單開啟**啟動應用程式**。
2. 點擊「新增」，輸入 RcloneView AppImage 或已安裝執行檔的路徑。
3. RcloneView 將隨您的桌面工作階段啟動，隨時準備好執行已排程的工作並掛載磁碟機。

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**——AppImage 或 .deb 套件。
2. 若您打算掛載雲端儲存，請安裝 FUSE。
3. 在遠端管理員中新增您的雲端帳戶。
4. 從 Linux Mint 桌面瀏覽、同步並備份您的檔案。

Linux Mint 提供了精緻的桌面體驗，而 RcloneView 則補足了系統原生所缺乏的多雲檔案管理功能。兩者結合，讓您完全掌控本機與雲端儲存。

---

**相關指南：**

- [新增 Google Drive](https://rcloneview.com/support/howto/#step-2-adding-remote-storage-google-drive-example)
- [將雲端儲存掛載為本機磁碟機](https://rcloneview.com/support/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive)
- [工作排程](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)

<CloudSupportGrid />
