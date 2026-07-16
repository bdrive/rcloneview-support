---
slug: mount-sftp-smb-local-drive-rcloneview
title: "使用 RcloneView 將 SFTP 或 SMB 儲存空間掛載為本機磁碟機——自架雲端整合"
authors:
  - tayson
description: 透過 RcloneView 的 GUI 掛載、VFS 快取，以及跨 Windows、macOS 和 Linux 的統一多雲端儀表板，將任何 SFTP 或 SMB 伺服器變成一流的本機磁碟機。
keywords:
  - rcloneview
  - rclone mount gui
  - mount smb windows
  - mount sftp mac
  - nas remote access
  - self hosted cloud
  - vfs cache
  - winfsp
  - macfuse
  - mount network drive
tags:
  - RcloneView
  - mount
  - sftp
  - smb
  - nas
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 使用 RcloneView 將 SFTP 或 SMB 儲存空間掛載為本機磁碟機——自架雲端整合

> 讓你的 NAS、家用伺服器或辦公室檔案伺服器像 Google Drive 一樣運作：將 SFTP 或 SMB 掛載為真正的磁碟機代號或 `/Volumes` 路徑，並具備快取、緩衝與 GUI。

SFTP 和 SMB 是自架儲存空間的骨幹——Synology/QNAP NAS、家用伺服器、VPS 以及企業檔案伺服器都仰賴它們。但要在 Windows、macOS 和 Linux 上可靠地掛載它們，往往意味著要面對作業系統特有的問題、脆弱的驗證方式、缺乏快取控制,以及無法與雲端儲存空間統一檢視。

RcloneView 解決了這個問題。它將 `rclone mount` 包裝成一個友善的桌面應用程式,讓你的 SFTP/SMB 共用資料夾表現得像現代雲端磁碟機——並具備 VFS 快取、縮圖串流、緩衝調整與自動化功能。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 了解 SFTP 與 SMB 的差異

| 功能       | SFTP                             | SMB                                    |
| ---------- | -------------------------------- | --------------------------------------- |
| 協定       | 基於 SSH                         | Windows 網路共用                        |
| 最佳用途   | 遠端伺服器,透過 WAN 安全連線     | 區域網路檔案共用,本機網路                |
| 速度       | 中等(已加密)                     | 在 LAN 上非常快                         |
| 安全性     | 預設即高                         | 依版本/政策而定                          |
| 作業系統支援 | 通用                             | 在 Windows/macOS 上最佳,Linux 上穩定良好 |

該選哪一個?

- **SFTP**:透過網際網路連線的 VPS、零信任存取、透過連接埠轉發的家用實驗室、開發者提取設定檔。
- **SMB**:辦公室區域網路、高傳輸量 NAS、團隊共用磁碟機、網路內的低延遲媒體剪輯。

RcloneView 同時支援這兩種協定,以及 Google Drive、S3、Dropbox、OneDrive 等——全部從同一個儀表板管理。

## 為什麼要用 RcloneView 掛載 SFTP/SMB

- **無需命令列**:所有 `rclone mount` 旗標都由 GUI 產生;遠端相關內容請參閱 [遠端管理器](/howto/rcloneview-basic/remote-manager),導引式掛載請參閱 [將雲端儲存空間掛載為本機磁碟機](/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive)。
- **跨平台**:Windows(WinFsp)、macOS(macFUSE)、Linux(FUSE),介面一致。
- **真正的本機掛載**:Windows 上的磁碟機代號,或 macOS 上的 `/Volumes/Server`;Linux 上的標準掛載點。
- **效能就緒**:VFS 快取、縮圖串流、緩衝控制與預讀調整,都呈現在掛載對話框中。
- **統一控管**:在同一個地方管理 SFTP/SMB 與雲端儲存空間、排程重新掛載並監控傳輸(參閱 [工作排程與執行](/howto/rcloneview-advanced/job-scheduling-and-execution) 與 [即時傳輸監控](/howto/rcloneview-basic/real-time-transfer-monitoring))。

