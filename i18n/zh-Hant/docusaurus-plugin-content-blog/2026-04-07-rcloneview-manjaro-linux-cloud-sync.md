---
slug: rcloneview-manjaro-linux-cloud-sync
title: "在 Manjaro Linux 上安裝並使用 RcloneView 進行雲端同步"
authors:
  - tayson
description: "Manjaro Linux 結合了 Arch 的強大功能與使用者友善的預設設定。了解如何透過 pamac、pacman 或 AppImage 在 Manjaro 上安裝 RcloneView，實現無縫的多雲端檔案同步、掛載與備份。"
keywords:
  - rcloneview manjaro linux
  - manjaro cloud sync
  - install rcloneview manjaro
  - manjaro rclone gui
  - arch linux cloud storage
  - manjaro pamac rcloneview
  - manjaro cloud backup
  - manjaro mount cloud drive
  - rcloneview appimage manjaro
  - manjaro aur rcloneview
tags:
  - linux
  - platform
  - installation
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 在 Manjaro Linux 上安裝並使用 RcloneView 進行雲端同步

> Manjaro 承襲了 Arch Linux 滾動更新的強大特性，並將其包裝成桌面友善的套件。搭配 RcloneView，你將擁有一套視覺化的多雲端檔案管理工具，完美契合 Manjaro 讓強大工具變得平易近人的理念。

Manjaro Linux 已成長為最受歡迎的 Arch 系發行版之一，提供滾動更新模式與 AUR（Arch User Repository）存取權限，同時擁有更易上手的安裝與設定體驗。無論你使用 XFCE、KDE Plasma 還是 GNOME 版本的 Manjaro，都能取得最新軟體套件，並加入一個重視選擇與掌控權的社群。RcloneView 為 Manjaro 使用者提供了圖形化介面，可管理跨越 70 多家雲端儲存供應商的檔案——Google Drive、OneDrive、Dropbox、AWS S3、Backblaze B2、Wasabi 等等。本指南將帶你了解在 Manjaro 上的安裝、雲端遠端設定、檔案同步、磁碟機掛載，以及工作排程。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 為何選擇 Manjaro 進行雲端檔案管理

Manjaro 作為執行 RcloneView 的平台，具有以下幾項優勢：

- **滾動更新** — 你隨時都能取得最新版本的 rclone 與系統函式庫，無需等待發行版升級週期。
- **AUR 存取權限** — Arch User Repository 提供了社群維護的套件，這些套件在官方套件庫中並不存在，擴展了你的安裝選項。
- **硬體偵測** — Manjaro 的 mhwd 工具會自動設定驅動程式，這對於依賴妥善驅動設定才能順暢運作的 GPU 加速桌面環境而言相當重要。
- **多種桌面環境** — 無論你偏好 KDE Plasma、XFCE、GNOME 或平鋪式視窗管理員，RcloneView 都能透過標準的 GTK/Qt 相容性在所有環境上執行。
- **活躍的社群** — Manjaro 的論壇與 wiki 提供了針對該發行版特有設定問題的疑難排解資源。

## 先決條件

在 Manjaro 上安裝 RcloneView 之前，請確認你已具備：

- Manjaro Linux（任何版本皆可——XFCE、KDE、GNOME 或社群版本）
- 可正常運作的網際網路連線
- 至少 512 MB 的可用磁碟空間
- 一個或多個雲端儲存供應商的帳號（Google Drive、OneDrive、S3 等）
- 對終端機的基本熟悉度（不過大多數操作都會在圖形介面中完成）

請先更新系統，確保所有套件都是最新版本：

```bash
sudo pacman -Syu
```

或使用 Manjaro 的圖形化套件管理工具 pamac：

```bash
pamac update
```

## 在 Manjaro 上安裝 RcloneView

Manjaro 提供了多種安裝 RcloneView 的方式，請選擇最適合你工作流程的一種。

### 選項一：AppImage（多數使用者推薦）

AppImage 是最簡單的安裝方式，它將 RcloneView 所需的一切打包成單一可執行檔——無需管理任何相依套件。

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) 下載最新的 RcloneView AppImage。
2. 賦予其可執行權限：

```bash
chmod +x RcloneView-*.AppImage
```

3. 執行它：

```bash
./RcloneView-*.AppImage
```

