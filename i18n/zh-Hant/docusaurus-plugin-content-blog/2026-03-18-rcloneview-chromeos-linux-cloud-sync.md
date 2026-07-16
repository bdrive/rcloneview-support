---
slug: rcloneview-chromeos-linux-cloud-sync
title: "在 ChromeOS 上執行 RcloneView — 透過 Linux 在 Chromebook 上進行雲端同步"
authors:
  - tayson
description: "ChromeOS 支援 Linux 應用程式。在你的 Chromebook 上執行 RcloneView，管理 Google Drive 以外的雲端儲存 — 與 S3、OneDrive、Dropbox 及 70 多種服務供應商同步。"
keywords:
  - chromeos cloud sync
  - chromebook cloud storage
  - rcloneview chromebook
  - chromeos rclone
  - chromebook file manager
  - chromeos linux apps
  - chromebook multi cloud
  - chromeos s3 sync
  - chromebook onedrive
  - chromeos cloud management
tags:
  - linux
  - platform
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 在 ChromeOS 上執行 RcloneView — 透過 Linux 在 Chromebook 上進行雲端同步

> Chromebook 非常適合搭配 Google Drive 使用。但如果是 OneDrive、S3、Dropbox 或你的 NAS 呢？ChromeOS 的 Linux 支援讓你能在 Chromebook 上執行 RcloneView，實現完整的多雲端管理。

Chromebook 的設計以 Google Drive 為核心，但許多使用者需要存取其他雲端服務供應商。學生可能有學校提供的 OneDrive，專業人士需要存取 S3，而從其他平台轉換過來的使用者則有檔案存放在別處。ChromeOS 的 Linux（Crostini）環境讓你能安裝 RcloneView，從 Chromebook 管理所有雲端帳戶。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 在 ChromeOS 上啟用 Linux

ChromeOS 內建 Linux 環境（Crostini）。可在「設定」→「進階」→「開發人員」→「Linux 開發環境」中啟用。

啟用後，你將擁有一個完整的 Debian 基礎 Linux 環境，RcloneView 可在其中原生執行。

## 安裝 RcloneView

使用標準的 Linux 安裝方式進行安裝。你的 Chromebook 的 Linux 容器擁有自己的檔案系統，並可存取 ChromeOS 的「下載」資料夾。

<img src="/support/images/en/blog/new-remote.png" alt="Set up RcloneView on ChromeOS" class="img-large img-center" />

## 你能做什麼

### 在單一介面管理所有雲端

在同一介面中瀏覽 Google Drive、OneDrive、S3、Dropbox 及 70 多種服務供應商：

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Multi-cloud on Chromebook" class="img-large img-center" />

### 在服務供應商之間傳輸

在任意兩個雲端帳戶之間搬移檔案，無需先下載到本機 — 這在本機儲存空間有限的 Chromebook 上尤其重要。

### 備份非 Google 的雲端服務

排程將 OneDrive 或 Dropbox 的內容備份到 Google Drive 或 S3：

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule backup on Chromebook" class="img-large img-center" />

### 掛載雲端儲存

將遠端儲存掛載為本機磁碟，可從 ChromeOS 檔案管理員存取。

## ChromeOS 專屬提示

- **儲存空間有限** — Chromebook 的 SSD 容量較小；請使用雲端對雲端傳輸，避免佔滿本機儲存空間
- **Linux 容器與「下載」資料夾共用** — ChromeOS「下載」資料夾中的檔案可從 Linux 存取
- **為 Linux 容器配置足夠的磁碟空間**以供快取使用
- **保持 Linux 更新** — 定期執行 `sudo apt update && sudo apt upgrade`

## 開始使用

1. 在 ChromeOS 設定中**啟用 Linux**。
2. 依照 Linux 安裝指南**安裝 RcloneView**。
3. **新增你的雲端帳戶**。
4. **管理、同步與傳輸** — 一切都在你的 Chromebook 上完成。

你的 Chromebook 就此成為多雲端工作站。

---

**相關指南：**

- [在 Ubuntu/Debian 上安裝 RcloneView](https://rcloneview.com/support/blog/install-rcloneview-ubuntu-debian-linux)
- [在 ARM Linux 上使用 RcloneView](https://rcloneview.com/support/blog/rcloneview-arm-linux-cloud-sync)
- [在 WSL 上使用 RcloneView](https://rcloneview.com/support/blog/rcloneview-wsl-windows-subsystem-linux)

<CloudSupportGrid />
