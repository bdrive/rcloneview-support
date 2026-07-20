---
slug: rcloneview-on-raspberry-pi-cloud-backup-rcloneview
title: "在 Raspberry Pi 上執行 RcloneView — 打造低耗電雲端備份設備"
authors:
  - tayson
description: "把你的 Raspberry Pi 變成 24/7 全天候的雲端備份設備。在 Raspberry Pi 上設定 RcloneView，實現本機儲存與雲端服務商之間的自動同步。"
keywords:
  - rcloneview raspberry pi
  - raspberry pi cloud backup
  - rclone raspberry pi
  - raspberry pi nas cloud sync
  - raspberry pi cloud storage
  - diy cloud backup appliance
  - raspberry pi s3 backup
  - low power cloud sync
  - raspberry pi google drive sync
  - raspberry pi automated backup
tags:
  - RcloneView
  - raspberry-pi
  - backup
  - cloud-storage
  - platform
  - self-hosted
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 在 Raspberry Pi 上執行 RcloneView — 打造低耗電雲端備份設備

> 一台 Raspberry Pi 的耗電量只有 5–15 瓦，比一顆燈泡還省電。讓它 24 小時不停機運作，它就會成為一台安靜、常駐的雲端備份設備，在你睡覺時默默同步資料。

Raspberry Pi 是一台意外強大的電腦，非常適合處理雲端儲存相關任務。搭配一顆外接 USB 硬碟與 RcloneView，你就能擁有一台全天候運作的專屬備份機，把本機檔案同步到雲端儲存（或反向同步）——耗電量只有一般 PC 或 NAS 的一小部分。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 為什麼選擇 Raspberry Pi 做雲端備份？

### 全天候運作、低耗電

| 裝置 | 耗電量 | 全年運作成本（24/7） |
|--------|-----------|-------------------|
| Raspberry Pi 4 | 5–7W | 約 $8 |
| Raspberry Pi 5 | 8–15W | 約 $14 |
| 桌上型電腦 | 100–300W | 約 $150–400 |
| NAS（雙槽） | 20–40W | 約 $30–60 |

Raspberry Pi 全天候運作的成本幾乎可以忽略不計。

### 安靜且體積小

Pi 4 沒有風扇，運作時幾乎沒有噪音。放在架上就能忘記它的存在。

### 效能足以應付需求

Raspberry Pi 4 和 5 可以勝任以下工作：

- 將數千個檔案同步到雲端儲存。
- 執行排程備份工作。
- 掛載雲端儲存以供本機存取。
- 同時管理多個雲端帳戶。

## 硬體設定

### 建議硬體

- **Raspberry Pi 4**（4 GB）或 **Raspberry Pi 5**（4–8 GB）。
- **USB 3.0 外接硬碟**或 SSD 作為本機儲存。
- **MicroSD 卡**（32 GB）用於安裝作業系統。
- **乙太網路連線**（大量傳輸建議優先於 Wi-Fi）。
- **電源供應器**（建議使用官方 Pi 電源供應器）。

### 儲存架構

```
External USB Drive → Raspberry Pi → Cloud Storage
                          ↕
                    RcloneView (scheduling, monitoring)
```

外接硬碟保存你的本機檔案，Pi 上的 RcloneView 則依排程將這些檔案同步至雲端儲存。

## 安裝

### 1) 安裝 Raspberry Pi OS

使用 Raspberry Pi Imager 將 Raspberry Pi OS（64 位元）燒錄到 microSD 卡。若要使用 RcloneView 的圖形介面，需要安裝桌面版（Desktop edition）。

### 2) 安裝 RcloneView

