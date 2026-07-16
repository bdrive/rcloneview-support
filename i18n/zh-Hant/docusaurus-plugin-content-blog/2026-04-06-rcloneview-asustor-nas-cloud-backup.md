---
slug: rcloneview-asustor-nas-cloud-backup
title: "在 ASUSTOR NAS 上執行 RcloneView 以實現自動化雲端備份"
authors:
  - tayson
description: "ASUSTOR NAS 裝置的效能足以透過 Docker 執行 RcloneView。直接從你的 NAS 設定自動化雲端備份、掛載遠端儲存空間並監控傳輸狀態。"
keywords:
  - rcloneview asustor nas
  - asustor nas cloud backup
  - asustor docker rcloneview
  - asustor cloud sync alternative
  - asustor nas rclone gui
  - asustor automated backup cloud
  - asustor mount cloud storage
  - asustor nas s3 backup
  - asustor cloud file manager
  - rcloneview nas setup
tags:
  - nas
  - platform
  - cloud-backup
  - automation
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 在 ASUSTOR NAS 上執行 RcloneView 以實現自動化雲端備份

> 你的 ASUSTOR NAS 全年無休運作——讓它成為你的常駐雲端備份引擎。RcloneView 能將你的 NAS 轉變為多雲端檔案管理中樞，具備排程備份、雲端掛載與即時傳輸監控功能。

ASUSTOR NAS 裝置搭載 Intel 或 ARM 處理器，執行 ADM（ASUSTOR Data Master）作業系統，並透過 Portainer 應用程式或命令列支援 Docker。這使它們能夠以容器化服務的形式執行 RcloneView——全天候運作、持續備份，且不會占用桌上型電腦或筆記型電腦的資源。無論你是想將 NAS 共享資料夾備份到 Backblaze B2、與 Google Drive 同步資料夾，或是將 S3 掛載為本機磁碟區，ASUSTOR NAS 上的 RcloneView 都能透過網頁版 GUI 一手包辦。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 為何要在 NAS 上執行雲端備份

相較於在工作站上執行雲端備份，直接在 NAS 上執行有幾項優勢：

- **全天候運作** — 你的 NAS 本來就是全年無休運作的。備份可依排程執行，不需要 PC 保持開機狀態。
- **區域網路速度存取 NAS 資料** — 不需要先透過網路將檔案拉到 PC 再上傳。NAS 直接從自己的磁碟讀取資料。
- **集中管理** — 所有備份任務、排程與日誌都存放在 NAS 上。任何具備瀏覽器的裝置都能進行管理。
- **不佔用工作站資源** — 將大量傳輸的 CPU 與頻寬成本轉移到 NAS 上。

## ASUSTOR NAS 相容性

透過 Docker 執行的 RcloneView 可在以下 ASUSTOR 機型上運作：

- **Intel 架構**（x86_64）處理器：AS31、AS32、AS33、AS52、AS54、AS61、AS62、AS63、AS64、AS65、AS67、Lockerstor、Lockerstor Pro 以及 Flashstor 系列。
- **ARM 架構**處理器：Drivestor 與 Drivestor Pro 系列（AS11、AS33 ARM 版本）——請確認你的特定機型是否支援 Docker。
- **ADM 4.0 或更新版本**，並已從 App Central 安裝 Docker（Portainer）。
- 建議**至少 2 GB RAM**（若需同時進行大型傳輸，建議 4 GB 以上）。

## 透過 Docker 安裝 RcloneView

### 步驟 1 — 從 App Central 安裝 Docker

1. 在你的 ADM 網頁介面中開啟 **App Central**。
2. 搜尋 **Portainer**（若可用，也可搜尋 Docker-CE）。
3. 安裝並啟動 Portainer 應用程式。

### 步驟 2 — 部署 RcloneView 容器

在 `http://your-nas-ip:9443` 開啟 Portainer 並建立新容器，或使用 SSH 透過命令列部署：

```bash
docker run -d \
  --name rcloneview \
  -p 5572:5572 \
  -v /volume1/Docker/rcloneview/config:/config/rclone \
  -v /volume1:/data/volume1 \
  --restart unless-stopped \
  rcloneview/rcloneview:latest
```

主要的磁碟區對應：

- `/volume1/Docker/rcloneview/config` — 永久儲存你的 rclone 遠端設定。
- `/volume1` — 將你的主要 NAS 磁碟區暴露給 RcloneView 以進行備份作業。

### 步驟 3 — 存取網頁介面

開啟瀏覽器並前往 `http://your-nas-ip:5572`。你應該會看到 RcloneView 儀表板。

<img src="/support/images/en/blog/new-remote.png" alt="RcloneView new remote setup on ASUSTOR NAS" class="img-large img-center" />

## 連接雲端遠端

在 RcloneView 介面中，新增你的雲端儲存供應商：

