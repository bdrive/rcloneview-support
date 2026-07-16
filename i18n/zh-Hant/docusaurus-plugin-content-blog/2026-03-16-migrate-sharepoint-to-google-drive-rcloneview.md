---
slug: migrate-sharepoint-to-google-drive-rcloneview
title: "將 SharePoint 遷移至 Google Drive — 用 RcloneView 傳輸文件庫"
authors:
  - tayson
description: "正在從 Microsoft 365 轉換到 Google Workspace？使用 RcloneView 將 SharePoint 文件庫與 OneDrive 檔案傳輸到 Google Drive 與共用雲端硬碟。"
keywords:
  - sharepoint to google drive
  - migrate sharepoint to gdrive
  - sharepoint migration tool
  - microsoft to google migration
  - sharepoint to google workspace
  - sharepoint document library transfer
  - office 365 to google
  - sharepoint google drive sync
  - cross platform cloud migration
  - enterprise cloud migration
tags:
  - RcloneView
  - sharepoint
  - google-drive
  - migration
  - enterprise
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 將 SharePoint 遷移至 Google Drive — 用 RcloneView 傳輸文件庫

> 貴組織正從 Microsoft 365 轉換到 Google Workspace。SharePoint 文件庫、OneDrive 個人檔案，以及多年累積的團隊文件，全都需要完整地遷移到 Google Drive。以下是操作方法。

從 SharePoint 遷移到 Google Drive，是最常見企業雲端遷移的反向操作之一。無論是出於成本考量、平台偏好，或組織變動而促成，挑戰都是相同的：結構化文件庫中的數千個檔案，必須乾淨俐落地傳輸到 Google Drive 與共用雲端硬碟。RcloneView 原生支援雙方平台。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 規劃遷移

### 結構對應

| SharePoint | Google Workspace |
|-----------|-----------------|
| 文件庫 | 共用雲端硬碟 |
| OneDrive（個人） | 我的雲端硬碟（個人） |
| 團隊網站 | 各團隊的共用雲端硬碟 |
| 共用檔案 | 共用雲端硬碟資料夾 |

### 連接兩個平台

<img src="/support/images/en/blog/new-remote.png" alt="Connect SharePoint and Google Drive" class="img-large img-center" />

在 RcloneView 中新增你的 SharePoint/OneDrive 與 Google Drive 帳戶。

## 遷移步驟

### 1）傳輸文件庫

在其中一個窗格開啟 SharePoint，另一個窗格開啟 Google 共用雲端硬碟。逐一文件庫傳輸：

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="SharePoint to Google Drive transfer" class="img-large img-center" />

### 2）遷移個人 OneDrive 檔案

每位使用者的 OneDrive 檔案，會移動到其 Google Drive 的「我的雲端硬碟」。

### 3）驗證完整性

資料夾比較功能可確認所有檔案都已傳輸完成：

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify migration" class="img-large img-center" />

### 4）安排大型遷移於夜間執行

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule overnight migration" class="img-large img-center" />

### 5）監控進度

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitor migration progress" class="img-large img-center" />

## 重要注意事項

- **檔案格式轉換**：Google 可原生檢視 Office 檔案；轉換為 Google 文件格式為選擇性
- **權限對應**：檔案權限不會自動遷移 — 請另外規劃你的共用雲端硬碟權限
- **路徑長度**：SharePoint 允許的路徑長度比部分人預期的更長；請先確認相容性
- **大型文件庫**：依部門或專案拆分成批次處理

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 新增 **SharePoint** 與 **Google Drive** 遠端。
3. 將**文件庫對應**到共用雲端硬碟。
4. 分批**傳輸並驗證**。

平台順利轉換，資料零遺失。

---

**相關指南：**

- [將 Google Workspace 遷移至 Microsoft 365](https://rcloneview.com/support/blog/migrate-google-workspace-to-microsoft-365-rcloneview)
- [零停機雲端遷移](https://rcloneview.com/support/blog/migrate-cloud-storage-zero-downtime-rcloneview)
- [比較資料夾內容](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)

<CloudSupportGrid />
