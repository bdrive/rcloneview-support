---
slug: rcloneview-dietpi-lightweight-cloud-sync
title: "在 DietPi 上安裝並使用 RcloneView 實現輕量級雲端同步"
authors: [tayson]
description: "了解如何在 DietPi 上安裝並設定 RcloneView，在 Raspberry Pi、Odroid、NanoPi 等單板電腦上實現高效、輕量的雲端同步。"
keywords:
  - rcloneview dietpi
  - dietpi cloud sync
  - raspberry pi cloud backup
  - lightweight cloud sync
  - dietpi rclone gui
  - sbc cloud storage
  - dietpi remote storage
  - raspberry pi rclone
  - headless cloud sync
  - low power cloud backup
tags: [RcloneView, linux, platform, cloud-sync, guide, installation, raspberry-pi, cloud-storage, automation]
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 在 DietPi 上安裝並使用 RcloneView 實現輕量級雲端同步

> 讓 RcloneView 在 DietPi 上運作，將您的 Raspberry Pi 或任何單板電腦變成一台強大、全天候運行的雲端同步站。

DietPi 是一套超輕量的 Debian 系統，專為 Raspberry Pi、Odroid、NanoPi 等單板電腦（SBC）而設計。其磁碟使用量最低僅需 400 MB，閒置時記憶體使用量不到 100 MB，是運行全天候雲端同步方案的理想平台。將 DietPi 與 RcloneView 結合，您就能在成本低於一頓飯、功耗低於 5 瓦的硬體上，擁有一個由 rclone 驅動、功能完整的雲端檔案管理 GUI。本指南將逐步引導您完成從安裝 DietPi 到設定全天候自動備份排程的每一個步驟。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 為什麼選擇 DietPi 進行雲端同步？

DietPi 在多個重要方面有別於標準的 Raspberry Pi OS 及其他 Linux 發行版，使其非常適合作為專用的雲端同步任務平台。

**最低資源使用量。** DietPi 移除了不必要的服務、桌面環境及背景程序。全新安裝的 DietPi 大約只使用 50-80 MB 的記憶體，讓您的 SBC 絕大部分資源都能用於 rclone 傳輸與檔案操作。

**優化的軟體目錄。** `dietpi-software` 工具提供了一份精選的優化軟體清單，安裝時即附帶正確的設定。這意味著您花在排查依賴問題上的時間更少，管理雲端儲存的時間更多。

**以無螢幕（headless）為優先的設計。** DietPi 從一開始就以無螢幕運行為設計目標。您可以透過 SSH 管理一切，這正是放在櫃子裡或裝在電視後面的專用同步裝置所需要的。

**廣泛的 SBC 支援。** DietPi 支援超過 30 款 SBC 機型，包括 Raspberry Pi（從 Zero 到 5 的所有型號）、Odroid（C4、N2+、XU4）、NanoPi、Pine64，甚至虛擬機器。您的雲端同步設定可以跨硬體移植。

**自動更新。** DietPi 透過自身的更新機制處理系統更新，讓您的同步站保持安全，無需手動介入。

## 前置需求與硬體建議

在開始安裝之前，請先準備以下項目：

**硬體需求：**
- 一台受支援的 SBC（建議使用 Raspberry Pi 3B+ 或更新機型以獲得最佳效能）
- MicroSD 卡（最低 16 GB，建議 32 GB）或 USB SSD 以獲得更好的 I/O 效能
- 乙太網路連線（建議用於可靠的同步）或 WiFi 轉接器
- 適合您 SBC 的電源供應器（Raspberry Pi 4/5 需要 5V 3A）

