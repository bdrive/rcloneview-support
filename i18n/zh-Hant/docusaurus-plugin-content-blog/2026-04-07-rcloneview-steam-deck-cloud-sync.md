---
slug: rcloneview-steam-deck-cloud-sync
title: "在 Steam Deck 上使用 RcloneView 進行雲端儲存與遊戲備份"
authors:
  - tayson
description: "Steam Deck 有限的 SSD 空間讓雲端儲存變得不可或缺。了解如何在 Steam Deck 上安裝 RcloneView，備份遊戲存檔、將截圖與錄影同步至 Google Drive、OneDrive 或 S3，並釋放你掌機上的儲存空間。"
keywords:
  - steam deck cloud storage
  - steam deck game backup
  - rcloneview steam deck
  - steam deck google drive sync
  - steam deck onedrive backup
  - steam deck cloud save backup
  - steamos rcloneview install
  - steam deck screenshot sync
  - steam deck file manager
  - steam deck external cloud storage
tags:
  - linux
  - platform
  - installation
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 在 Steam Deck 上使用 RcloneView 進行雲端儲存與遊戲備份

> Steam Deck 將一整台 PC 塞進掌上型裝置——但其 64 GB、256 GB 或 512 GB 的 SSD 很快就會塞滿。雲端儲存讓你的 Deck 擁有近乎無限的容量，用來存放遊戲備份、截圖、錄影等內容。

Valve 的 Steam Deck 執行 SteamOS，一套基於 Arch 的 Linux 發行版，並搭配自訂的 KDE Plasma 桌面模式。雖然 Steam 內建的雲端存檔功能能處理部分遊戲，但它並不涵蓋非 Steam 遊戲、模擬器遊戲、模組（mod）設定，以及日積月累的截圖與遊戲錄影。有限的 SSD 空間讓儲存管理成為一個持續存在的問題。RcloneView 為 Steam Deck 使用者提供圖形化的多雲端檔案管理工具，能將遊戲存檔備份到 Google Drive、OneDrive 或 S3，將截圖與錄影同步到雲端儲存，並將大型檔案移出以釋放內部硬碟空間。本指南將涵蓋在桌面模式下的安裝方式、雲端遠端設定，以及保護 Steam Deck 資料並精簡儲存空間的實用工作流程。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 為什麼要在 Steam Deck 上使用雲端儲存

Steam Deck 是一台性能出色的掌上型遊戲 PC，但其儲存限制帶來了實際的問題：

- **SSD 空間迅速耗盡**——現代遊戲每款可能超過 50-100 GB。即使是 512 GB 機型，安裝幾款 3A 大作後也會很快塞滿。
- **Steam Cloud 無法涵蓋所有內容**——許多遊戲不支援 Steam Cloud 存檔。非 Steam 遊戲（GOG、透過相容層執行的 Epic 遊戲、模擬器遊戲）完全沒有內建的雲端備份機制。
- **截圖與錄影不斷累積**——Deck 讓拍攝截圖與錄製遊戲畫面變得非常容易，但這些檔案會不斷佔用你有限的儲存空間。
- **模組設定容易遺失**——如果你在 Deck 上為遊戲安裝模組，這些設定存放在本機檔案系統中，可能在 SteamOS 更新或恢復原廠設定時遺失。
- **沒有自動的外部備份機制**——Steam Deck 沒有內建機制可以將任意檔案備份到外部雲端儲存。

RcloneView 透過將你的 Steam Deck 連接到任何主要雲端供應商來解決這些問題，讓你能夠隨時或依排程將檔案推送到雲端。

## 切換至桌面模式

所有安裝與設定都需要在 Steam Deck 的桌面模式下進行。切換方式如下：

1. 按下 Deck 上的 **Steam 按鈕**。
2. 導航至 **電源 > 切換到桌面**。
3. Deck 會重新啟動並進入完整的 KDE Plasma 桌面，包含工作列、檔案管理員（Dolphin）與終端機（Konsole）。

桌面模式提供完整的 Linux 桌面環境。你可以使用觸控螢幕、觸控板，或透過 USB-C 或藍牙連接鍵盤滑鼠，以獲得更舒適的操作體驗。

## 在 Steam Deck 上安裝 RcloneView

SteamOS 預設具有唯讀的根檔案系統，這限制了傳統的套件安裝方式。安裝軟體最好的兩種方法是 Flatpak（官方支援的方式）與 AppImage。

### 選項 1：AppImage（建議）

AppImage 方式最簡單，且無需修改系統即可運作：