從 [rcloneview.com](https://rcloneview.com/src/download.html) 下載 ARM64 版的 `.deb` 安裝包：

```bash
sudo dpkg -i rcloneview_*_arm64.deb
sudo apt-get install -f
```

### 3) 安裝 FUSE（用於掛載）

```bash
sudo apt-get install fuse3
```

### 4) 掛載外接硬碟

```bash
sudo mkdir /mnt/backup
sudo mount /dev/sda1 /mnt/backup
```

將設定加入 `/etc/fstab`，即可在開機時自動掛載。

### 5) 啟動 RcloneView

```bash
rcloneview
```

若以無螢幕（headless）方式透過 VNC 執行，請確認已在 `raspi-config` 中啟用 VNC。

## 設定雲端備份

### 新增雲端遠端

<img src="/support/images/en/blog/new-remote.png" alt="Add cloud remote on Raspberry Pi" class="img-large img-center" />

新增你的備份目的地——Google Drive、S3、Backblaze B2，或其他 70 多種支援的服務商中的任一種。

### 建立備份工作

設定從外接硬碟到雲端儲存的複製（Copy）工作：

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Create backup job" class="img-large img-center" />

### 排程自動備份

排程每晚自動備份：

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule Pi backup jobs" class="img-large img-center" />

## 使用情境

### 1) 家用檔案伺服器備份

連接一顆存有家庭照片、文件和媒體檔案的 USB 硬碟，排程每晚備份到 Google Drive 或 Backblaze B2。

### 2) NAS 的輔助方案

如果你的 NAS 沒有良好的雲端同步功能，可以用 Pi 作為橋接器：

```
NAS (SMB share) → Pi (reads via mount) → Cloud Storage (via RcloneView)
```

### 3) 監控錄影歸檔

將本機 NVR 錄下的監控攝影機畫面備份到雲端儲存，實現異地保護。

### 4) 開發者備份

將程式碼倉庫與專案檔案同步到雲端儲存：

- 設定篩選條件，僅包含原始碼檔案（排除 `node_modules`、`.git`）。
- 排程每小時備份一次。

### 5) 媒體庫鏡像

在雲端保留一份本機媒體庫的鏡像，離家在外時可用來從 Google Drive 串流播放。

## 效能預期

對 Pi 的效能要有實際的預期：

| 工作項目 | Raspberry Pi 4 | Raspberry Pi 5 |
|------|----------------|----------------|
| 小型檔案同步（文件） | 良好 | 極佳 |
| 大型檔案傳輸 | 受限於 USB 3 / 網路 | 良好 |
| 大量小檔案 | 檢查階段較慢 | 中等 |
| 加密傳輸 | 受限於 CPU | 較佳（支援 AES） |
| 網路速度 | 約 300 Mbps（Gigabit 乙太網路） | 約 1 Gbps |

面對大量傳輸時，耐心是關鍵。Pi 速度不快，但它全天候運作——最終總會完成。

### 效能優化建議

- **減少平行傳輸數量** — Pi 4 以 2–4 為最佳，Pi 5 可承受 4–8。
- **使用乙太網路** — Wi-Fi 會增加延遲並降低吞吐量。
- **排程於離峰時段** — 將高負載工作安排在夜間執行。
- **SSD 優於 HDD** — USB SSD 的讀取速度遠快於傳統硬碟。

## 監控與驗證

追蹤你的備份狀態：

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitor Pi backup transfers" class="img-large img-center" />

以資料夾比較（Folder Comparison）進行驗證：

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify Pi cloud backup" class="img-large img-center" />

## 無螢幕（Headless）運作

若要打造真正一勞永逸的設定：

1. 透過 VNC 或直接操作完成所有工作與排程設定。
2. 啟用 RcloneView 自動啟動（參見 [Ubuntu/Debian 指南](https://rcloneview.com/support/blog/install-rcloneview-ubuntu-debian-linux)）。
3. 拔除螢幕與鍵盤。
4. Pi 便會安靜地在背景執行排程工作。

## 開始使用

1. **取得一台 Raspberry Pi 4 或 5**，並準備一顆外接 USB 硬碟。
2. **安裝 Raspberry Pi OS**（64 位元桌面版）。
3. **從** [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
4. **新增雲端遠端並建立備份工作**。
5. **排程後即可放心交給它** — 剩下的交給你的 Pi 處理。

這是你能打造出最省錢、最安靜、最有效率的雲端備份設備。

---

**相關指南：**

- [在 Ubuntu/Debian 上安裝 RcloneView](https://rcloneview.com/support/blog/install-rcloneview-ubuntu-debian-linux)
- [建立同步工作](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [工作排程](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)
- [設定頻寬限制](https://rcloneview.com/support/blog/set-bandwidth-limits-cloud-transfers-rcloneview)

<CloudSupportGrid />