**軟體需求：**
- 從 [dietpi.com](https://dietpi.com) 下載適用於您特定 SBC 的 DietPi 映像檔
- 燒錄映像檔的工具，如 balenaEtcher 或 Raspberry Pi Imager
- SSH 客戶端（macOS/Linux 終端機內建，或 Windows 上使用 PuTTY）

**依 SBC 機型的效能考量：**

| SBC 機型 | 記憶體 | 建議用途 |
|-----------|-----|----------------|
| Raspberry Pi Zero 2W | 512 MB | 輕量同步，單一遠端 |
| Raspberry Pi 3B+ | 1 GB | 中等同步，2-3 個遠端 |
| Raspberry Pi 4/5 | 2-8 GB | 大量同步、多個遠端、掛載 |
| Odroid N2+ | 4 GB | 高吞吐量傳輸 |
| NanoPi R5S | 4 GB | 網路連接式同步裝置 |

## 安裝 DietPi 與 Rclone

首先將 DietPi 燒錄到您的 SD 卡或 SSD，然後啟動您的 SBC 並透過 SSH 連線。

**步驟 1：燒錄並啟動 DietPi。**

下載適合您硬體的 DietPi 映像檔，使用 balenaEtcher 燒錄，將媒介插入您的 SBC 並開機。DietPi 會在首次開機時自動執行初始設定。

**步驟 2：透過 SSH 連線。**

```bash
ssh root@<your-sbc-ip>
# Default password: dietpi
```

首次登入時，DietPi 會引導您完成初始設定，包括更改密碼、時區設定與軟體選擇。

**步驟 3：透過 dietpi-software 安裝 rclone。**

DietPi 的優化軟體目錄中已包含 rclone：

```bash
dietpi-software install 80
```

軟體 ID 80 即為 rclone。這會為您的架構安裝一個設定正確、經過優化的 rclone 版本。

您也可以選擇手動安裝最新版本的 rclone：

```bash
curl https://rclone.org/install.sh | sudo bash
```

**步驟 4：驗證安裝結果。**

```bash
rclone version
```

這會確認 rclone 已安裝成功，並顯示版本號以及支援的後端。

## 以外部 Rclone 模式設定 RcloneView

由於在 SBC 上運行的 DietPi 安裝通常是無螢幕運行，您將以外部 rclone 模式使用 RcloneView。這讓運行在您桌上型電腦上的 RcloneView，可以連線並控制運行在 DietPi 裝置上的 rclone 實例。

<img src="/support/images/en/howto/rcloneview-advanced/external-rclone-model.png" alt="external rclone model" class="img-large img-center" />

**步驟 1：在 DietPi 上啟動 rclone 遠端控制常駐程式。**

在您的 DietPi 裝置上，啟動 rclone 並啟用 RC（remote control，遠端控制）介面：

```bash
rclone rcd --rc-addr :5572 --rc-user admin --rc-pass yourpassword --rc-serve
```

若要建立持久化的設定，可建立一個 systemd 服務：

```bash
sudo cat > /etc/systemd/system/rclone-rc.service << 'EOF'
[Unit]
Description=Rclone Remote Control Daemon
After=network-online.target
Wants=network-online.target

[Service]
Type=simple
User=dietpi
ExecStart=/usr/bin/rclone rcd --rc-addr :5572 --rc-user admin --rc-pass yourpassword --rc-serve
Restart=on-failure
RestartSec=10

[Install]
WantedBy=multi-user.target
EOF

sudo systemctl enable rclone-rc
sudo systemctl start rclone-rc
```

**步驟 2：將 RcloneView 連線到您的 DietPi rclone 實例。**

在您的桌上型電腦上，開啟 RcloneView 並切換至外部 rclone 模式。輸入您 DietPi 裝置的 IP 位址、連接埠 5572，以及您所設定的驗證資訊。

<img src="/support/images/en/howto/rcloneview-advanced/embedded-rclone-model.png" alt="embedded rclone model" class="img-large img-center" />

現在 RcloneView 已能控制運行在您 DietPi 裝置上的 rclone 實例。所有檔案操作、傳輸與掛載都會在該 SBC 上執行。

## 在 DietPi 上新增雲端遠端

當 RcloneView 連線到您的 DietPi rclone 實例後，您就可以透過 GUI 新增雲端儲存遠端。

<img src="/support/images/en/blog/new-remote.png" alt="Open multiple cloud remotes in RcloneView" class="img-large img-center" />

**適用於基於 OAuth 的服務提供商（Google Drive、Dropbox、OneDrive）：**

由於 DietPi 通常是在沒有瀏覽器的無螢幕環境下運行，您需要在有瀏覽器的機器上授權 OAuth 權杖，然後再傳輸相關設定。RcloneView 簡化了這個流程：

1. 在 RcloneView 中開啟遠端設定對話框。
2. 選擇您的雲端服務提供商（例如 Google Drive）。
3. RcloneView 會透過您桌上型電腦的瀏覽器處理 OAuth 流程。
4. 產生的權杖會儲存在您 DietPi 裝置上的 rclone 設定中。

**適用於 S3 相容服務提供商（AWS S3、Wasabi、Backblaze B2、MinIO）：**

S3 遠端只需要存取金鑰，因此在無螢幕環境下也能順利運作：

1. 在 RcloneView 中點選「新增遠端」。
2. 選擇 S3 相容的服務提供商。
3. 輸入您的存取金鑰 ID、私密存取金鑰、地區與端點。
4. 測試連線並儲存。

**適用於 SFTP/WebDAV 遠端：**

這對於在您的 DietPi 裝置與區域網路上的其他伺服器之間進行同步特別有用：

1. 在 RcloneView 中新增 SFTP 或 WebDAV 遠端。
2. 輸入主機、使用者名稱及驗證資訊。
3. 儲存並瀏覽該遠端儲存空間。

## 排程自動化備份

在 DietPi 裝置上運行 RcloneView 的最大優勢之一，就是能夠建立以最低功耗全天候運行的自動備份排程。

**在 RcloneView 中建立同步工作：**

首先，建立一個定義同步內容與目標位置的同步工作：

1. 開啟 RcloneView 的雙窗格檔案總管。
2. 選擇來源與目標遠端。
3. 設定同步選項（單向同步、雙向同步或複製）。
4. 將此設定儲存為一個具名工作。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="create job schedule" class="img-large img-center" />

**設定排程：**

RcloneView 的工作排程功能讓您可以定義同步工作的執行時間與頻率：

- **每日備份：** 在凌晨 2:00 網路流量較低時，排程每晚同步重要目錄。
- **每小時增量同步：** 對於重要資料，可每小時執行一次增量同步。Rclone 的差異偵測機制確保只傳輸有變更的檔案。
- **每週完整比對：** 排程每週使用 `--resync` 執行一次雙向同步（bisync），以捕捉任何差異。

**使用 cron 作為備援方案：**

如果您偏好系統層級的排程方式，也可以直接在 DietPi 上使用 cron：

```bash
crontab -e
```

新增類似以下的項目：

```
# Daily backup at 2 AM
0 2 * * * rclone sync /mnt/data remote:backup --log-file /var/log/rclone-backup.log

# Hourly sync of critical documents
0 * * * * rclone copy /home/dietpi/documents remote:documents --max-age 1h
```

## 低功耗裝置的資源優化

在 SBC 上運行 rclone 需要留意資源使用情況。以下是幾項關鍵的優化建議：

**記憶體管理：**

```bash
# Limit rclone's memory usage with transfer settings
rclone sync source: dest: \
  --transfers 2 \
  --checkers 4 \
  --buffer-size 16M \
  --drive-chunk-size 32M
```

在記憶體為 1 GB 的 Raspberry Pi 上，這些設定可以防止 rclone 佔用過多記憶體。記憶體 4 GB 以上的裝置可以使用更高的數值。

**I/O 優化：**

MicroSD 卡的寫入耐久度與速度有限。可考慮以下策略：

- **使用 USB SSD** 作為本機儲存與 rclone 快取。這能大幅提升傳輸速度，並延長儲存裝置的使用壽命。
- **謹慎啟用 rclone 的 VFS 快取。** 設定 `--vfs-cache-max-size` 來限制磁碟使用量。
- **將日誌寫入 tmpfs**，以避免不必要的 SD 卡寫入：

```bash
mkdir -p /tmp/rclone-logs
rclone sync source: dest: --log-file /tmp/rclone-logs/sync.log
```

**網路優化：**

```bash
# Limit bandwidth during peak hours
rclone sync source: dest: --bwlimit "08:00,512k 23:00,off"
```

這會在白天時段將頻寬限制為 512 KB/s，並在夜間解除限制。

**監控資源使用情況：**

使用 DietPi 內建的監控工具來留意您的同步站狀態：

```bash
# Check memory usage
dietpi-process_tool

# Monitor disk I/O
iotop -o

# View rclone transfer stats
rclone rc core/stats
```

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="transfer monitoring" class="img-large img-center" />

## 監控與疑難排解

**遠端監控傳輸狀態：**

在 RC 常駐程式運行的情況下，您可以在網路上的任何機器上透過 RcloneView 監控傳輸狀態。即時傳輸監控儀表板會顯示：

- 進行中的傳輸及其進度百分比
- 傳輸速度與預計完成時間
- 錯誤次數與重試狀態
- 頻寬使用情況

**DietPi 特有的常見問題：**

| 問題 | 解決方案 |
|-------|----------|
| OAuth 權杖過期 | 從桌上型電腦透過 RcloneView 的 OAuth 流程重新授權 |
| SD 卡 I/O 錯誤 | 改用 USB SSD 或減少寫入操作 |
| 大量同步時記憶體不足 | 降低 `--transfers` 與 `--buffer-size` |
| 長時間傳輸時網路中斷 | 啟用 `--retries 10 --low-level-retries 20` |
| Pi Zero 上傳輸速度過慢 | 限制為 `--transfers 1 --checkers 2` |

**檢視工作歷史記錄：**

RcloneView 會保留所有已執行工作的歷史記錄，方便您確認排程備份是否已成功完成。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="job history" class="img-large img-center" />

## 開始使用

在 DietPi 上設定 RcloneView，能將一台廉價的單板電腦轉變為專用的全天候雲端同步裝置。DietPi 的最低資源使用量與 RcloneView 直覺易用的 GUI 相結合，即使在資源最受限的硬體上，也能輕鬆管理雲端儲存。建議先從一個簡單的單一遠端同步工作開始，確認其能穩定運行，隨著信心的建立，再逐步擴展到多個遠端與自動化排程。

---

**相關指南：**
- [新增遠端儲存空間（以 Google Drive 為例）](https://rcloneview.com/support/howto/#step-2-adding-remote-storage-google-drive-example)
- [工作排程與執行](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)
- [搭配外部 Rclone 使用 RcloneView](https://rcloneview.com/support/tutorials/new-window-with-external-rclone)

<CloudSupportGrid />
