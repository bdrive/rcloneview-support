---
slug: rcloneview-wsl-windows-subsystem-linux
title: "在 WSL 上執行 RcloneView — 從 Windows Subsystem for Linux 進行雲端同步"
authors:
  - tayson
description: "WSL 讓你在 Windows 上擁有 Linux 環境。在 WSL 內執行 RcloneView，享有 Linux 原生的雲端同步效能，同時維持既有的 Windows 工作流程。"
keywords:
  - rcloneview wsl
  - wsl cloud sync
  - windows subsystem linux cloud
  - rclone wsl
  - wsl file sync
  - wsl cloud backup
  - wsl rcloneview setup
  - linux on windows cloud
  - wsl2 cloud storage
  - wsl file management
tags:
  - RcloneView
  - linux
  - windows
  - platform
  - guide
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 在 WSL 上執行 RcloneView — 從 Windows Subsystem for Linux 進行雲端同步

> 想在不離開 Windows 的情況下獲得 Linux 原生的 rclone 效能嗎？WSL2 提供完整的 Linux 核心。RcloneView 可在其中執行，結合 Linux 的穩定性與 Windows 的便利性。

Windows Subsystem for Linux（WSL2）提供與 Windows 並行運作的真正 Linux 核心。對於偏好 Linux 工具但在 Windows 環境中工作的使用者而言，WSL2 兼具兩者的優點。RcloneView 可在 WSL 內原生執行，帶給你 Linux 等級的雲端同步效能，同時能同時存取 Windows 與 Linux 檔案系統。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 為什麼要用 WSL 進行雲端同步？

### Linux 原生效能

在某些操作上，rclone 的 Linux 版本效能往往優於 Windows 版本，尤其是 FUSE 掛載與高並行傳輸。

### 腳本整合

WSL 提供 bash、cron 與標準 Linux 工具。將 RcloneView 的圖形介面與命令列腳本結合，即可實現進階的工作流程。

### 存取 Windows 檔案

WSL2 可透過 `/mnt/c/`、`/mnt/d/` 等路徑存取你的 Windows 檔案系統。使用 Linux 工具將 Windows 檔案同步至雲端儲存。

### 從 Windows 存取 Linux 檔案

Windows 可透過 `\\wsl$\` 網路路徑存取 WSL 檔案。由 RcloneView 在 WSL 中管理的檔案，也能從 Windows 應用程式存取。

## 安裝

依照 Linux 安裝步驟，在你的 WSL2 發行版（Ubuntu、Debian 等）內安裝 RcloneView：

<img src="/support/images/en/blog/new-remote.png" alt="Set up RcloneView in WSL" class="img-large img-center" />

## 主要工作流程

### 將 Windows 文件同步至雲端

從 WSL 存取你的 Windows「文件」資料夾，並同步至雲端儲存：

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Sync Windows files via WSL" class="img-large img-center" />

### 使用 cron 或 RcloneView 排程器排程

使用 Linux cron 或 RcloneView 內建的排程器，來執行自動化工作：

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule cloud sync in WSL" class="img-large img-center" />

### 掛載雲端儲存

在 WSL 內透過 FUSE 掛載雲端儲存，接著即可從 Linux 與 Windows 應用程式存取該掛載路徑。

### 跨平台開發備份

使用 WSL 進行程式開發的開發者，可以自動將 WSL 專案檔案備份至雲端儲存：

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Back up dev projects" class="img-large img-center" />

## WSL 使用小技巧

- **使用 WSL2**（而非 WSL1），以獲得完整的 Linux 核心支援與更佳的檔案系統效能
- **將 Linux 檔案存放於 WSL 檔案系統中**以獲得最佳效能——存取 `/mnt/c/` 的速度較慢
- **在 `.wslconfig` 中分配足夠的記憶體**給 WSL2，以應付大型傳輸作業
- **使用 systemd**（近期的 WSL2 版本已支援）來執行服務

## 開始使用

1. **安裝 WSL2**，並選擇 Ubuntu 或你偏好的發行版。
2. 依照 Linux 安裝指南**安裝 RcloneView**。
3. 在遠端管理員中**新增你的雲端帳戶**。
4. 從你的 WSL 環境中**進行同步、掛載與排程**。

Linux 工具、Windows 桌面，雲端無所不在。

---

**相關指南：**

- [在 Ubuntu/Debian 上安裝 RcloneView](https://rcloneview.com/support/blog/install-rcloneview-ubuntu-debian-linux)
- [在 ARM Linux 上使用 RcloneView](https://rcloneview.com/support/blog/rcloneview-arm-linux-cloud-sync)
- [在 Docker 中執行 RcloneView](https://rcloneview.com/support/blog/run-rcloneview-docker-container-cloud-sync)

<CloudSupportGrid />