若要將 AppImage 整合進應用程式選單，可使用 AppImageLauncher 這類工具，它可在 Manjaro 套件庫中取得：

```bash
sudo pacman -S appimagelauncher
```

安裝完成後，雙擊 AppImage 就會提示你將其整合進桌面環境。

### 選項二：透過 pamac（AUR）安裝

Manjaro 的 pamac 套件管理工具可以直接安裝 AUR 套件。首先，請確認 pamac 中已啟用 AUR 支援：

1. 開啟 **Add/Remove Software**（pamac 圖形介面）。
2. 前往 **Preferences > Third Party** 並啟用 AUR 支援。
3. 搜尋 `rcloneview` 並安裝。

或者從終端機執行：

```bash
pamac build rcloneview
```

pamac 會自動處理相依套件的解析，並拉取所有所需的函式庫。

### 選項三：分別安裝 rclone 並使用 AppImage

如果你想透過 pacman 管理最新版本的 rclone，同時使用 AppImage 作為圖形介面：

```bash
sudo pacman -S rclone fuse3
```

接著下載並執行 RcloneView AppImage。RcloneView 會偵測系統中已安裝的 rclone 並加以使用。

### 驗證安裝結果

安裝完成後，從應用程式選單或終端機啟動 RcloneView。你應該會看到包含遠端瀏覽器與工作管理面板的主視窗。若你是分別安裝 rclone，可驗證其是否已被偵測到：

```bash
rclone version
```

## 新增雲端遠端

啟動 RcloneView 後，第一步是連接你的雲端儲存帳號。RcloneView 為每個供應商提供了引導式設定流程。

<img src="/support/images/en/blog/new-remote.png" alt="Open multiple cloud remotes in RcloneView" class="img-large img-center" />

### Google Drive

1. 在 RcloneView 介面中點選 **New Remote**。
2. 從供應商清單中選擇 **Google Drive**。
3. 依照 OAuth 驗證流程操作——系統會開啟瀏覽器視窗供你登入並授權。
4. 選擇你的存取範圍（完整雲端硬碟存取、檔案層級存取，或唯讀）。
5. 儲存遠端。

### OneDrive

1. 點選 **New Remote** 並選擇 **Microsoft OneDrive**。
2. 透過瀏覽器中的 Microsoft OAuth 流程完成驗證。
3. 選擇個人 OneDrive、企業版 OneDrive，或 SharePoint。
4. 儲存遠端。

### 相容 S3 的儲存服務（AWS、Wasabi、Backblaze B2、MinIO）

1. 點選 **New Remote** 並選擇你所使用的相容 S3 供應商。
2. 輸入你的 Access Key ID 與 Secret Access Key。
3. 指定區域與端點（對於 Wasabi 或 MinIO 等非 AWS 供應商，必須提供端點 URL）。
4. 儲存遠端。

你可以新增任意數量的遠端。所有已設定的遠端都會顯示在側邊欄，方便快速存取。

## 瀏覽與同步檔案

完成遠端設定後，RcloneView 的雙窗格瀏覽器讓你能夠並排瀏覽本機與雲端檔案。你可以瀏覽資料夾結構、預覽檔案詳細資訊，並透過拖放或工具列按鈕啟動傳輸。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="cloud to cloud transfer default" class="img-large img-center" />

### 複製檔案

在其中一個窗格中選取檔案或資料夾，並複製到另一個窗格的位置。這適用於：

- **本機到雲端** — 將檔案從 Manjaro 檔案系統上傳到任何已連接的雲端遠端。
- **雲端到本機** — 將雲端儲存中的檔案下載到本機磁碟。
- **雲端到雲端** — 在兩個雲端供應商之間直接傳輸檔案，無需先下載到本機。

### 同步資料夾

若需要持續同步，可建立同步工作，讓兩個位置保持一致：

1. 在左側窗格開啟來源資料夾，在右側窗格開啟目的地資料夾。
2. 點選 **Sync** 並設定同步方向（單向或鏡像）。
3. 查看比對結果，了解哪些檔案將被新增、更新或刪除。
4. 執行同步。

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="drag and drop" class="img-large img-center" />

## 將雲端儲存掛載為本機磁碟機

RcloneView 可以將任何雲端遠端掛載為 Manjaro 上的本機檔案系統目錄。這讓你能透過檔案管理員（Thunar、Dolphin、Nautilus）或任何應用程式存取雲端檔案，就像它們存放在本機磁碟一樣。