### NAS 備份的常見設定

- **Backblaze B2** — 大型 NAS 備份的高性價比選擇，每月每 TB 6 美元。
- **Wasabi** — 固定費率的 S3 相容儲存服務，無資料傳出費用。
- **Google Drive** — 在 NAS 與 Drive 之間同步重要資料夾。
- **Amazon S3** — 具備彈性儲存等級的企業級耐用性。
- **SFTP** — 備份到遠端伺服器或第二台 NAS。

每個遠端只需設定一次即可永久保存。設定精靈會引導你完成各供應商的驗證流程——S3 相容服務使用 API 金鑰，Google Drive 與 OneDrive 則使用 OAuth。

## 排程自動化備份

在 NAS 上執行 RcloneView 的核心價值在於自動化、無人值守的備份。以下說明如何設定：

### 建立備份任務

1. 開啟 RcloneView 的雙窗格檔案總管。
2. 將左側窗格設為你的 NAS 本機路徑（例如 `/data/volume1/Photos`）。
3. 將右側窗格設為你的雲端遠端（例如 `backblaze-b2:nas-backup/photos/`）。
4. 選擇 **Sync**（同步）以將 NAS 資料夾鏡像到雲端，或選擇 **Copy**（複製）以新增檔案而不移除已刪除的內容。
5. 將此操作儲存為具名任務。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Run a backup job on ASUSTOR NAS with RcloneView" class="img-large img-center" />

### 排程任務

設定任務自動執行：

- **每天凌晨 2:00** — 在使用率低的時段進行備份，避免影響 NAS 效能。
- **每週完整同步** — 在頻寬需求最低的週末進行全面同步。
- **依需求執行** — 在進行重大變更前手動觸發備份。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule automated cloud backups on ASUSTOR NAS" class="img-large img-center" />

## 掛載雲端儲存空間

RcloneView 可以將雲端儲存空間掛載為 NAS 上的本機路徑，讓遠端檔案就像存放在本機磁碟上一樣可供存取。這在以下情境中非常實用：

- **擴充 NAS 容量**，運用雲端儲存空間。
- **存取封存檔案**，而不需要手動下載。
- **串流媒體**，透過 NAS 媒體應用程式從雲端儲存空間播放。

若要在 Docker 中啟用 FUSE 掛載，請在容器中加入以下旗標：

```bash
--device /dev/fuse --cap-add SYS_ADMIN
```

接著使用 RcloneView 的掛載管理員（Mount Manager）將任何遠端掛載到本機路徑。

## 監控傳輸狀態

備份任務執行時，RcloneView 的傳輸監控功能會顯示即時進度：

- 目前正在傳輸的檔案
- 傳輸速度與預估完成時間
- 錯誤與重試次數
- 已完成的檔案數量

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitor NAS cloud backup progress in RcloneView" class="img-large img-center" />

檢查任務歷史記錄，確認排程備份是否成功完成。若任務失敗（例如網路中斷、憑證過期），RcloneView 會記錄錯誤以供疑難排解。

## ASUSTOR NAS 備份的最佳實務

- **從最重要的資料開始** — 優先處理照片、文件與資料庫，媒體庫可以之後再處理。
- **在上班時段使用頻寬限制**，避免佔滿你的網路連線：在任務選項中設定 `--bwlimit 10M`。
- **在雲端儲存空間啟用版本控制**，以防範勒索軟體或意外覆寫。
- **備份你的 rclone 設定** — `/config/rclone` 目錄包含你的雲端憑證，請將其複製到第二個位置。
- **監控磁碟健康狀態** — 如果 NAS 磁碟在備份執行前就故障，雲端備份也無濟於事。請使用 ADM 的儲存空間管理員（Storage Manager）警示功能。

## 開始使用

1. **從 ASUSTOR App Central 安裝 Portainer**。
2. **使用上述磁碟區對應部署 RcloneView Docker 容器**。
3. **新增你的雲端遠端** — Backblaze B2、S3、Google Drive 或任何支援的供應商。
4. **為最重要的 NAS 共享資料夾建立並排程備份任務**。
5. **每週檢查任務歷史記錄**，確認一切運作順暢。

你的 ASUSTOR NAS 已透過 RAID 在本機保護你的資料。加上 RcloneView 的自動化雲端備份，能為你提供真正的異地保護——而且完全自動運作。

---

**相關指南：**

- [雲端到 NAS 橋接：備份到 Synology](https://rcloneview.com/support/blog/cloud-to-synology-nas-with-rcloneview)
- [在 TrueNAS 上執行 RcloneView](https://rcloneview.com/support/blog/rcloneview-truenas-cloud-backup)
- [自動化每日雲端備份](https://rcloneview.com/support/blog/automate-daily-cloud-backups-with-rcloneview)

<CloudSupportGrid />
