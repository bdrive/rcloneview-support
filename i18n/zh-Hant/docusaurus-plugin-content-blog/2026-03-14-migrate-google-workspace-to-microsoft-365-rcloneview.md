---
slug: migrate-google-workspace-to-microsoft-365-rcloneview
title: "將 Google Workspace 遷移至 Microsoft 365 —— 使用 RcloneView 將 Drive 檔案傳輸至 OneDrive 與 SharePoint"
authors:
  - tayson
description: "正要從 Google Workspace 切換到 Microsoft 365？了解如何使用 RcloneView 的視覺化傳輸工具，將 Google Drive 檔案遷移至 OneDrive 與 SharePoint，且不遺失任何資料。"
keywords:
  - google workspace to microsoft 365
  - migrate google drive to onedrive
  - google workspace migration
  - switch google to microsoft
  - google drive to sharepoint
  - workspace to office 365 migration
  - google to microsoft file transfer
  - enterprise cloud migration
  - google workspace exit
  - business cloud migration tool
tags:
  - google-drive
  - onedrive
  - sharepoint
  - migration
  - enterprise
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 將 Google Workspace 遷移至 Microsoft 365 —— 使用 RcloneView 將 Drive 檔案傳輸至 OneDrive 與 SharePoint

> 貴組織正在切換生態系統。Google Drive 中成千上萬的檔案需要完整、有條理且經過驗證地遷移到 OneDrive 與 SharePoint。以下是如何在不陷入混亂的情況下完成這項工作。

從 Google Workspace 遷移至 Microsoft 365 是最常見的企業遷移案例之一。真正的挑戰不在於決策本身，而在於資料。多年累積的文件、共用資料夾與團隊雲端硬碟儲存在 Google Drive 中，需要乾淨俐落地傳輸到 OneDrive 個人儲存空間與 SharePoint 團隊網站。RcloneView 讓這項遷移工作變得視覺化、可驗證且易於管理。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 遷移規劃

### 先規劃結構對應

在傳輸任何檔案之前，先規劃 Google Drive 結構如何對應到 Microsoft 365：

| Google Workspace | Microsoft 365 |
|-----------------|---------------|
| 我的雲端硬碟（個人） | OneDrive（個人） |
| 共用雲端硬碟 | SharePoint 文件庫 |
| 已與我共用 | 透過 OneDrive/SharePoint 共用 |

### 準備帳號

在 RcloneView 中連接 Google Workspace 與 Microsoft 365 兩個帳號：

<img src="/support/images/en/blog/new-remote.png" alt="Connect both cloud accounts" class="img-large img-center" />

## 逐步遷移

### 1) 傳輸個人檔案

在其中一個窗格開啟 Google Drive，在另一個窗格開啟 OneDrive。選取資料夾並進行傳輸：

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Google Drive to OneDrive transfer" class="img-large img-center" />

### 2) 將共用雲端硬碟遷移至 SharePoint

將每個 Google 共用雲端硬碟對應到相對應的 SharePoint 文件庫。為求結構清晰，請逐一傳輸。

### 3) 驗證每一次傳輸

這一步至關重要。使用「資料夾比對」功能確認所有檔案都已正確傳輸：

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify migration completeness" class="img-large img-center" />

### 4) 大規模遷移採分批處理

對於擁有數 TB 資料的組織，請為每個部門或共用雲端硬碟建立各自獨立的同步工作：

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Batch migration jobs" class="img-large img-center" />

### 5) 排程離峰時段傳輸

大規模遷移可能需要數天時間。請將傳輸排程在夜間與週末進行，以避免影響日常工作：

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule off-peak migration" class="img-large img-center" />

## 遷移後檢查清單

傳輸完成後，使用「資料夾比對」進行驗證，然後在過渡期內持續保留 Google Workspace 為啟用狀態。使用者可以在調整適應期間同時存取兩個平台上的檔案。

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 新增 **Google Workspace** 與 **Microsoft 365** 遠端。
3. **規劃你的資料夾結構**，從 Drive 對應到 OneDrive/SharePoint。
4. 透過同步工作**分批傳輸**。
5. 使用「資料夾比對」**驗證所有內容**。

一場乾淨俐落的遷移，從對的工具開始。

---

**相關指南：**

- [將 Google Drive 遷移至 OneDrive](https://rcloneview.com/support/blog/migrate-google-drive-to-onedrive-rcloneview)
- [將 OneDrive 遷移至 Google Drive](https://rcloneview.com/support/blog/migrate-onedrive-to-google-drive-rcloneview)
- [零停機雲端遷移](https://rcloneview.com/support/blog/migrate-cloud-storage-zero-downtime-rcloneview)

<CloudSupportGrid />