1. 在桌面模式中打開 **Firefox** 瀏覽器（SteamOS 已預先安裝）。
2. 前往 [rcloneview.com](https://rcloneview.com/src/download.html) 並下載 Linux AppImage。
3. 打開 **Dolphin**（檔案管理員）並導航至你的下載資料夾。
4. 對 AppImage 檔案按右鍵，選擇 **內容 > 權限**，並勾選 **可執行**。
5. 雙擊執行。

或者，也可以透過 Konsole（終端機）：

```bash
chmod +x ~/Downloads/RcloneView-*.AppImage
~/Downloads/RcloneView-*.AppImage
```

將 AppImage 移動到固定位置，以保持下載資料夾整潔：

```bash
mkdir -p ~/Applications
mv ~/Downloads/RcloneView-*.AppImage ~/Applications/
```

若要將 RcloneView 加入應用程式選單，請建立一個桌面項目（desktop entry）：

```bash
cat > ~/.local/share/applications/rcloneview.desktop << 'EOF'
[Desktop Entry]
Name=RcloneView
Exec=/home/deck/Applications/RcloneView-latest.AppImage
Icon=rcloneview
Type=Application
Categories=Utility;FileManager;
EOF
```

請將檔案名稱替換為你實際的 AppImage 檔案名稱。

### 選項 2：停用唯讀檔案系統（進階）

如果你想像一般 Arch 系統那樣透過 pacman 安裝套件，可以停用唯讀檔案系統：

```bash
sudo steamos-readonly disable
sudo pacman-key --init
sudo pacman-key --populate archlinux
sudo pacman -Syu rclone fuse3
```

**警告：** 停用唯讀檔案系統意味著 SteamOS 更新可能會覆寫你的變更。AppImage 方式在系統更新後更為耐用。

### 驗證安裝

啟動 RcloneView。你應該會看到帶有遠端瀏覽器的主介面。如果你使用觸控螢幕，介面在基本導航上有足夠的反應速度，不過建議在進行較長時間的檔案管理作業時使用滑鼠。

## 連接雲端儲存帳戶

在桌面模式下執行 RcloneView 後，新增你的雲端儲存供應商。

<img src="/support/images/en/blog/new-remote.png" alt="Open multiple cloud remotes in RcloneView" class="img-large img-center" />

### Google Drive

1. 點擊 **New Remote** 並選擇 **Google Drive**。
2. OAuth 授權流程會在 Firefox 中開啟。使用你的 Google 帳戶登入並授予存取權限。
3. 儲存該遠端。你的整個 Google Drive 現在都可以在 RcloneView 中存取。

### OneDrive

1. 點擊 **New Remote** 並選擇 **Microsoft OneDrive**。
2. 透過 Firefox 中的 Microsoft 登入頁面進行驗證。
3. 選擇個人版 OneDrive 或 OneDrive for Business。
4. 儲存該遠端。

### S3 相容儲存服務（Backblaze B2、Wasabi、AWS）

1. 點擊 **New Remote** 並選擇你的 S3 供應商。
2. 輸入你的 Access Key 與 Secret Key。
3. 指定區域與端點。
4. 儲存該遠端。

對 Steam Deck 使用者而言，Google Drive 與 OneDrive 是最常見的選擇，因為許多玩家已經擁有這些帳戶。Backblaze B2 或 Wasabi 等 S3 相容供應商則為大型遊戲備份封存檔提供了具成本效益的大量儲存空間。

## 備份遊戲存檔

這是大多數 Steam Deck 使用者的主要使用情境。遊戲存檔檔案雖小，但無可取代。以下說明如何使用 RcloneView 進行備份。

### 找出存檔檔案位置

Deck 上的 Steam 遊戲存檔通常位於：

- **Steam Proton 存檔：** `~/.local/share/Steam/steamapps/compatdata/[APPID]/pfx/drive_c/users/steamuser/`
- **原生 Linux 存檔：** `~/.local/share/[GameName]/` 或 `~/.config/[GameName]/`
- **模擬器遊戲存檔：** 依模擬器而異（RetroArch 存檔通常位於 `~/.config/retroarch/saves/`）

### 建立存檔備份工作

1. 在 RcloneView 中，於左側面板打開你的本機檔案系統並導航至存檔資料夾。
2. 在右側面板打開你的雲端遠端，並建立目的資料夾（例如 `SteamDeck/Saves/`）。
3. 選取存檔檔案或資料夾，並將其複製到雲端。

若要持續進行保護，可以建立一個同步工作：

1. 將來源設定為你的本機存檔目錄。
2. 將目的地設定為你的雲端備份資料夾。
3. 排程該工作每日或依你偏好的頻率執行。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a sync job in RcloneView" class="img-large img-center" />

如此一來，每次結束遊戲並切換到桌面模式時，你最新的存檔就會自動推送到雲端（或者你也可以在切回遊戲模式前手動執行該工作）。

## 同步截圖與錄影

Steam Deck 將截圖儲存在 `~/.local/share/Steam/userdata/[USERID]/760/remote/[APPID]/screenshots/`。遊戲錄影（若你在桌面模式中使用 OBS 等工具）則可儲存在你設定的任何位置。

### 設定截圖同步

1. 在 RcloneView 中，於左側面板導航至你的截圖目錄。
2. 在右側面板打開一個雲端目的資料夾（例如 `SteamDeck/Screenshots/`）。
3. 建立一個同步工作，將新的截圖推送到雲端。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="cloud to cloud transfer default" class="img-large img-center" />

截圖通常較小（每張 1-5 MB），因此即使在較普通的網路連線下，同步工作也能快速完成。對於可能達數百 MB 甚至數 GB 的遊戲錄影，建議安排在 Deck 已接上底座並連接 Wi-Fi 時上傳。

### 上傳後釋放空間

一旦截圖與錄影安全地存放在雲端後，你就可以刪除本機副本以回收 SSD 空間。RcloneView 的移動（move）操作（相對於複製操作）會在一個步驟中傳輸檔案並移除來源。使用此功能時請務必謹慎——在刪除本機檔案前，請先確認雲端副本確實存在。

## 管理有限 SSD 空間上的儲存

除了備份存檔與媒體檔案外，RcloneView 也能協助 Steam Deck 進行更廣泛的儲存管理：

- **封存舊的遊戲資料**——玩完一款遊戲但想保留存檔並回收空間？將存檔資料同步至雲端，再解除安裝該遊戲。日後若重新安裝，即可從雲端還原存檔。
- **移出模組檔案**——大型模組套件（材質翻新包、整體轉換模組）可以備份到雲端儲存，需要時再重新下載。
- **掛載雲端儲存以存放媒體**——將 Google Drive 或 OneDrive 資料夾掛載為本機目錄，直接串流媒體（音樂、影片）而不需儲存在 SSD 上。

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="mount from remote explorer" class="img-large img-center" />

### 在 Steam Deck 上掛載雲端儲存

若要將雲端遠端掛載為本機檔案系統：

1. 確認 FUSE 已可用。在預設的 SteamOS 上，FUSE 支援通常已包含在內。若尚未包含：

```bash
sudo steamos-readonly disable
sudo pacman -S fuse3
sudo steamos-readonly enable
```

2. 在 RcloneView 中，對某個遠端按右鍵並選擇 **Mount**，或使用掛載管理員（Mount Manager）。
3. 選擇一個掛載點（例如 `~/CloudDrive/`）。
4. 設定快取設定——若要在處理媒體檔案時獲得最佳體驗，建議使用 VFS 快取模式 "full"。

已掛載的磁碟機會出現在 Dolphin 中，並可供任何應用程式存取。舉例來說，你可以將媒體播放器指向已掛載的雲端資料夾，直接串流你的音樂庫而不佔用任何 SSD 空間。

## Steam Deck 使用者的實用工作流程

### 出遊前

1. 切換至桌面模式。
2. 執行你的存檔備份工作，將最新存檔推送到雲端。
3. 在 RcloneView 的工作歷史紀錄中確認備份已完成。
4. 切回遊戲模式。

### 遊戲結束後

1. 切換至桌面模式。
2. 執行截圖同步，將新拍攝的截圖推送到雲端。
3. 可視情況刪除本機截圖以釋放空間。
4. 切回遊戲模式。

### SteamOS 更新或恢復原廠設定後

1. 切換至桌面模式。
2. 重新安裝 RcloneView（AppImage 方式只需幾秒鐘）。
3. 重新設定你的雲端遠端（或還原你先前備份到雲端的 rclone 設定檔）。
4. 從雲端取回你的存檔檔案。
5. 繼續遊戲。

為了讓復原速度更快，建議也將你的 rclone 設定檔（`~/.config/rclone/rclone.conf`）備份到雲端。此檔案包含你的遠端定義，還原後即可立即重新連接所有雲端帳戶。

## 開始使用

1. 在你的 Steam Deck 上**切換至桌面模式**。
2. **下載 RcloneView AppImage** 並將其設為可執行。
3. **新增你的雲端帳戶**——Google Drive、OneDrive 或 S3 是最常見的選擇。
4. **備份你的遊戲存檔**，方法是建立一個從存檔目錄到雲端資料夾的同步工作。
5. **同步你的截圖**，以釋放 SSD 空間並保存你的擷取畫面。
6. **排程定期備份**，讓你的資料始終受到保護，即使你忘記手動執行同步。

你的 Steam Deck 是一台便攜的遊戲利器，但其儲存空間有限。RcloneView 將任何雲端帳戶轉變為你 Deck 檔案系統的延伸——讓存檔安全無虞、截圖井然有序，並為下一款遊戲保留 SSD 空間。

---

**相關指南：**

- [瀏覽與管理遠端儲存](https://rcloneview.com/support/howto/rcloneview-basic/browse-and-manage-remote-storage)
- [將雲端儲存掛載為本機磁碟機](https://rcloneview.com/support/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive)
- [執行與管理工作](https://rcloneview.com/support/howto/rcloneview-basic/execute-manage-job)

<CloudSupportGrid />
