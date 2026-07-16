---
slug: migrate-onedrive-business-to-google-shared-drives-rcloneview
title: "將 OneDrive for Business 遷移至 Google 共用雲端硬碟 — 使用 RcloneView 進行企業檔案傳輸"
authors:
  - tayson
description: "正在從 Microsoft 365 OneDrive 轉移到 Google 共用雲端硬碟？使用 RcloneView 傳輸業務檔案、團隊資料夾和部門資料，並進行完整驗證。"
keywords:
  - onedrive business to google drive
  - migrate onedrive to shared drive
  - onedrive business migration
  - microsoft to google drive transfer
  - onedrive to google workspace
  - enterprise onedrive migration
  - onedrive business to gdrive
  - switch onedrive to google
  - office 365 to google migration
  - business cloud migration
tags:
  - RcloneView
  - onedrive
  - google-drive
  - migration
  - enterprise
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 將 OneDrive for Business 遷移至 Google 共用雲端硬碟 — 使用 RcloneView 進行企業檔案傳輸

> 整個部門在 OneDrive for Business 上的檔案需要移轉到 Google 共用雲端硬碟。手動下載再上傳在這種規模下根本不可行。RcloneView 能以視覺化方式分批處理，並附帶驗證機制。

隨著組織整合平台，OneDrive for Business 與 Google 共用雲端硬碟之間的企業遷移越來越常見。挑戰在於規模——數百名使用者、數 TB 的資料，以及零資料遺失的要求。RcloneView 原生連接兩個平台，並提供受控且可驗證的遷移工具。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 遷移對照表

| OneDrive for Business | Google Workspace |
|----------------------|-----------------|
| 使用者的 OneDrive | 我的雲端硬碟 |
| 團隊網站／文件庫 | 共用雲端硬碟 |
| 共用資料夾 | 共用雲端硬碟資料夾 |

## 連接兩個平台

<img src="/support/images/en/blog/new-remote.png" alt="Connect OneDrive and Google Drive" class="img-large img-center" />

## 遷移步驟

### 1) 依部門傳輸

在一側面板開啟 OneDrive，另一側開啟 Google 共用雲端硬碟。按部門逐一遷移：

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="OneDrive to Google Drive" class="img-large img-center" />

### 2) 於夜間排程大批次作業

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule overnight migration" class="img-large img-center" />

### 3) 監控進度

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitor migration" class="img-large img-center" />

### 4) 驗證每個批次

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify migration" class="img-large img-center" />

## 遷移後作業

- 保留 OneDrive 啟用狀態 2-4 週作為過渡緩衝期
- 執行最終的資料夾比對
- 將使用者導向 Google 雲端硬碟
- 停用 OneDrive 帳戶

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 新增 **OneDrive Business** 與 **Google Workspace** 遠端。
3. **依部門逐一遷移**。
4. **驗證並完成切換**。

企業遷移，視覺化掌控。

---

**相關指南：**

- [將 OneDrive 遷移至 Google 雲端硬碟](https://rcloneview.com/support/blog/migrate-onedrive-to-google-drive-rcloneview)
- [將 SharePoint 遷移至 Google 雲端硬碟](https://rcloneview.com/support/blog/migrate-sharepoint-to-google-drive-rcloneview)
- [零停機雲端遷移](https://rcloneview.com/support/blog/migrate-cloud-storage-zero-downtime-rcloneview)

<CloudSupportGrid />
