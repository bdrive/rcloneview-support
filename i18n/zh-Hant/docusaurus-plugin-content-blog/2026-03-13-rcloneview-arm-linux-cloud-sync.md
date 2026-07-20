---
slug: rcloneview-arm-linux-cloud-sync
title: "在 ARM Linux 上執行 RcloneView — 於 Raspberry Pi、Orange Pi 和 ARM 伺服器上進行雲端同步"
authors:
  - tayson
description: "RcloneView 可在包括 Raspberry Pi、Orange Pi 以及 ARM 架構雲端伺服器在內的 ARM Linux 裝置上執行。在低功耗 ARM 硬體上設定雲端同步與備份。"
keywords:
  - rcloneview arm linux
  - rclone arm
  - raspberry pi cloud sync
  - arm linux cloud backup
  - orange pi cloud storage
  - arm server cloud sync
  - rcloneview raspberry pi
  - arm64 cloud management
  - low power cloud backup
  - arm linux file sync
tags:
  - RcloneView
  - arm
  - linux
  - raspberry-pi
  - platform
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 在 ARM Linux 上執行 RcloneView — 於 Raspberry Pi、Orange Pi 和 ARM 伺服器上進行雲端同步

> ARM 裝置無所不在——執行家用伺服器的 Raspberry Pi、作為媒體盒的 Orange Pi、雲端中的 ARM 執行個體。RcloneView 可在 ARM Linux 上執行，將完整的雲端儲存管理功能帶到低功耗硬體上。

ARM 處理器驅動著從單板電腦到雲端伺服器執行個體的一切設備。無論您是將 Raspberry Pi 用作家用備份伺服器、將 Orange Pi 用作 NAS 閘道，還是使用 ARM 架構的 VPS 進行雲端自動化，RcloneView 都能將其完整的雲端管理介面帶到 ARM Linux 上。從耗電極低的硬體管理 70 多個雲端服務提供商。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 支援的 ARM 平台

RcloneView 透過 rclone 的原生 ARM 版本支援 ARM Linux：

| 平台 | 架構 | 範例裝置 |
|----------|-------------|-----------------|
| ARM64 (aarch64) | 64 位元 | Raspberry Pi 4/5（64 位元作業系統）、Orange Pi 5、ARM 雲端 VPS |
| ARMv7 (armhf) | 32 位元 | Raspberry Pi 3/4（32 位元作業系統）、較舊款 Orange Pi |
| ARMv6 | 32 位元 | Raspberry Pi Zero、Pi 1 |

## 在 ARM Linux 上安裝

### 下載並安裝

從 RcloneView 網站下載對應的 ARM 版本。以執行 64 位元 Raspberry Pi OS 的 Raspberry Pi 4 為例：

<img src="/support/images/en/blog/new-remote.png" alt="Set up RcloneView on ARM" class="img-large img-center" />

### 驗證安裝

啟動 RcloneView 並新增您的第一個雲端遠端。此介面與 x86 版本完全相同——所有功能皆可在 ARM 上運作。

## ARM 雲端同步的使用情境

### 1) 作為備份閘道的 Raspberry Pi

將 Raspberry Pi 變成一台全天候運作的備份閘道，將您的 NAS 同步到雲端儲存：

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Raspberry Pi backup scheduler" class="img-large img-center" />

排程每晚將本機網路儲存的資料同步至 S3、Backblaze B2 或 Google Drive——所有作業都在一台功耗低於 5 瓦的裝置上執行。

### 2) 具備雲端備份功能的 Orange Pi 媒體伺服器

將 Orange Pi 用作具有自動雲端備份功能的媒體伺服器。本機儲存提供快速存取，雲端儲存則提供硬體故障時的保護。

### 3) 用於雲端對雲端自動化的 ARM VPS

ARM 架構的雲端執行個體（AWS Graviton、Oracle Cloud Ampere）比 x86 更便宜。在 ARM VPS 上執行 RcloneView，進行排程的雲端對雲端傳輸，而不必占用您的桌上型電腦。

### 4) 邊緣裝置資料收集

部署在現場的 ARM 裝置（氣象站、IoT 閘道、遠端辦公室）可以使用 RcloneView 自動將收集到的資料同步至雲端儲存。

## ARM 上的效能表現

ARM 裝置在雲端同步方面表現良好，因為瓶頸通常在於網路速度，而非 CPU。Raspberry Pi 4 在傳輸期間可以輕鬆跑滿 100 Mbps 的連線。

優化 ARM 效能的秘訣：

- **使用較少的並行傳輸數量**——ARM CPU 的核心數有限；2 到 4 個並行傳輸通常是最佳設定。
- **排程在離峰時段執行**——避免與同一裝置上執行的其他服務互相競爭資源。
- **利用工作歷程記錄進行監控**——追蹤傳輸速度並調整設定。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitor transfers on ARM" class="img-large img-center" />

## 無螢幕操作

對於沒有顯示器的 ARM 裝置，可執行 RcloneView 的後端並以遠端方式存取。這非常適合藏在 NAS 後方或安裝於伺服器機架中的 Raspberry Pi。

## 驗證您的同步結果

即使在低功耗硬體上，資料夾比對功能依然可用，能驗證雲端備份與本機檔案是否一致：

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify sync on ARM device" class="img-large img-center" />

## 開始使用

1. **下載適用於 ARM Linux 的 RcloneView**，網址為 [rcloneview.com](https://rcloneview.com/src/download.html)。
2. **新增您的雲端帳戶**——設定方式與其他平台相同。
3. **建立同步工作**以進行自動化備份。
4. **排程後即可放心交給它**——讓您的 ARM 裝置全天候處理雲端同步。

以小巧硬體實現強大的雲端管理。

---

**相關指南：**

- [在 Raspberry Pi 上執行 RcloneView](https://rcloneview.com/support/blog/rcloneview-on-raspberry-pi-cloud-backup-rcloneview)
- [在 Docker 中執行 RcloneView](https://rcloneview.com/support/blog/run-rcloneview-docker-container-cloud-sync)
- [工作排程](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)

<CloudSupportGrid />