## 逐步操作——使用 RcloneView 掛載 SFTP 或 SMB

### 1)新增遠端(SFTP 或 SMB)

- 開啟 **遠端管理器** → **新增遠端** → 選擇 **SFTP** 或 **SMB**。
- 輸入 **主機/IP** 與 **連接埠**。
- 使用 **使用者名稱/密碼** 或 SFTP 的 **SSH 金鑰** 進行驗證。若為 SMB,依需要設定網域/使用者。
- 儲存遠端;可考慮在 [一般設定](/howto/rcloneview-basic/general-settings) 中啟用設定密碼。
  <img src="/support/images/en/blog/add-sftp-remote.png" alt="Add SFTP Remote" class="img-large img-center" />

### 2)建立掛載工作

- 在 **掛載管理器** 或檔案總管工具列中,點按 **掛載**。
- 選擇你的 SFTP/SMB 遠端,並指定目標:
  - Windows → `X:`(或任何可用的磁碟機代號)
  - macOS → `/Volumes/ServerName`
  - Linux → `/mnt/server` 或你偏好的路徑

### 3)設定 VFS 快取與緩衝

- **快取模式**:選擇 `Full` 以取得流暢瀏覽與縮圖串流體驗(適合相片/Plex)。
- **快取目錄**:指向 SSD 資料夾。
- **預讀**:媒體拖曳瀏覽建議 4–8 MB;若為 4K 影片可提高數值。
- **回寫/緩衝**:大型循序寫入時建議啟用;若你會分享連結,請限制頻寬。

### 4)掛載並測試

- 點按 **掛載**,然後開啟 Finder/檔案總管/檔案應用程式。
- 瀏覽資料夾;預覽圖片並串流播放影片以驗證快取是否運作。
- 保留已儲存的掛載項目,使其在重新開機後自動重新連線(切換 **自動掛載**)。

<img src="/support/images/en/blog/mount-sftp.png" alt="Mount SFTP/SMB from RcloneView Explorer" class="img-large img-center" />

## 使用情境

- **NAS 遠端存取**:從任何作業系統將你的 NAS 當成雲端磁碟機使用。
- **本機 ↔ 雲端 ↔ 自架**:在同一個介面中於 SFTP/SMB 與 Google Drive/S3/Dropbox 之間移動檔案。
- **辦公室共用磁碟機整合**:為設計團隊對應部門共用資料夾,並附帶快取縮圖。
- **媒體剪輯**:直接從 NAS 編輯影片/相片,透過 VFS 快取避免重複下載。
- **多伺服器樞紐**:並排掛載多個 SFTP/SMB 伺服器,並在它們之間拖放檔案。

## 效能提示

- 針對媒體密集型工作負載(Plex/相片)設定 **快取模式:Full**。
- 使用 **NVMe/SSD 快取目錄** 加速縮圖產生與拖曳瀏覽。
- 針對大型循序讀寫,提高 **預讀** 與 **緩衝大小**。
- 在意傳輸量時,SMB 建議優先使用 **LAN**;透過 WAN 使用 SFTP 時,建議用 SSH 金鑰以提升穩定性。
- 在 [即時傳輸監控](/howto/rcloneview-basic/real-time-transfer-monitoring) 中監控傳輸狀態,並透過 [工作排程與執行](/howto/rcloneview-advanced/job-scheduling-and-execution) 排程重新掛載。

## 結論——自架儲存與多雲端的結合

SFTP 和 SMB 不再需要感覺像是過時的網路磁碟機。透過 RcloneView,你可以獲得如雲端般的掛載體驗、智慧快取,以及一個能無需腳本就混合 NAS、VPS 與公有雲的統一儀表板。只需新增一次伺服器、選擇磁碟機代號或 `/Volumes` 路徑,RcloneView 就會持續維持掛載狀態,讓你專注在自己的檔案上。

<CloudSupportGrid />