### 設定掛載

1. 確認已安裝 FUSE：

```bash
sudo pacman -S fuse3
```

2. 在 RcloneView 中，右鍵點選某個遠端，或前往 Mount Manager。
3. 選擇一個本機掛載點（例如 `~/CloudDrive/GoogleDrive`）。
4. 設定掛載選項——快取設定、唯讀或可讀寫、VFS 快取模式。
5. 點選 **Mount**。

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="Configure a mount from Mount Manager" class="img-large img-center" />

掛載後的磁碟機會出現在你的檔案管理員中，並可供所有應用程式存取。舉例來說，你可以將媒體播放器指向已掛載的 Google Drive 資料夾，或直接從已掛載的 S3 儲存桶開啟 CAD 檔案。

### Manjaro 上的掛載效能技巧

- **使用 VFS 快取模式「full」**，可為進行隨機讀取的應用程式（文件編輯器、媒體播放器）帶來最佳效能。
- **將快取目錄設定在高速儲存裝置上** — 若你擁有 NVMe SSD，可將 VFS 快取指向該裝置以加快存取速度。
- **增加目錄快取時間**，適用於資料夾結構龐大的遠端，可減少 API 呼叫次數。

## 排程自動同步工作

若需要持續進行備份與同步，RcloneView 的工作排程器可讓你定義自動執行的週期性同步操作。

1. 選擇來源與目的地遠端及資料夾，建立同步工作。
2. 開啟工作排程器並設定頻率——每小時、每日、每週，或自訂 cron 運算式。
3. 啟用排程，讓 RcloneView 處理其餘的工作。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="create job schedule" class="img-large img-center" />

Manjaro 使用者常見的排程模式：

- **每日將 ~/Documents 備份到 Google Drive** — 每晚執行一次，讓你的文件持續鏡像至雲端。
- **每週將專案資料夾同步到 S3** — 為大型專案檔案保留異地備份。
- **每小時同步共用團隊資料夾**至多個雲端供應商，以提高備援性。

## Manjaro 特定問題疑難排解

### FUSE 權限

若掛載時出現權限錯誤，請確認你的使用者已加入 `fuse` 群組：

```bash
sudo usermod -aG fuse $USER
```

登出並重新登入後，群組變更才會生效。

### 核心模組載入

在部分 Manjaro 安裝環境中，FUSE 核心模組可能不會自動載入。請手動載入：

```bash
sudo modprobe fuse
```

若要讓此設定永久生效，請將 `fuse` 加入 `/etc/modules-load.d/fuse.conf`。

### AppImage 字型顯示問題

若 AppImage 版本中的字型顯示異常，請安裝必要的字型套件：

```bash
sudo pacman -S noto-fonts ttf-liberation
```

### OAuth 瀏覽器驗證

若在設定遠端期間 OAuth 瀏覽器視窗未自動開啟，請確認 `xdg-open` 已正確設定：

```bash
xdg-settings get default-web-browser
```

若尚未設定預設瀏覽器，請透過桌面環境的設定進行配置。

## 開始使用

1. **更新 Manjaro** — 執行 `sudo pacman -Syu` 以確保系統為最新版本。
2. **安裝 RcloneView** — 使用 AppImage 以求簡便，或使用 pamac 整合 AUR。
3. **新增雲端遠端** — 連接 Google Drive、OneDrive、S3 或任何其他供應商。
4. **瀏覽、複製與同步**檔案，透過雙窗格瀏覽器操作。
5. **掛載雲端儲存**為本機磁碟機，讓任何應用程式都能無縫存取。
6. **排程自動備份**，在無需手動操作的情況下持續保護你的資料。

Manjaro 為你提供了一套強大且持續更新的 Linux 桌面環境。RcloneView 則為你帶來一套強大且持續更新的雲端檔案管理工具。兩者結合，涵蓋了從本機檔案到多雲端儲存的完整範疇，無需輸入任何一行指令。

---

**相關指南：**

- [新增遠端儲存空間（以 Google Drive 為例）](https://rcloneview.com/support/howto/#step-2-adding-remote-storage-google-drive-example)
- [將雲端儲存掛載為本機磁碟機](https://rcloneview.com/support/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive)
- [工作排程與執行](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)

<CloudSupportGrid />
